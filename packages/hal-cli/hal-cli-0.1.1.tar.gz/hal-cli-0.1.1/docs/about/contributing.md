Any and all contributions to the development of HAL are very welcome! Remember to take a look at the project's [code of conduct](code_of_conduct.md) before you get stuck in.

## Contribute to the conversation

If you have ideas for HAL but can't get stuck into the code for any reason, you can still contribute by adding to the conversation!

### Ask for support

You can ask for help with using HAL by [submitting a github issue](https://github.com/harrisonpim/hal/issues), and labelling the issue with `support`

### Report a bug or an error

You can report bugs and errors by [submitting a github issue](https://github.com/harrisonpim/hal/issues), and labelling the issue with `bug`

### Request a feature

You can request features or enhancements by [submitting a github issue](https://github.com/harrisonpim/hal/issues), and labelling the issue with `feature-request`

## Contribute to the codebase

You can contribute to the codebase by submitting a pull request (PR) linked to a github issue.

Broadly, issues should describe the problems in the current version, and PRs that link to issues should describe how they're solved.

### Contribute features

To contribute features:

- make sure a [github issue](https://github.com/harrisonpim/hal/issues) exists for the problem you're going to solve. If an issue doesn't already exist, create one, label it with `bug` or `feature-request`, and let people know that you're working on it.
- [set up a local version of HAL as a developer](developers.md).
- create a new branch off master.
- commit your changes to that branch.
- if you can, add tests for your new feature.
- run `make test` to ensure that existing tests still pass.
- open a PR in the HAL repo with a link to the issue being solved.

### Contribute tests

To contribute tests:

- make sure a [github issue](https://github.com/harrisonpim/hal/issues) exists for the problem you're going to solve. If an issue doesn't already exist, create one, label it with `tests`, and let people know that you're working on it.
- [set up a local version of HAL as a developer](developers.md).
- create a new branch off master.
- commit your changes to that branch.
- run `make test` to ensure that all tests pass.
- open a PR in the HAL repo with a link to the issue being solved.

## Contribute to the documentation

You can add to the project's documentation through the `/docs` directory (written in markdown and orchestrated by `/mkdocs.yml`), or by adding to docstrings and comments in code.

To contribute:

- make sure a [github issue](https://github.com/harrisonpim/hal/issues) exists for the problem you're going to solve. If an issue doesn't already exist, create one, label it with `docs`, and let people know that you're working on it.
- [set up a local version of HAL as a developer](developers.md).
- create a new branch off master.
- commit your changes to that branch.
- run `make build-docs` and ensure that no errors are introduced by your change.
- open a PR in the HAL repo with a link to the issue being solved.
