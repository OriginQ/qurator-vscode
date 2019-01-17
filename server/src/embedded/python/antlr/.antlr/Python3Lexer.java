// Generated from c:\Users\Quantum1603\Desktop\qrunes_1\server\src\embedded\python\antlr\Python3.g4 by ANTLR 4.7.1

  import { Token } from 'antlr4ts/Token';
  import { CommonToken } from 'antlr4ts/CommonToken';
  import { Python3Parser } from './Python3Parser';

import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class Python3Lexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		DEF=1, RETURN=2, RAISE=3, FROM=4, IMPORT=5, AS=6, GLOBAL=7, NONLOCAL=8, 
		ASSERT=9, IF=10, ELIF=11, ELSE=12, WHILE=13, FOR=14, IN=15, TRY=16, FINALLY=17, 
		WITH=18, EXCEPT=19, LAMBDA=20, OR=21, AND=22, NOT=23, IS=24, NONE=25, 
		TRUE=26, FALSE=27, CLASS=28, YIELD=29, DEL=30, PASS=31, CONTINUE=32, BREAK=33, 
		NEWLINE=34, NAME=35, STRING_LITERAL=36, BYTES_LITERAL=37, DECIMAL_INTEGER=38, 
		OCT_INTEGER=39, HEX_INTEGER=40, BIN_INTEGER=41, FLOAT_NUMBER=42, IMAG_NUMBER=43, 
		DOT=44, ELLIPSIS=45, STAR=46, OPEN_PAREN=47, CLOSE_PAREN=48, COMMA=49, 
		COLON=50, SEMI_COLON=51, POWER=52, ASSIGN=53, OPEN_BRACK=54, CLOSE_BRACK=55, 
		OR_OP=56, XOR=57, AND_OP=58, LEFT_SHIFT=59, RIGHT_SHIFT=60, ADD=61, MINUS=62, 
		DIV=63, MOD=64, IDIV=65, NOT_OP=66, OPEN_BRACE=67, CLOSE_BRACE=68, LESS_THAN=69, 
		GREATER_THAN=70, EQUALS=71, GT_EQ=72, LT_EQ=73, NOT_EQ_1=74, NOT_EQ_2=75, 
		AT=76, ARROW=77, ADD_ASSIGN=78, SUB_ASSIGN=79, MULT_ASSIGN=80, AT_ASSIGN=81, 
		DIV_ASSIGN=82, MOD_ASSIGN=83, AND_ASSIGN=84, OR_ASSIGN=85, XOR_ASSIGN=86, 
		LEFT_SHIFT_ASSIGN=87, RIGHT_SHIFT_ASSIGN=88, POWER_ASSIGN=89, IDIV_ASSIGN=90, 
		SKIP_=91, UNKNOWN_CHAR=92;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"DEF", "RETURN", "RAISE", "FROM", "IMPORT", "AS", "GLOBAL", "NONLOCAL", 
		"ASSERT", "IF", "ELIF", "ELSE", "WHILE", "FOR", "IN", "TRY", "FINALLY", 
		"WITH", "EXCEPT", "LAMBDA", "OR", "AND", "NOT", "IS", "NONE", "TRUE", 
		"FALSE", "CLASS", "YIELD", "DEL", "PASS", "CONTINUE", "BREAK", "NEWLINE", 
		"NAME", "STRING_LITERAL", "BYTES_LITERAL", "DECIMAL_INTEGER", "OCT_INTEGER", 
		"HEX_INTEGER", "BIN_INTEGER", "FLOAT_NUMBER", "IMAG_NUMBER", "DOT", "ELLIPSIS", 
		"STAR", "OPEN_PAREN", "CLOSE_PAREN", "COMMA", "COLON", "SEMI_COLON", "POWER", 
		"ASSIGN", "OPEN_BRACK", "CLOSE_BRACK", "OR_OP", "XOR", "AND_OP", "LEFT_SHIFT", 
		"RIGHT_SHIFT", "ADD", "MINUS", "DIV", "MOD", "IDIV", "NOT_OP", "OPEN_BRACE", 
		"CLOSE_BRACE", "LESS_THAN", "GREATER_THAN", "EQUALS", "GT_EQ", "LT_EQ", 
		"NOT_EQ_1", "NOT_EQ_2", "AT", "ARROW", "ADD_ASSIGN", "SUB_ASSIGN", "MULT_ASSIGN", 
		"AT_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", 
		"LEFT_SHIFT_ASSIGN", "RIGHT_SHIFT_ASSIGN", "POWER_ASSIGN", "IDIV_ASSIGN", 
		"SKIP_", "UNKNOWN_CHAR", "SHORT_STRING", "LONG_STRING", "LONG_STRING_ITEM", 
		"LONG_STRING_CHAR", "STRING_ESCAPE_SEQ", "NON_ZERO_DIGIT", "DIGIT", "OCT_DIGIT", 
		"HEX_DIGIT", "BIN_DIGIT", "POINT_FLOAT", "EXPONENT_FLOAT", "INT_PART", 
		"FRACTION", "EXPONENT", "SHORT_BYTES", "LONG_BYTES", "LONG_BYTES_ITEM", 
		"SHORT_BYTES_CHAR_NO_SINGLE_QUOTE", "SHORT_BYTES_CHAR_NO_DOUBLE_QUOTE", 
		"LONG_BYTES_CHAR", "BYTES_ESCAPE_SEQ", "SPACES", "COMMENT", "LINE_JOINING", 
		"ID_START", "ID_CONTINUE"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'def'", "'return'", "'raise'", "'from'", "'import'", "'as'", "'global'", 
		"'nonlocal'", "'assert'", "'if'", "'elif'", "'else'", "'while'", "'for'", 
		"'in'", "'try'", "'finally'", "'with'", "'except'", "'lambda'", "'or'", 
		"'and'", "'not'", "'is'", "'None'", "'True'", "'False'", "'class'", "'yield'", 
		"'del'", "'pass'", "'continue'", "'break'", null, null, null, null, null, 
		null, null, null, null, null, "'.'", "'...'", "'*'", "'('", "')'", "','", 
		"':'", "';'", "'**'", "'='", "'['", "']'", "'|'", "'^'", "'&'", "'<<'", 
		"'>>'", "'+'", "'-'", "'/'", "'%'", "'//'", "'~'", "'{'", "'}'", "'<'", 
		"'>'", "'=='", "'>='", "'<='", "'<>'", "'!='", "'@'", "'->'", "'+='", 
		"'-='", "'*='", "'@='", "'/='", "'%='", "'&='", "'|='", "'^='", "'<<='", 
		"'>>='", "'**='", "'//='"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "DEF", "RETURN", "RAISE", "FROM", "IMPORT", "AS", "GLOBAL", "NONLOCAL", 
		"ASSERT", "IF", "ELIF", "ELSE", "WHILE", "FOR", "IN", "TRY", "FINALLY", 
		"WITH", "EXCEPT", "LAMBDA", "OR", "AND", "NOT", "IS", "NONE", "TRUE", 
		"FALSE", "CLASS", "YIELD", "DEL", "PASS", "CONTINUE", "BREAK", "NEWLINE", 
		"NAME", "STRING_LITERAL", "BYTES_LITERAL", "DECIMAL_INTEGER", "OCT_INTEGER", 
		"HEX_INTEGER", "BIN_INTEGER", "FLOAT_NUMBER", "IMAG_NUMBER", "DOT", "ELLIPSIS", 
		"STAR", "OPEN_PAREN", "CLOSE_PAREN", "COMMA", "COLON", "SEMI_COLON", "POWER", 
		"ASSIGN", "OPEN_BRACK", "CLOSE_BRACK", "OR_OP", "XOR", "AND_OP", "LEFT_SHIFT", 
		"RIGHT_SHIFT", "ADD", "MINUS", "DIV", "MOD", "IDIV", "NOT_OP", "OPEN_BRACE", 
		"CLOSE_BRACE", "LESS_THAN", "GREATER_THAN", "EQUALS", "GT_EQ", "LT_EQ", 
		"NOT_EQ_1", "NOT_EQ_2", "AT", "ARROW", "ADD_ASSIGN", "SUB_ASSIGN", "MULT_ASSIGN", 
		"AT_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", 
		"LEFT_SHIFT_ASSIGN", "RIGHT_SHIFT_ASSIGN", "POWER_ASSIGN", "IDIV_ASSIGN", 
		"SKIP_", "UNKNOWN_CHAR"
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


	  private token_queue: Token[] = [];
	  private indents: number[] = [];
	  private opened: number = 0;
	  private last_token: Token|undefined = undefined;

	  @Override
	  public reset(): void {
	    // A queue where extra tokens are pushed on (see the NEWLINE lexer rule).
	    this.token_queue = [];

	    // The stack that keeps track of the indentation level.
	    this.indents = [];

	    // The amount of opened braces, brackets and parenthesis.
	    this.opened = 0;

	    super.reset();
	  };

	  @Override
	  public emit(token?: Token): Token {
	    if (token) {
	      token = super.emit(token);
	    } else {
	      token = super.emit();
	    }
	    this.token_queue.push(token);
	    return token;
	  };

	  /**
	   * Return the next token from the character stream and records this last
	   * token in case it resides on the default channel. This recorded token
	   * is used to determine when the lexer could possibly match a regex
	   * literal.
	   *
	   */
	  @Override
	  public nextToken(): Token {
	    // Check if the end-of-file is ahead and there are still some DEDENTS expected.
	    if (this.inputStream.LA(1) === Python3Parser.EOF && this.indents.length) {

	      // Remove any trailing EOF tokens from our buffer.
	      this.token_queue = this.token_queue.filter(function(val) {
	        return val.type !== Python3Parser.EOF;
	      });

	      // First emit an extra line break that serves as the end of the statement.
	      this.emit(this.commonToken(Python3Parser.NEWLINE, "\n"));

	      // Now emit as much DEDENT tokens as needed.
	      while (this.indents.length) {
	        this.emit(this.createDedent());
	        this.indents.pop();
	      }

	      // Put the EOF back on the token stream.
	      this.emit(this.commonToken(Python3Parser.EOF, "<EOF>"));
	    }

	    let next = super.nextToken();

	    if (next.channel == Token.DEFAULT_CHANNEL) {
	      // Keep track of the last token on the default channel.
	      this.last_token = next;
	    }

	    return this.token_queue.shift() || next;
	  }

	  private createDedent(): Token {
	    let dedent = this.commonToken(Python3Parser.DEDENT, "");
	    if (this.last_token) {
	      dedent.line = this.last_token.line;
	    }
	    return dedent;
	  }

	  private commonToken(type: number, text: string): CommonToken {
	    let stop: number = this.charIndex - 1;
	    let start: number = text.length ? stop - text.length + 1 : stop;
	    return new CommonToken(type, text, this._tokenFactorySourcePair, Lexer.DEFAULT_TOKEN_CHANNEL, start, stop);
	  }

	  // Calculates the indentation of the provided spaces, taking the
	  // following rules into account:
	  //
	  // "Tabs are replaced (from left to right) by one to eight spaces
	  //  such that the total number of characters up to and including
	  //  the replacement is a multiple of eight [...]"
	  //
	  //  -- https://docs.python.org/3.1/reference/lexical_analysis.html#indentation
	  private getIndentationCount(whitespace: string): number {
	    let count = 0;
	    for (let i = 0; i < whitespace.length; i++) {
	      if (whitespace[i] === '\t') {
	        count += 8 - count % 8;
	      } else {
	        count++;
	      }
	    }
	    return count;
	  }

	  private atStartOfInput(): boolean {
	    return this.charIndex === 0;
	  }


	public Python3Lexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Python3.g4"; }

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

	@Override
	public void action(RuleContext _localctx, int ruleIndex, int actionIndex) {
		switch (ruleIndex) {
		case 33:
			NEWLINE_action((RuleContext)_localctx, actionIndex);
			break;
		case 46:
			OPEN_PAREN_action((RuleContext)_localctx, actionIndex);
			break;
		case 47:
			CLOSE_PAREN_action((RuleContext)_localctx, actionIndex);
			break;
		case 53:
			OPEN_BRACK_action((RuleContext)_localctx, actionIndex);
			break;
		case 54:
			CLOSE_BRACK_action((RuleContext)_localctx, actionIndex);
			break;
		case 66:
			OPEN_BRACE_action((RuleContext)_localctx, actionIndex);
			break;
		case 67:
			CLOSE_BRACE_action((RuleContext)_localctx, actionIndex);
			break;
		}
	}
	private void NEWLINE_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 0:

			     let newLine = this.text.replace(/[^\r\n]+/g, '');
			     let spaces = this.text.replace(/[\r\n]+/g, '');
			     let next = this.inputStream.LA(1);

			     if (this.opened > 0 || next === 13 /* '\r' */ || next === 10 /* '\n' */ || next === 35 /* '#' */) {
			       // If we're inside a list or on a blank line, ignore all indents,
			       // dedents and line breaks.
			       this.skip();
			     } else {
			       this.emit(this.commonToken(Python3Parser.NEWLINE, newLine));

			       let indent = this.getIndentationCount(spaces);
			       let previous = this.indents.length ? this.indents[this.indents.length - 1] : 0;

			       if (indent === previous) {
			         // skip indents of the same size as the present indent-size
			         this.skip();
			       } else if (indent > previous) {
			         this.indents.push(indent);
			         this.emit(this.commonToken(Python3Parser.INDENT, spaces));
			       } else {
			         // Possibly emit more than 1 DEDENT token.
			         while (this.indents.length && this.indents[this.indents.length - 1] > indent) {
			           this.emit(this.createDedent());
			           this.indents.pop();
			         }
			       }
			     }
			   
			break;
		}
	}
	private void OPEN_PAREN_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 1:
			this.opened++;
			break;
		}
	}
	private void CLOSE_PAREN_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 2:
			this.opened--;
			break;
		}
	}
	private void OPEN_BRACK_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 3:
			this.opened++;
			break;
		}
	}
	private void CLOSE_BRACK_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 4:
			this.opened--;
			break;
		}
	}
	private void OPEN_BRACE_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 5:
			this.opened++;
			break;
		}
	}
	private void CLOSE_BRACE_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 6:
			this.opened--;
			break;
		}
	}
	@Override
	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 33:
			return NEWLINE_sempred((RuleContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean NEWLINE_sempred(RuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return this.atStartOfInput();
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2^\u0347\b\1\4\2\t"+
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
		"k\4l\tl\4m\tm\4n\tn\4o\to\4p\tp\4q\tq\4r\tr\4s\ts\4t\tt\4u\tu\4v\tv\4"+
		"w\tw\4x\tx\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3"+
		"\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\20\3\20\3\20"+
		"\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23"+
		"\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25"+
		"\3\25\3\25\3\25\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30"+
		"\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\34"+
		"\3\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36"+
		"\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \3!\3!\3!\3!\3!\3!\3"+
		"!\3!\3!\3\"\3\"\3\"\3\"\3\"\3\"\3#\3#\3#\5#\u01a7\n#\3#\3#\5#\u01ab\n"+
		"#\3#\5#\u01ae\n#\5#\u01b0\n#\3#\3#\3$\3$\7$\u01b6\n$\f$\16$\u01b9\13$"+
		"\3%\5%\u01bc\n%\3%\5%\u01bf\n%\3%\3%\5%\u01c3\n%\3&\3&\5&\u01c7\n&\3&"+
		"\3&\5&\u01cb\n&\3\'\3\'\7\'\u01cf\n\'\f\'\16\'\u01d2\13\'\3\'\6\'\u01d5"+
		"\n\'\r\'\16\'\u01d6\5\'\u01d9\n\'\3(\3(\3(\6(\u01de\n(\r(\16(\u01df\3"+
		")\3)\3)\6)\u01e5\n)\r)\16)\u01e6\3*\3*\3*\6*\u01ec\n*\r*\16*\u01ed\3+"+
		"\3+\5+\u01f2\n+\3,\3,\5,\u01f6\n,\3,\3,\3-\3-\3.\3.\3.\3.\3/\3/\3\60\3"+
		"\60\3\60\3\61\3\61\3\61\3\62\3\62\3\63\3\63\3\64\3\64\3\65\3\65\3\65\3"+
		"\66\3\66\3\67\3\67\3\67\38\38\38\39\39\3:\3:\3;\3;\3<\3<\3<\3=\3=\3=\3"+
		">\3>\3?\3?\3@\3@\3A\3A\3B\3B\3B\3C\3C\3D\3D\3D\3E\3E\3E\3F\3F\3G\3G\3"+
		"H\3H\3H\3I\3I\3I\3J\3J\3J\3K\3K\3K\3L\3L\3L\3M\3M\3N\3N\3N\3O\3O\3O\3"+
		"P\3P\3P\3Q\3Q\3Q\3R\3R\3R\3S\3S\3S\3T\3T\3T\3U\3U\3U\3V\3V\3V\3W\3W\3"+
		"W\3X\3X\3X\3X\3Y\3Y\3Y\3Y\3Z\3Z\3Z\3Z\3[\3[\3[\3[\3\\\3\\\3\\\5\\\u027e"+
		"\n\\\3\\\3\\\3]\3]\3^\3^\3^\7^\u0287\n^\f^\16^\u028a\13^\3^\3^\3^\3^\7"+
		"^\u0290\n^\f^\16^\u0293\13^\3^\5^\u0296\n^\3_\3_\3_\3_\3_\7_\u029d\n_"+
		"\f_\16_\u02a0\13_\3_\3_\3_\3_\3_\3_\3_\3_\7_\u02aa\n_\f_\16_\u02ad\13"+
		"_\3_\3_\3_\5_\u02b2\n_\3`\3`\5`\u02b6\n`\3a\3a\3b\3b\3b\3c\3c\3d\3d\3"+
		"e\3e\3f\3f\3g\3g\3h\5h\u02c8\nh\3h\3h\3h\3h\5h\u02ce\nh\3i\3i\5i\u02d2"+
		"\ni\3i\3i\3j\6j\u02d7\nj\rj\16j\u02d8\3k\3k\6k\u02dd\nk\rk\16k\u02de\3"+
		"l\3l\5l\u02e3\nl\3l\6l\u02e6\nl\rl\16l\u02e7\3m\3m\3m\7m\u02ed\nm\fm\16"+
		"m\u02f0\13m\3m\3m\3m\3m\7m\u02f6\nm\fm\16m\u02f9\13m\3m\5m\u02fc\nm\3"+
		"n\3n\3n\3n\3n\7n\u0303\nn\fn\16n\u0306\13n\3n\3n\3n\3n\3n\3n\3n\3n\7n"+
		"\u0310\nn\fn\16n\u0313\13n\3n\3n\3n\5n\u0318\nn\3o\3o\5o\u031c\no\3p\5"+
		"p\u031f\np\3q\5q\u0322\nq\3r\5r\u0325\nr\3s\3s\3s\3t\6t\u032b\nt\rt\16"+
		"t\u032c\3u\3u\7u\u0331\nu\fu\16u\u0334\13u\3v\3v\5v\u0338\nv\3v\5v\u033b"+
		"\nv\3v\3v\5v\u033f\nv\3w\5w\u0342\nw\3x\3x\5x\u0346\nx\6\u029e\u02ab\u0304"+
		"\u0311\2y\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33"+
		"\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67"+
		"\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65"+
		"i\66k\67m8o9q:s;u<w=y>{?}@\177A\u0081B\u0083C\u0085D\u0087E\u0089F\u008b"+
		"G\u008dH\u008fI\u0091J\u0093K\u0095L\u0097M\u0099N\u009bO\u009dP\u009f"+
		"Q\u00a1R\u00a3S\u00a5T\u00a7U\u00a9V\u00abW\u00adX\u00afY\u00b1Z\u00b3"+
		"[\u00b5\\\u00b7]\u00b9^\u00bb\2\u00bd\2\u00bf\2\u00c1\2\u00c3\2\u00c5"+
		"\2\u00c7\2\u00c9\2\u00cb\2\u00cd\2\u00cf\2\u00d1\2\u00d3\2\u00d5\2\u00d7"+
		"\2\u00d9\2\u00db\2\u00dd\2\u00df\2\u00e1\2\u00e3\2\u00e5\2\u00e7\2\u00e9"+
		"\2\u00eb\2\u00ed\2\u00ef\2\3\2\32\4\2WWww\4\2TTtt\4\2DDdd\4\2QQqq\4\2"+
		"ZZzz\4\2LLll\6\2\f\f\17\17))^^\6\2\f\f\17\17$$^^\3\2^^\3\2\63;\3\2\62"+
		";\3\2\629\5\2\62;CHch\3\2\62\63\4\2GGgg\4\2--//\7\2\2\13\r\16\20(*]_\u0081"+
		"\7\2\2\13\r\16\20#%]_\u0081\4\2\2]_\u0081\3\2\2\u0081\4\2\13\13\"\"\4"+
		"\2\f\f\17\17\u0129\2C\\aac|\u00ac\u00ac\u00b7\u00b7\u00bc\u00bc\u00c2"+
		"\u00d8\u00da\u00f8\u00fa\u0243\u0252\u02c3\u02c8\u02d3\u02e2\u02e6\u02f0"+
		"\u02f0\u037c\u037c\u0388\u0388\u038a\u038c\u038e\u038e\u0390\u03a3\u03a5"+
		"\u03d0\u03d2\u03f7\u03f9\u0483\u048c\u04d0\u04d2\u04fb\u0502\u0511\u0533"+
		"\u0558\u055b\u055b\u0563\u0589\u05d2\u05ec\u05f2\u05f4\u0623\u063c\u0642"+
		"\u064c\u0670\u0671\u0673\u06d5\u06d7\u06d7\u06e7\u06e8\u06f0\u06f1\u06fc"+
		"\u06fe\u0701\u0701\u0712\u0712\u0714\u0731\u074f\u076f\u0782\u07a7\u07b3"+
		"\u07b3\u0906\u093b\u093f\u093f\u0952\u0952\u095a\u0963\u097f\u097f\u0987"+
		"\u098e\u0991\u0992\u0995\u09aa\u09ac\u09b2\u09b4\u09b4\u09b8\u09bb\u09bf"+
		"\u09bf\u09d0\u09d0\u09de\u09df\u09e1\u09e3\u09f2\u09f3\u0a07\u0a0c\u0a11"+
		"\u0a12\u0a15\u0a2a\u0a2c\u0a32\u0a34\u0a35\u0a37\u0a38\u0a3a\u0a3b\u0a5b"+
		"\u0a5e\u0a60\u0a60\u0a74\u0a76\u0a87\u0a8f\u0a91\u0a93\u0a95\u0aaa\u0aac"+
		"\u0ab2\u0ab4\u0ab5\u0ab7\u0abb\u0abf\u0abf\u0ad2\u0ad2\u0ae2\u0ae3\u0b07"+
		"\u0b0e\u0b11\u0b12\u0b15\u0b2a\u0b2c\u0b32\u0b34\u0b35\u0b37\u0b3b\u0b3f"+
		"\u0b3f\u0b5e\u0b5f\u0b61\u0b63\u0b73\u0b73\u0b85\u0b85\u0b87\u0b8c\u0b90"+
		"\u0b92\u0b94\u0b97\u0b9b\u0b9c\u0b9e\u0b9e\u0ba0\u0ba1\u0ba5\u0ba6\u0baa"+
		"\u0bac\u0bb0\u0bbb\u0c07\u0c0e\u0c10\u0c12\u0c14\u0c2a\u0c2c\u0c35\u0c37"+
		"\u0c3b\u0c62\u0c63\u0c87\u0c8e\u0c90\u0c92\u0c94\u0caa\u0cac\u0cb5\u0cb7"+
		"\u0cbb\u0cbf\u0cbf\u0ce0\u0ce0\u0ce2\u0ce3\u0d07\u0d0e\u0d10\u0d12\u0d14"+
		"\u0d2a\u0d2c\u0d3b\u0d62\u0d63\u0d87\u0d98\u0d9c\u0db3\u0db5\u0dbd\u0dbf"+
		"\u0dbf\u0dc2\u0dc8\u0e03\u0e32\u0e34\u0e35\u0e42\u0e48\u0e83\u0e84\u0e86"+
		"\u0e86\u0e89\u0e8a\u0e8c\u0e8c\u0e8f\u0e8f\u0e96\u0e99\u0e9b\u0ea1\u0ea3"+
		"\u0ea5\u0ea7\u0ea7\u0ea9\u0ea9\u0eac\u0ead\u0eaf\u0eb2\u0eb4\u0eb5\u0ebf"+
		"\u0ebf\u0ec2\u0ec6\u0ec8\u0ec8\u0ede\u0edf\u0f02\u0f02\u0f42\u0f49\u0f4b"+
		"\u0f6c\u0f8a\u0f8d\u1002\u1023\u1025\u1029\u102b\u102c\u1052\u1057\u10a2"+
		"\u10c7\u10d2\u10fc\u10fe\u10fe\u1102\u115b\u1161\u11a4\u11aa\u11fb\u1202"+
		"\u124a\u124c\u124f\u1252\u1258\u125a\u125a\u125c\u125f\u1262\u128a\u128c"+
		"\u128f\u1292\u12b2\u12b4\u12b7\u12ba\u12c0\u12c2\u12c2\u12c4\u12c7\u12ca"+
		"\u12d8\u12da\u1312\u1314\u1317\u131a\u135c\u1382\u1391\u13a2\u13f6\u1403"+
		"\u166e\u1671\u1678\u1683\u169c\u16a2\u16ec\u16f0\u16f2\u1702\u170e\u1710"+
		"\u1713\u1722\u1733\u1742\u1753\u1762\u176e\u1770\u1772\u1782\u17b5\u17d9"+
		"\u17d9\u17de\u17de\u1822\u1879\u1882\u18aa\u1902\u191e\u1952\u196f\u1972"+
		"\u1976\u1982\u19ab\u19c3\u19c9\u1a02\u1a18\u1d02\u1dc1\u1e02\u1e9d\u1ea2"+
		"\u1efb\u1f02\u1f17\u1f1a\u1f1f\u1f22\u1f47\u1f4a\u1f4f\u1f52\u1f59\u1f5b"+
		"\u1f5b\u1f5d\u1f5d\u1f5f\u1f5f\u1f61\u1f7f\u1f82\u1fb6\u1fb8\u1fbe\u1fc0"+
		"\u1fc0\u1fc4\u1fc6\u1fc8\u1fce\u1fd2\u1fd5\u1fd8\u1fdd\u1fe2\u1fee\u1ff4"+
		"\u1ff6\u1ff8\u1ffe\u2073\u2073\u2081\u2081\u2092\u2096\u2104\u2104\u2109"+
		"\u2109\u210c\u2115\u2117\u2117\u211a\u211f\u2126\u2126\u2128\u2128\u212a"+
		"\u212a\u212c\u2133\u2135\u213b\u213e\u2141\u2147\u214b\u2162\u2185\u2c02"+
		"\u2c30\u2c32\u2c60\u2c82\u2ce6\u2d02\u2d27\u2d32\u2d67\u2d71\u2d71\u2d82"+
		"\u2d98\u2da2\u2da8\u2daa\u2db0\u2db2\u2db8\u2dba\u2dc0\u2dc2\u2dc8\u2dca"+
		"\u2dd0\u2dd2\u2dd8\u2dda\u2de0\u3007\u3009\u3023\u302b\u3033\u3037\u303a"+
		"\u303e\u3043\u3098\u309d\u30a1\u30a3\u30fc\u30fe\u3101\u3107\u312e\u3133"+
		"\u3190\u31a2\u31b9\u31f2\u3201\u3402\u4db7\u4e02\u9fbd\ua002\ua48e\ua802"+
		"\ua803\ua805\ua807\ua809\ua80c\ua80e\ua824\uac02\ud7a5\uf902\ufa2f\ufa32"+
		"\ufa6c\ufa72\ufadb\ufb02\ufb08\ufb15\ufb19\ufb1f\ufb1f\ufb21\ufb2a\ufb2c"+
		"\ufb38\ufb3a\ufb3e\ufb40\ufb40\ufb42\ufb43\ufb45\ufb46\ufb48\ufbb3\ufbd5"+
		"\ufd3f\ufd52\ufd91\ufd94\ufdc9\ufdf2\ufdfd\ufe72\ufe76\ufe78\ufefe\uff23"+
		"\uff3c\uff43\uff5c\uff68\uffc0\uffc4\uffc9\uffcc\uffd1\uffd4\uffd9\uffdc"+
		"\uffde\u0096\2\62;\u0302\u0371\u0485\u0488\u0593\u05bb\u05bd\u05bf\u05c1"+
		"\u05c1\u05c3\u05c4\u05c6\u05c7\u05c9\u05c9\u0612\u0617\u064d\u0660\u0662"+
		"\u066b\u0672\u0672\u06d8\u06de\u06e1\u06e6\u06e9\u06ea\u06ec\u06ef\u06f2"+
		"\u06fb\u0713\u0713\u0732\u074c\u07a8\u07b2\u0903\u0905\u093e\u093e\u0940"+
		"\u094f\u0953\u0956\u0964\u0965\u0968\u0971\u0983\u0985\u09be\u09be\u09c0"+
		"\u09c6\u09c9\u09ca\u09cd\u09cf\u09d9\u09d9\u09e4\u09e5\u09e8\u09f1\u0a03"+
		"\u0a05\u0a3e\u0a3e\u0a40\u0a44\u0a49\u0a4a\u0a4d\u0a4f\u0a68\u0a73\u0a83"+
		"\u0a85\u0abe\u0abe\u0ac0\u0ac7\u0ac9\u0acb\u0acd\u0acf\u0ae4\u0ae5\u0ae8"+
		"\u0af1\u0b03\u0b05\u0b3e\u0b3e\u0b40\u0b45\u0b49\u0b4a\u0b4d\u0b4f\u0b58"+
		"\u0b59\u0b68\u0b71\u0b84\u0b84\u0bc0\u0bc4\u0bc8\u0bca\u0bcc\u0bcf\u0bd9"+
		"\u0bd9\u0be8\u0bf1\u0c03\u0c05\u0c40\u0c46\u0c48\u0c4a\u0c4c\u0c4f\u0c57"+
		"\u0c58\u0c68\u0c71\u0c84\u0c85\u0cbe\u0cbe\u0cc0\u0cc6\u0cc8\u0cca\u0ccc"+
		"\u0ccf\u0cd7\u0cd8\u0ce8\u0cf1\u0d04\u0d05\u0d40\u0d45\u0d48\u0d4a\u0d4c"+
		"\u0d4f\u0d59\u0d59\u0d68\u0d71\u0d84\u0d85\u0dcc\u0dcc\u0dd1\u0dd6\u0dd8"+
		"\u0dd8\u0dda\u0de1\u0df4\u0df5\u0e33\u0e33\u0e36\u0e3c\u0e49\u0e50\u0e52"+
		"\u0e5b\u0eb3\u0eb3\u0eb6\u0ebb\u0ebd\u0ebe\u0eca\u0ecf\u0ed2\u0edb\u0f1a"+
		"\u0f1b\u0f22\u0f2b\u0f37\u0f37\u0f39\u0f39\u0f3b\u0f3b\u0f40\u0f41\u0f73"+
		"\u0f86\u0f88\u0f89\u0f92\u0f99\u0f9b\u0fbe\u0fc8\u0fc8\u102e\u1034\u1038"+
		"\u103b\u1042\u104b\u1058\u105b\u1361\u1361\u136b\u1373\u1714\u1716\u1734"+
		"\u1736\u1754\u1755\u1774\u1775\u17b8\u17d5\u17df\u17df\u17e2\u17eb\u180d"+
		"\u180f\u1812\u181b\u18ab\u18ab\u1922\u192d\u1932\u193d\u1948\u1951\u19b2"+
		"\u19c2\u19ca\u19cb\u19d2\u19db\u1a19\u1a1d\u1dc2\u1dc5\u2041\u2042\u2056"+
		"\u2056\u20d2\u20de\u20e3\u20e3\u20e7\u20ed\u302c\u3031\u309b\u309c\ua804"+
		"\ua804\ua808\ua808\ua80d\ua80d\ua825\ua829\ufb20\ufb20\ufe02\ufe11\ufe22"+
		"\ufe25\ufe35\ufe36\ufe4f\ufe51\uff12\uff1b\uff41\uff41\2\u035e\2\3\3\2"+
		"\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17"+
		"\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2"+
		"\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3"+
		"\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3"+
		"\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2"+
		"=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3"+
		"\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2"+
		"\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2"+
		"c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3"+
		"\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2"+
		"\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3"+
		"\2\2\2\2\u0087\3\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2\2"+
		"\2\u008f\3\2\2\2\2\u0091\3\2\2\2\2\u0093\3\2\2\2\2\u0095\3\2\2\2\2\u0097"+
		"\3\2\2\2\2\u0099\3\2\2\2\2\u009b\3\2\2\2\2\u009d\3\2\2\2\2\u009f\3\2\2"+
		"\2\2\u00a1\3\2\2\2\2\u00a3\3\2\2\2\2\u00a5\3\2\2\2\2\u00a7\3\2\2\2\2\u00a9"+
		"\3\2\2\2\2\u00ab\3\2\2\2\2\u00ad\3\2\2\2\2\u00af\3\2\2\2\2\u00b1\3\2\2"+
		"\2\2\u00b3\3\2\2\2\2\u00b5\3\2\2\2\2\u00b7\3\2\2\2\2\u00b9\3\2\2\2\3\u00f1"+
		"\3\2\2\2\5\u00f5\3\2\2\2\7\u00fc\3\2\2\2\t\u0102\3\2\2\2\13\u0107\3\2"+
		"\2\2\r\u010e\3\2\2\2\17\u0111\3\2\2\2\21\u0118\3\2\2\2\23\u0121\3\2\2"+
		"\2\25\u0128\3\2\2\2\27\u012b\3\2\2\2\31\u0130\3\2\2\2\33\u0135\3\2\2\2"+
		"\35\u013b\3\2\2\2\37\u013f\3\2\2\2!\u0142\3\2\2\2#\u0146\3\2\2\2%\u014e"+
		"\3\2\2\2\'\u0153\3\2\2\2)\u015a\3\2\2\2+\u0161\3\2\2\2-\u0164\3\2\2\2"+
		"/\u0168\3\2\2\2\61\u016c\3\2\2\2\63\u016f\3\2\2\2\65\u0174\3\2\2\2\67"+
		"\u0179\3\2\2\29\u017f\3\2\2\2;\u0185\3\2\2\2=\u018b\3\2\2\2?\u018f\3\2"+
		"\2\2A\u0194\3\2\2\2C\u019d\3\2\2\2E\u01af\3\2\2\2G\u01b3\3\2\2\2I\u01bb"+
		"\3\2\2\2K\u01c4\3\2\2\2M\u01d8\3\2\2\2O\u01da\3\2\2\2Q\u01e1\3\2\2\2S"+
		"\u01e8\3\2\2\2U\u01f1\3\2\2\2W\u01f5\3\2\2\2Y\u01f9\3\2\2\2[\u01fb\3\2"+
		"\2\2]\u01ff\3\2\2\2_\u0201\3\2\2\2a\u0204\3\2\2\2c\u0207\3\2\2\2e\u0209"+
		"\3\2\2\2g\u020b\3\2\2\2i\u020d\3\2\2\2k\u0210\3\2\2\2m\u0212\3\2\2\2o"+
		"\u0215\3\2\2\2q\u0218\3\2\2\2s\u021a\3\2\2\2u\u021c\3\2\2\2w\u021e\3\2"+
		"\2\2y\u0221\3\2\2\2{\u0224\3\2\2\2}\u0226\3\2\2\2\177\u0228\3\2\2\2\u0081"+
		"\u022a\3\2\2\2\u0083\u022c\3\2\2\2\u0085\u022f\3\2\2\2\u0087\u0231\3\2"+
		"\2\2\u0089\u0234\3\2\2\2\u008b\u0237\3\2\2\2\u008d\u0239\3\2\2\2\u008f"+
		"\u023b\3\2\2\2\u0091\u023e\3\2\2\2\u0093\u0241\3\2\2\2\u0095\u0244\3\2"+
		"\2\2\u0097\u0247\3\2\2\2\u0099\u024a\3\2\2\2\u009b\u024c\3\2\2\2\u009d"+
		"\u024f\3\2\2\2\u009f\u0252\3\2\2\2\u00a1\u0255\3\2\2\2\u00a3\u0258\3\2"+
		"\2\2\u00a5\u025b\3\2\2\2\u00a7\u025e\3\2\2\2\u00a9\u0261\3\2\2\2\u00ab"+
		"\u0264\3\2\2\2\u00ad\u0267\3\2\2\2\u00af\u026a\3\2\2\2\u00b1\u026e\3\2"+
		"\2\2\u00b3\u0272\3\2\2\2\u00b5\u0276\3\2\2\2\u00b7\u027d\3\2\2\2\u00b9"+
		"\u0281\3\2\2\2\u00bb\u0295\3\2\2\2\u00bd\u02b1\3\2\2\2\u00bf\u02b5\3\2"+
		"\2\2\u00c1\u02b7\3\2\2\2\u00c3\u02b9\3\2\2\2\u00c5\u02bc\3\2\2\2\u00c7"+
		"\u02be\3\2\2\2\u00c9\u02c0\3\2\2\2\u00cb\u02c2\3\2\2\2\u00cd\u02c4\3\2"+
		"\2\2\u00cf\u02cd\3\2\2\2\u00d1\u02d1\3\2\2\2\u00d3\u02d6\3\2\2\2\u00d5"+
		"\u02da\3\2\2\2\u00d7\u02e0\3\2\2\2\u00d9\u02fb\3\2\2\2\u00db\u0317\3\2"+
		"\2\2\u00dd\u031b\3\2\2\2\u00df\u031e\3\2\2\2\u00e1\u0321\3\2\2\2\u00e3"+
		"\u0324\3\2\2\2\u00e5\u0326\3\2\2\2\u00e7\u032a\3\2\2\2\u00e9\u032e\3\2"+
		"\2\2\u00eb\u0335\3\2\2\2\u00ed\u0341\3\2\2\2\u00ef\u0345\3\2\2\2\u00f1"+
		"\u00f2\7f\2\2\u00f2\u00f3\7g\2\2\u00f3\u00f4\7h\2\2\u00f4\4\3\2\2\2\u00f5"+
		"\u00f6\7t\2\2\u00f6\u00f7\7g\2\2\u00f7\u00f8\7v\2\2\u00f8\u00f9\7w\2\2"+
		"\u00f9\u00fa\7t\2\2\u00fa\u00fb\7p\2\2\u00fb\6\3\2\2\2\u00fc\u00fd\7t"+
		"\2\2\u00fd\u00fe\7c\2\2\u00fe\u00ff\7k\2\2\u00ff\u0100\7u\2\2\u0100\u0101"+
		"\7g\2\2\u0101\b\3\2\2\2\u0102\u0103\7h\2\2\u0103\u0104\7t\2\2\u0104\u0105"+
		"\7q\2\2\u0105\u0106\7o\2\2\u0106\n\3\2\2\2\u0107\u0108\7k\2\2\u0108\u0109"+
		"\7o\2\2\u0109\u010a\7r\2\2\u010a\u010b\7q\2\2\u010b\u010c\7t\2\2\u010c"+
		"\u010d\7v\2\2\u010d\f\3\2\2\2\u010e\u010f\7c\2\2\u010f\u0110\7u\2\2\u0110"+
		"\16\3\2\2\2\u0111\u0112\7i\2\2\u0112\u0113\7n\2\2\u0113\u0114\7q\2\2\u0114"+
		"\u0115\7d\2\2\u0115\u0116\7c\2\2\u0116\u0117\7n\2\2\u0117\20\3\2\2\2\u0118"+
		"\u0119\7p\2\2\u0119\u011a\7q\2\2\u011a\u011b\7p\2\2\u011b\u011c\7n\2\2"+
		"\u011c\u011d\7q\2\2\u011d\u011e\7e\2\2\u011e\u011f\7c\2\2\u011f\u0120"+
		"\7n\2\2\u0120\22\3\2\2\2\u0121\u0122\7c\2\2\u0122\u0123\7u\2\2\u0123\u0124"+
		"\7u\2\2\u0124\u0125\7g\2\2\u0125\u0126\7t\2\2\u0126\u0127\7v\2\2\u0127"+
		"\24\3\2\2\2\u0128\u0129\7k\2\2\u0129\u012a\7h\2\2\u012a\26\3\2\2\2\u012b"+
		"\u012c\7g\2\2\u012c\u012d\7n\2\2\u012d\u012e\7k\2\2\u012e\u012f\7h\2\2"+
		"\u012f\30\3\2\2\2\u0130\u0131\7g\2\2\u0131\u0132\7n\2\2\u0132\u0133\7"+
		"u\2\2\u0133\u0134\7g\2\2\u0134\32\3\2\2\2\u0135\u0136\7y\2\2\u0136\u0137"+
		"\7j\2\2\u0137\u0138\7k\2\2\u0138\u0139\7n\2\2\u0139\u013a\7g\2\2\u013a"+
		"\34\3\2\2\2\u013b\u013c\7h\2\2\u013c\u013d\7q\2\2\u013d\u013e\7t\2\2\u013e"+
		"\36\3\2\2\2\u013f\u0140\7k\2\2\u0140\u0141\7p\2\2\u0141 \3\2\2\2\u0142"+
		"\u0143\7v\2\2\u0143\u0144\7t\2\2\u0144\u0145\7{\2\2\u0145\"\3\2\2\2\u0146"+
		"\u0147\7h\2\2\u0147\u0148\7k\2\2\u0148\u0149\7p\2\2\u0149\u014a\7c\2\2"+
		"\u014a\u014b\7n\2\2\u014b\u014c\7n\2\2\u014c\u014d\7{\2\2\u014d$\3\2\2"+
		"\2\u014e\u014f\7y\2\2\u014f\u0150\7k\2\2\u0150\u0151\7v\2\2\u0151\u0152"+
		"\7j\2\2\u0152&\3\2\2\2\u0153\u0154\7g\2\2\u0154\u0155\7z\2\2\u0155\u0156"+
		"\7e\2\2\u0156\u0157\7g\2\2\u0157\u0158\7r\2\2\u0158\u0159\7v\2\2\u0159"+
		"(\3\2\2\2\u015a\u015b\7n\2\2\u015b\u015c\7c\2\2\u015c\u015d\7o\2\2\u015d"+
		"\u015e\7d\2\2\u015e\u015f\7f\2\2\u015f\u0160\7c\2\2\u0160*\3\2\2\2\u0161"+
		"\u0162\7q\2\2\u0162\u0163\7t\2\2\u0163,\3\2\2\2\u0164\u0165\7c\2\2\u0165"+
		"\u0166\7p\2\2\u0166\u0167\7f\2\2\u0167.\3\2\2\2\u0168\u0169\7p\2\2\u0169"+
		"\u016a\7q\2\2\u016a\u016b\7v\2\2\u016b\60\3\2\2\2\u016c\u016d\7k\2\2\u016d"+
		"\u016e\7u\2\2\u016e\62\3\2\2\2\u016f\u0170\7P\2\2\u0170\u0171\7q\2\2\u0171"+
		"\u0172\7p\2\2\u0172\u0173\7g\2\2\u0173\64\3\2\2\2\u0174\u0175\7V\2\2\u0175"+
		"\u0176\7t\2\2\u0176\u0177\7w\2\2\u0177\u0178\7g\2\2\u0178\66\3\2\2\2\u0179"+
		"\u017a\7H\2\2\u017a\u017b\7c\2\2\u017b\u017c\7n\2\2\u017c\u017d\7u\2\2"+
		"\u017d\u017e\7g\2\2\u017e8\3\2\2\2\u017f\u0180\7e\2\2\u0180\u0181\7n\2"+
		"\2\u0181\u0182\7c\2\2\u0182\u0183\7u\2\2\u0183\u0184\7u\2\2\u0184:\3\2"+
		"\2\2\u0185\u0186\7{\2\2\u0186\u0187\7k\2\2\u0187\u0188\7g\2\2\u0188\u0189"+
		"\7n\2\2\u0189\u018a\7f\2\2\u018a<\3\2\2\2\u018b\u018c\7f\2\2\u018c\u018d"+
		"\7g\2\2\u018d\u018e\7n\2\2\u018e>\3\2\2\2\u018f\u0190\7r\2\2\u0190\u0191"+
		"\7c\2\2\u0191\u0192\7u\2\2\u0192\u0193\7u\2\2\u0193@\3\2\2\2\u0194\u0195"+
		"\7e\2\2\u0195\u0196\7q\2\2\u0196\u0197\7p\2\2\u0197\u0198\7v\2\2\u0198"+
		"\u0199\7k\2\2\u0199\u019a\7p\2\2\u019a\u019b\7w\2\2\u019b\u019c\7g\2\2"+
		"\u019cB\3\2\2\2\u019d\u019e\7d\2\2\u019e\u019f\7t\2\2\u019f\u01a0\7g\2"+
		"\2\u01a0\u01a1\7c\2\2\u01a1\u01a2\7m\2\2\u01a2D\3\2\2\2\u01a3\u01a4\6"+
		"#\2\2\u01a4\u01b0\5\u00e7t\2\u01a5\u01a7\7\17\2\2\u01a6\u01a5\3\2\2\2"+
		"\u01a6\u01a7\3\2\2\2\u01a7\u01a8\3\2\2\2\u01a8\u01ab\7\f\2\2\u01a9\u01ab"+
		"\7\17\2\2\u01aa\u01a6\3\2\2\2\u01aa\u01a9\3\2\2\2\u01ab\u01ad\3\2\2\2"+
		"\u01ac\u01ae\5\u00e7t\2\u01ad\u01ac\3\2\2\2\u01ad\u01ae\3\2\2\2\u01ae"+
		"\u01b0\3\2\2\2\u01af\u01a3\3\2\2\2\u01af\u01aa\3\2\2\2\u01b0\u01b1\3\2"+
		"\2\2\u01b1\u01b2\b#\2\2\u01b2F\3\2\2\2\u01b3\u01b7\5\u00edw\2\u01b4\u01b6"+
		"\5\u00efx\2\u01b5\u01b4\3\2\2\2\u01b6\u01b9\3\2\2\2\u01b7\u01b5\3\2\2"+
		"\2\u01b7\u01b8\3\2\2\2\u01b8H\3\2\2\2\u01b9\u01b7\3\2\2\2\u01ba\u01bc"+
		"\t\2\2\2\u01bb\u01ba\3\2\2\2\u01bb\u01bc\3\2\2\2\u01bc\u01be\3\2\2\2\u01bd"+
		"\u01bf\t\3\2\2\u01be\u01bd\3\2\2\2\u01be\u01bf\3\2\2\2\u01bf\u01c2\3\2"+
		"\2\2\u01c0\u01c3\5\u00bb^\2\u01c1\u01c3\5\u00bd_\2\u01c2\u01c0\3\2\2\2"+
		"\u01c2\u01c1\3\2\2\2\u01c3J\3\2\2\2\u01c4\u01c6\t\4\2\2\u01c5\u01c7\t"+
		"\3\2\2\u01c6\u01c5\3\2\2\2\u01c6\u01c7\3\2\2\2\u01c7\u01ca\3\2\2\2\u01c8"+
		"\u01cb\5\u00d9m\2\u01c9\u01cb\5\u00dbn\2\u01ca\u01c8\3\2\2\2\u01ca\u01c9"+
		"\3\2\2\2\u01cbL\3\2\2\2\u01cc\u01d0\5\u00c5c\2\u01cd\u01cf\5\u00c7d\2"+
		"\u01ce\u01cd\3\2\2\2\u01cf\u01d2\3\2\2\2\u01d0\u01ce\3\2\2\2\u01d0\u01d1"+
		"\3\2\2\2\u01d1\u01d9\3\2\2\2\u01d2\u01d0\3\2\2\2\u01d3\u01d5\7\62\2\2"+
		"\u01d4\u01d3\3\2\2\2\u01d5\u01d6\3\2\2\2\u01d6\u01d4\3\2\2\2\u01d6\u01d7"+
		"\3\2\2\2\u01d7\u01d9\3\2\2\2\u01d8\u01cc\3\2\2\2\u01d8\u01d4\3\2\2\2\u01d9"+
		"N\3\2\2\2\u01da\u01db\7\62\2\2\u01db\u01dd\t\5\2\2\u01dc\u01de\5\u00c9"+
		"e\2\u01dd\u01dc\3\2\2\2\u01de\u01df\3\2\2\2\u01df\u01dd\3\2\2\2\u01df"+
		"\u01e0\3\2\2\2\u01e0P\3\2\2\2\u01e1\u01e2\7\62\2\2\u01e2\u01e4\t\6\2\2"+
		"\u01e3\u01e5\5\u00cbf\2\u01e4\u01e3\3\2\2\2\u01e5\u01e6\3\2\2\2\u01e6"+
		"\u01e4\3\2\2\2\u01e6\u01e7\3\2\2\2\u01e7R\3\2\2\2\u01e8\u01e9\7\62\2\2"+
		"\u01e9\u01eb\t\4\2\2\u01ea\u01ec\5\u00cdg\2\u01eb\u01ea\3\2\2\2\u01ec"+
		"\u01ed\3\2\2\2\u01ed\u01eb\3\2\2\2\u01ed\u01ee\3\2\2\2\u01eeT\3\2\2\2"+
		"\u01ef\u01f2\5\u00cfh\2\u01f0\u01f2\5\u00d1i\2\u01f1\u01ef\3\2\2\2\u01f1"+
		"\u01f0\3\2\2\2\u01f2V\3\2\2\2\u01f3\u01f6\5U+\2\u01f4\u01f6\5\u00d3j\2"+
		"\u01f5\u01f3\3\2\2\2\u01f5\u01f4\3\2\2\2\u01f6\u01f7\3\2\2\2\u01f7\u01f8"+
		"\t\7\2\2\u01f8X\3\2\2\2\u01f9\u01fa\7\60\2\2\u01faZ\3\2\2\2\u01fb\u01fc"+
		"\7\60\2\2\u01fc\u01fd\7\60\2\2\u01fd\u01fe\7\60\2\2\u01fe\\\3\2\2\2\u01ff"+
		"\u0200\7,\2\2\u0200^\3\2\2\2\u0201\u0202\7*\2\2\u0202\u0203\b\60\3\2\u0203"+
		"`\3\2\2\2\u0204\u0205\7+\2\2\u0205\u0206\b\61\4\2\u0206b\3\2\2\2\u0207"+
		"\u0208\7.\2\2\u0208d\3\2\2\2\u0209\u020a\7<\2\2\u020af\3\2\2\2\u020b\u020c"+
		"\7=\2\2\u020ch\3\2\2\2\u020d\u020e\7,\2\2\u020e\u020f\7,\2\2\u020fj\3"+
		"\2\2\2\u0210\u0211\7?\2\2\u0211l\3\2\2\2\u0212\u0213\7]\2\2\u0213\u0214"+
		"\b\67\5\2\u0214n\3\2\2\2\u0215\u0216\7_\2\2\u0216\u0217\b8\6\2\u0217p"+
		"\3\2\2\2\u0218\u0219\7~\2\2\u0219r\3\2\2\2\u021a\u021b\7`\2\2\u021bt\3"+
		"\2\2\2\u021c\u021d\7(\2\2\u021dv\3\2\2\2\u021e\u021f\7>\2\2\u021f\u0220"+
		"\7>\2\2\u0220x\3\2\2\2\u0221\u0222\7@\2\2\u0222\u0223\7@\2\2\u0223z\3"+
		"\2\2\2\u0224\u0225\7-\2\2\u0225|\3\2\2\2\u0226\u0227\7/\2\2\u0227~\3\2"+
		"\2\2\u0228\u0229\7\61\2\2\u0229\u0080\3\2\2\2\u022a\u022b\7\'\2\2\u022b"+
		"\u0082\3\2\2\2\u022c\u022d\7\61\2\2\u022d\u022e\7\61\2\2\u022e\u0084\3"+
		"\2\2\2\u022f\u0230\7\u0080\2\2\u0230\u0086\3\2\2\2\u0231\u0232\7}\2\2"+
		"\u0232\u0233\bD\7\2\u0233\u0088\3\2\2\2\u0234\u0235\7\177\2\2\u0235\u0236"+
		"\bE\b\2\u0236\u008a\3\2\2\2\u0237\u0238\7>\2\2\u0238\u008c\3\2\2\2\u0239"+
		"\u023a\7@\2\2\u023a\u008e\3\2\2\2\u023b\u023c\7?\2\2\u023c\u023d\7?\2"+
		"\2\u023d\u0090\3\2\2\2\u023e\u023f\7@\2\2\u023f\u0240\7?\2\2\u0240\u0092"+
		"\3\2\2\2\u0241\u0242\7>\2\2\u0242\u0243\7?\2\2\u0243\u0094\3\2\2\2\u0244"+
		"\u0245\7>\2\2\u0245\u0246\7@\2\2\u0246\u0096\3\2\2\2\u0247\u0248\7#\2"+
		"\2\u0248\u0249\7?\2\2\u0249\u0098\3\2\2\2\u024a\u024b\7B\2\2\u024b\u009a"+
		"\3\2\2\2\u024c\u024d\7/\2\2\u024d\u024e\7@\2\2\u024e\u009c\3\2\2\2\u024f"+
		"\u0250\7-\2\2\u0250\u0251\7?\2\2\u0251\u009e\3\2\2\2\u0252\u0253\7/\2"+
		"\2\u0253\u0254\7?\2\2\u0254\u00a0\3\2\2\2\u0255\u0256\7,\2\2\u0256\u0257"+
		"\7?\2\2\u0257\u00a2\3\2\2\2\u0258\u0259\7B\2\2\u0259\u025a\7?\2\2\u025a"+
		"\u00a4\3\2\2\2\u025b\u025c\7\61\2\2\u025c\u025d\7?\2\2\u025d\u00a6\3\2"+
		"\2\2\u025e\u025f\7\'\2\2\u025f\u0260\7?\2\2\u0260\u00a8\3\2\2\2\u0261"+
		"\u0262\7(\2\2\u0262\u0263\7?\2\2\u0263\u00aa\3\2\2\2\u0264\u0265\7~\2"+
		"\2\u0265\u0266\7?\2\2\u0266\u00ac\3\2\2\2\u0267\u0268\7`\2\2\u0268\u0269"+
		"\7?\2\2\u0269\u00ae\3\2\2\2\u026a\u026b\7>\2\2\u026b\u026c\7>\2\2\u026c"+
		"\u026d\7?\2\2\u026d\u00b0\3\2\2\2\u026e\u026f\7@\2\2\u026f\u0270\7@\2"+
		"\2\u0270\u0271\7?\2\2\u0271\u00b2\3\2\2\2\u0272\u0273\7,\2\2\u0273\u0274"+
		"\7,\2\2\u0274\u0275\7?\2\2\u0275\u00b4\3\2\2\2\u0276\u0277\7\61\2\2\u0277"+
		"\u0278\7\61\2\2\u0278\u0279\7?\2\2\u0279\u00b6\3\2\2\2\u027a\u027e\5\u00e7"+
		"t\2\u027b\u027e\5\u00e9u\2\u027c\u027e\5\u00ebv\2\u027d\u027a\3\2\2\2"+
		"\u027d\u027b\3\2\2\2\u027d\u027c\3\2\2\2\u027e\u027f\3\2\2\2\u027f\u0280"+
		"\b\\\t\2\u0280\u00b8\3\2\2\2\u0281\u0282\13\2\2\2\u0282\u00ba\3\2\2\2"+
		"\u0283\u0288\7)\2\2\u0284\u0287\5\u00c3b\2\u0285\u0287\n\b\2\2\u0286\u0284"+
		"\3\2\2\2\u0286\u0285\3\2\2\2\u0287\u028a\3\2\2\2\u0288\u0286\3\2\2\2\u0288"+
		"\u0289\3\2\2\2\u0289\u028b\3\2\2\2\u028a\u0288\3\2\2\2\u028b\u0296\7)"+
		"\2\2\u028c\u0291\7$\2\2\u028d\u0290\5\u00c3b\2\u028e\u0290\n\t\2\2\u028f"+
		"\u028d\3\2\2\2\u028f\u028e\3\2\2\2\u0290\u0293\3\2\2\2\u0291\u028f\3\2"+
		"\2\2\u0291\u0292\3\2\2\2\u0292\u0294\3\2\2\2\u0293\u0291\3\2\2\2\u0294"+
		"\u0296\7$\2\2\u0295\u0283\3\2\2\2\u0295\u028c\3\2\2\2\u0296\u00bc\3\2"+
		"\2\2\u0297\u0298\7)\2\2\u0298\u0299\7)\2\2\u0299\u029a\7)\2\2\u029a\u029e"+
		"\3\2\2\2\u029b\u029d\5\u00bf`\2\u029c\u029b\3\2\2\2\u029d\u02a0\3\2\2"+
		"\2\u029e\u029f\3\2\2\2\u029e\u029c\3\2\2\2\u029f\u02a1\3\2\2\2\u02a0\u029e"+
		"\3\2\2\2\u02a1\u02a2\7)\2\2\u02a2\u02a3\7)\2\2\u02a3\u02b2\7)\2\2\u02a4"+
		"\u02a5\7$\2\2\u02a5\u02a6\7$\2\2\u02a6\u02a7\7$\2\2\u02a7\u02ab\3\2\2"+
		"\2\u02a8\u02aa\5\u00bf`\2\u02a9\u02a8\3\2\2\2\u02aa\u02ad\3\2\2\2\u02ab"+
		"\u02ac\3\2\2\2\u02ab\u02a9\3\2\2\2\u02ac\u02ae\3\2\2\2\u02ad\u02ab\3\2"+
		"\2\2\u02ae\u02af\7$\2\2\u02af\u02b0\7$\2\2\u02b0\u02b2\7$\2\2\u02b1\u0297"+
		"\3\2\2\2\u02b1\u02a4\3\2\2\2\u02b2\u00be\3\2\2\2\u02b3\u02b6\5\u00c1a"+
		"\2\u02b4\u02b6\5\u00c3b\2\u02b5\u02b3\3\2\2\2\u02b5\u02b4\3\2\2\2\u02b6"+
		"\u00c0\3\2\2\2\u02b7\u02b8\n\n\2\2\u02b8\u00c2\3\2\2\2\u02b9\u02ba\7^"+
		"\2\2\u02ba\u02bb\13\2\2\2\u02bb\u00c4\3\2\2\2\u02bc\u02bd\t\13\2\2\u02bd"+
		"\u00c6\3\2\2\2\u02be\u02bf\t\f\2\2\u02bf\u00c8\3\2\2\2\u02c0\u02c1\t\r"+
		"\2\2\u02c1\u00ca\3\2\2\2\u02c2\u02c3\t\16\2\2\u02c3\u00cc\3\2\2\2\u02c4"+
		"\u02c5\t\17\2\2\u02c5\u00ce\3\2\2\2\u02c6\u02c8\5\u00d3j\2\u02c7\u02c6"+
		"\3\2\2\2\u02c7\u02c8\3\2\2\2\u02c8\u02c9\3\2\2\2\u02c9\u02ce\5\u00d5k"+
		"\2\u02ca\u02cb\5\u00d3j\2\u02cb\u02cc\7\60\2\2\u02cc\u02ce\3\2\2\2\u02cd"+
		"\u02c7\3\2\2\2\u02cd\u02ca\3\2\2\2\u02ce\u00d0\3\2\2\2\u02cf\u02d2\5\u00d3"+
		"j\2\u02d0\u02d2\5\u00cfh\2\u02d1\u02cf\3\2\2\2\u02d1\u02d0\3\2\2\2\u02d2"+
		"\u02d3\3\2\2\2\u02d3\u02d4\5\u00d7l\2\u02d4\u00d2\3\2\2\2\u02d5\u02d7"+
		"\5\u00c7d\2\u02d6\u02d5\3\2\2\2\u02d7\u02d8\3\2\2\2\u02d8\u02d6\3\2\2"+
		"\2\u02d8\u02d9\3\2\2\2\u02d9\u00d4\3\2\2\2\u02da\u02dc\7\60\2\2\u02db"+
		"\u02dd\5\u00c7d\2\u02dc\u02db\3\2\2\2\u02dd\u02de\3\2\2\2\u02de\u02dc"+
		"\3\2\2\2\u02de\u02df\3\2\2\2\u02df\u00d6\3\2\2\2\u02e0\u02e2\t\20\2\2"+
		"\u02e1\u02e3\t\21\2\2\u02e2\u02e1\3\2\2\2\u02e2\u02e3\3\2\2\2\u02e3\u02e5"+
		"\3\2\2\2\u02e4\u02e6\5\u00c7d\2\u02e5\u02e4\3\2\2\2\u02e6\u02e7\3\2\2"+
		"\2\u02e7\u02e5\3\2\2\2\u02e7\u02e8\3\2\2\2\u02e8\u00d8\3\2\2\2\u02e9\u02ee"+
		"\7)\2\2\u02ea\u02ed\5\u00dfp\2\u02eb\u02ed\5\u00e5s\2\u02ec\u02ea\3\2"+
		"\2\2\u02ec\u02eb\3\2\2\2\u02ed\u02f0\3\2\2\2\u02ee\u02ec\3\2\2\2\u02ee"+
		"\u02ef\3\2\2\2\u02ef\u02f1\3\2\2\2\u02f0\u02ee\3\2\2\2\u02f1\u02fc\7)"+
		"\2\2\u02f2\u02f7\7$\2\2\u02f3\u02f6\5\u00e1q\2\u02f4\u02f6\5\u00e5s\2"+
		"\u02f5\u02f3\3\2\2\2\u02f5\u02f4\3\2\2\2\u02f6\u02f9\3\2\2\2\u02f7\u02f5"+
		"\3\2\2\2\u02f7\u02f8\3\2\2\2\u02f8\u02fa\3\2\2\2\u02f9\u02f7\3\2\2\2\u02fa"+
		"\u02fc\7$\2\2\u02fb\u02e9\3\2\2\2\u02fb\u02f2\3\2\2\2\u02fc\u00da\3\2"+
		"\2\2\u02fd\u02fe\7)\2\2\u02fe\u02ff\7)\2\2\u02ff\u0300\7)\2\2\u0300\u0304"+
		"\3\2\2\2\u0301\u0303\5\u00ddo\2\u0302\u0301\3\2\2\2\u0303\u0306\3\2\2"+
		"\2\u0304\u0305\3\2\2\2\u0304\u0302\3\2\2\2\u0305\u0307\3\2\2\2\u0306\u0304"+
		"\3\2\2\2\u0307\u0308\7)\2\2\u0308\u0309\7)\2\2\u0309\u0318\7)\2\2\u030a"+
		"\u030b\7$\2\2\u030b\u030c\7$\2\2\u030c\u030d\7$\2\2\u030d\u0311\3\2\2"+
		"\2\u030e\u0310\5\u00ddo\2\u030f\u030e\3\2\2\2\u0310\u0313\3\2\2\2\u0311"+
		"\u0312\3\2\2\2\u0311\u030f\3\2\2\2\u0312\u0314\3\2\2\2\u0313\u0311\3\2"+
		"\2\2\u0314\u0315\7$\2\2\u0315\u0316\7$\2\2\u0316\u0318\7$\2\2\u0317\u02fd"+
		"\3\2\2\2\u0317\u030a\3\2\2\2\u0318\u00dc\3\2\2\2\u0319\u031c\5\u00e3r"+
		"\2\u031a\u031c\5\u00e5s\2\u031b\u0319\3\2\2\2\u031b\u031a\3\2\2\2\u031c"+
		"\u00de\3\2\2\2\u031d\u031f\t\22\2\2\u031e\u031d\3\2\2\2\u031f\u00e0\3"+
		"\2\2\2\u0320\u0322\t\23\2\2\u0321\u0320\3\2\2\2\u0322\u00e2\3\2\2\2\u0323"+
		"\u0325\t\24\2\2\u0324\u0323\3\2\2\2\u0325\u00e4\3\2\2\2\u0326\u0327\7"+
		"^\2\2\u0327\u0328\t\25\2\2\u0328\u00e6\3\2\2\2\u0329\u032b\t\26\2\2\u032a"+
		"\u0329\3\2\2\2\u032b\u032c\3\2\2\2\u032c\u032a\3\2\2\2\u032c\u032d\3\2"+
		"\2\2\u032d\u00e8\3\2\2\2\u032e\u0332\7%\2\2\u032f\u0331\n\27\2\2\u0330"+
		"\u032f\3\2\2\2\u0331\u0334\3\2\2\2\u0332\u0330\3\2\2\2\u0332\u0333\3\2"+
		"\2\2\u0333\u00ea\3\2\2\2\u0334\u0332\3\2\2\2\u0335\u0337\7^\2\2\u0336"+
		"\u0338\5\u00e7t\2\u0337\u0336\3\2\2\2\u0337\u0338\3\2\2\2\u0338\u033e"+
		"\3\2\2\2\u0339\u033b\7\17\2\2\u033a\u0339\3\2\2\2\u033a\u033b\3\2\2\2"+
		"\u033b\u033c\3\2\2\2\u033c\u033f\7\f\2\2\u033d\u033f\7\17\2\2\u033e\u033a"+
		"\3\2\2\2\u033e\u033d\3\2\2\2\u033f\u00ec\3\2\2\2\u0340\u0342\t\30\2\2"+
		"\u0341\u0340\3\2\2\2\u0342\u00ee\3\2\2\2\u0343\u0346\5\u00edw\2\u0344"+
		"\u0346\t\31\2\2\u0345\u0343\3\2\2\2\u0345\u0344\3\2\2\2\u0346\u00f0\3"+
		"\2\2\29\2\u01a6\u01aa\u01ad\u01af\u01b7\u01bb\u01be\u01c2\u01c6\u01ca"+
		"\u01d0\u01d6\u01d8\u01df\u01e6\u01ed\u01f1\u01f5\u027d\u0286\u0288\u028f"+
		"\u0291\u0295\u029e\u02ab\u02b1\u02b5\u02c7\u02cd\u02d1\u02d8\u02de\u02e2"+
		"\u02e7\u02ec\u02ee\u02f5\u02f7\u02fb\u0304\u0311\u0317\u031b\u031e\u0321"+
		"\u0324\u032c\u0332\u0337\u033a\u033e\u0341\u0345\n\3#\2\3\60\3\3\61\4"+
		"\3\67\5\38\6\3D\7\3E\b\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}