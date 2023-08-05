/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2020, Erik Moqvist
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * This file is part of the Messi project.
 */

#include "messi.h"
#include "my_protocol_client.h"

static void reset_message(struct my_protocol_client_t *self_p)
{
    self_p->message.state = my_protocol_client_input_state_header_t;
    self_p->message.size = 0;
    self_p->message.left = sizeof(struct messi_header_t);
}

static void handle_message_user(struct my_protocol_client_t *self_p)
{
    int res;
    struct my_protocol_server_to_client_t *message_p;
    uint8_t *payload_buf_p;
    size_t payload_size;

    self_p->input.message_p = my_protocol_server_to_client_new(
        &self_p->input.workspace.buf_p[0],
        self_p->input.workspace.size);
    message_p = self_p->input.message_p;

    if (message_p == NULL) {
        return;
    }

    payload_buf_p = &self_p->message.data.buf_p[sizeof(struct messi_header_t)];
    payload_size = self_p->message.size - sizeof(struct messi_header_t);

    res = my_protocol_server_to_client_decode(message_p, payload_buf_p, payload_size);

    if (res != (int)payload_size) {
        return;
    }

    switch (message_p->messages.choice) {

    case my_protocol_server_to_client_messages_choice_foo_rsp_e:
        self_p->on_foo_rsp(
            self_p,
            &message_p->messages.value.foo_rsp);
        break;

    case my_protocol_server_to_client_messages_choice_fie_req_e:
        self_p->on_fie_req(
            self_p,
            &message_p->messages.value.fie_req);
        break;

    default:
        break;
    }
}

static void handle_message_pong(struct my_protocol_client_t *self_p)
{
    self_p->pong_received = true;
}

static void handle_message(struct my_protocol_client_t *self_p,
                           uint32_t type)
{
    switch (type) {

    case MESSI_MESSAGE_TYPE_SERVER_TO_CLIENT_USER:
        handle_message_user(self_p);
        break;

    case MESSI_MESSAGE_TYPE_PONG:
        handle_message_pong(self_p);
        break;

    default:
        break;
    }
}

static void on_keep_alive_timeout(struct my_protocol_client_t *self_p)
{
    struct messi_header_t header;

    if (self_p->pong_received) {
        async_timer_start(&self_p->keep_alive_timer);
        self_p->pong_received = false;
        messi_header_create(&header, MESSI_MESSAGE_TYPE_PING, 0);
        async_stcp_client_write(&self_p->stcp, &header, sizeof(header));
    } else {
        async_stcp_client_disconnect(&self_p->stcp);
        self_p->on_disconnected(self_p);
    }
}

static void on_stcp_connected(struct async_stcp_client_t *stcp_p,
                              int res)
{
    struct my_protocol_client_t *self_p;

    self_p = async_container_of(stcp_p, typeof(*self_p), stcp);

    if (res == 0) {
        async_timer_start(&self_p->keep_alive_timer);
        self_p->pong_received = true;
        self_p->on_connected(self_p);
    } else {
        async_timer_start(&self_p->reconnect_timer);
    }
}

static void on_stcp_disconnected(struct async_stcp_client_t *stcp_p)
{
    struct my_protocol_client_t *self_p;

    self_p = async_container_of(stcp_p, typeof(*self_p), stcp);

    async_timer_stop(&self_p->keep_alive_timer);
    self_p->on_disconnected(self_p);
    async_timer_start(&self_p->reconnect_timer);
}

static void on_stcp_input(struct async_stcp_client_t *stcp_p)
{
    ssize_t size;
    struct messi_header_t *header_p;
    struct my_protocol_client_t *self_p;

    self_p = async_container_of(stcp_p, typeof(*self_p), stcp);

    header_p = (struct messi_header_t *)self_p->message.data.buf_p;

    while (true) {
        size = async_stcp_client_read(
            stcp_p,
            &self_p->message.data.buf_p[self_p->message.size],
            self_p->message.left);

        if (size == 0) {
            break;
        }

        self_p->message.size += size;
        self_p->message.left -= size;

        if (self_p->message.left > 0) {
            continue;
        }

        if (self_p->message.state == my_protocol_client_input_state_header_t) {
            self_p->message.left = messi_header_get_size(header_p);
            self_p->message.state = my_protocol_client_input_state_payload_t;
        }

        if (self_p->message.left == 0) {
            handle_message(self_p, header_p->type);
            reset_message(self_p);
        }
    }
}

static void on_connected_default(struct my_protocol_client_t *self_p)
{
        (void)self_p;
}

static void on_disconnected_default(struct my_protocol_client_t *self_p)
{
        (void)self_p;
}

static void on_foo_rsp_default(
    struct my_protocol_client_t *self_p,
    struct my_protocol_foo_rsp_t *message_p)
{
    (void)self_p;
    (void)message_p;
}
static void on_fie_req_default(
    struct my_protocol_client_t *self_p,
    struct my_protocol_fie_req_t *message_p)
{
    (void)self_p;
    (void)message_p;
}

