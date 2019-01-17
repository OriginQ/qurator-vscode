/**
 * This TS file provides vscode Entrance
 */
'use strict';

import * as path from 'path';
import { workspace, ExtensionContext, window } from 'vscode';
import  {ActivationUtils}  from "./activationUtils";
import {QLogger} from "./logger";
import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	ActivationUtils.setTheme();
	// The server is implemented in node
	let serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);
	// The debug options for the server
	// --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
	let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	let serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: debugOptions
		}
	};

	let embeddedLanguages = { settings: true, qcodes: true, pyscript: true, cppscript: true };

	// Options to control the language client
	let clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{ scheme: 'file', language: 'qrunes' }],
		synchronize: {
			configurationSection: ['qrunes', 'settings', 'qcodes', 'pyscript', 'cppscript'], 
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		},
		initializationOptions: {
			embeddedLanguages
		}
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'qrunes',
		'QRunes Project',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	client.start();
	ActivationUtils.showExtensionBootInfo('✨ Activating qurator-vscode extension... ✨', false);
	ActivationUtils.registerCommands(context);

    ActivationUtils.checkDependencies(false)
        .then(() => {
            QLogger.verbose('qurator-vscode extension successfully loaded!', this);
            ActivationUtils.showExtensionBootInfo('🚀 qurator-vscode extension loaded! 🚀', false);
        })
        .catch(err => {
            QLogger.error(`Dependencies error: ${err}`, this);
            window.showErrorMessage(err);
        });
}

export function deactivate(): Thenable<void> {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
