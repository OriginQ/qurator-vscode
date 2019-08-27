/**
 * This ts file provides the validate functions of qcodes modes.
 */

'use strict';

import { ErrorMessages } from '../tools/errorMessages';
import { Override } from 'antlr4ts/Decorators';
import { RegisterSymbol, QcodesSymbols, Booleans } from '../symbolTable';
import { ErrorBuilder } from '../../../tools/errorBuilder';
import { ContentPosition, arraySymbol, singleSymbol, commonSymbol } from '../../../types';
import { ErrorListener } from '../../../tools/errorListener';
import { SymbolTable } from '../../../commonCompiler/types';
import { Symbol } from '../../../commonCompiler/symbols';
import { Scope } from '../../../commonCompiler/scope';

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

export class ExistingSymbolValidationRule implements SemanticRule {
    constructor(private scope: Scope, private variableName: string, private position: ContentPosition) {}

    @Override
    applyWith(symbolTable: SymbolTable, errorListener: ErrorListener) {
        if (symbolTable.lookupToRoot(this.scope, this.variableName) !== null) {
            return;
        }

        if (symbolTable.lookup(this.variableName) !== null) {
            return;
        }

        let message = ErrorMessages.symbolNotPreviouslyDefined(this.variableName);
        let error = ErrorBuilder.error(message, this.position);

        errorListener.addError(error);
    }
}

export class ExistingDefinationValidationRule implements SemanticRule {
    constructor(private variableName: string, private position: ContentPosition, private names: string[], private types: string[]) {}

    @Override
    applyWith(symbolTable: SymbolTable, errorListener: ErrorListener) {
        let flagName: number = 0;
        if (symbolTable.currentScopes.length > 0) {
            for (let sym of symbolTable.currentScopes) {
                if (sym.name.length > 7) {
                    let name = sym.name.substring(0, sym.name.length-7);
                    let typeName = sym.name.substring(sym.name.length-6);
                    if (typeName === 'method' && name === this.variableName) {
                        if (sym.args !== null && sym.args.length > 0 && this.names !== null && this.names.length > 0) {
                            if (sym.args.length === this.names.length) {
                                for (let i=0; i<this.names.length; i++) {
                                    if (this.types[i] === sym.types[i]) {
                                        flagName = 3;
                                    } else {
                                        flagName = 2;
                                        break;
                                    }
                                }
                            } else {
                                flagName = 1;
                                break;
                            }
                        } else {
                            if (sym.args === null && this.names === null) {
                                flagName = 3;
                            } else {
                                flagName = 1;
                            } 
                            break;    
                        }
                    }
                }
            }
        } 

        let message = null;
        if (flagName === 0) {
            message = ErrorMessages.functionNotFound(this.variableName);
            let error = ErrorBuilder.warning(message, this.position);
            errorListener.addError(error);  
        } else if (flagName === 1) {
            message = ErrorMessages.functionArgsNumber(this.variableName, "1");
            let error = ErrorBuilder.error(message, this.position);
            errorListener.addError(error);  
        } else if (flagName === 2) {
            message = ErrorMessages.functionArgsType(this.variableName);
            let error = ErrorBuilder.error(message, this.position);
            errorListener.addError(error);  
        } else if (flagName === 0) {
            return;
        }
            
    }
}

export class PreviousDefinitionValidation {
    constructor(private symbolTable: SymbolTable, private errorListener: ErrorListener) {}

    apply(variableName: string, position: ContentPosition) {
        if (this.symbolTable.lookup(variableName) === null) {
            return;
        }

        let message = ErrorMessages.symbolPreviousDefinitionOf(variableName);
        let error = ErrorBuilder.warning(message, position);

        this.errorListener.addError(error);
    }

    applyScope(scope: Scope, variableName: string, position: ContentPosition) {
        if (scope === null  || scope === this.symbolTable.currentScope) {
            if (this.symbolTable.lookup(variableName) === null) {
                return;
            }    
        } else {
            if (scope.lookup(variableName) === null) {
                return;
            }  
        }

        let message = ErrorMessages.symbolPreviousDefinitionOf(variableName);
        let error = ErrorBuilder.error(message, position);

        this.errorListener.addError(error);
    }

    applyQuantum(scope: Scope, variableName: string, position: ContentPosition, type:string) {

        let symbol = this.symbolTable.lookupToRoot(scope, variableName);
        let result1: Booleans = this.mustIgnore(symbol, type);
        if (result1.flag1) {
            return;
        }

        let symbol2 = this.symbolTable.lookup(variableName);
        let result2: Booleans = this.mustIgnore(symbol2, type);
        if (result2.flag1) {
            return;
        } 

        let message = null;
        if (result1.flag2 || result2.flag2) {
            message = ErrorMessages.symbolNotPreviousTypeDefinitionOf(variableName, type);
        } else {
            message = ErrorMessages.symbolNotPreviouslyDefined(variableName);
        }
        let error = ErrorBuilder.error(message, position);
        this.errorListener.addError(error);
    }

