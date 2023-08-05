# CANDY Board service CLI

[![GitHub release](https://img.shields.io/github/release/CANDY-LINE/candy-board-cli.svg)](https://github.com/CANDY-LINE/candy-board-cli/releases/latest)
[![License ASL2.0](https://img.shields.io/github/license/CANDY-LINE/candy-board-cli.svg)](https://opensource.org/licenses/Apache-2.0)

A CLI tool to communicate with a CANDY Board service running on systemd

## pip Installation

```
$ pip install candy-board-cli
```

## pip Uninstallation

```
$ pip candy-board-cli
```

## Development

### Prerequisites

 * [pandoc](http://pandoc.org)
 * [pypandoc](https://pypi.python.org/pypi/pypandoc/1.2.0)

On Mac OS:

```
$ brew install pandoc
$ pip install pypandoc
```

### Local Installation test

```
$ ./setup.py install --record files.txt
```

### Local Uninstallation test

```
$ cat files.txt | xargs rm -f
```

### Create local package

```
$ tar czvf candy-board-cli.tgz --exclude "./.*" --exclude build --exclude dist *
```

### Install the local package

```
# pip command
$ pip install --no-cache-dir ./candy-board-cli.tgz 

# python command
$ python -m pip install --no-cache-dir ./candy-board-cli.tgz 

# python3 command
$ python3 -m pip install --no-cache-dir ./candy-board-cli.tgz 
```

# Revision history
* 4.0.0
    - Add Python 3 (3.7+) support (still working on Python 2.7)

* 3.3.0
   - Add an option to disable color escape (Set `NO_COLOR=1` for disabling the message coloring)

* 3.2.2
   - Fix a pypi upload error

* 3.2.1
    - Fix a KeyError

* 3.2.0
    - Add a new option (`-q`) to `gnss start` to enable QZSS, GLONASS and Beidou
    - Add a new option (`-a`) to `gnss start` to enable QZSS, Galileo, GLONASS and Beidou

* 3.1.0
    - Make `--suspend` and `--resume` options available for `apn ls`, `network show`, `sim show` and `modem show` commands

* 3.0.0
    - Add new categories, `connection` and `gnss`
    - Add new actions in `service` category

* 2.0.0
    - Change license to Apache Software License 2.0
    - Add a new option (`-o`) for providing network operator type when setting an APN
    - Add a new option (`-o`) for passing optional arguments to `modem show` and `modem reset` commands

* 1.0.5
    - Fix an issue where the shebang line in the published script pointed to a machine specific path (not to publish bdist_wheel)

* 1.0.3
    - Make pypandoc dependency optional

* 1.0.2
    - Fix an issue where the code could exit after opening a socket which caused socket error on the socket server

* 1.0.1
    - Don't have users run modem reset command casually

* 1.0.0
    - Initial public release

* 0.0.1
    - Initial beta release
