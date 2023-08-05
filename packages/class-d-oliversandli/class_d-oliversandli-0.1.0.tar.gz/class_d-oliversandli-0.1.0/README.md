# class_d

![icon](resources/class_d_icon.png)

![python](https://img.shields.io/badge/python-3.6-brightgren)
[![PEP8](https://img.shields.io/badge/code%20style-pep8-orange.svg)](https://www.python.org/dev/peps/pep-0008/)
![license](https://img.shields.io/badge/license-MIT-blue)

An interactive utility for creating GitHub-style licenses locally with date and name.

## Requirements

* Python version 3.6 or higher
* [Requests](https://requests.readthedocs.io/en/master/)\*
* [python-inquirer](https://github.com/magmax/python-inquirer)\*

\* `pip` will install these automatically.

## Installation

```bash
python -m pip install class-d-oliversandli
```

Note that installation with `sudo` will add `class_d` to `/usr/local/bin`. Without `sudo`, `pip` installs scripts to `~/.local/bin`. Many Linux distros do not have `~/.local/bin` already in their path, so to use `class_d` after a `sudo`-less install, add `~/.local/bin` to your `PATH` variable.

## Setup

`class_d` will perform all necessary setup on first run.

## Usage

### `class_d` as a Program

```bash
class_d
```

#### `-f` `--favorite`

Create a `LICENSE` file specified by `"favorite"` in `~/.config/class_d/settings.json`.

## `class_d` as a Library

```python
#!/usr/bin/env python3
"""example file"""

import class_d

if __name__ == "__main__":
    license_list = class_d.get_license_list()
    specific_license = class_d.get_license(license_list["MIT"])
```

### `get_license_list()`

Return a dictionary of license names and GitHub API keys from https://api.github.com/licenses.

```
{'AGPL-3.0': 'agpl-3.0',
 'Apache-2.0': 'apache-2.0',
 'BSD-2-Clause': 'bsd-2-clause',
 'BSD-3-Clause': 'bsd-3-clause',
 'CC0-1.0': 'cc0-1.0',
 'EPL-2.0': 'epl-2.0',
 'GPL-2.0': 'gpl-2.0',
 'GPL-3.0': 'gpl-3.0',
 'LGPL-2.1': 'lgpl-2.1',
 'LGPL-3.0': 'lgpl-3.0',
 'MIT': 'mit',
 'MPL-2.0': 'mpl-2.0',
 'Unlicense': 'unlicense'}
```

### `get_license(key)`

Return the `body` of a license from `https://api.github.com/licenses/{key}`.

```python
get_license("mit")
```

```
"MIT License\n\nCopyright (c) [year] [fullname]\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n"
```

## TODO

- [X] Add `-f` flag to use favorite license.
- [X] Complete documentation in README.
- [X] Complete PEP-8 compliance.
- [X] Full `argparse` for `--help` support.
- [X] Provide library for useful functions.
- [X] Distribute on `pip`.
