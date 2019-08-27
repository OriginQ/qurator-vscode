/**
 * This ts file provides the mode's base function, includes validation, completion, hover and etc.
 */
'use strict';

import {
    CompletionItem,
    Diagnostic,
    DiagnosticSeverity,
    TextDocument,
    CompletionList,
    TextDocumentPositionParams,
    Location
} from 'vscode-languageserver/lib/main';
import { Parser, Suggester, ParserError, ParseErrorLevel } from './types';
import { Position, Hover, Range, MarkedString } from 'vscode-languageserver-types';
import { SuggestionSymbolAdapter } from './tools/suggestionSymbolAdapter';
import { CodeAndPosition, specificSymbol } from './types';
import * as path from 'path';
import * as fs from "fs";

export class CompilationTool {
    currentDocument: TextDocument = null;
    currentSuggestions: CompletionItem[] = [];

    constructor(private parser: Parser, private suggester: Suggester) {}

    // Validations of modes(settings, qcodes) depends on antlr, return errors. 
    validateDocument(document: TextDocument): Diagnostic[] {
        this.currentDocument = document;

        let result = this.parser.parse(document.getText());
        return this.launchCompilationErrors(result.errors);
    }

    // Automatic completion of modes, return CompletionList(contains isIncomplete and suggestions)
    availableCompletions(documentPosition: TextDocumentPositionParams): CompletionList {
        
        let resultNull: CompletionList = { isIncomplete: false, items: [] };
        
        if (this.currentDocument === null) {
            return resultNull;
        }

        let textToCaret = this.currentDocument.getText()
            .substring(0, this.currentDocument.offsetAt(documentPosition.position)-1);

        this.currentSuggestions = this.suggester
            .calculateSuggestionsFor(textToCaret)
            .map(SuggestionSymbolAdapter.toCompletionItem());

        let suggestions: CompletionItem[] = this.currentSuggestions;
        let result: CompletionList = { isIncomplete: false, items:suggestions };

        return result;
    }

    // Completion details of modes.
    completionDetailsFor(item: CompletionItem): CompletionItem {
        let searchedSymbol = this.getCompletionSymbolFor(item);

        item.detail = searchedSymbol.detail;
        item.documentation = searchedSymbol.documentation;

        return item;
    }

    // Hover function of modes, return the range and contents.
    doHover(document: TextDocument, position: Position): Hover | null { 
        if (this.currentDocument === null) {
            return null;
        }

        let offset = document.offsetAt(position);
        let codeAndPosition = this.findNode(offset, document);

        this.currentSuggestions = this.suggester.availableSymbols();
        for (let s of this.currentSuggestions) {
            if (s.label == codeAndPosition.code) {
                let str: string = ""
                if (typeof s.documentation == 'string'){
                    str = s.documentation
                } else {
                    str += s.documentation.toString
                }
                return {
                    range: Range.create(document.positionAt(codeAndPosition.start+1), document.positionAt(codeAndPosition.end)),
                    contents: [{ language: 'qrunes', value: codeAndPosition.code }, MarkedString.fromPlainText(str)]
                };    
            }
        }

        return null; 
    }

