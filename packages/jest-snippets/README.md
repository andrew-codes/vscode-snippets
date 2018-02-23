# VS Code Jest Snippets

This extension contains [Jest](https://facebook.io/jest/) code snippets used by Andrew Smith.

## Installation

In order to install an extension you need to launch the Command Palette (Ctrl + Shift + P or Cmd + Shift + P) and type Extensions.
There you have either the option to show the already installed snippets or install new ones.

## Supported Languages (file extensions)

* JavaScript (.js)
* TypeScript (.ts)
* JavaScript React (.jsx)
* TypeScript React (.tsx)

## Snippets

### beforeAll (`ba`)
```javascript
beforeAll(() => {
	$1
});$0
```
### beforeEach (`be`)
```javascript
beforeEach(() => {
	$1
});$0
```
### afterAll (`aa`)
```javascript
after(() => {
	$1
});$0
```
### afterEach (`ae`)
```javascript
afterEach(() => {
	$1
});$0
```
### test (`tst`)
```javascript
test('$1', () => {
	$2
});
```
