grammar qcode;

/*
* Parse Rule
*/

qrunes : lang_unit*
;

lang_unit : include_declaration
          | declaration
          | literal_declaration
          | func_declaration
          | func_definition
;

include_declaration: INCLUDE include_sign Identifier postfix include_sign
;

include_sign : '"'
             | '\''
;

postfix : LIB_POSTFIX
        | INC_POSTFIX
        | QRUNES_POSTFIX
;

/**
    Declaration type contains quantum_type, primary_type and assist_classical_type,
    values defined by these types can be assigned or not.
    literal_declaration contains literal_type, values defined by this type must be assigned.
 */
declaration : declaration_Specifier? init_DeclaratorList SEMI
;

literal_declaration : literal_type? init_Literal_DeclaratorList SEMI
;

declaration_Specifier :  quantum_type
                      |  primary_type
                      |  assist_classical_type
;

literal_type : LET
;

primary_type : INT
             | FLOAT 
             | DOUBLE
;

quantum_type : QVEC
             | QUBIT
;

assist_classical_type : CBIT
                      | CVEC
;

init_DeclaratorList : init_Declarator
                    | init_DeclaratorList COMMA init_Declarator
;

init_Literal_DeclaratorList : init_Literal_Declarator
                    | init_Literal_DeclaratorList COMMA init_Literal_Declarator
;

init_Declarator : declarator 
                | declarator ASSIGN initializer
;

init_Literal_Declarator : declarator ASSIGN initializer
;

declarator : Identifier
           | declarator LBRACK assignment_exp RBRACK
;

assignment_exp : condition_exp
               | unary_exp assignment_operator assignment_exp
               | Digit_Sequence
               | Constant
;

assignment_operator : ASSIGN | ADD_ASSIGN | SUB_ASSIGN | MUL_ASSIGN | DIV_ASSIGN ;

condition_exp : logicOr_exp ( QUE_MARK expression COLON condition_exp)?
;

expression : assignment_exp
           | expression COMMA assignment_exp
;

logicOr_exp : logicAnd_exp
            | logicOr_exp LOGIC_OR logicAnd_exp
;

logicAnd_exp : inclu_exp
             | logicAnd_exp LOGIC_AND inclu_exp
;

inclu_exp : exclu_exp
          | inclu_exp INCLU exclu_exp
;

exclu_exp : and_exp
          | exclu_exp EXCLU and_exp
;

and_exp : equal_exp
        | and_exp AND equal_exp
;

equal_exp : relation_exp
          | equal_exp EQUAL relation_exp
          | equal_exp NOTEQUAL relation_exp
;

relation_exp : shift_exp
             | relation_exp GT shift_exp
             | relation_exp LT shift_exp
             | relation_exp GE shift_exp
             | relation_exp LE shift_exp
;

shift_exp : additive_exp
          | shift_exp LSHIFT additive_exp
          | shift_exp RSHIFT additive_exp
;

additive_exp : multi_exp
             | additive_exp ADD multi_exp
             | additive_exp SUB multi_exp
;

multi_exp : cast_exp
          | multi_exp MUL cast_exp
          | multi_exp DIV cast_exp
          | multi_exp MOD cast_exp
          | multi_exp POW cast_exp
;

cast_exp : unary_exp
         | Digit_Sequence
;
//LPAREN primary_type RPAREN cast_exp

unary_exp : postfix_exp
          | INC unary_exp
          | DEC unary_exp
          | unary_operator cast_exp
          | LOGIC_AND Identifier
;

unary_operator : ADD
               | SUB
               | MUL
               | POW
               | BANG
               | TILDE
               | AND
;

postfix_exp : primary_exp
            | postfix_exp LBRACK expression (COLON expression)? RBRACK
            | postfix_exp LPAREN argument_exp_List? RPAREN
            | postfix_exp INC
            | postfix_exp DEC
;

argument_exp_List : assignment_exp
                  | argument_exp_List COMMA assignment_exp
;

primary_exp : Identifier
            | Constant
            | LPAREN expression RPAREN
            | LEN
            | PI
;

args_type_List : args_declaration
               | args_type_List COMMA args_declaration
;

args_declaration : declaration_Specifier declarator
;

initializer : assignment_exp
            | LBRACE  initializerList ( COMMA initializerList ) RBRACE
;

initializerList
    :   designation? initializer
    |   initializerList COMMA designation? initializer
    ;

designation
    :   designatorList ASSIGN
    ;

designatorList
    :   designator
    |   designatorList designator
    ;

designator
    :   LBRACK constant_exp RBRACK
    ;
    //|   DOT Identifier

constant_exp : condition_exp
;

func_declaration : func_declarator SEMI
;

func_declarator : Identifier LPAREN args_type_List ? RPAREN
;

func_definition : func_declarator comp_stmt
;

declarationList : declaration
                | declaration declarationList
;

comp_stmt : LBRACE block_List? RBRACE
;

block_List : block_Item
           | block_List block_Item
;

block_Item : statement
           | declaration
           | literal_declaration
;
          
statement : exp_stmt 
          | comp_stmt
          | select_stmt
          | iterate_stmt
          | quantum_gate_stmt
          | measurement_stmt
          | q_if_operation
          | q_while_operation