    findDefinition(document: TextDocument, position: Position): Location | null {
        let offset = document.offsetAt(position);
        let codeAndPosition = this.findNode(offset, document);
        let defName = codeAndPosition.code;
        let uri = null;
        let flag = false;
        let line = 0;

        let symbolTable = this.suggester.getSymbolTable(document.getText());
        if (symbolTable.currentScopes != null) {
            for (let curScope of symbolTable.currentScopes) {
                if (curScope.name.includes("_method")) {
                    if (defName == curScope.name.substring(0, curScope.name.length-7)) {
                        uri = document.uri;
                        line = curScope.startLine;
                        flag = true;
                        break;
                    }

                    if (!flag && curScope.dictionary != null && curScope.dictionary.size > 0) {
                        curScope.dictionary.forEach((value, key) =>{
                            if (defName == key) {
                                uri = document.uri;
                                line = value[0].startLine-1;
                                flag = true;
                            }
                        });
                    }
                }
                
                if (!flag && curScope.name.includes("include_")) {
                    let fileUri = curScope.name.substring(8);
                    let newUri = path.resolve(fileUri);
                    let newFilePath = this.transFilePath(document.uri, newUri);
                    let newInput = fs.readFileSync(newUri, 'utf-8');
                    if (newInput != null) {
                        let newSymbolTable = this.suggester.getSymbolTable(newInput);
                        if (newSymbolTable.currentScopes != null) {
                            for (let curScope of newSymbolTable.currentScopes) {
                                if (curScope.name.includes("_method")) {
                                    if (defName == curScope.name.substring(0, curScope.name.length-7)) {
                                        uri = newFilePath;
                                        line = curScope.startLine;
                                        flag = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                } 
            }
        };

        if (uri != null && line != 0) {
            return {
                uri: uri,
                range: Range.create(line-1, 0, line-1, 0)
            };
        } else {
            return null;
        }
	}

    private getCompletionSymbolFor(item: CompletionItem): CompletionItem {
        let isSameData = (symbol: CompletionItem) => symbol.label === item.label;

        let availableOptions = this.currentSuggestions.filter(isSameData);

        if (availableOptions.length < 1) {
            return {
                label: item.label,
                detail: '',
                documentation: ''
            };
        }

        return availableOptions[0];
    }

    private launchCompilationErrors(errors: ParserError[]): Diagnostic[] {
        let diagnostics: Diagnostic[] = [];
        errors.forEach(error => {
            diagnostics.push(this.errorToDiagnostics(error));
        });

        return diagnostics;
    }

    private errorToDiagnostics(error: ParserError) {
        return {
            severity: error.level === ParseErrorLevel.ERROR ? DiagnosticSeverity.Error : DiagnosticSeverity.Warning,
            range: {
                start: {
                    line: error.line,
                    character: error.start
                },
                end: {
                    line: error.line,
                    character: error.end
                }
            },
            message: error.message,
            source: 'ex'
        };
    }

    private findNode(offset: number, document: TextDocument) : CodeAndPosition {
        let codeMinArr: string[] = [];
        let startCode: number = 0;
        let endCode: number = 0;
        for (let i = 1; i <= offset; i++) {
            let rangeMin = Range.create(document.positionAt(offset-i), document.positionAt(offset-i+1));
            let strMin = document.getText(rangeMin);
            if (strMin in specificSymbol) {
                startCode = offset - i;
                break;
            }
            codeMinArr.push(strMin);
        }

        let codeMax: string = "";
        for (let j = 0; j <= 100; j++) {
            let rangeMax = Range.create(document.positionAt(offset+j), document.positionAt(offset+j+1));
            let strMax = document.getText(rangeMax);
            if (strMax in specificSymbol) {
                endCode = offset + j;
                break;
            }
            codeMax += strMax;
        }

        let codeMin:string = "";
        if (codeMinArr != null) {
            for(let k = codeMinArr.length-1; k >= 0; k--) {
                codeMin += codeMinArr[k];
            }
        }        
        return { 
            code: codeMin + codeMax,
            start: startCode,
            end: endCode
        }

    }

    private transFilePath(uri: string, newUri: string): string{
        let index = uri.indexOf("/", 8);
        let subUri = uri.substring(0, index);
        let subNewUri = newUri.substring(newUri.indexOf("\\"), newUri.length);
        let newFilePath: string = "";
        let subNewUris = subNewUri.split("\\");
        for (let i=0; i<subNewUris.length; i++) {
            if (i == 0) {
                newFilePath = "/";
            } else if (i == subNewUris.length-1) {
                newFilePath += subNewUris[subNewUris.length-1];
            } else {
                newFilePath += subNewUris[i] + "/"
            }
        }
        return subUri + newFilePath;
    }
}
