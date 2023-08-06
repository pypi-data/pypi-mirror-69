#!/usr/bin/env python
#   -*- coding: utf-8 -*-

from setuptools import setup
from setuptools.command.install import install as _install

class install(_install):
    def pre_install_script(self):
        pass

    def post_install_script(self):
        pass

    def run(self):
        self.pre_install_script()

        _install.run(self)

        self.post_install_script()

if __name__ == '__main__':
    setup(
        name = 'pybuilder-scm-ver-plugin',
        version = '0.1.1',
        description = 'pybuilder plugin to set project from SCM',
        long_description = '',
        long_description_content_type = None,
        classifiers = [
            'Development Status :: 4 - Beta',
            'Programming Language :: Python',
            'Intended Audience :: Developers',
            'License :: OSI Approved :: MIT License',
            'Operating System :: OS Independent',
            'Topic :: Software Development :: Build Tools',
            'Topic :: Software Development :: Version Control'
        ],
        keywords = '',

        author = 'Kyrylo Shpytsya',
        author_email = 'kshpitsa@gmail.com',
        maintainer = '',
        maintainer_email = '',

        license = 'MIT',

        url = 'https://github.com/kshpytsya/pybuilder-scm-ver-plugin',
        project_urls = {},

        scripts = [],
        packages = ['pybuilder_scm_ver_plugin'],
        namespace_packages = [],
        py_modules = [],
        entry_points = {},
        data_files = [],
        package_data = {},
        install_requires = ['setuptools_scm'],
        dependency_links = [],
        zip_safe = True,
        cmdclass = {'install': install},
        python_requires = '',
        obsoletes = [],
    )
