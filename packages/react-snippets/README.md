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
```
import React from 'react';$0
```
### import React, {Component} (`imrc`)
```
import React, { Component } from 'react';$0
```
### import PropTypes (`impt`)
```
import PropTypes from 'prop-types';$0
```
### all inclusive functional component (`nrc`)
```
import PropTypes from 'prop-types';
import React from 'react';

const ${1:componentName} = ({}) => (
	${0:<div></div>}
);

${1:componentName}.propTypes = {};

export default ${1:componentName};
```
### all inclusive class component (`nrcc`)
```
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
```
const ${1:componentName} = ({}) => (
	${2:<div></div>}
);

${1:componentName}.propTypes = {};
$0
```
### just class Component (`rcc`)
```
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
```
constructor(props, ...rest) {
	super(props, ...rest);
	$1
}$0
```
### constructor; props and context (`cconc`)
```
constructor(props, context, ...rest) {
	super(props, context, ...rest);
	$1
}$0
```
### componentWillMount (`cwm`)
```
componentWillMount() {
	$0
}
```
### componentDidMount (`cdm`)
```
componentDidMount() {
	$0
}
```
### componentWillReceiveProps (`cwr`)
```
componentWillReceiveProps(nextProps) {
	$0
}
```
### shouldComponentUpdate (`scu`)
```
shouldComponentUpdate(nextProps, nextState) {
	$0
}
```
### componentWillUpdate (`cwup`)
```
componentWillUpdate(nextProps, nextState) {
	$0
}
```
### componentDidUpdate (`cdup`)
```
componentDidUpdate(prevProps, prevState) {
	$0
}
```
### componentWillUnmount (`cwum`)
```
componentWillUnmount() {
	$0
}
```
### bound component class method (`ccm`)
```
${1:methodName} = () => {
	$0
};
```
### set state (`sst`)
```
this.setState({
	$1
});
$0
```
### set state w/ function (`ssf`)
```
this.setState((state, props) => ({
	$1
}));
$0
```
### destructure class props (`cdp`)
```
const {
	$1
} = this.props;
$0
```
### destructure class state (`cds`)
```
const {
	$1
} = this.state;
$0
```
### bind method to class (`cbnd`)
```
this.$1 = this.$1.bind(this);
$0
```
### default props (`rdp`)
```
$1.defaultProps = {
	$2
};
$0
```
### propType array (`pta`)
```
PropTypes.array,
```
### propType array required (`ptar`)
```
PropTypes.array.isRequired,
```
### propType bool (`ptb`)
```
PropTypes.bool,
```
### propType bool required (`ptbr`)
```
PropTypes.bool.isRequired,
```
### propType func (`ptf`)
```
PropTypes.func,
```
### propType func required (`ptfr`)
```
PropTypes.func.isRequired,
```
### propType number (`ptn`)
```
PropTypes.number,
```
### propType number required (`ptnr`)
```
PropTypes.number.isRequired,
```
### propType object (`pto`)
```
PropTypes.object,
```
### propType object required (`ptor`)
```
PropTypes.object.isRequired,
```
### propType string (`pts`)
```
PropTypes.string,
```
### propTypes string required (`ptsr`)
```
PropTypes.string.isRequired,
```
### propType node (`ptnd`)
```
PropTypes.node,
```
### propType node required (`ptndr`)
```
PropTypes.node.isRequired,
```
### propType element (`ptel`)
```
PropTypes.element,
```
### propType element required (`ptelr`)
```
PropTypes.element.isRequired,
```
### propType instanceOf (`pti`)
```
PropTypes.instanceOf($0),
```
### propType instanceOf required (`ptir`)
```
PropTypes.instanceOf($0).isRequired,
```
### propType enum (`pte`)
```
PropTypes.oneOf(['$0']),
```
### propType enum required (`pter`)
```
PropTypes.oneOf(['$0']).isRequired,
```
### propType one of type (`ptot`)
```
PropTypes.oneOfType([
	$0
]),
```
### propType one of type required (`ptotr`)
```
PropTypes.oneOfType([
	$0
]).isRequired,
```
### propType array of (`ptao`)
```
PropTypes.arrayOf($0),
```
### propType array of required (`ptaor`)
```
PropTypes.arrayOf($0).isRequired,
```
### propType object of (`ptoo`)
```
PropTypes.objectOf($0),
```
### propType object of required (`ptoor`)
```
PropTypes.objectOf($0).isRequired,
```
### propType shape (`ptsh`)
```
PropTypes.shape({
	$0
}),
```
### propType shape required (`ptshr`)
```
PropTypes.shape({
	$0
}).isRequired,
```
### higher order component (`hoc`)
```
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
```
ref={(el) => {
	this.$1 = el;
}}

```
