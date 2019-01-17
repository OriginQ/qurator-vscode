# Qurator VSCode Extension

> A general purpose quantum programming language.

A Visual Studio Code extension with support for QRunes language. It provides some useful commands to make easier launching jobs and Intuitive display results among others.
![Qurator VSCode Extension](https://raw.githubusercontent.com/OriginQ/qurator-vscode/master/docs/images/execute-sample.gif "Example of running Qurator VSCode Extension")
## Requirements

1. Python(version 3.6.4 or later) 
2. Pip(version 10.1 or later) 
3. [Microsoft Visual C++ Redistributable](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) on Windows.
4. [MinGw-w64 for Windows 64](https://sourceforge.net/projects/mingw-w64/files/latest/download)

## Install

1. Press Ctrl+Shift+X to open the Extensions tab.
2. Type qurator-vscode to find the extension.
3. Click the Install button, then the Enable button.

OR

1. Press Ctrl+P to open the Quick Open dialog.
2. Select Install Extension and Type qurator-vscode to find the extension.
3. Click the Install button, then the Enable button.

Now, when encoding with Qurator (qrunes) files, the Qurator VSCode extension will be available.

### To install the extension from a local file

Download the latest release of the extension from and follow the [instructions to install it](https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix)

## Feature details

* Provide clear GUI and flexible launch style based on VSCode software
* Check necessary dependencies requested for executing QRunes files.
* Support QRunes language for users to customize quantum program.
* Support QPanda and pyQPanda SDK to meet C++ and Python programming language.
* Provide the static program analysis of QRunes. 
* Auto Completion.
* Verification.
* Hovering.
* Highlight.
* Snippets.
* Show the results with multiple charts.
* Debug. Transform QRunes to Python or C++, then debug via these host language.
* QRunes error detection.

## Useful commands

The commands below are supported at the Command Palette (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> on Windows).

Command | Description
--- | ---
```qurator-vscode: Check Qurator VSCode Extension dependencies``` | Check that the required dependencies are properly installed.
```qurator-vscode: Run this QRunes``` | Executes the code at the current editor tab.

## Contact Us

If you run into any issues or have suggestions for us, please file issues and suggestions on [GitHub](https://github.com/OriginQ/qurator-vscode). If you haven’t already provided us feedback, please take this quick survey to help shape this extension for your needs.

