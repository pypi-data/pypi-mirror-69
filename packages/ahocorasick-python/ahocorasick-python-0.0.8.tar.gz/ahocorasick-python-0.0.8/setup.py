# coding:utf-8
__author__ = 'zhoukunpeng'
# --------------------------------
# Created by zhoukunpeng  on 2015/8/15.
# ---------------------------------
from setuptools import setup, find_packages

with open("README.md", "r") as f:
    long_description = f.read()

setup(
    name="ahocorasick-python",
    packages=["ahocorasick"],
    version='0.0.8',
    description="this project is a aho-corasick automaton implementation by python",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url='https://github.com/zhoukunpeng504/ahocorasick-python',
    author="zhoukunpeng",
    author_email="zhoukunpeng504@163.com",
    package_data={
        '': ['*.rst'],
    }
)
