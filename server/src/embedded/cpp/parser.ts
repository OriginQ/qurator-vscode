/**
 * 
 */

'use strict';

import { ANTLRInputStream, CommonTokenStream, ConsoleErrorListener } from 'antlr4ts';
import { Parser, ParserResult } from '../types';
import { CPP14Parser } from './antlr/CPP14Parser';
import { CPP14Lexer } from './antlr/CPP14Lexer';
import { ErrorListener } from '../tools/errorListener';

export class CppParser implements Parser {
    parse(input: string): ParserResult {
        let errorListener = new ErrorListener();
        let parser = this.buildCppParser(input, errorListener);

        let tree = parser.translationunit();
        return {
            ast: tree,
            errors: errorListener.errors
        };
    }

    private buildCppParser(input: string, errorListener: ErrorListener): CPP14Parser {
        let inputStream = new ANTLRInputStream(input);
        let lexer = new CPP14Lexer(inputStream);
        lexer.removeErrorListener(ConsoleErrorListener.INSTANCE);

        let tokenStream = new CommonTokenStream(lexer);
        let parser = new CPP14Parser(tokenStream);
        parser.addErrorListener(errorListener);

        return parser;
    }
}
