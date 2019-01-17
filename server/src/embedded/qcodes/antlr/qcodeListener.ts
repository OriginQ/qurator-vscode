// Generated from qcode.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { QrunesContext } from './qcodeParser';
import { Lang_unitContext } from './qcodeParser';
import { Include_declarationContext } from './qcodeParser';
import { Include_signContext } from './qcodeParser';
import { PostfixContext } from './qcodeParser';
import { DeclarationContext } from './qcodeParser';
import { Literal_declarationContext } from './qcodeParser';
import { Declaration_SpecifierContext } from './qcodeParser';
import { Literal_typeContext } from './qcodeParser';
import { Primary_typeContext } from './qcodeParser';
import { Quantum_typeContext } from './qcodeParser';
import { Assist_classical_typeContext } from './qcodeParser';
import { Init_DeclaratorListContext } from './qcodeParser';
import { Init_Literal_DeclaratorListContext } from './qcodeParser';
import { Init_DeclaratorContext } from './qcodeParser';
import { Init_Literal_DeclaratorContext } from './qcodeParser';
import { DeclaratorContext } from './qcodeParser';
import { Assignment_expContext } from './qcodeParser';
import { Assignment_operatorContext } from './qcodeParser';
import { Condition_expContext } from './qcodeParser';
import { ExpressionContext } from './qcodeParser';
import { LogicOr_expContext } from './qcodeParser';
import { LogicAnd_expContext } from './qcodeParser';
import { Inclu_expContext } from './qcodeParser';
import { Exclu_expContext } from './qcodeParser';
import { And_expContext } from './qcodeParser';
import { Equal_expContext } from './qcodeParser';
import { Relation_expContext } from './qcodeParser';
import { Shift_expContext } from './qcodeParser';
import { Additive_expContext } from './qcodeParser';
import { Multi_expContext } from './qcodeParser';
import { Cast_expContext } from './qcodeParser';
import { Unary_expContext } from './qcodeParser';
import { Unary_operatorContext } from './qcodeParser';
import { Postfix_expContext } from './qcodeParser';
import { Argument_exp_ListContext } from './qcodeParser';
import { Primary_expContext } from './qcodeParser';
import { Args_type_ListContext } from './qcodeParser';
import { Args_declarationContext } from './qcodeParser';
import { InitializerContext } from './qcodeParser';
import { InitializerListContext } from './qcodeParser';
import { DesignationContext } from './qcodeParser';
import { DesignatorListContext } from './qcodeParser';
import { DesignatorContext } from './qcodeParser';
import { Constant_expContext } from './qcodeParser';
import { Func_declarationContext } from './qcodeParser';
import { Func_declaratorContext } from './qcodeParser';
import { Func_definitionContext } from './qcodeParser';
import { DeclarationListContext } from './qcodeParser';
import { Comp_stmtContext } from './qcodeParser';
import { Block_ListContext } from './qcodeParser';
import { Block_ItemContext } from './qcodeParser';
import { StatementContext } from './qcodeParser';
import { Exp_stmtContext } from './qcodeParser';
import { Select_stmtContext } from './qcodeParser';
import { Iterate_stmtContext } from './qcodeParser';
import { For_stmtContext } from './qcodeParser';
import { For_startContext } from './qcodeParser';
import { For_stepContext } from './qcodeParser';
import { For_endContext } from './qcodeParser';
import { Quantum_gate_stmtContext } from './qcodeParser';
import { Quantum_gate_operationContext } from './qcodeParser';
import { Four_angle_argsContext } from './qcodeParser';
import { AlphaContext } from './qcodeParser';
import { BetaContext } from './qcodeParser';
import { GammaContext } from './qcodeParser';
import { DeltaContext } from './qcodeParser';
import { ThetaContext } from './qcodeParser';
import { Control_gate_expContext } from './qcodeParser';
import { Double_gate_expContext } from './qcodeParser';
import { Target_gate_expContext } from './qcodeParser';
import { Measurement_stmtContext } from './qcodeParser';
import { Accept_cbit_stmtContext } from './qcodeParser';
import { Q_if_operationContext } from './qcodeParser';
import { Q_if_stmtContext } from './qcodeParser';
import { Q_if_stmt_itemContext } from './qcodeParser';
import { Q_while_operationContext } from './qcodeParser';
import { Q_while_stmtContext } from './qcodeParser';
import { Q_while_stmt_itemContext } from './qcodeParser';
import { Q_conditionContext } from './qcodeParser';
import { Q_operatorContext } from './qcodeParser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `qcodeParser`.
 */
