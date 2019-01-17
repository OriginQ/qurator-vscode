/**
 * This ts file provides the auto hover function of qrunes langauge.
 */

'use strict';

import { QRunesDocument } from '../parser/qrunesParser';
import { createScanner } from '../parser/qrunesScanner';
import { TextDocument, Range, Position, Hover, MarkedString } from 'vscode-languageserver-types';
import { allTagProviders } from './tagProviders';
import { TokenType } from '../qrunesLanguageTypes';

export function doHover(document: TextDocument, position: Position, qrunesDocument: QRunesDocument): Hover | null {
	let offset = document.offsetAt(position);
	let node = qrunesDocument.findNodeAt(offset);
	if (!node || !node.tag) {
		return null;
	}
	let tagProviders = allTagProviders.filter(p => p.isApplicable(document.languageId));
	function getTagHover(tag: string, range: Range, open: boolean): Hover | null {
		tag = tag.toLowerCase();
		for (let provider of tagProviders) {
			let hover = null;
			provider.collectTags((t, label) => {
				if (t === tag) {
					let tagLabel = open ? '@' + tag + ':' : null;
					hover = { contents: [{ language: 'qrunes', value: tagLabel }, MarkedString.fromPlainText(label)], range };
				}
			});
			if (hover) {
				return hover;
			}
		}
		return null;
	}

	function getTagNameRange(tokenType: TokenType, startOffset: number): Range | null {
		let scanner = createScanner(document.getText(), startOffset);
		let token = scanner.scan();
		while (token !== TokenType.EOS && (scanner.getTokenEnd() < offset || scanner.getTokenEnd() === offset && token !== tokenType)) {
			token = scanner.scan();
		}
		if (token === tokenType && offset <= scanner.getTokenEnd()) {
			return { start: document.positionAt(scanner.getTokenOffset()), end: document.positionAt(scanner.getTokenEnd()) };
		}
		return null;
    }
    
	let tagRange = getTagNameRange(TokenType.StartTag, node.start);
	if (tagRange) {
		return getTagHover(node.tag, tagRange, true);
	}
	return null;
}

