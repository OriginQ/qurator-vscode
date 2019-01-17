/**
 * 
 */

import { VisitableItem } from '../types';
import { ParserError, ParseErrorLevel } from '../../../types';

export namespace ErrorBuilder {
    export function warning(message: string, item: VisitableItem): ParserError {
        return {
            line: item.start.line,
            start: item.start.column,
            end: item.end.column,
            message,
            level: ParseErrorLevel.WARNING
        };
    }
}
