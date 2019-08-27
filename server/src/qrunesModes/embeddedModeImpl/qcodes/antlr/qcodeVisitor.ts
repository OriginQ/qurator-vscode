// Generated from qcode.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { QrunesContext } from './qcodeParser';
import { Lang_unitContext } from './qcodeParser';
import { DeclarationContext } from './qcodeParser';
import { Include_declarationContext } from './qcodeParser';
import { Include_signContext } from './qcodeParser';
import { Variable_declarationContext } from './qcodeParser';
import { Parameter_declarationContext } from './qcodeParser';
import { Parameter_specifierContext } from './qcodeParser';
import { Quantum_alg_built_in_typeContext } from './qcodeParser';
import { Auxiliary_primary_typeContext } from './qcodeParser';
import { Quantum_circuit_typeContext } from './qcodeParser';
import { Quantum_prog_typeContext } from './qcodeParser';
import { Quantum_primary_typeContext } from './qcodeParser';
import { Classical_primary_typeContext } from './qcodeParser';
import { Array_construct_typeContext } from './qcodeParser';
import { Construct_primary_typeContext } from './qcodeParser';
import { Call_back_construct_typeContext } from './qcodeParser';
import { Call_back_primary_type_listContext } from './qcodeParser';
import { Call_back_primary_typeContext } from './qcodeParser';
import { Declaration_variableContext } from './qcodeParser';
import { Variable_decl_specifierContext } from './qcodeParser';
import { Common_specifierContext } from './qcodeParser';
import { Init_declaratorlistContext } from './qcodeParser';
import { Variable_declaratorContext } from './qcodeParser';
import { VariableInitializerContext } from './qcodeParser';
import { Function_declarationContext } from './qcodeParser';
import { Declarate_functionContext } from './qcodeParser';
import { Function_return_type_declaratorContext } from './qcodeParser';
import { Function_declaratorContext } from './qcodeParser';
import { Function_nameContext } from './qcodeParser';
import { Parameter_decl_listContext } from './qcodeParser';
import { Expression_listContext } from './qcodeParser';
import { Vector_expressionContext } from './qcodeParser';
import { Vector_sliceContext } from './qcodeParser';
import { Single_expressionContext } from './qcodeParser';
import { Lambda_expContext } from './qcodeParser';
import { Lambda_bodyContext } from './qcodeParser';
import { Additive_opContext } from './qcodeParser';
import { Multiplicative_opContext } from './qcodeParser';
import { Shift_opContext } from './qcodeParser';
import { Assign_opContext } from './qcodeParser';
import { Equal_opContext } from './qcodeParser';
import { Relationship_opContext } from './qcodeParser';
import { Logic_opContext } from './qcodeParser';
import { Unary_opContext } from './qcodeParser';
import { StatementContext } from './qcodeParser';
import { While_statementContext } from './qcodeParser';
import { Return_statementContext } from './qcodeParser';
import { Qif_statementContext } from './qcodeParser';
import { Qif_true_branchContext } from './qcodeParser';
import { Qif_false_branchContext } from './qcodeParser';
import { Qwhile_statementContext } from './qcodeParser';
import { Expression_statementContext } from './qcodeParser';
import { Empty_statementContext } from './qcodeParser';
import { Declaration_variable_statementContext } from './qcodeParser';
import { Compound_statementContext } from './qcodeParser';
import { Select_statementContext } from './qcodeParser';
import { Iterate_statementContext } from './qcodeParser';
import { For_stmtContext } from './qcodeParser';
import { For_stepContext } from './qcodeParser';
import { For_conditionContext } from './qcodeParser';
import { For_startContext } from './qcodeParser';
import { Inhanced_for_stmtContext } from './qcodeParser';
import { Statement_listContext } from './qcodeParser';
import { Function_definitionContext } from './qcodeParser';
import { Function_bodyContext } from './qcodeParser';
import { Key_wordsContext } from './qcodeParser';
import { ConstantContext } from './qcodeParser';


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
	 * Visit a parse tree produced by `qcodeParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

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
	 * Visit a parse tree produced by `qcodeParser.variable_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_declaration?: (ctx: Variable_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.parameter_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_declaration?: (ctx: Parameter_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.parameter_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_specifier?: (ctx: Parameter_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.quantum_alg_built_in_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantum_alg_built_in_type?: (ctx: Quantum_alg_built_in_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.auxiliary_primary_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuxiliary_primary_type?: (ctx: Auxiliary_primary_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.quantum_circuit_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantum_circuit_type?: (ctx: Quantum_circuit_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.quantum_prog_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantum_prog_type?: (ctx: Quantum_prog_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.quantum_primary_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantum_primary_type?: (ctx: Quantum_primary_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.classical_primary_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassical_primary_type?: (ctx: Classical_primary_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.array_construct_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_construct_type?: (ctx: Array_construct_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.construct_primary_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstruct_primary_type?: (ctx: Construct_primary_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.call_back_construct_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall_back_construct_type?: (ctx: Call_back_construct_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.call_back_primary_type_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall_back_primary_type_list?: (ctx: Call_back_primary_type_listContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.call_back_primary_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall_back_primary_type?: (ctx: Call_back_primary_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.declaration_variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration_variable?: (ctx: Declaration_variableContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.variable_decl_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_decl_specifier?: (ctx: Variable_decl_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.common_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommon_specifier?: (ctx: Common_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.init_declaratorlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInit_declaratorlist?: (ctx: Init_declaratorlistContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.variable_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_declarator?: (ctx: Variable_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.variableInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.function_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_declaration?: (ctx: Function_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.declarate_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarate_function?: (ctx: Declarate_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.function_return_type_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_return_type_declarator?: (ctx: Function_return_type_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.function_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_declarator?: (ctx: Function_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.function_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_name?: (ctx: Function_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.parameter_decl_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_decl_list?: (ctx: Parameter_decl_listContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_list?: (ctx: Expression_listContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.vector_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVector_expression?: (ctx: Vector_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.vector_slice`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVector_slice?: (ctx: Vector_sliceContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.single_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_expression?: (ctx: Single_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.lambda_exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda_exp?: (ctx: Lambda_expContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.lambda_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda_body?: (ctx: Lambda_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.additive_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive_op?: (ctx: Additive_opContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.multiplicative_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative_op?: (ctx: Multiplicative_opContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.shift_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShift_op?: (ctx: Shift_opContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.assign_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign_op?: (ctx: Assign_opContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.equal_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqual_op?: (ctx: Equal_opContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.relationship_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationship_op?: (ctx: Relationship_opContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.logic_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogic_op?: (ctx: Logic_opContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.unary_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_op?: (ctx: Unary_opContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.while_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_statement?: (ctx: While_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.return_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_statement?: (ctx: Return_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.qif_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQif_statement?: (ctx: Qif_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.qif_true_branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQif_true_branch?: (ctx: Qif_true_branchContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.qif_false_branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQif_false_branch?: (ctx: Qif_false_branchContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.qwhile_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQwhile_statement?: (ctx: Qwhile_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.expression_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_statement?: (ctx: Expression_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.empty_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_statement?: (ctx: Empty_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.declaration_variable_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration_variable_statement?: (ctx: Declaration_variable_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.compound_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_statement?: (ctx: Compound_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.select_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_statement?: (ctx: Select_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.iterate_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterate_statement?: (ctx: Iterate_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.for_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_stmt?: (ctx: For_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.for_step`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_step?: (ctx: For_stepContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.for_condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_condition?: (ctx: For_conditionContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.for_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_start?: (ctx: For_startContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.inhanced_for_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInhanced_for_stmt?: (ctx: Inhanced_for_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.statement_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement_list?: (ctx: Statement_listContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.function_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_definition?: (ctx: Function_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.function_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_body?: (ctx: Function_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.key_words`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey_words?: (ctx: Key_wordsContext) => Result;

	/**
	 * Visit a parse tree produced by `qcodeParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;
}

