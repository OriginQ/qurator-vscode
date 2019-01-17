/**
 * This ts file provides the parser of qcodes.
 */

'use strict';

import {
    ParserRuleContext,
    ANTLRInputStream,
    CommonTokenStream,
    ANTLRErrorListener,
    CommonToken,
    ConsoleErrorListener
} from 'antlr4ts';
import { qcodeLexer } from '../antlr/qcodeLexer';
import { qcodeParser } from '../antlr/qcodeParser';

export namespace QcodesSyntacticParser {
    export function parse(input: string): ParserRuleContext {
        let inputStream = new ANTLRInputStream(input);
        let lexer = new qcodeLexer(inputStream);

        let tokenStream = new CommonTokenStream(lexer);
        let parser = new qcodeParser(tokenStream);

        return parser.qrunes();
    }

    export function parseWithErrorListener(
        input: string,
        errorListener: ANTLRErrorListener<CommonToken>
    ): ParserRuleContext {
        let inputStream = new ANTLRInputStream(input);
        let lexer = new qcodeLexer(inputStream);
        lexer.removeErrorListener(ConsoleErrorListener.INSTANCE);

        let tokenStream = new CommonTokenStream(lexer);
        let parser = new qcodeParser(tokenStream);
        parser.addErrorListener(errorListener);

        return parser.qrunes();
    }

    export function ruleNames(): string[] {
        return qcodeParser.ruleNames;
    }
}
