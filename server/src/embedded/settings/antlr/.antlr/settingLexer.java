// Generated from c:\Users\Quantum1603\Desktop\vscode_plugin\trunk\qrunes\server\src\embedded\settings\antlr\setting.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class settingLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LANGUAGE=1, AUTOIMPORT=2, COMPILE_ONLY=3, EQUAL=4, SEMI=5, Identifier=6, 
		WhiteSpace=7, SingleLineComment=8, MultiLinesComment=9;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"LANGUAGE", "AUTOIMPORT", "COMPILE_ONLY", "EQUAL", "SEMI", "Identifier", 
		"IdentifierNotDigit", "Digit", "Operator", "WhiteSpace", "SingleLineComment", 
		"MultiLinesComment"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'language'", "'autoimport'", "'compile_only'", "'='", "';'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "LANGUAGE", "AUTOIMPORT", "COMPILE_ONLY", "EQUAL", "SEMI", "Identifier", 
		"WhiteSpace", "SingleLineComment", "MultiLinesComment"
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


	public settingLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "setting.g4"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\13q\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\7\3\7\7\7E\n\7\f\7\16\7H\13\7\3"+
		"\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\7\fX\n\f\f"+
		"\f\16\f[\13\f\3\f\5\f^\n\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\7\rh\n\r\f"+
		"\r\16\rk\13\r\3\r\3\r\3\r\3\r\3\r\3i\2\16\3\3\5\4\7\5\t\6\13\7\r\b\17"+
		"\2\21\2\23\2\25\t\27\n\31\13\3\2\6\5\2C\\aac|\3\2\62;\5\2\13\f\17\17\""+
		"\"\4\2\f\f\17\17\2s\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2"+
		"\13\3\2\2\2\2\r\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\3\33\3"+
		"\2\2\2\5$\3\2\2\2\7/\3\2\2\2\t<\3\2\2\2\13>\3\2\2\2\r@\3\2\2\2\17I\3\2"+
		"\2\2\21K\3\2\2\2\23M\3\2\2\2\25O\3\2\2\2\27S\3\2\2\2\31c\3\2\2\2\33\34"+
		"\7n\2\2\34\35\7c\2\2\35\36\7p\2\2\36\37\7i\2\2\37 \7w\2\2 !\7c\2\2!\""+
		"\7i\2\2\"#\7g\2\2#\4\3\2\2\2$%\7c\2\2%&\7w\2\2&\'\7v\2\2\'(\7q\2\2()\7"+
		"k\2\2)*\7o\2\2*+\7r\2\2+,\7q\2\2,-\7t\2\2-.\7v\2\2.\6\3\2\2\2/\60\7e\2"+
		"\2\60\61\7q\2\2\61\62\7o\2\2\62\63\7r\2\2\63\64\7k\2\2\64\65\7n\2\2\65"+
		"\66\7g\2\2\66\67\7a\2\2\678\7q\2\289\7p\2\29:\7n\2\2:;\7{\2\2;\b\3\2\2"+
		"\2<=\7?\2\2=\n\3\2\2\2>?\7=\2\2?\f\3\2\2\2@F\5\17\b\2AE\5\17\b\2BE\5\23"+
		"\n\2CE\5\21\t\2DA\3\2\2\2DB\3\2\2\2DC\3\2\2\2EH\3\2\2\2FD\3\2\2\2FG\3"+
		"\2\2\2G\16\3\2\2\2HF\3\2\2\2IJ\t\2\2\2J\20\3\2\2\2KL\t\3\2\2L\22\3\2\2"+
		"\2MN\7-\2\2N\24\3\2\2\2OP\t\4\2\2PQ\3\2\2\2QR\b\13\2\2R\26\3\2\2\2ST\7"+
		"\61\2\2TU\7\61\2\2UY\3\2\2\2VX\n\5\2\2WV\3\2\2\2X[\3\2\2\2YW\3\2\2\2Y"+
		"Z\3\2\2\2Z]\3\2\2\2[Y\3\2\2\2\\^\7\17\2\2]\\\3\2\2\2]^\3\2\2\2^_\3\2\2"+
		"\2_`\7\f\2\2`a\3\2\2\2ab\b\f\2\2b\30\3\2\2\2cd\7\61\2\2de\7,\2\2ei\3\2"+
		"\2\2fh\13\2\2\2gf\3\2\2\2hk\3\2\2\2ij\3\2\2\2ig\3\2\2\2jl\3\2\2\2ki\3"+
		"\2\2\2lm\7,\2\2mn\7\61\2\2no\3\2\2\2op\b\r\2\2p\32\3\2\2\2\b\2DFY]i\3"+
		"\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}