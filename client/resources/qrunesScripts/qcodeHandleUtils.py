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
            print(content)
        else:
            raise TypeError('content must be str')

    def createline(self):
        self.write('\n')

    def createTab(self):
        self.write('    ')

    #According to PEP8 ,ident scalar is use space better than tab, ident == 4 space
    def createIdent(self, times):
        for i in range(times):
            self.createTab()

    def createBlank(self):
        self.write(" ")
    #内容后面加一个空格
    def createBackSpace(self,content):
        self.write(content)
        self.createBlank()
    def createLineTab(self):
        self.createline()
        self.createTab()


    def createPythonImport(self):
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
        self.write('#include <math.h>')
        self.createline()
        self.write("#include \"Core/QPanda.h\"")
        self.createline()
        self.write('#include "ThirdParty/Eigen/Dense"')
        self.createline()
        self.write('#include "QAlg/Components/Operator/PauliOperator.h"')
        self.createline()
        self.write('#include "Variational/var.h"')
        self.createline()
        self.write('#include "Variational/expression.h"')
        self.createline()
        self.write('#include "Variational/utils.h"')
        self.createline()
        self.write('#include "Variational/Optimizer.h"')
        self.createline()
        self.write('using namespace Eigen;')
        self.createline()
        self.write('using namespace Variational;')
        self.createline()
        self.write('using namespace QPanda;')
        self.createline()
        self.write('using namespace std;')
        self.createline()
        self.createline()
    def createCppEnd(self):
        self.createline()
        self.write('#endif')






