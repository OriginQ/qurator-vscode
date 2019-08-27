from qcode.qcodeParser import qcodeParser
from qcodeHandleUtils import qcodeFileManager
from qcodeVisitorHandle import qcodeVisitorHandle
import os
import random
import string

from antlr4 import *

# PythonParseTreeVisitor

PI = 3.1415926

quantum_logic_gate_name = ['H', 'X', 'NOT', 'T', 'Y', 'Z', 'S', 'X1', 'Y1', 'Z1', 'U4', 'RX',
                           'RY', 'RZ', 'CNOT', 'CZ', 'CR', 'CU', 'Toffoli', 'ISwap', 'Measure', 'measure_all']

select_stmt = 0

Single_expressionContext = 1

global_qrunes = []


class qcodePythonVisitorHandle(qcodeVisitorHandle):
    def __init__(self, fileManager: qcodeFileManager):
        self.fn = fileManager
        self.fn.createPythonImport()

    # Visit a parse tree produced by qcodeParser#qrunes.
    def visitQrunes(self, ctx: qcodeParser.QrunesContext):
        lang_num = ctx.getChildCount()
        for l in range(lang_num):
            self.visitLang_unit(ctx.lang_unit(l))
            self.fn.createline()

    # Visit a parse tree produced by qcodeParser#lang_unit.
    def visitLang_unit(self, ctx: qcodeParser.Lang_unitContext):
        if ctx.declaration() is not None:
            self.visitDeclaration(ctx.declaration())
        if ctx.function_definition() is not None:
            self.fn.createline()
            self.visitFunction_definition(ctx.function_definition())

    # Visit a parse tree produced by qcodeParser#declaration.
    def visitDeclaration(self, ctx: qcodeParser.DeclarationContext):
        indent = 0
        if ctx.variable_declaration() is not None:
            self.visitVariable_declaration(ctx.variable_declaration(), indent)

    # Visit a parse tree produced by qcodeParser#include_declaration.
    def visitInclude_declaration(self, ctx: qcodeParser.Include_declarationContext, scope_indent):
        indent = scope_indent
        pass

    # Visit a parse tree produced by qcodeParser#include_sign.
    def visitInclude_sign(self, ctx: qcodeParser.Include_signContext, scope_indent):
        indent = scope_indent
        pass

    # Visit a parse tree produced by qcodeParser#variable_declaration.
    def visitVariable_declaration(self, ctx: qcodeParser.Variable_declarationContext, scope_indent):
        q_func_flag = ''
        indent = scope_indent
        if ctx.declaration_variable() is not None:
            self.visitDeclaration_variable(ctx.declaration_variable(), indent, q_func_flag)
        self.fn.createline()

    # Visit a parse tree produced by qcodeParser#parameter_declaration.
    def get_paras_single(self, ctx: qcodeParser.Parameter_declarationContext):
        if ctx.Identifier() is not None:
            return ctx.Identifier()

    # Visit a parse tree produced by qcodeParser#parameter_declaration.
    def visitParameter_declaration(self, ctx: qcodeParser.Parameter_declarationContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.Identifier() is not None:
            self.fn.write(str(ctx.Identifier()))

    # Visit a parse tree produced by qcodeParser#parameter_specifier.
    def visitParameter_specifier(self, ctx: qcodeParser.Parameter_specifierContext, scope_indent):
        indent = scope_indent

    # Visit a parse tree produced by qcodeParser#quantum_alg_built_in_type.
    def visitQuantum_alg_built_in_type(self, ctx: qcodeParser.Quantum_alg_built_in_typeContext, scope_indent):
        indent = scope_indent
        pass

    # Visit a parse tree produced by qcodeParser#auxiliary_primary_type.
    def visitAuxiliary_primary_type(self, ctx: qcodeParser.Auxiliary_primary_typeContext, scope_indent):
        indent = scope_indent
        pass

    # Visit a parse tree produced by qcodeParser#quantum_circuit_type.
    def visitQuantum_circuit_type(self, ctx: qcodeParser.Quantum_circuit_typeContext, scope_indent):
        indent = scope_indent
        pass

    # Visit a parse tree produced by qcodeParser#quantum_prog_type.
    def visitQuantum_prog_type(self, ctx: qcodeParser.Quantum_prog_typeContext, scope_indent):
        indent = scope_indent
        pass

    # Visit a parse tree produced by qcodeParser#quantum_primary_type.
    def visitQuantum_primary_type(self, ctx: qcodeParser.Quantum_primary_typeContext, scope_indent):
        indent = scope_indent
        pass

    # Visit a parse tree produced by qcodeParser#classical_primary_type.
    def visitClassical_primary_type(self, ctx: qcodeParser.Classical_primary_typeContext, scope_indent):
        indent = scope_indent
        pass

    # Visit a parse tree produced by qcodeParser#array_construct_type.
    def visitArray_construct_type(self, ctx: qcodeParser.Array_construct_typeContext, scope_indent):
        indent = scope_indent
        pass

    # Visit a parse tree produced by qcodeParser#construct_primary_type.
    def visitConstruct_primary_type(self, ctx: qcodeParser.Construct_primary_typeContext, scope_indent):
        indent = scope_indent
        pass

    # Visit a parse tree produced by qcodeParser#call_back_construct_type.
    def visitCall_back_construct_type(self, ctx: qcodeParser.Call_back_construct_typeContext, scope_indent):
        indent = scope_indent
        pass

    # Visit a parse tree produced by qcodeParser#call_back_primary_type_list.
    def visitCall_back_primary_type_list(self, ctx: qcodeParser.Call_back_primary_type_listContext, scope_indent):
        indent = scope_indent
        pass

    # Visit a parse tree produced by qcodeParser#call_back_primary_type.
    def visitCall_back_primary_type(self, ctx: qcodeParser.Call_back_primary_typeContext, scope_indent):
        indent = scope_indent
        pass

    # Visit a parse tree produced by qcodeParser#declaration_variable.
    def visitDeclaration_variable(self, ctx: qcodeParser.Declaration_variableContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.variable_decl_specifier() is not None:
            if ctx.variable_decl_specifier().getText() == "circuit":
                self.visitInit_declaratorlist(ctx.init_declaratorlist(), indent, func_unit)
                self.fn.write(" = CreateEmptyCircuit()")
            if ctx.variable_decl_specifier().getText() == "vector<qubit>":
                self.visitInit_declaratorlist(ctx.init_declaratorlist(), indent, func_unit)
                self.fn.write(" = QVec()")
            if ctx.variable_decl_specifier().getText() == "let":
                self.visitInit_declaratorlist(ctx.init_declaratorlist(), indent, func_unit)

    # Visit a parse tree produced by qcodeParser#variable_decl_specifier.
    def visitVariable_decl_specifier(self, ctx: qcodeParser.Variable_decl_specifierContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.common_specifier() is not None:
            pass

    # Visit a parse tree produced by qcodeParser#common_specifier.
    def visitCommon_specifier(self, ctx: qcodeParser.Common_specifierContext, scope_indent, func_unit):
        indent = scope_indent
        pass

    # Visit a parse tree produced by qcodeParser#init_declaratorlist.
    def visitInit_declaratorlist(self, ctx: qcodeParser.Init_declaratorlistContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.variable_declarator() is not None:
            self.visitVariable_declarator(ctx.variable_declarator(), indent, func_unit)

    # Visit a parse tree produced by qcodeParser#variable_declarator.
    def visitVariable_declarator(self, ctx: qcodeParser.Variable_declaratorContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.Identifier() is not None:
            self.fn.write(str(ctx.Identifier()))
            if ctx.ASSIGN() is not None:
                self.fn.createBlank()
                self.fn.write(str(ctx.ASSIGN()))
                self.fn.createBlank()
                self.visitVariableInitializer(ctx.variableInitializer(), indent, func_unit)

    # Visit a parse tree produced by qcodeParser#variableInitializer.
    def visitVariableInitializer(self, ctx: qcodeParser.VariableInitializerContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.single_expression() is not None:
            self.visitSingle_expression(ctx.single_expression(), indent, func_unit)
        if ctx.variableInitializer() is not None:
            self.visitVariableInitializer(ctx.variableInitializer(), indent, func_unit)

    # Visit a parse tree produced by qcodeParser#function_declaration.
    def visitFunction_declaration(self, ctx: qcodeParser.Function_declarationContext, scope_indent):
        indent = scope_indent
        pass

    # Visit a parse tree produced by qcodeParser#declarate_function.
    def visitDeclarate_function(self, ctx: qcodeParser.Declarate_functionContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.function_declarator() is not None:
            self.visitFunction_declarator(ctx.function_declarator(), indent, func_unit)
        if ctx.function_return_type_declarator() is None:
            return ""
        else:
            return self.visitFunction_return_type_declarator(ctx.function_return_type_declarator(), indent)

    # Visit a parse tree produced by qcodeParser#function_return_type_declarator.
    def visitFunction_return_type_declarator(self, ctx: qcodeParser.Function_return_type_declaratorContext, scope_indent):
        indent = scope_indent
        if ctx.quantum_circuit_type() is not None:
            return "circuit"
        if ctx.call_back_construct_type() is not None:
            return "func_call_type"

    # Visit a parse tree produced by qcodeParser#function_declarator.
    def visitFunction_declarator(self, ctx: qcodeParser.Function_declaratorContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.function_name() is not None:
            self.visitFunction_name(ctx.function_name(), indent, func_unit)
        if ctx.LPAREN() is not None:
            self.fn.write(str(ctx.LPAREN()))
        if ctx.parameter_decl_list() is not None:
            paras = ""
            self.visitParameter_decl_list(ctx.parameter_decl_list(), indent, func_unit)
            paras = paras + self.get_func_paras(ctx.parameter_decl_list(), paras, func_unit)
            func_unit['func_paras'] = paras
        if ctx.RPAREN() is not None:
            self.fn.write(str(ctx.RPAREN()))

    # Visit a parse tree produced by qcodeParser#function_name.
    def visitFunction_name(self, ctx: qcodeParser.Function_nameContext, scope_indent, func_unit):
        indent = scope_indent
        func_unit['func_name'] = str(ctx.Identifier())
        self.fn.write(str(ctx.Identifier()))

    # get Function parameters
    def get_func_paras(self, ctx: qcodeParser.Parameter_decl_listContext, paras, func_unit):
        if ctx.parameter_decl_list() is not None:
            paras = paras + self.get_func_paras(ctx.parameter_decl_list(), paras, func_unit)
        if ctx.COMMA() is not None:
            paras = paras + str(ctx.COMMA())
        if ctx.parameter_declaration() is not None:
            paras = paras + self.get_paras_single(ctx.parameter_declaration()).getText()
        return paras

    # Visit a parse tree produced by qcodeParser#parameter_decl_list.
    def visitParameter_decl_list(self, ctx: qcodeParser.Parameter_decl_listContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.parameter_decl_list() is not None:
            self.visitParameter_decl_list(ctx.parameter_decl_list(), indent, func_unit)
        if ctx.COMMA() is not None:
            self.fn.write(str(ctx.COMMA()))
            self.fn.createBlank()
        if ctx.parameter_declaration() is not None:
            self.visitParameter_declaration(ctx.parameter_declaration(), indent, func_unit)

    # Visit a parse tree produced by qcodeParser#expression_list.
    def visitExpression_list(self, ctx: qcodeParser.Expression_listContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.exp_list_alias is not None:
            self.visitExpression_list(ctx.exp_list_alias, indent, func_unit)
        if ctx.COMMA() is not None:
            self.fn.write(str(ctx.COMMA()))
            self.fn.createBlank()
        if ctx.single_expression() is not None:
            self.visitSingle_expression(ctx.single_expression(), indent, func_unit)

    # Visit a parse tree produced by qcodeParser#vector_expression.
    def visitVector_expression(self, ctx: qcodeParser.Vector_expressionContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.single_expression() is not None:
            self.visitSingle_expression(ctx.single_expression(), indent, func_unit)
        if ctx.vector_slice() is not None:
            self.visitVector_slice(ctx.vector_slice(), indent, func_unit)

    # Visit a parse tree produced by qcodeParser#vector_slice.
    def visitVector_slice(self, ctx: qcodeParser.Vector_sliceContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.vector_bound_alias_l is not None:
            self.visitSingle_expression(ctx.vector_bound_alias_l, indent, func_unit)
        if ctx.COLON() is not None:
            self.fn.write(str(ctx.COLON()))
        if ctx.vector_bound_alias_r is not None:
            self.visitSingle_expression(ctx.vector_bound_alias_r, indent, func_unit)

    # Visit a parse tree produced by qcodeParser#single_expression.
    def visitSingle_expression(self, ctx: qcodeParser.Single_expressionContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.bracket_exp is not None:
            self.fn.write(str(ctx.LBRACK()))
            self.visitExpression_list(ctx.bracket_exp, indent, func_unit)
            self.fn.write(str(ctx.RBRACK()))
        if ctx.parenthesis_exp is not None:
            self.fn.write(str(ctx.LPAREN()))
            self.visitExpression_list(ctx.parenthesis_exp, indent, func_unit)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.get_index_exp is not None:
            self.visitSingle_expression(ctx.get_index_exp, indent, func_unit)
            self.fn.write(str(ctx.LBRACK()))
            self.visitVector_expression(ctx.vector_expression(), indent, func_unit)
            self.fn.write(str(ctx.RBRACK()))
        if ctx.function_call_exp is not None:
            print(ctx.function_call_exp.getText()[-6:])
            if ctx.function_call_exp.getText()[-6:] == "length"  or ctx.function_call_exp.getText()[-4:] == 'size' \
                    or ctx.function_call_exp.getText()[-5:] == "first" \
                    or ctx.function_call_exp.getText()[-6:] == "Second" \
                    or ctx.function_call_exp.getText()[-6:] == "second" \
                    or ctx.function_call_exp.getText()[-5:] == "First":
                self.visitSingle_expression(ctx.function_call_exp, indent, func_unit)
            else:
                if func_unit['func_return_value'] is not None:
                    if func_unit['inline_get'] == 0:
                        self.fn.write(func_unit['func_return_value'])
                        self.fn.write(".insert(")
                        func_unit['inline_get'] = 1
                        self.visitSingle_expression(ctx.function_call_exp, indent, func_unit)
                        func_unit['inline_get'] = 0
                        self.fn.write(str(ctx.LPAREN()))
                        if ctx.expression_list() is not None:
                            self.visitExpression_list(ctx.expression_list(), indent, func_unit)
                        else:
                            self.fn.write("")
                        self.fn.write(str(ctx.RPAREN()))
                        self.fn.write(")")
                    else:
                        self.visitSingle_expression(ctx.function_call_exp, indent, func_unit)
                        self.fn.write(str(ctx.LPAREN()))
                        if ctx.expression_list() is not None:
                            self.visitExpression_list(ctx.expression_list(), indent, func_unit)
                        else:
                            self.fn.write("")
                        self.fn.write(str(ctx.RPAREN()))
                else:
                    self.visitSingle_expression(ctx.function_call_exp, indent, func_unit)
                    self.fn.write(str(ctx.LPAREN()))
                    if ctx.expression_list() is not None:
                        self.visitExpression_list(ctx.expression_list(), indent, func_unit)
                    else:
                        self.fn.write("")
                    self.fn.write(str(ctx.RPAREN()))
        if ctx.get_inside_exp is not None:
            if ctx.get_inside_bee_exp.getText() == 'length' or ctx.get_inside_bee_exp.getText() == 'size':
                self.fn.write("len(")
                self.visitSingle_expression(ctx.get_inside_exp, indent, func_unit)
                self.fn.write(")")
            elif ctx.get_inside_bee_exp.getText() == 'getFirst':
                self.visitSingle_expression(ctx.get_inside_exp, indent, func_unit)
                self.fn.write('[0]')
            elif ctx.get_inside_bee_exp.getText() == 'getSecond':
                self.visitSingle_expression(ctx.get_inside_exp, indent, func_unit)
                self.fn.write('[1]')
            elif ctx.get_inside_bee_exp.getText() == 'first':
                self.visitSingle_expression(ctx.get_inside_exp, indent, func_unit)
            elif ctx.get_inside_bee_exp.getText() == 'second':
                self.visitSingle_expression(ctx.get_inside_exp, indent, func_unit)
            else:
                self.visitSingle_expression(ctx.get_inside_exp, indent, func_unit)
                self.fn.write(str(ctx.DOT()))
                get_bee_exp_unit = {'func_name': '', 'func_paras': '', 'func_return_value': None, 'else_if_flag': 0,
                                    'inline_get': 0, 'qwhile_flag': 0, 'qif_flag': 0}
                self.visitSingle_expression(ctx.get_inside_bee_exp, indent, get_bee_exp_unit)
        if ctx.unary_exp is not None:
            self.visitUnary_op(ctx.unary_op(), indent, func_unit)
            self.visitSingle_expression(ctx.unary_exp, indent, func_unit)
        if ctx.multiplicative_op() is not None:
            self.visitSingle_expression(ctx.binary_mul_left_exp, indent, func_unit)
            self.visitMultiplicative_op(ctx.multiplicative_op(), indent, func_unit)
            self.visitSingle_expression(ctx.binary_mul_right_exp, indent, func_unit)
        if ctx.additive_op() is not None:
            self.visitSingle_expression(ctx.binary_add_left_exp, indent, func_unit)
            self.visitAdditive_op(ctx.additive_op(), indent, func_unit)
            self.visitSingle_expression(ctx.binary_add_right_exp, indent, func_unit)
        if ctx.shift_op() is not None:
            self.visitSingle_expression(ctx.shift_exp_left_exp, indent, func_unit)
            self.visitShift_op(ctx.shift_op(), indent, func_unit)
            self.visitSingle_expression(ctx.shift_exp_right_exp, indent, func_unit)
        if ctx.relationship_op() is not None:
            self.visitSingle_expression(ctx.relationship_left_exp, indent, func_unit)
            self.visitRelationship_op(ctx.relationship_op(), indent, func_unit)
            self.visitSingle_expression(ctx.relationship_right_exp, indent, func_unit)
        if ctx.equal_op() is not None:
            self.visitSingle_expression(ctx.equal_left_exp, indent, func_unit)
            if ctx.equal_right_exp.getText() == "true" or ctx.equal_right_exp.getText() == "false":
                self.fn.write(" is ")
            else:
                self.visitEqual_op(ctx.equal_op(), indent, func_unit)
            self.visitSingle_expression(ctx.equal_right_exp, indent, func_unit)
        if ctx.logic_op() is not None:
            self.visitSingle_expression(ctx.logic_left_exp, indent, func_unit)
            self.visitLogic_op(ctx.logic_op(), indent, func_unit)
            self.visitSingle_expression(ctx.logic_right_exp, indent, func_unit)
        if ctx.assign_op() is not None:
            self.visitSingle_expression(ctx.assign_exp_left, indent, func_unit)
            self.visitAssign_op(ctx.assign_op(), indent, func_unit)
            self.visitSingle_expression(ctx.assign_exp_right, indent, func_unit)
        if ctx.lambda_exp() is not None:
            self.visitLambda_exp(ctx.lambda_exp(), indent, func_unit)
        if ctx.Identifier() is not None:
            self.fn.write(str(ctx.Identifier()))
        if ctx.constant() is not None:
            self.visitConstant(ctx.constant(), indent, func_unit)
        if ctx.key_words() is not None:
            self.visitKey_words(ctx.key_words(), indent, func_unit)
        if ctx.PI() is not None:
            self.fn.write(str(PI))

    # Visit a parse tree produced by qcodeParser#lambda_exp.
    def visitLambda_exp(self, ctx: qcodeParser.Lambda_expContext, scope_indent, func_unit):
        indent = scope_indent
        self.fn.write(str(ctx.LAMBDA()))
        self.fn.createBlank()
        self.visitParameter_decl_list(ctx.parameter_decl_list(), indent, func_unit)
        self.fn.write(str(ctx.COLON()))
        self.fn.createBlank()
        oracle_call_name = "oracle_" + ''.join(random.sample(string.ascii_letters + string.digits, 8))
        self.fn.write(oracle_call_name)
        self.fn.write("(")
        self.visitParameter_decl_list(ctx.parameter_decl_list(), indent, func_unit)
        self.fn.write(", ")
        self.fn.write(func_unit['func_paras'])
        self.fn.write(")")
        self.fn.createline()
        self.fn.createline()
        self.fn.createline()
        self.fn.write("def")
        self.fn.createBlank()
        self.fn.write(oracle_call_name)
        self.fn.write("(")
        self.visitParameter_decl_list(ctx.parameter_decl_list(), indent, func_unit)
        self.fn.write(", ")
        self.fn.write(func_unit['func_paras'])
        func_lambda_unit = {'func_name': oracle_call_name, 'func_paras': func_unit['func_paras'],
                            'func_return_value': '', 'else_if_flag': 0, 'inline_get': 0, 'qwhile_flag': 0, 'qif_flag': 0}
        self.fn.write(")")
        self.fn.write(":")
        self.fn.createline()
        self.visitLambda_body(ctx.lambda_body(), indent, func_lambda_unit)

    # Visit a parse tree produced by qcodeParser#lambda_body.
    def visitLambda_body(self, ctx: qcodeParser.Lambda_bodyContext, scope_indent, func_unit):
        indent = 1
        func_unit['func_return_value'] = "oracle"
        func_unit['else_if_flag'] = 0
        self.fn.createIdent(indent)
        self.fn.write("oracle = CreateEmptyCircuit()")
        self.fn.createline()
        self.visitCompound_statement(ctx.compound_statement(), indent, func_unit)

    # Visit a parse tree produced by qcodeParser#additive_op.
    def visitAdditive_op(self, ctx: qcodeParser.Additive_opContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.ADD() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.ADD()))
            self.fn.createBlank()
        if ctx.SUB() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.SUB()))
            self.fn.createBlank()

    # Visit a parse tree produced by qcodeParser#multiplicative_op.
    def visitMultiplicative_op(self, ctx: qcodeParser.Multiplicative_opContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.MUL() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.MUL()))
            self.fn.createBlank()
        if ctx.MOD() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.MOD()))
            self.fn.createBlank()
        if ctx.DIV() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.DIV()))
            self.fn.createBlank()

    # Visit a parse tree produced by qcodeParser#shift_op.
    def visitShift_op(self, ctx: qcodeParser.Shift_opContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.SHIFT_LEFT() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.SHIFT_LEFT()))
            self.fn.createBlank()
        if ctx.SHIFT_RIGHT() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.SHIFT_RIGHT()))
            self.fn.createBlank()

    # Visit a parse tree produced by qcodeParser#assign_op.
    def visitAssign_op(self, ctx: qcodeParser.Assign_opContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.ASSIGN() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.ASSIGN()))
            self.fn.createBlank()
        if ctx.ADD_ASSIGN() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.ADD_ASSIGN()))
            self.fn.createBlank()
        if ctx.SUB_ASSIGN() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.SUB_ASSIGN()))
            self.fn.createBlank()
        if ctx.MUL_ASSIGN() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.MUL_ASSIGN()))
            self.fn.createBlank()
        if ctx.DIV_ASSIGN() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.DIV_ASSIGN()))
            self.fn.createBlank()
        if ctx.MOD_ASSIGN() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.MOD_ASSIGN()))
            self.fn.createBlank()

    # Visit a parse tree produced by qcodeParser#equal_op.
    def visitEqual_op(self, ctx: qcodeParser.Equal_opContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.EQUAL() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.EQUAL()))
            self.fn.createBlank()
        if ctx.NOTEQUAL() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.NOTEQUAL()))
            self.fn.createBlank()

    # Visit a parse tree produced by qcodeParser#relationship_op.
    def visitRelationship_op(self, ctx: qcodeParser.Relationship_opContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.GT() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.GT()))
            self.fn.createBlank()
        if ctx.GE() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.GE()))
            self.fn.createBlank()
        if ctx.LT() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.LT()))
            self.fn.createBlank()
        if ctx.LE() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.LE()))
            self.fn.createBlank()

    # Visit a parse tree produced by qcodeParser#logic_op.
    def visitLogic_op(self, ctx: qcodeParser.Logic_opContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.LOGIC_AND() is not None:
            self.fn.createBlank()
            self.fn.write("and")
            self.fn.createBlank()
        if ctx.LOGIC_OR() is not None:
            self.fn.createBlank()
            self.fn.write("or")
            self.fn.createBlank()

    # Visit a parse tree produced by qcodeParser#unary_op.
    def visitUnary_op(self, ctx: qcodeParser.Unary_opContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.SUB() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.SUB()))

    # Visit a parse tree produced by qcodeParser#statement.
    def visitStatement(self, ctx: qcodeParser.StatementContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.expression_statement() is not None:
            self.visitExpression_statement(ctx.expression_statement(), indent, func_unit)
            self.fn.createline()
        if ctx.declaration_variable_statement() is not None:
            self.visitDeclaration_variable_statement(ctx.declaration_variable_statement(), indent, func_unit)
        if ctx.compound_statement() is not None:
            self.visitCompound_statement(ctx.compound_statement(), indent, func_unit)
            self.fn.createline()
        if ctx.select_statement() is not None:
            self.visitSelect_statement(ctx.select_statement(), indent, func_unit)
        if ctx.iterate_statement() is not None:
            self.visitIterate_statement(ctx.iterate_statement(), indent, func_unit)
        if ctx.qif_statement() is not None:
            self.visitQif_statement(ctx.qif_statement(), indent, func_unit)
        if ctx.qwhile_statement() is not None:
            #self.visitQwhile_statement(ctx.qwhile_statement(), indent, func_unit)
            pass
        if ctx.return_statement() is not None:
            self.visitReturn_statement(ctx.return_statement(), indent, func_unit)

    # Visit a parse tree produced by qcodeParser#qif_statement.
    def visitQif_statement(self, ctx: qcodeParser.Qif_statementContext, scope_indent, func_unit):
        indent = scope_indent
        self.fn.createIdent(indent)
        self.fn.write("qif_prog_i")
        self.fn.write(str(func_unit['qif_flag']))
        self.fn.write(" = QProg()")
        self.fn.createline()
        self.fn.createIdent(indent)
        self.fn.write("qif_true_branch_i")
        self.fn.write(str(func_unit['qif_flag']))
        self.fn.write(" = QProg()")
        if ctx.QELSE() is not None:
            self.fn.createline()
            self.fn.createIdent(indent)
            self.fn.write("qif_false_branch_i")
            self.fn.write(str(func_unit['qif_flag']))
            self.fn.write(" = QProg()")
        if func_unit['qif_flag'] == 1:
            print("dsb")
            pass
        else:
            if ctx.qif_true_branch() is not None:
                self.visitQif_true_branch(ctx.qif_true_branch(), indent, func_unit)
            if ctx.QELSE() is not None:
                self.visitQif_false_branch(ctx.qif_false_branch(), indent, func_unit)
            self.fn.createline()

            self.fn.createIdent(indent)
            self.fn.write("qif_prog_i")
            self.fn.write(str(func_unit['qif_flag']))
            self.fn.write(".insert(")
            self.fn.write("CreateIfProg(")
            self.visitSingle_expression(ctx.single_expression(), indent, func_unit)
            self.fn.write(",")
            self.fn.createBlank()
            self.fn.write("qif_true_branch_i")
            self.fn.write(str(func_unit['qif_flag']))
            if ctx.QELSE() is not None:
                self.fn.write(",")
                self.fn.createBlank()
                self.fn.write("qif_false_branch_i")
                self.fn.write(str(func_unit['qif_flag']))
            self.fn.write("))")
            self.fn.createline()
            self.fn.createIdent(indent)
            self.fn.write(func_unit['func_return_value'])
            self.fn.write(".insert(")
            self.fn.write("qif_prog_i")
            self.fn.write(str(func_unit['qif_flag']))
            self.fn.write(")")

    # Visit a parse tree produced by qcodeParser#qif_true_branch.
    def visitQif_true_branch(self, ctx: qcodeParser.Qif_true_branchContext, scope_indent, func_unit):
        indent = scope_indent
        self.visitqifStatement_list(ctx.statement_list(), indent, func_unit)

    # Visit a parse tree produced by qcodeParser#statement_list.
    def visitqifStatement_list(self, ctx: qcodeParser.Statement_listContext, scope_indent, func_unit):
        indent = scope_indent
        statement_num = ctx.getChildCount()
        self.fn.createline()
        for st in range(statement_num):
            if ctx.statement(st).getText()[0:3] == "qif":
                print("qif in qif")
                func_unit['qif_flag'] = 1
                self.visitStatement(ctx.statement(st), indent, func_unit)
            else:
                self.fn.createline()
                self.fn.createIdent(1)
                self.fn.write("qif_true_branch_i")
                self.fn.write(str(func_unit['qif_flag']))
                self.fn.write(".insert(")
                self.fn.write(ctx.statement(st).getText().replace(";", ''))
                self.fn.write(")")

    # Visit a parse tree produced by qcodeParser#qif_false_branch.
    def visitQif_false_branch(self, ctx: qcodeParser.Qif_false_branchContext, scope_indent, func_unit):
        indent = scope_indent
        self.visitqif2Statement_list(ctx.statement_list(), indent, func_unit)

    # Visit a parse tree produced by qcodeParser#statement_list.
    def visitqif2Statement_list(self, ctx: qcodeParser.Statement_listContext, scope_indent, func_unit):
        indent = scope_indent
        statement_num = ctx.getChildCount()
        self.fn.createline()
        for st in range(statement_num):
            self.fn.createline()
            self.fn.createIdent(1)
            self.fn.write("qif_false_branch_i")
            self.fn.write(str(func_unit['qif_flag']))
            self.fn.write(".insert(")
            self.fn.write(ctx.statement(st).getText().replace(";", ''))
            self.fn.write(")")

    # Visit a parse tree produced by qcodeParser#return_statement.
    def visitReturn_statement(self, ctx: qcodeParser.Return_statementContext, scope_indent, func_unit):
        indent = scope_indent
        self.fn.createIdent(indent)
        self.fn.write(str(ctx.RETURN()))
        return_indent = 0
        self.fn.createBlank()
        self.visitStatement(ctx.statement(), return_indent, func_unit)

    # Visit a parse tree produced by qcodeParser#expression_statement.
    def visitExpression_statement(self, ctx: qcodeParser.Expression_statementContext, scope_indent, func_unit):
        indent = scope_indent
        self.fn.createIdent(indent)
        self.visitSingle_expression(ctx.single_expression(), indent, func_unit)

    # Visit a parse tree produced by qcodeParser#empty_statement.
    def visitEmpty_statement(self, ctx: qcodeParser.Empty_statementContext, scope_indent, func_unit):
        indent = scope_indent
        pass

    # Visit a parse tree produced by qcodeParser#declaration_variable_statement.
    def visitDeclaration_variable_statement(self, ctx: qcodeParser.Declaration_variable_statementContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.declaration_variable() is not None:
            self.fn.createIdent(indent)
            self.visitDeclaration_variable(ctx.declaration_variable(), indent, func_unit)
            self.fn.createline()

    # Visit a parse tree produced by qcodeParser#compound_statement.
    def visitCompound_statement(self, ctx: qcodeParser.Compound_statementContext, scope_indent, func_unit):
        indent = scope_indent
        indent = indent + 1
        if indent > 1:
            indent = indent - 1
        if ctx.statement_list() is not None:
            self.visitStatement_list(ctx.statement_list(), indent, func_unit)
        else:
            self.fn.createIdent(indent)
            self.fn.write("pass")

    # Visit a parse tree produced by qcodeParser#select_statement.
    def visitSelect_statement(self, ctx: qcodeParser.Select_statementContext, scope_indent, func_unit):
        indent = scope_indent
        self.fn.createIdent(indent)
        if func_unit['else_if_flag'] == 1:
            self.fn.write("el")
            self.fn.write(str(ctx.IF()))
            func_unit['else_if_flag'] = 0
        else:
            self.fn.write(str(ctx.IF()))
        self.fn.createBlank()
        self.visitSingle_expression(ctx.single_expression(), indent, func_unit)
        self.fn.write(":")
        self.fn.createline()
        indent_if_branch = indent + 1
        self.visitStatement(ctx.if_stmt, indent_if_branch, func_unit)
        if ctx.else_stmt is not None:
            indent_else_branch = indent
            else_content = ctx.else_stmt.getText()
            if else_content[0:2] == "if":
                else_if_flag = 1
                self.visitStatement(ctx.else_stmt, indent_else_branch, func_unit)
            else:
                self.fn.createIdent(indent)
                self.fn.write(str(ctx.ELSE()))
                indent_else_branch = indent + 1
                self.fn.write(":")
                self.fn.createline()
                self.visitStatement(ctx.else_stmt, indent_else_branch, func_unit)

    # Visit a parse tree produced by qcodeParser#iterate_statement.
    def visitIterate_statement(self, ctx: qcodeParser.Iterate_statementContext, scope_indent, func_unit):
        indent = scope_indent
        self.fn.createIdent(indent)
        if ctx.for_stmt() is not None:
            for_indent = indent
            self.visitFor_stmt(ctx.for_stmt(), indent, func_unit)
            self.fn.write(":")
            for_indent = for_indent + 1
            self.fn.createline()
            self.visitStatement(ctx.statement(), for_indent, func_unit)
        if ctx.inhanced_for_stmt() is not None:
            inhanced_indent = indent
            self.fn.write(str(ctx.FOR()))
            self.fn.createBlank()
            self.visitInhanced_for_stmt(ctx.inhanced_for_stmt(), indent, func_unit)
            self.fn.write(":")
            inhanced_indent = inhanced_indent + 1
            self.fn.createline()
            self.visitStatement(ctx.statement(), inhanced_indent, func_unit)

    # Visit a parse tree produced by qcodeParser#for_stmt.
    def visitFor_stmt(self, ctx: qcodeParser.For_stmtContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.for_condition() is not None:
            self.fn.write("for")
            self.fn.createBlank()
            if ctx.for_start() is not None:
                iterator_name = self.visitFor_start(ctx.for_start(), scope_indent, func_unit)
            self.fn.write(str(iterator_name))
            self.fn.createBlank()
            self.fn.write("in range(")
            self.for_start_intialed(ctx.for_start(), scope_indent, func_unit)
            self.fn.write(",")
            self.fn.createBlank()
            self.visitFor_condition(ctx.for_condition(), scope_indent, func_unit)
            self.fn.write(",")
            self.fn.createBlank()
            if ctx.for_step() is not None:
                self.visitFor_step(ctx.for_step(), scope_indent, func_unit)
            else:
                self.fn.write("1")
            self.fn.write(")")
        else:
            self.fn.write("while True")

    # Visit a parse tree produced by qcodeParser#for_step.
    def visitFor_step(self, ctx: qcodeParser.For_stepContext, scope_indent, func_unit):
        indent = scope_indent
        self.visitSingle_expression(ctx.single_expression(), indent, func_unit)

    # Visit a parse tree produced by qcodeParser#for_condition.
    def visitFor_condition(self, ctx: qcodeParser.For_conditionContext, scope_indent, func_unit):
        indent = scope_indent
        self.visitSingle_expression(ctx.single_expression(), indent, func_unit)

    # Visit a parse tree produced by qcodeParser#for_start.
    def visitFor_start(self, ctx: qcodeParser.For_startContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.Identifier() is not None:
            iterator_name = ctx.Identifier().getText()
        return iterator_name

    # Visit a parse tree produced by qcodeParser#for_start.
    def for_start_intialed(self, ctx: qcodeParser.For_startContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.ASSIGN() is not None:
            self.visitSingle_expression(ctx.single_expression(), indent, func_unit)
        else:
            self.fn.write(str(ctx.Identifier()))

    # Visit a parse tree produced by qcodeParser#inhanced_for_stmt.
    def visitInhanced_for_stmt(self, ctx: qcodeParser.Inhanced_for_stmtContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.Identifier() is not None:
            self.fn.write(str(ctx.Identifier()))
            self.fn.createBlank()
            self.fn.write("in")
            self.fn.createBlank()
            self.visitSingle_expression(ctx.single_expression(), indent, func_unit)

    # Visit a parse tree produced by qcodeParser#statement_list.
    def visitStatement_list(self, ctx: qcodeParser.Statement_listContext, scope_indent, func_unit):
        indent = scope_indent
        statement_num = ctx.getChildCount()
        for st in range(statement_num):
            self.visitStatement(ctx.statement(st), indent, func_unit)

    # Visit a parse tree produced by qcodeParser#function_definition.
    def visitFunction_definition(self, ctx: qcodeParser.Function_definitionContext):
        indent = 0
        func_unit = {'func_name': '', 'func_paras': '', 'func_return_value': '', 'else_if_flag': 0, 'inline_get': 0,
                     'qwhile_flag': 0, 'qif_flag': 0}
        self.fn.write("def")
        self.fn.createBlank()
        if ctx.declarate_function() is not None:
            func_unit['func_return_value'] = self.visitDeclarate_function(ctx.declarate_function(), indent, func_unit)
            self.fn.write(":")
        self.fn.createline()
        if ctx.function_body() is not None:
            indent = indent + 1
            self.visitFunction_body(ctx.function_body(), indent, func_unit)
        global_qrunes.append(func_unit)
        self.fn.createline()

    # Visit a parse tree produced by qcodeParser#function_body.
    def visitFunction_body(self, ctx: qcodeParser.Function_bodyContext, scope_indent, func_unit):
        indent = scope_indent
        if func_unit['func_return_value'] == "":
            q_func_flag = "qprog"
            func_unit['func_return_value'] = q_func_flag
            self.fn.createIdent(1)
            self.fn.write("qprog = CreateEmptyQProg()")
            self.fn.createline()
        if func_unit['func_return_value'] == "circuit":
            q_func_flag = "circuit"
            func_unit['func_return_value'] = q_func_flag
            self.fn.createIdent(1)
            self.fn.write("circuit = CreateEmptyCircuit()")
            self.fn.createline()
        if func_unit['func_return_value'] == "func_call_type":
            pass
        if ctx.compound_statement() is not None:
            self.visitCompound_statement(ctx.compound_statement(), indent, func_unit)

        if func_unit['func_return_value'] == "qprog" or func_unit['func_return_value'] == "circuit":
            self.fn.createline()
            self.fn.createIdent(indent)
            self.fn.write("return")
            self.fn.createBlank()
            self.fn.write(func_unit['func_return_value'])

    # Visit a parse tree produced by qcodeParser#key_words.
    def visitKey_words(self, ctx: qcodeParser.Key_wordsContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.H_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.H_GATE()))
        if ctx.X_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.X_GATE()))
        if ctx.NOT_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.NOT_GATE()))
        if ctx.T_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.T_GATE()))
        if ctx.S_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.S_GATE()))
        if ctx.Y_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.Y_GATE()))
        if ctx.Z_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.Z_GATE()))
        if ctx.X1_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.X1_GATE()))
        if ctx.Y1_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.Y1_GATE()))
        if ctx.Z1_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.Z1_GATE()))
        if ctx.U4_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.U4_GATE()))
        if ctx.RX_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.RX_GATE()))
        if ctx.RY_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.RY_GATE()))
        if ctx.RZ_GATE() is not None:
            self.fn.write(str(ctx.RZ_GATE()))
        if ctx.CNOT_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.CNOT_GATE()))
        if ctx.CZ_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.CZ_GATE()))
        if ctx.CR_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.CR_GATE()))
        if ctx.CU_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.CU_GATE()))
        if ctx.TOFFOLI_GATE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.TOFFOLI_GATE()))
        if ctx.ISWAP() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.ISWAP()))
        if ctx.MEASURE() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.MEASURE()))
        if ctx.RETURN() is not None:
            self.fn.write(str(ctx.RETURN()))
        if ctx.LAMBDA() is not None:
            self.fn.write(q_func_flag)
            self.fn.write(".insert(")
            self.fn.write(str(ctx.LAMBDA()))
        if ctx.VQG_CNOT_VCGEN() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write('VariationalQuantumGate_CNOT')
        if ctx.VQG_RX_VCGEN() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write('VariationalQuantumGate_RX')
        if ctx.VQG_RZ_VCGEN() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write('VariationalQuantumGate_RZ')
        if ctx.QIF() is not None:
            self.fn.write(q_func_flag)
            self.fn.write(".insert(")
            self.fn.write("CreateIfProg(")
        if ctx.QWHILE() is not None:
            self.fn.write(q_func_flag)
            self.fn.write(".insert(")
            self.fn.write("CreateWhileProg")
        if ctx.MEASUREALL() is not None:
            # self.fn.write(q_func_flag)
            # self.fn.write(".insert(")
            self.fn.write(str(ctx.MEASUREALL()))
        if ctx.TRUE():
            self.fn.write("True")
        if ctx.FALSE():
            self.fn.write("False")

    # Visit a parse tree produced by qcodeParser#constant.
    def visitConstant(self, ctx: qcodeParser.ConstantContext, scope_indent, func_unit):
        indent = scope_indent
        if ctx.Integer_Literal() is not None:
            self.fn.write(str(ctx.Integer_Literal()))
        if ctx.Double_Literal() is not None:
            self.fn.write(str(ctx.Double_Literal()))
