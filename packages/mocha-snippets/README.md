# VS Code Mocha Snippets

This extension contains [Mocha](https://mochajs.org/) code snippets used by Andrew Smith.

## Installation

In order to install an extension you need to launch the Command Palette (Ctrl + Shift + P or Cmd + Shift + P) and type Extensions.
There you have either the option to show the already installed snippets or install new ones.

## Supported Languages (file extensions)

* JavaScript (.js)
* TypeScript (.ts)
* JavaScript React (.jsx)
* TypeScript React (.tsx)

## Snippets

### before (`ba`)
```javascript
before(function() => {
	$1
});$0
```
### beforeEach (`be`)
```javascript
beforeEach(function() => {
	$1
});$0
```
### After (`aa`)
```javascript
after(function() => {
	$1
});$0
```
### afterEach (`ae`)
```javascript
afterEach(function() => {
	$1
});$0
```
### suite (`ste`)
```javascript
suite('$1', function() => {
	$2
});$0
```
### suiteSetup (`steup`)
```javascript
suiteSetup(function() => {
	$1
});$0
```
### setup (`setup`)
```javascript
setup(function() => {
	$1
});$0
```
### suiteTeardown (`stedown`)
```javascript
suiteTeardown(function() => {
	$1
});$0
```
### teardown (`teardown`)
```javascript
teardown(function() => {
	$1
});$0
```
### test (`tst`)
```javascript
test('$1', function() => {
	$2
});
```
