/**
 * This ts file provides the service of settings mode, include the validation, complete,
 * hover and other functions.
 */
'use strict';

import { LanguageModelCache, getLanguageModelCache } from '../../languageModelCache';
import { TextDocument, Position, CompletionItem, CompletionList } from 'vscode-languageserver-types';
import { CompilationTool } from "../../embeddedModeImpl/compilation";
import { SettingsParser } from "../../embeddedModeImpl/settings/parser";
import { SettingsSuggester } from "../../embeddedModeImpl/settings/suggester";
import { LanguageMode } from '../../languageModes';
import { QRunesDocumentRegions } from '../../embeddedSupport';
import { TextDocumentPositionParams } from 'vscode-languageserver';

export function getSettingsMode(documentRegions: LanguageModelCache<QRunesDocumentRegions>): LanguageMode {
	
	let embeddedSettingsDocuments = getLanguageModelCache<TextDocument>(10, 60, document => documentRegions.get(document).getEmbeddedDocument('settings'));
	let compilationTool: CompilationTool = new CompilationTool(new SettingsParser(), new SettingsSuggester());

	return {
		getId() {
			return 'settings';
		},
		doValidation(document: TextDocument) {
			let embedded = embeddedSettingsDocuments.get(document);
			return compilationTool.validateDocument(embedded);
		},
		doComplete(document: TextDocument, embeddedPosition: Position) {
			let embedded = embeddedSettingsDocuments.get(document);
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
			embeddedSettingsDocuments.onDocumentRemoved(document);
		},
		dispose() {
			embeddedSettingsDocuments.dispose();
		}
	};
}