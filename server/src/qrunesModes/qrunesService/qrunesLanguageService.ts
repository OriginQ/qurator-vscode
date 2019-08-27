/**
 * This ts file provides the qrunes language service, include scanner, parser, doComplete,
 * hover and other functions.
 */
'use strict';

import { createScanner } from './parser/qrunesScanner';
import { parse } from './parser/qrunesParser';
import { QRunesCompletion } from './qrunesServiceImpl/qrunesCompletion';
import { doHover } from './qrunesServiceImpl/qrunesHover';
import { findDocumentHighlights } from './qrunesServiceImpl/qrunesHighlighting';
import { TextDocument, Position, DocumentHighlight, CompletionList, Hover } from 'vscode-languageserver-types';
import { Scanner, QRunesDocument } from './qrunesLanguageTypes';

export * from './qrunesLanguageTypes';
export * from 'vscode-languageserver-types';


export interface LanguageService {
	createScanner(input: string, initialOffset?: number): Scanner;
	parseQRunesDocument(document: TextDocument): QRunesDocument;
	findDocumentHighlights(document: TextDocument, position: Position, qrunesDocument: QRunesDocument): DocumentHighlight[];
	doComplete(document: TextDocument, position: Position, qrunesDocument: QRunesDocument ): CompletionList;
	doHover(document: TextDocument, position: Position, qrunesDocument: QRunesDocument): Hover | null;
}

export function getLanguageService(): LanguageService {
	const qrunesCompletion = new QRunesCompletion();
	return {
		createScanner,
		parseQRunesDocument: document => parse(document.getText()),
		doComplete: qrunesCompletion.doComplete.bind(qrunesCompletion),
		doHover,
		findDocumentHighlights
	};
}
