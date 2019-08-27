/**
 * This ts file provides qcodes modes suggester, include calculate suggestions for qcodes
 * and qcodes's symbols dictionary.
 */

'use strict';

import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { CodeCompletionCore } from 'antlr4-c3';
import { Suggester, SuggestionSymbol } from '../types';
import { qcodeParser } from './antlr/qcodeParser';
import { qcodeLexer } from './antlr/qcodeLexer';
import { SymbolTable } from '../commonCompiler/types';
import { AtomFinder } from './suggestions/atomFinder';
import { MethodsDictionary } from './suggestions/methodsDictionary';
import { SuggestionsDictionary } from './suggestions/suggestionsDictionary';
import { SuggestionsCalculator } from './suggestions/suggestionsCalculator';
import { SymbolTableGenerator } from './compiler/symbolTableGenerator';
import { ErrorListener } from '../tools/errorListener';

export class QcodesSuggester implements Suggester {   
    dictionary: SymbolsDictionary = new SymbolsDictionary();  
    private dictionaryMethod = new SuggestionsDictionary();

    calculateSuggestionsFor(input: string): SuggestionSymbol[] {

        let { parser, tokenStream, symbolTable } = this.parse(input);
        let suggestionCalculator = this.buildSuggestionsCalculator(symbolTable, tokenStream, parser);
        let caretPosition = tokenStream.getTokens().length;

        let resultClass = this.calculateCandidates(parser, tokenStream.getTokens().length);
        let resultMethod = suggestionCalculator.calculateAtPosition(caretPosition); 
        return resultClass.concat(resultMethod);       
    }

    availableSymbols(): SuggestionSymbol[] {
        return this.dictionary.allSymbols();
    }

    getSymbolTable(input: string): SymbolTable {
        let { parser, tokenStream, symbolTable } = this.parse(input);
        return symbolTable;
    }

    private parse(input: string) {
        let inputStream = new ANTLRInputStream(input);
        let lexer = new qcodeLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new qcodeParser(tokenStream);

        let tree = parser.qrunes();
        let symbolTable = this.buildSymbolTable(tree);

        return { parser, tokenStream, symbolTable };
    }

    private buildSuggestionsCalculator(
        symbolTable: SymbolTable,
        tokenStream: CommonTokenStream,
        parser: qcodeParser
    ) {
        let atomFinder = new AtomFinder(symbolTable);
        let methodsDictionary = new MethodsDictionary(atomFinder, tokenStream, this.dictionaryMethod);
        let suggestionCalculator = new SuggestionsCalculator(
            parser,
            methodsDictionary
        );

        return suggestionCalculator;
    }

    private buildSymbolTable(tree:any) {
        let errorListener = new ErrorListener();
        let symbolTable = SymbolTableGenerator.symbolTableFor(tree, errorListener);
        return symbolTable;
    }

    private calculateCandidates(
        parser: qcodeParser,
        caretPosition: number
    ): SuggestionSymbol[] {
        let core = new CodeCompletionCore(parser);

        core.ignoredTokens = new Set([
            qcodeLexer.RBRACE,
            qcodeLexer.RBRACK,
            qcodeLexer.LBRACE,
            qcodeLexer.LBRACK,
            qcodeLexer.LPAREN,
            qcodeLexer.RPAREN,
            qcodeLexer.SEMI
        ]);

        let candidates = core.collectCandidates(caretPosition);

        let keywords: string[] = [];
        for (let candidate of candidates.tokens) {
            keywords.push(parser.vocabulary.getSymbolicName(candidate[0]));
        }

        let functionNames: string[] = [];
        let variableNames: string[] = [];

        let suggestions: string[] = [];
        suggestions.push(...keywords);
        suggestions.push(...functionNames);
        suggestions.push(...variableNames);

        let result: SuggestionSymbol[] = [];
        result.push(...this.dictionary.symbolsWithTypeIn(suggestions));

        return result;
    }
}

