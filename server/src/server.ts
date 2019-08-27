'use strict';

import {
	createConnection,
	TextDocuments,
	TextDocument,
	Diagnostic,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	ConfigurationParams,
	ConfigurationRequest,
	InitializeResult,
	DiagnosticSeverity
} from 'vscode-languageserver';
import { getLanguageModes, LanguageModes, Settings } from './qrunesModes/languageModes';
import { runSafe, runSafeAsync } from './tools/runner';
import { pushAll } from './tools/arrays';

// Get language modes from qrunesModes package
let languageModes: LanguageModes;
let documentSettingss: { [key: string]: Thenable<Settings> } = {};

// Create a connection for the server. 
let connection = createConnection(ProposedFeatures.all);

// Create a document manager.
let documents: TextDocuments = new TextDocuments();

let hasConfigurationCapability: boolean = false;

function getDocumentSettings(textDocument: TextDocument,  needsDocumentSettings: () => boolean): Thenable<Settings | undefined> {
	if (needsDocumentSettings()) {
		let promise = documentSettingss[textDocument.uri];
		if (!promise) {
			const scopeUri = textDocument.uri;
			const configRequestParam: ConfigurationParams = { items: [{ scopeUri, section: 'settings' }, { scopeUri, section: 'qrunes' }, 
															{ scopeUri, section: 'qcodes' }, { scopeUri, section: 'pyscript' }, { scopeUri, section: 'cppscript' }]};
			promise = connection.sendRequest(ConfigurationRequest.type, configRequestParam).then(s => ({ settings: s[0], qrunes: s[1], qcodes: s[2] , pyscript: s[3], cppscript: s[4] }));
			documentSettingss[textDocument.uri] = promise;
		}
		return promise;
	}
	return Promise.resolve(void 0);
}

// Initialization, get langauge modes.
connection.onInitialize((params: InitializeParams): InitializeResult=> {
	let capabilities = params.capabilities;
	
	hasConfigurationCapability =
		capabilities.workspace && !!capabilities.workspace.configuration;

	const initializationOptions = params.initializationOptions;
	// Get language modes, include settings, qcodes, pyscript, cppscript.
	languageModes = getLanguageModes(initializationOptions ? initializationOptions.embeddedLanguages : { settings: true, qcodes: true, pyscript: true, cppscript: true });
	
	documents.onDidClose(e => {
		languageModes.onDocumentRemoved(e.document);
	});

	connection.onShutdown(() => {
		languageModes.dispose();
	});

	return {
		// Tell the client that the server supports the function.
		capabilities: {
			textDocumentSync: documents.syncKind,	
			completionProvider: {	
				resolveProvider: true,	
			},
			hoverProvider: true,
			documentHighlightProvider: true,
			definitionProvider: true,
			//codeActionProvider: true		
		}
	};
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(
			DidChangeConfigurationNotification.type,
			undefined
		);
	}
});

// The qrunes settings.
interface QRunesSettings {
	maxNumberOfProblems: number;
}

// Cache the settings of all open documents.
let documentSettings: Map<string, Thenable<QRunesSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings.
		documentSettings.clear();
	}

	// Revalidate all open text documents.
	documents.all().forEach(triggerValidation);
});

const pendingValidationRequests: { [uri: string]: NodeJS.Timer } = {};
const validationDelayMs = 0;

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	triggerValidation(change.document);
});

// a document has closed: clear all diagnostics
documents.onDidClose(event => {
	cleanPendingValidation(event.document);
	connection.sendDiagnostics({ uri: event.document.uri, diagnostics: [] });
});

function cleanPendingValidation(textDocument: TextDocument): void {
	const request = pendingValidationRequests[textDocument.uri];
	if (request) {
		clearTimeout(request);
		delete pendingValidationRequests[textDocument.uri];
	}
}

function triggerValidation(textDocument: TextDocument): void {
	cleanPendingValidation(textDocument);
	pendingValidationRequests[textDocument.uri] = setTimeout(() => {
		delete pendingValidationRequests[textDocument.uri];
		validateTextDocument(textDocument);
	}, validationDelayMs);
}

// This handler provides the validation of document region.
async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	try {
		const version = textDocument.version;
		const diagnostics: Diagnostic[] = [];
		if (textDocument.languageId === 'qrunes') {
			let diagnosticsIndex: Diagnostic[] = getQrunesValidation(textDocument);
			if(diagnosticsIndex.length > 0) {
				for (let c of diagnosticsIndex) {
					if (c != null) {
						diagnostics.push(c);
					}
				}
			}
			const modes = languageModes.getAllModesInDocument(textDocument);
			const settings = await getDocumentSettings(textDocument, () => modes.some(m => !!m.doValidation));
			const latestTextDocument = documents.get(textDocument.uri);
			if (latestTextDocument && latestTextDocument.version === version) { // check no new version has come in after in after the async op.
				modes.forEach(mode => {
					if (mode.doValidation) {
						pushAll(diagnostics, mode.doValidation(latestTextDocument, settings));
					}
				});
				connection.sendDiagnostics({ uri: latestTextDocument.uri, diagnostics });
			}

			
		}
	} catch (e) {
		//connection.console.error(formatError(`Error while validating ${textDocument.uri}`, e));
	}
}

