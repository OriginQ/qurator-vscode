import os
import re
import platform
def validate_top(qrunes_file):
    """validate qcodes 
    - qrunes_file -- filePath
    """
    f = open(qrunes_file)
    info = f.read()
    f.close()
    # ss =  re.search('@settings:', info)


    count = info.count("@",0,len(info))
    is_have_se = re.search('@settings:', info)
    is_have_qc = re.search('@qcodes:', info)
    is_have_sc = re.search('@script:', info)
    if count == 2:
        if is_have_se and is_have_qc:
            return 'info'
        else:
            print('Please check \'@settings: and @qcodes:\' .')
            return 'error'
    elif count == 3:
        if not is_have_se :
            print('Please check \'@settings:\' .')
            return 'error'
        elif not is_have_qc:
            print('Please check \'@qcodes:\' .')
            return 'error'
        elif not is_have_sc:
            print('Please check \'@script:\' .')
            return 'error'
        else :
            return 'info'
    else:
        print('Please check \'Head identification\' .')
        return 'error'
def get_language(qrunes_file,is_skew):
    """Acquiring language （python or c++）
    - qrunes_file -- filePath
    """
    startStr = '@settings:'
    endStr = '@qcodes:'
    newLi = []
    info = fetch(startStr,endStr,qrunes_file,newLi,is_skew)
    language_type = ''
    for i in info:
        n = re.findall(r"language\s{0,}=\s{0,}", i)
        if n:
            language_type = i.split('=')[1].strip('\'";\n ')
    if not language_type :
        print('Please check configure \'language\' .')
        return 'error'
    elif 'python' != language_type.lower() and 'c++' != language_type.lower():
        print('Please check configure \'language\' .')
        return 'error'
    else :
        return language_type.lower()
def get_compile_only(qrunes_file,is_skew):
    """Acquiring compile （true or false）
    - qrunes_file -- filePath
    """
    startStr = '@settings:'
    endStr = '@qcodes:'
    newLi = []
    info = fetch(startStr,endStr,qrunes_file,newLi,is_skew)
    compile_only = ''
    for i in info:
        n = re.findall(r"compile_only\s{0,}=\s{0,}", i)
        if n:
            compile_only = i.split('=')[1].strip('\'";\n ')
    if not compile_only :
        return False
    elif 'False' != compile_only and 'True' != compile_only:
        print('Please check configure \'compile_only\' .')
        return 'error'
    else :
        return compile_only
        

def is_autoimport(qrunes_file):
    """Acquiring is autoimport true or false）
    - qrunes_file -- filePath
    """
    startStr = '@settings:'
    endStr = '@qcodes:'
    newLi = []
    info = fetch(startStr,endStr,qrunes_file,newLi,True)
    autoimport = ''
    for i in info:
        n = re.findall(r"autoimport\s{0,}=\s{0,}", i)
        if n:
            autoimport = i.split('=')[1].strip('\'";\n ')
    if not autoimport :
        return True
    elif 'False' != autoimport and 'True' != autoimport:
        print('Please check configure \'autoimport\' .')
        return 'error'
    else :
        return autoimport

def get_qcodes(qrunes_file,is_skew):
    """Get qcodes Code
    - qrunes_file -- filePath
    """
    startStr = '@qcodes:'
    endStr = '@script:'
    newLi = []
    info = fetch(startStr,endStr,qrunes_file,newLi,is_skew)
    qcodes_content = ''.join(info)
    return qcodes_content

def get_script(qrunes_file,is_skew):
    """Get script Code
    - qrunes_file -- filePath
    """
    startStr = '@script:'
    endStr = '@end'
    if not fetch(startStr,endStr,qrunes_file,[],is_skew) :
        return ""
    newLi = []
    if 'python' == get_language(qrunes_file,True):
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
    if 'c++' == get_language(qrunes_file,True):
        input_arr = get_import_file_name(qrunes_file)
        for import_path in input_arr:
            import_path = os.path.splitext(import_path)[0]
            if 'Windows'==platform.system() :
                newLi.append('#include "'+os.path.dirname(qrunes_file).replace('\\', '\\\\')+'\\\\'+import_path+'_cpp\\\\qcodes.h"\n')
            else :
                newLi.append('#include "'+os.path.dirname(qrunes_file).replace('\\', '\\\\')+os.sep+import_path+'_cpp'+os.sep+'qcodes.h"\n')
        if is_autoimport(qrunes_file):
            newLi.append('#include "qcodes.h"\n')
            newLi.append('using namespace QPanda;\n')
    
    info = fetch(startStr,endStr,qrunes_file,newLi,is_skew)
    script_content = ''.join(info)
    return script_content

def get_sh_windows(qrunes_file,file_generate_path):
    """Get windows sh.bat Code
    - qrunes_file -- filePath
    - file_generate_path -- generate file path
    """
    result  = ('g++ -w -std=c++14 -fopenmp -I./include/ '
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
        '-L./lib_windows/ -lQPanda2 -lpthread -lTinyXML -lQAlg -lVariational '
        '-o file_generate_path/a.exe').replace("file_generate_path",file_generate_path).replace('\\','/')
    return result

def get_sh_linux(sep_path,file_generate_path):
    """Get linux start.sh Code
    - sep_path -- sep_path
    - file_generate_path -- generate file path
    """
    result  = ('#! /bin/bash\n'
        'g++ -std=c++14 -fopenmp -Isep_path/include/ '
        '-Isep_path/include/Core '
        '-Isep_path/include/Core/QuantumMachine '
        '-Isep_path/include/Core/VirtualQuantumProcessor ' 
        '-Isep_path/include/Core/Utilities '
        '-Isep_path/include/Core/Utilities/Transform '
        '-Isep_path/include/QAlg -Isep_path/include/ThirdParty '
        '-Isep_path/include/QAlg -Isep_path/include/ThirdParty/bplus-tree '
        '-Isep_path/include/ThirdParty/bplus-tree/include/ '
        '-Isep_path/include/ThirdParty/rapidjson/ '
        'file_generate_path/script.cpp '
        '-Lsep_path/lib_linux/ -lQPanda2.0 -lpthread -lTinyXML -lQAlg '
        '-o file_generate_path/a').replace("file_generate_path",file_generate_path).replace("sep_path",sep_path)
    return result

def fetch(startStr,endStr,file_path,new_list,is_skew):
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
                if (line.find('//') > -1) and is_skew:
                    line = line[0:line.find('//')]+'\n'
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
    info = fetch(startStr,endStr,qrunes_file,newLi,True)
    import_arr = []
    for i in info:
        n = re.findall(r".qrunes", i)
        if n:
            import_file_name = i.split()[1].strip('\'"')
            # qrunes_file = os.path.dirname(qrunes_file)+"\\"+import_file_name)
            import_arr.append(import_file_name)
    return import_arr

