// Generated from c:\Users\Quantum1603\Desktop\vscode_plugin\trunk\qrunes\server\src\embedded\qcodes\antlr\qcode.g4 by ANTLR 4.7.1
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
		T__0=1, T__1=2, PI=3, LET=4, INCLUDE=5, INT=6, FLOAT=7, BOOLEAN=8, IF=9, 
		ELSE=10, FOR=11, LIB_POSTFIX=12, INC_POSTFIX=13, QRUNES_POSTFIX=14, VAR=15, 
		DOUBLE=16, LEN=17, HOST=18, QVEC=19, QUBIT=20, CVEC=21, CBIT=22, H_GATE=23, 
		X_GATE=24, NOT_GATE=25, T_GATE=26, S_GATE=27, Y_GATE=28, Z_GATE=29, X1_GATE=30, 
		Y1_GATE=31, Z1_GATE=32, U4_GATE=33, RX_GATE=34, RY_GATE=35, RZ_GATE=36, 
		CNOT_GATE=37, CZ_GATE=38, CR_GATE=39, CU_GATE=40, ISWAP=41, MEASURE=42, 
		QIF=43, QWHILE=44, QELSE=45, SHARP_SIGN=46, ASSIGN=47, GT=48, LT=49, BANG=50, 
		TILDE=51, COLON=52, EQUAL=53, LE=54, GE=55, NOTEQUAL=56, LOGIC_AND=57, 
		LOGIC_OR=58, AND=59, EXCLU=60, INCLU=61, QUE_MARK=62, INC=63, DEC=64, 
		ADD=65, SUB=66, MUL=67, POW=68, DIV=69, MOD=70, ADD_ASSIGN=71, SUB_ASSIGN=72, 
		MUL_ASSIGN=73, DIV_ASSIGN=74, LSHIFT=75, RSHIFT=76, LBRACE=77, RBRACE=78, 
		SEMI=79, COMMA=80, DOT=81, LPAREN=82, RPAREN=83, LBRACK=84, RBRACK=85, 
		Identifier=86, Constant=87, Digit_Sequence=88, WhiteSpace=89, SingleLineComment=90, 
		MultiLinesComment=91;
	public static final int
		RULE_qrunes = 0, RULE_lang_unit = 1, RULE_include_declaration = 2, RULE_include_sign = 3, 
		RULE_postfix = 4, RULE_declaration = 5, RULE_literal_declaration = 6, 
		RULE_declaration_Specifier = 7, RULE_literal_type = 8, RULE_primary_type = 9, 
		RULE_quantum_type = 10, RULE_assist_classical_type = 11, RULE_init_DeclaratorList = 12, 
		RULE_init_Literal_DeclaratorList = 13, RULE_init_Declarator = 14, RULE_init_Literal_Declarator = 15, 
		RULE_declarator = 16, RULE_assignment_exp = 17, RULE_assignment_operator = 18, 
		RULE_condition_exp = 19, RULE_expression = 20, RULE_logicOr_exp = 21, 
		RULE_logicAnd_exp = 22, RULE_inclu_exp = 23, RULE_exclu_exp = 24, RULE_and_exp = 25, 
		RULE_equal_exp = 26, RULE_relation_exp = 27, RULE_shift_exp = 28, RULE_additive_exp = 29, 
		RULE_multi_exp = 30, RULE_cast_exp = 31, RULE_unary_exp = 32, RULE_unary_operator = 33, 
		RULE_postfix_exp = 34, RULE_argument_exp_List = 35, RULE_primary_exp = 36, 
		RULE_args_type_List = 37, RULE_args_declaration = 38, RULE_initializer = 39, 
		RULE_initializerList = 40, RULE_designation = 41, RULE_designatorList = 42, 
		RULE_designator = 43, RULE_constant_exp = 44, RULE_func_declaration = 45, 
		RULE_func_declarator = 46, RULE_func_definition = 47, RULE_declarationList = 48, 
		RULE_comp_stmt = 49, RULE_block_List = 50, RULE_block_Item = 51, RULE_statement = 52, 
		RULE_exp_stmt = 53, RULE_select_stmt = 54, RULE_iterate_stmt = 55, RULE_for_stmt = 56, 
		RULE_for_start = 57, RULE_for_step = 58, RULE_for_end = 59, RULE_quantum_gate_stmt = 60, 
		RULE_quantum_gate_operation = 61, RULE_four_angle_args = 62, RULE_alpha = 63, 
		RULE_beta = 64, RULE_gamma = 65, RULE_delta = 66, RULE_theta = 67, RULE_control_gate_exp = 68, 
		RULE_double_gate_exp = 69, RULE_target_gate_exp = 70, RULE_measurement_stmt = 71, 
		RULE_accept_cbit_stmt = 72, RULE_q_if_operation = 73, RULE_q_if_stmt = 74, 
		RULE_q_if_stmt_item = 75, RULE_q_while_operation = 76, RULE_q_while_stmt = 77, 
		RULE_q_while_stmt_item = 78, RULE_q_condition = 79, RULE_q_operator = 80;
	public static final String[] ruleNames = {
		"qrunes", "lang_unit", "include_declaration", "include_sign", "postfix", 
		"declaration", "literal_declaration", "declaration_Specifier", "literal_type", 
		"primary_type", "quantum_type", "assist_classical_type", "init_DeclaratorList", 
		"init_Literal_DeclaratorList", "init_Declarator", "init_Literal_Declarator", 
		"declarator", "assignment_exp", "assignment_operator", "condition_exp", 
		"expression", "logicOr_exp", "logicAnd_exp", "inclu_exp", "exclu_exp", 
		"and_exp", "equal_exp", "relation_exp", "shift_exp", "additive_exp", "multi_exp", 
		"cast_exp", "unary_exp", "unary_operator", "postfix_exp", "argument_exp_List", 
		"primary_exp", "args_type_List", "args_declaration", "initializer", "initializerList", 
		"designation", "designatorList", "designator", "constant_exp", "func_declaration", 
		"func_declarator", "func_definition", "declarationList", "comp_stmt", 
		"block_List", "block_Item", "statement", "exp_stmt", "select_stmt", "iterate_stmt", 
		"for_stmt", "for_start", "for_step", "for_end", "quantum_gate_stmt", "quantum_gate_operation", 
		"four_angle_args", "alpha", "beta", "gamma", "delta", "theta", "control_gate_exp", 
		"double_gate_exp", "target_gate_exp", "measurement_stmt", "accept_cbit_stmt", 
		"q_if_operation", "q_if_stmt", "q_if_stmt_item", "q_while_operation", 
		"q_while_stmt", "q_while_stmt_item", "q_condition", "q_operator"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'\"'", "'''", "'Pi'", "'let'", "'include'", "'int'", "'float'", 
		"'boolean'", "'if'", "'else'", "'for'", "'.lib'", "'.inc'", "'.qrunes'", 
		"'var'", "'double'", "'len'", "'host'", "'qvec'", "'qubit'", "'cvec'", 
		"'cbit'", "'H'", "'X'", "'NOT'", "'T'", "'S'", "'Y'", "'Z'", "'X1'", "'Y1'", 
		"'Z1'", "'U4'", "'RX'", "'RY'", "'RZ'", "'CNOT'", "'CZ'", "'CR'", "'CU'", 
		"'iSWAP'", "'Measure'", "'qif'", "'qwhile'", "'qelse'", "'#'", "'='", 
		"'>'", "'<'", "'!'", "'~'", "':'", "'=='", "'<='", "'>='", "'!='", "'&&'", 
		"'||'", "'&'", "'^'", "'|'", "'?'", "'++'", "'--'", "'+'", "'-'", "'*'", 
		"'**'", "'/'", "'%'", "'+='", "'-='", "'*='", "'/='", "'<<'", "'>>'", 
		"'{'", "'}'", "';'", "','", "'.'", "'('", "')'", "'['", "']'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, "PI", "LET", "INCLUDE", "INT", "FLOAT", "BOOLEAN", "IF", 
		"ELSE", "FOR", "LIB_POSTFIX", "INC_POSTFIX", "QRUNES_POSTFIX", "VAR", 
		"DOUBLE", "LEN", "HOST", "QVEC", "QUBIT", "CVEC", "CBIT", "H_GATE", "X_GATE", 
		"NOT_GATE", "T_GATE", "S_GATE", "Y_GATE", "Z_GATE", "X1_GATE", "Y1_GATE", 
		"Z1_GATE", "U4_GATE", "RX_GATE", "RY_GATE", "RZ_GATE", "CNOT_GATE", "CZ_GATE", 
		"CR_GATE", "CU_GATE", "ISWAP", "MEASURE", "QIF", "QWHILE", "QELSE", "SHARP_SIGN", 
		"ASSIGN", "GT", "LT", "BANG", "TILDE", "COLON", "EQUAL", "LE", "GE", "NOTEQUAL", 
		"LOGIC_AND", "LOGIC_OR", "AND", "EXCLU", "INCLU", "QUE_MARK", "INC", "DEC", 
		"ADD", "SUB", "MUL", "POW", "DIV", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", 
		"MUL_ASSIGN", "DIV_ASSIGN", "LSHIFT", "RSHIFT", "LBRACE", "RBRACE", "SEMI", 
		"COMMA", "DOT", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "Identifier", 
		"Constant", "Digit_Sequence", "WhiteSpace", "SingleLineComment", "MultiLinesComment"
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
			setState(165);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LET) | (1L << INCLUDE) | (1L << INT) | (1L << FLOAT) | (1L << DOUBLE) | (1L << QVEC) | (1L << QUBIT) | (1L << CVEC) | (1L << CBIT))) != 0) || _la==Identifier) {
				{
				{
				setState(162);
				lang_unit();
				}
				}
				setState(167);
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
			setState(173);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(168);
				include_declaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(169);
				declaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(170);
				literal_declaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(171);
				func_declaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(172);
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
			setState(175);
			match(INCLUDE);
			setState(176);
			include_sign();
			setState(177);
			match(Identifier);
			setState(178);
			postfix();
			setState(179);
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
			setState(181);
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
			setState(183);
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
		public TerminalNode SEMI() { return getToken(qcodeParser.SEMI, 0); }
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
			setState(186);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INT) | (1L << FLOAT) | (1L << DOUBLE) | (1L << QVEC) | (1L << QUBIT) | (1L << CVEC) | (1L << CBIT))) != 0)) {
				{
				setState(185);
				declaration_Specifier();
				}
			}

			setState(188);
			init_DeclaratorList(0);
			setState(189);
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

	public static class Literal_declarationContext extends ParserRuleContext {
		public Init_Literal_DeclaratorListContext init_Literal_DeclaratorList() {
			return getRuleContext(Init_Literal_DeclaratorListContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(qcodeParser.SEMI, 0); }
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
			setState(192);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LET) {
				{
				setState(191);
				literal_type();
				}
			}

			setState(194);
			init_Literal_DeclaratorList(0);
			setState(195);
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
		public Declaration_SpecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration_Specifier; }
	}

	public final Declaration_SpecifierContext declaration_Specifier() throws RecognitionException {
		Declaration_SpecifierContext _localctx = new Declaration_SpecifierContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_declaration_Specifier);
		try {
			setState(200);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case QVEC:
			case QUBIT:
				enterOuterAlt(_localctx, 1);
				{
				setState(197);
				quantum_type();
				}
				break;
			case INT:
			case FLOAT:
			case DOUBLE:
				enterOuterAlt(_localctx, 2);
				{
				setState(198);
				primary_type();
				}
				break;
			case CVEC:
			case CBIT:
				enterOuterAlt(_localctx, 3);
				{
				setState(199);
				assist_classical_type();
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
			setState(202);
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
			setState(204);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INT) | (1L << FLOAT) | (1L << DOUBLE))) != 0)) ) {
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
		public Quantum_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quantum_type; }
	}

	public final Quantum_typeContext quantum_type() throws RecognitionException {
		Quantum_typeContext _localctx = new Quantum_typeContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_quantum_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
			_la = _input.LA(1);
			if ( !(_la==QVEC || _la==QUBIT) ) {
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
		enterRule(_localctx, 22, RULE_assist_classical_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
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
		int _startState = 24;
		enterRecursionRule(_localctx, 24, RULE_init_DeclaratorList, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(211);
			init_Declarator();
			}
			_ctx.stop = _input.LT(-1);
			setState(218);
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
					setState(213);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(214);
					match(COMMA);
					setState(215);
					init_Declarator();
					}
					} 
				}
				setState(220);
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
		int _startState = 26;
		enterRecursionRule(_localctx, 26, RULE_init_Literal_DeclaratorList, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(222);
			init_Literal_Declarator();
			}
			_ctx.stop = _input.LT(-1);
			setState(229);
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
					setState(224);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(225);
					match(COMMA);
					setState(226);
					init_Literal_Declarator();
					}
					} 
				}
				setState(231);
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
		enterRule(_localctx, 28, RULE_init_Declarator);
		try {
			setState(237);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(232);
				declarator(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(233);
				declarator(0);
				setState(234);
				match(ASSIGN);
				setState(235);
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
		enterRule(_localctx, 30, RULE_init_Literal_Declarator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(239);
			declarator(0);
			setState(240);
			match(ASSIGN);
			setState(241);
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
		int _startState = 32;
		enterRecursionRule(_localctx, 32, RULE_declarator, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(244);
			match(Identifier);
			}
			_ctx.stop = _input.LT(-1);
			setState(253);
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
					setState(246);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(247);
					match(LBRACK);
					setState(248);
					assignment_exp();
					setState(249);
					match(RBRACK);
					}
					} 
				}
				setState(255);
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
		enterRule(_localctx, 34, RULE_assignment_exp);
		try {
			setState(263);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(256);
				condition_exp();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(257);
				unary_exp();
				setState(258);
				assignment_operator();
				setState(259);
				assignment_exp();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(261);
				match(Digit_Sequence);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(262);
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
		enterRule(_localctx, 36, RULE_assignment_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(265);
			_la = _input.LA(1);
			if ( !(((((_la - 47)) & ~0x3f) == 0 && ((1L << (_la - 47)) & ((1L << (ASSIGN - 47)) | (1L << (ADD_ASSIGN - 47)) | (1L << (SUB_ASSIGN - 47)) | (1L << (MUL_ASSIGN - 47)) | (1L << (DIV_ASSIGN - 47)))) != 0)) ) {
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
		enterRule(_localctx, 38, RULE_condition_exp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(267);
			logicOr_exp(0);
			setState(273);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(268);
				match(QUE_MARK);
				setState(269);
				expression(0);
				setState(270);
				match(COLON);
				setState(271);
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
		int _startState = 40;
		enterRecursionRule(_localctx, 40, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(276);
			assignment_exp();
			}
			_ctx.stop = _input.LT(-1);
			setState(283);
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
					setState(278);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(279);
					match(COMMA);
					setState(280);
					assignment_exp();
					}
					} 
				}
				setState(285);
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
		int _startState = 42;
		enterRecursionRule(_localctx, 42, RULE_logicOr_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(287);
			logicAnd_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(294);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicOr_expContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_logicOr_exp);
					setState(289);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(290);
					match(LOGIC_OR);
					setState(291);
					logicAnd_exp(0);
					}
					} 
				}
				setState(296);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
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
		int _startState = 44;
		enterRecursionRule(_localctx, 44, RULE_logicAnd_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(298);
			inclu_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(305);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicAnd_expContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_logicAnd_exp);
					setState(300);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(301);
					match(LOGIC_AND);
					setState(302);
					inclu_exp(0);
					}
					} 
				}
				setState(307);
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
		int _startState = 46;
		enterRecursionRule(_localctx, 46, RULE_inclu_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(309);
			exclu_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(316);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Inclu_expContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_inclu_exp);
					setState(311);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(312);
					match(INCLU);
					setState(313);
					exclu_exp(0);
					}
					} 
				}
				setState(318);
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
		int _startState = 48;
		enterRecursionRule(_localctx, 48, RULE_exclu_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(320);
			and_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(327);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Exclu_expContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_exclu_exp);
					setState(322);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(323);
					match(EXCLU);
					setState(324);
					and_exp(0);
					}
					} 
				}
				setState(329);
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
		int _startState = 50;
		enterRecursionRule(_localctx, 50, RULE_and_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(331);
			equal_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(338);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new And_expContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_and_exp);
					setState(333);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(334);
					match(AND);
					setState(335);
					equal_exp(0);
					}
					} 
				}
				setState(340);
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
		int _startState = 52;
		enterRecursionRule(_localctx, 52, RULE_equal_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(342);
			relation_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(352);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(350);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
					case 1:
						{
						_localctx = new Equal_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_equal_exp);
						setState(344);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(345);
						match(EQUAL);
						setState(346);
						relation_exp(0);
						}
						break;
					case 2:
						{
						_localctx = new Equal_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_equal_exp);
						setState(347);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(348);
						match(NOTEQUAL);
						setState(349);
						relation_exp(0);
						}
						break;
					}
					} 
				}
				setState(354);
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
		int _startState = 54;
		enterRecursionRule(_localctx, 54, RULE_relation_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(356);
			shift_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(372);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(370);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
					case 1:
						{
						_localctx = new Relation_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_relation_exp);
						setState(358);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(359);
						match(GT);
						setState(360);
						shift_exp(0);
						}
						break;
					case 2:
						{
						_localctx = new Relation_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_relation_exp);
						setState(361);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(362);
						match(LT);
						setState(363);
						shift_exp(0);
						}
						break;
					case 3:
						{
						_localctx = new Relation_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_relation_exp);
						setState(364);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(365);
						match(GE);
						setState(366);
						shift_exp(0);
						}
						break;
					case 4:
						{
						_localctx = new Relation_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_relation_exp);
						setState(367);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(368);
						match(LE);
						setState(369);
						shift_exp(0);
						}
						break;
					}
					} 
				}
				setState(374);
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
		int _startState = 56;
		enterRecursionRule(_localctx, 56, RULE_shift_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(376);
			additive_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(386);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(384);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
					case 1:
						{
						_localctx = new Shift_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_shift_exp);
						setState(378);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(379);
						match(LSHIFT);
						setState(380);
						additive_exp(0);
						}
						break;
					case 2:
						{
						_localctx = new Shift_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_shift_exp);
						setState(381);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(382);
						match(RSHIFT);
						setState(383);
						additive_exp(0);
						}
						break;
					}
					} 
				}
				setState(388);
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
		int _startState = 58;
		enterRecursionRule(_localctx, 58, RULE_additive_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(390);
			multi_exp(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(400);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(398);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
					case 1:
						{
						_localctx = new Additive_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_additive_exp);
						setState(392);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(393);
						match(ADD);
						setState(394);
						multi_exp(0);
						}
						break;
					case 2:
						{
						_localctx = new Additive_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_additive_exp);
						setState(395);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(396);
						match(SUB);
						setState(397);
						multi_exp(0);
						}
						break;
					}
					} 
				}
				setState(402);
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
		int _startState = 60;
		enterRecursionRule(_localctx, 60, RULE_multi_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(404);
			cast_exp();
			}
			_ctx.stop = _input.LT(-1);
			setState(420);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(418);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
					case 1:
						{
						_localctx = new Multi_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_multi_exp);
						setState(406);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(407);
						match(MUL);
						setState(408);
						cast_exp();
						}
						break;
					case 2:
						{
						_localctx = new Multi_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_multi_exp);
						setState(409);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(410);
						match(DIV);
						setState(411);
						cast_exp();
						}
						break;
					case 3:
						{
						_localctx = new Multi_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_multi_exp);
						setState(412);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(413);
						match(MOD);
						setState(414);
						cast_exp();
						}
						break;
					case 4:
						{
						_localctx = new Multi_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_multi_exp);
						setState(415);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(416);
						match(POW);
						setState(417);
						cast_exp();
						}
						break;
					}
					} 
				}
				setState(422);
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
		enterRule(_localctx, 62, RULE_cast_exp);
		try {
			setState(425);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PI:
			case LEN:
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
				setState(423);
				unary_exp();
				}
				break;
			case Digit_Sequence:
				enterOuterAlt(_localctx, 2);
				{
				setState(424);
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
		enterRule(_localctx, 64, RULE_unary_exp);
		try {
			setState(437);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PI:
			case LEN:
			case LPAREN:
			case Identifier:
			case Constant:
				enterOuterAlt(_localctx, 1);
				{
				setState(427);
				postfix_exp(0);
				}
				break;
			case INC:
				enterOuterAlt(_localctx, 2);
				{
				setState(428);
				match(INC);
				setState(429);
				unary_exp();
				}
				break;
			case DEC:
				enterOuterAlt(_localctx, 3);
				{
				setState(430);
				match(DEC);
				setState(431);
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
				setState(432);
				unary_operator();
				setState(433);
				cast_exp();
				}
				break;
			case LOGIC_AND:
				enterOuterAlt(_localctx, 5);
				{
				setState(435);
				match(LOGIC_AND);
				setState(436);
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
		enterRule(_localctx, 66, RULE_unary_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(439);
			_la = _input.LA(1);
			if ( !(((((_la - 50)) & ~0x3f) == 0 && ((1L << (_la - 50)) & ((1L << (BANG - 50)) | (1L << (TILDE - 50)) | (1L << (AND - 50)) | (1L << (ADD - 50)) | (1L << (SUB - 50)) | (1L << (MUL - 50)) | (1L << (POW - 50)))) != 0)) ) {
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
		int _startState = 68;
		enterRecursionRule(_localctx, 68, RULE_postfix_exp, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(442);
			primary_exp();
			}
			_ctx.stop = _input.LT(-1);
			setState(465);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(463);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
					case 1:
						{
						_localctx = new Postfix_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfix_exp);
						setState(444);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(445);
						match(LBRACK);
						setState(446);
						expression(0);
						setState(449);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==COLON) {
							{
							setState(447);
							match(COLON);
							setState(448);
							expression(0);
							}
						}

						setState(451);
						match(RBRACK);
						}
						break;
					case 2:
						{
						_localctx = new Postfix_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfix_exp);
						setState(453);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(454);
						match(LPAREN);
						setState(456);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PI) | (1L << LEN) | (1L << BANG) | (1L << TILDE) | (1L << LOGIC_AND) | (1L << AND) | (1L << INC))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (DEC - 64)) | (1L << (ADD - 64)) | (1L << (SUB - 64)) | (1L << (MUL - 64)) | (1L << (POW - 64)) | (1L << (LPAREN - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (Digit_Sequence - 64)))) != 0)) {
							{
							setState(455);
							argument_exp_List(0);
							}
						}

						setState(458);
						match(RPAREN);
						}
						break;
					case 3:
						{
						_localctx = new Postfix_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfix_exp);
						setState(459);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(460);
						match(INC);
						}
						break;
					case 4:
						{
						_localctx = new Postfix_expContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfix_exp);
						setState(461);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(462);
						match(DEC);
						}
						break;
					}
					} 
				}
				setState(467);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
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
		int _startState = 70;
		enterRecursionRule(_localctx, 70, RULE_argument_exp_List, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(469);
			assignment_exp();
			}
			_ctx.stop = _input.LT(-1);
			setState(476);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,33,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Argument_exp_ListContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_argument_exp_List);
					setState(471);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(472);
					match(COMMA);
					setState(473);
					assignment_exp();
					}
					} 
				}
				setState(478);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,33,_ctx);
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
		public TerminalNode LEN() { return getToken(qcodeParser.LEN, 0); }
		public TerminalNode PI() { return getToken(qcodeParser.PI, 0); }
		public Primary_expContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primary_exp; }
	}

	public final Primary_expContext primary_exp() throws RecognitionException {
		Primary_expContext _localctx = new Primary_expContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_primary_exp);
		try {
			setState(487);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(479);
				match(Identifier);
				}
				break;
			case Constant:
				enterOuterAlt(_localctx, 2);
				{
				setState(480);
				match(Constant);
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 3);
				{
				setState(481);
				match(LPAREN);
				setState(482);
				expression(0);
				setState(483);
				match(RPAREN);
				}
				break;
			case LEN:
				enterOuterAlt(_localctx, 4);
				{
				setState(485);
				match(LEN);
				}
				break;
			case PI:
				enterOuterAlt(_localctx, 5);
				{
				setState(486);
				match(PI);
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
		int _startState = 74;
		enterRecursionRule(_localctx, 74, RULE_args_type_List, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(490);
			args_declaration();
			}
			_ctx.stop = _input.LT(-1);
			setState(497);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Args_type_ListContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_args_type_List);
					setState(492);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(493);
					match(COMMA);
					setState(494);
					args_declaration();
					}
					} 
				}
				setState(499);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
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
		enterRule(_localctx, 76, RULE_args_declaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(500);
			declaration_Specifier();
			setState(501);
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
		enterRule(_localctx, 78, RULE_initializer);
		try {
			setState(511);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PI:
			case LEN:
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
				setState(503);
				assignment_exp();
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(504);
				match(LBRACE);
				setState(505);
				initializerList(0);
				{
				setState(506);
				match(COMMA);
				setState(507);
				initializerList(0);
				}
				setState(509);
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
		int _startState = 80;
		enterRecursionRule(_localctx, 80, RULE_initializerList, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(515);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(514);
				designation();
				}
			}

			setState(517);
			initializer();
			}
			_ctx.stop = _input.LT(-1);
			setState(527);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,39,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new InitializerListContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_initializerList);
					setState(519);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(520);
					match(COMMA);
					setState(522);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==LBRACK) {
						{
						setState(521);
						designation();
						}
					}

					setState(524);
					initializer();
					}
					} 
				}
				setState(529);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,39,_ctx);
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
		enterRule(_localctx, 82, RULE_designation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(530);
			designatorList(0);
			setState(531);
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
		int _startState = 84;
		enterRecursionRule(_localctx, 84, RULE_designatorList, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(534);
			designator();
			}
			_ctx.stop = _input.LT(-1);
			setState(540);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,40,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new DesignatorListContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_designatorList);
					setState(536);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(537);
					designator();
					}
					} 
				}
				setState(542);
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
		enterRule(_localctx, 86, RULE_designator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(543);
			match(LBRACK);
			setState(544);
			constant_exp();
			setState(545);
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
		enterRule(_localctx, 88, RULE_constant_exp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(547);
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
		enterRule(_localctx, 90, RULE_func_declaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(549);
			func_declarator();
			setState(550);
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
		enterRule(_localctx, 92, RULE_func_declarator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(552);
			match(Identifier);
			setState(553);
			match(LPAREN);
			setState(555);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INT) | (1L << FLOAT) | (1L << DOUBLE) | (1L << QVEC) | (1L << QUBIT) | (1L << CVEC) | (1L << CBIT))) != 0)) {
				{
				setState(554);
				args_type_List(0);
				}
			}

			setState(557);
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
		enterRule(_localctx, 94, RULE_func_definition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(559);
			func_declarator();
			setState(560);
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
		enterRule(_localctx, 96, RULE_declarationList);
		try {
			setState(566);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(562);
				declaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(563);
				declaration();
				setState(564);
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
		enterRule(_localctx, 98, RULE_comp_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(568);
			match(LBRACE);
			setState(570);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PI) | (1L << LET) | (1L << INT) | (1L << FLOAT) | (1L << IF) | (1L << FOR) | (1L << DOUBLE) | (1L << LEN) | (1L << QVEC) | (1L << QUBIT) | (1L << CVEC) | (1L << CBIT) | (1L << H_GATE) | (1L << X_GATE) | (1L << NOT_GATE) | (1L << T_GATE) | (1L << S_GATE) | (1L << Y_GATE) | (1L << Z_GATE) | (1L << X1_GATE) | (1L << Y1_GATE) | (1L << Z1_GATE) | (1L << U4_GATE) | (1L << RX_GATE) | (1L << RY_GATE) | (1L << RZ_GATE) | (1L << CNOT_GATE) | (1L << CZ_GATE) | (1L << CR_GATE) | (1L << CU_GATE) | (1L << ISWAP) | (1L << MEASURE) | (1L << QIF) | (1L << QWHILE) | (1L << BANG) | (1L << TILDE) | (1L << LOGIC_AND) | (1L << AND) | (1L << INC))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (DEC - 64)) | (1L << (ADD - 64)) | (1L << (SUB - 64)) | (1L << (MUL - 64)) | (1L << (POW - 64)) | (1L << (LBRACE - 64)) | (1L << (SEMI - 64)) | (1L << (LPAREN - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (Digit_Sequence - 64)))) != 0)) {
				{
				setState(569);
				block_List(0);
				}
			}

			setState(572);
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
		int _startState = 100;
		enterRecursionRule(_localctx, 100, RULE_block_List, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(575);
			block_Item();
			}
			_ctx.stop = _input.LT(-1);
			setState(581);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,44,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Block_ListContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_block_List);
					setState(577);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(578);
					block_Item();
					}
					} 
				}
				setState(583);
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

	public static class Block_ItemContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
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
		enterRule(_localctx, 102, RULE_block_Item);
		try {
			setState(587);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(584);
				statement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(585);
				declaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(586);
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
		enterRule(_localctx, 104, RULE_statement);
		try {
			setState(597);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PI:
			case LEN:
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
				setState(589);
				exp_stmt();
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(590);
				comp_stmt();
				}
				break;
			case IF:
				enterOuterAlt(_localctx, 3);
				{
				setState(591);
				select_stmt();
				}
				break;
			case FOR:
				enterOuterAlt(_localctx, 4);
				{
				setState(592);
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
				setState(593);
				quantum_gate_stmt();
				}
				break;
			case MEASURE:
				enterOuterAlt(_localctx, 6);
				{
				setState(594);
				measurement_stmt();
				}
				break;
			case QIF:
				enterOuterAlt(_localctx, 7);
				{
				setState(595);
				q_if_operation();
				}
				break;
			case QWHILE:
				enterOuterAlt(_localctx, 8);
				{
				setState(596);
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
		enterRule(_localctx, 106, RULE_exp_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(600);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PI) | (1L << LEN) | (1L << BANG) | (1L << TILDE) | (1L << LOGIC_AND) | (1L << AND) | (1L << INC))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (DEC - 64)) | (1L << (ADD - 64)) | (1L << (SUB - 64)) | (1L << (MUL - 64)) | (1L << (POW - 64)) | (1L << (LPAREN - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (Digit_Sequence - 64)))) != 0)) {
				{
				setState(599);
				expression(0);
				}
			}

			setState(602);
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
		enterRule(_localctx, 108, RULE_select_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(604);
			match(IF);
			setState(605);
			match(LPAREN);
			setState(606);
			expression(0);
			setState(607);
			match(RPAREN);
			setState(608);
			statement();
			setState(611);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,48,_ctx) ) {
			case 1:
				{
				setState(609);
				match(ELSE);
				setState(610);
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
		enterRule(_localctx, 110, RULE_iterate_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(613);
			match(FOR);
			setState(614);
			match(LPAREN);
			setState(615);
			for_stmt();
			setState(616);
			match(RPAREN);
			setState(617);
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
		enterRule(_localctx, 112, RULE_for_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(620);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
			case 1:
				{
				setState(619);
				for_start();
				}
				break;
			}
			setState(623);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
			case 1:
				{
				setState(622);
				match(COLON);
				}
				break;
			}
			setState(626);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PI) | (1L << LEN) | (1L << BANG) | (1L << TILDE) | (1L << LOGIC_AND) | (1L << AND) | (1L << INC))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (DEC - 64)) | (1L << (ADD - 64)) | (1L << (SUB - 64)) | (1L << (MUL - 64)) | (1L << (POW - 64)) | (1L << (LPAREN - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (Digit_Sequence - 64)))) != 0)) {
				{
				setState(625);
				for_step();
				}
			}

			setState(628);
			match(COLON);
			setState(630);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PI) | (1L << LEN) | (1L << BANG) | (1L << TILDE) | (1L << LOGIC_AND) | (1L << AND) | (1L << INC))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (DEC - 64)) | (1L << (ADD - 64)) | (1L << (SUB - 64)) | (1L << (MUL - 64)) | (1L << (POW - 64)) | (1L << (LPAREN - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (Digit_Sequence - 64)))) != 0)) {
				{
				setState(629);
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
		public For_startContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_start; }
	}

	public final For_startContext for_start() throws RecognitionException {
		For_startContext _localctx = new For_startContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_for_start);
		try {
			setState(636);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,53,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(632);
				primary_exp();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(633);
				match(Identifier);
				setState(634);
				match(ASSIGN);
				setState(635);
				expression(0);
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
		enterRule(_localctx, 116, RULE_for_step);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(638);
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
		enterRule(_localctx, 118, RULE_for_end);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(640);
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
		public Quantum_gate_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quantum_gate_stmt; }
	}

	public final Quantum_gate_stmtContext quantum_gate_stmt() throws RecognitionException {
		Quantum_gate_stmtContext _localctx = new Quantum_gate_stmtContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_quantum_gate_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(642);
			quantum_gate_operation();
			setState(643);
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
		public TerminalNode COMMA() { return getToken(qcodeParser.COMMA, 0); }
		public Four_angle_argsContext four_angle_args() {
			return getRuleContext(Four_angle_argsContext.class,0);
		}
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
		enterRule(_localctx, 122, RULE_quantum_gate_operation);
		try {
			setState(754);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case H_GATE:
				enterOuterAlt(_localctx, 1);
				{
				setState(645);
				match(H_GATE);
				setState(646);
				match(LPAREN);
				setState(647);
				control_gate_exp();
				setState(648);
				match(RPAREN);
				}
				break;
			case X_GATE:
				enterOuterAlt(_localctx, 2);
				{
				setState(650);
				match(X_GATE);
				setState(651);
				match(LPAREN);
				setState(652);
				control_gate_exp();
				setState(653);
				match(RPAREN);
				}
				break;
			case NOT_GATE:
				enterOuterAlt(_localctx, 3);
				{
				setState(655);
				match(NOT_GATE);
				setState(656);
				match(LPAREN);
				setState(657);
				control_gate_exp();
				setState(658);
				match(RPAREN);
				}
				break;
			case T_GATE:
				enterOuterAlt(_localctx, 4);
				{
				setState(660);
				match(T_GATE);
				setState(661);
				match(LPAREN);
				setState(662);
				control_gate_exp();
				setState(663);
				match(RPAREN);
				}
				break;
			case S_GATE:
				enterOuterAlt(_localctx, 5);
				{
				setState(665);
				match(S_GATE);
				setState(666);
				match(LPAREN);
				setState(667);
				control_gate_exp();
				setState(668);
				match(RPAREN);
				}
				break;
			case Y_GATE:
				enterOuterAlt(_localctx, 6);
				{
				setState(670);
				match(Y_GATE);
				setState(671);
				match(LPAREN);
				setState(672);
				control_gate_exp();
				setState(673);
				match(RPAREN);
				}
				break;
			case Z_GATE:
				enterOuterAlt(_localctx, 7);
				{
				setState(675);
				match(Z_GATE);
				setState(676);
				match(LPAREN);
				setState(677);
				control_gate_exp();
				setState(678);
				match(RPAREN);
				}
				break;
			case X1_GATE:
				enterOuterAlt(_localctx, 8);
				{
				setState(680);
				match(X1_GATE);
				setState(681);
				match(LPAREN);
				setState(682);
				control_gate_exp();
				setState(683);
				match(RPAREN);
				}
				break;
			case Y1_GATE:
				enterOuterAlt(_localctx, 9);
				{
				setState(685);
				match(Y1_GATE);
				setState(686);
				match(LPAREN);
				setState(687);
				control_gate_exp();
				setState(688);
				match(RPAREN);
				}
				break;
			case Z1_GATE:
				enterOuterAlt(_localctx, 10);
				{
				setState(690);
				match(Z1_GATE);
				setState(691);
				match(LPAREN);
				setState(692);
				control_gate_exp();
				setState(693);
				match(RPAREN);
				}
				break;
			case U4_GATE:
				enterOuterAlt(_localctx, 11);
				{
				setState(695);
				match(U4_GATE);
				setState(696);
				match(LPAREN);
				setState(697);
				control_gate_exp();
				setState(698);
				match(COMMA);
				setState(699);
				four_angle_args();
				setState(700);
				match(RPAREN);
				}
				break;
			case RX_GATE:
				enterOuterAlt(_localctx, 12);
				{
				setState(702);
				match(RX_GATE);
				setState(703);
				match(LPAREN);
				setState(704);
				control_gate_exp();
				setState(705);
				match(COMMA);
				setState(706);
				expression(0);
				setState(707);
				match(RPAREN);
				}
				break;
			case RY_GATE:
				enterOuterAlt(_localctx, 13);
				{
				setState(709);
				match(RY_GATE);
				setState(710);
				match(LPAREN);
				setState(711);
				control_gate_exp();
				setState(712);
				match(COMMA);
				setState(713);
				expression(0);
				setState(714);
				match(RPAREN);
				}
				break;
			case RZ_GATE:
				enterOuterAlt(_localctx, 14);
				{
				setState(716);
				match(RZ_GATE);
				setState(717);
				match(LPAREN);
				setState(718);
				control_gate_exp();
				setState(719);
				match(COMMA);
				setState(720);
				expression(0);
				setState(721);
				match(RPAREN);
				}
				break;
			case CNOT_GATE:
				enterOuterAlt(_localctx, 15);
				{
				setState(723);
				match(CNOT_GATE);
				setState(724);
				match(LPAREN);
				setState(725);
				double_gate_exp();
				setState(726);
				match(RPAREN);
				}
				break;
			case CZ_GATE:
				enterOuterAlt(_localctx, 16);
				{
				setState(728);
				match(CZ_GATE);
				setState(729);
				match(LPAREN);
				setState(730);
				double_gate_exp();
				setState(731);
				match(RPAREN);
				}
				break;
			case CU_GATE:
				enterOuterAlt(_localctx, 17);
				{
				setState(733);
				match(CU_GATE);
				setState(734);
				match(LPAREN);
				setState(735);
				double_gate_exp();
				setState(736);
				match(COMMA);
				setState(737);
				four_angle_args();
				setState(738);
				match(RPAREN);
				}
				break;
			case ISWAP:
				enterOuterAlt(_localctx, 18);
				{
				setState(740);
				match(ISWAP);
				setState(741);
				match(LPAREN);
				setState(742);
				double_gate_exp();
				setState(743);
				match(COMMA);
				setState(744);
				theta();
				setState(745);
				match(RPAREN);
				}
				break;
			case CR_GATE:
				enterOuterAlt(_localctx, 19);
				{
				setState(747);
				match(CR_GATE);
				setState(748);
				match(LPAREN);
				setState(749);
				double_gate_exp();
				setState(750);
				match(COMMA);
				setState(751);
				theta();
				setState(752);
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
		enterRule(_localctx, 124, RULE_four_angle_args);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(756);
			alpha();
			setState(757);
			match(COMMA);
			setState(758);
			beta();
			setState(759);
			match(COMMA);
			setState(760);
			gamma();
			setState(761);
			match(COMMA);
			setState(762);
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
		enterRule(_localctx, 126, RULE_alpha);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(764);
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
		enterRule(_localctx, 128, RULE_beta);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(766);
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
		enterRule(_localctx, 130, RULE_gamma);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(768);
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
		enterRule(_localctx, 132, RULE_delta);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(770);
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
		enterRule(_localctx, 134, RULE_theta);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(772);
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
		enterRule(_localctx, 136, RULE_control_gate_exp);
		try {
			setState(780);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,55,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(774);
				match(Identifier);
				setState(775);
				match(LBRACK);
				setState(776);
				expression(0);
				setState(777);
				match(RBRACK);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(779);
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
		enterRule(_localctx, 138, RULE_double_gate_exp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(782);
			control_gate_exp();
			setState(783);
			match(COMMA);
			setState(784);
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
		enterRule(_localctx, 140, RULE_target_gate_exp);
		try {
			setState(792);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,56,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(786);
				match(Identifier);
				setState(787);
				match(LBRACK);
				setState(788);
				expression(0);
				setState(789);
				match(RBRACK);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(791);
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
		enterRule(_localctx, 142, RULE_measurement_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(794);
			match(MEASURE);
			setState(795);
			match(LPAREN);
			setState(796);
			control_gate_exp();
			setState(797);
			match(COMMA);
			setState(798);
			accept_cbit_stmt();
			setState(799);
			match(RPAREN);
			setState(800);
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
		enterRule(_localctx, 144, RULE_accept_cbit_stmt);
		try {
			setState(808);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(802);
				match(Identifier);
				setState(803);
				match(LBRACK);
				setState(804);
				expression(0);
				setState(805);
				match(RBRACK);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(807);
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
		enterRule(_localctx, 146, RULE_q_if_operation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(810);
			match(QIF);
			setState(811);
			match(LPAREN);
			setState(812);
			q_condition();
			setState(813);
			match(RPAREN);
			setState(814);
			match(LBRACE);
			setState(815);
			q_if_stmt();
			setState(816);
			match(RBRACE);
			setState(822);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,58,_ctx) ) {
			case 1:
				{
				setState(817);
				match(QELSE);
				setState(818);
				match(LBRACE);
				setState(819);
				q_if_stmt();
				setState(820);
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
		enterRule(_localctx, 148, RULE_q_if_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(827);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PI) | (1L << LET) | (1L << INT) | (1L << FLOAT) | (1L << IF) | (1L << FOR) | (1L << DOUBLE) | (1L << LEN) | (1L << QVEC) | (1L << QUBIT) | (1L << CVEC) | (1L << CBIT) | (1L << H_GATE) | (1L << X_GATE) | (1L << NOT_GATE) | (1L << T_GATE) | (1L << S_GATE) | (1L << Y_GATE) | (1L << Z_GATE) | (1L << X1_GATE) | (1L << Y1_GATE) | (1L << Z1_GATE) | (1L << U4_GATE) | (1L << RX_GATE) | (1L << RY_GATE) | (1L << RZ_GATE) | (1L << CNOT_GATE) | (1L << CZ_GATE) | (1L << CR_GATE) | (1L << CU_GATE) | (1L << ISWAP) | (1L << MEASURE) | (1L << QIF) | (1L << QWHILE) | (1L << BANG) | (1L << TILDE) | (1L << LOGIC_AND) | (1L << AND) | (1L << INC))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (DEC - 64)) | (1L << (ADD - 64)) | (1L << (SUB - 64)) | (1L << (MUL - 64)) | (1L << (POW - 64)) | (1L << (LBRACE - 64)) | (1L << (SEMI - 64)) | (1L << (LPAREN - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (Digit_Sequence - 64)))) != 0)) {
				{
				{
				setState(824);
				q_if_stmt_item();
				}
				}
				setState(829);
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
		enterRule(_localctx, 150, RULE_q_if_stmt_item);
		try {
			setState(833);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,60,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(830);
				statement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(831);
				declaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(832);
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
		enterRule(_localctx, 152, RULE_q_while_operation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(835);
			match(QWHILE);
			setState(836);
			match(LPAREN);
			setState(837);
			q_condition();
			setState(838);
			match(RPAREN);
			setState(839);
			match(LBRACE);
			setState(840);
			q_while_stmt();
			setState(841);
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
		enterRule(_localctx, 154, RULE_q_while_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(846);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PI) | (1L << LET) | (1L << INT) | (1L << FLOAT) | (1L << IF) | (1L << FOR) | (1L << DOUBLE) | (1L << LEN) | (1L << QVEC) | (1L << QUBIT) | (1L << CVEC) | (1L << CBIT) | (1L << H_GATE) | (1L << X_GATE) | (1L << NOT_GATE) | (1L << T_GATE) | (1L << S_GATE) | (1L << Y_GATE) | (1L << Z_GATE) | (1L << X1_GATE) | (1L << Y1_GATE) | (1L << Z1_GATE) | (1L << U4_GATE) | (1L << RX_GATE) | (1L << RY_GATE) | (1L << RZ_GATE) | (1L << CNOT_GATE) | (1L << CZ_GATE) | (1L << CR_GATE) | (1L << CU_GATE) | (1L << ISWAP) | (1L << MEASURE) | (1L << QIF) | (1L << QWHILE) | (1L << BANG) | (1L << TILDE) | (1L << LOGIC_AND) | (1L << AND) | (1L << INC))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (DEC - 64)) | (1L << (ADD - 64)) | (1L << (SUB - 64)) | (1L << (MUL - 64)) | (1L << (POW - 64)) | (1L << (LBRACE - 64)) | (1L << (SEMI - 64)) | (1L << (LPAREN - 64)) | (1L << (Identifier - 64)) | (1L << (Constant - 64)) | (1L << (Digit_Sequence - 64)))) != 0)) {
				{
				{
				setState(843);
				q_while_stmt_item();
				}
				}
				setState(848);
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
		enterRule(_localctx, 156, RULE_q_while_stmt_item);
		try {
			setState(852);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,62,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(849);
				statement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(850);
				declaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(851);
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
		enterRule(_localctx, 158, RULE_q_condition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(854);
			inclu_exp(0);
			setState(860);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LOGIC_AND || _la==LOGIC_OR) {
				{
				{
				setState(855);
				q_operator();
				setState(856);
				inclu_exp(0);
				}
				}
				setState(862);
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
		enterRule(_localctx, 160, RULE_q_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(863);
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
		case 12:
			return init_DeclaratorList_sempred((Init_DeclaratorListContext)_localctx, predIndex);
		case 13:
			return init_Literal_DeclaratorList_sempred((Init_Literal_DeclaratorListContext)_localctx, predIndex);
		case 16:
			return declarator_sempred((DeclaratorContext)_localctx, predIndex);
		case 20:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		case 21:
			return logicOr_exp_sempred((LogicOr_expContext)_localctx, predIndex);
		case 22:
			return logicAnd_exp_sempred((LogicAnd_expContext)_localctx, predIndex);
		case 23:
			return inclu_exp_sempred((Inclu_expContext)_localctx, predIndex);
		case 24:
			return exclu_exp_sempred((Exclu_expContext)_localctx, predIndex);
		case 25:
			return and_exp_sempred((And_expContext)_localctx, predIndex);
		case 26:
			return equal_exp_sempred((Equal_expContext)_localctx, predIndex);
		case 27:
			return relation_exp_sempred((Relation_expContext)_localctx, predIndex);
		case 28:
			return shift_exp_sempred((Shift_expContext)_localctx, predIndex);
		case 29:
			return additive_exp_sempred((Additive_expContext)_localctx, predIndex);
		case 30:
			return multi_exp_sempred((Multi_expContext)_localctx, predIndex);
		case 34:
			return postfix_exp_sempred((Postfix_expContext)_localctx, predIndex);
		case 35:
			return argument_exp_List_sempred((Argument_exp_ListContext)_localctx, predIndex);
		case 37:
			return args_type_List_sempred((Args_type_ListContext)_localctx, predIndex);
		case 40:
			return initializerList_sempred((InitializerListContext)_localctx, predIndex);
		case 42:
			return designatorList_sempred((DesignatorListContext)_localctx, predIndex);
		case 50:
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
	private boolean logicOr_exp_sempred(LogicOr_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 4:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean logicAnd_exp_sempred(LogicAnd_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 5:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean inclu_exp_sempred(Inclu_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 6:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean exclu_exp_sempred(Exclu_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 7:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean and_exp_sempred(And_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 8:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean equal_exp_sempred(Equal_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 9:
			return precpred(_ctx, 2);
		case 10:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean relation_exp_sempred(Relation_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 11:
			return precpred(_ctx, 4);
		case 12:
			return precpred(_ctx, 3);
		case 13:
			return precpred(_ctx, 2);
		case 14:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean shift_exp_sempred(Shift_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 15:
			return precpred(_ctx, 2);
		case 16:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean additive_exp_sempred(Additive_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 17:
			return precpred(_ctx, 2);
		case 18:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean multi_exp_sempred(Multi_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 19:
			return precpred(_ctx, 4);
		case 20:
			return precpred(_ctx, 3);
		case 21:
			return precpred(_ctx, 2);
		case 22:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean postfix_exp_sempred(Postfix_expContext _localctx, int predIndex) {
		switch (predIndex) {
		case 23:
			return precpred(_ctx, 4);
		case 24:
			return precpred(_ctx, 3);
		case 25:
			return precpred(_ctx, 2);
		case 26:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean argument_exp_List_sempred(Argument_exp_ListContext _localctx, int predIndex) {
		switch (predIndex) {
		case 27:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean args_type_List_sempred(Args_type_ListContext _localctx, int predIndex) {
		switch (predIndex) {
		case 28:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean initializerList_sempred(InitializerListContext _localctx, int predIndex) {
		switch (predIndex) {
		case 29:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean designatorList_sempred(DesignatorListContext _localctx, int predIndex) {
		switch (predIndex) {
		case 30:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean block_List_sempred(Block_ListContext _localctx, int predIndex) {
		switch (predIndex) {
		case 31:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3]\u0364\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\3\2\7\2\u00a6"+
		"\n\2\f\2\16\2\u00a9\13\2\3\3\3\3\3\3\3\3\3\3\5\3\u00b0\n\3\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\5\3\5\3\6\3\6\3\7\5\7\u00bd\n\7\3\7\3\7\3\7\3\b\5\b\u00c3"+
		"\n\b\3\b\3\b\3\b\3\t\3\t\3\t\5\t\u00cb\n\t\3\n\3\n\3\13\3\13\3\f\3\f\3"+
		"\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\7\16\u00db\n\16\f\16\16\16\u00de"+
		"\13\16\3\17\3\17\3\17\3\17\3\17\3\17\7\17\u00e6\n\17\f\17\16\17\u00e9"+
		"\13\17\3\20\3\20\3\20\3\20\3\20\5\20\u00f0\n\20\3\21\3\21\3\21\3\21\3"+
		"\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\7\22\u00fe\n\22\f\22\16\22\u0101"+
		"\13\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23\5\23\u010a\n\23\3\24\3\24\3"+
		"\25\3\25\3\25\3\25\3\25\3\25\5\25\u0114\n\25\3\26\3\26\3\26\3\26\3\26"+
		"\3\26\7\26\u011c\n\26\f\26\16\26\u011f\13\26\3\27\3\27\3\27\3\27\3\27"+
		"\3\27\7\27\u0127\n\27\f\27\16\27\u012a\13\27\3\30\3\30\3\30\3\30\3\30"+
		"\3\30\7\30\u0132\n\30\f\30\16\30\u0135\13\30\3\31\3\31\3\31\3\31\3\31"+
		"\3\31\7\31\u013d\n\31\f\31\16\31\u0140\13\31\3\32\3\32\3\32\3\32\3\32"+
		"\3\32\7\32\u0148\n\32\f\32\16\32\u014b\13\32\3\33\3\33\3\33\3\33\3\33"+
		"\3\33\7\33\u0153\n\33\f\33\16\33\u0156\13\33\3\34\3\34\3\34\3\34\3\34"+
		"\3\34\3\34\3\34\3\34\7\34\u0161\n\34\f\34\16\34\u0164\13\34\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\7\35"+
		"\u0175\n\35\f\35\16\35\u0178\13\35\3\36\3\36\3\36\3\36\3\36\3\36\3\36"+
		"\3\36\3\36\7\36\u0183\n\36\f\36\16\36\u0186\13\36\3\37\3\37\3\37\3\37"+
		"\3\37\3\37\3\37\3\37\3\37\7\37\u0191\n\37\f\37\16\37\u0194\13\37\3 \3"+
		" \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \7 \u01a5\n \f \16 \u01a8\13 "+
		"\3!\3!\5!\u01ac\n!\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\5\"\u01b8\n"+
		"\"\3#\3#\3$\3$\3$\3$\3$\3$\3$\3$\5$\u01c4\n$\3$\3$\3$\3$\3$\5$\u01cb\n"+
		"$\3$\3$\3$\3$\3$\7$\u01d2\n$\f$\16$\u01d5\13$\3%\3%\3%\3%\3%\3%\7%\u01dd"+
		"\n%\f%\16%\u01e0\13%\3&\3&\3&\3&\3&\3&\3&\3&\5&\u01ea\n&\3\'\3\'\3\'\3"+
		"\'\3\'\3\'\7\'\u01f2\n\'\f\'\16\'\u01f5\13\'\3(\3(\3(\3)\3)\3)\3)\3)\3"+
		")\3)\3)\5)\u0202\n)\3*\3*\5*\u0206\n*\3*\3*\3*\3*\3*\5*\u020d\n*\3*\7"+
		"*\u0210\n*\f*\16*\u0213\13*\3+\3+\3+\3,\3,\3,\3,\3,\7,\u021d\n,\f,\16"+
		",\u0220\13,\3-\3-\3-\3-\3.\3.\3/\3/\3/\3\60\3\60\3\60\5\60\u022e\n\60"+
		"\3\60\3\60\3\61\3\61\3\61\3\62\3\62\3\62\3\62\5\62\u0239\n\62\3\63\3\63"+
		"\5\63\u023d\n\63\3\63\3\63\3\64\3\64\3\64\3\64\3\64\7\64\u0246\n\64\f"+
		"\64\16\64\u0249\13\64\3\65\3\65\3\65\5\65\u024e\n\65\3\66\3\66\3\66\3"+
		"\66\3\66\3\66\3\66\3\66\5\66\u0258\n\66\3\67\5\67\u025b\n\67\3\67\3\67"+
		"\38\38\38\38\38\38\38\58\u0266\n8\39\39\39\39\39\39\3:\5:\u026f\n:\3:"+
		"\5:\u0272\n:\3:\5:\u0275\n:\3:\3:\5:\u0279\n:\3;\3;\3;\3;\5;\u027f\n;"+
		"\3<\3<\3=\3=\3>\3>\3>\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?"+
		"\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?"+
		"\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?"+
		"\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?"+
		"\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?"+
		"\3?\5?\u02f5\n?\3@\3@\3@\3@\3@\3@\3@\3@\3A\3A\3B\3B\3C\3C\3D\3D\3E\3E"+
		"\3F\3F\3F\3F\3F\3F\5F\u030f\nF\3G\3G\3G\3G\3H\3H\3H\3H\3H\3H\5H\u031b"+
		"\nH\3I\3I\3I\3I\3I\3I\3I\3I\3J\3J\3J\3J\3J\3J\5J\u032b\nJ\3K\3K\3K\3K"+
		"\3K\3K\3K\3K\3K\3K\3K\3K\5K\u0339\nK\3L\7L\u033c\nL\fL\16L\u033f\13L\3"+
		"M\3M\3M\5M\u0344\nM\3N\3N\3N\3N\3N\3N\3N\3N\3O\7O\u034f\nO\fO\16O\u0352"+
		"\13O\3P\3P\3P\5P\u0357\nP\3Q\3Q\3Q\3Q\7Q\u035d\nQ\fQ\16Q\u0360\13Q\3R"+
		"\3R\3R\2\26\32\34\"*,.\60\62\64\668:<>FHLRVfS\2\4\6\b\n\f\16\20\22\24"+
		"\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtv"+
		"xz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094"+
		"\u0096\u0098\u009a\u009c\u009e\u00a0\u00a2\2\n\3\2\3\4\3\2\16\20\4\2\b"+
		"\t\22\22\3\2\25\26\3\2\27\30\4\2\61\61IL\5\2\64\65==CF\3\2;<\2\u037e\2"+
		"\u00a7\3\2\2\2\4\u00af\3\2\2\2\6\u00b1\3\2\2\2\b\u00b7\3\2\2\2\n\u00b9"+
		"\3\2\2\2\f\u00bc\3\2\2\2\16\u00c2\3\2\2\2\20\u00ca\3\2\2\2\22\u00cc\3"+
		"\2\2\2\24\u00ce\3\2\2\2\26\u00d0\3\2\2\2\30\u00d2\3\2\2\2\32\u00d4\3\2"+
		"\2\2\34\u00df\3\2\2\2\36\u00ef\3\2\2\2 \u00f1\3\2\2\2\"\u00f5\3\2\2\2"+
		"$\u0109\3\2\2\2&\u010b\3\2\2\2(\u010d\3\2\2\2*\u0115\3\2\2\2,\u0120\3"+
		"\2\2\2.\u012b\3\2\2\2\60\u0136\3\2\2\2\62\u0141\3\2\2\2\64\u014c\3\2\2"+
		"\2\66\u0157\3\2\2\28\u0165\3\2\2\2:\u0179\3\2\2\2<\u0187\3\2\2\2>\u0195"+
		"\3\2\2\2@\u01ab\3\2\2\2B\u01b7\3\2\2\2D\u01b9\3\2\2\2F\u01bb\3\2\2\2H"+
		"\u01d6\3\2\2\2J\u01e9\3\2\2\2L\u01eb\3\2\2\2N\u01f6\3\2\2\2P\u0201\3\2"+
		"\2\2R\u0203\3\2\2\2T\u0214\3\2\2\2V\u0217\3\2\2\2X\u0221\3\2\2\2Z\u0225"+
		"\3\2\2\2\\\u0227\3\2\2\2^\u022a\3\2\2\2`\u0231\3\2\2\2b\u0238\3\2\2\2"+
		"d\u023a\3\2\2\2f\u0240\3\2\2\2h\u024d\3\2\2\2j\u0257\3\2\2\2l\u025a\3"+
		"\2\2\2n\u025e\3\2\2\2p\u0267\3\2\2\2r\u026e\3\2\2\2t\u027e\3\2\2\2v\u0280"+
		"\3\2\2\2x\u0282\3\2\2\2z\u0284\3\2\2\2|\u02f4\3\2\2\2~\u02f6\3\2\2\2\u0080"+
		"\u02fe\3\2\2\2\u0082\u0300\3\2\2\2\u0084\u0302\3\2\2\2\u0086\u0304\3\2"+
		"\2\2\u0088\u0306\3\2\2\2\u008a\u030e\3\2\2\2\u008c\u0310\3\2\2\2\u008e"+
		"\u031a\3\2\2\2\u0090\u031c\3\2\2\2\u0092\u032a\3\2\2\2\u0094\u032c\3\2"+
		"\2\2\u0096\u033d\3\2\2\2\u0098\u0343\3\2\2\2\u009a\u0345\3\2\2\2\u009c"+
		"\u0350\3\2\2\2\u009e\u0356\3\2\2\2\u00a0\u0358\3\2\2\2\u00a2\u0361\3\2"+
		"\2\2\u00a4\u00a6\5\4\3\2\u00a5\u00a4\3\2\2\2\u00a6\u00a9\3\2\2\2\u00a7"+
		"\u00a5\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8\3\3\2\2\2\u00a9\u00a7\3\2\2\2"+
		"\u00aa\u00b0\5\6\4\2\u00ab\u00b0\5\f\7\2\u00ac\u00b0\5\16\b\2\u00ad\u00b0"+
		"\5\\/\2\u00ae\u00b0\5`\61\2\u00af\u00aa\3\2\2\2\u00af\u00ab\3\2\2\2\u00af"+
		"\u00ac\3\2\2\2\u00af\u00ad\3\2\2\2\u00af\u00ae\3\2\2\2\u00b0\5\3\2\2\2"+
		"\u00b1\u00b2\7\7\2\2\u00b2\u00b3\5\b\5\2\u00b3\u00b4\7X\2\2\u00b4\u00b5"+
		"\5\n\6\2\u00b5\u00b6\5\b\5\2\u00b6\7\3\2\2\2\u00b7\u00b8\t\2\2\2\u00b8"+
		"\t\3\2\2\2\u00b9\u00ba\t\3\2\2\u00ba\13\3\2\2\2\u00bb\u00bd\5\20\t\2\u00bc"+
		"\u00bb\3\2\2\2\u00bc\u00bd\3\2\2\2\u00bd\u00be\3\2\2\2\u00be\u00bf\5\32"+
		"\16\2\u00bf\u00c0\7Q\2\2\u00c0\r\3\2\2\2\u00c1\u00c3\5\22\n\2\u00c2\u00c1"+
		"\3\2\2\2\u00c2\u00c3\3\2\2\2\u00c3\u00c4\3\2\2\2\u00c4\u00c5\5\34\17\2"+
		"\u00c5\u00c6\7Q\2\2\u00c6\17\3\2\2\2\u00c7\u00cb\5\26\f\2\u00c8\u00cb"+
		"\5\24\13\2\u00c9\u00cb\5\30\r\2\u00ca\u00c7\3\2\2\2\u00ca\u00c8\3\2\2"+
		"\2\u00ca\u00c9\3\2\2\2\u00cb\21\3\2\2\2\u00cc\u00cd\7\6\2\2\u00cd\23\3"+
		"\2\2\2\u00ce\u00cf\t\4\2\2\u00cf\25\3\2\2\2\u00d0\u00d1\t\5\2\2\u00d1"+
		"\27\3\2\2\2\u00d2\u00d3\t\6\2\2\u00d3\31\3\2\2\2\u00d4\u00d5\b\16\1\2"+
		"\u00d5\u00d6\5\36\20\2\u00d6\u00dc\3\2\2\2\u00d7\u00d8\f\3\2\2\u00d8\u00d9"+
		"\7R\2\2\u00d9\u00db\5\36\20\2\u00da\u00d7\3\2\2\2\u00db\u00de\3\2\2\2"+
		"\u00dc\u00da\3\2\2\2\u00dc\u00dd\3\2\2\2\u00dd\33\3\2\2\2\u00de\u00dc"+
		"\3\2\2\2\u00df\u00e0\b\17\1\2\u00e0\u00e1\5 \21\2\u00e1\u00e7\3\2\2\2"+
		"\u00e2\u00e3\f\3\2\2\u00e3\u00e4\7R\2\2\u00e4\u00e6\5 \21\2\u00e5\u00e2"+
		"\3\2\2\2\u00e6\u00e9\3\2\2\2\u00e7\u00e5\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8"+
		"\35\3\2\2\2\u00e9\u00e7\3\2\2\2\u00ea\u00f0\5\"\22\2\u00eb\u00ec\5\"\22"+
		"\2\u00ec\u00ed\7\61\2\2\u00ed\u00ee\5P)\2\u00ee\u00f0\3\2\2\2\u00ef\u00ea"+
		"\3\2\2\2\u00ef\u00eb\3\2\2\2\u00f0\37\3\2\2\2\u00f1\u00f2\5\"\22\2\u00f2"+
		"\u00f3\7\61\2\2\u00f3\u00f4\5P)\2\u00f4!\3\2\2\2\u00f5\u00f6\b\22\1\2"+
		"\u00f6\u00f7\7X\2\2\u00f7\u00ff\3\2\2\2\u00f8\u00f9\f\3\2\2\u00f9\u00fa"+
		"\7V\2\2\u00fa\u00fb\5$\23\2\u00fb\u00fc\7W\2\2\u00fc\u00fe\3\2\2\2\u00fd"+
		"\u00f8\3\2\2\2\u00fe\u0101\3\2\2\2\u00ff\u00fd\3\2\2\2\u00ff\u0100\3\2"+
		"\2\2\u0100#\3\2\2\2\u0101\u00ff\3\2\2\2\u0102\u010a\5(\25\2\u0103\u0104"+
		"\5B\"\2\u0104\u0105\5&\24\2\u0105\u0106\5$\23\2\u0106\u010a\3\2\2\2\u0107"+
		"\u010a\7Z\2\2\u0108\u010a\7Y\2\2\u0109\u0102\3\2\2\2\u0109\u0103\3\2\2"+
		"\2\u0109\u0107\3\2\2\2\u0109\u0108\3\2\2\2\u010a%\3\2\2\2\u010b\u010c"+
		"\t\7\2\2\u010c\'\3\2\2\2\u010d\u0113\5,\27\2\u010e\u010f\7@\2\2\u010f"+
		"\u0110\5*\26\2\u0110\u0111\7\66\2\2\u0111\u0112\5(\25\2\u0112\u0114\3"+
		"\2\2\2\u0113\u010e\3\2\2\2\u0113\u0114\3\2\2\2\u0114)\3\2\2\2\u0115\u0116"+
		"\b\26\1\2\u0116\u0117\5$\23\2\u0117\u011d\3\2\2\2\u0118\u0119\f\3\2\2"+
		"\u0119\u011a\7R\2\2\u011a\u011c\5$\23\2\u011b\u0118\3\2\2\2\u011c\u011f"+
		"\3\2\2\2\u011d\u011b\3\2\2\2\u011d\u011e\3\2\2\2\u011e+\3\2\2\2\u011f"+
		"\u011d\3\2\2\2\u0120\u0121\b\27\1\2\u0121\u0122\5.\30\2\u0122\u0128\3"+
		"\2\2\2\u0123\u0124\f\3\2\2\u0124\u0125\7<\2\2\u0125\u0127\5.\30\2\u0126"+
		"\u0123\3\2\2\2\u0127\u012a\3\2\2\2\u0128\u0126\3\2\2\2\u0128\u0129\3\2"+
		"\2\2\u0129-\3\2\2\2\u012a\u0128\3\2\2\2\u012b\u012c\b\30\1\2\u012c\u012d"+
		"\5\60\31\2\u012d\u0133\3\2\2\2\u012e\u012f\f\3\2\2\u012f\u0130\7;\2\2"+
		"\u0130\u0132\5\60\31\2\u0131\u012e\3\2\2\2\u0132\u0135\3\2\2\2\u0133\u0131"+
		"\3\2\2\2\u0133\u0134\3\2\2\2\u0134/\3\2\2\2\u0135\u0133\3\2\2\2\u0136"+
		"\u0137\b\31\1\2\u0137\u0138\5\62\32\2\u0138\u013e\3\2\2\2\u0139\u013a"+
		"\f\3\2\2\u013a\u013b\7?\2\2\u013b\u013d\5\62\32\2\u013c\u0139\3\2\2\2"+
		"\u013d\u0140\3\2\2\2\u013e\u013c\3\2\2\2\u013e\u013f\3\2\2\2\u013f\61"+
		"\3\2\2\2\u0140\u013e\3\2\2\2\u0141\u0142\b\32\1\2\u0142\u0143\5\64\33"+
		"\2\u0143\u0149\3\2\2\2\u0144\u0145\f\3\2\2\u0145\u0146\7>\2\2\u0146\u0148"+
		"\5\64\33\2\u0147\u0144\3\2\2\2\u0148\u014b\3\2\2\2\u0149\u0147\3\2\2\2"+
		"\u0149\u014a\3\2\2\2\u014a\63\3\2\2\2\u014b\u0149\3\2\2\2\u014c\u014d"+
		"\b\33\1\2\u014d\u014e\5\66\34\2\u014e\u0154\3\2\2\2\u014f\u0150\f\3\2"+
		"\2\u0150\u0151\7=\2\2\u0151\u0153\5\66\34\2\u0152\u014f\3\2\2\2\u0153"+
		"\u0156\3\2\2\2\u0154\u0152\3\2\2\2\u0154\u0155\3\2\2\2\u0155\65\3\2\2"+
		"\2\u0156\u0154\3\2\2\2\u0157\u0158\b\34\1\2\u0158\u0159\58\35\2\u0159"+
		"\u0162\3\2\2\2\u015a\u015b\f\4\2\2\u015b\u015c\7\67\2\2\u015c\u0161\5"+
		"8\35\2\u015d\u015e\f\3\2\2\u015e\u015f\7:\2\2\u015f\u0161\58\35\2\u0160"+
		"\u015a\3\2\2\2\u0160\u015d\3\2\2\2\u0161\u0164\3\2\2\2\u0162\u0160\3\2"+
		"\2\2\u0162\u0163\3\2\2\2\u0163\67\3\2\2\2\u0164\u0162\3\2\2\2\u0165\u0166"+
		"\b\35\1\2\u0166\u0167\5:\36\2\u0167\u0176\3\2\2\2\u0168\u0169\f\6\2\2"+
		"\u0169\u016a\7\62\2\2\u016a\u0175\5:\36\2\u016b\u016c\f\5\2\2\u016c\u016d"+
		"\7\63\2\2\u016d\u0175\5:\36\2\u016e\u016f\f\4\2\2\u016f\u0170\79\2\2\u0170"+
		"\u0175\5:\36\2\u0171\u0172\f\3\2\2\u0172\u0173\78\2\2\u0173\u0175\5:\36"+
		"\2\u0174\u0168\3\2\2\2\u0174\u016b\3\2\2\2\u0174\u016e\3\2\2\2\u0174\u0171"+
		"\3\2\2\2\u0175\u0178\3\2\2\2\u0176\u0174\3\2\2\2\u0176\u0177\3\2\2\2\u0177"+
		"9\3\2\2\2\u0178\u0176\3\2\2\2\u0179\u017a\b\36\1\2\u017a\u017b\5<\37\2"+
		"\u017b\u0184\3\2\2\2\u017c\u017d\f\4\2\2\u017d\u017e\7M\2\2\u017e\u0183"+
		"\5<\37\2\u017f\u0180\f\3\2\2\u0180\u0181\7N\2\2\u0181\u0183\5<\37\2\u0182"+
		"\u017c\3\2\2\2\u0182\u017f\3\2\2\2\u0183\u0186\3\2\2\2\u0184\u0182\3\2"+
		"\2\2\u0184\u0185\3\2\2\2\u0185;\3\2\2\2\u0186\u0184\3\2\2\2\u0187\u0188"+
		"\b\37\1\2\u0188\u0189\5> \2\u0189\u0192\3\2\2\2\u018a\u018b\f\4\2\2\u018b"+
		"\u018c\7C\2\2\u018c\u0191\5> \2\u018d\u018e\f\3\2\2\u018e\u018f\7D\2\2"+
		"\u018f\u0191\5> \2\u0190\u018a\3\2\2\2\u0190\u018d\3\2\2\2\u0191\u0194"+
		"\3\2\2\2\u0192\u0190\3\2\2\2\u0192\u0193\3\2\2\2\u0193=\3\2\2\2\u0194"+
		"\u0192\3\2\2\2\u0195\u0196\b \1\2\u0196\u0197\5@!\2\u0197\u01a6\3\2\2"+
		"\2\u0198\u0199\f\6\2\2\u0199\u019a\7E\2\2\u019a\u01a5\5@!\2\u019b\u019c"+
		"\f\5\2\2\u019c\u019d\7G\2\2\u019d\u01a5\5@!\2\u019e\u019f\f\4\2\2\u019f"+
		"\u01a0\7H\2\2\u01a0\u01a5\5@!\2\u01a1\u01a2\f\3\2\2\u01a2\u01a3\7F\2\2"+
		"\u01a3\u01a5\5@!\2\u01a4\u0198\3\2\2\2\u01a4\u019b\3\2\2\2\u01a4\u019e"+
		"\3\2\2\2\u01a4\u01a1\3\2\2\2\u01a5\u01a8\3\2\2\2\u01a6\u01a4\3\2\2\2\u01a6"+
		"\u01a7\3\2\2\2\u01a7?\3\2\2\2\u01a8\u01a6\3\2\2\2\u01a9\u01ac\5B\"\2\u01aa"+
		"\u01ac\7Z\2\2\u01ab\u01a9\3\2\2\2\u01ab\u01aa\3\2\2\2\u01acA\3\2\2\2\u01ad"+
		"\u01b8\5F$\2\u01ae\u01af\7A\2\2\u01af\u01b8\5B\"\2\u01b0\u01b1\7B\2\2"+
		"\u01b1\u01b8\5B\"\2\u01b2\u01b3\5D#\2\u01b3\u01b4\5@!\2\u01b4\u01b8\3"+
		"\2\2\2\u01b5\u01b6\7;\2\2\u01b6\u01b8\7X\2\2\u01b7\u01ad\3\2\2\2\u01b7"+
		"\u01ae\3\2\2\2\u01b7\u01b0\3\2\2\2\u01b7\u01b2\3\2\2\2\u01b7\u01b5\3\2"+
		"\2\2\u01b8C\3\2\2\2\u01b9\u01ba\t\b\2\2\u01baE\3\2\2\2\u01bb\u01bc\b$"+
		"\1\2\u01bc\u01bd\5J&\2\u01bd\u01d3\3\2\2\2\u01be\u01bf\f\6\2\2\u01bf\u01c0"+
		"\7V\2\2\u01c0\u01c3\5*\26\2\u01c1\u01c2\7\66\2\2\u01c2\u01c4\5*\26\2\u01c3"+
		"\u01c1\3\2\2\2\u01c3\u01c4\3\2\2\2\u01c4\u01c5\3\2\2\2\u01c5\u01c6\7W"+
		"\2\2\u01c6\u01d2\3\2\2\2\u01c7\u01c8\f\5\2\2\u01c8\u01ca\7T\2\2\u01c9"+
		"\u01cb\5H%\2\u01ca\u01c9\3\2\2\2\u01ca\u01cb\3\2\2\2\u01cb\u01cc\3\2\2"+
		"\2\u01cc\u01d2\7U\2\2\u01cd\u01ce\f\4\2\2\u01ce\u01d2\7A\2\2\u01cf\u01d0"+
		"\f\3\2\2\u01d0\u01d2\7B\2\2\u01d1\u01be\3\2\2\2\u01d1\u01c7\3\2\2\2\u01d1"+
		"\u01cd\3\2\2\2\u01d1\u01cf\3\2\2\2\u01d2\u01d5\3\2\2\2\u01d3\u01d1\3\2"+
		"\2\2\u01d3\u01d4\3\2\2\2\u01d4G\3\2\2\2\u01d5\u01d3\3\2\2\2\u01d6\u01d7"+
		"\b%\1\2\u01d7\u01d8\5$\23\2\u01d8\u01de\3\2\2\2\u01d9\u01da\f\3\2\2\u01da"+
		"\u01db\7R\2\2\u01db\u01dd\5$\23\2\u01dc\u01d9\3\2\2\2\u01dd\u01e0\3\2"+
		"\2\2\u01de\u01dc\3\2\2\2\u01de\u01df\3\2\2\2\u01dfI\3\2\2\2\u01e0\u01de"+
		"\3\2\2\2\u01e1\u01ea\7X\2\2\u01e2\u01ea\7Y\2\2\u01e3\u01e4\7T\2\2\u01e4"+
		"\u01e5\5*\26\2\u01e5\u01e6\7U\2\2\u01e6\u01ea\3\2\2\2\u01e7\u01ea\7\23"+
		"\2\2\u01e8\u01ea\7\5\2\2\u01e9\u01e1\3\2\2\2\u01e9\u01e2\3\2\2\2\u01e9"+
		"\u01e3\3\2\2\2\u01e9\u01e7\3\2\2\2\u01e9\u01e8\3\2\2\2\u01eaK\3\2\2\2"+
		"\u01eb\u01ec\b\'\1\2\u01ec\u01ed\5N(\2\u01ed\u01f3\3\2\2\2\u01ee\u01ef"+
		"\f\3\2\2\u01ef\u01f0\7R\2\2\u01f0\u01f2\5N(\2\u01f1\u01ee\3\2\2\2\u01f2"+
		"\u01f5\3\2\2\2\u01f3\u01f1\3\2\2\2\u01f3\u01f4\3\2\2\2\u01f4M\3\2\2\2"+
		"\u01f5\u01f3\3\2\2\2\u01f6\u01f7\5\20\t\2\u01f7\u01f8\5\"\22\2\u01f8O"+
		"\3\2\2\2\u01f9\u0202\5$\23\2\u01fa\u01fb\7O\2\2\u01fb\u01fc\5R*\2\u01fc"+
		"\u01fd\7R\2\2\u01fd\u01fe\5R*\2\u01fe\u01ff\3\2\2\2\u01ff\u0200\7P\2\2"+
		"\u0200\u0202\3\2\2\2\u0201\u01f9\3\2\2\2\u0201\u01fa\3\2\2\2\u0202Q\3"+
		"\2\2\2\u0203\u0205\b*\1\2\u0204\u0206\5T+\2\u0205\u0204\3\2\2\2\u0205"+
		"\u0206\3\2\2\2\u0206\u0207\3\2\2\2\u0207\u0208\5P)\2\u0208\u0211\3\2\2"+
		"\2\u0209\u020a\f\3\2\2\u020a\u020c\7R\2\2\u020b\u020d\5T+\2\u020c\u020b"+
		"\3\2\2\2\u020c\u020d\3\2\2\2\u020d\u020e\3\2\2\2\u020e\u0210\5P)\2\u020f"+
		"\u0209\3\2\2\2\u0210\u0213\3\2\2\2\u0211\u020f\3\2\2\2\u0211\u0212\3\2"+
		"\2\2\u0212S\3\2\2\2\u0213\u0211\3\2\2\2\u0214\u0215\5V,\2\u0215\u0216"+
		"\7\61\2\2\u0216U\3\2\2\2\u0217\u0218\b,\1\2\u0218\u0219\5X-\2\u0219\u021e"+
		"\3\2\2\2\u021a\u021b\f\3\2\2\u021b\u021d\5X-\2\u021c\u021a\3\2\2\2\u021d"+
		"\u0220\3\2\2\2\u021e\u021c\3\2\2\2\u021e\u021f\3\2\2\2\u021fW\3\2\2\2"+
		"\u0220\u021e\3\2\2\2\u0221\u0222\7V\2\2\u0222\u0223\5Z.\2\u0223\u0224"+
		"\7W\2\2\u0224Y\3\2\2\2\u0225\u0226\5(\25\2\u0226[\3\2\2\2\u0227\u0228"+
		"\5^\60\2\u0228\u0229\7Q\2\2\u0229]\3\2\2\2\u022a\u022b\7X\2\2\u022b\u022d"+
		"\7T\2\2\u022c\u022e\5L\'\2\u022d\u022c\3\2\2\2\u022d\u022e\3\2\2\2\u022e"+
		"\u022f\3\2\2\2\u022f\u0230\7U\2\2\u0230_\3\2\2\2\u0231\u0232\5^\60\2\u0232"+
		"\u0233\5d\63\2\u0233a\3\2\2\2\u0234\u0239\5\f\7\2\u0235\u0236\5\f\7\2"+
		"\u0236\u0237\5b\62\2\u0237\u0239\3\2\2\2\u0238\u0234\3\2\2\2\u0238\u0235"+
		"\3\2\2\2\u0239c\3\2\2\2\u023a\u023c\7O\2\2\u023b\u023d\5f\64\2\u023c\u023b"+
		"\3\2\2\2\u023c\u023d\3\2\2\2\u023d\u023e\3\2\2\2\u023e\u023f\7P\2\2\u023f"+
		"e\3\2\2\2\u0240\u0241\b\64\1\2\u0241\u0242\5h\65\2\u0242\u0247\3\2\2\2"+
		"\u0243\u0244\f\3\2\2\u0244\u0246\5h\65\2\u0245\u0243\3\2\2\2\u0246\u0249"+
		"\3\2\2\2\u0247\u0245\3\2\2\2\u0247\u0248\3\2\2\2\u0248g\3\2\2\2\u0249"+
		"\u0247\3\2\2\2\u024a\u024e\5j\66\2\u024b\u024e\5\f\7\2\u024c\u024e\5\16"+
		"\b\2\u024d\u024a\3\2\2\2\u024d\u024b\3\2\2\2\u024d\u024c\3\2\2\2\u024e"+
		"i\3\2\2\2\u024f\u0258\5l\67\2\u0250\u0258\5d\63\2\u0251\u0258\5n8\2\u0252"+
		"\u0258\5p9\2\u0253\u0258\5z>\2\u0254\u0258\5\u0090I\2\u0255\u0258\5\u0094"+
		"K\2\u0256\u0258\5\u009aN\2\u0257\u024f\3\2\2\2\u0257\u0250\3\2\2\2\u0257"+
		"\u0251\3\2\2\2\u0257\u0252\3\2\2\2\u0257\u0253\3\2\2\2\u0257\u0254\3\2"+
		"\2\2\u0257\u0255\3\2\2\2\u0257\u0256\3\2\2\2\u0258k\3\2\2\2\u0259\u025b"+
		"\5*\26\2\u025a\u0259\3\2\2\2\u025a\u025b\3\2\2\2\u025b\u025c\3\2\2\2\u025c"+
		"\u025d\7Q\2\2\u025dm\3\2\2\2\u025e\u025f\7\13\2\2\u025f\u0260\7T\2\2\u0260"+
		"\u0261\5*\26\2\u0261\u0262\7U\2\2\u0262\u0265\5j\66\2\u0263\u0264\7\f"+
		"\2\2\u0264\u0266\5j\66\2\u0265\u0263\3\2\2\2\u0265\u0266\3\2\2\2\u0266"+
		"o\3\2\2\2\u0267\u0268\7\r\2\2\u0268\u0269\7T\2\2\u0269\u026a\5r:\2\u026a"+
		"\u026b\7U\2\2\u026b\u026c\5j\66\2\u026cq\3\2\2\2\u026d\u026f\5t;\2\u026e"+
		"\u026d\3\2\2\2\u026e\u026f\3\2\2\2\u026f\u0271\3\2\2\2\u0270\u0272\7\66"+
		"\2\2\u0271\u0270\3\2\2\2\u0271\u0272\3\2\2\2\u0272\u0274\3\2\2\2\u0273"+
		"\u0275\5v<\2\u0274\u0273\3\2\2\2\u0274\u0275\3\2\2\2\u0275\u0276\3\2\2"+
		"\2\u0276\u0278\7\66\2\2\u0277\u0279\5x=\2\u0278\u0277\3\2\2\2\u0278\u0279"+
		"\3\2\2\2\u0279s\3\2\2\2\u027a\u027f\5J&\2\u027b\u027c\7X\2\2\u027c\u027d"+
		"\7\61\2\2\u027d\u027f\5*\26\2\u027e\u027a\3\2\2\2\u027e\u027b\3\2\2\2"+
		"\u027fu\3\2\2\2\u0280\u0281\5$\23\2\u0281w\3\2\2\2\u0282\u0283\5$\23\2"+
		"\u0283y\3\2\2\2\u0284\u0285\5|?\2\u0285\u0286\7Q\2\2\u0286{\3\2\2\2\u0287"+
		"\u0288\7\31\2\2\u0288\u0289\7T\2\2\u0289\u028a\5\u008aF\2\u028a\u028b"+
		"\7U\2\2\u028b\u02f5\3\2\2\2\u028c\u028d\7\32\2\2\u028d\u028e\7T\2\2\u028e"+
		"\u028f\5\u008aF\2\u028f\u0290\7U\2\2\u0290\u02f5\3\2\2\2\u0291\u0292\7"+
		"\33\2\2\u0292\u0293\7T\2\2\u0293\u0294\5\u008aF\2\u0294\u0295\7U\2\2\u0295"+
		"\u02f5\3\2\2\2\u0296\u0297\7\34\2\2\u0297\u0298\7T\2\2\u0298\u0299\5\u008a"+
		"F\2\u0299\u029a\7U\2\2\u029a\u02f5\3\2\2\2\u029b\u029c\7\35\2\2\u029c"+
		"\u029d\7T\2\2\u029d\u029e\5\u008aF\2\u029e\u029f\7U\2\2\u029f\u02f5\3"+
		"\2\2\2\u02a0\u02a1\7\36\2\2\u02a1\u02a2\7T\2\2\u02a2\u02a3\5\u008aF\2"+
		"\u02a3\u02a4\7U\2\2\u02a4\u02f5\3\2\2\2\u02a5\u02a6\7\37\2\2\u02a6\u02a7"+
		"\7T\2\2\u02a7\u02a8\5\u008aF\2\u02a8\u02a9\7U\2\2\u02a9\u02f5\3\2\2\2"+
		"\u02aa\u02ab\7 \2\2\u02ab\u02ac\7T\2\2\u02ac\u02ad\5\u008aF\2\u02ad\u02ae"+
		"\7U\2\2\u02ae\u02f5\3\2\2\2\u02af\u02b0\7!\2\2\u02b0\u02b1\7T\2\2\u02b1"+
		"\u02b2\5\u008aF\2\u02b2\u02b3\7U\2\2\u02b3\u02f5\3\2\2\2\u02b4\u02b5\7"+
		"\"\2\2\u02b5\u02b6\7T\2\2\u02b6\u02b7\5\u008aF\2\u02b7\u02b8\7U\2\2\u02b8"+
		"\u02f5\3\2\2\2\u02b9\u02ba\7#\2\2\u02ba\u02bb\7T\2\2\u02bb\u02bc\5\u008a"+
		"F\2\u02bc\u02bd\7R\2\2\u02bd\u02be\5~@\2\u02be\u02bf\7U\2\2\u02bf\u02f5"+
		"\3\2\2\2\u02c0\u02c1\7$\2\2\u02c1\u02c2\7T\2\2\u02c2\u02c3\5\u008aF\2"+
		"\u02c3\u02c4\7R\2\2\u02c4\u02c5\5*\26\2\u02c5\u02c6\7U\2\2\u02c6\u02f5"+
		"\3\2\2\2\u02c7\u02c8\7%\2\2\u02c8\u02c9\7T\2\2\u02c9\u02ca\5\u008aF\2"+
		"\u02ca\u02cb\7R\2\2\u02cb\u02cc\5*\26\2\u02cc\u02cd\7U\2\2\u02cd\u02f5"+
		"\3\2\2\2\u02ce\u02cf\7&\2\2\u02cf\u02d0\7T\2\2\u02d0\u02d1\5\u008aF\2"+
		"\u02d1\u02d2\7R\2\2\u02d2\u02d3\5*\26\2\u02d3\u02d4\7U\2\2\u02d4\u02f5"+
		"\3\2\2\2\u02d5\u02d6\7\'\2\2\u02d6\u02d7\7T\2\2\u02d7\u02d8\5\u008cG\2"+
		"\u02d8\u02d9\7U\2\2\u02d9\u02f5\3\2\2\2\u02da\u02db\7(\2\2\u02db\u02dc"+
		"\7T\2\2\u02dc\u02dd\5\u008cG\2\u02dd\u02de\7U\2\2\u02de\u02f5\3\2\2\2"+
		"\u02df\u02e0\7*\2\2\u02e0\u02e1\7T\2\2\u02e1\u02e2\5\u008cG\2\u02e2\u02e3"+
		"\7R\2\2\u02e3\u02e4\5~@\2\u02e4\u02e5\7U\2\2\u02e5\u02f5\3\2\2\2\u02e6"+
		"\u02e7\7+\2\2\u02e7\u02e8\7T\2\2\u02e8\u02e9\5\u008cG\2\u02e9\u02ea\7"+
		"R\2\2\u02ea\u02eb\5\u0088E\2\u02eb\u02ec\7U\2\2\u02ec\u02f5\3\2\2\2\u02ed"+
		"\u02ee\7)\2\2\u02ee\u02ef\7T\2\2\u02ef\u02f0\5\u008cG\2\u02f0\u02f1\7"+
		"R\2\2\u02f1\u02f2\5\u0088E\2\u02f2\u02f3\7U\2\2\u02f3\u02f5\3\2\2\2\u02f4"+
		"\u0287\3\2\2\2\u02f4\u028c\3\2\2\2\u02f4\u0291\3\2\2\2\u02f4\u0296\3\2"+
		"\2\2\u02f4\u029b\3\2\2\2\u02f4\u02a0\3\2\2\2\u02f4\u02a5\3\2\2\2\u02f4"+
		"\u02aa\3\2\2\2\u02f4\u02af\3\2\2\2\u02f4\u02b4\3\2\2\2\u02f4\u02b9\3\2"+
		"\2\2\u02f4\u02c0\3\2\2\2\u02f4\u02c7\3\2\2\2\u02f4\u02ce\3\2\2\2\u02f4"+
		"\u02d5\3\2\2\2\u02f4\u02da\3\2\2\2\u02f4\u02df\3\2\2\2\u02f4\u02e6\3\2"+
		"\2\2\u02f4\u02ed\3\2\2\2\u02f5}\3\2\2\2\u02f6\u02f7\5\u0080A\2\u02f7\u02f8"+
		"\7R\2\2\u02f8\u02f9\5\u0082B\2\u02f9\u02fa\7R\2\2\u02fa\u02fb\5\u0084"+
		"C\2\u02fb\u02fc\7R\2\2\u02fc\u02fd\5\u0086D\2\u02fd\177\3\2\2\2\u02fe"+
		"\u02ff\5*\26\2\u02ff\u0081\3\2\2\2\u0300\u0301\5*\26\2\u0301\u0083\3\2"+
		"\2\2\u0302\u0303\5*\26\2\u0303\u0085\3\2\2\2\u0304\u0305\5*\26\2\u0305"+
		"\u0087\3\2\2\2\u0306\u0307\5*\26\2\u0307\u0089\3\2\2\2\u0308\u0309\7X"+
		"\2\2\u0309\u030a\7V\2\2\u030a\u030b\5*\26\2\u030b\u030c\7W\2\2\u030c\u030f"+
		"\3\2\2\2\u030d\u030f\7X\2\2\u030e\u0308\3\2\2\2\u030e\u030d\3\2\2\2\u030f"+
		"\u008b\3\2\2\2\u0310\u0311\5\u008aF\2\u0311\u0312\7R\2\2\u0312\u0313\5"+
		"\u008eH\2\u0313\u008d\3\2\2\2\u0314\u0315\7X\2\2\u0315\u0316\7V\2\2\u0316"+
		"\u0317\5*\26\2\u0317\u0318\7W\2\2\u0318\u031b\3\2\2\2\u0319\u031b\7X\2"+
		"\2\u031a\u0314\3\2\2\2\u031a\u0319\3\2\2\2\u031b\u008f\3\2\2\2\u031c\u031d"+
		"\7,\2\2\u031d\u031e\7T\2\2\u031e\u031f\5\u008aF\2\u031f\u0320\7R\2\2\u0320"+
		"\u0321\5\u0092J\2\u0321\u0322\7U\2\2\u0322\u0323\7Q\2\2\u0323\u0091\3"+
		"\2\2\2\u0324\u0325\7X\2\2\u0325\u0326\7V\2\2\u0326\u0327\5*\26\2\u0327"+
		"\u0328\7W\2\2\u0328\u032b\3\2\2\2\u0329\u032b\7X\2\2\u032a\u0324\3\2\2"+
		"\2\u032a\u0329\3\2\2\2\u032b\u0093\3\2\2\2\u032c\u032d\7-\2\2\u032d\u032e"+
		"\7T\2\2\u032e\u032f\5\u00a0Q\2\u032f\u0330\7U\2\2\u0330\u0331\7O\2\2\u0331"+
		"\u0332\5\u0096L\2\u0332\u0338\7P\2\2\u0333\u0334\7/\2\2\u0334\u0335\7"+
		"O\2\2\u0335\u0336\5\u0096L\2\u0336\u0337\7P\2\2\u0337\u0339\3\2\2\2\u0338"+
		"\u0333\3\2\2\2\u0338\u0339\3\2\2\2\u0339\u0095\3\2\2\2\u033a\u033c\5\u0098"+
		"M\2\u033b\u033a\3\2\2\2\u033c\u033f\3\2\2\2\u033d\u033b\3\2\2\2\u033d"+
		"\u033e\3\2\2\2\u033e\u0097\3\2\2\2\u033f\u033d\3\2\2\2\u0340\u0344\5j"+
		"\66\2\u0341\u0344\5\f\7\2\u0342\u0344\5\16\b\2\u0343\u0340\3\2\2\2\u0343"+
		"\u0341\3\2\2\2\u0343\u0342\3\2\2\2\u0344\u0099\3\2\2\2\u0345\u0346\7."+
		"\2\2\u0346\u0347\7T\2\2\u0347\u0348\5\u00a0Q\2\u0348\u0349\7U\2\2\u0349"+
		"\u034a\7O\2\2\u034a\u034b\5\u009cO\2\u034b\u034c\7P\2\2\u034c\u009b\3"+
		"\2\2\2\u034d\u034f\5\u009eP\2\u034e\u034d\3\2\2\2\u034f\u0352\3\2\2\2"+
		"\u0350\u034e\3\2\2\2\u0350\u0351\3\2\2\2\u0351\u009d\3\2\2\2\u0352\u0350"+
		"\3\2\2\2\u0353\u0357\5j\66\2\u0354\u0357\5\f\7\2\u0355\u0357\5\16\b\2"+
		"\u0356\u0353\3\2\2\2\u0356\u0354\3\2\2\2\u0356\u0355\3\2\2\2\u0357\u009f"+
		"\3\2\2\2\u0358\u035e\5\60\31\2\u0359\u035a\5\u00a2R\2\u035a\u035b\5\60"+
		"\31\2\u035b\u035d\3\2\2\2\u035c\u0359\3\2\2\2\u035d\u0360\3\2\2\2\u035e"+
		"\u035c\3\2\2\2\u035e\u035f\3\2\2\2\u035f\u00a1\3\2\2\2\u0360\u035e\3\2"+
		"\2\2\u0361\u0362\t\t\2\2\u0362\u00a3\3\2\2\2B\u00a7\u00af\u00bc\u00c2"+
		"\u00ca\u00dc\u00e7\u00ef\u00ff\u0109\u0113\u011d\u0128\u0133\u013e\u0149"+
		"\u0154\u0160\u0162\u0174\u0176\u0182\u0184\u0190\u0192\u01a4\u01a6\u01ab"+
		"\u01b7\u01c3\u01ca\u01d1\u01d3\u01de\u01e9\u01f3\u0201\u0205\u020c\u0211"+
		"\u021e\u022d\u0238\u023c\u0247\u024d\u0257\u025a\u0265\u026e\u0271\u0274"+
		"\u0278\u027e\u02f4\u030e\u031a\u032a\u0338\u033d\u0343\u0350\u0356\u035e";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}