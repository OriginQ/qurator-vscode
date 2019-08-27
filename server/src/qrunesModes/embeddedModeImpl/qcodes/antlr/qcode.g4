grammar qcode;

/*
* Parse Rule
*/

qrunes : lang_unit*
;

lang_unit : declaration
          | function_definition
;

declaration: include_declaration
           | variable_declaration
           | function_declaration
;

include_declaration: INCLUDE include_sign single_expression include_sign
;

include_sign : '"'
             | '\''
;

variable_declaration: declaration_variable
                    | parameter_declaration
;

parameter_declaration: parameter_specifier Identifier
;

parameter_specifier: auxiliary_primary_type
                   | quantum_primary_type
                   | classical_primary_type
                   | array_construct_type
                   | call_back_construct_type
                   | quantum_alg_built_in_type
;

quantum_alg_built_in_type: HAMILTONIAN
                         | AVAR
;

auxiliary_primary_type: INT
                      | DOUBLE
                      | BOOL
;

quantum_circuit_type: CIRCUIT
                    | VARIATIONALCIRCUIT
;

quantum_prog_type: QPROG
;

quantum_primary_type: QUBIT
;

classical_primary_type: CBIT
;

array_construct_type: VECTOR LT construct_primary_type GT
                    | MAP
;

construct_primary_type: auxiliary_primary_type
                      | quantum_primary_type
                      | classical_primary_type
                      | MAP
;

call_back_construct_type: CIRCUIT LT call_back_primary_type_list GT
;

call_back_primary_type_list: call_back_primary_type
                           | call_back_primary_type_list COMMA call_back_primary_type
;

call_back_primary_type: auxiliary_primary_type
                      | quantum_primary_type
                      | classical_primary_type
                      | array_construct_type
                      | call_back_construct_type
;

declaration_variable: variable_decl_specifier init_declaratorlist SEMI
;

variable_decl_specifier: common_specifier
                       | array_construct_type
                       | quantum_circuit_type
                       | quantum_primary_type
;

common_specifier: LET
;

init_declaratorlist: variable_declarator
                   | init_declaratorlist COMMA variable_declarator
;

variable_declarator: Identifier (ASSIGN variableInitializer)?
;

variableInitializer: single_expression
                   | variableInitializer COMMA single_expression
;

function_declaration: declarate_function SEMI
;

declarate_function: function_return_type_declarator? function_declarator
;

function_return_type_declarator: quantum_prog_type
                               | quantum_circuit_type
                               | auxiliary_primary_type
                               | classical_primary_type
                               | array_construct_type
                               | call_back_construct_type
;

function_declarator: function_name LPAREN parameter_decl_list RPAREN
;

function_name: Identifier
;

parameter_decl_list: parameter_declaration
                   | parameter_decl_list COMMA parameter_declaration
;

expression_list: single_expression
               | exp_list_alias = expression_list COMMA single_expression
;

vector_expression: single_expression
                 | vector_slice
;

vector_slice: vector_bound_alias_l = single_expression COLON vector_bound_alias_r = single_expression
;

single_expression: LBRACK bracket_exp = expression_list? RBRACK
                 | LPAREN parenthesis_exp = expression_list? RPAREN
                 | get_index_exp = single_expression LBRACK vector_expression RBRACK
                 | get_inside_exp = single_expression DOT get_inside_bee_exp = single_expression
                 | function_call_exp = single_expression LPAREN expression_list? RPAREN
                 | postfix_add_exp = single_expression INC
                 | postfix_dec_exp = single_expression DEC
                 | unary_op unary_exp = single_expression
                 | binary_mul_left_exp =  single_expression multiplicative_op binary_mul_right_exp = single_expression
                 | binary_add_left_exp = single_expression additive_op binary_add_right_exp = single_expression
                 | shift_exp_left_exp = single_expression shift_op shift_exp_right_exp = single_expression
                 | relationship_left_exp = single_expression relationship_op relationship_right_exp = single_expression
                 | equal_left_exp = single_expression equal_op equal_right_exp = single_expression
                 | logic_left_exp = single_expression logic_op logic_right_exp = single_expression
                 | triple_exp_condition = single_expression QUE_MARK triple_exp_true = single_expression COLON triple_exp_false = single_expression
                 | assign_exp_left = single_expression assign_op assign_exp_right = single_expression
                 | lambda_exp
                 | Identifier
                 | constant
                 | key_words
                 | PI
