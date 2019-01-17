/**
 * 
 */

'use strict';

import { Symbol } from './symbols';
import { SymbolTable } from './types';
import { Scope } from './scope';

export class MultiScopeSymbolTable implements SymbolTable {
    public currentScope: Scope;
    public currentScopes: Scope[];

    constructor(private rootScope: Scope) {
        this.currentScope = rootScope;
        this.currentScopes = [];
    }

    lookup(symbolName: string, line?: number): Symbol {
        return this.currentScope.lookup(symbolName, line);
    }

    lookupList(scope: Scope, symbolName: string, line?: number): Symbol {
        let scopeFin = this.getScope(this.currentScopes, scope.startLine);
        if (scopeFin !== null) {
            return scopeFin.lookupList(symbolName, line);
        }
        
        return null;
    }

    lookupToRoot(scope: Scope, symbolName: string, line?: number): Symbol {
        let scopeFin = this.getScope(this.currentScopes, scope.startLine);
        if (scopeFin !== null) {
            return scopeFin.lookup(symbolName, line);
        }
        
        return null;
    }

    define(symbol: Symbol, declarationLine: number): void {
        this.currentScope.define(symbol, declarationLine);
    }

    defineList(scope: Scope, symbol: Symbol, declarationLine: number): void {
        if (scope == null) {
            this.currentScope.define(symbol, declarationLine);
        } else {
            if (this.currentScopes != null) {
                let scopeFin = this.getScope(this.currentScopes, scope.startLine);
                if (scopeFin !== null) {
                    scopeFin.define(symbol, declarationLine);
                }
            }
        }
    }

    push(scopeName: string, startLine: number, endLine: number): void {
        let localScope = new Scope(this.currentScope, scopeName, startLine, endLine);
        this.currentScope.childs.push(localScope);

        this.currentScope = localScope;
    }

    pushList(scope: Scope): void {
        this.currentScopes.push(scope);
    }

    update(endLine: number): void {
        this.currentScope.endLine = endLine;
    }

    pop(line: number): void {
        this.currentScope.closeScopeAt(line);
        this.currentScope = this.currentScope.parentScope;
    }

    currentSymbols(): Symbol[] {
        return this.currentScope.definedSymbols();
    }

    mergeWith(scope: Scope): void {
        scope.definedSymbols().forEach(symbol => this.define(symbol, 0));
    }

    print() {
        console.log('Printing symbol table >>>>>>>>');
        this.rootScope.print();
        console.log('<<<<<<<<<<<<<<<<');
    }

    private getScope(scopes: Scope[], startLine: number): Scope {
        let map= new Map<number, Scope>();
        if (scopes.length > 0) {
            for (let sc of scopes) {
                if (sc.startLine <= startLine && sc.endLine >= startLine) {
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
