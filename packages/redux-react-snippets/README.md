# VS Code Redux (when using React) snippets

This extension contains code snippets for [Redux](https://redux.js.org/) when used with [Reactjs](https://facebook.github.io/react/).

## Installation

In order to install an extension you need to launch the Command Palette (Ctrl + Shift + P or Cmd + Shift + P) and type Extensions.
There you have either the option to show the already installed snippets or install new ones.

## Supported languages (file extensions)

* JavaScript (.js)
* TypeScript (.ts)
* JavaScript React (.jsx)
* TypeScript React (.tsx)


## Snippets

<table>
<thead>
  <tr>
    <td>Trigger</td>
    <td>Name</td>
    <td>Notes</td>
    <td>Code</td>
  </tr>
</thead>
<tbody>
<tr>
        <td>imrp</td>
        <td style="width: 30%;">import redux {Provider}</td>
        <td><code><pre>import {Provider} from &#39;react-redux&#39;;$0</pre></code></td>
      </tr><tr>
        <td>ncrc</td>
        <td style="width: 30%;">new connected react component file</td>
        <td><code><pre>import PropTypes from &#39;prop-types&#39;;&#10;import React from &#39;react&#39;;&#10;import {connect} from &#39;react-redux&#39;;&#10;&#10;const mapStateToProps = state =&gt; ({});&#10;&#10;const mapDispatchToProps = dispatch =&gt; ({});&#10;&#10;const mergeProps = (stateProps, dispatchProps, props) =&gt; ({});&#10;&#10;const ${1:componentName} = ({}) =&gt; (&#10;&#9;${0:&lt;div&gt;&lt;/div&gt;}&#10;);&#10;&#10;${1:componentName}.propTypes = {};&#10;&#10;export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(${1:componentName});</pre></code></td>
      </tr><tr>
        <td>nrma</td>
        <td style="width: 30%;">new redux module actions file</td>
        <td><code><pre>import {createActions} from &#39;redux-actions&#39;;&#10;&#10;export default createActions({&#10;&#9;${1:moduleName}: {&#10;&#9;&#9;$0&#10;&#9;}&#10;});</pre></code></td>
      </tr><tr>
        <td>rmai</td>
        <td style="width: 30%;">redux action creator identity</td>
        <td><code><pre>&#39;${1:moduleName}/${2:ACTION_NAME}&#39;,</pre></code></td>
      </tr><tr>
        <td>rma</td>
        <td style="width: 30%;">redux action creator</td>
        <td><code><pre>${1:ACTION_NAME}: (${2:value}) =&gt; ({$3}),$0</pre></code></td>
      </tr><tr>
        <td>rmam</td>
        <td style="width: 30%;">redux action creator w/meta</td>
        <td><code><pre>${1:ACTION_NAME}: [&#10;&#9;(${2:value}) =&gt; ({$3}),&#10;&#9;(${2:value}) =&gt; ({$4})&#10;],$0</pre></code></td>
      </tr><tr>
        <td>nrmr</td>
        <td style="width: 30%;">new redux module reducer file</td>
        <td><code><pre>import {handleActions} from &#39;redux-actions;&#10;import * as actions from &#39;./actions&#39;;&#10;&#10;const defaultState = {};&#10;export default handleActions({&#10;&#9;$0&#10;}, defaultState);</pre></code></td>
      </tr><tr>
        <td>rmr</td>
        <td style="width: 30%;">redux action reducer</td>
        <td><code><pre>[actions.${1.actionName}]: (state, payload, meta) =&gt; ({&#10;&#9;...state,&#10;&#9;$2&#10;}),$0</pre></code></td>
      </tr><tr>
        <td>nrms</td>
        <td style="width: 30%;">new redux selector file</td>
        <td><code><pre>import {createSelector} from &#39;reselect&#39;;&#10;&#10;const getRoot = state =&gt; state$1;$0</pre></code></td>
      </tr><tr>
        <td>rms</td>
        <td style="width: 30%;">redux selector</td>
        <td><code><pre>const get${1:selectorName} = createSelector(${2:getRoot}, (${3:root}) =&gt; ({$4});$0</pre></code></td>
      </tr><tr>
        <td>nrmsg</td>
        <td style="width: 30%;">new redux sagas files</td>
        <td><code><pre>import {call, put, select, takeEvery} from &#39;redux-saga/effects&#39;;&#10;import * as actions from &#39;./actions&#39;;&#10;import * as selectors from &#39;./selectors&#39;;&#10;&#10;export default [&#10;&#9;$0&#10;];</pre></code></td>
      </tr><tr>
        <td>rmes</td>
        <td style="width: 30%;">redux exported saga</td>
        <td><code><pre>() =&gt; ${1:takeEvery}(actions.${2:actionName}, ${3:funcName}),$0</pre></code></td>
      </tr><tr>
        <td>gfn</td>
        <td style="width: 30%;">generator function</td>
        <td><code><pre>function* ${1:funcName}() {&#10;&#9;$2&#10;}$0</pre></code></td>
      </tr><tr>
        <td>yput</td>
        <td style="width: 30%;">yield put</td>
        <td><code><pre>yield put(${1:actionName}($2);$0</pre></code></td>
      </tr><tr>
        <td>yselect</td>
        <td style="width: 30%;">yield select</td>
        <td><code><pre>yield select(selectors.${1:selectorName});$0</pre></code></td>
      </tr><tr>
        <td>roots</td>
        <td style="width: 30%;">root saga file</td>
        <td><code><pre>import {all, fork} from &#39;redux-saga/effects&#39;;&#10;&#10;const sagas = [];&#10;&#10; export default function* root() {&#10;&#9;yield all(sagas&#10;&#9;&#9;.map(saga =&gt; fork(saga))&#10;&#9;);&#10;}</pre></code></td>
      </tr><tr>
        <td>rootr</td>
        <td style="width: 30%;">root reducer file</td>
        <td><code><pre>import {combineReducers} from &#39;redux&#39;;&#10;&#10;export default combineReducers({&#10;&#9;$0&#10;}</pre></code></td>
      </tr><tr>
        <td>cstore</td>
        <td style="width: 30%;">configure store file</td>
        <td><code><pre>import createSagaMiddleware from &#39;redux-saga&#39;;&#10;import {createStore, applyMiddleware, compose} from &#39;redux&#39;;&#10;import reducer from &#39;./reducer&#39;;&#10;import sagas from &#39;./sagas&#39;;&#10;&#10;export default (initialState={}, additionalMiddleware = [], composeFunc = compose) =&gt; {&#10;&#9;const middleware = [createSagaMiddleware()].concat(additionalMiddleware);&#10;const store = createStore(&#10;reducer, initialState, composeFunc(applyMiddleware(...middleware)));&#10;&#9;if (module.hot) {&#10;&#9;&#9;module.hot.accept(&#39;./reducer&#39;, () =&gt; {&#10;&#9;&#9;&#9;const nextRootReducer = require(&#39;./reducer&#39;).default;&#10;&#9;&#9;&#9;store.replaceReducer(nextRootReducer);&#10;&#9;&#9;})&#10;&#9;}&#10;};</pre></code></td>
      </tr>
</tbody>
</table>