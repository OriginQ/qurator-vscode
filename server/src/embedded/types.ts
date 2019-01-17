/**
 * This ts file defines interface parser, suggester, SuggestionSymbolType and etc.
 */
'use strict';

export interface Parser {
    parse(input: string): ParserResult;
}

export interface Suggester {
    calculateSuggestionsFor(input: string): SuggestionSymbol[];
    availableSymbols(): SuggestionSymbol[];
}

export interface SuggestionSymbol {
    label: string;
    detail: string;
    documentation: string;
    type: string;
    parent: string;
    data:any;
}

export enum SuggestionSymbolType {
    method = 'method',
    class = 'class'
}

export interface ParserResult {
    ast: any;
    errors: ParserError[];
}

export interface ParserError {
    line: number;
    start: number;
    end: number;
    message: string;
    level: ParseErrorLevel;
}

export enum ParseErrorLevel {
    ERROR,
    WARNING
}

export interface CompilationResult {
    ast: any;
    errors: CompilationError[];
}

export interface CompilationError {
    message: string;
    location: {
        firstLine: number;
        lastLine: number;
        firstColumn: number;
        lastColumn: number;
    };
}

export interface ContentPosition {
    line: number;
    start: number;
    end: number;
}

export interface CodeAndPosition {
    code: string;
    start: number;
    end: number;
}

export enum specificSymbol {
    '.',
    '@',
    ':',
    '\n',
    '\r',
    ' ',
    '\t',
    '=',
    '{',
    '[',
    '(',
    '}',
    ']',
    ')',
    ',',
    ';'
}

export enum arraySymbol {
    'array',
    'qvec',
    'cvec',
    'let',
    'var'
}

export enum singleSymbol {
    'cbit',
    'qubit',
    'int',
    'float',
    'double',
    'let',
    'var'
}