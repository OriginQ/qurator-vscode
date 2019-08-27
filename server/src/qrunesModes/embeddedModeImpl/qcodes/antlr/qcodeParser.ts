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
	public static readonly LET=3;
	public static readonly INCLUDE=4;
	public static readonly INT=5;
	public static readonly BOOL=6;
	public static readonly IF=7;
	public static readonly ELSE=8;
	public static readonly FOR=9;
	public static readonly LIB=10;
	public static readonly QRUNES=11;
	public static readonly AVAR=12;
	public static readonly DOUBLE=13;
	public static readonly DEFAULT=14;
	public static readonly MAP=15;
	public static readonly IN=16;
	public static readonly VECTOR=17;
	public static readonly PI=18;
	public static readonly RETURN=19;
	public static readonly LAMBDA=20;
	public static readonly BREAK=21;
	public static readonly CONTINUE=22;
	public static readonly TRUE=23;
	public static readonly FALSE=24;
	public static readonly QUBIT=25;
	public static readonly CBIT=26;
	public static readonly CIRCUIT=27;
	public static readonly QPROG=28;
	public static readonly VARIATIONALCIRCUIT=29;
	public static readonly HAMILTONIAN=30;
	public static readonly VQG_CNOT_VCGEN=31;
	public static readonly VQG_RZ_VCGEN=32;
	public static readonly VQG_RX_VCGEN=33;
	public static readonly H_GATE=34;
	public static readonly X_GATE=35;
	public static readonly NOT_GATE=36;
	public static readonly T_GATE=37;
	public static readonly S_GATE=38;
	public static readonly Y_GATE=39;
	public static readonly Z_GATE=40;
	public static readonly X1_GATE=41;
	public static readonly Y1_GATE=42;
	public static readonly Z1_GATE=43;
	public static readonly U4_GATE=44;
	public static readonly RX_GATE=45;
	public static readonly RY_GATE=46;
	public static readonly RZ_GATE=47;
	public static readonly TOFFOLI_GATE=48;
	public static readonly CNOT_GATE=49;
	public static readonly CZ_GATE=50;
	public static readonly CR_GATE=51;
	public static readonly CU_GATE=52;
	public static readonly ISWAP=53;
	public static readonly APPLY_QGATE=54;
	public static readonly MEASURE=55;
	public static readonly MEASUREALL=56;
	public static readonly QIF=57;
	public static readonly QWHILE=58;
	public static readonly QELSE=59;
	public static readonly WHILE=60;
	public static readonly SHARP_SIGN=61;
	public static readonly ASSIGN=62;
	public static readonly GT=63;
	public static readonly LT=64;
	public static readonly BANG=65;
	public static readonly TILDE=66;
	public static readonly COLON=67;
	public static readonly EQUAL=68;
	public static readonly LE=69;
	public static readonly GE=70;
	public static readonly NOTEQUAL=71;
	public static readonly LOGIC_AND=72;
	public static readonly LOGIC_OR=73;
	public static readonly AND=74;
	public static readonly EXCLU=75;
	public static readonly INCLU=76;
	public static readonly QUE_MARK=77;
	public static readonly INC=78;
	public static readonly DEC=79;
	public static readonly ADD=80;
	public static readonly SUB=81;
	public static readonly MUL=82;
	public static readonly POW=83;
	public static readonly DIV=84;
	public static readonly MOD=85;
	public static readonly ADD_ASSIGN=86;
	public static readonly SUB_ASSIGN=87;
	public static readonly MUL_ASSIGN=88;
	public static readonly DIV_ASSIGN=89;
	public static readonly MOD_ASSIGN=90;
	public static readonly SHIFT_LEFT=91;
	public static readonly SHIFT_RIGHT=92;
	public static readonly LBRACE=93;
	public static readonly RBRACE=94;
	public static readonly SEMI=95;
	public static readonly COMMA=96;
	public static readonly DOT=97;
	public static readonly LPAREN=98;
	public static readonly RPAREN=99;
	public static readonly LBRACK=100;
	public static readonly RBRACK=101;
	public static readonly Identifier=102;
	public static readonly Integer_Literal=103;
	public static readonly Double_Literal=104;
	public static readonly Digit_Sequence=105;
	public static readonly WhiteSpace=106;
	public static readonly SingleLineComment=107;
	public static readonly MultiLinesComment=108;
	public static readonly RULE_qrunes = 0;
	public static readonly RULE_lang_unit = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_include_declaration = 3;
	public static readonly RULE_include_sign = 4;
	public static readonly RULE_variable_declaration = 5;
	public static readonly RULE_parameter_declaration = 6;
	public static readonly RULE_parameter_specifier = 7;
	public static readonly RULE_quantum_alg_built_in_type = 8;
	public static readonly RULE_auxiliary_primary_type = 9;
	public static readonly RULE_quantum_circuit_type = 10;
	public static readonly RULE_quantum_prog_type = 11;
	public static readonly RULE_quantum_primary_type = 12;
	public static readonly RULE_classical_primary_type = 13;
	public static readonly RULE_array_construct_type = 14;
	public static readonly RULE_construct_primary_type = 15;
	public static readonly RULE_call_back_construct_type = 16;
	public static readonly RULE_call_back_primary_type_list = 17;
	public static readonly RULE_call_back_primary_type = 18;
	public static readonly RULE_declaration_variable = 19;
	public static readonly RULE_variable_decl_specifier = 20;
	public static readonly RULE_common_specifier = 21;
	public static readonly RULE_init_declaratorlist = 22;
	public static readonly RULE_variable_declarator = 23;
	public static readonly RULE_variableInitializer = 24;
	public static readonly RULE_function_declaration = 25;
	public static readonly RULE_declarate_function = 26;
	public static readonly RULE_function_return_type_declarator = 27;
	public static readonly RULE_function_declarator = 28;
	public static readonly RULE_function_name = 29;
	public static readonly RULE_parameter_decl_list = 30;
	public static readonly RULE_expression_list = 31;
	public static readonly RULE_vector_expression = 32;
	public static readonly RULE_vector_slice = 33;
	public static readonly RULE_single_expression = 34;
	public static readonly RULE_lambda_exp = 35;
	public static readonly RULE_lambda_body = 36;
	public static readonly RULE_additive_op = 37;
	public static readonly RULE_multiplicative_op = 38;
	public static readonly RULE_shift_op = 39;
	public static readonly RULE_assign_op = 40;
	public static readonly RULE_equal_op = 41;
	public static readonly RULE_relationship_op = 42;
	public static readonly RULE_logic_op = 43;
	public static readonly RULE_unary_op = 44;
	public static readonly RULE_statement = 45;
	public static readonly RULE_while_statement = 46;
	public static readonly RULE_return_statement = 47;
	public static readonly RULE_qif_statement = 48;
	public static readonly RULE_qif_true_branch = 49;
	public static readonly RULE_qif_false_branch = 50;
	public static readonly RULE_qwhile_statement = 51;
	public static readonly RULE_expression_statement = 52;
	public static readonly RULE_empty_statement = 53;
	public static readonly RULE_declaration_variable_statement = 54;
	public static readonly RULE_compound_statement = 55;
	public static readonly RULE_select_statement = 56;
	public static readonly RULE_iterate_statement = 57;
	public static readonly RULE_for_stmt = 58;
	public static readonly RULE_for_step = 59;
	public static readonly RULE_for_condition = 60;
	public static readonly RULE_for_start = 61;
	public static readonly RULE_inhanced_for_stmt = 62;
	public static readonly RULE_statement_list = 63;
	public static readonly RULE_function_definition = 64;
	public static readonly RULE_function_body = 65;
	public static readonly RULE_key_words = 66;
	public static readonly RULE_constant = 67;
	public static readonly ruleNames: string[] = [
		"qrunes", "lang_unit", "declaration", "include_declaration", "include_sign", 
		"variable_declaration", "parameter_declaration", "parameter_specifier", 
		"quantum_alg_built_in_type", "auxiliary_primary_type", "quantum_circuit_type", 
		"quantum_prog_type", "quantum_primary_type", "classical_primary_type", 
		"array_construct_type", "construct_primary_type", "call_back_construct_type", 
		"call_back_primary_type_list", "call_back_primary_type", "declaration_variable", 
		"variable_decl_specifier", "common_specifier", "init_declaratorlist", 
		"variable_declarator", "variableInitializer", "function_declaration", 
		"declarate_function", "function_return_type_declarator", "function_declarator", 
		"function_name", "parameter_decl_list", "expression_list", "vector_expression", 
		"vector_slice", "single_expression", "lambda_exp", "lambda_body", "additive_op", 
		"multiplicative_op", "shift_op", "assign_op", "equal_op", "relationship_op", 
		"logic_op", "unary_op", "statement", "while_statement", "return_statement", 
		"qif_statement", "qif_true_branch", "qif_false_branch", "qwhile_statement", 
		"expression_statement", "empty_statement", "declaration_variable_statement", 
		"compound_statement", "select_statement", "iterate_statement", "for_stmt", 
		"for_step", "for_condition", "for_start", "inhanced_for_stmt", "statement_list", 
		"function_definition", "function_body", "key_words", "constant"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'\"'", "'''", "'let'", "'include'", "'int'", "'bool'", "'if'", 
		"'else'", "'for'", "'lib'", "'qrunes'", "'avar'", "'double'", "'default'", 
		"'map'", "'in'", "'vector'", "'Pi'", "'return'", "'lambda'", "'break'", 
		"'continue'", "'true'", "'false'", "'qubit'", "'cbit'", "'circuit'", "'qprog'", 
		"'variationalCircuit'", "'hamiltonian'", "'VQG_CNOT'", "'VQG_RZ'", "'VQG_RX'", 
		"'H'", "'X'", "'NOT'", "'T'", "'S'", "'Y'", "'Z'", "'X1'", "'Y1'", "'Z1'", 
		"'U4'", "'RX'", "'RY'", "'RZ'", "'Toffoli'", "'CNOT'", "'CZ'", "'CR'", 
		"'CU'", "'iSWAP'", "'apply_QGate'", "'measure'", "'measure_all'", "'qif'", 
		"'qwhile'", "'qelse'", "'while'", "'#'", "'='", "'>'", "'<'", "'!'", "'~'", 
		"':'", "'=='", "'<='", "'>='", "'!='", "'&&'", "'||'", "'&'", "'^'", "'|'", 
		"'?'", "'++'", "'--'", "'+'", "'-'", "'*'", "'**'", "'/'", "'%'", "'+='", 
		"'-='", "'*='", "'/='", "'%='", "'<<'", "'>>'", "'{'", "'}'", "';'", "','", 
		"'.'", "'('", "')'", "'['", "']'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, "LET", "INCLUDE", "INT", "BOOL", "IF", 
		"ELSE", "FOR", "LIB", "QRUNES", "AVAR", "DOUBLE", "DEFAULT", "MAP", "IN", 
		"VECTOR", "PI", "RETURN", "LAMBDA", "BREAK", "CONTINUE", "TRUE", "FALSE", 
		"QUBIT", "CBIT", "CIRCUIT", "QPROG", "VARIATIONALCIRCUIT", "HAMILTONIAN", 
		"VQG_CNOT_VCGEN", "VQG_RZ_VCGEN", "VQG_RX_VCGEN", "H_GATE", "X_GATE", 
		"NOT_GATE", "T_GATE", "S_GATE", "Y_GATE", "Z_GATE", "X1_GATE", "Y1_GATE", 
		"Z1_GATE", "U4_GATE", "RX_GATE", "RY_GATE", "RZ_GATE", "TOFFOLI_GATE", 
		"CNOT_GATE", "CZ_GATE", "CR_GATE", "CU_GATE", "ISWAP", "APPLY_QGATE", 
		"MEASURE", "MEASUREALL", "QIF", "QWHILE", "QELSE", "WHILE", "SHARP_SIGN", 
		"ASSIGN", "GT", "LT", "BANG", "TILDE", "COLON", "EQUAL", "LE", "GE", "NOTEQUAL", 
		"LOGIC_AND", "LOGIC_OR", "AND", "EXCLU", "INCLU", "QUE_MARK", "INC", "DEC", 
		"ADD", "SUB", "MUL", "POW", "DIV", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", 
		"MUL_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", "SHIFT_LEFT", "SHIFT_RIGHT", 
		"LBRACE", "RBRACE", "SEMI", "COMMA", "DOT", "LPAREN", "RPAREN", "LBRACK", 
		"RBRACK", "Identifier", "Integer_Literal", "Double_Literal", "Digit_Sequence", 
		"WhiteSpace", "SingleLineComment", "MultiLinesComment"
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
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.LET) | (1 << qcodeParser.INCLUDE) | (1 << qcodeParser.INT) | (1 << qcodeParser.BOOL) | (1 << qcodeParser.AVAR) | (1 << qcodeParser.DOUBLE) | (1 << qcodeParser.MAP) | (1 << qcodeParser.VECTOR) | (1 << qcodeParser.QUBIT) | (1 << qcodeParser.CBIT) | (1 << qcodeParser.CIRCUIT) | (1 << qcodeParser.QPROG) | (1 << qcodeParser.VARIATIONALCIRCUIT) | (1 << qcodeParser.HAMILTONIAN))) !== 0) || _la===qcodeParser.Identifier) {
				{
				{
				this.state = 136;
				this.lang_unit();
				}
				}
				this.state = 141;
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
			this.state = 144;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 142;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 143;
				this.function_definition();
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, qcodeParser.RULE_declaration);
		try {
			this.state = 149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,2,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 146;
				this.include_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 147;
				this.variable_declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 148;
				this.function_declaration();
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
		this.enterRule(_localctx, 6, qcodeParser.RULE_include_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(qcodeParser.INCLUDE);
			this.state = 152;
			this.include_sign();
			this.state = 153;
			this.single_expression(0);
			this.state = 154;
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
		this.enterRule(_localctx, 8, qcodeParser.RULE_include_sign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
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
	public variable_declaration(): Variable_declarationContext {
		let _localctx: Variable_declarationContext = new Variable_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, qcodeParser.RULE_variable_declaration);
		try {
			this.state = 160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,3,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 158;
				this.declaration_variable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 159;
				this.parameter_declaration();
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
	public parameter_declaration(): Parameter_declarationContext {
		let _localctx: Parameter_declarationContext = new Parameter_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, qcodeParser.RULE_parameter_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.parameter_specifier();
			this.state = 163;
			this.match(qcodeParser.Identifier);
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
	public parameter_specifier(): Parameter_specifierContext {
		let _localctx: Parameter_specifierContext = new Parameter_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, qcodeParser.RULE_parameter_specifier);
		try {
			this.state = 171;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case qcodeParser.INT:
			case qcodeParser.BOOL:
			case qcodeParser.DOUBLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 165;
				this.auxiliary_primary_type();
				}
				break;
			case qcodeParser.QUBIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 166;
				this.quantum_primary_type();
				}
				break;
			case qcodeParser.CBIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 167;
				this.classical_primary_type();
				}
				break;
			case qcodeParser.MAP:
			case qcodeParser.VECTOR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 168;
				this.array_construct_type();
				}
				break;
			case qcodeParser.CIRCUIT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 169;
				this.call_back_construct_type();
				}
				break;
			case qcodeParser.AVAR:
			case qcodeParser.HAMILTONIAN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 170;
				this.quantum_alg_built_in_type();
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
	public quantum_alg_built_in_type(): Quantum_alg_built_in_typeContext {
		let _localctx: Quantum_alg_built_in_typeContext = new Quantum_alg_built_in_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, qcodeParser.RULE_quantum_alg_built_in_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			_la = this._input.LA(1);
			if ( !(_la===qcodeParser.AVAR || _la===qcodeParser.HAMILTONIAN) ) {
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
	public auxiliary_primary_type(): Auxiliary_primary_typeContext {
		let _localctx: Auxiliary_primary_typeContext = new Auxiliary_primary_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, qcodeParser.RULE_auxiliary_primary_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.INT) | (1 << qcodeParser.BOOL) | (1 << qcodeParser.DOUBLE))) !== 0)) ) {
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
	public quantum_circuit_type(): Quantum_circuit_typeContext {
		let _localctx: Quantum_circuit_typeContext = new Quantum_circuit_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, qcodeParser.RULE_quantum_circuit_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			_la = this._input.LA(1);
			if ( !(_la===qcodeParser.CIRCUIT || _la===qcodeParser.VARIATIONALCIRCUIT) ) {
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
	public quantum_prog_type(): Quantum_prog_typeContext {
		let _localctx: Quantum_prog_typeContext = new Quantum_prog_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, qcodeParser.RULE_quantum_prog_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.match(qcodeParser.QPROG);
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
	public quantum_primary_type(): Quantum_primary_typeContext {
		let _localctx: Quantum_primary_typeContext = new Quantum_primary_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, qcodeParser.RULE_quantum_primary_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.match(qcodeParser.QUBIT);
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
	public classical_primary_type(): Classical_primary_typeContext {
		let _localctx: Classical_primary_typeContext = new Classical_primary_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, qcodeParser.RULE_classical_primary_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.match(qcodeParser.CBIT);
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
	public array_construct_type(): Array_construct_typeContext {
		let _localctx: Array_construct_typeContext = new Array_construct_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, qcodeParser.RULE_array_construct_type);
		try {
			this.state = 191;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case qcodeParser.VECTOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 185;
				this.match(qcodeParser.VECTOR);
				this.state = 186;
				this.match(qcodeParser.LT);
				this.state = 187;
				this.construct_primary_type();
				this.state = 188;
				this.match(qcodeParser.GT);
				}
				break;
			case qcodeParser.MAP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 190;
				this.match(qcodeParser.MAP);
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
	public construct_primary_type(): Construct_primary_typeContext {
		let _localctx: Construct_primary_typeContext = new Construct_primary_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, qcodeParser.RULE_construct_primary_type);
		try {
			this.state = 197;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case qcodeParser.INT:
			case qcodeParser.BOOL:
			case qcodeParser.DOUBLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 193;
				this.auxiliary_primary_type();
				}
				break;
			case qcodeParser.QUBIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 194;
				this.quantum_primary_type();
				}
				break;
			case qcodeParser.CBIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 195;
				this.classical_primary_type();
				}
				break;
			case qcodeParser.MAP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 196;
				this.match(qcodeParser.MAP);
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
	public call_back_construct_type(): Call_back_construct_typeContext {
		let _localctx: Call_back_construct_typeContext = new Call_back_construct_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, qcodeParser.RULE_call_back_construct_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.match(qcodeParser.CIRCUIT);
			this.state = 200;
			this.match(qcodeParser.LT);
			this.state = 201;
			this.call_back_primary_type_list(0);
			this.state = 202;
			this.match(qcodeParser.GT);
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

	public call_back_primary_type_list(): Call_back_primary_type_listContext;
	public call_back_primary_type_list(_p: number): Call_back_primary_type_listContext;
	@RuleVersion(0)
	public call_back_primary_type_list(_p?: number): Call_back_primary_type_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Call_back_primary_type_listContext = new Call_back_primary_type_listContext(this._ctx, _parentState);
		let _prevctx: Call_back_primary_type_listContext = _localctx;
		let _startState: number = 34;
		this.enterRecursionRule(_localctx, 34, qcodeParser.RULE_call_back_primary_type_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 205;
			this.call_back_primary_type();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 212;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,7,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Call_back_primary_type_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_call_back_primary_type_list);
					this.state = 207;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 208;
					this.match(qcodeParser.COMMA);
					this.state = 209;
					this.call_back_primary_type();
					}
					} 
				}
				this.state = 214;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,7,this._ctx);
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
	public call_back_primary_type(): Call_back_primary_typeContext {
		let _localctx: Call_back_primary_typeContext = new Call_back_primary_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, qcodeParser.RULE_call_back_primary_type);
		try {
			this.state = 220;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case qcodeParser.INT:
			case qcodeParser.BOOL:
			case qcodeParser.DOUBLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 215;
				this.auxiliary_primary_type();
				}
				break;
			case qcodeParser.QUBIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 216;
				this.quantum_primary_type();
				}
				break;
			case qcodeParser.CBIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 217;
				this.classical_primary_type();
				}
				break;
			case qcodeParser.MAP:
			case qcodeParser.VECTOR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 218;
				this.array_construct_type();
				}
				break;
			case qcodeParser.CIRCUIT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 219;
				this.call_back_construct_type();
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
	public declaration_variable(): Declaration_variableContext {
		let _localctx: Declaration_variableContext = new Declaration_variableContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, qcodeParser.RULE_declaration_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.variable_decl_specifier();
			this.state = 223;
			this.init_declaratorlist(0);
			this.state = 224;
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
	public variable_decl_specifier(): Variable_decl_specifierContext {
		let _localctx: Variable_decl_specifierContext = new Variable_decl_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, qcodeParser.RULE_variable_decl_specifier);
		try {
			this.state = 230;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case qcodeParser.LET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 226;
				this.common_specifier();
				}
				break;
			case qcodeParser.MAP:
			case qcodeParser.VECTOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 227;
				this.array_construct_type();
				}
				break;
			case qcodeParser.CIRCUIT:
			case qcodeParser.VARIATIONALCIRCUIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 228;
				this.quantum_circuit_type();
				}
				break;
			case qcodeParser.QUBIT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 229;
				this.quantum_primary_type();
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
	public common_specifier(): Common_specifierContext {
		let _localctx: Common_specifierContext = new Common_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, qcodeParser.RULE_common_specifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
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

	public init_declaratorlist(): Init_declaratorlistContext;
	public init_declaratorlist(_p: number): Init_declaratorlistContext;
	@RuleVersion(0)
	public init_declaratorlist(_p?: number): Init_declaratorlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Init_declaratorlistContext = new Init_declaratorlistContext(this._ctx, _parentState);
		let _prevctx: Init_declaratorlistContext = _localctx;
		let _startState: number = 44;
		this.enterRecursionRule(_localctx, 44, qcodeParser.RULE_init_declaratorlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 235;
			this.variable_declarator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 242;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,10,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Init_declaratorlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_init_declaratorlist);
					this.state = 237;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 238;
					this.match(qcodeParser.COMMA);
					this.state = 239;
					this.variable_declarator();
					}
					} 
				}
				this.state = 244;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,10,this._ctx);
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
	public variable_declarator(): Variable_declaratorContext {
		let _localctx: Variable_declaratorContext = new Variable_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, qcodeParser.RULE_variable_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.match(qcodeParser.Identifier);
			this.state = 248;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,11,this._ctx) ) {
			case 1:
				{
				this.state = 246;
				this.match(qcodeParser.ASSIGN);
				this.state = 247;
				this.variableInitializer(0);
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

	public variableInitializer(): VariableInitializerContext;
	public variableInitializer(_p: number): VariableInitializerContext;
	@RuleVersion(0)
	public variableInitializer(_p?: number): VariableInitializerContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, _parentState);
		let _prevctx: VariableInitializerContext = _localctx;
		let _startState: number = 48;
		this.enterRecursionRule(_localctx, 48, qcodeParser.RULE_variableInitializer, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 251;
			this.single_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 258;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,12,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new VariableInitializerContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_variableInitializer);
					this.state = 253;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 254;
					this.match(qcodeParser.COMMA);
					this.state = 255;
					this.single_expression(0);
					}
					} 
				}
				this.state = 260;
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
	@RuleVersion(0)
	public function_declaration(): Function_declarationContext {
		let _localctx: Function_declarationContext = new Function_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, qcodeParser.RULE_function_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this.declarate_function();
			this.state = 262;
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
	public declarate_function(): Declarate_functionContext {
		let _localctx: Declarate_functionContext = new Declarate_functionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, qcodeParser.RULE_declarate_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.INT) | (1 << qcodeParser.BOOL) | (1 << qcodeParser.DOUBLE) | (1 << qcodeParser.MAP) | (1 << qcodeParser.VECTOR) | (1 << qcodeParser.CBIT) | (1 << qcodeParser.CIRCUIT) | (1 << qcodeParser.QPROG) | (1 << qcodeParser.VARIATIONALCIRCUIT))) !== 0)) {
				{
				this.state = 264;
				this.function_return_type_declarator();
				}
			}

			this.state = 267;
			this.function_declarator();
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
	public function_return_type_declarator(): Function_return_type_declaratorContext {
		let _localctx: Function_return_type_declaratorContext = new Function_return_type_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, qcodeParser.RULE_function_return_type_declarator);
		try {
			this.state = 275;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,14,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 269;
				this.quantum_prog_type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 270;
				this.quantum_circuit_type();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 271;
				this.auxiliary_primary_type();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 272;
				this.classical_primary_type();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 273;
				this.array_construct_type();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 274;
				this.call_back_construct_type();
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
	public function_declarator(): Function_declaratorContext {
		let _localctx: Function_declaratorContext = new Function_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, qcodeParser.RULE_function_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.function_name();
			this.state = 278;
			this.match(qcodeParser.LPAREN);
			this.state = 279;
			this.parameter_decl_list(0);
			this.state = 280;
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
	public function_name(): Function_nameContext {
		let _localctx: Function_nameContext = new Function_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, qcodeParser.RULE_function_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.match(qcodeParser.Identifier);
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

	public parameter_decl_list(): Parameter_decl_listContext;
	public parameter_decl_list(_p: number): Parameter_decl_listContext;
	@RuleVersion(0)
	public parameter_decl_list(_p?: number): Parameter_decl_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Parameter_decl_listContext = new Parameter_decl_listContext(this._ctx, _parentState);
		let _prevctx: Parameter_decl_listContext = _localctx;
		let _startState: number = 60;
		this.enterRecursionRule(_localctx, 60, qcodeParser.RULE_parameter_decl_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 285;
			this.parameter_declaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 292;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,15,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Parameter_decl_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_parameter_decl_list);
					this.state = 287;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 288;
					this.match(qcodeParser.COMMA);
					this.state = 289;
					this.parameter_declaration();
					}
					} 
				}
				this.state = 294;
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

	public expression_list(): Expression_listContext;
	public expression_list(_p: number): Expression_listContext;
	@RuleVersion(0)
	public expression_list(_p?: number): Expression_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expression_listContext = new Expression_listContext(this._ctx, _parentState);
		let _prevctx: Expression_listContext = _localctx;
		let _startState: number = 62;
		this.enterRecursionRule(_localctx, 62, qcodeParser.RULE_expression_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 296;
			this.single_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 303;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,16,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Expression_listContext(_parentctx, _parentState);
					_localctx._exp_list_alias = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_expression_list);
					this.state = 298;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 299;
					this.match(qcodeParser.COMMA);
					this.state = 300;
					this.single_expression(0);
					}
					} 
				}
				this.state = 305;
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
	@RuleVersion(0)
	public vector_expression(): Vector_expressionContext {
		let _localctx: Vector_expressionContext = new Vector_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, qcodeParser.RULE_vector_expression);
		try {
			this.state = 308;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,17,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 306;
				this.single_expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 307;
				this.vector_slice();
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
	public vector_slice(): Vector_sliceContext {
		let _localctx: Vector_sliceContext = new Vector_sliceContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, qcodeParser.RULE_vector_slice);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			_localctx._vector_bound_alias_l = this.single_expression(0);
			this.state = 311;
			this.match(qcodeParser.COLON);
			this.state = 312;
			_localctx._vector_bound_alias_r = this.single_expression(0);
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

	public single_expression(): Single_expressionContext;
	public single_expression(_p: number): Single_expressionContext;
	@RuleVersion(0)
	public single_expression(_p?: number): Single_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Single_expressionContext = new Single_expressionContext(this._ctx, _parentState);
		let _prevctx: Single_expressionContext = _localctx;
		let _startState: number = 68;
		this.enterRecursionRule(_localctx, 68, qcodeParser.RULE_single_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,20,this._ctx) ) {
			case 1:
				{
				this.state = 315;
				this.match(qcodeParser.LBRACK);
				this.state = 317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (qcodeParser.LET - 3)) | (1 << (qcodeParser.INCLUDE - 3)) | (1 << (qcodeParser.INT - 3)) | (1 << (qcodeParser.BOOL - 3)) | (1 << (qcodeParser.IF - 3)) | (1 << (qcodeParser.ELSE - 3)) | (1 << (qcodeParser.FOR - 3)) | (1 << (qcodeParser.LIB - 3)) | (1 << (qcodeParser.QRUNES - 3)) | (1 << (qcodeParser.AVAR - 3)) | (1 << (qcodeParser.DOUBLE - 3)) | (1 << (qcodeParser.IN - 3)) | (1 << (qcodeParser.PI - 3)) | (1 << (qcodeParser.RETURN - 3)) | (1 << (qcodeParser.LAMBDA - 3)) | (1 << (qcodeParser.BREAK - 3)) | (1 << (qcodeParser.CONTINUE - 3)) | (1 << (qcodeParser.TRUE - 3)) | (1 << (qcodeParser.FALSE - 3)) | (1 << (qcodeParser.QUBIT - 3)) | (1 << (qcodeParser.CBIT - 3)) | (1 << (qcodeParser.VQG_CNOT_VCGEN - 3)) | (1 << (qcodeParser.VQG_RZ_VCGEN - 3)) | (1 << (qcodeParser.VQG_RX_VCGEN - 3)) | (1 << (qcodeParser.H_GATE - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (qcodeParser.X_GATE - 35)) | (1 << (qcodeParser.NOT_GATE - 35)) | (1 << (qcodeParser.T_GATE - 35)) | (1 << (qcodeParser.S_GATE - 35)) | (1 << (qcodeParser.Y_GATE - 35)) | (1 << (qcodeParser.Z_GATE - 35)) | (1 << (qcodeParser.X1_GATE - 35)) | (1 << (qcodeParser.Y1_GATE - 35)) | (1 << (qcodeParser.Z1_GATE - 35)) | (1 << (qcodeParser.U4_GATE - 35)) | (1 << (qcodeParser.RX_GATE - 35)) | (1 << (qcodeParser.RY_GATE - 35)) | (1 << (qcodeParser.RZ_GATE - 35)) | (1 << (qcodeParser.TOFFOLI_GATE - 35)) | (1 << (qcodeParser.CNOT_GATE - 35)) | (1 << (qcodeParser.CZ_GATE - 35)) | (1 << (qcodeParser.CR_GATE - 35)) | (1 << (qcodeParser.CU_GATE - 35)) | (1 << (qcodeParser.ISWAP - 35)) | (1 << (qcodeParser.APPLY_QGATE - 35)) | (1 << (qcodeParser.MEASURE - 35)) | (1 << (qcodeParser.MEASUREALL - 35)) | (1 << (qcodeParser.QIF - 35)) | (1 << (qcodeParser.QWHILE - 35)) | (1 << (qcodeParser.QELSE - 35)) | (1 << (qcodeParser.BANG - 35)) | (1 << (qcodeParser.TILDE - 35)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (qcodeParser.INC - 78)) | (1 << (qcodeParser.DEC - 78)) | (1 << (qcodeParser.SUB - 78)) | (1 << (qcodeParser.LPAREN - 78)) | (1 << (qcodeParser.LBRACK - 78)) | (1 << (qcodeParser.Identifier - 78)) | (1 << (qcodeParser.Integer_Literal - 78)) | (1 << (qcodeParser.Double_Literal - 78)))) !== 0)) {
					{
					this.state = 316;
					_localctx._bracket_exp = this.expression_list(0);
					}
				}

				this.state = 319;
				this.match(qcodeParser.RBRACK);
				}
				break;

			case 2:
				{
				this.state = 320;
				this.match(qcodeParser.LPAREN);
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (qcodeParser.LET - 3)) | (1 << (qcodeParser.INCLUDE - 3)) | (1 << (qcodeParser.INT - 3)) | (1 << (qcodeParser.BOOL - 3)) | (1 << (qcodeParser.IF - 3)) | (1 << (qcodeParser.ELSE - 3)) | (1 << (qcodeParser.FOR - 3)) | (1 << (qcodeParser.LIB - 3)) | (1 << (qcodeParser.QRUNES - 3)) | (1 << (qcodeParser.AVAR - 3)) | (1 << (qcodeParser.DOUBLE - 3)) | (1 << (qcodeParser.IN - 3)) | (1 << (qcodeParser.PI - 3)) | (1 << (qcodeParser.RETURN - 3)) | (1 << (qcodeParser.LAMBDA - 3)) | (1 << (qcodeParser.BREAK - 3)) | (1 << (qcodeParser.CONTINUE - 3)) | (1 << (qcodeParser.TRUE - 3)) | (1 << (qcodeParser.FALSE - 3)) | (1 << (qcodeParser.QUBIT - 3)) | (1 << (qcodeParser.CBIT - 3)) | (1 << (qcodeParser.VQG_CNOT_VCGEN - 3)) | (1 << (qcodeParser.VQG_RZ_VCGEN - 3)) | (1 << (qcodeParser.VQG_RX_VCGEN - 3)) | (1 << (qcodeParser.H_GATE - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (qcodeParser.X_GATE - 35)) | (1 << (qcodeParser.NOT_GATE - 35)) | (1 << (qcodeParser.T_GATE - 35)) | (1 << (qcodeParser.S_GATE - 35)) | (1 << (qcodeParser.Y_GATE - 35)) | (1 << (qcodeParser.Z_GATE - 35)) | (1 << (qcodeParser.X1_GATE - 35)) | (1 << (qcodeParser.Y1_GATE - 35)) | (1 << (qcodeParser.Z1_GATE - 35)) | (1 << (qcodeParser.U4_GATE - 35)) | (1 << (qcodeParser.RX_GATE - 35)) | (1 << (qcodeParser.RY_GATE - 35)) | (1 << (qcodeParser.RZ_GATE - 35)) | (1 << (qcodeParser.TOFFOLI_GATE - 35)) | (1 << (qcodeParser.CNOT_GATE - 35)) | (1 << (qcodeParser.CZ_GATE - 35)) | (1 << (qcodeParser.CR_GATE - 35)) | (1 << (qcodeParser.CU_GATE - 35)) | (1 << (qcodeParser.ISWAP - 35)) | (1 << (qcodeParser.APPLY_QGATE - 35)) | (1 << (qcodeParser.MEASURE - 35)) | (1 << (qcodeParser.MEASUREALL - 35)) | (1 << (qcodeParser.QIF - 35)) | (1 << (qcodeParser.QWHILE - 35)) | (1 << (qcodeParser.QELSE - 35)) | (1 << (qcodeParser.BANG - 35)) | (1 << (qcodeParser.TILDE - 35)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (qcodeParser.INC - 78)) | (1 << (qcodeParser.DEC - 78)) | (1 << (qcodeParser.SUB - 78)) | (1 << (qcodeParser.LPAREN - 78)) | (1 << (qcodeParser.LBRACK - 78)) | (1 << (qcodeParser.Identifier - 78)) | (1 << (qcodeParser.Integer_Literal - 78)) | (1 << (qcodeParser.Double_Literal - 78)))) !== 0)) {
					{
					this.state = 321;
					_localctx._parenthesis_exp = this.expression_list(0);
					}
				}

				this.state = 324;
				this.match(qcodeParser.RPAREN);
				}
				break;

			case 3:
				{
				this.state = 325;
				this.unary_op();
				this.state = 326;
				_localctx._unary_exp = this.single_expression(14);
				}
				break;

			case 4:
				{
				this.state = 328;
				this.lambda_exp();
				}
				break;

			case 5:
				{
				this.state = 329;
				this.match(qcodeParser.Identifier);
				}
				break;

			case 6:
				{
				this.state = 330;
				this.constant();
				}
				break;

			case 7:
				{
				this.state = 331;
				this.key_words();
				}
				break;

			case 8:
				{
				this.state = 332;
				this.match(qcodeParser.PI);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 389;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,23,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 387;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,22,this._ctx) ) {
					case 1:
						{
						_localctx = new Single_expressionContext(_parentctx, _parentState);
						_localctx._get_inside_exp = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_single_expression);
						this.state = 335;
						if (!(this.precpred(this._ctx, 18))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						this.state = 336;
						this.match(qcodeParser.DOT);
						this.state = 337;
						_localctx._get_inside_bee_exp = this.single_expression(19);
						}
						break;

					case 2:
						{
						_localctx = new Single_expressionContext(_parentctx, _parentState);
						_localctx._binary_mul_left_exp = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_single_expression);
						this.state = 338;
						if (!(this.precpred(this._ctx, 13))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						this.state = 339;
						this.multiplicative_op();
						this.state = 340;
						_localctx._binary_mul_right_exp = this.single_expression(14);
						}
						break;

					case 3:
						{
						_localctx = new Single_expressionContext(_parentctx, _parentState);
						_localctx._binary_add_left_exp = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_single_expression);
						this.state = 342;
						if (!(this.precpred(this._ctx, 12))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						this.state = 343;
						this.additive_op();
						this.state = 344;
						_localctx._binary_add_right_exp = this.single_expression(13);
						}
						break;

					case 4:
						{
						_localctx = new Single_expressionContext(_parentctx, _parentState);
						_localctx._shift_exp_left_exp = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_single_expression);
						this.state = 346;
						if (!(this.precpred(this._ctx, 11))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						this.state = 347;
						this.shift_op();
						this.state = 348;
						_localctx._shift_exp_right_exp = this.single_expression(12);
						}
						break;

					case 5:
						{
						_localctx = new Single_expressionContext(_parentctx, _parentState);
						_localctx._relationship_left_exp = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_single_expression);
						this.state = 350;
						if (!(this.precpred(this._ctx, 10))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						this.state = 351;
						this.relationship_op();
						this.state = 352;
						_localctx._relationship_right_exp = this.single_expression(11);
						}
						break;

					case 6:
						{
						_localctx = new Single_expressionContext(_parentctx, _parentState);
						_localctx._equal_left_exp = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_single_expression);
						this.state = 354;
						if (!(this.precpred(this._ctx, 9))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						this.state = 355;
						this.equal_op();
						this.state = 356;
						_localctx._equal_right_exp = this.single_expression(10);
						}
						break;

					case 7:
						{
						_localctx = new Single_expressionContext(_parentctx, _parentState);
						_localctx._logic_left_exp = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_single_expression);
						this.state = 358;
						if (!(this.precpred(this._ctx, 8))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						this.state = 359;
						this.logic_op();
						this.state = 360;
						_localctx._logic_right_exp = this.single_expression(9);
						}
						break;

					case 8:
						{
						_localctx = new Single_expressionContext(_parentctx, _parentState);
						_localctx._triple_exp_condition = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_single_expression);
						this.state = 362;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 363;
						this.match(qcodeParser.QUE_MARK);
						this.state = 364;
						_localctx._triple_exp_true = this.single_expression(0);
						this.state = 365;
						this.match(qcodeParser.COLON);
						this.state = 366;
						_localctx._triple_exp_false = this.single_expression(8);
						}
						break;

					case 9:
						{
						_localctx = new Single_expressionContext(_parentctx, _parentState);
						_localctx._assign_exp_left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_single_expression);
						this.state = 368;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 369;
						this.assign_op();
						this.state = 370;
						_localctx._assign_exp_right = this.single_expression(7);
						}
						break;

					case 10:
						{
						_localctx = new Single_expressionContext(_parentctx, _parentState);
						_localctx._get_index_exp = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_single_expression);
						this.state = 372;
						if (!(this.precpred(this._ctx, 19))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						this.state = 373;
						this.match(qcodeParser.LBRACK);
						this.state = 374;
						this.vector_expression();
						this.state = 375;
						this.match(qcodeParser.RBRACK);
						}
						break;

					case 11:
						{
						_localctx = new Single_expressionContext(_parentctx, _parentState);
						_localctx._function_call_exp = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_single_expression);
						this.state = 377;
						if (!(this.precpred(this._ctx, 17))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						this.state = 378;
						this.match(qcodeParser.LPAREN);
						this.state = 380;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (qcodeParser.LET - 3)) | (1 << (qcodeParser.INCLUDE - 3)) | (1 << (qcodeParser.INT - 3)) | (1 << (qcodeParser.BOOL - 3)) | (1 << (qcodeParser.IF - 3)) | (1 << (qcodeParser.ELSE - 3)) | (1 << (qcodeParser.FOR - 3)) | (1 << (qcodeParser.LIB - 3)) | (1 << (qcodeParser.QRUNES - 3)) | (1 << (qcodeParser.AVAR - 3)) | (1 << (qcodeParser.DOUBLE - 3)) | (1 << (qcodeParser.IN - 3)) | (1 << (qcodeParser.PI - 3)) | (1 << (qcodeParser.RETURN - 3)) | (1 << (qcodeParser.LAMBDA - 3)) | (1 << (qcodeParser.BREAK - 3)) | (1 << (qcodeParser.CONTINUE - 3)) | (1 << (qcodeParser.TRUE - 3)) | (1 << (qcodeParser.FALSE - 3)) | (1 << (qcodeParser.QUBIT - 3)) | (1 << (qcodeParser.CBIT - 3)) | (1 << (qcodeParser.VQG_CNOT_VCGEN - 3)) | (1 << (qcodeParser.VQG_RZ_VCGEN - 3)) | (1 << (qcodeParser.VQG_RX_VCGEN - 3)) | (1 << (qcodeParser.H_GATE - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (qcodeParser.X_GATE - 35)) | (1 << (qcodeParser.NOT_GATE - 35)) | (1 << (qcodeParser.T_GATE - 35)) | (1 << (qcodeParser.S_GATE - 35)) | (1 << (qcodeParser.Y_GATE - 35)) | (1 << (qcodeParser.Z_GATE - 35)) | (1 << (qcodeParser.X1_GATE - 35)) | (1 << (qcodeParser.Y1_GATE - 35)) | (1 << (qcodeParser.Z1_GATE - 35)) | (1 << (qcodeParser.U4_GATE - 35)) | (1 << (qcodeParser.RX_GATE - 35)) | (1 << (qcodeParser.RY_GATE - 35)) | (1 << (qcodeParser.RZ_GATE - 35)) | (1 << (qcodeParser.TOFFOLI_GATE - 35)) | (1 << (qcodeParser.CNOT_GATE - 35)) | (1 << (qcodeParser.CZ_GATE - 35)) | (1 << (qcodeParser.CR_GATE - 35)) | (1 << (qcodeParser.CU_GATE - 35)) | (1 << (qcodeParser.ISWAP - 35)) | (1 << (qcodeParser.APPLY_QGATE - 35)) | (1 << (qcodeParser.MEASURE - 35)) | (1 << (qcodeParser.MEASUREALL - 35)) | (1 << (qcodeParser.QIF - 35)) | (1 << (qcodeParser.QWHILE - 35)) | (1 << (qcodeParser.QELSE - 35)) | (1 << (qcodeParser.BANG - 35)) | (1 << (qcodeParser.TILDE - 35)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (qcodeParser.INC - 78)) | (1 << (qcodeParser.DEC - 78)) | (1 << (qcodeParser.SUB - 78)) | (1 << (qcodeParser.LPAREN - 78)) | (1 << (qcodeParser.LBRACK - 78)) | (1 << (qcodeParser.Identifier - 78)) | (1 << (qcodeParser.Integer_Literal - 78)) | (1 << (qcodeParser.Double_Literal - 78)))) !== 0)) {
							{
							this.state = 379;
							this.expression_list(0);
							}
						}

						this.state = 382;
						this.match(qcodeParser.RPAREN);
						}
						break;

					case 12:
						{
						_localctx = new Single_expressionContext(_parentctx, _parentState);
						_localctx._postfix_add_exp = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_single_expression);
						this.state = 383;
						if (!(this.precpred(this._ctx, 16))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						this.state = 384;
						this.match(qcodeParser.INC);
						}
						break;

					case 13:
						{
						_localctx = new Single_expressionContext(_parentctx, _parentState);
						_localctx._postfix_dec_exp = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, qcodeParser.RULE_single_expression);
						this.state = 385;
						if (!(this.precpred(this._ctx, 15))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						this.state = 386;
						this.match(qcodeParser.DEC);
						}
						break;
					}
					} 
				}
				this.state = 391;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,23,this._ctx);
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
	public lambda_exp(): Lambda_expContext {
		let _localctx: Lambda_expContext = new Lambda_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, qcodeParser.RULE_lambda_exp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(qcodeParser.LAMBDA);
			this.state = 393;
			this.match(qcodeParser.LPAREN);
			this.state = 394;
			this.parameter_decl_list(0);
			this.state = 395;
			this.match(qcodeParser.RPAREN);
			this.state = 396;
			this.match(qcodeParser.COLON);
			this.state = 397;
			this.lambda_body();
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
	public lambda_body(): Lambda_bodyContext {
		let _localctx: Lambda_bodyContext = new Lambda_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, qcodeParser.RULE_lambda_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this.compound_statement();
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
	public additive_op(): Additive_opContext {
		let _localctx: Additive_opContext = new Additive_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, qcodeParser.RULE_additive_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			_la = this._input.LA(1);
			if ( !(_la===qcodeParser.ADD || _la===qcodeParser.SUB) ) {
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
	public multiplicative_op(): Multiplicative_opContext {
		let _localctx: Multiplicative_opContext = new Multiplicative_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, qcodeParser.RULE_multiplicative_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			_la = this._input.LA(1);
			if ( !(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (qcodeParser.MUL - 82)) | (1 << (qcodeParser.DIV - 82)) | (1 << (qcodeParser.MOD - 82)))) !== 0)) ) {
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
	public shift_op(): Shift_opContext {
		let _localctx: Shift_opContext = new Shift_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, qcodeParser.RULE_shift_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			_la = this._input.LA(1);
			if ( !(_la===qcodeParser.SHIFT_LEFT || _la===qcodeParser.SHIFT_RIGHT) ) {
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
	public assign_op(): Assign_opContext {
		let _localctx: Assign_opContext = new Assign_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, qcodeParser.RULE_assign_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			_la = this._input.LA(1);
			if ( !(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (qcodeParser.ASSIGN - 62)) | (1 << (qcodeParser.ADD_ASSIGN - 62)) | (1 << (qcodeParser.SUB_ASSIGN - 62)) | (1 << (qcodeParser.MUL_ASSIGN - 62)) | (1 << (qcodeParser.DIV_ASSIGN - 62)) | (1 << (qcodeParser.MOD_ASSIGN - 62)))) !== 0)) ) {
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
	public equal_op(): Equal_opContext {
		let _localctx: Equal_opContext = new Equal_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, qcodeParser.RULE_equal_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			_la = this._input.LA(1);
			if ( !(_la===qcodeParser.EQUAL || _la===qcodeParser.NOTEQUAL) ) {
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
	public relationship_op(): Relationship_opContext {
		let _localctx: Relationship_opContext = new Relationship_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, qcodeParser.RULE_relationship_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			_la = this._input.LA(1);
			if ( !(((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (qcodeParser.GT - 63)) | (1 << (qcodeParser.LT - 63)) | (1 << (qcodeParser.LE - 63)) | (1 << (qcodeParser.GE - 63)))) !== 0)) ) {
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
	public logic_op(): Logic_opContext {
		let _localctx: Logic_opContext = new Logic_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, qcodeParser.RULE_logic_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
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
	@RuleVersion(0)
	public unary_op(): Unary_opContext {
		let _localctx: Unary_opContext = new Unary_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, qcodeParser.RULE_unary_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			_la = this._input.LA(1);
			if ( !(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (qcodeParser.BANG - 65)) | (1 << (qcodeParser.TILDE - 65)) | (1 << (qcodeParser.INC - 65)) | (1 << (qcodeParser.DEC - 65)) | (1 << (qcodeParser.SUB - 65)))) !== 0)) ) {
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, qcodeParser.RULE_statement);
		try {
			this.state = 427;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,24,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 417;
				this.expression_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 418;
				this.empty_statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 419;
				this.declaration_variable_statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 420;
				this.compound_statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 421;
				this.select_statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 422;
				this.while_statement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 423;
				this.iterate_statement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 424;
				this.qif_statement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 425;
				this.qwhile_statement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 426;
				this.return_statement();
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
	public while_statement(): While_statementContext {
		let _localctx: While_statementContext = new While_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, qcodeParser.RULE_while_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.match(qcodeParser.WHILE);
			this.state = 430;
			this.match(qcodeParser.LPAREN);
			this.state = 431;
			this.single_expression(0);
			this.state = 432;
			this.match(qcodeParser.RPAREN);
			this.state = 433;
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
	public return_statement(): Return_statementContext {
		let _localctx: Return_statementContext = new Return_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, qcodeParser.RULE_return_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.match(qcodeParser.RETURN);
			this.state = 436;
			this.single_expression(0);
			this.state = 437;
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
	public qif_statement(): Qif_statementContext {
		let _localctx: Qif_statementContext = new Qif_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, qcodeParser.RULE_qif_statement);
		try {
			this.state = 459;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,25,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 439;
				this.match(qcodeParser.QIF);
				this.state = 440;
				this.match(qcodeParser.LPAREN);
				this.state = 441;
				this.single_expression(0);
				this.state = 442;
				this.match(qcodeParser.RPAREN);
				this.state = 443;
				this.match(qcodeParser.LBRACE);
				this.state = 444;
				this.qif_true_branch();
				this.state = 445;
				this.match(qcodeParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 447;
				this.match(qcodeParser.QIF);
				this.state = 448;
				this.match(qcodeParser.LPAREN);
				this.state = 449;
				this.single_expression(0);
				this.state = 450;
				this.match(qcodeParser.RPAREN);
				this.state = 451;
				this.match(qcodeParser.LBRACE);
				this.state = 452;
				this.qif_true_branch();
				this.state = 453;
				this.match(qcodeParser.RBRACE);
				this.state = 454;
				this.match(qcodeParser.QELSE);
				this.state = 455;
				this.match(qcodeParser.LBRACE);
				this.state = 456;
				this.qif_false_branch();
				this.state = 457;
				this.match(qcodeParser.RBRACE);
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
	public qif_true_branch(): Qif_true_branchContext {
		let _localctx: Qif_true_branchContext = new Qif_true_branchContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, qcodeParser.RULE_qif_true_branch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
			this.statement_list();
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
	public qif_false_branch(): Qif_false_branchContext {
		let _localctx: Qif_false_branchContext = new Qif_false_branchContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, qcodeParser.RULE_qif_false_branch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this.statement_list();
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
	public qwhile_statement(): Qwhile_statementContext {
		let _localctx: Qwhile_statementContext = new Qwhile_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, qcodeParser.RULE_qwhile_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this.match(qcodeParser.QWHILE);
			this.state = 466;
			this.match(qcodeParser.LPAREN);
			this.state = 467;
			this.single_expression(0);
			this.state = 468;
			this.match(qcodeParser.RPAREN);
			this.state = 469;
			this.match(qcodeParser.LBRACE);
			this.state = 470;
			this.statement_list();
			this.state = 471;
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
	public expression_statement(): Expression_statementContext {
		let _localctx: Expression_statementContext = new Expression_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, qcodeParser.RULE_expression_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.single_expression(0);
			this.state = 474;
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
	public empty_statement(): Empty_statementContext {
		let _localctx: Empty_statementContext = new Empty_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, qcodeParser.RULE_empty_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
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
	public declaration_variable_statement(): Declaration_variable_statementContext {
		let _localctx: Declaration_variable_statementContext = new Declaration_variable_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, qcodeParser.RULE_declaration_variable_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.declaration_variable();
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
	public compound_statement(): Compound_statementContext {
		let _localctx: Compound_statementContext = new Compound_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, qcodeParser.RULE_compound_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			this.match(qcodeParser.LBRACE);
			this.state = 482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (qcodeParser.LET - 3)) | (1 << (qcodeParser.INCLUDE - 3)) | (1 << (qcodeParser.INT - 3)) | (1 << (qcodeParser.BOOL - 3)) | (1 << (qcodeParser.IF - 3)) | (1 << (qcodeParser.ELSE - 3)) | (1 << (qcodeParser.FOR - 3)) | (1 << (qcodeParser.LIB - 3)) | (1 << (qcodeParser.QRUNES - 3)) | (1 << (qcodeParser.AVAR - 3)) | (1 << (qcodeParser.DOUBLE - 3)) | (1 << (qcodeParser.MAP - 3)) | (1 << (qcodeParser.IN - 3)) | (1 << (qcodeParser.VECTOR - 3)) | (1 << (qcodeParser.PI - 3)) | (1 << (qcodeParser.RETURN - 3)) | (1 << (qcodeParser.LAMBDA - 3)) | (1 << (qcodeParser.BREAK - 3)) | (1 << (qcodeParser.CONTINUE - 3)) | (1 << (qcodeParser.TRUE - 3)) | (1 << (qcodeParser.FALSE - 3)) | (1 << (qcodeParser.QUBIT - 3)) | (1 << (qcodeParser.CBIT - 3)) | (1 << (qcodeParser.CIRCUIT - 3)) | (1 << (qcodeParser.VARIATIONALCIRCUIT - 3)) | (1 << (qcodeParser.VQG_CNOT_VCGEN - 3)) | (1 << (qcodeParser.VQG_RZ_VCGEN - 3)) | (1 << (qcodeParser.VQG_RX_VCGEN - 3)) | (1 << (qcodeParser.H_GATE - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (qcodeParser.X_GATE - 35)) | (1 << (qcodeParser.NOT_GATE - 35)) | (1 << (qcodeParser.T_GATE - 35)) | (1 << (qcodeParser.S_GATE - 35)) | (1 << (qcodeParser.Y_GATE - 35)) | (1 << (qcodeParser.Z_GATE - 35)) | (1 << (qcodeParser.X1_GATE - 35)) | (1 << (qcodeParser.Y1_GATE - 35)) | (1 << (qcodeParser.Z1_GATE - 35)) | (1 << (qcodeParser.U4_GATE - 35)) | (1 << (qcodeParser.RX_GATE - 35)) | (1 << (qcodeParser.RY_GATE - 35)) | (1 << (qcodeParser.RZ_GATE - 35)) | (1 << (qcodeParser.TOFFOLI_GATE - 35)) | (1 << (qcodeParser.CNOT_GATE - 35)) | (1 << (qcodeParser.CZ_GATE - 35)) | (1 << (qcodeParser.CR_GATE - 35)) | (1 << (qcodeParser.CU_GATE - 35)) | (1 << (qcodeParser.ISWAP - 35)) | (1 << (qcodeParser.APPLY_QGATE - 35)) | (1 << (qcodeParser.MEASURE - 35)) | (1 << (qcodeParser.MEASUREALL - 35)) | (1 << (qcodeParser.QIF - 35)) | (1 << (qcodeParser.QWHILE - 35)) | (1 << (qcodeParser.QELSE - 35)) | (1 << (qcodeParser.WHILE - 35)) | (1 << (qcodeParser.BANG - 35)) | (1 << (qcodeParser.TILDE - 35)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (qcodeParser.INC - 78)) | (1 << (qcodeParser.DEC - 78)) | (1 << (qcodeParser.SUB - 78)) | (1 << (qcodeParser.LBRACE - 78)) | (1 << (qcodeParser.SEMI - 78)) | (1 << (qcodeParser.LPAREN - 78)) | (1 << (qcodeParser.LBRACK - 78)) | (1 << (qcodeParser.Identifier - 78)) | (1 << (qcodeParser.Integer_Literal - 78)) | (1 << (qcodeParser.Double_Literal - 78)))) !== 0)) {
				{
				this.state = 481;
				this.statement_list();
				}
			}

			this.state = 484;
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
	public select_statement(): Select_statementContext {
		let _localctx: Select_statementContext = new Select_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, qcodeParser.RULE_select_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this.match(qcodeParser.IF);
			this.state = 487;
			this.match(qcodeParser.LPAREN);
			this.state = 488;
			this.single_expression(0);
			this.state = 489;
			this.match(qcodeParser.RPAREN);
			this.state = 490;
			_localctx._if_stmt = this.statement();
			this.state = 493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,27,this._ctx) ) {
			case 1:
				{
				this.state = 491;
				this.match(qcodeParser.ELSE);
				this.state = 492;
				_localctx._else_stmt = this.statement();
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
	public iterate_statement(): Iterate_statementContext {
		let _localctx: Iterate_statementContext = new Iterate_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, qcodeParser.RULE_iterate_statement);
		try {
			this.state = 507;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,28,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 495;
				this.match(qcodeParser.FOR);
				this.state = 496;
				this.match(qcodeParser.LPAREN);
				this.state = 497;
				this.for_stmt();
				this.state = 498;
				this.match(qcodeParser.RPAREN);
				this.state = 499;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 501;
				this.match(qcodeParser.FOR);
				this.state = 502;
				this.match(qcodeParser.LPAREN);
				this.state = 503;
				this.inhanced_for_stmt();
				this.state = 504;
				this.match(qcodeParser.RPAREN);
				this.state = 505;
				this.statement();
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
	public for_stmt(): For_stmtContext {
		let _localctx: For_stmtContext = new For_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, qcodeParser.RULE_for_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===qcodeParser.LET || _la===qcodeParser.Identifier) {
				{
				this.state = 509;
				this.for_start();
				}
			}

			this.state = 512;
			this.match(qcodeParser.COLON);
			this.state = 514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (qcodeParser.LET - 3)) | (1 << (qcodeParser.INCLUDE - 3)) | (1 << (qcodeParser.INT - 3)) | (1 << (qcodeParser.BOOL - 3)) | (1 << (qcodeParser.IF - 3)) | (1 << (qcodeParser.ELSE - 3)) | (1 << (qcodeParser.FOR - 3)) | (1 << (qcodeParser.LIB - 3)) | (1 << (qcodeParser.QRUNES - 3)) | (1 << (qcodeParser.AVAR - 3)) | (1 << (qcodeParser.DOUBLE - 3)) | (1 << (qcodeParser.IN - 3)) | (1 << (qcodeParser.PI - 3)) | (1 << (qcodeParser.RETURN - 3)) | (1 << (qcodeParser.LAMBDA - 3)) | (1 << (qcodeParser.BREAK - 3)) | (1 << (qcodeParser.CONTINUE - 3)) | (1 << (qcodeParser.TRUE - 3)) | (1 << (qcodeParser.FALSE - 3)) | (1 << (qcodeParser.QUBIT - 3)) | (1 << (qcodeParser.CBIT - 3)) | (1 << (qcodeParser.VQG_CNOT_VCGEN - 3)) | (1 << (qcodeParser.VQG_RZ_VCGEN - 3)) | (1 << (qcodeParser.VQG_RX_VCGEN - 3)) | (1 << (qcodeParser.H_GATE - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (qcodeParser.X_GATE - 35)) | (1 << (qcodeParser.NOT_GATE - 35)) | (1 << (qcodeParser.T_GATE - 35)) | (1 << (qcodeParser.S_GATE - 35)) | (1 << (qcodeParser.Y_GATE - 35)) | (1 << (qcodeParser.Z_GATE - 35)) | (1 << (qcodeParser.X1_GATE - 35)) | (1 << (qcodeParser.Y1_GATE - 35)) | (1 << (qcodeParser.Z1_GATE - 35)) | (1 << (qcodeParser.U4_GATE - 35)) | (1 << (qcodeParser.RX_GATE - 35)) | (1 << (qcodeParser.RY_GATE - 35)) | (1 << (qcodeParser.RZ_GATE - 35)) | (1 << (qcodeParser.TOFFOLI_GATE - 35)) | (1 << (qcodeParser.CNOT_GATE - 35)) | (1 << (qcodeParser.CZ_GATE - 35)) | (1 << (qcodeParser.CR_GATE - 35)) | (1 << (qcodeParser.CU_GATE - 35)) | (1 << (qcodeParser.ISWAP - 35)) | (1 << (qcodeParser.APPLY_QGATE - 35)) | (1 << (qcodeParser.MEASURE - 35)) | (1 << (qcodeParser.MEASUREALL - 35)) | (1 << (qcodeParser.QIF - 35)) | (1 << (qcodeParser.QWHILE - 35)) | (1 << (qcodeParser.QELSE - 35)) | (1 << (qcodeParser.BANG - 35)) | (1 << (qcodeParser.TILDE - 35)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (qcodeParser.INC - 78)) | (1 << (qcodeParser.DEC - 78)) | (1 << (qcodeParser.SUB - 78)) | (1 << (qcodeParser.LPAREN - 78)) | (1 << (qcodeParser.LBRACK - 78)) | (1 << (qcodeParser.Identifier - 78)) | (1 << (qcodeParser.Integer_Literal - 78)) | (1 << (qcodeParser.Double_Literal - 78)))) !== 0)) {
				{
				this.state = 513;
				this.for_step();
				}
			}

			this.state = 516;
			this.match(qcodeParser.COLON);
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (qcodeParser.LET - 3)) | (1 << (qcodeParser.INCLUDE - 3)) | (1 << (qcodeParser.INT - 3)) | (1 << (qcodeParser.BOOL - 3)) | (1 << (qcodeParser.IF - 3)) | (1 << (qcodeParser.ELSE - 3)) | (1 << (qcodeParser.FOR - 3)) | (1 << (qcodeParser.LIB - 3)) | (1 << (qcodeParser.QRUNES - 3)) | (1 << (qcodeParser.AVAR - 3)) | (1 << (qcodeParser.DOUBLE - 3)) | (1 << (qcodeParser.IN - 3)) | (1 << (qcodeParser.PI - 3)) | (1 << (qcodeParser.RETURN - 3)) | (1 << (qcodeParser.LAMBDA - 3)) | (1 << (qcodeParser.BREAK - 3)) | (1 << (qcodeParser.CONTINUE - 3)) | (1 << (qcodeParser.TRUE - 3)) | (1 << (qcodeParser.FALSE - 3)) | (1 << (qcodeParser.QUBIT - 3)) | (1 << (qcodeParser.CBIT - 3)) | (1 << (qcodeParser.VQG_CNOT_VCGEN - 3)) | (1 << (qcodeParser.VQG_RZ_VCGEN - 3)) | (1 << (qcodeParser.VQG_RX_VCGEN - 3)) | (1 << (qcodeParser.H_GATE - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (qcodeParser.X_GATE - 35)) | (1 << (qcodeParser.NOT_GATE - 35)) | (1 << (qcodeParser.T_GATE - 35)) | (1 << (qcodeParser.S_GATE - 35)) | (1 << (qcodeParser.Y_GATE - 35)) | (1 << (qcodeParser.Z_GATE - 35)) | (1 << (qcodeParser.X1_GATE - 35)) | (1 << (qcodeParser.Y1_GATE - 35)) | (1 << (qcodeParser.Z1_GATE - 35)) | (1 << (qcodeParser.U4_GATE - 35)) | (1 << (qcodeParser.RX_GATE - 35)) | (1 << (qcodeParser.RY_GATE - 35)) | (1 << (qcodeParser.RZ_GATE - 35)) | (1 << (qcodeParser.TOFFOLI_GATE - 35)) | (1 << (qcodeParser.CNOT_GATE - 35)) | (1 << (qcodeParser.CZ_GATE - 35)) | (1 << (qcodeParser.CR_GATE - 35)) | (1 << (qcodeParser.CU_GATE - 35)) | (1 << (qcodeParser.ISWAP - 35)) | (1 << (qcodeParser.APPLY_QGATE - 35)) | (1 << (qcodeParser.MEASURE - 35)) | (1 << (qcodeParser.MEASUREALL - 35)) | (1 << (qcodeParser.QIF - 35)) | (1 << (qcodeParser.QWHILE - 35)) | (1 << (qcodeParser.QELSE - 35)) | (1 << (qcodeParser.BANG - 35)) | (1 << (qcodeParser.TILDE - 35)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (qcodeParser.INC - 78)) | (1 << (qcodeParser.DEC - 78)) | (1 << (qcodeParser.SUB - 78)) | (1 << (qcodeParser.LPAREN - 78)) | (1 << (qcodeParser.LBRACK - 78)) | (1 << (qcodeParser.Identifier - 78)) | (1 << (qcodeParser.Integer_Literal - 78)) | (1 << (qcodeParser.Double_Literal - 78)))) !== 0)) {
				{
				this.state = 517;
				this.for_condition();
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
	public for_step(): For_stepContext {
		let _localctx: For_stepContext = new For_stepContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, qcodeParser.RULE_for_step);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 520;
			this.single_expression(0);
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
	public for_condition(): For_conditionContext {
		let _localctx: For_conditionContext = new For_conditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, qcodeParser.RULE_for_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			this.single_expression(0);
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
		this.enterRule(_localctx, 122, qcodeParser.RULE_for_start);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===qcodeParser.LET) {
				{
				this.state = 524;
				this.match(qcodeParser.LET);
				}
			}

			this.state = 527;
			this.match(qcodeParser.Identifier);
			this.state = 530;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===qcodeParser.ASSIGN) {
				{
				this.state = 528;
				this.match(qcodeParser.ASSIGN);
				this.state = 529;
				this.single_expression(0);
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
	public inhanced_for_stmt(): Inhanced_for_stmtContext {
		let _localctx: Inhanced_for_stmtContext = new Inhanced_for_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, qcodeParser.RULE_inhanced_for_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			this.construct_primary_type();
			this.state = 533;
			this.match(qcodeParser.Identifier);
			this.state = 534;
			this.match(qcodeParser.IN);
			this.state = 535;
			this.single_expression(0);
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
	public statement_list(): Statement_listContext {
		let _localctx: Statement_listContext = new Statement_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, qcodeParser.RULE_statement_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 537;
				this.statement();
				}
				}
				this.state = 540; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( ((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (qcodeParser.LET - 3)) | (1 << (qcodeParser.INCLUDE - 3)) | (1 << (qcodeParser.INT - 3)) | (1 << (qcodeParser.BOOL - 3)) | (1 << (qcodeParser.IF - 3)) | (1 << (qcodeParser.ELSE - 3)) | (1 << (qcodeParser.FOR - 3)) | (1 << (qcodeParser.LIB - 3)) | (1 << (qcodeParser.QRUNES - 3)) | (1 << (qcodeParser.AVAR - 3)) | (1 << (qcodeParser.DOUBLE - 3)) | (1 << (qcodeParser.MAP - 3)) | (1 << (qcodeParser.IN - 3)) | (1 << (qcodeParser.VECTOR - 3)) | (1 << (qcodeParser.PI - 3)) | (1 << (qcodeParser.RETURN - 3)) | (1 << (qcodeParser.LAMBDA - 3)) | (1 << (qcodeParser.BREAK - 3)) | (1 << (qcodeParser.CONTINUE - 3)) | (1 << (qcodeParser.TRUE - 3)) | (1 << (qcodeParser.FALSE - 3)) | (1 << (qcodeParser.QUBIT - 3)) | (1 << (qcodeParser.CBIT - 3)) | (1 << (qcodeParser.CIRCUIT - 3)) | (1 << (qcodeParser.VARIATIONALCIRCUIT - 3)) | (1 << (qcodeParser.VQG_CNOT_VCGEN - 3)) | (1 << (qcodeParser.VQG_RZ_VCGEN - 3)) | (1 << (qcodeParser.VQG_RX_VCGEN - 3)) | (1 << (qcodeParser.H_GATE - 3)))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (qcodeParser.X_GATE - 35)) | (1 << (qcodeParser.NOT_GATE - 35)) | (1 << (qcodeParser.T_GATE - 35)) | (1 << (qcodeParser.S_GATE - 35)) | (1 << (qcodeParser.Y_GATE - 35)) | (1 << (qcodeParser.Z_GATE - 35)) | (1 << (qcodeParser.X1_GATE - 35)) | (1 << (qcodeParser.Y1_GATE - 35)) | (1 << (qcodeParser.Z1_GATE - 35)) | (1 << (qcodeParser.U4_GATE - 35)) | (1 << (qcodeParser.RX_GATE - 35)) | (1 << (qcodeParser.RY_GATE - 35)) | (1 << (qcodeParser.RZ_GATE - 35)) | (1 << (qcodeParser.TOFFOLI_GATE - 35)) | (1 << (qcodeParser.CNOT_GATE - 35)) | (1 << (qcodeParser.CZ_GATE - 35)) | (1 << (qcodeParser.CR_GATE - 35)) | (1 << (qcodeParser.CU_GATE - 35)) | (1 << (qcodeParser.ISWAP - 35)) | (1 << (qcodeParser.APPLY_QGATE - 35)) | (1 << (qcodeParser.MEASURE - 35)) | (1 << (qcodeParser.MEASUREALL - 35)) | (1 << (qcodeParser.QIF - 35)) | (1 << (qcodeParser.QWHILE - 35)) | (1 << (qcodeParser.QELSE - 35)) | (1 << (qcodeParser.WHILE - 35)) | (1 << (qcodeParser.BANG - 35)) | (1 << (qcodeParser.TILDE - 35)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (qcodeParser.INC - 78)) | (1 << (qcodeParser.DEC - 78)) | (1 << (qcodeParser.SUB - 78)) | (1 << (qcodeParser.LBRACE - 78)) | (1 << (qcodeParser.SEMI - 78)) | (1 << (qcodeParser.LPAREN - 78)) | (1 << (qcodeParser.LBRACK - 78)) | (1 << (qcodeParser.Identifier - 78)) | (1 << (qcodeParser.Integer_Literal - 78)) | (1 << (qcodeParser.Double_Literal - 78)))) !== 0) );
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
	public function_definition(): Function_definitionContext {
		let _localctx: Function_definitionContext = new Function_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, qcodeParser.RULE_function_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this.declarate_function();
			this.state = 543;
			this.function_body();
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
	public function_body(): Function_bodyContext {
		let _localctx: Function_bodyContext = new Function_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, qcodeParser.RULE_function_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 545;
			this.compound_statement();
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
	public key_words(): Key_wordsContext {
		let _localctx: Key_wordsContext = new Key_wordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, qcodeParser.RULE_key_words);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << qcodeParser.LET) | (1 << qcodeParser.INCLUDE) | (1 << qcodeParser.INT) | (1 << qcodeParser.BOOL) | (1 << qcodeParser.IF) | (1 << qcodeParser.ELSE) | (1 << qcodeParser.FOR) | (1 << qcodeParser.LIB) | (1 << qcodeParser.QRUNES) | (1 << qcodeParser.AVAR) | (1 << qcodeParser.DOUBLE) | (1 << qcodeParser.IN) | (1 << qcodeParser.RETURN) | (1 << qcodeParser.LAMBDA) | (1 << qcodeParser.BREAK) | (1 << qcodeParser.CONTINUE) | (1 << qcodeParser.TRUE) | (1 << qcodeParser.FALSE) | (1 << qcodeParser.QUBIT) | (1 << qcodeParser.CBIT) | (1 << qcodeParser.VQG_CNOT_VCGEN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (qcodeParser.VQG_RZ_VCGEN - 32)) | (1 << (qcodeParser.VQG_RX_VCGEN - 32)) | (1 << (qcodeParser.H_GATE - 32)) | (1 << (qcodeParser.X_GATE - 32)) | (1 << (qcodeParser.NOT_GATE - 32)) | (1 << (qcodeParser.T_GATE - 32)) | (1 << (qcodeParser.S_GATE - 32)) | (1 << (qcodeParser.Y_GATE - 32)) | (1 << (qcodeParser.Z_GATE - 32)) | (1 << (qcodeParser.X1_GATE - 32)) | (1 << (qcodeParser.Y1_GATE - 32)) | (1 << (qcodeParser.Z1_GATE - 32)) | (1 << (qcodeParser.U4_GATE - 32)) | (1 << (qcodeParser.RX_GATE - 32)) | (1 << (qcodeParser.RY_GATE - 32)) | (1 << (qcodeParser.RZ_GATE - 32)) | (1 << (qcodeParser.TOFFOLI_GATE - 32)) | (1 << (qcodeParser.CNOT_GATE - 32)) | (1 << (qcodeParser.CZ_GATE - 32)) | (1 << (qcodeParser.CR_GATE - 32)) | (1 << (qcodeParser.CU_GATE - 32)) | (1 << (qcodeParser.ISWAP - 32)) | (1 << (qcodeParser.APPLY_QGATE - 32)) | (1 << (qcodeParser.MEASURE - 32)) | (1 << (qcodeParser.MEASUREALL - 32)) | (1 << (qcodeParser.QIF - 32)) | (1 << (qcodeParser.QWHILE - 32)) | (1 << (qcodeParser.QELSE - 32)))) !== 0) || _la===qcodeParser.INC) ) {
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
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, qcodeParser.RULE_constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			_la = this._input.LA(1);
			if ( !(_la===qcodeParser.Integer_Literal || _la===qcodeParser.Double_Literal) ) {
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
		case 17:
			return this.call_back_primary_type_list_sempred(_localctx as Call_back_primary_type_listContext, predIndex);

		case 22:
			return this.init_declaratorlist_sempred(_localctx as Init_declaratorlistContext, predIndex);

		case 24:
			return this.variableInitializer_sempred(_localctx as VariableInitializerContext, predIndex);

		case 30:
			return this.parameter_decl_list_sempred(_localctx as Parameter_decl_listContext, predIndex);

		case 31:
			return this.expression_list_sempred(_localctx as Expression_listContext, predIndex);

		case 34:
			return this.single_expression_sempred(_localctx as Single_expressionContext, predIndex);
		}
		return true;
	}
	private call_back_primary_type_list_sempred(_localctx: Call_back_primary_type_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private init_declaratorlist_sempred(_localctx: Init_declaratorlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private variableInitializer_sempred(_localctx: VariableInitializerContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private parameter_decl_list_sempred(_localctx: Parameter_decl_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_list_sempred(_localctx: Expression_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private single_expression_sempred(_localctx: Single_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 18);

		case 6:
			return this.precpred(this._ctx, 13);

		case 7:
			return this.precpred(this._ctx, 12);

		case 8:
			return this.precpred(this._ctx, 11);

		case 9:
			return this.precpred(this._ctx, 10);

		case 10:
			return this.precpred(this._ctx, 9);

		case 11:
			return this.precpred(this._ctx, 8);

		case 12:
			return this.precpred(this._ctx, 7);

		case 13:
			return this.precpred(this._ctx, 6);

		case 14:
			return this.precpred(this._ctx, 19);

		case 15:
			return this.precpred(this._ctx, 17);

		case 16:
			return this.precpred(this._ctx, 16);

		case 17:
			return this.precpred(this._ctx, 15);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03n\u022A\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#"+
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+"+
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044"+
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x03"+
		"\x02\x07\x02\x8C\n\x02\f\x02\x0E\x02\x8F\v\x02\x03\x03\x03\x03\x05\x03"+
		"\x93\n\x03\x03\x04\x03\x04\x03\x04\x05\x04\x98\n\x04\x03\x05\x03\x05\x03"+
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07\xA3\n\x07"+
		"\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xAE\n\t\x03"+
		"\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03"+
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xC2\n\x10"+
		"\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xC8\n\x11\x03\x12\x03\x12\x03"+
		"\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07"+
		"\x13\xD5\n\x13\f\x13\x0E\x13\xD8\v\x13\x03\x14\x03\x14\x03\x14\x03\x14"+
		"\x03\x14\x05\x14\xDF\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03"+
		"\x16\x03\x16\x03\x16\x05\x16\xE9\n\x16\x03\x17\x03\x17\x03\x18\x03\x18"+
		"\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\xF3\n\x18\f\x18\x0E\x18\xF6\v"+
		"\x18\x03\x19\x03\x19\x03\x19\x05\x19\xFB\n\x19\x03\x1A\x03\x1A\x03\x1A"+
		"\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u0103\n\x1A\f\x1A\x0E\x1A\u0106\v\x1A"+
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x05\x1C\u010C\n\x1C\x03\x1C\x03\x1C\x03"+
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0116\n\x1D\x03\x1E"+
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03"+
		" \x03 \x07 \u0125\n \f \x0E \u0128\v \x03!\x03!\x03!\x03!\x03!\x03!\x07"+
		"!\u0130\n!\f!\x0E!\u0133\v!\x03\"\x03\"\x05\"\u0137\n\"\x03#\x03#\x03"+
		"#\x03#\x03$\x03$\x03$\x05$\u0140\n$\x03$\x03$\x03$\x05$\u0145\n$\x03$"+
		"\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u0150\n$\x03$\x03$\x03$"+
		"\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03"+
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03"+
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03"+
		"$\x05$\u017F\n$\x03$\x03$\x03$\x03$\x03$\x07$\u0186\n$\f$\x0E$\u0189\v"+
		"$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03"+
		")\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x03"+
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u01AE\n/\x030\x030\x030\x03"+
		"0\x030\x030\x031\x031\x031\x031\x032\x032\x032\x032\x032\x032\x032\x03"+
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x052\u01CE"+
		"\n2\x033\x033\x034\x034\x035\x035\x035\x035\x035\x035\x035\x035\x036\x03"+
		"6\x036\x037\x037\x038\x038\x039\x039\x059\u01E5\n9\x039\x039\x03:\x03"+
		":\x03:\x03:\x03:\x03:\x03:\x05:\u01F0\n:\x03;\x03;\x03;\x03;\x03;\x03"+
		";\x03;\x03;\x03;\x03;\x03;\x03;\x05;\u01FE\n;\x03<\x05<\u0201\n<\x03<"+
		"\x03<\x05<\u0205\n<\x03<\x03<\x05<\u0209\n<\x03=\x03=\x03>\x03>\x03?\x05"+
		"?\u0210\n?\x03?\x03?\x03?\x05?\u0215\n?\x03@\x03@\x03@\x03@\x03@\x03A"+
		"\x06A\u021D\nA\rA\x0EA\u021E\x03B\x03B\x03B\x03C\x03C\x03D\x03D\x03E\x03"+
		"E\x03E\x02\x02\b$.2>@FF\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E"+
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 "+
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02"+
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02"+
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02"+
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02"+
		"\x02\x10\x03\x02\x03\x04\x04\x02\x0E\x0E  \x04\x02\x07\b\x0F\x0F\x04\x02"+
		"\x1D\x1D\x1F\x1F\x03\x02RS\x04\x02TTVW\x03\x02]^\x04\x02@@X\\\x04\x02"+
		"FFII\x04\x02ABGH\x03\x02JK\x05\x02CDPQSS\x07\x02\x05\x0F\x12\x12\x15\x1C"+
		"!=PP\x03\x02ij\u0231\x02\x8D\x03\x02\x02\x02\x04\x92\x03\x02\x02\x02\x06"+
		"\x97\x03\x02\x02\x02\b\x99\x03\x02\x02\x02\n\x9E\x03\x02\x02\x02\f\xA2"+
		"\x03\x02\x02\x02\x0E\xA4\x03\x02\x02\x02\x10\xAD\x03\x02\x02\x02\x12\xAF"+
		"\x03\x02\x02\x02\x14\xB1\x03\x02\x02\x02\x16\xB3\x03\x02\x02\x02\x18\xB5"+
		"\x03\x02\x02\x02\x1A\xB7\x03\x02\x02\x02\x1C\xB9\x03\x02\x02\x02\x1E\xC1"+
		"\x03\x02\x02\x02 \xC7\x03\x02\x02\x02\"\xC9\x03\x02\x02\x02$\xCE\x03\x02"+
		"\x02\x02&\xDE\x03\x02\x02\x02(\xE0\x03\x02\x02\x02*\xE8\x03\x02\x02\x02"+
		",\xEA\x03\x02\x02\x02.\xEC\x03\x02\x02\x020\xF7\x03\x02\x02\x022\xFC\x03"+
		"\x02\x02\x024\u0107\x03\x02\x02\x026\u010B\x03\x02\x02\x028\u0115\x03"+
		"\x02\x02\x02:\u0117\x03\x02\x02\x02<\u011C\x03\x02\x02\x02>\u011E\x03"+
		"\x02\x02\x02@\u0129\x03\x02\x02\x02B\u0136\x03\x02\x02\x02D\u0138\x03"+
		"\x02\x02\x02F\u014F\x03\x02\x02\x02H\u018A\x03\x02\x02\x02J\u0191\x03"+
		"\x02\x02\x02L\u0193\x03\x02\x02\x02N\u0195\x03\x02\x02\x02P\u0197\x03"+
		"\x02\x02\x02R\u0199\x03\x02\x02\x02T\u019B\x03\x02\x02\x02V\u019D\x03"+
		"\x02\x02\x02X\u019F\x03\x02\x02\x02Z\u01A1\x03\x02\x02\x02\\\u01AD\x03"+
		"\x02\x02\x02^\u01AF\x03\x02\x02\x02`\u01B5\x03\x02\x02\x02b\u01CD\x03"+
		"\x02\x02\x02d\u01CF\x03\x02\x02\x02f\u01D1\x03\x02\x02\x02h\u01D3\x03"+
		"\x02\x02\x02j\u01DB\x03\x02\x02\x02l\u01DE\x03\x02\x02\x02n\u01E0\x03"+
		"\x02\x02\x02p\u01E2\x03\x02\x02\x02r\u01E8\x03\x02\x02\x02t\u01FD\x03"+
		"\x02\x02\x02v\u0200\x03\x02\x02\x02x\u020A\x03\x02\x02\x02z\u020C\x03"+
		"\x02\x02\x02|\u020F\x03\x02\x02\x02~\u0216\x03\x02\x02\x02\x80\u021C\x03"+
		"\x02\x02\x02\x82\u0220\x03\x02\x02\x02\x84\u0223\x03\x02\x02\x02\x86\u0225"+
		"\x03\x02\x02\x02\x88\u0227\x03\x02\x02\x02\x8A\x8C\x05\x04\x03\x02\x8B"+
		"\x8A\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D"+
		"\x8E\x03\x02\x02\x02\x8E\x03\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x90"+
		"\x93\x05\x06\x04\x02\x91\x93\x05\x82B\x02\x92\x90\x03\x02\x02\x02\x92"+
		"\x91\x03\x02\x02\x02\x93\x05\x03\x02\x02\x02\x94\x98\x05\b\x05\x02\x95"+
		"\x98\x05\f\x07\x02\x96\x98\x054\x1B\x02\x97\x94\x03\x02\x02\x02\x97\x95"+
		"\x03\x02\x02\x02\x97\x96\x03\x02\x02\x02\x98\x07\x03\x02\x02\x02\x99\x9A"+
		"\x07\x06\x02\x02\x9A\x9B\x05\n\x06\x02\x9B\x9C\x05F$\x02\x9C\x9D\x05\n"+
		"\x06\x02\x9D\t\x03\x02\x02\x02\x9E\x9F\t\x02\x02\x02\x9F\v\x03\x02\x02"+
		"\x02\xA0\xA3\x05(\x15\x02\xA1\xA3\x05\x0E\b\x02\xA2\xA0\x03\x02\x02\x02"+
		"\xA2\xA1\x03\x02\x02\x02\xA3\r\x03\x02\x02\x02\xA4\xA5\x05\x10\t\x02\xA5"+
		"\xA6\x07h\x02\x02\xA6\x0F\x03\x02\x02\x02\xA7\xAE\x05\x14\v\x02\xA8\xAE"+
		"\x05\x1A\x0E\x02\xA9\xAE\x05\x1C\x0F\x02\xAA\xAE\x05\x1E\x10\x02\xAB\xAE"+
		"\x05\"\x12\x02\xAC\xAE\x05\x12\n\x02\xAD\xA7\x03\x02\x02\x02\xAD\xA8\x03"+
		"\x02\x02\x02\xAD\xA9\x03\x02\x02\x02\xAD\xAA\x03\x02\x02\x02\xAD\xAB\x03"+
		"\x02\x02\x02\xAD\xAC\x03\x02\x02\x02\xAE\x11\x03\x02\x02\x02\xAF\xB0\t"+
		"\x03\x02\x02\xB0\x13\x03\x02\x02\x02\xB1\xB2\t\x04\x02\x02\xB2\x15\x03"+
		"\x02\x02\x02\xB3\xB4\t\x05\x02\x02\xB4\x17\x03\x02\x02\x02\xB5\xB6\x07"+
		"\x1E\x02\x02\xB6\x19\x03\x02\x02\x02\xB7\xB8\x07\x1B\x02\x02\xB8\x1B\x03"+
		"\x02\x02\x02\xB9\xBA\x07\x1C\x02\x02\xBA\x1D\x03\x02\x02\x02\xBB\xBC\x07"+
		"\x13\x02\x02\xBC\xBD\x07B\x02\x02\xBD\xBE\x05 \x11\x02\xBE\xBF\x07A\x02"+
		"\x02\xBF\xC2\x03\x02\x02\x02\xC0\xC2\x07\x11\x02\x02\xC1\xBB\x03\x02\x02"+
		"\x02\xC1\xC0\x03\x02\x02\x02\xC2\x1F\x03\x02\x02\x02\xC3\xC8\x05\x14\v"+
		"\x02\xC4\xC8\x05\x1A\x0E\x02\xC5\xC8\x05\x1C\x0F\x02\xC6\xC8\x07\x11\x02"+
		"\x02\xC7\xC3\x03\x02\x02\x02\xC7\xC4\x03\x02\x02\x02\xC7\xC5\x03\x02\x02"+
		"\x02\xC7\xC6\x03\x02\x02\x02\xC8!\x03\x02\x02\x02\xC9\xCA\x07\x1D\x02"+
		"\x02\xCA\xCB\x07B\x02\x02\xCB\xCC\x05$\x13\x02\xCC\xCD\x07A\x02\x02\xCD"+
		"#\x03\x02\x02\x02\xCE\xCF\b\x13\x01\x02\xCF\xD0\x05&\x14\x02\xD0\xD6\x03"+
		"\x02\x02\x02\xD1\xD2\f\x03\x02\x02\xD2\xD3\x07b\x02\x02\xD3\xD5\x05&\x14"+
		"\x02\xD4\xD1\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02"+
		"\x02\xD6\xD7\x03\x02\x02\x02\xD7%\x03\x02\x02\x02\xD8\xD6\x03\x02\x02"+
		"\x02\xD9\xDF\x05\x14\v\x02\xDA\xDF\x05\x1A\x0E\x02\xDB\xDF\x05\x1C\x0F"+
		"\x02\xDC\xDF\x05\x1E\x10\x02\xDD\xDF\x05\"\x12\x02\xDE\xD9\x03\x02\x02"+
		"\x02\xDE\xDA\x03\x02\x02\x02\xDE\xDB\x03\x02\x02\x02\xDE\xDC\x03\x02\x02"+
		"\x02\xDE\xDD\x03\x02\x02\x02\xDF\'\x03\x02\x02\x02\xE0\xE1\x05*\x16\x02"+
		"\xE1\xE2\x05.\x18\x02\xE2\xE3\x07a\x02\x02\xE3)\x03\x02\x02\x02\xE4\xE9"+
		"\x05,\x17\x02\xE5\xE9\x05\x1E\x10\x02\xE6\xE9\x05\x16\f\x02\xE7\xE9\x05"+
		"\x1A\x0E\x02\xE8\xE4\x03\x02\x02\x02\xE8\xE5\x03\x02\x02\x02\xE8\xE6\x03"+
		"\x02\x02\x02\xE8\xE7\x03\x02\x02\x02\xE9+\x03\x02\x02\x02\xEA\xEB\x07"+
		"\x05\x02\x02\xEB-\x03\x02\x02\x02\xEC\xED\b\x18\x01\x02\xED\xEE\x050\x19"+
		"\x02\xEE\xF4\x03\x02\x02\x02\xEF\xF0\f\x03\x02\x02\xF0\xF1\x07b\x02\x02"+
		"\xF1\xF3\x050\x19\x02\xF2\xEF\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02"+
		"\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5/\x03\x02\x02\x02"+
		"\xF6\xF4\x03\x02\x02\x02\xF7\xFA\x07h\x02\x02\xF8\xF9\x07@\x02\x02\xF9"+
		"\xFB\x052\x1A\x02\xFA\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB"+
		"1\x03\x02\x02\x02\xFC\xFD\b\x1A\x01\x02\xFD\xFE\x05F$\x02\xFE\u0104\x03"+
		"\x02\x02\x02\xFF\u0100\f\x03\x02\x02\u0100\u0101\x07b\x02\x02\u0101\u0103"+
		"\x05F$\x02\u0102\xFF\x03\x02\x02\x02\u0103\u0106\x03\x02\x02\x02\u0104"+
		"\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u01053\x03\x02\x02"+
		"\x02\u0106\u0104\x03\x02\x02\x02\u0107\u0108\x056\x1C\x02\u0108\u0109"+
		"\x07a\x02\x02\u01095\x03\x02\x02\x02\u010A\u010C\x058\x1D\x02\u010B\u010A"+
		"\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02"+
		"\u010D\u010E\x05:\x1E\x02\u010E7\x03\x02\x02\x02\u010F\u0116\x05\x18\r"+
		"\x02\u0110\u0116\x05\x16\f\x02\u0111\u0116\x05\x14\v\x02\u0112\u0116\x05"+
		"\x1C\x0F\x02\u0113\u0116\x05\x1E\x10\x02\u0114\u0116\x05\"\x12\x02\u0115"+
		"\u010F\x03\x02\x02\x02\u0115\u0110\x03\x02\x02\x02\u0115\u0111\x03\x02"+
		"\x02\x02\u0115\u0112\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115"+
		"\u0114\x03\x02\x02\x02\u01169\x03\x02\x02\x02\u0117\u0118\x05<\x1F\x02"+
		"\u0118\u0119\x07d\x02\x02\u0119\u011A\x05> \x02\u011A\u011B\x07e\x02\x02"+
		"\u011B;\x03\x02\x02\x02\u011C\u011D\x07h\x02\x02\u011D=\x03\x02\x02\x02"+
		"\u011E\u011F\b \x01\x02\u011F\u0120\x05\x0E\b\x02\u0120\u0126\x03\x02"+
		"\x02\x02\u0121\u0122\f\x03\x02\x02\u0122\u0123\x07b\x02\x02\u0123\u0125"+
		"\x05\x0E\b\x02\u0124\u0121\x03\x02\x02\x02\u0125\u0128\x03\x02\x02\x02"+
		"\u0126\u0124\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127?\x03\x02"+
		"\x02\x02\u0128\u0126\x03\x02\x02\x02\u0129\u012A\b!\x01\x02\u012A\u012B"+
		"\x05F$\x02\u012B\u0131\x03\x02\x02\x02\u012C\u012D\f\x03\x02\x02\u012D"+
		"\u012E\x07b\x02\x02\u012E\u0130\x05F$\x02\u012F\u012C\x03\x02\x02\x02"+
		"\u0130\u0133\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03"+
		"\x02\x02\x02\u0132A\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0134"+
		"\u0137\x05F$\x02\u0135\u0137\x05D#\x02\u0136\u0134\x03\x02\x02\x02\u0136"+
		"\u0135\x03\x02\x02\x02\u0137C\x03\x02\x02\x02\u0138\u0139\x05F$\x02\u0139"+
		"\u013A\x07E\x02\x02\u013A\u013B\x05F$\x02\u013BE\x03\x02\x02\x02\u013C"+
		"\u013D\b$\x01\x02\u013D\u013F\x07f\x02\x02\u013E\u0140\x05@!\x02\u013F"+
		"\u013E\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0141\x03\x02"+
		"\x02\x02\u0141\u0150\x07g\x02\x02\u0142\u0144\x07d\x02\x02\u0143\u0145"+
		"\x05@!\x02\u0144\u0143\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145"+
		"\u0146\x03\x02\x02\x02\u0146\u0150\x07e\x02\x02\u0147\u0148\x05Z.\x02"+
		"\u0148\u0149\x05F$\x10\u0149\u0150\x03\x02\x02\x02\u014A\u0150\x05H%\x02"+
		"\u014B\u0150\x07h\x02\x02\u014C\u0150\x05\x88E\x02\u014D\u0150\x05\x86"+
		"D\x02\u014E\u0150\x07\x14\x02\x02\u014F\u013C\x03\x02\x02\x02\u014F\u0142"+
		"\x03\x02\x02\x02\u014F\u0147\x03\x02\x02\x02\u014F\u014A\x03\x02\x02\x02"+
		"\u014F\u014B\x03\x02\x02\x02\u014F\u014C\x03\x02\x02\x02\u014F\u014D\x03"+
		"\x02\x02\x02\u014F\u014E\x03\x02\x02\x02\u0150\u0187\x03\x02\x02\x02\u0151"+
		"\u0152\f\x14\x02\x02\u0152\u0153\x07c\x02\x02\u0153\u0186\x05F$\x15\u0154"+
		"\u0155\f\x0F\x02\x02\u0155\u0156\x05N(\x02\u0156\u0157\x05F$\x10\u0157"+
		"\u0186\x03\x02\x02\x02\u0158\u0159\f\x0E\x02\x02\u0159\u015A\x05L\'\x02"+
		"\u015A\u015B\x05F$\x0F\u015B\u0186\x03\x02\x02\x02\u015C\u015D\f\r\x02"+
		"\x02\u015D\u015E\x05P)\x02\u015E\u015F\x05F$\x0E\u015F\u0186\x03\x02\x02"+
		"\x02\u0160\u0161\f\f\x02\x02\u0161\u0162\x05V,\x02\u0162\u0163\x05F$\r"+
		"\u0163\u0186\x03\x02\x02\x02\u0164\u0165\f\v\x02\x02\u0165\u0166\x05T"+
		"+\x02\u0166\u0167\x05F$\f\u0167\u0186\x03\x02\x02\x02\u0168\u0169\f\n"+
		"\x02\x02\u0169\u016A\x05X-\x02\u016A\u016B\x05F$\v\u016B\u0186\x03\x02"+
		"\x02\x02\u016C\u016D\f\t\x02\x02\u016D\u016E\x07O\x02\x02\u016E\u016F"+
		"\x05F$\x02\u016F\u0170\x07E\x02\x02\u0170\u0171\x05F$\n\u0171\u0186\x03"+
		"\x02\x02\x02\u0172\u0173\f\b\x02\x02\u0173\u0174\x05R*\x02\u0174\u0175"+
		"\x05F$\t\u0175\u0186\x03\x02\x02\x02\u0176\u0177\f\x15\x02\x02\u0177\u0178"+
		"\x07f\x02\x02\u0178\u0179\x05B\"\x02\u0179\u017A\x07g\x02\x02\u017A\u0186"+
		"\x03\x02\x02\x02\u017B\u017C\f\x13\x02\x02\u017C\u017E\x07d\x02\x02\u017D"+
		"\u017F\x05@!\x02\u017E\u017D\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02"+
		"\u017F\u0180\x03\x02\x02\x02\u0180\u0186\x07e\x02\x02\u0181\u0182\f\x12"+
		"\x02\x02\u0182\u0186\x07P\x02\x02\u0183\u0184\f\x11\x02\x02\u0184\u0186"+
		"\x07Q\x02\x02\u0185\u0151\x03\x02\x02\x02\u0185\u0154\x03\x02\x02\x02"+
		"\u0185\u0158\x03\x02\x02\x02\u0185\u015C\x03\x02\x02\x02\u0185\u0160\x03"+
		"\x02\x02\x02\u0185\u0164\x03\x02\x02\x02\u0185\u0168\x03\x02\x02\x02\u0185"+
		"\u016C\x03\x02\x02\x02\u0185\u0172\x03\x02\x02\x02\u0185\u0176\x03\x02"+
		"\x02\x02\u0185\u017B\x03\x02\x02\x02\u0185\u0181\x03\x02\x02\x02\u0185"+
		"\u0183\x03\x02\x02\x02\u0186\u0189\x03\x02\x02\x02\u0187\u0185\x03\x02"+
		"\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188G\x03\x02\x02\x02\u0189\u0187"+
		"\x03\x02\x02\x02\u018A\u018B\x07\x16\x02\x02\u018B\u018C\x07d\x02\x02"+
		"\u018C\u018D\x05> \x02\u018D\u018E\x07e\x02\x02\u018E\u018F\x07E\x02\x02"+
		"\u018F\u0190\x05J&\x02\u0190I\x03\x02\x02\x02\u0191\u0192\x05p9\x02\u0192"+
		"K\x03\x02\x02\x02\u0193\u0194\t\x06\x02\x02\u0194M\x03\x02\x02\x02\u0195"+
		"\u0196\t\x07\x02\x02\u0196O\x03\x02\x02\x02\u0197\u0198\t\b\x02\x02\u0198"+
		"Q\x03\x02\x02\x02\u0199\u019A\t\t\x02\x02\u019AS\x03\x02\x02\x02\u019B"+
		"\u019C\t\n\x02\x02\u019CU\x03\x02\x02\x02\u019D\u019E\t\v\x02\x02\u019E"+
		"W\x03\x02\x02\x02\u019F\u01A0\t\f\x02\x02\u01A0Y\x03\x02\x02\x02\u01A1"+
		"\u01A2\t\r\x02\x02\u01A2[\x03\x02\x02\x02\u01A3\u01AE\x05j6\x02\u01A4"+
		"\u01AE\x05l7\x02\u01A5\u01AE\x05n8\x02\u01A6\u01AE\x05p9\x02\u01A7\u01AE"+
		"\x05r:\x02\u01A8\u01AE\x05^0\x02\u01A9\u01AE\x05t;\x02\u01AA\u01AE\x05"+
		"b2\x02\u01AB\u01AE\x05h5\x02\u01AC\u01AE\x05`1\x02\u01AD\u01A3\x03\x02"+
		"\x02\x02\u01AD\u01A4\x03\x02\x02\x02\u01AD\u01A5\x03\x02\x02\x02\u01AD"+
		"\u01A6\x03\x02\x02\x02\u01AD\u01A7\x03\x02\x02\x02\u01AD\u01A8\x03\x02"+
		"\x02\x02\u01AD\u01A9\x03\x02\x02\x02\u01AD\u01AA\x03\x02\x02\x02\u01AD"+
		"\u01AB\x03\x02\x02\x02\u01AD\u01AC\x03\x02\x02\x02\u01AE]\x03\x02\x02"+
		"\x02\u01AF\u01B0\x07>\x02\x02\u01B0\u01B1\x07d\x02\x02\u01B1\u01B2\x05"+
		"F$\x02\u01B2\u01B3\x07e\x02\x02\u01B3\u01B4\x05\\/\x02\u01B4_\x03\x02"+
		"\x02\x02\u01B5\u01B6\x07\x15\x02\x02\u01B6\u01B7\x05F$\x02\u01B7\u01B8"+
		"\x07a\x02\x02\u01B8a\x03\x02\x02\x02\u01B9\u01BA\x07;\x02\x02\u01BA\u01BB"+
		"\x07d\x02\x02\u01BB\u01BC\x05F$\x02\u01BC\u01BD\x07e\x02\x02\u01BD\u01BE"+
		"\x07_\x02\x02\u01BE\u01BF\x05d3\x02\u01BF\u01C0\x07`\x02\x02\u01C0\u01CE"+
		"\x03\x02\x02\x02\u01C1\u01C2\x07;\x02\x02\u01C2\u01C3\x07d\x02\x02\u01C3"+
		"\u01C4\x05F$\x02\u01C4\u01C5\x07e\x02\x02\u01C5\u01C6\x07_\x02\x02\u01C6"+
		"\u01C7\x05d3\x02\u01C7\u01C8\x07`\x02\x02\u01C8\u01C9\x07=\x02\x02\u01C9"+
		"\u01CA\x07_\x02\x02\u01CA\u01CB\x05f4\x02\u01CB\u01CC\x07`\x02\x02\u01CC"+
		"\u01CE\x03\x02\x02\x02\u01CD\u01B9\x03\x02\x02\x02\u01CD\u01C1\x03\x02"+
		"\x02\x02\u01CEc\x03\x02\x02\x02\u01CF\u01D0\x05\x80A\x02\u01D0e\x03\x02"+
		"\x02\x02\u01D1\u01D2\x05\x80A\x02\u01D2g\x03\x02\x02\x02\u01D3\u01D4\x07"+
		"<\x02\x02\u01D4\u01D5\x07d\x02\x02\u01D5\u01D6\x05F$\x02\u01D6\u01D7\x07"+
		"e\x02\x02\u01D7\u01D8\x07_\x02\x02\u01D8\u01D9\x05\x80A\x02\u01D9\u01DA"+
		"\x07`\x02\x02\u01DAi\x03\x02\x02\x02\u01DB\u01DC\x05F$\x02\u01DC\u01DD"+
		"\x07a\x02\x02\u01DDk\x03\x02\x02\x02\u01DE\u01DF\x07a\x02\x02\u01DFm\x03"+
		"\x02\x02\x02\u01E0\u01E1\x05(\x15\x02\u01E1o\x03\x02\x02\x02\u01E2\u01E4"+
		"\x07_\x02\x02\u01E3\u01E5\x05\x80A\x02\u01E4\u01E3\x03\x02\x02\x02\u01E4"+
		"\u01E5\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E7\x07`\x02"+
		"\x02\u01E7q\x03\x02\x02\x02\u01E8\u01E9\x07\t\x02\x02\u01E9\u01EA\x07"+
		"d\x02\x02\u01EA\u01EB\x05F$\x02\u01EB\u01EC\x07e\x02\x02\u01EC\u01EF\x05"+
		"\\/\x02\u01ED\u01EE\x07\n\x02\x02\u01EE\u01F0\x05\\/\x02\u01EF\u01ED\x03"+
		"\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0s\x03\x02\x02\x02\u01F1"+
		"\u01F2\x07\v\x02\x02\u01F2\u01F3\x07d\x02\x02\u01F3\u01F4\x05v<\x02\u01F4"+
		"\u01F5\x07e\x02\x02\u01F5\u01F6\x05\\/\x02\u01F6\u01FE\x03\x02\x02\x02"+
		"\u01F7\u01F8\x07\v\x02\x02\u01F8\u01F9\x07d\x02\x02\u01F9\u01FA\x05~@"+
		"\x02\u01FA\u01FB\x07e\x02\x02\u01FB\u01FC\x05\\/\x02\u01FC\u01FE\x03\x02"+
		"\x02\x02\u01FD\u01F1\x03\x02\x02\x02\u01FD\u01F7\x03\x02\x02\x02\u01FE"+
		"u\x03\x02\x02\x02\u01FF\u0201\x05|?\x02\u0200\u01FF\x03\x02\x02\x02\u0200"+
		"\u0201\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0204\x07E\x02"+
		"\x02\u0203\u0205\x05x=\x02\u0204\u0203\x03\x02\x02\x02\u0204\u0205\x03"+
		"\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0208\x07E\x02\x02\u0207"+
		"\u0209\x05z>\x02\u0208\u0207\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02"+
		"\u0209w\x03\x02\x02\x02\u020A\u020B\x05F$\x02\u020By\x03\x02\x02\x02\u020C"+
		"\u020D\x05F$\x02\u020D{\x03\x02\x02\x02\u020E\u0210\x07\x05\x02\x02\u020F"+
		"\u020E\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x03\x02"+
		"\x02\x02\u0211\u0214\x07h\x02\x02\u0212\u0213\x07@\x02\x02\u0213\u0215"+
		"\x05F$\x02\u0214\u0212\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215"+
		"}\x03\x02\x02\x02\u0216\u0217\x05 \x11\x02\u0217\u0218\x07h\x02\x02\u0218"+
		"\u0219\x07\x12\x02\x02\u0219\u021A\x05F$\x02\u021A\x7F\x03\x02\x02\x02"+
		"\u021B\u021D\x05\\/\x02\u021C\u021B\x03\x02\x02\x02\u021D\u021E\x03\x02"+
		"\x02\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F"+
		"\x81\x03\x02\x02\x02\u0220\u0221\x056\x1C\x02\u0221\u0222\x05\x84C\x02"+
		"\u0222\x83\x03\x02\x02\x02\u0223\u0224\x05p9\x02\u0224\x85\x03\x02\x02"+
		"\x02\u0225\u0226\t\x0E\x02\x02\u0226\x87\x03\x02\x02\x02\u0227\u0228\t"+
		"\x0F\x02\x02\u0228\x89\x03\x02\x02\x02%\x8D\x92\x97\xA2\xAD\xC1\xC7\xD6"+
		"\xDE\xE8\xF4\xFA\u0104\u010B\u0115\u0126\u0131\u0136\u013F\u0144\u014F"+
		"\u017E\u0185\u0187\u01AD\u01CD\u01E4\u01EF\u01FD\u0200\u0204\u0208\u020F"+
		"\u0214\u021E";
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
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public function_definition(): Function_definitionContext | undefined {
		return this.tryGetRuleContext(0, Function_definitionContext);
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


export class DeclarationContext extends ParserRuleContext {
	public include_declaration(): Include_declarationContext | undefined {
		return this.tryGetRuleContext(0, Include_declarationContext);
	}
	public variable_declaration(): Variable_declarationContext | undefined {
		return this.tryGetRuleContext(0, Variable_declarationContext);
	}
	public function_declaration(): Function_declarationContext | undefined {
		return this.tryGetRuleContext(0, Function_declarationContext);
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
	public single_expression(): Single_expressionContext {
		return this.getRuleContext(0, Single_expressionContext);
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


export class Variable_declarationContext extends ParserRuleContext {
	public declaration_variable(): Declaration_variableContext | undefined {
		return this.tryGetRuleContext(0, Declaration_variableContext);
	}
	public parameter_declaration(): Parameter_declarationContext | undefined {
		return this.tryGetRuleContext(0, Parameter_declarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_variable_declaration; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterVariable_declaration) listener.enterVariable_declaration(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitVariable_declaration) listener.exitVariable_declaration(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitVariable_declaration) return visitor.visitVariable_declaration(this);
		else return visitor.visitChildren(this);
	}
}


export class Parameter_declarationContext extends ParserRuleContext {
	public parameter_specifier(): Parameter_specifierContext {
		return this.getRuleContext(0, Parameter_specifierContext);
	}
	public Identifier(): TerminalNode { return this.getToken(qcodeParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_parameter_declaration; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterParameter_declaration) listener.enterParameter_declaration(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitParameter_declaration) listener.exitParameter_declaration(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitParameter_declaration) return visitor.visitParameter_declaration(this);
		else return visitor.visitChildren(this);
	}
}


export class Parameter_specifierContext extends ParserRuleContext {
	public auxiliary_primary_type(): Auxiliary_primary_typeContext | undefined {
		return this.tryGetRuleContext(0, Auxiliary_primary_typeContext);
	}
	public quantum_primary_type(): Quantum_primary_typeContext | undefined {
		return this.tryGetRuleContext(0, Quantum_primary_typeContext);
	}
	public classical_primary_type(): Classical_primary_typeContext | undefined {
		return this.tryGetRuleContext(0, Classical_primary_typeContext);
	}
	public array_construct_type(): Array_construct_typeContext | undefined {
		return this.tryGetRuleContext(0, Array_construct_typeContext);
	}
	public call_back_construct_type(): Call_back_construct_typeContext | undefined {
		return this.tryGetRuleContext(0, Call_back_construct_typeContext);
	}
	public quantum_alg_built_in_type(): Quantum_alg_built_in_typeContext | undefined {
		return this.tryGetRuleContext(0, Quantum_alg_built_in_typeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_parameter_specifier; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterParameter_specifier) listener.enterParameter_specifier(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitParameter_specifier) listener.exitParameter_specifier(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitParameter_specifier) return visitor.visitParameter_specifier(this);
		else return visitor.visitChildren(this);
	}
}


export class Quantum_alg_built_in_typeContext extends ParserRuleContext {
	public HAMILTONIAN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.HAMILTONIAN, 0); }
	public AVAR(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.AVAR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_quantum_alg_built_in_type; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQuantum_alg_built_in_type) listener.enterQuantum_alg_built_in_type(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQuantum_alg_built_in_type) listener.exitQuantum_alg_built_in_type(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQuantum_alg_built_in_type) return visitor.visitQuantum_alg_built_in_type(this);
		else return visitor.visitChildren(this);
	}
}


export class Auxiliary_primary_typeContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.INT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.DOUBLE, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.BOOL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_auxiliary_primary_type; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterAuxiliary_primary_type) listener.enterAuxiliary_primary_type(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitAuxiliary_primary_type) listener.exitAuxiliary_primary_type(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitAuxiliary_primary_type) return visitor.visitAuxiliary_primary_type(this);
		else return visitor.visitChildren(this);
	}
}


export class Quantum_circuit_typeContext extends ParserRuleContext {
	public CIRCUIT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.CIRCUIT, 0); }
	public VARIATIONALCIRCUIT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.VARIATIONALCIRCUIT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_quantum_circuit_type; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQuantum_circuit_type) listener.enterQuantum_circuit_type(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQuantum_circuit_type) listener.exitQuantum_circuit_type(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQuantum_circuit_type) return visitor.visitQuantum_circuit_type(this);
		else return visitor.visitChildren(this);
	}
}


export class Quantum_prog_typeContext extends ParserRuleContext {
	public QPROG(): TerminalNode { return this.getToken(qcodeParser.QPROG, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_quantum_prog_type; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQuantum_prog_type) listener.enterQuantum_prog_type(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQuantum_prog_type) listener.exitQuantum_prog_type(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQuantum_prog_type) return visitor.visitQuantum_prog_type(this);
		else return visitor.visitChildren(this);
	}
}


export class Quantum_primary_typeContext extends ParserRuleContext {
	public QUBIT(): TerminalNode { return this.getToken(qcodeParser.QUBIT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_quantum_primary_type; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQuantum_primary_type) listener.enterQuantum_primary_type(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQuantum_primary_type) listener.exitQuantum_primary_type(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQuantum_primary_type) return visitor.visitQuantum_primary_type(this);
		else return visitor.visitChildren(this);
	}
}


export class Classical_primary_typeContext extends ParserRuleContext {
	public CBIT(): TerminalNode { return this.getToken(qcodeParser.CBIT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_classical_primary_type; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterClassical_primary_type) listener.enterClassical_primary_type(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitClassical_primary_type) listener.exitClassical_primary_type(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitClassical_primary_type) return visitor.visitClassical_primary_type(this);
		else return visitor.visitChildren(this);
	}
}


export class Array_construct_typeContext extends ParserRuleContext {
	public VECTOR(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.VECTOR, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LT, 0); }
	public construct_primary_type(): Construct_primary_typeContext | undefined {
		return this.tryGetRuleContext(0, Construct_primary_typeContext);
	}
	public GT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.GT, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.MAP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_array_construct_type; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterArray_construct_type) listener.enterArray_construct_type(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitArray_construct_type) listener.exitArray_construct_type(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitArray_construct_type) return visitor.visitArray_construct_type(this);
		else return visitor.visitChildren(this);
	}
}


export class Construct_primary_typeContext extends ParserRuleContext {
	public auxiliary_primary_type(): Auxiliary_primary_typeContext | undefined {
		return this.tryGetRuleContext(0, Auxiliary_primary_typeContext);
	}
	public quantum_primary_type(): Quantum_primary_typeContext | undefined {
		return this.tryGetRuleContext(0, Quantum_primary_typeContext);
	}
	public classical_primary_type(): Classical_primary_typeContext | undefined {
		return this.tryGetRuleContext(0, Classical_primary_typeContext);
	}
	public MAP(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.MAP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_construct_primary_type; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterConstruct_primary_type) listener.enterConstruct_primary_type(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitConstruct_primary_type) listener.exitConstruct_primary_type(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitConstruct_primary_type) return visitor.visitConstruct_primary_type(this);
		else return visitor.visitChildren(this);
	}
}


export class Call_back_construct_typeContext extends ParserRuleContext {
	public CIRCUIT(): TerminalNode { return this.getToken(qcodeParser.CIRCUIT, 0); }
	public LT(): TerminalNode { return this.getToken(qcodeParser.LT, 0); }
	public call_back_primary_type_list(): Call_back_primary_type_listContext {
		return this.getRuleContext(0, Call_back_primary_type_listContext);
	}
	public GT(): TerminalNode { return this.getToken(qcodeParser.GT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_call_back_construct_type; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterCall_back_construct_type) listener.enterCall_back_construct_type(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitCall_back_construct_type) listener.exitCall_back_construct_type(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitCall_back_construct_type) return visitor.visitCall_back_construct_type(this);
		else return visitor.visitChildren(this);
	}
}


export class Call_back_primary_type_listContext extends ParserRuleContext {
	public call_back_primary_type(): Call_back_primary_typeContext {
		return this.getRuleContext(0, Call_back_primary_typeContext);
	}
	public call_back_primary_type_list(): Call_back_primary_type_listContext | undefined {
		return this.tryGetRuleContext(0, Call_back_primary_type_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.COMMA, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_call_back_primary_type_list; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterCall_back_primary_type_list) listener.enterCall_back_primary_type_list(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitCall_back_primary_type_list) listener.exitCall_back_primary_type_list(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitCall_back_primary_type_list) return visitor.visitCall_back_primary_type_list(this);
		else return visitor.visitChildren(this);
	}
}


export class Call_back_primary_typeContext extends ParserRuleContext {
	public auxiliary_primary_type(): Auxiliary_primary_typeContext | undefined {
		return this.tryGetRuleContext(0, Auxiliary_primary_typeContext);
	}
	public quantum_primary_type(): Quantum_primary_typeContext | undefined {
		return this.tryGetRuleContext(0, Quantum_primary_typeContext);
	}
	public classical_primary_type(): Classical_primary_typeContext | undefined {
		return this.tryGetRuleContext(0, Classical_primary_typeContext);
	}
	public array_construct_type(): Array_construct_typeContext | undefined {
		return this.tryGetRuleContext(0, Array_construct_typeContext);
	}
	public call_back_construct_type(): Call_back_construct_typeContext | undefined {
		return this.tryGetRuleContext(0, Call_back_construct_typeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_call_back_primary_type; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterCall_back_primary_type) listener.enterCall_back_primary_type(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitCall_back_primary_type) listener.exitCall_back_primary_type(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitCall_back_primary_type) return visitor.visitCall_back_primary_type(this);
		else return visitor.visitChildren(this);
	}
}


export class Declaration_variableContext extends ParserRuleContext {
	public variable_decl_specifier(): Variable_decl_specifierContext {
		return this.getRuleContext(0, Variable_decl_specifierContext);
	}
	public init_declaratorlist(): Init_declaratorlistContext {
		return this.getRuleContext(0, Init_declaratorlistContext);
	}
	public SEMI(): TerminalNode { return this.getToken(qcodeParser.SEMI, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_declaration_variable; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterDeclaration_variable) listener.enterDeclaration_variable(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitDeclaration_variable) listener.exitDeclaration_variable(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitDeclaration_variable) return visitor.visitDeclaration_variable(this);
		else return visitor.visitChildren(this);
	}
}


export class Variable_decl_specifierContext extends ParserRuleContext {
	public common_specifier(): Common_specifierContext | undefined {
		return this.tryGetRuleContext(0, Common_specifierContext);
	}
	public array_construct_type(): Array_construct_typeContext | undefined {
		return this.tryGetRuleContext(0, Array_construct_typeContext);
	}
	public quantum_circuit_type(): Quantum_circuit_typeContext | undefined {
		return this.tryGetRuleContext(0, Quantum_circuit_typeContext);
	}
	public quantum_primary_type(): Quantum_primary_typeContext | undefined {
		return this.tryGetRuleContext(0, Quantum_primary_typeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_variable_decl_specifier; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterVariable_decl_specifier) listener.enterVariable_decl_specifier(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitVariable_decl_specifier) listener.exitVariable_decl_specifier(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitVariable_decl_specifier) return visitor.visitVariable_decl_specifier(this);
		else return visitor.visitChildren(this);
	}
}


export class Common_specifierContext extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(qcodeParser.LET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_common_specifier; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterCommon_specifier) listener.enterCommon_specifier(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitCommon_specifier) listener.exitCommon_specifier(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitCommon_specifier) return visitor.visitCommon_specifier(this);
		else return visitor.visitChildren(this);
	}
}


export class Init_declaratorlistContext extends ParserRuleContext {
	public variable_declarator(): Variable_declaratorContext {
		return this.getRuleContext(0, Variable_declaratorContext);
	}
	public init_declaratorlist(): Init_declaratorlistContext | undefined {
		return this.tryGetRuleContext(0, Init_declaratorlistContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.COMMA, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_init_declaratorlist; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterInit_declaratorlist) listener.enterInit_declaratorlist(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitInit_declaratorlist) listener.exitInit_declaratorlist(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitInit_declaratorlist) return visitor.visitInit_declaratorlist(this);
		else return visitor.visitChildren(this);
	}
}


export class Variable_declaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(qcodeParser.Identifier, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_variable_declarator; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterVariable_declarator) listener.enterVariable_declarator(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitVariable_declarator) listener.exitVariable_declarator(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitVariable_declarator) return visitor.visitVariable_declarator(this);
		else return visitor.visitChildren(this);
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	public single_expression(): Single_expressionContext {
		return this.getRuleContext(0, Single_expressionContext);
	}
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.COMMA, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_variableInitializer; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterVariableInitializer) listener.enterVariableInitializer(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitVariableInitializer) listener.exitVariableInitializer(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitVariableInitializer) return visitor.visitVariableInitializer(this);
		else return visitor.visitChildren(this);
	}
}


export class Function_declarationContext extends ParserRuleContext {
	public declarate_function(): Declarate_functionContext {
		return this.getRuleContext(0, Declarate_functionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(qcodeParser.SEMI, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_function_declaration; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterFunction_declaration) listener.enterFunction_declaration(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitFunction_declaration) listener.exitFunction_declaration(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitFunction_declaration) return visitor.visitFunction_declaration(this);
		else return visitor.visitChildren(this);
	}
}


export class Declarate_functionContext extends ParserRuleContext {
	public function_declarator(): Function_declaratorContext {
		return this.getRuleContext(0, Function_declaratorContext);
	}
	public function_return_type_declarator(): Function_return_type_declaratorContext | undefined {
		return this.tryGetRuleContext(0, Function_return_type_declaratorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_declarate_function; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterDeclarate_function) listener.enterDeclarate_function(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitDeclarate_function) listener.exitDeclarate_function(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitDeclarate_function) return visitor.visitDeclarate_function(this);
		else return visitor.visitChildren(this);
	}
}


export class Function_return_type_declaratorContext extends ParserRuleContext {
	public quantum_prog_type(): Quantum_prog_typeContext | undefined {
		return this.tryGetRuleContext(0, Quantum_prog_typeContext);
	}
	public quantum_circuit_type(): Quantum_circuit_typeContext | undefined {
		return this.tryGetRuleContext(0, Quantum_circuit_typeContext);
	}
	public auxiliary_primary_type(): Auxiliary_primary_typeContext | undefined {
		return this.tryGetRuleContext(0, Auxiliary_primary_typeContext);
	}
	public classical_primary_type(): Classical_primary_typeContext | undefined {
		return this.tryGetRuleContext(0, Classical_primary_typeContext);
	}
	public array_construct_type(): Array_construct_typeContext | undefined {
		return this.tryGetRuleContext(0, Array_construct_typeContext);
	}
	public call_back_construct_type(): Call_back_construct_typeContext | undefined {
		return this.tryGetRuleContext(0, Call_back_construct_typeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_function_return_type_declarator; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterFunction_return_type_declarator) listener.enterFunction_return_type_declarator(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitFunction_return_type_declarator) listener.exitFunction_return_type_declarator(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitFunction_return_type_declarator) return visitor.visitFunction_return_type_declarator(this);
		else return visitor.visitChildren(this);
	}
}


export class Function_declaratorContext extends ParserRuleContext {
	public function_name(): Function_nameContext {
		return this.getRuleContext(0, Function_nameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(qcodeParser.LPAREN, 0); }
	public parameter_decl_list(): Parameter_decl_listContext {
		return this.getRuleContext(0, Parameter_decl_listContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(qcodeParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_function_declarator; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterFunction_declarator) listener.enterFunction_declarator(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitFunction_declarator) listener.exitFunction_declarator(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitFunction_declarator) return visitor.visitFunction_declarator(this);
		else return visitor.visitChildren(this);
	}
}


export class Function_nameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(qcodeParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_function_name; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterFunction_name) listener.enterFunction_name(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitFunction_name) listener.exitFunction_name(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitFunction_name) return visitor.visitFunction_name(this);
		else return visitor.visitChildren(this);
	}
}


export class Parameter_decl_listContext extends ParserRuleContext {
	public parameter_declaration(): Parameter_declarationContext {
		return this.getRuleContext(0, Parameter_declarationContext);
	}
	public parameter_decl_list(): Parameter_decl_listContext | undefined {
		return this.tryGetRuleContext(0, Parameter_decl_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.COMMA, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_parameter_decl_list; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterParameter_decl_list) listener.enterParameter_decl_list(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitParameter_decl_list) listener.exitParameter_decl_list(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitParameter_decl_list) return visitor.visitParameter_decl_list(this);
		else return visitor.visitChildren(this);
	}
}


export class Expression_listContext extends ParserRuleContext {
	public _exp_list_alias: Expression_listContext;
	public single_expression(): Single_expressionContext {
		return this.getRuleContext(0, Single_expressionContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.COMMA, 0); }
	public expression_list(): Expression_listContext | undefined {
		return this.tryGetRuleContext(0, Expression_listContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_expression_list; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterExpression_list) listener.enterExpression_list(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitExpression_list) listener.exitExpression_list(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitExpression_list) return visitor.visitExpression_list(this);
		else return visitor.visitChildren(this);
	}
}


export class Vector_expressionContext extends ParserRuleContext {
	public single_expression(): Single_expressionContext | undefined {
		return this.tryGetRuleContext(0, Single_expressionContext);
	}
	public vector_slice(): Vector_sliceContext | undefined {
		return this.tryGetRuleContext(0, Vector_sliceContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_vector_expression; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterVector_expression) listener.enterVector_expression(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitVector_expression) listener.exitVector_expression(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitVector_expression) return visitor.visitVector_expression(this);
		else return visitor.visitChildren(this);
	}
}


export class Vector_sliceContext extends ParserRuleContext {
	public _vector_bound_alias_l: Single_expressionContext;
	public _vector_bound_alias_r: Single_expressionContext;
	public COLON(): TerminalNode { return this.getToken(qcodeParser.COLON, 0); }
	public single_expression(): Single_expressionContext[];
	public single_expression(i: number): Single_expressionContext;
	public single_expression(i?: number): Single_expressionContext | Single_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Single_expressionContext);
		} else {
			return this.getRuleContext(i, Single_expressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_vector_slice; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterVector_slice) listener.enterVector_slice(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitVector_slice) listener.exitVector_slice(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitVector_slice) return visitor.visitVector_slice(this);
		else return visitor.visitChildren(this);
	}
}


export class Single_expressionContext extends ParserRuleContext {
	public _get_index_exp: Single_expressionContext;
	public _get_inside_exp: Single_expressionContext;
	public _function_call_exp: Single_expressionContext;
	public _postfix_add_exp: Single_expressionContext;
	public _postfix_dec_exp: Single_expressionContext;
	public _binary_mul_left_exp: Single_expressionContext;
	public _binary_add_left_exp: Single_expressionContext;
	public _shift_exp_left_exp: Single_expressionContext;
	public _relationship_left_exp: Single_expressionContext;
	public _equal_left_exp: Single_expressionContext;
	public _logic_left_exp: Single_expressionContext;
	public _triple_exp_condition: Single_expressionContext;
	public _assign_exp_left: Single_expressionContext;
	public _bracket_exp: Expression_listContext;
	public _parenthesis_exp: Expression_listContext;
	public _unary_exp: Single_expressionContext;
	public _get_inside_bee_exp: Single_expressionContext;
	public _binary_mul_right_exp: Single_expressionContext;
	public _binary_add_right_exp: Single_expressionContext;
	public _shift_exp_right_exp: Single_expressionContext;
	public _relationship_right_exp: Single_expressionContext;
	public _equal_right_exp: Single_expressionContext;
	public _logic_right_exp: Single_expressionContext;
	public _triple_exp_true: Single_expressionContext;
	public _triple_exp_false: Single_expressionContext;
	public _assign_exp_right: Single_expressionContext;
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RBRACK, 0); }
	public expression_list(): Expression_listContext | undefined {
		return this.tryGetRuleContext(0, Expression_listContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RPAREN, 0); }
	public vector_expression(): Vector_expressionContext | undefined {
		return this.tryGetRuleContext(0, Vector_expressionContext);
	}
	public single_expression(): Single_expressionContext[];
	public single_expression(i: number): Single_expressionContext;
	public single_expression(i?: number): Single_expressionContext | Single_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Single_expressionContext);
		} else {
			return this.getRuleContext(i, Single_expressionContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.DOT, 0); }
	public INC(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.DEC, 0); }
	public unary_op(): Unary_opContext | undefined {
		return this.tryGetRuleContext(0, Unary_opContext);
	}
	public multiplicative_op(): Multiplicative_opContext | undefined {
		return this.tryGetRuleContext(0, Multiplicative_opContext);
	}
	public additive_op(): Additive_opContext | undefined {
		return this.tryGetRuleContext(0, Additive_opContext);
	}
	public shift_op(): Shift_opContext | undefined {
		return this.tryGetRuleContext(0, Shift_opContext);
	}
	public relationship_op(): Relationship_opContext | undefined {
		return this.tryGetRuleContext(0, Relationship_opContext);
	}
	public equal_op(): Equal_opContext | undefined {
		return this.tryGetRuleContext(0, Equal_opContext);
	}
	public logic_op(): Logic_opContext | undefined {
		return this.tryGetRuleContext(0, Logic_opContext);
	}
	public QUE_MARK(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.QUE_MARK, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.COLON, 0); }
	public assign_op(): Assign_opContext | undefined {
		return this.tryGetRuleContext(0, Assign_opContext);
	}
	public lambda_exp(): Lambda_expContext | undefined {
		return this.tryGetRuleContext(0, Lambda_expContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.Identifier, 0); }
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public key_words(): Key_wordsContext | undefined {
		return this.tryGetRuleContext(0, Key_wordsContext);
	}
	public PI(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.PI, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_single_expression; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterSingle_expression) listener.enterSingle_expression(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitSingle_expression) listener.exitSingle_expression(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitSingle_expression) return visitor.visitSingle_expression(this);
		else return visitor.visitChildren(this);
	}
}


export class Lambda_expContext extends ParserRuleContext {
	public LAMBDA(): TerminalNode { return this.getToken(qcodeParser.LAMBDA, 0); }
	public LPAREN(): TerminalNode { return this.getToken(qcodeParser.LPAREN, 0); }
	public parameter_decl_list(): Parameter_decl_listContext {
		return this.getRuleContext(0, Parameter_decl_listContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(qcodeParser.RPAREN, 0); }
	public COLON(): TerminalNode { return this.getToken(qcodeParser.COLON, 0); }
	public lambda_body(): Lambda_bodyContext {
		return this.getRuleContext(0, Lambda_bodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_lambda_exp; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterLambda_exp) listener.enterLambda_exp(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitLambda_exp) listener.exitLambda_exp(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitLambda_exp) return visitor.visitLambda_exp(this);
		else return visitor.visitChildren(this);
	}
}


export class Lambda_bodyContext extends ParserRuleContext {
	public compound_statement(): Compound_statementContext {
		return this.getRuleContext(0, Compound_statementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_lambda_body; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterLambda_body) listener.enterLambda_body(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitLambda_body) listener.exitLambda_body(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitLambda_body) return visitor.visitLambda_body(this);
		else return visitor.visitChildren(this);
	}
}


export class Additive_opContext extends ParserRuleContext {
	public SUB(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.SUB, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.ADD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_additive_op; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterAdditive_op) listener.enterAdditive_op(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitAdditive_op) listener.exitAdditive_op(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitAdditive_op) return visitor.visitAdditive_op(this);
		else return visitor.visitChildren(this);
	}
}


export class Multiplicative_opContext extends ParserRuleContext {
	public MUL(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.MOD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_multiplicative_op; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterMultiplicative_op) listener.enterMultiplicative_op(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitMultiplicative_op) listener.exitMultiplicative_op(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitMultiplicative_op) return visitor.visitMultiplicative_op(this);
		else return visitor.visitChildren(this);
	}
}


export class Shift_opContext extends ParserRuleContext {
	public SHIFT_LEFT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.SHIFT_LEFT, 0); }
	public SHIFT_RIGHT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.SHIFT_RIGHT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_shift_op; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterShift_op) listener.enterShift_op(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitShift_op) listener.exitShift_op(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitShift_op) return visitor.visitShift_op(this);
		else return visitor.visitChildren(this);
	}
}


export class Assign_opContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.DIV_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.MOD_ASSIGN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_assign_op; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterAssign_op) listener.enterAssign_op(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitAssign_op) listener.exitAssign_op(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitAssign_op) return visitor.visitAssign_op(this);
		else return visitor.visitChildren(this);
	}
}


export class Equal_opContext extends ParserRuleContext {
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.NOTEQUAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_equal_op; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterEqual_op) listener.enterEqual_op(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitEqual_op) listener.exitEqual_op(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitEqual_op) return visitor.visitEqual_op(this);
		else return visitor.visitChildren(this);
	}
}


export class Relationship_opContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.GT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.GE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_relationship_op; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterRelationship_op) listener.enterRelationship_op(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitRelationship_op) listener.exitRelationship_op(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitRelationship_op) return visitor.visitRelationship_op(this);
		else return visitor.visitChildren(this);
	}
}


export class Logic_opContext extends ParserRuleContext {
	public LOGIC_AND(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LOGIC_AND, 0); }
	public LOGIC_OR(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LOGIC_OR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_logic_op; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterLogic_op) listener.enterLogic_op(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitLogic_op) listener.exitLogic_op(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitLogic_op) return visitor.visitLogic_op(this);
		else return visitor.visitChildren(this);
	}
}


export class Unary_opContext extends ParserRuleContext {
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.TILDE, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.BANG, 0); }
	public INC(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.DEC, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.SUB, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_unary_op; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterUnary_op) listener.enterUnary_op(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitUnary_op) listener.exitUnary_op(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitUnary_op) return visitor.visitUnary_op(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementContext extends ParserRuleContext {
	public expression_statement(): Expression_statementContext | undefined {
		return this.tryGetRuleContext(0, Expression_statementContext);
	}
	public empty_statement(): Empty_statementContext | undefined {
		return this.tryGetRuleContext(0, Empty_statementContext);
	}
	public declaration_variable_statement(): Declaration_variable_statementContext | undefined {
		return this.tryGetRuleContext(0, Declaration_variable_statementContext);
	}
	public compound_statement(): Compound_statementContext | undefined {
		return this.tryGetRuleContext(0, Compound_statementContext);
	}
	public select_statement(): Select_statementContext | undefined {
		return this.tryGetRuleContext(0, Select_statementContext);
	}
	public while_statement(): While_statementContext | undefined {
		return this.tryGetRuleContext(0, While_statementContext);
	}
	public iterate_statement(): Iterate_statementContext | undefined {
		return this.tryGetRuleContext(0, Iterate_statementContext);
	}
	public qif_statement(): Qif_statementContext | undefined {
		return this.tryGetRuleContext(0, Qif_statementContext);
	}
	public qwhile_statement(): Qwhile_statementContext | undefined {
		return this.tryGetRuleContext(0, Qwhile_statementContext);
	}
	public return_statement(): Return_statementContext | undefined {
		return this.tryGetRuleContext(0, Return_statementContext);
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


export class While_statementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(qcodeParser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(qcodeParser.LPAREN, 0); }
	public single_expression(): Single_expressionContext {
		return this.getRuleContext(0, Single_expressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(qcodeParser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_while_statement; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterWhile_statement) listener.enterWhile_statement(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitWhile_statement) listener.exitWhile_statement(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitWhile_statement) return visitor.visitWhile_statement(this);
		else return visitor.visitChildren(this);
	}
}


export class Return_statementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(qcodeParser.RETURN, 0); }
	public single_expression(): Single_expressionContext {
		return this.getRuleContext(0, Single_expressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(qcodeParser.SEMI, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_return_statement; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterReturn_statement) listener.enterReturn_statement(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitReturn_statement) listener.exitReturn_statement(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitReturn_statement) return visitor.visitReturn_statement(this);
		else return visitor.visitChildren(this);
	}
}


export class Qif_statementContext extends ParserRuleContext {
	public QIF(): TerminalNode { return this.getToken(qcodeParser.QIF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(qcodeParser.LPAREN, 0); }
	public single_expression(): Single_expressionContext {
		return this.getRuleContext(0, Single_expressionContext);
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
	public qif_true_branch(): Qif_true_branchContext {
		return this.getRuleContext(0, Qif_true_branchContext);
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
	public qif_false_branch(): Qif_false_branchContext | undefined {
		return this.tryGetRuleContext(0, Qif_false_branchContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_qif_statement; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQif_statement) listener.enterQif_statement(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQif_statement) listener.exitQif_statement(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQif_statement) return visitor.visitQif_statement(this);
		else return visitor.visitChildren(this);
	}
}


export class Qif_true_branchContext extends ParserRuleContext {
	public statement_list(): Statement_listContext {
		return this.getRuleContext(0, Statement_listContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_qif_true_branch; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQif_true_branch) listener.enterQif_true_branch(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQif_true_branch) listener.exitQif_true_branch(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQif_true_branch) return visitor.visitQif_true_branch(this);
		else return visitor.visitChildren(this);
	}
}


export class Qif_false_branchContext extends ParserRuleContext {
	public statement_list(): Statement_listContext {
		return this.getRuleContext(0, Statement_listContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_qif_false_branch; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQif_false_branch) listener.enterQif_false_branch(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQif_false_branch) listener.exitQif_false_branch(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQif_false_branch) return visitor.visitQif_false_branch(this);
		else return visitor.visitChildren(this);
	}
}


export class Qwhile_statementContext extends ParserRuleContext {
	public QWHILE(): TerminalNode { return this.getToken(qcodeParser.QWHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(qcodeParser.LPAREN, 0); }
	public single_expression(): Single_expressionContext {
		return this.getRuleContext(0, Single_expressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(qcodeParser.RPAREN, 0); }
	public LBRACE(): TerminalNode { return this.getToken(qcodeParser.LBRACE, 0); }
	public statement_list(): Statement_listContext {
		return this.getRuleContext(0, Statement_listContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(qcodeParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_qwhile_statement; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterQwhile_statement) listener.enterQwhile_statement(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitQwhile_statement) listener.exitQwhile_statement(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitQwhile_statement) return visitor.visitQwhile_statement(this);
		else return visitor.visitChildren(this);
	}
}


export class Expression_statementContext extends ParserRuleContext {
	public single_expression(): Single_expressionContext {
		return this.getRuleContext(0, Single_expressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(qcodeParser.SEMI, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_expression_statement; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterExpression_statement) listener.enterExpression_statement(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitExpression_statement) listener.exitExpression_statement(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitExpression_statement) return visitor.visitExpression_statement(this);
		else return visitor.visitChildren(this);
	}
}


export class Empty_statementContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(qcodeParser.SEMI, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_empty_statement; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterEmpty_statement) listener.enterEmpty_statement(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitEmpty_statement) listener.exitEmpty_statement(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitEmpty_statement) return visitor.visitEmpty_statement(this);
		else return visitor.visitChildren(this);
	}
}


export class Declaration_variable_statementContext extends ParserRuleContext {
	public declaration_variable(): Declaration_variableContext {
		return this.getRuleContext(0, Declaration_variableContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_declaration_variable_statement; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterDeclaration_variable_statement) listener.enterDeclaration_variable_statement(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitDeclaration_variable_statement) listener.exitDeclaration_variable_statement(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitDeclaration_variable_statement) return visitor.visitDeclaration_variable_statement(this);
		else return visitor.visitChildren(this);
	}
}


export class Compound_statementContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(qcodeParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(qcodeParser.RBRACE, 0); }
	public statement_list(): Statement_listContext | undefined {
		return this.tryGetRuleContext(0, Statement_listContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_compound_statement; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterCompound_statement) listener.enterCompound_statement(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitCompound_statement) listener.exitCompound_statement(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitCompound_statement) return visitor.visitCompound_statement(this);
		else return visitor.visitChildren(this);
	}
}


export class Select_statementContext extends ParserRuleContext {
	public _if_stmt: StatementContext;
	public _else_stmt: StatementContext;
	public IF(): TerminalNode { return this.getToken(qcodeParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(qcodeParser.LPAREN, 0); }
	public single_expression(): Single_expressionContext {
		return this.getRuleContext(0, Single_expressionContext);
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
	@Override public get ruleIndex(): number { return qcodeParser.RULE_select_statement; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterSelect_statement) listener.enterSelect_statement(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitSelect_statement) listener.exitSelect_statement(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitSelect_statement) return visitor.visitSelect_statement(this);
		else return visitor.visitChildren(this);
	}
}


export class Iterate_statementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(qcodeParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(qcodeParser.LPAREN, 0); }
	public for_stmt(): For_stmtContext | undefined {
		return this.tryGetRuleContext(0, For_stmtContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(qcodeParser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public inhanced_for_stmt(): Inhanced_for_stmtContext | undefined {
		return this.tryGetRuleContext(0, Inhanced_for_stmtContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_iterate_statement; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterIterate_statement) listener.enterIterate_statement(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitIterate_statement) listener.exitIterate_statement(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitIterate_statement) return visitor.visitIterate_statement(this);
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
	public for_condition(): For_conditionContext | undefined {
		return this.tryGetRuleContext(0, For_conditionContext);
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


export class For_stepContext extends ParserRuleContext {
	public single_expression(): Single_expressionContext {
		return this.getRuleContext(0, Single_expressionContext);
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


export class For_conditionContext extends ParserRuleContext {
	public single_expression(): Single_expressionContext {
		return this.getRuleContext(0, Single_expressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_for_condition; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterFor_condition) listener.enterFor_condition(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitFor_condition) listener.exitFor_condition(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitFor_condition) return visitor.visitFor_condition(this);
		else return visitor.visitChildren(this);
	}
}


export class For_startContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(qcodeParser.Identifier, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LET, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.ASSIGN, 0); }
	public single_expression(): Single_expressionContext | undefined {
		return this.tryGetRuleContext(0, Single_expressionContext);
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


export class Inhanced_for_stmtContext extends ParserRuleContext {
	public construct_primary_type(): Construct_primary_typeContext {
		return this.getRuleContext(0, Construct_primary_typeContext);
	}
	public Identifier(): TerminalNode { return this.getToken(qcodeParser.Identifier, 0); }
	public IN(): TerminalNode { return this.getToken(qcodeParser.IN, 0); }
	public single_expression(): Single_expressionContext {
		return this.getRuleContext(0, Single_expressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_inhanced_for_stmt; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterInhanced_for_stmt) listener.enterInhanced_for_stmt(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitInhanced_for_stmt) listener.exitInhanced_for_stmt(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitInhanced_for_stmt) return visitor.visitInhanced_for_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Statement_listContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_statement_list; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterStatement_list) listener.enterStatement_list(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitStatement_list) listener.exitStatement_list(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitStatement_list) return visitor.visitStatement_list(this);
		else return visitor.visitChildren(this);
	}
}


export class Function_definitionContext extends ParserRuleContext {
	public declarate_function(): Declarate_functionContext {
		return this.getRuleContext(0, Declarate_functionContext);
	}
	public function_body(): Function_bodyContext {
		return this.getRuleContext(0, Function_bodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_function_definition; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterFunction_definition) listener.enterFunction_definition(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitFunction_definition) listener.exitFunction_definition(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitFunction_definition) return visitor.visitFunction_definition(this);
		else return visitor.visitChildren(this);
	}
}


export class Function_bodyContext extends ParserRuleContext {
	public compound_statement(): Compound_statementContext {
		return this.getRuleContext(0, Compound_statementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_function_body; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterFunction_body) listener.enterFunction_body(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitFunction_body) listener.exitFunction_body(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitFunction_body) return visitor.visitFunction_body(this);
		else return visitor.visitChildren(this);
	}
}


export class Key_wordsContext extends ParserRuleContext {
	public LET(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LET, 0); }
	public INCLUDE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.INCLUDE, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.INT, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.BOOL, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.IF, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.ELSE, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.FOR, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.IN, 0); }
	public LIB(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LIB, 0); }
	public INC(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.INC, 0); }
	public QRUNES(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.QRUNES, 0); }
	public AVAR(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.AVAR, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.DOUBLE, 0); }
	public QUBIT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.QUBIT, 0); }
	public CBIT(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.CBIT, 0); }
	public H_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.H_GATE, 0); }
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
	public RX_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RX_GATE, 0); }
	public RY_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RY_GATE, 0); }
	public RZ_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RZ_GATE, 0); }
	public CNOT_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.CNOT_GATE, 0); }
	public CZ_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.CZ_GATE, 0); }
	public CR_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.CR_GATE, 0); }
	public CU_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.CU_GATE, 0); }
	public TOFFOLI_GATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.TOFFOLI_GATE, 0); }
	public ISWAP(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.ISWAP, 0); }
	public MEASURE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.MEASURE, 0); }
	public MEASUREALL(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.MEASUREALL, 0); }
	public QIF(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.QIF, 0); }
	public QWHILE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.QWHILE, 0); }
	public QELSE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.QELSE, 0); }
	public VQG_RZ_VCGEN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.VQG_RZ_VCGEN, 0); }
	public VQG_CNOT_VCGEN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.VQG_CNOT_VCGEN, 0); }
	public VQG_RX_VCGEN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.VQG_RX_VCGEN, 0); }
	public APPLY_QGATE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.APPLY_QGATE, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.RETURN, 0); }
	public LAMBDA(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.LAMBDA, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.BREAK, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.CONTINUE, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.FALSE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_key_words; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterKey_words) listener.enterKey_words(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitKey_words) listener.exitKey_words(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitKey_words) return visitor.visitKey_words(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantContext extends ParserRuleContext {
	public Integer_Literal(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.Integer_Literal, 0); }
	public Double_Literal(): TerminalNode | undefined { return this.tryGetToken(qcodeParser.Double_Literal, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return qcodeParser.RULE_constant; }
	@Override
	public enterRule(listener: qcodeListener): void {
		if (listener.enterConstant) listener.enterConstant(this);
	}
	@Override
	public exitRule(listener: qcodeListener): void {
		if (listener.exitConstant) listener.exitConstant(this);
	}
	@Override
	public accept<Result>(visitor: qcodeVisitor<Result>): Result {
		if (visitor.visitConstant) return visitor.visitConstant(this);
		else return visitor.visitChildren(this);
	}
}


