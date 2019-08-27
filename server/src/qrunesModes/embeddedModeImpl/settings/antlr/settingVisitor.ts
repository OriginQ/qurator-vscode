// Generated from setting.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { QsettingContext } from './settingParser';
import { QConfigContext } from './settingParser';
import { Auto_importContext } from './settingParser';
import { Lan_setContext } from './settingParser';
import { Compile_onlyContext } from './settingParser';
import { IschoosedContext } from './settingParser';
import { Lan_typeContext } from './settingParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `settingParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface settingVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `settingParser.qsetting`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQsetting?: (ctx: QsettingContext) => Result;

	/**
	 * Visit a parse tree produced by `settingParser.qConfig`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQConfig?: (ctx: QConfigContext) => Result;

	/**
	 * Visit a parse tree produced by `settingParser.auto_import`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuto_import?: (ctx: Auto_importContext) => Result;

	/**
	 * Visit a parse tree produced by `settingParser.lan_set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLan_set?: (ctx: Lan_setContext) => Result;

	/**
	 * Visit a parse tree produced by `settingParser.compile_only`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompile_only?: (ctx: Compile_onlyContext) => Result;

	/**
	 * Visit a parse tree produced by `settingParser.ischoosed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIschoosed?: (ctx: IschoosedContext) => Result;

	/**
	 * Visit a parse tree produced by `settingParser.lan_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLan_type?: (ctx: Lan_typeContext) => Result;
}

