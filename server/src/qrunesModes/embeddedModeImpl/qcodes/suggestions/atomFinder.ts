
'use strict';

import { CommonTokenStream, Token } from 'antlr4ts';
import { SymbolTable } from '../../commonCompiler/types';
import { Symbol, Type } from '../../commonCompiler/symbols';
import { Scope } from '../../commonCompiler/scope';

export class AtomFinder {

    constructor(private symbolTable: SymbolTable) {}

    firstViableAtomFor(tokenStream: CommonTokenStream): Symbol {
        if (!this.isFinishedAtMethodScope(tokenStream)) {
            return new NullSymbol();
        }
        let atomToken = this.getAtomToken(tokenStream);

        let startLine: number = atomToken.line;
        let endLine: number = atomToken.line;
        let tokenName: string = atomToken.text;

        let scopes: Scope[] = this.symbolTable.currentScopes;
        let currentScope: Scope = this.getScope(scopes, startLine, endLine);  
        let a =  this.symbolTable.lookupList(currentScope, tokenName);
        return a;
    }

    private isFinishedAtMethodScope(tokenStream: CommonTokenStream): boolean {
        let lastPosition = tokenStream.getTokens().length - 1;
        if (tokenStream.getTokens()[lastPosition - 1].text === '.') {
            return true;
        }
        // tslint:disable-next-line
        if (tokenStream.getTokens()[lastPosition - 2].text === '.') {
            return true;
        }

        return false;
    }

    private getAtomToken(tokenStream: CommonTokenStream): Token {
        let position = tokenStream.getTokens().length - 1;
        while (tokenStream.getTokens()[position].text !== '.') {
            position--;
        }
        return tokenStream.getTokens()[position - 1];
    }

    // Get the current scope.
    private getScope(scopes: Scope[], startLine: number, endLine: number): Scope {
        let map= new Map<number, Scope>();
        if (scopes.length > 0) {
            for (let sc of scopes) {
                if (sc.startLine <= startLine && sc.endLine >= endLine) {
                    map.set(sc.startLine, sc); 
                }
            }
        }

        let num: number = 0;
        if (map.size > 0) {
            for (let s of map.keys()) {
                if (s > num) {
                    num = s;
                }
            }
            return map.get(num);
        }
        return null;
    }
}

class NullSymbol extends Symbol {
    constructor() {
        super('null', new NullType());
    }
}

class NullType implements Type {
    getName(): string {
        return 'null';
    }
}
