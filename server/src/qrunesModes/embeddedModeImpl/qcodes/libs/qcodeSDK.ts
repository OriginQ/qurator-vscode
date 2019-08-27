

export namespace QCodeSDK {
    const dictionary: any = require('./../../../../qcodeSDK.json');

    export function classes(): QCodeClass[] {
        return dictionary.classes;
    }

    export function containsClass(className: string): boolean {
        return classes().some(theClass => theClass.name === className);
    }
}

export interface QCodeClass {
    name: string;
    detail: string;
    documentation: string;
    arguments?: QCodeArgument[];
    methods: QCodeMethod[];
}

export interface QCodeMethod {
    name: string;
    type: string;
    detail: string;
    documentation: string;
    arguments?: QCodeArgument[];
}

export interface QCodeArgument {
    name: string;
    type: string;
    optional?: boolean;
}
