
'use strict';

import { SuggestionSymbol, SuggestionSymbolType } from '../../types';
import { AtomFinder } from './atomFinder';
import { CommonTokenStream } from 'antlr4ts';
import { SuggestionsDictionary } from './suggestionsDictionary';
import { dataTypeSymbols } from '../compiler/symbolTable';

export class MethodsDictionary {
    constructor(
        private atomFinder: AtomFinder,
        private tokenStream: CommonTokenStream,
        private suggestionsDictionary: SuggestionsDictionary
    ) {}

    currentMethods(): SuggestionSymbol[] {
        let atom = this.atomFinder.firstViableAtomFor(this.tokenStream);
        if (atom !== null && atom.type.getName() in dataTypeSymbols) {
            return this.suggestionsDictionary
                .allMethods()
                .filter(suggestion => suggestion.parent === atom.type.getName())
                .filter(suggestion => suggestion.type === SuggestionSymbolType.method);
        } else {
            return this.suggestionsDictionary.allMethods();
        }
    }
}
