/**
 * This ts file provides the support of other modes, include get language region function.
 */
'use strict';

import { TextDocument, Position, LanguageService, TokenType, Range } from './qrunesService/qrunesLanguageService';

export interface LanguageRange extends Range {
	languageId: string | undefined;
}

export interface QRunesDocumentRegions {
	getEmbeddedDocument(languageId: string): TextDocument;
	getLanguageRanges(range: Range): LanguageRange[];
	getLanguageAtPosition(position: Position): string | undefined;
	getLanguagesInDocument(): string[];
}

interface EmbeddedRegion { languageId: string | undefined; start: number; end: number; }

// Get document regions
export function getDocumentRegions(languageService: LanguageService, document: TextDocument): QRunesDocumentRegions {
	let regions: EmbeddedRegion[] = [];
	let scanner = languageService.createScanner(document.getText());
	let token = scanner.scan();
	while (token !== TokenType.EOS) {
		switch (token) {
			case TokenType.Settings:
				regions.push({ languageId: 'settings', start: scanner.getTokenOffset(), end: scanner.getTokenEnd() });
				break;
			case TokenType.QCodes:
				regions.push({ languageId: 'qcodes', start: scanner.getTokenOffset(), end: scanner.getTokenEnd() });
                break;
            case TokenType.PyScript:
                regions.push({ languageId: 'pyscript', start: scanner.getTokenOffset(), end: scanner.getTokenEnd() });
				break;
			case TokenType.CppScript:
				regions.push({ languageId: 'cppscript', start: scanner.getTokenOffset(), end: scanner.getTokenEnd() });
			break;
		}
		token = scanner.scan();
	}
	return {
		getLanguageRanges: (range: Range) => getLanguageRanges(document, regions, range),
		getEmbeddedDocument: (languageId: string ) => getEmbeddedDocument(document, regions, languageId),
		getLanguageAtPosition: (position: Position) => getLanguageAtPosition(document, regions, position),
		getLanguagesInDocument: () => getLanguagesInDocument(document, regions)
	};
}


function getLanguageRanges(document: TextDocument, regions: EmbeddedRegion[], range: Range): LanguageRange[] {
	let result: LanguageRange[] = [];
	let currentPos = range ? range.start : Position.create(0, 0);
	let currentOffset = range ? document.offsetAt(range.start) : 0;
	let endOffset = range ? document.offsetAt(range.end) : document.getText().length;
	for (let region of regions) {
		if (region.end > currentOffset && region.start < endOffset) {
			let start = Math.max(region.start, currentOffset);
			let startPos = document.positionAt(start);
			if (currentOffset < region.start) {
				result.push({
					start: currentPos,
					end: startPos,
					languageId: 'qrunes'
				});
			}
			let end = Math.min(region.end, endOffset);
			let endPos = document.positionAt(end);
			if (end > region.start) {
				result.push({
					start: startPos,
					end: endPos,
					languageId: region.languageId
				});
			}
			currentOffset = end;
			currentPos = endPos;
		}
	}
	if (currentOffset < endOffset) {
		let endPos = range ? range.end : document.positionAt(endOffset);
		result.push({
			start: currentPos,
			end: endPos,
			languageId: 'qrunes'
		});
	}
	return result;
}

function getLanguagesInDocument(document: TextDocument, regions: EmbeddedRegion[]): string[] {
	let result = [];
	for (let region of regions) {
		if (region.languageId && result.indexOf(region.languageId) === -1) {
			result.push(region.languageId);
			if (result.length === 3) {
				return result;
			}
		}
	}
	result.push('qrunes');
	return result;
}

function getLanguageAtPosition(document: TextDocument, regions: EmbeddedRegion[], position: Position): string | undefined {
	let offset = document.offsetAt(position);
	for (let region of regions) {
		if (region.start <= offset) {
			if (offset <= region.end) {
				return region.languageId;
			}
		} else {
			break;
		}
	}
	return 'qrunes';
}

function getEmbeddedDocument(document: TextDocument, contents: EmbeddedRegion[], languageId: string): TextDocument {
	let currentPos = 0;
	let oldContent = document.getText();
	let result = '';
	for (let c of contents) {
		if (c.languageId === languageId) {
			result = substituteWithWhitespace(result, currentPos, c.start, oldContent);
			result += oldContent.substring(c.start, c.end);
			currentPos = c.end;
		}
	}
	result = substituteWithWhitespace(result, currentPos, oldContent.length, oldContent);
	return TextDocument.create(document.uri, languageId, document.version, result);
}

function substituteWithWhitespace(result: string, start: number, end: number, oldContent: string) {
	let accumulatedWS = 0;
	for (let i = start; i < end; i++) {
		let ch = oldContent[i];
		if (ch === '\n' || ch === '\r') {
			// only write new lines, skip the whitespace
			accumulatedWS = 0;
			result += ch;
		} else {
			accumulatedWS++;
		}
	}
	result = append(result, ' ', accumulatedWS);
	return result;
}

function append(result: string, str: string, n: number): string {
	while (n > 0) {
		if (n & 1) {
			result += str;
		}
		n >>= 1;
		str += str;
	}
	return result;
}