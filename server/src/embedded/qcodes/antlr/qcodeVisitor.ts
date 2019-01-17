// Generated from qcode.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `qcodeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface qcodeVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `qcodeParser.qrunes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQrunes?: (ctx: QrunesContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.lang_unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLang_unit?: (ctx: Lang_unitContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.include_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclude_declaration?: (ctx: Include_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.include_sign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclude_sign?: (ctx: Include_signContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.postfix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfix?: (ctx: PostfixContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.literal_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral_declaration?: (ctx: Literal_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.declaration_Specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration_Specifier?: (ctx: Declaration_SpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.literal_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral_type?: (ctx: Literal_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.primary_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_type?: (ctx: Primary_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.quantum_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantum_type?: (ctx: Quantum_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.assist_classical_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssist_classical_type?: (ctx: Assist_classical_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.init_DeclaratorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInit_DeclaratorList?: (ctx: Init_DeclaratorListContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.init_Literal_DeclaratorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInit_Literal_DeclaratorList?: (ctx: Init_Literal_DeclaratorListContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.init_Declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInit_Declarator?: (ctx: Init_DeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.init_Literal_Declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInit_Literal_Declarator?: (ctx: Init_Literal_DeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarator?: (ctx: DeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.assignment_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_exp?: (ctx: Assignment_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.assignment_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_operator?: (ctx: Assignment_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.condition_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition_exp?: (ctx: Condition_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.logicOr_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicOr_exp?: (ctx: LogicOr_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.logicAnd_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicAnd_exp?: (ctx: LogicAnd_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.inclu_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclu_exp?: (ctx: Inclu_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.exclu_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclu_exp?: (ctx: Exclu_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.and_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd_exp?: (ctx: And_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.equal_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqual_exp?: (ctx: Equal_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.relation_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelation_exp?: (ctx: Relation_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.shift_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShift_exp?: (ctx: Shift_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.additive_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive_exp?: (ctx: Additive_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.multi_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulti_exp?: (ctx: Multi_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.cast_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast_exp?: (ctx: Cast_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.unary_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_exp?: (ctx: Unary_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.unary_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_operator?: (ctx: Unary_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.postfix_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfix_exp?: (ctx: Postfix_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.argument_exp_List`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument_exp_List?: (ctx: Argument_exp_ListContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.primary_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_exp?: (ctx: Primary_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.args_type_List`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs_type_List?: (ctx: Args_type_ListContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.args_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs_declaration?: (ctx: Args_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer?: (ctx: InitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.initializerList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializerList?: (ctx: InitializerListContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.designation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignation?: (ctx: DesignationContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.designatorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignatorList?: (ctx: DesignatorListContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.designator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignator?: (ctx: DesignatorContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.constant_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_exp?: (ctx: Constant_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.func_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_declaration?: (ctx: Func_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.func_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_declarator?: (ctx: Func_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.func_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_definition?: (ctx: Func_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.declarationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationList?: (ctx: DeclarationListContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.comp_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComp_stmt?: (ctx: Comp_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.block_List`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock_List?: (ctx: Block_ListContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.block_Item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock_Item?: (ctx: Block_ItemContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.exp_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp_stmt?: (ctx: Exp_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.select_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_stmt?: (ctx: Select_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.iterate_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterate_stmt?: (ctx: Iterate_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.for_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_stmt?: (ctx: For_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.for_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_start?: (ctx: For_startContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.for_step`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_step?: (ctx: For_stepContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.for_end`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_end?: (ctx: For_endContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.quantum_gate_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantum_gate_stmt?: (ctx: Quantum_gate_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.quantum_gate_operation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantum_gate_operation?: (ctx: Quantum_gate_operationContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.four_angle_args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFour_angle_args?: (ctx: Four_angle_argsContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.alpha`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlpha?: (ctx: AlphaContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.beta`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeta?: (ctx: BetaContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.gamma`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGamma?: (ctx: GammaContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.delta`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelta?: (ctx: DeltaContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.theta`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTheta?: (ctx: ThetaContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.control_gate_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControl_gate_exp?: (ctx: Control_gate_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.double_gate_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDouble_gate_exp?: (ctx: Double_gate_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.target_gate_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTarget_gate_exp?: (ctx: Target_gate_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.measurement_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasurement_stmt?: (ctx: Measurement_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.accept_cbit_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccept_cbit_stmt?: (ctx: Accept_cbit_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.q_if_operation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQ_if_operation?: (ctx: Q_if_operationContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.q_if_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQ_if_stmt?: (ctx: Q_if_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.q_if_stmt_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQ_if_stmt_item?: (ctx: Q_if_stmt_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.q_while_operation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQ_while_operation?: (ctx: Q_while_operationContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.q_while_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQ_while_stmt?: (ctx: Q_while_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.q_while_stmt_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQ_while_stmt_item?: (ctx: Q_while_stmt_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.q_condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQ_condition?: (ctx: Q_conditionContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.q_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQ_operator?: (ctx: Q_operatorContext) => Result;
}

