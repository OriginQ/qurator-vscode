/**
 * 
 */

'use strict';

export interface Type {
    getName(): string;
}

export class Symbol implements Type {
    name: string;
    data: any;
    type: Type;

    constructor(name: string, type: Type) {
        this.name = name;
        this.type = type;
    }

    getName(): string {
        return this.name;
    }

    isType(theType: string): boolean {
        return this.type.getName() === theType;
    }
}

export class BuiltInTypeSymbol extends Symbol implements Type {
    constructor(name: string) {
        super(name, null);
    }

    getName(): string {
        return this.name;
    }

    toString(): string {
        return `{ name: ${this.getName()} }`;
    }
}
