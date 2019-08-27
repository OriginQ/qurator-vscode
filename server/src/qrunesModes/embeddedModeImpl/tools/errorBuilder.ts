/**
 *
 */

'use strict';

import { ParserError, ParseErrorLevel } from '../types';
import { ContentPosition } from '../types';

export namespace ErrorBuilder {
    export function error(message: string, position: ContentPosition): ParserError {
        return {
            line: position.line,
            start: position.start,
            end: position.end,
            message,
            level: ParseErrorLevel.ERROR
        };
    }

    export function warning(message: string, position: ContentPosition): ParserError {
        return {
            line: position.line,
            start: position.start,
            end: position.end,
            message,
            level: ParseErrorLevel.WARNING
        };
    }
}
