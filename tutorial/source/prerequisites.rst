准备工作
==============

使用 qurator-vscode 插件之前需要做一些准备工作，以确保量子程序能够正确的运行。

需要依赖的运行环境有：

* Python (版本 3.6.4 - 3.6.8)
* Pip (版本 10.1 及以上)
* Microsoft Visual C++ Redistributable (Windows)
* MinGw-w64 (Windows 64位版本)

其中，pip 负责下载宿主语言为 Python 时程序运行所依赖的包。Microsoft Visual C++ Redistributable 和 MinGw-w64 是宿主语言为 C++ 时程序运行所依赖的包。

1. 安装插件
-------------

首先需要您安装 `VS Code <https://code.visualstudio.com/>`_ ，然后打开 VS Code 安装 qurator-vscode 插件：
使用 Ctrl + Shift + X 快捷键打开插件页面，或者您可以在最左侧栏找到 Extensions 点击进入，然后输入 qurator-vscode 来搜索插件，点击 Install 按钮进行插件的安装。

.. image:: ../images/extension.png

2. 检测运行环境
----------------

插件安装好之后，您可以创建以 .qrunes 结尾的文件，此时插件会自动检测是否存在程序运行所依赖的环境。您也可以自己检测程序运行环境，使用 Ctrl + Shift + P 快捷键打开 VS Code 命令行，
输入 qurator-vscode 时您可以看到 qurator-vscode: Check Qurator VSCode Extension dependencies 选择项，点击此项就可以进行运行环境的检测。

.. image:: ../images/checkDependencies.png

检测到运行时所需环境，会在右下角展示软件及版本号：

.. image:: ../images/checkSuccess.png