from qcode.qcodeParser import qcodeParser
from qcode.qcodeVisitor import qcodeVisitor

#ParseTreeVisitor
class qcodeVisitorHandle(qcodeVisitor):

    # Visit a parse tree produced by qcodeParser#qrunes.
    def visitQrunes(self, ctx:qcodeParser.QrunesContext):
        for index in range(len(ctx.lang_unit())):
            self.visitLang_unit(ctx.lang_unit(index))

     # Visit a parse tree produced by qcodeParser#lang_unit.
    def visitLang_unit(self, ctx:qcodeParser.Lang_unitContext):
        if ctx.declaration() is not None:
            self.visitDeclaration(ctx.declaration())#+++++++++++
        elif ctx.function_definition() is not None:
            self.visitFunction_definition(ctx.function_definition())#+++++++++++++++++++++++++

