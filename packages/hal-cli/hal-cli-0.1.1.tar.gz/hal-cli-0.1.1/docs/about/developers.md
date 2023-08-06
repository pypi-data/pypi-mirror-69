Instructions for developers contributing to HAL

## Basic setup

First, make sure you've cloned/pulled the latest version of the [HAL git repo](https://github.com/harrisonpim/hal/).

The repo is orchestrated with a `Makefile`. To install all the dependencies for development, run

```console
make setup
```

## Contributing to code

HAL is packaged with [flit](https://flit.readthedocs.io/en/latest/index.html).

Running `make setup` runs

```console
pip install flit
flit install -s
```

Flit will create a symlink from the working `hal` directory to `/usr/hal`, allowing you to update the source code and see the results immediately, without having to rebuild or install.

Before submitting a PR, make sure tests pass by running

```console
make test
```

## Contributing to tests

```console
make test
```

## Contributing to documentation

HAL's documentation is built with [mkdocs-material]()
