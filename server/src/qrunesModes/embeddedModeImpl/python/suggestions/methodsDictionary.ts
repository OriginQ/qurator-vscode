/**
 * 
 */

'use strict';

import { SuggestionSymbol } from '../../types';
import { SuggestionsDictionary } from './suggestionsDictionary';

export class MethodsDictionary {
    constructor(
        private suggestionsDictionary: SuggestionsDictionary
    ) {}

    currentMethods(): SuggestionSymbol[] {
        return this.suggestionsDictionary.allMethods();
    }
}
