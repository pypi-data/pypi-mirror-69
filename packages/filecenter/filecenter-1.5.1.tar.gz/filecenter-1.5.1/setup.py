#from distutils.core import setup
from setuptools import setup

# read the contents of the README file
from os import path
this_directory = path.abspath(path.dirname(__file__))
with open(path.join(this_directory, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()

setup(
  name = 'filecenter',         # How you named your package folder (MyLib)
  packages = ['filecenter'],   # Chose the same as "name"
  version = '1.5.1',      # Start with a small number and increase it with every change you make
  license='MIT',        # Chose a license from here: https://help.github.com/articles/licensing-a-repository
  description = 'A file? An info!\n Get infos on file with a single line of code!\n Works with a database of file extensions so that it can even give you the type of the file.',   # Give a short description about your library
  author = 'Anime no Sekai',                   # Type in your name
  author_email = 'niichannomail@gmail.com',      # Type in your E-Mail
  url = 'https://github.com/Animenosekai/filecenter',   # Provide either the link to your github or to your website
  download_url = 'https://github.com/Animenosekai/filecenter/archive/v1.5.tar.gz',    # Archive link
  keywords = ['file', 'information', 'fileinfo', 'type', 'extension', 'file management'],   # Keywords that define your package best
  install_requires=[            # I get to this in a second
      ],
  classifiers=[
    'Development Status :: 4 - Beta',      # Chose either "3 - Alpha", "4 - Beta" or "5 - Production/Stable" as the current state of your package
    'Intended Audience :: Developers',      # Define that your audience are developers
    'Topic :: Software Development :: Build Tools',
    'License :: OSI Approved :: MIT License',   # Again, pick a license
    'Programming Language :: Python :: 3',      #Specify which pyhton versions that you want to support
    'Programming Language :: Python :: 3.4',
    'Programming Language :: Python :: 3.5',
    'Programming Language :: Python :: 3.6',
    'Programming Language :: Python :: 3.7',
    'Programming Language :: Python :: 3.8',
  ],
  long_description=long_description,
  long_description_content_type='text/markdown'
)