# VS Code Cypress Snippets

This extension contains [Cypress](https://cypress.io/) code snippets used by Andrew Smith. Work in Progress.

## Installation

In order to install an extension you need to launch the Command Palette (Ctrl + Shift + P or Cmd + Shift + P) and type Extensions.
There you have either the option to show the already installed snippets or install new ones.

## Supported Languages (file extensions)

* JavaScript (.js)
* TypeScript (.ts)
* JavaScript React (.jsx)
* TypeScript React (.tsx)

## Snippets

### beforeEach (`be`)
```javascript
beforeEach(() => {
	$1
});

$0
```
### context (`ctx`)
```javascript
ctx('$1', () => {
	$0
});
```
### it (`it`)
```javascript
it('$1', () => {
	$0
});
```
### visit (`cyv`)
```javascript
cy.visit('$1');$0
```
### get (`cyget`)
```javascript
cy.get('$1')${0:;}
```
### find (`cyf`)
```javascript
find('$1')${0:;}
```
### first (`cy1`)
```javascript
first()${0:;}
```
### type (`cyt`)
```javascript
type('$1')${0:;}
```
### contains (`cycon`)
```javascript
contains(${2:'$3', }'$1')${0:;}
```
### clk (`cyc`)
```javascript

click()${0:;}
```
### server (`cyserver`)
```javascript
cy.server();$0
```
### route (`cyroute`)
```javascript
cy.route(${2:'$3', }$1).as('${4}');$0
```
### wait (`cyw`)
```javascript
cy.wait(${1:'@${2}'});$0
```
### viewport (`cyvp`)
```javascript
cy.viewport($1, $2);$0
```
### request (`cyreq`)
```javascript
cy.request({
	method: '$1',
	url: '$2',
	headers: { 'Accept-Language': 'en-us', },
});$0
```
### add command (`cyadd`)
```javascript
Cypress.Commands.add('$1', ${3: { previous: '$4' \} , }$2);$0
```
