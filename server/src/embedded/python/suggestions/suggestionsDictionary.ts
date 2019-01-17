/**
 *
 */

'use strict';

import { SuggestionSymbol } from '../../types';

export class SuggestionsDictionary {
    allSymbols(): SuggestionSymbol[] {
        return this.getSymbols();
    }

    symbolsWithTypeIn(types: string[]): SuggestionSymbol[] {
        let isContainedInTypes = (symbol: SuggestionSymbol) => types.indexOf(symbol.type) > -1;

        return this.getSymbols().filter(isContainedInTypes);
    }

    methodsIn(names: string[]): SuggestionSymbol[] {
        return this.symbolsWithTypeIn(['method']).filter(symbol => names.includes(symbol.label));
    }

    allMethods(): SuggestionSymbol[] {
        return this.symbolsWithTypeIn(['method']);
    }

    private getSymbols(): SuggestionSymbol[] {
        const pyqpandaSymbols: PyQpandaSDK = require('../../../../pyQpandaSDK.json');
        let symbols: SuggestionSymbol[] = [];
        pyqpandaSymbols.classes.forEach(qclass => {
            symbols.push({
                label: qclass.name,
                detail: qclass.detail,
                documentation: qclass.documentation,
                type: 'class',
                parent: qclass.name,
                data: qclass.data
            });
            symbols.push(...this.getMethods(qclass));
        });

        return symbols;
    }

    private getMethods(qclass: PyQpandaClass): SuggestionSymbol[] {
        return qclass.methods.map(qmethod => {
            return {
                label: qmethod.name,
                detail: qmethod.detail,
                documentation: qmethod.documentation,
                type: 'method',
                parent: qclass.name,
                data: qclass.data
            };
        });
    }
}

interface PyQpandaSDK {
    classes: PyQpandaClass[];
}

interface PyQpandaClass {
    name: string;
    detail: string;
    documentation: string;
    methods: PyQpandaMethod[];
    data: any;
}

interface PyQpandaMethod {
    name: string;
    type: string;
    detail: string;
    documentation: string;
    arguments: PyQpandaArgument[];
    data: any;
}

interface PyQpandaArgument {
    name: string;
    type: string;
}
