# VS Code Mocha Snippets

This extension contains [Mocha](https://mochajs.org/) code snippets used by Andrew Smith.

## Installation

In order to install an extension you need to launch the Command Palette (Ctrl + Shift + P or Cmd + Shift + P) and type Extensions.
There you have either the option to show the already installed snippets or install new ones.

## Supported Languages (file extensions)

- JavaScript (.js)
- TypeScript (.ts)
- JavaScript React (.jsx)
- TypeScript React (.tsx)

## Snippets

### before (`tstba`)
```javascript
before(() => {
	$1
});$0
```
### beforeEach (`tstbe`)
```javascript
beforeEach(() => {
	$1
});

$0
```
### after (`tstaa`)
```javascript
after(() => {
	$1
});$0
```
### afterEach (`tstae`)
```javascript
afterEach(() => {
	$1
});$0
```
### describe (`tstdesc`)
```javascript
describe('$1', () => {
	$2
});$0
```
### context (`tstcon`)
```javascript
context('$1', () => {
	$0
});
```
### it (`tstit`)
```javascript
it('$1', () => {
	$0
});
```
### suite (`ste`)
```javascript
suite('$1', () => {
	$2
});$0
```
### suiteSetup (`steup`)
```javascript
suiteSetup(() => {
	$1
});$0
```
### setup (`tstup`)
```javascript
setup(() => {
	$1
});$0
```
### suiteTeardown (`stedown`)
```javascript
suiteTeardown(() => {
	$1
});$0
```
### teardown (`tstdown`)
```javascript
teardown(() => {
	$1
});$0
```
### test (`tst`)
```javascript
test('$1', () => {
	$2
});
```
