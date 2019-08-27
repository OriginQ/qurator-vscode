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

    allMethods(): SuggestionSymbol[] {
        return this.symbolsWithTypeIn(['method']);
    }

    private getSymbols(): SuggestionSymbol[] {
        const QPandaSymbols: QPandaSDK = require('../../../../QPandaSDK.json');
        let symbols: SuggestionSymbol[] = [];
        QPandaSymbols.methods.forEach(qmethod => {
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

interface QPandaSDK {
    methods: QPandaMethod[];
}

interface QPandaMethod {
    name: string;
    type: string;
    detail: string;
    documentation: string;
    arguments: QPandaArgument[];
    data: any;
}

interface QPandaArgument {
    name: string;
    type: string;
}
