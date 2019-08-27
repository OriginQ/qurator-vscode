// Generated from setting.g4 by ANTLR 4.6-SNAPSHOT


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

import { settingListener } from './settingListener';
import { settingVisitor } from './settingVisitor';


export class settingParser extends Parser {
	public static readonly LANGUAGE=1;
	public static readonly AUTOIMPORT=2;
	public static readonly COMPILE_ONLY=3;
	public static readonly EQUAL=4;
	public static readonly SEMI=5;
	public static readonly Identifier=6;
	public static readonly WhiteSpace=7;
	public static readonly SingleLineComment=8;
	public static readonly MultiLinesComment=9;
	public static readonly RULE_qsetting = 0;
	public static readonly RULE_qConfig = 1;
	public static readonly RULE_auto_import = 2;
	public static readonly RULE_lan_set = 3;
	public static readonly RULE_compile_only = 4;
	public static readonly RULE_ischoosed = 5;
	public static readonly RULE_lan_type = 6;
	public static readonly ruleNames: string[] = [
		"qsetting", "qConfig", "auto_import", "lan_set", "compile_only", "ischoosed", 
		"lan_type"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'language'", "'autoimport'", "'compile_only'", "'='", "';'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "LANGUAGE", "AUTOIMPORT", "COMPILE_ONLY", "EQUAL", "SEMI", 
		"Identifier", "WhiteSpace", "SingleLineComment", "MultiLinesComment"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(settingParser._LITERAL_NAMES, settingParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return settingParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "setting.g4"; }

	@Override
	public get ruleNames(): string[] { return settingParser.ruleNames; }

	@Override
	public get serializedATN(): string { return settingParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(settingParser._ATN, this);
	}
	@RuleVersion(0)
	public qsetting(): QsettingContext {
		let _localctx: QsettingContext = new QsettingContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, settingParser.RULE_qsetting);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << settingParser.LANGUAGE) | (1 << settingParser.AUTOIMPORT) | (1 << settingParser.COMPILE_ONLY))) !== 0)) {
				{
				{
				this.state = 14;
				this.qConfig();
				}
				}
				this.state = 19;
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
	public qConfig(): QConfigContext {
		let _localctx: QConfigContext = new QConfigContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, settingParser.RULE_qConfig);
		try {
			this.state = 23;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case settingParser.LANGUAGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 20;
				this.lan_set();
				}
				break;
			case settingParser.AUTOIMPORT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 21;
				this.auto_import();
				}
				break;
			case settingParser.COMPILE_ONLY:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 22;
				this.compile_only();
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
	public auto_import(): Auto_importContext {
		let _localctx: Auto_importContext = new Auto_importContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, settingParser.RULE_auto_import);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this.match(settingParser.AUTOIMPORT);
			this.state = 26;
			this.match(settingParser.EQUAL);
			this.state = 27;
			this.ischoosed();
			this.state = 28;
			this.match(settingParser.SEMI);
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
	public lan_set(): Lan_setContext {
		let _localctx: Lan_setContext = new Lan_setContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, settingParser.RULE_lan_set);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 30;
			this.match(settingParser.LANGUAGE);
			this.state = 31;
			this.match(settingParser.EQUAL);
			this.state = 32;
			this.lan_type();
			this.state = 33;
			this.match(settingParser.SEMI);
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
	public compile_only(): Compile_onlyContext {
		let _localctx: Compile_onlyContext = new Compile_onlyContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, settingParser.RULE_compile_only);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.match(settingParser.COMPILE_ONLY);
			this.state = 36;
			this.match(settingParser.EQUAL);
			this.state = 37;
			this.ischoosed();
			this.state = 38;
			this.match(settingParser.SEMI);
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
	public ischoosed(): IschoosedContext {
		let _localctx: IschoosedContext = new IschoosedContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, settingParser.RULE_ischoosed);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(settingParser.Identifier);
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
	public lan_type(): Lan_typeContext {
		let _localctx: Lan_typeContext = new Lan_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, settingParser.RULE_lan_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.match(settingParser.Identifier);
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

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\v/\x04\x02\t"+
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t"+
		"\x07\x04\b\t\b\x03\x02\x07\x02\x12\n\x02\f\x02\x0E\x02\x15\v\x02\x03\x03"+
		"\x03\x03\x03\x03\x05\x03\x1A\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03"+
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04"+
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x02*\x02\x13\x03\x02\x02\x02"+
		"\x04\x19\x03\x02\x02\x02\x06\x1B\x03\x02\x02\x02\b \x03\x02\x02\x02\n"+
		"%\x03\x02\x02\x02\f*\x03\x02\x02\x02\x0E,\x03\x02\x02\x02\x10\x12\x05"+
		"\x04\x03\x02\x11\x10\x03\x02\x02\x02\x12\x15\x03\x02\x02\x02\x13\x11\x03"+
		"\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14\x03\x03\x02\x02\x02\x15\x13\x03"+
		"\x02\x02\x02\x16\x1A\x05\b\x05\x02\x17\x1A\x05\x06\x04\x02\x18\x1A\x05"+
		"\n\x06\x02\x19\x16\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02\x19\x18\x03"+
		"\x02\x02\x02\x1A\x05\x03\x02\x02\x02\x1B\x1C\x07\x04\x02\x02\x1C\x1D\x07"+
		"\x06\x02\x02\x1D\x1E\x05\f\x07\x02\x1E\x1F\x07\x07\x02\x02\x1F\x07\x03"+
		"\x02\x02\x02 !\x07\x03\x02\x02!\"\x07\x06\x02\x02\"#\x05\x0E\b\x02#$\x07"+
		"\x07\x02\x02$\t\x03\x02\x02\x02%&\x07\x05\x02\x02&\'\x07\x06\x02\x02\'"+
		"(\x05\f\x07\x02()\x07\x07\x02\x02)\v\x03\x02\x02\x02*+\x07\b\x02\x02+"+
		"\r\x03\x02\x02\x02,-\x07\b\x02\x02-\x0F\x03\x02\x02\x02\x04\x13\x19";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!settingParser.__ATN) {
			settingParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(settingParser._serializedATN));
		}

		return settingParser.__ATN;
	}

}

