/**
 * This ts file provides the parser function of pyqpanda.
 */

'use strict';

import { ANTLRInputStream, CommonTokenStream, ConsoleErrorListener } from 'antlr4ts';
import { Parser, ParserResult } from '../types';
import { Python3Parser } from './antlr/Python3Parser';
import { Python3Lexer } from './antlr/Python3Lexer';
import { TreeFolder } from './ast/treeFolder';
import { SymbolTableGenerator } from './ast/symbolTableGenerator';
import { SemanticAnalyzer } from './ast/semanticAnalyzer';
import { ImportsAnalyzer } from './ast/importsAnalyzer';
import { ErrorListener } from '../tools/errorListener';

export class PythonParser implements Parser {
    parse(input: string): ParserResult {
        let errorListener = new ErrorListener();
        let parser = this.buildPyQpandaParser(input, errorListener);

        let tree = parser.program();
        let folder = new TreeFolder();
        let codeBlock = folder.visit(tree);
        let symbolTable = SymbolTableGenerator.symbolTableFor(codeBlock);
        let errors = SemanticAnalyzer.analyze(codeBlock, symbolTable);
        ImportsAnalyzer.analyze(tree, errorListener);

        return {
            ast: tree,
            errors: errorListener.errors.concat(errors)
        };
    }

    private buildPyQpandaParser(input: string, errorListener: ErrorListener): Python3Parser {
        let inputStream = new ANTLRInputStream(input);
        let lexer = new Python3Lexer(inputStream);
        lexer.removeErrorListener(ConsoleErrorListener.INSTANCE);

        let tokenStream = new CommonTokenStream(lexer);
        let parser = new Python3Parser(tokenStream);
        parser.addErrorListener(errorListener);

        return parser;
    }
}
