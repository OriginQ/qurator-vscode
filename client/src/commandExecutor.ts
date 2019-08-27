/**
 * This TS file provides exec utils.
 */

import * as Q from 'q';
import * as vscode from 'vscode';
import * as nodeChildProcess from 'child_process';
import { Util } from './utils';
import { QLogger } from './logger';


let process_node = null;
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
            {cwd:args.join(' '),encoding:'buffer'},
            (error: Error, stdout: string, stderr: string) => {
                if (error) {
                    let errorString = iconv.decode(stdout, 'cp936') + iconv.decode(stderr, 'cp936');
                    vscode.window.showErrorMessage(errorString)
                    outcome.reject(errorString);
                } else {
                    let outputString = iconv.decode(stdout, 'cp936');
                    outcome.resolve(outputString);
                }
            }
        );
        return outcome.promise;
    }
    export function terminalPython(command: string, args: string[] = []): Q.Promise<string> {
        let outcome = Q.defer<string>();
        const terminal = vscode.window.createTerminal();
        terminal.show();
        terminal.sendText(command+' '+args.join(' '));
        return outcome.promise;
    }
    
    export function terminalCpp(command: string, args: string[] = []): Q.Promise<string> {
        let outcome = Q.defer<string>();
        const terminal = vscode.window.createTerminal({cwd:args.join(' ')});
        terminal.show();
        terminal.sendText(command);
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
    export function execPython(command: string, args: string[] = []): Q.Promise<string> {
        let outcome = Q.defer<string>();
        process_node=nodeChildProcess.exec(
            command + ' ' + args.join(' '),
            { encoding: 'buffer' },
            (error: Error, stdout: string, stderr: string) => {
                if (error) {
                    // Dirty trick, read below.
                    let errorString = iconv.decode(stdout, 'cp936') + iconv.decode(stderr, 'cp936');
                    // vscode.window.showErrorMessage(errorString)
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
    export function execFileCpp(command: string, args: string[] = []): Q.Promise<string> {
        let outcome = Q.defer<string>();
        process_node = nodeChildProcess.execFile(
            command,
            {cwd:args.join(' '),encoding:'buffer'},
            (error: Error, stdout: string, stderr: string) => {
                if (error) {
                    let errorString = iconv.decode(stdout, 'cp936') + iconv.decode(stderr, 'cp936');
                    // vscode.window.showErrorMessage(errorString)
                    outcome.reject(errorString);
                } else {
                    let outputString = iconv.decode(stdout, 'cp936');
                    outcome.resolve(outputString);
                }
            }
        );
        return outcome.promise;
    }
    export function execQrunesActiveEditor(scriptPath: string): Q.Promise<string> {
        if(process_node){
            process_node.kill()
        }
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
                        const languageType = data[0].replace(/^\s+/, '').replace(/\s+$/, '').toLowerCase();
                        const isOnlyCompile = data[1].replace(/^\s+/, '').replace(/\s+$/, '');
                        // const sysType = data[2].replace(/^\s+/, '').replace(/\s+$/, '');
                        const file_path = codeFile.fileName.toString();
                       
                        if('python'==languageType && isOnlyCompile=='False'){
                          
                            const generate_file_path =path.sep+path.basename(path.basename(file_path),path.extname(path.basename(file_path)))+"_python";
                            CommandExecutor.terminalPython('python', [path.dirname(file_path)+generate_file_path+path.sep+'script.py']);
                            CommandExecutor.execPython('python', [path.dirname(file_path)+generate_file_path+path.sep+'script.py'])
                            .then(stdout => {
                                vscode.window.showInformationMessage('👌  Run Successfully');
                                return resolve(stdout);
                            })
                            .catch(err => {
                                QLogger.error(err, this);
                                // vscode.window.showErrorMessage(err);
                                return reject(err);
                            });
                        }else if('c++'==languageType && isOnlyCompile=='False'){
                            const generate_file_path =path.sep+path.basename(path.basename(file_path),path.extname(path.basename(file_path)))+"_cpp";
                            if(process.platform === 'win32'){
                                CommandExecutor.execFile('sh.bat',[scriptsPath])
                                .then(() => {
                                    CommandExecutor.terminalCpp('./a.exe',[path.dirname(file_path)+generate_file_path]);

                                    CommandExecutor.execFileCpp('./a.exe',[path.dirname(file_path)+generate_file_path])
                                    .then(stdout => {
                                        vscode.window.showInformationMessage('👌  Run Successfully');
                                        return resolve(stdout);
                                    })
                                })
                                .catch(err => {
                                    QLogger.error(err, this);
                                    // vscode.window.showErrorMessage(err);
                                    return reject(err);
                                });
                            }else{
                                CommandExecutor.exec('sh ',[scriptsPath+path.sep+'start.sh'])
                                .then(() => {
                                    CommandExecutor.terminalCpp('./a',[path.dirname(file_path)+generate_file_path]);
                                    CommandExecutor.execFileCpp('./a',[path.dirname(file_path)+generate_file_path])
                                    .then(stdout => {
                                        vscode.window.showInformationMessage('👌  Run Successfully');
                                        return resolve(stdout);
                                    })
                                })
                                .catch(err => {
                                    QLogger.error(err, this);
                                    // vscode.window.showErrorMessage(err);
                                    return reject(err);
                                });
                            }
                            
                        }else if(isOnlyCompile=='True'){
                           vscode.window.showInformationMessage('👌  Compile Successfully');
                        }else{
                            vscode.window.showErrorMessage(stdout);
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

}
