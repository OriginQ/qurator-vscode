/**
 * This ts file provides the symbol table of setting
 */
'use strict';

import { SymbolTable } from '../../commonCompiler/types';
import { Scope } from '../../commonCompiler/scope';
import { BuiltInTypeSymbol, Symbol, Type } from '../../commonCompiler/symbols';
import { MultiScopeSymbolTable } from '../../commonCompiler/multiScopeSymbolTable';

export namespace SymbolTableBuilder {
    export function build(): SymbolTable {
        let rootScope = new Scope(null, 'global');
        rootScope.define(new BuiltInTypeSymbol(SettingSymbols.language), 0);
        rootScope.define(new BuiltInTypeSymbol(SettingSymbols.autoimport), 0);
        rootScope.define(new BuiltInTypeSymbol(SettingSymbols.compile_only), 0);

        return new MultiScopeSymbolTable(rootScope);
    }
}

export class SettingSymbol extends Symbol {

    constructor(name: string, type: Type) {
        super(name, type);
    }

    toString(): string {
        return `{ name: ${this.name}, type: ${this.type} }`;
    }
}

export enum SettingSymbols {
    language = 'language',
    autoimport = 'autoimport',
    compile_only = 'compile_only'
}
