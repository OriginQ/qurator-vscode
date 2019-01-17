// Generated from c:\Users\Quantum1603\Desktop\vscode_plugin\trunk\qrunes\server\src\embedded\settings\antlr\setting.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class settingParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LANGUAGE=1, AUTOIMPORT=2, COMPILE_ONLY=3, EQUAL=4, SEMI=5, Identifier=6, 
		WhiteSpace=7, SingleLineComment=8, MultiLinesComment=9;
	public static final int
		RULE_qsetting = 0, RULE_qConfig = 1, RULE_auto_import = 2, RULE_lan_set = 3, 
		RULE_compile_only = 4, RULE_ischoosed = 5, RULE_lan_type = 6;
	public static final String[] ruleNames = {
		"qsetting", "qConfig", "auto_import", "lan_set", "compile_only", "ischoosed", 
		"lan_type"
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

	@Override
	public String getGrammarFileName() { return "setting.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public settingParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class QsettingContext extends ParserRuleContext {
		public List<QConfigContext> qConfig() {
			return getRuleContexts(QConfigContext.class);
		}
		public QConfigContext qConfig(int i) {
			return getRuleContext(QConfigContext.class,i);
		}
		public QsettingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qsetting; }
	}

	public final QsettingContext qsetting() throws RecognitionException {
		QsettingContext _localctx = new QsettingContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_qsetting);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(17);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LANGUAGE) | (1L << AUTOIMPORT) | (1L << COMPILE_ONLY))) != 0)) {
				{
				{
				setState(14);
				qConfig();
				}
				}
				setState(19);
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

	public static class QConfigContext extends ParserRuleContext {
		public Lan_setContext lan_set() {
			return getRuleContext(Lan_setContext.class,0);
		}
		public Auto_importContext auto_import() {
			return getRuleContext(Auto_importContext.class,0);
		}
		public Compile_onlyContext compile_only() {
			return getRuleContext(Compile_onlyContext.class,0);
		}
		public QConfigContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qConfig; }
	}

	public final QConfigContext qConfig() throws RecognitionException {
		QConfigContext _localctx = new QConfigContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_qConfig);
		try {
			setState(23);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LANGUAGE:
				enterOuterAlt(_localctx, 1);
				{
				setState(20);
				lan_set();
				}
				break;
			case AUTOIMPORT:
				enterOuterAlt(_localctx, 2);
				{
				setState(21);
				auto_import();
				}
				break;
			case COMPILE_ONLY:
				enterOuterAlt(_localctx, 3);
				{
				setState(22);
				compile_only();
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

	public static class Auto_importContext extends ParserRuleContext {
		public TerminalNode AUTOIMPORT() { return getToken(settingParser.AUTOIMPORT, 0); }
		public TerminalNode EQUAL() { return getToken(settingParser.EQUAL, 0); }
		public IschoosedContext ischoosed() {
			return getRuleContext(IschoosedContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(settingParser.SEMI, 0); }
		public Auto_importContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_auto_import; }
	}

	public final Auto_importContext auto_import() throws RecognitionException {
		Auto_importContext _localctx = new Auto_importContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_auto_import);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(25);
			match(AUTOIMPORT);
			setState(26);
			match(EQUAL);
			setState(27);
			ischoosed();
			setState(28);
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

	public static class Lan_setContext extends ParserRuleContext {
		public TerminalNode LANGUAGE() { return getToken(settingParser.LANGUAGE, 0); }
		public TerminalNode EQUAL() { return getToken(settingParser.EQUAL, 0); }
		public Lan_typeContext lan_type() {
			return getRuleContext(Lan_typeContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(settingParser.SEMI, 0); }
		public Lan_setContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lan_set; }
	}

	public final Lan_setContext lan_set() throws RecognitionException {
		Lan_setContext _localctx = new Lan_setContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_lan_set);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(30);
			match(LANGUAGE);
			setState(31);
			match(EQUAL);
			setState(32);
			lan_type();
			setState(33);
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

	public static class Compile_onlyContext extends ParserRuleContext {
		public TerminalNode COMPILE_ONLY() { return getToken(settingParser.COMPILE_ONLY, 0); }
		public TerminalNode EQUAL() { return getToken(settingParser.EQUAL, 0); }
		public IschoosedContext ischoosed() {
			return getRuleContext(IschoosedContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(settingParser.SEMI, 0); }
		public Compile_onlyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compile_only; }
	}

	public final Compile_onlyContext compile_only() throws RecognitionException {
		Compile_onlyContext _localctx = new Compile_onlyContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_compile_only);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			match(COMPILE_ONLY);
			setState(36);
			match(EQUAL);
			setState(37);
			ischoosed();
			setState(38);
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

	public static class IschoosedContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(settingParser.Identifier, 0); }
		public IschoosedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ischoosed; }
	}

	public final IschoosedContext ischoosed() throws RecognitionException {
		IschoosedContext _localctx = new IschoosedContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_ischoosed);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			match(Identifier);
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

	public static class Lan_typeContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(settingParser.Identifier, 0); }
		public Lan_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lan_type; }
	}

	public final Lan_typeContext lan_type() throws RecognitionException {
		Lan_typeContext _localctx = new Lan_typeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_lan_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			match(Identifier);
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

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\13/\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\3\2\7\2\22\n\2\f\2\16\2\25"+
		"\13\2\3\3\3\3\3\3\5\3\32\n\3\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3"+
		"\6\3\6\3\6\3\6\3\6\3\7\3\7\3\b\3\b\3\b\2\2\t\2\4\6\b\n\f\16\2\2\2*\2\23"+
		"\3\2\2\2\4\31\3\2\2\2\6\33\3\2\2\2\b \3\2\2\2\n%\3\2\2\2\f*\3\2\2\2\16"+
		",\3\2\2\2\20\22\5\4\3\2\21\20\3\2\2\2\22\25\3\2\2\2\23\21\3\2\2\2\23\24"+
		"\3\2\2\2\24\3\3\2\2\2\25\23\3\2\2\2\26\32\5\b\5\2\27\32\5\6\4\2\30\32"+
		"\5\n\6\2\31\26\3\2\2\2\31\27\3\2\2\2\31\30\3\2\2\2\32\5\3\2\2\2\33\34"+
		"\7\4\2\2\34\35\7\6\2\2\35\36\5\f\7\2\36\37\7\7\2\2\37\7\3\2\2\2 !\7\3"+
		"\2\2!\"\7\6\2\2\"#\5\16\b\2#$\7\7\2\2$\t\3\2\2\2%&\7\5\2\2&\'\7\6\2\2"+
		"\'(\5\f\7\2()\7\7\2\2)\13\3\2\2\2*+\7\b\2\2+\r\3\2\2\2,-\7\b\2\2-\17\3"+
		"\2\2\2\4\23\31";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}