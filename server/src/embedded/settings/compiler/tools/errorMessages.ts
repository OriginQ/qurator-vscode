/**
 * This ts file devides the error message of setting validations
 */

'use strict';

export namespace ErrorMessages {

    export function previousDefinitionOf(name: string): string {
        return `${name} is previously defined.`;
    }

    export function defineNotSupported(name: string): string {
        return `${name} is not supported.`;
    }
}
