// Generated from qcode.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { qcodeListener } from './qcodeListener';
import { qcodeVisitor } from './qcodeVisitor';


export class qcodeParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly PI=3;
	public static readonly LET=4;
	public static readonly INCLUDE=5;
	public static readonly INT=6;
	public static readonly FLOAT=7;
	public static readonly BOOLEAN=8;
	public static readonly IF=9;
	public static readonly ELSE=10;
	public static readonly FOR=11;
	public static readonly LIB_POSTFIX=12;
	public static readonly INC_POSTFIX=13;
	public static readonly QRUNES_POSTFIX=14;
	public static readonly VAR=15;
	public static readonly DOUBLE=16;
	public static readonly LEN=17;
	public static readonly HOST=18;
	public static readonly QVEC=19;
	public static readonly QUBIT=20;
	public static readonly CVEC=21;
	public static readonly CBIT=22;
	public static readonly H_GATE=23;
	public static readonly X_GATE=24;
	public static readonly NOT_GATE=25;
	public static readonly T_GATE=26;
	public static readonly S_GATE=27;
	public static readonly Y_GATE=28;
	public static readonly Z_GATE=29;
	public static readonly X1_GATE=30;
	public static readonly Y1_GATE=31;
	public static readonly Z1_GATE=32;
	public static readonly U4_GATE=33;
	public static readonly RX_GATE=34;
	public static readonly RY_GATE=35;
	public static readonly RZ_GATE=36;
	public static readonly CNOT_GATE=37;
	public static readonly CZ_GATE=38;
	public static readonly CR_GATE=39;
	public static readonly CU_GATE=40;
	public static readonly ISWAP=41;
	public static readonly MEASURE=42;
	public static readonly QIF=43;
	public static readonly QWHILE=44;
	public static readonly QELSE=45;
	public static readonly SHARP_SIGN=46;
	public static readonly ASSIGN=47;
	public static readonly GT=48;
	public static readonly LT=49;
	public static readonly BANG=50;
	public static readonly TILDE=51;
	public static readonly COLON=52;
	public static readonly EQUAL=53;
	public static readonly LE=54;
	public static readonly GE=55;
	public static readonly NOTEQUAL=56;
	public static readonly LOGIC_AND=57;
	public static readonly LOGIC_OR=58;
	public static readonly AND=59;
	public static readonly EXCLU=60;
	public static readonly INCLU=61;
	public static readonly QUE_MARK=62;
	public static readonly INC=63;
	public static readonly DEC=64;
	public static readonly ADD=65;
	public static readonly SUB=66;
	public static readonly MUL=67;
	public static readonly POW=68;
	public static readonly DIV=69;
	public static readonly MOD=70;
	public static readonly ADD_ASSIGN=71;
	public static readonly SUB_ASSIGN=72;
	public static readonly MUL_ASSIGN=73;
	public static readonly DIV_ASSIGN=74;
	public static readonly LSHIFT=75;
	public static readonly RSHIFT=76;
	public static readonly LBRACE=77;
	public static readonly RBRACE=78;
	public static readonly SEMI=79;
	public static readonly COMMA=80;
	public static readonly DOT=81;
	public static readonly LPAREN=82;
	public static readonly RPAREN=83;
	public static readonly LBRACK=84;
	public static readonly RBRACK=85;
	public static readonly Identifier=86;
	public static readonly Constant=87;
	public static readonly Digit_Sequence=88;
	public static readonly WhiteSpace=89;
	public static readonly SingleLineComment=90;
	public static readonly MultiLinesComment=91;
	public static readonly RULE_qrunes = 0;
	public static readonly RULE_lang_unit = 1;
	public static readonly RULE_include_declaration = 2;
	public static readonly RULE_include_sign = 3;
	public static readonly RULE_postfix = 4;
	public static readonly RULE_declaration = 5;
	public static readonly RULE_literal_declaration = 6;
	public static readonly RULE_declaration_Specifier = 7;
	public static readonly RULE_literal_type = 8;
	public static readonly RULE_primary_type = 9;
	public static readonly RULE_quantum_type = 10;
	public static readonly RULE_assist_classical_type = 11;
	public static readonly RULE_init_DeclaratorList = 12;
	public static readonly RULE_init_Literal_DeclaratorList = 13;
	public static readonly RULE_init_Declarator = 14;
	public static readonly RULE_init_Literal_Declarator = 15;
	public static readonly RULE_declarator = 16;
	public static readonly RULE_assignment_exp = 17;
	public static readonly RULE_assignment_operator = 18;
	public static readonly RULE_condition_exp = 19;
	public static readonly RULE_expression = 20;
	public static readonly RULE_logicOr_exp = 21;
	public static readonly RULE_logicAnd_exp = 22;
	public static readonly RULE_inclu_exp = 23;
	public static readonly RULE_exclu_exp = 24;
	public static readonly RULE_and_exp = 25;
	public static readonly RULE_equal_exp = 26;
	public static readonly RULE_relation_exp = 27;
	public static readonly RULE_shift_exp = 28;
	public static readonly RULE_additive_exp = 29;
	public static readonly RULE_multi_exp = 30;
	public static readonly RULE_cast_exp = 31;
	public static readonly RULE_unary_exp = 32;
	public static readonly RULE_unary_operator = 33;
	public static readonly RULE_postfix_exp = 34;
	public static readonly RULE_argument_exp_List = 35;
	public static readonly RULE_primary_exp = 36;
	public static readonly RULE_args_type_List = 37;
	public static readonly RULE_args_declaration = 38;
	public static readonly RULE_initializer = 39;
	public static readonly RULE_initializerList = 40;
	public static readonly RULE_designation = 41;
	public static readonly RULE_designatorList = 42;
	public static readonly RULE_designator = 43;
	public static readonly RULE_constant_exp = 44;
	public static readonly RULE_func_declaration = 45;
	public static readonly RULE_func_declarator = 46;
	public static readonly RULE_func_definition = 47;
	public static readonly RULE_declarationList = 48;
	public static readonly RULE_comp_stmt = 49;
	public static readonly RULE_block_List = 50;
	public static readonly RULE_block_Item = 51;
	public static readonly RULE_statement = 52;
	public static readonly RULE_exp_stmt = 53;
	public static readonly RULE_select_stmt = 54;
	public static readonly RULE_iterate_stmt = 55;
	public static readonly RULE_for_stmt = 56;
	public static readonly RULE_for_start = 57;
	public static readonly RULE_for_step = 58;
	public static readonly RULE_for_end = 59;
	public static readonly RULE_quantum_gate_stmt = 60;
	public static readonly RULE_quantum_gate_operation = 61;
	public static readonly RULE_four_angle_args = 62;
	public static readonly RULE_alpha = 63;
	public static readonly RULE_beta = 64;
	public static readonly RULE_gamma = 65;
	public static readonly RULE_delta = 66;
	public static readonly RULE_theta = 67;
	public static readonly RULE_control_gate_exp = 68;
	public static readonly RULE_double_gate_exp = 69;
	public static readonly RULE_target_gate_exp = 70;
	public static readonly RULE_measurement_stmt = 71;
	public static readonly RULE_accept_cbit_stmt = 72;
	public static readonly RULE_q_if_operation = 73;
	public static readonly RULE_q_if_stmt = 74;
	public static readonly RULE_q_if_stmt_item = 75;
	public static readonly RULE_q_while_operation = 76;
	public static readonly RULE_q_while_stmt = 77;
	public static readonly RULE_q_while_stmt_item = 78;
	public static readonly RULE_q_condition = 79;
	public static readonly RULE_q_operator = 80;
	public static readonly ruleNames: string[] = [
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
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'\"'", "'''", "'Pi'", "'let'", "'include'", "'int'", "'float'", 
		"'boolean'", "'if'", "'else'", "'for'", "'.lib'", "'.inc'", "'.qrunes'", 
		"'var'", "'double'", "'len'", "'host'", "'qvec'", "'qubit'", "'cvec'", 
		"'cbit'", "'H'", "'X'", "'NOT'", "'T'", "'S'", "'Y'", "'Z'", "'X1'", "'Y1'", 
		"'Z1'", "'U4'", "'RX'", "'RY'", "'RZ'", "'CNOT'", "'CZ'", "'CR'", "'CU'", 
		"'iSWAP'", "'Measure'", "'qif'", "'qwhile'", "'qelse'", "'#'", "'='", 
		"'>'", "'<'", "'!'", "'~'", "':'", "'=='", "'<='", "'>='", "'!='", "'&&'", 
		"'||'", "'&'", "'^'", "'|'", "'?'", "'++'", "'--'", "'+'", "'-'", "'*'", 
		"'**'", "'/'", "'%'", "'+='", "'-='", "'*='", "'/='", "'<<'", "'>>'", 
		"'{'", "'}'", "';'", "','", "'.'", "'('", "')'", "'['", "']'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, "PI", "LET", "INCLUDE", "INT", "FLOAT", 
		"BOOLEAN", "IF", "ELSE", "FOR", "LIB_POSTFIX", "INC_POSTFIX", "QRUNES_POSTFIX", 
		"VAR", "DOUBLE", "LEN", "HOST", "QVEC", "QUBIT", "CVEC", "CBIT", "H_GATE", 
		"X_GATE", "NOT_GATE", "T_GATE", "S_GATE", "Y_GATE", "Z_GATE", "X1_GATE", 
		"Y1_GATE", "Z1_GATE", "U4_GATE", "RX_GATE", "RY_GATE", "RZ_GATE", "CNOT_GATE", 
		"CZ_GATE", "CR_GATE", "CU_GATE", "ISWAP", "MEASURE", "QIF", "QWHILE", 
		"QELSE", "SHARP_SIGN", "ASSIGN", "GT", "LT", "BANG", "TILDE", "COLON", 
		"EQUAL", "LE", "GE", "NOTEQUAL", "LOGIC_AND", "LOGIC_OR", "AND", "EXCLU", 
		"INCLU", "QUE_MARK", "INC", "DEC", "ADD", "SUB", "MUL", "POW", "DIV", 
		"MOD", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "LSHIFT", 
		"RSHIFT", "LBRACE", "RBRACE", "SEMI", "COMMA", "DOT", "LPAREN", "RPAREN", 
		"LBRACK", "RBRACK", "Identifier", "Constant", "Digit_Sequence", "WhiteSpace", 
		"SingleLineComment", "MultiLinesComment"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(qcodeParser._LITERAL_NAMES, qcodeParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return qcodeParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "qcode.g4"; }

	@Override
	public get ruleNames(): string[] { return qcodeParser.ruleNames; }

	@Override
	public get serializedATN(): string { return qcodeParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(qcodeParser._ATN, this);
	}
	@RuleVersion(0)
	public qrunes(): QrunesContext {
		let _localctx: QrunesContext = new QrunesContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, qcodeParser.RULE_qrunes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.LET) | (1 << qcodeParser.INCLUDE) | (1 << qcodeParser.INT) | (1 << qcodeParser.FLOAT) | (1 << qcodeParser.DOUBLE) | (1 << qcodeParser.QVEC) | (1 << qcodeParser.QUBIT) | (1 << qcodeParser.CVEC) | (1 << qcodeParser.CBIT))) !== 0) || _la===qcodeParser.Identifier) {
				{
				{
				this.state = 162;
				this.lang_unit();
				}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lang_unit(): Lang_unitContext {
		let _localctx: Lang_unitContext = new Lang_unitContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, qcodeParser.RULE_lang_unit);
		try {
			this.state = 173;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 168;
				this.include_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 169;
				this.declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 170;
				this.literal_declaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 171;
				this.func_declaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 172;
				this.func_definition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public include_declaration(): Include_declarationContext {
		let _localctx: Include_declarationContext = new Include_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, qcodeParser.RULE_include_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.match(qcodeParser.INCLUDE);
			this.state = 176;
			this.include_sign();
			this.state = 177;
			this.match(qcodeParser.Identifier);
			this.state = 178;
			this.postfix();
			this.state = 179;
			this.include_sign();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public include_sign(): Include_signContext {
		let _localctx: Include_signContext = new Include_signContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, qcodeParser.RULE_include_sign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			_la = this._input.LA(1);
			if ( !(_la===qcodeParser.T__0 || _la===qcodeParser.T__1) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public postfix(): PostfixContext {
		let _localctx: PostfixContext = new PostfixContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, qcodeParser.RULE_postfix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.LIB_POSTFIX) | (1 << qcodeParser.INC_POSTFIX) | (1 << qcodeParser.QRUNES_POSTFIX))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, qcodeParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.INT) | (1 << qcodeParser.FLOAT) | (1 << qcodeParser.DOUBLE) | (1 << qcodeParser.QVEC) | (1 << qcodeParser.QUBIT) | (1 << qcodeParser.CVEC) | (1 << qcodeParser.CBIT))) !== 0)) {
				{
				this.state = 185;
				this.declaration_Specifier();
				}
			}

			this.state = 188;
			this.init_DeclaratorList(0);
			this.state = 189;
			this.match(qcodeParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literal_declaration(): Literal_declarationContext {
		let _localctx: Literal_declarationContext = new Literal_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, qcodeParser.RULE_literal_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===qcodeParser.LET) {
				{
				this.state = 191;
				this.literal_type();
				}
			}

			this.state = 194;
			this.init_Literal_DeclaratorList(0);
			this.state = 195;
			this.match(qcodeParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declaration_Specifier(): Declaration_SpecifierContext {
		let _localctx: Declaration_SpecifierContext = new Declaration_SpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, qcodeParser.RULE_declaration_Specifier);
		try {
			this.state = 200;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case qcodeParser.QVEC:
			case qcodeParser.QUBIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 197;
				this.quantum_type();
				}
				break;
			case qcodeParser.INT:
			case qcodeParser.FLOAT:
			case qcodeParser.DOUBLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 198;
				this.primary_type();
				}
				break;
			case qcodeParser.CVEC:
			case qcodeParser.CBIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 199;
				this.assist_classical_type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literal_type(): Literal_typeContext {
		let _localctx: Literal_typeContext = new Literal_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, qcodeParser.RULE_literal_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.match(qcodeParser.LET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public primary_type(): Primary_typeContext {
		let _localctx: Primary_typeContext = new Primary_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, qcodeParser.RULE_primary_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.INT) | (1 << qcodeParser.FLOAT) | (1 << qcodeParser.DOUBLE))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public quantum_type(): Quantum_typeContext {
		let _localctx: Quantum_typeContext = new Quantum_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, qcodeParser.RULE_quantum_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			_la = this._input.LA(1);
			if ( !(_la===qcodeParser.QVEC || _la===qcodeParser.QUBIT) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assist_classical_type(): Assist_classical_typeContext {
		let _localctx: Assist_classical_typeContext = new Assist_classical_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, qcodeParser.RULE_assist_classical_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			_la = this._input.LA(1);
			if ( !(_la===qcodeParser.CVEC || _la===qcodeParser.CBIT) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public init_DeclaratorList(): Init_DeclaratorListContext;
	public init_DeclaratorList(_p: number): Init_DeclaratorListContext;
	@RuleVersion(0)
	public init_DeclaratorList(_p?: number): Init_DeclaratorListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Init_DeclaratorListContext = new Init_DeclaratorListContext(this._ctx, _parentState);
		let _prevctx: Init_DeclaratorListContext = _localctx;
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, qcodeParser.RULE_init_DeclaratorList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 211;
			this.init_Declarator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 218;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Init_DeclaratorListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_init_DeclaratorList);
					this.state = 213;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 214;
					this.match(qcodeParser.COMMA);
					this.state = 215;
					this.init_Declarator();
					}
					} 
				}
				this.state = 220;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,5,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public init_Literal_DeclaratorList(): Init_Literal_DeclaratorListContext;
	public init_Literal_DeclaratorList(_p: number): Init_Literal_DeclaratorListContext;
	@RuleVersion(0)
	public init_Literal_DeclaratorList(_p?: number): Init_Literal_DeclaratorListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Init_Literal_DeclaratorListContext = new Init_Literal_DeclaratorListContext(this._ctx, _parentState);
		let _prevctx: Init_Literal_DeclaratorListContext = _localctx;
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, qcodeParser.RULE_init_Literal_DeclaratorList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 222;
			this.init_Literal_Declarator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 229;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,6,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Init_Literal_DeclaratorListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_init_Literal_DeclaratorList);
					this.state = 224;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 225;
					this.match(qcodeParser.COMMA);
					this.state = 226;
					this.init_Literal_Declarator();
					}
					} 
				}
				this.state = 231;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,6,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public init_Declarator(): Init_DeclaratorContext {
		let _localctx: Init_DeclaratorContext = new Init_DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, qcodeParser.RULE_init_Declarator);
		try {
			this.state = 237;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,7,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 232;
				this.declarator(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 233;
				this.declarator(0);
				this.state = 234;
				this.match(qcodeParser.ASSIGN);
				this.state = 235;
				this.initializer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public init_Literal_Declarator(): Init_Literal_DeclaratorContext {
		let _localctx: Init_Literal_DeclaratorContext = new Init_Literal_DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, qcodeParser.RULE_init_Literal_Declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.declarator(0);
			this.state = 240;
			this.match(qcodeParser.ASSIGN);
			this.state = 241;
			this.initializer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public declarator(): DeclaratorContext;
	public declarator(_p: number): DeclaratorContext;
	@RuleVersion(0)
	public declarator(_p?: number): DeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, _parentState);
		let _prevctx: DeclaratorContext = _localctx;
		let _startState: number = 32;
		this.enterRecursionRule(_localctx, 32, qcodeParser.RULE_declarator, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 244;
			this.match(qcodeParser.Identifier);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 253;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,8,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new DeclaratorContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_declarator);
					this.state = 246;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 247;
					this.match(qcodeParser.LBRACK);
					this.state = 248;
					this.assignment_exp();
					this.state = 249;
					this.match(qcodeParser.RBRACK);
					}
					} 
				}
				this.state = 255;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,8,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignment_exp(): Assignment_expContext {
		let _localctx: Assignment_expContext = new Assignment_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, qcodeParser.RULE_assignment_exp);
		try {
			this.state = 263;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,9,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 256;
				this.condition_exp();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 257;
				this.unary_exp();
				this.state = 258;
				this.assignment_operator();
				this.state = 259;
				this.assignment_exp();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 261;
				this.match(qcodeParser.Digit_Sequence);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 262;
				this.match(qcodeParser.Constant);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignment_operator(): Assignment_operatorContext {
		let _localctx: Assignment_operatorContext = new Assignment_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, qcodeParser.RULE_assignment_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			_la = this._input.LA(1);
			if ( !(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (qcodeParser.ASSIGN - 47)) | (1 << (qcodeParser.ADD_ASSIGN - 47)) | (1 << (qcodeParser.SUB_ASSIGN - 47)) | (1 << (qcodeParser.MUL_ASSIGN - 47)) | (1 << (qcodeParser.DIV_ASSIGN - 47)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public condition_exp(): Condition_expContext {
		let _localctx: Condition_expContext = new Condition_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, qcodeParser.RULE_condition_exp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.logicOr_exp(0);
			this.state = 273;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,10,this._ctx) ) {
			case 1:
				{
				this.state = 268;
				this.match(qcodeParser.QUE_MARK);
				this.state = 269;
				this.expression(0);
				this.state = 270;
				this.match(qcodeParser.COLON);
				this.state = 271;
				this.condition_exp();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	@RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 40;
		this.enterRecursionRule(_localctx, 40, qcodeParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 276;
			this.assignment_exp();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 283;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,11,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_expression);
					this.state = 278;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 279;
					this.match(qcodeParser.COMMA);
					this.state = 280;
					this.assignment_exp();
					}
					} 
				}
				this.state = 285;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,11,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public logicOr_exp(): LogicOr_expContext;
	public logicOr_exp(_p: number): LogicOr_expContext;
	@RuleVersion(0)
	public logicOr_exp(_p?: number): LogicOr_expContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicOr_expContext = new LogicOr_expContext(this._ctx, _parentState);
		let _prevctx: LogicOr_expContext = _localctx;
		let _startState: number = 42;
		this.enterRecursionRule(_localctx, 42, qcodeParser.RULE_logicOr_exp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 287;
			this.logicAnd_exp(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 294;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,12,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicOr_expContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_logicOr_exp);
					this.state = 289;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 290;
					this.match(qcodeParser.LOGIC_OR);
					this.state = 291;
					this.logicAnd_exp(0);
					}
					} 
				}
				this.state = 296;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,12,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public logicAnd_exp(): LogicAnd_expContext;
	public logicAnd_exp(_p: number): LogicAnd_expContext;
	@RuleVersion(0)
	public logicAnd_exp(_p?: number): LogicAnd_expContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicAnd_expContext = new LogicAnd_expContext(this._ctx, _parentState);
		let _prevctx: LogicAnd_expContext = _localctx;
		let _startState: number = 44;
		this.enterRecursionRule(_localctx, 44, qcodeParser.RULE_logicAnd_exp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 298;
			this.inclu_exp(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 305;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,13,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicAnd_expContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_logicAnd_exp);
					this.state = 300;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 301;
					this.match(qcodeParser.LOGIC_AND);
					this.state = 302;
					this.inclu_exp(0);
					}
					} 
				}
				this.state = 307;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,13,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public inclu_exp(): Inclu_expContext;
	public inclu_exp(_p: number): Inclu_expContext;
	@RuleVersion(0)
	public inclu_exp(_p?: number): Inclu_expContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Inclu_expContext = new Inclu_expContext(this._ctx, _parentState);
		let _prevctx: Inclu_expContext = _localctx;
		let _startState: number = 46;
		this.enterRecursionRule(_localctx, 46, qcodeParser.RULE_inclu_exp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 309;
			this.exclu_exp(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 316;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,14,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Inclu_expContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_inclu_exp);
					this.state = 311;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 312;
					this.match(qcodeParser.INCLU);
					this.state = 313;
					this.exclu_exp(0);
					}
					} 
				}
				this.state = 318;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,14,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public exclu_exp(): Exclu_expContext;
	public exclu_exp(_p: number): Exclu_expContext;
	@RuleVersion(0)
	public exclu_exp(_p?: number): Exclu_expContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Exclu_expContext = new Exclu_expContext(this._ctx, _parentState);
		let _prevctx: Exclu_expContext = _localctx;
		let _startState: number = 48;
		this.enterRecursionRule(_localctx, 48, qcodeParser.RULE_exclu_exp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 320;
			this.and_exp(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 327;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,15,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Exclu_expContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_exclu_exp);
					this.state = 322;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 323;
					this.match(qcodeParser.EXCLU);
					this.state = 324;
					this.and_exp(0);
					}
					} 
				}
				this.state = 329;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,15,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public and_exp(): And_expContext;
	public and_exp(_p: number): And_expContext;
	@RuleVersion(0)
	public and_exp(_p?: number): And_expContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: And_expContext = new And_expContext(this._ctx, _parentState);
		let _prevctx: And_expContext = _localctx;
		let _startState: number = 50;
		this.enterRecursionRule(_localctx, 50, qcodeParser.RULE_and_exp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 331;
			this.equal_exp(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 338;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,16,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new And_expContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_and_exp);
					this.state = 333;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 334;
					this.match(qcodeParser.AND);
					this.state = 335;
					this.equal_exp(0);
					}
					} 
				}
				this.state = 340;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,16,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public equal_exp(): Equal_expContext;
	public equal_exp(_p: number): Equal_expContext;
	@RuleVersion(0)
	public equal_exp(_p?: number): Equal_expContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Equal_expContext = new Equal_expContext(this._ctx, _parentState);
		let _prevctx: Equal_expContext = _localctx;
		let _startState: number = 52;
		this.enterRecursionRule(_localctx, 52, qcodeParser.RULE_equal_exp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 342;
			this.relation_exp(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 352;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,18,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 350;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,17,this._ctx) ) {
					case 1:
						{
						_localctx = new Equal_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_equal_exp);
						this.state = 344;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 345;
						this.match(qcodeParser.EQUAL);
						this.state = 346;
						this.relation_exp(0);
						}
						break;

					case 2:
						{
						_localctx = new Equal_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_equal_exp);
						this.state = 347;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 348;
						this.match(qcodeParser.NOTEQUAL);
						this.state = 349;
						this.relation_exp(0);
						}
						break;
					}
					} 
				}
				this.state = 354;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,18,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public relation_exp(): Relation_expContext;
	public relation_exp(_p: number): Relation_expContext;
	@RuleVersion(0)
	public relation_exp(_p?: number): Relation_expContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Relation_expContext = new Relation_expContext(this._ctx, _parentState);
		let _prevctx: Relation_expContext = _localctx;
		let _startState: number = 54;
		this.enterRecursionRule(_localctx, 54, qcodeParser.RULE_relation_exp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 356;
			this.shift_exp(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 372;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,20,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 370;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,19,this._ctx) ) {
					case 1:
						{
						_localctx = new Relation_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_relation_exp);
						this.state = 358;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 359;
						this.match(qcodeParser.GT);
						this.state = 360;
						this.shift_exp(0);
						}
						break;

					case 2:
						{
						_localctx = new Relation_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_relation_exp);
						this.state = 361;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 362;
						this.match(qcodeParser.LT);
						this.state = 363;
						this.shift_exp(0);
						}
						break;

					case 3:
						{
						_localctx = new Relation_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_relation_exp);
						this.state = 364;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 365;
						this.match(qcodeParser.GE);
						this.state = 366;
						this.shift_exp(0);
						}
						break;

					case 4:
						{
						_localctx = new Relation_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_relation_exp);
						this.state = 367;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 368;
						this.match(qcodeParser.LE);
						this.state = 369;
						this.shift_exp(0);
						}
						break;
					}
					} 
				}
				this.state = 374;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,20,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public shift_exp(): Shift_expContext;
	public shift_exp(_p: number): Shift_expContext;
	@RuleVersion(0)
	public shift_exp(_p?: number): Shift_expContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Shift_expContext = new Shift_expContext(this._ctx, _parentState);
		let _prevctx: Shift_expContext = _localctx;
		let _startState: number = 56;
		this.enterRecursionRule(_localctx, 56, qcodeParser.RULE_shift_exp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 376;
			this.additive_exp(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 386;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,22,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 384;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,21,this._ctx) ) {
					case 1:
						{
						_localctx = new Shift_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_shift_exp);
						this.state = 378;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 379;
						this.match(qcodeParser.LSHIFT);
						this.state = 380;
						this.additive_exp(0);
						}
						break;

					case 2:
						{
						_localctx = new Shift_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_shift_exp);
						this.state = 381;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 382;
						this.match(qcodeParser.RSHIFT);
						this.state = 383;
						this.additive_exp(0);
						}
						break;
					}
					} 
				}
				this.state = 388;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,22,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public additive_exp(): Additive_expContext;
	public additive_exp(_p: number): Additive_expContext;
	@RuleVersion(0)
	public additive_exp(_p?: number): Additive_expContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Additive_expContext = new Additive_expContext(this._ctx, _parentState);
		let _prevctx: Additive_expContext = _localctx;
		let _startState: number = 58;
		this.enterRecursionRule(_localctx, 58, qcodeParser.RULE_additive_exp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 390;
			this.multi_exp(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 400;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,24,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 398;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,23,this._ctx) ) {
					case 1:
						{
						_localctx = new Additive_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_additive_exp);
						this.state = 392;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 393;
						this.match(qcodeParser.ADD);
						this.state = 394;
						this.multi_exp(0);
						}
						break;

					case 2:
						{
						_localctx = new Additive_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_additive_exp);
						this.state = 395;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 396;
						this.match(qcodeParser.SUB);
						this.state = 397;
						this.multi_exp(0);
						}
						break;
					}
					} 
				}
				this.state = 402;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,24,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public multi_exp(): Multi_expContext;
	public multi_exp(_p: number): Multi_expContext;
	@RuleVersion(0)
	public multi_exp(_p?: number): Multi_expContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Multi_expContext = new Multi_expContext(this._ctx, _parentState);
		let _prevctx: Multi_expContext = _localctx;
		let _startState: number = 60;
		this.enterRecursionRule(_localctx, 60, qcodeParser.RULE_multi_exp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 404;
			this.cast_exp();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 420;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,26,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 418;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,25,this._ctx) ) {
					case 1:
						{
						_localctx = new Multi_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_multi_exp);
						this.state = 406;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 407;
						this.match(qcodeParser.MUL);
						this.state = 408;
						this.cast_exp();
						}
						break;

					case 2:
						{
						_localctx = new Multi_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_multi_exp);
						this.state = 409;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 410;
						this.match(qcodeParser.DIV);
						this.state = 411;
						this.cast_exp();
						}
						break;

					case 3:
						{
						_localctx = new Multi_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_multi_exp);
						this.state = 412;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 413;
						this.match(qcodeParser.MOD);
						this.state = 414;
						this.cast_exp();
						}
						break;

					case 4:
						{
						_localctx = new Multi_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_multi_exp);
						this.state = 415;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 416;
						this.match(qcodeParser.POW);
						this.state = 417;
						this.cast_exp();
						}
						break;
					}
					} 
				}
				this.state = 422;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,26,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public cast_exp(): Cast_expContext {
		let _localctx: Cast_expContext = new Cast_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, qcodeParser.RULE_cast_exp);
		try {
			this.state = 425;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case qcodeParser.PI:
			case qcodeParser.LEN:
			case qcodeParser.BANG:
			case qcodeParser.TILDE:
			case qcodeParser.LOGIC_AND:
			case qcodeParser.AND:
			case qcodeParser.INC:
			case qcodeParser.DEC:
			case qcodeParser.ADD:
			case qcodeParser.SUB:
			case qcodeParser.MUL:
			case qcodeParser.POW:
			case qcodeParser.LPAREN:
			case qcodeParser.Identifier:
			case qcodeParser.Constant:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 423;
				this.unary_exp();
				}
				break;
			case qcodeParser.Digit_Sequence:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 424;
				this.match(qcodeParser.Digit_Sequence);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public unary_exp(): Unary_expContext {
		let _localctx: Unary_expContext = new Unary_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, qcodeParser.RULE_unary_exp);
		try {
			this.state = 437;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case qcodeParser.PI:
			case qcodeParser.LEN:
			case qcodeParser.LPAREN:
			case qcodeParser.Identifier:
			case qcodeParser.Constant:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 427;
				this.postfix_exp(0);
				}
				break;
			case qcodeParser.INC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 428;
				this.match(qcodeParser.INC);
				this.state = 429;
				this.unary_exp();
				}
				break;
			case qcodeParser.DEC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 430;
				this.match(qcodeParser.DEC);
				this.state = 431;
				this.unary_exp();
				}
				break;
			case qcodeParser.BANG:
			case qcodeParser.TILDE:
			case qcodeParser.AND:
			case qcodeParser.ADD:
			case qcodeParser.SUB:
			case qcodeParser.MUL:
			case qcodeParser.POW:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 432;
				this.unary_operator();
				this.state = 433;
				this.cast_exp();
				}
				break;
			case qcodeParser.LOGIC_AND:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 435;
				this.match(qcodeParser.LOGIC_AND);
				this.state = 436;
				this.match(qcodeParser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public unary_operator(): Unary_operatorContext {
		let _localctx: Unary_operatorContext = new Unary_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, qcodeParser.RULE_unary_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			_la = this._input.LA(1);
			if ( !(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (qcodeParser.BANG - 50)) | (1 << (qcodeParser.TILDE - 50)) | (1 << (qcodeParser.AND - 50)) | (1 << (qcodeParser.ADD - 50)) | (1 << (qcodeParser.SUB - 50)) | (1 << (qcodeParser.MUL - 50)) | (1 << (qcodeParser.POW - 50)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public postfix_exp(): Postfix_expContext;
	public postfix_exp(_p: number): Postfix_expContext;
	@RuleVersion(0)
	public postfix_exp(_p?: number): Postfix_expContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Postfix_expContext = new Postfix_expContext(this._ctx, _parentState);
		let _prevctx: Postfix_expContext = _localctx;
		let _startState: number = 68;
		this.enterRecursionRule(_localctx, 68, qcodeParser.RULE_postfix_exp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 442;
			this.primary_exp();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 465;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,32,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 463;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,31,this._ctx) ) {
					case 1:
						{
						_localctx = new Postfix_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_postfix_exp);
						this.state = 444;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 445;
						this.match(qcodeParser.LBRACK);
						this.state = 446;
						this.expression(0);
						this.state = 449;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===qcodeParser.COLON) {
							{
							this.state = 447;
							this.match(qcodeParser.COLON);
							this.state = 448;
							this.expression(0);
							}
						}

						this.state = 451;
						this.match(qcodeParser.RBRACK);
						}
						break;

					case 2:
						{
						_localctx = new Postfix_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_postfix_exp);
						this.state = 453;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 454;
						this.match(qcodeParser.LPAREN);
						this.state = 456;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===qcodeParser.PI || _la===qcodeParser.LEN || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (qcodeParser.BANG - 50)) | (1 << (qcodeParser.TILDE - 50)) | (1 << (qcodeParser.LOGIC_AND - 50)) | (1 << (qcodeParser.AND - 50)) | (1 << (qcodeParser.INC - 50)) | (1 << (qcodeParser.DEC - 50)) | (1 << (qcodeParser.ADD - 50)) | (1 << (qcodeParser.SUB - 50)) | (1 << (qcodeParser.MUL - 50)) | (1 << (qcodeParser.POW - 50)))) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (qcodeParser.LPAREN - 82)) | (1 << (qcodeParser.Identifier - 82)) | (1 << (qcodeParser.Constant - 82)) | (1 << (qcodeParser.Digit_Sequence - 82)))) !== 0)) {
							{
							this.state = 455;
							this.argument_exp_List(0);
							}
						}

						this.state = 458;
						this.match(qcodeParser.RPAREN);
						}
						break;

					case 3:
						{
						_localctx = new Postfix_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_postfix_exp);
						this.state = 459;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 460;
						this.match(qcodeParser.INC);
						}
						break;

					case 4:
						{
						_localctx = new Postfix_expContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_postfix_exp);
						this.state = 461;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 462;
						this.match(qcodeParser.DEC);
						}
						break;
					}
					} 
				}
				this.state = 467;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,32,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public argument_exp_List(): Argument_exp_ListContext;
	public argument_exp_List(_p: number): Argument_exp_ListContext;
	@RuleVersion(0)
	public argument_exp_List(_p?: number): Argument_exp_ListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Argument_exp_ListContext = new Argument_exp_ListContext(this._ctx, _parentState);
		let _prevctx: Argument_exp_ListContext = _localctx;
		let _startState: number = 70;
		this.enterRecursionRule(_localctx, 70, qcodeParser.RULE_argument_exp_List, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 469;
			this.assignment_exp();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 476;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,33,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Argument_exp_ListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_argument_exp_List);
					this.state = 471;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 472;
					this.match(qcodeParser.COMMA);
					this.state = 473;
					this.assignment_exp();
					}
					} 
				}
				this.state = 478;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,33,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public primary_exp(): Primary_expContext {
		let _localctx: Primary_expContext = new Primary_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, qcodeParser.RULE_primary_exp);
		try {
			this.state = 487;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case qcodeParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 479;
				this.match(qcodeParser.Identifier);
				}
				break;
			case qcodeParser.Constant:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 480;
				this.match(qcodeParser.Constant);
				}
				break;
			case qcodeParser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 481;
				this.match(qcodeParser.LPAREN);
				this.state = 482;
				this.expression(0);
				this.state = 483;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.LEN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 485;
				this.match(qcodeParser.LEN);
				}
				break;
			case qcodeParser.PI:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 486;
				this.match(qcodeParser.PI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public args_type_List(): Args_type_ListContext;
	public args_type_List(_p: number): Args_type_ListContext;
	@RuleVersion(0)
	public args_type_List(_p?: number): Args_type_ListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Args_type_ListContext = new Args_type_ListContext(this._ctx, _parentState);
		let _prevctx: Args_type_ListContext = _localctx;
		let _startState: number = 74;
		this.enterRecursionRule(_localctx, 74, qcodeParser.RULE_args_type_List, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 490;
			this.args_declaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 497;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,35,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Args_type_ListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_args_type_List);
					this.state = 492;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 493;
					this.match(qcodeParser.COMMA);
					this.state = 494;
					this.args_declaration();
					}
					} 
				}
				this.state = 499;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,35,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public args_declaration(): Args_declarationContext {
		let _localctx: Args_declarationContext = new Args_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, qcodeParser.RULE_args_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this.declaration_Specifier();
			this.state = 501;
			this.declarator(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, qcodeParser.RULE_initializer);
		try {
			this.state = 511;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case qcodeParser.PI:
			case qcodeParser.LEN:
			case qcodeParser.BANG:
			case qcodeParser.TILDE:
			case qcodeParser.LOGIC_AND:
			case qcodeParser.AND:
			case qcodeParser.INC:
			case qcodeParser.DEC:
			case qcodeParser.ADD:
			case qcodeParser.SUB:
			case qcodeParser.MUL:
			case qcodeParser.POW:
			case qcodeParser.LPAREN:
			case qcodeParser.Identifier:
			case qcodeParser.Constant:
			case qcodeParser.Digit_Sequence:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 503;
				this.assignment_exp();
				}
				break;
			case qcodeParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 504;
				this.match(qcodeParser.LBRACE);
				this.state = 505;
				this.initializerList(0);
				{
				this.state = 506;
				this.match(qcodeParser.COMMA);
				this.state = 507;
				this.initializerList(0);
				}
				this.state = 509;
				this.match(qcodeParser.RBRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public initializerList(): InitializerListContext;
	public initializerList(_p: number): InitializerListContext;
	@RuleVersion(0)
	public initializerList(_p?: number): InitializerListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InitializerListContext = new InitializerListContext(this._ctx, _parentState);
		let _prevctx: InitializerListContext = _localctx;
		let _startState: number = 80;
		this.enterRecursionRule(_localctx, 80, qcodeParser.RULE_initializerList, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===qcodeParser.LBRACK) {
				{
				this.state = 514;
				this.designation();
				}
			}

			this.state = 517;
			this.initializer();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 527;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,39,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new InitializerListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_initializerList);
					this.state = 519;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 520;
					this.match(qcodeParser.COMMA);
					this.state = 522;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===qcodeParser.LBRACK) {
						{
						this.state = 521;
						this.designation();
						}
					}

					this.state = 524;
					this.initializer();
					}
					} 
				}
				this.state = 529;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,39,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public designation(): DesignationContext {
		let _localctx: DesignationContext = new DesignationContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, qcodeParser.RULE_designation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			this.designatorList(0);
			this.state = 531;
			this.match(qcodeParser.ASSIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public designatorList(): DesignatorListContext;
	public designatorList(_p: number): DesignatorListContext;
	@RuleVersion(0)
	public designatorList(_p?: number): DesignatorListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DesignatorListContext = new DesignatorListContext(this._ctx, _parentState);
		let _prevctx: DesignatorListContext = _localctx;
		let _startState: number = 84;
		this.enterRecursionRule(_localctx, 84, qcodeParser.RULE_designatorList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 534;
			this.designator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 540;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,40,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new DesignatorListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_designatorList);
					this.state = 536;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 537;
					this.designator();
					}
					} 
				}
				this.state = 542;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,40,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public designator(): DesignatorContext {
		let _localctx: DesignatorContext = new DesignatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, qcodeParser.RULE_designator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this.match(qcodeParser.LBRACK);
			this.state = 544;
			this.constant_exp();
			this.state = 545;
			this.match(qcodeParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public constant_exp(): Constant_expContext {
		let _localctx: Constant_expContext = new Constant_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, qcodeParser.RULE_constant_exp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			this.condition_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public func_declaration(): Func_declarationContext {
		let _localctx: Func_declarationContext = new Func_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, qcodeParser.RULE_func_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this.func_declarator();
			this.state = 550;
			this.match(qcodeParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public func_declarator(): Func_declaratorContext {
		let _localctx: Func_declaratorContext = new Func_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, qcodeParser.RULE_func_declarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this.match(qcodeParser.Identifier);
			this.state = 553;
			this.match(qcodeParser.LPAREN);
			this.state = 555;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.INT) | (1 << qcodeParser.FLOAT) | (1 << qcodeParser.DOUBLE) | (1 << qcodeParser.QVEC) | (1 << qcodeParser.QUBIT) | (1 << qcodeParser.CVEC) | (1 << qcodeParser.CBIT))) !== 0)) {
				{
				this.state = 554;
				this.args_type_List(0);
				}
			}

			this.state = 557;
			this.match(qcodeParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public func_definition(): Func_definitionContext {
		let _localctx: Func_definitionContext = new Func_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, qcodeParser.RULE_func_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
			this.func_declarator();
			this.state = 560;
			this.comp_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declarationList(): DeclarationListContext {
		let _localctx: DeclarationListContext = new DeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, qcodeParser.RULE_declarationList);
		try {
			this.state = 566;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,42,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 562;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 563;
				this.declaration();
				this.state = 564;
				this.declarationList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comp_stmt(): Comp_stmtContext {
		let _localctx: Comp_stmtContext = new Comp_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, qcodeParser.RULE_comp_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 568;
			this.match(qcodeParser.LBRACE);
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.PI) | (1 << qcodeParser.LET) | (1 << qcodeParser.INT) | (1 << qcodeParser.FLOAT) | (1 << qcodeParser.IF) | (1 << qcodeParser.FOR) | (1 << qcodeParser.DOUBLE) | (1 << qcodeParser.LEN) | (1 << qcodeParser.QVEC) | (1 << qcodeParser.QUBIT) | (1 << qcodeParser.CVEC) | (1 << qcodeParser.CBIT) | (1 << qcodeParser.H_GATE) | (1 << qcodeParser.X_GATE) | (1 << qcodeParser.NOT_GATE) | (1 << qcodeParser.T_GATE) | (1 << qcodeParser.S_GATE) | (1 << qcodeParser.Y_GATE) | (1 << qcodeParser.Z_GATE) | (1 << qcodeParser.X1_GATE) | (1 << qcodeParser.Y1_GATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (qcodeParser.Z1_GATE - 32)) | (1 << (qcodeParser.U4_GATE - 32)) | (1 << (qcodeParser.RX_GATE - 32)) | (1 << (qcodeParser.RY_GATE - 32)) | (1 << (qcodeParser.RZ_GATE - 32)) | (1 << (qcodeParser.CNOT_GATE - 32)) | (1 << (qcodeParser.CZ_GATE - 32)) | (1 << (qcodeParser.CR_GATE - 32)) | (1 << (qcodeParser.CU_GATE - 32)) | (1 << (qcodeParser.ISWAP - 32)) | (1 << (qcodeParser.MEASURE - 32)) | (1 << (qcodeParser.QIF - 32)) | (1 << (qcodeParser.QWHILE - 32)) | (1 << (qcodeParser.BANG - 32)) | (1 << (qcodeParser.TILDE - 32)) | (1 << (qcodeParser.LOGIC_AND - 32)) | (1 << (qcodeParser.AND - 32)) | (1 << (qcodeParser.INC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (qcodeParser.DEC - 64)) | (1 << (qcodeParser.ADD - 64)) | (1 << (qcodeParser.SUB - 64)) | (1 << (qcodeParser.MUL - 64)) | (1 << (qcodeParser.POW - 64)) | (1 << (qcodeParser.LBRACE - 64)) | (1 << (qcodeParser.SEMI - 64)) | (1 << (qcodeParser.LPAREN - 64)) | (1 << (qcodeParser.Identifier - 64)) | (1 << (qcodeParser.Constant - 64)) | (1 << (qcodeParser.Digit_Sequence - 64)))) !== 0)) {
				{
				this.state = 569;
				this.block_List(0);
				}
			}

			this.state = 572;
			this.match(qcodeParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public block_List(): Block_ListContext;
	public block_List(_p: number): Block_ListContext;
	@RuleVersion(0)
	public block_List(_p?: number): Block_ListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Block_ListContext = new Block_ListContext(this._ctx, _parentState);
		let _prevctx: Block_ListContext = _localctx;
		let _startState: number = 100;
		this.enterRecursionRule(_localctx, 100, qcodeParser.RULE_block_List, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 575;
			this.block_Item();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 581;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,44,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Block_ListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_block_List);
					this.state = 577;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 578;
					this.block_Item();
					}
					} 
				}
				this.state = 583;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,44,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public block_Item(): Block_ItemContext {
		let _localctx: Block_ItemContext = new Block_ItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, qcodeParser.RULE_block_Item);
		try {
			this.state = 587;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,45,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 584;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 585;
				this.declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 586;
				this.literal_declaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, qcodeParser.RULE_statement);
		try {
			this.state = 597;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case qcodeParser.PI:
			case qcodeParser.LEN:
			case qcodeParser.BANG:
			case qcodeParser.TILDE:
			case qcodeParser.LOGIC_AND:
			case qcodeParser.AND:
			case qcodeParser.INC:
			case qcodeParser.DEC:
			case qcodeParser.ADD:
			case qcodeParser.SUB:
			case qcodeParser.MUL:
			case qcodeParser.POW:
			case qcodeParser.SEMI:
			case qcodeParser.LPAREN:
			case qcodeParser.Identifier:
			case qcodeParser.Constant:
			case qcodeParser.Digit_Sequence:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 589;
				this.exp_stmt();
				}
				break;
			case qcodeParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
				this.comp_stmt();
				}
				break;
			case qcodeParser.IF:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 591;
				this.select_stmt();
				}
				break;
			case qcodeParser.FOR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 592;
				this.iterate_stmt();
				}
				break;
			case qcodeParser.H_GATE:
			case qcodeParser.X_GATE:
			case qcodeParser.NOT_GATE:
			case qcodeParser.T_GATE:
			case qcodeParser.S_GATE:
			case qcodeParser.Y_GATE:
			case qcodeParser.Z_GATE:
			case qcodeParser.X1_GATE:
			case qcodeParser.Y1_GATE:
			case qcodeParser.Z1_GATE:
			case qcodeParser.U4_GATE:
			case qcodeParser.RX_GATE:
			case qcodeParser.RY_GATE:
			case qcodeParser.RZ_GATE:
			case qcodeParser.CNOT_GATE:
			case qcodeParser.CZ_GATE:
			case qcodeParser.CR_GATE:
			case qcodeParser.CU_GATE:
			case qcodeParser.ISWAP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 593;
				this.quantum_gate_stmt();
				}
				break;
			case qcodeParser.MEASURE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 594;
				this.measurement_stmt();
				}
				break;
			case qcodeParser.QIF:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 595;
				this.q_if_operation();
				}
				break;
			case qcodeParser.QWHILE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 596;
				this.q_while_operation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public exp_stmt(): Exp_stmtContext {
		let _localctx: Exp_stmtContext = new Exp_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, qcodeParser.RULE_exp_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===qcodeParser.PI || _la===qcodeParser.LEN || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (qcodeParser.BANG - 50)) | (1 << (qcodeParser.TILDE - 50)) | (1 << (qcodeParser.LOGIC_AND - 50)) | (1 << (qcodeParser.AND - 50)) | (1 << (qcodeParser.INC - 50)) | (1 << (qcodeParser.DEC - 50)) | (1 << (qcodeParser.ADD - 50)) | (1 << (qcodeParser.SUB - 50)) | (1 << (qcodeParser.MUL - 50)) | (1 << (qcodeParser.POW - 50)))) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (qcodeParser.LPAREN - 82)) | (1 << (qcodeParser.Identifier - 82)) | (1 << (qcodeParser.Constant - 82)) | (1 << (qcodeParser.Digit_Sequence - 82)))) !== 0)) {
				{
				this.state = 599;
				this.expression(0);
				}
			}

			this.state = 602;
			this.match(qcodeParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public select_stmt(): Select_stmtContext {
		let _localctx: Select_stmtContext = new Select_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, qcodeParser.RULE_select_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
			this.match(qcodeParser.IF);
			this.state = 605;
			this.match(qcodeParser.LPAREN);
			this.state = 606;
			this.expression(0);
			this.state = 607;
			this.match(qcodeParser.RPAREN);
			this.state = 608;
			this.statement();
			this.state = 611;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,48,this._ctx) ) {
			case 1:
				{
				this.state = 609;
				this.match(qcodeParser.ELSE);
				this.state = 610;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public iterate_stmt(): Iterate_stmtContext {
		let _localctx: Iterate_stmtContext = new Iterate_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, qcodeParser.RULE_iterate_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 613;
			this.match(qcodeParser.FOR);
			this.state = 614;
			this.match(qcodeParser.LPAREN);
			this.state = 615;
			this.for_stmt();
			this.state = 616;
			this.match(qcodeParser.RPAREN);
			this.state = 617;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public for_stmt(): For_stmtContext {
		let _localctx: For_stmtContext = new For_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, qcodeParser.RULE_for_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 620;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,49,this._ctx) ) {
			case 1:
				{
				this.state = 619;
				this.for_start();
				}
				break;
			}
			this.state = 623;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,50,this._ctx) ) {
			case 1:
				{
				this.state = 622;
				this.match(qcodeParser.COLON);
				}
				break;
			}
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===qcodeParser.PI || _la===qcodeParser.LEN || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (qcodeParser.BANG - 50)) | (1 << (qcodeParser.TILDE - 50)) | (1 << (qcodeParser.LOGIC_AND - 50)) | (1 << (qcodeParser.AND - 50)) | (1 << (qcodeParser.INC - 50)) | (1 << (qcodeParser.DEC - 50)) | (1 << (qcodeParser.ADD - 50)) | (1 << (qcodeParser.SUB - 50)) | (1 << (qcodeParser.MUL - 50)) | (1 << (qcodeParser.POW - 50)))) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (qcodeParser.LPAREN - 82)) | (1 << (qcodeParser.Identifier - 82)) | (1 << (qcodeParser.Constant - 82)) | (1 << (qcodeParser.Digit_Sequence - 82)))) !== 0)) {
				{
				this.state = 625;
				this.for_step();
				}
			}

			this.state = 628;
			this.match(qcodeParser.COLON);
			this.state = 630;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===qcodeParser.PI || _la===qcodeParser.LEN || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (qcodeParser.BANG - 50)) | (1 << (qcodeParser.TILDE - 50)) | (1 << (qcodeParser.LOGIC_AND - 50)) | (1 << (qcodeParser.AND - 50)) | (1 << (qcodeParser.INC - 50)) | (1 << (qcodeParser.DEC - 50)) | (1 << (qcodeParser.ADD - 50)) | (1 << (qcodeParser.SUB - 50)) | (1 << (qcodeParser.MUL - 50)) | (1 << (qcodeParser.POW - 50)))) !== 0) || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (qcodeParser.LPAREN - 82)) | (1 << (qcodeParser.Identifier - 82)) | (1 << (qcodeParser.Constant - 82)) | (1 << (qcodeParser.Digit_Sequence - 82)))) !== 0)) {
				{
				this.state = 629;
				this.for_end();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public for_start(): For_startContext {
		let _localctx: For_startContext = new For_startContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, qcodeParser.RULE_for_start);
		try {
			this.state = 636;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,53,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 632;
				this.primary_exp();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 633;
				this.match(qcodeParser.Identifier);
				this.state = 634;
				this.match(qcodeParser.ASSIGN);
				this.state = 635;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public for_step(): For_stepContext {
		let _localctx: For_stepContext = new For_stepContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, qcodeParser.RULE_for_step);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 638;
			this.assignment_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public for_end(): For_endContext {
		let _localctx: For_endContext = new For_endContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, qcodeParser.RULE_for_end);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this.assignment_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public quantum_gate_stmt(): Quantum_gate_stmtContext {
		let _localctx: Quantum_gate_stmtContext = new Quantum_gate_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, qcodeParser.RULE_quantum_gate_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this.quantum_gate_operation();
			this.state = 643;
			this.match(qcodeParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public quantum_gate_operation(): Quantum_gate_operationContext {
		let _localctx: Quantum_gate_operationContext = new Quantum_gate_operationContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, qcodeParser.RULE_quantum_gate_operation);
		try {
			this.state = 754;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case qcodeParser.H_GATE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 645;
				this.match(qcodeParser.H_GATE);
				this.state = 646;
				this.match(qcodeParser.LPAREN);
				this.state = 647;
				this.control_gate_exp();
				this.state = 648;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.X_GATE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 650;
				this.match(qcodeParser.X_GATE);
				this.state = 651;
				this.match(qcodeParser.LPAREN);
				this.state = 652;
				this.control_gate_exp();
				this.state = 653;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.NOT_GATE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 655;
				this.match(qcodeParser.NOT_GATE);
				this.state = 656;
				this.match(qcodeParser.LPAREN);
				this.state = 657;
				this.control_gate_exp();
				this.state = 658;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.T_GATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 660;
				this.match(qcodeParser.T_GATE);
				this.state = 661;
				this.match(qcodeParser.LPAREN);
				this.state = 662;
				this.control_gate_exp();
				this.state = 663;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.S_GATE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 665;
				this.match(qcodeParser.S_GATE);
				this.state = 666;
				this.match(qcodeParser.LPAREN);
				this.state = 667;
				this.control_gate_exp();
				this.state = 668;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.Y_GATE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 670;
				this.match(qcodeParser.Y_GATE);
				this.state = 671;
				this.match(qcodeParser.LPAREN);
				this.state = 672;
				this.control_gate_exp();
				this.state = 673;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.Z_GATE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 675;
				this.match(qcodeParser.Z_GATE);
				this.state = 676;
				this.match(qcodeParser.LPAREN);
				this.state = 677;
				this.control_gate_exp();
				this.state = 678;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.X1_GATE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 680;
				this.match(qcodeParser.X1_GATE);
				this.state = 681;
				this.match(qcodeParser.LPAREN);
				this.state = 682;
				this.control_gate_exp();
				this.state = 683;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.Y1_GATE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 685;
				this.match(qcodeParser.Y1_GATE);
				this.state = 686;
				this.match(qcodeParser.LPAREN);
				this.state = 687;
				this.control_gate_exp();
				this.state = 688;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.Z1_GATE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 690;
				this.match(qcodeParser.Z1_GATE);
				this.state = 691;
				this.match(qcodeParser.LPAREN);
				this.state = 692;
				this.control_gate_exp();
				this.state = 693;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.U4_GATE:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 695;
				this.match(qcodeParser.U4_GATE);
				this.state = 696;
				this.match(qcodeParser.LPAREN);
				this.state = 697;
				this.control_gate_exp();
				this.state = 698;
				this.match(qcodeParser.COMMA);
				this.state = 699;
				this.four_angle_args();
				this.state = 700;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.RX_GATE:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 702;
				this.match(qcodeParser.RX_GATE);
				this.state = 703;
				this.match(qcodeParser.LPAREN);
				this.state = 704;
				this.control_gate_exp();
				this.state = 705;
				this.match(qcodeParser.COMMA);
				this.state = 706;
				this.expression(0);
				this.state = 707;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.RY_GATE:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 709;
				this.match(qcodeParser.RY_GATE);
				this.state = 710;
				this.match(qcodeParser.LPAREN);
				this.state = 711;
				this.control_gate_exp();
				this.state = 712;
				this.match(qcodeParser.COMMA);
				this.state = 713;
				this.expression(0);
				this.state = 714;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.RZ_GATE:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 716;
				this.match(qcodeParser.RZ_GATE);
				this.state = 717;
				this.match(qcodeParser.LPAREN);
				this.state = 718;
				this.control_gate_exp();
				this.state = 719;
				this.match(qcodeParser.COMMA);
				this.state = 720;
				this.expression(0);
				this.state = 721;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.CNOT_GATE:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 723;
				this.match(qcodeParser.CNOT_GATE);
				this.state = 724;
				this.match(qcodeParser.LPAREN);
				this.state = 725;
				this.double_gate_exp();
				this.state = 726;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.CZ_GATE:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 728;
				this.match(qcodeParser.CZ_GATE);
				this.state = 729;
				this.match(qcodeParser.LPAREN);
				this.state = 730;
				this.double_gate_exp();
				this.state = 731;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.CU_GATE:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 733;
				this.match(qcodeParser.CU_GATE);
				this.state = 734;
				this.match(qcodeParser.LPAREN);
				this.state = 735;
				this.double_gate_exp();
				this.state = 736;
				this.match(qcodeParser.COMMA);
				this.state = 737;
				this.four_angle_args();
				this.state = 738;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.ISWAP:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 740;
				this.match(qcodeParser.ISWAP);
				this.state = 741;
				this.match(qcodeParser.LPAREN);
				this.state = 742;
				this.double_gate_exp();
				this.state = 743;
				this.match(qcodeParser.COMMA);
				this.state = 744;
				this.theta();
				this.state = 745;
				this.match(qcodeParser.RPAREN);
				}
				break;
			case qcodeParser.CR_GATE:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 747;
				this.match(qcodeParser.CR_GATE);
				this.state = 748;
				this.match(qcodeParser.LPAREN);
				this.state = 749;
				this.double_gate_exp();
				this.state = 750;
				this.match(qcodeParser.COMMA);
				this.state = 751;
				this.theta();
				this.state = 752;
				this.match(qcodeParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public four_angle_args(): Four_angle_argsContext {
		let _localctx: Four_angle_argsContext = new Four_angle_argsContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, qcodeParser.RULE_four_angle_args);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 756;
			this.alpha();
			this.state = 757;
			this.match(qcodeParser.COMMA);
			this.state = 758;
			this.beta();
			this.state = 759;
			this.match(qcodeParser.COMMA);
			this.state = 760;
			this.gamma();
			this.state = 761;
			this.match(qcodeParser.COMMA);
			this.state = 762;
			this.delta();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alpha(): AlphaContext {
		let _localctx: AlphaContext = new AlphaContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, qcodeParser.RULE_alpha);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 764;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public beta(): BetaContext {
		let _localctx: BetaContext = new BetaContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, qcodeParser.RULE_beta);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 766;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public gamma(): GammaContext {
		let _localctx: GammaContext = new GammaContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, qcodeParser.RULE_gamma);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 768;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public delta(): DeltaContext {
		let _localctx: DeltaContext = new DeltaContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, qcodeParser.RULE_delta);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 770;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public theta(): ThetaContext {
		let _localctx: ThetaContext = new ThetaContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, qcodeParser.RULE_theta);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 772;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public control_gate_exp(): Control_gate_expContext {
		let _localctx: Control_gate_expContext = new Control_gate_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, qcodeParser.RULE_control_gate_exp);
		try {
			this.state = 780;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,55,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 774;
				this.match(qcodeParser.Identifier);
				this.state = 775;
				this.match(qcodeParser.LBRACK);
				this.state = 776;
				this.expression(0);
				this.state = 777;
				this.match(qcodeParser.RBRACK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 779;
				this.match(qcodeParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public double_gate_exp(): Double_gate_expContext {
		let _localctx: Double_gate_expContext = new Double_gate_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, qcodeParser.RULE_double_gate_exp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this.control_gate_exp();
			this.state = 783;
			this.match(qcodeParser.COMMA);
			this.state = 784;
			this.target_gate_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public target_gate_exp(): Target_gate_expContext {
		let _localctx: Target_gate_expContext = new Target_gate_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, qcodeParser.RULE_target_gate_exp);
		try {
			this.state = 792;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,56,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 786;
				this.match(qcodeParser.Identifier);
				this.state = 787;
				this.match(qcodeParser.LBRACK);
				this.state = 788;
				this.expression(0);
				this.state = 789;
				this.match(qcodeParser.RBRACK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 791;
				this.match(qcodeParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public measurement_stmt(): Measurement_stmtContext {
		let _localctx: Measurement_stmtContext = new Measurement_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, qcodeParser.RULE_measurement_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 794;
			this.match(qcodeParser.MEASURE);
			this.state = 795;
			this.match(qcodeParser.LPAREN);
			this.state = 796;
			this.control_gate_exp();
			this.state = 797;
			this.match(qcodeParser.COMMA);
			this.state = 798;
			this.accept_cbit_stmt();
			this.state = 799;
			this.match(qcodeParser.RPAREN);
			this.state = 800;
			this.match(qcodeParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public accept_cbit_stmt(): Accept_cbit_stmtContext {
		let _localctx: Accept_cbit_stmtContext = new Accept_cbit_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, qcodeParser.RULE_accept_cbit_stmt);
		try {
			this.state = 808;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,57,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 802;
				this.match(qcodeParser.Identifier);
				this.state = 803;
				this.match(qcodeParser.LBRACK);
				this.state = 804;
				this.expression(0);
				this.state = 805;
				this.match(qcodeParser.RBRACK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 807;
				this.match(qcodeParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public q_if_operation(): Q_if_operationContext {
		let _localctx: Q_if_operationContext = new Q_if_operationContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, qcodeParser.RULE_q_if_operation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			this.match(qcodeParser.QIF);
			this.state = 811;
			this.match(qcodeParser.LPAREN);
			this.state = 812;
			this.q_condition();
			this.state = 813;
			this.match(qcodeParser.RPAREN);
			this.state = 814;
			this.match(qcodeParser.LBRACE);
			this.state = 815;
			this.q_if_stmt();
			this.state = 816;
			this.match(qcodeParser.RBRACE);
			this.state = 822;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,58,this._ctx) ) {
			case 1:
				{
				this.state = 817;
				this.match(qcodeParser.QELSE);
				this.state = 818;
				this.match(qcodeParser.LBRACE);
				this.state = 819;
				this.q_if_stmt();
				this.state = 820;
				this.match(qcodeParser.RBRACE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public q_if_stmt(): Q_if_stmtContext {
		let _localctx: Q_if_stmtContext = new Q_if_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, qcodeParser.RULE_q_if_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 827;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.PI) | (1 << qcodeParser.LET) | (1 << qcodeParser.INT) | (1 << qcodeParser.FLOAT) | (1 << qcodeParser.IF) | (1 << qcodeParser.FOR) | (1 << qcodeParser.DOUBLE) | (1 << qcodeParser.LEN) | (1 << qcodeParser.QVEC) | (1 << qcodeParser.QUBIT) | (1 << qcodeParser.CVEC) | (1 << qcodeParser.CBIT) | (1 << qcodeParser.H_GATE) | (1 << qcodeParser.X_GATE) | (1 << qcodeParser.NOT_GATE) | (1 << qcodeParser.T_GATE) | (1 << qcodeParser.S_GATE) | (1 << qcodeParser.Y_GATE) | (1 << qcodeParser.Z_GATE) | (1 << qcodeParser.X1_GATE) | (1 << qcodeParser.Y1_GATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (qcodeParser.Z1_GATE - 32)) | (1 << (qcodeParser.U4_GATE - 32)) | (1 << (qcodeParser.RX_GATE - 32)) | (1 << (qcodeParser.RY_GATE - 32)) | (1 << (qcodeParser.RZ_GATE - 32)) | (1 << (qcodeParser.CNOT_GATE - 32)) | (1 << (qcodeParser.CZ_GATE - 32)) | (1 << (qcodeParser.CR_GATE - 32)) | (1 << (qcodeParser.CU_GATE - 32)) | (1 << (qcodeParser.ISWAP - 32)) | (1 << (qcodeParser.MEASURE - 32)) | (1 << (qcodeParser.QIF - 32)) | (1 << (qcodeParser.QWHILE - 32)) | (1 << (qcodeParser.BANG - 32)) | (1 << (qcodeParser.TILDE - 32)) | (1 << (qcodeParser.LOGIC_AND - 32)) | (1 << (qcodeParser.AND - 32)) | (1 << (qcodeParser.INC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (qcodeParser.DEC - 64)) | (1 << (qcodeParser.ADD - 64)) | (1 << (qcodeParser.SUB - 64)) | (1 << (qcodeParser.MUL - 64)) | (1 << (qcodeParser.POW - 64)) | (1 << (qcodeParser.LBRACE - 64)) | (1 << (qcodeParser.SEMI - 64)) | (1 << (qcodeParser.LPAREN - 64)) | (1 << (qcodeParser.Identifier - 64)) | (1 << (qcodeParser.Constant - 64)) | (1 << (qcodeParser.Digit_Sequence - 64)))) !== 0)) {
				{
				{
				this.state = 824;
				this.q_if_stmt_item();
				}
				}
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public q_if_stmt_item(): Q_if_stmt_itemContext {
		let _localctx: Q_if_stmt_itemContext = new Q_if_stmt_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, qcodeParser.RULE_q_if_stmt_item);
		try {
			this.state = 833;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,60,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 830;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 831;
				this.declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 832;
				this.literal_declaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public q_while_operation(): Q_while_operationContext {
		let _localctx: Q_while_operationContext = new Q_while_operationContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, qcodeParser.RULE_q_while_operation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 835;
			this.match(qcodeParser.QWHILE);
			this.state = 836;
			this.match(qcodeParser.LPAREN);
			this.state = 837;
			this.q_condition();
			this.state = 838;
			this.match(qcodeParser.RPAREN);
			this.state = 839;
			this.match(qcodeParser.LBRACE);
			this.state = 840;
			this.q_while_stmt();
			this.state = 841;
			this.match(qcodeParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public q_while_stmt(): Q_while_stmtContext {
		let _localctx: Q_while_stmtContext = new Q_while_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, qcodeParser.RULE_q_while_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.PI) | (1 << qcodeParser.LET) | (1 << qcodeParser.INT) | (1 << qcodeParser.FLOAT) | (1 << qcodeParser.IF) | (1 << qcodeParser.FOR) | (1 << qcodeParser.DOUBLE) | (1 << qcodeParser.LEN) | (1 << qcodeParser.QVEC) | (1 << qcodeParser.QUBIT) | (1 << qcodeParser.CVEC) | (1 << qcodeParser.CBIT) | (1 << qcodeParser.H_GATE) | (1 << qcodeParser.X_GATE) | (1 << qcodeParser.NOT_GATE) | (1 << qcodeParser.T_GATE) | (1 << qcodeParser.S_GATE) | (1 << qcodeParser.Y_GATE) | (1 << qcodeParser.Z_GATE) | (1 << qcodeParser.X1_GATE) | (1 << qcodeParser.Y1_GATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (qcodeParser.Z1_GATE - 32)) | (1 << (qcodeParser.U4_GATE - 32)) | (1 << (qcodeParser.RX_GATE - 32)) | (1 << (qcodeParser.RY_GATE - 32)) | (1 << (qcodeParser.RZ_GATE - 32)) | (1 << (qcodeParser.CNOT_GATE - 32)) | (1 << (qcodeParser.CZ_GATE - 32)) | (1 << (qcodeParser.CR_GATE - 32)) | (1 << (qcodeParser.CU_GATE - 32)) | (1 << (qcodeParser.ISWAP - 32)) | (1 << (qcodeParser.MEASURE - 32)) | (1 << (qcodeParser.QIF - 32)) | (1 << (qcodeParser.QWHILE - 32)) | (1 << (qcodeParser.BANG - 32)) | (1 << (qcodeParser.TILDE - 32)) | (1 << (qcodeParser.LOGIC_AND - 32)) | (1 << (qcodeParser.AND - 32)) | (1 << (qcodeParser.INC - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (qcodeParser.DEC - 64)) | (1 << (qcodeParser.ADD - 64)) | (1 << (qcodeParser.SUB - 64)) | (1 << (qcodeParser.MUL - 64)) | (1 << (qcodeParser.POW - 64)) | (1 << (qcodeParser.LBRACE - 64)) | (1 << (qcodeParser.SEMI - 64)) | (1 << (qcodeParser.LPAREN - 64)) | (1 << (qcodeParser.Identifier - 64)) | (1 << (qcodeParser.Constant - 64)) | (1 << (qcodeParser.Digit_Sequence - 64)))) !== 0)) {
				{
				{
				this.state = 843;
				this.q_while_stmt_item();
				}
				}
				this.state = 848;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public q_while_stmt_item(): Q_while_stmt_itemContext {
		let _localctx: Q_while_stmt_itemContext = new Q_while_stmt_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, qcodeParser.RULE_q_while_stmt_item);
		try {
			this.state = 852;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,62,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 849;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 850;
				this.declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 851;
				this.literal_declaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public q_condition(): Q_conditionContext {
		let _localctx: Q_conditionContext = new Q_conditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, qcodeParser.RULE_q_condition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 854;
			this.inclu_exp(0);
			this.state = 860;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===qcodeParser.LOGIC_AND || _la===qcodeParser.LOGIC_OR) {
				{
				{
				this.state = 855;
				this.q_operator();
				this.state = 856;
				this.inclu_exp(0);
				}
				}
				this.state = 862;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public q_operator(): Q_operatorContext {
		let _localctx: Q_operatorContext = new Q_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, qcodeParser.RULE_q_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 863;
			_la = this._input.LA(1);
			if ( !(_la===qcodeParser.LOGIC_AND || _la===qcodeParser.LOGIC_OR) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 12:
			return this.init_DeclaratorList_sempred(_localctx as Init_DeclaratorListContext, predIndex);

		case 13:
			return this.init_Literal_DeclaratorList_sempred(_localctx as Init_Literal_DeclaratorListContext, predIndex);

		case 16:
			return this.declarator_sempred(_localctx as DeclaratorContext, predIndex);

		case 20:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 21:
			return this.logicOr_exp_sempred(_localctx as LogicOr_expContext, predIndex);

		case 22:
			return this.logicAnd_exp_sempred(_localctx as LogicAnd_expContext, predIndex);

		case 23:
			return this.inclu_exp_sempred(_localctx as Inclu_expContext, predIndex);

		case 24:
			return this.exclu_exp_sempred(_localctx as Exclu_expContext, predIndex);

		case 25:
			return this.and_exp_sempred(_localctx as And_expContext, predIndex);

		case 26:
			return this.equal_exp_sempred(_localctx as Equal_expContext, predIndex);

		case 27:
			return this.relation_exp_sempred(_localctx as Relation_expContext, predIndex);

		case 28:
			return this.shift_exp_sempred(_localctx as Shift_expContext, predIndex);

		case 29:
			return this.additive_exp_sempred(_localctx as Additive_expContext, predIndex);

		case 30:
			return this.multi_exp_sempred(_localctx as Multi_expContext, predIndex);

		case 34:
			return this.postfix_exp_sempred(_localctx as Postfix_expContext, predIndex);

		case 35:
			return this.argument_exp_List_sempred(_localctx as Argument_exp_ListContext, predIndex);

		case 37:
			return this.args_type_List_sempred(_localctx as Args_type_ListContext, predIndex);

		case 40:
			return this.initializerList_sempred(_localctx as InitializerListContext, predIndex);

		case 42:
			return this.designatorList_sempred(_localctx as DesignatorListContext, predIndex);

		case 50:
			return this.block_List_sempred(_localctx as Block_ListContext, predIndex);
		}
		return true;
	}
	private init_DeclaratorList_sempred(_localctx: Init_DeclaratorListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private init_Literal_DeclaratorList_sempred(_localctx: Init_Literal_DeclaratorListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private declarator_sempred(_localctx: DeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicOr_exp_sempred(_localctx: LogicOr_expContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicAnd_exp_sempred(_localctx: LogicAnd_expContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private inclu_exp_sempred(_localctx: Inclu_expContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exclu_exp_sempred(_localctx: Exclu_expContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private and_exp_sempred(_localctx: And_expContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equal_exp_sempred(_localctx: Equal_expContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 2);

		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relation_exp_sempred(_localctx: Relation_expContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 3);

		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shift_exp_sempred(_localctx: Shift_expContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 2);

		case 16:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additive_exp_sempred(_localctx: Additive_expContext, predIndex: number): boolean {
		switch (predIndex) {
		case 17:
			return this.precpred(this._ctx, 2);

		case 18:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multi_exp_sempred(_localctx: Multi_expContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.precpred(this._ctx, 4);

		case 20:
			return this.precpred(this._ctx, 3);

		case 21:
			return this.precpred(this._ctx, 2);

		case 22:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private postfix_exp_sempred(_localctx: Postfix_expContext, predIndex: number): boolean {
		switch (predIndex) {
		case 23:
			return this.precpred(this._ctx, 4);

		case 24:
			return this.precpred(this._ctx, 3);

		case 25:
			return this.precpred(this._ctx, 2);

		case 26:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private argument_exp_List_sempred(_localctx: Argument_exp_ListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 27:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private args_type_List_sempred(_localctx: Args_type_ListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 28:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private initializerList_sempred(_localctx: InitializerListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 29:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private designatorList_sempred(_localctx: DesignatorListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 30:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private block_List_sempred(_localctx: Block_ListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 31:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03]\u0364\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#"+
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+"+
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044"+
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x03\x02\x07\x02\xA6\n\x02\f\x02\x0E\x02\xA9"+
		"\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xB0\n\x03\x03\x04"+
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06"+
		"\x03\x07\x05\x07\xBD\n\x07\x03\x07\x03\x07\x03\x07\x03\b\x05\b\xC3\n\b"+
		"\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t\xCB\n\t\x03\n\x03\n\x03\v\x03"+
		"\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03"+
		"\x0E\x07\x0E\xDB\n\x0E\f\x0E\x0E\x0E\xDE\v\x0E\x03\x0F\x03\x0F\x03\x0F"+
		"\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xE6\n\x0F\f\x0F\x0E\x0F\xE9\v\x0F\x03"+
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xF0\n\x10\x03\x11\x03\x11"+
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12"+
		"\x03\x12\x07\x12\xFE\n\x12\f\x12\x0E\x12\u0101\v\x12\x03\x13\x03\x13\x03"+
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u010A\n\x13\x03\x14\x03\x14"+
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0114\n\x15\x03"+
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u011C\n\x16\f\x16"+
		"\x0E\x16\u011F\v\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07"+
		"\x17\u0127\n\x17\f\x17\x0E\x17\u012A\v\x17\x03\x18\x03\x18\x03\x18\x03"+
		"\x18\x03\x18\x03\x18\x07\x18\u0132\n\x18\f\x18\x0E\x18\u0135\v\x18\x03"+
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u013D\n\x19\f\x19"+
		"\x0E\x19\u0140\v\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07"+
		"\x1A\u0148\n\x1A\f\x1A\x0E\x1A\u014B\v\x1A\x03\x1B\x03\x1B\x03\x1B\x03"+
		"\x1B\x03\x1B\x03\x1B\x07\x1B\u0153\n\x1B\f\x1B\x0E\x1B\u0156\v\x1B\x03"+
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07"+
		"\x1C\u0161\n\x1C\f\x1C\x0E\x1C\u0164\v\x1C\x03\x1D\x03\x1D\x03\x1D\x03"+
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03"+
		"\x1D\x03\x1D\x03\x1D\x07\x1D\u0175\n\x1D\f\x1D\x0E\x1D\u0178\v\x1D\x03"+
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07"+
		"\x1E\u0183\n\x1E\f\x1E\x0E\x1E\u0186\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03"+
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0191\n\x1F\f\x1F"+
		"\x0E\x1F\u0194\v\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03"+
		" \x03 \x03 \x03 \x03 \x03 \x07 \u01A5\n \f \x0E \u01A8\v \x03!\x03!\x05"+
		"!\u01AC\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\""+
		"\x05\"\u01B8\n\"\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05"+
		"$\u01C4\n$\x03$\x03$\x03$\x03$\x03$\x05$\u01CB\n$\x03$\x03$\x03$\x03$"+
		"\x03$\x07$\u01D2\n$\f$\x0E$\u01D5\v$\x03%\x03%\x03%\x03%\x03%\x03%\x07"+
		"%\u01DD\n%\f%\x0E%\u01E0\v%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05"+
		"&\u01EA\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u01F2\n\'\f\'\x0E"+
		"\'\u01F5\v\'\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05"+
		")\u0202\n)\x03*\x03*\x05*\u0206\n*\x03*\x03*\x03*\x03*\x03*\x05*\u020D"+
		"\n*\x03*\x07*\u0210\n*\f*\x0E*\u0213\v*\x03+\x03+\x03+\x03,\x03,\x03,"+
		"\x03,\x03,\x07,\u021D\n,\f,\x0E,\u0220\v,\x03-\x03-\x03-\x03-\x03.\x03"+
		".\x03/\x03/\x03/\x030\x030\x030\x050\u022E\n0\x030\x030\x031\x031\x03"+
		"1\x032\x032\x032\x032\x052\u0239\n2\x033\x033\x053\u023D\n3\x033\x033"+
		"\x034\x034\x034\x034\x034\x074\u0246\n4\f4\x0E4\u0249\v4\x035\x035\x03"+
		"5\x055\u024E\n5\x036\x036\x036\x036\x036\x036\x036\x036\x056\u0258\n6"+
		"\x037\x057\u025B\n7\x037\x037\x038\x038\x038\x038\x038\x038\x038\x058"+
		"\u0266\n8\x039\x039\x039\x039\x039\x039\x03:\x05:\u026F\n:\x03:\x05:\u0272"+
		"\n:\x03:\x05:\u0275\n:\x03:\x03:\x05:\u0279\n:\x03;\x03;\x03;\x03;\x05"+
		";\u027F\n;\x03<\x03<\x03=\x03=\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x03"+
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03"+
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03"+
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03"+
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03"+
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03"+
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03"+
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03"+
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u02F5\n?\x03@\x03@\x03@\x03@\x03"+
		"@\x03@\x03@\x03@\x03A\x03A\x03B\x03B\x03C\x03C\x03D\x03D\x03E\x03E\x03"+
		"F\x03F\x03F\x03F\x03F\x03F\x05F\u030F\nF\x03G\x03G\x03G\x03G\x03H\x03"+
		"H\x03H\x03H\x03H\x03H\x05H\u031B\nH\x03I\x03I\x03I\x03I\x03I\x03I\x03"+
		"I\x03I\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u032B\nJ\x03K\x03K\x03K\x03"+
		"K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u0339\nK\x03L\x07L\u033C"+
		"\nL\fL\x0EL\u033F\vL\x03M\x03M\x03M\x05M\u0344\nM\x03N\x03N\x03N\x03N"+
		"\x03N\x03N\x03N\x03N\x03O\x07O\u034F\nO\fO\x0EO\u0352\vO\x03P\x03P\x03"+
		"P\x05P\u0357\nP\x03Q\x03Q\x03Q\x03Q\x07Q\u035D\nQ\fQ\x0EQ\u0360\vQ\x03"+
		"R\x03R\x03R\x02\x02\x16\x1A\x1C\"*,.02468:<>FHLRVfS\x02\x02\x04\x02\x06"+
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02"+
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02"+
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02"+
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02"+
		"j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02"+
		"\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02"+
		"\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\x02\n\x03\x02"+
		"\x03\x04\x03\x02\x0E\x10\x04\x02\b\t\x12\x12\x03\x02\x15\x16\x03\x02\x17"+
		"\x18\x04\x0211IL\x05\x0245==CF\x03\x02;<\u037E\x02\xA7\x03\x02\x02\x02"+
		"\x04\xAF\x03\x02\x02\x02\x06\xB1\x03\x02\x02\x02\b\xB7\x03\x02\x02\x02"+
		"\n\xB9\x03\x02\x02\x02\f\xBC\x03\x02\x02\x02\x0E\xC2\x03\x02\x02\x02\x10"+
		"\xCA\x03\x02\x02\x02\x12\xCC\x03\x02\x02\x02\x14\xCE\x03\x02\x02\x02\x16"+
		"\xD0\x03\x02\x02\x02\x18\xD2\x03\x02\x02\x02\x1A\xD4\x03\x02\x02\x02\x1C"+
		"\xDF\x03\x02\x02\x02\x1E\xEF\x03\x02\x02\x02 \xF1\x03\x02\x02\x02\"\xF5"+
		"\x03\x02\x02\x02$\u0109\x03\x02\x02\x02&\u010B\x03\x02\x02\x02(\u010D"+
		"\x03\x02\x02\x02*\u0115\x03\x02\x02\x02,\u0120\x03\x02\x02\x02.\u012B"+
		"\x03\x02\x02\x020\u0136\x03\x02\x02\x022\u0141\x03\x02\x02\x024\u014C"+
		"\x03\x02\x02\x026\u0157\x03\x02\x02\x028\u0165\x03\x02\x02\x02:\u0179"+
		"\x03\x02\x02\x02<\u0187\x03\x02\x02\x02>\u0195\x03\x02\x02\x02@\u01AB"+
		"\x03\x02\x02\x02B\u01B7\x03\x02\x02\x02D\u01B9\x03\x02\x02\x02F\u01BB"+
		"\x03\x02\x02\x02H\u01D6\x03\x02\x02\x02J\u01E9\x03\x02\x02\x02L\u01EB"+
		"\x03\x02\x02\x02N\u01F6\x03\x02\x02\x02P\u0201\x03\x02\x02\x02R\u0203"+
		"\x03\x02\x02\x02T\u0214\x03\x02\x02\x02V\u0217\x03\x02\x02\x02X\u0221"+
		"\x03\x02\x02\x02Z\u0225\x03\x02\x02\x02\\\u0227\x03\x02\x02\x02^\u022A"+
		"\x03\x02\x02\x02`\u0231\x03\x02\x02\x02b\u0238\x03\x02\x02\x02d\u023A"+
		"\x03\x02\x02\x02f\u0240\x03\x02\x02\x02h\u024D\x03\x02\x02\x02j\u0257"+
		"\x03\x02\x02\x02l\u025A\x03\x02\x02\x02n\u025E\x03\x02\x02\x02p\u0267"+
		"\x03\x02\x02\x02r\u026E\x03\x02\x02\x02t\u027E\x03\x02\x02\x02v\u0280"+
		"\x03\x02\x02\x02x\u0282\x03\x02\x02\x02z\u0284\x03\x02\x02\x02|\u02F4"+
		"\x03\x02\x02\x02~\u02F6\x03\x02\x02\x02\x80\u02FE\x03\x02\x02\x02\x82"+
		"\u0300\x03\x02\x02\x02\x84\u0302\x03\x02\x02\x02\x86\u0304\x03\x02\x02"+
		"\x02\x88\u0306\x03\x02\x02\x02\x8A\u030E\x03\x02\x02\x02\x8C\u0310\x03"+
		"\x02\x02\x02\x8E\u031A\x03\x02\x02\x02\x90\u031C\x03\x02\x02\x02\x92\u032A"+
		"\x03\x02\x02\x02\x94\u032C\x03\x02\x02\x02\x96\u033D\x03\x02\x02\x02\x98"+
		"\u0343\x03\x02\x02\x02\x9A\u0345\x03\x02\x02\x02\x9C\u0350\x03\x02\x02"+
		"\x02\x9E\u0356\x03\x02\x02\x02\xA0\u0358\x03\x02\x02\x02\xA2\u0361\x03"+
		"\x02\x02\x02\xA4\xA6\x05\x04\x03\x02\xA5\xA4\x03\x02\x02\x02\xA6\xA9\x03"+
		"\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\x03\x03"+
		"\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xB0\x05\x06\x04\x02\xAB\xB0\x05"+
		"\f\x07\x02\xAC\xB0\x05\x0E\b\x02\xAD\xB0\x05\\/\x02\xAE\xB0\x05`1\x02"+
		"\xAF\xAA\x03\x02\x02\x02\xAF\xAB\x03\x02\x02\x02\xAF\xAC\x03\x02\x02\x02"+
		"\xAF\xAD\x03\x02\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\x05\x03\x02\x02\x02"+
		"\xB1\xB2\x07\x07\x02\x02\xB2\xB3\x05\b\x05\x02\xB3\xB4\x07X\x02\x02\xB4"+
		"\xB5\x05\n\x06\x02\xB5\xB6\x05\b\x05\x02\xB6\x07\x03\x02\x02\x02\xB7\xB8"+
		"\t\x02\x02\x02\xB8\t\x03\x02\x02\x02\xB9\xBA\t\x03\x02\x02\xBA\v\x03\x02"+
		"\x02\x02\xBB\xBD\x05\x10\t\x02\xBC\xBB\x03\x02\x02\x02\xBC\xBD\x03\x02"+
		"\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x05\x1A\x0E\x02\xBF\xC0\x07Q"+
		"\x02\x02\xC0\r\x03\x02\x02\x02\xC1\xC3\x05\x12\n\x02\xC2\xC1\x03\x02\x02"+
		"\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x05\x1C\x0F"+
		"\x02\xC5\xC6\x07Q\x02\x02\xC6\x0F\x03\x02\x02\x02\xC7\xCB\x05\x16\f\x02"+
		"\xC8\xCB\x05\x14\v\x02\xC9\xCB\x05\x18\r\x02\xCA\xC7\x03\x02\x02\x02\xCA"+
		"\xC8\x03\x02\x02\x02\xCA\xC9\x03\x02\x02\x02\xCB\x11\x03\x02\x02\x02\xCC"+
		"\xCD\x07\x06\x02\x02\xCD\x13\x03\x02\x02\x02\xCE\xCF\t\x04\x02\x02\xCF"+
		"\x15\x03\x02\x02\x02\xD0\xD1\t\x05\x02\x02\xD1\x17\x03\x02\x02\x02\xD2"+
		"\xD3\t\x06\x02\x02\xD3\x19\x03\x02\x02\x02\xD4\xD5\b\x0E\x01\x02\xD5\xD6"+
		"\x05\x1E\x10\x02\xD6\xDC\x03\x02\x02\x02\xD7\xD8\f\x03\x02\x02\xD8\xD9"+
		"\x07R\x02\x02\xD9\xDB\x05\x1E\x10\x02\xDA\xD7\x03\x02\x02\x02\xDB\xDE"+
		"\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\x1B"+
		"\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE0\b\x0F\x01\x02\xE0\xE1"+
		"\x05 \x11\x02\xE1\xE7\x03\x02\x02\x02\xE2\xE3\f\x03\x02\x02\xE3\xE4\x07"+
		"R\x02\x02\xE4\xE6\x05 \x11\x02\xE5\xE2\x03\x02\x02\x02\xE6\xE9\x03\x02"+
		"\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\x1D\x03\x02"+
		"\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xF0\x05\"\x12\x02\xEB\xEC\x05\"\x12"+
		"\x02\xEC\xED\x071\x02\x02\xED\xEE\x05P)\x02\xEE\xF0\x03\x02\x02\x02\xEF"+
		"\xEA\x03\x02\x02\x02\xEF\xEB\x03\x02\x02\x02\xF0\x1F\x03\x02\x02\x02\xF1"+
		"\xF2\x05\"\x12\x02\xF2\xF3\x071\x02\x02\xF3\xF4\x05P)\x02\xF4!\x03\x02"+
		"\x02\x02\xF5\xF6\b\x12\x01\x02\xF6\xF7\x07X\x02\x02\xF7\xFF\x03\x02\x02"+
		"\x02\xF8\xF9\f\x03\x02\x02\xF9\xFA\x07V\x02\x02\xFA\xFB\x05$\x13\x02\xFB"+
		"\xFC\x07W\x02\x02\xFC\xFE\x03\x02\x02\x02\xFD\xF8\x03\x02\x02\x02\xFE"+
		"\u0101\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02"+
		"\u0100#\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0102\u010A\x05(\x15"+
		"\x02\u0103\u0104\x05B\"\x02\u0104\u0105\x05&\x14\x02\u0105\u0106\x05$"+
		"\x13\x02\u0106\u010A\x03\x02\x02\x02\u0107\u010A\x07Z\x02\x02\u0108\u010A"+
		"\x07Y\x02\x02\u0109\u0102\x03\x02\x02\x02\u0109\u0103\x03\x02\x02\x02"+
		"\u0109\u0107\x03\x02\x02\x02\u0109\u0108\x03\x02\x02\x02\u010A%\x03\x02"+
		"\x02\x02\u010B\u010C\t\x07\x02\x02\u010C\'\x03\x02\x02\x02\u010D\u0113"+
		"\x05,\x17\x02\u010E\u010F\x07@\x02\x02\u010F\u0110\x05*\x16\x02\u0110"+
		"\u0111\x076\x02\x02\u0111\u0112\x05(\x15\x02\u0112\u0114\x03\x02\x02\x02"+
		"\u0113\u010E\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114)\x03\x02"+
		"\x02\x02\u0115\u0116\b\x16\x01\x02\u0116\u0117\x05$\x13\x02\u0117\u011D"+
		"\x03\x02\x02\x02\u0118\u0119\f\x03\x02\x02\u0119\u011A\x07R\x02\x02\u011A"+
		"\u011C\x05$\x13\x02\u011B\u0118\x03\x02\x02\x02\u011C\u011F\x03\x02\x02"+
		"\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E+\x03"+
		"\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0121\b\x17\x01\x02\u0121"+
		"\u0122\x05.\x18\x02\u0122\u0128\x03\x02\x02\x02\u0123\u0124\f\x03\x02"+
		"\x02\u0124\u0125\x07<\x02\x02\u0125\u0127\x05.\x18\x02\u0126\u0123\x03"+
		"\x02\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128"+
		"\u0129\x03\x02\x02\x02\u0129-\x03\x02\x02\x02\u012A\u0128\x03\x02\x02"+
		"\x02\u012B\u012C\b\x18\x01\x02\u012C\u012D\x050\x19\x02\u012D\u0133\x03"+
		"\x02\x02\x02\u012E\u012F\f\x03\x02\x02\u012F\u0130\x07;\x02\x02\u0130"+
		"\u0132\x050\x19\x02\u0131\u012E\x03\x02\x02\x02\u0132\u0135\x03\x02\x02"+
		"\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134/\x03"+
		"\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0136\u0137\b\x19\x01\x02\u0137"+
		"\u0138\x052\x1A\x02\u0138\u013E\x03\x02\x02\x02\u0139\u013A\f\x03\x02"+
		"\x02\u013A\u013B\x07?\x02\x02\u013B\u013D\x052\x1A\x02\u013C\u0139\x03"+
		"\x02\x02\x02\u013D\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E"+
		"\u013F\x03\x02\x02\x02\u013F1\x03\x02\x02\x02\u0140\u013E\x03\x02\x02"+
		"\x02\u0141\u0142\b\x1A\x01\x02\u0142\u0143\x054\x1B\x02\u0143\u0149\x03"+
		"\x02\x02\x02\u0144\u0145\f\x03\x02\x02\u0145\u0146\x07>\x02\x02\u0146"+
		"\u0148\x054\x1B\x02\u0147\u0144\x03\x02\x02\x02\u0148\u014B\x03\x02\x02"+
		"\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A3\x03"+
		"\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014C\u014D\b\x1B\x01\x02\u014D"+
		"\u014E\x056\x1C\x02\u014E\u0154\x03\x02\x02\x02\u014F\u0150\f\x03\x02"+
		"\x02\u0150\u0151\x07=\x02\x02\u0151\u0153\x056\x1C\x02\u0152\u014F\x03"+
		"\x02\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154"+
		"\u0155\x03\x02\x02\x02\u01555\x03\x02\x02\x02\u0156\u0154\x03\x02\x02"+
		"\x02\u0157\u0158\b\x1C\x01\x02\u0158\u0159\x058\x1D\x02\u0159\u0162\x03"+
		"\x02\x02\x02\u015A\u015B\f\x04\x02\x02\u015B\u015C\x077\x02\x02\u015C"+
		"\u0161\x058\x1D\x02\u015D\u015E\f\x03\x02\x02\u015E\u015F\x07:\x02\x02"+
		"\u015F\u0161\x058\x1D\x02\u0160\u015A\x03\x02\x02\x02\u0160\u015D\x03"+
		"\x02\x02\x02\u0161\u0164\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0162"+
		"\u0163\x03\x02\x02\x02\u01637\x03\x02\x02\x02\u0164\u0162\x03\x02\x02"+
		"\x02\u0165\u0166\b\x1D\x01\x02\u0166\u0167\x05:\x1E\x02\u0167\u0176\x03"+
		"\x02\x02\x02\u0168\u0169\f\x06\x02\x02\u0169\u016A\x072\x02\x02\u016A"+
		"\u0175\x05:\x1E\x02\u016B\u016C\f\x05\x02\x02\u016C\u016D\x073\x02\x02"+
		"\u016D\u0175\x05:\x1E\x02\u016E\u016F\f\x04\x02\x02\u016F\u0170\x079\x02"+
		"\x02\u0170\u0175\x05:\x1E\x02\u0171\u0172\f\x03\x02\x02\u0172\u0173\x07"+
		"8\x02\x02\u0173\u0175\x05:\x1E\x02\u0174\u0168\x03\x02\x02\x02\u0174\u016B"+
		"\x03\x02\x02\x02\u0174\u016E\x03\x02\x02\x02\u0174\u0171\x03\x02\x02\x02"+
		"\u0175\u0178\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0176\u0177\x03"+
		"\x02\x02\x02\u01779\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0179"+
		"\u017A\b\x1E\x01\x02\u017A\u017B\x05<\x1F\x02\u017B\u0184\x03\x02\x02"+
		"\x02\u017C\u017D\f\x04\x02\x02\u017D\u017E\x07M\x02\x02\u017E\u0183\x05"+
		"<\x1F\x02\u017F\u0180\f\x03\x02\x02\u0180\u0181\x07N\x02\x02\u0181\u0183"+
		"\x05<\x1F\x02\u0182\u017C\x03\x02\x02\x02\u0182\u017F\x03\x02\x02\x02"+
		"\u0183\u0186\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0185\x03"+
		"\x02\x02\x02\u0185;\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0187"+
		"\u0188\b\x1F\x01\x02\u0188\u0189\x05> \x02\u0189\u0192\x03\x02\x02\x02"+
		"\u018A\u018B\f\x04\x02\x02\u018B\u018C\x07C\x02\x02\u018C\u0191\x05> "+
		"\x02\u018D\u018E\f\x03\x02\x02\u018E\u018F\x07D\x02\x02\u018F\u0191\x05"+
		"> \x02\u0190\u018A\x03\x02\x02\x02\u0190\u018D\x03\x02\x02\x02\u0191\u0194"+
		"\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02"+
		"\u0193=\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0195\u0196\b \x01"+
		"\x02\u0196\u0197\x05@!\x02\u0197\u01A6\x03\x02\x02\x02\u0198\u0199\f\x06"+
		"\x02\x02\u0199\u019A\x07E\x02\x02\u019A\u01A5\x05@!\x02\u019B\u019C\f"+
		"\x05\x02\x02\u019C\u019D\x07G\x02\x02\u019D\u01A5\x05@!\x02\u019E\u019F"+
		"\f\x04\x02\x02\u019F\u01A0\x07H\x02\x02\u01A0\u01A5\x05@!\x02\u01A1\u01A2"+
		"\f\x03\x02\x02\u01A2\u01A3\x07F\x02\x02\u01A3\u01A5\x05@!\x02\u01A4\u0198"+
		"\x03\x02\x02\x02\u01A4\u019B\x03\x02\x02\x02\u01A4\u019E\x03\x02\x02\x02"+
		"\u01A4\u01A1\x03\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03"+
		"\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7?\x03\x02\x02\x02\u01A8"+
		"\u01A6\x03\x02\x02\x02\u01A9\u01AC\x05B\"\x02\u01AA\u01AC\x07Z\x02\x02"+
		"\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01ACA\x03\x02"+
		"\x02\x02\u01AD\u01B8\x05F$\x02\u01AE\u01AF\x07A\x02\x02\u01AF\u01B8\x05"+
		"B\"\x02\u01B0\u01B1\x07B\x02\x02\u01B1\u01B8\x05B\"\x02\u01B2\u01B3\x05"+
		"D#\x02\u01B3\u01B4\x05@!\x02\u01B4\u01B8\x03\x02\x02\x02\u01B5\u01B6\x07"+
		";\x02\x02\u01B6\u01B8\x07X\x02\x02\u01B7\u01AD\x03\x02\x02\x02\u01B7\u01AE"+
		"\x03\x02\x02\x02\u01B7\u01B0\x03\x02\x02\x02\u01B7\u01B2\x03\x02\x02\x02"+
		"\u01B7\u01B5\x03\x02\x02\x02\u01B8C\x03\x02\x02\x02\u01B9\u01BA\t\b\x02"+
		"\x02\u01BAE\x03\x02\x02\x02\u01BB\u01BC\b$\x01\x02\u01BC\u01BD\x05J&\x02"+
		"\u01BD\u01D3\x03\x02\x02\x02\u01BE\u01BF\f\x06\x02\x02\u01BF\u01C0\x07"+
		"V\x02\x02\u01C0\u01C3\x05*\x16\x02\u01C1\u01C2\x076\x02\x02\u01C2\u01C4"+
		"\x05*\x16\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02"+
		"\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x07W\x02\x02\u01C6\u01D2\x03"+
		"\x02\x02\x02\u01C7\u01C8\f\x05\x02\x02\u01C8\u01CA\x07T\x02\x02\u01C9"+
		"\u01CB\x05H%\x02\u01CA\u01C9\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02"+
		"\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01D2\x07U\x02\x02\u01CD\u01CE\f\x04"+
		"\x02\x02\u01CE\u01D2\x07A\x02\x02\u01CF\u01D0\f\x03\x02\x02\u01D0\u01D2"+
		"\x07B\x02\x02\u01D1\u01BE\x03\x02\x02\x02\u01D1\u01C7\x03\x02\x02\x02"+
		"\u01D1\u01CD\x03\x02\x02\x02\u01D1\u01CF\x03\x02\x02\x02\u01D2\u01D5\x03"+
		"\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4"+
		"G\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6\u01D7\b%\x01\x02\u01D7"+
		"\u01D8\x05$\x13\x02\u01D8\u01DE\x03\x02\x02\x02\u01D9\u01DA\f\x03\x02"+
		"\x02\u01DA\u01DB\x07R\x02\x02\u01DB\u01DD\x05$\x13\x02\u01DC\u01D9\x03"+
		"\x02\x02\x02\u01DD\u01E0\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE"+
		"\u01DF\x03\x02\x02\x02\u01DFI\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02"+
		"\x02\u01E1\u01EA\x07X\x02\x02\u01E2\u01EA\x07Y\x02\x02\u01E3\u01E4\x07"+
		"T\x02\x02\u01E4\u01E5\x05*\x16\x02\u01E5\u01E6\x07U\x02\x02\u01E6\u01EA"+
		"\x03\x02\x02\x02\u01E7\u01EA\x07\x13\x02\x02\u01E8\u01EA\x07\x05\x02\x02"+
		"\u01E9\u01E1\x03\x02\x02\x02\u01E9\u01E2\x03\x02\x02\x02\u01E9\u01E3\x03"+
		"\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01EA"+
		"K\x03\x02\x02\x02\u01EB\u01EC\b\'\x01\x02\u01EC\u01ED\x05N(\x02\u01ED"+
		"\u01F3\x03\x02\x02\x02\u01EE\u01EF\f\x03\x02\x02\u01EF\u01F0\x07R\x02"+
		"\x02\u01F0\u01F2\x05N(\x02\u01F1\u01EE\x03\x02\x02\x02\u01F2\u01F5\x03"+
		"\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4"+
		"M\x03\x02\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F6\u01F7\x05\x10\t\x02"+
		"\u01F7\u01F8\x05\"\x12\x02\u01F8O\x03\x02\x02\x02\u01F9\u0202\x05$\x13"+
		"\x02\u01FA\u01FB\x07O\x02\x02\u01FB\u01FC\x05R*\x02\u01FC\u01FD\x07R\x02"+
		"\x02\u01FD\u01FE\x05R*\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0200\x07"+
		"P\x02\x02\u0200\u0202\x03\x02\x02\x02\u0201\u01F9\x03\x02\x02\x02\u0201"+
		"\u01FA\x03\x02\x02\x02\u0202Q\x03\x02\x02\x02\u0203\u0205\b*\x01\x02\u0204"+
		"\u0206\x05T+\x02\u0205\u0204\x03\x02\x02\x02\u0205\u0206\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0206\u0207\x03\x02\x02\x02\u0207\u0208\x05P)\x02\u0208\u0211\x03"+
		"\x02\x02\x02\u0209\u020A\f\x03\x02\x02\u020A\u020C\x07R\x02\x02\u020B"+
		"\u020D\x05T+\x02\u020C\u020B\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02"+
		"\u020D\u020E\x03\x02\x02\x02\u020E\u0210\x05P)\x02\u020F\u0209\x03\x02"+
		"\x02\x02\u0210\u0213\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02\u0211"+
		"\u0212\x03\x02\x02\x02\u0212S\x03\x02\x02\x02\u0213\u0211\x03\x02\x02"+
		"\x02\u0214\u0215\x05V,\x02\u0215\u0216\x071\x02\x02\u0216U\x03\x02\x02"+
		"\x02\u0217\u0218\b,\x01\x02\u0218\u0219\x05X-\x02\u0219\u021E\x03\x02"+
		"\x02\x02\u021A\u021B\f\x03\x02\x02\u021B\u021D\x05X-\x02\u021C\u021A\x03"+
		"\x02\x02\x02\u021D\u0220\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021E"+
		"\u021F\x03\x02\x02\x02\u021FW\x03\x02\x02\x02\u0220\u021E\x03\x02\x02"+
		"\x02\u0221\u0222\x07V\x02\x02\u0222\u0223\x05Z.\x02\u0223\u0224\x07W\x02"+
		"\x02\u0224Y\x03\x02\x02\x02\u0225\u0226\x05(\x15\x02\u0226[\x03\x02\x02"+
		"\x02\u0227\u0228\x05^0\x02\u0228\u0229\x07Q\x02\x02\u0229]\x03\x02\x02"+
		"\x02\u022A\u022B\x07X\x02\x02\u022B\u022D\x07T\x02\x02\u022C\u022E\x05"+
		"L\'\x02\u022D\u022C\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E"+
		"\u022F\x03\x02\x02\x02\u022F\u0230\x07U\x02\x02\u0230_\x03\x02\x02\x02"+
		"\u0231\u0232\x05^0\x02\u0232\u0233\x05d3\x02\u0233a\x03\x02\x02\x02\u0234"+
		"\u0239\x05\f\x07\x02\u0235\u0236\x05\f\x07\x02\u0236\u0237\x05b2\x02\u0237"+
		"\u0239\x03\x02\x02\x02\u0238\u0234\x03\x02\x02\x02\u0238\u0235\x03\x02"+
		"\x02\x02\u0239c\x03\x02\x02\x02\u023A\u023C\x07O\x02\x02\u023B\u023D\x05"+
		"f4\x02\u023C\u023B\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023E"+
		"\x03\x02\x02\x02\u023E\u023F\x07P\x02\x02\u023Fe\x03\x02\x02\x02\u0240"+
		"\u0241\b4\x01\x02\u0241\u0242\x05h5\x02\u0242\u0247\x03\x02\x02\x02\u0243"+
		"\u0244\f\x03\x02\x02\u0244\u0246\x05h5\x02\u0245\u0243\x03\x02\x02\x02"+
		"\u0246\u0249\x03\x02\x02\x02\u0247\u0245\x03\x02\x02\x02\u0247\u0248\x03"+
		"\x02\x02\x02\u0248g\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u024A"+
		"\u024E\x05j6\x02\u024B\u024E\x05\f\x07\x02\u024C\u024E\x05\x0E\b\x02\u024D"+
		"\u024A\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024D\u024C\x03\x02"+
		"\x02\x02\u024Ei\x03\x02\x02\x02\u024F\u0258\x05l7\x02\u0250\u0258\x05"+
		"d3\x02\u0251\u0258\x05n8\x02\u0252\u0258\x05p9\x02\u0253\u0258\x05z>\x02"+
		"\u0254\u0258\x05\x90I\x02\u0255\u0258\x05\x94K\x02\u0256\u0258\x05\x9A"+
		"N\x02\u0257\u024F\x03\x02\x02\x02\u0257\u0250\x03\x02\x02\x02\u0257\u0251"+
		"\x03\x02\x02\x02\u0257\u0252\x03\x02\x02\x02\u0257\u0253\x03\x02\x02\x02"+
		"\u0257\u0254\x03\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0256\x03"+
		"\x02\x02\x02\u0258k\x03\x02\x02\x02\u0259\u025B\x05*\x16\x02\u025A\u0259"+
		"\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02"+
		"\u025C\u025D\x07Q\x02\x02\u025Dm\x03\x02\x02\x02\u025E\u025F\x07\v\x02"+
		"\x02\u025F\u0260\x07T\x02\x02\u0260\u0261\x05*\x16\x02\u0261\u0262\x07"+
		"U\x02\x02\u0262\u0265\x05j6\x02\u0263\u0264\x07\f\x02\x02\u0264\u0266"+
		"\x05j6\x02\u0265\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266"+
		"o\x03\x02\x02\x02\u0267\u0268\x07\r\x02\x02\u0268\u0269\x07T\x02\x02\u0269"+
		"\u026A\x05r:\x02\u026A\u026B\x07U\x02\x02\u026B\u026C\x05j6\x02\u026C"+
		"q\x03\x02\x02\x02\u026D\u026F\x05t;\x02\u026E\u026D\x03\x02\x02\x02\u026E"+
		"\u026F\x03\x02\x02\x02\u026F\u0271\x03\x02\x02\x02\u0270\u0272\x076\x02"+
		"\x02\u0271\u0270\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0274"+
		"\x03\x02\x02\x02\u0273\u0275\x05v<\x02\u0274\u0273\x03\x02\x02\x02\u0274"+
		"\u0275\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0278\x076\x02"+
		"\x02\u0277\u0279\x05x=\x02\u0278\u0277\x03\x02\x02\x02\u0278\u0279\x03"+
		"\x02\x02\x02\u0279s\x03\x02\x02\x02\u027A\u027F\x05J&\x02\u027B\u027C"+
		"\x07X\x02\x02\u027C\u027D\x071\x02\x02\u027D\u027F\x05*\x16\x02\u027E"+
		"\u027A\x03\x02\x02\x02\u027E\u027B\x03\x02\x02\x02\u027Fu\x03\x02\x02"+
		"\x02\u0280\u0281\x05$\x13\x02\u0281w\x03\x02\x02\x02\u0282\u0283\x05$"+
		"\x13\x02\u0283y\x03\x02\x02\x02\u0284\u0285\x05|?\x02\u0285\u0286\x07"+
		"Q\x02\x02\u0286{\x03\x02\x02\x02\u0287\u0288\x07\x19\x02\x02\u0288\u0289"+
		"\x07T\x02\x02\u0289\u028A\x05\x8AF\x02\u028A\u028B\x07U\x02\x02\u028B"+
		"\u02F5\x03\x02\x02\x02\u028C\u028D\x07\x1A\x02\x02\u028D\u028E\x07T\x02"+
		"\x02\u028E\u028F\x05\x8AF\x02\u028F\u0290\x07U\x02\x02\u0290\u02F5\x03"+
		"\x02\x02\x02\u0291\u0292\x07\x1B\x02\x02\u0292\u0293\x07T\x02\x02\u0293"+
		"\u0294\x05\x8AF\x02\u0294\u0295\x07U\x02\x02\u0295\u02F5\x03\x02\x02\x02"+
		"\u0296\u0297\x07\x1C\x02\x02\u0297\u0298\x07T\x02\x02\u0298\u0299\x05"+
		"\x8AF\x02\u0299\u029A\x07U\x02\x02\u029A\u02F5\x03\x02\x02\x02\u029B\u029C"+
		"\x07\x1D\x02\x02\u029C\u029D\x07T\x02\x02\u029D\u029E\x05\x8AF\x02\u029E"+
		"\u029F\x07U\x02\x02\u029F\u02F5\x03\x02\x02\x02\u02A0\u02A1\x07\x1E\x02"+
		"\x02\u02A1\u02A2\x07T\x02\x02\u02A2\u02A3\x05\x8AF\x02\u02A3\u02A4\x07"+
		"U\x02\x02\u02A4\u02F5\x03\x02\x02\x02\u02A5\u02A6\x07\x1F\x02\x02\u02A6"+
		"\u02A7\x07T\x02\x02\u02A7\u02A8\x05\x8AF\x02\u02A8\u02A9\x07U\x02\x02"+
		"\u02A9\u02F5\x03\x02\x02\x02\u02AA\u02AB\x07 \x02\x02\u02AB\u02AC\x07"+
		"T\x02\x02\u02AC\u02AD\x05\x8AF\x02\u02AD\u02AE\x07U\x02\x02\u02AE\u02F5"+
		"\x03\x02\x02\x02\u02AF\u02B0\x07!\x02\x02\u02B0\u02B1\x07T\x02\x02\u02B1"+
		"\u02B2\x05\x8AF\x02\u02B2\u02B3\x07U\x02\x02\u02B3\u02F5\x03\x02\x02\x02"+
		"\u02B4\u02B5\x07\"\x02\x02\u02B5\u02B6\x07T\x02\x02\u02B6\u02B7\x05\x8A"+
		"F\x02\u02B7\u02B8\x07U\x02\x02\u02B8\u02F5\x03\x02\x02\x02\u02B9\u02BA"+
		"\x07#\x02\x02\u02BA\u02BB\x07T\x02\x02\u02BB\u02BC\x05\x8AF\x02\u02BC"+
		"\u02BD\x07R\x02\x02\u02BD\u02BE\x05~@\x02\u02BE\u02BF\x07U\x02\x02\u02BF"+
		"\u02F5\x03\x02\x02\x02\u02C0\u02C1\x07$\x02\x02\u02C1\u02C2\x07T\x02\x02"+
		"\u02C2\u02C3\x05\x8AF\x02\u02C3\u02C4\x07R\x02\x02\u02C4\u02C5\x05*\x16"+
		"\x02\u02C5\u02C6\x07U\x02\x02\u02C6\u02F5\x03\x02\x02\x02\u02C7\u02C8"+
		"\x07%\x02\x02\u02C8\u02C9\x07T\x02\x02\u02C9\u02CA\x05\x8AF\x02\u02CA"+
		"\u02CB\x07R\x02\x02\u02CB\u02CC\x05*\x16\x02\u02CC\u02CD\x07U\x02\x02"+
		"\u02CD\u02F5\x03\x02\x02\x02\u02CE\u02CF\x07&\x02\x02\u02CF\u02D0\x07"+
		"T\x02\x02\u02D0\u02D1\x05\x8AF\x02\u02D1\u02D2\x07R\x02\x02\u02D2\u02D3"+
		"\x05*\x16\x02\u02D3\u02D4\x07U\x02\x02\u02D4\u02F5\x03\x02\x02\x02\u02D5"+
		"\u02D6\x07\'\x02\x02\u02D6\u02D7\x07T\x02\x02\u02D7\u02D8\x05\x8CG\x02"+
		"\u02D8\u02D9\x07U\x02\x02\u02D9\u02F5\x03\x02\x02\x02\u02DA\u02DB\x07"+
		"(\x02\x02\u02DB\u02DC\x07T\x02\x02\u02DC\u02DD\x05\x8CG\x02\u02DD\u02DE"+
		"\x07U\x02\x02\u02DE\u02F5\x03\x02\x02\x02\u02DF\u02E0\x07*\x02\x02\u02E0"+
		"\u02E1\x07T\x02\x02\u02E1\u02E2\x05\x8CG\x02\u02E2\u02E3\x07R\x02\x02"+
		"\u02E3\u02E4\x05~@\x02\u02E4\u02E5\x07U\x02\x02\u02E5\u02F5\x03\x02\x02"+
		"\x02\u02E6\u02E7\x07+\x02\x02\u02E7\u02E8\x07T\x02\x02\u02E8\u02E9\x05"+
		"\x8CG\x02\u02E9\u02EA\x07R\x02\x02\u02EA\u02EB\x05\x88E\x02\u02EB\u02EC"+
		"\x07U\x02\x02\u02EC\u02F5\x03\x02\x02\x02\u02ED\u02EE\x07)\x02\x02\u02EE"+
		"\u02EF\x07T\x02\x02\u02EF\u02F0\x05\x8CG\x02\u02F0\u02F1\x07R\x02\x02"+
		"\u02F1\u02F2\x05\x88E\x02\u02F2\u02F3\x07U\x02\x02\u02F3\u02F5\x03\x02"+
		"\x02\x02\u02F4\u0287\x03\x02\x02\x02\u02F4\u028C\x03\x02\x02\x02\u02F4"+
		"\u0291\x03\x02\x02\x02\u02F4\u0296\x03\x02\x02\x02\u02F4\u029B\x03\x02"+
		"\x02\x02\u02F4\u02A0\x03\x02\x02\x02\u02F4\u02A5\x03\x02\x02\x02\u02F4"+
		"\u02AA\x03\x02\x02\x02\u02F4\u02AF\x03\x02\x02\x02\u02F4\u02B4\x03\x02"+
		"\x02\x02\u02F4\u02B9\x03\x02\x02\x02\u02F4\u02C0\x03\x02\x02\x02\u02F4"+
		"\u02C7\x03\x02\x02\x02\u02F4\u02CE\x03\x02\x02\x02\u02F4\u02D5\x03\x02"+
		"\x02\x02\u02F4\u02DA\x03\x02\x02\x02\u02F4\u02DF\x03\x02\x02\x02\u02F4"+
		"\u02E6\x03\x02\x02\x02\u02F4\u02ED\x03\x02\x02\x02\u02F5}\x03\x02\x02"+
		"\x02\u02F6\u02F7\x05\x80A\x02\u02F7\u02F8\x07R\x02\x02\u02F8\u02F9\x05"+
		"\x82B\x02\u02F9\u02FA\x07R\x02\x02\u02FA\u02FB\x05\x84C\x02\u02FB\u02FC"+
		"\x07R\x02\x02\u02FC\u02FD\x05\x86D\x02\u02FD\x7F\x03\x02\x02\x02\u02FE"+
		"\u02FF\x05*\x16\x02\u02FF\x81\x03\x02\x02\x02\u0300\u0301\x05*\x16\x02"+
		"\u0301\x83\x03\x02\x02\x02\u0302\u0303\x05*\x16\x02\u0303\x85\x03\x02"+
		"\x02\x02\u0304\u0305\x05*\x16\x02\u0305\x87\x03\x02\x02\x02\u0306\u0307"+
		"\x05*\x16\x02\u0307\x89\x03\x02\x02\x02\u0308\u0309\x07X\x02\x02\u0309"+
		"\u030A\x07V\x02\x02\u030A\u030B\x05*\x16\x02\u030B\u030C\x07W\x02\x02"+
		"\u030C\u030F\x03\x02\x02\x02\u030D\u030F\x07X\x02\x02\u030E\u0308\x03"+
		"\x02\x02\x02\u030E\u030D\x03\x02\x02\x02\u030F\x8B\x03\x02\x02\x02\u0310"+
		"\u0311\x05\x8AF\x02\u0311\u0312\x07R\x02\x02\u0312\u0313\x05\x8EH\x02"+
		"\u0313\x8D\x03\x02\x02\x02\u0314\u0315\x07X\x02\x02\u0315\u0316\x07V\x02"+
		"\x02\u0316\u0317\x05*\x16\x02\u0317\u0318\x07W\x02\x02\u0318\u031B\x03"+
		"\x02\x02\x02\u0319\u031B\x07X\x02\x02\u031A\u0314\x03\x02\x02\x02\u031A"+
		"\u0319\x03\x02\x02\x02\u031B\x8F\x03\x02\x02\x02\u031C\u031D\x07,\x02"+
		"\x02\u031D\u031E\x07T\x02\x02\u031E\u031F\x05\x8AF\x02\u031F\u0320\x07"+
		"R\x02\x02\u0320\u0321\x05\x92J\x02\u0321\u0322\x07U\x02\x02\u0322\u0323"+
		"\x07Q\x02\x02\u0323\x91\x03\x02\x02\x02\u0324\u0325\x07X\x02\x02\u0325"+
		"\u0326\x07V\x02\x02\u0326\u0327\x05*\x16\x02\u0327\u0328\x07W\x02\x02"+
		"\u0328\u032B\x03\x02\x02\x02\u0329\u032B\x07X\x02\x02\u032A\u0324\x03"+
		"\x02\x02\x02\u032A\u0329\x03\x02\x02\x02\u032B\x93\x03\x02\x02\x02\u032C"+
		"\u032D\x07-\x02\x02\u032D\u032E\x07T\x02\x02\u032E\u032F\x05\xA0Q\x02"+
		"\u032F\u0330\x07U\x02\x02\u0330\u0331\x07O\x02\x02\u0331\u0332\x05\x96"+
		"L\x02\u0332\u0338\x07P\x02\x02\u0333\u0334\x07/\x02\x02\u0334\u0335\x07"+
		"O\x02\x02\u0335\u0336\x05\x96L\x02\u0336\u0337\x07P\x02\x02\u0337\u0339"+
		"\x03\x02\x02\x02\u0338\u0333\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02"+
		"\u0339\x95\x03\x02\x02\x02\u033A\u033C\x05\x98M\x02\u033B\u033A\x03\x02"+
		"\x02\x02\u033C\u033F\x03\x02\x02\x02\u033D\u033B\x03\x02\x02\x02\u033D"+
		"\u033E\x03\x02\x02\x02\u033E\x97\x03\x02\x02\x02\u033F\u033D\x03\x02\x02"+
		"\x02\u0340\u0344\x05j6\x02\u0341\u0344\x05\f\x07\x02\u0342\u0344\x05\x0E"+
		"\b\x02\u0343\u0340\x03\x02\x02\x02\u0343\u0341\x03\x02\x02\x02\u0343\u0342"+
		"\x03\x02\x02\x02\u0344\x99\x03\x02\x02\x02\u0345\u0346\x07.\x02\x02\u0346"+
		"\u0347\x07T\x02\x02\u0347\u0348\x05\xA0Q\x02\u0348\u0349\x07U\x02\x02"+
		"\u0349\u034A\x07O\x02\x02\u034A\u034B\x05\x9CO\x02\u034B\u034C\x07P\x02"+
		"\x02\u034C\x9B\x03\x02\x02\x02\u034D\u034F\x05\x9EP\x02\u034E\u034D\x03"+
		"\x02\x02\x02\u034F\u0352\x03\x02\x02\x02\u0350\u034E\x03\x02\x02\x02\u0350"+
		"\u0351\x03\x02\x02\x02\u0351\x9D\x03\x02\x02\x02\u0352\u0350\x03\x02\x02"+
		"\x02\u0353\u0357\x05j6\x02\u0354\u0357\x05\f\x07\x02\u0355\u0357\x05\x0E"+
		"\b\x02\u0356\u0353\x03\x02\x02\x02\u0356\u0354\x03\x02\x02\x02\u0356\u0355"+
		"\x03\x02\x02\x02\u0357\x9F\x03\x02\x02\x02\u0358\u035E\x050\x19\x02\u0359"+
		"\u035A\x05\xA2R\x02\u035A\u035B\x050\x19\x02\u035B\u035D\x03\x02\x02\x02"+
		"\u035C\u0359\x03\x02\x02\x02\u035D\u0360\x03\x02\x02\x02\u035E\u035C\x03"+
		"\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\xA1\x03\x02\x02\x02\u0360"+
		"\u035E\x03\x02\x02\x02\u0361\u0362\t\t\x02\x02\u0362\xA3\x03\x02\x02\x02"+
		"B\xA7\xAF\xBC\xC2\xCA\xDC\xE7\xEF\xFF\u0109\u0113\u011D\u0128\u0133\u013E"+
		"\u0149\u0154\u0160\u0162\u0174\u0176\u0182\u0184\u0190\u0192\u01A4\u01A6"+
		"\u01AB\u01B7\u01C3\u01CA\u01D1\u01D3\u01DE\u01E9\u01F3\u0201\u0205\u020C"+
		"\u0211\u021E\u022D\u0238\u023C\u0247\u024D\u0257\u025A\u0265\u026E\u0271"+
		"\u0274\u0278\u027E\u02F4\u030E\u031A\u032A\u0338\u033D\u0343\u0350\u0356"+
		"\u035E";
	public static readonly _serializedATN: string = Utils.join(
		[
			qcodeParser._serializedATNSegment0,
			qcodeParser._serializedATNSegment1
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!qcodeParser.__ATN) {
			qcodeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(qcodeParser._serializedATN));
		}

		return qcodeParser.__ATN;
	}

}

export class QrunesContext extends ParserRuleContext {
	public lang_unit(): Lang_unitContext[];
	public lang_unit(i: number): Lang_unitContext;
	public lang_unit(i?: number): Lang_unitContext | Lang_unitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Lang_unitContext);
		} else {
			return this.getRuleContext(i, Lang_unitContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_qrunes; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQrunes) listener.enterQrunes(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQrunes) listener.exitQrunes(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQrunes) return visitor.visitQrunes(this);
		else return visitor.visitChildren(this);
	}
}


export class Lang_unitContext extends ParserRuleContext {
	public include_declaration(): Include_declarationContext | undefined {
		return this.tryGetRuleContext(0, Include_declarationContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public literal_declaration(): Literal_declarationContext | undefined {
		return this.tryGetRuleContext(0, Literal_declarationContext);
	}
	public func_declaration(): Func_declarationContext | undefined {
		return this.tryGetRuleContext(0, Func_declarationContext);
	}
	public func_definition(): Func_definitionContext | undefined {
		return this.tryGetRuleContext(0, Func_definitionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_lang_unit; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterLang_unit) listener.enterLang_unit(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitLang_unit) listener.exitLang_unit(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitLang_unit) return visitor.visitLang_unit(this);
		else return visitor.visitChildren(this);
	}
}


export class Include_declarationContext extends ParserRuleContext {
	public INCLUDE(): TerminalNode { return this.getToken(qcodeParser.INCLUDE, 0); }
	public include_sign(): Include_signContext[];
	public include_sign(i: number): Include_signContext;
	public include_sign(i?: number): Include_signContext | Include_signContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Include_signContext);
		} else {
			return this.getRuleContext(i, Include_signContext);
		}
	}
	public Identifier(): TerminalNode { return this.getToken(qcodeParser.Identifier, 0); }
	public postfix(): PostfixContext {
		return this.getRuleContext(0, PostfixContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_include_declaration; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterInclude_declaration) listener.enterInclude_declaration(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitInclude_declaration) listener.exitInclude_declaration(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitInclude_declaration) return visitor.visitInclude_declaration(this);
		else return visitor.visitChildren(this);
	}
}


export class Include_signContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_include_sign; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterInclude_sign) listener.enterInclude_sign(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitInclude_sign) listener.exitInclude_sign(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitInclude_sign) return visitor.visitInclude_sign(this);
		else return visitor.visitChildren(this);
	}
}


export class PostfixContext extends ParserRuleContext {
	public LIB_POSTFIX(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LIB_POSTFIX, 0); }
	public INC_POSTFIX(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.INC_POSTFIX, 0); }
	public QRUNES_POSTFIX(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.QRUNES_POSTFIX, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_postfix; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterPostfix) listener.enterPostfix(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitPostfix) listener.exitPostfix(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitPostfix) return visitor.visitPostfix(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclarationContext extends ParserRuleContext {
	public init_DeclaratorList(): Init_DeclaratorListContext {
		return this.getRuleContext(0, Init_DeclaratorListContext);
	}
	public SEMI(): TerminalNode { return this.getToken(qcodeParser.SEMI, 0); }
	public declaration_Specifier(): Declaration_SpecifierContext | undefined {
		return this.tryGetRuleContext(0, Declaration_SpecifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_declaration; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterDeclaration) listener.enterDeclaration(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitDeclaration) listener.exitDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitDeclaration) return visitor.visitDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class Literal_declarationContext extends ParserRuleContext {
	public init_Literal_DeclaratorList(): Init_Literal_DeclaratorListContext {
		return this.getRuleContext(0, Init_Literal_DeclaratorListContext);
	}
	public SEMI(): TerminalNode { return this.getToken(qcodeParser.SEMI, 0); }
	public literal_type(): Literal_typeContext | undefined {
		return this.tryGetRuleContext(0, Literal_typeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_literal_declaration; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterLiteral_declaration) listener.enterLiteral_declaration(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitLiteral_declaration) listener.exitLiteral_declaration(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitLiteral_declaration) return visitor.visitLiteral_declaration(this);
		else return visitor.visitChildren(this);
	}
}


export class Declaration_SpecifierContext extends ParserRuleContext {
	public quantum_type(): Quantum_typeContext | undefined {
		return this.tryGetRuleContext(0, Quantum_typeContext);
	}
	public primary_type(): Primary_typeContext | undefined {
		return this.tryGetRuleContext(0, Primary_typeContext);
	}
	public assist_classical_type(): Assist_classical_typeContext | undefined {
		return this.tryGetRuleContext(0, Assist_classical_typeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_declaration_Specifier; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterDeclaration_Specifier) listener.enterDeclaration_Specifier(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitDeclaration_Specifier) listener.exitDeclaration_Specifier(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitDeclaration_Specifier) return visitor.visitDeclaration_Specifier(this);
		else return visitor.visitChildren(this);
	}
}


export class Literal_typeContext extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(qcodeParser.LET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_literal_type; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterLiteral_type) listener.enterLiteral_type(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitLiteral_type) listener.exitLiteral_type(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitLiteral_type) return visitor.visitLiteral_type(this);
		else return visitor.visitChildren(this);
	}
}


export class Primary_typeContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.FLOAT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_primary_type; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterPrimary_type) listener.enterPrimary_type(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitPrimary_type) listener.exitPrimary_type(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitPrimary_type) return visitor.visitPrimary_type(this);
		else return visitor.visitChildren(this);
	}
}


export class Quantum_typeContext extends ParserRuleContext {
	public QVEC(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.QVEC, 0); }
	public QUBIT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.QUBIT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_quantum_type; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQuantum_type) listener.enterQuantum_type(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQuantum_type) listener.exitQuantum_type(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQuantum_type) return visitor.visitQuantum_type(this);
		else return visitor.visitChildren(this);
	}
}


export class Assist_classical_typeContext extends ParserRuleContext {
	public CBIT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.CBIT, 0); }
	public CVEC(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.CVEC, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_assist_classical_type; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterAssist_classical_type) listener.enterAssist_classical_type(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitAssist_classical_type) listener.exitAssist_classical_type(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitAssist_classical_type) return visitor.visitAssist_classical_type(this);
		else return visitor.visitChildren(this);
	}
}


export class Init_DeclaratorListContext extends ParserRuleContext {
	public init_Declarator(): Init_DeclaratorContext {
		return this.getRuleContext(0, Init_DeclaratorContext);
	}
	public init_DeclaratorList(): Init_DeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, Init_DeclaratorListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.COMMA, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_init_DeclaratorList; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterInit_DeclaratorList) listener.enterInit_DeclaratorList(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitInit_DeclaratorList) listener.exitInit_DeclaratorList(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitInit_DeclaratorList) return visitor.visitInit_DeclaratorList(this);
		else return visitor.visitChildren(this);
	}
}


export class Init_Literal_DeclaratorListContext extends ParserRuleContext {
	public init_Literal_Declarator(): Init_Literal_DeclaratorContext {
		return this.getRuleContext(0, Init_Literal_DeclaratorContext);
	}
	public init_Literal_DeclaratorList(): Init_Literal_DeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, Init_Literal_DeclaratorListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.COMMA, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_init_Literal_DeclaratorList; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterInit_Literal_DeclaratorList) listener.enterInit_Literal_DeclaratorList(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitInit_Literal_DeclaratorList) listener.exitInit_Literal_DeclaratorList(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitInit_Literal_DeclaratorList) return visitor.visitInit_Literal_DeclaratorList(this);
		else return visitor.visitChildren(this);
	}
}


export class Init_DeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.ASSIGN, 0); }
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_init_Declarator; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterInit_Declarator) listener.enterInit_Declarator(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitInit_Declarator) listener.exitInit_Declarator(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitInit_Declarator) return visitor.visitInit_Declarator(this);
		else return visitor.visitChildren(this);
	}
}


export class Init_Literal_DeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(qcodeParser.ASSIGN, 0); }
	public initializer(): InitializerContext {
		return this.getRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_init_Literal_Declarator; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterInit_Literal_Declarator) listener.enterInit_Literal_Declarator(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitInit_Literal_Declarator) listener.exitInit_Literal_Declarator(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitInit_Literal_Declarator) return visitor.visitInit_Literal_Declarator(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.Identifier, 0); }
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LBRACK, 0); }
	public assignment_exp(): Assignment_expContext | undefined {
		return this.tryGetRuleContext(0, Assignment_expContext);
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RBRACK, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_declarator; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterDeclarator) listener.enterDeclarator(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitDeclarator) listener.exitDeclarator(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitDeclarator) return visitor.visitDeclarator(this);
		else return visitor.visitChildren(this);
	}
}


export class Assignment_expContext extends ParserRuleContext {
	public condition_exp(): Condition_expContext | undefined {
		return this.tryGetRuleContext(0, Condition_expContext);
	}
	public unary_exp(): Unary_expContext | undefined {
		return this.tryGetRuleContext(0, Unary_expContext);
	}
	public assignment_operator(): Assignment_operatorContext | undefined {
		return this.tryGetRuleContext(0, Assignment_operatorContext);
	}
	public assignment_exp(): Assignment_expContext | undefined {
		return this.tryGetRuleContext(0, Assignment_expContext);
	}
	public Digit_Sequence(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.Digit_Sequence, 0); }
	public Constant(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.Constant, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_assignment_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterAssignment_exp) listener.enterAssignment_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitAssignment_exp) listener.exitAssignment_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitAssignment_exp) return visitor.visitAssignment_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Assignment_operatorContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.DIV_ASSIGN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_assignment_operator; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterAssignment_operator) listener.enterAssignment_operator(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitAssignment_operator) listener.exitAssignment_operator(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitAssignment_operator) return visitor.visitAssignment_operator(this);
		else return visitor.visitChildren(this);
	}
}


export class Condition_expContext extends ParserRuleContext {
	public logicOr_exp(): LogicOr_expContext {
		return this.getRuleContext(0, LogicOr_expContext);
	}
	public QUE_MARK(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.QUE_MARK, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.COLON, 0); }
	public condition_exp(): Condition_expContext | undefined {
		return this.tryGetRuleContext(0, Condition_expContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_condition_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterCondition_exp) listener.enterCondition_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitCondition_exp) listener.exitCondition_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitCondition_exp) return visitor.visitCondition_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignment_exp(): Assignment_expContext {
		return this.getRuleContext(0, Assignment_expContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.COMMA, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_expression; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterExpression) listener.enterExpression(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitExpression) listener.exitExpression(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitExpression) return visitor.visitExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class LogicOr_expContext extends ParserRuleContext {
	public logicAnd_exp(): LogicAnd_expContext {
		return this.getRuleContext(0, LogicAnd_expContext);
	}
	public logicOr_exp(): LogicOr_expContext | undefined {
		return this.tryGetRuleContext(0, LogicOr_expContext);
	}
	public LOGIC_OR(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LOGIC_OR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_logicOr_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterLogicOr_exp) listener.enterLogicOr_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitLogicOr_exp) listener.exitLogicOr_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitLogicOr_exp) return visitor.visitLogicOr_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class LogicAnd_expContext extends ParserRuleContext {
	public inclu_exp(): Inclu_expContext {
		return this.getRuleContext(0, Inclu_expContext);
	}
	public logicAnd_exp(): LogicAnd_expContext | undefined {
		return this.tryGetRuleContext(0, LogicAnd_expContext);
	}
	public LOGIC_AND(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LOGIC_AND, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_logicAnd_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterLogicAnd_exp) listener.enterLogicAnd_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitLogicAnd_exp) listener.exitLogicAnd_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitLogicAnd_exp) return visitor.visitLogicAnd_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Inclu_expContext extends ParserRuleContext {
	public exclu_exp(): Exclu_expContext {
		return this.getRuleContext(0, Exclu_expContext);
	}
	public inclu_exp(): Inclu_expContext | undefined {
		return this.tryGetRuleContext(0, Inclu_expContext);
	}
	public INCLU(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.INCLU, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_inclu_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterInclu_exp) listener.enterInclu_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitInclu_exp) listener.exitInclu_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitInclu_exp) return visitor.visitInclu_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Exclu_expContext extends ParserRuleContext {
	public and_exp(): And_expContext {
		return this.getRuleContext(0, And_expContext);
	}
	public exclu_exp(): Exclu_expContext | undefined {
		return this.tryGetRuleContext(0, Exclu_expContext);
	}
	public EXCLU(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.EXCLU, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_exclu_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterExclu_exp) listener.enterExclu_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitExclu_exp) listener.exitExclu_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitExclu_exp) return visitor.visitExclu_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class And_expContext extends ParserRuleContext {
	public equal_exp(): Equal_expContext {
		return this.getRuleContext(0, Equal_expContext);
	}
	public and_exp(): And_expContext | undefined {
		return this.tryGetRuleContext(0, And_expContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.AND, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_and_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterAnd_exp) listener.enterAnd_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitAnd_exp) listener.exitAnd_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitAnd_exp) return visitor.visitAnd_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Equal_expContext extends ParserRuleContext {
	public relation_exp(): Relation_expContext {
		return this.getRuleContext(0, Relation_expContext);
	}
	public equal_exp(): Equal_expContext | undefined {
		return this.tryGetRuleContext(0, Equal_expContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.NOTEQUAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_equal_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterEqual_exp) listener.enterEqual_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitEqual_exp) listener.exitEqual_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitEqual_exp) return visitor.visitEqual_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Relation_expContext extends ParserRuleContext {
	public shift_exp(): Shift_expContext {
		return this.getRuleContext(0, Shift_expContext);
	}
	public relation_exp(): Relation_expContext | undefined {
		return this.tryGetRuleContext(0, Relation_expContext);
	}
	public GT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.GE, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_relation_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterRelation_exp) listener.enterRelation_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitRelation_exp) listener.exitRelation_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitRelation_exp) return visitor.visitRelation_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Shift_expContext extends ParserRuleContext {
	public additive_exp(): Additive_expContext {
		return this.getRuleContext(0, Additive_expContext);
	}
	public shift_exp(): Shift_expContext | undefined {
		return this.tryGetRuleContext(0, Shift_expContext);
	}
	public LSHIFT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LSHIFT, 0); }
	public RSHIFT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RSHIFT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_shift_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterShift_exp) listener.enterShift_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitShift_exp) listener.exitShift_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitShift_exp) return visitor.visitShift_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Additive_expContext extends ParserRuleContext {
	public multi_exp(): Multi_expContext {
		return this.getRuleContext(0, Multi_expContext);
	}
	public additive_exp(): Additive_expContext | undefined {
		return this.tryGetRuleContext(0, Additive_expContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.SUB, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_additive_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterAdditive_exp) listener.enterAdditive_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitAdditive_exp) listener.exitAdditive_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitAdditive_exp) return visitor.visitAdditive_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Multi_expContext extends ParserRuleContext {
	public cast_exp(): Cast_expContext {
		return this.getRuleContext(0, Cast_expContext);
	}
	public multi_exp(): Multi_expContext | undefined {
		return this.tryGetRuleContext(0, Multi_expContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.MOD, 0); }
	public POW(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.POW, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_multi_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterMulti_exp) listener.enterMulti_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitMulti_exp) listener.exitMulti_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitMulti_exp) return visitor.visitMulti_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Cast_expContext extends ParserRuleContext {
	public unary_exp(): Unary_expContext | undefined {
		return this.tryGetRuleContext(0, Unary_expContext);
	}
	public Digit_Sequence(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.Digit_Sequence, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_cast_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterCast_exp) listener.enterCast_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitCast_exp) listener.exitCast_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitCast_exp) return visitor.visitCast_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Unary_expContext extends ParserRuleContext {
	public postfix_exp(): Postfix_expContext | undefined {
		return this.tryGetRuleContext(0, Postfix_expContext);
	}
	public INC(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.INC, 0); }
	public unary_exp(): Unary_expContext | undefined {
		return this.tryGetRuleContext(0, Unary_expContext);
	}
	public DEC(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.DEC, 0); }
	public unary_operator(): Unary_operatorContext | undefined {
		return this.tryGetRuleContext(0, Unary_operatorContext);
	}
	public cast_exp(): Cast_expContext | undefined {
		return this.tryGetRuleContext(0, Cast_expContext);
	}
	public LOGIC_AND(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LOGIC_AND, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_unary_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterUnary_exp) listener.enterUnary_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitUnary_exp) listener.exitUnary_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitUnary_exp) return visitor.visitUnary_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Unary_operatorContext extends ParserRuleContext {
	public ADD(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.SUB, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.MUL, 0); }
	public POW(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.POW, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.BANG, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.TILDE, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.AND, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_unary_operator; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterUnary_operator) listener.enterUnary_operator(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitUnary_operator) listener.exitUnary_operator(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitUnary_operator) return visitor.visitUnary_operator(this);
		else return visitor.visitChildren(this);
	}
}


export class Postfix_expContext extends ParserRuleContext {
	public primary_exp(): Primary_expContext | undefined {
		return this.tryGetRuleContext(0, Primary_expContext);
	}
	public postfix_exp(): Postfix_expContext | undefined {
		return this.tryGetRuleContext(0, Postfix_expContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LBRACK, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RBRACK, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.COLON, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RPAREN, 0); }
	public argument_exp_List(): Argument_exp_ListContext | undefined {
		return this.tryGetRuleContext(0, Argument_exp_ListContext);
	}
	public INC(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.DEC, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_postfix_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterPostfix_exp) listener.enterPostfix_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitPostfix_exp) listener.exitPostfix_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitPostfix_exp) return visitor.visitPostfix_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Argument_exp_ListContext extends ParserRuleContext {
	public assignment_exp(): Assignment_expContext {
		return this.getRuleContext(0, Assignment_expContext);
	}
	public argument_exp_List(): Argument_exp_ListContext | undefined {
		return this.tryGetRuleContext(0, Argument_exp_ListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.COMMA, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_argument_exp_List; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterArgument_exp_List) listener.enterArgument_exp_List(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitArgument_exp_List) listener.exitArgument_exp_List(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitArgument_exp_List) return visitor.visitArgument_exp_List(this);
		else return visitor.visitChildren(this);
	}
}


export class Primary_expContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.Identifier, 0); }
	public Constant(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.Constant, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RPAREN, 0); }
	public LEN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LEN, 0); }
	public PI(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.PI, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_primary_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterPrimary_exp) listener.enterPrimary_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitPrimary_exp) listener.exitPrimary_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitPrimary_exp) return visitor.visitPrimary_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Args_type_ListContext extends ParserRuleContext {
	public args_declaration(): Args_declarationContext {
		return this.getRuleContext(0, Args_declarationContext);
	}
	public args_type_List(): Args_type_ListContext | undefined {
		return this.tryGetRuleContext(0, Args_type_ListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.COMMA, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_args_type_List; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterArgs_type_List) listener.enterArgs_type_List(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitArgs_type_List) listener.exitArgs_type_List(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitArgs_type_List) return visitor.visitArgs_type_List(this);
		else return visitor.visitChildren(this);
	}
}


export class Args_declarationContext extends ParserRuleContext {
	public declaration_Specifier(): Declaration_SpecifierContext {
		return this.getRuleContext(0, Declaration_SpecifierContext);
	}
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_args_declaration; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterArgs_declaration) listener.enterArgs_declaration(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitArgs_declaration) listener.exitArgs_declaration(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitArgs_declaration) return visitor.visitArgs_declaration(this);
		else return visitor.visitChildren(this);
	}
}


export class InitializerContext extends ParserRuleContext {
	public assignment_exp(): Assignment_expContext | undefined {
		return this.tryGetRuleContext(0, Assignment_expContext);
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LBRACE, 0); }
	public initializerList(): InitializerListContext[];
	public initializerList(i: number): InitializerListContext;
	public initializerList(i?: number): InitializerListContext | InitializerListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializerListContext);
		} else {
			return this.getRuleContext(i, InitializerListContext);
		}
	}
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RBRACE, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.COMMA, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_initializer; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterInitializer) listener.enterInitializer(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitInitializer) listener.exitInitializer(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitInitializer) return visitor.visitInitializer(this);
		else return visitor.visitChildren(this);
	}
}


export class InitializerListContext extends ParserRuleContext {
	public initializer(): InitializerContext {
		return this.getRuleContext(0, InitializerContext);
	}
	public designation(): DesignationContext | undefined {
		return this.tryGetRuleContext(0, DesignationContext);
	}
	public initializerList(): InitializerListContext | undefined {
		return this.tryGetRuleContext(0, InitializerListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.COMMA, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_initializerList; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterInitializerList) listener.enterInitializerList(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitInitializerList) listener.exitInitializerList(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitInitializerList) return visitor.visitInitializerList(this);
		else return visitor.visitChildren(this);
	}
}


export class DesignationContext extends ParserRuleContext {
	public designatorList(): DesignatorListContext {
		return this.getRuleContext(0, DesignatorListContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(qcodeParser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_designation; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterDesignation) listener.enterDesignation(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitDesignation) listener.exitDesignation(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitDesignation) return visitor.visitDesignation(this);
		else return visitor.visitChildren(this);
	}
}


export class DesignatorListContext extends ParserRuleContext {
	public designator(): DesignatorContext {
		return this.getRuleContext(0, DesignatorContext);
	}
	public designatorList(): DesignatorListContext | undefined {
		return this.tryGetRuleContext(0, DesignatorListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_designatorList; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterDesignatorList) listener.enterDesignatorList(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitDesignatorList) listener.exitDesignatorList(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitDesignatorList) return visitor.visitDesignatorList(this);
		else return visitor.visitChildren(this);
	}
}


export class DesignatorContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(qcodeParser.LBRACK, 0); }
	public constant_exp(): Constant_expContext {
		return this.getRuleContext(0, Constant_expContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(qcodeParser.RBRACK, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_designator; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterDesignator) listener.enterDesignator(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitDesignator) listener.exitDesignator(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitDesignator) return visitor.visitDesignator(this);
		else return visitor.visitChildren(this);
	}
}


export class Constant_expContext extends ParserRuleContext {
	public condition_exp(): Condition_expContext {
		return this.getRuleContext(0, Condition_expContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_constant_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterConstant_exp) listener.enterConstant_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitConstant_exp) listener.exitConstant_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitConstant_exp) return visitor.visitConstant_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Func_declarationContext extends ParserRuleContext {
	public func_declarator(): Func_declaratorContext {
		return this.getRuleContext(0, Func_declaratorContext);
	}
	public SEMI(): TerminalNode { return this.getToken(qcodeParser.SEMI, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_func_declaration; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterFunc_declaration) listener.enterFunc_declaration(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitFunc_declaration) listener.exitFunc_declaration(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitFunc_declaration) return visitor.visitFunc_declaration(this);
		else return visitor.visitChildren(this);
	}
}


export class Func_declaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(qcodeParser.Identifier, 0); }
	public LPAREN(): TerminalNode { return this.getToken(qcodeParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(qcodeParser.RPAREN, 0); }
	public args_type_List(): Args_type_ListContext | undefined {
		return this.tryGetRuleContext(0, Args_type_ListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_func_declarator; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterFunc_declarator) listener.enterFunc_declarator(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitFunc_declarator) listener.exitFunc_declarator(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitFunc_declarator) return visitor.visitFunc_declarator(this);
		else return visitor.visitChildren(this);
	}
}


export class Func_definitionContext extends ParserRuleContext {
	public func_declarator(): Func_declaratorContext {
		return this.getRuleContext(0, Func_declaratorContext);
	}
	public comp_stmt(): Comp_stmtContext {
		return this.getRuleContext(0, Comp_stmtContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_func_definition; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterFunc_definition) listener.enterFunc_definition(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitFunc_definition) listener.exitFunc_definition(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitFunc_definition) return visitor.visitFunc_definition(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclarationListContext extends ParserRuleContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	public declarationList(): DeclarationListContext | undefined {
		return this.tryGetRuleContext(0, DeclarationListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_declarationList; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterDeclarationList) listener.enterDeclarationList(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitDeclarationList) listener.exitDeclarationList(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitDeclarationList) return visitor.visitDeclarationList(this);
		else return visitor.visitChildren(this);
	}
}


export class Comp_stmtContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(qcodeParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(qcodeParser.RBRACE, 0); }
	public block_List(): Block_ListContext | undefined {
		return this.tryGetRuleContext(0, Block_ListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_comp_stmt; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterComp_stmt) listener.enterComp_stmt(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitComp_stmt) listener.exitComp_stmt(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitComp_stmt) return visitor.visitComp_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Block_ListContext extends ParserRuleContext {
	public block_Item(): Block_ItemContext {
		return this.getRuleContext(0, Block_ItemContext);
	}
	public block_List(): Block_ListContext | undefined {
		return this.tryGetRuleContext(0, Block_ListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_block_List; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterBlock_List) listener.enterBlock_List(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitBlock_List) listener.exitBlock_List(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitBlock_List) return visitor.visitBlock_List(this);
		else return visitor.visitChildren(this);
	}
}


export class Block_ItemContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public literal_declaration(): Literal_declarationContext | undefined {
		return this.tryGetRuleContext(0, Literal_declarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_block_Item; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterBlock_Item) listener.enterBlock_Item(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitBlock_Item) listener.exitBlock_Item(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitBlock_Item) return visitor.visitBlock_Item(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementContext extends ParserRuleContext {
	public exp_stmt(): Exp_stmtContext | undefined {
		return this.tryGetRuleContext(0, Exp_stmtContext);
	}
	public comp_stmt(): Comp_stmtContext | undefined {
		return this.tryGetRuleContext(0, Comp_stmtContext);
	}
	public select_stmt(): Select_stmtContext | undefined {
		return this.tryGetRuleContext(0, Select_stmtContext);
	}
	public iterate_stmt(): Iterate_stmtContext | undefined {
		return this.tryGetRuleContext(0, Iterate_stmtContext);
	}
	public quantum_gate_stmt(): Quantum_gate_stmtContext | undefined {
		return this.tryGetRuleContext(0, Quantum_gate_stmtContext);
	}
	public measurement_stmt(): Measurement_stmtContext | undefined {
		return this.tryGetRuleContext(0, Measurement_stmtContext);
	}
	public q_if_operation(): Q_if_operationContext | undefined {
		return this.tryGetRuleContext(0, Q_if_operationContext);
	}
	public q_while_operation(): Q_while_operationContext | undefined {
		return this.tryGetRuleContext(0, Q_while_operationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_statement; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterStatement) listener.enterStatement(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitStatement) listener.exitStatement(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitStatement) return visitor.visitStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class Exp_stmtContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(qcodeParser.SEMI, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_exp_stmt; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterExp_stmt) listener.enterExp_stmt(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitExp_stmt) listener.exitExp_stmt(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitExp_stmt) return visitor.visitExp_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Select_stmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(qcodeParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(qcodeParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(qcodeParser.RPAREN, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.ELSE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_select_stmt; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterSelect_stmt) listener.enterSelect_stmt(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitSelect_stmt) listener.exitSelect_stmt(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitSelect_stmt) return visitor.visitSelect_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Iterate_stmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(qcodeParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(qcodeParser.LPAREN, 0); }
	public for_stmt(): For_stmtContext {
		return this.getRuleContext(0, For_stmtContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(qcodeParser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_iterate_stmt; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterIterate_stmt) listener.enterIterate_stmt(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitIterate_stmt) listener.exitIterate_stmt(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitIterate_stmt) return visitor.visitIterate_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class For_stmtContext extends ParserRuleContext {
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(qcodeParser.COLON);
		} else {
			return this.getToken(qcodeParser.COLON, i);
		}
	}
	public for_start(): For_startContext | undefined {
		return this.tryGetRuleContext(0, For_startContext);
	}
	public for_step(): For_stepContext | undefined {
		return this.tryGetRuleContext(0, For_stepContext);
	}
	public for_end(): For_endContext | undefined {
		return this.tryGetRuleContext(0, For_endContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_for_stmt; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterFor_stmt) listener.enterFor_stmt(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitFor_stmt) listener.exitFor_stmt(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitFor_stmt) return visitor.visitFor_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class For_startContext extends ParserRuleContext {
	public primary_exp(): Primary_expContext | undefined {
		return this.tryGetRuleContext(0, Primary_expContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.Identifier, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_for_start; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterFor_start) listener.enterFor_start(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitFor_start) listener.exitFor_start(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitFor_start) return visitor.visitFor_start(this);
		else return visitor.visitChildren(this);
	}
}


export class For_stepContext extends ParserRuleContext {
	public assignment_exp(): Assignment_expContext {
		return this.getRuleContext(0, Assignment_expContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_for_step; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterFor_step) listener.enterFor_step(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitFor_step) listener.exitFor_step(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitFor_step) return visitor.visitFor_step(this);
		else return visitor.visitChildren(this);
	}
}


export class For_endContext extends ParserRuleContext {
	public assignment_exp(): Assignment_expContext {
		return this.getRuleContext(0, Assignment_expContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_for_end; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterFor_end) listener.enterFor_end(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitFor_end) listener.exitFor_end(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitFor_end) return visitor.visitFor_end(this);
		else return visitor.visitChildren(this);
	}
}


export class Quantum_gate_stmtContext extends ParserRuleContext {
	public quantum_gate_operation(): Quantum_gate_operationContext {
		return this.getRuleContext(0, Quantum_gate_operationContext);
	}
	public SEMI(): TerminalNode { return this.getToken(qcodeParser.SEMI, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_quantum_gate_stmt; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQuantum_gate_stmt) listener.enterQuantum_gate_stmt(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQuantum_gate_stmt) listener.exitQuantum_gate_stmt(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQuantum_gate_stmt) return visitor.visitQuantum_gate_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Quantum_gate_operationContext extends ParserRuleContext {
	public H_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.H_GATE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(qcodeParser.LPAREN, 0); }
	public control_gate_exp(): Control_gate_expContext | undefined {
		return this.tryGetRuleContext(0, Control_gate_expContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(qcodeParser.RPAREN, 0); }
	public X_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.X_GATE, 0); }
	public NOT_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.NOT_GATE, 0); }
	public T_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.T_GATE, 0); }
	public S_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.S_GATE, 0); }
	public Y_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.Y_GATE, 0); }
	public Z_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.Z_GATE, 0); }
	public X1_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.X1_GATE, 0); }
	public Y1_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.Y1_GATE, 0); }
	public Z1_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.Z1_GATE, 0); }
	public U4_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.U4_GATE, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.COMMA, 0); }
	public four_angle_args(): Four_angle_argsContext | undefined {
		return this.tryGetRuleContext(0, Four_angle_argsContext);
	}
	public RX_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RX_GATE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RY_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RY_GATE, 0); }
	public RZ_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RZ_GATE, 0); }
	public CNOT_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.CNOT_GATE, 0); }
	public double_gate_exp(): Double_gate_expContext | undefined {
		return this.tryGetRuleContext(0, Double_gate_expContext);
	}
	public CZ_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.CZ_GATE, 0); }
	public CU_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.CU_GATE, 0); }
	public ISWAP(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.ISWAP, 0); }
	public theta(): ThetaContext | undefined {
		return this.tryGetRuleContext(0, ThetaContext);
	}
	public CR_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.CR_GATE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_quantum_gate_operation; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQuantum_gate_operation) listener.enterQuantum_gate_operation(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQuantum_gate_operation) listener.exitQuantum_gate_operation(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQuantum_gate_operation) return visitor.visitQuantum_gate_operation(this);
		else return visitor.visitChildren(this);
	}
}


export class Four_angle_argsContext extends ParserRuleContext {
	public alpha(): AlphaContext {
		return this.getRuleContext(0, AlphaContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(qcodeParser.COMMA);
		} else {
			return this.getToken(qcodeParser.COMMA, i);
		}
	}
	public beta(): BetaContext {
		return this.getRuleContext(0, BetaContext);
	}
	public gamma(): GammaContext {
		return this.getRuleContext(0, GammaContext);
	}
	public delta(): DeltaContext {
		return this.getRuleContext(0, DeltaContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_four_angle_args; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterFour_angle_args) listener.enterFour_angle_args(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitFour_angle_args) listener.exitFour_angle_args(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitFour_angle_args) return visitor.visitFour_angle_args(this);
		else return visitor.visitChildren(this);
	}
}


export class AlphaContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_alpha; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterAlpha) listener.enterAlpha(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitAlpha) listener.exitAlpha(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitAlpha) return visitor.visitAlpha(this);
		else return visitor.visitChildren(this);
	}
}


export class BetaContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_beta; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterBeta) listener.enterBeta(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitBeta) listener.exitBeta(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitBeta) return visitor.visitBeta(this);
		else return visitor.visitChildren(this);
	}
}


export class GammaContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_gamma; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterGamma) listener.enterGamma(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitGamma) listener.exitGamma(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitGamma) return visitor.visitGamma(this);
		else return visitor.visitChildren(this);
	}
}


export class DeltaContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_delta; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterDelta) listener.enterDelta(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitDelta) listener.exitDelta(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitDelta) return visitor.visitDelta(this);
		else return visitor.visitChildren(this);
	}
}


export class ThetaContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_theta; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterTheta) listener.enterTheta(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitTheta) listener.exitTheta(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitTheta) return visitor.visitTheta(this);
		else return visitor.visitChildren(this);
	}
}


export class Control_gate_expContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(qcodeParser.Identifier, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LBRACK, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RBRACK, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_control_gate_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterControl_gate_exp) listener.enterControl_gate_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitControl_gate_exp) listener.exitControl_gate_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitControl_gate_exp) return visitor.visitControl_gate_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Double_gate_expContext extends ParserRuleContext {
	public control_gate_exp(): Control_gate_expContext {
		return this.getRuleContext(0, Control_gate_expContext);
	}
	public COMMA(): TerminalNode { return this.getToken(qcodeParser.COMMA, 0); }
	public target_gate_exp(): Target_gate_expContext {
		return this.getRuleContext(0, Target_gate_expContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_double_gate_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterDouble_gate_exp) listener.enterDouble_gate_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitDouble_gate_exp) listener.exitDouble_gate_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitDouble_gate_exp) return visitor.visitDouble_gate_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Target_gate_expContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(qcodeParser.Identifier, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LBRACK, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RBRACK, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_target_gate_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterTarget_gate_exp) listener.enterTarget_gate_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitTarget_gate_exp) listener.exitTarget_gate_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitTarget_gate_exp) return visitor.visitTarget_gate_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Measurement_stmtContext extends ParserRuleContext {
	public MEASURE(): TerminalNode { return this.getToken(qcodeParser.MEASURE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(qcodeParser.LPAREN, 0); }
	public control_gate_exp(): Control_gate_expContext {
		return this.getRuleContext(0, Control_gate_expContext);
	}
	public COMMA(): TerminalNode { return this.getToken(qcodeParser.COMMA, 0); }
	public accept_cbit_stmt(): Accept_cbit_stmtContext {
		return this.getRuleContext(0, Accept_cbit_stmtContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(qcodeParser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(qcodeParser.SEMI, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_measurement_stmt; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterMeasurement_stmt) listener.enterMeasurement_stmt(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitMeasurement_stmt) listener.exitMeasurement_stmt(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitMeasurement_stmt) return visitor.visitMeasurement_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Accept_cbit_stmtContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(qcodeParser.Identifier, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LBRACK, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RBRACK, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_accept_cbit_stmt; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterAccept_cbit_stmt) listener.enterAccept_cbit_stmt(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitAccept_cbit_stmt) listener.exitAccept_cbit_stmt(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitAccept_cbit_stmt) return visitor.visitAccept_cbit_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Q_if_operationContext extends ParserRuleContext {
	public QIF(): TerminalNode { return this.getToken(qcodeParser.QIF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(qcodeParser.LPAREN, 0); }
	public q_condition(): Q_conditionContext {
		return this.getRuleContext(0, Q_conditionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(qcodeParser.RPAREN, 0); }
	public LBRACE(): TerminalNode[];
	public LBRACE(i: number): TerminalNode;
	public LBRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(qcodeParser.LBRACE);
		} else {
			return this.getToken(qcodeParser.LBRACE, i);
		}
	}
	public q_if_stmt(): Q_if_stmtContext[];
	public q_if_stmt(i: number): Q_if_stmtContext;
	public q_if_stmt(i?: number): Q_if_stmtContext | Q_if_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Q_if_stmtContext);
		} else {
			return this.getRuleContext(i, Q_if_stmtContext);
		}
	}
	public RBRACE(): TerminalNode[];
	public RBRACE(i: number): TerminalNode;
	public RBRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(qcodeParser.RBRACE);
		} else {
			return this.getToken(qcodeParser.RBRACE, i);
		}
	}
	public QELSE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.QELSE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_q_if_operation; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQ_if_operation) listener.enterQ_if_operation(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQ_if_operation) listener.exitQ_if_operation(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQ_if_operation) return visitor.visitQ_if_operation(this);
		else return visitor.visitChildren(this);
	}
}


export class Q_if_stmtContext extends ParserRuleContext {
	public q_if_stmt_item(): Q_if_stmt_itemContext[];
	public q_if_stmt_item(i: number): Q_if_stmt_itemContext;
	public q_if_stmt_item(i?: number): Q_if_stmt_itemContext | Q_if_stmt_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Q_if_stmt_itemContext);
		} else {
			return this.getRuleContext(i, Q_if_stmt_itemContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_q_if_stmt; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQ_if_stmt) listener.enterQ_if_stmt(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQ_if_stmt) listener.exitQ_if_stmt(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQ_if_stmt) return visitor.visitQ_if_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Q_if_stmt_itemContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public literal_declaration(): Literal_declarationContext | undefined {
		return this.tryGetRuleContext(0, Literal_declarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_q_if_stmt_item; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQ_if_stmt_item) listener.enterQ_if_stmt_item(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQ_if_stmt_item) listener.exitQ_if_stmt_item(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQ_if_stmt_item) return visitor.visitQ_if_stmt_item(this);
		else return visitor.visitChildren(this);
	}
}


export class Q_while_operationContext extends ParserRuleContext {
	public QWHILE(): TerminalNode { return this.getToken(qcodeParser.QWHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(qcodeParser.LPAREN, 0); }
	public q_condition(): Q_conditionContext {
		return this.getRuleContext(0, Q_conditionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(qcodeParser.RPAREN, 0); }
	public LBRACE(): TerminalNode { return this.getToken(qcodeParser.LBRACE, 0); }
	public q_while_stmt(): Q_while_stmtContext {
		return this.getRuleContext(0, Q_while_stmtContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(qcodeParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_q_while_operation; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQ_while_operation) listener.enterQ_while_operation(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQ_while_operation) listener.exitQ_while_operation(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQ_while_operation) return visitor.visitQ_while_operation(this);
		else return visitor.visitChildren(this);
	}
}


export class Q_while_stmtContext extends ParserRuleContext {
	public q_while_stmt_item(): Q_while_stmt_itemContext[];
	public q_while_stmt_item(i: number): Q_while_stmt_itemContext;
	public q_while_stmt_item(i?: number): Q_while_stmt_itemContext | Q_while_stmt_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Q_while_stmt_itemContext);
		} else {
			return this.getRuleContext(i, Q_while_stmt_itemContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_q_while_stmt; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQ_while_stmt) listener.enterQ_while_stmt(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQ_while_stmt) listener.exitQ_while_stmt(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQ_while_stmt) return visitor.visitQ_while_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Q_while_stmt_itemContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public literal_declaration(): Literal_declarationContext | undefined {
		return this.tryGetRuleContext(0, Literal_declarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_q_while_stmt_item; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQ_while_stmt_item) listener.enterQ_while_stmt_item(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQ_while_stmt_item) listener.exitQ_while_stmt_item(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQ_while_stmt_item) return visitor.visitQ_while_stmt_item(this);
		else return visitor.visitChildren(this);
	}
}


export class Q_conditionContext extends ParserRuleContext {
	public inclu_exp(): Inclu_expContext[];
	public inclu_exp(i: number): Inclu_expContext;
	public inclu_exp(i?: number): Inclu_expContext | Inclu_expContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Inclu_expContext);
		} else {
			return this.getRuleContext(i, Inclu_expContext);
		}
	}
	public q_operator(): Q_operatorContext[];
	public q_operator(i: number): Q_operatorContext;
	public q_operator(i?: number): Q_operatorContext | Q_operatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Q_operatorContext);
		} else {
			return this.getRuleContext(i, Q_operatorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_q_condition; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQ_condition) listener.enterQ_condition(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQ_condition) listener.exitQ_condition(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQ_condition) return visitor.visitQ_condition(this);
		else return visitor.visitChildren(this);
	}
}


export class Q_operatorContext extends ParserRuleContext {
	public LOGIC_AND(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LOGIC_AND, 0); }
	public LOGIC_OR(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LOGIC_OR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_q_operator; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQ_operator) listener.enterQ_operator(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQ_operator) listener.exitQ_operator(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQ_operator) return visitor.visitQ_operator(this);
		else return visitor.visitChildren(this);
	}
}