    applyCbit(scope: Scope, variableName: string, position: ContentPosition, type:string) {

        let symbol = this.symbolTable.lookupToRoot(scope, variableName);
        let result1: boolean = this.cbitIgnore(symbol, type);
        if (result1) {
            return;
        }

        let symbol2 = this.symbolTable.lookup(variableName);
        let result2: boolean = this.cbitIgnore(symbol2, type);
        if (result2) {
            return;
        } 

        let message = ErrorMessages.symbolNotPreviousTypeDefinitionOf(variableName, type);
        let error = ErrorBuilder.error(message, position);
        this.errorListener.addError(error);
    }

    private cbitIgnore(symbol: Symbol, type:string): boolean {
        if (symbol == null) {
            return false;
        }
        if (symbol.type != null) {
            let typeName = symbol.type.getName();
            if (typeName == QcodesSymbols.let || typeName == QcodesSymbols.vector_cbit || 
                        typeName == QcodesSymbols.cbit) {
                return true;
            }
        }
        return false;
    }

    private mustIgnore(symbol: Symbol, type:string): Booleans {
        if (symbol === null) {
            return {
                flag1: false,
                flag2: false
            };
        }
        if (symbol.type !== null && symbol.type.getName() === type) {
            return {
                flag1: true,
                flag2: false
            }
        } else {
            return {
                flag1: false,
                flag2: true
            }
        }
    }
}

export class functionValidation {
    constructor(private symbolTable: SymbolTable, private errorListener: ErrorListener) {}

    applyNoArgs(variableName: string, position: ContentPosition) {
        let message = ErrorMessages.functionNoArgs(variableName);
        let error = ErrorBuilder.error(message, position);

        this.errorListener.addError(error);
    }
    
    applySingle(scope: Scope, variableName: string, num: number, position: ContentPosition) {
        if (num > 1) {
            let message = ErrorMessages.functionArgsNumber(variableName, "1");
            let error = ErrorBuilder.error(message, position);
            this.errorListener.addError(error);
        } else {
            let symbol = this.symbolTable.lookupToRoot(scope, variableName);
            let result1: boolean = this.validSingle(symbol, QcodesSymbols.qubit);
            if (result1) {
                return;
            }
            let symbol2 = this.symbolTable.lookup(variableName);
            let result2: boolean = this.validSingle(symbol2, QcodesSymbols.qubit);
            if (result2) {
                return;
            }  

            let message = ErrorMessages.functionArgsType(QcodesSymbols.qubit);
            let error = ErrorBuilder.error(message, position);
            this.errorListener.addError(error);
        }
    }

    applyDouble(scope: Scope, variableNames: string[], num: number, positions: ContentPosition[]) {
        if (num < 2 || num > 2) {
            let message = ErrorMessages.functionArgsNumber(variableNames[0], "2");
            let error = ErrorBuilder.error(message, positions[0]);
            this.errorListener.addError(error);
        } else {
            for (let i=0; i<2; i++) {
                if (variableNames[i] != null) {
                    let symbol = this.symbolTable.lookupToRoot(scope, variableNames[i]);
                    let result1: boolean = this.validSingle(symbol, QcodesSymbols.qubit);
                    if (result1) {
                        continue;
                    }
                    let symbol2 = this.symbolTable.lookup(variableNames[i]);
                    let result2: boolean = this.validSingle(symbol2, QcodesSymbols.qubit);
                    if (result2) {
                        continue;
                    }  

                    let message = ErrorMessages.functionArgsType(QcodesSymbols.qubit);
                    let error = ErrorBuilder.error(message, positions[i]);
                    this.errorListener.addError(error);
                }
            }        
        }
    }

    applyDoubleWithAngle(scope: Scope, variableNames: string[], num: number, positions: ContentPosition[]) {
        if (num < 2 || num > 2) {
            let message = ErrorMessages.functionArgsNumber(variableNames[0], "2");
            let error = ErrorBuilder.error(message, positions[0]);
            this.errorListener.addError(error);
        } else {
            for (let i=1; i<2; i++) {
                if (variableNames[i] != null) {
                    let symbol = this.symbolTable.lookupToRoot(scope, variableNames[i]);
                    let result1: boolean = this.validSingle(symbol, QcodesSymbols.qubit);
                    if (result1) {
                        continue;
                    }
                    let symbol2 = this.symbolTable.lookup(variableNames[i]);
                    let result2: boolean = this.validSingle(symbol2, QcodesSymbols.qubit);
                    if (result2) {
                        continue;
                    }  

                    let message = ErrorMessages.functionArgsType(QcodesSymbols.qubit);
                    let error = ErrorBuilder.error(message, positions[i]);
                    this.errorListener.addError(error);
                }
            }        
        }
    }

