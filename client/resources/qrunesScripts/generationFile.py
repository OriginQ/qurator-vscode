import argparse
import os
import qcodeHandle
import generationFileUtils as utils
IMPORT_LIST = []

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--file')
    args = vars(parser.parse_args())
    load_qcode(args['file'])

def load_qcode(qrunes_file):
    """Start loading data
    - qrunes_file -- The data address to load
    """
    utils.validate_setting(qrunes_file)
    current_path = os.path.abspath(__file__)
    sep_path = os.path.abspath(os.path.dirname(current_path) + os.path.sep)
    # Get execution language
    language_type = utils.get_language(qrunes_file)
    compile_only = utils.get_compile_only(qrunes_file)
    print(language_type)
    print(compile_only)
    if 'Python' == language_type :
        python_data(qrunes_file,sep_path,0)
    elif 'C++' == language_type :
        cpp_data(qrunes_file,sep_path,1)

def generate_import_py_file(qrunes_file,sep_path,language_type):
    """generate import python file
    - qrunes_file -- The data address to load
    - sep_path -- Built-in code path
    - language_type -- language type
    """
    if not qrunes_file in IMPORT_LIST:
        IMPORT_LIST.append(qrunes_file)
    import_arr = utils.get_import_file_name(qrunes_file)
    if import_arr:
        for i in import_arr:
            qrunes_file = os.path.dirname(qrunes_file)+"\\"+i
            if not qrunes_file in IMPORT_LIST:
                python_data(qrunes_file,sep_path,language_type) 

def python_data(qrunes_file,sep_path,language_type):
    """generate python file
    - qrunes_file -- The data address to load
    - sep_path -- Built-in code path
    - language_type -- language type
    """
    generate_import_py_file(qrunes_file,sep_path,language_type)
    path=sep_path + "\\qcodes.q"
    with open(path, 'w', encoding = 'utf-8') as f:
        f.write(utils.get_qcodes(qrunes_file))
    generate_package_name = utils.get_filename(qrunes_file)+'_python'
    file_generate_path = utils.makedirs(os.path.dirname(qrunes_file)+"\\"+generate_package_name)
    script_data = utils.get_script(qrunes_file)
    path =  file_generate_path + '\\script.py'
    with open(path, 'w', encoding = 'utf-8') as f:
        f.write(script_data)
    qcodeHandle.main(qrunes_file,file_generate_path,language_type)

def generate_import_cpp_file(qrunes_file,sep_path,language_type):
    """generate import cpp file
    - qrunes_file -- The data address to load
    - sep_path -- Built-in code path
    - language_type -- language type
    """
    if not qrunes_file in IMPORT_LIST:
        IMPORT_LIST.append(qrunes_file)
    import_arr = utils.get_import_file_name(qrunes_file)
    if import_arr:
        for i in import_arr:
            qrunes_file = os.path.dirname(qrunes_file)+"\\"+i
            if not qrunes_file in IMPORT_LIST:
                cpp_data(qrunes_file,sep_path,language_type) 

def cpp_data(qrunes_file,sep_path,language_type):
    """generate c++ file
    - qrunes_file -- The data address to load
    - sep_path -- Built-in code path
    - language_type -- language type
    """
    generate_import_cpp_file(qrunes_file,sep_path,language_type)
    generate_package_name = utils.get_filename(qrunes_file)+'_cpp'
    file_generate_path = utils.makedirs(os.path.dirname(qrunes_file)+"\\"+generate_package_name)
    #generate sh.bat file
    path = sep_path + "\\sh.bat"
    with open(path, 'w', encoding = 'utf-8') as f:
        f.write(utils.get_sh(qrunes_file,file_generate_path))
    #generate qcodes.p file
    path = sep_path + "\\qcodes.p"
    with open(path, 'w') as f:
        f.write(utils.get_qcodes(qrunes_file))# Get qcodes Code
    #generate script.cpp file
    script_data = utils.get_script(qrunes_file)
    path=file_generate_path + "\\script.cpp"
    with open(path, 'w', encoding = 'utf-8') as f:
        f.write(script_data)# Get Script Code
    qcodeHandle.main(qrunes_file,file_generate_path,language_type)

if __name__ == '__main__':
    main()