int my_protocol_client_init(
    struct my_protocol_client_t *self_p,
    const char *user_p,
    const char *server_uri_p,
    uint8_t *message_buf_p,
    size_t message_size,
    uint8_t *workspace_in_buf_p,
    size_t workspace_in_size,
    uint8_t *workspace_out_buf_p,
    size_t workspace_out_size,
    my_protocol_client_on_connected_t on_connected,
    my_protocol_client_on_disconnected_t on_disconnected,
    my_protocol_client_on_foo_rsp_t on_foo_rsp,
    my_protocol_client_on_fie_req_t on_fie_req,
    struct async_t *async_p)
{
    int res;

    if (on_foo_rsp == NULL) {
        on_foo_rsp = on_foo_rsp_default;
    }

    if (on_fie_req == NULL) {
        on_fie_req = on_fie_req_default;
    }

    if (on_connected == NULL) {
        on_connected = on_connected_default;
    }

    if (on_disconnected == NULL) {
        on_disconnected = on_disconnected_default;
    }

    self_p->user_p = (char *)user_p;

    res = messi_parse_tcp_uri(server_uri_p,
                              &self_p->server.address[0],
                              sizeof(self_p->server.address),
                              &self_p->server.port);

    if (res != 0) {
        return (res);
    }

    self_p->on_connected = on_connected;
    self_p->on_disconnected = on_disconnected;
    self_p->on_foo_rsp = on_foo_rsp;
    self_p->on_fie_req = on_fie_req;
    self_p->message.data.buf_p = message_buf_p;
    self_p->message.data.size = message_size;
    reset_message(self_p);
    self_p->input.workspace.buf_p = workspace_in_buf_p;
    self_p->input.workspace.size = workspace_in_size;
    self_p->output.workspace.buf_p = workspace_out_buf_p;
    self_p->output.workspace.size = workspace_out_size;
    async_stcp_client_init(&self_p->stcp,
                           NULL,
                           on_stcp_connected,
                           on_stcp_disconnected,
                           on_stcp_input,
                           async_p);
    async_timer_init(&self_p->keep_alive_timer,
                     (async_timer_timeout_t)on_keep_alive_timeout,
                     self_p,
                     2000,
                     0,
                     async_p);
    async_timer_init(&self_p->reconnect_timer,
                     (async_timer_timeout_t)my_protocol_client_start,
                     self_p,
                     1000,
                     0,
                     async_p);

    return (0);
}

void my_protocol_client_start(struct my_protocol_client_t *self_p)
{
    async_stcp_client_connect(&self_p->stcp,
                              &self_p->server.address[0],
                              self_p->server.port);
}

void my_protocol_client_stop(struct my_protocol_client_t *self_p)
{
    async_stcp_client_disconnect(&self_p->stcp);
    async_timer_stop(&self_p->reconnect_timer);
    async_timer_stop(&self_p->keep_alive_timer);
}

void my_protocol_client_send(struct my_protocol_client_t *self_p)
{
    int res;
    struct messi_header_t *header_p;

    res = my_protocol_client_to_server_encode(
        self_p->output.message_p,
        &self_p->message.data.buf_p[sizeof(*header_p)],
        self_p->message.data.size - sizeof(*header_p));

    if (res < 0) {
        return;
    }

    header_p = (struct messi_header_t *)&self_p->message.data.buf_p[0];
    messi_header_create(header_p, MESSI_MESSAGE_TYPE_CLIENT_TO_SERVER_USER, res);
    async_stcp_client_write(&self_p->stcp,
                            &self_p->message.data.buf_p[0],
                            res + sizeof(*header_p));
}

struct my_protocol_foo_req_t *
my_protocol_client_init_foo_req(struct my_protocol_client_t *self_p)
{
    self_p->output.message_p = my_protocol_client_to_server_new(
        &self_p->output.workspace.buf_p[0],
        self_p->output.workspace.size);
    my_protocol_client_to_server_messages_foo_req_init(self_p->output.message_p);

    return (&self_p->output.message_p->messages.value.foo_req);
}

struct my_protocol_bar_ind_t *
my_protocol_client_init_bar_ind(struct my_protocol_client_t *self_p)
{
    self_p->output.message_p = my_protocol_client_to_server_new(
        &self_p->output.workspace.buf_p[0],
        self_p->output.workspace.size);
    my_protocol_client_to_server_messages_bar_ind_init(self_p->output.message_p);

    return (&self_p->output.message_p->messages.value.bar_ind);
}

struct my_protocol_fie_rsp_t *
my_protocol_client_init_fie_rsp(struct my_protocol_client_t *self_p)
{
    self_p->output.message_p = my_protocol_client_to_server_new(
        &self_p->output.workspace.buf_p[0],
        self_p->output.workspace.size);
    my_protocol_client_to_server_messages_fie_rsp_init(self_p->output.message_p);

    return (&self_p->output.message_p->messages.value.fie_rsp);
}

