/**
 *
 */

'use strict';

import { Scope } from '../../compiler/scope';
import { PyQpandaSymbols, ArgumentSymbol, MethodSymbol, ClassSymbol } from './symbols';
import { PyQpandaSDK, PyQpandaMethod, PyQpandaArgument } from '../libs/pyQpandaSDK';
import { SymbolTable } from '../../compiler/types';
import { BuiltInTypeSymbol } from '../../compiler/symbols';
import { MultiScopeSymbolTable } from '../../compiler/multiScopeSymbolTable';

export namespace PyQpandaSymbolTableBuilder {
    export function create(): SymbolTable {
        let scope = new Scope(null, 'global');

        scope.define(new BuiltInTypeSymbol(PyQpandaSymbols.void), 0);
        scope.define(new BuiltInTypeSymbol(PyQpandaSymbols.object), 0);
        scope.define(new BuiltInTypeSymbol(PyQpandaSymbols.string), 0);
        scope.define(new BuiltInTypeSymbol(PyQpandaSymbols.number), 0);
        scope.define(new BuiltInTypeSymbol(PyQpandaSymbols.boolean), 0);
        scope.define(new BuiltInTypeSymbol(PyQpandaSymbols.dictionary), 0);
        scope.define(new BuiltInTypeSymbol(PyQpandaSymbols.class), 0);

        loadPyQpandaSymbolsAt(scope);

        return new MultiScopeSymbolTable(scope);
    }

    function loadPyQpandaSymbolsAt(scope: Scope): void {
        PyQpandaSDK.classesAndMethods().forEach(qclassAndMethods => {
            let type = scope.lookup(PyQpandaSymbols.class);
            let args: ArgumentSymbol[] = getArgumentsSymbols(qclassAndMethods.arguments, scope);
            let methods: MethodSymbol[] = getMethodsSymbols(qclassAndMethods.methods, scope);
            let classSymbol = new ClassSymbol(qclassAndMethods.name, type, args, methods);

            scope.define(classSymbol, 0);
        });
    }

    function getMethodsSymbols(qmethods: PyQpandaMethod[], scope: Scope): MethodSymbol[] {
        return qmethods.map(qmethod => {
            let type = scope.lookup(qmethod.type) || scope.lookup(PyQpandaSymbols.void);
            let requiredArguments = getArgumentsSymbols(qmethod.arguments, scope);

            return new MethodSymbol(qmethod.name, type, requiredArguments);
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
