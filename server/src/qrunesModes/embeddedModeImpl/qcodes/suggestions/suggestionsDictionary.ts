
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
        const qcodeSymbols: QCodeSDK = require('../../../../qcodeSDK.json');
        let symbols: SuggestionSymbol[] = [];
        qcodeSymbols.classes.forEach(qclass => {
            symbols.push({
                label: qclass.name,
                detail: qclass.detail,
                documentation: qclass.documentation,
                type: 'class',
                parent: qclass.name,
                data: { 
                    languageId: 'qcodes'
                }
            });
            symbols.push(...this.getMethods(qclass));
        });

        return symbols;
    }

    private getMethods(qclass: QCodeClass): SuggestionSymbol[] {
        return qclass.methods.map(qmethod => {
            return {
                label: qmethod.name,
                detail: qmethod.detail,
                documentation: qmethod.documentation,
                type: 'method',
                parent: qclass.name,
                data: { 
                    languageId: 'qcodes'
                }
            };
        });
    }
}

interface QCodeSDK {
    classes: QCodeClass[];
}

interface QCodeClass {
    name: string;
    detail: string;
    documentation: string;
    methods: QCodeMethod[];
}

interface QCodeMethod {
    name: string;
    type: string;
    detail: string;
    documentation: string;
    arguments: QCodeArgument[];
}

interface QCodeArgument {
    name: string;
    type: string;
}