;

lambda_exp: LAMBDA LPAREN parameter_decl_list RPAREN COLON lambda_body
;

lambda_body: compound_statement
;

additive_op: SUB
           | ADD
;

multiplicative_op: MUL
                 | DIV
                 | MOD
;

shift_op: SHIFT_LEFT
        | SHIFT_RIGHT
;

assign_op: ASSIGN
         | ADD_ASSIGN
         | SUB_ASSIGN
         | MUL_ASSIGN
         | DIV_ASSIGN
         | MOD_ASSIGN
;

equal_op: EQUAL
        | NOTEQUAL
;

relationship_op: LT
               | LE
               | GT
               | GE
;

logic_op: LOGIC_AND
        | LOGIC_OR
;

unary_op: TILDE
        | BANG
        | INC
        | DEC
        | SUB
;

statement: expression_statement
         | empty_statement
         | declaration_variable_statement
         | compound_statement
         | select_statement
         | while_statement
         | iterate_statement
         | qif_statement
         | qwhile_statement
         | return_statement
;

while_statement: WHILE LPAREN  single_expression RPAREN statement
;

return_statement: RETURN single_expression SEMI
;

qif_statement: QIF LPAREN single_expression RPAREN LBRACE qif_true_branch RBRACE
             | QIF LPAREN single_expression RPAREN LBRACE qif_true_branch RBRACE QELSE LBRACE qif_false_branch RBRACE
;

qif_true_branch: statement_list
;

qif_false_branch: statement_list
;

qwhile_statement: QWHILE LPAREN single_expression RPAREN LBRACE statement_list RBRACE
;

expression_statement: single_expression SEMI
;

empty_statement: SEMI
;

declaration_variable_statement: declaration_variable
;

compound_statement: LBRACE statement_list? RBRACE
;

select_statement: IF LPAREN single_expression RPAREN if_stmt = statement (ELSE else_stmt = statement)?
;

iterate_statement: FOR LPAREN for_stmt RPAREN statement
                 | FOR LPAREN inhanced_for_stmt RPAREN statement
;

for_stmt: for_start? COLON for_step? COLON for_condition?
;

for_step: single_expression
;

for_condition: single_expression
;

for_start: LET? Identifier (ASSIGN single_expression)?
;

inhanced_for_stmt: construct_primary_type Identifier IN single_expression
;

statement_list: statement+
;

function_definition: declarate_function function_body
;

function_body: compound_statement
;



key_words: LET
         | INCLUDE
         | INT
         | BOOL
         | IF
         | ELSE
         | FOR
         | IN
         | LIB
         | INC
         | QRUNES
         | AVAR
         | DOUBLE
         | QUBIT
         | CBIT
         | H_GATE
         | X_GATE
         | NOT_GATE
         | T_GATE
         | S_GATE
         | Y_GATE
         | Z_GATE
         | X1_GATE
         | Y1_GATE
         | Z1_GATE
         | U4_GATE
         | RX_GATE
         | RY_GATE
         | RZ_GATE
         | CNOT_GATE
         | CZ_GATE
         | CR_GATE
         | CU_GATE
         | TOFFOLI_GATE
         | ISWAP
         | MEASURE
         | MEASUREALL
         | QIF
         | QWHILE
         | QELSE
         | VQG_RZ_VCGEN
         | VQG_CNOT_VCGEN
         | VQG_RX_VCGEN
         | APPLY_QGATE
         | RETURN
         | LAMBDA
         | BREAK
         | CONTINUE
         | TRUE
         | FALSE
;

/*
* Lexer Rule
*/