;

exp_stmt : expression ? SEMI
;

select_stmt : IF LPAREN expression RPAREN statement (ELSE statement)?
;

iterate_stmt : FOR LPAREN for_stmt RPAREN statement
;

/*
for_stmt : for_declaration? SEMI for_condition? SEMI for_increacement?
;

for_declaration : declaration_Specifier assignment_exp
                | expression
;

for_condition : Identifier compare_operator assignment_exp
              | for_condition SEMI Identifier compare_operator assignment_exp
;

for_increacement : assignment_exp()
                 | for_increacement SEMI assignment_exp()
;

compare_operator : GT | LT | LE | GE
;
*/
for_stmt : for_start? COLON? for_step? COLON for_end?
;

for_start : primary_exp
          | Identifier ASSIGN expression
;

for_step : assignment_exp
;

for_end : assignment_exp
;
quantum_gate_stmt : quantum_gate_operation SEMI
;

quantum_gate_operation : H_GATE LPAREN control_gate_exp RPAREN
                       | X_GATE LPAREN control_gate_exp RPAREN
                       | NOT_GATE LPAREN control_gate_exp RPAREN
                       | T_GATE LPAREN control_gate_exp RPAREN
                       | S_GATE LPAREN control_gate_exp RPAREN
                       | Y_GATE LPAREN control_gate_exp RPAREN
                       | Z_GATE LPAREN control_gate_exp RPAREN
                       | X1_GATE LPAREN control_gate_exp RPAREN
                       | Y1_GATE LPAREN control_gate_exp RPAREN
                       | Z1_GATE LPAREN control_gate_exp RPAREN
                       | U4_GATE LPAREN control_gate_exp COMMA four_angle_args RPAREN
                       | RX_GATE LPAREN control_gate_exp COMMA expression  RPAREN
                       | RY_GATE LPAREN control_gate_exp COMMA expression  RPAREN
                       | RZ_GATE LPAREN control_gate_exp COMMA expression  RPAREN
                       | CNOT_GATE LPAREN double_gate_exp RPAREN
                       | CZ_GATE LPAREN double_gate_exp RPAREN
                       | CU_GATE LPAREN double_gate_exp COMMA four_angle_args RPAREN
                       | ISWAP LPAREN double_gate_exp COMMA theta RPAREN
                       | CR_GATE LPAREN double_gate_exp COMMA theta RPAREN

;

four_angle_args : alpha COMMA beta COMMA gamma COMMA delta
;

alpha: expression
;

beta: expression
;

gamma: expression
;

delta: expression
;

theta : expression
;

control_gate_exp : Identifier LBRACK expression RBRACK
                 | Identifier
;

double_gate_exp : control_gate_exp COMMA target_gate_exp
;

target_gate_exp : Identifier LBRACK expression RBRACK
                | Identifier
;

measurement_stmt : MEASURE LPAREN control_gate_exp COMMA accept_cbit_stmt RPAREN SEMI
;

accept_cbit_stmt : Identifier LBRACK expression RBRACK
                 | Identifier
;

// qif operation 
q_if_operation : QIF LPAREN q_condition RPAREN LBRACE q_if_stmt RBRACE ( QELSE LBRACE q_if_stmt RBRACE )?
;

q_if_stmt : q_if_stmt_item*
;

q_if_stmt_item : statement
            | declaration
            | literal_declaration
;

// qwhile operation 
q_while_operation : QWHILE LPAREN q_condition RPAREN LBRACE q_while_stmt RBRACE 
;

q_while_stmt : q_while_stmt_item*
;

q_while_stmt_item : statement
            | declaration
            | literal_declaration
;

q_condition : inclu_exp ( q_operator inclu_exp )*
;

q_operator : LOGIC_AND | LOGIC_OR
;

/*
* Lexer Rule
*/

PI: 'Pi';

//KeyWord
LET: 'let';
INCLUDE: 'include';
INT: 'int';
FLOAT: 'float';
BOOLEAN: 'boolean';
IF: 'if';
ELSE: 'else';
FOR: 'for';
LIB_POSTFIX: '.lib';
INC_POSTFIX: '.inc';
QRUNES_POSTFIX: '.qrunes';
VAR: 'var';
DOUBLE: 'double';

//built-in type
LEN: 'len';
HOST: 'host';

//Quantum keywords
QVEC: 'qvec';
QUBIT: 'qubit';
CVEC: 'cvec';
CBIT: 'cbit';

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

CNOT_GATE : 'CNOT';
CZ_GATE : 'CZ';
CR_GATE : 'CR';
CU_GATE : 'CU';
ISWAP : 'iSWAP';

MEASURE : 'Measure';

QIF : 'qif';
QWHILE : 'qwhile';
QELSE : 'qelse';

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
LSHIFT:             '<<';
RSHIFT:             '>>';

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

Constant : Integer_Literal
         | Float_Literal
;

fragment
    Integer_Literal : Decimal_Literal 
;

fragment
    Decimal_Literal : DigitNotZero Digit*
;

fragment
    DigitNotZero : [1-9]
;

fragment
    Float_Literal : Decimal_Float_Literal
;

fragment
    Decimal_Float_Literal : Digit_Sequence ?'.' Digit_Sequence
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