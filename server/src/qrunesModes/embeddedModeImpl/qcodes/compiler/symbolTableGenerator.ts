/**
 * This ts file provides the generators of symbol table and the validation of tree.
 */

'use strict';

import {
    Function_declarationContext,
    Function_definitionContext,
    Iterate_statementContext,
    Parameter_decl_listContext,
    For_stmtContext,
    Select_statementContext,
    Declaration_variableContext,
    Compound_statementContext,
    Single_expressionContext,
    Qif_statementContext,
    Qwhile_statementContext,
    Expression_listContext,
    Lambda_expContext,
    Lambda_bodyContext,
    Inhanced_for_stmtContext,
    Vector_expressionContext,
    Vector_sliceContext,
    VariableInitializerContext,
    Expression_statementContext,
    Init_declaratorlistContext,
    Variable_declaratorContext,
    Include_declarationContext

} from '../antlr/qcodeParser';
import { AbstractParseTreeVisitor, TerminalNode } from 'antlr4ts/tree';
import { qcodeVisitor } from '../antlr/qcodeVisitor';
import { SymbolTableBuilder, RegisterSymbol, QcodesSymbols, NameAndType, 
         singleGate, doubleGate, doubleGateWithAngle, threeGate, fourGate, sixGate, MeasureGate } from './symbolTable';
import { ParserRuleContext } from 'antlr4ts';
import { 
    PreviousDefinitionValidation, 
    PreviousNotDefinitionValidation, 
    PreviousFunctionValidation,
    PreviousFunctionDefinitionValidation,
    functionValidation
 } from './validations/validations';
import { PositionAdapter } from '../../tools/positionAdapter';
import { ErrorListener } from '../../tools/errorListener';
import { SymbolTable } from '../../commonCompiler/types';
import { ContentPosition, ParserError } from '../../types';
import { Scope } from '../../commonCompiler/scope';

// Build symbol table and add matcher to tree.
export namespace SymbolTableGenerator {
    export function symbolTableFor(tree: ParserRuleContext, _errorListener?: ErrorListener): SymbolTable {
        let symbolTable = SymbolTableBuilder.build();

        let errorListener = _errorListener || new ErrorListener();
        let matcher = new DefinitionMatcher(symbolTable, errorListener);
        tree.accept(matcher);

        return symbolTable;
    }
}

class DefinitionMatcher extends AbstractParseTreeVisitor<void> implements qcodeVisitor<void> {
    private previousDefinitionValidation: PreviousDefinitionValidation;
    private functionValidation: functionValidation;
    private previousFunctionValidation: PreviousFunctionValidation;
    private previousNotDefinitionValidation: PreviousNotDefinitionValidation;
    private previousFunctionDefinitionValidation: PreviousFunctionDefinitionValidation;

    constructor(private symbolTable: SymbolTable, private errorListener: ErrorListener) {
        super();
        this.previousDefinitionValidation = new PreviousDefinitionValidation(this.symbolTable, this.errorListener);
        this.functionValidation = new functionValidation(this.symbolTable, this.errorListener);
        this.previousFunctionValidation = new PreviousFunctionValidation(this.symbolTable, this.errorListener);
        this.previousNotDefinitionValidation = new PreviousNotDefinitionValidation(this.symbolTable, this.errorListener);
        this.previousFunctionDefinitionValidation = new PreviousFunctionDefinitionValidation(this.symbolTable, this.errorListener);
    }

    defaultResult() {}

    visitInclude_declaration(ctx: Include_declarationContext) {
        let file = ctx.single_expression();
        let fileName = file.text;
        let currScope = new Scope(this.symbolTable.currentScope, "include_" + fileName, file._start.line, file._start.line);

        this.symbolTable.pushList(currScope);
    }

