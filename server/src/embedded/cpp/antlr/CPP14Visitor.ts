// Generated from CPP14.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { TranslationunitContext } from './CPP14Parser';
import { PrimaryexpressionContext } from './CPP14Parser';
import { IdexpressionContext } from './CPP14Parser';
import { UnqualifiedidContext } from './CPP14Parser';
import { QualifiedidContext } from './CPP14Parser';
import { NestednamespecifierContext } from './CPP14Parser';
import { LambdaexpressionContext } from './CPP14Parser';
import { LambdaintroducerContext } from './CPP14Parser';
import { LambdacaptureContext } from './CPP14Parser';
import { CapturedefaultContext } from './CPP14Parser';
import { CapturelistContext } from './CPP14Parser';
import { CaptureContext } from './CPP14Parser';
import { SimplecaptureContext } from './CPP14Parser';
import { InitcaptureContext } from './CPP14Parser';
import { LambdadeclaratorContext } from './CPP14Parser';
import { PostfixexpressionContext } from './CPP14Parser';
import { TypeidofexprContext } from './CPP14Parser';
import { TypeidofthetypeidContext } from './CPP14Parser';
import { ExpressionlistContext } from './CPP14Parser';
import { PseudodestructornameContext } from './CPP14Parser';
import { UnaryexpressionContext } from './CPP14Parser';
import { UnaryoperatorContext } from './CPP14Parser';
import { NewexpressionContext } from './CPP14Parser';
import { NewplacementContext } from './CPP14Parser';
import { NewtypeidContext } from './CPP14Parser';
import { NewdeclaratorContext } from './CPP14Parser';
import { NoptrnewdeclaratorContext } from './CPP14Parser';
import { NewinitializerContext } from './CPP14Parser';
import { DeleteexpressionContext } from './CPP14Parser';
import { NoexceptexpressionContext } from './CPP14Parser';
import { CastexpressionContext } from './CPP14Parser';
import { PmexpressionContext } from './CPP14Parser';
import { MultiplicativeexpressionContext } from './CPP14Parser';
import { AdditiveexpressionContext } from './CPP14Parser';
import { ShiftexpressionContext } from './CPP14Parser';
import { RelationalexpressionContext } from './CPP14Parser';
import { EqualityexpressionContext } from './CPP14Parser';
import { AndexpressionContext } from './CPP14Parser';
import { ExclusiveorexpressionContext } from './CPP14Parser';
import { InclusiveorexpressionContext } from './CPP14Parser';
import { LogicalandexpressionContext } from './CPP14Parser';
import { LogicalorexpressionContext } from './CPP14Parser';
import { ConditionalexpressionContext } from './CPP14Parser';
import { AssignmentexpressionContext } from './CPP14Parser';
import { AssignmentoperatorContext } from './CPP14Parser';
import { ExpressionContext } from './CPP14Parser';
import { ConstantexpressionContext } from './CPP14Parser';
import { StatementContext } from './CPP14Parser';
import { LabeledstatementContext } from './CPP14Parser';
import { ExpressionstatementContext } from './CPP14Parser';
import { CompoundstatementContext } from './CPP14Parser';
import { StatementseqContext } from './CPP14Parser';
import { SelectionstatementContext } from './CPP14Parser';
import { ConditionContext } from './CPP14Parser';
import { IterationstatementContext } from './CPP14Parser';
import { ForinitstatementContext } from './CPP14Parser';
import { ForrangedeclarationContext } from './CPP14Parser';
import { ForrangeinitializerContext } from './CPP14Parser';
import { JumpstatementContext } from './CPP14Parser';
import { DeclarationstatementContext } from './CPP14Parser';
import { DeclarationseqContext } from './CPP14Parser';
import { DeclarationContext } from './CPP14Parser';
import { BlockdeclarationContext } from './CPP14Parser';
import { AliasdeclarationContext } from './CPP14Parser';
import { SimpledeclarationContext } from './CPP14Parser';
import { Static_assertdeclarationContext } from './CPP14Parser';
import { EmptydeclarationContext } from './CPP14Parser';
import { AttributedeclarationContext } from './CPP14Parser';
import { DeclspecifierContext } from './CPP14Parser';
import { DeclspecifierseqContext } from './CPP14Parser';
import { StorageclassspecifierContext } from './CPP14Parser';
import { FunctionspecifierContext } from './CPP14Parser';
import { TypedefnameContext } from './CPP14Parser';
import { TypespecifierContext } from './CPP14Parser';
import { TrailingtypespecifierContext } from './CPP14Parser';
import { TypespecifierseqContext } from './CPP14Parser';
import { TrailingtypespecifierseqContext } from './CPP14Parser';
import { SimpletypespecifierContext } from './CPP14Parser';
import { ThetypenameContext } from './CPP14Parser';
import { DecltypespecifierContext } from './CPP14Parser';
import { ElaboratedtypespecifierContext } from './CPP14Parser';
import { EnumnameContext } from './CPP14Parser';
import { EnumspecifierContext } from './CPP14Parser';
import { EnumheadContext } from './CPP14Parser';
import { OpaqueenumdeclarationContext } from './CPP14Parser';
import { EnumkeyContext } from './CPP14Parser';
import { EnumbaseContext } from './CPP14Parser';
import { EnumeratorlistContext } from './CPP14Parser';
import { EnumeratordefinitionContext } from './CPP14Parser';
import { EnumeratorContext } from './CPP14Parser';
import { NamespacenameContext } from './CPP14Parser';
import { OriginalnamespacenameContext } from './CPP14Parser';
import { NamespacedefinitionContext } from './CPP14Parser';
import { NamednamespacedefinitionContext } from './CPP14Parser';
import { OriginalnamespacedefinitionContext } from './CPP14Parser';
import { ExtensionnamespacedefinitionContext } from './CPP14Parser';
import { UnnamednamespacedefinitionContext } from './CPP14Parser';
import { NamespacebodyContext } from './CPP14Parser';
import { NamespacealiasContext } from './CPP14Parser';
import { NamespacealiasdefinitionContext } from './CPP14Parser';
import { QualifiednamespacespecifierContext } from './CPP14Parser';
import { UsingdeclarationContext } from './CPP14Parser';
import { UsingdirectiveContext } from './CPP14Parser';
import { AsmdefinitionContext } from './CPP14Parser';
import { LinkagespecificationContext } from './CPP14Parser';
import { AttributespecifierseqContext } from './CPP14Parser';
import { AttributespecifierContext } from './CPP14Parser';
import { AlignmentspecifierContext } from './CPP14Parser';
import { AttributelistContext } from './CPP14Parser';
import { AttributeContext } from './CPP14Parser';
import { AttributetokenContext } from './CPP14Parser';
import { AttributescopedtokenContext } from './CPP14Parser';
import { AttributenamespaceContext } from './CPP14Parser';
import { AttributeargumentclauseContext } from './CPP14Parser';
import { BalancedtokenseqContext } from './CPP14Parser';
import { BalancedtokenContext } from './CPP14Parser';
import { InitdeclaratorlistContext } from './CPP14Parser';
import { InitdeclaratorContext } from './CPP14Parser';
import { DeclaratorContext } from './CPP14Parser';
import { PtrdeclaratorContext } from './CPP14Parser';
import { NoptrdeclaratorContext } from './CPP14Parser';
import { ParametersandqualifiersContext } from './CPP14Parser';
import { TrailingreturntypeContext } from './CPP14Parser';
import { PtroperatorContext } from './CPP14Parser';
import { CvqualifierseqContext } from './CPP14Parser';
import { CvqualifierContext } from './CPP14Parser';
import { RefqualifierContext } from './CPP14Parser';
import { DeclaratoridContext } from './CPP14Parser';
import { ThetypeidContext } from './CPP14Parser';
import { AbstractdeclaratorContext } from './CPP14Parser';
import { PtrabstractdeclaratorContext } from './CPP14Parser';
import { NoptrabstractdeclaratorContext } from './CPP14Parser';
import { AbstractpackdeclaratorContext } from './CPP14Parser';
import { NoptrabstractpackdeclaratorContext } from './CPP14Parser';
import { ParameterdeclarationclauseContext } from './CPP14Parser';
import { ParameterdeclarationlistContext } from './CPP14Parser';
import { ParameterdeclarationContext } from './CPP14Parser';
import { FunctiondefinitionContext } from './CPP14Parser';
import { FunctionbodyContext } from './CPP14Parser';
import { InitializerContext } from './CPP14Parser';
import { BraceorequalinitializerContext } from './CPP14Parser';
import { InitializerclauseContext } from './CPP14Parser';
import { InitializerlistContext } from './CPP14Parser';
import { BracedinitlistContext } from './CPP14Parser';
import { ClassnameContext } from './CPP14Parser';
import { ClassspecifierContext } from './CPP14Parser';
import { ClassheadContext } from './CPP14Parser';
import { ClassheadnameContext } from './CPP14Parser';
import { ClassvirtspecifierContext } from './CPP14Parser';
import { ClasskeyContext } from './CPP14Parser';
import { MemberspecificationContext } from './CPP14Parser';
import { MemberdeclarationContext } from './CPP14Parser';
import { MemberdeclaratorlistContext } from './CPP14Parser';
import { MemberdeclaratorContext } from './CPP14Parser';
import { VirtspecifierseqContext } from './CPP14Parser';
import { VirtspecifierContext } from './CPP14Parser';
import { PurespecifierContext } from './CPP14Parser';
import { BaseclauseContext } from './CPP14Parser';
import { BasespecifierlistContext } from './CPP14Parser';
import { BasespecifierContext } from './CPP14Parser';
import { ClassordecltypeContext } from './CPP14Parser';
import { BasetypespecifierContext } from './CPP14Parser';
import { AccessspecifierContext } from './CPP14Parser';
import { ConversionfunctionidContext } from './CPP14Parser';
import { ConversiontypeidContext } from './CPP14Parser';
import { ConversiondeclaratorContext } from './CPP14Parser';
import { CtorinitializerContext } from './CPP14Parser';
import { MeminitializerlistContext } from './CPP14Parser';
import { MeminitializerContext } from './CPP14Parser';
import { MeminitializeridContext } from './CPP14Parser';
import { OperatorfunctionidContext } from './CPP14Parser';
import { LiteraloperatoridContext } from './CPP14Parser';
import { TemplatedeclarationContext } from './CPP14Parser';
import { TemplateparameterlistContext } from './CPP14Parser';
import { TemplateparameterContext } from './CPP14Parser';
import { TypeparameterContext } from './CPP14Parser';
import { SimpletemplateidContext } from './CPP14Parser';
import { TemplateidContext } from './CPP14Parser';
import { TemplatenameContext } from './CPP14Parser';
import { TemplateargumentlistContext } from './CPP14Parser';
import { TemplateargumentContext } from './CPP14Parser';
import { TypenamespecifierContext } from './CPP14Parser';
import { ExplicitinstantiationContext } from './CPP14Parser';
import { ExplicitspecializationContext } from './CPP14Parser';
import { TryblockContext } from './CPP14Parser';
import { FunctiontryblockContext } from './CPP14Parser';
import { HandlerseqContext } from './CPP14Parser';
import { HandlerContext } from './CPP14Parser';
import { ExceptiondeclarationContext } from './CPP14Parser';
import { ThrowexpressionContext } from './CPP14Parser';
import { ExceptionspecificationContext } from './CPP14Parser';
import { DynamicexceptionspecificationContext } from './CPP14Parser';
import { TypeidlistContext } from './CPP14Parser';
import { NoexceptspecificationContext } from './CPP14Parser';
import { RightShiftContext } from './CPP14Parser';
import { RightShiftAssignContext } from './CPP14Parser';
import { TheoperatorContext } from './CPP14Parser';
import { LiteralContext } from './CPP14Parser';
import { BooleanliteralContext } from './CPP14Parser';
import { PointerliteralContext } from './CPP14Parser';
import { UserdefinedliteralContext } from './CPP14Parser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CPP14Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CPP14Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CPP14Parser.translationunit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTranslationunit?: (ctx: TranslationunitContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.primaryexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryexpression?: (ctx: PrimaryexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.idexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdexpression?: (ctx: IdexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.unqualifiedid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnqualifiedid?: (ctx: UnqualifiedidContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.qualifiedid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedid?: (ctx: QualifiedidContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.nestednamespecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNestednamespecifier?: (ctx: NestednamespecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.lambdaexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaexpression?: (ctx: LambdaexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.lambdaintroducer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaintroducer?: (ctx: LambdaintroducerContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.lambdacapture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdacapture?: (ctx: LambdacaptureContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.capturedefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCapturedefault?: (ctx: CapturedefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.capturelist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCapturelist?: (ctx: CapturelistContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.capture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCapture?: (ctx: CaptureContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.simplecapture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimplecapture?: (ctx: SimplecaptureContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.initcapture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitcapture?: (ctx: InitcaptureContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.lambdadeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdadeclarator?: (ctx: LambdadeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.postfixexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixexpression?: (ctx: PostfixexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.typeidofexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeidofexpr?: (ctx: TypeidofexprContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.typeidofthetypeid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeidofthetypeid?: (ctx: TypeidofthetypeidContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.expressionlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionlist?: (ctx: ExpressionlistContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.pseudodestructorname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPseudodestructorname?: (ctx: PseudodestructornameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.unaryexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryexpression?: (ctx: UnaryexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.unaryoperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryoperator?: (ctx: UnaryoperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.newexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewexpression?: (ctx: NewexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.newplacement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewplacement?: (ctx: NewplacementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.newtypeid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewtypeid?: (ctx: NewtypeidContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.newdeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewdeclarator?: (ctx: NewdeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.noptrnewdeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoptrnewdeclarator?: (ctx: NoptrnewdeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.newinitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewinitializer?: (ctx: NewinitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.deleteexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteexpression?: (ctx: DeleteexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.noexceptexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoexceptexpression?: (ctx: NoexceptexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.castexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastexpression?: (ctx: CastexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.pmexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPmexpression?: (ctx: PmexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.multiplicativeexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeexpression?: (ctx: MultiplicativeexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.additiveexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveexpression?: (ctx: AdditiveexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.shiftexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftexpression?: (ctx: ShiftexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.relationalexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalexpression?: (ctx: RelationalexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.equalityexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityexpression?: (ctx: EqualityexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.andexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndexpression?: (ctx: AndexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.exclusiveorexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusiveorexpression?: (ctx: ExclusiveorexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.inclusiveorexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclusiveorexpression?: (ctx: InclusiveorexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.logicalandexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalandexpression?: (ctx: LogicalandexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.logicalorexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalorexpression?: (ctx: LogicalorexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.conditionalexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalexpression?: (ctx: ConditionalexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.assignmentexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentexpression?: (ctx: AssignmentexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.assignmentoperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentoperator?: (ctx: AssignmentoperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.constantexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantexpression?: (ctx: ConstantexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.labeledstatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeledstatement?: (ctx: LabeledstatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.expressionstatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionstatement?: (ctx: ExpressionstatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.compoundstatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundstatement?: (ctx: CompoundstatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.statementseq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementseq?: (ctx: StatementseqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.selectionstatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectionstatement?: (ctx: SelectionstatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.iterationstatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterationstatement?: (ctx: IterationstatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.forinitstatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForinitstatement?: (ctx: ForinitstatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.forrangedeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForrangedeclaration?: (ctx: ForrangedeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.forrangeinitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForrangeinitializer?: (ctx: ForrangeinitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.jumpstatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJumpstatement?: (ctx: JumpstatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.declarationstatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationstatement?: (ctx: DeclarationstatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.declarationseq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationseq?: (ctx: DeclarationseqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.blockdeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockdeclaration?: (ctx: BlockdeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.aliasdeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasdeclaration?: (ctx: AliasdeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.simpledeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpledeclaration?: (ctx: SimpledeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.static_assertdeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatic_assertdeclaration?: (ctx: Static_assertdeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.emptydeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptydeclaration?: (ctx: EmptydeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.attributedeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributedeclaration?: (ctx: AttributedeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.declspecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclspecifier?: (ctx: DeclspecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.declspecifierseq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclspecifierseq?: (ctx: DeclspecifierseqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.storageclassspecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStorageclassspecifier?: (ctx: StorageclassspecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.functionspecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionspecifier?: (ctx: FunctionspecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.typedefname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedefname?: (ctx: TypedefnameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.typespecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypespecifier?: (ctx: TypespecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.trailingtypespecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrailingtypespecifier?: (ctx: TrailingtypespecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.typespecifierseq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypespecifierseq?: (ctx: TypespecifierseqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.trailingtypespecifierseq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrailingtypespecifierseq?: (ctx: TrailingtypespecifierseqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.simpletypespecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpletypespecifier?: (ctx: SimpletypespecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.thetypename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThetypename?: (ctx: ThetypenameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.decltypespecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecltypespecifier?: (ctx: DecltypespecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.elaboratedtypespecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElaboratedtypespecifier?: (ctx: ElaboratedtypespecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.enumname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumname?: (ctx: EnumnameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.enumspecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumspecifier?: (ctx: EnumspecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.enumhead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumhead?: (ctx: EnumheadContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.opaqueenumdeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpaqueenumdeclaration?: (ctx: OpaqueenumdeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.enumkey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumkey?: (ctx: EnumkeyContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.enumbase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumbase?: (ctx: EnumbaseContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.enumeratorlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumeratorlist?: (ctx: EnumeratorlistContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.enumeratordefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumeratordefinition?: (ctx: EnumeratordefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.enumerator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerator?: (ctx: EnumeratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.namespacename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespacename?: (ctx: NamespacenameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.originalnamespacename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOriginalnamespacename?: (ctx: OriginalnamespacenameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.namespacedefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespacedefinition?: (ctx: NamespacedefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.namednamespacedefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamednamespacedefinition?: (ctx: NamednamespacedefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.originalnamespacedefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOriginalnamespacedefinition?: (ctx: OriginalnamespacedefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.extensionnamespacedefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionnamespacedefinition?: (ctx: ExtensionnamespacedefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.unnamednamespacedefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnnamednamespacedefinition?: (ctx: UnnamednamespacedefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.namespacebody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespacebody?: (ctx: NamespacebodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.namespacealias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespacealias?: (ctx: NamespacealiasContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.namespacealiasdefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespacealiasdefinition?: (ctx: NamespacealiasdefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.qualifiednamespacespecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiednamespacespecifier?: (ctx: QualifiednamespacespecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.usingdeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingdeclaration?: (ctx: UsingdeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.usingdirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingdirective?: (ctx: UsingdirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.asmdefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsmdefinition?: (ctx: AsmdefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.linkagespecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinkagespecification?: (ctx: LinkagespecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.attributespecifierseq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributespecifierseq?: (ctx: AttributespecifierseqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.attributespecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributespecifier?: (ctx: AttributespecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.alignmentspecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlignmentspecifier?: (ctx: AlignmentspecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.attributelist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributelist?: (ctx: AttributelistContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.attributetoken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributetoken?: (ctx: AttributetokenContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.attributescopedtoken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributescopedtoken?: (ctx: AttributescopedtokenContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.attributenamespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributenamespace?: (ctx: AttributenamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.attributeargumentclause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeargumentclause?: (ctx: AttributeargumentclauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.balancedtokenseq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBalancedtokenseq?: (ctx: BalancedtokenseqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.balancedtoken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBalancedtoken?: (ctx: BalancedtokenContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.initdeclaratorlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitdeclaratorlist?: (ctx: InitdeclaratorlistContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.initdeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitdeclarator?: (ctx: InitdeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarator?: (ctx: DeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.ptrdeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPtrdeclarator?: (ctx: PtrdeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.noptrdeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoptrdeclarator?: (ctx: NoptrdeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.parametersandqualifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParametersandqualifiers?: (ctx: ParametersandqualifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.trailingreturntype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrailingreturntype?: (ctx: TrailingreturntypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.ptroperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPtroperator?: (ctx: PtroperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.cvqualifierseq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCvqualifierseq?: (ctx: CvqualifierseqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.cvqualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCvqualifier?: (ctx: CvqualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.refqualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefqualifier?: (ctx: RefqualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.declaratorid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaratorid?: (ctx: DeclaratoridContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.thetypeid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThetypeid?: (ctx: ThetypeidContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.abstractdeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbstractdeclarator?: (ctx: AbstractdeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.ptrabstractdeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPtrabstractdeclarator?: (ctx: PtrabstractdeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.noptrabstractdeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoptrabstractdeclarator?: (ctx: NoptrabstractdeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.abstractpackdeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbstractpackdeclarator?: (ctx: AbstractpackdeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.noptrabstractpackdeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoptrabstractpackdeclarator?: (ctx: NoptrabstractpackdeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.parameterdeclarationclause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterdeclarationclause?: (ctx: ParameterdeclarationclauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.parameterdeclarationlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterdeclarationlist?: (ctx: ParameterdeclarationlistContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.parameterdeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterdeclaration?: (ctx: ParameterdeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.functiondefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctiondefinition?: (ctx: FunctiondefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.functionbody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionbody?: (ctx: FunctionbodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer?: (ctx: InitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.braceorequalinitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBraceorequalinitializer?: (ctx: BraceorequalinitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.initializerclause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializerclause?: (ctx: InitializerclauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.initializerlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializerlist?: (ctx: InitializerlistContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.bracedinitlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracedinitlist?: (ctx: BracedinitlistContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.classname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassname?: (ctx: ClassnameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.classspecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassspecifier?: (ctx: ClassspecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.classhead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClasshead?: (ctx: ClassheadContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.classheadname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassheadname?: (ctx: ClassheadnameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.classvirtspecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassvirtspecifier?: (ctx: ClassvirtspecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.classkey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClasskey?: (ctx: ClasskeyContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.memberspecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberspecification?: (ctx: MemberspecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.memberdeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberdeclaration?: (ctx: MemberdeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.memberdeclaratorlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberdeclaratorlist?: (ctx: MemberdeclaratorlistContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.memberdeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberdeclarator?: (ctx: MemberdeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.virtspecifierseq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVirtspecifierseq?: (ctx: VirtspecifierseqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.virtspecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVirtspecifier?: (ctx: VirtspecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.purespecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPurespecifier?: (ctx: PurespecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.baseclause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseclause?: (ctx: BaseclauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.basespecifierlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasespecifierlist?: (ctx: BasespecifierlistContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.basespecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasespecifier?: (ctx: BasespecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.classordecltype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassordecltype?: (ctx: ClassordecltypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.basetypespecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasetypespecifier?: (ctx: BasetypespecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.accessspecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccessspecifier?: (ctx: AccessspecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.conversionfunctionid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConversionfunctionid?: (ctx: ConversionfunctionidContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.conversiontypeid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConversiontypeid?: (ctx: ConversiontypeidContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.conversiondeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConversiondeclarator?: (ctx: ConversiondeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.ctorinitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCtorinitializer?: (ctx: CtorinitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.meminitializerlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeminitializerlist?: (ctx: MeminitializerlistContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.meminitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeminitializer?: (ctx: MeminitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.meminitializerid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeminitializerid?: (ctx: MeminitializeridContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.operatorfunctionid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorfunctionid?: (ctx: OperatorfunctionidContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.literaloperatorid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteraloperatorid?: (ctx: LiteraloperatoridContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.templatedeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplatedeclaration?: (ctx: TemplatedeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.templateparameterlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateparameterlist?: (ctx: TemplateparameterlistContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.templateparameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateparameter?: (ctx: TemplateparameterContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.typeparameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeparameter?: (ctx: TypeparameterContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.simpletemplateid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpletemplateid?: (ctx: SimpletemplateidContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.templateid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateid?: (ctx: TemplateidContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.templatename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplatename?: (ctx: TemplatenameContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.templateargumentlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateargumentlist?: (ctx: TemplateargumentlistContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.templateargument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateargument?: (ctx: TemplateargumentContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.typenamespecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypenamespecifier?: (ctx: TypenamespecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.explicitinstantiation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitinstantiation?: (ctx: ExplicitinstantiationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.explicitspecialization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitspecialization?: (ctx: ExplicitspecializationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.tryblock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryblock?: (ctx: TryblockContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.functiontryblock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctiontryblock?: (ctx: FunctiontryblockContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.handlerseq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandlerseq?: (ctx: HandlerseqContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.handler`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandler?: (ctx: HandlerContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.exceptiondeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptiondeclaration?: (ctx: ExceptiondeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.throwexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowexpression?: (ctx: ThrowexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.exceptionspecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptionspecification?: (ctx: ExceptionspecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.dynamicexceptionspecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynamicexceptionspecification?: (ctx: DynamicexceptionspecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.typeidlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeidlist?: (ctx: TypeidlistContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.noexceptspecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoexceptspecification?: (ctx: NoexceptspecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.rightShift`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightShift?: (ctx: RightShiftContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.rightShiftAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightShiftAssign?: (ctx: RightShiftAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.theoperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTheoperator?: (ctx: TheoperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.booleanliteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanliteral?: (ctx: BooleanliteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.pointerliteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointerliteral?: (ctx: PointerliteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CPP14Parser.userdefinedliteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserdefinedliteral?: (ctx: UserdefinedliteralContext) => Result;
}

