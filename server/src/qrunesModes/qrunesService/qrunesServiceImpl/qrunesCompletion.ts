/**
 * This ts file provides the auto completion function of qrunes langauge.
 */

'use strict';

import { TextDocument, Position, CompletionList, CompletionItemKind, Range, TextEdit, InsertTextFormat } from 'vscode-languageserver-types';
import { QRunesDocument } from '../parser/qrunesParser';
import { createScanner} from '../parser/qrunesScanner';
import { allTagProviders } from './tagProviders';
import { ScannerState, TokenType } from '../qrunesLanguageTypes';

export class QRunesCompletion {
	doComplete(document: TextDocument, position: Position, qrunesDocument: QRunesDocument): CompletionList {
		let result: CompletionList = {
			isIncomplete: false,
			items: []
		};
		let tagProviders = allTagProviders.filter(p => p.isApplicable(document.languageId));
		// Get document's text and offset.
		let text = document.getText();
		let offset = document.offsetAt(position);

		let node = qrunesDocument.findNodeBefore(offset);
		if (!node) {
			return result;
		}

		let scanner = createScanner(text, node.start);

		function getReplaceRange(replaceStart: number, replaceEnd: number = offset): Range {
			if (replaceStart > offset) {
				replaceStart = offset;
			}
			return { start: document.positionAt(replaceStart), end: document.positionAt(replaceEnd) };
		}

		function collectOpenTagSuggestions(afterOpenBracket: number, tagNameEnd?: number): CompletionList {
			let range = getReplaceRange(afterOpenBracket, tagNameEnd);
			tagProviders.forEach((provider) => {
				provider.collectTags((tag, label) => {
					result.items.push({
						label: tag,
						kind: CompletionItemKind.Property,
						documentation: label,
						textEdit: TextEdit.replace(range, tag),
						insertTextFormat: InsertTextFormat.PlainText
					});
				});
			});
			return result;
		}

		function collectTagSuggestions(tagStart: number, tagEnd: number): CompletionList {
			collectOpenTagSuggestions(tagStart, tagEnd);
			return result;
		}

		function scanNextForEndPos(nextToken: TokenType): number {
			if (offset === scanner.getTokenEnd()) {
				token = scanner.scan();
				if (token === nextToken && scanner.getTokenOffset() === offset) {
					return scanner.getTokenEnd();
				}
			}
			return offset;
		}
		//Scanner the qrunes language and return result.
		let token = scanner.scan();

		while (token !== TokenType.EOS && scanner.getTokenOffset() <= offset) {
			switch (token) {
				case TokenType.StartTagOpen:
					if (scanner.getTokenEnd() === offset) {
						let endPos = scanNextForEndPos(TokenType.StartTag);
						return collectTagSuggestions(offset, endPos);
					}
					break;
				case TokenType.StartTag:
					if (scanner.getTokenOffset() <= offset && offset <= scanner.getTokenEnd()) {
						return collectOpenTagSuggestions(scanner.getTokenOffset(), scanner.getTokenEnd());
					}
					break;
				case TokenType.Whitespace:
					if (offset <= scanner.getTokenEnd()) {
						switch (scanner.getScannerState()) {
							case ScannerState.AfterOpeningStartTag:
								let startPos = scanner.getTokenOffset();
								let endTagPos = scanNextForEndPos(TokenType.StartTag);
								return collectTagSuggestions(startPos, endTagPos);
							case ScannerState.WithinTag:							
						}
					}
					break;			
				case TokenType.EndTag:
					if (offset <= scanner.getTokenEnd()) {
						let start = scanner.getTokenOffset() - 1;
						while (start >= 0) {
							start--;
						}
					}
					break;			
				default:
					if (offset <= scanner.getTokenEnd()) {
						return result;
					}
					break;
			}
			token = scanner.scan();
		}

		return result;
	}
}
