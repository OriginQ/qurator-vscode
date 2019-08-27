/**
 * This ts file provides settings mode parser function.
 */
'use strict';

import { Parser, ParserResult } from '../types';
import { SettingsSyntacticParser } from './compiler/settingsSyntacticParser';
import { SymbolTableGenerator } from './compiler/symbolTableGenerator';
import { ErrorListener } from '../tools/errorListener';

export class SettingsParser implements Parser {
    parse(input: string): ParserResult {
        let errorListener = new ErrorListener();
        let tree = SettingsSyntacticParser.parseWithErrorListener(input, errorListener);
        SymbolTableGenerator.symbolTableFor(tree, errorListener);

        return {
            ast: tree,
            errors: errorListener.errors
        };
    }
}