    // Function declaration validation, the main process is adding scope (including parameters and types) 
    // to symbol table, repeated validations.
    visitFunction_declaration(ctx: Function_declarationContext) {
        let declarate_function = ctx.declarate_function();
        if (ctx.declarate_function() != undefined) {
            let function_declarator = declarate_function.function_declarator();
            
            let startLine: number = declarate_function._start.line;
            let endLine: number = startLine;
            let methodId = function_declarator.function_name().Identifier();

            let methodName: string = methodId.text + '_define';
            this.previousFunctionDefinitionValidation.apply(methodName, PositionAdapter.fromTerminalNode(methodId));

            let nameAndType: NameAndType = null;
            if (function_declarator.parameter_decl_list() !== undefined) {
                nameAndType = this.addArgsAndType(function_declarator.parameter_decl_list());
            }

            let currScope = null;
            if (nameAndType !== null) {
                currScope = new Scope(this.symbolTable.currentScope, methodName, startLine, endLine, nameAndType.names.reverse(), nameAndType.types.reverse());
            } else {
                currScope = new Scope(this.symbolTable.currentScope, methodName, startLine, endLine);
            }
            this.symbolTable.pushList(currScope);

            this.visitChildren(ctx);  
        }    
    }

    // Function definition validation, the main process is adding scope (including parameters and types) 
    // to symbol table and symbol repeated validations.
    visitFunction_definition(ctx: Function_definitionContext) {
        let declarate_function = ctx.declarate_function();
        if (ctx.declarate_function() != undefined) {
            let function_declarator = declarate_function.function_declarator();
            let function_body = ctx.function_body();

            let startLine: number = declarate_function._start.line;
            let endLine: number = function_body.compound_statement().RBRACE().symbol.line;
            let methodId = function_declarator.function_name().Identifier();

            let methodName: string = methodId.text + '_method';
            this.previousFunctionDefinitionValidation.apply(methodName, PositionAdapter.fromTerminalNode(methodId));

            let nameAndType: NameAndType = null;
            if (function_declarator.parameter_decl_list() !== undefined) {
                nameAndType = this.addArgsAndType(function_declarator.parameter_decl_list());
            }

            let currScope = null;
            if (nameAndType !== null) {
                currScope = new Scope(this.symbolTable.currentScope, methodName, startLine, endLine, nameAndType.names.reverse(), nameAndType.types.reverse());
            } else {
                currScope = new Scope(this.symbolTable.currentScope, methodName, startLine, endLine);
            }
            this.symbolTable.pushList(currScope);

            this.visitChildren(ctx);    
        }     
    }

    // Function args validation, the main process is repeated validation and 
    // adding symbol to current scope.
    visitParameter_decl_list(ctx: Parameter_decl_listContext) {
        let declarator = ctx.parameter_declaration();
        if (declarator !== undefined) {
            let specifier = ctx.parameter_declaration().parameter_specifier();
            let args = declarator.Identifier();
            if (args !== undefined) {
                let scopes: Scope[] = this.symbolTable.currentScopes;
                let line: number = args.symbol.line;
                let currentScope: Scope = this.getScope(scopes, line, line); 
                this.previousDefinitionValidation.applyScope(currentScope, args.text, PositionAdapter.fromTerminalNode(args));
        
                let registerName = args.text;
                let registerType = this.symbolTable.lookup(specifier.text);
                let register = new RegisterSymbol(registerName, registerType);
                this.symbolTable.defineList(currentScope, register, ctx.start.line);
            }
        }

        let decl_list = ctx.parameter_decl_list();
        if (decl_list != undefined) {
            this.visitParameter_decl_list(ctx.parameter_decl_list());
        }else {
            this.visitChildren(ctx);
        }
    }

    // Iteration validation, it's mainly the validation of for-loop, the main process is 
    // adding scope to symbol table.
    visitIterate_statement(ctx: Iterate_statementContext) {
        let startLine: number = ctx.FOR().symbol.line;
        let endLine: number = 0; 

        if (ctx.statement() != undefined) {
            if (ctx.statement().compound_statement() != undefined) {
                let compRight = ctx.statement().compound_statement().RBRACE();
                endLine = compRight.symbol.line;
            } else {
                endLine = startLine + 1;
            }
        }

        let forName: string = ctx.FOR().text;
        let scopes: Scope[] = this.symbolTable.currentScopes;
        let currentScope: Scope = this.getScope(scopes, startLine, endLine);     

        let IterateScope = new Scope(currentScope, forName, startLine, endLine);
        this.symbolTable.pushList(IterateScope);

        this.visitChildren(ctx);
    }

