/**
 * This ts file provides the build of symbol table and interfaces of symbol table.
 */

'use strict';

import { SymbolTable } from '../../compiler/types';
import { Scope } from '../../compiler/scope';
import { BuiltInTypeSymbol, Symbol, Type } from '../../compiler/symbols';
import { MultiScopeSymbolTable } from '../../compiler/multiScopeSymbolTable';

export namespace SymbolTableBuilder {
    export function build(): SymbolTable {
        let rootScope = new Scope(null, 'global');
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.qvec), 0);
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.cvec), 0);
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.qubit), 0);
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.cbit), 0);
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.let), 0);
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.array), 0);

        return new MultiScopeSymbolTable(rootScope);
    }
}

export class VariableSymbol extends Symbol {
    constructor(name: string, type: Type) {
        super(name, type);
    }

    toString(): string {
        return `{ name: ${this.name}, type: ${this.type} }`;
    }
}

export class RegisterSymbol extends Symbol {
    size: number[];

    constructor(name: string, type: Type, size: number[]) {
        super(name, type);
        this.size = size;
    }

    toString(): string {
        return `{ name: ${this.name}, type: ${this.type}, size: ${this.size} }`;
    }
}

export enum QcodesSymbols {
    qvec = 'qvec',
    cvec = 'cvec',
    qubit = 'qubit',
    cbit =  'cbit',
    double = 'double',
    let = 'let',
    var = 'var',
    array = 'array'
}

export interface Booleans {
    flag1: boolean,
    flag2: boolean;
}

export interface NameAndType {
    names: string[],
    types: string[];
}
