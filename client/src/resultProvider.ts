/**
 *  This TS file provides ResultProvider
 */

'use strict';

import { TextDocumentContentProvider, EventEmitter, Uri, Event } from "vscode";

export class ResultProvider implements TextDocumentContentProvider {
    public content: string;

    private _onDidChange = new EventEmitter<Uri>();

    public displayContent(content: string, uri: Uri) {
        this.content = content;
        this.update(uri);
    }

    public provideTextDocumentContent(): string {
        return this.content;
    }

    get onDidChange(): Event<Uri> {
        return this._onDidChange.event;
    }

    public update(uri: Uri) {
        this._onDidChange.fire(uri);
    }

} 