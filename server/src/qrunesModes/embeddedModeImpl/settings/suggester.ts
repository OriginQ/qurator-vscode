/**
 * This ts file provides settings suggester, include calculate suggestions for settings
 * and settings's symbols dictionary.
 */
'use strict';

import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { CodeCompletionCore } from 'antlr4-c3';
import { Suggester, SuggestionSymbol } from '../types';
import { settingParser } from './antlr/settingParser';
import { settingLexer } from './antlr/settingLexer';
import { Symbol } from '../commonCompiler/symbols';
import { SymbolTable } from '../commonCompiler/types';

export class SettingsSuggester implements Suggester {
    dictionary: SymbolsDictionary = new SymbolsDictionary();

    calculateSuggestionsFor(input: string): SuggestionSymbol[] {
        let inputStream = new ANTLRInputStream(input);
        let lexer = new settingLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new settingParser(tokenStream);

        parser.qsetting();
        return this.calculateCandidates(parser, tokenStream.getTokens().length);
    }

    availableSymbols(): SuggestionSymbol[] {
        return this.dictionary.allSymbols();
    }

    getSymbolTable(input: string): SymbolTable {
        return null;
    }

    private calculateCandidates(
        parser: settingParser,
        caretPosition: number
    ): SuggestionSymbol[] {
        let core = new CodeCompletionCore(parser);

        core.ignoredTokens = new Set([
            settingLexer.SEMI
        ]);

        let candidates = core.collectCandidates(caretPosition);

        let keywords: string[] = [];
        for (let candidate of candidates.tokens) {
            keywords.push(parser.vocabulary.getSymbolicName(candidate[0]));
        }

        let functionNames: string[] = [];
        let variableNames: string[] = [];

        let suggestions: string[] = [];
        suggestions.push(...keywords);
        suggestions.push(...functionNames);
        suggestions.push(...variableNames);

        let result: SuggestionSymbol[] = [];
        result.push(...this.dictionary.symbolsWithTypeIn(suggestions));

        return result;
    }
}

class SymbolsDictionary {
    symbols = [
        {
            label: 'language',
            detail: 'Decide the language type of script(Python/C++).',
            documentation: 'To indicate which programming language needed to be imported, support Python and C++ to be choosed currently.',
            type: 'LANGUAGE',
            parent: 'SETTINGS',
            data: { 
                languageId: 'settings'
            }
        },
        {
            label: 'autoimport',
            detail: 'Decide automatic import is allowed or not.',
            documentation: 'Load the lib or package automatically or not.',
            type: 'AUTOIMPORT',
            parent: 'SETTINGS',
            data: { 
                languageId: 'settings'
            }
        },
        {
            label: 'compile_only',
            detail: 'Decide whether to compile or compile && run with result.',
            documentation: 'Decide whether to compile or compile && run with result.',
            type: 'COMPILE_ONLY',
            parent: 'SETTINGS',
            data: { 
                languageId: 'settings'
            }
        },
        {
            label: 'Python',
            detail: 'Import python script.',
            documentation: 'In the script mode, you can coding with Python language.',
            type: 'Identifier',
            parent: 'SETTINGS',
            data: { 
                languageId: 'settings'
            }
        },
        {
            label: 'C++',
            detail: 'Import c++ script.',
            documentation: 'In the script mode, you can coding with C++ language.',
            type: 'Identifier',
            parent: 'SETTINGS',
            data: { 
                languageId: 'settings'
            }
        },    
        {
            label: 'True',
            detail: '',
            documentation: '',
            type: 'Identifier',
            parent: 'SETTINGS',
            data: { 
                languageId: 'settings'
            }
        },  
        {
            label: 'False',
            detail: '',
            documentation: '',
            type: 'Identifier',
            parent: 'SETTINGS',
            data: { 
                languageId: 'settings'
            }
        }       
    ];

    allSymbols(): SuggestionSymbol[] {
        return this.symbols;
    }

    symbolsWithTypeIn(types: string[]): SuggestionSymbol[] {
        let isContainedInTypes = (symbol: SuggestionSymbol) => types.indexOf(symbol.type) > -1;

        return this.symbols.filter(isContainedInTypes);
    }
}
