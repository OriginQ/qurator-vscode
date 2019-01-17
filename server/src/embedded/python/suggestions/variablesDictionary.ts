/**
 *
 */

'use strict';

import { SuggestionSymbol } from '../../types';
import { SymbolTable } from '../../compiler/types';
import { Symbol } from '../../compiler/symbols';

export class VariablesDictionary {
    constructor(private symbolTable: SymbolTable) {}

    currentVariables(): SuggestionSymbol[] {
        let asSuggestionSymbol = (input: Symbol): SuggestionSymbol => {
            return {
                label: input.getName(),
                detail: 'Declared variable',
                documentation: 'This is a previously declared variable',
                type: 'Variable',
                parent: input.getName(),
                data: input.data
            };
        };

        return this.symbolTable
            .currentSymbols()
            .filter(symbol => 'class' !== symbol.type.getName())
            .map(asSuggestionSymbol);
    }
}
