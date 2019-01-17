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
    TextDocumentPositionParams
} from 'vscode-languageserver/lib/main';
import { Parser, Suggester, ParserError, ParseErrorLevel } from './types';
import { Position, Hover, Range, MarkedString } from 'vscode-languageserver-types';
import { SuggestionSymbolAdapter } from './tools/suggestionSymbolAdapter';
import { CodeAndPosition, specificSymbol } from './types';

export class CompilationTool {
    currentDocument: TextDocument = null;
    currentSuggestions: CompletionItem[] = [];

    constructor(private parser: Parser, private suggester: Suggester) {}

    // Validations of python mode depends on antlr, return errors. 
    validateDocument(document: TextDocument): Diagnostic[] {
        this.currentDocument = document;

        let result = this.parser.parse(document.getText());
        return this.launchCompilationErrors(result.errors);
    }

    // Automatic completion of mode, return CompletionList(contains isIncomplete and suggestions)
    availableCompletions(documentPosition: TextDocumentPositionParams): CompletionList {
        
        let resultNull: CompletionList = { isIncomplete: false, items: [] };
        
        if (this.currentDocument === null) {
            return resultNull;
        }

        let textToCaret = this.currentDocument.getText()
            .substring(0, this.currentDocument.offsetAt(documentPosition.position));

        this.currentSuggestions = this.suggester
            .calculateSuggestionsFor(textToCaret)
            .map(SuggestionSymbolAdapter.toCompletionItem());

        let suggestions: CompletionItem[] = this.currentSuggestions;
        let result: CompletionList = { isIncomplete: false, items:suggestions };

        return result;
    }

    // Completion details of mode.
    completionDetailsFor(item: CompletionItem): CompletionItem {
        let searchedSymbol = this.getCompletionSymbolFor(item);

        item.detail = searchedSymbol.detail;
        item.documentation = searchedSymbol.documentation;

        return item;
    }

    // Hover function of mode, return the range and contents.
    doHover(document: TextDocument, position: Position): Hover | null { 
        if (this.currentDocument === null) {
            return null;
        }

        let offset = document.offsetAt(position);
        let codeAndPostion = this.findNode(offset, document);

        this.currentSuggestions = this.suggester.availableSymbols();
        for (let s of this.currentSuggestions) {
            if (s.label == codeAndPostion.code) {
                let str: string = ""
                if (typeof s.documentation == 'string'){
                    str = s.documentation
                } else {
                    str += s.documentation.toString
                }
                return {
                    range: Range.create(document.positionAt(codeAndPostion.start+1), document.positionAt(codeAndPostion.end)),
                    contents: [{ language: 'qrunes', value: codeAndPostion.code }, MarkedString.fromPlainText(str)]
                };    
            }
        }

        return null;  
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
}