    applyMeasure(scope: Scope, variableNames: string[], num: number, positions: ContentPosition[]) {
        if (num < 2 || num > 2) {
            let message = ErrorMessages.functionArgsNumber(variableNames[0], "2");
            let error = ErrorBuilder.error(message, positions[0]);
            this.errorListener.addError(error);
        } else {
            for (let i=0; i<2; i++) {
                if (variableNames[i] != null) {
                    let symbol = this.symbolTable.lookupToRoot(scope, variableNames[i]);
                    let type = (i == 0)? QcodesSymbols.cbit: QcodesSymbols.qubit;

                    let result1: boolean = this.validSingle(symbol, type);
                    if (result1) {
                        continue;
                    }
                    let symbol2 = this.symbolTable.lookup(variableNames[i]);
                    let result2: boolean = this.validSingle(symbol2, type);
                    if (result2) {
                        continue;
                    }  

                    let message = null;
                    if (i == 0) {
                        message = ErrorMessages.functionArgsType(QcodesSymbols.cbit);
                    } else {
                        message = ErrorMessages.functionArgsType(QcodesSymbols.qubit);
                    }
                    let error = ErrorBuilder.error(message, positions[i]);
                    this.errorListener.addError(error);
                }
            }        
        }
    }

    applyThree(scope: Scope, variableNames: string[], num: number, positions: ContentPosition[]) {
        if (num < 3 || num > 3) {
            let message = ErrorMessages.functionArgsNumber(variableNames[0], "3");
            let error = ErrorBuilder.error(message, positions[0]);
            this.errorListener.addError(error);
        } else {
            for (let i=1; i<3; i++) {
                if (variableNames[i] != null) {
                    let symbol = this.symbolTable.lookupToRoot(scope, variableNames[i]);
                    let result1: boolean = this.validSingle(symbol, QcodesSymbols.qubit);
                    if (result1) {
                        continue;
                    }
                    let symbol2 = this.symbolTable.lookup(variableNames[i]);
                    let result2: boolean = this.validSingle(symbol2, QcodesSymbols.qubit);
                    if (result2) {
                        continue;
                    }  

                    let message = ErrorMessages.functionArgsType(QcodesSymbols.qubit);
                    let error = ErrorBuilder.error(message, positions[i]);
                    this.errorListener.addError(error);
                }
            }        
        }
    }

    applyFour(scope: Scope, variableNames: string[], num: number, positions: ContentPosition[]) {
        if (num < 4 || num > 4) {
            let message = ErrorMessages.functionArgsNumber(variableNames[0], "4");
            let error = ErrorBuilder.error(message, positions[0]);
            this.errorListener.addError(error);
        }
    }

    applySix(scope: Scope, variableNames: string[], num: number, positions: ContentPosition[]) {
        if (num < 6 || num > 6) {
            let message = ErrorMessages.functionArgsNumber(variableNames[0], "6");
            let error = ErrorBuilder.error(message, positions[0]);
            this.errorListener.addError(error);
        } else {
            for (let i=0; i<2; i++) {
                if (variableNames[i] != null) {
                    let symbol = this.symbolTable.lookupToRoot(scope, variableNames[i]);
                    let result1: boolean = this.validSingle(symbol, QcodesSymbols.qubit);
                    if (result1) {
                        continue;
                    }
                    let symbol2 = this.symbolTable.lookup(variableNames[i]);
                    let result2: boolean = this.validSingle(symbol2, QcodesSymbols.qubit);
                    if (result2) {
                        continue;
                    }  

                    let message = ErrorMessages.functionArgsType(QcodesSymbols.qubit);
                    let error = ErrorBuilder.error(message, positions[i]);
                    this.errorListener.addError(error);
                }
            }        
        }
    }

    private validSingle(symbol: Symbol, type: String): boolean {
        if (symbol == undefined) {
            return false;
        }
        if (symbol.type.getName() == QcodesSymbols.let) {
            return true;
        }
        if (type == QcodesSymbols.qubit) {
            if (symbol.type.getName() == QcodesSymbols.qubit || symbol.type.getName() == QcodesSymbols.vector_qubit) {
                return true;
            }
        } else if (type == QcodesSymbols.cbit) {
            if (symbol.type.getName() == QcodesSymbols.cbit || symbol.type.getName() == QcodesSymbols.vector_cbit) {
                return true;
            }
        }
        return false;
    }
}

export class PreviousFunctionValidation {
    constructor(private symbolTable: SymbolTable, private errorListener: ErrorListener) {}

