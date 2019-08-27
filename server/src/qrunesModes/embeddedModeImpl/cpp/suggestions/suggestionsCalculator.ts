/**
 * 
 */

'use strict';

import { SuggestionSymbol } from '../../types';
import { CodeCompletionCore } from 'antlr4-c3';
import { MethodsDictionary } from './methodsDictionary';
import { CPP14Parser } from '../antlr/CPP14Parser';

export class SuggestionsCalculator {
    constructor(
        private parser: CPP14Parser,
        private methodsDictionary: MethodsDictionary
    ) {}

    calculateAtPosition(tokenPosition: number): SuggestionSymbol[] {
        let core = new CodeCompletionCore(this.parser);
        core.ignoredTokens = GrammarElements.ignorableTokens();

        let candidates = core.collectCandidates(tokenPosition);

        let allowedSymbols: string[] = [];
        for (let candidate of candidates.tokens) {
            let terminal = this.parser.vocabulary.getSymbolicName(candidate[0]);
            allowedSymbols.push(terminal);
        }

        for (let candidate of candidates.rules) {
            let rule = this.parser.ruleNames[candidate[0]];
            allowedSymbols.push(rule);
        }

        let result: SuggestionSymbol[] = this.calculateSuggestions(allowedSymbols);

        return result;
    }

    private calculateSuggestions(allowedSymbols: string[]): SuggestionSymbol[] {
        let result: SuggestionSymbol[] = [];
        result.push(...this.methodsDictionary.currentMethods());

        return result;
    }
}

namespace GrammarElements {
    export function ignorableTokens(): Set<number> {
        return new Set([
            CPP14Parser.EOF
        ]);
    }
}
