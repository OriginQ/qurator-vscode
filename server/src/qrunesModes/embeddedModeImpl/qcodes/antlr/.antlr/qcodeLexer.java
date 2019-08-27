// Generated from c:\Users\Quantum1603\Desktop\qrunes\server\src\embedded\qcodes\antlr\qcode.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class qcodeLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "PI", "LET", "INCLUDE", "INT", "FLOAT", "BOOL", 
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
		"Identifier", "IdentifierNotDigit", "Digit", "Constant", "Integer_Literal", 
		"Decimal_Literal", "DigitNotZero", "Float_Literal", "Decimal_Float_Literal", 
		"Digit_Sequence", "WhiteSpace", "SingleLineComment", "MultiLinesComment"
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


	public qcodeLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "qcode.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2e\u0279\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4"+
		"`\t`\4a\ta\4b\tb\4c\tc\4d\td\4e\te\4f\tf\4g\tg\4h\th\4i\ti\4j\tj\4k\t"+
		"k\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\6\3\6\3\6"+
		"\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r"+
		"\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3"+
		"\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3"+
		"\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3"+
		"\24\3\24\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3"+
		"\27\3\27\3\27\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3"+
		"\32\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3"+
		"\34\3\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3"+
		"\35\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3"+
		"$\3%\3%\3%\3&\3&\3&\3\'\3\'\3\'\3(\3(\3(\3)\3)\3)\3*\3*\3*\3+\3+\3+\3"+
		",\3,\3,\3,\3,\3-\3-\3-\3.\3.\3.\3/\3/\3/\3\60\3\60\3\60\3\60\3\60\3\60"+
		"\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3\62\3\62\3\62\3\62\3\63\3\63"+
		"\3\63\3\63\3\63\3\63\3\63\3\64\3\64\3\64\3\64\3\64\3\64\3\65\3\65\3\65"+
		"\3\65\3\65\3\66\3\66\3\66\3\66\3\66\3\66\3\67\3\67\38\38\39\39\3:\3:\3"+
		";\3;\3<\3<\3=\3=\3>\3>\3>\3?\3?\3?\3@\3@\3@\3A\3A\3A\3B\3B\3B\3C\3C\3"+
		"C\3D\3D\3E\3E\3F\3F\3G\3G\3H\3H\3H\3I\3I\3I\3J\3J\3K\3K\3L\3L\3M\3M\3"+
		"M\3N\3N\3O\3O\3P\3P\3P\3Q\3Q\3Q\3R\3R\3R\3S\3S\3S\3T\3T\3T\3U\3U\3U\3"+
		"V\3V\3W\3W\3X\3X\3Y\3Y\3Z\3Z\3[\3[\3\\\3\\\3]\3]\3^\3^\3_\3_\3_\7_\u022f"+
		"\n_\f_\16_\u0232\13_\3`\3`\3a\3a\3b\3b\5b\u023a\nb\3c\3c\3d\3d\7d\u0240"+
		"\nd\fd\16d\u0243\13d\3e\3e\3f\3f\3g\5g\u024a\ng\3g\3g\3g\3g\3g\5g\u0251"+
		"\ng\3h\6h\u0254\nh\rh\16h\u0255\3i\3i\3i\3i\3j\3j\3j\3j\7j\u0260\nj\f"+
		"j\16j\u0263\13j\3j\5j\u0266\nj\3j\3j\3j\3j\3k\3k\3k\3k\7k\u0270\nk\fk"+
		"\16k\u0273\13k\3k\3k\3k\3k\3k\3\u0271\2l\3\3\5\4\7\5\t\6\13\7\r\b\17\t"+
		"\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27"+
		"-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W"+
		"-Y.[/]\60_\61a\62c\63e\64g\65i\66k\67m8o9q:s;u<w=y>{?}@\177A\u0081B\u0083"+
		"C\u0085D\u0087E\u0089F\u008bG\u008dH\u008fI\u0091J\u0093K\u0095L\u0097"+
		"M\u0099N\u009bO\u009dP\u009fQ\u00a1R\u00a3S\u00a5T\u00a7U\u00a9V\u00ab"+
		"W\u00adX\u00afY\u00b1Z\u00b3[\u00b5\\\u00b7]\u00b9^\u00bb_\u00bd`\u00bf"+
		"\2\u00c1\2\u00c3a\u00c5\2\u00c7\2\u00c9\2\u00cb\2\u00cd\2\u00cfb\u00d1"+
		"c\u00d3d\u00d5e\3\2\7\5\2C\\aac|\3\2\62;\3\2\63;\5\2\13\f\17\17\"\"\4"+
		"\2\f\f\17\17\2\u027b\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2"+
		"\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3"+
		"\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2"+
		"\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2"+
		"\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2"+
		"\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2"+
		"\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q"+
		"\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2"+
		"\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2"+
		"\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w"+
		"\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2"+
		"\2\2\u0083\3\2\2\2\2\u0085\3\2\2\2\2\u0087\3\2\2\2\2\u0089\3\2\2\2\2\u008b"+
		"\3\2\2\2\2\u008d\3\2\2\2\2\u008f\3\2\2\2\2\u0091\3\2\2\2\2\u0093\3\2\2"+
		"\2\2\u0095\3\2\2\2\2\u0097\3\2\2\2\2\u0099\3\2\2\2\2\u009b\3\2\2\2\2\u009d"+
		"\3\2\2\2\2\u009f\3\2\2\2\2\u00a1\3\2\2\2\2\u00a3\3\2\2\2\2\u00a5\3\2\2"+
		"\2\2\u00a7\3\2\2\2\2\u00a9\3\2\2\2\2\u00ab\3\2\2\2\2\u00ad\3\2\2\2\2\u00af"+
		"\3\2\2\2\2\u00b1\3\2\2\2\2\u00b3\3\2\2\2\2\u00b5\3\2\2\2\2\u00b7\3\2\2"+
		"\2\2\u00b9\3\2\2\2\2\u00bb\3\2\2\2\2\u00bd\3\2\2\2\2\u00c3\3\2\2\2\2\u00cf"+
		"\3\2\2\2\2\u00d1\3\2\2\2\2\u00d3\3\2\2\2\2\u00d5\3\2\2\2\3\u00d7\3\2\2"+
		"\2\5\u00d9\3\2\2\2\7\u00db\3\2\2\2\t\u00e2\3\2\2\2\13\u00e5\3\2\2\2\r"+
		"\u00e9\3\2\2\2\17\u00f1\3\2\2\2\21\u00f5\3\2\2\2\23\u00fb\3\2\2\2\25\u0100"+
		"\3\2\2\2\27\u0103\3\2\2\2\31\u0108\3\2\2\2\33\u010c\3\2\2\2\35\u0111\3"+
		"\2\2\2\37\u0116\3\2\2\2!\u011e\3\2\2\2#\u0122\3\2\2\2%\u0129\3\2\2\2\'"+
		"\u0131\3\2\2\2)\u0136\3\2\2\2+\u013b\3\2\2\2-\u0140\3\2\2\2/\u0145\3\2"+
		"\2\2\61\u014b\3\2\2\2\63\u0150\3\2\2\2\65\u0155\3\2\2\2\67\u015b\3\2\2"+
		"\29\u0164\3\2\2\2;\u016f\3\2\2\2=\u0171\3\2\2\2?\u0173\3\2\2\2A\u0177"+
		"\3\2\2\2C\u0179\3\2\2\2E\u017b\3\2\2\2G\u017d\3\2\2\2I\u017f\3\2\2\2K"+
		"\u0182\3\2\2\2M\u0185\3\2\2\2O\u0188\3\2\2\2Q\u018b\3\2\2\2S\u018e\3\2"+
		"\2\2U\u0191\3\2\2\2W\u0194\3\2\2\2Y\u0199\3\2\2\2[\u019c\3\2\2\2]\u019f"+
		"\3\2\2\2_\u01a2\3\2\2\2a\u01a8\3\2\2\2c\u01b0\3\2\2\2e\u01b4\3\2\2\2g"+
		"\u01bb\3\2\2\2i\u01c1\3\2\2\2k\u01c6\3\2\2\2m\u01cc\3\2\2\2o\u01ce\3\2"+
		"\2\2q\u01d0\3\2\2\2s\u01d2\3\2\2\2u\u01d4\3\2\2\2w\u01d6\3\2\2\2y\u01d8"+
		"\3\2\2\2{\u01da\3\2\2\2}\u01dd\3\2\2\2\177\u01e0\3\2\2\2\u0081\u01e3\3"+
		"\2\2\2\u0083\u01e6\3\2\2\2\u0085\u01e9\3\2\2\2\u0087\u01ec\3\2\2\2\u0089"+
		"\u01ee\3\2\2\2\u008b\u01f0\3\2\2\2\u008d\u01f2\3\2\2\2\u008f\u01f4\3\2"+
		"\2\2\u0091\u01f7\3\2\2\2\u0093\u01fa\3\2\2\2\u0095\u01fc\3\2\2\2\u0097"+
		"\u01fe\3\2\2\2\u0099\u0200\3\2\2\2\u009b\u0203\3\2\2\2\u009d\u0205\3\2"+
		"\2\2\u009f\u0207\3\2\2\2\u00a1\u020a\3\2\2\2\u00a3\u020d\3\2\2\2\u00a5"+
		"\u0210\3\2\2\2\u00a7\u0213\3\2\2\2\u00a9\u0216\3\2\2\2\u00ab\u0219\3\2"+
		"\2\2\u00ad\u021b\3\2\2\2\u00af\u021d\3\2\2\2\u00b1\u021f\3\2\2\2\u00b3"+
		"\u0221\3\2\2\2\u00b5\u0223\3\2\2\2\u00b7\u0225\3\2\2\2\u00b9\u0227\3\2"+
		"\2\2\u00bb\u0229\3\2\2\2\u00bd\u022b\3\2\2\2\u00bf\u0233\3\2\2\2\u00c1"+
		"\u0235\3\2\2\2\u00c3\u0239\3\2\2\2\u00c5\u023b\3\2\2\2\u00c7\u023d\3\2"+
		"\2\2\u00c9\u0244\3\2\2\2\u00cb\u0246\3\2\2\2\u00cd\u0250\3\2\2\2\u00cf"+
		"\u0253\3\2\2\2\u00d1\u0257\3\2\2\2\u00d3\u025b\3\2\2\2\u00d5\u026b\3\2"+
		"\2\2\u00d7\u00d8\7$\2\2\u00d8\4\3\2\2\2\u00d9\u00da\7)\2\2\u00da\6\3\2"+
		"\2\2\u00db\u00dc\7x\2\2\u00dc\u00dd\7g\2\2\u00dd\u00de\7e\2\2\u00de\u00df"+
		"\7v\2\2\u00df\u00e0\7q\2\2\u00e0\u00e1\7t\2\2\u00e1\b\3\2\2\2\u00e2\u00e3"+
		"\7R\2\2\u00e3\u00e4\7k\2\2\u00e4\n\3\2\2\2\u00e5\u00e6\7n\2\2\u00e6\u00e7"+
		"\7g\2\2\u00e7\u00e8\7v\2\2\u00e8\f\3\2\2\2\u00e9\u00ea\7k\2\2\u00ea\u00eb"+
		"\7p\2\2\u00eb\u00ec\7e\2\2\u00ec\u00ed\7n\2\2\u00ed\u00ee\7w\2\2\u00ee"+
		"\u00ef\7f\2\2\u00ef\u00f0\7g\2\2\u00f0\16\3\2\2\2\u00f1\u00f2\7k\2\2\u00f2"+
		"\u00f3\7p\2\2\u00f3\u00f4\7v\2\2\u00f4\20\3\2\2\2\u00f5\u00f6\7h\2\2\u00f6"+
		"\u00f7\7n\2\2\u00f7\u00f8\7q\2\2\u00f8\u00f9\7c\2\2\u00f9\u00fa\7v\2\2"+
		"\u00fa\22\3\2\2\2\u00fb\u00fc\7d\2\2\u00fc\u00fd\7q\2\2\u00fd\u00fe\7"+
		"q\2\2\u00fe\u00ff\7n\2\2\u00ff\24\3\2\2\2\u0100\u0101\7k\2\2\u0101\u0102"+
		"\7h\2\2\u0102\26\3\2\2\2\u0103\u0104\7g\2\2\u0104\u0105\7n\2\2\u0105\u0106"+
		"\7u\2\2\u0106\u0107\7g\2\2\u0107\30\3\2\2\2\u0108\u0109\7h\2\2\u0109\u010a"+
		"\7q\2\2\u010a\u010b\7t\2\2\u010b\32\3\2\2\2\u010c\u010d\7\60\2\2\u010d"+
		"\u010e\7n\2\2\u010e\u010f\7k\2\2\u010f\u0110\7d\2\2\u0110\34\3\2\2\2\u0111"+
		"\u0112\7\60\2\2\u0112\u0113\7k\2\2\u0113\u0114\7p\2\2\u0114\u0115\7e\2"+
		"\2\u0115\36\3\2\2\2\u0116\u0117\7\60\2\2\u0117\u0118\7s\2\2\u0118\u0119"+
		"\7t\2\2\u0119\u011a\7w\2\2\u011a\u011b\7p\2\2\u011b\u011c\7g\2\2\u011c"+
		"\u011d\7u\2\2\u011d \3\2\2\2\u011e\u011f\7x\2\2\u011f\u0120\7c\2\2\u0120"+
		"\u0121\7t\2\2\u0121\"\3\2\2\2\u0122\u0123\7f\2\2\u0123\u0124\7q\2\2\u0124"+
		"\u0125\7w\2\2\u0125\u0126\7d\2\2\u0126\u0127\7n\2\2\u0127\u0128\7g\2\2"+
		"\u0128$\3\2\2\2\u0129\u012a\7f\2\2\u012a\u012b\7g\2\2\u012b\u012c\7h\2"+
		"\2\u012c\u012d\7c\2\2\u012d\u012e\7w\2\2\u012e\u012f\7n\2\2\u012f\u0130"+
		"\7v\2\2\u0130&\3\2\2\2\u0131\u0132\7k\2\2\u0132\u0133\7x\2\2\u0133\u0134"+
		"\7g\2\2\u0134\u0135\7e\2\2\u0135(\3\2\2\2\u0136\u0137\7d\2\2\u0137\u0138"+
		"\7x\2\2\u0138\u0139\7g\2\2\u0139\u013a\7e\2\2\u013a*\3\2\2\2\u013b\u013c"+
		"\7j\2\2\u013c\u013d\7q\2\2\u013d\u013e\7u\2\2\u013e\u013f\7v\2\2\u013f"+
		",\3\2\2\2\u0140\u0141\7s\2\2\u0141\u0142\7x\2\2\u0142\u0143\7g\2\2\u0143"+
		"\u0144\7e\2\2\u0144.\3\2\2\2\u0145\u0146\7s\2\2\u0146\u0147\7w\2\2\u0147"+
		"\u0148\7d\2\2\u0148\u0149\7k\2\2\u0149\u014a\7v\2\2\u014a\60\3\2\2\2\u014b"+
		"\u014c\7e\2\2\u014c\u014d\7x\2\2\u014d\u014e\7g\2\2\u014e\u014f\7e\2\2"+
		"\u014f\62\3\2\2\2\u0150\u0151\7e\2\2\u0151\u0152\7d\2\2\u0152\u0153\7"+
		"k\2\2\u0153\u0154\7v\2\2\u0154\64\3\2\2\2\u0155\u0156\7s\2\2\u0156\u0157"+
		"\7i\2\2\u0157\u0158\7c\2\2\u0158\u0159\7v\2\2\u0159\u015a\7g\2\2\u015a"+
		"\66\3\2\2\2\u015b\u015c\7S\2\2\u015c\u015d\7E\2\2\u015d\u015e\7k\2\2\u015e"+
		"\u015f\7t\2\2\u015f\u0160\7e\2\2\u0160\u0161\7w\2\2\u0161\u0162\7k\2\2"+
		"\u0162\u0163\7v\2\2\u01638\3\2\2\2\u0164\u0165\7e\2\2\u0165\u0166\7k\2"+
		"\2\u0166\u0167\7t\2\2\u0167\u0168\7e\2\2\u0168\u0169\7w\2\2\u0169\u016a"+
		"\7k\2\2\u016a\u016b\7v\2\2\u016b\u016c\7I\2\2\u016c\u016d\7g\2\2\u016d"+
		"\u016e\7p\2\2\u016e:\3\2\2\2\u016f\u0170\7J\2\2\u0170<\3\2\2\2\u0171\u0172"+
		"\7Z\2\2\u0172>\3\2\2\2\u0173\u0174\7P\2\2\u0174\u0175\7Q\2\2\u0175\u0176"+
		"\7V\2\2\u0176@\3\2\2\2\u0177\u0178\7V\2\2\u0178B\3\2\2\2\u0179\u017a\7"+
		"U\2\2\u017aD\3\2\2\2\u017b\u017c\7[\2\2\u017cF\3\2\2\2\u017d\u017e\7\\"+
		"\2\2\u017eH\3\2\2\2\u017f\u0180\7Z\2\2\u0180\u0181\7\63\2\2\u0181J\3\2"+
		"\2\2\u0182\u0183\7[\2\2\u0183\u0184\7\63\2\2\u0184L\3\2\2\2\u0185\u0186"+
		"\7\\\2\2\u0186\u0187\7\63\2\2\u0187N\3\2\2\2\u0188\u0189\7W\2\2\u0189"+
		"\u018a\7\66\2\2\u018aP\3\2\2\2\u018b\u018c\7T\2\2\u018c\u018d\7Z\2\2\u018d"+
		"R\3\2\2\2\u018e\u018f\7T\2\2\u018f\u0190\7[\2\2\u0190T\3\2\2\2\u0191\u0192"+
		"\7T\2\2\u0192\u0193\7\\\2\2\u0193V\3\2\2\2\u0194\u0195\7E\2\2\u0195\u0196"+
		"\7P\2\2\u0196\u0197\7Q\2\2\u0197\u0198\7V\2\2\u0198X\3\2\2\2\u0199\u019a"+
		"\7E\2\2\u019a\u019b\7\\\2\2\u019bZ\3\2\2\2\u019c\u019d\7E\2\2\u019d\u019e"+
		"\7T\2\2\u019e\\\3\2\2\2\u019f\u01a0\7E\2\2\u01a0\u01a1\7W\2\2\u01a1^\3"+
		"\2\2\2\u01a2\u01a3\7k\2\2\u01a3\u01a4\7U\2\2\u01a4\u01a5\7Y\2\2\u01a5"+
		"\u01a6\7C\2\2\u01a6\u01a7\7R\2\2\u01a7`\3\2\2\2\u01a8\u01a9\7O\2\2\u01a9"+
		"\u01aa\7g\2\2\u01aa\u01ab\7c\2\2\u01ab\u01ac\7u\2\2\u01ac\u01ad\7w\2\2"+
		"\u01ad\u01ae\7t\2\2\u01ae\u01af\7g\2\2\u01afb\3\2\2\2\u01b0\u01b1\7s\2"+
		"\2\u01b1\u01b2\7k\2\2\u01b2\u01b3\7h\2\2\u01b3d\3\2\2\2\u01b4\u01b5\7"+
		"s\2\2\u01b5\u01b6\7y\2\2\u01b6\u01b7\7j\2\2\u01b7\u01b8\7k\2\2\u01b8\u01b9"+
		"\7n\2\2\u01b9\u01ba\7g\2\2\u01baf\3\2\2\2\u01bb\u01bc\7s\2\2\u01bc\u01bd"+
		"\7g\2\2\u01bd\u01be\7n\2\2\u01be\u01bf\7u\2\2\u01bf\u01c0\7g\2\2\u01c0"+
		"h\3\2\2\2\u01c1\u01c2\7V\2\2\u01c2\u01c3\7t\2\2\u01c3\u01c4\7w\2\2\u01c4"+
		"\u01c5\7g\2\2\u01c5j\3\2\2\2\u01c6\u01c7\7H\2\2\u01c7\u01c8\7c\2\2\u01c8"+
		"\u01c9\7n\2\2\u01c9\u01ca\7u\2\2\u01ca\u01cb\7g\2\2\u01cbl\3\2\2\2\u01cc"+
		"\u01cd\7%\2\2\u01cdn\3\2\2\2\u01ce\u01cf\7?\2\2\u01cfp\3\2\2\2\u01d0\u01d1"+
		"\7@\2\2\u01d1r\3\2\2\2\u01d2\u01d3\7>\2\2\u01d3t\3\2\2\2\u01d4\u01d5\7"+
		"#\2\2\u01d5v\3\2\2\2\u01d6\u01d7\7\u0080\2\2\u01d7x\3\2\2\2\u01d8\u01d9"+
		"\7<\2\2\u01d9z\3\2\2\2\u01da\u01db\7?\2\2\u01db\u01dc\7?\2\2\u01dc|\3"+
		"\2\2\2\u01dd\u01de\7>\2\2\u01de\u01df\7?\2\2\u01df~\3\2\2\2\u01e0\u01e1"+
		"\7@\2\2\u01e1\u01e2\7?\2\2\u01e2\u0080\3\2\2\2\u01e3\u01e4\7#\2\2\u01e4"+
		"\u01e5\7?\2\2\u01e5\u0082\3\2\2\2\u01e6\u01e7\7(\2\2\u01e7\u01e8\7(\2"+
		"\2\u01e8\u0084\3\2\2\2\u01e9\u01ea\7~\2\2\u01ea\u01eb\7~\2\2\u01eb\u0086"+
		"\3\2\2\2\u01ec\u01ed\7(\2\2\u01ed\u0088\3\2\2\2\u01ee\u01ef\7`\2\2\u01ef"+
		"\u008a\3\2\2\2\u01f0\u01f1\7~\2\2\u01f1\u008c\3\2\2\2\u01f2\u01f3\7A\2"+
		"\2\u01f3\u008e\3\2\2\2\u01f4\u01f5\7-\2\2\u01f5\u01f6\7-\2\2\u01f6\u0090"+
		"\3\2\2\2\u01f7\u01f8\7/\2\2\u01f8\u01f9\7/\2\2\u01f9\u0092\3\2\2\2\u01fa"+
		"\u01fb\7-\2\2\u01fb\u0094\3\2\2\2\u01fc\u01fd\7/\2\2\u01fd\u0096\3\2\2"+
		"\2\u01fe\u01ff\7,\2\2\u01ff\u0098\3\2\2\2\u0200\u0201\7,\2\2\u0201\u0202"+
		"\7,\2\2\u0202\u009a\3\2\2\2\u0203\u0204\7\61\2\2\u0204\u009c\3\2\2\2\u0205"+
		"\u0206\7\'\2\2\u0206\u009e\3\2\2\2\u0207\u0208\7-\2\2\u0208\u0209\7?\2"+
		"\2\u0209\u00a0\3\2\2\2\u020a\u020b\7/\2\2\u020b\u020c\7?\2\2\u020c\u00a2"+
		"\3\2\2\2\u020d\u020e\7,\2\2\u020e\u020f\7?\2\2\u020f\u00a4\3\2\2\2\u0210"+
		"\u0211\7\61\2\2\u0211\u0212\7?\2\2\u0212\u00a6\3\2\2\2\u0213\u0214\7>"+
		"\2\2\u0214\u0215\7>\2\2\u0215\u00a8\3\2\2\2\u0216\u0217\7@\2\2\u0217\u0218"+
		"\7@\2\2\u0218\u00aa\3\2\2\2\u0219\u021a\7}\2\2\u021a\u00ac\3\2\2\2\u021b"+
		"\u021c\7\177\2\2\u021c\u00ae\3\2\2\2\u021d\u021e\7=\2\2\u021e\u00b0\3"+
		"\2\2\2\u021f\u0220\7.\2\2\u0220\u00b2\3\2\2\2\u0221\u0222\7\60\2\2\u0222"+
		"\u00b4\3\2\2\2\u0223\u0224\7*\2\2\u0224\u00b6\3\2\2\2\u0225\u0226\7+\2"+
		"\2\u0226\u00b8\3\2\2\2\u0227\u0228\7]\2\2\u0228\u00ba\3\2\2\2\u0229\u022a"+
		"\7_\2\2\u022a\u00bc\3\2\2\2\u022b\u0230\5\u00bf`\2\u022c\u022f\5\u00bf"+
		"`\2\u022d\u022f\5\u00c1a\2\u022e\u022c\3\2\2\2\u022e\u022d\3\2\2\2\u022f"+
		"\u0232\3\2\2\2\u0230\u022e\3\2\2\2\u0230\u0231\3\2\2\2\u0231\u00be\3\2"+
		"\2\2\u0232\u0230\3\2\2\2\u0233\u0234\t\2\2\2\u0234\u00c0\3\2\2\2\u0235"+
		"\u0236\t\3\2\2\u0236\u00c2\3\2\2\2\u0237\u023a\5\u00c5c\2\u0238\u023a"+
		"\5\u00cbf\2\u0239\u0237\3\2\2\2\u0239\u0238\3\2\2\2\u023a\u00c4\3\2\2"+
		"\2\u023b\u023c\5\u00c7d\2\u023c\u00c6\3\2\2\2\u023d\u0241\5\u00c9e\2\u023e"+
		"\u0240\5\u00c1a\2\u023f\u023e\3\2\2\2\u0240\u0243\3\2\2\2\u0241\u023f"+
		"\3\2\2\2\u0241\u0242\3\2\2\2\u0242\u00c8\3\2\2\2\u0243\u0241\3\2\2\2\u0244"+
		"\u0245\t\4\2\2\u0245\u00ca\3\2\2\2\u0246\u0247\5\u00cdg\2\u0247\u00cc"+
		"\3\2\2\2\u0248\u024a\5\u00cfh\2\u0249\u0248\3\2\2\2\u0249\u024a\3\2\2"+
		"\2\u024a\u024b\3\2\2\2\u024b\u024c\7\60\2\2\u024c\u0251\5\u00cfh\2\u024d"+
		"\u024e\5\u00cfh\2\u024e\u024f\7\60\2\2\u024f\u0251\3\2\2\2\u0250\u0249"+
		"\3\2\2\2\u0250\u024d\3\2\2\2\u0251\u00ce\3\2\2\2\u0252\u0254\5\u00c1a"+
		"\2\u0253\u0252\3\2\2\2\u0254\u0255\3\2\2\2\u0255\u0253\3\2\2\2\u0255\u0256"+
		"\3\2\2\2\u0256\u00d0\3\2\2\2\u0257\u0258\t\5\2\2\u0258\u0259\3\2\2\2\u0259"+
		"\u025a\bi\2\2\u025a\u00d2\3\2\2\2\u025b\u025c\7\61\2\2\u025c\u025d\7\61"+
		"\2\2\u025d\u0261\3\2\2\2\u025e\u0260\n\6\2\2\u025f\u025e\3\2\2\2\u0260"+
		"\u0263\3\2\2\2\u0261\u025f\3\2\2\2\u0261\u0262\3\2\2\2\u0262\u0265\3\2"+
		"\2\2\u0263\u0261\3\2\2\2\u0264\u0266\7\17\2\2\u0265\u0264\3\2\2\2\u0265"+
		"\u0266\3\2\2\2\u0266\u0267\3\2\2\2\u0267\u0268\7\f\2\2\u0268\u0269\3\2"+
		"\2\2\u0269\u026a\bj\2\2\u026a\u00d4\3\2\2\2\u026b\u026c\7\61\2\2\u026c"+
		"\u026d\7,\2\2\u026d\u0271\3\2\2\2\u026e\u0270\13\2\2\2\u026f\u026e\3\2"+
		"\2\2\u0270\u0273\3\2\2\2\u0271\u0272\3\2\2\2\u0271\u026f\3\2\2\2\u0272"+
		"\u0274\3\2\2\2\u0273\u0271\3\2\2\2\u0274\u0275\7,\2\2\u0275\u0276\7\61"+
		"\2\2\u0276\u0277\3\2\2\2\u0277\u0278\bk\2\2\u0278\u00d6\3\2\2\2\r\2\u022e"+
		"\u0230\u0239\u0241\u0249\u0250\u0255\u0261\u0265\u0271\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}