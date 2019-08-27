/**
 *
 */

'use strict';

import { Scope } from '../../commonCompiler/scope';
import { PyQpandaSymbols, ArgumentSymbol, MethodSymbol } from './symbols';
import { PyQpandaSDK, PyQpandaArgument } from '../libs/pyQpandaSDK';
import { SymbolTable } from '../../commonCompiler/types';
import { BuiltInTypeSymbol } from '../../commonCompiler/symbols';
import { MultiScopeSymbolTable } from '../../commonCompiler/multiScopeSymbolTable';

export namespace PyQpandaSymbolTableBuilder {
    export function create(): SymbolTable {
        let scope = new Scope(null, 'global');

        scope.define(new BuiltInTypeSymbol(PyQpandaSymbols.void), 0);
        scope.define(new BuiltInTypeSymbol(PyQpandaSymbols.object), 0);
        scope.define(new BuiltInTypeSymbol(PyQpandaSymbols.string), 0);
        scope.define(new BuiltInTypeSymbol(PyQpandaSymbols.number), 0);
        scope.define(new BuiltInTypeSymbol(PyQpandaSymbols.boolean), 0);
        scope.define(new BuiltInTypeSymbol(PyQpandaSymbols.dictionary), 0);
        scope.define(new BuiltInTypeSymbol(PyQpandaSymbols.method), 0);

        loadPyQpandaSymbolsAt(scope);

        return new MultiScopeSymbolTable(scope);
    }

    function loadPyQpandaSymbolsAt(scope: Scope): void {
        PyQpandaSDK.methods().forEach(methods => {
            let type = scope.lookup(PyQpandaSymbols.method);
            let requiredArguments = getArgumentsSymbols(methods.arguments, scope);
            let methodSymbol = new MethodSymbol(methods.name, type, requiredArguments)

            scope.define(methodSymbol, 0);
        });
    }

    function getArgumentsSymbols(qarguments: PyQpandaArgument[] | undefined, scope: Scope): ArgumentSymbol[] {
        if (qarguments === undefined) {
            return [];
        }

        return qarguments.map(qargument => {
            let type = scope.lookup(qargument.type) || scope.lookup(PyQpandaSymbols.void);

            return new ArgumentSymbol(qargument.name, type, qargument.optional);
        });
    }
}