    // For-loop parameter validation, the main process is repeated validation and 
    // adding symbol to current scope.
    visitFor_stmt(ctx: For_stmtContext) {
        if (ctx.childCount >= 1) {
            let forStart = ctx.for_start();
            if (forStart !== undefined && forStart.text !== "") {
                if (forStart.LET() != undefined) {
                    let declarationText = ctx.for_start().Identifier();
                    this.validDeclaration(declarationText, QcodesSymbols.let);
                } else if (forStart.single_expression() !== undefined) {
                    this.validSingle_expression(forStart.single_expression()); 
                }
            }

            let forStep = ctx.for_step();
            if (forStep !== undefined && forStep.text !== "") {
                this.visitSingle_expression(forStep.single_expression());
            }

            let forCondition = ctx.for_condition();
            if (forCondition !== undefined && forCondition.text !== "") {
                this.visitSingle_expression(forCondition.single_expression());
            }
        }
    }

    visitInhanced_for_stmt(ctx: Inhanced_for_stmtContext) {
        let type: string = null;
        if (ctx.childCount >= 1) {
            if (ctx.construct_primary_type() != undefined) {
                type = ctx.construct_primary_type()._start.text;
            }
            if (ctx.Identifier() != undefined) {
                this.validDeclaration(ctx.Identifier(), type);
            }
            if (ctx.single_expression() != undefined) {
                this.visitSingle_expression(ctx.single_expression());
            }
        }
    }

