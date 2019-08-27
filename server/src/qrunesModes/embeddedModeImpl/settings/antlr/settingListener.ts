// Generated from setting.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { QsettingContext } from './settingParser';
import { QConfigContext } from './settingParser';
import { Auto_importContext } from './settingParser';
import { Lan_setContext } from './settingParser';
import { Compile_onlyContext } from './settingParser';
import { IschoosedContext } from './settingParser';
import { Lan_typeContext } from './settingParser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `settingParser`.
 */
export interface settingListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `settingParser.qsetting`.
	 * @param ctx the parse tree
	 */
	enterQsetting?: (ctx: QsettingContext) => void;
	/**
	 * Exit a parse tree produced by `settingParser.qsetting`.
	 * @param ctx the parse tree
	 */
	exitQsetting?: (ctx: QsettingContext) => void;

	/**
	 * Enter a parse tree produced by `settingParser.qConfig`.
	 * @param ctx the parse tree
	 */
	enterQConfig?: (ctx: QConfigContext) => void;
	/**
	 * Exit a parse tree produced by `settingParser.qConfig`.
	 * @param ctx the parse tree
	 */
	exitQConfig?: (ctx: QConfigContext) => void;

	/**
	 * Enter a parse tree produced by `settingParser.auto_import`.
	 * @param ctx the parse tree
	 */
	enterAuto_import?: (ctx: Auto_importContext) => void;
	/**
	 * Exit a parse tree produced by `settingParser.auto_import`.
	 * @param ctx the parse tree
	 */
	exitAuto_import?: (ctx: Auto_importContext) => void;

	/**
	 * Enter a parse tree produced by `settingParser.lan_set`.
	 * @param ctx the parse tree
	 */
	enterLan_set?: (ctx: Lan_setContext) => void;
	/**
	 * Exit a parse tree produced by `settingParser.lan_set`.
	 * @param ctx the parse tree
	 */
	exitLan_set?: (ctx: Lan_setContext) => void;

	/**
	 * Enter a parse tree produced by `settingParser.compile_only`.
	 * @param ctx the parse tree
	 */
	enterCompile_only?: (ctx: Compile_onlyContext) => void;
	/**
	 * Exit a parse tree produced by `settingParser.compile_only`.
	 * @param ctx the parse tree
	 */
	exitCompile_only?: (ctx: Compile_onlyContext) => void;

	/**
	 * Enter a parse tree produced by `settingParser.ischoosed`.
	 * @param ctx the parse tree
	 */
	enterIschoosed?: (ctx: IschoosedContext) => void;
	/**
	 * Exit a parse tree produced by `settingParser.ischoosed`.
	 * @param ctx the parse tree
	 */
	exitIschoosed?: (ctx: IschoosedContext) => void;

	/**
	 * Enter a parse tree produced by `settingParser.lan_type`.
	 * @param ctx the parse tree
	 */
	enterLan_type?: (ctx: Lan_typeContext) => void;
	/**
	 * Exit a parse tree produced by `settingParser.lan_type`.
	 * @param ctx the parse tree
	 */
	exitLan_type?: (ctx: Lan_typeContext) => void;
}

