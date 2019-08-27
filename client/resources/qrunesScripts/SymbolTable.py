
from Symbol import *

from Error import *


class SymbolTable:
    def __init__(self, symtab_name, scope_level, enclosing_scope=None):
        self.symbols = {}
        self.symtab_name = symtab_name
        self.scope_level = scope_level
        self.enclosing_scope = enclosing_scope

    def init_builtins(self):
        self.insert(BuiltinTypeSymbol('let'))
        self.insert(BuiltinTypeSymbol('qubit'))

    def insert(self, symbol):
        self.symbols[symbol.name] = symbol

    def lookup(self, name):
        symbol = self.symbols.get(name)
        # 'symbol' is either an instance of the Symbol class or None
        if symbol is not None:
            print("find Symbol in symtab")
            return symbol
        else:
            print("not in any symtab")

    def search_all(self, name):
        # print("当前名字", scope.enclosing_scope.symbols)
        symbol = self.symbols.get(name)
        # 'symbol' is either an instance of the Symbol class or None
        if symbol is not None:
            return symbol
        if self.enclosing_scope is not None:
            return self.enclosing_scope.search_all(name)

    def __str__(self):
        h1 = 'Symbol Table'
        lines = ['\n', h1, '=' * len(h1)*2]
        for header_name, header_value in (
            ('Symtab name', self.symtab_name),
            ('Scope level', self.scope_level),
            ('Enclosing scope',
             self.enclosing_scope.symtab_name if self.enclosing_scope else None
            )
        ):
            lines.append('%-15s: %s' % (header_name, header_value))
        h2 = '** Symbol Table Info **'
        lines.extend([h2, '-' * len(h2)*2])
        lines.extend(
            ('%7s: %r' % (key, value))
            for key, value in self.symbols.items()
        )
        lines.append('\n')
        s = '\n'.join(lines)
        return s

    __repr__ = __str__
