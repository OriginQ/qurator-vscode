# Generated from qcode.g4 by ANTLR 4.7.1
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .qcodeParser import qcodeParser
else:
    from qcodeParser import qcodeParser

# This class defines a complete generic visitor for a parse tree produced by qcodeParser.

class qcodeVisitor(ParseTreeVisitor):

    # Visit a parse tree produced by qcodeParser#qrunes.
    def visitQrunes(self, ctx:qcodeParser.QrunesContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#lang_unit.
    def visitLang_unit(self, ctx:qcodeParser.Lang_unitContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#include_declaration.
    def visitInclude_declaration(self, ctx:qcodeParser.Include_declarationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#include_sign.
    def visitInclude_sign(self, ctx:qcodeParser.Include_signContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#postfix.
    def visitPostfix(self, ctx:qcodeParser.PostfixContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#declaration.
    def visitDeclaration(self, ctx:qcodeParser.DeclarationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#literal_declaration.
    def visitLiteral_declaration(self, ctx:qcodeParser.Literal_declarationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#declaration_Specifier.
    def visitDeclaration_Specifier(self, ctx:qcodeParser.Declaration_SpecifierContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#literal_type.
    def visitLiteral_type(self, ctx:qcodeParser.Literal_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#primary_type.
    def visitPrimary_type(self, ctx:qcodeParser.Primary_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#quantum_type.
    def visitQuantum_type(self, ctx:qcodeParser.Quantum_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#assist_classical_type.
    def visitAssist_classical_type(self, ctx:qcodeParser.Assist_classical_typeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#init_DeclaratorList.
    def visitInit_DeclaratorList(self, ctx:qcodeParser.Init_DeclaratorListContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#init_Literal_DeclaratorList.
    def visitInit_Literal_DeclaratorList(self, ctx:qcodeParser.Init_Literal_DeclaratorListContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#init_Declarator.
    def visitInit_Declarator(self, ctx:qcodeParser.Init_DeclaratorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#init_Literal_Declarator.
    def visitInit_Literal_Declarator(self, ctx:qcodeParser.Init_Literal_DeclaratorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#declarator.
    def visitDeclarator(self, ctx:qcodeParser.DeclaratorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#assignment_exp.
    def visitAssignment_exp(self, ctx:qcodeParser.Assignment_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#assignment_operator.
    def visitAssignment_operator(self, ctx:qcodeParser.Assignment_operatorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#condition_exp.
    def visitCondition_exp(self, ctx:qcodeParser.Condition_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#expression.
    def visitExpression(self, ctx:qcodeParser.ExpressionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#logicOr_exp.
    def visitLogicOr_exp(self, ctx:qcodeParser.LogicOr_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#logicAnd_exp.
    def visitLogicAnd_exp(self, ctx:qcodeParser.LogicAnd_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#inclu_exp.
    def visitInclu_exp(self, ctx:qcodeParser.Inclu_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#exclu_exp.
    def visitExclu_exp(self, ctx:qcodeParser.Exclu_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#and_exp.
    def visitAnd_exp(self, ctx:qcodeParser.And_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#equal_exp.
    def visitEqual_exp(self, ctx:qcodeParser.Equal_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#relation_exp.
    def visitRelation_exp(self, ctx:qcodeParser.Relation_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#shift_exp.
    def visitShift_exp(self, ctx:qcodeParser.Shift_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#additive_exp.
    def visitAdditive_exp(self, ctx:qcodeParser.Additive_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#multi_exp.
    def visitMulti_exp(self, ctx:qcodeParser.Multi_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#cast_exp.
    def visitCast_exp(self, ctx:qcodeParser.Cast_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#unary_exp.
    def visitUnary_exp(self, ctx:qcodeParser.Unary_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#unary_operator.
    def visitUnary_operator(self, ctx:qcodeParser.Unary_operatorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#postfix_exp.
    def visitPostfix_exp(self, ctx:qcodeParser.Postfix_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#argument_exp_List.
    def visitArgument_exp_List(self, ctx:qcodeParser.Argument_exp_ListContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#primary_exp.
    def visitPrimary_exp(self, ctx:qcodeParser.Primary_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#args_type_List.
    def visitArgs_type_List(self, ctx:qcodeParser.Args_type_ListContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#args_declaration.
    def visitArgs_declaration(self, ctx:qcodeParser.Args_declarationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#initializer.
    def visitInitializer(self, ctx:qcodeParser.InitializerContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#initializerList.
    def visitInitializerList(self, ctx:qcodeParser.InitializerListContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#designation.
    def visitDesignation(self, ctx:qcodeParser.DesignationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#designatorList.
    def visitDesignatorList(self, ctx:qcodeParser.DesignatorListContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#designator.
    def visitDesignator(self, ctx:qcodeParser.DesignatorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#constant_exp.
    def visitConstant_exp(self, ctx:qcodeParser.Constant_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#func_declaration.
    def visitFunc_declaration(self, ctx:qcodeParser.Func_declarationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#func_declarator.
    def visitFunc_declarator(self, ctx:qcodeParser.Func_declaratorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#func_definition.
    def visitFunc_definition(self, ctx:qcodeParser.Func_definitionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#declarationList.
    def visitDeclarationList(self, ctx:qcodeParser.DeclarationListContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#comp_stmt.
    def visitComp_stmt(self, ctx:qcodeParser.Comp_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#block_List.
    def visitBlock_List(self, ctx:qcodeParser.Block_ListContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#block_Item.
    def visitBlock_Item(self, ctx:qcodeParser.Block_ItemContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#statement.
    def visitStatement(self, ctx:qcodeParser.StatementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#exp_stmt.
    def visitExp_stmt(self, ctx:qcodeParser.Exp_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#select_stmt.
    def visitSelect_stmt(self, ctx:qcodeParser.Select_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#iterate_stmt.
    def visitIterate_stmt(self, ctx:qcodeParser.Iterate_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#for_stmt.
    def visitFor_stmt(self, ctx:qcodeParser.For_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#for_start.
    def visitFor_start(self, ctx:qcodeParser.For_startContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#for_step.
    def visitFor_step(self, ctx:qcodeParser.For_stepContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#for_end.
    def visitFor_end(self, ctx:qcodeParser.For_endContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#quantum_gate_stmt.
    def visitQuantum_gate_stmt(self, ctx:qcodeParser.Quantum_gate_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#quantum_gate_operation.
    def visitQuantum_gate_operation(self, ctx:qcodeParser.Quantum_gate_operationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#four_angle_args.
    def visitFour_angle_args(self, ctx:qcodeParser.Four_angle_argsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#alpha.
    def visitAlpha(self, ctx:qcodeParser.AlphaContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#beta.
    def visitBeta(self, ctx:qcodeParser.BetaContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#gamma.
    def visitGamma(self, ctx:qcodeParser.GammaContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#delta.
    def visitDelta(self, ctx:qcodeParser.DeltaContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#theta.
    def visitTheta(self, ctx:qcodeParser.ThetaContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#control_gate_exp.
    def visitControl_gate_exp(self, ctx:qcodeParser.Control_gate_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#double_gate_exp.
    def visitDouble_gate_exp(self, ctx:qcodeParser.Double_gate_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#target_gate_exp.
    def visitTarget_gate_exp(self, ctx:qcodeParser.Target_gate_expContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#measurement_stmt.
    def visitMeasurement_stmt(self, ctx:qcodeParser.Measurement_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#accept_cbit_stmt.
    def visitAccept_cbit_stmt(self, ctx:qcodeParser.Accept_cbit_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#q_if_operation.
    def visitQ_if_operation(self, ctx:qcodeParser.Q_if_operationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#q_if_stmt.
    def visitQ_if_stmt(self, ctx:qcodeParser.Q_if_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#q_if_stmt_item.
    def visitQ_if_stmt_item(self, ctx:qcodeParser.Q_if_stmt_itemContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#q_while_operation.
    def visitQ_while_operation(self, ctx:qcodeParser.Q_while_operationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#q_while_stmt.
    def visitQ_while_stmt(self, ctx:qcodeParser.Q_while_stmtContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#q_while_stmt_item.
    def visitQ_while_stmt_item(self, ctx:qcodeParser.Q_while_stmt_itemContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#q_condition.
    def visitQ_condition(self, ctx:qcodeParser.Q_conditionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by qcodeParser#q_operator.
    def visitQ_operator(self, ctx:qcodeParser.Q_operatorContext):
        return self.visitChildren(ctx)



del qcodeParser