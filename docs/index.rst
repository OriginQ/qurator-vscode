.. qurator_tutorial documentation master file, created by
   sphinx-quickstart on Mon Feb 18 11:40:18 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

qurator-vscode
============================================

一种基于VS Code的量子程序开发工具
--------------------------------------------
qurator-vscode 是本源量子推出的一款可以开发量子程序的 VS Code 插件。其支持 QRunes2 语言量子程序开发，并支持 Python 和 C++ 语言作为经典宿主语言。

在 qurator-vscode 中，量子程序的开发主要分为编写和运行两个部分。

* 编写程序：插件支持模块化编程，在不同的模块实现不同的功能，其中量子程序的编写主要在 qcodes 模块中；

* 程序运行：即是收集结果的过程，插件支持图表化数据展示，将运行结果更加清晰的展现在您的面前。

qurator-vscode 设计思想
-------------------------
考虑到目前量子程序的开发离不开经典宿主语言的辅助，qurator-vscode 插件设计时考虑到一下几点：

1. 模块编程：
********************

qurator-vscode 插件支持模块编程，将整体程序分为三个模块：settings、qcodes 和 script 模块。在不同的模块完成不同的功能。
在 settings 模块中，您可以进行宿主语言类型、编译还是运行等设置；在 qcodes 模块中， 您可以编写 QRunes2 语言程序；
在 script 模块中，您可以编写相应的宿主语言程序。

2. 切换简单：
********************

qurator-vscode 插件目前支持两种宿主语言，分别为 Python 和 C++。您可以在两种宿主语言之间自由的切换，您只需要在 settings 模块中设置 language 的
类型，就可以在 script 模块中编写对应宿主语言的代码。插件会自动识别您所选择的宿主语言，并在 script 模块中提供相应的辅助功能。

3. 图形展示：
********************

qurator-vscode 插件提供图形化的结果展示，程序运行后会展示 json 格式的运行结果，您可以点击运行结果，会生成相应的柱状图，方便您对运行结果的分析。

目录：

.. toctree::
   :maxdepth: 2

   source/prerequisites
   source/quickStart
   source/functionDetail
   source/changeLog


