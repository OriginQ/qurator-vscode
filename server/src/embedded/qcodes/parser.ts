/**
 * This ts file provides qcodes mode parser function.
 */

'use strict';

import { Parser, ParserResult } from '../types';
import { SymbolTableGenerator } from './compiler/symbolTableGenerator';
import { SemanticAnalyzer } from './compiler/semanticAnalyzer';
import { QcodesSyntacticParser } from './compiler/qcodesSyntacticParser';
import { ErrorListener } from '../tools/errorListener';

export class QcodesParser implements Parser {
    parse(input: string): ParserResult {
        let errorListener = new ErrorListener();

        let tree = QcodesSyntacticParser.parseWithErrorListener(input, errorListener);
        let symbolTable = SymbolTableGenerator.symbolTableFor(tree, errorListener);
        SemanticAnalyzer.analyze(tree, symbolTable, errorListener);

        return {
            ast: tree,
            errors: errorListener.errors
        };
    }
}
