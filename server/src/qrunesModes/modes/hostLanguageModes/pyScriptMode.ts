/**
 * This ts file provides the service of pythob script mode, include the validation, complete,
 * hover and other functions.
 */
'use strict';

import { LanguageModelCache, getLanguageModelCache } from '../../languageModelCache';
import { TextDocument, Position, CompletionItem, CompletionList } from 'vscode-languageserver-types';
import { CompilationTool } from "../../embeddedModeImpl/compilationPython";
import { PythonParser } from "../../embeddedModeImpl/python/parser";
import { PythonSuggester } from "../../embeddedModeImpl/python/suggester";
import { LanguageMode } from '../../languageModes';
import { QRunesDocumentRegions } from '../../embeddedSupport';
import { TextDocumentPositionParams } from 'vscode-languageserver';

export function getPyScriptMode(documentRegions: LanguageModelCache<QRunesDocumentRegions>): LanguageMode {
	
	let embeddedScriptDocuments = getLanguageModelCache<TextDocument>(10, 60, document => documentRegions.get(document).getEmbeddedDocument('pyscript'));
	let compilationTool: CompilationTool = new CompilationTool(new PythonParser(), new PythonSuggester());

	return {
		getId() {
			return 'pyscript';
		},
		doValidation(document: TextDocument) {
			let embedded = embeddedScriptDocuments.get(document);
			return compilationTool.validateDocument(embedded);
		},
		doComplete(document: TextDocument, embeddedPosition: Position) {
			let embedded = embeddedScriptDocuments.get(document);
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
			embeddedScriptDocuments.onDocumentRemoved(document);
		},
		dispose() {
			embeddedScriptDocuments.dispose();
		}
	};
}