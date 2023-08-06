# Verbose ls
This package aims to make the output of `ls` a little more readable and verbose.  


_Note_: This package should work on Linux, but has only been tested on Mac OS (Mojave).

## Installation
```
$ pip install verbose_ls
```

## Using verbose_ls

For example, the permissions for owner, group, and other users can be hard to read in the first 9 slots.  And for someone new to `ls` it may not be obvious what the other output means.  

For example, for the setup.py in this package:
```
ls -l setup.py

-rw-r--r--  1 scottnelson  staff  406 Dec 26 20:30 setup.py
```

This util adds descriptions for each column, and expands the output to make it more clear what it means.  
```
verbose_ls setup.py

Filename: setup.py
 File Type: Regular file
 Owner Permissions: Read, Write
 Group Permissions: Read
 Other Users Permissions: Read
 Hard Links: 1
 Owner: scottnelson
 Owner Group: staff
 Size: 406B
 Last Modified: Dec 26 20:30
```
