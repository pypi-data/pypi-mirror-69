# big-todo

Make a big TODO file by concatenating all TODO files in a directory tree.

# install

pip install big-todo

# usage

usage: btodo - make a big TODO file [-h] [--name NAME] [--include-header] dir

positional arguments:
  dir               the root directory

optional arguments:
  -h, --help        show this help message and exit
  --name NAME       the name of the file to combine
  --include-header  prepend the relative file path to each section

# example use

From the repo root, run:

    big-todo demo_folder --include-header
    
This will traverse the demo_folder and generate a virtual TODO file with
headers turned on, meaning the path of the file being appended will be
inserted as the first line of output.  
    
   
