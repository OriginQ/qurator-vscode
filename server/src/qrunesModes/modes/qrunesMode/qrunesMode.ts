/**
 * This ts file provides the service of qrunes mode, include the validation, complete,
 * hover and other functions.
 */
'use strict';

import { getLanguageModelCache } from '../../languageModelCache';
import { LanguageService as QRunesLanguageService, QRunesDocument } from '../../qrunesService/qrunesLanguageService';
import { TextDocument, Position , CompletionItem } from 'vscode-languageserver-types';
import { LanguageMode } from '../../languageModes';

export function getQRunesMode(qrunesLanguageService: QRunesLanguageService): LanguageMode {

	let qrunesDocuments = getLanguageModelCache<QRunesDocument>(10, 60, document => qrunesLanguageService.parseQRunesDocument(document));
	return {
		getId() {
			return 'qrunes';
		},
		doComplete(document: TextDocument, position: Position) {
			let pathCompletionProposals: CompletionItem[] = [];

			const qrunesDocument = qrunesDocuments.get(document);
			let completionList = qrunesLanguageService.doComplete(document, position, qrunesDocument);
			completionList.items.push(...pathCompletionProposals);
			return completionList;
		},
		doHover(document: TextDocument, position: Position) {
			return qrunesLanguageService.doHover(document, position, qrunesDocuments.get(document));
		},
		findDocumentHighlight(document: TextDocument, position: Position) {
			return qrunesLanguageService.findDocumentHighlights(document, position, qrunesDocuments.get(document));
		},
		onDocumentRemoved(document: TextDocument) {
			qrunesDocuments.onDocumentRemoved(document);
		},
		dispose() {
			qrunesDocuments.dispose();
		}
	};
}
