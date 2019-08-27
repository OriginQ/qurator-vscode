/**
 *
 */

'use strict';

import { SuggestionSymbol } from '../types';
import { CompletionItemKind } from 'vscode-languageserver/lib/main';

export namespace SuggestionSymbolAdapter {
    export function toCompletionItem() {
        return (symbol: SuggestionSymbol, index: number) => {
            return {
                label: symbol.label,
                kind: CompletionItemKind.Text,
                data: symbol.data,
                detail: symbol.detail,
                documentation: symbol.documentation
            };
        };
    }
}