export interface qcodeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `qcodeParser.qrunes`.
	 * @param ctx the parse tree
	 */
	enterQrunes?: (ctx: QrunesContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.qrunes`.
	 * @param ctx the parse tree
	 */
	exitQrunes?: (ctx: QrunesContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.lang_unit`.
	 * @param ctx the parse tree
	 */
	enterLang_unit?: (ctx: Lang_unitContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.lang_unit`.
	 * @param ctx the parse tree
	 */
	exitLang_unit?: (ctx: Lang_unitContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.include_declaration`.
	 * @param ctx the parse tree
	 */
	enterInclude_declaration?: (ctx: Include_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.include_declaration`.
	 * @param ctx the parse tree
	 */
	exitInclude_declaration?: (ctx: Include_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.include_sign`.
	 * @param ctx the parse tree
	 */
	enterInclude_sign?: (ctx: Include_signContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.include_sign`.
	 * @param ctx the parse tree
	 */
	exitInclude_sign?: (ctx: Include_signContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.postfix`.
	 * @param ctx the parse tree
	 */
	enterPostfix?: (ctx: PostfixContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.postfix`.
	 * @param ctx the parse tree
	 */
	exitPostfix?: (ctx: PostfixContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.literal_declaration`.
	 * @param ctx the parse tree
	 */
	enterLiteral_declaration?: (ctx: Literal_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.literal_declaration`.
	 * @param ctx the parse tree
	 */
	exitLiteral_declaration?: (ctx: Literal_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.declaration_Specifier`.
	 * @param ctx the parse tree
	 */
	enterDeclaration_Specifier?: (ctx: Declaration_SpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.declaration_Specifier`.
	 * @param ctx the parse tree
	 */
	exitDeclaration_Specifier?: (ctx: Declaration_SpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.literal_type`.
	 * @param ctx the parse tree
	 */
	enterLiteral_type?: (ctx: Literal_typeContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.literal_type`.
	 * @param ctx the parse tree
	 */
	exitLiteral_type?: (ctx: Literal_typeContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.primary_type`.
	 * @param ctx the parse tree
	 */
	enterPrimary_type?: (ctx: Primary_typeContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.primary_type`.
	 * @param ctx the parse tree
	 */
	exitPrimary_type?: (ctx: Primary_typeContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.quantum_type`.
	 * @param ctx the parse tree
	 */
	enterQuantum_type?: (ctx: Quantum_typeContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.quantum_type`.
	 * @param ctx the parse tree
	 */
	exitQuantum_type?: (ctx: Quantum_typeContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.assist_classical_type`.
	 * @param ctx the parse tree
	 */
	enterAssist_classical_type?: (ctx: Assist_classical_typeContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.assist_classical_type`.
	 * @param ctx the parse tree
	 */
	exitAssist_classical_type?: (ctx: Assist_classical_typeContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.init_DeclaratorList`.
	 * @param ctx the parse tree
	 */
	enterInit_DeclaratorList?: (ctx: Init_DeclaratorListContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.init_DeclaratorList`.
	 * @param ctx the parse tree
	 */
	exitInit_DeclaratorList?: (ctx: Init_DeclaratorListContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.init_Literal_DeclaratorList`.
	 * @param ctx the parse tree
	 */
	enterInit_Literal_DeclaratorList?: (ctx: Init_Literal_DeclaratorListContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.init_Literal_DeclaratorList`.
	 * @param ctx the parse tree
	 */
	exitInit_Literal_DeclaratorList?: (ctx: Init_Literal_DeclaratorListContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.init_Declarator`.
	 * @param ctx the parse tree
	 */
	enterInit_Declarator?: (ctx: Init_DeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.init_Declarator`.
	 * @param ctx the parse tree
	 */
	exitInit_Declarator?: (ctx: Init_DeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.init_Literal_Declarator`.
	 * @param ctx the parse tree
	 */
	enterInit_Literal_Declarator?: (ctx: Init_Literal_DeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.init_Literal_Declarator`.
	 * @param ctx the parse tree
	 */
	exitInit_Literal_Declarator?: (ctx: Init_Literal_DeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.declarator`.
	 * @param ctx the parse tree
	 */
	enterDeclarator?: (ctx: DeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.declarator`.
	 * @param ctx the parse tree
	 */
	exitDeclarator?: (ctx: DeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.assignment_exp`.
	 * @param ctx the parse tree
	 */
	enterAssignment_exp?: (ctx: Assignment_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.assignment_exp`.
	 * @param ctx the parse tree
	 */
	exitAssignment_exp?: (ctx: Assignment_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	enterAssignment_operator?: (ctx: Assignment_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	exitAssignment_operator?: (ctx: Assignment_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.condition_exp`.
	 * @param ctx the parse tree
	 */
	enterCondition_exp?: (ctx: Condition_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.condition_exp`.
	 * @param ctx the parse tree
	 */
	exitCondition_exp?: (ctx: Condition_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.logicOr_exp`.
	 * @param ctx the parse tree
	 */
	enterLogicOr_exp?: (ctx: LogicOr_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.logicOr_exp`.
	 * @param ctx the parse tree
	 */
	exitLogicOr_exp?: (ctx: LogicOr_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.logicAnd_exp`.
	 * @param ctx the parse tree
	 */
	enterLogicAnd_exp?: (ctx: LogicAnd_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.logicAnd_exp`.
	 * @param ctx the parse tree
	 */
	exitLogicAnd_exp?: (ctx: LogicAnd_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.inclu_exp`.
	 * @param ctx the parse tree
	 */
	enterInclu_exp?: (ctx: Inclu_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.inclu_exp`.
	 * @param ctx the parse tree
	 */
	exitInclu_exp?: (ctx: Inclu_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.exclu_exp`.
	 * @param ctx the parse tree
	 */
	enterExclu_exp?: (ctx: Exclu_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.exclu_exp`.
	 * @param ctx the parse tree
	 */
	exitExclu_exp?: (ctx: Exclu_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.and_exp`.
	 * @param ctx the parse tree
	 */
	enterAnd_exp?: (ctx: And_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.and_exp`.
	 * @param ctx the parse tree
	 */
	exitAnd_exp?: (ctx: And_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.equal_exp`.
	 * @param ctx the parse tree
	 */
	enterEqual_exp?: (ctx: Equal_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.equal_exp`.
	 * @param ctx the parse tree
	 */
	exitEqual_exp?: (ctx: Equal_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.relation_exp`.
	 * @param ctx the parse tree
	 */
	enterRelation_exp?: (ctx: Relation_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.relation_exp`.
	 * @param ctx the parse tree
	 */
	exitRelation_exp?: (ctx: Relation_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.shift_exp`.
	 * @param ctx the parse tree
	 */
	enterShift_exp?: (ctx: Shift_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.shift_exp`.
	 * @param ctx the parse tree
	 */
	exitShift_exp?: (ctx: Shift_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.additive_exp`.
	 * @param ctx the parse tree
	 */
	enterAdditive_exp?: (ctx: Additive_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.additive_exp`.
	 * @param ctx the parse tree
	 */
	exitAdditive_exp?: (ctx: Additive_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.multi_exp`.
	 * @param ctx the parse tree
	 */
	enterMulti_exp?: (ctx: Multi_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.multi_exp`.
	 * @param ctx the parse tree
	 */
	exitMulti_exp?: (ctx: Multi_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.cast_exp`.
	 * @param ctx the parse tree
	 */
	enterCast_exp?: (ctx: Cast_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.cast_exp`.
	 * @param ctx the parse tree
	 */
	exitCast_exp?: (ctx: Cast_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.unary_exp`.
	 * @param ctx the parse tree
	 */
	enterUnary_exp?: (ctx: Unary_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.unary_exp`.
	 * @param ctx the parse tree
	 */
	exitUnary_exp?: (ctx: Unary_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator?: (ctx: Unary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator?: (ctx: Unary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.postfix_exp`.
	 * @param ctx the parse tree
	 */
	enterPostfix_exp?: (ctx: Postfix_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.postfix_exp`.
	 * @param ctx the parse tree
	 */
	exitPostfix_exp?: (ctx: Postfix_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.argument_exp_List`.
	 * @param ctx the parse tree
	 */
	enterArgument_exp_List?: (ctx: Argument_exp_ListContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.argument_exp_List`.
	 * @param ctx the parse tree
	 */
	exitArgument_exp_List?: (ctx: Argument_exp_ListContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.primary_exp`.
	 * @param ctx the parse tree
	 */
	enterPrimary_exp?: (ctx: Primary_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.primary_exp`.
	 * @param ctx the parse tree
	 */
	exitPrimary_exp?: (ctx: Primary_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.args_type_List`.
	 * @param ctx the parse tree
	 */
	enterArgs_type_List?: (ctx: Args_type_ListContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.args_type_List`.
	 * @param ctx the parse tree
	 */
	exitArgs_type_List?: (ctx: Args_type_ListContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.args_declaration`.
	 * @param ctx the parse tree
	 */
	enterArgs_declaration?: (ctx: Args_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.args_declaration`.
	 * @param ctx the parse tree
	 */
	exitArgs_declaration?: (ctx: Args_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.initializer`.
	 * @param ctx the parse tree
	 */
	enterInitializer?: (ctx: InitializerContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.initializer`.
	 * @param ctx the parse tree
	 */
	exitInitializer?: (ctx: InitializerContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.initializerList`.
	 * @param ctx the parse tree
	 */
	enterInitializerList?: (ctx: InitializerListContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.initializerList`.
	 * @param ctx the parse tree
	 */
	exitInitializerList?: (ctx: InitializerListContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.designation`.
	 * @param ctx the parse tree
	 */
	enterDesignation?: (ctx: DesignationContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.designation`.
	 * @param ctx the parse tree
	 */
	exitDesignation?: (ctx: DesignationContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.designatorList`.
	 * @param ctx the parse tree
	 */
	enterDesignatorList?: (ctx: DesignatorListContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.designatorList`.
	 * @param ctx the parse tree
	 */
	exitDesignatorList?: (ctx: DesignatorListContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.designator`.
	 * @param ctx the parse tree
	 */
	enterDesignator?: (ctx: DesignatorContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.designator`.
	 * @param ctx the parse tree
	 */
	exitDesignator?: (ctx: DesignatorContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.constant_exp`.
	 * @param ctx the parse tree
	 */
	enterConstant_exp?: (ctx: Constant_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.constant_exp`.
	 * @param ctx the parse tree
	 */
	exitConstant_exp?: (ctx: Constant_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.func_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunc_declaration?: (ctx: Func_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.func_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunc_declaration?: (ctx: Func_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.func_declarator`.
	 * @param ctx the parse tree
	 */
	enterFunc_declarator?: (ctx: Func_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.func_declarator`.
	 * @param ctx the parse tree
	 */
	exitFunc_declarator?: (ctx: Func_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.func_definition`.
	 * @param ctx the parse tree
	 */
	enterFunc_definition?: (ctx: Func_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.func_definition`.
	 * @param ctx the parse tree
	 */
	exitFunc_definition?: (ctx: Func_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.declarationList`.
	 * @param ctx the parse tree
	 */
	enterDeclarationList?: (ctx: DeclarationListContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.declarationList`.
	 * @param ctx the parse tree
	 */
	exitDeclarationList?: (ctx: DeclarationListContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.comp_stmt`.
	 * @param ctx the parse tree
	 */
	enterComp_stmt?: (ctx: Comp_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.comp_stmt`.
	 * @param ctx the parse tree
	 */
	exitComp_stmt?: (ctx: Comp_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.block_List`.
	 * @param ctx the parse tree
	 */
	enterBlock_List?: (ctx: Block_ListContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.block_List`.
	 * @param ctx the parse tree
	 */
	exitBlock_List?: (ctx: Block_ListContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.block_Item`.
	 * @param ctx the parse tree
	 */
	enterBlock_Item?: (ctx: Block_ItemContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.block_Item`.
	 * @param ctx the parse tree
	 */
	exitBlock_Item?: (ctx: Block_ItemContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.exp_stmt`.
	 * @param ctx the parse tree
	 */
	enterExp_stmt?: (ctx: Exp_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.exp_stmt`.
	 * @param ctx the parse tree
	 */
	exitExp_stmt?: (ctx: Exp_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.select_stmt`.
	 * @param ctx the parse tree
	 */
	enterSelect_stmt?: (ctx: Select_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.select_stmt`.
	 * @param ctx the parse tree
	 */
	exitSelect_stmt?: (ctx: Select_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.iterate_stmt`.
	 * @param ctx the parse tree
	 */
	enterIterate_stmt?: (ctx: Iterate_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.iterate_stmt`.
	 * @param ctx the parse tree
	 */
	exitIterate_stmt?: (ctx: Iterate_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.for_stmt`.
	 * @param ctx the parse tree
	 */
	enterFor_stmt?: (ctx: For_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.for_stmt`.
	 * @param ctx the parse tree
	 */
	exitFor_stmt?: (ctx: For_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.for_start`.
	 * @param ctx the parse tree
	 */
	enterFor_start?: (ctx: For_startContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.for_start`.
	 * @param ctx the parse tree
	 */
	exitFor_start?: (ctx: For_startContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.for_step`.
	 * @param ctx the parse tree
	 */
	enterFor_step?: (ctx: For_stepContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.for_step`.
	 * @param ctx the parse tree
	 */
	exitFor_step?: (ctx: For_stepContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.for_end`.
	 * @param ctx the parse tree
	 */
	enterFor_end?: (ctx: For_endContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.for_end`.
	 * @param ctx the parse tree
	 */
	exitFor_end?: (ctx: For_endContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.quantum_gate_stmt`.
	 * @param ctx the parse tree
	 */
	enterQuantum_gate_stmt?: (ctx: Quantum_gate_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.quantum_gate_stmt`.
	 * @param ctx the parse tree
	 */
	exitQuantum_gate_stmt?: (ctx: Quantum_gate_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.quantum_gate_operation`.
	 * @param ctx the parse tree
	 */
	enterQuantum_gate_operation?: (ctx: Quantum_gate_operationContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.quantum_gate_operation`.
	 * @param ctx the parse tree
	 */
	exitQuantum_gate_operation?: (ctx: Quantum_gate_operationContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.four_angle_args`.
	 * @param ctx the parse tree
	 */
	enterFour_angle_args?: (ctx: Four_angle_argsContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.four_angle_args`.
	 * @param ctx the parse tree
	 */
	exitFour_angle_args?: (ctx: Four_angle_argsContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.alpha`.
	 * @param ctx the parse tree
	 */
	enterAlpha?: (ctx: AlphaContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.alpha`.
	 * @param ctx the parse tree
	 */
	exitAlpha?: (ctx: AlphaContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.beta`.
	 * @param ctx the parse tree
	 */
	enterBeta?: (ctx: BetaContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.beta`.
	 * @param ctx the parse tree
	 */
	exitBeta?: (ctx: BetaContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.gamma`.
	 * @param ctx the parse tree
	 */
	enterGamma?: (ctx: GammaContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.gamma`.
	 * @param ctx the parse tree
	 */
	exitGamma?: (ctx: GammaContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.delta`.
	 * @param ctx the parse tree
	 */
	enterDelta?: (ctx: DeltaContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.delta`.
	 * @param ctx the parse tree
	 */
	exitDelta?: (ctx: DeltaContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.theta`.
	 * @param ctx the parse tree
	 */
	enterTheta?: (ctx: ThetaContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.theta`.
	 * @param ctx the parse tree
	 */
	exitTheta?: (ctx: ThetaContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.control_gate_exp`.
	 * @param ctx the parse tree
	 */
	enterControl_gate_exp?: (ctx: Control_gate_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.control_gate_exp`.
	 * @param ctx the parse tree
	 */
	exitControl_gate_exp?: (ctx: Control_gate_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.double_gate_exp`.
	 * @param ctx the parse tree
	 */
	enterDouble_gate_exp?: (ctx: Double_gate_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.double_gate_exp`.
	 * @param ctx the parse tree
	 */
	exitDouble_gate_exp?: (ctx: Double_gate_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.target_gate_exp`.
	 * @param ctx the parse tree
	 */
	enterTarget_gate_exp?: (ctx: Target_gate_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.target_gate_exp`.
	 * @param ctx the parse tree
	 */
	exitTarget_gate_exp?: (ctx: Target_gate_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.measurement_stmt`.
	 * @param ctx the parse tree
	 */
	enterMeasurement_stmt?: (ctx: Measurement_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.measurement_stmt`.
	 * @param ctx the parse tree
	 */
	exitMeasurement_stmt?: (ctx: Measurement_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.accept_cbit_stmt`.
	 * @param ctx the parse tree
	 */
	enterAccept_cbit_stmt?: (ctx: Accept_cbit_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.accept_cbit_stmt`.
	 * @param ctx the parse tree
	 */
	exitAccept_cbit_stmt?: (ctx: Accept_cbit_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.q_if_operation`.
	 * @param ctx the parse tree
	 */
	enterQ_if_operation?: (ctx: Q_if_operationContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.q_if_operation`.
	 * @param ctx the parse tree
	 */
	exitQ_if_operation?: (ctx: Q_if_operationContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.q_if_stmt`.
	 * @param ctx the parse tree
	 */
	enterQ_if_stmt?: (ctx: Q_if_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.q_if_stmt`.
	 * @param ctx the parse tree
	 */
	exitQ_if_stmt?: (ctx: Q_if_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.q_if_stmt_item`.
	 * @param ctx the parse tree
	 */
	enterQ_if_stmt_item?: (ctx: Q_if_stmt_itemContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.q_if_stmt_item`.
	 * @param ctx the parse tree
	 */
	exitQ_if_stmt_item?: (ctx: Q_if_stmt_itemContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.q_while_operation`.
	 * @param ctx the parse tree
	 */
	enterQ_while_operation?: (ctx: Q_while_operationContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.q_while_operation`.
	 * @param ctx the parse tree
	 */
	exitQ_while_operation?: (ctx: Q_while_operationContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.q_while_stmt`.
	 * @param ctx the parse tree
	 */
	enterQ_while_stmt?: (ctx: Q_while_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.q_while_stmt`.
	 * @param ctx the parse tree
	 */
	exitQ_while_stmt?: (ctx: Q_while_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.q_while_stmt_item`.
	 * @param ctx the parse tree
	 */
	enterQ_while_stmt_item?: (ctx: Q_while_stmt_itemContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.q_while_stmt_item`.
	 * @param ctx the parse tree
	 */
	exitQ_while_stmt_item?: (ctx: Q_while_stmt_itemContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.q_condition`.
	 * @param ctx the parse tree
	 */
	enterQ_condition?: (ctx: Q_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.q_condition`.
	 * @param ctx the parse tree
	 */
	exitQ_condition?: (ctx: Q_conditionContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.q_operator`.
	 * @param ctx the parse tree
	 */
	enterQ_operator?: (ctx: Q_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.q_operator`.
	 * @param ctx the parse tree
	 */
	exitQ_operator?: (ctx: Q_operatorContext) => void;
}

