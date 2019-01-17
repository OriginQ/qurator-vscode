/**
 * This ts file provides all modes in qrunes language, include the interface languagemode,
 * setting, language modes, and function get language modes.
 */
'use strict';

import { getLanguageService as getQRunesLanguageService } from '../qrunes/qrunesLanguageService';
import {
	CompletionItem, TextDocument, Diagnostic, Range,
	Hover, DocumentHighlight, CompletionList, Position
} from 'vscode-languageserver-types';
import { getSettingsMode } from './settingsMode';
import { getQcodesMode } from './qcodesMode';
import { getPyScriptMode } from './pyScriptMode';
import { getCppScriptMode } from './cppScriptMode';
import { getLanguageModelCache, LanguageModelCache } from '../languageModelCache';
import { getDocumentRegions, QRunesDocumentRegions } from './embeddedSupport';
import { getQRunesMode } from './qrunesMode';

export interface Settings {
    qrunes?: any;
    settings?: any;
    qcode?: any;
	pyscript?: any;
	cppscript?: any
}

export interface LanguageMode {
	getId(): string;
	doValidation?: (document: TextDocument, settings?: Settings) => Diagnostic[];
	doComplete?: (document: TextDocument, position: Position, settings?: Settings) => CompletionList;
	doResolve?: (item: CompletionItem) => CompletionItem;
	doHover?: (document: TextDocument, position: Position) => Hover | null;
	findDocumentHighlight?: (document: TextDocument, position: Position) => DocumentHighlight[];
	onDocumentRemoved(document: TextDocument): void;
	dispose(): void;
}

export interface LanguageModes {
	getModeAtPosition(document: TextDocument, position: Position): LanguageMode | undefined;
	getModesInRange(document: TextDocument, range: Range): LanguageModeRange[];
	getAllModes(): LanguageMode[];
	getAllModesInDocument(document: TextDocument): LanguageMode[];
	getMode(languageId: string): LanguageMode | undefined;
	onDocumentRemoved(document: TextDocument): void;
	dispose(): void;
}

export interface LanguageModeRange extends Range {
    mode: LanguageMode | undefined;
}

export function getLanguageModes(supportedLanguages:  { [languageId: string]: boolean; }): LanguageModes {
	var qrunesLanguageService = getQRunesLanguageService();
	// Get document regions, include get, onDocumentRemoved, dispose method. 
    let documentRegions = getLanguageModelCache<QRunesDocumentRegions>(10, 60, document => getDocumentRegions(qrunesLanguageService, document));

    let modelCaches: LanguageModelCache<any>[] = [];
	modelCaches.push(documentRegions);
	
	// Get modes, include qrunes, settings, qcodes, pyscript, cppscript.
    let modes = Object.create(null);
	modes['qrunes'] = getQRunesMode(qrunesLanguageService);
	if (supportedLanguages['settings']) {
		modes['settings'] = getSettingsMode(documentRegions);
    }
    if (supportedLanguages['qcodes']) {
		modes['qcodes'] = getQcodesMode(documentRegions);
    }
    if (supportedLanguages['pyscript']) {
		modes['pyscript'] = getPyScriptMode(documentRegions);
	}
	if (supportedLanguages['cppscript']) {
		modes['cppscript'] = getCppScriptMode(documentRegions);
	}
    return {
		// Get mode base on position.
		getModeAtPosition(document: TextDocument, position: Position): LanguageMode | undefined {
			// Get language id, find the mode base on language id.
			let languageId = documentRegions.get(document).getLanguageAtPosition(position);
			if (languageId) {
				return modes[languageId];
			}
			return void 0;
		},
		// Get modes base on range.
        getModesInRange(document: TextDocument, range: Range): LanguageModeRange[] {
			return documentRegions.get(document).getLanguageRanges(range).map(r => {
				return <LanguageModeRange> {
					start: r.start,
					end: r.end,
					mode: r.languageId && modes[r.languageId]
				};
			});
		},
		// Get all modes in document regions
        getAllModesInDocument(document: TextDocument): LanguageMode[] {
			let result = [];
			// Get language id, find all modes base on language id.
			for (let languageId of documentRegions.get(document).getLanguagesInDocument()) {
				let mode = modes[languageId];
				if (mode) {
					result.push(mode);
				}
			}
			return result;
        },
        getAllModes(): LanguageMode[] {
			let result = [];
			for (let languageId in modes) {
				let mode = modes[languageId];
				if (mode) {
					result.push(mode);
				}
			}
			return result;
		},
		getMode(languageId: string): LanguageMode {
			return modes[languageId];
		},
		onDocumentRemoved(document: TextDocument) {
			modelCaches.forEach(mc => mc.onDocumentRemoved(document));
			for (let mode in modes) {
				modes[mode].onDocumentRemoved(document);
			}
		},
		dispose(): void {
			modelCaches.forEach(mc => mc.dispose());
			modelCaches = [];
			for (let mode in modes) {
				modes[mode].dispose();
			}
			modes = {};
		}
	};
}