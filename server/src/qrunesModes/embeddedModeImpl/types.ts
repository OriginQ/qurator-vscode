/**
 * This ts file defines interface parser, suggester, SuggestionSymbolType and etc.
 */
'use strict';

import { SymbolTable } from "./commonCompiler/types";


export interface Parser {
    parse(input: string): ParserResult;
}

export interface Suggester {
    calculateSuggestionsFor(input: string): SuggestionSymbol[];
    availableSymbols(): SuggestionSymbol[];
    getSymbolTable(input: string): SymbolTable;
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
    '.' = 10,
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
    'vector<qubit>',
    'vector<cbit>',
    'vector<bool>',
    'vector<int>',
    'vector<double>'
}

export enum singleSymbol {
    'cbit',
    'qubit',
    'int',
    'double',
    'bool',
    'avar',
    'circuitGen',
    'hamiltonian'
}

export enum commonSymbol {
    'let'
}