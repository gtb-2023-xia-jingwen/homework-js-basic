## Definition of *Done*

* All unit tests are passed.
* There is no *linting* error.

## Hint

### Running Unit Test

install dependencies

```bash
npm i
```

If you want to run all the unit test, you can run:

```bash
npm test
```

If you want to run a single test, you can run:

```bash
npm test -t fileName
```

For example.

```bash
npm test -t array_spec.js
```
more information about `--testNamePattern=<regex>` : https://jestjs.io/docs/cli#--testnamepatternregex

### Linting Your Code

You can use the following command to check if your code violates the coding standard:

```bash
$ npm run lint
```
