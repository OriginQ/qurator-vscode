/**
 * This ts file provides the generators of symbol table and the validation of tree.
 */

'use strict';

import {
    Func_definitionContext,
    DeclarationContext,
    Args_declarationContext,
    Iterate_stmtContext,
    Select_stmtContext,
    Unary_expContext,
    Func_declarationContext,
    Argument_exp_ListContext,
    Args_type_ListContext,
    Quantum_gate_stmtContext,
    Measurement_stmtContext,
    For_stmtContext,
    Q_if_operationContext,
    Q_while_operationContext,
    Comp_stmtContext,
    Literal_declarationContext
} from '../antlr/qcodeParser';
import { AbstractParseTreeVisitor, TerminalNode } from 'antlr4ts/tree';
import { qcodeVisitor } from '../antlr/qcodeVisitor';
import { SymbolTableBuilder, RegisterSymbol, QcodesSymbols, NameAndType } from './symbolTable';
import { ParserRuleContext } from 'antlr4ts';
import { 
    PreviousDefinitionValidation, 
    PreviousNotDefinitionValidation, 
    PreviousFunctionValidation,
    PreviousFunctionDefinationValidation
 } from './validations/validations';
import { PositionAdapter } from '../../tools/positionAdapter';
import { ErrorListener } from '../../tools/errorListener';
import { SymbolTable } from '../../compiler/types';
import { Scope } from '../../compiler/scope';
import { ContentPosition } from '../../types';

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
    private previousFunctionValidation: PreviousFunctionValidation;
    private previousNotDefinitionValidation: PreviousNotDefinitionValidation;
    private previousFunctionDefinationValidation: PreviousFunctionDefinationValidation;

    constructor(private symbolTable: SymbolTable, private errorListener: ErrorListener) {
        super();
        this.previousDefinitionValidation = new PreviousDefinitionValidation(this.symbolTable, this.errorListener);
        this.previousFunctionValidation = new PreviousFunctionValidation(this.symbolTable, this.errorListener);
        this.previousNotDefinitionValidation = new PreviousNotDefinitionValidation(this.symbolTable, this.errorListener);
        this.previousFunctionDefinationValidation = new PreviousFunctionDefinationValidation(this.symbolTable, this.errorListener);
    }

    defaultResult() {}

    // Function declaration validation, the main process is adding scope (including parameters and types) 
    // to symbol table, repeated validations.
    visitFunc_declaration(ctx: Func_declarationContext) {
        let startLine: number = ctx.func_declarator().Identifier().symbol.line;
        let endLine: number = startLine;

        let methodId =  ctx.func_declarator().Identifier();

        let methodName: string = methodId.text + '_define';
        this.previousFunctionDefinationValidation.apply(methodName, PositionAdapter.fromTerminalNode(methodId));

        let nameAndType: NameAndType = null;
        if (ctx.func_declarator().args_type_List() !== undefined) {
            nameAndType = this.addArgsAndType(ctx.func_declarator().args_type_List());
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

    // Function defination validation, the main process is adding scope (including parameters and types) 
    // to symbol table, repeated validations.
    visitFunc_definition(ctx: Func_definitionContext) {
        let startLine: number = ctx.func_declarator().Identifier().symbol.line;
        let endLine: number = this.validSymbol(ctx.comp_stmt(), ctx.func_declarator());

        let methodId =  ctx.func_declarator().Identifier();

        let methodName: string = methodId.text + '_method';
        this.previousFunctionValidation.apply(methodName, PositionAdapter.fromTerminalNode(methodId));
        
        let nameAndType: NameAndType = null;
        if (ctx.func_declarator().args_type_List() !== undefined) {
            nameAndType = this.addArgsAndType(ctx.func_declarator().args_type_List());
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

    // Iteration validation, it's mainly the validation of for-loop, the main process is 
    // adding scope to symbol table.
    visitIterate_stmt(ctx: Iterate_stmtContext) {
        let startLine: number = ctx.FOR().symbol.line;
        let endLine: number = this.validSymbol(ctx.statement().comp_stmt(), ctx.FOR());
        let forName: string = ctx.FOR().text;

        let scopes: Scope[] = this.symbolTable.currentScopes;
        let currentScope: Scope = this.getScope(scopes, startLine);     

        let IterateScope = new Scope(currentScope, forName, startLine, endLine);
        this.symbolTable.pushList(IterateScope);

        this.visitChildren(ctx);
    }

    // Declaration validation, the main process is adding validation to variables or arrays.
    visitDeclaration(ctx: DeclarationContext) {
        let specifier = ctx.declaration_Specifier();
        if (specifier !== undefined) {
            let declaratorList = ctx.init_DeclaratorList().init_Declarator();
            if (declaratorList.childCount > 0) {
                let declarator = declaratorList.declarator();
                if (declarator.declarator() === undefined) {
                    let terminalNode = ctx.init_DeclaratorList().init_Declarator().declarator().Identifier();
                    let size = [-1];
                    this.validDeclaration(ctx, terminalNode, specifier.text, size);
                } else {
                    let declaratorOld = declarator;
                    let declaratorNew = declarator;
                    let sizes: number[] = [];
                    for (let i=0; i<10; i++) {
                        declaratorOld = declaratorNew;
                        declaratorNew = declaratorNew.declarator();
                        
                        if (declaratorOld.assignment_exp() !== undefined) {
                            let sizeString: string = declaratorOld.assignment_exp().text;
                            let size: number = parseInt(sizeString);
                            sizes.push(size);
                        }
                        if (declaratorNew === undefined) {
                            let terminalNode = declaratorOld.Identifier();
                            if (sizes.length<=0) {
                                sizes = [-1];
                            }
                            this.validDeclaration(ctx, terminalNode, QcodesSymbols.array, sizes.reverse());
                            break;
                        }
                    }
                }
            }
        }
        this.visitChildren(ctx);
    }

    visitLiteral_declaration(ctx: Literal_declarationContext) {
        let specifier = ctx.literal_type();
        if (specifier !== undefined) {
            let declaratorList = ctx.init_Literal_DeclaratorList().init_Literal_Declarator();
            if (declaratorList.childCount > 0) {
                let declarator = declaratorList.declarator();
                if (declarator.declarator() === undefined) {
                    let terminalNode = ctx.init_Literal_DeclaratorList().init_Literal_Declarator().declarator().Identifier();
                    let size = [-1];
                    this.validDeclaration(ctx, terminalNode, specifier.text, size);
                } else {
                    let declaratorOld = declarator;
                    let declaratorNew = declarator;
                    let sizes: number[] = [];
                    for (let i=0; i<10; i++) {
                        declaratorOld = declaratorNew;
                        declaratorNew = declaratorNew.declarator();
                        
                        if (declaratorOld.assignment_exp() !== undefined) {
                            let sizeString: string = declaratorOld.assignment_exp().text;
                            let size: number = parseInt(sizeString);
                            sizes.push(size);
                        }
                        if (declaratorNew === undefined) {
                            let terminalNode = declaratorOld.Identifier();
                            if (sizes.length<=0) {
                                sizes = [-1];
                            }
                            this.validDeclaration(ctx, terminalNode, QcodesSymbols.array, sizes.reverse());
                            break;
                        }
                    }
                }
            }
        }
    }

    // Function args validation, the main process is repeated validation and 
    // adding symbol to current scope.
    visitArgs_declaration(ctx: Args_declarationContext) {
        let declarator = ctx.declarator();
        let specifier = ctx.declaration_Specifier();
        if (declarator !== undefined && specifier !== undefined) {
            let args = declarator.Identifier();
            if (args !== undefined) {
                let scopes: Scope[] = this.symbolTable.currentScopes;
                let line: number = args.symbol.line;
                let currentScope: Scope = this.getScope(scopes, line); 
        
                this.previousDefinitionValidation.applyScope(currentScope, args.text, PositionAdapter.fromTerminalNode(args));
        
                let registerName = args.text;
                let registerType = this.symbolTable.lookup(specifier.text);
                let size = [-1];
                let register = new RegisterSymbol(registerName, registerType, size);
        
                this.symbolTable.defineList(currentScope, register, ctx.start.line);
            }
        }
    }

    // For-loop parameter validation, the main process is repeated validation and 
    // adding symbol to current scope.
    visitFor_stmt(ctx: For_stmtContext) {
        let forStart = ctx.for_start();
        if (ctx.childCount >= 1) {
            if (forStart !== undefined && forStart.text !== "") {
                let primaryStart = forStart.primary_exp();
                if (primaryStart !== undefined) {
                    let start = primaryStart.Identifier();
                    let size = [-1];
                    if (start !== undefined) {
                        this.validUnary(start, QcodesSymbols.let, size);
                    }
                }
            }
        }

        if (ctx.childCount >= 2) {
            let forStep = ctx.for_step();
            if (forStep !== undefined && forStep.text !== "") {
                let assignmentStep = forStep.assignment_exp();
                if (assignmentStep !== undefined) {
                    this.visitChildren(assignmentStep);
                }
            }
        }

        if (ctx.childCount >= 3) {
            let forEnd = ctx.for_end();
            if (forEnd !== undefined && forEnd.text !== "") {
                let assignmentEnd = forEnd.assignment_exp();
                if (assignmentEnd !== undefined) {
                    this.visitChildren(assignmentEnd);
                }
            }
        }
    }

    // Q_if parameter validation, the main process is repeated validation of cvec.
    visitQ_if_operation(ctx: Q_if_operationContext) {
        let condition = ctx.q_condition();
        let items = [];
        if (condition !== undefined && condition.text !== "") {
            let conditionText = condition.text;
            if (conditionText.indexOf('[') != -1) {
                let pattern = /\w+/g;
                let names = pattern.exec(conditionText);
                if (names.length > 0) {
                    let name = names[0];

                    let line: number = condition._start.line;
                    let scopes: Scope[] = this.symbolTable.currentScopes;
                    let currentScope: Scope = this.getScope(scopes, line); 
            
                    this.previousDefinitionValidation.applyCvec(currentScope, name, PositionAdapter.fromToken(condition._start), QcodesSymbols.cvec);
                }
            }
            this.visitChildren(ctx.q_condition());
        }
    }

    // Q_while parameter validation, the main process is repeated validation of cvec.
    visitQ_while_operation(ctx: Q_while_operationContext) {
        let condition = ctx.q_condition();
        if (condition !== undefined && condition.text !== "") {
            let conditionText = condition.text;
            if (conditionText.indexOf('[') != -1) {
                let pattern = /\w+/g;
                let names = pattern.exec(conditionText);
                if (names.length > 0) {
                    let name = names[0];

                    let line: number = condition._start.line;
                    let scopes: Scope[] = this.symbolTable.currentScopes;
                    let currentScope: Scope = this.getScope(scopes, line); 
            
                    this.previousDefinitionValidation.applyCvec(currentScope, name, PositionAdapter.fromToken(condition._start), QcodesSymbols.cvec);
                }
            }
            
            this.visitChildren(ctx);
        }
    }

    // Select validation, it's mainly the validation of if statement, the main process is
    // adding scopes(if, else if, else) to symbol table.
    visitSelect_stmt(ctx: Select_stmtContext) {
        let selects = ctx.statement();

        if (selects.length === 1) {
            let currentScope = this.selectScopeIf(ctx, 0);
            this.symbolTable.pushList(currentScope);
        } else if (selects.length === 2 ) {
            let currentScopeIf = this.selectScopeIf(ctx, 0);
            let currentScopeElse = this.selectScopeElse(ctx, 1);

            this.symbolTable.pushList(currentScopeIf);
            if (currentScopeElse != null) {
                this.symbolTable.pushList(currentScopeElse);
            }
        }
        this.visitChildren(ctx);
    }

    // Unary validation, the main process is the repeated validation of 
    // variables, arrays and method call.
    visitUnary_exp(ctx: Unary_expContext) {
        let unary = ctx.unary_exp();
        if (unary != undefined) {
            this.visitChildren(ctx.unary_exp());
        } else {
            let postfix = ctx.postfix_exp();
            let trueNum: number = 0;
            if (postfix.childCount > 0) {
                for (let child of postfix.children) {
                    if (child.text === '[') {
                        trueNum = 1;
                        break;
                    } else if (child.text === '(') {
                        trueNum = 2;
                        break;
                    }
                }
            }

            if (postfix.childCount > 2 && trueNum === 1) {
                let primaryOld = postfix;
                let primaryNew = postfix;
                let sizes: number[] = [];
                for (let i=0; i<10; i++) {
                    primaryOld = primaryNew;
                    primaryNew = primaryNew.postfix_exp(); 

                    if (primaryOld.expression() !== undefined) {
                        for (let exp of primaryOld.expression()) {
                            let sizeString: string = exp.text;
                            let size: number = parseInt(sizeString);
                            sizes.push(size);
                            this.visitChildren(exp);
                        } 
                    }
                    if (primaryNew === undefined) {
                        let terminalNode = primaryOld.primary_exp().Identifier();
                        if (sizes.length <= 0) {
                            sizes = [-1];
                        }
                        this.validUnary(terminalNode, QcodesSymbols.array, sizes.reverse());
                        break;
                    }
                }
            } else {
                let postfixExp = postfix.postfix_exp();
                if (postfixExp !== undefined && trueNum !== 2) {
                    let primaryTwo = postfix.postfix_exp().primary_exp().Identifier();
                    if (primaryTwo !== undefined) {
                        let sizes = [-1];
                        this.validUnary(primaryTwo, QcodesSymbols.let, sizes);
                    }
                } else {
                    if (trueNum === 2) {
                        let argumentTwo = postfix.argument_exp_List();
                        let postExp = postfix.postfix_exp()
                        if (postExp !== undefined) {
                            let lenMethod = postExp.primary_exp().LEN();
                            if (lenMethod === undefined) {
                                let method = postExp.primary_exp().Identifier();
                                this.validFunction(method);
                                if (postfix.argument_exp_List() !== undefined) {
                                    this.validArgument(postExp.primary_exp().Identifier().text, postfix.argument_exp_List());
                                }
                            }
                        }
                        if (argumentTwo !== undefined) {
                            this.visitChildren(ctx);
                        }
                    } else {
                        let primaryTwo = postfix.primary_exp().Identifier();
                        if (primaryTwo !== undefined) {
                            let sizes = [-1];
                            this.validUnary(primaryTwo, QcodesSymbols.let, sizes);
                        }
                    }
                }
            }
        }
    }

    // Quantum gate validation, the main process is the repeated validation of 
    // control gate, double gate, four args.
    visitQuantum_gate_stmt(ctx: Quantum_gate_stmtContext) {
        let quantum = ctx.quantum_gate_operation();
        if (quantum !== undefined) {
            let controlGate = quantum.control_gate_exp();
            if (controlGate !== undefined && controlGate.text !== '') {
                if (controlGate.childCount <= 1) {
                    let ident = controlGate.Identifier();
                    this.validUnary(ident, QcodesSymbols.let, [-1]);
                } else {
                    if (controlGate.Identifier() !== undefined) {
                        this.validQuantum(controlGate.Identifier(), QcodesSymbols.qvec);
                    }
                    if (controlGate.expression() !== undefined) {
                        this.visitChildren(controlGate.expression());
                    }
                }
            }

            let doubleGate = quantum.double_gate_exp();
            if (doubleGate !== undefined && doubleGate.text !== '' && doubleGate.text !== ')') {
                let doubleControlGate = doubleGate.control_gate_exp();
                if (doubleControlGate !== undefined) {
                    if (doubleControlGate.childCount <= 1) {
                        let ident = doubleControlGate.Identifier();
                        this.validUnary(ident, QcodesSymbols.let, [-1]);
                    } else {
                        if (doubleControlGate.Identifier() !== undefined) {
                            this.validQuantum(doubleControlGate.Identifier(), QcodesSymbols.qvec);
                        }
                        if (doubleControlGate.expression() !== undefined) {
                            this.visitChildren(doubleControlGate.expression());
                        }
                    }
                }

                let targetGate = doubleGate.target_gate_exp();
                if (targetGate !== undefined) {
                    if (targetGate.childCount <= 1) {
                        let ident = targetGate.Identifier();
                        this.validUnary(ident, QcodesSymbols.let, [-1]);
                    } else {
                        if (targetGate.Identifier() !== undefined) {
                            this.validQuantum(targetGate.Identifier(), QcodesSymbols.qvec);
                        }
                        if (targetGate.expression() !== undefined) {
                            this.visitChildren(targetGate.expression());   
                        }
                    }
                }
            }

            let fourArgs = quantum.four_angle_args();
            if (fourArgs !== undefined) {
                if (this.isEmpty(fourArgs.alpha()) && this.isEmpty(fourArgs.beta()) && 
                this.isEmpty(fourArgs.gamma()) && this.isEmpty(fourArgs.delta())) {
                    
                    this.visitChildren(quantum.four_angle_args());
                }
            }

            let expression = quantum.expression();
            if (expression !== undefined) {
                this.visitChildren(quantum.expression());
            }
        }
    }

    // Measurement validation, the main process is repeated validation of args.
    visitMeasurement_stmt(ctx: Measurement_stmtContext) {
        let controlGate = ctx.control_gate_exp();
        let cbitGate = ctx.accept_cbit_stmt();
        if (controlGate !== undefined && controlGate.text !== '') {
            if (controlGate.childCount <= 1) {
                let ident = controlGate.Identifier();
                this.validUnary(ident, QcodesSymbols.let, [-1]);
            } else {
                if (controlGate.Identifier() !== undefined) {
                    this.validQuantum(controlGate.Identifier(), QcodesSymbols.qvec);
                }
                if (controlGate.expression() !== undefined) {
                    this.visitChildren(controlGate.expression());
                }
            }
        }

        if (cbitGate !== undefined && cbitGate.text !== '') {
            if (cbitGate.childCount <= 1) {
                let ident = cbitGate.Identifier();
                this.validUnary(ident, QcodesSymbols.let, [-1]);
            } else {
                if (cbitGate.Identifier() !== undefined) {
                    this.validQuantum(cbitGate.Identifier(), QcodesSymbols.cvec);
                }
                if (cbitGate.expression() !== undefined) {
                    this.visitChildren(cbitGate.expression());
                }
            }
        }
    }

    private isEmpty(obj :any): boolean {
        if (obj !== undefined && obj.text !== '') {
            return true;
        }
        return false;
    }

    // Validation of if-statement, the main process is adding scope to select statement.
    private selectScopeIf(ctx: Select_stmtContext, index: number): Scope {
        let startLine: number = ctx.statement(index)._start.line;
        let endLine: number = this.validSymbol(ctx.statement(index).comp_stmt(), ctx.IF());
        let ifName: string = ctx.IF().text;

        let scopes: Scope[] = this.symbolTable.currentScopes;
        let currentScope: Scope = this.getScope(scopes, startLine); 
        
        let selectScope = new Scope(currentScope, ifName, startLine, endLine);
        return selectScope;

    }

    // Validation of else-statement, the main process is adding scope to select statement.
    private selectScopeElse(ctx: Select_stmtContext, index: number): Scope {      
        let text: string = ctx.statement(index).text;
        let regex: RegExp = /.*if\s*\(.*/;
		let match = text.match(regex);
		if (match) {
			return null;
        }
        
        let startLine: number = ctx.statement(index)._start.line;
        let endLine: number = this.validSymbol(ctx.statement(index).comp_stmt(),  ctx.ELSE());
        let ifName: string = ctx.ELSE().text;

        let scopes: Scope[] = this.symbolTable.currentScopes;
        let currentScope: Scope = this.getScope(scopes, startLine); 
        
        let selectScopeElse = new Scope(currentScope, ifName, startLine, endLine);
        return selectScopeElse;

    }

    // Get the current scope.
    private getScope(scopes: Scope[], startLine: number): Scope {
        let map= new Map<number, Scope>();
        if (scopes.length > 0) {
            for (let sc of scopes) {
                if (sc.startLine <= startLine && sc.endLine >= startLine) {
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

    // Validation of declaration and literal_declaration, the main process is repeated validation and 
    // adding symbol to current scope
    private validDeclaration(ctx: any, ident: TerminalNode, type: string, sizes: number[]) {
        let scopes: Scope[] = this.symbolTable.currentScopes;
        let line: number = ident.symbol.line;
        let currentScope: Scope = this.getScope(scopes, line); 
        
        this.previousDefinitionValidation.applyScope(currentScope, ident.text, PositionAdapter.fromTerminalNode(ident));

        let registerName = ident.text;
        let registerType = this.symbolTable.lookup(type);
        let register = new RegisterSymbol(registerName, registerType, sizes);

        this.symbolTable.defineList(currentScope, register, ctx.start.line);
    }

    // Validation of unary, the main process is repeated validation of unary.
    private validUnary(ident: TerminalNode, type: string, sizes: number[]) {
       
        let line: number = ident.symbol.line;
        let scopes: Scope[] = this.symbolTable.currentScopes;
        let currentScope: Scope = this.getScope(scopes, line); 

        this.previousNotDefinitionValidation.apply(currentScope, ident.text, PositionAdapter.fromTerminalNode(ident), type, sizes);
    }

    // Validation of quantum, the main process is repeated validation of quantum.
    private validQuantum(ident: TerminalNode, type: string) {
       
        let line: number = ident.symbol.line;
        let scopes: Scope[] = this.symbolTable.currentScopes;
        let currentScope: Scope = this.getScope(scopes, line); 

        this.previousDefinitionValidation.applyQuantum(currentScope, ident.text, PositionAdapter.fromTerminalNode(ident) ,type);
    }

    // Validation of function, the main process is repeated validation of function.
    private validFunction(ident: TerminalNode) {

        this.previousFunctionValidation.applyNotFunction(ident.text, PositionAdapter.fromTerminalNode(ident));
    }

    // Validation of argument, the main process is repeated validation of arguments.
    private validArgument(methodName: string, ctx: Argument_exp_ListContext) {
        let argsNew = ctx;
        let args: string[] = [];
        let positions: ContentPosition[] = [];
        for (let i=0; i<10; i++) {
            if (argsNew !== undefined) {
                let arg = argsNew.assignment_exp().text;
                args.push(arg);
                let pos = PositionAdapter.fromToken(argsNew.assignment_exp()._start);
                positions.push(pos);
                argsNew = argsNew.argument_exp_List();
            }else {
                break;
            }
        }

        if (args.length> 0) {
            let scopes: Scope[] = this.symbolTable.currentScopes;
            let line: number = ctx._start.line;
            let currentScope: Scope = this.getScope(scopes, line);  
            this.previousFunctionDefinationValidation.applyArgs(currentScope, methodName, args.reverse(), positions.reverse());
        }
    }

    // Add args and types to scope.
    private addArgsAndType(ctx: Args_type_ListContext): NameAndType {
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

    // Validation the exists of braces.
    private validSymbol(comp_stmt: Comp_stmtContext, node: any): number {
        let flagLeft = false;
        let flagRight = false;
        let endLine = 65536;

        if (comp_stmt === undefined) {
            flagLeft = true;
            flagRight = true;
            if (node instanceof TerminalNode) {
                this.previousNotDefinitionValidation.applySymbol(PositionAdapter.fromTerminalNode(node), '{');
            } else {
                this.previousNotDefinitionValidation.applySymbol(PositionAdapter.fromToken(node._start), '{');
            }  
        } else {
            if (comp_stmt.childCount > 0) { 
                for(let node of comp_stmt.children) {
                    if (node.text == '{') {
                        flagLeft = true;
                    }
                    if (node.text === '}') {
                        endLine = comp_stmt.RBRACE().symbol.line;
                        flagRight = true;
                        break;
                    }
                }
            }
        }

        if (!flagLeft) {
            this.previousNotDefinitionValidation.applySymbol(PositionAdapter.fromToken(comp_stmt._start), '{');
        }
        if (!flagRight) {
            this.previousNotDefinitionValidation.applySymbol(PositionAdapter.fromTerminalNode(comp_stmt.LBRACE()), '}');
        }
        return endLine;
    }
}
