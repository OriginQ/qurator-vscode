/**
 *
 */

'use strict';

import { TerminalNode } from 'antlr4ts/tree';
import { ContentPosition } from '../types';
import { Token } from 'antlr4ts';

export namespace PositionAdapter {
    export function fromTerminalNode(node: TerminalNode): ContentPosition {
        return {
            line: node.symbol.line - 1,
            start: node.symbol.charPositionInLine,
            end: node.symbol.charPositionInLine + node.text.length
        };
    }

    export function fromToken(token: Token): ContentPosition {
        return {
            line: token.line - 1,
            start: token.charPositionInLine,
            end: token.charPositionInLine + token.text.length
        };
    }
}