export class QsettingContext extends ParserRuleContext {
	public qConfig(): QConfigContext[];
	public qConfig(i: number): QConfigContext;
	public qConfig(i?: number): QConfigContext | QConfigContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QConfigContext);
		} else {
			return this.getRuleContext(i, QConfigContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return settingParser.RULE_qsetting; }
	@Override
	public enterRule(listener: settingListener): void {
		if (listener.enterQsetting) listener.enterQsetting(this);
	}
	@Override
	public exitRule(listener: settingListener): void {
		if (listener.exitQsetting) listener.exitQsetting(this);
	}
	@Override
	public accept<Result>(visitor: settingVisitor<Result>): Result {
		if (visitor.visitQsetting) return visitor.visitQsetting(this);
		else return visitor.visitChildren(this);
	}
}


export class QConfigContext extends ParserRuleContext {
	public lan_set(): Lan_setContext | undefined {
		return this.tryGetRuleContext(0, Lan_setContext);
	}
	public auto_import(): Auto_importContext | undefined {
		return this.tryGetRuleContext(0, Auto_importContext);
	}
	public compile_only(): Compile_onlyContext | undefined {
		return this.tryGetRuleContext(0, Compile_onlyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return settingParser.RULE_qConfig; }
	@Override
	public enterRule(listener: settingListener): void {
		if (listener.enterQConfig) listener.enterQConfig(this);
	}
	@Override
	public exitRule(listener: settingListener): void {
		if (listener.exitQConfig) listener.exitQConfig(this);
	}
	@Override
	public accept<Result>(visitor: settingVisitor<Result>): Result {
		if (visitor.visitQConfig) return visitor.visitQConfig(this);
		else return visitor.visitChildren(this);
	}
}


export class Auto_importContext extends ParserRuleContext {
	public AUTOIMPORT(): TerminalNode { return this.getToken(settingParser.AUTOIMPORT, 0); }
	public EQUAL(): TerminalNode { return this.getToken(settingParser.EQUAL, 0); }
	public ischoosed(): IschoosedContext {
		return this.getRuleContext(0, IschoosedContext);
	}
	public SEMI(): TerminalNode { return this.getToken(settingParser.SEMI, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return settingParser.RULE_auto_import; }
	@Override
	public enterRule(listener: settingListener): void {
		if (listener.enterAuto_import) listener.enterAuto_import(this);
	}
	@Override
	public exitRule(listener: settingListener): void {
		if (listener.exitAuto_import) listener.exitAuto_import(this);
	}
	@Override
	public accept<Result>(visitor: settingVisitor<Result>): Result {
		if (visitor.visitAuto_import) return visitor.visitAuto_import(this);
		else return visitor.visitChildren(this);
	}
}


export class Lan_setContext extends ParserRuleContext {
	public LANGUAGE(): TerminalNode { return this.getToken(settingParser.LANGUAGE, 0); }
	public EQUAL(): TerminalNode { return this.getToken(settingParser.EQUAL, 0); }
	public lan_type(): Lan_typeContext {
		return this.getRuleContext(0, Lan_typeContext);
	}
	public SEMI(): TerminalNode { return this.getToken(settingParser.SEMI, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return settingParser.RULE_lan_set; }
	@Override
	public enterRule(listener: settingListener): void {
		if (listener.enterLan_set) listener.enterLan_set(this);
	}
	@Override
	public exitRule(listener: settingListener): void {
		if (listener.exitLan_set) listener.exitLan_set(this);
	}
	@Override
	public accept<Result>(visitor: settingVisitor<Result>): Result {
		if (visitor.visitLan_set) return visitor.visitLan_set(this);
		else return visitor.visitChildren(this);
	}
}


export class Compile_onlyContext extends ParserRuleContext {
	public COMPILE_ONLY(): TerminalNode { return this.getToken(settingParser.COMPILE_ONLY, 0); }
	public EQUAL(): TerminalNode { return this.getToken(settingParser.EQUAL, 0); }
	public ischoosed(): IschoosedContext {
		return this.getRuleContext(0, IschoosedContext);
	}
	public SEMI(): TerminalNode { return this.getToken(settingParser.SEMI, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return settingParser.RULE_compile_only; }
	@Override
	public enterRule(listener: settingListener): void {
		if (listener.enterCompile_only) listener.enterCompile_only(this);
	}
	@Override
	public exitRule(listener: settingListener): void {
		if (listener.exitCompile_only) listener.exitCompile_only(this);
	}
	@Override
	public accept<Result>(visitor: settingVisitor<Result>): Result {
		if (visitor.visitCompile_only) return visitor.visitCompile_only(this);
		else return visitor.visitChildren(this);
	}
}


export class IschoosedContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(settingParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return settingParser.RULE_ischoosed; }
	@Override
	public enterRule(listener: settingListener): void {
		if (listener.enterIschoosed) listener.enterIschoosed(this);
	}
	@Override
	public exitRule(listener: settingListener): void {
		if (listener.exitIschoosed) listener.exitIschoosed(this);
	}
	@Override
	public accept<Result>(visitor: settingVisitor<Result>): Result {
		if (visitor.visitIschoosed) return visitor.visitIschoosed(this);
		else return visitor.visitChildren(this);
	}
}


export class Lan_typeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(settingParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return settingParser.RULE_lan_type; }
	@Override
	public enterRule(listener: settingListener): void {
		if (listener.enterLan_type) listener.enterLan_type(this);
	}
	@Override
	public exitRule(listener: settingListener): void {
		if (listener.exitLan_type) listener.exitLan_type(this);
	}
	@Override
	public accept<Result>(visitor: settingVisitor<Result>): Result {
		if (visitor.visitLan_type) return visitor.visitLan_type(this);
		else return visitor.visitChildren(this);
	}
}


