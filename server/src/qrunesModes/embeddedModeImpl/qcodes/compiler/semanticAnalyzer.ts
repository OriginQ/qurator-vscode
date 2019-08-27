/**
 * This ts file provides the validation of tree.
 */

'use strict';

import { 
    QrunesContext, 
    Function_declarationContext,
    Parameter_decl_listContext
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
import { SymbolTable } from '../../commonCompiler/types';
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
    
    //Function declaration validation, the main process is the validation of args and it's types.
    visitFunction_declaration(ctx: Function_declarationContext) {
        let declarate_function = ctx.declarate_function();
        if (ctx.declarate_function() != undefined) {
            let function_declarator = declarate_function.function_declarator();

            let method = function_declarator.function_name().Identifier();
            let methodName: string = method.text;
            let position = PositionAdapter.fromTerminalNode(method);

            let nameAndType: NameAndType = null;
            if (function_declarator.parameter_decl_list() !== undefined) {
                nameAndType = this.addArgsAndType(function_declarator.parameter_decl_list());
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
    }

    // Add args and types to scope.
    private addArgsAndType(ctx: Parameter_decl_listContext): NameAndType {
        let argsNew = ctx;
        let argsName: string[] = [];
        let argsType: string[] = [];
        for (let i=0; i<15; i++) {
            if (argsNew !== undefined && argsNew.parameter_declaration() !== undefined) {
                let argType = argsNew.parameter_declaration().parameter_specifier().text;
                let argName = argsNew.parameter_declaration().Identifier().text;
                argsName.push(argName);
                argsType.push(argType);
                argsNew = argsNew.parameter_decl_list();
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
