from functools import wraps

import flask
from flask import current_app as cap

from .builders.builder import Builder
from .config import DEFAULT_BUILDERS, set_default_config


class ResponseBuilder:
    def __init__(self, app=None, builders=None):
        """

        :param app:
        :param builders:
        """
        self._builders = {}

        if app is not None:
            self.init_app(app, builders)

    def init_app(self, app, builders=None):
        """

        :param app:
        :param builders:
        """
        set_default_config(app)

        if not hasattr(app, 'extensions'):
            app.extensions = dict()
        app.extensions['response_builder'] = self

        for name, builder in {**DEFAULT_BUILDERS, **(builders or {})}.items():
            self.register_builder(name, builder, **app.config)

    def register_builder(self, name, builder, **kwargs):
        """

        :param name:
        :param builder:
        """
        if not issubclass(builder.__class__, Builder):
            raise NameError(
                "Invalid Builder: '{}'. "
                "You must extend class: '{}'".format(builder, Builder.__name__)
            )

        if not builder.conf:
            builder.conf = kwargs
        else:
            builder.conf.update(kwargs)

        self._builders.update({name: builder})

        def _builder_attr(**kwargs):
            def _wrapper(func=None, data=None):
                if func is not None:
                    @wraps(func)
                    def wrapped():
                        return self.build_response(name, func(), **kwargs)
                    return wrapped

                return self.build_response(name, data, **kwargs)
            return _wrapper

        setattr(self, name, _builder_attr)

    def build_response(self, builder=None, data=None, **kwargs):
        """

        :param builder:
        :param data:
        :return:
        """
        if isinstance(builder, str):
            builder = self._builders.get(builder)

        data, status, headers = self.normalize_response_data(data)

        if not builder:
            m = headers.get('Content-Type') or cap.config.get('RB_DEFAULT_RESPONSE_FORMAT')
            for value in self._builders.values():
                if value.mimetype == m:
                    builder = value
                    break
            else:
                raise NameError(
                    "Builder not found: using one of: '{}'".format(", ".join(self._builders.keys()))
                )
        elif not issubclass(builder.__class__, Builder):
            raise NameError(
                "Invalid Builder: '{}'. You must extend class: '{}'".format(builder, Builder.__name__)
            )

        builder.build(data, **kwargs)
        return builder.response(status=status, headers=headers)

    def get_mimetype_accept(self, default=None, acceptable=None, strict=True):
        """

        :param default:
        :param acceptable:
        :param strict:
        :return:
        """
        def find_builder(a):
            for b in self._builders.values():
                if a == b.mimetype:
                    return b

        mimetypes = flask.request.accept_mimetypes
        default = default or cap.config['RB_DEFAULT_RESPONSE_FORMAT']
        acceptable = acceptable or cap.config['RB_DEFAULT_ACCEPTABLE_MIMETYPES']

        if not mimetypes or str(mimetypes) == '*/*':
            builder = find_builder(default)
            if builder:
                return default, builder

        for m in mimetypes:
            m = m[0].split(';')[0]  # in order to remove encoding param
            accept = m if m in acceptable else None
            builder = find_builder(accept)
            if builder:
                return accept, builder

        if strict is True:
            flask.abort(406, "Not Acceptable: {}".format(flask.request.accept_mimetypes))

        return default, find_builder(default)

    @staticmethod
    def normalize_response_data(data):
        """

        :param data:
        :return:
        """
        if isinstance(data, tuple):
            v = data + (None,) * (3 - len(data))
            return v if isinstance(v[1], int) else (v[0], v[2], v[1])
        return data, None, None

    def no_content(self, func):
        """

        :param func:
        :return:
        """
        @wraps(func)
        def wrapped(*args, **kwargs):
            resp = func(*args, **kwargs)
            data, status, headers = self.normalize_response_data(resp)

            if status is None or status == 204:
                resp = flask.make_response('', 204, headers)
                resp.headers.pop('Content-Type', None)
                resp.headers.pop('Content-Length', None)
                return resp

            return self.build_response(data=resp)

        return wrapped

    def on_format(self, default=None, acceptable=None):
        """

        :param default:
        :param acceptable:
        :return:
        """
        def response(fun):
            @wraps(fun)
            def wrapper(*args, **kwargs):
                builder = flask.request.args.get(cap.config.get('RB_FORMAT_KEY')) or default
                if builder not in (acceptable or self._builders.keys()):
                    for k, v in self._builders.items():
                        if v.mimetype == cap.config.get('RB_DEFAULT_RESPONSE_FORMAT'):
                            builder = k
                            break

                return self.build_response(builder, fun(*args, **kwargs))
            return wrapper
        return response

    def on_accept(self, default=None, acceptable=None, strict=True):
        """

        :param default:
        :param acceptable:
        :param strict:
        :return:
        """
        def response(fun):
            @wraps(fun)
            def wrapper(*args, **kwargs):
                mimetype, builder = self.get_mimetype_accept(default, acceptable, strict)
                return self.build_response(builder, fun(*args, **kwargs))
            return wrapper
        return response

    def response(self, builder, **kwargs):
        """

        :param builder:
        :return:
        """
        def _response(f):
            @wraps(f)
            def wrapper(*args, **kw):
                return self.build_response(builder, f(*args, **kw), **kwargs)
            return wrapper
        return _response

    def template_or_json(self, template: str, as_table=False, to_dict=None):
        """

        :param template:
        :param as_table:
        :param to_dict:
        :return:
        """
        def response(fun):
            @wraps(fun)
            def wrapper(*args, **kwargs):
                varargs = {}
                builder = self._builders.get('json')

                # check if request is XHR
                if flask.request.headers.get('X-Requested-With', '').lower() == "xmlhttprequest":
                    builder = self._builders.get('html')
                    varargs.update(dict(
                        template=template,
                        as_table=as_table,
                        to_dict=to_dict
                    ))

                resp = fun(*args, **kwargs)
                return self.build_response(builder, resp, **varargs)
            return wrapper
        return response
