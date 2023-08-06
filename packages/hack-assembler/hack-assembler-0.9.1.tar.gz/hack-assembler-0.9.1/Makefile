.ONESHELL:
SHELL = /bin/bash

default: update

VIRTUAL_ENV?=~/venv/hack-assembler

venv:
	@python3 -m venv $(VIRTUAL_ENV)

.PHONY: init
init: venv ## Initialize environment
	@source $(VIRTUAL_ENV)/bin/activate
	@pip -q install flake8 twine pytest-mock

.PHONY: clean
clean: venv
	@source $(VIRTUAL_ENV)/bin/activate
	@python setup.py clean
	@rm -rf dist
	@rm -rf .tox
	@rm -rf build
	@rm -rf .pytest_cache
	@find . -name "*.pyc" -delete
	@rm -rf *.egg-info
	@rm -rf .eggs
	@pip uninstall hack-assembler -y

.PHONY: check
check: venv
	@source $(VIRTUAL_ENV)/bin/activate
	@flake8 --ignore=W605,E501 assembler

.PHONY: tests
tests: venv
	@source $(VIRTUAL_ENV)/bin/activate
	$(MAKE) clean
	$(MAKE) install
	@pytest

.PHONY: install
install: venv
	@source $(VIRTUAL_ENV)/bin/activate
	@python setup.py install

.PHONY: update
update: venv
	@source $(VIRTUAL_ENV)/bin/activate
	$(MAKE) clean
	$(MAKE) check
	$(MAKE) install
	@clear

.PHONY: sdist
sdist: venv
	@source $(VIRTUAL_ENV)/bin/activate
	$(MAKE) clean
	@python setup.py sdist

.PHONY: upload
upload: venv
	@source $(VIRTUAL_ENV)/bin/activate
	$(MAKE) clean
	$(MAKE) sdist
	@twine upload --username __token__ --password $(TWINE_PASSWORD) dist/*
