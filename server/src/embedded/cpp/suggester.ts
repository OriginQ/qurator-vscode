/**
 * 
 */

'use strict';

import { Suggester, SuggestionSymbol } from '../types';

export class CppSuggester implements Suggester {

    calculateSuggestionsFor(input: string): SuggestionSymbol[] {
        return null;
    }

    availableSymbols(): SuggestionSymbol[] {
     return null;
    }
}
