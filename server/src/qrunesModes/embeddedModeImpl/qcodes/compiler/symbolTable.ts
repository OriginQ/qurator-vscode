/**
 * This ts file provides the build of symbol table and interfaces of symbol table.
 */

'use strict';

import { SymbolTable } from '../../commonCompiler/types';
import { Scope } from '../../commonCompiler/scope';
import { BuiltInTypeSymbol, Symbol, Type } from '../../commonCompiler/symbols';
import { MultiScopeSymbolTable } from '../../commonCompiler/multiScopeSymbolTable';

export namespace SymbolTableBuilder {
    export function build(): SymbolTable {
        let rootScope = new Scope(null, 'global');
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.int), 0);
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.double), 0);
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.bool), 0);
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.qubit), 0);
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.cbit), 0);
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.hamiltonian), 0);
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.circuit), 0);
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.let), 0);
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.vector), 0);
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.vector_qubit), 0);
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.vector_cbit), 0);
        rootScope.define(new BuiltInTypeSymbol(QcodesSymbols.vector_double), 0);
        
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

    constructor(name: string, type: Type) {
        super(name, type);
    }

    toString(): string {
        return `{ name: ${this.name}, type: ${this.type}}`;
    }
}

export enum QcodesSymbols {
    qubit = 'qubit',
    cbit =  'cbit',
    circuit = 'circuit',
    hamiltonian = 'hamiltonian',
    int = 'int',
    double = 'double',
    bool = 'bool',
    let = 'let',
    vector = 'vector',
    vector_qubit = 'vector<qubit>',
    vector_cbit = 'vector<cbit>',
    vector_double = 'vector<double>'
}

export interface Booleans {
    flag1: boolean,
    flag2: boolean;
}

export interface NameAndType {
    names: string[],
    types: string[];
}

export enum dataTypeSymbols {

}

export enum singleGate {
    'H',
    'X',
    'NOT',
    'T',
    'S',
    'Y',
    'Z',
    'X1',
    'Y1',
    'Z1'
}

export enum doubleGate {
    'CNOT',
    'CZ'
}

export enum doubleGateWithAngle {
    'RX',
    'RY',
    'RZ'
}

export enum MeasureGate {
    'measure',
}

export enum threeGate{
    'CR',
    'iSWAP'
}

export enum fourGate {
    'U4'
}

export enum sixGate {
    'CU'
}