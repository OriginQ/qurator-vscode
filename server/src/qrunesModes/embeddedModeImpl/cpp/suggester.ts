/**
 * 
 */

'use strict';

import { Suggester, SuggestionSymbol } from '../types';
import { ANTLRInputStream, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { SuggestionsDictionary } from './suggestions/suggestionsDictionary';
import { TreeFolder } from './ast/treeFolder';
import { CPP14Lexer } from './antlr/CPP14Lexer';
import { CPP14Parser } from './antlr/CPP14Parser';
import { MethodsDictionary } from './suggestions/methodsDictionary';
import { SuggestionsCalculator } from './suggestions/suggestionsCalculator';
import { SymbolTable } from '../commonCompiler/types';

export class CppSuggester implements Suggester {
    private dictionary = new SuggestionsDictionary();

    calculateSuggestionsFor(input: string): SuggestionSymbol[] {
        let { parser, tokenStream} = this.parse(input);
        let suggestionCalculator = this.buildSuggestionsCalculator(parser);
        let caretPosition = tokenStream.getTokens().length;
        return suggestionCalculator.calculateAtPosition(caretPosition);
    }

    availableSymbols(): SuggestionSymbol[] {
        return this.dictionary.allSymbols();
    }

    getSymbolTable(input: string): SymbolTable {
        return null;
    }

    private buildSuggestionsCalculator(
        parser: CPP14Parser
    ) {
        let methodsDictionary = new MethodsDictionary(this.dictionary);
        let suggestionCalculator = new SuggestionsCalculator(
            parser,
            methodsDictionary
        );

        return suggestionCalculator;
    }

    private parse(input: string) {
        let inputStream = new ANTLRInputStream(input);
        let lexer = new CPP14Lexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new CPP14Parser(tokenStream);

        let tree = parser.translationunit();
        this.buildSymbolTable(tree);

        return { parser, tokenStream};
    }

    private buildSymbolTable(tree: ParserRuleContext){
        let treeFolder = new TreeFolder();
        treeFolder.visit(tree);
    }
}
