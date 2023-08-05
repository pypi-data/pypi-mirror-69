build:
	pip install flit && flit install -s

test:
	pytest

lint:
	black hal/ && flake8 hal/

publish:
	# flit build && flit publish

docs:
	mkdocs serve

publish-docs:
	mkdocs build
