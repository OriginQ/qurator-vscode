/**
 * 
 */

import { ParserRuleContext } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { Python3Visitor } from '../antlr/Python3Visitor';
import { Import_as_nameContext } from '../antlr/Python3Parser';
import { ErrorListener } from '../../tools/errorListener';

export namespace ImportsAnalyzer {
    export function analyze(tree: ParserRuleContext, errorListener: ErrorListener) {
        let validator = new ImportsValidator(errorListener);
        tree.accept(validator);
    }
}

class ImportsValidator extends AbstractParseTreeVisitor<void> implements Python3Visitor<void> {
    imported: string[] = [];

    constructor(private errorListener: ErrorListener) {
        super();
    }

    defaultResult() {}

    visitImport_as_name(ctx: Import_as_nameContext) {
        this.imported.push(ctx.text);
    }
}
