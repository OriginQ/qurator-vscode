/**
 * This ts file provides the qrunes language scanner function, this function
 * used in providing the function for qrunes language and dividing the language region.
 */

import * as nls from 'vscode-nls';
import { TokenType, ScannerState, Scanner } from '../qrunesLanguageTypes';
let localize = nls.loadMessageBundle();

class MultiLineStream {

	private source: string;
	private len: number;
	private position: number;

	constructor(source: string, position: number) {
		this.source = source;
		this.len = source.length;
		this.position = position;
	}

	public eos(): boolean {
		return this.len <= this.position;
	}

	public getSource(): string {
		return this.source;
	}

	public pos(): number {
		return this.position;
	}

	public advance(n: number): void {
		this.position += n;
	}

	public goToEnd(): void {
		this.position = this.source.length;
	}
	
	public advanceIfChar(ch: number): boolean {
		if (ch === this.source.charCodeAt(this.position)) {
			this.position++;
			return true;
		}
		return false;
	}

	public advanceIfChars(ch: number[]): boolean {
		let i: number;
		if (this.position + ch.length > this.source.length) {
			return false;
		}
		for (i = 0; i < ch.length; i++) {
			if (this.source.charCodeAt(this.position + i) !== ch[i]) {
				return false;
			}
		}
		this.advance(i);
		return true;
	}

	public advanceIfRegExp(regex: RegExp): string {
		let str = this.source.substr(this.position);
		let match = str.match(regex);
		if (match) {
			this.position = this.position + match.index! + match[0].length;
			return match[0];
		}
		return '';
	}

	public ifRegExp(regex: RegExp): string {
		let str = this.source;
		let match = str.match(regex);
		if (match) {
			return match[0];
		}
		return '';
	}

	public advanceUntilRegExp(regex: RegExp): string {
		let str = this.source.substr(this.position);
		let match = str.match(regex);
		if (match) {
			this.position = this.position + match.index!;
			return match[0];
		} else {
			this.goToEnd();
		}
		return '';
	}

	public advanceUntilChar(ch: number): boolean {
		while (this.position < this.source.length) {
			if (this.source.charCodeAt(this.position) === ch) {
				return true;
			}
			this.advance(1);
		}
		return false;
	}

	public skipWhitespace(): boolean {
		let n = this.advanceWhileChar(ch => {
			return ch === _WSP || ch === _TAB || ch === _NWL || ch === _LFD || ch === _CAR;
		});
		return n > 0;
	}

	public advanceWhileChar(condition: (ch: number) => boolean): number {
		let posNow = this.position;
		while (this.position < this.len && condition(this.source.charCodeAt(this.position))) {
			this.position++;
		}
		return this.position - posNow;
	}
}

const _FDS = '/'.charCodeAt(0);
const _ATD = '@'.charCodeAt(0);
const _COL = ':'.charCodeAt(0);
const _NWL = '\n'.charCodeAt(0);
const _CAR = '\r'.charCodeAt(0);
const _LFD = '\f'.charCodeAt(0);
const _WSP = ' '.charCodeAt(0);
const _TAB = '\t'.charCodeAt(0);
const _STR = '*'.charCodeAt(0);

