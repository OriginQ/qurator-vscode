from qcode.qcodeParser import qcodeParser
from qcode.qcodeVisitor import qcodeVisitor

#ParseTreeVisitor
class qcodeVisitorHandle(qcodeVisitor):

    # Visit a parse tree produced by qcodeParser#qrunes.
    def visitQrunes(self, ctx: qcodeParser.QrunesContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by qcodeParser#lang_unit.
    def visitLang_unit(self, ctx: qcodeParser.Lang_unitContext):
        return self.visitChildren(ctx)

    # Visit a parse tree produced by qcodeParser#init_DeclaratorList.
    def visitInit_DeclaratorList(self, ctx: qcodeParser.Init_DeclaratorListContext, scope_ident):
        ident = scope_ident
        if ctx.init_DeclaratorList() is not None:
            self.visitInit_DeclaratorList(ctx.init_DeclaratorList())
        if ctx.COMMA() is not None:
            self.fn.write(str(ctx.COMMA()))
        if ctx.init_Declarator() is not None:
            self.visitInit_Declarator(ctx.init_Declarator(), ident)

    # Visit a parse tree produced by qcodeParser#init_Literal_DeclaratorList.
    def visitInit_Literal_DeclaratorList(self, ctx:qcodeParser.Init_Literal_DeclaratorListContext, scope_ident):
        ident = scope_ident
        if ctx.init_Literal_DeclaratorList() is not None:
            self.visitInit_Literal_DeclaratorList(ctx.init_Literal_DeclaratorList())
        if ctx.COMMA() is not None:
            self.fn.write(str(ctx.COMMA()))
        if ctx.init_Literal_Declarator() is not None:
            self.visitInit_Literal_Declarator(ctx.init_Literal_Declarator(), ident)

    # Visit a parse tree produced by qcodeParser#declarator.
    def visitDeclarator(self, ctx: qcodeParser.DeclaratorContext, scope_ident):
        ident = scope_ident
        if ctx.Identifier() is not None:
            self.fn.write(str(ctx.Identifier()))
        if ctx.declarator() is not None:
            self.visitDeclarator(ctx.declarator(), ident)
        if ctx.LBRACK() is not None:
            self.fn.write(str(ctx.LBRACK()))
        if ctx.assignment_exp() is not None:
            self.visitAssignment_exp(ctx.assignment_exp(), ident, 0, 0)
        if ctx.RBRACK() is not None:
            self.fn.write(str(ctx.RBRACK()))

    # Visit a parse tree produced by qcodeParser#assignment_operator.
    def visitAssignment_operator(self, ctx: qcodeParser.Assignment_operatorContext, scope_ident):
        ident = scope_ident
        if ctx.ASSIGN() is not None:
            self.fn.write(str(ctx.ASSIGN()))
        if ctx.ADD_ASSIGN() is not None:
            self.fn.write(str(ctx.ADD_ASSIGN()))
        if ctx.SUB_ASSIGN() is not None:
            self.fn.write(str(ctx.SUB_ASSIGN()))
        if ctx.MUL_ASSIGN() is not None:
            self.fn.write(str(ctx.MUL_ASSIGN()))
        if ctx.DIV_ASSIGN() is not None:
            self.fn.write(str(ctx.DIV_ASSIGN()))

    # Visit a parse tree produced by qcodeParser#condition_exp.
    def visitCondition_exp(self, ctx: qcodeParser.Condition_expContext, scope_ident):
        ident = scope_ident
        if ctx.logicOr_exp() is not None:
            self.visitLogicOr_exp(ctx.logicOr_exp(), ident)
        if ctx.QUE_MARK() is not None:
            self.fn.write(str(ctx.QUE_MARK()))
            self.visitExpression(ctx.expression(), ident, 0, 0)
            self.fn.write(str(ctx.COLON()))
            self.visitCondition_exp(ctx.condition_exp(), ident)

    # Visit a parse tree produced by qcodeParser#expression.
    def visitExpression(self, ctx: qcodeParser.ExpressionContext, scope_ident, qprog_index, qprog_flag_index):
        ident = scope_ident
        if ctx.expression() is not None:
            self.visitExpression(ctx.expression(), ident, 0, 0)
        if ctx.COMMA() is not None:
            self.fn.write(str(ctx.COMMA()))
        if ctx.assignment_exp() is not None:
            self.visitAssignment_exp(ctx.assignment_exp(), ident, qprog_index, qprog_flag_index)

    # Visit a parse tree produced by qcodeParser#logicOr_exp.
    def visitLogicOr_exp(self, ctx: qcodeParser.LogicOr_expContext, scope_ident):
        ident = scope_ident
        if ctx.logicOr_exp() is not None:
            self.visitLogicOr_exp(ctx.logicOr_exp(), ident)
        if ctx.logicAnd_exp() is not None:
            self.visitLogicAnd_exp(ctx.logicAnd_exp(), ident)

    # Visit a parse tree produced by qcodeParser#logicAnd_exp.
    def visitLogicAnd_exp(self, ctx: qcodeParser.LogicAnd_expContext, scope_ident):
        ident = scope_ident
        if ctx.logicAnd_exp() is not None:
            self.visitLogicAnd_exp(ctx.logicAnd_exp(), ident)
        if ctx.inclu_exp() is not None:
            self.visitInclu_exp(ctx.inclu_exp(), ident)

    # Visit a parse tree produced by qcodeParser#inclu_exp.
    def visitInclu_exp(self, ctx: qcodeParser.Inclu_expContext, scope_ident):
        ident = scope_ident
        if ctx.inclu_exp() is not None:
            self.visitInclu_exp(ctx.inclu_exp(), ident)
        if ctx.exclu_exp() is not None:
            self.visitExclu_exp(ctx.exclu_exp(), ident)

    # Visit a parse tree produced by qcodeParser#exclu_exp.
    def visitExclu_exp(self, ctx: qcodeParser.Exclu_expContext, scope_ident):
        ident = scope_ident
        if ctx.exclu_exp() is not None:
            self.visitExclu_exp(ctx.exclu_exp(), ident)
        if ctx.and_exp() is not None:
            self.visitAnd_exp(ctx.and_exp(), ident)

    # Visit a parse tree produced by qcodeParser#and_exp.
    def visitAnd_exp(self, ctx: qcodeParser.And_expContext, scope_ident):
        ident = scope_ident
        if ctx.and_exp() is not None:
            self.visitAnd_exp(ctx.and_exp(), ident)
        if ctx.equal_exp() is not None:
            self.visitEqual_exp(ctx.equal_exp(), ident)

    # Visit a parse tree produced by qcodeParser#equal_exp.
    def visitEqual_exp(self, ctx: qcodeParser.Equal_expContext, scope_ident):
        ident = scope_ident
        if ctx.equal_exp() is not None:
            self.visitEqual_exp(ctx.equal_exp(), ident)
        if ctx.EQUAL() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.EQUAL()))
            self.fn.createBlank()
        if ctx.NOTEQUAL() is not None:
            self.fn.createBlank()
            self.fn.write(str(ctx.NOTEQUAL()))
            self.fn.createBlank()
        if ctx.relation_exp() is not None:
            self.visitRelation_exp(ctx.relation_exp(), ident)

    # Visit a parse tree produced by qcodeParser#relation_exp.
    def visitRelation_exp(self, ctx: qcodeParser.Relation_expContext, scope_ident):
        ident = scope_ident
        if ctx.relation_exp() is not None:
            self.visitRelation_exp(ctx.relation_exp(), ident)
        if ctx.GT() is not None:
            self.fn.write(str(ctx.GT()))
        if ctx.LT() is not None:
            self.fn.write(str(ctx.LT()))
        if ctx.LE() is not None:
            self.fn.write(str(ctx.LE()))
        if ctx.GE() is not None:
            self.fn.write(str(ctx.GE()))
        if ctx.shift_exp() is not None:
            self.visitShift_exp(ctx.shift_exp(), ident)

    # Visit a parse tree produced by qcodeParser#shift_exp.
    def visitShift_exp(self, ctx: qcodeParser.Shift_expContext, scope_ident):
        ident = scope_ident
        if ctx.additive_exp() is not None:
            self.visitAdditive_exp(ctx.additive_exp(), ident)
        if ctx.shift_exp() is not None:
            if ctx.LSHIFT() is not None:
                self.fn.write(str(ctx.LSHIFT()))
            if ctx.RSHIFT() is not None:
                self.fn.write(str(ctx.RSHIFT()))
            self.visitShift_exp(ctx.shift_exp(), ident)

    # Visit a parse tree produced by qcodeParser#additive_exp.
    def visitAdditive_exp(self, ctx: qcodeParser.Additive_expContext, scope_ident):
        ident = scope_ident
        if ctx.additive_exp() is not None:
            self.visitAdditive_exp(ctx.additive_exp(), ident)
        if ctx.ADD() is not None:
            self.fn.write(str(ctx.ADD()))
        if ctx.SUB() is not None:
            self.fn.write(str(ctx.SUB()))
        if ctx.multi_exp() is not None:
            self.visitMulti_exp(ctx.multi_exp(), ident)

    # Visit a parse tree produced by qcodeParser#cast_exp.
    def visitCast_exp(self, ctx: qcodeParser.Cast_expContext, scope_ident):
        ident = scope_ident
        if ctx.unary_exp() is not None:
            self.visitUnary_exp(ctx.unary_exp(), ident)
        # if ctx.LPAREN() is not None:
        #     fn.write(str(ctx.LPAREN()))
        #     # self.visitPrimary_type(ctx.primary_type(),ident)
        #     fn.write(str(ctx.RPAREN()))
        #     if ctx.cast_exp() is not None:
        #         self.visitCast_exp(ctx.cast_exp(),ident)
        if ctx.Digit_Sequence() is not None:
            self.fn.write(str(ctx.Digit_Sequence()))

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

    # Visit a parse tree produced by qcodeParser#argument_exp_List.
    def visitArgument_exp_List(self, ctx: qcodeParser.Argument_exp_ListContext, scope_ident):
        ident = scope_ident
        if ctx.argument_exp_List() is not None:
            self.visitArgument_exp_List(ctx.argument_exp_List(), ident)
        if ctx.COMMA() is not None:
            self.fn.write(str(ctx.COMMA()))
        if ctx.assignment_exp() is not None:
            self.visitAssignment_exp(ctx.assignment_exp(), ident, 0, 0)

    # Visit a parse tree produced by qcodeParser#primary_exp.
    def visitPrimary_exp(self, ctx: qcodeParser.Primary_expContext, scope_ident):
        ident = scope_ident
        if ctx.Identifier() is not None:
            self.fn.write(str(ctx.Identifier()))
        if ctx.Constant() is not None:
            self.fn.write(str(ctx.Constant()))
        if ctx.PI() is not None:
            self.fn.write('3.14159265358979')
        if ctx.LEN() is not None:
            self.fn.write(str(ctx.LEN()))
        if ctx.LPAREN() is not None:
            self.fn.write(str(ctx.LPAREN()))
            self.visitExpression(ctx.expression(), ident, 0, 0)
            self.fn.write(str(ctx.RPAREN()))

    # Visit a parse tree produced by qcodeParser#initializer.
    def visitInitializer(self, ctx: qcodeParser.InitializerContext, scope_ident):
        ident = scope_ident
        if ctx.assignment_exp() is not None:
            self.visitAssignment_exp(ctx.assignment_exp(), ident, 0, 0)

    # Visit a parse tree produced by qcodeParser#initializerList.
    def visitInitializerList(self, ctx: qcodeParser.InitializerListContext, scope_ident):
        ident = scope_ident
        pass

    # Visit a parse tree produced by qcodeParser#designation.
    def visitDesignation(self, ctx: qcodeParser.DesignationContext, scope_ident):
        ident = scope_ident
        pass

    # Visit a parse tree produced by qcodeParser#designatorList.
    def visitDesignatorList(self, ctx: qcodeParser.DesignatorListContext, scope_ident):
        ident = scope_ident
        pass

    # Visit a parse tree produced by qcodeParser#designator.
    def visitDesignator(self, ctx: qcodeParser.DesignatorContext, scope_ident):
        ident = scope_ident
        pass

    # Visit a parse tree produced by qcodeParser#constant_exp.
    def visitConstant_exp(self, ctx: qcodeParser.Constant_expContext, scope_ident):
        ident = scope_ident
        pass

    # Visit a parse tree produced by qcodeParser#declarationList.
    def visitDeclarationList(self, ctx: qcodeParser.DeclarationListContext, scope_ident):
        ident = scope_ident
        pass

    # Visit a parse tree produced by qcodeParser#block_List.
    def visitBlock_List(self, ctx: qcodeParser.Block_ListContext, scope_ident):
        ident = scope_ident
        if ctx.block_List() is not None:
            self.visitBlock_List(ctx.block_List(), ident)
        if ctx.block_Item() is not None:
            self.visitBlock_Item(ctx.block_Item(), ident)

    # Visit a parse tree produced by qcodeParser#exp_stmt.
    def visitExp_stmt(self, ctx: qcodeParser.Exp_stmtContext, scope_ident, qprog_index, qprog_flag_index):
        ident = scope_ident
        self.fn.createline()
        self.fn.createIdent(ident)
        self.visitExpression(ctx.expression(), ident, qprog_index, qprog_flag_index)

    # Visit a parse tree produced by qcodeParser#four_angle_args.
    def visitFour_angle_args(self, ctx: qcodeParser.Four_angle_argsContext, scope_ident):
        ident = scope_ident
        if ctx.alpha() is not None:
            self.visitAlpha(ctx.alpha(), ident)
        self.fn.write(',')
        if ctx.beta() is not None:
            self.visitBeta(ctx.beta(), ident)
        self.fn.write(',')
        if ctx.gamma() is not None:
            self.visitGamma(ctx.gamma(), ident)
        self.fn.write(',')
        if ctx.delta() is not None:
            self.visitDelta(ctx.delta(), ident)

    # Visit a parse tree produced by qcodeParser#alpha.
    def visitAlpha(self, ctx: qcodeParser.AlphaContext, scope_ident):
        ident = scope_ident
        if ctx.expression() is not None:
            self.visitExpression(ctx.expression(), ident, 0, 0)

    # Visit a parse tree produced by qcodeParser#beta.
    def visitBeta(self, ctx: qcodeParser.BetaContext, scope_ident):
        ident = scope_ident
        if ctx.expression() is not None:
            beta_va = ctx.expression().getText()
            self.fn.write(str(beta_va))

    # Visit a parse tree produced by qcodeParser#gamma.
    def visitGamma(self, ctx: qcodeParser.GammaContext, scope_ident):
        ident = scope_ident
        if ctx.expression() is not None:
            gamma_va = ctx.expression().getText()
            self.fn.write(str(gamma_va))

    # Visit a parse tree produced by qcodeParser#delta.
    def visitDelta(self, ctx: qcodeParser.DeltaContext, scope_ident):
        ident = scope_ident
        if ctx.expression() is not None:
            delta_va = ctx.expression().getText()
            self.fn.write(str(delta_va))

    # Visit a parse tree produced by qcodeParser#theta.
    def visitTheta(self, ctx: qcodeParser.ThetaContext, scope_ident):
        ident = scope_ident
        if ctx.expression() is not None:
            self.visitExpression(ctx.expression(), ident, 0, 0)

    # Visit a parse tree produced by qcodeParser#control_gate_exp.
    def visitControl_gate_exp(self, ctx: qcodeParser.Control_gate_expContext, scope_ident):
        ident = scope_ident
        if ctx.expression() is not None:
            self.fn.write(str(ctx.Identifier()))
            self.fn.write(str(ctx.LBRACK()))
            self.visitExpression(ctx.expression(), ident, 0, 0)
            self.fn.write(str(ctx.RBRACK()))
        else:
            self.fn.write(str(ctx.Identifier()))

    # Visit a parse tree produced by qcodeParser#double_gate_exp.
    def visitDouble_gate_exp(self, ctx: qcodeParser.Double_gate_expContext, scope_ident):
        ident = scope_ident
        if ctx.control_gate_exp() is not None:
            self.visitControl_gate_exp(ctx.control_gate_exp(), ident)
        if ctx.COMMA() is not None:
            self.fn.write(str(ctx.COMMA()))
        if ctx.target_gate_exp() is not None:
            self.visitTarget_gate_exp(ctx.target_gate_exp(), ident)

    # Visit a parse tree produced by qcodeParser#target_gate_exp.
    def visitTarget_gate_exp(self, ctx: qcodeParser.Target_gate_expContext, scope_ident):
        ident = scope_ident
        if ctx.expression() is not None:
            self.fn.write(str(ctx.Identifier()))
            self.fn.write(str(ctx.LBRACK()))
            self.visitExpression(ctx.expression(), ident, 0, 0)
            self.fn.write(str(ctx.RBRACK()))
        else:
            self.fn.write(str(ctx.Identifier()))

    # Visit a parse tree produced by qcodeParser#accept_cbit_stmt.
    def visitAccept_cbit_stmt(self, ctx: qcodeParser.Accept_cbit_stmtContext, scope_ident):
        ident = scope_ident
        if ctx.expression() is not None:
            self.fn.write(str(ctx.Identifier()))
            self.fn.write(str(ctx.LBRACK()))
            self.visitExpression(ctx.expression(), ident, 0, 0)
            self.fn.write(str(ctx.RBRACK()))
        else:
            self.fn.write(str(ctx.Identifier()))