    // Select validation, it's mainly the validation of if statement, the main process is
    // adding scopes(if, else if, else) to symbol table.
    visitSelect_statement(ctx: Select_statementContext) {
        let selects = ctx.statement();
        if (selects.length === 1) {
            let currentScope = this.selectScopeIf(ctx, 0, true);
            this.symbolTable.pushList(currentScope);
        } else if (selects.length === 2 ) {
            let text: string = ctx.statement(1).text;
            let regex: RegExp = /.*if\s*\(.*/;
            let match = text.match(regex);
            if (match) {
                let currentScopeIf = this.selectScopeIf(ctx, 0, true);
                this.symbolTable.pushList(currentScopeIf);
            } else {
                let currentScopeElseIf = this.selectScopeIf(ctx, 0, false);
                this.symbolTable.pushList(currentScopeElseIf);
            }
            
            let currentScopeElse = this.selectScopeElse(ctx, 1);
            if (currentScopeElse != null) {
                this.symbolTable.pushList(currentScopeElse);
            }
        }
        this.visitChildren(ctx);
    }


    // Declaration variable validation, the main process is adding validation to variables or arrays. 
    visitDeclaration_variable(ctx: Declaration_variableContext) {
        let variable_decl_specifier = ctx.variable_decl_specifier();
        let type: string = null;
        if (variable_decl_specifier != undefined) {
            type = variable_decl_specifier._start.text;
        }

        let init_declaratorlist = ctx.init_declaratorlist();
        if (variable_decl_specifier != undefined) {
            this.validDeclaration(init_declaratorlist, type);
            this.visitInit_declaratorlist(ctx.init_declaratorlist());
        }
    }

    visitInit_declaratorlist(ctx: Init_declaratorlistContext) {
        if (ctx.variable_declarator != undefined) {
            this.visitVariable_declarator(ctx.variable_declarator());
        } 
        if (ctx.init_declaratorlist() != undefined) {
            this.visitInit_declaratorlist(ctx.init_declaratorlist());
        }
    }

    visitVariable_declarator(ctx: Variable_declaratorContext) {
        if(ctx.variableInitializer() != undefined) {
            this.visitVariableInitializer(ctx.variableInitializer());
        }
    }

    visitVariableInitializer(ctx: VariableInitializerContext) {
        if (ctx.single_expression() != undefined) {
            this.visitSingle_expression(ctx.single_expression());
        }
        if (ctx.variableInitializer() != undefined) {
            this.visitVariableInitializer(ctx.variableInitializer());
        }
    }

    // Validation of expression statement.
    visitExpression_statement(ctx: Expression_statementContext) {
        if (ctx.single_expression() != undefined) {
            this.visitSingle_expression(ctx.single_expression());
        }
    }

    // single_expression validation, the main process is the repeated validation of 
    // variables, arrays and method call.
    visitSingle_expression(ctx: Single_expressionContext) {
        if (ctx._get_inside_exp != undefined) {
            this.visitSingle_expression(ctx.single_expression(0));
            if (ctx._get_inside_bee_exp != undefined) {
                if (ctx.single_expression(1)._function_call_exp != undefined) {
                    if (ctx.single_expression(1).expression_list() != undefined) {
                        this.visitExpression_list(ctx.single_expression(1).expression_list());
                    }
                }
            }
        }
        
        if (ctx._assign_exp_left != undefined) {
            this.visitSingle_expression(ctx.single_expression(0));
            if (ctx._assign_exp_right != undefined) {
                this.visitSingle_expression(ctx.single_expression(1));
            }
        }

        if (ctx._bracket_exp != undefined) {
            this.visitExpression_list(ctx.expression_list());
        }

        if (ctx._parenthesis_exp != undefined) {
            this.visitExpression_list(ctx.expression_list());
        }

        if (ctx._shift_exp_left_exp != undefined) {
            this.visitSingle_expression(ctx.single_expression(0));
            if (ctx._shift_exp_right_exp != undefined) {
                this.visitSingle_expression(ctx.single_expression(1));
            }
        }

        if (ctx._binary_add_left_exp != undefined) {
            this.visitSingle_expression(ctx.single_expression(0));
            if (ctx._binary_add_right_exp != undefined) {
                this.visitSingle_expression(ctx.single_expression(1));
            }
        }

        if (ctx._binary_mul_left_exp != undefined) {
            this.visitSingle_expression(ctx.single_expression(0));
            if (ctx._binary_mul_right_exp != undefined) {
                this.visitSingle_expression(ctx.single_expression(1));
            }
        }

        if (ctx._relationship_left_exp != undefined) {
            this.visitSingle_expression(ctx.single_expression(0));
            if (ctx._relationship_right_exp != undefined) {
                this.visitSingle_expression(ctx.single_expression(1));
            }
        }

        if (ctx._equal_left_exp != undefined) {
            this.visitSingle_expression(ctx.single_expression(0));
            if (ctx._equal_right_exp != undefined) {
                this.visitSingle_expression(ctx.single_expression(1));
            }
        }

        if (ctx._logic_left_exp != undefined) {
            this.visitSingle_expression(ctx.single_expression(0));
            if (ctx._logic_right_exp != undefined) {
                this.visitSingle_expression(ctx.single_expression(1));
            }
        }

        if (ctx._unary_exp != undefined) {
            this.visitSingle_expression(ctx.single_expression(0));
        }

        if (ctx._postfix_add_exp != undefined) {
            this.visitSingle_expression(ctx.single_expression(0));
        }

        if (ctx._postfix_dec_exp != undefined) {
            this.visitSingle_expression(ctx.single_expression(0));
        }

        if (ctx.lambda_exp() != undefined) {
            this.visitLambda_exp(ctx.lambda_exp());
        }

        if (ctx._triple_exp_condition != undefined) {
            this.visitSingle_expression(ctx.single_expression(0));
            if (ctx._triple_exp_true != undefined) {
                this.visitSingle_expression(ctx.single_expression(1));
            }
            if (ctx._triple_exp_false != undefined) {
                this.visitSingle_expression(ctx.single_expression(2));
            }
        }
        
        if (ctx._get_index_exp != undefined) {
            if (ctx.single_expression() != undefined) {
                this.visitSingle_expression(ctx.single_expression(0));
            }
            if (ctx.vector_expression() != undefined) {
                this.visitVector_expression(ctx.vector_expression());
            }
        }

        if (ctx.Identifier() != undefined) {
            this.validSingle_expression(ctx.Identifier());
        }

        if (ctx._function_call_exp != undefined) {
            if (ctx.single_expression(0).childCount > 1) {
                this.visitSingle_expression(ctx.single_expression(0));
            } else {
                let errors: ParserError[] = this.errorListener.errors;
                this.validQuantumGate(ctx, errors); 
            }

            if (ctx.expression_list() != undefined) {
                this.visitExpression_list(ctx.expression_list());
            }
            
            if (ctx.single_expression(0).Identifier() != undefined) {
                //this.validFunction(ctx.single_expression(0).Identifier());
            }
        }
    }

    visitExpression_list(ctx: Expression_listContext) {
        if (ctx.single_expression() != undefined) {
            this.visitSingle_expression(ctx.single_expression());
        }
        if (ctx.expression_list() != undefined) {
            this.visitExpression_list(ctx.expression_list());
        }
    }

    visitVector_expression(ctx: Vector_expressionContext) {
        if (ctx.single_expression() != undefined) {
            this.visitSingle_expression(ctx.single_expression());
        }
        if (ctx.vector_slice() != undefined) {
            this.visitVector_slice(ctx.vector_slice());
        }
    }

    visitVector_slice(ctx: Vector_sliceContext) {
        if (ctx._vector_bound_alias_l != undefined) {
            this.visitSingle_expression(ctx.single_expression(0));
        }

        if (ctx._vector_bound_alias_r != undefined) {
            this.visitSingle_expression(ctx.single_expression(1));
        }
    }

    visitLambda_exp(ctx: Lambda_expContext) {
        if (ctx.parameter_decl_list() != undefined) {
            this.visitParameter_decl_list(ctx.parameter_decl_list());
        }

        if (ctx.lambda_body() != undefined) {
            this.visitLambda_body(ctx.lambda_body());
        }
    }

    visitLambda_body(ctx: Lambda_bodyContext) {
        this.visitChildren(ctx);
    }

    // Q_if parameter validation, the main process is repeated validation of cvec.
    visitQif_statement(ctx: Qif_statementContext) {
        this.validCbitOrVector(ctx);
    }

    // Q_while parameter validation, the main process is repeated validation of cvec.
    visitQwhile_statement(ctx: Qwhile_statementContext) {
        this.validCbitOrVector(ctx);
    }

    // Validation of function, the main process is repeated validation of function.
    private validFunction(ident: TerminalNode) {
        this.previousFunctionValidation.applyNotFunction(ident.text, PositionAdapter.fromTerminalNode(ident));
    }

    // validation of quantum gate operation, return function is or not quantum operation.
    private validQuantumGate(ctx: Single_expressionContext, errors: ParserError[]) {
        let funcName = ctx.single_expression(0)._start.text;
        if (funcName in singleGate) {
            if (ctx.expression_list() == undefined) {
                this.validNoArgs(ctx.single_expression(0)._start, ctx.RPAREN());
            } else {
                this.validSingleGate(ctx.expression_list(), errors);
            }
        }

        if (funcName in doubleGate) {
            if (ctx.expression_list() == undefined) {
                this.validNoArgs(ctx.single_expression(0)._start, ctx.RPAREN());
            } else {
                this.validDoubleGate(ctx.expression_list(), 0, errors);
            }
        }

        if (funcName in doubleGateWithAngle) {
            if (ctx.expression_list() == undefined) {
                this.validNoArgs(ctx.single_expression(0)._start, ctx.RPAREN());
            } else {
                this.validDoubleGate(ctx.expression_list(), 1, errors);
            }
        }

        if (funcName in MeasureGate) {
            if (ctx.expression_list() == undefined) {
                this.validNoArgs(ctx.single_expression(0)._start, ctx.RPAREN());
            } else {
                this.validDoubleGate(ctx.expression_list(), 2, errors);
            }
        }

        if (funcName in threeGate) {
            if (ctx.expression_list() == undefined) {
                this.validNoArgs(ctx.single_expression(0)._start, ctx.RPAREN());
            } else {
                this.validThreeGate(ctx.expression_list(), errors);
            }
        }

        if (funcName in fourGate) {
            if (ctx.expression_list() == undefined) {
                this.validNoArgs(ctx.single_expression(0)._start, ctx.RPAREN());
            } else {
                this.validFourGate(ctx.expression_list());
            }
        }

        if (funcName in sixGate) {
            if (ctx.expression_list() == undefined) {
                this.validNoArgs(ctx.single_expression(0)._start, ctx.RPAREN());
            } else {
                this.validSixGate(ctx.expression_list(), errors);
            }
        }
    }

    private validError(errors: ParserError[], position: ContentPosition): boolean {
        for(let err of errors) {
            if (err.line == position.line && err.start == position.start) {
                return false;
            }
        }
        return true;
    }

    // Validation of quantum gate function's args is or not null
    private validNoArgs(ctx: any, position: TerminalNode) {
        this.functionValidation.applyNoArgs(ctx.text, PositionAdapter.fromTerminalNode(position));
    }

    // Validation of quantum gate function's args is single. errors to judge add error or not.
    private validSingleGate(ctx: Expression_listContext, errors: ParserError[]) {
        let flag = this.validError(errors, PositionAdapter.fromToken(ctx.single_expression()._start));
        if(flag && (ctx.single_expression().Identifier() != undefined)||
                    (ctx.single_expression().single_expression() != undefined)) {
            let num = 1;
            let argsName = this.getArgsName(ctx);
            let startLine: number = ctx.single_expression()._start.line;
            let endLine: number = ctx.single_expression()._start.line;
            let scopes: Scope[] = this.symbolTable.currentScopes;
            let currentScope: Scope = this.getScope(scopes, startLine, endLine); 

            if (ctx.expression_list() != undefined) {
                num += 1;
            }
            this.functionValidation.applySingle(currentScope, argsName, num, PositionAdapter.fromToken(ctx.single_expression()._start));
        }
    }

    // Validation of quantum gate function's args is double.
    // flag_index: 0->double gate 1->double gate with angle 2->Measure gate
    private validDoubleGate(ctx: Expression_listContext, flag_index: number, errors: ParserError[]) {
        let num = 1;
        let args = new Array<string>();
        let positions = new Array<ContentPosition>();
        let argsName1 = null;
        let argsName2 = null;

        let flag1 = this.validError(errors, PositionAdapter.fromToken(ctx.single_expression()._start));
        if (flag1) {
            argsName1 = this.getArgsName(ctx);
            positions.push(PositionAdapter.fromToken(ctx.single_expression()._start));
        }
        
        if (ctx.expression_list() == undefined) {
            num = 1;
        } else if (ctx.expression_list().expression_list() != undefined) {
            num = 3;
        } else {
            num = 2;
            let flag2 = this.validError(errors, PositionAdapter.fromToken(ctx.expression_list()._start));
            if (flag2) {
                argsName2 = this.getArgsName(ctx.expression_list());
                positions.push(PositionAdapter.fromToken(ctx.expression_list()._start));
            }
        }
        args.push(argsName1);
        args.push(argsName2);
        let startLine: number = ctx.single_expression()._start.line;
        let endLine: number = ctx.single_expression()._start.line;
        let scopes: Scope[] = this.symbolTable.currentScopes;
        let currentScope: Scope = this.getScope(scopes, startLine, endLine); 
        if (flag_index == 0) {
            this.functionValidation.applyDouble(currentScope, args, num, positions);
        } else if (flag_index == 1) {
            this.functionValidation.applyDoubleWithAngle(currentScope, args, num, positions);
        } else if (flag_index == 2) {
            this.functionValidation.applyMeasure(currentScope, args, num, positions);
        }
    }
    
    // Validation of quantum gate function's args is three.
    private validThreeGate(ctx: Expression_listContext, errors: ParserError[]) {
        let num = 1;
        let args = new Array<string>();
        let positions = new Array<ContentPosition>();
        let argsName1 = null;
        let argsName2 = null;
        let argsName3 = null;
        
        let flag1 = this.validError(errors, PositionAdapter.fromToken(ctx.single_expression()._start));
        if (flag1) {
            argsName1 = this.getArgsName(ctx);
            positions.push(PositionAdapter.fromToken(ctx.single_expression()._start));
        }
        if (ctx.expression_list() == undefined) {
            num = 1;
        } else if (ctx.expression_list().expression_list() == undefined) {
            num = 2;
            let flag2 = this.validError(errors, PositionAdapter.fromToken(ctx.expression_list()._start));
            if (flag2) {
                argsName2 = this.getArgsName(ctx.expression_list());
                positions.push(PositionAdapter.fromToken(ctx.expression_list()._start));
            }        
        } else if (ctx.expression_list().expression_list().expression_list() == undefined) {
            num = 3;
            let flag3 = this.validError(errors, PositionAdapter.fromToken(ctx.expression_list().expression_list()._start));
            if (flag3) {
                argsName3 = this.getArgsName(ctx.expression_list().expression_list());
                positions.push(PositionAdapter.fromToken(ctx.expression_list().expression_list()._start));
            }        
        } else {
            num = 4;
        }
        args.push(argsName1);
        args.push(argsName2);
        args.push(argsName3);
        let startLine: number = ctx.single_expression()._start.line;
        let endLine: number = ctx.single_expression()._start.line;
        let scopes: Scope[] = this.symbolTable.currentScopes;
        let currentScope: Scope = this.getScope(scopes, startLine, endLine); 
        this.functionValidation.applyThree(currentScope, args, num, positions);
    }

    // Validation of quantum gate function's args is four.
    private validFourGate(ctx: Expression_listContext) {
        let num = 1;
        let expression: any = ctx;
        let expressionList = new Array<any>();
        let args = new Array<string>();
        let positions = new Array<ContentPosition>();

        while (expression.childCount > 1) {
            expressionList.push(expression.getChild(0));
            args.push(this.getArgsName(expression));
            positions.push(PositionAdapter.fromToken(expression.single_expression()._start));
            expression = expression.getChild(0);
            num++;
        }
        args.push(this.getArgsName(expression));
        positions.push(PositionAdapter.fromToken(expression.single_expression()._start));

        let startLine: number = ctx.single_expression()._start.line;
        let endLine: number = ctx.single_expression()._start.line;
        let scopes: Scope[] = this.symbolTable.currentScopes;
        let currentScope: Scope = this.getScope(scopes, startLine, endLine); 
        this.functionValidation.applyFour(currentScope, args, num, positions);
    }

    // Validation of quantum gate function's args is six.
    private validSixGate(ctx: Expression_listContext, errors: ParserError[]) {
        let num = 1;
        let expression: any = ctx;
        let expressionList = new Array<any>();
        let args = new Array<string>();
        let positions = new Array<ContentPosition>();

        while (expression.childCount > 1) {
            expressionList.push(expression.getChild(0));
            if (num <= 2) {
                let flag = this.validError(errors, PositionAdapter.fromToken(expression.single_expression()._start));
                if (flag) {
                    args.push(this.getArgsName(expression));
                    positions.push(PositionAdapter.fromToken(expression.single_expression()._start));
                } else {
                    args.push(null);
                    positions.push(null);
                }
            }
            expression = expression.getChild(0);
            num++;
        }
        args.push(this.getArgsName(expression));
        positions.push(PositionAdapter.fromToken(expression.single_expression()._start));

        let startLine: number = ctx.single_expression()._start.line;
        let endLine: number = ctx.single_expression()._start.line;
        let scopes: Scope[] = this.symbolTable.currentScopes;
        let currentScope: Scope = this.getScope(scopes, startLine, endLine); 
        this.functionValidation.applySix(currentScope, args, num, positions);
    }

    // Validation of qif or qwhile.
    private validCbitOrVector(ctx: any) {
        let condition = ctx.single_expression();
        if (condition !== undefined && condition.text !== "") {
            let conditionText = condition.text;
            let startLine: number = condition._start.line;
            let endLine: number = condition._start.line;
            let scopes: Scope[] = this.symbolTable.currentScopes;
            let currentScope: Scope = this.getScope(scopes, startLine, endLine); 
            
            if (conditionText.indexOf('[') != -1) {
                let pattern = /\w+/g;
                let names = pattern.exec(conditionText);
                if (names.length > 0) {
                    let name = names[0];        
                    this.previousDefinitionValidation.applyCbit(currentScope, name, PositionAdapter.fromToken(condition._start), QcodesSymbols.cbit);
                }
            } else {
                this.previousDefinitionValidation.applyCbit(currentScope, conditionText, PositionAdapter.fromToken(condition._start), QcodesSymbols.cbit);
            }
            this.visitChildren(ctx.single_expression());
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

    // Validation of declaration and literal_declaration, the main process is repeated validation and 
    // adding symbol to current scope
    private validDeclaration(ctx: any, type: string) {
        let scopes: Scope[] = this.symbolTable.currentScopes;
        let startLine: number = -1;
        let endLine: number = -1;
        let currentScope = null;
        let registerName = null;

        if (ctx instanceof TerminalNode) {
            startLine = ctx.symbol.line;
            endLine = ctx.symbol.line;
            currentScope = this.getScope(scopes, startLine, endLine); 
            registerName = ctx.symbol.text;
            this.previousDefinitionValidation.applyScope(currentScope, ctx.text, PositionAdapter.fromTerminalNode(ctx));
        } else {
            startLine = ctx._start.line;
            endLine = ctx._start.line;
            currentScope = this.getScope(scopes, startLine, endLine); 
            registerName = ctx._start.text;
            this.previousDefinitionValidation.applyScope(currentScope, ctx._start.text, PositionAdapter.fromToken(ctx._start));
        }

        let registerType = this.symbolTable.lookup(type);
        let register = new RegisterSymbol(registerName, registerType);

        this.symbolTable.defineList(currentScope, register, startLine);
    }

    /** Validation of if-statement, the main process is adding scope to select statement.
        index: statement number(0 or 1)
        flag: true->if  false->else if
    */
    private selectScopeIf(ctx: Select_statementContext, index: number, flag: boolean): Scope {
        let startLine: number = ctx.statement(index)._start.line;
        let endLine: number = this.validSymbol(ctx.statement(index).compound_statement(), ctx.IF());
        let name = flag? ctx.IF().text: 'else_' + ctx.IF().text;

        let scopes: Scope[] = this.symbolTable.currentScopes;
        let currentScope: Scope = this.getScope(scopes, startLine, endLine); 
        
        let selectScope = new Scope(currentScope, name, startLine, endLine);
        return selectScope;
    }

    // Validation of else-statement, the main process is adding scope to select statement.
    private selectScopeElse(ctx: Select_statementContext, index: number): Scope {      
        let text: string = ctx.statement(index).text;
        let regex: RegExp = /.*if\s*\(.*/;
		let match = text.match(regex);
		if (match) {
			return null;
        }
        
        let startLine: number = ctx.statement(index)._start.line;
        let endLine: number = this.validSymbol(ctx.statement(index).compound_statement(),  ctx.ELSE());
        let ifName: string = ctx.ELSE().text;

        let scopes: Scope[] = this.symbolTable.currentScopes;
        let currentScope: Scope = this.getScope(scopes, startLine, endLine); 
        
        let selectScopeElse = new Scope(currentScope, ifName, startLine, endLine);
        return selectScopeElse;
    }

    // Validation of single_expression, the main process is repeated validation of unary.
    private validSingle_expression(ident: any) {
        let startLine: number = 0;
        let endLine: number = 0;
        let text: string = null;
        let position: ContentPosition = null;
        if (ident instanceof TerminalNode) {
            startLine = ident.symbol.line;
            endLine = ident.symbol.line;
            text = ident.symbol.text;
            position = PositionAdapter.fromTerminalNode(ident)
        } else {
            startLine = ident._start.line;
            endLine = ident._start.line;
            text = ident._start.text;
            position = PositionAdapter.fromToken(ident._start)
        }
        let scopes: Scope[] = this.symbolTable.currentScopes;
        let currentScope: Scope = this.getScope(scopes, startLine, endLine); 

        this.previousNotDefinitionValidation.apply(currentScope, text, position);
    }

    // Get the current scope.
    private getScope(scopes: Scope[], startLine: number, endLine: number): Scope {
        let map= new Map<number, Scope>();
        if (scopes.length > 0) {
            for (let sc of scopes) {
                if (sc.startLine <= startLine && sc.endLine >= endLine) {
                    map.set(sc.startLine, sc); 
                }
            }
        }

        let num: number = 0;
        if (map.size > 0) {
            for (let s of map.keys()) {
                if (s > num) {
                    num = s;
                }
            }
            return map.get(num);
        }
        return null;
    }

    // Validation the exists of braces.
    private validSymbol(comp: Compound_statementContext, node: any): number {
        let flagLeft = false;
        let flagRight = false;
        let endLine = 65536;

        if (comp === undefined) {
            flagLeft = true;
            flagRight = true;
            if (node instanceof TerminalNode) {
                this.previousNotDefinitionValidation.applySymbol(PositionAdapter.fromTerminalNode(node), '{');
            } else {
                this.previousNotDefinitionValidation.applySymbol(PositionAdapter.fromToken(node._start), '{');
            }  
        } else {
            if (comp.childCount > 0) { 
                for(let node of comp.children) {
                    if (node.text == '{') {
                        flagLeft = true;
                    }
                    if (node.text === '}') {
                        endLine = comp.RBRACE().symbol.line;
                        flagRight = true;
                        break;
                    }
                }
            }
        }

        if (!flagLeft) {
            this.previousNotDefinitionValidation.applySymbol(PositionAdapter.fromToken(comp._start), '{');
        }
        if (!flagRight) {
            this.previousNotDefinitionValidation.applySymbol(PositionAdapter.fromTerminalNode(comp.LBRACE()), '}');
        }
        return endLine;
    }

    private getArgsName(ctx: Expression_listContext): string {
        let argsName = null;
        if (ctx.single_expression().childCount > 1) {
            argsName = ctx.single_expression().single_expression(0)._start.text;
        } else {
            argsName = ctx.single_expression()._start.text;
        }
        return argsName;
    }
}