    apply(variableName: string, position: ContentPosition) {
        let flag: boolean = false;
        if (this.symbolTable.currentScopes.length > 0) {
            for (let sym of this.symbolTable.currentScopes) {
                if (sym.name === variableName) {
                    flag = true;
                    break;
                }
            }
        }

        if (flag) {
            let message = ErrorMessages.functionPreviousDefinitionOf(variableName);
            let error = ErrorBuilder.error(message, position);

            this.errorListener.addError(error);
        }
    }

    applyNotFunction(variableName: string, position: ContentPosition) {
        let flag: boolean = false;

        let methodName = variableName + '_method';
        let defineName = variableName + '_define';
        if (this.symbolTable.currentScopes.length > 0) {
            for (let sym of this.symbolTable.currentScopes) {
                if (sym.name === methodName) {
                    flag = true;
                    break;
                } else if (sym.name === defineName) {
                    flag = true;
                    break;
                }
            }
        }

        if (!flag) {
            let message = ErrorMessages.functionNotDefined(variableName);
            let error = ErrorBuilder.error(message, position);

            this.errorListener.addError(error);
        }
    }
}

export class PreviousFunctionDefinitionValidation {
    constructor(private symbolTable: SymbolTable, private errorListener: ErrorListener) {}

    apply(variableName: string, position: ContentPosition) {
        let flag: boolean = false;
        if (this.symbolTable.currentScopes.length > 0) {
            for (let sym of this.symbolTable.currentScopes) {
                if (sym.name === variableName) {
                    flag = true;
                }
            }
        }

        if (flag) {
            let message = ErrorMessages.functionPreviousDefinitionOf(variableName);
            let error = ErrorBuilder.error(message, position);

            this.errorListener.addError(error);
        }
    }

    applyArgs(scope: Scope, methodName: string, args: string[], positions: ContentPosition[]) {
        let flagName: number = 0;
        let varName: string = null;
        let pos: ContentPosition = null;
        let types: string[] = [];
        for (let i=0; i< args.length; i++) {
            let sym: Symbol = null;
            let sym2: Symbol = null;
            if (scope === null  || scope === this.symbolTable.currentScope) {
                sym = this.symbolTable.lookup(args[i]);
            } else {
                sym2 = scope.lookup(args[i]);
            }

            let type: string = null;
            if (sym !== null) {
                type = sym.type.getName();
                types.push(type);
            } else if (sym2 !== null) {
                type = sym2.type.getName();
                types.push(type);
            }
        }

        if (types.length > 0) {
            if (this.symbolTable.currentScopes.length > 0) {
                for (let sc of this.symbolTable.currentScopes) {
                    if (sc.name === methodName+'_define' || sc.name === methodName+'_method') {
                        if (sc.args !== null && sc.args.length > 0) {
                            if (sc.args.length === args.length) {
                                for (let i=0; i<args.length; i++) {
                                    if (types[i] in commonSymbol || types[i] === sc.types[i]) {
                                        continue;
                                    } else {
                                        flagName = 2;
                                        varName = args[i];
                                        pos = positions[i];
                                        break;
                                    }
                                }
                            } else {
                                flagName = 1;
                                varName = args[0];
                                pos = positions[0];
                                break;
                            }
                        } else {
                            flagName = 1;
                            varName = args[0];
                            pos = positions[0];
                            break;
                        }
                    } 
                }
            }
        }

        let message = null;
        if (flagName === 0) {
            return;
        } else if (flagName === 1) {
            message = ErrorMessages.functionArgsNumber(varName, "1");
        } else if (flagName === 2) {
            message = ErrorMessages.functionArgsType(varName);
        }
        let error = ErrorBuilder.error(message, pos);
        this.errorListener.addError(error);
    }
}

export class PreviousNotDefinitionValidation {
    constructor(private symbolTable: SymbolTable, private errorListener: ErrorListener) {}

    applySymbol(position: ContentPosition, variableName: string) {
        let message = ErrorMessages.missingSymbol(variableName);
        let error = ErrorBuilder.error(message, position);

        this.errorListener.addError(error);
    }

    apply(scope: Scope, variableName: string, position: ContentPosition) {
        let symbol = this.symbolTable.lookupToRoot(scope, variableName);
        let result1: boolean = this.mustIgnore(symbol);
        if (result1) {
            return;
        }

        let symbol2 = this.symbolTable.lookup(variableName);
        let result2: boolean = this.mustIgnore(symbol2);
        if (result2) {
            return;
        }  

        let message = ErrorMessages.symbolNotPreviouslyDefined(variableName);
        let error = ErrorBuilder.error(message, position);

        this.errorListener.addError(error);
    }

    private mustIgnore(symbol: Symbol): boolean {
        if (symbol === null) {
            return false;
        }
        return true;
    }
}
