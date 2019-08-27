from Symbol import *
from SymbolTable import *
from qcode.QcodeVisitor import *
from qcode.QcodeLexer import *
from qcode.QcodeParser import *
from QcodeUtil import QcodeFileManager
from Error import *
import random
import string
PI = 3.14159265358979323846

quantum_logic_gate_name = ['H', 'X', 'NOT', 'T', 'Y', 'Z', 'S', 'X1', 'Y1', 'Z1', 'U4', 'RX',
                           'RY', 'RZ', 'CNOT', 'CZ', 'CR', 'CU', 'Toffoli', 'iSWAP', 'measure', 'measure_all',
                           'apply_QGate','VariationalQuantumGate_CNOT','VariationalQuantumGate_RX',
                           'VariationalQuantumGate_RZ']

measure_operation = []

temp_info = []


class TraverEngine(QcodeVisitor):
    def __init__(self, file_manager: QcodeFileManager):
        self.current_scope = None
        self.fn = file_manager
        self.fn.createPythonImport()

    # Visit a parse tree produced by QcodeParser#qrunes.
    def visitQrunes(self, ctx: QcodeParser.QrunesContext):
        global global_scope
        global_scope = SymbolTable(
            symtab_name='global_symtab',
            scope_level=1,
            enclosing_scope=self.current_scope
         )

        self.current_scope = global_scope

        for item in range(ctx.getChildCount()):
            i_symbol = self.visitLang_unit(ctx.lang_unit(item))
            # global_scope.lookup(i_symbol.name)
            global_scope.insert(i_symbol)

        for i in global_scope.symbols.items():
            if isinstance(i[1], FunctionSymbol):
                pass

        symbols_t = global_scope.symbols.copy()

        list_symbol = []
        for i in range(len(symbols_t)):
            list_symbol.append(symbols_t.popitem())

        list_symbol.reverse()

        for iw in range(ctx.getChildCount()):
            st = list_symbol[iw]
            if st is not None:
                self.trans_and_build(ctx.lang_unit(iw), st)

        # print(global_scope)

    # Visit a parse tree produced by QcodeParser#lang_unit.
    def visitLang_unit(self, ctx: QcodeParser.Lang_unitContext):
        if ctx.declaration() is not None:
            return self.visitDeclaration(ctx.declaration())
        if ctx.function_definition() is not None:
            return self.visitFunction_definition(ctx.function_definition())

    # Visit a parse tree produced by QcodeParser#lang_unit.
    def trans_and_build(self, ctx: QcodeParser.Lang_unitContext, st):
        if isinstance(st[1], FunctionSymbol):
            func_symbol = FunctionSymbol(st[0], st[1])
            self.build_function_scope(ctx.function_definition(), func_symbol)
        if isinstance(st[1], VariableSymbol):
            t_st = list(st)
            if t_st[1].type == "circuit":
                self.fn.write(t_st[1].name)
                self.fn.write(" = CreateEmptyCircuit()")
            if t_st[1].type == "let":
                self.fn.write(t_st[1].name)
                self.fn.write(" = ")
                self.fn.write(t_st[1].data)

    # Visit a parse tree produced by QcodeParser#declaration.
    def visitDeclaration(self, ctx: QcodeParser.DeclarationContext):
        scope = None
        if ctx.variable_declaration() is not None:
            return self.visitVariable_declaration(ctx.variable_declaration(), scope)

    # Visit a parse tree produced by QcodeParser#declaration.
    def visitDeclaration2(self, ctx: QcodeParser.DeclarationContext):
        if ctx.variable_declaration() is not None:
            return self.visitVariable_declaration(ctx.variable_declaration())

    # Visit a parse tree produced by QcodeParser#include_declaration.
    def visitInclude_declaration(self, ctx: QcodeParser.Include_declarationContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#include_sign.
    def visitInclude_sign(self, ctx: QcodeParser.Include_signContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#variable_declaration.
    def visitVariable_declaration(self, ctx: QcodeParser.Variable_declarationContext, scope):
        if ctx.declaration_variable() is not None:
            vb_info = self.visitDeclaration_variable(ctx.declaration_variable(), scope)
            var_symbol = VariableSymbol(vb_info[0], vb_info[1], vb_info[2])
            print(vb_info[2])
            return var_symbol

    # Visit a parse tree produced by QcodeParser#parameter_declaration.
    def visitParameter_declaration(self, ctx: QcodeParser.Parameter_declarationContext):
        para_type = self.visitParameter_specifier(ctx.parameter_specifier())
        para_name = ctx.Identifier().getText()
        para_info = (para_name, para_type)
        return para_info

    # Visit a parse tree produced by QcodeParser#parameter_specifier.
    def visitParameter_specifier(self, ctx: QcodeParser.Parameter_specifierContext):
        if ctx.quantum_primary_type() is not None:
            return ctx.quantum_primary_type().getText()
        if ctx.classical_primary_type() is not None:
            return ctx.classical_primary_type().getText()
        if ctx.auxiliary_primary_type() is not None:
            return ctx.auxiliary_primary_type().getText()
        if ctx.array_construct_type() is not None:
            return ctx.array_construct_type().getText()
        if ctx.call_back_construct_type() is not None:
            return ctx.call_back_construct_type().getText()

    # Visit a parse tree produced by QcodeParser#quantum_alg_built_in_type.
    def visitQuantum_alg_built_in_type(self, ctx: QcodeParser.Quantum_alg_built_in_typeContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#auxiliary_primary_type.
    def visitAuxiliary_primary_type(self, ctx: QcodeParser.Auxiliary_primary_typeContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#quantum_circuit_type.
    def visitQuantum_circuit_type(self, ctx: QcodeParser.Quantum_circuit_typeContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#quantum_prog_type.
    def visitQuantum_prog_type(self, ctx: QcodeParser.Quantum_prog_typeContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#quantum_primary_type.
    def visitQuantum_primary_type(self, ctx: QcodeParser.Quantum_primary_typeContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#classical_primary_type.
    def visitClassical_primary_type(self, ctx: QcodeParser.Classical_primary_typeContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#array_construct_type.
    def visitArray_construct_type(self, ctx: QcodeParser.Array_construct_typeContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#construct_primary_type.
    def visitConstruct_primary_type(self, ctx: QcodeParser.Construct_primary_typeContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#call_back_construct_type.
    def visitCall_back_construct_type(self, ctx: QcodeParser.Call_back_construct_typeContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#call_back_primary_type_list.
    def visitCall_back_primary_type_list(self, ctx: QcodeParser.Call_back_primary_type_listContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#call_back_primary_type.
    def visitCall_back_primary_type(self, ctx: QcodeParser.Call_back_primary_typeContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#declaration_variable.
    def visitDeclaration_variable(self, ctx: QcodeParser.Declaration_variableContext, scope):
        vb_type = ctx.variable_decl_specifier().getText()
        vb_compos = self.visitInit_declaratorlist(ctx.init_declaratorlist(), scope)
        vb_name = vb_compos[0]
        vb_data = vb_compos[1]
        vb_info = [vb_name, vb_type, vb_data]
        return vb_info

    # Visit a parse tree produced by QcodeParser#variable_decl_specifier.
    def visitVariable_decl_specifier(self, ctx: QcodeParser.Variable_decl_specifierContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#common_specifier.
    def visitCommon_specifier(self, ctx: QcodeParser.Common_specifierContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#init_declaratorlist.
    def visitInit_declaratorlist(self, ctx: QcodeParser.Init_declaratorlistContext, scope):
        if ctx.variable_declarator() is not None:
            return self.visitVariable_declarator(ctx.variable_declarator(), scope)

    # Visit a parse tree produced by QcodeParser#variable_declarator.
    def visitVariable_declarator(self, ctx: QcodeParser.Variable_declaratorContext, scope):
        vb_name = ctx.Identifier().getText()
        if ctx.variableInitializer() is not None:
            vb_initialized = self.visitVariableInitializer(ctx.variableInitializer(), scope)
        else:
            vb_initialized = ""
        vb_compos = (vb_name, vb_initialized)
        return vb_compos

    # Visit a parse tree produced by QcodeParser#variableInitializer.
    def visitVariableInitializer(self, ctx: QcodeParser.VariableInitializerContext, scope):
        if ctx.variableInitializer() is not None:
            return self.visitVariableInitializer(ctx.variableInitializer())
        if ctx.single_expression() is not None:
            return self.build_exp(ctx.single_expression(), scope)

    # Visit a parse tree produced by QcodeParser#function_declaration.
    def visitFunction_declaration(self, ctx: QcodeParser.Function_declarationContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#declarate_function.
    def visitDeclarate_function(self, ctx: QcodeParser.Declarate_functionContext):
        func_name = self.visitFunction_declarator(ctx.function_declarator())
        if ctx.function_return_type_declarator() is not None:
            func_type = ctx.function_return_type_declarator().getText()
        else:
            func_type = "qprog"
        func_info = (func_name, func_type)

        return func_info

    # Visit a parse tree produced by QcodeParser#function_return_type_declarator.
    def visitFunction_return_type_declarator(self, ctx: QcodeParser.Function_return_type_declaratorContext):
        pass

    # Visit a parse tree produced by QcodeParser#function_declarator.
    def visitFunction_declarator(self, ctx: QcodeParser.Function_declaratorContext):
        return ctx.function_name().getText()

    # Visit a parse tree produced by QcodeParser#function_name.
    def visitFunction_name(self, ctx: QcodeParser.Function_nameContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#parameter_decl_list.
    def visitParameter_decl_list(self, ctx: QcodeParser.Parameter_decl_listContext, para_symbols):
        if ctx.parameter_decl_list() is not None:
            self.visitParameter_decl_list(ctx.parameter_decl_list(), para_symbols)
        if ctx.parameter_declaration() is not None:
            para_info = self.visitParameter_declaration(ctx.parameter_declaration())
            para_symbol = ParameterSymbol(para_info[0], para_info[1])
            para_symbols.append(para_symbol)

        return para_symbols

    # Visit a parse tree produced by QcodeParser#expression_list.
    def visitExpression_list(self, ctx: QcodeParser.Expression_listContext, scope):
        exp_literal = ""
        if ctx.exp_list_alias is not None:
            exp_literal = exp_literal + str(self.visitExpression_list(ctx.exp_list_alias, scope))
        if ctx.COMMA() is not None:
            exp_literal = exp_literal + str(ctx.COMMA()) + " "
        if ctx.single_expression() is not None:
            exp_literal = exp_literal + str(self.build_exp(ctx.single_expression(), scope))
        return exp_literal

    # Visit a parse tree produced by QcodeParser#vector_expression.
    def visitVector_expression(self, ctx: QcodeParser.Vector_expressionContext, scope):
        exp_literal = ""
        if ctx.single_expression() is not None:
            exp_literal = exp_literal + str(self.build_exp(ctx.single_expression(), scope))
        if ctx.vector_slice() is not None:
            exp_literal = exp_literal + str(self.visitVector_slice(ctx.vector_slice(), scope))
        return exp_literal

    # Visit a parse tree produced by QcodeParser#vector_slice.
    def visitVector_slice(self, ctx: QcodeParser.Vector_sliceContext, scope):
        exp_literal = ""
        if ctx.vector_bound_alias_l is not None:
            exp_literal = exp_literal + str(self.build_exp(ctx.vector_bound_alias_l, scope))
        if ctx.COLON() is not None:
            exp_literal = exp_literal + str(ctx.COLON())
        if ctx.vector_bound_alias_r is not None:
            exp_literal = exp_literal + 'int('+str(self.build_exp(ctx.vector_bound_alias_r, scope))+')'
        return exp_literal

    # Visit a parse tree produced by QcodeParser#single_expression.
    def visitSingle_expression(self, ctx: QcodeParser.Single_expressionContext, scope):
        exp_type = ""
        if ctx.get_inside_exp is not None:
            exp_type = self.visitSingle_expression(ctx.get_inside_exp, scope)
        if ctx.function_call_exp is not None:
            exp_type = self.visitSingle_expression(ctx.function_call_exp, scope)
            return exp_type
        if ctx.additive_op() is not None:
            lt = self.visitSingle_expression(ctx.binary_add_left_exp, scope)
            rt = self.visitSingle_expression(ctx.binary_add_right_exp, scope)
            if lt == rt:
                return lt
            else:
                print("the type of left is mismatched with right")
        if ctx.assign_op() is not None:
            lt = self.visitSingle_expression(ctx.assign_exp_left, scope)
            rt = self.visitSingle_expression(ctx.assign_exp_right, scope)
            if lt == rt:
                return lt
            else:
                print("the type of left is mismatched with right")
        if ctx.lambda_exp() is not None:
            exp_type = None
        if ctx.key_words() is not None:
            key_literal = self.visitKey_words(ctx.key_words())
            if key_literal in quantum_logic_gate_name:
                exp_type = "logic_gate"
        if ctx.Identifier() is not None:
            id_literal = ctx.Identifier().getText()
            id_symbol = scope.search_all(id_literal)
            if id_symbol is not None:
                id_symbol_type = type(id_symbol)
                if id_symbol_type is FunctionSymbol:
                    func_call_sym = FuncCallSymbol(id_literal, id_symbol.type)
                    scope.insert(func_call_sym)
                exp_type = id_symbol.type
            else:
                exp_type = None
        return exp_type

    # Visit a parse tree produced by QcodeParser#single_expression.
    def build_exp(self, ctx: QcodeParser.Single_expressionContext, scope):
        exp_literal = ""
        if ctx.bracket_exp is not None:
            exp_literal = exp_literal + str(ctx.LBRACK()) + self.visitExpression_list(ctx.bracket_exp, scope) \
                          + str(ctx.RBRACK())
        if ctx.parenthesis_exp is not None:
            exp_literal = exp_literal + str(ctx.LPAREN()) + self.visitExpression_list(ctx.parenthesis_exp, scope) \
                          + str(ctx.RPAREN())
        if ctx.get_index_exp is not None:
            exp_literal = exp_literal + self.build_exp(ctx.get_index_exp, scope) + str(ctx.LBRACK()) \
                          + self.visitVector_expression(ctx.vector_expression(), scope) + str(ctx.RBRACK())
        if ctx.get_inside_exp is not None:
            if ctx.get_inside_bee_exp.getText() == 'length':
                exp_literal = exp_literal + "len(" + self.build_exp(ctx.get_inside_exp, scope) + ")"
            elif ctx.get_inside_bee_exp.getText() == 'size':
                exp_literal = exp_literal + "len(" + self.build_exp(ctx.get_inside_exp, scope) + ")"
            elif ctx.get_inside_bee_exp.getText() == 'getFirst':
                exp_literal = exp_literal +  self.build_exp(ctx.get_inside_exp, scope) + '[0]'
            elif ctx.get_inside_bee_exp.getText() == 'getSecond':
                exp_literal = exp_literal +  self.build_exp(ctx.get_inside_exp, scope) + '[1]'
            elif ctx.get_inside_bee_exp.getText() == 'first':
                exp_literal = exp_literal +  self.build_exp(ctx.get_inside_exp, scope)
            elif ctx.get_inside_bee_exp.getText() == 'second':
                exp_literal = exp_literal +  self.build_exp(ctx.get_inside_exp, scope)
            else:
                exp_literal = exp_literal + self.build_exp(ctx.get_inside_exp, scope) + str(ctx.DOT()) + \
                              self.build_exp(ctx.get_inside_bee_exp, scope)
        if ctx.function_call_exp is not None:
            if ctx.function_call_exp.getText()[-6:] == "length"  or ctx.function_call_exp.getText()[-4:] == 'size' \
                    or ctx.function_call_exp.getText()[-5:] == "first" \
                    or ctx.function_call_exp.getText()[-6:] == "Second" \
                    or ctx.function_call_exp.getText()[-6:] == "second" \
                    or ctx.function_call_exp.getText()[-5:] == "First":
                exp_literal = exp_literal + self.build_exp(ctx.function_call_exp, scope)
            else:
                exp_literal = exp_literal + self.build_exp(ctx.function_call_exp, scope) + "("
                if ctx.expression_list() is not None:
                    exp_literal = exp_literal + self.visitExpression_list(ctx.expression_list(), scope) + ")"
                else:
                    exp_literal += ")"
        if ctx.postfix_add_exp is not None:
            pass
        if ctx.postfix_dec_exp is not None:
            pass
        if ctx.unary_op() is not None:
            exp_literal = exp_literal + self.visitUnary_op(ctx.unary_op()) + \
                          self.build_exp(ctx.unary_exp, scope)
        if ctx.multiplicative_op() is not None:
            exp_literal = exp_literal + self.build_exp(ctx.binary_mul_left_exp, scope) + \
                          self.visitMultiplicative_op(ctx.multiplicative_op()) + \
                          self.build_exp(ctx.binary_mul_right_exp, scope)
        if ctx.additive_op() is not None:
            exp_literal = exp_literal + self.build_exp(ctx.binary_add_left_exp, scope) + \
                          self.visitAdditive_op(ctx.additive_op()) + \
                          self.build_exp(ctx.binary_add_right_exp, scope)
        if ctx.shift_op() is not None:
            exp_literal = exp_literal + self.build_exp(ctx.shift_exp_left_exp, scope) + \
                          self.visitShift_op(ctx.shift_op()) + \
                          self.build_exp(ctx.shift_exp_right_exp, scope)
        if ctx.relationship_op() is not None:
            exp_literal = exp_literal + self.build_exp(ctx.relationship_left_exp, scope) + \
                          self.visitRelationship_op(ctx.relationship_op()) + \
                          self.build_exp(ctx.relationship_right_exp, scope)
        if ctx.equal_op() is not None:
            exp_literal = exp_literal + self.build_exp(ctx.equal_left_exp, scope)
            if ctx.equal_right_exp.getText() == "true" or ctx.equal_right_exp.getText() == "false":
                exp_literal = exp_literal + " is "
            else:
                exp_literal = exp_literal + self.visitEqual_op(ctx.equal_op())
            exp_literal = exp_literal + self.build_exp(ctx.equal_right_exp, scope)
            return exp_literal
        if ctx.logic_op() is not None:
            exp_literal = exp_literal + self.build_exp(ctx.logic_left_exp, scope) + \
                          self.visitLogic_op(ctx.logic_op()) + \
                          self.build_exp(ctx.logic_right_exp, scope)
        if ctx.triple_exp_condition is not None:
            pass
        if ctx.assign_op() is not None:
            exp_literal = exp_literal + self.build_exp(ctx.assign_exp_left, scope) + \
                          self.visitAssign_op(ctx.assign_op()) + \
                          self.build_exp(ctx.assign_exp_right, scope)
        if ctx.lambda_exp() is not None:
            exp_literal = self.visitLambda_exp(ctx.lambda_exp(), scope)
        if ctx.Identifier() is not None:
            exp_literal = str(ctx.Identifier())
            if exp_literal == 'add':
                exp_literal = 'append'
        if ctx.constant() is not None:
            exp_literal = self.visitConstant(ctx.constant())
        if ctx.key_words() is not None:
            exp_literal = self.visitKey_words(ctx.key_words())
        if ctx.PI() is not None:
            exp_literal = str(PI)
        return exp_literal

    # Visit a parse tree produced by QcodeParser#lambda_exp.
    def visitLambda_exp(self, ctx: QcodeParser.Lambda_expContext, scope):
        exp_literal = ""
        exp_literal += str(ctx.LAMBDA())

        lambda_paras = []
        lambda_paras = self.visitParameter_decl_list(ctx.parameter_decl_list(), lambda_paras)
        string_of_paras = self.fn.trans_list_2_string(lambda_paras)

        exp_literal += " " + string_of_paras

        lambda_func_name = "oracle_" + ''.join(random.sample(string.ascii_letters + string.digits, 8))

        for item in scope.symbols.items():
            lambda_paras.append(item[1])

        string_of_lambda_func_paras = self.fn.trans_list_2_string(lambda_paras)

        exp_literal += ": " + lambda_func_name + "(" + string_of_lambda_func_paras + ")"

        temp_info.append(lambda_func_name)
        temp_info.append(lambda_paras)
        temp_info.append(ctx.lambda_body())

        # self.visitLambda_body(ctx.lambda_body(), scope, lambda_func_name, lambda_paras)

        return exp_literal

    # Visit a parse tree produced by QcodeParser#lambda_body.
    def visitLambda_body(self, temp_info):
        func_symbol = FunctionSymbol(temp_info[0], "circuit", temp_info[1])
        global_scope.insert(func_symbol)

        function_scope = SymbolTable(
            symtab_name="function_symtab_" + func_symbol.name,
            scope_level=2,
            enclosing_scope=global_scope
        )

        self.current_scope = function_scope

        for para_item in func_symbol.params:
            function_scope.insert(para_item)

        string_of_paras = self.fn.trans_list_2_string(func_symbol.params)

        # Three strike, never ask why
        self.fn.createline()
        self.fn.createline()
        self.fn.createline()

        func_header = "def " + func_symbol.name + "(" + string_of_paras + "):"

        self.fn.write(func_header)

        func_return = "circuit"
        self.fn.createline()
        self.fn.createIdent(function_scope.scope_level - 1)
        self.fn.write("circuit = CreateEmptyCircuit()")

        if temp_info[2].compound_statement() is not None:
            self.visitCompound_statement(temp_info[2].compound_statement(), function_scope, func_return)

        self.fn.createline()
        self.fn.createIdent(function_scope.scope_level-1)
        self.fn.write("return circuit")

    # Visit a parse tree produced by QcodeParser#additive_op.
    def visitAdditive_op(self, ctx: QcodeParser.Additive_opContext):
        exp_literal = ""
        if ctx.ADD() is not None:
            exp_literal = " " + str(ctx.ADD()) + " "
        if ctx.SUB() is not None:
            exp_literal = " " + str(ctx.SUB()) + " "
        return exp_literal

    # Visit a parse tree produced by QcodeParser#multiplicative_op.
    def visitMultiplicative_op(self, ctx: QcodeParser.Multiplicative_opContext):
        exp_literal = ""
        if ctx.MUL() is not None:
            exp_literal = " " + str(ctx.MUL()) + " "
        if ctx.MOD() is not None:
            exp_literal = " " + str(ctx.MOD()) + " "
        if ctx.DIV() is not None:
            exp_literal = " " + str(ctx.DIV()) + " "
        return exp_literal

    # Visit a parse tree produced by QcodeParser#shift_op.
    def visitShift_op(self, ctx: QcodeParser.Shift_opContext):
        exp_literal = ""
        if ctx.SHIFT_LEFT() is not None:
            exp_literal = " " + str(ctx.SHIFT_LEFT()) + " "
        if ctx.SHIFT_RIGHT() is not None:
            exp_literal = " " + str(ctx.SHIFT_RIGHT()) + " "
        return exp_literal

    # Visit a parse tree produced by QcodeParser#assign_op.
    def visitAssign_op(self, ctx: QcodeParser.Assign_opContext):
        exp_literal = ""
        if ctx.ASSIGN() is not None:
            exp_literal = " " + str(ctx.ASSIGN()) + " "
        if ctx.ADD_ASSIGN() is not None:
            exp_literal = " " + str(ctx.ADD_ASSIGN()) + " "
        if ctx.SUB_ASSIGN() is not None:
            exp_literal = " " + str(ctx.SUB_ASSIGN()) + " "
        if ctx.MUL_ASSIGN() is not None:
            exp_literal = " " + str(ctx.MUL_ASSIGN()) + " "
        if ctx.DIV_ASSIGN() is not None:
            exp_literal = " " + str(ctx.DIV_ASSIGN()) + " "
        if ctx.MOD_ASSIGN() is not None:
            exp_literal = " " + str(ctx.MOD_ASSIGN()) + " "
        return exp_literal

    # Visit a parse tree produced by QcodeParser#equal_op.
    def visitEqual_op(self, ctx: QcodeParser.Equal_opContext):
        exp_literal = ""
        if ctx.EQUAL() is not None:
            exp_literal = " " + str(ctx.EQUAL()) + " "
        if ctx.NOTEQUAL() is not None:
            exp_literal = " " + str(ctx.NOTEQUAL()) + " "
        return exp_literal

    # Visit a parse tree produced by QcodeParser#relationship_op.
    def visitRelationship_op(self, ctx: QcodeParser.Relationship_opContext):
        exp_literal = ""
        if ctx.GT() is not None:
            exp_literal = " " + str(ctx.GT()) + " "
        if ctx.GE() is not None:
            exp_literal = " " + str(ctx.GE()) + " "
        if ctx.LT() is not None:
            exp_literal = " " + str(ctx.LT()) + " "
        if ctx.LE() is not None:
            exp_literal = " " + str(ctx.LE()) + " "
        return exp_literal

    # Visit a parse tree produced by QcodeParser#logic_op.
    def visitLogic_op(self, ctx: QcodeParser.Logic_opContext):
        exp_literal = ""
        if ctx.LOGIC_OR() is not None:
            exp_literal += " or "
        if ctx.LOGIC_AND() is not None:
            exp_literal += " and "
        return exp_literal

    # Visit a parse tree produced by QcodeParser#unary_op.
    def visitUnary_op(self, ctx: QcodeParser.Unary_opContext):
        exp_literal = ""
        if ctx.SUB() is not None:
            exp_literal = " " + str(ctx.SUB()) + " "
        return exp_literal

    # Visit a parse tree produced by QcodeParser#statement.
    def visitStatement(self, ctx: QcodeParser.StatementContext, scope, func_return):
        if ctx.declaration_variable_statement() is not None:
            # self.fn.createline()
            # self.fn.createIdent(scope.scope_level - 1)
            self.visitDeclaration_variable_statement(ctx.declaration_variable_statement(), scope, func_return)
        elif ctx.expression_statement() is not None:
            # self.fn.createline()
            # self.fn.createIdent(scope.scope_level - 1)
            self.visitExpression_statement(ctx.expression_statement(), scope, func_return)
        elif ctx.compound_statement() is not None:
            self.visitCompound_statement(ctx.compound_statement(), scope, func_return)
        elif ctx.iterate_statement() is not None:
            # self.fn.createline()
            # self.fn.createIdent(scope.scope_level - 1)
            self.visitIterate_statement(ctx.iterate_statement(), scope, func_return)
        elif ctx.while_statement() is not None:
            # self.fn.createline()
            # self.fn.createIdent(scope.scope_level - 1)
            self.visitWhile_statement(ctx.while_statement(), scope, func_return)
        elif ctx.qif_statement() is not None:
            # self.fn.createline()
            # self.fn.createIdent(scope.scope_level - 1)
            qif_flag = 0
            self.visitQif_statement(ctx.qif_statement(), scope, func_return, qif_flag)
        elif ctx.qwhile_statement() is not None:
            # self.fn.createline()
            # self.fn.createIdent(scope.scope_level - 1)
            qwhile_flag = 0
            self.visitQwhile_statement(ctx.qwhile_statement(), scope, func_return, qwhile_flag)
        elif ctx.select_statement() is not None:
            # self.fn.createline()
            # self.fn.createIdent(scope.scope_level - 1)
            self.visitSelect_statement(ctx.select_statement(), scope, func_return)
        elif ctx.return_statement() is not None:
            # self.fn.createline()
            # self.fn.createIdent(scope.scope_level - 1)
            self.visitReturn_statement(ctx.return_statement(), scope, func_return)

    # Visit a parse tree produced by QcodeParser#while_statement.
    def visitWhile_statement(self, ctx: QcodeParser.While_statementContext, scope, func_return):
        self.current_scope = scope
        while_name = ''.join(random.sample(string.ascii_letters + string.digits, 6))
        while_scope = SymbolTable(
            symtab_name=while_name,
            scope_level=scope.scope_level + 1,
            enclosing_scope=scope
        )
        self.current_scope = while_scope

        self.fn.write("while ")
        while_condi = self.build_exp(ctx.single_expression(), scope)
        self.fn.write(while_condi)
        self.fn.write(":")

        self.visitStatement(ctx.statement(), while_scope, func_return)

    # Visit a parse tree produced by QcodeParser#return_statement.
    def visitReturn_statement(self, ctx: QcodeParser.Return_statementContext, scope, func_return):
        return_content = ""
        return_content += ctx.RETURN().getText() + " " + self.build_exp(ctx.single_expression(), scope)
        self.fn.write(return_content)
        print(temp_info)
        self.visitLambda_body(temp_info)

    # Visit a parse tree produced by QcodeParser#qif_statement.
    def visitQif_statement(self, ctx: QcodeParser.Qif_statementContext, scope, func_return, qif_flag):
        self.current_scope = scope
        qif_flag = qif_flag + 1
        qif_name = 'qif_' + ''.join(random.sample(string.ascii_letters + string.digits, 6))
        qif_scope = SymbolTable(
            symtab_name=qif_name,
            scope_level=scope.scope_level + 1,
            enclosing_scope=self.current_scope
            # enclosing_scope=scope
        )
        self.current_scope = qif_scope

        qif_prog_name = qif_scope.symtab_name
        print(qif_flag)
        self.fn.createline()
        self.fn.createIdent(qif_scope.enclosing_scope.scope_level-qif_flag)
        qif_true_prog_name = qif_scope.symtab_name + "_T_prog"
        self.fn.write(qif_true_prog_name)
        self.fn.write(" = QProg()")

        if ctx.qif_false_branch() is not None:
            self.fn.createline()
            self.fn.createIdent(qif_scope.enclosing_scope.scope_level - qif_flag)
            qif_false_prog_name = qif_scope.symtab_name + "_F_prog"
            self.fn.write(qif_false_prog_name)
            self.fn.write(" = QProg()")

        if ctx.qif_true_branch() is not None:
            self.visitQif_true_branch(ctx.qif_true_branch(), qif_scope, func_return, qif_true_prog_name, qif_flag)

        if ctx.qif_false_branch() is not None:
            self.visitQif_false_branch(ctx.qif_false_branch(), qif_scope, func_return, qif_false_prog_name, qif_flag)

        qif_condi = self.build_exp(ctx.single_expression(), scope)

        if ctx.qif_false_branch() is not None:
            create_qif_content = qif_condi + ", " + qif_true_prog_name + ", " + qif_false_prog_name
        else:
            create_qif_content = qif_condi + ", " + qif_true_prog_name

        self.fn.createline()
        self.fn.createIdent(qif_scope.enclosing_scope.scope_level - qif_flag)
        self.fn.write(qif_prog_name)
        self.fn.write(" = CreateIfProg(")
        self.fn.write(create_qif_content)
        self.fn.write(")")

        # Tough handle with qif&qelse blending with qif&qelse
        # So must focus on it in convenient
        if ctx.qif_true_branch() is not None and qif_flag > 1:
            # self.visitQif_true_branch(ctx.qif_true_branch(), qif_scope, func_return, qif_true_prog_name, qif_flag)
            self.fn.createline()
            self.fn.createIdent(qif_scope.enclosing_scope.scope_level - qif_flag)
            last_t_prog_name = qif_scope.enclosing_scope.symtab_name + "_T_prog"
            self.fn.write(last_t_prog_name)
            self.fn.write(".insert(")
            self.fn.write(qif_scope.symtab_name)
            self.fn.write(")")
        elif ctx.qif_false_branch() is not None and qif_flag > 1:
            self.fn.createline()
            self.fn.createIdent(qif_scope.enclosing_scope.scope_level - qif_flag)
            last_t_prog_name = qif_scope.enclosing_scope.symtab_name + "_F_prog"
            self.fn.write(last_t_prog_name)
            self.fn.write(".insert(")
            self.fn.write(qif_scope.symtab_name)
            self.fn.write(")")

        if qif_flag == 1:
            self.fn.createline()
            self.fn.createIdent(qif_scope.enclosing_scope.scope_level - qif_flag)
            self.fn.write(func_return)
            self.fn.write(".insert(")
            self.fn.write(qif_prog_name)
            self.fn.write(")")
            qif_flag = 0
            # print(qif_scope)

    # Visit a parse tree produced by QcodeParser#qif_true_branch.
    def visitQif_true_branch(self, ctx: QcodeParser.Qif_true_branchContext, scope, func_return, qif_true_prog_name, qif_flag):
        self.visit_qif_statementlist(ctx.statement_list(), scope, func_return, qif_true_prog_name, qif_flag)

    # Visit a parse tree produced by QcodeParser#statement_list.
    def visit_qif_statementlist(self, ctx: QcodeParser.Statement_listContext, scope, func_return, qif_true_prog_name, qif_flag):
        stmt_num = ctx.getChildCount()
        for st in range(stmt_num):
            self.fn.createline()
            self.fn.createIdent(scope.enclosing_scope.scope_level - qif_flag)
            self.visit_qif_in_statement(ctx.statement(st), scope, func_return, qif_true_prog_name, qif_flag)

    # Visit a parse tree produced by QcodeParser#statement.
    def visit_qif_in_statement(self, ctx: QcodeParser.StatementContext, scope, func_return, qif_true_prog_name, qif_flag):
        if ctx.expression_statement() is not None:
            self.fn.write(qif_true_prog_name)
            self.fn.write(".insert(")
            self.visit_qif_exp_statement(ctx.expression_statement(), scope, func_return)
            self.fn.write(")")
        if ctx.compound_statement() is not None:
            self.visitCompound_statement(ctx.compound_statement(), scope, func_return)
        if ctx.qif_statement() is not None:
            self.visitQif_statement(ctx.qif_statement(), scope, func_return, qif_flag)
            qif_flag = qif_flag - 1

    # Visit a parse tree produced by QcodeParser#expression_statement.
    def visit_qif_exp_statement(self, ctx: QcodeParser.Expression_statementContext, scope, func_return):
        exp_literal = self.build_exp(ctx.single_expression(), scope)
        self.fn.write(exp_literal)

    # Visit a parse tree produced by QcodeParser#qif_false_branch.
    def visitQif_false_branch(self, ctx: QcodeParser.Qif_true_branchContext, scope, func_return, qif_false_prog_name,
                              qif_flag):
        self.visit_qif_statementlist(ctx.statement_list(), scope, func_return, qif_false_prog_name, qif_flag)

    # Visit a parse tree produced by QcodeParser#qwhile_statement.
    def visitQwhile_statement(self, ctx: QcodeParser.Qwhile_statementContext, scope, func_return, qwhile_flag):
        self.current_scope = scope
        qwhile_flag = qwhile_flag + 1
        qwhile_name = 'qwhile_' + ''.join(random.sample(string.ascii_letters + string.digits, 6))
        qwhile_scope = SymbolTable(
            symtab_name=qwhile_name,
            scope_level=scope.scope_level + 1,
            enclosing_scope=self.current_scope
            # enclosing_scope=scope
        )
        self.current_scope = qwhile_scope

        qwhile_prog_cont_name = qwhile_scope.symtab_name + "_cont"
        self.fn.createline()
        self.fn.createIdent(qwhile_scope.enclosing_scope.scope_level - qwhile_flag)
        self.fn.write(qwhile_prog_cont_name)
        self.fn.write(" = QProg()")

        if ctx.statement_list() is not None:
            self.visit_qwhile_statementlist(ctx.statement_list(), scope, func_return, qwhile_prog_cont_name, qwhile_flag)

        qwhile_condi = self.build_exp(ctx.single_expression(), scope)

        create_qwhile_content = qwhile_condi + ", " + qwhile_prog_cont_name

        self.fn.createline()
        self.fn.createIdent(qwhile_scope.enclosing_scope.scope_level - qwhile_flag)
        self.fn.write(qwhile_name)
        self.fn.write(" = CreateWhileProg(")
        self.fn.write(create_qwhile_content)
        self.fn.write(")")

        if qwhile_flag == 1:
            self.fn.createline()
            self.fn.createIdent(qwhile_scope.enclosing_scope.scope_level - qwhile_flag)
            self.fn.write(func_return)
            self.fn.write(".insert(")
            self.fn.write(qwhile_name)
            self.fn.write(")")
            qwhile_flag = 0

    # Visit a parse tree produced by QcodeParser#statement_list.
    def visit_qwhile_statementlist(self, ctx: QcodeParser.Statement_listContext, scope, func_return, qif_while_prog_name, qwhile_flag):
        stmt_num = ctx.getChildCount()
        for st in range(stmt_num):
            self.fn.createline()
            print(scope.enclosing_scope.scope_level - qwhile_flag)
            self.fn.createIdent(scope.scope_level - qwhile_flag)
            self.visit_qwhile_in_statement(ctx.statement(st), scope, func_return, qif_while_prog_name, qwhile_flag)

    # Visit a parse tree produced by QcodeParser#statement.
    def visit_qwhile_in_statement(self, ctx: QcodeParser.StatementContext, scope, func_return, qif_while_prog_name,
                               qwhile_flag):
        if ctx.expression_statement() is not None:
            self.fn.write(qif_while_prog_name)
            self.fn.write(".insert(")
            self.visit_qif_exp_statement(ctx.expression_statement(), scope, func_return)
            self.fn.write(")")
        if ctx.compound_statement() is not None:
            self.visitCompound_statement(ctx.compound_statement(), scope, func_return)
        if ctx.qwhile_statement() is not None:
            self.visitQif_statement(ctx.qif_statement(), scope, func_return, qwhile_flag)
            qif_flag = qif_flag - 1

    # Visit a parse tree produced by QcodeParser#expression_statement.
    def visitExpression_statement(self, ctx: QcodeParser.Expression_statementContext, scope, func_return):
        exp_type = self.visitSingle_expression(ctx.single_expression(), scope)
        exp_literal = self.build_exp(ctx.single_expression(), scope)
        if func_return == "qprog":
            if exp_type == "circuit" or exp_type == "qprog" or exp_type == "logic_gate" or exp_type == "measure_op":
                self.fn.write(func_return)
                self.fn.write(".insert(")
                self.fn.write(exp_literal)
                self.fn.write(")")
            else:
                self.fn.write(exp_literal)
        elif func_return == "circuit":
            if exp_type == "circuit" or exp_type == "logic_gate":
                self.fn.write(func_return)
                self.fn.write(".insert(")
                self.fn.write(exp_literal)
                self.fn.write(")")
            else:
                self.fn.write(exp_literal)
        elif func_return == "variationalCircuit":
            if exp_type == "variationalCircuit" or exp_type == "logic_gate":
                self.fn.write(func_return)
                self.fn.write(".insert(")
                self.fn.write(exp_literal)
                self.fn.write(")")
            else:
                self.fn.write(exp_literal)
        else:
            self.fn.write(exp_literal)

    # Visit a parse tree produced by QcodeParser#empty_statement.
    def visitEmpty_statement(self, ctx: QcodeParser.Empty_statementContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by QcodeParser#declaration_variable_statement.
    def visitDeclaration_variable_statement(self, ctx: QcodeParser.Declaration_variable_statementContext, scope, func_return):
        vb_info = self.visitDeclaration_variable(ctx.declaration_variable(), scope)
        var_symbol = VariableSymbol(vb_info[0], vb_info[1], vb_info[2])
        scope.insert(var_symbol)

        if var_symbol.type == "circuit":
            self.fn.write(var_symbol.name)
            self.fn.write(" = CreateEmptyCircuit()")
            if var_symbol.data is not None  and var_symbol.data != '' :
                self.fn.createline()
                self.fn.createIdent(scope.scope_level - 1)
                self.fn.write(var_symbol.name)
                self.fn.write(" = ")
                self.fn.write(var_symbol.data)
                self.fn.createline()
                self.fn.createIdent(scope.scope_level - 1)
                declara_content = func_return + ".insert(" + var_symbol.name + ")"
                self.fn.write(declara_content)

        if var_symbol.type == "let":
            self.fn.write(var_symbol.name)
            self.fn.write(" = ")
            self.fn.write(var_symbol.data)
        if var_symbol.type == "vector<qubit>":
            self.fn.write(var_symbol.name)
            self.fn.write(" = ")
            self.fn.write("QVec()")

    # Visit a parse tree produced by QcodeParser#compound_statement.
    def visitCompound_statement(self, ctx: QcodeParser.Compound_statementContext, scope, func_return):
        if ctx.statement_list() is not None:
            self.visitStatement_list(ctx.statement_list(), scope, func_return)

    # Visit a parse tree produced by QcodeParser#select_statement.
    def visitSelect_statement(self, ctx: QcodeParser.Select_statementContext, scope, func_return):
        self.current_scope = scope
        select_name = ''.join(random.sample(string.ascii_letters + string.digits, 6))
        select_scope = SymbolTable(
            symtab_name=select_name,
            scope_level=scope.scope_level + 1,
            enclosing_scope=scope
        )
        self.current_scope = select_scope

        self.fn.write("if ")
        select_condi = self.build_exp(ctx.single_expression(), scope)
        self.fn.write(select_condi)
        self.fn.write(":")

        self.visitStatement(ctx.statement(0), select_scope, func_return)
        print(select_scope)
        self.fn.createline()
        self.fn.createIdent(scope.scope_level -1)
        if ctx.ELSE() is not None:
            select_scope.scope_level -= 1
            if ctx.statement(1).select_statement() is not None:
                self.fn.write('el')
                self.visitStatement(ctx.statement(1), select_scope, func_return)
            else:
                if len(ctx.statement(1).getText()) > 2:
                    select_scope.scope_level += 1
                    self.fn.write(str(ctx.ELSE())+':')
                    self.visitStatement(ctx.statement(1),select_scope, func_return)
                    self.fn.createline()
                    self.fn.createIdent(scope.scope_level -1)

    # Visit a parse tree produced by QcodeParser#iterate_statement.
    def visitIterate_statement(self, ctx: QcodeParser.Iterate_statementContext, scope, func_return):
        self.current_scope = scope
        it_name = ''.join(random.sample(string.ascii_letters + string.digits, 6))
        iterate_scope = SymbolTable(
            # symtab_name="it_symtab_" + scope.symtab_name[16:],
            symtab_name=it_name,
            scope_level=scope.scope_level + 1,
            # enclosing_scope=self.current_scope
            enclosing_scope=scope
        )
        self.current_scope = iterate_scope
        # print(iterate_scope.symtab_name)
        if ctx.for_stmt() is not None:
            self.visitFor_stmt(ctx.for_stmt(), self.current_scope)
            self.visitStatement(ctx.statement(), self.current_scope, func_return)
        if ctx.inhanced_for_stmt() is not None:
            self.visitInhanced_for_stmt(ctx.inhanced_for_stmt(), self.current_scope)
            self.visitStatement(ctx.statement(), self.current_scope, func_return)

        # print(iterate_scope)

    # Visit a parse tree produced by QcodeParser#for_stmt.
    def visitFor_stmt(self, ctx: QcodeParser.For_stmtContext, scope):
        if ctx.for_start() is not None:
            for_start_info = self.visitFor_start(ctx.for_start(), scope)
        if ctx.for_step() is not None:
            for_step = self.visitFor_step(ctx.for_step(), scope)
        if ctx.for_condition() is not None:
            for_condi = self.visitFor_condition(ctx.for_condition(), scope)

        for_header = "for" + " " + for_start_info[0] + " in range(" + for_start_info[1] + "," + for_condi + "," \
                     + for_step + "):"
        self.fn.write(for_header)

    # Visit a parse tree produced by QcodeParser#for_step.
    def visitFor_step(self, ctx: QcodeParser.For_stepContext, scope):
        for_step = ""
        for_step += self.build_exp(ctx.single_expression(), scope)
        return for_step

    # Visit a parse tree produced by QcodeParser#for_condition.
    def visitFor_condition(self, ctx: QcodeParser.For_conditionContext, scope):
        for_condi = ""
        for_condi += self.build_exp(ctx.single_expression(), scope)
        return for_condi

    # Visit a parse tree produced by QcodeParser#for_start.
    def visitFor_start(self, ctx: QcodeParser.For_startContext, scope):
        for_start_info = []
        if ctx.LET() is not None:
            var_symbol = VariableSymbol(ctx.Identifier().getText(), "let", ctx.single_expression().getText())
            scope.insert(var_symbol)
            for_start_info.append(var_symbol.name)
            for_start_info.append(var_symbol.data)
            return for_start_info
        else:
            for_start_info.append(ctx.Identifier().getText())
            if ctx.single_expression() is not None:
                for_start_info.append(ctx.single_expression().getText())
            else:
                for_start_info.append("0")
            return for_start_info

    # Visit a parse tree produced by QcodeParser#inhanced_for_stmt.
    def visitInhanced_for_stmt(self, ctx: QcodeParser.Inhanced_for_stmtContext, scope):
        iterator = ctx.Identifier().getText()
        ite_obj = self.build_exp(ctx.single_expression(), scope)
        inhanced_for_header = "for" + " " + iterator + " " + str(ctx.IN()) + " " + ite_obj + ":"
        self.fn.write(inhanced_for_header)

    # Visit a parse tree produced by QcodeParser#statement_list.
    def visitStatement_list(self, ctx: QcodeParser.Statement_listContext, scope, func_return):
        stmt_num = ctx.getChildCount()
        for st in range(stmt_num):
            self.fn.createline()
            self.fn.createIdent(scope.scope_level-1)
            self.visitStatement(ctx.statement(st), scope, func_return)

    # Visit a parse tree produced by QcodeParser#function_definition.
    def visitFunction_definition(self, ctx: QcodeParser.Function_definitionContext):
        self.current_scope.scope_level = 1
        func_info = self.visitDeclarate_function(ctx.declarate_function())
        func_symbol = FunctionSymbol(func_info[0], func_info[1])

        paras = self.get_func_paras(ctx)

        for i in paras:
            func_symbol.params.append(i)

        return func_symbol

    def get_func_paras(self, ctx: QcodeParser.Function_definitionContext):
        return self.get_parameters(ctx.declarate_function())

    def build_function_scope(self, ctx: QcodeParser.Function_definitionContext, func_symbol):
        self.current_scope.scope_level = 1
        self.current_scope = global_scope
        function_scope = SymbolTable(
            symtab_name="function_symtab_" + func_symbol.name,
            scope_level=self.current_scope.scope_level + 1,
            enclosing_scope=self.current_scope
        )
        self.current_scope = function_scope

        paras = self.get_func_paras(ctx)

        for i in paras:
            func_symbol.params.append(i)

        based_python_paras = []
        for para_item in func_symbol.params:
            function_scope.insert(para_item)
            based_python_paras.append(para_item.name)

        string_of_paras = ""
        for item_p in based_python_paras:
            string_of_paras = string_of_paras + item_p
            string_of_paras = string_of_paras + ", "

        string_of_paras = string_of_paras[0:-2]

        func_header = "def " + func_symbol.name + "(" + string_of_paras + "):"

        # According to PEP8: there should be 2 blank lines between any two functions
        self.fn.createline()
        self.fn.createline()

        self.fn.write(func_header)

        func_return = func_symbol.type.type

        if func_return == "qprog":
            self.fn.createline()
            self.fn.createIdent(function_scope.scope_level - 1)
            self.fn.write("qprog = CreateEmptyQProg()")
            self.visitFunction_body(ctx.function_body(), function_scope, func_return)
            self.fn.createline()
            self.fn.createIdent(function_scope.scope_level - 1)
            self.fn.write("return ")
            self.fn.write(func_return)
        elif func_return == "circuit":
            self.fn.createline()
            self.fn.createIdent(function_scope.scope_level - 1)
            self.fn.write("circuit = CreateEmptyCircuit()")
            self.visitFunction_body(ctx.function_body(), function_scope, func_return)
            self.fn.createline()
            self.fn.createIdent(function_scope.scope_level - 1)
            self.fn.write("return ")
            self.fn.write(func_return)
        elif func_return == "variationalCircuit":
            self.fn.createline()
            self.fn.createIdent(function_scope.scope_level - 1)
            self.fn.write("variationalCircuit = VariationalQuantumCircuit()")
            self.visitFunction_body(ctx.function_body(), function_scope, func_return)
            self.fn.createline()
            self.fn.createIdent(function_scope.scope_level - 1)
            self.fn.write("return ")
            self.fn.write(func_return)
        else:
            self.visitFunction_body(ctx.function_body(), function_scope, func_return)
            self.fn.createline()
            self.fn.createIdent(function_scope.scope_level - 1)
        #print(function_scope)

    # Visit a parse tree produced by QcodeParser#declarate_function.
    def get_parameters(self, ctx: QcodeParser.Declarate_functionContext):
        return self.get_in_parameters(ctx.function_declarator())

    # Visit a parse tree produced by QcodeParser#function_declarator.
    def get_in_parameters(self, ctx: QcodeParser.Function_declaratorContext):
        para_symbols = []
        if ctx.parameter_decl_list() is not None:
            return self.visitParameter_decl_list(ctx.parameter_decl_list(), para_symbols)

    # Visit a parse tree produced by QcodeParser#function_body.
    def visitFunction_body(self, ctx: QcodeParser.Function_bodyContext, scope, func_return):
        if ctx.compound_statement() is not None:
            self.visitCompound_statement(ctx.compound_statement(), scope, func_return)

    # Visit a parse tree produced by QcodeParser#key_words.
    def visitKey_words(self, ctx: QcodeParser.Key_wordsContext):
        if ctx.H_GATE() is not None:
            return str(ctx.H_GATE())
        if ctx.X_GATE() is not None:
            return str(ctx.X_GATE())
        if ctx.NOT_GATE() is not None:
            return str(ctx.NOT_GATE())
        if ctx.T_GATE() is not None:
            self.fn.write(str(ctx.T_GATE()))
        if ctx.S_GATE() is not None:
            return str(ctx.S_GATE())
        if ctx.Y_GATE() is not None:
            return str(ctx.Y_GATE())
        if ctx.Z_GATE() is not None:
            return str(ctx.Z_GATE())
        if ctx.X1_GATE() is not None:
            return str(ctx.X1_GATE())
        if ctx.Y1_GATE() is not None:
            return str(ctx.Y1_GATE())
        if ctx.Z1_GATE() is not None:
            return str(ctx.Z1_GATE())
        if ctx.U4_GATE() is not None:
            return str(ctx.U4_GATE())
        if ctx.RX_GATE() is not None:
            return str(ctx.RX_GATE())
        if ctx.RY_GATE() is not None:
            return str(ctx.RY_GATE())
        if ctx.RZ_GATE() is not None:
            return str(ctx.RZ_GATE())
        if ctx.CNOT_GATE() is not None:
            return str(ctx.CNOT_GATE())
        if ctx.CZ_GATE() is not None:
            return str(ctx.CZ_GATE())
        if ctx.CR_GATE() is not None:
            return str(ctx.CR_GATE())
        if ctx.CU_GATE() is not None:
            return str(ctx.CU_GATE())
        if ctx.TOFFOLI_GATE() is not None:
            return str(ctx.TOFFOLI_GATE())
        if ctx.ISWAP() is not None:
            return str(ctx.ISWAP())
        if ctx.MEASURE() is not None:
            return str(ctx.MEASURE())
        if ctx.RETURN() is not None:
            return str(ctx.RETURN())
        if ctx.VQG_CNOT_VCGEN() is not None:
            return 'VariationalQuantumGate_CNOT'
        if ctx.VQG_RX_VCGEN() is not None:
            return 'VariationalQuantumGate_RX'
        if ctx.VQG_RZ_VCGEN() is not None:
            return 'VariationalQuantumGate_RZ'
        if ctx.MEASUREALL() is not None:
            return str(ctx.MEASUREALL())
        if ctx.APPLY_QGATE() is not None:
            return str(ctx.APPLY_QGATE())
        if ctx.TRUE():
            return "True"
        if ctx.FALSE():
            return "False"

    # Visit a parse tree produced by QcodeParser#constant.
    def visitConstant(self, ctx: QcodeParser.ConstantContext):
        if ctx.Integer_Literal() is not None:
            return str(ctx.Integer_Literal())
        if ctx.Double_Literal() is not None:
            return str(ctx.Double_Literal())

