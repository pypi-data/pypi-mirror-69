.PHONY: setup lint test build publish docs serve-docs build-docs clean git

default: build


# commands for building the package
setup:
	pip install flit
	flit install -s

lint:
	isort hal/*.py
	black hal/ --line-length 80
	flake8 hal/

test:
	pytest

build: clean lint test
	flit build

publish: build
	flit publish


# commands for building the docs
docs: clean
	# combine README components
	cat introduction.md basics.md > README.md
	cat docs/getting_started_introduction.md basics.md > docs/getting_started.md
	# the docs' README, code_of_conduct and license should match the project's
	cp README.md docs/index.md
	cp code_of_conduct.md license.md docs/about/
	# typer-cli produces complete docs for cli.py
	typer hal/cli.py utils docs --name hal --output docs/cli_reference.md

serve-docs: docs
	mkdocs serve

build-docs: docs
	mkdocs build


# general commands
clean:
	rm -rf .hypothesis
	rm -rf .pytest_cache
	rm -rf ./*/__pycache__
	rm -rf ./dist
	rm -rf ./site
