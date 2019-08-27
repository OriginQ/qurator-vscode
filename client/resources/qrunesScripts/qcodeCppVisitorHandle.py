from qcode.qcodeParser import qcodeParser
from qcodeHandleUtils import qcodeFileManager
from qcodeVisitorHandle import qcodeVisitorHandle
import string



#CppParseTreeVisitor
class qcodeCppVisitorHandle(qcodeVisitorHandle):

    def __init__(self, fileManager:qcodeFileManager):
        self.fn = fileManager
        self.fn.createCppImport()

        self.inline_get = 0
        self.is_func_paras = 0#是否添加进函数参数
        self.func_paras = []#函数参数
        self.FUNCTION_RETURN_TYPE_DECLARATOR = None#返回类型
        self.GET_INSIDE_EXP = None#insert方法使用
        self.is_call_back_construct = 0
        self.qif_determine = {'is_fist_qif':0,'qif_parent_count':0,'qif_true_branch_name':'','qif_false_branch_name':'',
                              'qif_branch_name':''\
                             ,'qif_node_name':'','qif_parent_name':''}#qif语句判断使用
        self.qwhile_determine = {'is_fist_qwhile':0,'qwhile_parent_count':0,
                                 'qif_false_branch_name':'',
                             'qwhile_branch_name':''\
                             ,'qwhile_parent_name':''}#qwhile语句判断使用
        self.qif_or_qwhile = 0 #qif为0qwhile为1

    def __enter__(self):
            return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.fn.createCppEnd()

    # Visit a parse tree produced by qcodeParser#declaration.
    def visitDeclaration(self, ctx:qcodeParser.DeclarationContext):
        if ctx.include_declaration() is not None:
            self.visitInclude_declaration(ctx.include_declaration())
        elif ctx.variable_declaration() is not None:
            self.visitVariable_declaration(ctx.variable_declaration())
        elif ctx.function_declaration() is not None:
            self.visitFunction_declaration(ctx.function_declaration())


    # Visit a parse tree produced by qcodeParser#include_declaration.
    def visitInclude_declaration(self, ctx:qcodeParser.Include_declarationContext):
        if ctx.INCLUDE() is not None:
            self.fn.write(str(ctx.INCLUDE()))
            self.visitInclude_sign(ctx.include_sign())
            self.visitSingle_expression(ctx.single_expression(),0)
            self.visitInclude_sign(ctx.include_sign())


    # Visit a parse tree produced by qcodeParser#include_sign.
    def visitInclude_sign(self, ctx:qcodeParser.Include_signContext):
        if ctx.getText() is not None:
            self.fn.write(str(ctx.getText()))


    # Visit a parse tree produced by qcodeParser#variable_declaration.
    def visitVariable_declaration(self, ctx:qcodeParser.Variable_declarationContext):
        if ctx.declaration_variable() is not None:
            self.visitDeclaration_variable(ctx.declaration_variable(),0)
        elif ctx.parameter_declaration() is not None:
            self.visitParameter_declaration(ctx.parameter_declaration())


    # Visit a parse tree produced by qcodeParser#parameter_declaration.
    def visitParameter_declaration(self, ctx:qcodeParser.Parameter_declarationContext):
        self.visitParameter_specifier(ctx.parameter_specifier())
        self.fn.createBlank()
        self.fn.write(str(ctx.Identifier()))
        if self.is_func_paras == 1:
            self.func_paras.append(str(ctx.Identifier()))


    # Visit a parse tree produced by qcodeParser#parameter_specifier.
    def visitParameter_specifier(self, ctx:qcodeParser.Parameter_specifierContext):
        if ctx.auxiliary_primary_type() is not None:
            self.visitAuxiliary_primary_type(ctx.auxiliary_primary_type())
        elif ctx.quantum_primary_type() is not None:
            self.visitQuantum_primary_type(ctx.quantum_primary_type())
        elif ctx.classical_primary_type() is not None:
            self.visitClassical_primary_type(ctx.classical_primary_type())
        elif ctx.array_construct_type() is not None:
            if ctx.array_construct_type().getText() == 'vector<qubit>':
                self.fn.write('QVec')
            else:
                self.visitArray_construct_type(ctx.array_construct_type())
        elif ctx.call_back_construct_type() is not None:
            self.is_call_back_construct = 0
            self.visitCall_back_construct_type(ctx.call_back_construct_type())
        elif ctx.quantum_alg_built_in_type() is not None:
            self.visitQuantum_alg_built_in_type(ctx.quantum_alg_built_in_type())


    # Visit a parse tree produced by qcodeParser#quantum_alg_built_in_type.
    def visitQuantum_alg_built_in_type(self, ctx:qcodeParser.Quantum_alg_built_in_typeContext):
        if ctx.HAMILTONIAN() is not None:
            self.fn.write(str(ctx.HAMILTONIAN()))
        elif ctx.AVAR() is not None:
            self.fn.write(str(ctx.AVAR()))



    # Visit a parse tree produced by qcodeParser#auxiliary_primary_type.
    def visitAuxiliary_primary_type(self, ctx:qcodeParser.Auxiliary_primary_typeContext):
        if ctx.INT() is not None:
            self.fn.write(str(ctx.INT()))
            self.fn.createBlank()
        elif ctx.DOUBLE() is not None:
            self.fn.write(str(ctx.DOUBLE()))
            self.fn.createBlank()
        elif ctx.BOOL() is not None:
            self.fn.write(str(ctx.BOOL()))
            self.fn.createBlank()


    # Visit a parse tree produced by qcodeParser#quantum_circuit_type.
    def visitQuantum_circuit_type(self, ctx:qcodeParser.Quantum_circuit_typeContext):
        if ctx.CIRCUIT() is not None:
            self.FUNCTION_RETURN_TYPE_DECLARATOR = 'circuit'
            self.fn.write('QCircuit ')
        elif ctx.VARIATIONALCIRCUIT() is not None:
            self.FUNCTION_RETURN_TYPE_DECLARATOR = 'variationalCircuit'
            self.fn.write(str(ctx.VARIATIONALCIRCUIT()))


    # Visit a parse tree produced by qcodeParser#quantum_prog_type.
    def visitQuantum_prog_type(self, ctx:qcodeParser.Quantum_prog_typeContext):
        if ctx.QPROG() is not None:
            self.fn.write(str(ctx.QPROG()))


    # Visit a parse tree produced by qcodeParser#quantum_primary_type.
    def visitQuantum_primary_type(self, ctx:qcodeParser.Quantum_primary_typeContext):
        if ctx.QUBIT() is not  None:
            self.fn.write('Qubit* ')


    # Visit a parse tree produced by qcodeParser#classical_primary_type.
    def visitClassical_primary_type(self, ctx:qcodeParser.Classical_primary_typeContext):
        if ctx.CBIT() is not  None:
            self.fn.write('ClassicalCondition')

    # Visit a parse tree produced by qcodeParser#array_construct_type.
    def visitArray_construct_type(self, ctx:qcodeParser.Array_construct_typeContext):
        if ctx.VECTOR() is not None:
            self.fn.write(str(ctx.VECTOR()))
            self.fn.write(str(ctx.LT()))
            self.visitConstruct_primary_type(ctx.construct_primary_type())
            self.fn.write(str(ctx.GT()))
            self.fn.createBlank()
        elif ctx.MAP() is not None:
            self.fn.write(str(ctx.MAP()))
            self.fn.createBlank()


    # Visit a parse tree produced by qcodeParser#construct_primary_type.
    def visitConstruct_primary_type(self, ctx:qcodeParser.Construct_primary_typeContext):
        if ctx.auxiliary_primary_type() is not None:
            self.visitAuxiliary_primary_type(ctx.auxiliary_primary_type())
        elif ctx.quantum_primary_type() is not None:
            self.visitQuantum_primary_type(ctx.quantum_primary_type())
        elif ctx.classical_primary_type() is not None:
            self.visitClassical_primary_type(ctx.classical_primary_type())
        elif ctx.MAP() is not None:
            self.fn.write(str(ctx.MAP()))


    # Visit a parse tree produced by qcodeParser#call_back_construct_type.
    def visitCall_back_construct_type(self, ctx:qcodeParser.Call_back_construct_typeContext):
        if self.is_call_back_construct == 1:
            self.fn.write('using QGEN =  ')
            self.fn.write('Oracle')
            self.fn.write('<')
            self.visitCall_back_primary_type_list(ctx.call_back_primary_type_list())
            self.fn.write('>;')
            self.fn.createline()
            self.fn.createline()
            self.fn.createline()
            self.fn.write('QGEN ')

        else:
            self.fn.write('QCircuit')
            self.visitCall_back_primary_type_list(ctx.call_back_primary_type_list())
            self.fn.write(str(ctx.GT()))
    # Visit a parse tree produced by qcodeParser#call_back_primary_type_list.
    def visitCall_back_primary_type_list(self, ctx:qcodeParser.Call_back_primary_type_listContext):
        if ctx.call_back_primary_type_list() is not None:
            self.visitCall_back_primary_type_list(ctx.call_back_primary_type_list())
            self.fn.write(str(ctx.COMMA()))
            self.visitCall_back_primary_type(ctx.call_back_primary_type())
        else:
            self.visitCall_back_primary_type(ctx.call_back_primary_type())

    # Visit a parse tree produced by qcodeParser#call_back_primary_type.
    def visitCall_back_primary_type(self, ctx:qcodeParser.Call_back_primary_typeContext):
        if ctx.auxiliary_primary_type() is not None:
            self.visitAuxiliary_primary_type(ctx.auxiliary_primary_type())
        elif ctx.quantum_primary_type() is not None:
            self.visitQuantum_primary_type(ctx.quantum_primary_type())
        elif ctx.classical_primary_type() is not None:
            self.visitClassical_primary_type(ctx.classical_primary_type())
        elif ctx.array_construct_type() is not None:
            if ctx.array_construct_type().getText() == 'vector<qubit>':
                self.fn.write('QVec')
            else:
                self.visitArray_construct_type(ctx.array_construct_type())
        elif ctx.call_back_construct_type() is not None:
            self.is_call_back_construct = 0
            self.visitCall_back_construct_type(ctx.call_back_construct_type())#+++


    # Visit a parse tree produced by qcodeParser#declaration_variable.
    def visitDeclaration_variable(self, ctx:qcodeParser.Declaration_variableContext,scope_ident):
        ident = scope_ident
        self.visitVariable_decl_specifier(ctx.variable_decl_specifier())
        self.visitInit_declaratorlist(ctx.init_declaratorlist(),ident)
        self.fn.write(str(ctx.SEMI()))


    # Visit a parse tree produced by qcodeParser#variable_decl_specifier.
    def visitVariable_decl_specifier(self, ctx:qcodeParser.Variable_decl_specifierContext):
        if ctx.common_specifier() is not None:
            self.visitCommon_specifier(ctx.common_specifier())
        elif ctx.array_construct_type() is not None:
            if ctx.array_construct_type().getText() == 'vector<qubit>':
                self.fn.write('QVec ')
            else:
                self.visitArray_construct_type(ctx.array_construct_type())


    # Visit a parse tree produced by qcodeParser#common_specifier.
    def visitCommon_specifier(self, ctx:qcodeParser.Common_specifierContext):
        self.fn.write('auto ')



    # Visit a parse tree produced by qcodeParser#init_declaratorlist.
    def visitInit_declaratorlist(self, ctx:qcodeParser.Init_declaratorlistContext,scope_ident):
        ident = scope_ident
        if ctx.variable_declarator() is not None:
            if ctx.init_declaratorlist() is not None:
                self.visitInit_declaratorlist(ctx.init_declaratorlist(),ident)
                self.fn.write(str(ctx.COMMA()))
                self.visitVariable_declarator(ctx.variable_declarator(),ident)
            else:
                self.visitVariable_declarator(ctx.variable_declarator(),ident)


    # Visit a parse tree produced by qcodeParser#variable_declarator.
    def visitVariable_declarator(self, ctx:qcodeParser.Variable_declaratorContext,scope_ident):
        ident = scope_ident
        # self.fn.createIdent(ident)
        self.fn.write(str(ctx.Identifier()))
        if ctx.ASSIGN() is not None:
            self.fn.write(str(ctx.ASSIGN()))
            self.visitVariableInitializer(ctx.variableInitializer(),ident)


    # Visit a parse tree produced by qcodeParser#variableInitializer.
    def visitVariableInitializer(self, ctx:qcodeParser.VariableInitializerContext,scope_ident):
        ident = scope_ident
        if ctx.single_expression() is not None:
            if ctx.variableInitializer() is not None:
                self.visitVariableInitializer(ctx.variableInitializer(),ident)
                self.fn.write(str(ctx.COMMA()))
                self.visitSingle_expression(ctx.single_expression(),ident)
            else:
                self.visitSingle_expression(ctx.single_expression(),ident)



    # Visit a parse tree produced by qcodeParser#function_declaration.
    def visitFunction_declaration(self, ctx:qcodeParser.Function_declarationContext):
        self.visitDeclarate_function(ctx.declarate_function())
        self.fn.write(str(ctx.SEMI()))


    # Visit a parse tree produced by qcodeParser#declarate_function.
    def visitDeclarate_function(self, ctx:qcodeParser.Declarate_functionContext):
        if ctx.function_return_type_declarator() is not None:
            self.visitFunction_return_type_declarator(ctx.function_return_type_declarator())
            if self.is_call_back_construct == 1:
                self.is_func_paras = 1
                self.visitFunction_declarator(ctx.function_declarator())
                self.fn.write(';')
                self.fn.createline()
                self.fn.createline()
                self.fn.write('QGEN ')
        else:
            self.fn.write('QProg ')
        self.is_func_paras = 0
        self.visitFunction_declarator(ctx.function_declarator())

    # Visit a parse tree produced by qcodeParser#function_return_type_declarator.
    def visitFunction_return_type_declarator(self, ctx:qcodeParser.Function_return_type_declaratorContext):
        if ctx.quantum_prog_type() is not None:
            self.FUNCTION_RETURN_TYPE_DECLARATOR = 'quantum_prog'
            self.visitQuantum_prog_type(ctx.quantum_prog_type())
        elif ctx.quantum_circuit_type() is not None:
            self.visitQuantum_circuit_type(ctx.quantum_circuit_type())
        elif ctx.auxiliary_primary_type() is not None:
            self.FUNCTION_RETURN_TYPE_DECLARATOR = 'auxiliary'
            self.visitAuxiliary_primary_type(ctx.auxiliary_primary_type())
        elif ctx.classical_primary_type() is not None:
            self.FUNCTION_RETURN_TYPE_DECLARATOR = 'classical'
            self.visitClassical_primary_type(ctx.classical_primary_type())
        elif ctx.array_construct_type() is not None:
            self.FUNCTION_RETURN_TYPE_DECLARATOR = 'array'
            if ctx.array_construct_type().getText() == 'vector<qubit>':
                self.fn.write('QVec')
            else:
                self.visitArray_construct_type(ctx.array_construct_type())
        elif ctx.call_back_construct_type() is not None:
            self.is_call_back_construct = 1
            self.FUNCTION_RETURN_TYPE_DECLARATOR = 'call_back_construct'
            self.visitCall_back_construct_type(ctx.call_back_construct_type())


    # Visit a parse tree produced by qcodeParser#function_declarator.
    def visitFunction_declarator(self, ctx:qcodeParser.Function_declaratorContext):
        self.visitFunction_name(ctx.function_name())
        self.fn.write(str(ctx.LPAREN()))
        self.visitParameter_decl_list(ctx.parameter_decl_list())
        self.fn.write(str(ctx.RPAREN()))




    # Visit a parse tree produced by qcodeParser#function_name.
    def visitFunction_name(self, ctx:qcodeParser.Function_nameContext):
        self.fn.write(str(ctx.Identifier()))


    # Visit a parse tree produced by qcodeParser#parameter_decl_list.
    def visitParameter_decl_list(self, ctx:qcodeParser.Parameter_decl_listContext):
        if ctx.parameter_declaration() is not None:
            if ctx.parameter_decl_list() is not None:
                self.visitParameter_decl_list(ctx.parameter_decl_list())
                self.fn.write(str(ctx.COMMA()))
                self.visitParameter_declaration(ctx.parameter_declaration())
            else:
                self.visitParameter_declaration(ctx.parameter_declaration())



    # Visit a parse tree produced by qcodeParser#expression_list.
    def visitExpression_list(self, ctx:qcodeParser.Expression_listContext,scope_ident):
        ident = scope_ident
        if ctx.single_expression() is not None:
            if ctx.expression_list() is not None:
                self.visitExpression_list(ctx.expression_list(),ident)
                self.fn.write(str(ctx.COMMA()))
            self.visitSingle_expression(ctx.single_expression(),ident)
    # Visit a parse tree produced by qcodeParser#vector_expression.
    def visitVector_expression(self, ctx:qcodeParser.Vector_expressionContext,scope_ident):
        ident = scope_ident
        if ctx.single_expression() is not None:
            self.visitSingle_expression(ctx.single_expression(),ident)
        elif ctx.vector_slice() is not None:
            self.visitVector_slice(ctx.vector_slice(),ident)


    # Visit a parse tree produced by qcodeParser#vector_slice.
    def visitVector_slice(self, ctx:qcodeParser.Vector_sliceContext,scope_ident):
        ident = scope_ident
        self.visitSingle_expression(ctx.single_expression(0),ident)
        self.fn.write(',')
        self.visitSingle_expression(ctx.single_expression(1),ident)


    # Visit a parse tree produced by qcodeParser#single_expression.
    def visitSingle_expression(self, ctx:qcodeParser.Single_expressionContext,scope_ident):
        ident = scope_ident
        if list == type(ctx.single_expression()):
            if 2 == len(ctx.single_expression()):
                if ctx.DOT() is not None:
                    self.visitSingle_expression(ctx.single_expression(0),ident)
                    self.fn.write(str(ctx.DOT()))
                    self.visitSingle_expression(ctx.single_expression(1),ident)

                elif ctx.multiplicative_op()  is not None:
                    self.visitSingle_expression(ctx.single_expression(0),ident)
                    self.visitMultiplicative_op(ctx.multiplicative_op())
                    self.visitSingle_expression(ctx.single_expression(1),ident)
                elif ctx.additive_op()  is not None:
                    self.visitSingle_expression(ctx.single_expression(0),ident)
                    self.visitAdditive_op(ctx.additive_op())
                    self.visitSingle_expression(ctx.single_expression(1),ident)
                elif ctx.shift_op()  is not None:
                    self.visitSingle_expression(ctx.single_expression(0),ident)
                    self.visitShift_op(ctx.shift_op())
                    self.visitSingle_expression(ctx.single_expression(1),ident)
                elif ctx.relationship_op() is not None:
                    self.visitSingle_expression(ctx.single_expression(0),ident)
                    self.visitRelationship_op(ctx.relationship_op())
                    self.visitSingle_expression(ctx.single_expression(1),ident)
                elif ctx.equal_op() is not None:
                    self.visitSingle_expression(ctx.single_expression(0),ident)
                    self.fn.createBlank()
                    self.visitEqual_op(ctx.equal_op())
                    self.visitSingle_expression(ctx.single_expression(1),ident)
                    self.fn.createBlank()
                elif ctx.logic_op() is not None:
                    self.visitSingle_expression(ctx.single_expression(0),ident)
                    self.visitLogic_op(ctx.logic_op())
                    self.visitSingle_expression(ctx.single_expression(1),ident)
                elif ctx.QUE_MARK() is not None:
                    self.visitSingle_expression(ctx.single_expression(0),ident)
                    self.fn.write(str(ctx.QUE_MARK()))
                    self.visitSingle_expression(ctx.single_expression(1),ident)
                    self.fn.write(str(ctx.COLON()))
                    self.visitSingle_expression(ctx.single_expression(2),ident)
                elif ctx.assign_op() is not None:
                    # self.fn.createIdent(ident)
                    self.visitSingle_expression(ctx.single_expression(0),ident)
                    self.visitAssign_op(ctx.assign_op())
                    self.visitSingle_expression(ctx.single_expression(1),ident)


            elif 1 == len(ctx.single_expression()):
                if ctx.LBRACK() is not None:
                    self.visitSingle_expression(ctx.single_expression(0),ident)
                    self.fn.write(str(ctx.LBRACK()))
                    self.visitVector_expression(ctx.vector_expression(),ident)
                    self.fn.write(str(ctx.RBRACK()))
                elif ctx.LPAREN()  is not None:
                    print(ctx.function_call_exp.getText()[-6:])
                    if ctx.function_call_exp.getText()[-5:] == '.size':
                        self.visitSingle_expression(ctx.single_expression(0),ident)
                        self.fn.write(str(ctx.LPAREN()))
                        if ctx.expression_list() is not  None:
                            self.visitExpression_list(ctx.expression_list(),ident)
                        self.fn.write(str(ctx.RPAREN()))
                    elif ctx.function_call_exp.getText()[-7:] == '.length':
                        self.fn.write(ctx.function_call_exp.getText()[:-7]+'.size')
                        self.fn.write(str(ctx.LPAREN()))
                        if ctx.expression_list() is not  None:
                            self.visitExpression_list(ctx.expression_list(),ident)
                        self.fn.write(str(ctx.RPAREN()))
                    elif ctx.function_call_exp.getText()[-4:] == '.add':
                        self.fn.write(ctx.function_call_exp.getText()[:-4]+'.push_back')
                        self.fn.write(str(ctx.LPAREN()))
                        if ctx.expression_list() is not  None:
                            self.visitExpression_list(ctx.expression_list(),ident)
                        self.fn.write(str(ctx.RPAREN()))
                    elif ctx.function_call_exp.getText()[-7:] == '.append':
                        self.fn.write(ctx.function_call_exp.getText()[:-7]+'.push_back')
                        self.fn.write(str(ctx.LPAREN()))
                        if ctx.expression_list() is not  None:
                            self.visitExpression_list(ctx.expression_list(),ident)
                        self.fn.write(str(ctx.RPAREN()))
                    elif ctx.function_call_exp.getText()[-7:] == '.insert':
                        self.visitSingle_expression(ctx.single_expression(0),ident)
                        self.fn.write(str(ctx.LPAREN()))
                        if ctx.expression_list() is not  None:
                            new_str = ctx.expression_list().getText()
                            str_arr = new_str.split(',')
                            func_name = new_str[0]
                            self.fn.write(ctx.function_call_exp.get_inside_exp.getText() + '.begin(), ')
                            self.fn.write(func_name + '.begin()+'+ str_arr[1] + ', ')
                            self.fn.write(func_name + '.begin()+'+ str_arr[2] + ')')
                    elif ctx.function_call_exp.getText()[-7:] == '.dagger':
                        self.visitSingle_expression(ctx.single_expression(0),ident)
                        self.fn.write('()')
                    elif ctx.function_call_exp.getText()[-9:] == '.getFirst':
                        self.fn.write(ctx.function_call_exp.getText()[:-9]+'.fist')
                    elif ctx.function_call_exp.getText()[-10:] == '.getSecond':
                        self.fn.write(ctx.function_call_exp.getText()[:-10]+'.second')
                    elif ctx.function_call_exp.getText()[-6:] == '.first':
                        self.visitSingle_expression(ctx.single_expression(0),ident)
                    elif ctx.function_call_exp.getText()[-7:] == '.second':
                        self.visitSingle_expression(ctx.single_expression(0),ident)
                    elif ctx.function_call_exp.getText()[-7:] == '.remove':
                        self.fn.write(ctx.function_call_exp.getText()[:-7]+'.erase')
                        self.fn.write(str(ctx.LPAREN()))
                        if ctx.expression_list() is not  None:
                            new_str = ctx.expression_list().getText()
                            str_arr = new_str.split(',')
                            self.fn.write(ctx.function_call_exp.get_inside_exp.getText() + '.begin()+' + str_arr[0] + ', ')
                            self.fn.write(ctx.function_call_exp.get_inside_exp.getText()+ '.begin()+' + str_arr[0] + '+1)')
                    else:
                        if self.inline_get==0:
                            if self.qif_determine['is_fist_qif'] > 0 or self.qwhile_determine['is_fist_qwhile'] > 0:
                                if self.qif_or_qwhile == 0:
                                    self.fn.write(self.qif_determine['qif_branch_name']+' << ')
                                elif self.qif_or_qwhile == 1:
                                    self.fn.write(self.qwhile_determine['qwhile_branch_name']+' << ')
                            else:
                                if self.FUNCTION_RETURN_TYPE_DECLARATOR == 'circuit' or \
                                                self.FUNCTION_RETURN_TYPE_DECLARATOR == 'call_back_construct' or \
                                                self.FUNCTION_RETURN_TYPE_DECLARATOR == 'variationalCircuit':
                                    self.fn.write('qCircuit << ')
                                elif self.FUNCTION_RETURN_TYPE_DECLARATOR == 'quantum_prog' or \
                                                self.FUNCTION_RETURN_TYPE_DECLARATOR is None:
                                    self.fn.write('prog << ')
                            self.inline_get = 1
                            self.visitSingle_expression(ctx.single_expression(0),ident)
                            self.inline_get = 0
                        else:
                            self.visitSingle_expression(ctx.single_expression(0),ident)
                        if ctx.expression_list() is not  None:
                            self.fn.write(str(ctx.LPAREN()))
                            self.visitExpression_list(ctx.expression_list(),ident)
                            self.fn.write(')')



                elif ctx.INC() is not None:
                    self.visitSingle_expression(ctx.single_expression(0),ident)
                    self.fn.write(str(ctx.INC()))
                elif ctx.DEC()  is not None:
                    self.visitSingle_expression(ctx.single_expression(0),ident)
                    self.fn.write(str(ctx.DEC()))
                elif ctx.unary_op()  is not None:
                    self.visitUnary_op(ctx.unary_op())
                    self.visitSingle_expression(ctx.single_expression(0),ident)


            else:
                if ctx.LBRACK() is not None:
                    self.fn.write(str(ctx.LBRACK()))
                    if ctx.expression_list()  is not None:
                        self.visitExpression_list(ctx.expression_list(),ident)
                    self.fn.write(str(ctx.RBRACK()))
                elif ctx.LPAREN()  is not None:
                    self.fn.write(str(ctx.LPAREN()))
                    if ctx.expression_list()  is not None:
                        self.visitExpression_list(ctx.expression_list(),ident)
                    self.fn.write(str(ctx.RPAREN()))
                elif ctx.lambda_exp() is not None:
                    self.visitLambda_exp(ctx.lambda_exp())
                elif ctx.Identifier() is not None:
                    identifierText = str(ctx.Identifier())
                    self.fn.write(identifierText)
                elif ctx.constant() is not None:
                    self.visitConstant(ctx.constant())
                elif ctx.key_words() is not None:
                    self.visitKey_words(ctx.key_words())
                elif ctx.PI() is not None:
                    self.fn.write('3.14159265358979')


    # Visit a parse tree produced by qcodeParser#lambda_exp.
    def visitLambda_exp(self, ctx:qcodeParser.Lambda_expContext):
        if ctx.LAMBDA() is not None:
            self.fn.write('[')
            func_paras_str = ''
            for parameters in self.func_paras:
                func_paras_str+=','+parameters
            func_paras_str = func_paras_str.strip(string.punctuation)
            self.fn.write(func_paras_str)
            self.fn.write(']')
            self.fn.write(str(ctx.LPAREN()))
            self.visitParameter_decl_list(ctx.parameter_decl_list())
            self.fn.write(str(ctx.RPAREN()))
            self.visitLambda_body(ctx.lambda_body())



    # Visit a parse tree produced by qcodeParser#lambda_body.
    def visitLambda_body(self, ctx:qcodeParser.Lambda_bodyContext):
        ident = 1
        self.fn.write('{')
        self.fn.createline()
        self.fn.createIdent(2)
        if self.FUNCTION_RETURN_TYPE_DECLARATOR == 'call_back_construct':
            self.fn.write('QCircuit qCircuit;')
        self.visitCompound_statement(ctx.compound_statement(),ident)
        self.fn.createline()
        self.fn.createIdent(2)
        self.fn.write('return qCircuit;')
        self.fn.createLineTab()
        self.fn.write('}')

    # Visit a parse tree produced by qcodeParser#additive_op.
    def visitAdditive_op(self, ctx:qcodeParser.Additive_opContext):
        if ctx.SUB() is not None:
            self.fn.write(str(ctx.SUB()))
        elif ctx.ADD() is not None:
            self.fn.write(str(ctx.ADD()))


    # Visit a parse tree produced by qcodeParser#multiplicative_op.
    def visitMultiplicative_op(self, ctx:qcodeParser.Multiplicative_opContext):
        if ctx.MUL() is not None:
            self.fn.write(str(ctx.MUL()))
        elif ctx.DIV() is not None:
            self.fn.write(str(ctx.DIV()))
        elif ctx.MOD() is not None:
            self.fn.write(str(ctx.MOD()))

    # Visit a parse tree produced by qcodeParser#shift_op.
    def visitShift_op(self, ctx:qcodeParser.Shift_opContext):
        if ctx.SHIFT_LEFT() is not None:
            self.fn.write(str(ctx.SHIFT_LEFT()))
        elif ctx.SHIFT_RIGHT() is not None:
            self.fn.write(str(ctx.SHIFT_RIGHT()))


    # Visit a parse tree produced by qcodeParser#assign_op.
    def visitAssign_op(self, ctx:qcodeParser.Assign_opContext):
        if ctx.ASSIGN() is not None:
            self.fn.write(str(ctx.ASSIGN()))
        elif ctx.ADD_ASSIGN() is not None:
            self.fn.write(str(ctx.ADD_ASSIGN()))
        elif ctx.SUB_ASSIGN() is not None:
            self.fn.write(str(ctx.SUB_ASSIGN()))
        elif ctx.MUL_ASSIGN() is not None:
            self.fn.write(str(ctx.MUL_ASSIGN()))
        elif ctx.DIV_ASSIGN() is not None:
            self.fn.write(str(ctx.DIV_ASSIGN()))
        elif ctx.MOD_ASSIGN() is not None:
            self.fn.write(str(ctx.MOD_ASSIGN()))


    # Visit a parse tree produced by qcodeParser#equal_op.
    def visitEqual_op(self, ctx:qcodeParser.Equal_opContext):
        if ctx.EQUAL() is not None:
            self.fn.createBackSpace(str(ctx.EQUAL()))
        elif ctx.NOTEQUAL() is not None:
            self.fn.createBackSpace(str(ctx.NOTEQUAL()))


    # Visit a parse tree produced by qcodeParser#relationship_op.
    def visitRelationship_op(self, ctx:qcodeParser.Relationship_opContext):
        if ctx.LT() is not None:
            self.fn.write(str(ctx.LT()))
        elif ctx.LE() is not None:
            self.fn.write(str(ctx.LE()))
        elif ctx.GT() is not None:
            self.fn.write(str(ctx.GT()))
        elif ctx.GE() is not None:
            self.fn.write(str(ctx.GE()))


    # Visit a parse tree produced by qcodeParser#logic_op.
    def visitLogic_op(self, ctx:qcodeParser.Logic_opContext):
        if ctx.LOGIC_AND() is not None:
            self.fn.createBackSpace(str(ctx.LOGIC_AND()))
        elif ctx.LOGIC_OR() is not None:
            self.fn.createBackSpace(str(ctx.LOGIC_OR() ))


    # Visit a parse tree produced by qcodeParser#unary_op.
    def visitUnary_op(self, ctx:qcodeParser.Unary_opContext):
        if ctx.TILDE() is not None:
            self.fn.write(str(ctx.TILDE()))
        elif ctx.BANG() is not None:
            self.fn.write(str(ctx.BANG()))
        elif ctx.INC() is not None:
            self.fn.write(str(ctx.INC()))
        elif ctx.DEC() is not None:
            self.fn.write(str(ctx.DEC()))
        elif ctx.SUB() is not None:
            self.fn.write(str(ctx.SUB()))


    # Visit a parse tree produced by qcodeParser#statement.
    def visitStatement(self, ctx:qcodeParser.StatementContext,scope_ident):
        ident = scope_ident
        if ctx.expression_statement() is not None:
            self.visitExpression_statement(ctx.expression_statement(),ident)
        elif ctx.empty_statement() is not None:
            self.visitEmpty_statement(ctx.empty_statement(),ident)
        elif ctx.declaration_variable_statement() is not None:
            self.visitDeclaration_variable_statement(ctx.declaration_variable_statement(),ident)
        elif ctx.compound_statement() is not None:
            self.visitCompound_statement(ctx.compound_statement(),ident)
        elif ctx.select_statement() is not None:
            ident += 1
            self.visitSelect_statement(ctx.select_statement(),ident)
            ident -= 1
        elif ctx.iterate_statement() is not None:
            ident += 1
            self.visitIterate_statement(ctx.iterate_statement(),ident)
            ident += 1
        elif ctx.qif_statement() is not None:
            self.visitQif_statement(ctx.qif_statement(),ident)
        elif ctx.qwhile_statement() is not None:
            self.visitQwhile_statement(ctx.qwhile_statement(),ident)
        elif ctx.return_statement() is not None:
            self.visitReturn_statement(ctx.return_statement(),ident)



    # Visit a parse tree produced by qcodeParser#return_statement.
    def visitReturn_statement(self, ctx:qcodeParser.Return_statementContext,scope_ident):
        ident = scope_ident
        self.fn.createBackSpace(str(ctx.RETURN()))
        self.visitStatement(ctx.statement(),ident)


    # Visit a parse tree produced by qcodeParser#qif_statement.
    def visitQif_statement(self, ctx:qcodeParser.Qif_statementContext,scope_ident):
        ident = scope_ident
        if ctx.QELSE() is not None:
            is_fist_qif = self.qif_determine['is_fist_qif']

            qif_parent_name = self.qif_determine['qif_parent_name']
            qwhile_parent_name = self.qwhile_determine['qwhile_parent_name']
            if qwhile_parent_name != '' :
                qif_parent_name = qwhile_parent_name
            if qif_parent_name == '':
                if self.FUNCTION_RETURN_TYPE_DECLARATOR == 'circuit' or \
                                self.FUNCTION_RETURN_TYPE_DECLARATOR == 'call_back_construct' or \
                                self.FUNCTION_RETURN_TYPE_DECLARATOR == 'variationalCircuit':
                    qif_parent_name = 'qCircuit'
                elif self.FUNCTION_RETURN_TYPE_DECLARATOR == 'quantum_prog' or \
                                self.FUNCTION_RETURN_TYPE_DECLARATOR is None:
                    qif_parent_name = 'prog'

            if is_fist_qif==0:
                self.qif_determine['qif_parent_count'] = self.qif_determine['qif_parent_count']+1
                self.qif_determine['qif_true_branch_name']= 'qif_true_branch'+str(self.qif_determine['qif_parent_count'])
                self.qif_determine['qif_false_branch_name']= 'qif_false_branch'+str(self.qif_determine['qif_parent_count'])
                self.qif_determine['qif_node_name']= 'qif_node_prog'+str(self.qif_determine['qif_parent_count'])
            else:
                self.qif_determine['qif_true_branch_name'] = self.qif_determine['qif_true_branch_name']+'_1'
                self.qif_determine['qif_false_branch_name'] = self.qif_determine['qif_false_branch_name']+'_1'
                self.qif_determine['qif_node_name'] = self.qif_determine['qif_node_name']+'_1'

            qif_true_branch_name = self.qif_determine['qif_true_branch_name']
            self.qif_determine['qif_parent_name'] = qif_true_branch_name
            self.qif_determine['qif_branch_name'] = qif_true_branch_name
            qif_node_name = self.qif_determine['qif_node_name']
            self.fn.write('QProg '+qif_true_branch_name+' = CreateEmptyQProg();')
            self.visitQif_true_branch(ctx.qif_true_branch(),ident)

            self.fn.createline()
            self.fn.createIdent(ident+1)
            qif_false_branch_name = self.qif_determine['qif_false_branch_name']
            self.qif_determine['qif_parent_name'] = qif_false_branch_name
            self.qif_determine['qif_branch_name'] = qif_false_branch_name
            self.fn.write('QProg '+qif_false_branch_name+' = CreateEmptyQProg();')
            self.visitQif_false_branch(ctx.qif_false_branch(),ident)

            self.fn.createline()
            self.fn.createIdent(ident+1)
            self.fn.write('QIfProg '+qif_node_name+' = CreateIfProg(')
            self.visitSingle_expression(ctx.single_expression(),ident)
            self.fn.write(',' +qif_true_branch_name+',' +qif_false_branch_name+');')
            self.fn.createline()
            self.fn.createIdent(ident+1)
            self.fn.write(qif_parent_name+' << '+qif_node_name+';')




        else:
            is_fist_qif = self.qif_determine['is_fist_qif']

            qif_parent_name = self.qif_determine['qif_parent_name']
            qwhile_parent_name = self.qwhile_determine['qwhile_parent_name']
            if qwhile_parent_name != '' :
                qif_parent_name = qwhile_parent_name
            if qif_parent_name == '':
                if self.FUNCTION_RETURN_TYPE_DECLARATOR == 'circuit' or \
                                self.FUNCTION_RETURN_TYPE_DECLARATOR == 'call_back_construct' or \
                                self.FUNCTION_RETURN_TYPE_DECLARATOR == 'variationalCircuit':
                    qif_parent_name = 'qCircuit'
                elif self.FUNCTION_RETURN_TYPE_DECLARATOR == 'quantum_prog' or \
                                self.FUNCTION_RETURN_TYPE_DECLARATOR is None:
                    qif_parent_name = 'prog'

            if is_fist_qif==0:
                self.qif_determine['qif_parent_count'] = self.qif_determine['qif_parent_count']+1
                self.qif_determine['qif_true_branch_name']= 'qif_true_branch'+str(self.qif_determine['qif_parent_count'])
                self.qif_determine['qif_false_branch_name']= 'qif_false_branch'+str(self.qif_determine['qif_parent_count'])
                self.qif_determine['qif_node_name']= 'qif_node_prog'+str(self.qif_determine['qif_parent_count'])
            else:
                self.qif_determine['qif_true_branch_name'] = self.qif_determine['qif_true_branch_name']+'_1'
                self.qif_determine['qif_false_branch_name'] = self.qif_determine['qif_false_branch_name']+'_1'
                self.qif_determine['qif_node_name'] = self.qif_determine['qif_node_name']+'_1'

            qif_true_branch_name = self.qif_determine['qif_true_branch_name']
            self.qif_determine['qif_parent_name'] = qif_true_branch_name
            self.qif_determine['qif_branch_name'] = qif_true_branch_name
            qif_node_name = self.qif_determine['qif_node_name']
            self.fn.write('QProg '+qif_true_branch_name+' = CreateEmptyQProg();')

            self.visitQif_true_branch(ctx.qif_true_branch(),ident)
            self.fn.createline()
            self.fn.createIdent(ident+1)
            self.fn.write('QIfProg '+qif_node_name+' = CreateIfProg(')
            self.visitSingle_expression(ctx.single_expression(),ident)
            self.fn.write(',' +qif_true_branch_name+');')
            self.fn.createline()
            self.fn.createIdent(ident+1)
            self.fn.write(qif_parent_name+' << '+qif_node_name+';')
        self.qif_determine['qif_parent_name'] = ''
    # Visit a parse tree produced by qcodeParser#qif_true_branch.
    def visitQif_true_branch(self, ctx:qcodeParser.Qif_true_branchContext,scope_ident):
        ident = scope_ident
        self.qif_or_qwhile = 0
        self.qif_determine['is_fist_qif'] = self.qif_determine['is_fist_qif'] + 1
        self.visitStatement_list(ctx.statement_list(),ident)
        self.qif_determine['is_fist_qif'] = self.qif_determine['is_fist_qif'] - 1

    # Visit a parse tree produced by qcodeParser#qif_false_branch.
    def visitQif_false_branch(self, ctx:qcodeParser.Qif_false_branchContext,scope_ident):
        ident = scope_ident
        self.qif_or_qwhile = 0
        self.qif_determine['is_fist_qif'] = self.qif_determine['is_fist_qif'] + 1
        self.visitStatement_list(ctx.statement_list(),ident)
        self.qif_determine['is_fist_qif'] = self.qif_determine['is_fist_qif'] - 1

    # Visit a parse tree produced by qcodeParser#qwhile_statement.
    def visitQwhile_statement(self, ctx:qcodeParser.Qwhile_statementContext,scope_ident):
        ident = scope_ident
        is_fist_qwhile = self.qwhile_determine['is_fist_qwhile']
        qwhile_parent_name = self.qwhile_determine['qwhile_parent_name']
        qif_parent_name = self.qif_determine['qif_parent_name']
        if qif_parent_name != '' :
            qwhile_parent_name = qif_parent_name
        if qwhile_parent_name == '':
            if self.FUNCTION_RETURN_TYPE_DECLARATOR == 'circuit' or \
                            self.FUNCTION_RETURN_TYPE_DECLARATOR == 'call_back_construct' or \
                            self.FUNCTION_RETURN_TYPE_DECLARATOR == 'variationalCircuit':
                qwhile_parent_name = 'qCircuit'
            elif self.FUNCTION_RETURN_TYPE_DECLARATOR == 'quantum_prog' or \
                            self.FUNCTION_RETURN_TYPE_DECLARATOR is None:
                qwhile_parent_name = 'prog'

        if is_fist_qwhile==0:
            self.qwhile_determine['qwhile_parent_count'] = self.qwhile_determine['qwhile_parent_count']+1
            self.qwhile_determine['qwhile_branch_name'] = 'qwhile_branch_prog'+str(self.qwhile_determine['qwhile_parent_count'])
            self.qwhile_determine['qwhile_node_name']= 'qwhile_node_prog'+str(self.qwhile_determine['qwhile_parent_count'])
        else:
            self.qwhile_determine['qwhile_branch_name'] = self.qwhile_determine['qwhile_branch_name']+'_1'
            self.qwhile_determine['qwhile_node_name']= self.qwhile_determine['qwhile_node_name']+'_1'
        qwhile_branch_name = self.qwhile_determine['qwhile_branch_name']
        self.qwhile_determine['qwhile_parent_name'] = qwhile_branch_name
        qwhile_node_name = self.qwhile_determine['qwhile_node_name']
        self.fn.write('QProg '+qwhile_branch_name+' = CreateEmptyQProg();')
        self.qif_or_qwhile = 1
        self.qwhile_determine['is_fist_qwhile'] = self.qwhile_determine['is_fist_qwhile'] + 1
        self.visitStatement_list(ctx.statement_list(),ident)
        self.qwhile_determine['is_fist_qwhile'] = self.qwhile_determine['is_fist_qwhile'] - 1
        self.fn.createline()
        self.fn.createIdent(ident+1)
        self.fn.write('auto '+qwhile_node_name+' = CreateWhileProg(')
        self.visitSingle_expression(ctx.single_expression(),ident)
        self.fn.write(',' +qwhile_branch_name+');')
        self.fn.createline()
        self.fn.createIdent(ident+1)
        self.fn.write(qwhile_parent_name+' << '+qwhile_node_name+';')
        self.qwhile_determine['qwhile_parent_name'] = ''

    # Visit a parse tree produced by qcodeParser#expression_statement.
    def visitExpression_statement(self, ctx:qcodeParser.Expression_statementContext,scope_ident):
        ident = scope_ident
        self.visitSingle_expression(ctx.single_expression(),ident)
        self.fn.write(';')



    # Visit a parse tree produced by qcodeParser#empty_statement.
    def visitEmpty_statement(self, ctx:qcodeParser.Empty_statementContext):
        self.fn.write(str(ctx.SEMI()))


    # Visit a parse tree produced by qcodeParser#declaration_variable_statement.
    def visitDeclaration_variable_statement(self, ctx:qcodeParser.Declaration_variable_statementContext,scope_ident):
        ident = scope_ident
        self.visitDeclaration_variable(ctx.declaration_variable(),ident)


    # Visit a parse tree produced by qcodeParser#compound_statement.
    def visitCompound_statement(self, ctx:qcodeParser.Compound_statementContext,scope_ident):
        ident = scope_ident
        if ctx.statement_list() is not  None:
            self.visitStatement_list(ctx.statement_list(),ident)

    # Visit a parse tree produced by qcodeParser#select_statement.
    def visitSelect_statement(self, ctx:qcodeParser.Select_statementContext,scope_ident):
        ident = scope_ident
        self.fn.createBackSpace(str(ctx.IF()))
        self.fn.write(str(ctx.LPAREN()))
        self.visitSingle_expression(ctx.single_expression(),ident)
        self.fn.write(str(ctx.RPAREN())+'{')
        self.visitStatement(ctx.statement(0),ident)
        self.fn.createline()
        self.fn.createIdent(ident)
        self.fn.write('}')
        if ctx.ELSE() is not None:
            ident = ident-1
            if ctx.statement(1).select_statement() is not None:
                self.fn.write('else ')
                self.visitStatement(ctx.statement(1),ident)
            else:
                if len(ctx.statement(1).getText()) > 2:
                    ident = ident+1
                    self.fn.write(str(ctx.ELSE()))
                    self.fn.write('{')
                    self.visitStatement(ctx.statement(1),ident)
                    self.fn.createline()
                    self.fn.createIdent(ident)
                    self.fn.write('}')


    # Visit a parse tree produced by qcodeParser#iterate_statement.
    def visitIterate_statement(self, ctx:qcodeParser.Iterate_statementContext,scope_ident):
        ident = scope_ident
        # self.fn.createIdent(ident-1)
        if ctx.for_stmt() is not None:
            self.fn.createBackSpace(str(ctx.FOR()))
            self.fn.write('(')
            self.visitFor_stmt(ctx.for_stmt(),ident)
            self.fn.write('){')
            self.visitStatement(ctx.statement(),ident)
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write('}')
        elif ctx.inhanced_for_stmt() is not None:
            self.fn.createBackSpace(str(ctx.FOR()))
            self.fn.write('(')
            self.visitInhanced_for_stmt(ctx.inhanced_for_stmt(),ident)
            self.fn.write('){')
            self.fn.createline()
            self.fn.createIdent(ident+1)
            self.visitStatement(ctx.statement(),ident)
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write('}')

    # Visit a parse tree produced by qcodeParser#for_stmt.
    def visitFor_stmt(self, ctx: qcodeParser.For_stmtContext, scope_indent):
        indent = scope_indent
        if ctx.for_start() is not None:
            self.visitFor_start(ctx.for_start(),indent)
        self.fn.write(';')
        if ctx.for_condition() is not None:
            self.fn.write(str(ctx.for_start().Identifier()))
            self.fn.write('<')
            self.visitFor_condition(ctx.for_condition(),indent)
        self.fn.write(';')
        if ctx.for_step() is not None:
            self.fn.write(str(ctx.for_start().Identifier()))
            self.fn.write('+=')
            self.visitFor_step(ctx.for_step(),indent)
        else:
            self.fn.write(str(ctx.for_start().Identifier()))
            self.fn.write('++')

    # Visit a parse tree produced by qcodeParser#for_start.
    def visitFor_start(self, ctx:qcodeParser.For_startContext,scope_ident):
        ident = scope_ident
        if ctx.LET() is not None:
            self.fn.write('auto ')
        self.fn.createBackSpace(str(ctx.Identifier()))
        if ctx.ASSIGN() is not None:
            self.fn.write(str(ctx.ASSIGN()))
            self.visitSingle_expression(ctx.single_expression(),ident)


    # Visit a parse tree produced by qcodeParser#for_step.
    def visitFor_step(self, ctx:qcodeParser.For_stepContext,scope_ident):
        ident = scope_ident
        self.visitSingle_expression(ctx.single_expression(),ident)


    # Visit a parse tree produced by qcodeParser#for_condition.
    def visitFor_condition(self, ctx:qcodeParser.For_conditionContext,scope_ident):
        ident = scope_ident
        self.visitSingle_expression(ctx.single_expression(),ident)


    # Visit a parse tree produced by qcodeParser#inhanced_for_stmt.
    def visitInhanced_for_stmt(self, ctx:qcodeParser.Inhanced_for_stmtContext,scope_ident):
        ident = scope_ident
        self.visitConstruct_primary_type(ctx.construct_primary_type())
        self.fn.createBackSpace(str(ctx.Identifier()))
        self.fn.createBackSpace(':')
        self.visitSingle_expression(ctx.single_expression(),ident)#


    # Visit a parse tree produced by qcodeParser#statement_list.
    def visitStatement_list(self, ctx:qcodeParser.Statement_listContext,scope_ident):
        ident = scope_ident
        for index in range(len(ctx.statement())):
            self.fn.createline()
            self.fn.createIdent(ident+1)
            self.visitStatement(ctx.statement(index),ident)

    def visitFunction_definition(self, ctx:qcodeParser.Function_definitionContext):
        indent = 0
        self.func_paras = []
        self.FUNCTION_RETURN_TYPE_DECLARATOR =None
        self.is_call_back_construct = 0
        self.fn.createline()
        self.qif_determine['qif_parent_count'] = 0
        self.qwhile_determine['qwhile_parent_count'] = 0
        self.visitDeclarate_function(ctx.declarate_function())
        self.visitFunction_body(ctx.function_body())


    # Visit a parse tree produced by qcodeParser#function_body.
    def visitFunction_body(self, ctx:qcodeParser.Function_bodyContext):
        self.fn.write('{')
        if self.FUNCTION_RETURN_TYPE_DECLARATOR == None:
            self.fn.createLineTab()
            self.fn.write('QProg prog = CreateEmptyQProg();')
            self.visitCompound_statement(ctx.compound_statement(),0)
            self.fn.createLineTab()
            self.fn.write('return prog;')
            self.fn.createline()
            self.fn.write('}')

        elif self.FUNCTION_RETURN_TYPE_DECLARATOR == 'circuit':
            self.fn.createLineTab()
            self.fn.write('QCircuit qCircuit = CreateEmptyCircuit();')
            self.visitCompound_statement(ctx.compound_statement(),0)
            self.fn.createLineTab()
            self.fn.write('return qCircuit;')
            self.fn.createline()
            self.fn.write('}')

        elif self.FUNCTION_RETURN_TYPE_DECLARATOR == 'variationalCircuit':
            self.fn.createLineTab()
            self.fn.write('QCircuit qCircuit = CreateEmptyQProg();')
            self.visitCompound_statement(ctx.compound_statement(),0)
            self.fn.createLineTab()
            self.fn.write('return qCircuit;')
            self.fn.createline()
            self.fn.write('}')
        else:
            self.visitCompound_statement(ctx.compound_statement(),0)
            self.fn.createline()
            self.fn.write('}')

    # Visit a parse tree produced by qcodeParser#key_words.
    def visitKey_words(self, ctx:qcodeParser.Key_wordsContext):
        key_words_text = str(ctx.getText())
        if key_words_text == 'VQG_NOT':
            key_words_text = 'VariationalQuantumGate_NOT'
        if key_words_text == 'VQG_RZ':
            key_words_text = 'VariationalQuantumGate_RZ'
        if key_words_text == 'VQG_RX':
            key_words_text = 'VariationalQuantumGate_RX'
        self.fn.write(key_words_text)



    # Visit a parse tree produced by qcodeParser#constant.
    def visitConstant(self, ctx:qcodeParser.ConstantContext):
        if ctx.Integer_Literal() is not None:
            self.fn.write(str(ctx.Integer_Literal()))
        elif ctx.Double_Literal() is not None:
            self.fn.write(str(ctx.Double_Literal()))

