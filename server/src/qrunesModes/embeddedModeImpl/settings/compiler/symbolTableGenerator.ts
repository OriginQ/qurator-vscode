/**
 * This ts file provides the generators of symbol table for setting
 */
'use strict';

import { Lan_setContext, Auto_importContext, Compile_onlyContext } from '../antlr/settingParser';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { settingVisitor } from '../antlr/settingVisitor';
import { SymbolTableBuilder, SettingSymbol } from './symbolTable';
import { ParserRuleContext } from 'antlr4ts';
import { PreviousDefinitionValidation } from './validations/validations';
import { ErrorListener } from '../../tools/errorListener';
import { SymbolTable } from '../../commonCompiler/types';
import { PositionAdapter } from '../../tools/positionAdapter';

export namespace SymbolTableGenerator {
    export function symbolTableFor(tree: ParserRuleContext, _errorListener?: ErrorListener): SymbolTable {
        let symbolTable = SymbolTableBuilder.build();

        let errorListener = _errorListener || new ErrorListener();
        let matcher = new DefinitionMatcher(symbolTable, errorListener);
        tree.accept(matcher);

        return symbolTable;
    }
}

class DefinitionMatcher extends AbstractParseTreeVisitor<void> implements settingVisitor<void> {
    private previousDefinitionValidation: PreviousDefinitionValidation;

    constructor(private symbolTable: SymbolTable, private errorListener: ErrorListener) {
        super();
        this.previousDefinitionValidation = new PreviousDefinitionValidation(this.symbolTable, this.errorListener);
    }

    defaultResult() {}

	visitLan_set(ctx: Lan_setContext) {
        this.previousDefinitionValidation.apply("lang", ctx.LANGUAGE().text, PositionAdapter.fromTerminalNode(ctx.LANGUAGE()));

        let LanguageSet = "lang";
        let LanguageType = this.symbolTable.lookup('language');
        let language = new SettingSymbol(LanguageSet, LanguageType);

        this.symbolTable.define(language, ctx.start.line);

        if (ctx.lan_type() !== undefined) {
            let lan_name = ctx.lan_type();
            if (lan_name.text !== '' && lan_name.text !== 'Python' && lan_name.text !== 'C++') {
                this.previousDefinitionValidation.applyNotSupported(lan_name.text,  PositionAdapter.fromToken(lan_name._start));
            }
        }
       
    }

    visitAuto_import(ctx: Auto_importContext) {
        this.previousDefinitionValidation.apply("auto", ctx.AUTOIMPORT().text, PositionAdapter.fromTerminalNode(ctx.AUTOIMPORT()));

        let AutoImportSet = "auto";
        let AutoImportType = this.symbolTable.lookup('autoimport');
        let autoimport = new SettingSymbol(AutoImportSet, AutoImportType);

        this.symbolTable.define(autoimport, ctx.start.line);

        if (ctx.ischoosed() !== undefined) {
            let choose_name = ctx.ischoosed();
            if (choose_name.text !== '' && choose_name.text !== 'True' && choose_name.text !== 'False') {
                this.previousDefinitionValidation.applyNotSupported(choose_name.text,  PositionAdapter.fromToken(choose_name._start));
            }
        }
    }

    visitCompile_only(ctx: Compile_onlyContext) {
        this.previousDefinitionValidation.apply('comp', ctx.COMPILE_ONLY().text, PositionAdapter.fromTerminalNode(ctx.COMPILE_ONLY()));

        let compileSet = "comp";
        let compileType = this.symbolTable.lookup('compile_only');
        let compileOnly = new SettingSymbol(compileSet, compileType);

        this.symbolTable.define(compileOnly, ctx.start.line);

        if (ctx.ischoosed() != undefined) {
            let choose_name = ctx.ischoosed();
            if (choose_name.text !== '' && choose_name.text !== 'True' && choose_name.text !== 'False') {
                this.previousDefinitionValidation.applyNotSupported(choose_name.text,  PositionAdapter.fromToken(choose_name._start));
            }
        }
    }
}