class SymbolsDictionary {
    symbols = [
        {
            label: 'include',
            detail: 'To include needed packages.',
            documentation: 'To include needed packages.',
            type: 'INCLUDE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },
        {
            label: 'let',
            detail: 'Define a variable or constant.',
            documentation: 'Define a variable or constant.',
            type: 'LET',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },
        {
            label: 'vector',
            detail: '',
            documentation: '',
            type: 'VECTOR',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },
        {
            label: 'circuit',
            detail: 'circuit',
            documentation: 'circuit',
            type: 'CIRCUIT',
            parent: 'QCODES', 
            data: { 
                languageId: 'qcodes'
            }
        },
        {
            label: 'for',
            detail: '',
            documentation: '',
            type: 'FOR',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        }, 
        {
            label: 'qif',
            detail: '',
            documentation: '',
            type: 'QIF',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        }, 
        {
            label: 'qelse',
            detail: '',
            documentation: '',
            type: 'QELSE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },
        {
            label: 'qwhile',
            detail: '',
            documentation: '',
            type: 'QWHILE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },  
        {
            label: 'int',
            detail: '',
            documentation: '',
            type: 'INT',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },
        {
            label: 'double',
            detail: '',
            documentation: '',
            type: 'DOUBLE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        }, 
        {
            label: 'bool',
            detail: '',
            documentation: '',
            type: 'BOOL',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        }, 
        {
            label: 'Pi',
            detail: '',
            documentation: '',
            type: 'PI',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },                                                                   
        {
            label: 'cbit',
            detail: 'Classic register bit.',
            documentation: 'Classic register bit.',
            type: 'CBIT',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        }, 
        {
            label: 'qubit',
            detail: 'Quantum bit.',
            documentation: 'Quantum bit.',
            type: 'QUBIT',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },         
        {
            label: 'if',
            detail: '',
            documentation: '',
            type: 'IF',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },         
        {
            label: 'else',
            detail: '',
            documentation: '',
            type: 'ELSE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },  
        {
            label: 'H',
            detail: 'H(qubit)',
            documentation: 'The hardamard gate H acts on the object qubit q.It is represented by the Hadamard matrix. \n\r q: The object qubit.',
            type: 'H_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        }, 
        {
            label: 'X',
            detail: 'X(qubit)',
            documentation: 'The X gate is the Pauli X gate which can flip the qubit from |0> to |1>, or |1> to |0>, and it is a Pi-rottation around the X-axis. \n\r q: The object qubit.',
            type: 'X_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        }, 
        {
            label: 'NOT',
            detail: 'NOT(qubit)',
            documentation: 'Create a NOT(qubit) gate.',
            type: 'NOT_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        }, 
        {
            label: 'T',
            detail: 'T(qubit)',
            documentation: 'The T gate is a Pi/4 rotation around the Z axis, and it is required for universal control. \n\r q: The object qubit.',
            type: 'T_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        }, 
        {
            label: 'S',
            detail: 'S(qubit)',
            documentation: 'The S gate is a Pi/8 rotation around the Z axis, and it is required for universal control. \n\r q: The object qubit.',
            type: 'S_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },
        {
            label: 'Y',
            detail: 'Y(qubit)',
            documentation: 'The Pauli-Y gate acts on a single qubit q. It equates to a rotation around the Y-axis of the Bloch sphere by Pi radians. \n\r q: The object qubit.',
            type: 'Y_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },   
        {
            label: 'Z',
            detail: 'Z(qubit)',
            documentation: 'The Pauli-Z gate acts on a single qubit qubit q. It equates to a rotation around the Z-axis of the Bloch sphere by Pi radians. \n\r q: The object qubit.',
            type: 'Z_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },           
        {
            label: 'X1',
            detail: 'X1(qubit)',
            documentation: 'The X1 gate acts on a single qubit q. It equates to a rotation around the X-axis of the Bloch sphere by Pi/2 radians. \n\r q: The object qubit.',
            type: 'X1_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },   
        {
            label: 'Y1',
            detail: 'Y1(qubit)',
            documentation: 'The Y1 gate acts on a single qubit q. It equates to a rotation around the Y-axis of the Bloch sphere by Pi/2 radians. \n\r q: The object qubit.',
            type: 'Y1_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },   
        {
            label: 'Z1',
            detail: 'Z1(qubit)',
            documentation: 'The Z1 gate acts on a single qubit q. It equates to a rotation around the Z-axis of the Bloch sphere by Pi/2 radians. \n\r q: The object qubit.',
            type: 'Z1_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },   
        {
            label: 'RX',
            detail: 'RX(qubit, angle)',
            documentation: 'RX is a rotation gate acts on single qubit q. It equates to a rotation around the X-axis of the Bloch sphere by a(the angle parameter) radians. \n\r q: The object qubit. \n\r a: is a angle parameter.',
            type: 'RX_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },   
        {
            label: 'RY',
            detail: 'RY(qubit, angle)',
            documentation: 'RY is a rotation gate acts on single qubit q. It equates to a rotation around the Y-axis of the Bloch sphere by a(the angle parameter) radians. \n\r q: The object qubit. \n\r a: is a angle parameter.',
            type: 'RY_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },   
        {
            label: 'RZ',
            detail: 'RZ(qubit, angle)',
            documentation: 'RZ is a rotation gate acts on single qubit q. It equates to a rotation around the Z-axis of the Bloch sphere by a(the angle parameter) radians. \n\r q: The object qubit. \n\r a: is a angle parameter.',
            type: 'RZ_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },   
        {
            label: 'U4',
            detail: 'U4(alpha, beta, gamma, delta)',
            documentation: 'The U4 gate acts on a single qubit q with 4 angle parameter. It is represented by a unitary matrix with 4 parameters. \n\r q: The object qubit. \n\r alpha: is a angle parameter. \n\r beta: is a angle parameter. \n\r gamma: is a angle parameter. \n\r delta: is a angle parameter.',
            type: 'U4_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },  
        {
            label: 'CNOT',
            detail: 'CNOT(control_qubit, target_qubit)',
            documentation: 'The controlled NOT gate CNOT acts on 2 qubits, and performs the NOT operation on q1 only when q2 is |1> , and otherwise leaves it unchanged. \n\r q1: the control qubit. \n\r q2: The target object qubit. ',
            type: 'CNOT_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },   
        {
            label: 'CU',
            detail: 'C-U4(control_qubit, target_qubit, alpha, beta, gamma, delta)',
            documentation: 'The controlled gate CU acts on 2 qubits, and performs the U4 on q1 only when q2 is |1> , and otherwise leaves it unchanged. \n\r q1: the control qubit. \n\r q2: The target object qubit. \n\r alpha: is a angle parameter. \n\r beta: is a angle parameter. \n\r gamma: is a angle parameter. \n\r delta: is a angle parameter.',
            type: 'CU_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },
        {
            label: 'CR',
            detail: 'CR(control_qubit, target_qubit, angle)',
            documentation: 'The controlled gate CR acts on 2 qubits, and performs the rotation operation with parameter a on q1 only when q2 is |1> , and otherwise leaves it unchanged. q1: the control qubit. \n\r q2: The target object qubit. \n\r a: is a angle parameter.',
            type: 'CR_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },   
        {
            label: 'CZ',
            detail: 'CZ(control_qubit, target_qubit)',
            documentation: 'The controlled gate Z acts on 2 qubits, and performs the Z operation on q1 only when q2 is |1> , and otherwise leaves it unchanged. \n\r q1: the control qubit. \n\r q2: The target object qubit. ',
            type: 'CZ_GATE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },
        {
            label: 'iSWAP',
            detail: 'iSWAP(qubit1, qubit2, theta)',
            documentation: 'The iSwap gate acts on 2 qubits. Similar like Swap gate, just exchange the information of two qubits. \n\r q1: The object qubit. \n\r q2: The object qubit. \n\r a: is a angle parameter.',
            type: 'ISWAP',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        }, 
        {
            label: 'Toffoli',
            detail: 'Toffoli(qubit1, qubit2, qubit3)',
            documentation: 'The Toffoli gate.',
            type: 'Toffoli',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },
        {
            label: 'VQG_CNOT',
            detail: 'VQG_CNOT(control_qubit, target_qubit)',
            documentation: 'Variable CNOT gate.',
            type: 'VQG_CNOT',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },  
        {
            label: 'VQG_RX',
            detail: 'VQG_RX(qubit, angle)',
            documentation: 'Variable VQG_RX gate.',
            type: 'VQG_RX',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },  
        {
            label: 'VQG_RZ',
            detail: 'VQG_RZ(qubit, angle)',
            documentation: 'Variable VQG_RZ gate.',
            type: 'VQG_RZ',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        },   
        {
            label: 'measure',
            detail: 'measure(qubit, cbit)',
            documentation: 'measure the qubit q, then the measurement information is taken,and stored in c. \n\r q: The object qubit. \n\r c: is the result of measurement.',
            type: 'MEASURE',
            parent: 'QCODES',
            data: { 
                languageId: 'qcodes'
            }
        }];

    allSymbols(): SuggestionSymbol[] {
        return this.symbols;
    }

    symbolsWithTypeIn(types: string[]): SuggestionSymbol[] {
        let isContainedInTypes = (symbol: SuggestionSymbol) => types.indexOf(symbol.type) > -1;

        return this.symbols.filter(isContainedInTypes);
    }
}