//KeyWord
LET: 'let';
INCLUDE: 'include';
INT: 'int';
BOOL: 'bool';
IF: 'if';
ELSE: 'else';
FOR: 'for';
LIB: 'lib';
QRUNES: 'qrunes';
AVAR: 'avar';
DOUBLE: 'double';
DEFAULT: 'default';
MAP: 'map';
IN: 'in';
VECTOR: 'vector';
PI:'Pi';
RETURN: 'return';
LAMBDA: 'lambda';
BREAK:  'break';
CONTINUE: 'continue';
TRUE: 'true';
FALSE: 'false';

//Quantum keywords
QUBIT: 'qubit';
CBIT: 'cbit';
CIRCUIT: 'circuit';
QPROG: 'qprog';
VARIATIONALCIRCUIT: 'variationalCircuit';
HAMILTONIAN: 'hamiltonian';
VQG_CNOT_VCGEN: 'VQG_CNOT';
VQG_RZ_VCGEN: 'VQG_RZ';
VQG_RX_VCGEN: 'VQG_RX';

H_GATE : 'H';
X_GATE : 'X';
NOT_GATE : 'NOT';
T_GATE : 'T';
S_GATE : 'S';
Y_GATE : 'Y';
Z_GATE : 'Z';
X1_GATE : 'X1';
Y1_GATE : 'Y1';
Z1_GATE : 'Z1';

U4_GATE : 'U4';
RX_GATE : 'RX';
RY_GATE : 'RY';
RZ_GATE : 'RZ';
TOFFOLI_GATE: 'Toffoli';

CNOT_GATE : 'CNOT';
CZ_GATE : 'CZ';
CR_GATE : 'CR';
CU_GATE : 'CU';
ISWAP : 'iSWAP';
APPLY_QGATE: 'apply_QGate';

MEASURE : 'measure';
MEASUREALL: 'measure_all';

QIF : 'qif';
QWHILE : 'qwhile';
QELSE : 'qelse';
WHILE : 'while';

//Operators
SHARP_SIGN:         '#';
ASSIGN:             '=';
GT:                 '>';
LT:                 '<';
BANG:               '!';
TILDE:              '~';
COLON:              ':';
EQUAL:              '==';
LE:                 '<=';
GE:                 '>=';
NOTEQUAL:           '!=';
LOGIC_AND:          '&&';
LOGIC_OR:           '||';
AND:                '&';
EXCLU:               '^';
INCLU:               '|';
QUE_MARK:            '?';
INC:                '++';
DEC:                '--';
ADD:                '+';
SUB:                '-';
MUL:                '*';
POW:                '**';
DIV:                '/';
MOD:                '%';
ADD_ASSIGN:         '+=';
SUB_ASSIGN:         '-=';
MUL_ASSIGN:         '*=';
DIV_ASSIGN:         '/=';
MOD_ASSIGN:         '%=';
SHIFT_LEFT:         '<<';
SHIFT_RIGHT:         '>>';

//Seperators
LBRACE:             '{';
RBRACE:             '}';
SEMI:               ';';
COMMA:              ',';
DOT:                '.';
LPAREN :            '(';
RPAREN :            ')';
LBRACK :            '[';
RBRACK :            ']';


Identifier: IdentifierNotDigit (IdentifierNotDigit | Digit)*
;

fragment
    IdentifierNotDigit : [a-zA-Z_]
;

fragment
    Digit : [0-9]
;

constant : Integer_Literal
         | Double_Literal
;

Integer_Literal : Decimal_Literal
;

fragment
    Decimal_Literal : DigitNotZero Digit*
                    | Digit
;

fragment
    DigitNotZero : [1-9]
;

Double_Literal : Decimal_Double_Literal
;

fragment
    Decimal_Double_Literal : Digit_Sequence ?'.' Digit_Sequence
                          | Digit_Sequence '.'
;

Digit_Sequence : Digit+
;

//WhiteSpace and Comments
WhiteSpace : (' ' | '\r' | '\n' | '\t') -> skip
;

SingleLineComment : '//' ~('\n'|'\r')* '\r'? '\n' -> skip
;

MultiLinesComment : '/*' (.)*? '*/' -> skip
;
