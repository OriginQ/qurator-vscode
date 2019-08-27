/**
 * This ts file define language types, include node type for parser, token type for scanner and parser,
 * scanner state for scanner, qrunes document, and interface scanner.
 */

'use strict';

export interface Node {
    tag: string | undefined;
    start: number;
    end: number;
    children: Node[];
}

export enum TokenType {
    StartCommentTag,
    Comment,
    EndCommentTag,
    StartTagOpen,
    StartTagClose,
    StartTag,
    EndTag,
    Content,
    Whitespace,
    Unknown,
    QCodes,
    Settings,
    PyScript,
    CppScript,
    EOS
}

export enum ScannerState {
    WithinContent,
    AfterOpeningStartTag,
    AfterOpeningEndTag,
    WithinTag,
    WithinComment,
    WithinQCodesContent,
    WithinSettingsContent,
    WithinPyScriptContent,
    WithinCppScriptContent,
}

export interface Scanner {
    scan(): TokenType;
    getTokenType(): TokenType;
    getTokenOffset(): number;
    getTokenLength(): number;
    getTokenEnd(): number;
    getTokenText(): string;
    getTokenError(): string | undefined;
    getScannerState(): ScannerState;
}

export declare type QRunesDocument = {
    roots: Node[];
    findNodeBefore(offset: number): Node;
    findNodeAt(offset: number): Node;
};