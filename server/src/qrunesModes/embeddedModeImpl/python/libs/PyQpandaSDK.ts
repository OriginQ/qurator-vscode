/**
 * 
 */

export namespace PyQpandaSDK {
    const dictionary: any = require('../../../../../pyQpandaSDK.json');

    export function methods(): PyQpandaMethods[] {
        return dictionary.methods;
    }

}

export interface PyQpandaMethods {
    name: string;
    type: string;
    detail: string;
    documentation: string;
    arguments?: PyQpandaArgument[];
}

export interface PyQpandaArgument {
    name: string;
    type: string;
    optional?: boolean;
}
