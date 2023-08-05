# -*- coding: utf-8 -*
import os
from setuptools import setup

dirs = ['mkpiano']
modules = ['mkpiano']
for path,dir_list,file_list in os.walk("./mkpiano"):
    for dir_name in dir_list:
        if dir_name.find("__")==-1 and dir_name.find("egg")==-1:
            dirs.append((path+"/"+dir_name).replace("/",".").replace("..",""))
    for file_name in file_list:
        if file_name.find(".py")!=-1 and file_name.find(".pyc")==-1:
            modules.append((path+"."+file_name.replace(".py","")).replace("/",".").replace("..",""))
setup(
    name='mkpiano',
    version='0.1.0',
    author='makeblock',
    author_email='flashindream@gmail.com',
    url='https://makeblock.com',
    description=u'library for makeblock fingertip piano',
    packages=dirs,
    py_modules=modules,
    install_requires=['pyserial'],
)