/**
 * This ts file provides settings parser, include parse and parse with error listener function.
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
import { settingLexer } from '../antlr/settingLexer';
import { settingParser } from '../antlr/settingParser';

export namespace SettingsSyntacticParser {
    export function parse(input: string): ParserRuleContext {
        let inputStream = new ANTLRInputStream(input);
        let lexer = new settingLexer(inputStream);

        let tokenStream = new CommonTokenStream(lexer);
        let parser = new settingParser(tokenStream);

        return parser.qsetting();
    }

    export function parseWithErrorListener(
        input: string,
        errorListener: ANTLRErrorListener<CommonToken>
    ): ParserRuleContext {
        let inputStream = new ANTLRInputStream(input);
        let lexer = new settingLexer(inputStream);
        lexer.removeErrorListener(ConsoleErrorListener.INSTANCE);

        let tokenStream = new CommonTokenStream(lexer);
        let parser = new settingParser(tokenStream);
        parser.addErrorListener(errorListener);

        return parser.qsetting();
    }

    export function ruleNames(): string[] {
        return settingParser.ruleNames;
    }
}
