/**
 * 
 */

'use strict';

import { CommonTokenStream, Token } from 'antlr4ts';
import { SymbolTable } from '../../compiler/types';
import { Symbol, Type } from '../../compiler/symbols';

export class AtomFinder {
    constructor(private symbolTable: SymbolTable) {}

    firstViableAtomFor(tokenStream: CommonTokenStream): Symbol {
        if (!this.isFinishedAtMethodScope(tokenStream)) {
            return new NullSymbol();
        }
        let atomToken = this.getAtomToken(tokenStream);
        return this.symbolTable.lookup(atomToken.text);
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
