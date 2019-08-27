# Generated from Qcode.g4 by ANTLR 4.7.1
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .QcodeParser import QcodeParser
else:
    from QcodeParser import QcodeParser

# This class defines a complete generic visitor for a parse tree produced by QcodeParser.

class QcodeVisitor(ParseTreeVisitor):

    # Visit a parse tree produced by QcodeParser#qrunes.
    def visitQrunes(self, ctx:QcodeParser.QrunesContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#lang_unit.
    def visitLang_unit(self, ctx:QcodeParser.Lang_unitContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#declaration.
    def visitDeclaration(self, ctx:QcodeParser.DeclarationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#include_declaration.
    def visitInclude_declaration(self, ctx:QcodeParser.Include_declarationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#include_sign.
    def visitInclude_sign(self, ctx:QcodeParser.Include_signContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#variable_declaration.
    def visitVariable_declaration(self, ctx:QcodeParser.Variable_declarationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#parameter_declaration.
    def visitParameter_declaration(self, ctx:QcodeParser.Parameter_declarationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#parameter_specifier.
    def visitParameter_specifier(self, ctx:QcodeParser.Parameter_specifierContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#quantum_alg_built_in_type.
    def visitQuantum_alg_built_in_type(self, ctx:QcodeParser.Quantum_alg_built_in_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#auxiliary_primary_type.
    def visitAuxiliary_primary_type(self, ctx:QcodeParser.Auxiliary_primary_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#quantum_circuit_type.
    def visitQuantum_circuit_type(self, ctx:QcodeParser.Quantum_circuit_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#quantum_prog_type.
    def visitQuantum_prog_type(self, ctx:QcodeParser.Quantum_prog_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#quantum_primary_type.
    def visitQuantum_primary_type(self, ctx:QcodeParser.Quantum_primary_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#classical_primary_type.
    def visitClassical_primary_type(self, ctx:QcodeParser.Classical_primary_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#array_construct_type.
    def visitArray_construct_type(self, ctx:QcodeParser.Array_construct_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#construct_primary_type.
    def visitConstruct_primary_type(self, ctx:QcodeParser.Construct_primary_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#call_back_construct_type.
    def visitCall_back_construct_type(self, ctx:QcodeParser.Call_back_construct_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#call_back_primary_type_list.
    def visitCall_back_primary_type_list(self, ctx:QcodeParser.Call_back_primary_type_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#call_back_primary_type.
    def visitCall_back_primary_type(self, ctx:QcodeParser.Call_back_primary_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#declaration_variable.
    def visitDeclaration_variable(self, ctx:QcodeParser.Declaration_variableContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#variable_decl_specifier.
    def visitVariable_decl_specifier(self, ctx:QcodeParser.Variable_decl_specifierContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#common_specifier.
    def visitCommon_specifier(self, ctx:QcodeParser.Common_specifierContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#init_declaratorlist.
    def visitInit_declaratorlist(self, ctx:QcodeParser.Init_declaratorlistContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#variable_declarator.
    def visitVariable_declarator(self, ctx:QcodeParser.Variable_declaratorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#variableInitializer.
    def visitVariableInitializer(self, ctx:QcodeParser.VariableInitializerContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#function_declaration.
    def visitFunction_declaration(self, ctx:QcodeParser.Function_declarationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#declarate_function.
    def visitDeclarate_function(self, ctx:QcodeParser.Declarate_functionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#function_return_type_declarator.
    def visitFunction_return_type_declarator(self, ctx:QcodeParser.Function_return_type_declaratorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#function_declarator.
    def visitFunction_declarator(self, ctx:QcodeParser.Function_declaratorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#function_name.
    def visitFunction_name(self, ctx:QcodeParser.Function_nameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#parameter_decl_list.
    def visitParameter_decl_list(self, ctx:QcodeParser.Parameter_decl_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#expression_list.
    def visitExpression_list(self, ctx:QcodeParser.Expression_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#vector_expression.
    def visitVector_expression(self, ctx:QcodeParser.Vector_expressionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#vector_slice.
    def visitVector_slice(self, ctx:QcodeParser.Vector_sliceContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#single_expression.
    def visitSingle_expression(self, ctx:QcodeParser.Single_expressionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#lambda_exp.
    def visitLambda_exp(self, ctx:QcodeParser.Lambda_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#lambda_body.
    def visitLambda_body(self, ctx:QcodeParser.Lambda_bodyContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#additive_op.
    def visitAdditive_op(self, ctx:QcodeParser.Additive_opContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#multiplicative_op.
    def visitMultiplicative_op(self, ctx:QcodeParser.Multiplicative_opContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#shift_op.
    def visitShift_op(self, ctx:QcodeParser.Shift_opContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#assign_op.
    def visitAssign_op(self, ctx:QcodeParser.Assign_opContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#equal_op.
    def visitEqual_op(self, ctx:QcodeParser.Equal_opContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#relationship_op.
    def visitRelationship_op(self, ctx:QcodeParser.Relationship_opContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#logic_op.
    def visitLogic_op(self, ctx:QcodeParser.Logic_opContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#unary_op.
    def visitUnary_op(self, ctx:QcodeParser.Unary_opContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#statement.
    def visitStatement(self, ctx:QcodeParser.StatementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#while_statement.
    def visitWhile_statement(self, ctx:QcodeParser.While_statementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#return_statement.
    def visitReturn_statement(self, ctx:QcodeParser.Return_statementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#qif_statement.
    def visitQif_statement(self, ctx:QcodeParser.Qif_statementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#qif_true_branch.
    def visitQif_true_branch(self, ctx:QcodeParser.Qif_true_branchContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#qif_false_branch.
    def visitQif_false_branch(self, ctx:QcodeParser.Qif_false_branchContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#qwhile_statement.
    def visitQwhile_statement(self, ctx:QcodeParser.Qwhile_statementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#expression_statement.
    def visitExpression_statement(self, ctx:QcodeParser.Expression_statementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#empty_statement.
    def visitEmpty_statement(self, ctx:QcodeParser.Empty_statementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#declaration_variable_statement.
    def visitDeclaration_variable_statement(self, ctx:QcodeParser.Declaration_variable_statementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#compound_statement.
    def visitCompound_statement(self, ctx:QcodeParser.Compound_statementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#select_statement.
    def visitSelect_statement(self, ctx:QcodeParser.Select_statementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#iterate_statement.
    def visitIterate_statement(self, ctx:QcodeParser.Iterate_statementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#for_stmt.
    def visitFor_stmt(self, ctx:QcodeParser.For_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#for_step.
    def visitFor_step(self, ctx:QcodeParser.For_stepContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#for_condition.
    def visitFor_condition(self, ctx:QcodeParser.For_conditionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#for_start.
    def visitFor_start(self, ctx:QcodeParser.For_startContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#inhanced_for_stmt.
    def visitInhanced_for_stmt(self, ctx:QcodeParser.Inhanced_for_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#statement_list.
    def visitStatement_list(self, ctx:QcodeParser.Statement_listContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#function_definition.
    def visitFunction_definition(self, ctx:QcodeParser.Function_definitionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#function_body.
    def visitFunction_body(self, ctx:QcodeParser.Function_bodyContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#key_words.
    def visitKey_words(self, ctx:QcodeParser.Key_wordsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by QcodeParser#constant.
    def visitConstant(self, ctx:QcodeParser.ConstantContext):
        return self.visitChildren(ctx)



del QcodeParser