// This handler provides the initial list of the completion items.
connection.onCompletion(async (textDocumentPosition, token) => {
	return runSafeAsync(async () => {
		const document = documents.get(textDocumentPosition.textDocument.uri);
		if (!document) {
			return null;
		}
		const mode = languageModes.getModeAtPosition(document, textDocumentPosition.position);
		if (!mode || !mode.doComplete) {
			return { isIncomplete: true, items: [] };
		}
		const doComplete = mode.doComplete!;

		if (mode.getId() !== 'qrunes') {
			connection.telemetry.logEvent({ key: 'qrunes.embbedded.complete', value: { languageId: mode.getId() } });
		}

		const settings = await getDocumentSettings(document, () => doComplete.length > 2);
		const result = doComplete(document, textDocumentPosition.position, settings);
		return result;

	}, null, `Error while computing completions for ${textDocumentPosition.textDocument.uri}`, token);
});

// This handler resolve additional information for the item selected in the completion list.
connection.onCompletionResolve((item, token) => {
	return runSafe(() => {
		const data = item.data;
		if (data && data.languageId) {
			const mode = languageModes.getMode(data.languageId);
			if (mode && mode.doResolve) {
				return mode.doResolve(item);
			}
		}
		return item;
	}, item, `Error while resolving completion proposal`, token);
});

connection.onDocumentHighlight((documentHighlightParams, token) => {
	return runSafe(() => {
		const document = documents.get(documentHighlightParams.textDocument.uri);
		if (document) {
			const mode = languageModes.getModeAtPosition(document, documentHighlightParams.position);
			if (mode && mode.findDocumentHighlight) {
				return mode.findDocumentHighlight(document, documentHighlightParams.position);
			}
		}
		return [];
	}, [], `Error while computing document highlights for ${documentHighlightParams.textDocument.uri}`, token);
});

// This handler provides the hover function base on document position.
connection.onHover((textDocumentPosition, token) => {
	return runSafe(() => {
		const document = documents.get(textDocumentPosition.textDocument.uri);
		if (document) {
			const mode = languageModes.getModeAtPosition(document, textDocumentPosition.position);
			if (mode && mode.doHover) {
				return mode.doHover(document, textDocumentPosition.position);
			}
		}
		return null;
	}, null, `Error while computing hover for ${textDocumentPosition.textDocument.uri}`, token);
});

// This handler provides the go to definition function base on document position.
connection.onDefinition((definitionParams, token) => {
	return runSafe(() => {
		const document = documents.get(definitionParams.textDocument.uri);
		if (document) {
			const mode = languageModes.getModeAtPosition(document, definitionParams.position);
			if (mode && mode.findDefinition) {
				return mode.findDefinition(document, definitionParams.position);
			}
		}
		return [];
	}, null, `Error while computing definitions for ${definitionParams.textDocument.uri}`, token);
});

// This handler provides the go to definition function base on document position.
// connection.onCodeAction((codeActionParams, cancellationToken) => {
// 	return runSafe(() => {
// 		const document = documents.get(codeActionParams.textDocument.uri);
// 		if (document) {
// 			const mode = languageModes.getMode("qcodes");
// 			if (mode && mode.codeAction) {
// 				return mode.findDefinition(document, );
// 			}
// 		}
// 		return null;
// 	}, null, `Error while computing codeAction for ${codeActionParams.textDocument.uri}`, cancellationToken);
// });

function getQrunesValidation(textDocument: TextDocument): Diagnostic[] {
	let diagnostics: Diagnostic[] = []; 
	var pattern1 = /\@\s*settings\s*\:/g;
	var pattern2 = /\@\s*qcodes\s*\:/g;
	var pattern3 = /\@\s*script\s*\:/g;
	diagnostics.push(getIndexValidation(textDocument, pattern1));
	diagnostics.push(getIndexValidation(textDocument, pattern2));
	diagnostics.push(getIndexValidation(textDocument, pattern3));
	return diagnostics;
}

function getIndexValidation(textDocument: TextDocument, pattern: RegExp): Diagnostic {
	var text = textDocument.getText();
	var m;
	var count: number = 0;
	let diagnosic: Diagnostic = null;
	while (m = pattern.exec(text)) {
		if (count++ > 0) {
			diagnosic = {
				severity: DiagnosticSeverity.Error,
				range: {
					start: textDocument.positionAt(m.index),
					end: textDocument.positionAt(m.index + m[0].length)
				},
				message: `${m[0]} is previously defined.`,
				source: 'ex'
			};
		}
	}
	return diagnosic;
}

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
