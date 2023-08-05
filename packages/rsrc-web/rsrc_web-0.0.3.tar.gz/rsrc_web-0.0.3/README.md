rsrc_web
========

[![](https://travis-ci.com/lycantropos/rsrc_web.svg?branch=master)](https://travis-ci.com/lycantropos/rsrc_web "Travis CI")
[![](https://dev.azure.com/lycantropos/rsrc_web/_apis/build/status/lycantropos.rsrc_web?branchName=master)](https://dev.azure.com/lycantropos/rsrc_web/_build/latest?definitionId=6&branchName=master "Azure Pipelines")
[![](https://codecov.io/gh/lycantropos/rsrc_web/branch/master/graph/badge.svg)](https://codecov.io/gh/lycantropos/rsrc_web "Codecov")
[![](https://img.shields.io/github/license/lycantropos/rsrc_web.svg)](https://github.com/lycantropos/rsrc_web/blob/master/LICENSE "License")
[![](https://badge.fury.io/py/rsrc-web.svg)](https://badge.fury.io/py/rsrc-web "PyPI")

In what follows
- `python` is an alias for `python3.5` or any later
version (`python3.6` and so on),
- `pypy` is an alias for `pypy3.5` or any later
version (`pypy3.6` and so on).

Installation
------------

Install the latest `pip` & `setuptools` packages versions:
- with `CPython`
  ```bash
  python -m pip install --upgrade pip setuptools
  ```
- with `PyPy`
  ```bash
  pypy -m pip install --upgrade pip setuptools
  ```

### User

Download and install the latest stable version from `PyPI` repository:
- with `CPython`
  ```bash
  python -m pip install --upgrade rsrc_web
  ```
- with `PyPy`
  ```bash
  pypy -m pip install --upgrade rsrc_web
  ```

### Developer

Download the latest version from `GitHub` repository
```bash
git clone https://github.com/lycantropos/rsrc_web.git
cd rsrc_web
```

Install dependencies:
- with `CPython`
  ```bash
  python -m pip install -r requirements.txt
  ```
- with `PyPy`
  ```bash
  pypy -m pip install -r requirements.txt
  ```

Install:
- with `CPython`
  ```bash
  python setup.py install
  ```
- with `PyPy`
  ```bash
  pypy setup.py install
  ```

Usage
-----
```python
>>> from rsrc.base import deserialize
>>> readable_resource = deserialize('https://postman-echo.com/get')
>>> readable_resource.exists()
True
>>> writable_resource = deserialize('https://postman-echo.com/post')
>>> writable_resource.exists()
False
>>> writable_resource.receive(readable_resource)
>>> import json
>>> file = readable_resource.open(json={'some_param': 1})
>>> json.load(file)['args']
{'some_param': 1}

```

Development
-----------

### Bumping version

#### Preparation

Install
[bump2version](https://github.com/c4urself/bump2version#installation).

#### Pre-release

Choose which version number category to bump following [semver
specification](http://semver.org/).

Test bumping version
```bash
bump2version --dry-run --verbose $CATEGORY
```

where `$CATEGORY` is the target version number category name, possible
values are `patch`/`minor`/`major`.

Bump version
```bash
bump2version --verbose $CATEGORY
```

This will set version to `major.minor.patch-alpha`. 

#### Release

Test bumping version
```bash
bump2version --dry-run --verbose release
```

Bump version
```bash
bump2version --verbose release
```

This will set version to `major.minor.patch`.

#### Notes

To avoid inconsistency between branches and pull requests,
bumping version should be merged into `master` branch 
as separate pull request.

### Running tests

Install dependencies:
- with `CPython`
  ```bash
  python -m pip install -r requirements-tests.txt
  ```
- with `PyPy`
  ```bash
  pypy -m pip install -r requirements-tests.txt
  ```

Plain
```bash
pytest
```

Inside `Docker` container:
- with `CPython`
  ```bash
  docker-compose --file docker-compose.cpython.yml up
  ```
- with `PyPy`
  ```bash
  docker-compose --file docker-compose.pypy.yml up
  ```

`Bash` script (e.g. can be used in `Git` hooks):
- with `CPython`
  ```bash
  ./run-tests.sh
  ```
  or
  ```bash
  ./run-tests.sh cpython
  ```

- with `PyPy`
  ```bash
  ./run-tests.sh pypy
  ```

`PowerShell` script (e.g. can be used in `Git` hooks):
- with `CPython`
  ```powershell
  .\run-tests.ps1
  ```
  or
  ```powershell
  .\run-tests.ps1 cpython
  ```
- with `PyPy`
  ```powershell
  .\run-tests.ps1 pypy
  ```
