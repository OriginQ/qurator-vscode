// Generated from c:\Users\Quantum1603\Desktop\qrunes\server\src\embedded\qcodes\antlr\qcode.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class qcodeParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, PI=4, LET=5, INCLUDE=6, INT=7, FLOAT=8, BOOL=9, 
		IF=10, ELSE=11, FOR=12, LIB_POSTFIX=13, INC_POSTFIX=14, QRUNES_POSTFIX=15, 
		VAR=16, DOUBLE=17, DEFAULT=18, IVEC=19, BVEC=20, HOST=21, QVEC=22, QUBIT=23, 
		CVEC=24, CBIT=25, QGATE=26, QCIRCUIT=27, CIRCUITGEN=28, H_GATE=29, X_GATE=30, 
		NOT_GATE=31, T_GATE=32, S_GATE=33, Y_GATE=34, Z_GATE=35, X1_GATE=36, Y1_GATE=37, 
		Z1_GATE=38, U4_GATE=39, RX_GATE=40, RY_GATE=41, RZ_GATE=42, CNOT_GATE=43, 
		CZ_GATE=44, CR_GATE=45, CU_GATE=46, ISWAP=47, MEASURE=48, QIF=49, QWHILE=50, 
		QELSE=51, TRUE=52, FALSE=53, SHARP_SIGN=54, ASSIGN=55, GT=56, LT=57, BANG=58, 
		TILDE=59, COLON=60, EQUAL=61, LE=62, GE=63, NOTEQUAL=64, LOGIC_AND=65, 
		LOGIC_OR=66, AND=67, EXCLU=68, INCLU=69, QUE_MARK=70, INC=71, DEC=72, 
		ADD=73, SUB=74, MUL=75, POW=76, DIV=77, MOD=78, ADD_ASSIGN=79, SUB_ASSIGN=80, 
		MUL_ASSIGN=81, DIV_ASSIGN=82, LSHIFT=83, RSHIFT=84, LBRACE=85, RBRACE=86, 
		SEMI=87, COMMA=88, DOT=89, LPAREN=90, RPAREN=91, LBRACK=92, RBRACK=93, 
		Identifier=94, Constant=95, Digit_Sequence=96, WhiteSpace=97, SingleLineComment=98, 
		MultiLinesComment=99;
	public static final int
		RULE_qrunes = 0, RULE_lang_unit = 1, RULE_include_declaration = 2, RULE_include_sign = 3, 
		RULE_postfix = 4, RULE_declaration = 5, RULE_literal_declaration = 6, 
		RULE_declaration_Specifier = 7, RULE_literal_type = 8, RULE_primary_type = 9, 
		RULE_construct_type = 10, RULE_quantum_type = 11, RULE_assist_classical_type = 12, 
		RULE_init_DeclaratorList = 13, RULE_init_Literal_DeclaratorList = 14, 
		RULE_init_Declarator = 15, RULE_init_Literal_Declarator = 16, RULE_declarator = 17, 
		RULE_assignment_exp = 18, RULE_assignment_operator = 19, RULE_condition_exp = 20, 
		RULE_expression = 21, RULE_dot_name = 22, RULE_expression_list = 23, RULE_logicOr_exp = 24, 
		RULE_logicAnd_exp = 25, RULE_inclu_exp = 26, RULE_exclu_exp = 27, RULE_and_exp = 28, 
		RULE_equal_exp = 29, RULE_relation_exp = 30, RULE_shift_exp = 31, RULE_additive_exp = 32, 
		RULE_multi_exp = 33, RULE_cast_exp = 34, RULE_unary_exp = 35, RULE_unary_operator = 36, 
		RULE_postfix_exp = 37, RULE_argument_exp_List = 38, RULE_primary_exp = 39, 
		RULE_args_type_List = 40, RULE_args_declaration = 41, RULE_initializer = 42, 
		RULE_initializerList = 43, RULE_designation = 44, RULE_designatorList = 45, 
		RULE_designator = 46, RULE_constant_exp = 47, RULE_func_declaration = 48, 
		RULE_func_declarator = 49, RULE_func_definition = 50, RULE_declarationList = 51, 
		RULE_comp_stmt = 52, RULE_block_List = 53, RULE_block_Item = 54, RULE_statement = 55, 
		RULE_exp_stmt = 56, RULE_select_stmt = 57, RULE_iterate_stmt = 58, RULE_for_stmt = 59, 
		RULE_for_start = 60, RULE_for_step = 61, RULE_for_end = 62, RULE_quantum_gate_stmt = 63, 
		RULE_quantum_gate_operation = 64, RULE_four_angle_args = 65, RULE_alpha = 66, 
		RULE_beta = 67, RULE_gamma = 68, RULE_delta = 69, RULE_theta = 70, RULE_control_gate_exp = 71, 
		RULE_double_gate_exp = 72, RULE_target_gate_exp = 73, RULE_measurement_stmt = 74, 
		RULE_accept_cbit_stmt = 75, RULE_q_if_operation = 76, RULE_q_if_stmt = 77, 
		RULE_q_if_stmt_item = 78, RULE_q_while_operation = 79, RULE_q_while_stmt = 80, 
		RULE_q_while_stmt_item = 81, RULE_q_condition = 82, RULE_q_operator = 83;
	public static final String[] ruleNames = {
		"qrunes", "lang_unit", "include_declaration", "include_sign", "postfix", 
		"declaration", "literal_declaration", "declaration_Specifier", "literal_type", 
		"primary_type", "construct_type", "quantum_type", "assist_classical_type", 
		"init_DeclaratorList", "init_Literal_DeclaratorList", "init_Declarator", 
		"init_Literal_Declarator", "declarator", "assignment_exp", "assignment_operator", 
		"condition_exp", "expression", "dot_name", "expression_list", "logicOr_exp", 
		"logicAnd_exp", "inclu_exp", "exclu_exp", "and_exp", "equal_exp", "relation_exp", 
		"shift_exp", "additive_exp", "multi_exp", "cast_exp", "unary_exp", "unary_operator", 
		"postfix_exp", "argument_exp_List", "primary_exp", "args_type_List", "args_declaration", 
		"initializer", "initializerList", "designation", "designatorList", "designator", 
		"constant_exp", "func_declaration", "func_declarator", "func_definition", 
		"declarationList", "comp_stmt", "block_List", "block_Item", "statement", 
		"exp_stmt", "select_stmt", "iterate_stmt", "for_stmt", "for_start", "for_step", 
		"for_end", "quantum_gate_stmt", "quantum_gate_operation", "four_angle_args", 
		"alpha", "beta", "gamma", "delta", "theta", "control_gate_exp", "double_gate_exp", 
		"target_gate_exp", "measurement_stmt", "accept_cbit_stmt", "q_if_operation", 
		"q_if_stmt", "q_if_stmt_item", "q_while_operation", "q_while_stmt", "q_while_stmt_item", 
		"q_condition", "q_operator"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'\"'", "'''", "'vector'", "'Pi'", "'let'", "'include'", "'int'", 
		"'float'", "'bool'", "'if'", "'else'", "'for'", "'.lib'", "'.inc'", "'.qrunes'", 
		"'var'", "'double'", "'default'", "'ivec'", "'bvec'", "'host'", "'qvec'", 
		"'qubit'", "'cvec'", "'cbit'", "'qgate'", "'QCircuit'", "'circuitGen'", 
		"'H'", "'X'", "'NOT'", "'T'", "'S'", "'Y'", "'Z'", "'X1'", "'Y1'", "'Z1'", 
		"'U4'", "'RX'", "'RY'", "'RZ'", "'CNOT'", "'CZ'", "'CR'", "'CU'", "'iSWAP'", 
		"'Measure'", "'qif'", "'qwhile'", "'qelse'", "'True'", "'False'", "'#'", 
		"'='", "'>'", "'<'", "'!'", "'~'", "':'", "'=='", "'<='", "'>='", "'!='", 
		"'&&'", "'||'", "'&'", "'^'", "'|'", "'?'", "'++'", "'--'", "'+'", "'-'", 
		"'*'", "'**'", "'/'", "'%'", "'+='", "'-='", "'*='", "'/='", "'<<'", "'>>'", 
		"'{'", "'}'", "';'", "','", "'.'", "'('", "')'", "'['", "']'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, "PI", "LET", "INCLUDE", "INT", "FLOAT", "BOOL", 
		"IF", "ELSE", "FOR", "LIB_POSTFIX", "INC_POSTFIX", "QRUNES_POSTFIX", "VAR", 
		"DOUBLE", "DEFAULT", "IVEC", "BVEC", "HOST", "QVEC", "QUBIT", "CVEC", 
		"CBIT", "QGATE", "QCIRCUIT", "CIRCUITGEN", "H_GATE", "X_GATE", "NOT_GATE", 
		"T_GATE", "S_GATE", "Y_GATE", "Z_GATE", "X1_GATE", "Y1_GATE", "Z1_GATE", 
		"U4_GATE", "RX_GATE", "RY_GATE", "RZ_GATE", "CNOT_GATE", "CZ_GATE", "CR_GATE", 
		"CU_GATE", "ISWAP", "MEASURE", "QIF", "QWHILE", "QELSE", "TRUE", "FALSE", 
		"SHARP_SIGN", "ASSIGN", "GT", "LT", "BANG", "TILDE", "COLON", "EQUAL", 
		"LE", "GE", "NOTEQUAL", "LOGIC_AND", "LOGIC_OR", "AND", "EXCLU", "INCLU", 
		"QUE_MARK", "INC", "DEC", "ADD", "SUB", "MUL", "POW", "DIV", "MOD", "ADD_ASSIGN", 
		"SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "LSHIFT", "RSHIFT", "LBRACE", 
		"RBRACE", "SEMI", "COMMA", "DOT", "LPAREN", "RPAREN", "LBRACK", "RBRACK", 
		"Identifier", "Constant", "Digit_Sequence", "WhiteSpace", "SingleLineComment", 
		"MultiLinesComment"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "qcode.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public qcodeParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class QrunesContext extends ParserRuleContext {
		public List<Lang_unitContext> lang_unit() {
			return getRuleContexts(Lang_unitContext.class);
		}
		public Lang_unitContext lang_unit(int i) {
			return getRuleContext(Lang_unitContext.class,i);
		}
		public QrunesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qrunes; }
	}

	public final QrunesContext qrunes() throws RecognitionException {
		QrunesContext _localctx = new QrunesContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_qrunes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << LET) | (1L << INCLUDE) | (1L << INT) | (1L << FLOAT) | (1L << BOOL) | (1L << DOUBLE) | (1L << IVEC) | (1L << BVEC) | (1L << QVEC) | (1L << QUBIT) | (1L << CVEC) | (1L << CBIT) | (1L << QGATE) | (1L << QCIRCUIT) | (1L << CIRCUITGEN))) != 0) || _la==Identifier) {
				{
				{
				setState(168);
				lang_unit();
				}
				}
				setState(173);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Lang_unitContext extends ParserRuleContext {
		public Include_declarationContext include_declaration() {
			return getRuleContext(Include_declarationContext.class,0);
		}
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(qcodeParser.SEMI, 0); }
		public Literal_declarationContext literal_declaration() {
			return getRuleContext(Literal_declarationContext.class,0);
		}
		public Func_declarationContext func_declaration() {
			return getRuleContext(Func_declarationContext.class,0);
		}
		public Func_definitionContext func_definition() {
			return getRuleContext(Func_definitionContext.class,0);
		}
		public Lang_unitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lang_unit; }
	}

	public final Lang_unitContext lang_unit() throws RecognitionException {
		Lang_unitContext _localctx = new Lang_unitContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_lang_unit);
		try {
			setState(183);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(174);
				include_declaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(175);
				declaration();
				setState(176);
				match(SEMI);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(178);
				literal_declaration();
				setState(179);
				match(SEMI);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(181);
				func_declaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(182);
				func_definition();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Include_declarationContext extends ParserRuleContext {
		public TerminalNode INCLUDE() { return getToken(qcodeParser.INCLUDE, 0); }
		public List<Include_signContext> include_sign() {
			return getRuleContexts(Include_signContext.class);
		}
		public Include_signContext include_sign(int i) {
			return getRuleContext(Include_signContext.class,i);
		}
		public TerminalNode Identifier() { return getToken(qcodeParser.Identifier, 0); }
		public PostfixContext postfix() {
			return getRuleContext(PostfixContext.class,0);
		}
		public Include_declarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_include_declaration; }
	}

	public final Include_declarationContext include_declaration() throws RecognitionException {
		Include_declarationContext _localctx = new Include_declarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_include_declaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			match(INCLUDE);
			setState(186);
			include_sign();
			setState(187);
			match(Identifier);
			setState(188);
			postfix();
			setState(189);
			include_sign();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Include_signContext extends ParserRuleContext {
		public Include_signContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_include_sign; }
	}

	public final Include_signContext include_sign() throws RecognitionException {
		Include_signContext _localctx = new Include_signContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_include_sign);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(191);
			_la = _input.LA(1);
			if ( !(_la==T__0 || _la==T__1) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PostfixContext extends ParserRuleContext {
		public TerminalNode LIB_POSTFIX() { return getToken(qcodeParser.LIB_POSTFIX, 0); }
		public TerminalNode INC_POSTFIX() { return getToken(qcodeParser.INC_POSTFIX, 0); }
		public TerminalNode QRUNES_POSTFIX() { return getToken(qcodeParser.QRUNES_POSTFIX, 0); }
		public PostfixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_postfix; }
	}

	public final PostfixContext postfix() throws RecognitionException {
		PostfixContext _localctx = new PostfixContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_postfix);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(193);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LIB_POSTFIX) | (1L << INC_POSTFIX) | (1L << QRUNES_POSTFIX))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclarationContext extends ParserRuleContext {
		public Init_DeclaratorListContext init_DeclaratorList() {
			return getRuleContext(Init_DeclaratorListContext.class,0);
		}
		public Declaration_SpecifierContext declaration_Specifier() {
			return getRuleContext(Declaration_SpecifierContext.class,0);
		}
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_declaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(196);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << INT) | (1L << FLOAT) | (1L << BOOL) | (1L << DOUBLE) | (1L << IVEC) | (1L << BVEC) | (1L << QVEC) | (1L << QUBIT) | (1L << CVEC) | (1L << CBIT) | (1L << QGATE) | (1L << CIRCUITGEN))) != 0)) {
				{
				setState(195);
				declaration_Specifier();
				}
			}

			setState(198);
			init_DeclaratorList(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Literal_declarationContext extends ParserRuleContext {
		public Init_Literal_DeclaratorListContext init_Literal_DeclaratorList() {
			return getRuleContext(Init_Literal_DeclaratorListContext.class,0);
		}
		public Literal_typeContext literal_type() {
			return getRuleContext(Literal_typeContext.class,0);
		}
		public Literal_declarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal_declaration; }
	}

	public final Literal_declarationContext literal_declaration() throws RecognitionException {
		Literal_declarationContext _localctx = new Literal_declarationContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_literal_declaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LET) {
				{
				setState(200);
				literal_type();
				}
			}

			setState(203);
			init_Literal_DeclaratorList(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Declaration_SpecifierContext extends ParserRuleContext {
		public Quantum_typeContext quantum_type() {
			return getRuleContext(Quantum_typeContext.class,0);
		}
		public Primary_typeContext primary_type() {
			return getRuleContext(Primary_typeContext.class,0);
		}
		public Assist_classical_typeContext assist_classical_type() {
			return getRuleContext(Assist_classical_typeContext.class,0);
		}
		public Construct_typeContext construct_type() {
			return getRuleContext(Construct_typeContext.class,0);
		}
		public Declaration_SpecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration_Specifier; }
	}

	public final Declaration_SpecifierContext declaration_Specifier() throws RecognitionException {
		Declaration_SpecifierContext _localctx = new Declaration_SpecifierContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_declaration_Specifier);
		try {
			setState(209);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case QVEC:
			case QUBIT:
			case QGATE:
				enterOuterAlt(_localctx, 1);
				{
				setState(205);
				quantum_type();
				}
				break;
			case INT:
			case FLOAT:
			case BOOL:
			case DOUBLE:
			case IVEC:
			case BVEC:
				enterOuterAlt(_localctx, 2);
				{
				setState(206);
				primary_type();
				}
				break;
			case CVEC:
			case CBIT:
				enterOuterAlt(_localctx, 3);
				{
				setState(207);
				assist_classical_type();
				}
				break;
			case T__2:
			case CIRCUITGEN:
				enterOuterAlt(_localctx, 4);
				{
				setState(208);
				construct_type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Literal_typeContext extends ParserRuleContext {
		public TerminalNode LET() { return getToken(qcodeParser.LET, 0); }
		public Literal_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal_type; }
	}

	public final Literal_typeContext literal_type() throws RecognitionException {
		Literal_typeContext _localctx = new Literal_typeContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_literal_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(211);
			match(LET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Primary_typeContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(qcodeParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(qcodeParser.FLOAT, 0); }
		public TerminalNode DOUBLE() { return getToken(qcodeParser.DOUBLE, 0); }
		public TerminalNode BOOL() { return getToken(qcodeParser.BOOL, 0); }
		public TerminalNode IVEC() { return getToken(qcodeParser.IVEC, 0); }
		public TerminalNode BVEC() { return getToken(qcodeParser.BVEC, 0); }
		public Primary_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primary_type; }
	}

	public final Primary_typeContext primary_type() throws RecognitionException {
		Primary_typeContext _localctx = new Primary_typeContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_primary_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INT) | (1L << FLOAT) | (1L << BOOL) | (1L << DOUBLE) | (1L << IVEC) | (1L << BVEC))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Construct_typeContext extends ParserRuleContext {
		public TerminalNode CIRCUITGEN() { return getToken(qcodeParser.CIRCUITGEN, 0); }
		public Construct_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_construct_type; }
	}

	public final Construct_typeContext construct_type() throws RecognitionException {
		Construct_typeContext _localctx = new Construct_typeContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_construct_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(215);
			_la = _input.LA(1);
			if ( !(_la==T__2 || _la==CIRCUITGEN) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Quantum_typeContext extends ParserRuleContext {
		public TerminalNode QVEC() { return getToken(qcodeParser.QVEC, 0); }
		public TerminalNode QUBIT() { return getToken(qcodeParser.QUBIT, 0); }
		public TerminalNode QGATE() { return getToken(qcodeParser.QGATE, 0); }
		public Quantum_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quantum_type; }
	}

	public final Quantum_typeContext quantum_type() throws RecognitionException {
		Quantum_typeContext _localctx = new Quantum_typeContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_quantum_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(217);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << QVEC) | (1L << QUBIT) | (1L << QGATE))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Assist_classical_typeContext extends ParserRuleContext {
		public TerminalNode CBIT() { return getToken(qcodeParser.CBIT, 0); }
		public TerminalNode CVEC() { return getToken(qcodeParser.CVEC, 0); }
		public Assist_classical_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assist_classical_type; }
	}

	public final Assist_classical_typeContext assist_classical_type() throws RecognitionException {
		Assist_classical_typeContext _localctx = new Assist_classical_typeContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_assist_classical_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			_la = _input.LA(1);
			if ( !(_la==CVEC || _la==CBIT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Init_DeclaratorListContext extends ParserRuleContext {
		public Init_DeclaratorContext init_Declarator() {
			return getRuleContext(Init_DeclaratorContext.class,0);
		}
		public Init_DeclaratorListContext init_DeclaratorList() {
			return getRuleContext(Init_DeclaratorListContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(qcodeParser.COMMA, 0); }
		public Init_DeclaratorListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_init_DeclaratorList; }
	}

	public final Init_DeclaratorListContext init_DeclaratorList() throws RecognitionException {
		return init_DeclaratorList(0);
	}

	private Init_DeclaratorListContext init_DeclaratorList(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Init_DeclaratorListContext _localctx = new Init_DeclaratorListContext(_ctx, _parentState);
		Init_DeclaratorListContext _prevctx = _localctx;
		int _startState = 26;
		enterRecursionRule(_localctx, 26, RULE_init_DeclaratorList, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(222);
			init_Declarator();
			}
			_ctx.stop = _input.LT(-1);
			setState(229);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Init_DeclaratorListContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_init_DeclaratorList);
					setState(224);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(225);
					match(COMMA);
					setState(226);
					init_Declarator();
					}
					} 
				}
				setState(231);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Init_Literal_DeclaratorListContext extends ParserRuleContext {
		public Init_Literal_DeclaratorContext init_Literal_Declarator() {
			return getRuleContext(Init_Literal_DeclaratorContext.class,0);
		}
		public Init_Literal_DeclaratorListContext init_Literal_DeclaratorList() {
			return getRuleContext(Init_Literal_DeclaratorListContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(qcodeParser.COMMA, 0); }
		public Init_Literal_DeclaratorListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_init_Literal_DeclaratorList; }
	}

	public final Init_Literal_DeclaratorListContext init_Literal_DeclaratorList() throws RecognitionException {
		return init_Literal_DeclaratorList(0);
	}

	private Init_Literal_DeclaratorListContext init_Literal_DeclaratorList(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Init_Literal_DeclaratorListContext _localctx = new Init_Literal_DeclaratorListContext(_ctx, _parentState);
		Init_Literal_DeclaratorListContext _prevctx = _localctx;
		int _startState = 28;
		enterRecursionRule(_localctx, 28, RULE_init_Literal_DeclaratorList, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(233);
			init_Literal_Declarator();
			}
			_ctx.stop = _input.LT(-1);
			setState(240);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Init_Literal_DeclaratorListContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_init_Literal_DeclaratorList);
					setState(235);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(236);
					match(COMMA);
					setState(237);
					init_Literal_Declarator();
					}
					} 
				}
				setState(242);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Init_DeclaratorContext extends ParserRuleContext {
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(qcodeParser.ASSIGN, 0); }
		public InitializerContext initializer() {
			return getRuleContext(InitializerContext.class,0);
		}
		public Init_DeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_init_Declarator; }
	}

	public final Init_DeclaratorContext init_Declarator() throws RecognitionException {
		Init_DeclaratorContext _localctx = new Init_DeclaratorContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_init_Declarator);
		try {
			setState(248);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(243);
				declarator(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(244);
				declarator(0);
				setState(245);
				match(ASSIGN);
				setState(246);
				initializer();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Init_Literal_DeclaratorContext extends ParserRuleContext {
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(qcodeParser.ASSIGN, 0); }
		public InitializerContext initializer() {
			return getRuleContext(InitializerContext.class,0);
		}
		public Init_Literal_DeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_init_Literal_Declarator; }
	}

	public final Init_Literal_DeclaratorContext init_Literal_Declarator() throws RecognitionException {
		Init_Literal_DeclaratorContext _localctx = new Init_Literal_DeclaratorContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_init_Literal_Declarator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(250);
			declarator(0);
			setState(251);
			match(ASSIGN);
			setState(252);
			initializer();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclaratorContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(qcodeParser.Identifier, 0); }
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(qcodeParser.LBRACK, 0); }
		public Assignment_expContext assignment_exp() {
			return getRuleContext(Assignment_expContext.class,0);
		}
		public TerminalNode RBRACK() { return getToken(qcodeParser.RBRACK, 0); }
		public DeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarator; }
	}

	public final DeclaratorContext declarator() throws RecognitionException {
		return declarator(0);
	}

	private DeclaratorContext declarator(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		DeclaratorContext _localctx = new DeclaratorContext(_ctx, _parentState);
		DeclaratorContext _prevctx = _localctx;
		int _startState = 34;
		enterRecursionRule(_localctx, 34, RULE_declarator, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(255);
			match(Identifier);
			}
			_ctx.stop = _input.LT(-1);
			setState(264);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new DeclaratorContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_declarator);
					setState(257);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(258);
					match(LBRACK);
					setState(259);
					assignment_exp();
					setState(260);
					match(RBRACK);
					}
					} 
				}
				setState(266);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Assignment_expContext extends ParserRuleContext {
		public Condition_expContext condition_exp() {
			return getRuleContext(Condition_expContext.class,0);
		}
		public Unary_expContext unary_exp() {
			return getRuleContext(Unary_expContext.class,0);
		}
		public Assignment_operatorContext assignment_operator() {
			return getRuleContext(Assignment_operatorContext.class,0);
		}
		public Assignment_expContext assignment_exp() {
			return getRuleContext(Assignment_expContext.class,0);
		}
		public TerminalNode Digit_Sequence() { return getToken(qcodeParser.Digit_Sequence, 0); }
		public TerminalNode Constant() { return getToken(qcodeParser.Constant, 0); }
		public Assignment_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment_exp; }
	}

	public final Assignment_expContext assignment_exp() throws RecognitionException {
		Assignment_expContext _localctx = new Assignment_expContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_assignment_exp);
		try {
			setState(274);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(267);
				condition_exp();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(268);
				unary_exp();
				setState(269);
				assignment_operator();
				setState(270);
				assignment_exp();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(272);
				match(Digit_Sequence);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(273);
				match(Constant);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Assignment_operatorContext extends ParserRuleContext {
		public TerminalNode ASSIGN() { return getToken(qcodeParser.ASSIGN, 0); }
		public TerminalNode ADD_ASSIGN() { return getToken(qcodeParser.ADD_ASSIGN, 0); }
		public TerminalNode SUB_ASSIGN() { return getToken(qcodeParser.SUB_ASSIGN, 0); }
		public TerminalNode MUL_ASSIGN() { return getToken(qcodeParser.MUL_ASSIGN, 0); }
		public TerminalNode DIV_ASSIGN() { return getToken(qcodeParser.DIV_ASSIGN, 0); }
		public Assignment_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment_operator; }
	}

	public final Assignment_operatorContext assignment_operator() throws RecognitionException {
		Assignment_operatorContext _localctx = new Assignment_operatorContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_assignment_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(276);
			_la = _input.LA(1);
			if ( !(((((_la - 55)) & ~0x3f) == 0 && ((1L << (_la - 55)) & ((1L << (ASSIGN - 55)) | (1L << (ADD_ASSIGN - 55)) | (1L << (SUB_ASSIGN - 55)) | (1L << (MUL_ASSIGN - 55)) | (1L << (DIV_ASSIGN - 55)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Condition_expContext extends ParserRuleContext {
		public LogicOr_expContext logicOr_exp() {
			return getRuleContext(LogicOr_expContext.class,0);
		}
		public TerminalNode QUE_MARK() { return getToken(qcodeParser.QUE_MARK, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode COLON() { return getToken(qcodeParser.COLON, 0); }
		public Condition_expContext condition_exp() {
			return getRuleContext(Condition_expContext.class,0);
		}
		public Condition_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition_exp; }
	}

	public final Condition_expContext condition_exp() throws RecognitionException {
		Condition_expContext _localctx = new Condition_expContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_condition_exp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(278);
			logicOr_exp(0);
			setState(284);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(279);
				match(QUE_MARK);
				setState(280);
				expression(0);
				setState(281);
				match(COLON);
				setState(282);
				condition_exp();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public Assignment_expContext assignment_exp() {
			return getRuleContext(Assignment_expContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(qcodeParser.COMMA, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 42;
		enterRecursionRule(_localctx, 42, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(287);
			assignment_exp();
			}
			_ctx.stop = _input.LT(-1);
			setState(294);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_expression);
					setState(289);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(290);
					match(COMMA);
					setState(291);
					assignment_exp();
					}
					} 
				}
				setState(296);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Dot_nameContext extends ParserRuleContext {
		public TerminalNode DOT() { return getToken(qcodeParser.DOT, 0); }
		public TerminalNode Identifier() { return getToken(qcodeParser.Identifier, 0); }
		public TerminalNode LPAREN() { return getToken(qcodeParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(qcodeParser.RPAREN, 0); }
		public Expression_listContext expression_list() {
			return getRuleContext(Expression_listContext.class,0);
		}
		public Dot_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dot_name; }
	}

	public final Dot_nameContext dot_name() throws RecognitionException {
		Dot_nameContext _localctx = new Dot_nameContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_dot_name);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(297);
			match(DOT);
			setState(298);
			match(Identifier);
			setState(299);
			match(LPAREN);
			setState(301);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PI) | (1L << TRUE) | (1L << FALSE) | (1L << BANG) | (1L << TILDE))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (LOGIC_AND - 65)) | (1L << (AND - 65)) | (1L << (INC - 65)) | (1L << (DEC - 65)) | (1L << (ADD - 65)) | (1L << (SUB - 65)) | (1L << (MUL - 65)) | (1L << (POW - 65)) | (1L << (LPAREN - 65)) | (1L << (Identifier - 65)) | (1L << (Constant - 65)) | (1L << (Digit_Sequence - 65)))) != 0)) {
				{
				setState(300);
				expression_list(0);
				}
			}

			setState(303);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Expression_listContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Expression_listContext expression_list() {
			return getRuleContext(Expression_listContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(qcodeParser.COMMA, 0); }
		public Expression_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression_list; }
	}

	public final Expression_listContext expression_list() throws RecognitionException {
		return expression_list(0);
	}

	private Expression_listContext expression_list(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Expression_listContext _localctx = new Expression_listContext(_ctx, _parentState);
		Expression_listContext _prevctx = _localctx;
		int _startState = 46;
		enterRecursionRule(_localctx, 46, RULE_expression_list, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(306);
			expression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(313);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Expression_listContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_expression_list);
					setState(308);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(309);
					match(COMMA);
					setState(310);
					expression(0);
					}
					} 
				}
				setState(315);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class LogicOr_expContext extends ParserRuleContext {
		public LogicAnd_expContext logicAnd_exp() {
			return getRuleContext(LogicAnd_expContext.class,0);
		}
		public LogicOr_expContext logicOr_exp() {
			return getRuleContext(LogicOr_expContext.class,0);
		}
		public TerminalNode LOGIC_OR() { return getToken(qcodeParser.LOGIC_OR, 0); }
		public LogicOr_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicOr_exp; }
	}

	public final LogicOr_expContext logicOr_exp() throws RecognitionException {
		return logicOr_exp(0);
	}

	private LogicOr_expContext logicOr_exp(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		LogicOr_expContext _localctx = new LogicOr_expContext(_ctx, _parentState);
		LogicOr_expContext _prevctx = _localctx;
		int _startState = 48;
		enterRecursionRule(_localctx, 48, RULE_logicOr_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(317);
			logicAnd_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(324);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicOr_expContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_logicOr_exp);
					setState(319);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(320);
					match(LOGIC_OR);
					setState(321);
					logicAnd_exp(0);
					}
					} 
				}
				setState(326);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class LogicAnd_expContext extends ParserRuleContext {
		public Inclu_expContext inclu_exp() {
			return getRuleContext(Inclu_expContext.class,0);
		}
		public LogicAnd_expContext logicAnd_exp() {
			return getRuleContext(LogicAnd_expContext.class,0);
		}
		public TerminalNode LOGIC_AND() { return getToken(qcodeParser.LOGIC_AND, 0); }
		public LogicAnd_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicAnd_exp; }
	}

	public final LogicAnd_expContext logicAnd_exp() throws RecognitionException {
		return logicAnd_exp(0);
	}

	private LogicAnd_expContext logicAnd_exp(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		LogicAnd_expContext _localctx = new LogicAnd_expContext(_ctx, _parentState);
		LogicAnd_expContext _prevctx = _localctx;
		int _startState = 50;
		enterRecursionRule(_localctx, 50, RULE_logicAnd_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(328);
			inclu_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(335);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicAnd_expContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_logicAnd_exp);
					setState(330);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(331);
					match(LOGIC_AND);
					setState(332);
					inclu_exp(0);
					}
					} 
				}
				setState(337);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Inclu_expContext extends ParserRuleContext {
		public Exclu_expContext exclu_exp() {
			return getRuleContext(Exclu_expContext.class,0);
		}
		public Inclu_expContext inclu_exp() {
			return getRuleContext(Inclu_expContext.class,0);
		}
		public TerminalNode INCLU() { return getToken(qcodeParser.INCLU, 0); }
		public Inclu_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inclu_exp; }
	}

	public final Inclu_expContext inclu_exp() throws RecognitionException {
		return inclu_exp(0);
	}

	private Inclu_expContext inclu_exp(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Inclu_expContext _localctx = new Inclu_expContext(_ctx, _parentState);
		Inclu_expContext _prevctx = _localctx;
		int _startState = 52;
		enterRecursionRule(_localctx, 52, RULE_inclu_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(339);
			exclu_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(346);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Inclu_expContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_inclu_exp);
					setState(341);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(342);
					match(INCLU);
					setState(343);
					exclu_exp(0);
					}
					} 
				}
				setState(348);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Exclu_expContext extends ParserRuleContext {
		public And_expContext and_exp() {
			return getRuleContext(And_expContext.class,0);
		}
		public Exclu_expContext exclu_exp() {
			return getRuleContext(Exclu_expContext.class,0);
		}
		public TerminalNode EXCLU() { return getToken(qcodeParser.EXCLU, 0); }
		public Exclu_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exclu_exp; }
	}

	public final Exclu_expContext exclu_exp() throws RecognitionException {
		return exclu_exp(0);
	}

	private Exclu_expContext exclu_exp(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Exclu_expContext _localctx = new Exclu_expContext(_ctx, _parentState);
		Exclu_expContext _prevctx = _localctx;
		int _startState = 54;
		enterRecursionRule(_localctx, 54, RULE_exclu_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(350);
			and_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(357);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Exclu_expContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_exclu_exp);
					setState(352);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(353);
					match(EXCLU);
					setState(354);
					and_exp(0);
					}
					} 
				}
				setState(359);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class And_expContext extends ParserRuleContext {
		public Equal_expContext equal_exp() {
			return getRuleContext(Equal_expContext.class,0);
		}
		public And_expContext and_exp() {
			return getRuleContext(And_expContext.class,0);
		}
		public TerminalNode AND() { return getToken(qcodeParser.AND, 0); }
		public And_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_and_exp; }
	}

	public final And_expContext and_exp() throws RecognitionException {
		return and_exp(0);
	}

	private And_expContext and_exp(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		And_expContext _localctx = new And_expContext(_ctx, _parentState);
		And_expContext _prevctx = _localctx;
		int _startState = 56;
		enterRecursionRule(_localctx, 56, RULE_and_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(361);
			equal_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(368);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new And_expContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_and_exp);
					setState(363);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(364);
					match(AND);
					setState(365);
					equal_exp(0);
					}
					} 
				}
				setState(370);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Equal_expContext extends ParserRuleContext {
		public Relation_expContext relation_exp() {
			return getRuleContext(Relation_expContext.class,0);
		}
		public Equal_expContext equal_exp() {
			return getRuleContext(Equal_expContext.class,0);
		}
		public TerminalNode EQUAL() { return getToken(qcodeParser.EQUAL, 0); }
		public TerminalNode NOTEQUAL() { return getToken(qcodeParser.NOTEQUAL, 0); }
		public Equal_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_equal_exp; }
	}

	public final Equal_expContext equal_exp() throws RecognitionException {
		return equal_exp(0);
	}

	private Equal_expContext equal_exp(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Equal_expContext _localctx = new Equal_expContext(_ctx, _parentState);
		Equal_expContext _prevctx = _localctx;
		int _startState = 58;
		enterRecursionRule(_localctx, 58, RULE_equal_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(372);
			relation_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(382);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(380);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
					case 1:
						{
						_localctx = new Equal_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_equal_exp);
						setState(374);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(375);
						match(EQUAL);
						setState(376);
						relation_exp(0);
						}
						break;
					case 2:
						{
						_localctx = new Equal_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_equal_exp);
						setState(377);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(378);
						match(NOTEQUAL);
						setState(379);
						relation_exp(0);
						}
						break;
					}
					} 
				}
				setState(384);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Relation_expContext extends ParserRuleContext {
		public Shift_expContext shift_exp() {
			return getRuleContext(Shift_expContext.class,0);
		}
		public Relation_expContext relation_exp() {
			return getRuleContext(Relation_expContext.class,0);
		}
		public TerminalNode GT() { return getToken(qcodeParser.GT, 0); }
		public TerminalNode LT() { return getToken(qcodeParser.LT, 0); }
		public TerminalNode GE() { return getToken(qcodeParser.GE, 0); }
		public TerminalNode LE() { return getToken(qcodeParser.LE, 0); }
		public Relation_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relation_exp; }
	}

	public final Relation_expContext relation_exp() throws RecognitionException {
		return relation_exp(0);
	}

	private Relation_expContext relation_exp(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Relation_expContext _localctx = new Relation_expContext(_ctx, _parentState);
		Relation_expContext _prevctx = _localctx;
		int _startState = 60;
		enterRecursionRule(_localctx, 60, RULE_relation_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(386);
			shift_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(402);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(400);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
					case 1:
						{
						_localctx = new Relation_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_relation_exp);
						setState(388);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(389);
						match(GT);
						setState(390);
						shift_exp(0);
						}
						break;
					case 2:
						{
						_localctx = new Relation_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_relation_exp);
						setState(391);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(392);
						match(LT);
						setState(393);
						shift_exp(0);
						}
						break;
					case 3:
						{
						_localctx = new Relation_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_relation_exp);
						setState(394);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(395);
						match(GE);
						setState(396);
						shift_exp(0);
						}
						break;
					case 4:
						{
						_localctx = new Relation_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_relation_exp);
						setState(397);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(398);
						match(LE);
						setState(399);
						shift_exp(0);
						}
						break;
					}
					} 
				}
				setState(404);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Shift_expContext extends ParserRuleContext {
		public Additive_expContext additive_exp() {
			return getRuleContext(Additive_expContext.class,0);
		}
		public Shift_expContext shift_exp() {
			return getRuleContext(Shift_expContext.class,0);
		}
		public TerminalNode LSHIFT() { return getToken(qcodeParser.LSHIFT, 0); }
		public TerminalNode RSHIFT() { return getToken(qcodeParser.RSHIFT, 0); }
		public Shift_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_shift_exp; }
	}

	public final Shift_expContext shift_exp() throws RecognitionException {
		return shift_exp(0);
	}

	private Shift_expContext shift_exp(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Shift_expContext _localctx = new Shift_expContext(_ctx, _parentState);
		Shift_expContext _prevctx = _localctx;
		int _startState = 62;
		enterRecursionRule(_localctx, 62, RULE_shift_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(406);
			additive_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(416);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(414);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
					case 1:
						{
						_localctx = new Shift_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_shift_exp);
						setState(408);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(409);
						match(LSHIFT);
						setState(410);
						additive_exp(0);
						}
						break;
					case 2:
						{
						_localctx = new Shift_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_shift_exp);
						setState(411);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(412);
						match(RSHIFT);
						setState(413);
						additive_exp(0);
						}
						break;
					}
					} 
				}
				setState(418);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Additive_expContext extends ParserRuleContext {
		public Multi_expContext multi_exp() {
			return getRuleContext(Multi_expContext.class,0);
		}
		public Additive_expContext additive_exp() {
			return getRuleContext(Additive_expContext.class,0);
		}
		public TerminalNode ADD() { return getToken(qcodeParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(qcodeParser.SUB, 0); }
		public Additive_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_additive_exp; }
	}

	public final Additive_expContext additive_exp() throws RecognitionException {
		return additive_exp(0);
	}

	private Additive_expContext additive_exp(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Additive_expContext _localctx = new Additive_expContext(_ctx, _parentState);
		Additive_expContext _prevctx = _localctx;
		int _startState = 64;
		enterRecursionRule(_localctx, 64, RULE_additive_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(420);
			multi_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(430);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(428);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
					case 1:
						{
						_localctx = new Additive_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_additive_exp);
						setState(422);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(423);
						match(ADD);
						setState(424);
						multi_exp(0);
						}
						break;
					case 2:
						{
						_localctx = new Additive_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_additive_exp);
						setState(425);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(426);
						match(SUB);
						setState(427);
						multi_exp(0);
						}
						break;
					}
					} 
				}
				setState(432);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Multi_expContext extends ParserRuleContext {
		public Cast_expContext cast_exp() {
			return getRuleContext(Cast_expContext.class,0);
		}
		public Multi_expContext multi_exp() {
			return getRuleContext(Multi_expContext.class,0);
		}
		public TerminalNode MUL() { return getToken(qcodeParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(qcodeParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(qcodeParser.MOD, 0); }
		public TerminalNode POW() { return getToken(qcodeParser.POW, 0); }
		public Multi_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multi_exp; }
	}

	public final Multi_expContext multi_exp() throws RecognitionException {
		return multi_exp(0);
	}

	private Multi_expContext multi_exp(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Multi_expContext _localctx = new Multi_expContext(_ctx, _parentState);
		Multi_expContext _prevctx = _localctx;
		int _startState = 66;
		enterRecursionRule(_localctx, 66, RULE_multi_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(434);
			cast_exp();
			}
			_ctx.stop = _input.LT(-1);
			setState(450);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(448);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
					case 1:
						{
						_localctx = new Multi_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_multi_exp);
						setState(436);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(437);
						match(MUL);
						setState(438);
						cast_exp();
						}
						break;
					case 2:
						{
						_localctx = new Multi_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_multi_exp);
						setState(439);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(440);
						match(DIV);
						setState(441);
						cast_exp();
						}
						break;
					case 3:
						{
						_localctx = new Multi_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_multi_exp);
						setState(442);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(443);
						match(MOD);
						setState(444);
						cast_exp();
						}
						break;
					case 4:
						{
						_localctx = new Multi_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_multi_exp);
						setState(445);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(446);
						match(POW);
						setState(447);
						cast_exp();
						}
						break;
					}
					} 
				}
				setState(452);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Cast_expContext extends ParserRuleContext {
		public Unary_expContext unary_exp() {
			return getRuleContext(Unary_expContext.class,0);
		}
		public TerminalNode Digit_Sequence() { return getToken(qcodeParser.Digit_Sequence, 0); }
		public Cast_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cast_exp; }
	}

	public final Cast_expContext cast_exp() throws RecognitionException {
		Cast_expContext _localctx = new Cast_expContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_cast_exp);
		try {
			setState(455);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PI:
			case TRUE:
			case FALSE:
			case BANG:
			case TILDE:
			case LOGIC_AND:
			case AND:
			case INC:
			case DEC:
			case ADD:
			case SUB:
			case MUL:
			case POW:
			case LPAREN:
			case Identifier:
			case Constant:
				enterOuterAlt(_localctx, 1);
				{
				setState(453);
				unary_exp();
				}
				break;
			case Digit_Sequence:
				enterOuterAlt(_localctx, 2);
				{
				setState(454);
				match(Digit_Sequence);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Unary_expContext extends ParserRuleContext {
		public Postfix_expContext postfix_exp() {
			return getRuleContext(Postfix_expContext.class,0);
		}
		public TerminalNode INC() { return getToken(qcodeParser.INC, 0); }
		public Unary_expContext unary_exp() {
			return getRuleContext(Unary_expContext.class,0);
		}
		public TerminalNode DEC() { return getToken(qcodeParser.DEC, 0); }
		public Unary_operatorContext unary_operator() {
			return getRuleContext(Unary_operatorContext.class,0);
		}
		public Cast_expContext cast_exp() {
			return getRuleContext(Cast_expContext.class,0);
		}
		public TerminalNode LOGIC_AND() { return getToken(qcodeParser.LOGIC_AND, 0); }
		public TerminalNode Identifier() { return getToken(qcodeParser.Identifier, 0); }
		public Unary_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unary_exp; }
	}

	public final Unary_expContext unary_exp() throws RecognitionException {
		Unary_expContext _localctx = new Unary_expContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_unary_exp);
		try {
			setState(467);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PI:
			case TRUE:
			case FALSE:
			case LPAREN:
			case Identifier:
			case Constant:
				enterOuterAlt(_localctx, 1);
				{
				setState(457);
				postfix_exp(0);
				}
				break;
			case INC:
				enterOuterAlt(_localctx, 2);
				{
				setState(458);
				match(INC);
				setState(459);
				unary_exp();
				}
				break;
			case DEC:
				enterOuterAlt(_localctx, 3);
				{
				setState(460);
				match(DEC);
				setState(461);
				unary_exp();
				}
				break;
			case BANG:
			case TILDE:
			case AND:
			case ADD:
			case SUB:
			case MUL:
			case POW:
				enterOuterAlt(_localctx, 4);
				{
				setState(462);
				unary_operator();
				setState(463);
				cast_exp();
				}
				break;
			case LOGIC_AND:
				enterOuterAlt(_localctx, 5);
				{
				setState(465);
				match(LOGIC_AND);
				setState(466);
				match(Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Unary_operatorContext extends ParserRuleContext {
		public TerminalNode ADD() { return getToken(qcodeParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(qcodeParser.SUB, 0); }
		public TerminalNode MUL() { return getToken(qcodeParser.MUL, 0); }
		public TerminalNode POW() { return getToken(qcodeParser.POW, 0); }
		public TerminalNode BANG() { return getToken(qcodeParser.BANG, 0); }
		public TerminalNode TILDE() { return getToken(qcodeParser.TILDE, 0); }
		public TerminalNode AND() { return getToken(qcodeParser.AND, 0); }
		public Unary_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unary_operator; }
	}

	public final Unary_operatorContext unary_operator() throws RecognitionException {
		Unary_operatorContext _localctx = new Unary_operatorContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_unary_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(469);
			_la = _input.LA(1);
			if ( !(((((_la - 58)) & ~0x3f) == 0 && ((1L << (_la - 58)) & ((1L << (BANG - 58)) | (1L << (TILDE - 58)) | (1L << (AND - 58)) | (1L << (ADD - 58)) | (1L << (SUB - 58)) | (1L << (MUL - 58)) | (1L << (POW - 58)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Postfix_expContext extends ParserRuleContext {
		public Primary_expContext primary_exp() {
			return getRuleContext(Primary_expContext.class,0);
		}
		public Dot_nameContext dot_name() {
			return getRuleContext(Dot_nameContext.class,0);
		}
		public Postfix_expContext postfix_exp() {
			return getRuleContext(Postfix_expContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(qcodeParser.LBRACK, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode RBRACK() { return getToken(qcodeParser.RBRACK, 0); }
		public TerminalNode COLON() { return getToken(qcodeParser.COLON, 0); }
		public TerminalNode LPAREN() { return getToken(qcodeParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(qcodeParser.RPAREN, 0); }
		public Argument_exp_ListContext argument_exp_List() {
			return getRuleContext(Argument_exp_ListContext.class,0);
		}
		public TerminalNode INC() { return getToken(qcodeParser.INC, 0); }
		public TerminalNode DEC() { return getToken(qcodeParser.DEC, 0); }
		public Postfix_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_postfix_exp; }
	}

	public final Postfix_expContext postfix_exp() throws RecognitionException {
		return postfix_exp(0);
	}

	private Postfix_expContext postfix_exp(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Postfix_expContext _localctx = new Postfix_expContext(_ctx, _parentState);
		Postfix_expContext _prevctx = _localctx;
		int _startState = 74;
		enterRecursionRule(_localctx, 74, RULE_postfix_exp, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(472);
			primary_exp();
			setState(474);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
			case 1:
				{
				setState(473);
				dot_name();
				}
				break;
			}
			}
			_ctx.stop = _input.LT(-1);
			setState(502);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,37,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(500);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
					case 1:
						{
						_localctx = new Postfix_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfix_exp);
						setState(476);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(477);
						match(LBRACK);
						setState(478);
						expression(0);
						setState(481);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==COLON) {
							{
							setState(479);
							match(COLON);
							setState(480);
							expression(0);
							}
						}

						setState(483);
						match(RBRACK);
						setState(485);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
						case 1:
							{
							setState(484);
							dot_name();
							}
							break;
						}
						}
						break;
					case 2:
						{
						_localctx = new Postfix_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfix_exp);
						setState(487);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(488);
						match(LPAREN);
						setState(490);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PI) | (1L << TRUE) | (1L << FALSE) | (1L << BANG) | (1L << TILDE))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (LOGIC_AND - 65)) | (1L << (AND - 65)) | (1L << (INC - 65)) | (1L << (DEC - 65)) | (1L << (ADD - 65)) | (1L << (SUB - 65)) | (1L << (MUL - 65)) | (1L << (POW - 65)) | (1L << (LPAREN - 65)) | (1L << (Identifier - 65)) | (1L << (Constant - 65)) | (1L << (Digit_Sequence - 65)))) != 0)) {
							{
							setState(489);
							argument_exp_List(0);
							}
						}

						setState(492);
						match(RPAREN);
						setState(494);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
						case 1:
							{
							setState(493);
							dot_name();
							}
							break;
						}
						}
						break;
					case 3:
						{
						_localctx = new Postfix_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfix_exp);
						setState(496);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(497);
						match(INC);
						}
						break;
					case 4:
						{
						_localctx = new Postfix_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfix_exp);
						setState(498);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(499);
						match(DEC);
						}
						break;
					}
					} 
				}
				setState(504);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,37,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Argument_exp_ListContext extends ParserRuleContext {
		public Assignment_expContext assignment_exp() {
			return getRuleContext(Assignment_expContext.class,0);
		}
		public Argument_exp_ListContext argument_exp_List() {
			return getRuleContext(Argument_exp_ListContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(qcodeParser.COMMA, 0); }
		public Argument_exp_ListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argument_exp_List; }
	}

	public final Argument_exp_ListContext argument_exp_List() throws RecognitionException {
		return argument_exp_List(0);
	}

	private Argument_exp_ListContext argument_exp_List(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Argument_exp_ListContext _localctx = new Argument_exp_ListContext(_ctx, _parentState);
		Argument_exp_ListContext _prevctx = _localctx;
		int _startState = 76;
		enterRecursionRule(_localctx, 76, RULE_argument_exp_List, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(506);
			assignment_exp();
			}
			_ctx.stop = _input.LT(-1);
			setState(513);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,38,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Argument_exp_ListContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_argument_exp_List);
					setState(508);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(509);
					match(COMMA);
					setState(510);
					assignment_exp();
					}
					} 
				}
				setState(515);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,38,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Primary_expContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(qcodeParser.Identifier, 0); }
		public TerminalNode Constant() { return getToken(qcodeParser.Constant, 0); }
		public TerminalNode LPAREN() { return getToken(qcodeParser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(qcodeParser.RPAREN, 0); }
		public TerminalNode PI() { return getToken(qcodeParser.PI, 0); }
		public TerminalNode TRUE() { return getToken(qcodeParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(qcodeParser.FALSE, 0); }
		public Primary_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primary_exp; }
	}

	public final Primary_expContext primary_exp() throws RecognitionException {
		Primary_expContext _localctx = new Primary_expContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_primary_exp);
		try {
			setState(525);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(516);
				match(Identifier);
				}
				break;
			case Constant:
				enterOuterAlt(_localctx, 2);
				{
				setState(517);
				match(Constant);
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 3);
				{
				setState(518);
				match(LPAREN);
				setState(519);
				expression(0);
				setState(520);
				match(RPAREN);
				}
				break;
			case PI:
				enterOuterAlt(_localctx, 4);
				{
				setState(522);
				match(PI);
				}
				break;
			case TRUE:
				enterOuterAlt(_localctx, 5);
				{
				setState(523);
				match(TRUE);
				}
				break;
			case FALSE:
				enterOuterAlt(_localctx, 6);
				{
				setState(524);
				match(FALSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Args_type_ListContext extends ParserRuleContext {
		public Args_declarationContext args_declaration() {
			return getRuleContext(Args_declarationContext.class,0);
		}
		public Args_type_ListContext args_type_List() {
			return getRuleContext(Args_type_ListContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(qcodeParser.COMMA, 0); }
		public Args_type_ListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_args_type_List; }
	}

	public final Args_type_ListContext args_type_List() throws RecognitionException {
		return args_type_List(0);
	}

	private Args_type_ListContext args_type_List(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Args_type_ListContext _localctx = new Args_type_ListContext(_ctx, _parentState);
		Args_type_ListContext _prevctx = _localctx;
		int _startState = 80;
		enterRecursionRule(_localctx, 80, RULE_args_type_List, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(528);
			args_declaration();
			}
			_ctx.stop = _input.LT(-1);
			setState(535);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,40,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Args_type_ListContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_args_type_List);
					setState(530);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(531);
					match(COMMA);
					setState(532);
					args_declaration();
					}
					} 
				}
				setState(537);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,40,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Args_declarationContext extends ParserRuleContext {
		public Declaration_SpecifierContext declaration_Specifier() {
			return getRuleContext(Declaration_SpecifierContext.class,0);
		}
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public Args_declarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_args_declaration; }
	}

	public final Args_declarationContext args_declaration() throws RecognitionException {
		Args_declarationContext _localctx = new Args_declarationContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_args_declaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(538);
			declaration_Specifier();
			setState(539);
			declarator(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitializerContext extends ParserRuleContext {
		public Assignment_expContext assignment_exp() {
			return getRuleContext(Assignment_expContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(qcodeParser.LBRACE, 0); }
		public List<InitializerListContext> initializerList() {
			return getRuleContexts(InitializerListContext.class);
		}
		public InitializerListContext initializerList(int i) {
			return getRuleContext(InitializerListContext.class,i);
		}
		public TerminalNode RBRACE() { return getToken(qcodeParser.RBRACE, 0); }
		public TerminalNode COMMA() { return getToken(qcodeParser.COMMA, 0); }
		public InitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initializer; }
	}

	public final InitializerContext initializer() throws RecognitionException {
		InitializerContext _localctx = new InitializerContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_initializer);
		try {
			setState(549);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PI:
			case TRUE:
			case FALSE:
			case BANG:
			case TILDE:
			case LOGIC_AND:
			case AND:
			case INC:
			case DEC:
			case ADD:
			case SUB:
			case MUL:
			case POW:
			case LPAREN:
			case Identifier:
			case Constant:
			case Digit_Sequence:
				enterOuterAlt(_localctx, 1);
				{
				setState(541);
				assignment_exp();
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(542);
				match(LBRACE);
				setState(543);
				initializerList(0);
				{
				setState(544);
				match(COMMA);
				setState(545);
				initializerList(0);
				}
				setState(547);
				match(RBRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitializerListContext extends ParserRuleContext {
		public InitializerContext initializer() {
			return getRuleContext(InitializerContext.class,0);
		}
		public DesignationContext designation() {
			return getRuleContext(DesignationContext.class,0);
		}
		public InitializerListContext initializerList() {
			return getRuleContext(InitializerListContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(qcodeParser.COMMA, 0); }
		public InitializerListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initializerList; }
	}

	public final InitializerListContext initializerList() throws RecognitionException {
		return initializerList(0);
	}

	private InitializerListContext initializerList(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		InitializerListContext _localctx = new InitializerListContext(_ctx, _parentState);
		InitializerListContext _prevctx = _localctx;
		int _startState = 86;
		enterRecursionRule(_localctx, 86, RULE_initializerList, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(553);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(552);
				designation();
				}
			}

			setState(555);
			initializer();
			}
			_ctx.stop = _input.LT(-1);
			setState(565);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,44,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new InitializerListContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_initializerList);
					setState(557);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(558);
					match(COMMA);
					setState(560);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==LBRACK) {
						{
						setState(559);
						designation();
						}
					}

					setState(562);
					initializer();
					}
					} 
				}
				setState(567);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,44,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class DesignationContext extends ParserRuleContext {
		public DesignatorListContext designatorList() {
			return getRuleContext(DesignatorListContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(qcodeParser.ASSIGN, 0); }
		public DesignationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_designation; }
	}

	public final DesignationContext designation() throws RecognitionException {
		DesignationContext _localctx = new DesignationContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_designation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(568);
			designatorList(0);
			setState(569);
			match(ASSIGN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DesignatorListContext extends ParserRuleContext {
		public DesignatorContext designator() {
			return getRuleContext(DesignatorContext.class,0);
		}
		public DesignatorListContext designatorList() {
			return getRuleContext(DesignatorListContext.class,0);
		}
		public DesignatorListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_designatorList; }
	}

	public final DesignatorListContext designatorList() throws RecognitionException {
		return designatorList(0);
	}

	private DesignatorListContext designatorList(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		DesignatorListContext _localctx = new DesignatorListContext(_ctx, _parentState);
		DesignatorListContext _prevctx = _localctx;
		int _startState = 90;
		enterRecursionRule(_localctx, 90, RULE_designatorList, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(572);
			designator();
			}
			_ctx.stop = _input.LT(-1);
			setState(578);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,45,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new DesignatorListContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_designatorList);
					setState(574);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(575);
					designator();
					}
					} 
				}
				setState(580);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,45,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class DesignatorContext extends ParserRuleContext {
		public TerminalNode LBRACK() { return getToken(qcodeParser.LBRACK, 0); }
		public Constant_expContext constant_exp() {
			return getRuleContext(Constant_expContext.class,0);
		}
		public TerminalNode RBRACK() { return getToken(qcodeParser.RBRACK, 0); }
		public DesignatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_designator; }
	}

	public final DesignatorContext designator() throws RecognitionException {
		DesignatorContext _localctx = new DesignatorContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_designator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(581);
			match(LBRACK);
			setState(582);
			constant_exp();
			setState(583);
			match(RBRACK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Constant_expContext extends ParserRuleContext {
		public Condition_expContext condition_exp() {
			return getRuleContext(Condition_expContext.class,0);
		}
		public Constant_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constant_exp; }
	}

	public final Constant_expContext constant_exp() throws RecognitionException {
		Constant_expContext _localctx = new Constant_expContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_constant_exp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(585);
			condition_exp();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_declarationContext extends ParserRuleContext {
		public Func_declaratorContext func_declarator() {
			return getRuleContext(Func_declaratorContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(qcodeParser.SEMI, 0); }
		public Func_declarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_declaration; }
	}

	public final Func_declarationContext func_declaration() throws RecognitionException {
		Func_declarationContext _localctx = new Func_declarationContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_func_declaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(587);
			func_declarator();
			setState(588);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_declaratorContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(qcodeParser.Identifier, 0); }
		public TerminalNode LPAREN() { return getToken(qcodeParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(qcodeParser.RPAREN, 0); }
		public TerminalNode QCIRCUIT() { return getToken(qcodeParser.QCIRCUIT, 0); }
		public Args_type_ListContext args_type_List() {
			return getRuleContext(Args_type_ListContext.class,0);
		}
		public Func_declaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_declarator; }
	}

	public final Func_declaratorContext func_declarator() throws RecognitionException {
		Func_declaratorContext _localctx = new Func_declaratorContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_func_declarator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(591);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==QCIRCUIT) {
				{
				setState(590);
				match(QCIRCUIT);
				}
			}

			setState(593);
			match(Identifier);
			setState(594);
			match(LPAREN);
			setState(596);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << INT) | (1L << FLOAT) | (1L << BOOL) | (1L << DOUBLE) | (1L << IVEC) | (1L << BVEC) | (1L << QVEC) | (1L << QUBIT) | (1L << CVEC) | (1L << CBIT) | (1L << QGATE) | (1L << CIRCUITGEN))) != 0)) {
				{
				setState(595);
				args_type_List(0);
				}
			}

			setState(598);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_definitionContext extends ParserRuleContext {
		public Func_declaratorContext func_declarator() {
			return getRuleContext(Func_declaratorContext.class,0);
		}
		public Comp_stmtContext comp_stmt() {
			return getRuleContext(Comp_stmtContext.class,0);
		}
		public Func_definitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_definition; }
	}

	public final Func_definitionContext func_definition() throws RecognitionException {
		Func_definitionContext _localctx = new Func_definitionContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_func_definition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(600);
			func_declarator();
			setState(601);
			comp_stmt();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclarationListContext extends ParserRuleContext {
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public DeclarationListContext declarationList() {
			return getRuleContext(DeclarationListContext.class,0);
		}
		public DeclarationListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarationList; }
	}

	public final DeclarationListContext declarationList() throws RecognitionException {
		DeclarationListContext _localctx = new DeclarationListContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_declarationList);
		try {
			setState(607);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,48,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(603);
				declaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(604);
				declaration();
				setState(605);
				declarationList();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Comp_stmtContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(qcodeParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(qcodeParser.RBRACE, 0); }
		public Block_ListContext block_List() {
			return getRuleContext(Block_ListContext.class,0);
		}
		public Comp_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comp_stmt; }
	}

	public final Comp_stmtContext comp_stmt() throws RecognitionException {
		Comp_stmtContext _localctx = new Comp_stmtContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_comp_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(609);
			match(LBRACE);
			setState(611);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << PI) | (1L << LET) | (1L << INT) | (1L << FLOAT) | (1L << BOOL) | (1L << IF) | (1L << FOR) | (1L << DOUBLE) | (1L << IVEC) | (1L << BVEC) | (1L << QVEC) | (1L << QUBIT) | (1L << CVEC) | (1L << CBIT) | (1L << QGATE) | (1L << CIRCUITGEN) | (1L << H_GATE) | (1L << X_GATE) | (1L << NOT_GATE) | (1L << T_GATE) | (1L << S_GATE) | (1L << Y_GATE) | (1L << Z_GATE) | (1L << X1_GATE) | (1L << Y1_GATE) | (1L << Z1_GATE) | (1L << U4_GATE) | (1L << RX_GATE) | (1L << RY_GATE) | (1L << RZ_GATE) | (1L << CNOT_GATE) | (1L << CZ_GATE) | (1L << CR_GATE) | (1L << CU_GATE) | (1L << ISWAP) | (1L << MEASURE) | (1L << QIF) | (1L << QWHILE) | (1L << TRUE) | (1L << FALSE) | (1L << BANG) | (1L << TILDE))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (LOGIC_AND - 65)) | (1L << (AND - 65)) | (1L << (INC - 65)) | (1L << (DEC - 65)) | (1L << (ADD - 65)) | (1L << (SUB - 65)) | (1L << (MUL - 65)) | (1L << (POW - 65)) | (1L << (LBRACE - 65)) | (1L << (SEMI - 65)) | (1L << (LPAREN - 65)) | (1L << (Identifier - 65)) | (1L << (Constant - 65)) | (1L << (Digit_Sequence - 65)))) != 0)) {
				{
				setState(610);
				block_List(0);
				}
			}

			setState(613);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Block_ListContext extends ParserRuleContext {
		public Block_ItemContext block_Item() {
			return getRuleContext(Block_ItemContext.class,0);
		}
		public Block_ListContext block_List() {
			return getRuleContext(Block_ListContext.class,0);
		}
		public Block_ListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block_List; }
	}

	public final Block_ListContext block_List() throws RecognitionException {
		return block_List(0);
	}

	private Block_ListContext block_List(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Block_ListContext _localctx = new Block_ListContext(_ctx, _parentState);
		Block_ListContext _prevctx = _localctx;
		int _startState = 106;
		enterRecursionRule(_localctx, 106, RULE_block_List, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(616);
			block_Item();
			}
			_ctx.stop = _input.LT(-1);
			setState(622);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Block_ListContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_block_List);
					setState(618);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(619);
					block_Item();
					}
					} 
				}
				setState(624);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Block_ItemContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(qcodeParser.SEMI, 0); }
		public Literal_declarationContext literal_declaration() {
			return getRuleContext(Literal_declarationContext.class,0);
		}
		public Block_ItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block_Item; }
	}

	public final Block_ItemContext block_Item() throws RecognitionException {
		Block_ItemContext _localctx = new Block_ItemContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_block_Item);
		try {
			setState(632);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,51,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(625);
				statement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(626);
				declaration();
				setState(627);
				match(SEMI);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(629);
				literal_declaration();
				setState(630);
				match(SEMI);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public Exp_stmtContext exp_stmt() {
			return getRuleContext(Exp_stmtContext.class,0);
		}
		public Comp_stmtContext comp_stmt() {
			return getRuleContext(Comp_stmtContext.class,0);
		}
		public Select_stmtContext select_stmt() {
			return getRuleContext(Select_stmtContext.class,0);
		}
		public Iterate_stmtContext iterate_stmt() {
			return getRuleContext(Iterate_stmtContext.class,0);
		}
		public Quantum_gate_stmtContext quantum_gate_stmt() {
			return getRuleContext(Quantum_gate_stmtContext.class,0);
		}
		public Measurement_stmtContext measurement_stmt() {
			return getRuleContext(Measurement_stmtContext.class,0);
		}
		public Q_if_operationContext q_if_operation() {
			return getRuleContext(Q_if_operationContext.class,0);
		}
		public Q_while_operationContext q_while_operation() {
			return getRuleContext(Q_while_operationContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_statement);
		try {
			setState(642);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PI:
			case TRUE:
			case FALSE:
			case BANG:
			case TILDE:
			case LOGIC_AND:
			case AND:
			case INC:
			case DEC:
			case ADD:
			case SUB:
			case MUL:
			case POW:
			case SEMI:
			case LPAREN:
			case Identifier:
			case Constant:
			case Digit_Sequence:
				enterOuterAlt(_localctx, 1);
				{
				setState(634);
				exp_stmt();
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(635);
				comp_stmt();
				}
				break;
			case IF:
				enterOuterAlt(_localctx, 3);
				{
				setState(636);
				select_stmt();
				}
				break;
			case FOR:
				enterOuterAlt(_localctx, 4);
				{
				setState(637);
				iterate_stmt();
				}
				break;
			case H_GATE:
			case X_GATE:
			case NOT_GATE:
			case T_GATE:
			case S_GATE:
			case Y_GATE:
			case Z_GATE:
			case X1_GATE:
			case Y1_GATE:
			case Z1_GATE:
			case U4_GATE:
			case RX_GATE:
			case RY_GATE:
			case RZ_GATE:
			case CNOT_GATE:
			case CZ_GATE:
			case CR_GATE:
			case CU_GATE:
			case ISWAP:
				enterOuterAlt(_localctx, 5);
				{
				setState(638);
				quantum_gate_stmt();
				}
				break;
			case MEASURE:
				enterOuterAlt(_localctx, 6);
				{
				setState(639);
				measurement_stmt();
				}
				break;
			case QIF:
				enterOuterAlt(_localctx, 7);
				{
				setState(640);
				q_if_operation();
				}
				break;
			case QWHILE:
				enterOuterAlt(_localctx, 8);
				{
				setState(641);
				q_while_operation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Exp_stmtContext extends ParserRuleContext {
		public TerminalNode SEMI() { return getToken(qcodeParser.SEMI, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Exp_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp_stmt; }
	}

	public final Exp_stmtContext exp_stmt() throws RecognitionException {
		Exp_stmtContext _localctx = new Exp_stmtContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_exp_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(645);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PI) | (1L << TRUE) | (1L << FALSE) | (1L << BANG) | (1L << TILDE))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (LOGIC_AND - 65)) | (1L << (AND - 65)) | (1L << (INC - 65)) | (1L << (DEC - 65)) | (1L << (ADD - 65)) | (1L << (SUB - 65)) | (1L << (MUL - 65)) | (1L << (POW - 65)) | (1L << (LPAREN - 65)) | (1L << (Identifier - 65)) | (1L << (Constant - 65)) | (1L << (Digit_Sequence - 65)))) != 0)) {
				{
				setState(644);
				expression(0);
				}
			}

			setState(647);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Select_stmtContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(qcodeParser.IF, 0); }
		public TerminalNode LPAREN() { return getToken(qcodeParser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(qcodeParser.RPAREN, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(qcodeParser.ELSE, 0); }
		public Select_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_select_stmt; }
	}

	public final Select_stmtContext select_stmt() throws RecognitionException {
		Select_stmtContext _localctx = new Select_stmtContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_select_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(649);
			match(IF);
			setState(650);
			match(LPAREN);
			setState(651);
			expression(0);
			setState(652);
			match(RPAREN);
			setState(653);
			statement();
			setState(656);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,54,_ctx) ) {
			case 1:
				{
				setState(654);
				match(ELSE);
				setState(655);
				statement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Iterate_stmtContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(qcodeParser.FOR, 0); }
		public TerminalNode LPAREN() { return getToken(qcodeParser.LPAREN, 0); }
		public For_stmtContext for_stmt() {
			return getRuleContext(For_stmtContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(qcodeParser.RPAREN, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public Iterate_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_iterate_stmt; }
	}

	public final Iterate_stmtContext iterate_stmt() throws RecognitionException {
		Iterate_stmtContext _localctx = new Iterate_stmtContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_iterate_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(658);
			match(FOR);
			setState(659);
			match(LPAREN);
			setState(660);
			for_stmt();
			setState(661);
			match(RPAREN);
			setState(662);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class For_stmtContext extends ParserRuleContext {
		public List<TerminalNode> COLON() { return getTokens(qcodeParser.COLON); }
		public TerminalNode COLON(int i) {
			return getToken(qcodeParser.COLON, i);
		}
		public For_startContext for_start() {
			return getRuleContext(For_startContext.class,0);
		}
		public For_stepContext for_step() {
			return getRuleContext(For_stepContext.class,0);
		}
		public For_endContext for_end() {
			return getRuleContext(For_endContext.class,0);
		}
		public For_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_stmt; }
	}

	public final For_stmtContext for_stmt() throws RecognitionException {
		For_stmtContext _localctx = new For_stmtContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_for_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(665);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,55,_ctx) ) {
			case 1:
				{
				setState(664);
				for_start();
				}
				break;
			}
			setState(668);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,56,_ctx) ) {
			case 1:
				{
				setState(667);
				match(COLON);
				}
				break;
			}
			setState(671);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PI) | (1L << TRUE) | (1L << FALSE) | (1L << BANG) | (1L << TILDE))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (LOGIC_AND - 65)) | (1L << (AND - 65)) | (1L << (INC - 65)) | (1L << (DEC - 65)) | (1L << (ADD - 65)) | (1L << (SUB - 65)) | (1L << (MUL - 65)) | (1L << (POW - 65)) | (1L << (LPAREN - 65)) | (1L << (Identifier - 65)) | (1L << (Constant - 65)) | (1L << (Digit_Sequence - 65)))) != 0)) {
				{
				setState(670);
				for_step();
				}
			}

			setState(673);
			match(COLON);
			setState(675);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PI) | (1L << TRUE) | (1L << FALSE) | (1L << BANG) | (1L << TILDE))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (LOGIC_AND - 65)) | (1L << (AND - 65)) | (1L << (INC - 65)) | (1L << (DEC - 65)) | (1L << (ADD - 65)) | (1L << (SUB - 65)) | (1L << (MUL - 65)) | (1L << (POW - 65)) | (1L << (LPAREN - 65)) | (1L << (Identifier - 65)) | (1L << (Constant - 65)) | (1L << (Digit_Sequence - 65)))) != 0)) {
				{
				setState(674);
				for_end();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class For_startContext extends ParserRuleContext {
		public Primary_expContext primary_exp() {
			return getRuleContext(Primary_expContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(qcodeParser.Identifier, 0); }
		public TerminalNode ASSIGN() { return getToken(qcodeParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public Literal_declarationContext literal_declaration() {
			return getRuleContext(Literal_declarationContext.class,0);
		}
		public For_startContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_start; }
	}

	public final For_startContext for_start() throws RecognitionException {
		For_startContext _localctx = new For_startContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_for_start);
		try {
			setState(683);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,59,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(677);
				primary_exp();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(678);
				match(Identifier);
				setState(679);
				match(ASSIGN);
				setState(680);
				expression(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(681);
				declaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(682);
				literal_declaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class For_stepContext extends ParserRuleContext {
		public Assignment_expContext assignment_exp() {
			return getRuleContext(Assignment_expContext.class,0);
		}
		public For_stepContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_step; }
	}

	public final For_stepContext for_step() throws RecognitionException {
		For_stepContext _localctx = new For_stepContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_for_step);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(685);
			assignment_exp();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class For_endContext extends ParserRuleContext {
		public Assignment_expContext assignment_exp() {
			return getRuleContext(Assignment_expContext.class,0);
		}
		public For_endContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_end; }
	}

	public final For_endContext for_end() throws RecognitionException {
		For_endContext _localctx = new For_endContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_for_end);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(687);
			assignment_exp();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Quantum_gate_stmtContext extends ParserRuleContext {
		public Quantum_gate_operationContext quantum_gate_operation() {
			return getRuleContext(Quantum_gate_operationContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(qcodeParser.SEMI, 0); }
		public Dot_nameContext dot_name() {
			return getRuleContext(Dot_nameContext.class,0);
		}
		public Quantum_gate_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quantum_gate_stmt; }
	}

	public final Quantum_gate_stmtContext quantum_gate_stmt() throws RecognitionException {
		Quantum_gate_stmtContext _localctx = new Quantum_gate_stmtContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_quantum_gate_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(689);
			quantum_gate_operation();
			setState(691);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOT) {
				{
				setState(690);
				dot_name();
				}
			}

			setState(693);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Quantum_gate_operationContext extends ParserRuleContext {
		public TerminalNode H_GATE() { return getToken(qcodeParser.H_GATE, 0); }
		public TerminalNode LPAREN() { return getToken(qcodeParser.LPAREN, 0); }
		public Control_gate_expContext control_gate_exp() {
			return getRuleContext(Control_gate_expContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(qcodeParser.RPAREN, 0); }
		public TerminalNode X_GATE() { return getToken(qcodeParser.X_GATE, 0); }
		public TerminalNode NOT_GATE() { return getToken(qcodeParser.NOT_GATE, 0); }
		public TerminalNode T_GATE() { return getToken(qcodeParser.T_GATE, 0); }
		public TerminalNode S_GATE() { return getToken(qcodeParser.S_GATE, 0); }
		public TerminalNode Y_GATE() { return getToken(qcodeParser.Y_GATE, 0); }
		public TerminalNode Z_GATE() { return getToken(qcodeParser.Z_GATE, 0); }
		public TerminalNode X1_GATE() { return getToken(qcodeParser.X1_GATE, 0); }
		public TerminalNode Y1_GATE() { return getToken(qcodeParser.Y1_GATE, 0); }
		public TerminalNode Z1_GATE() { return getToken(qcodeParser.Z1_GATE, 0); }
		public TerminalNode U4_GATE() { return getToken(qcodeParser.U4_GATE, 0); }
		public Four_angle_argsContext four_angle_args() {
			return getRuleContext(Four_angle_argsContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(qcodeParser.COMMA, 0); }
		public TerminalNode RX_GATE() { return getToken(qcodeParser.RX_GATE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RY_GATE() { return getToken(qcodeParser.RY_GATE, 0); }
		public TerminalNode RZ_GATE() { return getToken(qcodeParser.RZ_GATE, 0); }
		public TerminalNode CNOT_GATE() { return getToken(qcodeParser.CNOT_GATE, 0); }
		public Double_gate_expContext double_gate_exp() {
			return getRuleContext(Double_gate_expContext.class,0);
		}
		public TerminalNode CZ_GATE() { return getToken(qcodeParser.CZ_GATE, 0); }
		public TerminalNode CU_GATE() { return getToken(qcodeParser.CU_GATE, 0); }
		public TerminalNode ISWAP() { return getToken(qcodeParser.ISWAP, 0); }
		public ThetaContext theta() {
			return getRuleContext(ThetaContext.class,0);
		}
		public TerminalNode CR_GATE() { return getToken(qcodeParser.CR_GATE, 0); }
		public Quantum_gate_operationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quantum_gate_operation; }
	}

	public final Quantum_gate_operationContext quantum_gate_operation() throws RecognitionException {
		Quantum_gate_operationContext _localctx = new Quantum_gate_operationContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_quantum_gate_operation);
		try {
			setState(804);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case H_GATE:
				enterOuterAlt(_localctx, 1);
				{
				setState(695);
				match(H_GATE);
				setState(696);
				match(LPAREN);
				setState(697);
				control_gate_exp();
				setState(698);
				match(RPAREN);
				}
				break;
			case X_GATE:
				enterOuterAlt(_localctx, 2);
				{
				setState(700);
				match(X_GATE);
				setState(701);
				match(LPAREN);
				setState(702);
				control_gate_exp();
				setState(703);
				match(RPAREN);
				}
				break;
			case NOT_GATE:
				enterOuterAlt(_localctx, 3);
				{
				setState(705);
				match(NOT_GATE);
				setState(706);
				match(LPAREN);
				setState(707);
				control_gate_exp();
				setState(708);
				match(RPAREN);
				}
				break;
			case T_GATE:
				enterOuterAlt(_localctx, 4);
				{
				setState(710);
				match(T_GATE);
				setState(711);
				match(LPAREN);
				setState(712);
				control_gate_exp();
				setState(713);
				match(RPAREN);
				}
				break;
			case S_GATE:
				enterOuterAlt(_localctx, 5);
				{
				setState(715);
				match(S_GATE);
				setState(716);
				match(LPAREN);
				setState(717);
				control_gate_exp();
				setState(718);
				match(RPAREN);
				}
				break;
			case Y_GATE:
				enterOuterAlt(_localctx, 6);
				{
				setState(720);
				match(Y_GATE);
				setState(721);
				match(LPAREN);
				setState(722);
				control_gate_exp();
				setState(723);
				match(RPAREN);
				}
				break;
			case Z_GATE:
				enterOuterAlt(_localctx, 7);
				{
				setState(725);
				match(Z_GATE);
				setState(726);
				match(LPAREN);
				setState(727);
				control_gate_exp();
				setState(728);
				match(RPAREN);
				}
				break;
			case X1_GATE:
				enterOuterAlt(_localctx, 8);
				{
				setState(730);
				match(X1_GATE);
				setState(731);
				match(LPAREN);
				setState(732);
				control_gate_exp();
				setState(733);
				match(RPAREN);
				}
				break;
			case Y1_GATE:
				enterOuterAlt(_localctx, 9);
				{
				setState(735);
				match(Y1_GATE);
				setState(736);
				match(LPAREN);
				setState(737);
				control_gate_exp();
				setState(738);
				match(RPAREN);
				}
				break;
			case Z1_GATE:
				enterOuterAlt(_localctx, 10);
				{
				setState(740);
				match(Z1_GATE);
				setState(741);
				match(LPAREN);
				setState(742);
				control_gate_exp();
				setState(743);
				match(RPAREN);
				}
				break;
			case U4_GATE:
				enterOuterAlt(_localctx, 11);
				{
				setState(745);
				match(U4_GATE);
				setState(746);
				match(LPAREN);
				setState(747);
				four_angle_args();
				setState(748);
				match(COMMA);
				setState(749);
				control_gate_exp();
				setState(750);
				match(RPAREN);
				}
				break;
			case RX_GATE:
				enterOuterAlt(_localctx, 12);
				{
				setState(752);
				match(RX_GATE);
				setState(753);
				match(LPAREN);
				setState(754);
				control_gate_exp();
				setState(755);
				match(COMMA);
				setState(756);
				expression(0);
				setState(757);
				match(RPAREN);
				}
				break;
			case RY_GATE:
				enterOuterAlt(_localctx, 13);
				{
				setState(759);
				match(RY_GATE);
				setState(760);
				match(LPAREN);
				setState(761);
				control_gate_exp();
				setState(762);
				match(COMMA);
				setState(763);
				expression(0);
				setState(764);
				match(RPAREN);
				}
				break;
			case RZ_GATE:
				enterOuterAlt(_localctx, 14);
				{
				setState(766);
				match(RZ_GATE);
				setState(767);
				match(LPAREN);
				setState(768);
				control_gate_exp();
				setState(769);
				match(COMMA);
				setState(770);
				expression(0);
				setState(771);
				match(RPAREN);
				}
				break;
			case CNOT_GATE:
				enterOuterAlt(_localctx, 15);
				{
				setState(773);
				match(CNOT_GATE);
				setState(774);
				match(LPAREN);
				setState(775);
				double_gate_exp();
				setState(776);
				match(RPAREN);
				}
				break;
			case CZ_GATE:
				enterOuterAlt(_localctx, 16);
				{
				setState(778);
				match(CZ_GATE);
				setState(779);
				match(LPAREN);
				setState(780);
				double_gate_exp();
				setState(781);
				match(RPAREN);
				}
				break;
			case CU_GATE:
				enterOuterAlt(_localctx, 17);
				{
				setState(783);
				match(CU_GATE);
				setState(784);
				match(LPAREN);
				setState(785);
				four_angle_args();
				setState(786);
				match(COMMA);
				setState(787);
				double_gate_exp();
				setState(788);
				match(RPAREN);
				}
				break;
			case ISWAP:
				enterOuterAlt(_localctx, 18);
				{
				setState(790);
				match(ISWAP);
				setState(791);
				match(LPAREN);
				setState(792);
				double_gate_exp();
				setState(793);
				match(COMMA);
				setState(794);
				theta();
				setState(795);
				match(RPAREN);
				}
				break;
			case CR_GATE:
				enterOuterAlt(_localctx, 19);
				{
				setState(797);
				match(CR_GATE);
				setState(798);
				match(LPAREN);
				setState(799);
				double_gate_exp();
				setState(800);
				match(COMMA);
				setState(801);
				theta();
				setState(802);
				match(RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Four_angle_argsContext extends ParserRuleContext {
		public AlphaContext alpha() {
			return getRuleContext(AlphaContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(qcodeParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(qcodeParser.COMMA, i);
		}
		public BetaContext beta() {
			return getRuleContext(BetaContext.class,0);
		}
		public GammaContext gamma() {
			return getRuleContext(GammaContext.class,0);
		}
		public DeltaContext delta() {
			return getRuleContext(DeltaContext.class,0);
		}
		public Four_angle_argsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_four_angle_args; }
	}

	public final Four_angle_argsContext four_angle_args() throws RecognitionException {
		Four_angle_argsContext _localctx = new Four_angle_argsContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_four_angle_args);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(806);
			alpha();
			setState(807);
			match(COMMA);
			setState(808);
			beta();
			setState(809);
			match(COMMA);
			setState(810);
			gamma();
			setState(811);
			match(COMMA);
			setState(812);
			delta();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlphaContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AlphaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alpha; }
	}

	public final AlphaContext alpha() throws RecognitionException {
		AlphaContext _localctx = new AlphaContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_alpha);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(814);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BetaContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BetaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_beta; }
	}

	public final BetaContext beta() throws RecognitionException {
		BetaContext _localctx = new BetaContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_beta);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(816);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GammaContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public GammaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gamma; }
	}

	public final GammaContext gamma() throws RecognitionException {
		GammaContext _localctx = new GammaContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_gamma);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(818);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeltaContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DeltaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_delta; }
	}

	public final DeltaContext delta() throws RecognitionException {
		DeltaContext _localctx = new DeltaContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_delta);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(820);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ThetaContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ThetaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_theta; }
	}

	public final ThetaContext theta() throws RecognitionException {
		ThetaContext _localctx = new ThetaContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_theta);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(822);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Control_gate_expContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(qcodeParser.Identifier, 0); }
		public TerminalNode LBRACK() { return getToken(qcodeParser.LBRACK, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RBRACK() { return getToken(qcodeParser.RBRACK, 0); }
		public Control_gate_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_control_gate_exp; }
	}

	public final Control_gate_expContext control_gate_exp() throws RecognitionException {
		Control_gate_expContext _localctx = new Control_gate_expContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_control_gate_exp);
		try {
			setState(830);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,62,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(824);
				match(Identifier);
				setState(825);
				match(LBRACK);
				setState(826);
				expression(0);
				setState(827);
				match(RBRACK);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(829);
				match(Identifier);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Double_gate_expContext extends ParserRuleContext {
		public Control_gate_expContext control_gate_exp() {
			return getRuleContext(Control_gate_expContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(qcodeParser.COMMA, 0); }
		public Target_gate_expContext target_gate_exp() {
			return getRuleContext(Target_gate_expContext.class,0);
		}
		public Double_gate_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_double_gate_exp; }
	}

	public final Double_gate_expContext double_gate_exp() throws RecognitionException {
		Double_gate_expContext _localctx = new Double_gate_expContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_double_gate_exp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(832);
			control_gate_exp();
			setState(833);
			match(COMMA);
			setState(834);
			target_gate_exp();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Target_gate_expContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(qcodeParser.Identifier, 0); }
		public TerminalNode LBRACK() { return getToken(qcodeParser.LBRACK, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RBRACK() { return getToken(qcodeParser.RBRACK, 0); }
		public Target_gate_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_target_gate_exp; }
	}

	public final Target_gate_expContext target_gate_exp() throws RecognitionException {
		Target_gate_expContext _localctx = new Target_gate_expContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_target_gate_exp);
		try {
			setState(842);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,63,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(836);
				match(Identifier);
				setState(837);
				match(LBRACK);
				setState(838);
				expression(0);
				setState(839);
				match(RBRACK);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(841);
				match(Identifier);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Measurement_stmtContext extends ParserRuleContext {
		public TerminalNode MEASURE() { return getToken(qcodeParser.MEASURE, 0); }
		public TerminalNode LPAREN() { return getToken(qcodeParser.LPAREN, 0); }
		public Control_gate_expContext control_gate_exp() {
			return getRuleContext(Control_gate_expContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(qcodeParser.COMMA, 0); }
		public Accept_cbit_stmtContext accept_cbit_stmt() {
			return getRuleContext(Accept_cbit_stmtContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(qcodeParser.RPAREN, 0); }
		public TerminalNode SEMI() { return getToken(qcodeParser.SEMI, 0); }
		public Measurement_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_measurement_stmt; }
	}

	public final Measurement_stmtContext measurement_stmt() throws RecognitionException {
		Measurement_stmtContext _localctx = new Measurement_stmtContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_measurement_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(844);
			match(MEASURE);
			setState(845);
			match(LPAREN);
			setState(846);
			control_gate_exp();
			setState(847);
			match(COMMA);
			setState(848);
			accept_cbit_stmt();
			setState(849);
			match(RPAREN);
			setState(850);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Accept_cbit_stmtContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(qcodeParser.Identifier, 0); }
		public TerminalNode LBRACK() { return getToken(qcodeParser.LBRACK, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RBRACK() { return getToken(qcodeParser.RBRACK, 0); }
		public Accept_cbit_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_accept_cbit_stmt; }
	}

	public final Accept_cbit_stmtContext accept_cbit_stmt() throws RecognitionException {
		Accept_cbit_stmtContext _localctx = new Accept_cbit_stmtContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_accept_cbit_stmt);
		try {
			setState(858);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,64,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(852);
				match(Identifier);
				setState(853);
				match(LBRACK);
				setState(854);
				expression(0);
				setState(855);
				match(RBRACK);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(857);
				match(Identifier);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Q_if_operationContext extends ParserRuleContext {
		public TerminalNode QIF() { return getToken(qcodeParser.QIF, 0); }
		public TerminalNode LPAREN() { return getToken(qcodeParser.LPAREN, 0); }
		public Q_conditionContext q_condition() {
			return getRuleContext(Q_conditionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(qcodeParser.RPAREN, 0); }
		public List<TerminalNode> LBRACE() { return getTokens(qcodeParser.LBRACE); }
		public TerminalNode LBRACE(int i) {
			return getToken(qcodeParser.LBRACE, i);
		}
		public List<Q_if_stmtContext> q_if_stmt() {
			return getRuleContexts(Q_if_stmtContext.class);
		}
		public Q_if_stmtContext q_if_stmt(int i) {
			return getRuleContext(Q_if_stmtContext.class,i);
		}
		public List<TerminalNode> RBRACE() { return getTokens(qcodeParser.RBRACE); }
		public TerminalNode RBRACE(int i) {
			return getToken(qcodeParser.RBRACE, i);
		}
		public TerminalNode QELSE() { return getToken(qcodeParser.QELSE, 0); }
		public Q_if_operationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_q_if_operation; }
	}

	public final Q_if_operationContext q_if_operation() throws RecognitionException {
		Q_if_operationContext _localctx = new Q_if_operationContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_q_if_operation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(860);
			match(QIF);
			setState(861);
			match(LPAREN);
			setState(862);
			q_condition();
			setState(863);
			match(RPAREN);
			setState(864);
			match(LBRACE);
			setState(865);
			q_if_stmt();
			setState(866);
			match(RBRACE);
			setState(872);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,65,_ctx) ) {
			case 1:
				{
				setState(867);
				match(QELSE);
				setState(868);
				match(LBRACE);
				setState(869);
				q_if_stmt();
				setState(870);
				match(RBRACE);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Q_if_stmtContext extends ParserRuleContext {
		public List<Q_if_stmt_itemContext> q_if_stmt_item() {
			return getRuleContexts(Q_if_stmt_itemContext.class);
		}
		public Q_if_stmt_itemContext q_if_stmt_item(int i) {
			return getRuleContext(Q_if_stmt_itemContext.class,i);
		}
		public Q_if_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_q_if_stmt; }
	}

	public final Q_if_stmtContext q_if_stmt() throws RecognitionException {
		Q_if_stmtContext _localctx = new Q_if_stmtContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_q_if_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(877);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << PI) | (1L << LET) | (1L << INT) | (1L << FLOAT) | (1L << BOOL) | (1L << IF) | (1L << FOR) | (1L << DOUBLE) | (1L << IVEC) | (1L << BVEC) | (1L << QVEC) | (1L << QUBIT) | (1L << CVEC) | (1L << CBIT) | (1L << QGATE) | (1L << CIRCUITGEN) | (1L << H_GATE) | (1L << X_GATE) | (1L << NOT_GATE) | (1L << T_GATE) | (1L << S_GATE) | (1L << Y_GATE) | (1L << Z_GATE) | (1L << X1_GATE) | (1L << Y1_GATE) | (1L << Z1_GATE) | (1L << U4_GATE) | (1L << RX_GATE) | (1L << RY_GATE) | (1L << RZ_GATE) | (1L << CNOT_GATE) | (1L << CZ_GATE) | (1L << CR_GATE) | (1L << CU_GATE) | (1L << ISWAP) | (1L << MEASURE) | (1L << QIF) | (1L << QWHILE) | (1L << TRUE) | (1L << FALSE) | (1L << BANG) | (1L << TILDE))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (LOGIC_AND - 65)) | (1L << (AND - 65)) | (1L << (INC - 65)) | (1L << (DEC - 65)) | (1L << (ADD - 65)) | (1L << (SUB - 65)) | (1L << (MUL - 65)) | (1L << (POW - 65)) | (1L << (LBRACE - 65)) | (1L << (SEMI - 65)) | (1L << (LPAREN - 65)) | (1L << (Identifier - 65)) | (1L << (Constant - 65)) | (1L << (Digit_Sequence - 65)))) != 0)) {
				{
				{
				setState(874);
				q_if_stmt_item();
				}
				}
				setState(879);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Q_if_stmt_itemContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(qcodeParser.SEMI, 0); }
		public Literal_declarationContext literal_declaration() {
			return getRuleContext(Literal_declarationContext.class,0);
		}
		public Q_if_stmt_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_q_if_stmt_item; }
	}

	public final Q_if_stmt_itemContext q_if_stmt_item() throws RecognitionException {
		Q_if_stmt_itemContext _localctx = new Q_if_stmt_itemContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_q_if_stmt_item);
		try {
			setState(887);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,67,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(880);
				statement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(881);
				declaration();
				setState(882);
				match(SEMI);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(884);
				literal_declaration();
				setState(885);
				match(SEMI);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Q_while_operationContext extends ParserRuleContext {
		public TerminalNode QWHILE() { return getToken(qcodeParser.QWHILE, 0); }
		public TerminalNode LPAREN() { return getToken(qcodeParser.LPAREN, 0); }
		public Q_conditionContext q_condition() {
			return getRuleContext(Q_conditionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(qcodeParser.RPAREN, 0); }
		public TerminalNode LBRACE() { return getToken(qcodeParser.LBRACE, 0); }
		public Q_while_stmtContext q_while_stmt() {
			return getRuleContext(Q_while_stmtContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(qcodeParser.RBRACE, 0); }
		public Q_while_operationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_q_while_operation; }
	}

	public final Q_while_operationContext q_while_operation() throws RecognitionException {
		Q_while_operationContext _localctx = new Q_while_operationContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_q_while_operation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(889);
			match(QWHILE);
			setState(890);
			match(LPAREN);
			setState(891);
			q_condition();
			setState(892);
			match(RPAREN);
			setState(893);
			match(LBRACE);
			setState(894);
			q_while_stmt();
			setState(895);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Q_while_stmtContext extends ParserRuleContext {
		public List<Q_while_stmt_itemContext> q_while_stmt_item() {
			return getRuleContexts(Q_while_stmt_itemContext.class);
		}
		public Q_while_stmt_itemContext q_while_stmt_item(int i) {
			return getRuleContext(Q_while_stmt_itemContext.class,i);
		}
		public Q_while_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_q_while_stmt; }
	}

	public final Q_while_stmtContext q_while_stmt() throws RecognitionException {
		Q_while_stmtContext _localctx = new Q_while_stmtContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_q_while_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(900);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << PI) | (1L << LET) | (1L << INT) | (1L << FLOAT) | (1L << BOOL) | (1L << IF) | (1L << FOR) | (1L << DOUBLE) | (1L << IVEC) | (1L << BVEC) | (1L << QVEC) | (1L << QUBIT) | (1L << CVEC) | (1L << CBIT) | (1L << QGATE) | (1L << CIRCUITGEN) | (1L << H_GATE) | (1L << X_GATE) | (1L << NOT_GATE) | (1L << T_GATE) | (1L << S_GATE) | (1L << Y_GATE) | (1L << Z_GATE) | (1L << X1_GATE) | (1L << Y1_GATE) | (1L << Z1_GATE) | (1L << U4_GATE) | (1L << RX_GATE) | (1L << RY_GATE) | (1L << RZ_GATE) | (1L << CNOT_GATE) | (1L << CZ_GATE) | (1L << CR_GATE) | (1L << CU_GATE) | (1L << ISWAP) | (1L << MEASURE) | (1L << QIF) | (1L << QWHILE) | (1L << TRUE) | (1L << FALSE) | (1L << BANG) | (1L << TILDE))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (LOGIC_AND - 65)) | (1L << (AND - 65)) | (1L << (INC - 65)) | (1L << (DEC - 65)) | (1L << (ADD - 65)) | (1L << (SUB - 65)) | (1L << (MUL - 65)) | (1L << (POW - 65)) | (1L << (LBRACE - 65)) | (1L << (SEMI - 65)) | (1L << (LPAREN - 65)) | (1L << (Identifier - 65)) | (1L << (Constant - 65)) | (1L << (Digit_Sequence - 65)))) != 0)) {
				{
				{
				setState(897);
				q_while_stmt_item();
				}
				}
				setState(902);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Q_while_stmt_itemContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(qcodeParser.SEMI, 0); }
		public Literal_declarationContext literal_declaration() {
			return getRuleContext(Literal_declarationContext.class,0);
		}
		public Q_while_stmt_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_q_while_stmt_item; }
	}

	public final Q_while_stmt_itemContext q_while_stmt_item() throws RecognitionException {
		Q_while_stmt_itemContext _localctx = new Q_while_stmt_itemContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_q_while_stmt_item);
		try {
			setState(910);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,69,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(903);
				statement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(904);
				declaration();
				setState(905);
				match(SEMI);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(907);
				literal_declaration();
				setState(908);
				match(SEMI);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Q_conditionContext extends ParserRuleContext {
		public List<Inclu_expContext> inclu_exp() {
			return getRuleContexts(Inclu_expContext.class);
		}
		public Inclu_expContext inclu_exp(int i) {
			return getRuleContext(Inclu_expContext.class,i);
		}
		public List<Q_operatorContext> q_operator() {
			return getRuleContexts(Q_operatorContext.class);
		}
		public Q_operatorContext q_operator(int i) {
			return getRuleContext(Q_operatorContext.class,i);
		}
		public Q_conditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_q_condition; }
	}

	public final Q_conditionContext q_condition() throws RecognitionException {
		Q_conditionContext _localctx = new Q_conditionContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_q_condition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(912);
			inclu_exp(0);
			setState(918);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LOGIC_AND || _la==LOGIC_OR) {
				{
				{
				setState(913);
				q_operator();
				setState(914);
				inclu_exp(0);
				}
				}
				setState(920);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Q_operatorContext extends ParserRuleContext {
		public TerminalNode LOGIC_AND() { return getToken(qcodeParser.LOGIC_AND, 0); }
		public TerminalNode LOGIC_OR() { return getToken(qcodeParser.LOGIC_OR, 0); }
		public Q_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_q_operator; }
	}

	public final Q_operatorContext q_operator() throws RecognitionException {
		Q_operatorContext _localctx = new Q_operatorContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_q_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(921);
			_la = _input.LA(1);
			if ( !(_la==LOGIC_AND || _la==LOGIC_OR) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 13:
			return init_DeclaratorList_sempred((Init_DeclaratorListContext)_localctx, predIndex);
		case 14:
			return init_Literal_DeclaratorList_sempred((Init_Literal_DeclaratorListContext)_localctx, predIndex);
		case 17:
			return declarator_sempred((DeclaratorContext)_localctx, predIndex);
		case 21:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		case 23:
			return expression_list_sempred((Expression_listContext)_localctx, predIndex);
		case 24:
			return logicOr_exp_sempred((LogicOr_expContext)_localctx, predIndex);
		case 25:
			return logicAnd_exp_sempred((LogicAnd_expContext)_localctx, predIndex);
		case 26:
			return inclu_exp_sempred((Inclu_expContext)_localctx, predIndex);
		case 27:
			return exclu_exp_sempred((Exclu_expContext)_localctx, predIndex);
		case 28:
			return and_exp_sempred((And_expContext)_localctx, predIndex);
		case 29:
			return equal_exp_sempred((Equal_expContext)_localctx, predIndex);
		case 30:
			return relation_exp_sempred((Relation_expContext)_localctx, predIndex);
		case 31:
			return shift_exp_sempred((Shift_expContext)_localctx, predIndex);
		case 32:
			return additive_exp_sempred((Additive_expContext)_localctx, predIndex);
		case 33:
			return multi_exp_sempred((Multi_expContext)_localctx, predIndex);
		case 37:
			return postfix_exp_sempred((Postfix_expContext)_localctx, predIndex);
		case 38:
			return argument_exp_List_sempred((Argument_exp_ListContext)_localctx, predIndex);
		case 40:
			return args_type_List_sempred((Args_type_ListContext)_localctx, predIndex);
		case 43:
			return initializerList_sempred((InitializerListContext)_localctx, predIndex);
		case 45:
			return designatorList_sempred((DesignatorListContext)_localctx, predIndex);
		case 53:
			return block_List_sempred((Block_ListContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean init_DeclaratorList_sempred(Init_DeclaratorListContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean init_Literal_DeclaratorList_sempred(Init_Literal_DeclaratorListContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean declarator_sempred(DeclaratorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 3:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean expression_list_sempred(Expression_listContext _localctx, int predIndex) {
		switch (predIndex) {
		case 4:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean logicOr_exp_sempred(LogicOr_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 5:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean logicAnd_exp_sempred(LogicAnd_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 6:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean inclu_exp_sempred(Inclu_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 7:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean exclu_exp_sempred(Exclu_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 8:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean and_exp_sempred(And_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 9:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean equal_exp_sempred(Equal_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 10:
			return precpred(_ctx, 2);
		case 11:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean relation_exp_sempred(Relation_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 12:
			return precpred(_ctx, 4);
		case 13:
			return precpred(_ctx, 3);
		case 14:
			return precpred(_ctx, 2);
		case 15:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean shift_exp_sempred(Shift_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 16:
			return precpred(_ctx, 2);
		case 17:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean additive_exp_sempred(Additive_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 18:
			return precpred(_ctx, 2);
		case 19:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean multi_exp_sempred(Multi_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 20:
			return precpred(_ctx, 4);
		case 21:
			return precpred(_ctx, 3);
		case 22:
			return precpred(_ctx, 2);
		case 23:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean postfix_exp_sempred(Postfix_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 24:
			return precpred(_ctx, 4);
		case 25:
			return precpred(_ctx, 3);
		case 26:
			return precpred(_ctx, 2);
		case 27:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean argument_exp_List_sempred(Argument_exp_ListContext _localctx, int predIndex) {
		switch (predIndex) {
		case 28:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean args_type_List_sempred(Args_type_ListContext _localctx, int predIndex) {
		switch (predIndex) {
		case 29:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean initializerList_sempred(InitializerListContext _localctx, int predIndex) {
		switch (predIndex) {
		case 30:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean designatorList_sempred(DesignatorListContext _localctx, int predIndex) {
		switch (predIndex) {
		case 31:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean block_List_sempred(Block_ListContext _localctx, int predIndex) {
		switch (predIndex) {
		case 32:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3e\u039e\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\3\2\7\2\u00ac\n\2\f\2\16\2\u00af\13\2\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\5\3\u00ba\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\6\3\6\3\7\5"+
		"\7\u00c7\n\7\3\7\3\7\3\b\5\b\u00cc\n\b\3\b\3\b\3\t\3\t\3\t\3\t\5\t\u00d4"+
		"\n\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\17\3\17\3"+
		"\17\3\17\7\17\u00e6\n\17\f\17\16\17\u00e9\13\17\3\20\3\20\3\20\3\20\3"+
		"\20\3\20\7\20\u00f1\n\20\f\20\16\20\u00f4\13\20\3\21\3\21\3\21\3\21\3"+
		"\21\5\21\u00fb\n\21\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\7\23\u0109\n\23\f\23\16\23\u010c\13\23\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\24\5\24\u0115\n\24\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\26"+
		"\5\26\u011f\n\26\3\27\3\27\3\27\3\27\3\27\3\27\7\27\u0127\n\27\f\27\16"+
		"\27\u012a\13\27\3\30\3\30\3\30\3\30\5\30\u0130\n\30\3\30\3\30\3\31\3\31"+
		"\3\31\3\31\3\31\3\31\7\31\u013a\n\31\f\31\16\31\u013d\13\31\3\32\3\32"+
		"\3\32\3\32\3\32\3\32\7\32\u0145\n\32\f\32\16\32\u0148\13\32\3\33\3\33"+
		"\3\33\3\33\3\33\3\33\7\33\u0150\n\33\f\33\16\33\u0153\13\33\3\34\3\34"+
		"\3\34\3\34\3\34\3\34\7\34\u015b\n\34\f\34\16\34\u015e\13\34\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\7\35\u0166\n\35\f\35\16\35\u0169\13\35\3\36\3\36"+
		"\3\36\3\36\3\36\3\36\7\36\u0171\n\36\f\36\16\36\u0174\13\36\3\37\3\37"+
		"\3\37\3\37\3\37\3\37\3\37\3\37\3\37\7\37\u017f\n\37\f\37\16\37\u0182\13"+
		"\37\3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \7 \u0193\n \f \16 \u0196"+
		"\13 \3!\3!\3!\3!\3!\3!\3!\3!\3!\7!\u01a1\n!\f!\16!\u01a4\13!\3\"\3\"\3"+
		"\"\3\"\3\"\3\"\3\"\3\"\3\"\7\"\u01af\n\"\f\"\16\"\u01b2\13\"\3#\3#\3#"+
		"\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\7#\u01c3\n#\f#\16#\u01c6\13#\3$\3"+
		"$\5$\u01ca\n$\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\5%\u01d6\n%\3&\3&\3\'\3\'"+
		"\3\'\5\'\u01dd\n\'\3\'\3\'\3\'\3\'\3\'\5\'\u01e4\n\'\3\'\3\'\5\'\u01e8"+
		"\n\'\3\'\3\'\3\'\5\'\u01ed\n\'\3\'\3\'\5\'\u01f1\n\'\3\'\3\'\3\'\3\'\7"+
		"\'\u01f7\n\'\f\'\16\'\u01fa\13\'\3(\3(\3(\3(\3(\3(\7(\u0202\n(\f(\16("+
		"\u0205\13(\3)\3)\3)\3)\3)\3)\3)\3)\3)\5)\u0210\n)\3*\3*\3*\3*\3*\3*\7"+
		"*\u0218\n*\f*\16*\u021b\13*\3+\3+\3+\3,\3,\3,\3,\3,\3,\3,\3,\5,\u0228"+
		"\n,\3-\3-\5-\u022c\n-\3-\3-\3-\3-\3-\5-\u0233\n-\3-\7-\u0236\n-\f-\16"+
		"-\u0239\13-\3.\3.\3.\3/\3/\3/\3/\3/\7/\u0243\n/\f/\16/\u0246\13/\3\60"+
		"\3\60\3\60\3\60\3\61\3\61\3\62\3\62\3\62\3\63\5\63\u0252\n\63\3\63\3\63"+
		"\3\63\5\63\u0257\n\63\3\63\3\63\3\64\3\64\3\64\3\65\3\65\3\65\3\65\5\65"+
		"\u0262\n\65\3\66\3\66\5\66\u0266\n\66\3\66\3\66\3\67\3\67\3\67\3\67\3"+
		"\67\7\67\u026f\n\67\f\67\16\67\u0272\13\67\38\38\38\38\38\38\38\58\u027b"+
		"\n8\39\39\39\39\39\39\39\39\59\u0285\n9\3:\5:\u0288\n:\3:\3:\3;\3;\3;"+
		"\3;\3;\3;\3;\5;\u0293\n;\3<\3<\3<\3<\3<\3<\3=\5=\u029c\n=\3=\5=\u029f"+
		"\n=\3=\5=\u02a2\n=\3=\3=\5=\u02a6\n=\3>\3>\3>\3>\3>\3>\5>\u02ae\n>\3?"+
		"\3?\3@\3@\3A\3A\5A\u02b6\nA\3A\3A\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B"+
		"\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B"+
		"\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B"+
		"\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B"+
		"\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B"+
		"\3B\3B\3B\3B\3B\5B\u0327\nB\3C\3C\3C\3C\3C\3C\3C\3C\3D\3D\3E\3E\3F\3F"+
		"\3G\3G\3H\3H\3I\3I\3I\3I\3I\3I\5I\u0341\nI\3J\3J\3J\3J\3K\3K\3K\3K\3K"+
		"\3K\5K\u034d\nK\3L\3L\3L\3L\3L\3L\3L\3L\3M\3M\3M\3M\3M\3M\5M\u035d\nM"+
		"\3N\3N\3N\3N\3N\3N\3N\3N\3N\3N\3N\3N\5N\u036b\nN\3O\7O\u036e\nO\fO\16"+
		"O\u0371\13O\3P\3P\3P\3P\3P\3P\3P\5P\u037a\nP\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3"+
		"R\7R\u0385\nR\fR\16R\u0388\13R\3S\3S\3S\3S\3S\3S\3S\5S\u0391\nS\3T\3T"+
		"\3T\3T\7T\u0397\nT\fT\16T\u039a\13T\3U\3U\3U\2\27\34\36$,\60\62\64\66"+
		"8:<>@BDLNRX\\lV\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62"+
		"\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088"+
		"\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a\u009c\u009e\u00a0"+
		"\u00a2\u00a4\u00a6\u00a8\2\13\3\2\3\4\3\2\17\21\5\2\t\13\23\23\25\26\4"+
		"\2\5\5\36\36\4\2\30\31\34\34\3\2\32\33\4\299QT\5\2<=EEKN\3\2CD\2\u03c0"+
		"\2\u00ad\3\2\2\2\4\u00b9\3\2\2\2\6\u00bb\3\2\2\2\b\u00c1\3\2\2\2\n\u00c3"+
		"\3\2\2\2\f\u00c6\3\2\2\2\16\u00cb\3\2\2\2\20\u00d3\3\2\2\2\22\u00d5\3"+
		"\2\2\2\24\u00d7\3\2\2\2\26\u00d9\3\2\2\2\30\u00db\3\2\2\2\32\u00dd\3\2"+
		"\2\2\34\u00df\3\2\2\2\36\u00ea\3\2\2\2 \u00fa\3\2\2\2\"\u00fc\3\2\2\2"+
		"$\u0100\3\2\2\2&\u0114\3\2\2\2(\u0116\3\2\2\2*\u0118\3\2\2\2,\u0120\3"+
		"\2\2\2.\u012b\3\2\2\2\60\u0133\3\2\2\2\62\u013e\3\2\2\2\64\u0149\3\2\2"+
		"\2\66\u0154\3\2\2\28\u015f\3\2\2\2:\u016a\3\2\2\2<\u0175\3\2\2\2>\u0183"+
		"\3\2\2\2@\u0197\3\2\2\2B\u01a5\3\2\2\2D\u01b3\3\2\2\2F\u01c9\3\2\2\2H"+
		"\u01d5\3\2\2\2J\u01d7\3\2\2\2L\u01d9\3\2\2\2N\u01fb\3\2\2\2P\u020f\3\2"+
		"\2\2R\u0211\3\2\2\2T\u021c\3\2\2\2V\u0227\3\2\2\2X\u0229\3\2\2\2Z\u023a"+
		"\3\2\2\2\\\u023d\3\2\2\2^\u0247\3\2\2\2`\u024b\3\2\2\2b\u024d\3\2\2\2"+
		"d\u0251\3\2\2\2f\u025a\3\2\2\2h\u0261\3\2\2\2j\u0263\3\2\2\2l\u0269\3"+
		"\2\2\2n\u027a\3\2\2\2p\u0284\3\2\2\2r\u0287\3\2\2\2t\u028b\3\2\2\2v\u0294"+
		"\3\2\2\2x\u029b\3\2\2\2z\u02ad\3\2\2\2|\u02af\3\2\2\2~\u02b1\3\2\2\2\u0080"+
		"\u02b3\3\2\2\2\u0082\u0326\3\2\2\2\u0084\u0328\3\2\2\2\u0086\u0330\3\2"+
		"\2\2\u0088\u0332\3\2\2\2\u008a\u0334\3\2\2\2\u008c\u0336\3\2\2\2\u008e"+
		"\u0338\3\2\2\2\u0090\u0340\3\2\2\2\u0092\u0342\3\2\2\2\u0094\u034c\3\2"+
		"\2\2\u0096\u034e\3\2\2\2\u0098\u035c\3\2\2\2\u009a\u035e\3\2\2\2\u009c"+
		"\u036f\3\2\2\2\u009e\u0379\3\2\2\2\u00a0\u037b\3\2\2\2\u00a2\u0386\3\2"+
		"\2\2\u00a4\u0390\3\2\2\2\u00a6\u0392\3\2\2\2\u00a8\u039b\3\2\2\2\u00aa"+
		"\u00ac\5\4\3\2\u00ab\u00aa\3\2\2\2\u00ac\u00af\3\2\2\2\u00ad\u00ab\3\2"+
		"\2\2\u00ad\u00ae\3\2\2\2\u00ae\3\3\2\2\2\u00af\u00ad\3\2\2\2\u00b0\u00ba"+
		"\5\6\4\2\u00b1\u00b2\5\f\7\2\u00b2\u00b3\7Y\2\2\u00b3\u00ba\3\2\2\2\u00b4"+
		"\u00b5\5\16\b\2\u00b5\u00b6\7Y\2\2\u00b6\u00ba\3\2\2\2\u00b7\u00ba\5b"+
		"\62\2\u00b8\u00ba\5f\64\2\u00b9\u00b0\3\2\2\2\u00b9\u00b1\3\2\2\2\u00b9"+
		"\u00b4\3\2\2\2\u00b9\u00b7\3\2\2\2\u00b9\u00b8\3\2\2\2\u00ba\5\3\2\2\2"+
		"\u00bb\u00bc\7\b\2\2\u00bc\u00bd\5\b\5\2\u00bd\u00be\7`\2\2\u00be\u00bf"+
		"\5\n\6\2\u00bf\u00c0\5\b\5\2\u00c0\7\3\2\2\2\u00c1\u00c2\t\2\2\2\u00c2"+
		"\t\3\2\2\2\u00c3\u00c4\t\3\2\2\u00c4\13\3\2\2\2\u00c5\u00c7\5\20\t\2\u00c6"+
		"\u00c5\3\2\2\2\u00c6\u00c7\3\2\2\2\u00c7\u00c8\3\2\2\2\u00c8\u00c9\5\34"+
		"\17\2\u00c9\r\3\2\2\2\u00ca\u00cc\5\22\n\2\u00cb\u00ca\3\2\2\2\u00cb\u00cc"+
		"\3\2\2\2\u00cc\u00cd\3\2\2\2\u00cd\u00ce\5\36\20\2\u00ce\17\3\2\2\2\u00cf"+
		"\u00d4\5\30\r\2\u00d0\u00d4\5\24\13\2\u00d1\u00d4\5\32\16\2\u00d2\u00d4"+
		"\5\26\f\2\u00d3\u00cf\3\2\2\2\u00d3\u00d0\3\2\2\2\u00d3\u00d1\3\2\2\2"+
		"\u00d3\u00d2\3\2\2\2\u00d4\21\3\2\2\2\u00d5\u00d6\7\7\2\2\u00d6\23\3\2"+
		"\2\2\u00d7\u00d8\t\4\2\2\u00d8\25\3\2\2\2\u00d9\u00da\t\5\2\2\u00da\27"+
		"\3\2\2\2\u00db\u00dc\t\6\2\2\u00dc\31\3\2\2\2\u00dd\u00de\t\7\2\2\u00de"+
		"\33\3\2\2\2\u00df\u00e0\b\17\1\2\u00e0\u00e1\5 \21\2\u00e1\u00e7\3\2\2"+
		"\2\u00e2\u00e3\f\3\2\2\u00e3\u00e4\7Z\2\2\u00e4\u00e6\5 \21\2\u00e5\u00e2"+
		"\3\2\2\2\u00e6\u00e9\3\2\2\2\u00e7\u00e5\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8"+
		"\35\3\2\2\2\u00e9\u00e7\3\2\2\2\u00ea\u00eb\b\20\1\2\u00eb\u00ec\5\"\22"+
		"\2\u00ec\u00f2\3\2\2\2\u00ed\u00ee\f\3\2\2\u00ee\u00ef\7Z\2\2\u00ef\u00f1"+
		"\5\"\22\2\u00f0\u00ed\3\2\2\2\u00f1\u00f4\3\2\2\2\u00f2\u00f0\3\2\2\2"+
		"\u00f2\u00f3\3\2\2\2\u00f3\37\3\2\2\2\u00f4\u00f2\3\2\2\2\u00f5\u00fb"+
		"\5$\23\2\u00f6\u00f7\5$\23\2\u00f7\u00f8\79\2\2\u00f8\u00f9\5V,\2\u00f9"+
		"\u00fb\3\2\2\2\u00fa\u00f5\3\2\2\2\u00fa\u00f6\3\2\2\2\u00fb!\3\2\2\2"+
		"\u00fc\u00fd\5$\23\2\u00fd\u00fe\79\2\2\u00fe\u00ff\5V,\2\u00ff#\3\2\2"+
		"\2\u0100\u0101\b\23\1\2\u0101\u0102\7`\2\2\u0102\u010a\3\2\2\2\u0103\u0104"+
		"\f\3\2\2\u0104\u0105\7^\2\2\u0105\u0106\5&\24\2\u0106\u0107\7_\2\2\u0107"+
		"\u0109\3\2\2\2\u0108\u0103\3\2\2\2\u0109\u010c\3\2\2\2\u010a\u0108\3\2"+
		"\2\2\u010a\u010b\3\2\2\2\u010b%\3\2\2\2\u010c\u010a\3\2\2\2\u010d\u0115"+
		"\5*\26\2\u010e\u010f\5H%\2\u010f\u0110\5(\25\2\u0110\u0111\5&\24\2\u0111"+
		"\u0115\3\2\2\2\u0112\u0115\7b\2\2\u0113\u0115\7a\2\2\u0114\u010d\3\2\2"+
		"\2\u0114\u010e\3\2\2\2\u0114\u0112\3\2\2\2\u0114\u0113\3\2\2\2\u0115\'"+
		"\3\2\2\2\u0116\u0117\t\b\2\2\u0117)\3\2\2\2\u0118\u011e\5\62\32\2\u0119"+
		"\u011a\7H\2\2\u011a\u011b\5,\27\2\u011b\u011c\7>\2\2\u011c\u011d\5*\26"+
		"\2\u011d\u011f\3\2\2\2\u011e\u0119\3\2\2\2\u011e\u011f\3\2\2\2\u011f+"+
		"\3\2\2\2\u0120\u0121\b\27\1\2\u0121\u0122\5&\24\2\u0122\u0128\3\2\2\2"+
		"\u0123\u0124\f\3\2\2\u0124\u0125\7Z\2\2\u0125\u0127\5&\24\2\u0126\u0123"+
		"\3\2\2\2\u0127\u012a\3\2\2\2\u0128\u0126\3\2\2\2\u0128\u0129\3\2\2\2\u0129"+
		"-\3\2\2\2\u012a\u0128\3\2\2\2\u012b\u012c\7[\2\2\u012c\u012d\7`\2\2\u012d"+
		"\u012f\7\\\2\2\u012e\u0130\5\60\31\2\u012f\u012e\3\2\2\2\u012f\u0130\3"+
		"\2\2\2\u0130\u0131\3\2\2\2\u0131\u0132\7]\2\2\u0132/\3\2\2\2\u0133\u0134"+
		"\b\31\1\2\u0134\u0135\5,\27\2\u0135\u013b\3\2\2\2\u0136\u0137\f\3\2\2"+
		"\u0137\u0138\7Z\2\2\u0138\u013a\5,\27\2\u0139\u0136\3\2\2\2\u013a\u013d"+
		"\3\2\2\2\u013b\u0139\3\2\2\2\u013b\u013c\3\2\2\2\u013c\61\3\2\2\2\u013d"+
		"\u013b\3\2\2\2\u013e\u013f\b\32\1\2\u013f\u0140\5\64\33\2\u0140\u0146"+
		"\3\2\2\2\u0141\u0142\f\3\2\2\u0142\u0143\7D\2\2\u0143\u0145\5\64\33\2"+
		"\u0144\u0141\3\2\2\2\u0145\u0148\3\2\2\2\u0146\u0144\3\2\2\2\u0146\u0147"+
		"\3\2\2\2\u0147\63\3\2\2\2\u0148\u0146\3\2\2\2\u0149\u014a\b\33\1\2\u014a"+
		"\u014b\5\66\34\2\u014b\u0151\3\2\2\2\u014c\u014d\f\3\2\2\u014d\u014e\7"+
		"C\2\2\u014e\u0150\5\66\34\2\u014f\u014c\3\2\2\2\u0150\u0153\3\2\2\2\u0151"+
		"\u014f\3\2\2\2\u0151\u0152\3\2\2\2\u0152\65\3\2\2\2\u0153\u0151\3\2\2"+
		"\2\u0154\u0155\b\34\1\2\u0155\u0156\58\35\2\u0156\u015c\3\2\2\2\u0157"+
		"\u0158\f\3\2\2\u0158\u0159\7G\2\2\u0159\u015b\58\35\2\u015a\u0157\3\2"+
		"\2\2\u015b\u015e\3\2\2\2\u015c\u015a\3\2\2\2\u015c\u015d\3\2\2\2\u015d"+
		"\67\3\2\2\2\u015e\u015c\3\2\2\2\u015f\u0160\b\35\1\2\u0160\u0161\5:\36"+
		"\2\u0161\u0167\3\2\2\2\u0162\u0163\f\3\2\2\u0163\u0164\7F\2\2\u0164\u0166"+
		"\5:\36\2\u0165\u0162\3\2\2\2\u0166\u0169\3\2\2\2\u0167\u0165\3\2\2\2\u0167"+
		"\u0168\3\2\2\2\u01689\3\2\2\2\u0169\u0167\3\2\2\2\u016a\u016b\b\36\1\2"+
		"\u016b\u016c\5<\37\2\u016c\u0172\3\2\2\2\u016d\u016e\f\3\2\2\u016e\u016f"+
		"\7E\2\2\u016f\u0171\5<\37\2\u0170\u016d\3\2\2\2\u0171\u0174\3\2\2\2\u0172"+
		"\u0170\3\2\2\2\u0172\u0173\3\2\2\2\u0173;\3\2\2\2\u0174\u0172\3\2\2\2"+
		"\u0175\u0176\b\37\1\2\u0176\u0177\5> \2\u0177\u0180\3\2\2\2\u0178\u0179"+
		"\f\4\2\2\u0179\u017a\7?\2\2\u017a\u017f\5> \2\u017b\u017c\f\3\2\2\u017c"+
		"\u017d\7B\2\2\u017d\u017f\5> \2\u017e\u0178\3\2\2\2\u017e\u017b\3\2\2"+
		"\2\u017f\u0182\3\2\2\2\u0180\u017e\3\2\2\2\u0180\u0181\3\2\2\2\u0181="+
		"\3\2\2\2\u0182\u0180\3\2\2\2\u0183\u0184\b \1\2\u0184\u0185\5@!\2\u0185"+
		"\u0194\3\2\2\2\u0186\u0187\f\6\2\2\u0187\u0188\7:\2\2\u0188\u0193\5@!"+
		"\2\u0189\u018a\f\5\2\2\u018a\u018b\7;\2\2\u018b\u0193\5@!\2\u018c\u018d"+
		"\f\4\2\2\u018d\u018e\7A\2\2\u018e\u0193\5@!\2\u018f\u0190\f\3\2\2\u0190"+
		"\u0191\7@\2\2\u0191\u0193\5@!\2\u0192\u0186\3\2\2\2\u0192\u0189\3\2\2"+
		"\2\u0192\u018c\3\2\2\2\u0192\u018f\3\2\2\2\u0193\u0196\3\2\2\2\u0194\u0192"+
		"\3\2\2\2\u0194\u0195\3\2\2\2\u0195?\3\2\2\2\u0196\u0194\3\2\2\2\u0197"+
		"\u0198\b!\1\2\u0198\u0199\5B\"\2\u0199\u01a2\3\2\2\2\u019a\u019b\f\4\2"+
		"\2\u019b\u019c\7U\2\2\u019c\u01a1\5B\"\2\u019d\u019e\f\3\2\2\u019e\u019f"+
		"\7V\2\2\u019f\u01a1\5B\"\2\u01a0\u019a\3\2\2\2\u01a0\u019d\3\2\2\2\u01a1"+
		"\u01a4\3\2\2\2\u01a2\u01a0\3\2\2\2\u01a2\u01a3\3\2\2\2\u01a3A\3\2\2\2"+
		"\u01a4\u01a2\3\2\2\2\u01a5\u01a6\b\"\1\2\u01a6\u01a7\5D#\2\u01a7\u01b0"+
		"\3\2\2\2\u01a8\u01a9\f\4\2\2\u01a9\u01aa\7K\2\2\u01aa\u01af\5D#\2\u01ab"+
		"\u01ac\f\3\2\2\u01ac\u01ad\7L\2\2\u01ad\u01af\5D#\2\u01ae\u01a8\3\2\2"+
		"\2\u01ae\u01ab\3\2\2\2\u01af\u01b2\3\2\2\2\u01b0\u01ae\3\2\2\2\u01b0\u01b1"+
		"\3\2\2\2\u01b1C\3\2\2\2\u01b2\u01b0\3\2\2\2\u01b3\u01b4\b#\1\2\u01b4\u01b5"+
		"\5F$\2\u01b5\u01c4\3\2\2\2\u01b6\u01b7\f\6\2\2\u01b7\u01b8\7M\2\2\u01b8"+
		"\u01c3\5F$\2\u01b9\u01ba\f\5\2\2\u01ba\u01bb\7O\2\2\u01bb\u01c3\5F$\2"+
		"\u01bc\u01bd\f\4\2\2\u01bd\u01be\7P\2\2\u01be\u01c3\5F$\2\u01bf\u01c0"+
		"\f\3\2\2\u01c0\u01c1\7N\2\2\u01c1\u01c3\5F$\2\u01c2\u01b6\3\2\2\2\u01c2"+
		"\u01b9\3\2\2\2\u01c2\u01bc\3\2\2\2\u01c2\u01bf\3\2\2\2\u01c3\u01c6\3\2"+
		"\2\2\u01c4\u01c2\3\2\2\2\u01c4\u01c5\3\2\2\2\u01c5E\3\2\2\2\u01c6\u01c4"+
		"\3\2\2\2\u01c7\u01ca\5H%\2\u01c8\u01ca\7b\2\2\u01c9\u01c7\3\2\2\2\u01c9"+
		"\u01c8\3\2\2\2\u01caG\3\2\2\2\u01cb\u01d6\5L\'\2\u01cc\u01cd\7I\2\2\u01cd"+
		"\u01d6\5H%\2\u01ce\u01cf\7J\2\2\u01cf\u01d6\5H%\2\u01d0\u01d1\5J&\2\u01d1"+
		"\u01d2\5F$\2\u01d2\u01d6\3\2\2\2\u01d3\u01d4\7C\2\2\u01d4\u01d6\7`\2\2"+
		"\u01d5\u01cb\3\2\2\2\u01d5\u01cc\3\2\2\2\u01d5\u01ce\3\2\2\2\u01d5\u01d0"+
		"\3\2\2\2\u01d5\u01d3\3\2\2\2\u01d6I\3\2\2\2\u01d7\u01d8\t\t\2\2\u01d8"+
		"K\3\2\2\2\u01d9\u01da\b\'\1\2\u01da\u01dc\5P)\2\u01db\u01dd\5.\30\2\u01dc"+
		"\u01db\3\2\2\2\u01dc\u01dd\3\2\2\2\u01dd\u01f8\3\2\2\2\u01de\u01df\f\6"+
		"\2\2\u01df\u01e0\7^\2\2\u01e0\u01e3\5,\27\2\u01e1\u01e2\7>\2\2\u01e2\u01e4"+
		"\5,\27\2\u01e3\u01e1\3\2\2\2\u01e3\u01e4\3\2\2\2\u01e4\u01e5\3\2\2\2\u01e5"+
		"\u01e7\7_\2\2\u01e6\u01e8\5.\30\2\u01e7\u01e6\3\2\2\2\u01e7\u01e8\3\2"+
		"\2\2\u01e8\u01f7\3\2\2\2\u01e9\u01ea\f\5\2\2\u01ea\u01ec\7\\\2\2\u01eb"+
		"\u01ed\5N(\2\u01ec\u01eb\3\2\2\2\u01ec\u01ed\3\2\2\2\u01ed\u01ee\3\2\2"+
		"\2\u01ee\u01f0\7]\2\2\u01ef\u01f1\5.\30\2\u01f0\u01ef\3\2\2\2\u01f0\u01f1"+
		"\3\2\2\2\u01f1\u01f7\3\2\2\2\u01f2\u01f3\f\4\2\2\u01f3\u01f7\7I\2\2\u01f4"+
		"\u01f5\f\3\2\2\u01f5\u01f7\7J\2\2\u01f6\u01de\3\2\2\2\u01f6\u01e9\3\2"+
		"\2\2\u01f6\u01f2\3\2\2\2\u01f6\u01f4\3\2\2\2\u01f7\u01fa\3\2\2\2\u01f8"+
		"\u01f6\3\2\2\2\u01f8\u01f9\3\2\2\2\u01f9M\3\2\2\2\u01fa\u01f8\3\2\2\2"+
		"\u01fb\u01fc\b(\1\2\u01fc\u01fd\5&\24\2\u01fd\u0203\3\2\2\2\u01fe\u01ff"+
		"\f\3\2\2\u01ff\u0200\7Z\2\2\u0200\u0202\5&\24\2\u0201\u01fe\3\2\2\2\u0202"+
		"\u0205\3\2\2\2\u0203\u0201\3\2\2\2\u0203\u0204\3\2\2\2\u0204O\3\2\2\2"+
		"\u0205\u0203\3\2\2\2\u0206\u0210\7`\2\2\u0207\u0210\7a\2\2\u0208\u0209"+
		"\7\\\2\2\u0209\u020a\5,\27\2\u020a\u020b\7]\2\2\u020b\u0210\3\2\2\2\u020c"+
		"\u0210\7\6\2\2\u020d\u0210\7\66\2\2\u020e\u0210\7\67\2\2\u020f\u0206\3"+
		"\2\2\2\u020f\u0207\3\2\2\2\u020f\u0208\3\2\2\2\u020f\u020c\3\2\2\2\u020f"+
		"\u020d\3\2\2\2\u020f\u020e\3\2\2\2\u0210Q\3\2\2\2\u0211\u0212\b*\1\2\u0212"+
		"\u0213\5T+\2\u0213\u0219\3\2\2\2\u0214\u0215\f\3\2\2\u0215\u0216\7Z\2"+
		"\2\u0216\u0218\5T+\2\u0217\u0214\3\2\2\2\u0218\u021b\3\2\2\2\u0219\u0217"+
		"\3\2\2\2\u0219\u021a\3\2\2\2\u021aS\3\2\2\2\u021b\u0219\3\2\2\2\u021c"+
		"\u021d\5\20\t\2\u021d\u021e\5$\23\2\u021eU\3\2\2\2\u021f\u0228\5&\24\2"+
		"\u0220\u0221\7W\2\2\u0221\u0222\5X-\2\u0222\u0223\7Z\2\2\u0223\u0224\5"+
		"X-\2\u0224\u0225\3\2\2\2\u0225\u0226\7X\2\2\u0226\u0228\3\2\2\2\u0227"+
		"\u021f\3\2\2\2\u0227\u0220\3\2\2\2\u0228W\3\2\2\2\u0229\u022b\b-\1\2\u022a"+
		"\u022c\5Z.\2\u022b\u022a\3\2\2\2\u022b\u022c\3\2\2\2\u022c\u022d\3\2\2"+
		"\2\u022d\u022e\5V,\2\u022e\u0237\3\2\2\2\u022f\u0230\f\3\2\2\u0230\u0232"+
		"\7Z\2\2\u0231\u0233\5Z.\2\u0232\u0231\3\2\2\2\u0232\u0233\3\2\2\2\u0233"+
		"\u0234\3\2\2\2\u0234\u0236\5V,\2\u0235\u022f\3\2\2\2\u0236\u0239\3\2\2"+
		"\2\u0237\u0235\3\2\2\2\u0237\u0238\3\2\2\2\u0238Y\3\2\2\2\u0239\u0237"+
		"\3\2\2\2\u023a\u023b\5\\/\2\u023b\u023c\79\2\2\u023c[\3\2\2\2\u023d\u023e"+
		"\b/\1\2\u023e\u023f\5^\60\2\u023f\u0244\3\2\2\2\u0240\u0241\f\3\2\2\u0241"+
		"\u0243\5^\60\2\u0242\u0240\3\2\2\2\u0243\u0246\3\2\2\2\u0244\u0242\3\2"+
		"\2\2\u0244\u0245\3\2\2\2\u0245]\3\2\2\2\u0246\u0244\3\2\2\2\u0247\u0248"+
		"\7^\2\2\u0248\u0249\5`\61\2\u0249\u024a\7_\2\2\u024a_\3\2\2\2\u024b\u024c"+
		"\5*\26\2\u024ca\3\2\2\2\u024d\u024e\5d\63\2\u024e\u024f\7Y\2\2\u024fc"+
		"\3\2\2\2\u0250\u0252\7\35\2\2\u0251\u0250\3\2\2\2\u0251\u0252\3\2\2\2"+
		"\u0252\u0253\3\2\2\2\u0253\u0254\7`\2\2\u0254\u0256\7\\\2\2\u0255\u0257"+
		"\5R*\2\u0256\u0255\3\2\2\2\u0256\u0257\3\2\2\2\u0257\u0258\3\2\2\2\u0258"+
		"\u0259\7]\2\2\u0259e\3\2\2\2\u025a\u025b\5d\63\2\u025b\u025c\5j\66\2\u025c"+
		"g\3\2\2\2\u025d\u0262\5\f\7\2\u025e\u025f\5\f\7\2\u025f\u0260\5h\65\2"+
		"\u0260\u0262\3\2\2\2\u0261\u025d\3\2\2\2\u0261\u025e\3\2\2\2\u0262i\3"+
		"\2\2\2\u0263\u0265\7W\2\2\u0264\u0266\5l\67\2\u0265\u0264\3\2\2\2\u0265"+
		"\u0266\3\2\2\2\u0266\u0267\3\2\2\2\u0267\u0268\7X\2\2\u0268k\3\2\2\2\u0269"+
		"\u026a\b\67\1\2\u026a\u026b\5n8\2\u026b\u0270\3\2\2\2\u026c\u026d\f\3"+
		"\2\2\u026d\u026f\5n8\2\u026e\u026c\3\2\2\2\u026f\u0272\3\2\2\2\u0270\u026e"+
		"\3\2\2\2\u0270\u0271\3\2\2\2\u0271m\3\2\2\2\u0272\u0270\3\2\2\2\u0273"+
		"\u027b\5p9\2\u0274\u0275\5\f\7\2\u0275\u0276\7Y\2\2\u0276\u027b\3\2\2"+
		"\2\u0277\u0278\5\16\b\2\u0278\u0279\7Y\2\2\u0279\u027b\3\2\2\2\u027a\u0273"+
		"\3\2\2\2\u027a\u0274\3\2\2\2\u027a\u0277\3\2\2\2\u027bo\3\2\2\2\u027c"+
		"\u0285\5r:\2\u027d\u0285\5j\66\2\u027e\u0285\5t;\2\u027f\u0285\5v<\2\u0280"+
		"\u0285\5\u0080A\2\u0281\u0285\5\u0096L\2\u0282\u0285\5\u009aN\2\u0283"+
		"\u0285\5\u00a0Q\2\u0284\u027c\3\2\2\2\u0284\u027d\3\2\2\2\u0284\u027e"+
		"\3\2\2\2\u0284\u027f\3\2\2\2\u0284\u0280\3\2\2\2\u0284\u0281\3\2\2\2\u0284"+
		"\u0282\3\2\2\2\u0284\u0283\3\2\2\2\u0285q\3\2\2\2\u0286\u0288\5,\27\2"+
		"\u0287\u0286\3\2\2\2\u0287\u0288\3\2\2\2\u0288\u0289\3\2\2\2\u0289\u028a"+
		"\7Y\2\2\u028as\3\2\2\2\u028b\u028c\7\f\2\2\u028c\u028d\7\\\2\2\u028d\u028e"+
		"\5,\27\2\u028e\u028f\7]\2\2\u028f\u0292\5p9\2\u0290\u0291\7\r\2\2\u0291"+
		"\u0293\5p9\2\u0292\u0290\3\2\2\2\u0292\u0293\3\2\2\2\u0293u\3\2\2\2\u0294"+
		"\u0295\7\16\2\2\u0295\u0296\7\\\2\2\u0296\u0297\5x=\2\u0297\u0298\7]\2"+
		"\2\u0298\u0299\5p9\2\u0299w\3\2\2\2\u029a\u029c\5z>\2\u029b\u029a\3\2"+
		"\2\2\u029b\u029c\3\2\2\2\u029c\u029e\3\2\2\2\u029d\u029f\7>\2\2\u029e"+
		"\u029d\3\2\2\2\u029e\u029f\3\2\2\2\u029f\u02a1\3\2\2\2\u02a0\u02a2\5|"+
		"?\2\u02a1\u02a0\3\2\2\2\u02a1\u02a2\3\2\2\2\u02a2\u02a3\3\2\2\2\u02a3"+
		"\u02a5\7>\2\2\u02a4\u02a6\5~@\2\u02a5\u02a4\3\2\2\2\u02a5\u02a6\3\2\2"+
		"\2\u02a6y\3\2\2\2\u02a7\u02ae\5P)\2\u02a8\u02a9\7`\2\2\u02a9\u02aa\79"+
		"\2\2\u02aa\u02ae\5,\27\2\u02ab\u02ae\5\f\7\2\u02ac\u02ae\5\16\b\2\u02ad"+
		"\u02a7\3\2\2\2\u02ad\u02a8\3\2\2\2\u02ad\u02ab\3\2\2\2\u02ad\u02ac\3\2"+
		"\2\2\u02ae{\3\2\2\2\u02af\u02b0\5&\24\2\u02b0}\3\2\2\2\u02b1\u02b2\5&"+
		"\24\2\u02b2\177\3\2\2\2\u02b3\u02b5\5\u0082B\2\u02b4\u02b6\5.\30\2\u02b5"+
		"\u02b4\3\2\2\2\u02b5\u02b6\3\2\2\2\u02b6\u02b7\3\2\2\2\u02b7\u02b8\7Y"+
		"\2\2\u02b8\u0081\3\2\2\2\u02b9\u02ba\7\37\2\2\u02ba\u02bb\7\\\2\2\u02bb"+
		"\u02bc\5\u0090I\2\u02bc\u02bd\7]\2\2\u02bd\u0327\3\2\2\2\u02be\u02bf\7"+
		" \2\2\u02bf\u02c0\7\\\2\2\u02c0\u02c1\5\u0090I\2\u02c1\u02c2\7]\2\2\u02c2"+
		"\u0327\3\2\2\2\u02c3\u02c4\7!\2\2\u02c4\u02c5\7\\\2\2\u02c5\u02c6\5\u0090"+
		"I\2\u02c6\u02c7\7]\2\2\u02c7\u0327\3\2\2\2\u02c8\u02c9\7\"\2\2\u02c9\u02ca"+
		"\7\\\2\2\u02ca\u02cb\5\u0090I\2\u02cb\u02cc\7]\2\2\u02cc\u0327\3\2\2\2"+
		"\u02cd\u02ce\7#\2\2\u02ce\u02cf\7\\\2\2\u02cf\u02d0\5\u0090I\2\u02d0\u02d1"+
		"\7]\2\2\u02d1\u0327\3\2\2\2\u02d2\u02d3\7$\2\2\u02d3\u02d4\7\\\2\2\u02d4"+
		"\u02d5\5\u0090I\2\u02d5\u02d6\7]\2\2\u02d6\u0327\3\2\2\2\u02d7\u02d8\7"+
		"%\2\2\u02d8\u02d9\7\\\2\2\u02d9\u02da\5\u0090I\2\u02da\u02db\7]\2\2\u02db"+
		"\u0327\3\2\2\2\u02dc\u02dd\7&\2\2\u02dd\u02de\7\\\2\2\u02de\u02df\5\u0090"+
		"I\2\u02df\u02e0\7]\2\2\u02e0\u0327\3\2\2\2\u02e1\u02e2\7\'\2\2\u02e2\u02e3"+
		"\7\\\2\2\u02e3\u02e4\5\u0090I\2\u02e4\u02e5\7]\2\2\u02e5\u0327\3\2\2\2"+
		"\u02e6\u02e7\7(\2\2\u02e7\u02e8\7\\\2\2\u02e8\u02e9\5\u0090I\2\u02e9\u02ea"+
		"\7]\2\2\u02ea\u0327\3\2\2\2\u02eb\u02ec\7)\2\2\u02ec\u02ed\7\\\2\2\u02ed"+
		"\u02ee\5\u0084C\2\u02ee\u02ef\7Z\2\2\u02ef\u02f0\5\u0090I\2\u02f0\u02f1"+
		"\7]\2\2\u02f1\u0327\3\2\2\2\u02f2\u02f3\7*\2\2\u02f3\u02f4\7\\\2\2\u02f4"+
		"\u02f5\5\u0090I\2\u02f5\u02f6\7Z\2\2\u02f6\u02f7\5,\27\2\u02f7\u02f8\7"+
		"]\2\2\u02f8\u0327\3\2\2\2\u02f9\u02fa\7+\2\2\u02fa\u02fb\7\\\2\2\u02fb"+
		"\u02fc\5\u0090I\2\u02fc\u02fd\7Z\2\2\u02fd\u02fe\5,\27\2\u02fe\u02ff\7"+
		"]\2\2\u02ff\u0327\3\2\2\2\u0300\u0301\7,\2\2\u0301\u0302\7\\\2\2\u0302"+
		"\u0303\5\u0090I\2\u0303\u0304\7Z\2\2\u0304\u0305\5,\27\2\u0305\u0306\7"+
		"]\2\2\u0306\u0327\3\2\2\2\u0307\u0308\7-\2\2\u0308\u0309\7\\\2\2\u0309"+
		"\u030a\5\u0092J\2\u030a\u030b\7]\2\2\u030b\u0327\3\2\2\2\u030c\u030d\7"+
		".\2\2\u030d\u030e\7\\\2\2\u030e\u030f\5\u0092J\2\u030f\u0310\7]\2\2\u0310"+
		"\u0327\3\2\2\2\u0311\u0312\7\60\2\2\u0312\u0313\7\\\2\2\u0313\u0314\5"+
		"\u0084C\2\u0314\u0315\7Z\2\2\u0315\u0316\5\u0092J\2\u0316\u0317\7]\2\2"+
		"\u0317\u0327\3\2\2\2\u0318\u0319\7\61\2\2\u0319\u031a\7\\\2\2\u031a\u031b"+
		"\5\u0092J\2\u031b\u031c\7Z\2\2\u031c\u031d\5\u008eH\2\u031d\u031e\7]\2"+
		"\2\u031e\u0327\3\2\2\2\u031f\u0320\7/\2\2\u0320\u0321\7\\\2\2\u0321\u0322"+
		"\5\u0092J\2\u0322\u0323\7Z\2\2\u0323\u0324\5\u008eH\2\u0324\u0325\7]\2"+
		"\2\u0325\u0327\3\2\2\2\u0326\u02b9\3\2\2\2\u0326\u02be\3\2\2\2\u0326\u02c3"+
		"\3\2\2\2\u0326\u02c8\3\2\2\2\u0326\u02cd\3\2\2\2\u0326\u02d2\3\2\2\2\u0326"+
		"\u02d7\3\2\2\2\u0326\u02dc\3\2\2\2\u0326\u02e1\3\2\2\2\u0326\u02e6\3\2"+
		"\2\2\u0326\u02eb\3\2\2\2\u0326\u02f2\3\2\2\2\u0326\u02f9\3\2\2\2\u0326"+
		"\u0300\3\2\2\2\u0326\u0307\3\2\2\2\u0326\u030c\3\2\2\2\u0326\u0311\3\2"+
		"\2\2\u0326\u0318\3\2\2\2\u0326\u031f\3\2\2\2\u0327\u0083\3\2\2\2\u0328"+
		"\u0329\5\u0086D\2\u0329\u032a\7Z\2\2\u032a\u032b\5\u0088E\2\u032b\u032c"+
		"\7Z\2\2\u032c\u032d\5\u008aF\2\u032d\u032e\7Z\2\2\u032e\u032f\5\u008c"+
		"G\2\u032f\u0085\3\2\2\2\u0330\u0331\5,\27\2\u0331\u0087\3\2\2\2\u0332"+
		"\u0333\5,\27\2\u0333\u0089\3\2\2\2\u0334\u0335\5,\27\2\u0335\u008b\3\2"+
		"\2\2\u0336\u0337\5,\27\2\u0337\u008d\3\2\2\2\u0338\u0339\5,\27\2\u0339"+
		"\u008f\3\2\2\2\u033a\u033b\7`\2\2\u033b\u033c\7^\2\2\u033c\u033d\5,\27"+
		"\2\u033d\u033e\7_\2\2\u033e\u0341\3\2\2\2\u033f\u0341\7`\2\2\u0340\u033a"+
		"\3\2\2\2\u0340\u033f\3\2\2\2\u0341\u0091\3\2\2\2\u0342\u0343\5\u0090I"+
		"\2\u0343\u0344\7Z\2\2\u0344\u0345\5\u0094K\2\u0345\u0093\3\2\2\2\u0346"+
		"\u0347\7`\2\2\u0347\u0348\7^\2\2\u0348\u0349\5,\27\2\u0349\u034a\7_\2"+
		"\2\u034a\u034d\3\2\2\2\u034b\u034d\7`\2\2\u034c\u0346\3\2\2\2\u034c\u034b"+
		"\3\2\2\2\u034d\u0095\3\2\2\2\u034e\u034f\7\62\2\2\u034f\u0350\7\\\2\2"+
		"\u0350\u0351\5\u0090I\2\u0351\u0352\7Z\2\2\u0352\u0353\5\u0098M\2\u0353"+
		"\u0354\7]\2\2\u0354\u0355\7Y\2\2\u0355\u0097\3\2\2\2\u0356\u0357\7`\2"+
		"\2\u0357\u0358\7^\2\2\u0358\u0359\5,\27\2\u0359\u035a\7_\2\2\u035a\u035d"+
		"\3\2\2\2\u035b\u035d\7`\2\2\u035c\u0356\3\2\2\2\u035c\u035b\3\2\2\2\u035d"+
		"\u0099\3\2\2\2\u035e\u035f\7\63\2\2\u035f\u0360\7\\\2\2\u0360\u0361\5"+
		"\u00a6T\2\u0361\u0362\7]\2\2\u0362\u0363\7W\2\2\u0363\u0364\5\u009cO\2"+
		"\u0364\u036a\7X\2\2\u0365\u0366\7\65\2\2\u0366\u0367\7W\2\2\u0367\u0368"+
		"\5\u009cO\2\u0368\u0369\7X\2\2\u0369\u036b\3\2\2\2\u036a\u0365\3\2\2\2"+
		"\u036a\u036b\3\2\2\2\u036b\u009b\3\2\2\2\u036c\u036e\5\u009eP\2\u036d"+
		"\u036c\3\2\2\2\u036e\u0371\3\2\2\2\u036f\u036d\3\2\2\2\u036f\u0370\3\2"+
		"\2\2\u0370\u009d\3\2\2\2\u0371\u036f\3\2\2\2\u0372\u037a\5p9\2\u0373\u0374"+
		"\5\f\7\2\u0374\u0375\7Y\2\2\u0375\u037a\3\2\2\2\u0376\u0377\5\16\b\2\u0377"+
		"\u0378\7Y\2\2\u0378\u037a\3\2\2\2\u0379\u0372\3\2\2\2\u0379\u0373\3\2"+
		"\2\2\u0379\u0376\3\2\2\2\u037a\u009f\3\2\2\2\u037b\u037c\7\64\2\2\u037c"+
		"\u037d\7\\\2\2\u037d\u037e\5\u00a6T\2\u037e\u037f\7]\2\2\u037f\u0380\7"+
		"W\2\2\u0380\u0381\5\u00a2R\2\u0381\u0382\7X\2\2\u0382\u00a1\3\2\2\2\u0383"+
		"\u0385\5\u00a4S\2\u0384\u0383\3\2\2\2\u0385\u0388\3\2\2\2\u0386\u0384"+
		"\3\2\2\2\u0386\u0387\3\2\2\2\u0387\u00a3\3\2\2\2\u0388\u0386\3\2\2\2\u0389"+
		"\u0391\5p9\2\u038a\u038b\5\f\7\2\u038b\u038c\7Y\2\2\u038c\u0391\3\2\2"+
		"\2\u038d\u038e\5\16\b\2\u038e\u038f\7Y\2\2\u038f\u0391\3\2\2\2\u0390\u0389"+
		"\3\2\2\2\u0390\u038a\3\2\2\2\u0390\u038d\3\2\2\2\u0391\u00a5\3\2\2\2\u0392"+
		"\u0398\5\66\34\2\u0393\u0394\5\u00a8U\2\u0394\u0395\5\66\34\2\u0395\u0397"+
		"\3\2\2\2\u0396\u0393\3\2\2\2\u0397\u039a\3\2\2\2\u0398\u0396\3\2\2\2\u0398"+
		"\u0399\3\2\2\2\u0399\u00a7\3\2\2\2\u039a\u0398\3\2\2\2\u039b\u039c\t\n"+
		"\2\2\u039c\u00a9\3\2\2\2I\u00ad\u00b9\u00c6\u00cb\u00d3\u00e7\u00f2\u00fa"+
		"\u010a\u0114\u011e\u0128\u012f\u013b\u0146\u0151\u015c\u0167\u0172\u017e"+
		"\u0180\u0192\u0194\u01a0\u01a2\u01ae\u01b0\u01c2\u01c4\u01c9\u01d5\u01dc"+
		"\u01e3\u01e7\u01ec\u01f0\u01f6\u01f8\u0203\u020f\u0219\u0227\u022b\u0232"+
		"\u0237\u0244\u0251\u0256\u0261\u0265\u0270\u027a\u0284\u0287\u0292\u029b"+
		"\u029e\u02a1\u02a5\u02ad\u02b5\u0326\u0340\u034c\u035c\u036a\u036f\u0379"+
		"\u0386\u0390\u0398";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}