/**
 *
 */

'use strict';

import {
    Visitor,
    Statement,
    Assignment,
    Expression,
    VisitableItem,
    VariableReference,
    MethodReference,
    Float,
    Integer,
    Text,
    Block
} from './types';
import { VariableSymbol, VariableMetadata, MethodSymbol, PyQpandaSymbols } from '../compiler/symbols';
import { PyQpandaSymbolTableBuilder } from '../compiler/qpandaSymbolTableBuilder';
import { SymbolTable } from '../../commonCompiler/types';
import { Type } from '../../commonCompiler/symbols';

export namespace SymbolTableGenerator {
    export function symbolTableFor(codeBlock: Block): SymbolTable {
        let symbolTable = PyQpandaSymbolTableBuilder.create();

        codeBlock.childs.forEach(block => {
            let updater = new StatementSymbolTableUpdater(symbolTable);
            block.accept(updater);
        });

        return symbolTable;
    }
}

class StatementSymbolTableUpdater implements Visitor<void> {
    constructor(private symbolTable: SymbolTable) {}

    defaultValue() {}

    visitCodeBlock(block: Block) {
        const MAX_LINE = 65536
        this.symbolTable.push('local', block.start.line, MAX_LINE);

        block.childs.map(innerBlock => innerBlock.accept(new StatementSymbolTableUpdater(this.symbolTable)));

        this.symbolTable.pop(block.end.line);
    }

    visitStatement(statement: Statement) {
        if (statement.expression === null) {
            return;
        }

        let updater = new AssignmentSymbolTableUpdater(this.symbolTable);
        statement.expression.accept(updater);
    }
}

class AssignmentSymbolTableUpdater implements Visitor<MethodInvocationData> {
    constructor(private symbolTable: SymbolTable) {}

    defaultValue(): MethodInvocationData {
        return {
            type: this.symbolTable.lookup(PyQpandaSymbols.void)
        };
    }

    visitAssignment(assignment: Assignment): MethodInvocationData {
        let variable = this.unwrapVariable(assignment.left);
        if (variable !== null && assignment.right) {
            let invocationData = assignment.right.accept(this);

            let symbol = new VariableSymbol(variable, invocationData.type, invocationData.metadata);

            this.symbolTable.define(symbol, assignment.start.line);

            return invocationData;
        }

        return this.symbolTable.lookup(PyQpandaSymbols.void);
    }

    visitExpression(expression: Expression): MethodInvocationData {
        let lookingForTrailingType = (a: MethodInvocationData, b: VisitableItem) => {
            // in partial compilations this case could happen *do not delete without thinking twice*
            if (b === null) {
                return a;
            }

            if (a === null || a.type === null) {
                return b.accept(this);
            }

            return a;
        };

        let defaultResult = this.symbolTable.lookup('void');

        return expression.terms.reduce(lookingForTrailingType, defaultResult);
    }

    visitVariableReference(reference: VariableReference): MethodInvocationData {
        return {
            type: this.theClassTypeOf(this.symbolTable.lookup(reference.value))
        };
    }

    visitMethodReference(reference: MethodReference): MethodInvocationData {
        let classSymbol = this.theClassTypeOf(this.symbolTable.lookup(reference.name));

        return {
            type: classSymbol,
            metadata: this.unwrapMetadata(classSymbol, reference)
        };
    }

    unwrapVariable(item: VisitableItem): string {
        let unwrapper = new VariableUnwrapper();
        return item.accept(unwrapper);
    }

    theClassTypeOf(currentType: Type): Type {
        if (currentType instanceof VariableSymbol) {
            return this.theClassTypeOf(currentType.type);
        }

        return currentType;
    }

    unwrapMetadata(classSymbol: Type, reference: MethodReference): VariableMetadata {
        return null;
    }
}

class VariableUnwrapper implements Visitor<string> {
    defaultValue(): string {
        return null;
    }

    visitExpression(expression: Expression): string {
        return expression.terms.reduce((a: string, b: VisitableItem) => (a === null ? b.accept(this) : a), null);
    }

    visitVariableReference(variable: VariableReference): string {
        return variable.value;
    }
}

interface MethodInvocationData {
    type: Type;
    metadata?: VariableMetadata;
}
