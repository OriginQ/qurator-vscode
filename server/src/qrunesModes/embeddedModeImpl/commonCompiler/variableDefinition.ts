/**
 * 
 */

'use strict';

import { Symbol } from './symbols';

export class VariableDefinition {
    constructor(public symbol: Symbol, public startLine: number, public endLine: number) {}

    nameEquals(name: string): boolean {
        return this.symbol.name === name;
    }

    inScope(line: number): boolean {
        return line >= this.startLine && line <= this.endLine;
    }

    toString() {
        return `{ ${this.symbol} from: ${this.startLine} to: ${this.endLine} }`;
    }
}
