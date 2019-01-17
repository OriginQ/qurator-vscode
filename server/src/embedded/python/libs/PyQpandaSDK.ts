/**
 * 
 */

export namespace PyQpandaSDK {
    const dictionary: any = require('../../../../pyQpandaSDK.json');

    export function classesAndMethods(): PyQpandaClassAndMethods[] {
        return dictionary.classes;
    }

    export function containsClassAndMethods(className: string): boolean {
        return classesAndMethods().some(theClass => theClass.name === className);
    }
}

export interface PyQpandaClassAndMethods {
    name: string;
    detail: string;
    documentation: string;
    arguments?: PyQpandaArgument[];
    methods: PyQpandaMethod[];
}

export interface PyQpandaMethod {
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
