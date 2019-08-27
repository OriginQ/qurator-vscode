'use strict';

import { AbstractParseTreeVisitor, TerminalNode } from 'antlr4ts/tree';
import { Block, CodeBlock } from './types';
import { CPP14Visitor } from '../antlr/CPP14Visitor';

export class TreeFolder extends AbstractParseTreeVisitor<Block> implements CPP14Visitor<Block> {
    defaultResult(): Block {
        return new CodeBlock();
    }
}