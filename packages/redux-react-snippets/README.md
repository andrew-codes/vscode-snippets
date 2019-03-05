# VS Code Redux (when using React) snippets

This extension contains code snippets for [Redux](https://redux.js.org/) when used with [Reactjs](https://facebook.github.io/react/) (used by [Andrew Smith](https://andrew.codes)).

## Installation

In order to install an extension you need to launch the Command Palette (Ctrl + Shift + P or Cmd + Shift + P) and type Extensions.
There you have either the option to show the already installed snippets or install new ones.

## Supported languages (file extensions)

- JavaScript (.js)
- TypeScript (.ts)
- JavaScript React (.jsx)
- TypeScript React (.tsx)

## Snippets

### import redux {Provider} (`imrp`)
```javascript
import {Provider} from 'react-redux';$0
```
### new connected react component file (`ncrc`)
```javascript
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const mergeProps = (stateProps, dispatchProps, props) => ({});

const ${1:componentName} = ({}) => (
	${0:<div></div>}
);

${1:componentName}.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(${1:componentName});
```
### new redux module actions file (`nrma`)
```javascript
import {createActions} from 'redux-actions';

export default createActions({
	${1:moduleName}: {
		$0
	}
});
```
### redux action creator identity (`rmai`)
```javascript
'${1:moduleName}/${2:ACTION_NAME}',
```
### redux action creator (`rma`)
```javascript
${1:ACTION_NAME}: (${2:value}) => ({$3}),$0
```
### redux action creator w/meta (`rmam`)
```javascript
${1:ACTION_NAME}: [
	(${2:value}) => ({$3}),
	(${2:value}) => ({$4})
],$0
```
### new redux module reducer file (`nrmr`)
```javascript
import {handleActions} from 'redux-actions';
import * as actions from './actions';

const defaultState = {};
export default handleActions({
	$0
}, defaultState);
```
### redux action reducer (`rmr`)
```javascript
[actions.${1.actionName}]: (state, payload, meta) => ({
	...state,
	$2
}),$0
```
### new redux selector file (`nrms`)
```javascript
import {createSelector} from 'reselect';

const getRoot = state => state$1;$0
```
### redux selector (`rms`)
```javascript
const get${1:selectorName} = createSelector(${2:getRoot}, (${3:root}) => ({$4});$0
```
### new redux sagas files (`nrmsg`)
```javascript
import {call, put, select, takeEvery} from 'redux-saga/effects';
import * as actions from './actions';
import * as selectors from './selectors';

export default [
	$0
];
```
### redux exported saga (`rmes`)
```javascript
() => ${1:takeEvery}(actions.${2:actionName}, ${3:funcName}),$0
```
### generator function (`gfn`)
```javascript
function* ${1:funcName}() {
	$2
}$0
```
### yield put (`yput`)
```javascript
yield put(${1:actionName}($2);$0
```
### yield select (`ysel`)
```javascript
yield select(selectors.${1:selectorName});$0
```
### root saga file (`roots`)
```javascript
import {all, fork} from 'redux-saga/effects';

const sagas = [];

 export default function* root() {
	yield all(sagas
		.map(saga => fork(saga))
	);
};
```
### root reducer file (`rootr`)
```javascript
import {combineReducers} from 'redux';

export default combineReducers({
	$0
};
```
### configure store file (`cstore`)
```javascript
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import sagas from './sagas';

export default (initialState={}, additionalMiddleware = [], composeFunc = compose) => {
	const middleware = [createSagaMiddleware()].concat(additionalMiddleware);
	const store = createStore(
reducer, initialState, composeFunc(applyMiddleware(...middleware)));
	if (module.hot) {
		module.hot.accept('./reducer', () => {
			const nextRootReducer = require('./reducer').default;
			store.replaceReducer(nextRootReducer);
		})
	}
 return store;};
```
