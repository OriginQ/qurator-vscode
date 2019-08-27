/**
 * This TS file provides registerCommands、checkDependencies
 */
import * as vscode from "vscode";
import * as Q from "q";
import { Util } from './utils';
import { DependencyMgr } from './dependencies/dependencyMgr';
import { qrunesVSCodeConfiguration } from './configuration';
import { PackageInfo } from './interfaces';
import { CommandExecutor } from './commandExecutor';
import { ResultProvider } from './resultProvider';
import { VizManager } from './visualizations';
import {QLogger} from "./logger";
import { PackageManager } from './packages/packageManager';
import { ChildProcessCommandExecutor } from './pip/pipCommandExecutor';
import { PipExecutor } from './pip/pipExecutor';
import { PyPiExecutor } from './pip/pypiExecutor';
export namespace ActivationUtils {
    export function setTheme(): Q.Promise<string> {
        return Q.Promise((resolve, reject) => {
            try {
                let config = vscode.workspace.getConfiguration('workbench');
                let theme = config.get('colorTheme');

                let editor = vscode.workspace.getConfiguration('editor');
                let tab:boolean = editor.get("insertSpaces");

                if (tab == false) {
                    vscode.workspace
                        .getConfiguration('editor')
                        .update('insertSpaces', true, vscode.ConfigurationTarget.Global)
                }

                if (theme == "Default Dark+")  {
                    vscode.workspace
                        .getConfiguration('workbench')
                        .update('colorTheme', "QRunes Dark", vscode.ConfigurationTarget.Global)
                        .then(() => {
                            return resolve(true);
                        });
                } else if (theme == "Default Light+")  {
                    vscode.workspace
                        .getConfiguration('workbench')
                        .update('colorTheme', "QRunes Light", vscode.ConfigurationTarget.Global)
                        .then(() => {
                            return resolve(true);
                        });
                } else {
                    return resolve(false);
                }
            } catch (err) {
                return reject('Error modifying the flag for the theme of the extension');
            }
        });
    }

    //Register Commands
    export function registerCommands(context: vscode.ExtensionContext) {
       
        const executeQRUNESScript = Util.getOSDependentPath('../../client/resources/qrunesScripts/generationFile.py');
        context.subscriptions.push(
            vscode.commands.registerCommand('qurator-vscode.checkDependencies',()=>
                ActivationUtils.checkDependencies(true)
            ),
            //Run Python File
            vscode.commands.registerCommand('qurator-vscode.runPythonCode', () =>
                CommandExecutor.execPythonActiveEditor().then(codeResult => {
                    let resultProvider = new ResultProvider();
                    vscode.workspace.registerTextDocumentContentProvider('qrunes-preview-result', resultProvider);
                    let previewUri = vscode.Uri.parse(`qrunes-preview-result://authority/result-preview`);
                    // const codeFile = vscode.window.activeTextEditor.document;
                    // codeFile.save();
                    resultProvider.displayContent(
                        VizManager.createViz(codeResult),
                        previewUri
                    );
                    vscode.commands
                        .executeCommand(
                            'vscode.previewHtml',
                            previewUri,
                            vscode.ViewColumn.Two,
                            'Execution result - QRUNES'
                        )
                        .then(
                            _success => {},
                            reason => {
                                QLogger.error(`Error: ${reason}`, this);
                                vscode.window.showErrorMessage(reason);
                            }
                        );
                })
            ),
            //Run QRUNES File 
            vscode.commands.registerCommand('qurator-vscode.runQRunesCode', () =>
                CommandExecutor.execQrunesActiveEditor(executeQRUNESScript).then(codeResult => {
                    // let execPath = Util.getOSDependentPath(executeQRUNESScript);
                    const panel = vscode.window.createWebviewPanel(
                        'ExecutionResultQRUNES', // Identifies the type of the webview. Used internally
                        'Execution result - QRUNES', // Title of the panel displayed to the user
                        vscode.ViewColumn.Two, // Editor column to show the new webview panel in.
                        {
                            enableScripts: true,
                            retainContextWhenHidden: true
                        } // Enable JS & retain context
                    );
                    // And set its HTML content
                    panel.webview.html = VizManager.createViz(codeResult);
                })
            ),
        )
    }
    export function showInfoBubbles(verbose: boolean | false): Q.Promise<string> {
        return Q.Promise((resolve, reject) => {
            try {
                if (verbose === true) {
                    return resolve(true);
                } else {
                    return resolve(false);
                }
            } catch (err) {
                return reject('Error getting the displayBootInfo flag');
            }
        });
    }
    
    export function showExtensionBootInfo(message: string, verbose: boolean | false) {
        showInfoBubbles(verbose).then(result => {
            if (result === true) {
                vscode.window.showInformationMessage(message);
            } else {
                QLogger.verbose(message, this);
            }
        });
    }
    //checkDependencies
    export function checkDependencies(verbose: boolean | false): Q.Promise<string> {
       
        let depMgr = new DependencyMgr();
        return Q.Promise((resolve, reject) => {
            return depMgr
                .checkDependencies()
                .then(deps => {
                    QLogger.verbose('Checking for Python dependencies...', this);
                    // vscode.window.showInformationMessage("Checking for Python dependencies...");
                    let depsList = '';
                    deps.forEach(dep => {
                        QLogger.verbose(`Package: ${dep.name} Version: ${dep.installedVersion}`, this);
                        depsList += `👌 ${dep.name} v ${dep.installedVersion}\n`;
                    });
                    showExtensionBootInfo(`Qurator VSCode Extension dependencies found! ${depsList}`, verbose);
                    // Check for pyhton packages!
                })
                .then(() => {
                    QLogger.verbose('Check for required python packages...', this);
                    // vscode.window.showInformationMessage("Checking for required python packages...");

                    let commandExecutor = new ChildProcessCommandExecutor();
                    let pipExecutor = new PipExecutor(commandExecutor);
                    let pypiExecutor = new PyPiExecutor();
                    let packageManager = new PackageManager(pipExecutor, pypiExecutor);

                    let notInstalled = (packageInfo: PackageInfo) =>
                        QLogger.info(`Go to install ${packageInfo.name}`, this);
                    let oldVersion = (packageInfo: PackageInfo) =>
                        QLogger.info(`Go to update ${packageInfo.name}`, this);

                    packageManager.verifyAndApply(
                        qrunesVSCodeConfiguration.requiredPackages(),
                        notInstalled,
                        oldVersion
                    );
                    return resolve();
                })
                .catch(error => {
                    QLogger.error(`Seems like there was a problem: ${error}`, this);
                    vscode.window.showErrorMessage(`Seems like there was a problem: ${error}`);
                    return reject(error);
                });
        });
    }
}