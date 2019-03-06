# VS Code Reactjs snippets

This extension contains code snippets for [Reactjs](https://facebook.github.io/react/) used by Andrew Smith.

## Installation

In order to install an extension you need to launch the Command Palette (Ctrl + Shift + P or Cmd + Shift + P) and type Extensions.
There you have either the option to show the already installed snippets or install new ones.

## Supported languages (file extensions)

- JavaScript (.js)
- TypeScript (.ts)
- JavaScript React (.jsx)
- TypeScript React (.tsx)

## Snippets

### import React (`rim`)
```javascript
import React from 'react';$0
```
### import React, {Component} (`ric`)
```javascript
import React, { Component } from 'react';$0
```
### import PropTypes (`ript`)
```javascript
import PropTypes from 'prop-types';$0
```
### functional component (`rc`)
```javascript
const ${1:componentName} = ({}) => (
	${2:<div></div>}
);
$0
```
### class Component (`rcc`)
```javascript
class ${1:componentName} extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			${2:<div></div>}
		);
	}
}
$0
```
### default component constructor (`rcc`)
```javascript
constructor(props) {
	super(props);
	$1
}

$0
```
### componentDidMount (`cdm`)
```javascript
componentDidMount() {
	$1
}

$0
```
### shouldComponentUpdate (`scu`)
```javascript
shouldComponentUpdate(nextProps, nextState) {
	$1
}

$0
```
### componentDidUpdate (`cdup`)
```javascript
componentDidUpdate(prevProps, prevState) {
	$1
}

$0
```
### componentWillUnmount (`cwum`)
```javascript
componentWillUnmount() {
	$1
}

$0
```
### bound component class method (`cm`)
```javascript
${1:methodName} = () => ${1:{
	}
};

$0
```
### set state (`sst`)
```javascript
this.setState({$1});
$0
```
### set state w/ function (`ssf`)
```javascript
this.setState(state => ${1:({
	})});

$0
```
### destructure class props (`cdp`)
```javascript
const {
	$1
} = this.props;
$0
```
### destructure class state (`cds`)
```javascript
const {
	$1
} = this.state;
$0
```
### bind method to class (`cbind`)
```javascript
this.$1 = this.$1.bind(this);
$0
```
### default props (`cdp`)
```javascript
$1.defaultProps = {
	$2
};
$0
```
### propType required (`ptr`)
```javascript
isRequired,

```
### propType array (`pta`)
```javascript
PropTypes.array${2:,
}$0
```
### propType array of (`ptao`)
```javascript
PropTypes.arrayOf($1)${2:,
}$0
```
### propType bool (`ptb`)
```javascript
PropTypes.bool,
$0
```
### propType func (`ptf`)
```javascript
PropTypes.func${1:,
}$0
```
### propType number (`ptnum`)
```javascript
PropTypes.number${1:,
}$0
```
### propType object (`pto`)
```javascript
PropTypes.object${1:,
}$0
```
### propType string (`pts`)
```javascript
PropTypes.string${1:,
}$0
```
### propType node (`ptn`)
```javascript
PropTypes.node${1:,
}$0
```
### propType element (`ptel`)
```javascript
PropTypes.element${1:,
}$0
```
### propType instanceOf (`pti`)
```javascript
PropTypes.instanceOf($1)${2:,
}$0
```
### propType enum (`pte`)
```javascript
PropTypes.oneOf([$1])${2:,
}$0
```
### propType one of type (`ptot`)
```javascript
PropTypes.oneOfType([$1])${2:,
}$0
```
### propType shape (`ptsh`)
```javascript
PropTypes.shape({$1})${2:,
}${0}
```
### ref (`cref`)
```javascript
const ${1:ref} = createRef();
$0
```
