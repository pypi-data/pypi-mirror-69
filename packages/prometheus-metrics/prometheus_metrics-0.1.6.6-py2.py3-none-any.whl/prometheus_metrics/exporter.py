#
#   Copyright (c) 2018-2019 Daniel Schmitz
#
#   Permission is hereby granted, free of charge, to any person obtaining a copy
#   of this software and associated documentation files (the "Software"), to deal
#   in the Software without restriction, including without limitation the rights
#   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
#   copies of the Software, and to permit persons to whom the Software is
#   furnished to do so, subject to the following conditions:
#
#   The above copyright notice and this permission notice shall be included in all
#   copies or substantial portions of the Software.
#
#   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
#   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
#   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
#   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
#   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
#   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
#   SOFTWARE.

import threading

from prometheus_client import make_wsgi_app
from wsgiref.simple_server import WSGIRequestHandler, WSGIServer, make_server

from prometheus_metrics.metrics import metric, metric_label, metric_labels


class metrics_handler:
    def __init__(self):
        self.metrics = dict()

    def exists(self, name):
        if name in self.metrics:
            return True
        else:
            return False

    @classmethod
    def get_metrics_name(self):
        return [*self.metrics]

    def update(self, name, value):
        self.metrics[name].update(value)

    def add_metric(self, name, description=None):
        self.metrics[name] = metric(name, description=description)

    def add_metric_label(self, name, label, description=None):
        self.metrics[name] = metric_label(name, label, description=description)

    def add_metric_labels(self, name, labels, description=None):
        self.metrics[name] = metric_labels(name, labels, description=description)

    def add(self, name, labels=None, description=None):
        if labels is None:
            self.add_metric(name, description=description)
        elif isinstance(labels, str):
            self.add_metric_label(name, labels, description=description)
        elif isinstance(labels, list):
            self.add_metric_labels(name, labels, description=description)

    def add_update_metric(self, name, value):
        if not self.exists(name):
            self.add_metric(name)
        self.update_metric(name, value)

    def add_update_metric_label(self, name, label, values):
        if not self.exists(name):
            self.add_metric_label(name, label)
        self.update_metric(name, values)

    def add_update_metric_labels(self, name, labels, values):
        if not self.exists(name):
            self.add_metric_labels(name, labels)
        self.update_metric(name, values)

    def add_update(self, name, value, labels=None):
        if not self.exists(name):
            self.add(name, labels)
        self.update(name, value)


class exporter:
    class _SilentHandler(WSGIRequestHandler):
        """WSGI handler that does not log requests."""

        def log_message(self, format, *args):
            """Log nothing."""

    def __init__(self):
        self.metrics_handler = metrics_handler()
        self.httpd = None

    @classmethod
    def make_wsgi_app(self):
        return make_wsgi_app()

    def make_server(self, interface, port):
        server_class = WSGIServer

        if ":" in interface:
            if getattr(server_class, "address_family") == socket.AF_INET:
                server_class.address_family = socket.AF_INET6

        print("* Listening on %s:%s" % (interface, port))
        self.httpd = make_server(
            interface, port, self.make_wsgi_app(), server_class, self._SilentHandler
        )
        t = threading.Thread(target=self.httpd.serve_forever)
        t.start()
