/**
 *
 */

'use strict';

export namespace ErrorMessages {
    export function notPreviouslyImported(expectedImport: string): string {
        return `${expectedImport} must be previously imported.`;
    }
}
