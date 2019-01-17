import os
import re
def validate_setting(qrunes_file):
    """validate setting 
    - qrunes_file -- filePath
    """
    startStr = '@settings:'
    endStr = '@qcodes:'
    newLi = []
    info = fetch(startStr,endStr,qrunes_file,newLi)
    return info
    # if not info :
    #     print('Please check the settings language.')
    #     return ''
def get_language(qrunes_file):
    """Acquiring language （python or c++）
    - qrunes_file -- filePath
    """
    startStr = '@settings:'
    endStr = '@qcodes:'
    newLi = []
    info = fetch(startStr,endStr,qrunes_file,newLi)
    language_type = ''
    for i in info:
        n = re.findall(r"language", i)
        if n:
            language_type = i.split('=')[1].strip('\'";\n ')
    if not info :
        return ''
    elif 'Python' != language_type and 'C++' != language_type:
        return ''
    else :
        return language_type
def get_compile_only(qrunes_file):
    """Acquiring compile （true or false）
    - qrunes_file -- filePath
    """
    startStr = '@settings:'
    endStr = '@qcodes:'
    newLi = []
    info = fetch(startStr,endStr,qrunes_file,newLi)
    compile_only = False
    for i in info:
        n = re.findall(r"compile_only", i)
        if n:
            compile_only = i.split('=')[1].strip('\'";\n ')
    if not info :
        return False
    else :
        return compile_only
        

def is_autoimport(qrunes_file):
    """Acquiring is autoimport true or false）
    - qrunes_file -- filePath
    """
    startStr = '@settings:'
    endStr = '@qcodes:'
    newLi = []
    info = fetch(startStr,endStr,qrunes_file,newLi)
    autoimport = True
    for i in info:
        n = re.findall(r"autoimport", i)
        if n:
            autoimport = i.split('=')[1].strip('\'";\n ')
    if not info :
        return True
    else :
        return autoimport

def get_qcodes(qrunes_file):
    """Get qcodes Code
    - qrunes_file -- filePath
    """
    startStr = '@qcodes:'
    endStr = '@script:'
    newLi = []
    info = fetch(startStr,endStr,qrunes_file,newLi)
    if not info :
        print('Please check the qcodes .')
        pass
    qcodes_content = ''.join(info)
    return qcodes_content

def get_script(qrunes_file):
    """Get script Code
    - qrunes_file -- filePath
    """
    startStr = '@script:'
    endStr = '@end'
    if not fetch(startStr,endStr,qrunes_file,[]) :
        return ""
    newLi = []
    if 'Python' == get_language(qrunes_file):
        input_arr = get_import_file_name(qrunes_file)
        if input_arr:
            newLi.append('import sys\n')
            newLi.append('sys.path.append("'+os.path.dirname(qrunes_file).replace('\\', '\\\\')+'")\n')
        newLi.append('from qcodes import *\n')
        for import_path in input_arr:
            import_path = os.path.splitext(import_path)[0]
            newLi.append('from '+import_path+'_python.script import *\n')
            newLi.append('from '+import_path+'_python.qcodes import *\n')

        if is_autoimport(qrunes_file):
            newLi.append('from pyqpanda import *\n')
            newLi.append('from pyqpanda.utils import *\n')
    if 'C++' == get_language(qrunes_file):
        input_arr = get_import_file_name(qrunes_file)
        for import_path in input_arr:
            import_path = os.path.splitext(import_path)[0]
            newLi.append('#include "'+os.path.dirname(qrunes_file).replace('\\', '\\\\')+'\\\\'+import_path+'_cpp\\\\qcodes.h"\n')

        if is_autoimport(qrunes_file):
            newLi.append('#include "qcodes.h"\n')
    
    info = fetch(startStr,endStr,qrunes_file,newLi)
    script_content = ''.join(info)
    return script_content

def get_sh(qrunes_file,file_generate_path):
    """Get sh.bat Code
    - qrunes_file -- filePath
    - file_generate_path -- generate file path
    """
    # pathQ = os.path.dirname(os.__file__)+'/site-packages/qpanda'
    # local_path = os.path.dirname(qrunes_file)
    result  = ('g++ -std=c++14 -fopenmp -I./include/ '
        '-I./include/Core '
        '-I./include/Core/QuantumMachine '
        '-I./include/Core/VirtualQuantumProcessor ' 
        '-I./include/Core/Utilities '
        '-I./include/Core/Utilities/Transform '
        '-I./include/QAlg -I./include/ThirdParty '
        '-I./include/QAlg -I./include/ThirdParty/bplus-tree '
        '-I./include/ThirdParty/bplus-tree/include/ '
        '-I./include/ThirdParty/rapidjson/ '
        'file_generate_path/script.cpp '
        '-L./lib/ -lQPanda2.0 -lpthread -lTinyXML -lQAlg '
        '-o file_generate_path/a.exe').replace("file_generate_path",file_generate_path).replace('\\','/')
    return result

def fetch(startStr,endStr,file_path,new_list):
    """Get the required chip segments
    - startStr -- Start character
    - endStr -- End character
    - file_path -- Read File Path
    - new_list -- New set chip segments
    """
    with open(file_path,'r',encoding='utf-8') as f :
        
        flag = False
        for line in f:
            if line.strip().startswith(startStr):
                flag = True
            if line.strip().startswith(endStr):
                if endStr:
                    flag = False
                else :
                    flag = True
            if flag and (line.strip() != startStr):
                new_list.append(line)
    return new_list
# substr
def splitse(date,startIde,endIde):
    """Get the required string
    - date -- Data to be intercepted
    - startIde -- Start character
    - endIde -- End character
    """
    return date.split(startIde)[1].split(endIde)[0].strip()
def get_filename(qrunes_file):  
    """Get the filename
     - qrunes_file -- filePath
    """
    return os.path.splitext(os.path.basename(qrunes_file))[0]

def makedirs(path):
    """makedirs
     - path -- new path
    """
    if not os.path.exists(path):
        os.makedirs(path)
    return path
def get_import_file_name(qrunes_file):
    """Get import filename
     - qrunes_file -- filePath
    """
    startStr = '@qcodes:'
    endStr = '@script:'
    newLi = []
    info = fetch(startStr,endStr,qrunes_file,newLi)
    import_arr = []
    for i in info:
        n = re.findall(r".qrunes", i)
        if n:
            import_file_name = i.split()[1].strip('\'"')
            # qrunes_file = os.path.dirname(qrunes_file)+"\\"+import_file_name)
            import_arr.append(import_file_name)
    return import_arr