export function createScanner(input: string, initialOffset = 0, initialState: ScannerState = ScannerState.WithinContent): Scanner {

	let stream = new MultiLineStream(input, initialOffset);
	let state = initialState;
	let tokenOffset: number = 0;
	let tokenType: TokenType = TokenType.Unknown;
	let tokenError: string | undefined;

	let lastTag: string;
	let langName: number;

	function nextElementName(): string {
		return stream.advanceIfRegExp(/^[_\w][_\w-.\d]*/).toLowerCase();
	}

	function languageName(): number {
		if (stream.ifRegExp(/.*language\s*=\s*Python.*/) != '') {
			return 0;
		} else if (stream.ifRegExp(/.*language\s*=\s*C\+\+.*/) != '') {
			return 1;
		}
		return 2;
	}

	function finishToken(offset: number, type: TokenType, errorMessage?: string): TokenType {
		tokenType = type;
		tokenOffset = offset;
		tokenError = errorMessage;
		return type;
	}

	function scan(): TokenType {
		let offset = stream.pos();
		let oldState = state;
		let token = internalScan();
		if (token !== TokenType.EOS && offset === stream.pos()) {
			console.log('Scanner.scan has not advanced at offset ' + offset + ', state before: ' + oldState + ' after: ' + state);
			stream.advance(1);
			return finishToken(offset, TokenType.Unknown);
		}
		return token;
	}

	function internalScan(): TokenType {
		let offset = stream.pos();
		if (stream.eos()) {
			return finishToken(offset, TokenType.EOS);
		}
		let errorMessage;

		switch (state) {
			case ScannerState.WithinComment:
				if (stream.advanceIfChar(_NWL)) { // Scanner the end tag of comment \n.
					state = ScannerState.WithinContent;
					return finishToken(offset, TokenType.EndCommentTag);
				}
				if (stream.advanceIfChars([ _STR, _FDS])) { // Scanner the end tag of comment */.
					state = ScannerState.WithinContent;
					return finishToken(offset, TokenType.EndCommentTag);
				}
				stream.advanceUntilChar(_NWL); // \n.
				return finishToken(offset, TokenType.Comment);
			case ScannerState.WithinContent:
				langName = languageName();
				if (stream.advanceIfChar(_ATD)) { // Scanner the begin tag of qrunes tags @.			
					state = ScannerState.AfterOpeningStartTag;
					return finishToken(offset, TokenType.StartTagOpen);
				}
				if (stream.advanceIfChars([_FDS, _FDS])) { // Scanner the begin tag for comment //.
					state = ScannerState.WithinComment;
					return finishToken(offset, TokenType.StartCommentTag);
				}	
				if (stream.advanceIfChars([_FDS, _STR])) { // Scanner the begin tag for comment /*.
					state = ScannerState.WithinComment;
					return finishToken(offset, TokenType.StartCommentTag);
				}				
				stream.advanceUntilChar(_ATD);
				return finishToken(offset, TokenType.Content);			
			case ScannerState.AfterOpeningStartTag:
				lastTag = nextElementName(); // Get the qrunes tag name.
				if (lastTag.length > 0) {
					state = ScannerState.WithinTag;
					return finishToken(offset, TokenType.StartTag);
				}
				if (stream.skipWhitespace()) { // White space is not valid here.
					return finishToken(offset, TokenType.Whitespace, localize('error.unexpectedWhitespace', 'Tag name must directly follow colon.'));
				}
				state = ScannerState.WithinTag;
				stream.advanceUntilChar(_COL); // The end tag of qrunes tag :.
				if (offset < stream.pos()) {
					return finishToken(offset, TokenType.Unknown, localize('error.startTagNameExpected', 'Start tag name expected.'));
				}
				return internalScan();			
			case ScannerState.WithinTag:
				if (stream.skipWhitespace()) {
					return finishToken(offset, TokenType.Whitespace);
				}						
				if (stream.advanceIfChar(_COL)) { // The end tag of qrunes tag :.
					if (lastTag === 'qcodes') {
						state = ScannerState.WithinQCodesContent;
					} else if (lastTag === 'settings') {
						state = ScannerState.WithinSettingsContent;
					} else if (lastTag === 'script' ){  // Get the language name and choose the script region.
						if ( langName === 1 ) {
							state = ScannerState.WithinCppScriptContent;
						} else {
							state = ScannerState.WithinPyScriptContent;
						}
					} else {
						state = ScannerState.WithinContent;
					}
					return finishToken(offset, TokenType.StartTagClose);
				}
				stream.advance(1);
				return finishToken(offset, TokenType.Unknown, localize('error.unexpectedCharacterInTag', 'Unexpected character in tag.'));		
			case ScannerState.WithinQCodesContent:
				stream.advanceUntilRegExp(/\@/i);
				state = ScannerState.WithinContent;
				if (offset < stream.pos()) {
					return finishToken(offset, TokenType.QCodes);
				}
				return internalScan(); // No advance yet - jump to content.
			case ScannerState.WithinSettingsContent:
				stream.advanceUntilRegExp(/\@/i);
				state = ScannerState.WithinContent;
				if (offset < stream.pos()) {
					return finishToken(offset, TokenType.Settings);
				}
				return internalScan(); // No advance yet - jump to content.
			case ScannerState.WithinPyScriptContent:
				stream.advanceUntilRegExp(/\@/i);
				state = ScannerState.WithinContent;
				if (offset < stream.pos()) {
					return finishToken(offset, TokenType.PyScript);
				}
				return internalScan(); // No advance yet - jump to content.
			case ScannerState.WithinCppScriptContent:
				stream.advanceUntilRegExp(/\@/i);
				state = ScannerState.WithinContent;
				if (offset < stream.pos()) {
					return finishToken(offset, TokenType.CppScript);
				}
				return internalScan(); // No advance yet - jump to content.
		}

		stream.advance(1);
		state = ScannerState.WithinContent;
		return finishToken(offset, TokenType.Unknown, errorMessage);
	}
	return {
		scan,
		getTokenType: () => tokenType,
		getTokenOffset: () => tokenOffset,
		getTokenLength: () => stream.pos() - tokenOffset,
		getTokenEnd: () => stream.pos(),
		getTokenText: () => stream.getSource().substring(tokenOffset, stream.pos()),
		getScannerState: () => state,
		getTokenError: () => tokenError
	};
}
