/**
 *  This ts file defines the result interface of symbol table.
 */

'use strict';

import { ParserError } from '../../types';
import { SymbolTable } from '../../commonCompiler/types';

export interface SymbolTableResult {
    symbolTable: SymbolTable;
    errors: ParserError[];
}
