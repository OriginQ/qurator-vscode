/**
 * This TS file provides exec utils.
 */

import * as Q from 'q';
import * as vscode from 'vscode';
import * as nodeChildProcess from 'child_process';
import { Util } from './utils';
import { QLogger } from './logger';



export namespace CommandExecutor {
    // Run Script code 
    const iconv = require('iconv-lite');
    export function exec(command: string, args: string[] = []): Q.Promise<string> {
        let outcome = Q.defer<string>();

        nodeChildProcess.exec(
            command + ' ' + args.join(' '),
            { encoding: 'buffer' },
            (error: Error, stdout: string, stderr: string) => {
                if (error) {
                    // Dirty trick, read below.
                    let errorString = iconv.decode(stdout, 'cp936') + iconv.decode(stderr, 'cp936');
                    vscode.window.showErrorMessage(errorString)
                    // console.log(errorString)
                    outcome.reject(errorString);
                } else {
                    let outputString = iconv.decode(stdout, 'cp936');
                    // vscode.window.showInformationMessage(outputString)
                    // console.log(outputString)
                    outcome.resolve(outputString);
                }
            }
        );

        return outcome.promise;
    }
    //Run Script File
    export function execFile(command: string, args: string[] = []): Q.Promise<string> {
        let outcome = Q.defer<string>();

        nodeChildProcess.execFile(
            command,
            {cwd:args.join(' ')},
            (error: Error, stdout: string, stderr: string) => {
                if (error) {
                    let errorString = stdout + stderr;
                    outcome.reject(errorString);
                } else {
                    let outputString = stdout;
                    outcome.resolve(outputString);
                }
            }
        );
        return outcome.promise;
    }
   
    export function execPythonActiveEditor(): Q.Promise<string> {
        return Q.Promise((resolve, reject) => {
            vscode.window.showInformationMessage('⚡ Running... ⚡');
            const codeFile = vscode.window.activeTextEditor.document;
            codeFile.save();
            CommandExecutor.exec('python', [codeFile.fileName.toString()])
                .then(stdout => {
                    return resolve(stdout);
                })
                .catch(err => {
                    QLogger.error(err, this);
                    vscode.window.showErrorMessage(err);
                    return reject(err);
                });
        });
    }
    export function execQrunesActiveEditorTwo(scriptPath: string): Q.Promise<string> {
        const scriptsPath = Util.getOSDependentPath('../../client/resources/qrunesScripts');
        return Q.Promise((resolve, reject) => {
            const execPath = Util.getOSDependentPath(scriptPath);
            vscode.window.showInformationMessage('⚡ Running... ⚡');
            const codeFile = vscode.window.activeTextEditor.document;
            const path = require("path");
            codeFile.save();
            vscode.workspace.openTextDocument(execPath).then(document => {
                CommandExecutor.exec('python', [document.fileName.toString(), '--file', codeFile.fileName.toString()])
                    .then(stdout => {
                        const data = stdout.split('\n')
                        const languageType = data[0].replace(/^\s+/, '').replace(/\s+$/, '');
                        const isOnlyCompile = data[1].replace(/^\s+/, '').replace(/\s+$/, '')
                        const file_path = codeFile.fileName.toString();
                        if('Python'==languageType && isOnlyCompile=='False'){
                            const generate_file_path ="\\"+path.basename(path.basename(file_path),path.extname(path.basename(file_path)))+"_python";
                            CommandExecutor.exec('python', [path.dirname(file_path)+generate_file_path+'\\script.py'])
                            .then(stdout => {
                                vscode.window.showInformationMessage('👌  Run Successfully');
                                return resolve(stdout);
                            })
                            .catch(err => {
                                QLogger.error(err, this);
                                vscode.window.showErrorMessage(err);
                                return reject(err);
                            });
                        }else if('C++'==languageType && isOnlyCompile=='False'){
                            const generate_file_path ="\\"+path.basename(path.basename(file_path),path.extname(path.basename(file_path)))+"_cpp";
                            CommandExecutor.execFile('sh.bat',[scriptsPath])
                            .then(() => {
                                CommandExecutor.execFile('a.exe',[path.dirname(file_path)+generate_file_path])
                                .then(stdout => {
                                    vscode.window.showInformationMessage('👌  Run Successfully');
                                    return resolve(stdout);
                                })
                            })
                            .catch(err => {
                                QLogger.error(err, this);
                                vscode.window.showErrorMessage(err);
                                return reject(err);
                            });
                        }else if(isOnlyCompile=='True'){
                           vscode.window.showInformationMessage('👌  Compile Successfully');
                        }
                        
                        
                    })
                    .catch(err => {
                        QLogger.error(err, this);
                        vscode.window.showErrorMessage(err);
                        return reject(err);
                    });
                   
            });
        });
    }

    export function execQrunesQrunesActiveEditor(scriptPath: string): Q.Promise<string> {
        return Q.Promise((resolve, reject) => {
            const execPath = Util.getOSDependentPath(scriptPath);

            vscode.window.showInformationMessage('⚡ Running... ⚡');
            const codeFile = vscode.window.activeTextEditor.document;
            codeFile.save();

            vscode.workspace.openTextDocument(execPath).then(document => {
                CommandExecutor.exec('python', [document.fileName.toString(), '--file', codeFile.fileName.toString()])
                    .then(stdout => {
                        //console.log(stdout);
                        return resolve(stdout);
                    })
                    .catch(err => {
                        QLogger.error(err, this);
                        vscode.window.showErrorMessage(err);
                        return reject(err);
                    });
            });
        });
    }

    export function execPythonFile(scriptPath: string, options: string[]): Q.Promise<string> {
        return Q.Promise((resolve, reject) => {
            vscode.window.showInformationMessage('⚡ Running... ⚡');

            const execPath = Util.getOSDependentPath(scriptPath);

            vscode.workspace.openTextDocument(execPath).then(document => {
                CommandExecutor.exec('python', [document.fileName.toString()].concat(options))
                    .then(stdout => {
                        return resolve(stdout);
                    })
                    .catch(err => {
                        QLogger.error(err, this);
                        vscode.window.showErrorMessage(err);
                        return reject(err);
                    });
            });
        });
    }
}
