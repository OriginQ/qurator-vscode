# Generated from qcode.g4 by ANTLR 4.7.1
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .qcodeParser import qcodeParser
else:
    from qcodeParser import qcodeParser

# This class defines a complete listener for a parse tree produced by qcodeParser.
class qcodeListener(ParseTreeListener):

    # Enter a parse tree produced by qcodeParser#qrunes.
    def enterQrunes(self, ctx:qcodeParser.QrunesContext):
        pass

    # Exit a parse tree produced by qcodeParser#qrunes.
    def exitQrunes(self, ctx:qcodeParser.QrunesContext):
        pass


    # Enter a parse tree produced by qcodeParser#lang_unit.
    def enterLang_unit(self, ctx:qcodeParser.Lang_unitContext):
        pass

    # Exit a parse tree produced by qcodeParser#lang_unit.
    def exitLang_unit(self, ctx:qcodeParser.Lang_unitContext):
        pass


    # Enter a parse tree produced by qcodeParser#include_declaration.
    def enterInclude_declaration(self, ctx:qcodeParser.Include_declarationContext):
        pass

    # Exit a parse tree produced by qcodeParser#include_declaration.
    def exitInclude_declaration(self, ctx:qcodeParser.Include_declarationContext):
        pass


    # Enter a parse tree produced by qcodeParser#include_sign.
    def enterInclude_sign(self, ctx:qcodeParser.Include_signContext):
        pass

    # Exit a parse tree produced by qcodeParser#include_sign.
    def exitInclude_sign(self, ctx:qcodeParser.Include_signContext):
        pass


    # Enter a parse tree produced by qcodeParser#postfix.
    def enterPostfix(self, ctx:qcodeParser.PostfixContext):
        pass

    # Exit a parse tree produced by qcodeParser#postfix.
    def exitPostfix(self, ctx:qcodeParser.PostfixContext):
        pass


    # Enter a parse tree produced by qcodeParser#declaration.
    def enterDeclaration(self, ctx:qcodeParser.DeclarationContext):
        pass

    # Exit a parse tree produced by qcodeParser#declaration.
    def exitDeclaration(self, ctx:qcodeParser.DeclarationContext):
        pass


    # Enter a parse tree produced by qcodeParser#literal_declaration.
    def enterLiteral_declaration(self, ctx:qcodeParser.Literal_declarationContext):
        pass

    # Exit a parse tree produced by qcodeParser#literal_declaration.
    def exitLiteral_declaration(self, ctx:qcodeParser.Literal_declarationContext):
        pass


    # Enter a parse tree produced by qcodeParser#declaration_Specifier.
    def enterDeclaration_Specifier(self, ctx:qcodeParser.Declaration_SpecifierContext):
        pass

    # Exit a parse tree produced by qcodeParser#declaration_Specifier.
    def exitDeclaration_Specifier(self, ctx:qcodeParser.Declaration_SpecifierContext):
        pass


    # Enter a parse tree produced by qcodeParser#literal_type.
    def enterLiteral_type(self, ctx:qcodeParser.Literal_typeContext):
        pass

    # Exit a parse tree produced by qcodeParser#literal_type.
    def exitLiteral_type(self, ctx:qcodeParser.Literal_typeContext):
        pass


    # Enter a parse tree produced by qcodeParser#primary_type.
    def enterPrimary_type(self, ctx:qcodeParser.Primary_typeContext):
        pass

    # Exit a parse tree produced by qcodeParser#primary_type.
    def exitPrimary_type(self, ctx:qcodeParser.Primary_typeContext):
        pass


    # Enter a parse tree produced by qcodeParser#quantum_type.
    def enterQuantum_type(self, ctx:qcodeParser.Quantum_typeContext):
        pass

    # Exit a parse tree produced by qcodeParser#quantum_type.
    def exitQuantum_type(self, ctx:qcodeParser.Quantum_typeContext):
        pass


    # Enter a parse tree produced by qcodeParser#assist_classical_type.
    def enterAssist_classical_type(self, ctx:qcodeParser.Assist_classical_typeContext):
        pass

    # Exit a parse tree produced by qcodeParser#assist_classical_type.
    def exitAssist_classical_type(self, ctx:qcodeParser.Assist_classical_typeContext):
        pass


    # Enter a parse tree produced by qcodeParser#init_DeclaratorList.
    def enterInit_DeclaratorList(self, ctx:qcodeParser.Init_DeclaratorListContext):
        pass

    # Exit a parse tree produced by qcodeParser#init_DeclaratorList.
    def exitInit_DeclaratorList(self, ctx:qcodeParser.Init_DeclaratorListContext):
        pass


    # Enter a parse tree produced by qcodeParser#init_Literal_DeclaratorList.
    def enterInit_Literal_DeclaratorList(self, ctx:qcodeParser.Init_Literal_DeclaratorListContext):
        pass

    # Exit a parse tree produced by qcodeParser#init_Literal_DeclaratorList.
    def exitInit_Literal_DeclaratorList(self, ctx:qcodeParser.Init_Literal_DeclaratorListContext):
        pass


    # Enter a parse tree produced by qcodeParser#init_Declarator.
    def enterInit_Declarator(self, ctx:qcodeParser.Init_DeclaratorContext):
        pass

    # Exit a parse tree produced by qcodeParser#init_Declarator.
    def exitInit_Declarator(self, ctx:qcodeParser.Init_DeclaratorContext):
        pass


    # Enter a parse tree produced by qcodeParser#init_Literal_Declarator.
    def enterInit_Literal_Declarator(self, ctx:qcodeParser.Init_Literal_DeclaratorContext):
        pass

    # Exit a parse tree produced by qcodeParser#init_Literal_Declarator.
    def exitInit_Literal_Declarator(self, ctx:qcodeParser.Init_Literal_DeclaratorContext):
        pass


    # Enter a parse tree produced by qcodeParser#declarator.
    def enterDeclarator(self, ctx:qcodeParser.DeclaratorContext):
        pass

    # Exit a parse tree produced by qcodeParser#declarator.
    def exitDeclarator(self, ctx:qcodeParser.DeclaratorContext):
        pass


    # Enter a parse tree produced by qcodeParser#assignment_exp.
    def enterAssignment_exp(self, ctx:qcodeParser.Assignment_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#assignment_exp.
    def exitAssignment_exp(self, ctx:qcodeParser.Assignment_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#assignment_operator.
    def enterAssignment_operator(self, ctx:qcodeParser.Assignment_operatorContext):
        pass

    # Exit a parse tree produced by qcodeParser#assignment_operator.
    def exitAssignment_operator(self, ctx:qcodeParser.Assignment_operatorContext):
        pass


    # Enter a parse tree produced by qcodeParser#condition_exp.
    def enterCondition_exp(self, ctx:qcodeParser.Condition_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#condition_exp.
    def exitCondition_exp(self, ctx:qcodeParser.Condition_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#expression.
    def enterExpression(self, ctx:qcodeParser.ExpressionContext):
        pass

    # Exit a parse tree produced by qcodeParser#expression.
    def exitExpression(self, ctx:qcodeParser.ExpressionContext):
        pass


    # Enter a parse tree produced by qcodeParser#logicOr_exp.
    def enterLogicOr_exp(self, ctx:qcodeParser.LogicOr_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#logicOr_exp.
    def exitLogicOr_exp(self, ctx:qcodeParser.LogicOr_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#logicAnd_exp.
    def enterLogicAnd_exp(self, ctx:qcodeParser.LogicAnd_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#logicAnd_exp.
    def exitLogicAnd_exp(self, ctx:qcodeParser.LogicAnd_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#inclu_exp.
    def enterInclu_exp(self, ctx:qcodeParser.Inclu_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#inclu_exp.
    def exitInclu_exp(self, ctx:qcodeParser.Inclu_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#exclu_exp.
    def enterExclu_exp(self, ctx:qcodeParser.Exclu_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#exclu_exp.
    def exitExclu_exp(self, ctx:qcodeParser.Exclu_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#and_exp.
    def enterAnd_exp(self, ctx:qcodeParser.And_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#and_exp.
    def exitAnd_exp(self, ctx:qcodeParser.And_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#equal_exp.
    def enterEqual_exp(self, ctx:qcodeParser.Equal_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#equal_exp.
    def exitEqual_exp(self, ctx:qcodeParser.Equal_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#relation_exp.
    def enterRelation_exp(self, ctx:qcodeParser.Relation_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#relation_exp.
    def exitRelation_exp(self, ctx:qcodeParser.Relation_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#shift_exp.
    def enterShift_exp(self, ctx:qcodeParser.Shift_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#shift_exp.
    def exitShift_exp(self, ctx:qcodeParser.Shift_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#additive_exp.
    def enterAdditive_exp(self, ctx:qcodeParser.Additive_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#additive_exp.
    def exitAdditive_exp(self, ctx:qcodeParser.Additive_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#multi_exp.
    def enterMulti_exp(self, ctx:qcodeParser.Multi_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#multi_exp.
    def exitMulti_exp(self, ctx:qcodeParser.Multi_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#cast_exp.
    def enterCast_exp(self, ctx:qcodeParser.Cast_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#cast_exp.
    def exitCast_exp(self, ctx:qcodeParser.Cast_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#unary_exp.
    def enterUnary_exp(self, ctx:qcodeParser.Unary_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#unary_exp.
    def exitUnary_exp(self, ctx:qcodeParser.Unary_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#unary_operator.
    def enterUnary_operator(self, ctx:qcodeParser.Unary_operatorContext):
        pass

    # Exit a parse tree produced by qcodeParser#unary_operator.
    def exitUnary_operator(self, ctx:qcodeParser.Unary_operatorContext):
        pass


    # Enter a parse tree produced by qcodeParser#postfix_exp.
    def enterPostfix_exp(self, ctx:qcodeParser.Postfix_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#postfix_exp.
    def exitPostfix_exp(self, ctx:qcodeParser.Postfix_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#argument_exp_List.
    def enterArgument_exp_List(self, ctx:qcodeParser.Argument_exp_ListContext):
        pass

    # Exit a parse tree produced by qcodeParser#argument_exp_List.
    def exitArgument_exp_List(self, ctx:qcodeParser.Argument_exp_ListContext):
        pass


    # Enter a parse tree produced by qcodeParser#primary_exp.
    def enterPrimary_exp(self, ctx:qcodeParser.Primary_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#primary_exp.
    def exitPrimary_exp(self, ctx:qcodeParser.Primary_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#args_type_List.
    def enterArgs_type_List(self, ctx:qcodeParser.Args_type_ListContext):
        pass

    # Exit a parse tree produced by qcodeParser#args_type_List.
    def exitArgs_type_List(self, ctx:qcodeParser.Args_type_ListContext):
        pass


    # Enter a parse tree produced by qcodeParser#args_declaration.
    def enterArgs_declaration(self, ctx:qcodeParser.Args_declarationContext):
        pass

    # Exit a parse tree produced by qcodeParser#args_declaration.
    def exitArgs_declaration(self, ctx:qcodeParser.Args_declarationContext):
        pass


    # Enter a parse tree produced by qcodeParser#initializer.
    def enterInitializer(self, ctx:qcodeParser.InitializerContext):
        pass

    # Exit a parse tree produced by qcodeParser#initializer.
    def exitInitializer(self, ctx:qcodeParser.InitializerContext):
        pass


    # Enter a parse tree produced by qcodeParser#initializerList.
    def enterInitializerList(self, ctx:qcodeParser.InitializerListContext):
        pass

    # Exit a parse tree produced by qcodeParser#initializerList.
    def exitInitializerList(self, ctx:qcodeParser.InitializerListContext):
        pass


    # Enter a parse tree produced by qcodeParser#designation.
    def enterDesignation(self, ctx:qcodeParser.DesignationContext):
        pass

    # Exit a parse tree produced by qcodeParser#designation.
    def exitDesignation(self, ctx:qcodeParser.DesignationContext):
        pass


    # Enter a parse tree produced by qcodeParser#designatorList.
    def enterDesignatorList(self, ctx:qcodeParser.DesignatorListContext):
        pass

    # Exit a parse tree produced by qcodeParser#designatorList.
    def exitDesignatorList(self, ctx:qcodeParser.DesignatorListContext):
        pass


    # Enter a parse tree produced by qcodeParser#designator.
    def enterDesignator(self, ctx:qcodeParser.DesignatorContext):
        pass

    # Exit a parse tree produced by qcodeParser#designator.
    def exitDesignator(self, ctx:qcodeParser.DesignatorContext):
        pass


    # Enter a parse tree produced by qcodeParser#constant_exp.
    def enterConstant_exp(self, ctx:qcodeParser.Constant_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#constant_exp.
    def exitConstant_exp(self, ctx:qcodeParser.Constant_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#func_declaration.
    def enterFunc_declaration(self, ctx:qcodeParser.Func_declarationContext):
        pass

    # Exit a parse tree produced by qcodeParser#func_declaration.
    def exitFunc_declaration(self, ctx:qcodeParser.Func_declarationContext):
        pass


    # Enter a parse tree produced by qcodeParser#func_declarator.
    def enterFunc_declarator(self, ctx:qcodeParser.Func_declaratorContext):
        pass

    # Exit a parse tree produced by qcodeParser#func_declarator.
    def exitFunc_declarator(self, ctx:qcodeParser.Func_declaratorContext):
        pass


    # Enter a parse tree produced by qcodeParser#func_definition.
    def enterFunc_definition(self, ctx:qcodeParser.Func_definitionContext):
        pass

    # Exit a parse tree produced by qcodeParser#func_definition.
    def exitFunc_definition(self, ctx:qcodeParser.Func_definitionContext):
        pass


    # Enter a parse tree produced by qcodeParser#declarationList.
    def enterDeclarationList(self, ctx:qcodeParser.DeclarationListContext):
        pass

    # Exit a parse tree produced by qcodeParser#declarationList.
    def exitDeclarationList(self, ctx:qcodeParser.DeclarationListContext):
        pass


    # Enter a parse tree produced by qcodeParser#comp_stmt.
    def enterComp_stmt(self, ctx:qcodeParser.Comp_stmtContext):
        pass

    # Exit a parse tree produced by qcodeParser#comp_stmt.
    def exitComp_stmt(self, ctx:qcodeParser.Comp_stmtContext):
        pass


    # Enter a parse tree produced by qcodeParser#block_List.
    def enterBlock_List(self, ctx:qcodeParser.Block_ListContext):
        pass

    # Exit a parse tree produced by qcodeParser#block_List.
    def exitBlock_List(self, ctx:qcodeParser.Block_ListContext):
        pass


    # Enter a parse tree produced by qcodeParser#block_Item.
    def enterBlock_Item(self, ctx:qcodeParser.Block_ItemContext):
        pass

    # Exit a parse tree produced by qcodeParser#block_Item.
    def exitBlock_Item(self, ctx:qcodeParser.Block_ItemContext):
        pass


    # Enter a parse tree produced by qcodeParser#statement.
    def enterStatement(self, ctx:qcodeParser.StatementContext):
        pass

    # Exit a parse tree produced by qcodeParser#statement.
    def exitStatement(self, ctx:qcodeParser.StatementContext):
        pass


    # Enter a parse tree produced by qcodeParser#exp_stmt.
    def enterExp_stmt(self, ctx:qcodeParser.Exp_stmtContext):
        pass

    # Exit a parse tree produced by qcodeParser#exp_stmt.
    def exitExp_stmt(self, ctx:qcodeParser.Exp_stmtContext):
        pass


    # Enter a parse tree produced by qcodeParser#select_stmt.
    def enterSelect_stmt(self, ctx:qcodeParser.Select_stmtContext):
        pass

    # Exit a parse tree produced by qcodeParser#select_stmt.
    def exitSelect_stmt(self, ctx:qcodeParser.Select_stmtContext):
        pass


    # Enter a parse tree produced by qcodeParser#iterate_stmt.
    def enterIterate_stmt(self, ctx:qcodeParser.Iterate_stmtContext):
        pass

    # Exit a parse tree produced by qcodeParser#iterate_stmt.
    def exitIterate_stmt(self, ctx:qcodeParser.Iterate_stmtContext):
        pass


    # Enter a parse tree produced by qcodeParser#for_stmt.
    def enterFor_stmt(self, ctx:qcodeParser.For_stmtContext):
        pass

    # Exit a parse tree produced by qcodeParser#for_stmt.
    def exitFor_stmt(self, ctx:qcodeParser.For_stmtContext):
        pass


    # Enter a parse tree produced by qcodeParser#for_start.
    def enterFor_start(self, ctx:qcodeParser.For_startContext):
        pass

    # Exit a parse tree produced by qcodeParser#for_start.
    def exitFor_start(self, ctx:qcodeParser.For_startContext):
        pass


    # Enter a parse tree produced by qcodeParser#for_step.
    def enterFor_step(self, ctx:qcodeParser.For_stepContext):
        pass

    # Exit a parse tree produced by qcodeParser#for_step.
    def exitFor_step(self, ctx:qcodeParser.For_stepContext):
        pass


    # Enter a parse tree produced by qcodeParser#for_end.
    def enterFor_end(self, ctx:qcodeParser.For_endContext):
        pass

    # Exit a parse tree produced by qcodeParser#for_end.
    def exitFor_end(self, ctx:qcodeParser.For_endContext):
        pass


    # Enter a parse tree produced by qcodeParser#quantum_gate_stmt.
    def enterQuantum_gate_stmt(self, ctx:qcodeParser.Quantum_gate_stmtContext):
        pass

    # Exit a parse tree produced by qcodeParser#quantum_gate_stmt.
    def exitQuantum_gate_stmt(self, ctx:qcodeParser.Quantum_gate_stmtContext):
        pass


    # Enter a parse tree produced by qcodeParser#quantum_gate_operation.
    def enterQuantum_gate_operation(self, ctx:qcodeParser.Quantum_gate_operationContext):
        pass

    # Exit a parse tree produced by qcodeParser#quantum_gate_operation.
    def exitQuantum_gate_operation(self, ctx:qcodeParser.Quantum_gate_operationContext):
        pass


    # Enter a parse tree produced by qcodeParser#four_angle_args.
    def enterFour_angle_args(self, ctx:qcodeParser.Four_angle_argsContext):
        pass

    # Exit a parse tree produced by qcodeParser#four_angle_args.
    def exitFour_angle_args(self, ctx:qcodeParser.Four_angle_argsContext):
        pass


    # Enter a parse tree produced by qcodeParser#alpha.
    def enterAlpha(self, ctx:qcodeParser.AlphaContext):
        pass

    # Exit a parse tree produced by qcodeParser#alpha.
    def exitAlpha(self, ctx:qcodeParser.AlphaContext):
        pass


    # Enter a parse tree produced by qcodeParser#beta.
    def enterBeta(self, ctx:qcodeParser.BetaContext):
        pass

    # Exit a parse tree produced by qcodeParser#beta.
    def exitBeta(self, ctx:qcodeParser.BetaContext):
        pass


    # Enter a parse tree produced by qcodeParser#gamma.
    def enterGamma(self, ctx:qcodeParser.GammaContext):
        pass

    # Exit a parse tree produced by qcodeParser#gamma.
    def exitGamma(self, ctx:qcodeParser.GammaContext):
        pass


    # Enter a parse tree produced by qcodeParser#delta.
    def enterDelta(self, ctx:qcodeParser.DeltaContext):
        pass

    # Exit a parse tree produced by qcodeParser#delta.
    def exitDelta(self, ctx:qcodeParser.DeltaContext):
        pass


    # Enter a parse tree produced by qcodeParser#theta.
    def enterTheta(self, ctx:qcodeParser.ThetaContext):
        pass

    # Exit a parse tree produced by qcodeParser#theta.
    def exitTheta(self, ctx:qcodeParser.ThetaContext):
        pass


    # Enter a parse tree produced by qcodeParser#control_gate_exp.
    def enterControl_gate_exp(self, ctx:qcodeParser.Control_gate_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#control_gate_exp.
    def exitControl_gate_exp(self, ctx:qcodeParser.Control_gate_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#double_gate_exp.
    def enterDouble_gate_exp(self, ctx:qcodeParser.Double_gate_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#double_gate_exp.
    def exitDouble_gate_exp(self, ctx:qcodeParser.Double_gate_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#target_gate_exp.
    def enterTarget_gate_exp(self, ctx:qcodeParser.Target_gate_expContext):
        pass

    # Exit a parse tree produced by qcodeParser#target_gate_exp.
    def exitTarget_gate_exp(self, ctx:qcodeParser.Target_gate_expContext):
        pass


    # Enter a parse tree produced by qcodeParser#measurement_stmt.
    def enterMeasurement_stmt(self, ctx:qcodeParser.Measurement_stmtContext):
        pass

    # Exit a parse tree produced by qcodeParser#measurement_stmt.
    def exitMeasurement_stmt(self, ctx:qcodeParser.Measurement_stmtContext):
        pass


    # Enter a parse tree produced by qcodeParser#accept_cbit_stmt.
    def enterAccept_cbit_stmt(self, ctx:qcodeParser.Accept_cbit_stmtContext):
        pass

    # Exit a parse tree produced by qcodeParser#accept_cbit_stmt.
    def exitAccept_cbit_stmt(self, ctx:qcodeParser.Accept_cbit_stmtContext):
        pass


    # Enter a parse tree produced by qcodeParser#q_if_operation.
    def enterQ_if_operation(self, ctx:qcodeParser.Q_if_operationContext):
        pass

    # Exit a parse tree produced by qcodeParser#q_if_operation.
    def exitQ_if_operation(self, ctx:qcodeParser.Q_if_operationContext):
        pass


    # Enter a parse tree produced by qcodeParser#q_if_stmt.
    def enterQ_if_stmt(self, ctx:qcodeParser.Q_if_stmtContext):
        pass

    # Exit a parse tree produced by qcodeParser#q_if_stmt.
    def exitQ_if_stmt(self, ctx:qcodeParser.Q_if_stmtContext):
        pass


    # Enter a parse tree produced by qcodeParser#q_if_stmt_item.
    def enterQ_if_stmt_item(self, ctx:qcodeParser.Q_if_stmt_itemContext):
        pass

    # Exit a parse tree produced by qcodeParser#q_if_stmt_item.
    def exitQ_if_stmt_item(self, ctx:qcodeParser.Q_if_stmt_itemContext):
        pass


    # Enter a parse tree produced by qcodeParser#q_while_operation.
    def enterQ_while_operation(self, ctx:qcodeParser.Q_while_operationContext):
        pass

    # Exit a parse tree produced by qcodeParser#q_while_operation.
    def exitQ_while_operation(self, ctx:qcodeParser.Q_while_operationContext):
        pass


    # Enter a parse tree produced by qcodeParser#q_while_stmt.
    def enterQ_while_stmt(self, ctx:qcodeParser.Q_while_stmtContext):
        pass

    # Exit a parse tree produced by qcodeParser#q_while_stmt.
    def exitQ_while_stmt(self, ctx:qcodeParser.Q_while_stmtContext):
        pass


    # Enter a parse tree produced by qcodeParser#q_while_stmt_item.
    def enterQ_while_stmt_item(self, ctx:qcodeParser.Q_while_stmt_itemContext):
        pass

    # Exit a parse tree produced by qcodeParser#q_while_stmt_item.
    def exitQ_while_stmt_item(self, ctx:qcodeParser.Q_while_stmt_itemContext):
        pass


    # Enter a parse tree produced by qcodeParser#q_condition.
    def enterQ_condition(self, ctx:qcodeParser.Q_conditionContext):
        pass

    # Exit a parse tree produced by qcodeParser#q_condition.
    def exitQ_condition(self, ctx:qcodeParser.Q_conditionContext):
        pass


    # Enter a parse tree produced by qcodeParser#q_operator.
    def enterQ_operator(self, ctx:qcodeParser.Q_operatorContext):
        pass

    # Exit a parse tree produced by qcodeParser#q_operator.
    def exitQ_operator(self, ctx:qcodeParser.Q_operatorContext):
        pass


