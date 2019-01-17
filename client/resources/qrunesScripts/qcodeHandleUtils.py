from generationFileUtils import get_import_file_name
import os
class qcodeFileManager():

    def __init__(self, file, qrunes_file):
        self.file = file
        self.qrunes_file = qrunes_file

    def write(self, content):
        '''
        write single line to qcode file
        :param content: content to write
        :param split: separator between contexts
        :return:
        '''
        if isinstance(content, str):
            self.file.write(content)
        else:
            raise TypeError('content must be str')

    def createline(self):
        self.write('\n')

    def createTab(self):
        self.write('\t')

    #According to PEP8 ,ident scalar is use space better than tab, ident == 4 space
    def createIdent(self, times):
        for i in range(times):
            self.createTab()

    def createBlank(self):
        self.write(" ")

    def createPythonImport(self,qrunes_file):
        for import_path in get_import_file_name(qrunes_file):
            import_path = os.path.splitext(import_path)[0]
            self.write("from "+import_path+"_python.script import *")
            self.createline()
            self.write("from "+import_path+"_python.qcodes import *")
            self.createline()
        self.write("from pyqpanda import *")
        self.createline()
        self.write("from pyqpanda.utils import *")
        self.createline()
        self.createline()

    def createCppImport(self):
        self.write('#ifndef _QCODES_H')
        self.createline()
        self.write('#define _QCODES_H')
        self.createline()
        self.write('#include "QPanda.h"')
        self.createline()
        self.write('using namespace QPanda;')
        self.createline()
        self.write('using namespace std;')

    def createCppEnd(self):
        self.createline()
        self.write('#endif')





