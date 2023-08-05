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

#include <string.h>
#include <stdlib.h>
#include <sys/epoll.h>
#include <fcntl.h>
#include "messi.h"

void messi_header_create(struct messi_header_t *header_p,
                         uint8_t message_type,
                         uint32_t size)
{
    header_p->type = message_type;
    messi_header_set_size(header_p, size);
}

int messi_epoll_ctl_default(int epoll_fd, int op, int fd, uint32_t events)
{
    struct epoll_event event;

    event.data.fd = fd;
    event.events = events;

    return (epoll_ctl(epoll_fd, op, fd, &event));
}

int messi_make_non_blocking(int fd)
{
    return (fcntl(fd, F_SETFL, fcntl(fd, F_GETFL, 0) | O_NONBLOCK));
}

int messi_parse_tcp_uri(const char *uri_p,
                        char *host_p,
                        size_t host_size,
                        int *port_p)
{
    const char *colon_p;
    size_t size;

    if (strncmp(uri_p, "tcp://", 6) != 0) {
        return (-1);
    }

    uri_p += 6;

    /* Host. */
    colon_p = strchr(uri_p, ':');

    if (colon_p == NULL) {
        return (-1);
    }

    size = (colon_p - uri_p);

    if ((size + 1) > host_size) {
        return (-1);
    }

    strncpy(host_p, uri_p, size);
    host_p[size] = '\0';

    /* Port. */
    *port_p = atoi(&colon_p[1]);

    return (0);
}
