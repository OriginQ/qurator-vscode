// Generated from CPP14.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

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
 * This interface defines a complete listener for a parse tree produced by
 * `CPP14Parser`.
 */
export interface CPP14Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CPP14Parser.translationunit`.
	 * @param ctx the parse tree
	 */
	enterTranslationunit?: (ctx: TranslationunitContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.translationunit`.
	 * @param ctx the parse tree
	 */
	exitTranslationunit?: (ctx: TranslationunitContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.primaryexpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryexpression?: (ctx: PrimaryexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.primaryexpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryexpression?: (ctx: PrimaryexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.idexpression`.
	 * @param ctx the parse tree
	 */
	enterIdexpression?: (ctx: IdexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.idexpression`.
	 * @param ctx the parse tree
	 */
	exitIdexpression?: (ctx: IdexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.unqualifiedid`.
	 * @param ctx the parse tree
	 */
	enterUnqualifiedid?: (ctx: UnqualifiedidContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.unqualifiedid`.
	 * @param ctx the parse tree
	 */
	exitUnqualifiedid?: (ctx: UnqualifiedidContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.qualifiedid`.
	 * @param ctx the parse tree
	 */
	enterQualifiedid?: (ctx: QualifiedidContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.qualifiedid`.
	 * @param ctx the parse tree
	 */
	exitQualifiedid?: (ctx: QualifiedidContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.nestednamespecifier`.
	 * @param ctx the parse tree
	 */
	enterNestednamespecifier?: (ctx: NestednamespecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.nestednamespecifier`.
	 * @param ctx the parse tree
	 */
	exitNestednamespecifier?: (ctx: NestednamespecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.lambdaexpression`.
	 * @param ctx the parse tree
	 */
	enterLambdaexpression?: (ctx: LambdaexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.lambdaexpression`.
	 * @param ctx the parse tree
	 */
	exitLambdaexpression?: (ctx: LambdaexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.lambdaintroducer`.
	 * @param ctx the parse tree
	 */
	enterLambdaintroducer?: (ctx: LambdaintroducerContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.lambdaintroducer`.
	 * @param ctx the parse tree
	 */
	exitLambdaintroducer?: (ctx: LambdaintroducerContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.lambdacapture`.
	 * @param ctx the parse tree
	 */
	enterLambdacapture?: (ctx: LambdacaptureContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.lambdacapture`.
	 * @param ctx the parse tree
	 */
	exitLambdacapture?: (ctx: LambdacaptureContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.capturedefault`.
	 * @param ctx the parse tree
	 */
	enterCapturedefault?: (ctx: CapturedefaultContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.capturedefault`.
	 * @param ctx the parse tree
	 */
	exitCapturedefault?: (ctx: CapturedefaultContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.capturelist`.
	 * @param ctx the parse tree
	 */
	enterCapturelist?: (ctx: CapturelistContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.capturelist`.
	 * @param ctx the parse tree
	 */
	exitCapturelist?: (ctx: CapturelistContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.capture`.
	 * @param ctx the parse tree
	 */
	enterCapture?: (ctx: CaptureContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.capture`.
	 * @param ctx the parse tree
	 */
	exitCapture?: (ctx: CaptureContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.simplecapture`.
	 * @param ctx the parse tree
	 */
	enterSimplecapture?: (ctx: SimplecaptureContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.simplecapture`.
	 * @param ctx the parse tree
	 */
	exitSimplecapture?: (ctx: SimplecaptureContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.initcapture`.
	 * @param ctx the parse tree
	 */
	enterInitcapture?: (ctx: InitcaptureContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.initcapture`.
	 * @param ctx the parse tree
	 */
	exitInitcapture?: (ctx: InitcaptureContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.lambdadeclarator`.
	 * @param ctx the parse tree
	 */
	enterLambdadeclarator?: (ctx: LambdadeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.lambdadeclarator`.
	 * @param ctx the parse tree
	 */
	exitLambdadeclarator?: (ctx: LambdadeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.postfixexpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixexpression?: (ctx: PostfixexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.postfixexpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixexpression?: (ctx: PostfixexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.typeidofexpr`.
	 * @param ctx the parse tree
	 */
	enterTypeidofexpr?: (ctx: TypeidofexprContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.typeidofexpr`.
	 * @param ctx the parse tree
	 */
	exitTypeidofexpr?: (ctx: TypeidofexprContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.typeidofthetypeid`.
	 * @param ctx the parse tree
	 */
	enterTypeidofthetypeid?: (ctx: TypeidofthetypeidContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.typeidofthetypeid`.
	 * @param ctx the parse tree
	 */
	exitTypeidofthetypeid?: (ctx: TypeidofthetypeidContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.expressionlist`.
	 * @param ctx the parse tree
	 */
	enterExpressionlist?: (ctx: ExpressionlistContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.expressionlist`.
	 * @param ctx the parse tree
	 */
	exitExpressionlist?: (ctx: ExpressionlistContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.pseudodestructorname`.
	 * @param ctx the parse tree
	 */
	enterPseudodestructorname?: (ctx: PseudodestructornameContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.pseudodestructorname`.
	 * @param ctx the parse tree
	 */
	exitPseudodestructorname?: (ctx: PseudodestructornameContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.unaryexpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryexpression?: (ctx: UnaryexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.unaryexpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryexpression?: (ctx: UnaryexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.unaryoperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryoperator?: (ctx: UnaryoperatorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.unaryoperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryoperator?: (ctx: UnaryoperatorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.newexpression`.
	 * @param ctx the parse tree
	 */
	enterNewexpression?: (ctx: NewexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.newexpression`.
	 * @param ctx the parse tree
	 */
	exitNewexpression?: (ctx: NewexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.newplacement`.
	 * @param ctx the parse tree
	 */
	enterNewplacement?: (ctx: NewplacementContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.newplacement`.
	 * @param ctx the parse tree
	 */
	exitNewplacement?: (ctx: NewplacementContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.newtypeid`.
	 * @param ctx the parse tree
	 */
	enterNewtypeid?: (ctx: NewtypeidContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.newtypeid`.
	 * @param ctx the parse tree
	 */
	exitNewtypeid?: (ctx: NewtypeidContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.newdeclarator`.
	 * @param ctx the parse tree
	 */
	enterNewdeclarator?: (ctx: NewdeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.newdeclarator`.
	 * @param ctx the parse tree
	 */
	exitNewdeclarator?: (ctx: NewdeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.noptrnewdeclarator`.
	 * @param ctx the parse tree
	 */
	enterNoptrnewdeclarator?: (ctx: NoptrnewdeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.noptrnewdeclarator`.
	 * @param ctx the parse tree
	 */
	exitNoptrnewdeclarator?: (ctx: NoptrnewdeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.newinitializer`.
	 * @param ctx the parse tree
	 */
	enterNewinitializer?: (ctx: NewinitializerContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.newinitializer`.
	 * @param ctx the parse tree
	 */
	exitNewinitializer?: (ctx: NewinitializerContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.deleteexpression`.
	 * @param ctx the parse tree
	 */
	enterDeleteexpression?: (ctx: DeleteexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.deleteexpression`.
	 * @param ctx the parse tree
	 */
	exitDeleteexpression?: (ctx: DeleteexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.noexceptexpression`.
	 * @param ctx the parse tree
	 */
	enterNoexceptexpression?: (ctx: NoexceptexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.noexceptexpression`.
	 * @param ctx the parse tree
	 */
	exitNoexceptexpression?: (ctx: NoexceptexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.castexpression`.
	 * @param ctx the parse tree
	 */
	enterCastexpression?: (ctx: CastexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.castexpression`.
	 * @param ctx the parse tree
	 */
	exitCastexpression?: (ctx: CastexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.pmexpression`.
	 * @param ctx the parse tree
	 */
	enterPmexpression?: (ctx: PmexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.pmexpression`.
	 * @param ctx the parse tree
	 */
	exitPmexpression?: (ctx: PmexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.multiplicativeexpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeexpression?: (ctx: MultiplicativeexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.multiplicativeexpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeexpression?: (ctx: MultiplicativeexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.additiveexpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveexpression?: (ctx: AdditiveexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.additiveexpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveexpression?: (ctx: AdditiveexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.shiftexpression`.
	 * @param ctx the parse tree
	 */
	enterShiftexpression?: (ctx: ShiftexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.shiftexpression`.
	 * @param ctx the parse tree
	 */
	exitShiftexpression?: (ctx: ShiftexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.relationalexpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalexpression?: (ctx: RelationalexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.relationalexpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalexpression?: (ctx: RelationalexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.equalityexpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityexpression?: (ctx: EqualityexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.equalityexpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityexpression?: (ctx: EqualityexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.andexpression`.
	 * @param ctx the parse tree
	 */
	enterAndexpression?: (ctx: AndexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.andexpression`.
	 * @param ctx the parse tree
	 */
	exitAndexpression?: (ctx: AndexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.exclusiveorexpression`.
	 * @param ctx the parse tree
	 */
	enterExclusiveorexpression?: (ctx: ExclusiveorexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.exclusiveorexpression`.
	 * @param ctx the parse tree
	 */
	exitExclusiveorexpression?: (ctx: ExclusiveorexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.inclusiveorexpression`.
	 * @param ctx the parse tree
	 */
	enterInclusiveorexpression?: (ctx: InclusiveorexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.inclusiveorexpression`.
	 * @param ctx the parse tree
	 */
	exitInclusiveorexpression?: (ctx: InclusiveorexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.logicalandexpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalandexpression?: (ctx: LogicalandexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.logicalandexpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalandexpression?: (ctx: LogicalandexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.logicalorexpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalorexpression?: (ctx: LogicalorexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.logicalorexpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalorexpression?: (ctx: LogicalorexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.conditionalexpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalexpression?: (ctx: ConditionalexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.conditionalexpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalexpression?: (ctx: ConditionalexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.assignmentexpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentexpression?: (ctx: AssignmentexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.assignmentexpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentexpression?: (ctx: AssignmentexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.assignmentoperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentoperator?: (ctx: AssignmentoperatorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.assignmentoperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentoperator?: (ctx: AssignmentoperatorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.constantexpression`.
	 * @param ctx the parse tree
	 */
	enterConstantexpression?: (ctx: ConstantexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.constantexpression`.
	 * @param ctx the parse tree
	 */
	exitConstantexpression?: (ctx: ConstantexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.labeledstatement`.
	 * @param ctx the parse tree
	 */
	enterLabeledstatement?: (ctx: LabeledstatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.labeledstatement`.
	 * @param ctx the parse tree
	 */
	exitLabeledstatement?: (ctx: LabeledstatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.expressionstatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionstatement?: (ctx: ExpressionstatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.expressionstatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionstatement?: (ctx: ExpressionstatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.compoundstatement`.
	 * @param ctx the parse tree
	 */
	enterCompoundstatement?: (ctx: CompoundstatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.compoundstatement`.
	 * @param ctx the parse tree
	 */
	exitCompoundstatement?: (ctx: CompoundstatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.statementseq`.
	 * @param ctx the parse tree
	 */
	enterStatementseq?: (ctx: StatementseqContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.statementseq`.
	 * @param ctx the parse tree
	 */
	exitStatementseq?: (ctx: StatementseqContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.selectionstatement`.
	 * @param ctx the parse tree
	 */
	enterSelectionstatement?: (ctx: SelectionstatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.selectionstatement`.
	 * @param ctx the parse tree
	 */
	exitSelectionstatement?: (ctx: SelectionstatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.iterationstatement`.
	 * @param ctx the parse tree
	 */
	enterIterationstatement?: (ctx: IterationstatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.iterationstatement`.
	 * @param ctx the parse tree
	 */
	exitIterationstatement?: (ctx: IterationstatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.forinitstatement`.
	 * @param ctx the parse tree
	 */
	enterForinitstatement?: (ctx: ForinitstatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.forinitstatement`.
	 * @param ctx the parse tree
	 */
	exitForinitstatement?: (ctx: ForinitstatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.forrangedeclaration`.
	 * @param ctx the parse tree
	 */
	enterForrangedeclaration?: (ctx: ForrangedeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.forrangedeclaration`.
	 * @param ctx the parse tree
	 */
	exitForrangedeclaration?: (ctx: ForrangedeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.forrangeinitializer`.
	 * @param ctx the parse tree
	 */
	enterForrangeinitializer?: (ctx: ForrangeinitializerContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.forrangeinitializer`.
	 * @param ctx the parse tree
	 */
	exitForrangeinitializer?: (ctx: ForrangeinitializerContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.jumpstatement`.
	 * @param ctx the parse tree
	 */
	enterJumpstatement?: (ctx: JumpstatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.jumpstatement`.
	 * @param ctx the parse tree
	 */
	exitJumpstatement?: (ctx: JumpstatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.declarationstatement`.
	 * @param ctx the parse tree
	 */
	enterDeclarationstatement?: (ctx: DeclarationstatementContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.declarationstatement`.
	 * @param ctx the parse tree
	 */
	exitDeclarationstatement?: (ctx: DeclarationstatementContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.declarationseq`.
	 * @param ctx the parse tree
	 */
	enterDeclarationseq?: (ctx: DeclarationseqContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.declarationseq`.
	 * @param ctx the parse tree
	 */
	exitDeclarationseq?: (ctx: DeclarationseqContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.blockdeclaration`.
	 * @param ctx the parse tree
	 */
	enterBlockdeclaration?: (ctx: BlockdeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.blockdeclaration`.
	 * @param ctx the parse tree
	 */
	exitBlockdeclaration?: (ctx: BlockdeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.aliasdeclaration`.
	 * @param ctx the parse tree
	 */
	enterAliasdeclaration?: (ctx: AliasdeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.aliasdeclaration`.
	 * @param ctx the parse tree
	 */
	exitAliasdeclaration?: (ctx: AliasdeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.simpledeclaration`.
	 * @param ctx the parse tree
	 */
	enterSimpledeclaration?: (ctx: SimpledeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.simpledeclaration`.
	 * @param ctx the parse tree
	 */
	exitSimpledeclaration?: (ctx: SimpledeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.static_assertdeclaration`.
	 * @param ctx the parse tree
	 */
	enterStatic_assertdeclaration?: (ctx: Static_assertdeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.static_assertdeclaration`.
	 * @param ctx the parse tree
	 */
	exitStatic_assertdeclaration?: (ctx: Static_assertdeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.emptydeclaration`.
	 * @param ctx the parse tree
	 */
	enterEmptydeclaration?: (ctx: EmptydeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.emptydeclaration`.
	 * @param ctx the parse tree
	 */
	exitEmptydeclaration?: (ctx: EmptydeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.attributedeclaration`.
	 * @param ctx the parse tree
	 */
	enterAttributedeclaration?: (ctx: AttributedeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.attributedeclaration`.
	 * @param ctx the parse tree
	 */
	exitAttributedeclaration?: (ctx: AttributedeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.declspecifier`.
	 * @param ctx the parse tree
	 */
	enterDeclspecifier?: (ctx: DeclspecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.declspecifier`.
	 * @param ctx the parse tree
	 */
	exitDeclspecifier?: (ctx: DeclspecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.declspecifierseq`.
	 * @param ctx the parse tree
	 */
	enterDeclspecifierseq?: (ctx: DeclspecifierseqContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.declspecifierseq`.
	 * @param ctx the parse tree
	 */
	exitDeclspecifierseq?: (ctx: DeclspecifierseqContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.storageclassspecifier`.
	 * @param ctx the parse tree
	 */
	enterStorageclassspecifier?: (ctx: StorageclassspecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.storageclassspecifier`.
	 * @param ctx the parse tree
	 */
	exitStorageclassspecifier?: (ctx: StorageclassspecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.functionspecifier`.
	 * @param ctx the parse tree
	 */
	enterFunctionspecifier?: (ctx: FunctionspecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.functionspecifier`.
	 * @param ctx the parse tree
	 */
	exitFunctionspecifier?: (ctx: FunctionspecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.typedefname`.
	 * @param ctx the parse tree
	 */
	enterTypedefname?: (ctx: TypedefnameContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.typedefname`.
	 * @param ctx the parse tree
	 */
	exitTypedefname?: (ctx: TypedefnameContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.typespecifier`.
	 * @param ctx the parse tree
	 */
	enterTypespecifier?: (ctx: TypespecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.typespecifier`.
	 * @param ctx the parse tree
	 */
	exitTypespecifier?: (ctx: TypespecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.trailingtypespecifier`.
	 * @param ctx the parse tree
	 */
	enterTrailingtypespecifier?: (ctx: TrailingtypespecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.trailingtypespecifier`.
	 * @param ctx the parse tree
	 */
	exitTrailingtypespecifier?: (ctx: TrailingtypespecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.typespecifierseq`.
	 * @param ctx the parse tree
	 */
	enterTypespecifierseq?: (ctx: TypespecifierseqContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.typespecifierseq`.
	 * @param ctx the parse tree
	 */
	exitTypespecifierseq?: (ctx: TypespecifierseqContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.trailingtypespecifierseq`.
	 * @param ctx the parse tree
	 */
	enterTrailingtypespecifierseq?: (ctx: TrailingtypespecifierseqContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.trailingtypespecifierseq`.
	 * @param ctx the parse tree
	 */
	exitTrailingtypespecifierseq?: (ctx: TrailingtypespecifierseqContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.simpletypespecifier`.
	 * @param ctx the parse tree
	 */
	enterSimpletypespecifier?: (ctx: SimpletypespecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.simpletypespecifier`.
	 * @param ctx the parse tree
	 */
	exitSimpletypespecifier?: (ctx: SimpletypespecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.thetypename`.
	 * @param ctx the parse tree
	 */
	enterThetypename?: (ctx: ThetypenameContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.thetypename`.
	 * @param ctx the parse tree
	 */
	exitThetypename?: (ctx: ThetypenameContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.decltypespecifier`.
	 * @param ctx the parse tree
	 */
	enterDecltypespecifier?: (ctx: DecltypespecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.decltypespecifier`.
	 * @param ctx the parse tree
	 */
	exitDecltypespecifier?: (ctx: DecltypespecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.elaboratedtypespecifier`.
	 * @param ctx the parse tree
	 */
	enterElaboratedtypespecifier?: (ctx: ElaboratedtypespecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.elaboratedtypespecifier`.
	 * @param ctx the parse tree
	 */
	exitElaboratedtypespecifier?: (ctx: ElaboratedtypespecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.enumname`.
	 * @param ctx the parse tree
	 */
	enterEnumname?: (ctx: EnumnameContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.enumname`.
	 * @param ctx the parse tree
	 */
	exitEnumname?: (ctx: EnumnameContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.enumspecifier`.
	 * @param ctx the parse tree
	 */
	enterEnumspecifier?: (ctx: EnumspecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.enumspecifier`.
	 * @param ctx the parse tree
	 */
	exitEnumspecifier?: (ctx: EnumspecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.enumhead`.
	 * @param ctx the parse tree
	 */
	enterEnumhead?: (ctx: EnumheadContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.enumhead`.
	 * @param ctx the parse tree
	 */
	exitEnumhead?: (ctx: EnumheadContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.opaqueenumdeclaration`.
	 * @param ctx the parse tree
	 */
	enterOpaqueenumdeclaration?: (ctx: OpaqueenumdeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.opaqueenumdeclaration`.
	 * @param ctx the parse tree
	 */
	exitOpaqueenumdeclaration?: (ctx: OpaqueenumdeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.enumkey`.
	 * @param ctx the parse tree
	 */
	enterEnumkey?: (ctx: EnumkeyContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.enumkey`.
	 * @param ctx the parse tree
	 */
	exitEnumkey?: (ctx: EnumkeyContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.enumbase`.
	 * @param ctx the parse tree
	 */
	enterEnumbase?: (ctx: EnumbaseContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.enumbase`.
	 * @param ctx the parse tree
	 */
	exitEnumbase?: (ctx: EnumbaseContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.enumeratorlist`.
	 * @param ctx the parse tree
	 */
	enterEnumeratorlist?: (ctx: EnumeratorlistContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.enumeratorlist`.
	 * @param ctx the parse tree
	 */
	exitEnumeratorlist?: (ctx: EnumeratorlistContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.enumeratordefinition`.
	 * @param ctx the parse tree
	 */
	enterEnumeratordefinition?: (ctx: EnumeratordefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.enumeratordefinition`.
	 * @param ctx the parse tree
	 */
	exitEnumeratordefinition?: (ctx: EnumeratordefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.enumerator`.
	 * @param ctx the parse tree
	 */
	enterEnumerator?: (ctx: EnumeratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.enumerator`.
	 * @param ctx the parse tree
	 */
	exitEnumerator?: (ctx: EnumeratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.namespacename`.
	 * @param ctx the parse tree
	 */
	enterNamespacename?: (ctx: NamespacenameContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.namespacename`.
	 * @param ctx the parse tree
	 */
	exitNamespacename?: (ctx: NamespacenameContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.originalnamespacename`.
	 * @param ctx the parse tree
	 */
	enterOriginalnamespacename?: (ctx: OriginalnamespacenameContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.originalnamespacename`.
	 * @param ctx the parse tree
	 */
	exitOriginalnamespacename?: (ctx: OriginalnamespacenameContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.namespacedefinition`.
	 * @param ctx the parse tree
	 */
	enterNamespacedefinition?: (ctx: NamespacedefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.namespacedefinition`.
	 * @param ctx the parse tree
	 */
	exitNamespacedefinition?: (ctx: NamespacedefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.namednamespacedefinition`.
	 * @param ctx the parse tree
	 */
	enterNamednamespacedefinition?: (ctx: NamednamespacedefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.namednamespacedefinition`.
	 * @param ctx the parse tree
	 */
	exitNamednamespacedefinition?: (ctx: NamednamespacedefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.originalnamespacedefinition`.
	 * @param ctx the parse tree
	 */
	enterOriginalnamespacedefinition?: (ctx: OriginalnamespacedefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.originalnamespacedefinition`.
	 * @param ctx the parse tree
	 */
	exitOriginalnamespacedefinition?: (ctx: OriginalnamespacedefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.extensionnamespacedefinition`.
	 * @param ctx the parse tree
	 */
	enterExtensionnamespacedefinition?: (ctx: ExtensionnamespacedefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.extensionnamespacedefinition`.
	 * @param ctx the parse tree
	 */
	exitExtensionnamespacedefinition?: (ctx: ExtensionnamespacedefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.unnamednamespacedefinition`.
	 * @param ctx the parse tree
	 */
	enterUnnamednamespacedefinition?: (ctx: UnnamednamespacedefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.unnamednamespacedefinition`.
	 * @param ctx the parse tree
	 */
	exitUnnamednamespacedefinition?: (ctx: UnnamednamespacedefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.namespacebody`.
	 * @param ctx the parse tree
	 */
	enterNamespacebody?: (ctx: NamespacebodyContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.namespacebody`.
	 * @param ctx the parse tree
	 */
	exitNamespacebody?: (ctx: NamespacebodyContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.namespacealias`.
	 * @param ctx the parse tree
	 */
	enterNamespacealias?: (ctx: NamespacealiasContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.namespacealias`.
	 * @param ctx the parse tree
	 */
	exitNamespacealias?: (ctx: NamespacealiasContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.namespacealiasdefinition`.
	 * @param ctx the parse tree
	 */
	enterNamespacealiasdefinition?: (ctx: NamespacealiasdefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.namespacealiasdefinition`.
	 * @param ctx the parse tree
	 */
	exitNamespacealiasdefinition?: (ctx: NamespacealiasdefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.qualifiednamespacespecifier`.
	 * @param ctx the parse tree
	 */
	enterQualifiednamespacespecifier?: (ctx: QualifiednamespacespecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.qualifiednamespacespecifier`.
	 * @param ctx the parse tree
	 */
	exitQualifiednamespacespecifier?: (ctx: QualifiednamespacespecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.usingdeclaration`.
	 * @param ctx the parse tree
	 */
	enterUsingdeclaration?: (ctx: UsingdeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.usingdeclaration`.
	 * @param ctx the parse tree
	 */
	exitUsingdeclaration?: (ctx: UsingdeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.usingdirective`.
	 * @param ctx the parse tree
	 */
	enterUsingdirective?: (ctx: UsingdirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.usingdirective`.
	 * @param ctx the parse tree
	 */
	exitUsingdirective?: (ctx: UsingdirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.asmdefinition`.
	 * @param ctx the parse tree
	 */
	enterAsmdefinition?: (ctx: AsmdefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.asmdefinition`.
	 * @param ctx the parse tree
	 */
	exitAsmdefinition?: (ctx: AsmdefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.linkagespecification`.
	 * @param ctx the parse tree
	 */
	enterLinkagespecification?: (ctx: LinkagespecificationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.linkagespecification`.
	 * @param ctx the parse tree
	 */
	exitLinkagespecification?: (ctx: LinkagespecificationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.attributespecifierseq`.
	 * @param ctx the parse tree
	 */
	enterAttributespecifierseq?: (ctx: AttributespecifierseqContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.attributespecifierseq`.
	 * @param ctx the parse tree
	 */
	exitAttributespecifierseq?: (ctx: AttributespecifierseqContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.attributespecifier`.
	 * @param ctx the parse tree
	 */
	enterAttributespecifier?: (ctx: AttributespecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.attributespecifier`.
	 * @param ctx the parse tree
	 */
	exitAttributespecifier?: (ctx: AttributespecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.alignmentspecifier`.
	 * @param ctx the parse tree
	 */
	enterAlignmentspecifier?: (ctx: AlignmentspecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.alignmentspecifier`.
	 * @param ctx the parse tree
	 */
	exitAlignmentspecifier?: (ctx: AlignmentspecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.attributelist`.
	 * @param ctx the parse tree
	 */
	enterAttributelist?: (ctx: AttributelistContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.attributelist`.
	 * @param ctx the parse tree
	 */
	exitAttributelist?: (ctx: AttributelistContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.attributetoken`.
	 * @param ctx the parse tree
	 */
	enterAttributetoken?: (ctx: AttributetokenContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.attributetoken`.
	 * @param ctx the parse tree
	 */
	exitAttributetoken?: (ctx: AttributetokenContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.attributescopedtoken`.
	 * @param ctx the parse tree
	 */
	enterAttributescopedtoken?: (ctx: AttributescopedtokenContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.attributescopedtoken`.
	 * @param ctx the parse tree
	 */
	exitAttributescopedtoken?: (ctx: AttributescopedtokenContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.attributenamespace`.
	 * @param ctx the parse tree
	 */
	enterAttributenamespace?: (ctx: AttributenamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.attributenamespace`.
	 * @param ctx the parse tree
	 */
	exitAttributenamespace?: (ctx: AttributenamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.attributeargumentclause`.
	 * @param ctx the parse tree
	 */
	enterAttributeargumentclause?: (ctx: AttributeargumentclauseContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.attributeargumentclause`.
	 * @param ctx the parse tree
	 */
	exitAttributeargumentclause?: (ctx: AttributeargumentclauseContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.balancedtokenseq`.
	 * @param ctx the parse tree
	 */
	enterBalancedtokenseq?: (ctx: BalancedtokenseqContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.balancedtokenseq`.
	 * @param ctx the parse tree
	 */
	exitBalancedtokenseq?: (ctx: BalancedtokenseqContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.balancedtoken`.
	 * @param ctx the parse tree
	 */
	enterBalancedtoken?: (ctx: BalancedtokenContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.balancedtoken`.
	 * @param ctx the parse tree
	 */
	exitBalancedtoken?: (ctx: BalancedtokenContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.initdeclaratorlist`.
	 * @param ctx the parse tree
	 */
	enterInitdeclaratorlist?: (ctx: InitdeclaratorlistContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.initdeclaratorlist`.
	 * @param ctx the parse tree
	 */
	exitInitdeclaratorlist?: (ctx: InitdeclaratorlistContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.initdeclarator`.
	 * @param ctx the parse tree
	 */
	enterInitdeclarator?: (ctx: InitdeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.initdeclarator`.
	 * @param ctx the parse tree
	 */
	exitInitdeclarator?: (ctx: InitdeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.declarator`.
	 * @param ctx the parse tree
	 */
	enterDeclarator?: (ctx: DeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.declarator`.
	 * @param ctx the parse tree
	 */
	exitDeclarator?: (ctx: DeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.ptrdeclarator`.
	 * @param ctx the parse tree
	 */
	enterPtrdeclarator?: (ctx: PtrdeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.ptrdeclarator`.
	 * @param ctx the parse tree
	 */
	exitPtrdeclarator?: (ctx: PtrdeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.noptrdeclarator`.
	 * @param ctx the parse tree
	 */
	enterNoptrdeclarator?: (ctx: NoptrdeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.noptrdeclarator`.
	 * @param ctx the parse tree
	 */
	exitNoptrdeclarator?: (ctx: NoptrdeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.parametersandqualifiers`.
	 * @param ctx the parse tree
	 */
	enterParametersandqualifiers?: (ctx: ParametersandqualifiersContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.parametersandqualifiers`.
	 * @param ctx the parse tree
	 */
	exitParametersandqualifiers?: (ctx: ParametersandqualifiersContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.trailingreturntype`.
	 * @param ctx the parse tree
	 */
	enterTrailingreturntype?: (ctx: TrailingreturntypeContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.trailingreturntype`.
	 * @param ctx the parse tree
	 */
	exitTrailingreturntype?: (ctx: TrailingreturntypeContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.ptroperator`.
	 * @param ctx the parse tree
	 */
	enterPtroperator?: (ctx: PtroperatorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.ptroperator`.
	 * @param ctx the parse tree
	 */
	exitPtroperator?: (ctx: PtroperatorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.cvqualifierseq`.
	 * @param ctx the parse tree
	 */
	enterCvqualifierseq?: (ctx: CvqualifierseqContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.cvqualifierseq`.
	 * @param ctx the parse tree
	 */
	exitCvqualifierseq?: (ctx: CvqualifierseqContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.cvqualifier`.
	 * @param ctx the parse tree
	 */
	enterCvqualifier?: (ctx: CvqualifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.cvqualifier`.
	 * @param ctx the parse tree
	 */
	exitCvqualifier?: (ctx: CvqualifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.refqualifier`.
	 * @param ctx the parse tree
	 */
	enterRefqualifier?: (ctx: RefqualifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.refqualifier`.
	 * @param ctx the parse tree
	 */
	exitRefqualifier?: (ctx: RefqualifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.declaratorid`.
	 * @param ctx the parse tree
	 */
	enterDeclaratorid?: (ctx: DeclaratoridContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.declaratorid`.
	 * @param ctx the parse tree
	 */
	exitDeclaratorid?: (ctx: DeclaratoridContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.thetypeid`.
	 * @param ctx the parse tree
	 */
	enterThetypeid?: (ctx: ThetypeidContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.thetypeid`.
	 * @param ctx the parse tree
	 */
	exitThetypeid?: (ctx: ThetypeidContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.abstractdeclarator`.
	 * @param ctx the parse tree
	 */
	enterAbstractdeclarator?: (ctx: AbstractdeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.abstractdeclarator`.
	 * @param ctx the parse tree
	 */
	exitAbstractdeclarator?: (ctx: AbstractdeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.ptrabstractdeclarator`.
	 * @param ctx the parse tree
	 */
	enterPtrabstractdeclarator?: (ctx: PtrabstractdeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.ptrabstractdeclarator`.
	 * @param ctx the parse tree
	 */
	exitPtrabstractdeclarator?: (ctx: PtrabstractdeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.noptrabstractdeclarator`.
	 * @param ctx the parse tree
	 */
	enterNoptrabstractdeclarator?: (ctx: NoptrabstractdeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.noptrabstractdeclarator`.
	 * @param ctx the parse tree
	 */
	exitNoptrabstractdeclarator?: (ctx: NoptrabstractdeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.abstractpackdeclarator`.
	 * @param ctx the parse tree
	 */
	enterAbstractpackdeclarator?: (ctx: AbstractpackdeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.abstractpackdeclarator`.
	 * @param ctx the parse tree
	 */
	exitAbstractpackdeclarator?: (ctx: AbstractpackdeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.noptrabstractpackdeclarator`.
	 * @param ctx the parse tree
	 */
	enterNoptrabstractpackdeclarator?: (ctx: NoptrabstractpackdeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.noptrabstractpackdeclarator`.
	 * @param ctx the parse tree
	 */
	exitNoptrabstractpackdeclarator?: (ctx: NoptrabstractpackdeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.parameterdeclarationclause`.
	 * @param ctx the parse tree
	 */
	enterParameterdeclarationclause?: (ctx: ParameterdeclarationclauseContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.parameterdeclarationclause`.
	 * @param ctx the parse tree
	 */
	exitParameterdeclarationclause?: (ctx: ParameterdeclarationclauseContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.parameterdeclarationlist`.
	 * @param ctx the parse tree
	 */
	enterParameterdeclarationlist?: (ctx: ParameterdeclarationlistContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.parameterdeclarationlist`.
	 * @param ctx the parse tree
	 */
	exitParameterdeclarationlist?: (ctx: ParameterdeclarationlistContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.parameterdeclaration`.
	 * @param ctx the parse tree
	 */
	enterParameterdeclaration?: (ctx: ParameterdeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.parameterdeclaration`.
	 * @param ctx the parse tree
	 */
	exitParameterdeclaration?: (ctx: ParameterdeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.functiondefinition`.
	 * @param ctx the parse tree
	 */
	enterFunctiondefinition?: (ctx: FunctiondefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.functiondefinition`.
	 * @param ctx the parse tree
	 */
	exitFunctiondefinition?: (ctx: FunctiondefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.functionbody`.
	 * @param ctx the parse tree
	 */
	enterFunctionbody?: (ctx: FunctionbodyContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.functionbody`.
	 * @param ctx the parse tree
	 */
	exitFunctionbody?: (ctx: FunctionbodyContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.initializer`.
	 * @param ctx the parse tree
	 */
	enterInitializer?: (ctx: InitializerContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.initializer`.
	 * @param ctx the parse tree
	 */
	exitInitializer?: (ctx: InitializerContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.braceorequalinitializer`.
	 * @param ctx the parse tree
	 */
	enterBraceorequalinitializer?: (ctx: BraceorequalinitializerContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.braceorequalinitializer`.
	 * @param ctx the parse tree
	 */
	exitBraceorequalinitializer?: (ctx: BraceorequalinitializerContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.initializerclause`.
	 * @param ctx the parse tree
	 */
	enterInitializerclause?: (ctx: InitializerclauseContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.initializerclause`.
	 * @param ctx the parse tree
	 */
	exitInitializerclause?: (ctx: InitializerclauseContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.initializerlist`.
	 * @param ctx the parse tree
	 */
	enterInitializerlist?: (ctx: InitializerlistContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.initializerlist`.
	 * @param ctx the parse tree
	 */
	exitInitializerlist?: (ctx: InitializerlistContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.bracedinitlist`.
	 * @param ctx the parse tree
	 */
	enterBracedinitlist?: (ctx: BracedinitlistContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.bracedinitlist`.
	 * @param ctx the parse tree
	 */
	exitBracedinitlist?: (ctx: BracedinitlistContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.classname`.
	 * @param ctx the parse tree
	 */
	enterClassname?: (ctx: ClassnameContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.classname`.
	 * @param ctx the parse tree
	 */
	exitClassname?: (ctx: ClassnameContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.classspecifier`.
	 * @param ctx the parse tree
	 */
	enterClassspecifier?: (ctx: ClassspecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.classspecifier`.
	 * @param ctx the parse tree
	 */
	exitClassspecifier?: (ctx: ClassspecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.classhead`.
	 * @param ctx the parse tree
	 */
	enterClasshead?: (ctx: ClassheadContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.classhead`.
	 * @param ctx the parse tree
	 */
	exitClasshead?: (ctx: ClassheadContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.classheadname`.
	 * @param ctx the parse tree
	 */
	enterClassheadname?: (ctx: ClassheadnameContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.classheadname`.
	 * @param ctx the parse tree
	 */
	exitClassheadname?: (ctx: ClassheadnameContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.classvirtspecifier`.
	 * @param ctx the parse tree
	 */
	enterClassvirtspecifier?: (ctx: ClassvirtspecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.classvirtspecifier`.
	 * @param ctx the parse tree
	 */
	exitClassvirtspecifier?: (ctx: ClassvirtspecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.classkey`.
	 * @param ctx the parse tree
	 */
	enterClasskey?: (ctx: ClasskeyContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.classkey`.
	 * @param ctx the parse tree
	 */
	exitClasskey?: (ctx: ClasskeyContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.memberspecification`.
	 * @param ctx the parse tree
	 */
	enterMemberspecification?: (ctx: MemberspecificationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.memberspecification`.
	 * @param ctx the parse tree
	 */
	exitMemberspecification?: (ctx: MemberspecificationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.memberdeclaration`.
	 * @param ctx the parse tree
	 */
	enterMemberdeclaration?: (ctx: MemberdeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.memberdeclaration`.
	 * @param ctx the parse tree
	 */
	exitMemberdeclaration?: (ctx: MemberdeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.memberdeclaratorlist`.
	 * @param ctx the parse tree
	 */
	enterMemberdeclaratorlist?: (ctx: MemberdeclaratorlistContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.memberdeclaratorlist`.
	 * @param ctx the parse tree
	 */
	exitMemberdeclaratorlist?: (ctx: MemberdeclaratorlistContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.memberdeclarator`.
	 * @param ctx the parse tree
	 */
	enterMemberdeclarator?: (ctx: MemberdeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.memberdeclarator`.
	 * @param ctx the parse tree
	 */
	exitMemberdeclarator?: (ctx: MemberdeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.virtspecifierseq`.
	 * @param ctx the parse tree
	 */
	enterVirtspecifierseq?: (ctx: VirtspecifierseqContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.virtspecifierseq`.
	 * @param ctx the parse tree
	 */
	exitVirtspecifierseq?: (ctx: VirtspecifierseqContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.virtspecifier`.
	 * @param ctx the parse tree
	 */
	enterVirtspecifier?: (ctx: VirtspecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.virtspecifier`.
	 * @param ctx the parse tree
	 */
	exitVirtspecifier?: (ctx: VirtspecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.purespecifier`.
	 * @param ctx the parse tree
	 */
	enterPurespecifier?: (ctx: PurespecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.purespecifier`.
	 * @param ctx the parse tree
	 */
	exitPurespecifier?: (ctx: PurespecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.baseclause`.
	 * @param ctx the parse tree
	 */
	enterBaseclause?: (ctx: BaseclauseContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.baseclause`.
	 * @param ctx the parse tree
	 */
	exitBaseclause?: (ctx: BaseclauseContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.basespecifierlist`.
	 * @param ctx the parse tree
	 */
	enterBasespecifierlist?: (ctx: BasespecifierlistContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.basespecifierlist`.
	 * @param ctx the parse tree
	 */
	exitBasespecifierlist?: (ctx: BasespecifierlistContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.basespecifier`.
	 * @param ctx the parse tree
	 */
	enterBasespecifier?: (ctx: BasespecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.basespecifier`.
	 * @param ctx the parse tree
	 */
	exitBasespecifier?: (ctx: BasespecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.classordecltype`.
	 * @param ctx the parse tree
	 */
	enterClassordecltype?: (ctx: ClassordecltypeContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.classordecltype`.
	 * @param ctx the parse tree
	 */
	exitClassordecltype?: (ctx: ClassordecltypeContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.basetypespecifier`.
	 * @param ctx the parse tree
	 */
	enterBasetypespecifier?: (ctx: BasetypespecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.basetypespecifier`.
	 * @param ctx the parse tree
	 */
	exitBasetypespecifier?: (ctx: BasetypespecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.accessspecifier`.
	 * @param ctx the parse tree
	 */
	enterAccessspecifier?: (ctx: AccessspecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.accessspecifier`.
	 * @param ctx the parse tree
	 */
	exitAccessspecifier?: (ctx: AccessspecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.conversionfunctionid`.
	 * @param ctx the parse tree
	 */
	enterConversionfunctionid?: (ctx: ConversionfunctionidContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.conversionfunctionid`.
	 * @param ctx the parse tree
	 */
	exitConversionfunctionid?: (ctx: ConversionfunctionidContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.conversiontypeid`.
	 * @param ctx the parse tree
	 */
	enterConversiontypeid?: (ctx: ConversiontypeidContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.conversiontypeid`.
	 * @param ctx the parse tree
	 */
	exitConversiontypeid?: (ctx: ConversiontypeidContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.conversiondeclarator`.
	 * @param ctx the parse tree
	 */
	enterConversiondeclarator?: (ctx: ConversiondeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.conversiondeclarator`.
	 * @param ctx the parse tree
	 */
	exitConversiondeclarator?: (ctx: ConversiondeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.ctorinitializer`.
	 * @param ctx the parse tree
	 */
	enterCtorinitializer?: (ctx: CtorinitializerContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.ctorinitializer`.
	 * @param ctx the parse tree
	 */
	exitCtorinitializer?: (ctx: CtorinitializerContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.meminitializerlist`.
	 * @param ctx the parse tree
	 */
	enterMeminitializerlist?: (ctx: MeminitializerlistContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.meminitializerlist`.
	 * @param ctx the parse tree
	 */
	exitMeminitializerlist?: (ctx: MeminitializerlistContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.meminitializer`.
	 * @param ctx the parse tree
	 */
	enterMeminitializer?: (ctx: MeminitializerContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.meminitializer`.
	 * @param ctx the parse tree
	 */
	exitMeminitializer?: (ctx: MeminitializerContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.meminitializerid`.
	 * @param ctx the parse tree
	 */
	enterMeminitializerid?: (ctx: MeminitializeridContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.meminitializerid`.
	 * @param ctx the parse tree
	 */
	exitMeminitializerid?: (ctx: MeminitializeridContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.operatorfunctionid`.
	 * @param ctx the parse tree
	 */
	enterOperatorfunctionid?: (ctx: OperatorfunctionidContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.operatorfunctionid`.
	 * @param ctx the parse tree
	 */
	exitOperatorfunctionid?: (ctx: OperatorfunctionidContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.literaloperatorid`.
	 * @param ctx the parse tree
	 */
	enterLiteraloperatorid?: (ctx: LiteraloperatoridContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.literaloperatorid`.
	 * @param ctx the parse tree
	 */
	exitLiteraloperatorid?: (ctx: LiteraloperatoridContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.templatedeclaration`.
	 * @param ctx the parse tree
	 */
	enterTemplatedeclaration?: (ctx: TemplatedeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.templatedeclaration`.
	 * @param ctx the parse tree
	 */
	exitTemplatedeclaration?: (ctx: TemplatedeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.templateparameterlist`.
	 * @param ctx the parse tree
	 */
	enterTemplateparameterlist?: (ctx: TemplateparameterlistContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.templateparameterlist`.
	 * @param ctx the parse tree
	 */
	exitTemplateparameterlist?: (ctx: TemplateparameterlistContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.templateparameter`.
	 * @param ctx the parse tree
	 */
	enterTemplateparameter?: (ctx: TemplateparameterContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.templateparameter`.
	 * @param ctx the parse tree
	 */
	exitTemplateparameter?: (ctx: TemplateparameterContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.typeparameter`.
	 * @param ctx the parse tree
	 */
	enterTypeparameter?: (ctx: TypeparameterContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.typeparameter`.
	 * @param ctx the parse tree
	 */
	exitTypeparameter?: (ctx: TypeparameterContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.simpletemplateid`.
	 * @param ctx the parse tree
	 */
	enterSimpletemplateid?: (ctx: SimpletemplateidContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.simpletemplateid`.
	 * @param ctx the parse tree
	 */
	exitSimpletemplateid?: (ctx: SimpletemplateidContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.templateid`.
	 * @param ctx the parse tree
	 */
	enterTemplateid?: (ctx: TemplateidContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.templateid`.
	 * @param ctx the parse tree
	 */
	exitTemplateid?: (ctx: TemplateidContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.templatename`.
	 * @param ctx the parse tree
	 */
	enterTemplatename?: (ctx: TemplatenameContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.templatename`.
	 * @param ctx the parse tree
	 */
	exitTemplatename?: (ctx: TemplatenameContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.templateargumentlist`.
	 * @param ctx the parse tree
	 */
	enterTemplateargumentlist?: (ctx: TemplateargumentlistContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.templateargumentlist`.
	 * @param ctx the parse tree
	 */
	exitTemplateargumentlist?: (ctx: TemplateargumentlistContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.templateargument`.
	 * @param ctx the parse tree
	 */
	enterTemplateargument?: (ctx: TemplateargumentContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.templateargument`.
	 * @param ctx the parse tree
	 */
	exitTemplateargument?: (ctx: TemplateargumentContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.typenamespecifier`.
	 * @param ctx the parse tree
	 */
	enterTypenamespecifier?: (ctx: TypenamespecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.typenamespecifier`.
	 * @param ctx the parse tree
	 */
	exitTypenamespecifier?: (ctx: TypenamespecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.explicitinstantiation`.
	 * @param ctx the parse tree
	 */
	enterExplicitinstantiation?: (ctx: ExplicitinstantiationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.explicitinstantiation`.
	 * @param ctx the parse tree
	 */
	exitExplicitinstantiation?: (ctx: ExplicitinstantiationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.explicitspecialization`.
	 * @param ctx the parse tree
	 */
	enterExplicitspecialization?: (ctx: ExplicitspecializationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.explicitspecialization`.
	 * @param ctx the parse tree
	 */
	exitExplicitspecialization?: (ctx: ExplicitspecializationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.tryblock`.
	 * @param ctx the parse tree
	 */
	enterTryblock?: (ctx: TryblockContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.tryblock`.
	 * @param ctx the parse tree
	 */
	exitTryblock?: (ctx: TryblockContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.functiontryblock`.
	 * @param ctx the parse tree
	 */
	enterFunctiontryblock?: (ctx: FunctiontryblockContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.functiontryblock`.
	 * @param ctx the parse tree
	 */
	exitFunctiontryblock?: (ctx: FunctiontryblockContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.handlerseq`.
	 * @param ctx the parse tree
	 */
	enterHandlerseq?: (ctx: HandlerseqContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.handlerseq`.
	 * @param ctx the parse tree
	 */
	exitHandlerseq?: (ctx: HandlerseqContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.handler`.
	 * @param ctx the parse tree
	 */
	enterHandler?: (ctx: HandlerContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.handler`.
	 * @param ctx the parse tree
	 */
	exitHandler?: (ctx: HandlerContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.exceptiondeclaration`.
	 * @param ctx the parse tree
	 */
	enterExceptiondeclaration?: (ctx: ExceptiondeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.exceptiondeclaration`.
	 * @param ctx the parse tree
	 */
	exitExceptiondeclaration?: (ctx: ExceptiondeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.throwexpression`.
	 * @param ctx the parse tree
	 */
	enterThrowexpression?: (ctx: ThrowexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.throwexpression`.
	 * @param ctx the parse tree
	 */
	exitThrowexpression?: (ctx: ThrowexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.exceptionspecification`.
	 * @param ctx the parse tree
	 */
	enterExceptionspecification?: (ctx: ExceptionspecificationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.exceptionspecification`.
	 * @param ctx the parse tree
	 */
	exitExceptionspecification?: (ctx: ExceptionspecificationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.dynamicexceptionspecification`.
	 * @param ctx the parse tree
	 */
	enterDynamicexceptionspecification?: (ctx: DynamicexceptionspecificationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.dynamicexceptionspecification`.
	 * @param ctx the parse tree
	 */
	exitDynamicexceptionspecification?: (ctx: DynamicexceptionspecificationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.typeidlist`.
	 * @param ctx the parse tree
	 */
	enterTypeidlist?: (ctx: TypeidlistContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.typeidlist`.
	 * @param ctx the parse tree
	 */
	exitTypeidlist?: (ctx: TypeidlistContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.noexceptspecification`.
	 * @param ctx the parse tree
	 */
	enterNoexceptspecification?: (ctx: NoexceptspecificationContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.noexceptspecification`.
	 * @param ctx the parse tree
	 */
	exitNoexceptspecification?: (ctx: NoexceptspecificationContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.rightShift`.
	 * @param ctx the parse tree
	 */
	enterRightShift?: (ctx: RightShiftContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.rightShift`.
	 * @param ctx the parse tree
	 */
	exitRightShift?: (ctx: RightShiftContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.rightShiftAssign`.
	 * @param ctx the parse tree
	 */
	enterRightShiftAssign?: (ctx: RightShiftAssignContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.rightShiftAssign`.
	 * @param ctx the parse tree
	 */
	exitRightShiftAssign?: (ctx: RightShiftAssignContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.theoperator`.
	 * @param ctx the parse tree
	 */
	enterTheoperator?: (ctx: TheoperatorContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.theoperator`.
	 * @param ctx the parse tree
	 */
	exitTheoperator?: (ctx: TheoperatorContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.booleanliteral`.
	 * @param ctx the parse tree
	 */
	enterBooleanliteral?: (ctx: BooleanliteralContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.booleanliteral`.
	 * @param ctx the parse tree
	 */
	exitBooleanliteral?: (ctx: BooleanliteralContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.pointerliteral`.
	 * @param ctx the parse tree
	 */
	enterPointerliteral?: (ctx: PointerliteralContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.pointerliteral`.
	 * @param ctx the parse tree
	 */
	exitPointerliteral?: (ctx: PointerliteralContext) => void;

	/**
	 * Enter a parse tree produced by `CPP14Parser.userdefinedliteral`.
	 * @param ctx the parse tree
	 */
	enterUserdefinedliteral?: (ctx: UserdefinedliteralContext) => void;
	/**
	 * Exit a parse tree produced by `CPP14Parser.userdefinedliteral`.
	 * @param ctx the parse tree
	 */
	exitUserdefinedliteral?: (ctx: UserdefinedliteralContext) => void;
}

