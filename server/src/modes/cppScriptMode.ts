/**
 * This ts file provides the service of cpp script mode, include the validation, complete,
 * hover and other functions.
 */
'use strict';

import { LanguageModelCache, getLanguageModelCache } from '../languageModelCache';
import { TextDocument, Position, CompletionItem, CompletionList } from 'vscode-languageserver-types';
import { CompilationTool } from "../embedded/compilation";
import { CppParser } from "../embedded/cpp/parser";
import { CppSuggester } from "../embedded/cpp/suggester";
import { LanguageMode } from './languageModes';
import { QRunesDocumentRegions } from './embeddedSupport';
import { TextDocumentPositionParams } from 'vscode-languageserver';

export function getCppScriptMode(documentRegions: LanguageModelCache<QRunesDocumentRegions>): LanguageMode {
	
	let embeddedQcodesDocuments = getLanguageModelCache<TextDocument>(10, 60, document => documentRegions.get(document).getEmbeddedDocument('cppscript'));
	let compilationTool: CompilationTool = new CompilationTool(new CppParser(), new CppSuggester());

	return {
		getId() {
			return 'cppscript';
		},
		doValidation(document: TextDocument) {
			let embedded = embeddedQcodesDocuments.get(document);
			return compilationTool.validateDocument(embedded);
		},
		doComplete(document: TextDocument, embeddedPosition: Position) {
			let embedded = embeddedQcodesDocuments.get(document);
			let content: TextDocumentPositionParams = {textDocument: embedded, position: embeddedPosition}
			return compilationTool.availableCompletions(content) || CompletionList.create();
		},
		doResolve(item: CompletionItem): CompletionItem {
			return compilationTool.completionDetailsFor(item);
		},
 		doHover(document: TextDocument, position: Position) {
			return compilationTool.doHover(document, position);
		},
		onDocumentRemoved(document: TextDocument) {
			embeddedQcodesDocuments.onDocumentRemoved(document);
		},
		dispose() {
			embeddedQcodesDocuments.dispose();
		}
	};
}