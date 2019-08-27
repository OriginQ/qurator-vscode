grammar setting;

qsetting:qConfig*;

qConfig: lan_set
       | auto_import
       | compile_only
;

auto_import: AUTOIMPORT EQUAL ischoosed SEMI
;

lan_set: LANGUAGE EQUAL lan_type SEMI
;

compile_only: COMPILE_ONLY EQUAL ischoosed SEMI
;

ischoosed: Identifier
;

lan_type: Identifier
;

//Keyword
LANGUAGE: 'language'
;

AUTOIMPORT: 'autoimport'
;

COMPILE_ONLY: 'compile_only'
;

EQUAL: '='
;

SEMI: ';'
;

Identifier: IdentifierNotDigit (IdentifierNotDigit| Operator | Digit)*
;

fragment
    IdentifierNotDigit : [a-zA-Z_]
;

fragment
    Digit : [0-9]
; 

fragment
    Operator: '+'
;

//WhiteSpace and Comments
WhiteSpace: (' ' | '\r' | '\n' | '\t') -> skip
;

SingleLineComment: '//' ~('\n'|'\r')* '\r'? '\n' -> skip
;
    
MultiLinesComment: '/*' (.)*? '*/' -> skip
;