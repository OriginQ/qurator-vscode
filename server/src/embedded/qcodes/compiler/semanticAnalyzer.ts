/**
 * This ts file provides the validation of tree.
 */

'use strict';

import { 
    QrunesContext, 
    Args_type_ListContext,
    Func_declarationContext
} from '../antlr/qcodeParser';
import { ParserRuleContext } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { qcodeVisitor } from '../antlr/qcodeVisitor';
import {
    SemanticRulesValidator,
    ExistingDefinationValidationRule
} from './validations/validations';
import { PositionAdapter } from '../../tools/positionAdapter';
import { ErrorListener } from '../../tools/errorListener';
import { SymbolTable } from '../../compiler/types';
import { NameAndType } from './symbolTable';

export namespace SemanticAnalyzer {
    export function analyze(tree: ParserRuleContext, symbolTable: SymbolTable, errorListener: ErrorListener) {
        let validator = new SemanticValidator(symbolTable, errorListener);
        tree.accept(validator);
    }
}

class SemanticValidator extends AbstractParseTreeVisitor<void> implements qcodeVisitor<void> {
    constructor(private symbolTable: SymbolTable, private errorListener: ErrorListener) {
        super();
    }

    defaultResult() {}

    visitQrunes(ctx: QrunesContext) {
        if (ctx.lang_unit().length === 0) {
            return;
        }

        let validator = new SentenceValidator(this.symbolTable, this.errorListener);

        for (let unit of ctx.lang_unit()) {
            unit.accept(validator);
        } 
    }
}

class SentenceValidator extends AbstractParseTreeVisitor<void> implements qcodeVisitor<void> {
    private rulesValidator: SemanticRulesValidator;

    constructor(private symbolTable: SymbolTable, private errorListener: ErrorListener) {
        super();
        this.rulesValidator = new SemanticRulesValidator(this.symbolTable, this.errorListener);
    }

    defaultResult() {}
    
    // Function declaration validation, the main process is the validation of args and it's types.
    visitFunc_declaration(ctx: Func_declarationContext) {
        let method = ctx.func_declarator().Identifier();
        let methodName: string = method.text;
        let position = PositionAdapter.fromTerminalNode(method);

        let nameAndType: NameAndType = null;
        if (ctx.func_declarator().args_type_List() !== undefined) {
            nameAndType = this.getArgsAndType(ctx.func_declarator().args_type_List());
        }

        let names: string[] = null;
        let types: string[] = null;
        if (nameAndType !== null && nameAndType.names !== null) {
            names = nameAndType.names.reverse();
        }
        if (nameAndType !== null && nameAndType.types !== null) {
            types = nameAndType.types.reverse();
        }

        this.rulesValidator.validate([
            new ExistingDefinationValidationRule(methodName, position,  names, types)
        ]);
    }

    private getArgsAndType(ctx: Args_type_ListContext): NameAndType {
        let argsNew = ctx;
        let argsName: string[] = [];
        let argsType: string[] = [];
        for (let i=0; i< 10; i++) {
            if (argsNew !== undefined && argsNew.args_declaration() !== undefined) {
                let argType = argsNew.args_declaration().declaration_Specifier().text;
                let argName = argsNew.args_declaration().declarator().text;
                argsName.push(argName);
                argsType.push(argType);
                argsNew = argsNew.args_type_List();
            } else {
                break;
            }
        }
        return {
            names: argsName,
            types: argsType
        }
    }
}
