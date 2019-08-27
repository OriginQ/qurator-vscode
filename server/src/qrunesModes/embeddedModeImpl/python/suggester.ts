/**
 * This ts file provides the python suggester, include calculate suggestions for python
 * and pyqpanda's symbols dictionary.
 */

'use strict';

import { Suggester, SuggestionSymbol } from '../types';
import { SuggestionsDictionary } from './suggestions/suggestionsDictionary';
import { ANTLRInputStream, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { Python3Lexer } from './antlr/Python3Lexer';
import { Python3Parser } from './antlr/Python3Parser';
import { SuggestionsCalculator } from './suggestions/suggestionsCalculator';
import { MethodsDictionary } from './suggestions/methodsDictionary';
import { SymbolTableGenerator } from './ast/symbolTableGenerator';
import { TreeFolder } from './ast/treeFolder';
import { SymbolTable } from '../commonCompiler/types';

export class PythonSuggester implements Suggester {
    private dictionary = new SuggestionsDictionary();

    calculateSuggestionsFor(input: string): SuggestionSymbol[] {
        let { parser, tokenStream, symbolTable } = this.parse(input);
        let suggestionCalculator = this.buildSuggestionsCalculator(parser);
        let caretPosition = tokenStream.getTokens().length;

        return suggestionCalculator.calculateAtPosition(caretPosition);
    }

    availableSymbols(): SuggestionSymbol[] {
        return this.dictionary.allSymbols();
    }

    getSymbolTable(input: string): SymbolTable {
        let { parser, tokenStream, symbolTable } = this.parse(input);
        return symbolTable;
    }

    private parse(input: string) {
        let inputStream = new ANTLRInputStream(input);
        let lexer = new Python3Lexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new Python3Parser(tokenStream);

        let tree = parser.program();
        let symbolTable = this.buildSymbolTable(tree);

        return { parser, tokenStream, symbolTable };
    }

    private buildSuggestionsCalculator(
        parser: Python3Parser
    ) {
        let methodsDictionary = new MethodsDictionary(this.dictionary);
        let suggestionCalculator = new SuggestionsCalculator(
            parser,
            methodsDictionary
        );

        return suggestionCalculator;
    }

    private buildSymbolTable(tree: ParserRuleContext) {
        let treeFolder = new TreeFolder();
        let statements = treeFolder.visit(tree);
        let symbolTable = SymbolTableGenerator.symbolTableFor(statements);

        return symbolTable;
    }
}
