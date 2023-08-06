PDF Chain
=========

 A graphical user interface for the PDF Toolkit (PDFtk).
 The GUI is intended to offer the functions of the command line program `pdftk`
 to all users in a easy way.

 ![Title Image](https://pdfchain.sourceforge.io/images/screenshots/0.5.0/pdfchain-menu.png)

 PDF Chain generates a command for the PDF Toolkit from the GUI settings
 and executes it on the system.
 Therefore the PDF Toolkit must be already installed on the system.

 This version is a is a completely new implementation of PDF Chain in Python
 with a more modern interface design.

 PDF Chain comes without any warranty!


Requires
--------

 - Python3
   - Python-GObject


### External Dependency ###

 - [PDF Toolkit](https://www.pdflabs.com/t/pdftk/)
   - [PDF Toolkit - Manual](https://www.pdflabs.com/docs/pdftk-man-page/)


Installation
------------

### Install/Update Required Tools ###

 - Tools for __packaging__
   - `setuptools`
   - `wheel`

 ``` shell
 $ # Using PIP ...
 $ pip3 install --user --upgrade setuptools wheel
 $
 $ # ... or using the package manager (e.g. `pacman`)
 $ sudo pacman -S python-setuptools python-wheel
 ```


### Installing From PyPi.org Repository

#### Install/Update Required Tools ####

 ``` shell
 $ # using the package manager (e.g. `pacman`)
 $ sudo pacman -S python-pip
 ```


#### PDF Chain User Installation ####

 ```shell
 $ pip3 install pdfchain
 $ pip3 uninstall pdfchain
 ```


### Packaging and Installing from Git Repository ###

 ```shell
 $ git clone git://git.code.sf.net/p/pdfchain/neo pdfchain-neo
 ```


#### PDF Chain User Installation ####

 ```shell
 $ make dist
 $ make install
 $ make uninstall
 $ make clean
 ```

 - Dist directory: `~/.local/lib/python3.x/site-packages/pdfchain/`
 - Data directory: `~/.local/share/`
 - Exec directory: `~/.local/bin/`


#### PDF Chain System Installation ####

 ```shell
 $ make dist
 $ sudo make install
 $ sudo make uninstall
 $ make clean
 ```

 - Dist directory: `/usr/lib/python3.x/site-packages/pdfchain/`
 - Data directory: `/usr/share/`
 - Exec directory: `/usr/bin/`

Usage
-----

### Starting the Program ###

 ```shell
 $ pdfchain
 ```

 Command line options are not working yet!


### User Documentation ###

 - [User Documentation](https://pdfchain.sourceforge.io/documentation.html)
   for the previous version.
