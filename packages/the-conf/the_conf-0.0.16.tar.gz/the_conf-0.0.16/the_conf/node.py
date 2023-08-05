import logging

TYPE_MAPPING = {'int': int, 'str': str, 'list': list, 'dict': dict,
                'bool': bool}
logger = logging.getLogger(__name__)


class NoValue:
    pass


class ConfNode:

    def __init__(self, parameters=None, parent=None, name=''):
        self._name = name
        self._parent = parent
        self._children = []
        self._parameters = {}
        self._load_parameters(parameters if parameters is not None else [])

    def _load_parameters(self, parameters):
        for parameter in parameters:
            for name, value in parameter.items():
                if isinstance(value, list) and not self._has_attr(name):
                    setattr(self, name, ConfNode(parameters=value,
                                                 name=name,
                                                 parent=self))
                elif isinstance(value, list):
                    getattr(self, name)._load_parameters(value)
                else:
                    self._load_parameter(name, value)
                if name not in self._children:
                    self._children.append(name)

    def _load_parameter(self, name, settings):
        if name in self._parameters:
            logger.debug('ignoring')
            return
        has_default = bool(settings.get('default'))
        has_type = bool(settings.get('type'))
        # something smarter that'd allow custom type
        if has_default and not has_type:
            settings['type'] = type(settings['default'])
        else:
            if settings.get('type') in TYPE_MAPPING:
                settings['type'] = TYPE_MAPPING[settings['type']]
            elif isinstance(settings.get('type'), type):
                pass
            elif has_type:
                logger.warning('unknown type %r', settings['type'])
                settings['type'] = str
            else:
                settings['type'] = str
        has_among = bool(settings.get('among'))
        settings['required'] = bool(settings.get('required'))
        settings['read_only'] = bool(settings.get('read_only'))

        path = ".".join(self._path + [name])
        if has_among:
            assert isinstance(settings['among'], list), ("parameters %s "
                    "configuration has wrong value for 'among', should be a "
                    "list, ignoring it" % path)
        if has_default and has_among:
            assert settings.get('default') in settings.get('among'), ("default"
                    " value for %r is not among the selectable values (%r)" % (
                        path, settings.get('among')))
        if has_default and settings['required']:
            raise ValueError(
                    "%r required parameter can't have default value" % path)

        if 'type' in settings and 'default' in settings:
            settings['default'] = settings['type'](settings['default'])
        self._parameters[name] = settings

    def _has_attr(self, attr):
        try:
            super().__getattribute__(attr)
            return True
        except AttributeError:
            return False

    def _set_to_path(self, path, value, overwrite=False):
        """Will set the value to the provided path. Local node if path length
        is one, a child node if path length is more that one.

        path: list
        value: the value to set
        """
        attr = path[0]
        if len(path) == 1:
            if not overwrite and self._has_attr(attr):
                return
            if 'read_only' in self._parameters[attr]:
                read_only = self._parameters[attr].pop('read_only')
                res = setattr(self, attr, value)
                self._parameters[attr]['read_only'] = read_only
                return res
            return setattr(self, attr, value)
        return getattr(self, attr)._set_to_path(path[1:], value,
                                                overwrite=overwrite)

    def __getattribute__(self, name):
        """Return a parameter of the node if this one is defined.
        Its default value if it has one.
        """
        if name.startswith('_'):
            return super().__getattribute__(name)
        if 'default' in self._parameters.get(name, {}):
            try:  # Trying to get attr, if AttributeError => is absent
                return super().__getattribute__(name)
            except AttributeError:
                return self._parameters[name]['default']
        return super().__getattribute__(name)

    def __setattr__(self, key, value):
        if key.startswith('_') or isinstance(value, ConfNode):
            return super().__setattr__(key, value)
        if key not in self._parameters:
            raise ValueError('%r is not a registered conf option' % self._path)
        if self._parameters[key].get('read_only'):
            raise AttributeError('attribute is in read only mode')
        if 'among' in self._parameters[key]:
            if value not in self._parameters[key]['among']:
                raise ValueError("%r: value %r isn't in %r" % (
                        self._path, value, self._parameters[key]['among']))
        if 'type' in self._parameters[key]:
            value = self._parameters[key]['type'](value)
        return super().__setattr__(key, value)

    @property
    def _path(self):
        if self._parent is None:
            return []
        return self._parent._path + [self._name]

    def _get_path_val_param(self):
        for name in self._children:
            if isinstance(getattr(self, name, None), ConfNode):
                yield from getattr(self, name)._get_path_val_param()
            else:
                yield self._path + [name], getattr(self, name, NoValue), \
                        self._parameters[name]

    def __repr__(self):
        result = {"string": "<%s({" % self.__class__.__name__}
        result["length"] = len(result["string"])
        old_loc, new_loc = [], []

        def spaces(index):
            if len(result["string"]) != result["length"]:
                return ' ' * (4 * index + result["length"])
            return ''

        def open_path(index, name):
            result["string"] += "%s%r: {\n" % (spaces(index), name)

        def close_path(index):
            result["string"] += "%s},\n" % spaces(index - 1)

        def add_key(index, name, value):
            result["string"] += "%s%r: %r,\n" % (spaces(index), name, value)

        for path, value, _ in self._get_path_val_param():
            new_loc = path[:-1]
            if new_loc != old_loc:
                diff_index = None
                for index, old_new in enumerate(zip(old_loc, new_loc)):
                    if old_new[0] != old_new[1]:
                        diff_index = index
                        break
                if diff_index is not None:
                    for index in range(len(old_loc), diff_index, -1):
                        close_path(index)
                    for index in range(diff_index, len(new_loc)):
                        open_path(index, new_loc[index])
                elif len(old_loc) > len(new_loc):  # we got out
                    for index in range(len(old_loc), len(new_loc), -1):
                        close_path(index)
                elif len(new_loc) > len(old_loc):  # we got in
                    for index in range(len(old_loc), len(new_loc)):
                        open_path(index, new_loc[index])
            add_key(len(new_loc), path[-1], value)
            old_loc = new_loc
        for index in range(len(old_loc), 0, -1):
            close_path(index)
        return result["string"] + ")>"
