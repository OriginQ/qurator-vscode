/**
 * This ts file defines the error messages of qcodes validation.
 */

'use strict';

export namespace ErrorMessages {
    export function symbolNotPreviouslyDefined(name: string): string {
        return `Symbol ${name} is not previously defined.`;
    }

    export function symbolPreviousDefinitionOf(name: string): string {
        return `Symbol ${name} is previously defined.`;
    }

    export function symbolNotPreviousTypeDefinitionOf(name: string, type: string): string {
        return `The type of Symbol ${name} is not ${type}.`;
    }

    export function ArrayNotPreviouslyDefined(name: string): string {
        return `Array ${name} is not previously defined.`;
    }

    export function ArrayindexOutOfBound(name: string): string {
        return `Array ${name} is out of bounds.`;
    }

    export function functionNotFound(name: string): string {
        return `Function ${name} is not found.`;
    }

    export function functionNotDefined(name: string): string {
        return `Function ${name} is not defined.`;
    }

    export function functionPreviousDefinitionOf(name: string): string {
        return `Function ${name} is previously defined.`;
    }

    export function functionArgsDefinitionOf(name: string): string {
        return `The number of arguments is not matched `;
    }

    export function functionTypeDefinitionOf(name: string): string {
        return `The type of arguments is not matched `;
    }

    export function definationPreviousDefinitionOf(name: string): string {
        return `Function defination ${name} is previously defined.`;
    }

    export function missingSymbol(name: string): string {
        return `The ${name} is missing.`;
    }

}
