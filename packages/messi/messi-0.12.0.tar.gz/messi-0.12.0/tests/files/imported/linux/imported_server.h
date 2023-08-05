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

#ifndef IMPORTED_SERVER_H
#define IMPORTED_SERVER_H

#include <stdint.h>
#include "messi.h"
#include "imported.h"

struct imported_server_t;
struct imported_server_client_t;

typedef void (*imported_server_on_foo_t)(
    struct imported_server_t *self_p,
    struct imported_server_client_t *client_p,
    struct types_foo_t *message_p);

enum imported_server_client_input_state_t {
    imported_server_client_input_state_header_t = 0,
    imported_server_client_input_state_payload_t
};

typedef void (*imported_server_on_client_connected_t)(
    struct imported_server_t *self_p,
    struct imported_server_client_t *client_p);

typedef void (*imported_server_on_client_disconnected_t)(
    struct imported_server_t *self_p,
    struct imported_server_client_t *client_p);

struct imported_server_t {
    struct {
        char address[16];
        int port;
    } server;
    imported_server_on_client_connected_t on_client_connected;
    imported_server_on_client_disconnected_t on_client_disconnected;
    imported_server_on_foo_t on_foo;
    int epoll_fd;
    messi_epoll_ctl_t epoll_ctl;
    int listener_fd;
    struct imported_server_client_t *current_client_p;
    struct {
        struct imported_server_client_t *connected_list_p;
        struct imported_server_client_t *free_list_p;
        struct imported_server_client_t *pending_disconnect_list_p;
        size_t input_buffer_size;
    } clients;
    struct {
        struct messi_buffer_t data;
        size_t left;
    } message;
    struct {
        struct imported_client_to_server_t *message_p;
        struct messi_buffer_t workspace;
    } input;
    struct {
        struct imported_server_to_client_t *message_p;
        struct messi_buffer_t workspace;
    } output;
};

struct imported_server_client_t {
    int client_fd;
    int keep_alive_timer_fd;
    struct {
        enum imported_server_client_input_state_t state;
        uint8_t *buf_p;
        size_t size;
        size_t left;
    } input;
    struct imported_server_client_t *next_p;
    struct imported_server_client_t *prev_p;
};

/**
 * Initialize given server.
 */
int imported_server_init(
    struct imported_server_t *self_p,
    const char *server_uri_p,
    struct imported_server_client_t *clients_p,
    int clients_max,
    uint8_t *clients_input_bufs_p,
    size_t client_input_size,
    uint8_t *message_buf_p,
    size_t message_size,
    uint8_t *workspace_in_buf_p,
    size_t workspace_in_size,
    uint8_t *workspace_out_buf_p,
    size_t workspace_out_size,
    imported_server_on_client_connected_t on_client_connected,
    imported_server_on_client_disconnected_t on_client_disconnected,
    imported_server_on_foo_t on_foo,
    int epoll_fd,
    messi_epoll_ctl_t epoll_ctl);

/**
 * Start serving clients.
 */
int imported_server_start(struct imported_server_t *self_p);

/**
 * Stop serving clients.
 */
void imported_server_stop(struct imported_server_t *self_p);

/**
 * Process any pending events on given file descriptor if it belongs
 * to given server.
 */
void imported_server_process(struct imported_server_t *self_p, int fd, uint32_t events);

/**
 * Send prepared message to given client.
 */
void imported_server_send(struct imported_server_t *self_p,
                        struct imported_server_client_t *client_p);

/**
 * Send prepared message to current client.
 */
void imported_server_reply(struct imported_server_t *self_p);

/**
 * Broadcast prepared message to all clients.
 */
void imported_server_broadcast(struct imported_server_t *self_p);

/**
 * Disconnect given client. If given client is NULL, the currect
 * client is disconnected.
 */
void imported_server_disconnect(struct imported_server_t *self_p,
                            struct imported_server_client_t *client_p);

struct types_bar_t *
imported_server_init_bar(struct imported_server_t *self_p);

#endif
