from antlr4 import FileStream,CommonTokenStream
from qcode.qcodeLexer import qcodeLexer
from qcode.qcodeParser import qcodeParser
from qcodeHandleUtils import qcodeFileManager
from qcodePythonVisitorHandle import qcodePythonVisitorHandle
from qcodeCppVisitorHandle import qcodeCppVisitorHandle
import os
import sys
import argparse

def qcode_handle(source_file_name:str, file_manager:qcodeFileManager, flag_index:int):
    input = FileStream(source_file_name, encoding = 'utf-8')
    lexer = qcodeLexer(input)
    stream = CommonTokenStream(lexer)
    parser = qcodeParser(stream)
    tree = parser.qrunes()
    if flag_index == 0:
        visitor = qcodePythonVisitorHandle(file_manager)
        visitor.visit(tree)
    elif flag_index == 1:
        with qcodeCppVisitorHandle(file_manager) as visitor:
            visitor.visit(tree)

def main(qrunes_file,file_generate_path,flag_index):
    # current_path
    current_path = os.path.abspath(__file__)
    sep_path = os.path.dirname(current_path) + os.path.sep

	# flag_index  0:python  1:cpp
    if flag_index == 0:
        source_file_name = os.path.abspath(sep_path + "\\qcodes.q")
        qcode_file_path = file_generate_path + '\\qcodes.py'
    elif flag_index == 1:
        source_file_name = os.path.abspath(sep_path + "\\qcodes.p")
        qcode_file_path = file_generate_path + '\\qcodes.h'

    # find the result file and judge whether the file is accessed
    if os.path.exists(qcode_file_path): 
        try:
            os.remove(qcode_file_path)           
        except IOError:
            pass

    if not os.path.exists(qcode_file_path):
        qcode_file = open(qcode_file_path, 'w', encoding='utf-8')
        file_manager = qcodeFileManager(qcode_file, qrunes_file)
        qcode_handle(source_file_name, file_manager, flag_index)
        qcode_file.close()  
    
   