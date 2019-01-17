/**
 *
 */

'use strict';

import { ANTLRErrorListener, CommonToken, Token, Recognizer, RecognitionException } from 'antlr4ts';
import { Override } from 'antlr4ts/Decorators';
import { ParserError, ParseErrorLevel } from '../types';

export class ErrorListener implements ANTLRErrorListener<CommonToken> {
    errors: ParserError[] = [];

    addError(error: ParserError) {
        this.errors.push(error);
    }

    @Override
    syntaxError<T extends Token>(
        _recognizer: Recognizer<T, any>,
        offendingSymbol: T | undefined,
        line: number,
        charPositionInLine: number,
        msg: string,
        _e: RecognitionException | undefined
    ): void {
        // _e contains the first token of the rule that failed

        if (offendingSymbol.text === ')') {
            this.errors.push({
                line: line - 1,
                start: charPositionInLine,
                end: charPositionInLine + offendingSymbol.text.length,
                message: 'Expecting arguments before symbol )',
                level: ParseErrorLevel.ERROR
            });
        } else {
            this.errors.push({
                line: line - 1,
                start: charPositionInLine,
                end: charPositionInLine + offendingSymbol.text.length,
                message: msg,
                level: ParseErrorLevel.ERROR
            });
        }
    }
}
