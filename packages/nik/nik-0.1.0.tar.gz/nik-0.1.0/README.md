# nik

[![PyPi](https://img.shields.io/badge/License-AGPL%20v3-orange.svg)](https://pypi.org/project/nik/)
[![AGPL License](https://img.shields.io/badge/License-AGPL%20v3-orange.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)

## General Information

`nik` is a simplistic, versatile implementation of the *Zettelkasten* note-taking method roughly based on the original [Zettelkasten](https://niklas-luhmann-archiv.de/) introduced by German sociologist and philosopher [Niklas Luhmann](https://en.wikipedia.org/wiki/Niklas_Luhmann). It is based on plain-text markup files and intends to not get into your way whenever possible. Think of it more like a useful companion that helps you to browse, navigate and visualize your text-based Zettelkasten.

## Features

* Plain-text markup files (*Markdown*, *Org-mode*, *AsciiDoc*)
* HTML based web view of your Zettelkasten (using *static site generator*)
* LaTeX support for web view (using MathJax)
* [GraphML](https://en.wikipedia.org/wiki/GraphML) export of your Zettelkasten

## Installation

You can install `nik` from [The Python Package Index (PyPI)](http://pypi.org). To do this, run the following command:
* `pip install nik`

## Usage (CLI)

Initialize a directory as your Zettelkasten with `nik init <PATH>`. Following on you can either provide the path to the Zettelkasten directly (`-d` option) or use the *environment variable* `ZETTELKASTEN_PATH` to point to your Zettelkasten. To show some basic information about your Zettelkasten run `nik status`. You can always run `nik --help` to ask for help.

## Usage (Python)

Did you know that `nik` is both a command-line tool and a Python library? This is how it works:

``` python
from nik import Zettelkasten

path = '~/Zettelkasten'
z = Zettelkasten(path)

# Let's perform a rescan of the Zettelkasten directory
z.scan()

# Print all files in the index
print(z.index.files)
```

## Development

* Create and activate virtual environment: e.g. `mkvirtualenv -p /usr/bin/python nik`
* Install: `pip install -e .`
* Run: `python -m nik`
