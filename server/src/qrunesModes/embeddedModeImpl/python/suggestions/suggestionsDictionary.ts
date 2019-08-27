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
        const pyqpandaSymbols: PyQpandaSDK = require('../../../../../pyQpandaSDK.json');
        let symbols: SuggestionSymbol[] = [];

        pyqpandaSymbols.methods.map(qmethod => {
            symbols.push({
                label: qmethod.name,
                detail: qmethod.detail,
                documentation: qmethod.documentation,
                type: 'method',
                parent: qmethod.name,
                data: qmethod.data
            });
        });

        return symbols;
    }
}

interface PyQpandaSDK {
    methods: PyQpandaMethod[];
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
