# VS Code Reactjs snippets

This extension contains code snippets for [Reactjs](https://facebook.github.io/react/) used by Andrew Smith.

## Installation

In order to install an extension you need to launch the Command Palette (Ctrl + Shift + P or Cmd + Shift + P) and type Extensions.
There you have either the option to show the already installed snippets or install new ones.

## Supported languages (file extensions)

* JavaScript (.js)
* TypeScript (.ts)
* JavaScript React (.jsx)
* TypeScript React (.tsx)

## Snippets

### import React (`imr`)
```javascript
import React from 'react';$0
```
### import React, {Component} (`imrc`)
```javascript
import React, { Component } from 'react';$0
```
### import PropTypes (`impt`)
```javascript
import PropTypes from 'prop-types';$0
```
### all inclusive functional component (`nrc`)
```javascript
import PropTypes from 'prop-types';
import React from 'react';

const ${1:componentName} = ({}) => (
	${0:<div></div>}
);

${1:componentName}.propTypes = {};

export default ${1:componentName};
```
### all inclusive class component (`nrcc`)
```javascript
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ${1:componentName} extends Component {
	constructor(props, ...rest) {
		super(props, ...rest);
		this.state = {};
	}

	render() {
		return (
			${0:<div></div>}
		);
	}
}

${1:componentName}.propTypes = {};

export default ${1:componentName};
```
### just functional component (`rc`)
```javascript
const ${1:componentName} = ({}) => (
	${2:<div></div>}
);

${1:componentName}.propTypes = {};
$0
```
### just class Component (`rcc`)
```javascript
class ${1:componentName} extends Component {
	constructor(props, ...rest) {
		super(props, ...rest);
		this.state = {};
	}

	render() {
		return (
			${2:<div></div>}
		);
	}
}

${1:componentName}.propTypes = {};
$0
```
### default component constructor (`ccon`)
```javascript
constructor(props, ...rest) {
	super(props, ...rest);
	$1
}$0
```
### constructor; props and context (`cconc`)
```javascript
constructor(props, context, ...rest) {
	super(props, context, ...rest);
	$1
}$0
```
### componentWillMount (`cwm`)
```javascript
componentWillMount() {$1}$0
```
### componentDidMount (`cdm`)
```javascript
componentDidMount() {$1}$0
```
### componentWillReceiveProps (`cwr`)
```javascript
componentWillReceiveProps(nextProps) {$1}$0
```
### shouldComponentUpdate (`scu`)
```javascript
shouldComponentUpdate(nextProps, nextState) {$1}$0
```
### componentWillUpdate (`cwup`)
```javascript
componentWillUpdate(nextProps, nextState) {$1}$0
```
### componentDidUpdate (`cdup`)
```javascript
componentDidUpdate(prevProps, prevState) {$1}$0
```
### componentWillUnmount (`cwum`)
```javascript
componentWillUnmount() {$1}$0
```
### bound component class method (`ccm`)
```javascript
${1:methodName} = () => ${1:{}};$0
```
### set state (`sst`)
```javascript
this.setState({$1});
$0
```
### set state w/ function (`ssf`)
```javascript
this.setState((state, props) => ({$1}));
$0
```
### destructure class props (`cdp`)
```javascript
const {$1} = this.props;
$0
```
### destructure class state (`cds`)
```javascript
const {$1} = this.state;
$0
```
### bind method to class (`cbnd`)
```javascript
this.$1 = this.$1.bind(this);
$0
```
### default props (`rdp`)
```javascript
$1.defaultProps = {$2};
$0
```
### propType array (`pta`)
```javascript
PropTypes.array,$0
```
### propType array required (`ptar`)
```javascript
PropTypes.array.isRequired,$0
```
### propType bool (`ptb`)
```javascript
PropTypes.bool,$0
```
### propType bool required (`ptbr`)
```javascript
PropTypes.bool.isRequired,$0
```
### propType func (`ptf`)
```javascript
PropTypes.func,$0
```
### propType func required (`ptfr`)
```javascript
PropTypes.func.isRequired,$0
```
### propType number (`ptn`)
```javascript
PropTypes.number,$0
```
### propType number required (`ptnr`)
```javascript
PropTypes.number.isRequired,$0
```
### propType object (`pto`)
```javascript
PropTypes.object,$0
```
### propType object required (`ptor`)
```javascript
PropTypes.object.isRequired,$0
```
### propType string (`pts`)
```javascript
PropTypes.string,$0
```
### propTypes string required (`ptsr`)
```javascript
PropTypes.string.isRequired,$0
```
### propType node (`ptnd`)
```javascript
PropTypes.node,$0
```
### propType node required (`ptndr`)
```javascript
PropTypes.node.isRequired,$0
```
### propType element (`ptel`)
```javascript
PropTypes.element,$0
```
### propType element required (`ptelr`)
```javascript
PropTypes.element.isRequired,$0
```
### propType instanceOf (`pti`)
```javascript
PropTypes.instanceOf($1),$0
```
### propType instanceOf required (`ptir`)
```javascript
PropTypes.instanceOf($1).isRequired,$0
```
### propType enum (`pte`)
```javascript
PropTypes.oneOf([$1]),$0
```
### propType enum required (`pter`)
```javascript
PropTypes.oneOf([$1]).isRequired,$0
```
### propType one of type (`ptot`)
```javascript
PropTypes.oneOfType([$1]),$0
```
### propType one of type required (`ptotr`)
```javascript
PropTypes.oneOfType([$1]).isRequired,$0
```
### propType array of (`ptao`)
```javascript
PropTypes.arrayOf($1),$0
```
### propType array of required (`ptaor`)
```javascript
PropTypes.arrayOf($1).isRequired,$0
```
### propType object of (`ptoo`)
```javascript
PropTypes.objectOf($1),$0
```
### propType object of required (`ptoor`)
```javascript
PropTypes.objectOf($1).isRequired,$0
```
### propType shape (`ptsh`)
```javascript
PropTypes.shape({$0}),
```
### propType shape required (`ptshr`)
```javascript
PropTypes.shape({$1}).isRequired,$0
```
### higher order component (`hoc`)
```javascript
C => {
	return class extends Component {
		constructor(...rest) {
			super(rest);
		}

		getChildContext() {
			return {
				};
		}

		render() {
			$0return <C {...this.props} />;
		}
	};
}
```
### ref (`cref`)
```javascript
ref={(el) => {
	this.$1 = el;
}}
$0
```
