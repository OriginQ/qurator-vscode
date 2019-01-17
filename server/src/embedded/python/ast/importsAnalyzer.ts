/**
 * 
 */

import { ParserRuleContext } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { Python3Visitor } from '../antlr/Python3Visitor';
import { Import_as_nameContext, AtomContext } from '../antlr/Python3Parser';
import { ErrorBuilder } from '../../tools/errorBuilder';
import { ErrorMessages } from '../compiler/tools/errorMessages';
import { PositionAdapter } from '../../tools/positionAdapter';
import { ErrorListener } from '../../tools/errorListener';
import { PyQpandaSDK } from '../libs/PyQpandaSDK';

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

    // visitAtom(ctx: AtomContext) {
    //     let isFromPyQpanda = PyQpandaSDK.containsClassAndMethods(ctx.text);

    //     if (!isFromPyQpanda) {
    //         let message = ErrorMessages.notPreviouslyImported(ctx.text);
    //         let position = PositionAdapter.fromToken(ctx._start);
    //         let error = ErrorBuilder.warning(message, position);

    //         this.errorListener.addError(error);
    //     }
    // }
}
