/**
 * 
 */

'use strict';

import { Symbol } from './symbols';
import { Scope } from './scope';

export interface SymbolTable {
    /** Pointer to the current scope at the symbol table. */
    currentScope: Scope;
    currentScopes: Scope[];

    /** Searches the given symbol name at the root scope, if a line number is specified searches for a scope
     *  containing that symbol.
     */
    lookup(symbolName: string, line?: number): Symbol;

    /** Searches the given symbol name at the current scopes.
     */
    lookupList(scope:Scope, symbolName: string, line?: number): Symbol;

    /** Searches the given symbol name at the current scopes to root scope.
     */
    lookupToRoot(scope:Scope, symbolName: string, line?: number): Symbol;

    /** Stores the given symbol with the line where it was declared for first time. */
    define(symbol: Symbol, declarationLine: number): void;

    /** Stores the given symbol with the line into scopes where it was declared for first time. */
    defineList(scope: Scope, symbol: Symbol, declarationLine: number): void;

    /** Adds a new scope to the current scope. */
    push(scopeName: string, startLine: number, endLine: number): void;

    /** Adds a new scope to the current scopes. */
    pushList(scope: Scope): void;

    /** Update scope the endLine  */
    update(endLine: number): void;

    /** Returns to the parent scope closing the current one. */
    pop(line: number): void;

    /** Returns a list of the USER DEFINED symbols for the current scope and its parents. */
    currentSymbols(): Symbol[];

    /** Merge into the global scope the symbols at the given scope. */
    mergeWith(scope: Scope): void;

    print(): void;
}
