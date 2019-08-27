
'use strict';

import { qcodeParser } from '../antlr/qcodeParser';
import { SuggestionSymbol } from '../../types';
import { CodeCompletionCore } from 'antlr4-c3';
import { qcodeLexer } from '../antlr/qcodeLexer';
import { MethodsDictionary } from './methodsDictionary';

export class SuggestionsCalculator {
    constructor(
        private parser: qcodeParser,
        private methodsDictionary: MethodsDictionary
    ) {}

    calculateAtPosition(tokenPosition: number): SuggestionSymbol[] {
        let core = new CodeCompletionCore(this.parser);
        core.ignoredTokens = GrammarElements.ignorableTokens();
        core.preferredRules = GrammarElements.requiredRules();

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
        if (allowedSymbols.includes('dot_name')) {
            result.push(...this.methodsDictionary.currentMethods());
        }

        return result;
    }
}

namespace GrammarElements {
    export function ignorableTokens(): Set<number> {
        return new Set([
            qcodeLexer.RBRACE,
            qcodeLexer.RBRACK,
            qcodeLexer.LBRACE,
            qcodeLexer.LBRACK,
            qcodeLexer.LPAREN,
            qcodeLexer.RPAREN,
            qcodeLexer.SEMI
        ]);
    }

    export function requiredRules(): Set<number> {
        return new Set([qcodeParser.DOT]);
    }
}
