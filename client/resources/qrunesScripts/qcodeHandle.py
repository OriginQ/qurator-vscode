from antlr4 import FileStream,CommonTokenStream
from qcode.QcodeLexer import QcodeLexer
from qcode.QcodeParser import QcodeParser
from QcodeUtil import QcodeFileManager
from TraverseEngineCpp import TraverEngineCpp
from TraverseEngine import TraverEngine
import os
import sys
import argparse

def qcode_handle(source_file_name:str, file_manager:QcodeFileManager, flag_index:int):
    input = FileStream(source_file_name, encoding = 'utf-8')
    lexer = QcodeLexer(input)
    stream = CommonTokenStream(lexer)
    parser = QcodeParser(stream)
    tree = parser.qrunes()
    if flag_index == 0:
        visitor = TraverEngine(file_manager)
        visitor.visit(tree)
    elif flag_index == 1:
        with TraverEngineCpp(file_manager) as visitor:
            visitor.visit(tree)

def main(qrunes_file,file_generate_path,flag_index):
    # current_path
    current_path = os.path.abspath(__file__)
    sep_path = os.path.dirname(current_path) + os.path.sep

	# flag_index  0:python  1:cpp
    if flag_index == 0:
        source_file_name = os.path.abspath(sep_path + os.sep + "qcodes.q")
        qcode_file_path = file_generate_path + os.sep + 'qcodes.py'
    elif flag_index == 1:
        source_file_name = os.path.abspath(sep_path + os.sep + "qcodes.p")
        qcode_file_path = file_generate_path + os.sep + 'qcodes.h'

    # find the result file and judge whether the file is accessed
    if os.path.exists(qcode_file_path): 
        try:
            os.remove(qcode_file_path)           
        except IOError:
            pass

    if not os.path.exists(qcode_file_path):
        qcode_file = open(qcode_file_path, 'w', encoding='utf-8')
        file_manager = QcodeFileManager(qcode_file)
        qcode_handle(source_file_name, file_manager, flag_index)
        qcode_file.close()  
    
   