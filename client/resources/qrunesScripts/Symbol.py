from Error import *

class Symbol(object):
    def __init__(self, name, type=None):
        self.name = name
        self.type = type


class VariableSymbol(Symbol):
    def __init__(self, name, type, data=None):
        super().__init__(name, type)
        self.data = data if data is not None else ""

    def __str__(self):
        return "<{class_name}(name='{name}', type='{type}', data='{data}')>".format(
            class_name=self.__class__.__name__,
            name=self.name,
            type=self.type,
            data=self.data
        )

    __repr__ = __str__


class ParameterSymbol(Symbol):
    def __init__(self, name, type):
        super().__init__(name, type)

    def __str__(self):
        return "<{class_name}(name='{name}', type='{type}')>".format(
            class_name=self.__class__.__name__,
            name=self.name,
            type=self.type
        )

    __repr__ = __str__


class FuncCallSymbol(Symbol):
    def __init__(self, name, type):
        super().__init__(name, type)

    def __str__(self):
        return "<{class_name}(name='{name}', type='{type}')>".format(
            class_name=self.__class__.__name__,
            name=self.name,
            type=self.type
        )

    __repr__ = __str__


class BuiltinTypeSymbol(Symbol):
    def __init__(self, name):
        super().__init__(name)

    def __str__(self):
        return self.name

    def __repr__(self):
        return "<{class_name}(name='{name}')>".format(
            class_name=self.__class__.__name__,
            name=self.name,
        )


class FunctionSymbol(Symbol):
    def __init__(self, name, type, params=None):
        super().__init__(name, type)
        self.params = params if params is not None else []

    def __str__(self):
        return '<{class_name}(name={name}, type={type}, parameters={params})>'.format(
            class_name=self.__class__.__name__,
            name=self.name,
            type=self.type,
            params=self.params,
        )

    __repr__ = __str__

