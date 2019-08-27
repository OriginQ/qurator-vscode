/**
 * This ts file provides the validations for setting
 */
'use strict';

import { ErrorMessages } from '../tools/errorMessages';
import { ErrorBuilder } from '../../../tools/errorBuilder';
import { ContentPosition } from '../../../types';
import { ErrorListener } from '../../../tools/errorListener';
import { SymbolTable } from '../../../commonCompiler/types';

export class SemanticRulesValidator {
    constructor(private symbolTable: SymbolTable, private errorListener: ErrorListener) {}

    validate(rules: SemanticRule[]) {
        if (rules === undefined || rules === null) {
            return;
        }

        rules.forEach(rule => rule.applyWith(this.symbolTable, this.errorListener));
    }
}

export interface SemanticRule {
    applyWith(symbolTable: SymbolTable, errorListener: ErrorListener): void;
}

export class PreviousDefinitionValidation {
    constructor(private symbolTable: SymbolTable, private errorListener: ErrorListener) {}

    apply(variableName: string, setName: string, position: ContentPosition) {
        if (this.symbolTable.lookup(variableName) === null) {
            return;
        }

        let message = ErrorMessages.previousDefinitionOf(setName);
        let error = ErrorBuilder.error(message, position);

        this.errorListener.addError(error);
    }

    applyNotSupported(setName: string, position: ContentPosition) {
        let message = ErrorMessages.defineNotSupported(setName);
        let error = ErrorBuilder.error(message, position);

        this.errorListener.addError(error);
    }
}
