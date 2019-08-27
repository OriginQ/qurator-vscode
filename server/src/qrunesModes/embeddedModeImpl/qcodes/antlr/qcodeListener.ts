// Generated from qcode.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

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
	 * Enter a parse tree produced by `qcodeParser.variable_declaration`.
	 * @param ctx the parse tree
	 */
	enterVariable_declaration?: (ctx: Variable_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.variable_declaration`.
	 * @param ctx the parse tree
	 */
	exitVariable_declaration?: (ctx: Variable_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.parameter_declaration`.
	 * @param ctx the parse tree
	 */
	enterParameter_declaration?: (ctx: Parameter_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.parameter_declaration`.
	 * @param ctx the parse tree
	 */
	exitParameter_declaration?: (ctx: Parameter_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.parameter_specifier`.
	 * @param ctx the parse tree
	 */
	enterParameter_specifier?: (ctx: Parameter_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.parameter_specifier`.
	 * @param ctx the parse tree
	 */
	exitParameter_specifier?: (ctx: Parameter_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.quantum_alg_built_in_type`.
	 * @param ctx the parse tree
	 */
	enterQuantum_alg_built_in_type?: (ctx: Quantum_alg_built_in_typeContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.quantum_alg_built_in_type`.
	 * @param ctx the parse tree
	 */
	exitQuantum_alg_built_in_type?: (ctx: Quantum_alg_built_in_typeContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.auxiliary_primary_type`.
	 * @param ctx the parse tree
	 */
	enterAuxiliary_primary_type?: (ctx: Auxiliary_primary_typeContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.auxiliary_primary_type`.
	 * @param ctx the parse tree
	 */
	exitAuxiliary_primary_type?: (ctx: Auxiliary_primary_typeContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.quantum_circuit_type`.
	 * @param ctx the parse tree
	 */
	enterQuantum_circuit_type?: (ctx: Quantum_circuit_typeContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.quantum_circuit_type`.
	 * @param ctx the parse tree
	 */
	exitQuantum_circuit_type?: (ctx: Quantum_circuit_typeContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.quantum_prog_type`.
	 * @param ctx the parse tree
	 */
	enterQuantum_prog_type?: (ctx: Quantum_prog_typeContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.quantum_prog_type`.
	 * @param ctx the parse tree
	 */
	exitQuantum_prog_type?: (ctx: Quantum_prog_typeContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.quantum_primary_type`.
	 * @param ctx the parse tree
	 */
	enterQuantum_primary_type?: (ctx: Quantum_primary_typeContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.quantum_primary_type`.
	 * @param ctx the parse tree
	 */
	exitQuantum_primary_type?: (ctx: Quantum_primary_typeContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.classical_primary_type`.
	 * @param ctx the parse tree
	 */
	enterClassical_primary_type?: (ctx: Classical_primary_typeContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.classical_primary_type`.
	 * @param ctx the parse tree
	 */
	exitClassical_primary_type?: (ctx: Classical_primary_typeContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.array_construct_type`.
	 * @param ctx the parse tree
	 */
	enterArray_construct_type?: (ctx: Array_construct_typeContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.array_construct_type`.
	 * @param ctx the parse tree
	 */
	exitArray_construct_type?: (ctx: Array_construct_typeContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.construct_primary_type`.
	 * @param ctx the parse tree
	 */
	enterConstruct_primary_type?: (ctx: Construct_primary_typeContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.construct_primary_type`.
	 * @param ctx the parse tree
	 */
	exitConstruct_primary_type?: (ctx: Construct_primary_typeContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.call_back_construct_type`.
	 * @param ctx the parse tree
	 */
	enterCall_back_construct_type?: (ctx: Call_back_construct_typeContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.call_back_construct_type`.
	 * @param ctx the parse tree
	 */
	exitCall_back_construct_type?: (ctx: Call_back_construct_typeContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.call_back_primary_type_list`.
	 * @param ctx the parse tree
	 */
	enterCall_back_primary_type_list?: (ctx: Call_back_primary_type_listContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.call_back_primary_type_list`.
	 * @param ctx the parse tree
	 */
	exitCall_back_primary_type_list?: (ctx: Call_back_primary_type_listContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.call_back_primary_type`.
	 * @param ctx the parse tree
	 */
	enterCall_back_primary_type?: (ctx: Call_back_primary_typeContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.call_back_primary_type`.
	 * @param ctx the parse tree
	 */
	exitCall_back_primary_type?: (ctx: Call_back_primary_typeContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.declaration_variable`.
	 * @param ctx the parse tree
	 */
	enterDeclaration_variable?: (ctx: Declaration_variableContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.declaration_variable`.
	 * @param ctx the parse tree
	 */
	exitDeclaration_variable?: (ctx: Declaration_variableContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.variable_decl_specifier`.
	 * @param ctx the parse tree
	 */
	enterVariable_decl_specifier?: (ctx: Variable_decl_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.variable_decl_specifier`.
	 * @param ctx the parse tree
	 */
	exitVariable_decl_specifier?: (ctx: Variable_decl_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.common_specifier`.
	 * @param ctx the parse tree
	 */
	enterCommon_specifier?: (ctx: Common_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.common_specifier`.
	 * @param ctx the parse tree
	 */
	exitCommon_specifier?: (ctx: Common_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.init_declaratorlist`.
	 * @param ctx the parse tree
	 */
	enterInit_declaratorlist?: (ctx: Init_declaratorlistContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.init_declaratorlist`.
	 * @param ctx the parse tree
	 */
	exitInit_declaratorlist?: (ctx: Init_declaratorlistContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.variable_declarator`.
	 * @param ctx the parse tree
	 */
	enterVariable_declarator?: (ctx: Variable_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.variable_declarator`.
	 * @param ctx the parse tree
	 */
	exitVariable_declarator?: (ctx: Variable_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializer?: (ctx: VariableInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializer?: (ctx: VariableInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_declaration?: (ctx: Function_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_declaration?: (ctx: Function_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.declarate_function`.
	 * @param ctx the parse tree
	 */
	enterDeclarate_function?: (ctx: Declarate_functionContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.declarate_function`.
	 * @param ctx the parse tree
	 */
	exitDeclarate_function?: (ctx: Declarate_functionContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.function_return_type_declarator`.
	 * @param ctx the parse tree
	 */
	enterFunction_return_type_declarator?: (ctx: Function_return_type_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.function_return_type_declarator`.
	 * @param ctx the parse tree
	 */
	exitFunction_return_type_declarator?: (ctx: Function_return_type_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.function_declarator`.
	 * @param ctx the parse tree
	 */
	enterFunction_declarator?: (ctx: Function_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.function_declarator`.
	 * @param ctx the parse tree
	 */
	exitFunction_declarator?: (ctx: Function_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.function_name`.
	 * @param ctx the parse tree
	 */
	enterFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.function_name`.
	 * @param ctx the parse tree
	 */
	exitFunction_name?: (ctx: Function_nameContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.parameter_decl_list`.
	 * @param ctx the parse tree
	 */
	enterParameter_decl_list?: (ctx: Parameter_decl_listContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.parameter_decl_list`.
	 * @param ctx the parse tree
	 */
	exitParameter_decl_list?: (ctx: Parameter_decl_listContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.expression_list`.
	 * @param ctx the parse tree
	 */
	enterExpression_list?: (ctx: Expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.expression_list`.
	 * @param ctx the parse tree
	 */
	exitExpression_list?: (ctx: Expression_listContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.vector_expression`.
	 * @param ctx the parse tree
	 */
	enterVector_expression?: (ctx: Vector_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.vector_expression`.
	 * @param ctx the parse tree
	 */
	exitVector_expression?: (ctx: Vector_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.vector_slice`.
	 * @param ctx the parse tree
	 */
	enterVector_slice?: (ctx: Vector_sliceContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.vector_slice`.
	 * @param ctx the parse tree
	 */
	exitVector_slice?: (ctx: Vector_sliceContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.single_expression`.
	 * @param ctx the parse tree
	 */
	enterSingle_expression?: (ctx: Single_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.single_expression`.
	 * @param ctx the parse tree
	 */
	exitSingle_expression?: (ctx: Single_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.lambda_exp`.
	 * @param ctx the parse tree
	 */
	enterLambda_exp?: (ctx: Lambda_expContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.lambda_exp`.
	 * @param ctx the parse tree
	 */
	exitLambda_exp?: (ctx: Lambda_expContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.lambda_body`.
	 * @param ctx the parse tree
	 */
	enterLambda_body?: (ctx: Lambda_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.lambda_body`.
	 * @param ctx the parse tree
	 */
	exitLambda_body?: (ctx: Lambda_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.additive_op`.
	 * @param ctx the parse tree
	 */
	enterAdditive_op?: (ctx: Additive_opContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.additive_op`.
	 * @param ctx the parse tree
	 */
	exitAdditive_op?: (ctx: Additive_opContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.multiplicative_op`.
	 * @param ctx the parse tree
	 */
	enterMultiplicative_op?: (ctx: Multiplicative_opContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.multiplicative_op`.
	 * @param ctx the parse tree
	 */
	exitMultiplicative_op?: (ctx: Multiplicative_opContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.shift_op`.
	 * @param ctx the parse tree
	 */
	enterShift_op?: (ctx: Shift_opContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.shift_op`.
	 * @param ctx the parse tree
	 */
	exitShift_op?: (ctx: Shift_opContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.assign_op`.
	 * @param ctx the parse tree
	 */
	enterAssign_op?: (ctx: Assign_opContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.assign_op`.
	 * @param ctx the parse tree
	 */
	exitAssign_op?: (ctx: Assign_opContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.equal_op`.
	 * @param ctx the parse tree
	 */
	enterEqual_op?: (ctx: Equal_opContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.equal_op`.
	 * @param ctx the parse tree
	 */
	exitEqual_op?: (ctx: Equal_opContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.relationship_op`.
	 * @param ctx the parse tree
	 */
	enterRelationship_op?: (ctx: Relationship_opContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.relationship_op`.
	 * @param ctx the parse tree
	 */
	exitRelationship_op?: (ctx: Relationship_opContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.logic_op`.
	 * @param ctx the parse tree
	 */
	enterLogic_op?: (ctx: Logic_opContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.logic_op`.
	 * @param ctx the parse tree
	 */
	exitLogic_op?: (ctx: Logic_opContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.unary_op`.
	 * @param ctx the parse tree
	 */
	enterUnary_op?: (ctx: Unary_opContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.unary_op`.
	 * @param ctx the parse tree
	 */
	exitUnary_op?: (ctx: Unary_opContext) => void;

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
	 * Enter a parse tree produced by `qcodeParser.while_statement`.
	 * @param ctx the parse tree
	 */
	enterWhile_statement?: (ctx: While_statementContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.while_statement`.
	 * @param ctx the parse tree
	 */
	exitWhile_statement?: (ctx: While_statementContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.return_statement`.
	 * @param ctx the parse tree
	 */
	enterReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.return_statement`.
	 * @param ctx the parse tree
	 */
	exitReturn_statement?: (ctx: Return_statementContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.qif_statement`.
	 * @param ctx the parse tree
	 */
	enterQif_statement?: (ctx: Qif_statementContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.qif_statement`.
	 * @param ctx the parse tree
	 */
	exitQif_statement?: (ctx: Qif_statementContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.qif_true_branch`.
	 * @param ctx the parse tree
	 */
	enterQif_true_branch?: (ctx: Qif_true_branchContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.qif_true_branch`.
	 * @param ctx the parse tree
	 */
	exitQif_true_branch?: (ctx: Qif_true_branchContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.qif_false_branch`.
	 * @param ctx the parse tree
	 */
	enterQif_false_branch?: (ctx: Qif_false_branchContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.qif_false_branch`.
	 * @param ctx the parse tree
	 */
	exitQif_false_branch?: (ctx: Qif_false_branchContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.qwhile_statement`.
	 * @param ctx the parse tree
	 */
	enterQwhile_statement?: (ctx: Qwhile_statementContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.qwhile_statement`.
	 * @param ctx the parse tree
	 */
	exitQwhile_statement?: (ctx: Qwhile_statementContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.expression_statement`.
	 * @param ctx the parse tree
	 */
	enterExpression_statement?: (ctx: Expression_statementContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.expression_statement`.
	 * @param ctx the parse tree
	 */
	exitExpression_statement?: (ctx: Expression_statementContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.empty_statement`.
	 * @param ctx the parse tree
	 */
	enterEmpty_statement?: (ctx: Empty_statementContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.empty_statement`.
	 * @param ctx the parse tree
	 */
	exitEmpty_statement?: (ctx: Empty_statementContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.declaration_variable_statement`.
	 * @param ctx the parse tree
	 */
	enterDeclaration_variable_statement?: (ctx: Declaration_variable_statementContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.declaration_variable_statement`.
	 * @param ctx the parse tree
	 */
	exitDeclaration_variable_statement?: (ctx: Declaration_variable_statementContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.compound_statement`.
	 * @param ctx the parse tree
	 */
	enterCompound_statement?: (ctx: Compound_statementContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.compound_statement`.
	 * @param ctx the parse tree
	 */
	exitCompound_statement?: (ctx: Compound_statementContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.select_statement`.
	 * @param ctx the parse tree
	 */
	enterSelect_statement?: (ctx: Select_statementContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.select_statement`.
	 * @param ctx the parse tree
	 */
	exitSelect_statement?: (ctx: Select_statementContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.iterate_statement`.
	 * @param ctx the parse tree
	 */
	enterIterate_statement?: (ctx: Iterate_statementContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.iterate_statement`.
	 * @param ctx the parse tree
	 */
	exitIterate_statement?: (ctx: Iterate_statementContext) => void;

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
	 * Enter a parse tree produced by `qcodeParser.for_condition`.
	 * @param ctx the parse tree
	 */
	enterFor_condition?: (ctx: For_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.for_condition`.
	 * @param ctx the parse tree
	 */
	exitFor_condition?: (ctx: For_conditionContext) => void;

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
	 * Enter a parse tree produced by `qcodeParser.inhanced_for_stmt`.
	 * @param ctx the parse tree
	 */
	enterInhanced_for_stmt?: (ctx: Inhanced_for_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.inhanced_for_stmt`.
	 * @param ctx the parse tree
	 */
	exitInhanced_for_stmt?: (ctx: Inhanced_for_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.statement_list`.
	 * @param ctx the parse tree
	 */
	enterStatement_list?: (ctx: Statement_listContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.statement_list`.
	 * @param ctx the parse tree
	 */
	exitStatement_list?: (ctx: Statement_listContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.function_definition`.
	 * @param ctx the parse tree
	 */
	enterFunction_definition?: (ctx: Function_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.function_definition`.
	 * @param ctx the parse tree
	 */
	exitFunction_definition?: (ctx: Function_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.function_body`.
	 * @param ctx the parse tree
	 */
	enterFunction_body?: (ctx: Function_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.function_body`.
	 * @param ctx the parse tree
	 */
	exitFunction_body?: (ctx: Function_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.key_words`.
	 * @param ctx the parse tree
	 */
	enterKey_words?: (ctx: Key_wordsContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.key_words`.
	 * @param ctx the parse tree
	 */
	exitKey_words?: (ctx: Key_wordsContext) => void;

	/**
	 * Enter a parse tree produced by `qcodeParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `qcodeParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;
}

