from qcode.qcodeParser import qcodeParser
from qcodeHandleUtils import qcodeFileManager
from qcodeVisitorHandle import qcodeVisitorHandle

#CppParseTreeVisitor
class qcodeCppVisitorHandle(qcodeVisitorHandle):

    def __init__(self, fileManager:qcodeFileManager):
        self.fn = fileManager
        self.fn.createCppImport()

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.fn.createCppEnd()

    function_name = ''
    qif_index = 0
    qif_scope_index = 0
    qwhile_scope_index = 0
    declaration_ident = 0
    literal_declaration_ident = 0
    qcode_qprog = {}
    qcode_variables = {}

    # Visit a parse tree produced by qcodeParser#declaration.
    def visitDeclaration(self, ctx: qcodeParser.DeclarationContext):
        '''
        ident = scope_ident
        if scope_ident != '0':
            ident = scope_ident
        else :
            ident = 0
        '''
        ident = 0
        if ctx.declaration_Specifier() is not None:
            self.fn.createline()
            if self.declaration_ident > 0:
                self.fn.createIdent(self.declaration_ident)
            else:
                self.fn.createIdent(ident)
            self.visitDeclaration_Specifier(ctx.declaration_Specifier())
        if ctx.init_DeclaratorList() is not None:
            self.visitInit_DeclaratorList(ctx.init_DeclaratorList(), ident)
        if ctx.SEMI() is not None:
            self.fn.write(str(ctx.SEMI()))

    # Visit a parse tree produced by qcodeParser#literal_declaration.
    def visitLiteral_declaration(self, ctx: qcodeParser.Literal_declarationContext):
        ident = 0
        if ctx.literal_type() is not None:
            self.fn.createline()
            if self.literal_declaration_ident > 0:
                self.fn.createIdent(self.literal_declaration_ident)
            else:
                self.fn.createIdent(ident)
            self.visitLiteral_type(ctx.literal_type())
        if ctx.init_Literal_DeclaratorList() is not None:
            self.visitInit_Literal_DeclaratorList(ctx.init_Literal_DeclaratorList(), ident)
        if ctx.SEMI() is not None:
            self.fn.write(str(ctx.SEMI()))

    # Visit a parse tree produced by qcodeParser#declaration_Specifier.
    def visitDeclaration_Specifier(self, ctx: qcodeParser.Declaration_SpecifierContext):
        if ctx.quantum_type() is not None:
            self.visitQuantum_type(ctx.quantum_type())
        if ctx.primary_type() is not None:
            self.visitPrimary_type(ctx.primary_type())
        if ctx.assist_classical_type() is not None:
            self.visitAssist_classical_type(ctx.assist_classical_type())

    # Visit a parse tree produced by qcodeParser#literal_type.
    def visitLiteral_type(self, ctx:qcodeParser.Literal_typeContext):
        if ctx.LET() is not None:
            self.fn.write('auto ')

    # Visit a parse tree produced by qcodeParser#init_Declarator.
    def visitInit_Declarator(self, ctx: qcodeParser.Init_DeclaratorContext, scope_ident):
        ident = scope_ident
        if ctx.declarator() is not None:
            self.visitDeclarator(ctx.declarator(), ident)
        if ctx.ASSIGN() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.ASSIGN()))
            self.fn.createBlank()
        if ctx.initializer() is not None:
            self.visitInitializer(ctx.initializer(), ident)
        if ctx.declarator() is not None and ctx.initializer() is not None:
            self.qcode_variables[self.function_name + '_' + ctx.declarator().getText()] = ctx.initializer().getText()

    # Visit a parse tree produced by qcodeParser#init_Declarator.
    def visitInit_Literal_Declarator(self, ctx:qcodeParser.Init_Literal_DeclaratorContext, scope_ident):
        ident = scope_ident
        if ctx.declarator() is not None:
            self.visitDeclarator(ctx.declarator(), ident)
        if ctx.ASSIGN() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.ASSIGN()))
            self.fn.createBlank()
        if ctx.initializer() is not None:
            self.visitInitializer(ctx.initializer(), ident)
        if ctx.declarator() is not None and ctx.initializer() is not None:
            self.qcode_variables[
                self.function_name + '_' + ctx.declarator().getText()] = ctx.initializer().getText()

    # Visit a parse tree produced by qcodeParser#quantum_type.
    def visitQuantum_type(self, ctx: qcodeParser.Quantum_typeContext):
        if ctx.QVEC() is not None:
            self.fn.write('QVec ')
        if ctx.QUBIT() is not None:
            self.fn.write('Qubit* ')

    # Visit a parse tree produced by qcodeParser#primary_type.
    def visitPrimary_type(self, ctx:qcodeParser.Primary_typeContext):
        if ctx.INT() is not None:
            self.fn.write('int ')
        if ctx.FLOAT() is not None:
            self.fn.write('float ')
        if ctx.DOUBLE() is not None:
            self.fn.write('double ')

    # Visit a parse tree produced by qcodeParser#assist_classical_type
    def visitAssist_classical_type(self, ctx: qcodeParser.Assist_classical_typeContext):
        if ctx.CVEC() is not None:
            self.fn.write('vector<ClassicalCondition> ')
        if ctx.CBIT() is not None:
            self.fn.write('ClassicalCondition ')

    # Visit a parse tree produced by qcodeParser#unary_exp.
    def visitUnary_exp(self, ctx: qcodeParser.Unary_expContext, scope_ident):
        ident = scope_ident
        if ctx.postfix_exp() is not None:
            self.visitPostfix_exp(ctx.postfix_exp(), ident)
        if ctx.INC() is not None:
            self.fn.write(str(ctx.INC()))
            self.visitUnary_exp(ctx.unary_exp(), ident)
        if ctx.DEC() is not None:
            self.fn.write(str(ctx.DEC()))
            self.visitUnary_exp(ctx.unary_exp(), ident)
        if ctx.LOGIC_AND() is not None:
            self.fn.write(str(ctx.LOGIC_AND()))
        if ctx.Identifier() is not None:
            self.fn.write(str(ctx.Identifier()))

    # Visit a parse tree produced by qcodeParser#multi_exp.
    def visitMulti_exp(self, ctx: qcodeParser.Multi_expContext, scope_ident):
        ident = scope_ident
        if ctx.POW() is not None:
            self.fn.write('pow(')
            self.fn.write(ctx.multi_exp().getText())
            self.fn.write(',')
            self.fn.write(ctx.cast_exp().getText())
            self.fn.write(')')
        else:
            if ctx.multi_exp() is not None:
                self.visitMulti_exp(ctx.multi_exp(), ident)
                if ctx.MUL() is not None:
                    self.fn.write(str(ctx.MUL()))
                if ctx.DIV() is not None:
                    self.fn.write(str(ctx.DIV()))
                if ctx.MOD() is not None:
                    self.fn.write(str(ctx.MOD()))
            if ctx.cast_exp() is not None:
                self.visitCast_exp(ctx.cast_exp(), ident)

    # Visit a parse tree produced by qcodeParser#unary_operator.
    def visitUnary_operator(self, ctx: qcodeParser.Unary_operatorContext, scope_ident):
        ident = scope_ident
        if ctx.ADD() is not None:
            self.fn.write(str(ctx.ADD()))
        if ctx.SUB() is not None:
            self.fn.write(str(ctx.SUB()))
        if ctx.MUL() is not None:
            self.fn.write(str(ctx.MUL()))
        if ctx.POW() is not None:
            self.fn.write(str(ctx.POW()))
        if ctx.BANG() is not None:
            self.fn.write(str(ctx.BANG()))
        if ctx.TILDE() is not None:
            self.fn.write(str(ctx.TILDE()))
        if ctx.AND() is not None:
            self.fn.write(str(ctx.AND()))

    # Visit a parse tree produced by qcodeParser#postfix_exp.
    def visitPostfix_exp(self, ctx: qcodeParser.Postfix_expContext, scope_ident):
        ident = scope_ident
        if ctx.primary_exp() is not None:
            self.visitPrimary_exp(ctx.primary_exp(), ident)
        if ctx.postfix_exp() is not None:
            if ctx.postfix_exp().primary_exp() is not None:
                if ctx.postfix_exp().primary_exp().LEN() is not None:
                    if ctx.argument_exp_List() is not None:
                        self.visitArgument_exp_List(ctx.argument_exp_List(), scope_ident)
                    self.fn.write('.size()')
                else:
                    if ctx.expression(0) is not None and ctx.expression(1) is not None:
                        self.fn.write('QVec(')
                        self.fn.write(ctx.postfix_exp().primary_exp().getText())
                        self.fn.write('.begin()+')
                        self.fn.write(ctx.expression(0).getText())
                        self.fn.write(', ')
                        self.fn.write(ctx.postfix_exp().primary_exp().getText())
                        self.fn.write('.begin()+')
                        self.fn.write(ctx.expression(1).getText())
                        self.fn.write(')')
                    else:
                        self.fn.write(ctx.postfix_exp().primary_exp().getText())
                        if ctx.LBRACK() is not None:
                            self.fn.write(str(ctx.LBRACK()))
                            self.visitExpression(ctx.expression(0), ident, 0, 0)
                            self.fn.write(str(ctx.RBRACK()))
                        if ctx.LPAREN() is not None:
                            self.fn.write(str(ctx.LPAREN()))
                            self.visitArgument_exp_List(ctx.argument_exp_List(), ident)
                            self.fn.write(str(ctx.RPAREN()))
            if ctx.INC() is not None:
                self.fn.write('++')
            if ctx.DEC() is not None:
                self.fn.write('--')

    # Visit a parse tree produced by qcodeParser#args_type_List.
    def visitArgs_type_List(self, ctx: qcodeParser.Args_type_ListContext, scope_ident):
        ident = scope_ident
        if ctx.args_type_List() is not None:
            self.visitArgs_type_List(ctx.args_type_List(), ident)
        if ctx.COMMA() is not None:
            self.fn.write(str(ctx.COMMA()))
            self.fn.createBlank()
        if ctx.args_declaration() is not None:
            self.visitArgs_declaration(ctx.args_declaration(), ident)

    # Visit a parse tree produced by qcodeParser#args_declaration.
    def visitArgs_declaration(self, ctx: qcodeParser.Args_declarationContext, scope_ident):
        ident = scope_ident
        if ctx.declaration_Specifier() is not None:
            self.visitDeclaration_Specifier(ctx.declaration_Specifier())
        if ctx.declarator() is not None:
            self.visitDeclarator(ctx.declarator(), ident)

    # Visit a parse tree produced by qcodeParser#func_declaration.
    def visitFunc_declaration(self, ctx: qcodeParser.Func_declarationContext):
        ident = 0
        if ctx.func_declarator() is not None:
            self.fn.createline()
            self.visitFunc_declarator(ctx.func_declarator(), ident)
        if ctx.SEMI() is not None:
            self.fn.write(str(ctx.SEMI()))

    # Visit a parse tree produced by qcodeParser#func_declarator.
    def visitFunc_declarator(self, ctx: qcodeParser.Func_declaratorContext, scope_ident):
        ident = scope_ident
        if ctx.Identifier() is not None:
            self.fn.write(str(ctx.Identifier()))
            self.function_name = str(ctx.Identifier())  # define the function name
        if ctx.LPAREN() is not None:
            self.fn.write(str(ctx.LPAREN()))
        if ctx.args_type_List() is not None:
            self.visitArgs_type_List(ctx.args_type_List(), ident)
        if ctx.RPAREN() is not None:
            self.fn.write(str(ctx.RPAREN()))

    # Visit a parse tree produced by qcodeParser#func_definition.
    def visitFunc_definition(self, ctx: qcodeParser.Func_definitionContext):
        ident = 0
        if ctx.func_declarator() is not None:
            self.fn.createline()
            self.fn.createline()
            self.fn.write('inline QProg ')
            self.visitFunc_declarator(ctx.func_declarator(), ident)
        if ctx.comp_stmt() is not None:
            ident += 1
            self.visitComp_stmt(ctx.comp_stmt(), ident, True, False)

    # Visit a parse tree produced by qcodeParser#comp_stmt.
    def visitComp_stmt(self, ctx: qcodeParser.Comp_stmtContext, scope_ident, func_flag, select_flag):
        ident = scope_ident
        if ctx.LBRACE() is not None:
            self.fn.write(str(ctx.LBRACE()))
        # fn.createline()
        if ctx.block_List() is not None and func_flag:
            self.fn.createline()
            self.fn.createTab()
            self.fn.write("auto _qprog = QProg();")
            self.qcode_qprog[self.function_name + '_' + '_qprog_if'] = 0
            self.qcode_qprog[self.function_name + '_' + '_qprog_while'] = 0
            self.visitBlock_List(ctx.block_List(), ident)
            self.fn.createline()
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write('return _qprog;')
        elif ctx.block_List() is not None:
            self.visitBlock_List(ctx.block_List(), ident)
        else:
            self.fn.createline()
        if ctx.RBRACE() is not None:
            self.fn.createline()
            if ident-1 >= 0:
                self.fn.createIdent(ident-1)
                if select_flag:
                    self.fn.createIdent(ident-1)
            else:
                self.fn.createIdent(ident)

            self.fn.write(str(ctx.RBRACE()))

    # Visit a parse tree produced by qcodeParser#block_Item.
    def visitBlock_Item(self, ctx: qcodeParser.Block_ItemContext, scope_ident):
        ident = scope_ident
        if ctx.statement() is not None:
            self.visitStatement(ctx.statement(), ident, False)
        if ctx.declaration() is not None:
            self.declaration_ident = ident
            self.visitDeclaration(ctx.declaration())
        if ctx.literal_declaration() is not None:
            self.literal_declaration_ident = ident
            self.visitLiteral_declaration(ctx.literal_declaration())

    # Visit a parse tree produced by qcodeParser#statement.
    def visitStatement(self, ctx: qcodeParser.StatementContext, scope_ident, select_flag):
        ident = scope_ident
        if ctx.exp_stmt() is not None:
            self.visitExp_stmt(ctx.exp_stmt(), ident)
        if ctx.comp_stmt() is not None:
            self.visitComp_stmt(ctx.comp_stmt(), ident, False, select_flag)
        if ctx.iterate_stmt() is not None:
            self.visitIterate_stmt(ctx.iterate_stmt(), ident)
        if ctx.quantum_gate_stmt() is not None:
            self.visitQuantum_gate_stmt(ctx.quantum_gate_stmt(), ident, 0, 0)
        if ctx.measurement_stmt() is not None:
            self.visitMeasurement_stmt(ctx.measurement_stmt(), ident)
        if ctx.select_stmt() is not None:
            self.visitSelect_stmt(ctx.select_stmt(), ident, select_flag)
        if ctx.q_if_operation() is not None:
            if self.qif_scope_index != 0:
                self.visitQ_if_operation(ctx.q_if_operation(), ident, self.qif_scope_index, True)
            else:
                self.visitQ_if_operation(ctx.q_if_operation(), ident, 0, True)
        if ctx.q_while_operation() is not None:
            if self.qwhile_scope_index != 0:
                self.visitQ_while_operation(ctx.q_while_operation(), ident, self.qwhile_scope_index, True)
            else:
                self.visitQ_while_operation(ctx.q_while_operation(), ident, 0, True)

    # Visit a parse tree produced by qcodeParser#assignment_exp.
    def visitAssignment_exp(self, ctx: qcodeParser.Assignment_expContext, scope_ident,  qprog_index, qprog_flag_index):
        ident = scope_ident
        if ctx.condition_exp() is not None:
            self.visitCondition_exp(ctx.condition_exp(), ident)
        if ctx.unary_exp() is not None:
            self.visitUnary_exp(ctx.unary_exp(), ident)
        if ctx.assignment_operator() is not None:
            self.visitAssignment_operator(ctx.assignment_operator(), ident)
        if ctx.assignment_exp() is not None:
            self.visitAssignment_exp(ctx.assignment_exp(), ident, 0, 0)
        if ctx.Digit_Sequence() is not None:
            self.fn.write(str(ctx.Digit_Sequence()))
        if ctx.Constant() is not None:
            self.fn.write(str(ctx.Constant()))

    # Visit a parse tree produced by qcodeParser#exp_stmt.
    def visitExp_stmt(self, ctx: qcodeParser.Exp_stmtContext, scope_ident):
        ident = scope_ident
        self.fn.createline()
        self.fn.createIdent(ident)
        self.visitExpression(ctx.expression(), ident, 0, 0)
        if ctx.SEMI() is not None:
            self.fn.write(str(ctx.SEMI()))

    # Visit a parse tree produced by qcodeParser#select_stmt.
    def visitSelect_stmt(self, ctx: qcodeParser.Select_stmtContext, scope_ident, select_flag):
        ident = scope_ident
        if not select_flag:
            self.fn.createline()
            self.fn.createIdent(ident)
        else:
            self.fn.createBlank()
            ident -= 1
        self.fn.write(str(ctx.IF()))
        if ctx.LPAREN() is not None:
            self.fn.write(str(ctx.LPAREN()))
        self.visitExpression(ctx.expression(), ident, 0, 0)
        if ctx.RPAREN() is not None:
            self.fn.write(str(ctx.RPAREN()))
        i = 0
        if ctx.statement(i) is not None:
            ident += 1
            #self.fn.createIdent(ident)
            self.visitStatement(ctx.statement(i), ident, False)
            ident -= 1
            if ctx.ELSE() is not None:
                self.fn.createBlank()
                self.fn.write(str(ctx.ELSE()) + '')
                i += 1
                ident += 1
                if ctx.statement(i).select_stmt() is not None:
                    self.visitStatement(ctx.statement(i), ident, True)
                else:
                    self.visitStatement(ctx.statement(i), ident, False)

    # Visit a parse tree produced by qcodeParser#iterate_stmt.
    def visitIterate_stmt(self, ctx: qcodeParser.Iterate_stmtContext, scope_ident):
        ident = scope_ident
        self.fn.createline()
        self.fn.createIdent(ident)
        self.fn.write(str(ctx.FOR()))
        self.fn.createBlank()
        if ctx.LPAREN() is not None:
            self.fn.write(str(ctx.LPAREN()))
        self.visitFor_stmt(ctx.for_stmt(), ident)
        if ctx.RPAREN() is not None:
            self.fn.write(str(ctx.RPAREN()))
        if ctx.statement() is not None:
            ident += 1
            self.visitStatement(ctx.statement(), ident, False)

    # Visit a parse tree produced by qcodeParser#for_stmt.
    def visitFor_stmt(self, ctx: qcodeParser.For_stmtContext, scope_ident):
        ident = scope_ident
        flag = False
        flag_step = False
        flag_index = False
        for_start_value = 0
        if ctx.for_start() is not None:
            if ctx.for_start().ASSIGN() is not None:
                self.fn.write('auto ')
                for_start_text = ctx.for_start().Identifier().getText()
                self.fn.write(for_start_text)
                for_start_value = ctx.for_start().expression().getText()
                flag_step = True
            else:
                if ctx.for_start().primary_exp().Identifier() is not None:
                    for_start_text = ctx.for_start().primary_exp().Identifier().getText()
                    self.fn.write(for_start_text)
                    qcode_variable = self.function_name + '_' + for_start_text
                    if qcode_variable in self.qcode_variables:
                        flag = True
                        for_start_value = self.qcode_variables[qcode_variable]
                else:
                    flag = True
                    flag_index = True
                    self.fn.write('size_t __idx = ')
                    for_start_value = ctx.for_start().getText()
                    self.fn.write(for_start_value)
            if not flag:
                self.fn.write('=')
                self.fn.write(str(for_start_value))
        else:
            flag_index = True
            self.fn.write('size_t __idx = 0')
        if ctx.for_end() is not None:
            self.fn.write('; ')
            if flag_index:
                self.fn.write('__idx<')
            else:
                if flag_step:
                    self.fn.write(for_start_text)
                else:
                    self.fn.write(ctx.for_start().getText())
                self.fn.write('<')
            self.visitAssignment_exp(ctx.for_end().assignment_exp(), ident, 0, 0)
        else:
            self.fn.write('; ')
        if ctx.for_step() is not None:
            self.fn.write('; ')
            if flag_index:
                self.fn.write('__idx+=')
            else:
                self.fn.write(for_start_text + '+=')
            self.visitAssignment_exp(ctx.for_step().assignment_exp(), ident, 0, 0)
        else:
            self.fn.write('; ')
            if flag_step:
                self.fn.write(for_start_text + '+=1')
            else:
                self.fn.write('__idx+=1')

    # Visit a parse tree produced by qcodeParser#quantum_gate_stmt.
    def visitQuantum_gate_stmt(self, ctx: qcodeParser.Quantum_gate_stmtContext, scope_ident, index, flag_index):
        ident = scope_ident
        if ctx.quantum_gate_operation() is not None:
            self.visitQuantum_gate_operation(ctx.quantum_gate_operation(), ident, index, flag_index)

    # Visit a parse tree produced by qcodeParser#quantum_gate_operation.
    # flag_index: 0 -> _qprog   1 -> _qprog_if  2  -> _qprog_while
    def visitQuantum_gate_operation(self, ctx: qcodeParser.Quantum_gate_operationContext, scope_ident, index, flag_index):
        ident = scope_ident
        if flag_index == 0:
            qprog = '_qprog'
        elif flag_index == 1:
            qprog = '_qprog_if'
        elif flag_index == 2:
            qprog = '_qprog_while'
        if index != 0:
            qprog = qprog + '_' + str(index)
        if ctx.H_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.H_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitControl_gate_exp(ctx.control_gate_exp(), ident)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.X_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.X_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitControl_gate_exp(ctx.control_gate_exp(), ident)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.NOT_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.NOT_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitControl_gate_exp(ctx.control_gate_exp(), ident)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.T_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.T_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitControl_gate_exp(ctx.control_gate_exp(), ident)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.S_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.S_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitControl_gate_exp(ctx.control_gate_exp(), ident)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.Y_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.Y_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitControl_gate_exp(ctx.control_gate_exp(), ident)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.Z_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.Z_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitControl_gate_exp(ctx.control_gate_exp(), ident)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.X1_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.X1_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitControl_gate_exp(ctx.control_gate_exp(), ident)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.Y1_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.Y1_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitControl_gate_exp(ctx.control_gate_exp(), ident)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.Z1_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.Z1_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitControl_gate_exp(ctx.control_gate_exp(), ident)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.U4_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.U4_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitControl_gate_exp(ctx.control_gate_exp(), ident)
            self.fn.write(str(ctx.COMMA()))
            self.visitFour_angle_args(ctx.four_angle_args(), ident)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.RX_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.RX_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitControl_gate_exp(ctx.control_gate_exp(), ident)
            self.fn.write(str(ctx.COMMA()))
            self.visitExpression(ctx.expression(), ident, 0, 0)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.RY_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.RY_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitControl_gate_exp(ctx.control_gate_exp(), ident)
            self.fn.write(str(ctx.COMMA()))
            self.visitExpression(ctx.expression(), ident, 0, 0)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.RZ_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.RZ_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitControl_gate_exp(ctx.control_gate_exp(), ident)
            self.fn.write(str(ctx.COMMA()))
            self.visitExpression(ctx.expression(), ident)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.CNOT_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.CNOT_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitDouble_gate_exp(ctx.double_gate_exp(), ident)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.CZ_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.CZ_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitDouble_gate_exp(ctx.double_gate_exp(), ident)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.CR_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.CR_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitDouble_gate_exp(ctx.double_gate_exp(), ident)
            self.fn.write(str(ctx.COMMA()))
            self.visitTheta(ctx.theta(), ident)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.CU_GATE() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.CU_GATE()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitDouble_gate_exp(ctx.double_gate_exp(), ident)
            self.fn.write(str(ctx.COMMA()))
            self.visitFour_angle_args(ctx.four_angle_args(), ident)
            self.fn.write(str(ctx.RPAREN()))
        if ctx.ISWAP() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            self.fn.write(qprog + ' << ')
            self.fn.write(str(ctx.ISWAP()))
            self.fn.write(str(ctx.LPAREN()))
            self.visitDouble_gate_exp(ctx.double_gate_exp(), ident)
            self.fn.write(str(ctx.COMMA()))
            self.visitTheta(ctx.theta(), ident)
            self.fn.write(str(ctx.RPAREN()))
        self.fn.write(';')

    # Visit a parse tree produced by qcodeParser#measurement_stmt.
    def visitMeasurement_stmt(self, ctx: qcodeParser.Measurement_stmtContext, scope_ident):
        ident = scope_ident
        self.fn.createline()
        self.fn.createIdent(ident)
        self.fn.write('_qprog << ')
        self.fn.write(str(ctx.MEASURE()))
        self.fn.write(str(ctx.LPAREN()))
        self.visitControl_gate_exp(ctx.control_gate_exp(), ident)
        self.fn.write(str(ctx.COMMA()))
        self.visitAccept_cbit_stmt(ctx.accept_cbit_stmt(), ident)
        self.fn.write(str(ctx.RPAREN()))
        self.fn.write(str(ctx.SEMI()))

    # Visit a parse tree produced by qcodeParser#q_if_operation.
    def visitQ_if_operation(self, ctx: qcodeParser.Q_if_operationContext, scope_ident, scope_index, first_flag):
        ident = scope_ident
        index = scope_index
        flag = False
        if ctx.q_if_stmt(0) is not None:
            self.visitQ_if_stmt(ctx.q_if_stmt(0), ident, index, True)

        if ctx.q_if_stmt(1) is not None:
            self.visitQ_if_stmt(ctx.q_if_stmt(1), ident, index, False)
            flag = True

        if ctx.q_condition() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            if index != 0 and not first_flag:
                self.fn.write('_qprog_if_' + str(index) + ' << CreateIfProg(')
            else:
                self.fn.write('_qprog << CreateIfProg(')
            self.visitQ_condition(ctx.q_condition(), ident)
            self.fn.write(', &_qprog_if_' + str(index + 1))
            if flag and self.qif_index != 0:
                self.fn.write(', &_qprog_if_' + str(self.qif_index))
            self.fn.write(');')
            self.fn.createline()

    # Visit a parse tree produced by qcodeParser#q_if_stmt.
    def visitQ_if_stmt(self, ctx: qcodeParser.Q_if_stmtContext, scope_ident, scope_index, qif_flag):
        ident = scope_ident
        index = scope_index
        if ctx is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            num = self.qcode_qprog[self.function_name + '_' + '_qprog_if'] + 1
            qprog = '_qprog_if_' + str(num)
            self.qcode_qprog[self.function_name + '_' + '_qprog_if'] = num
            self.qif_scope_index = num
            self.fn.write('auto ' + qprog + ' = QProg();')

            if ctx.q_if_stmt_item() is not None:
                for item in ctx.q_if_stmt_item():
                    self.visitQ_if_stmt_item(item, ident, num, qif_flag)

    # Visit a parse tree produced by qcodeParser#q_if_stmt_item.
    def visitQ_if_stmt_item(self, ctx: qcodeParser.Q_if_stmt_itemContext, scope_ident, index, qif_flag):
        ident = scope_ident
        if ctx.statement() is not None:
            self.visitStatement(ctx.statement(), ident, False)
        if ctx.declaration() is not None:
            self.declaration_ident = ident
            self.visitDeclaration(ctx.declaration())
        if ctx.literal_declaration() is not None:
            self.literal_declaration_ident = ident
            self.visitLiteral_declaration(ctx.literal_declaration())
        if not qif_flag:
            self.qif_index = index

    # Visit a parse tree produced by qcodeParser#q_condition.
    def visitQ_condition(self, ctx: qcodeParser.Q_conditionContext, scope_ident):
        ident = scope_ident
        i = 0
        if ctx.inclu_exp(0) is not None:
            self.visitInclu_exp(ctx.inclu_exp(0), ident)
        if ctx.q_operator(0) is not None:
            self.visitQ_operator(ctx.q_operator(0), ident)
        while True:
            i += 1
            if ctx.inclu_exp(i) is not None:
                self.visitInclu_exp(ctx.inclu_exp(i), ident)
            if ctx.q_operator(i) is not None:
                self.visitQ_operator(ctx.q_operator(i), ident)
            else:
                break

    # Visit a parse tree produced by qcodeParser#q_while_operation.
    def visitQ_while_operation(self, ctx: qcodeParser.Q_while_operationContext, scope_ident, scope_index, first_flag):
        ident = scope_ident
        index = scope_index
        flag = False
        if ctx.q_while_stmt() is not None:
            self.visitQ_while_stmt(ctx.q_while_stmt(), ident, index)

        if ctx.q_condition() is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            if index != 0 and not first_flag:
                self.fn.write('_qprog_while_' + str(index) + ' << CreateIfProg(')
            else:
                self.fn.write('_qprog << CreateIfProg(')
            self.visitQ_condition(ctx.q_condition(), ident)
            self.fn.write(', &_qprog_while_' + str(index + 1))
            if flag and self.qif_index != 0:
                self.fn.write(', &_qprog_while_' + str(self.qif_index))
            self.fn.write(');')
            self.fn.createline()

    # Visit a parse tree produced by qcodeParser#q_if_stmt.
    def visitQ_while_stmt(self, ctx: qcodeParser.Q_if_stmtContext, scope_ident, scope_index):
        ident = scope_ident
        if ctx is not None:
            self.fn.createline()
            self.fn.createIdent(ident)
            num = self.qcode_qprog[self.function_name + '_' + '_qprog_while'] + 1
            qprog = '_qprog_while_' + str(num)
            self.qcode_qprog[self.function_name + '_' + '_qprog_while'] = num
            self.qwhile_scope_index = num
            self.fn.write('auto ' + qprog + ' = QProg();')

            if ctx.q_while_stmt_item() is not None:
                for item in ctx.q_while_stmt_item():
                    self.visitQ_while_stmt_item(item, ident, num)

    # Visit a parse tree produced by qcodeParser#q_if_stmt_item.
    def visitQ_while_stmt_item(self, ctx: qcodeParser.Q_while_stmt_itemContext, scope_ident, index):
        ident = scope_ident
        if ctx.statement() is not None:
            self.visitStatement(ctx.statement(), ident, False)
        if ctx.declaration() is not None:
            self.declaration_ident = ident
            self.visitDeclaration(ctx.declaration())
        if ctx.literal_declaration() is not None:
            self.literal_declaration_ident = ident
            self.visitLiteral_declaration(ctx.literal_declaration())

    # Visit a parse tree produced by qcodeParser#q_condition.
    def visitQ_condition(self, ctx: qcodeParser.Q_conditionContext, scope_ident):
        ident = scope_ident
        i = 0
        if ctx.inclu_exp(0) is not None:
            self.visitInclu_exp(ctx.inclu_exp(0), ident)
        if ctx.q_operator(0) is not None:
            self.visitQ_operator(ctx.q_operator(0), ident)
        while True:
            i += 1
            if ctx.inclu_exp(i) is not None:
                self.visitInclu_exp(ctx.inclu_exp(i), ident)
            if ctx.q_operator(i) is not None:
                self.visitQ_operator(ctx.q_operator(i), ident)
            else:
                break

    # Visit a parse tree produced by qcodeParser#q_operator.
    def visitQ_operator(self, ctx: qcodeParser.Q_operatorContext, scope_ident):
        ident = scope_ident
        if ctx.LOGIC_AND() is not None:
            self.fn.write(' && ')
        if ctx.LOGIC_OR() is not None:
            self.fn.write(' || ')
