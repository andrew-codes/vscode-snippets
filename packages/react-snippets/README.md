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
* JSX after installing the [corresponding extension](https://marketplace.visualstudio.com/items?itemName=TwentyChung.jsx)


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
        <td>imr</td>
        <td style="width: 30%;">import React</td>
        <td><code><pre>import React from &#39;react&#39;;$0</pre></code></td>
      </tr><tr>
        <td>imrc</td>
        <td style="width: 30%;">import React, {Component}</td>
        <td><code><pre>import React, { Component } from &#39;react&#39;;$0</pre></code></td>
      </tr><tr>
        <td>impt</td>
        <td style="width: 30%;">import PropTypes</td>
        <td><code><pre>import PropTypes from &#39;prop-types&#39;;$0</pre></code></td>
      </tr><tr>
        <td>nrc</td>
        <td style="width: 30%;">all inclusive functional component</td>
        <td><code><pre>import PropTypes from &#39;prop-types&#39;;&#10;import React from &#39;react&#39;;&#10;&#10;const ${1:componentName} = ({}) =&gt; (&#10;&#9;${0:&lt;div&gt;&lt;/div&gt;}&#10;);&#10;&#10;${1:componentName}.propTypes = {};&#10;&#10;export default ${1:componentName};</pre></code></td>
      </tr><tr>
        <td>nrcc</td>
        <td style="width: 30%;">all inclusive class component</td>
        <td><code><pre>import PropTypes from &#39;prop-types&#39;;&#10;import React, { Component } from &#39;react&#39;;&#10;&#10;class ${1:componentName} extends Component {&#10;&#9;constructor(props, ...rest) {&#10;&#9;&#9;super(props, ...rest);&#10;&#9;&#9;this.state = {};&#10;&#9;}&#10;&#10;&#9;render() {&#10;&#9;&#9;return (&#10;&#9;&#9;&#9;${0:&lt;div&gt;&lt;/div&gt;}&#10;&#9;&#9;);&#10;&#9;}&#10;}&#10;&#10;${1:componentName}.propTypes = {};&#10;&#10;export default ${1:componentName};</pre></code></td>
      </tr><tr>
        <td>rc</td>
        <td style="width: 30%;">just functional component</td>
        <td><code><pre>const ${1:componentName} = ({}) =&gt; (&#10;&#9;${2:&lt;div&gt;&lt;/div&gt;}&#10;);&#10;&#10;${1:componentName}.propTypes = {};&#10;$0</pre></code></td>
      </tr><tr>
        <td>rcc</td>
        <td style="width: 30%;">just class Component</td>
        <td><code><pre>class ${1:componentName} extends Component {&#10;&#9;constructor(props, ...rest) {&#10;&#9;&#9;super(props, ...rest);&#10;&#9;&#9;this.state = {};&#10;&#9;}&#10;&#10;&#9;render() {&#10;&#9;&#9;return (&#10;&#9;&#9;&#9;${2:&lt;div&gt;&lt;/div&gt;}&#10;&#9;&#9;);&#10;&#9;}&#10;}&#10;&#10;${1:componentName}.propTypes = {};&#10;$0</pre></code></td>
      </tr><tr>
        <td>ccon</td>
        <td style="width: 30%;">default component constructor</td>
        <td><code><pre>constructor(props, ...rest) {&#10;&#9;super(props, ...rest);&#10;&#9;$1&#10;}$0</pre></code></td>
      </tr><tr>
        <td>cconc</td>
        <td style="width: 30%;">constructor; props and context</td>
        <td><code><pre>constructor(props, context, ...rest) {&#10;&#9;super(props, context, ...rest);&#10;&#9;$1&#10;}$0</pre></code></td>
      </tr><tr>
        <td>cwm</td>
        <td style="width: 30%;">componentWillMount</td>
        <td><code><pre>componentWillMount() {&#10;&#9;$0&#10;}</pre></code></td>
      </tr><tr>
        <td>cdm</td>
        <td style="width: 30%;">componentDidMount</td>
        <td><code><pre>componentDidMount() {&#10;&#9;$0&#10;}</pre></code></td>
      </tr><tr>
        <td>cwr</td>
        <td style="width: 30%;">componentWillReceiveProps</td>
        <td><code><pre>componentWillReceiveProps(nextProps) {&#10;&#9;$0&#10;}</pre></code></td>
      </tr><tr>
        <td>scu</td>
        <td style="width: 30%;">shouldComponentUpdate</td>
        <td><code><pre>shouldComponentUpdate(nextProps, nextState) {&#10;&#9;$0&#10;}</pre></code></td>
      </tr><tr>
        <td>cwup</td>
        <td style="width: 30%;">componentWillUpdate</td>
        <td><code><pre>componentWillUpdate(nextProps, nextState) {&#10;&#9;$0&#10;}</pre></code></td>
      </tr><tr>
        <td>cdup</td>
        <td style="width: 30%;">componentDidUpdate</td>
        <td><code><pre>componentDidUpdate(prevProps, prevState) {&#10;&#9;$0&#10;}</pre></code></td>
      </tr><tr>
        <td>cwum</td>
        <td style="width: 30%;">componentWillUnmount</td>
        <td><code><pre>componentWillUnmount() {&#10;&#9;$0&#10;}</pre></code></td>
      </tr><tr>
        <td>ccm</td>
        <td style="width: 30%;">bound component class method</td>
        <td><code><pre>${1:methodName} = () =&gt; {&#10;&#9;$0&#10;};</pre></code></td>
      </tr><tr>
        <td>sst</td>
        <td style="width: 30%;">set state</td>
        <td><code><pre>this.setState({&#10;&#9;$1&#10;});&#10;$0</pre></code></td>
      </tr><tr>
        <td>ssf</td>
        <td style="width: 30%;">set state w/ function</td>
        <td><code><pre>this.setState((state, props) =&gt; ({&#10;&#9;$1&#10;}));&#10;$0</pre></code></td>
      </tr><tr>
        <td>cdp</td>
        <td style="width: 30%;">destructure class props</td>
        <td><code><pre>const {&#10;&#9;$1&#10;} = this.props;&#10;$0</pre></code></td>
      </tr><tr>
        <td>cds</td>
        <td style="width: 30%;">destructure class state</td>
        <td><code><pre>const {&#10;&#9;$1&#10;} = this.state;&#10;$0</pre></code></td>
      </tr><tr>
        <td>cbnd</td>
        <td style="width: 30%;">bind method to class</td>
        <td><code><pre>this.$1 = this.$1.bind(this);&#10;$0</pre></code></td>
      </tr><tr>
        <td>rdp</td>
        <td style="width: 30%;">default props</td>
        <td><code><pre>$1.defaultProps = {&#10;&#9;$2&#10;};&#10;$0</pre></code></td>
      </tr><tr>
        <td>pta</td>
        <td style="width: 30%;">propType array</td>
        <td><code><pre>PropTypes.array,</pre></code></td>
      </tr><tr>
        <td>ptar</td>
        <td style="width: 30%;">propType array required</td>
        <td><code><pre>PropTypes.array.isRequired,</pre></code></td>
      </tr><tr>
        <td>ptb</td>
        <td style="width: 30%;">propType bool</td>
        <td><code><pre>PropTypes.bool,</pre></code></td>
      </tr><tr>
        <td>ptbr</td>
        <td style="width: 30%;">propType bool required</td>
        <td><code><pre>PropTypes.bool.isRequired,</pre></code></td>
      </tr><tr>
        <td>ptf</td>
        <td style="width: 30%;">propType func</td>
        <td><code><pre>PropTypes.func,</pre></code></td>
      </tr><tr>
        <td>ptfr</td>
        <td style="width: 30%;">propType func required</td>
        <td><code><pre>PropTypes.func.isRequired,</pre></code></td>
      </tr><tr>
        <td>ptn</td>
        <td style="width: 30%;">propType number</td>
        <td><code><pre>PropTypes.number,</pre></code></td>
      </tr><tr>
        <td>ptnr</td>
        <td style="width: 30%;">propType number required</td>
        <td><code><pre>PropTypes.number.isRequired,</pre></code></td>
      </tr><tr>
        <td>pto</td>
        <td style="width: 30%;">propType object</td>
        <td><code><pre>PropTypes.object,</pre></code></td>
      </tr><tr>
        <td>ptor</td>
        <td style="width: 30%;">propType object required</td>
        <td><code><pre>PropTypes.object.isRequired,</pre></code></td>
      </tr><tr>
        <td>pts</td>
        <td style="width: 30%;">propType string</td>
        <td><code><pre>PropTypes.string,</pre></code></td>
      </tr><tr>
        <td>ptsr</td>
        <td style="width: 30%;">propTypes string required</td>
        <td><code><pre>PropTypes.string.isRequired,</pre></code></td>
      </tr><tr>
        <td>ptnd</td>
        <td style="width: 30%;">propType node</td>
        <td><code><pre>PropTypes.node,</pre></code></td>
      </tr><tr>
        <td>ptndr</td>
        <td style="width: 30%;">propType node required</td>
        <td><code><pre>PropTypes.node.isRequired,</pre></code></td>
      </tr><tr>
        <td>ptel</td>
        <td style="width: 30%;">propType element</td>
        <td><code><pre>PropTypes.element,</pre></code></td>
      </tr><tr>
        <td>ptelr</td>
        <td style="width: 30%;">propType element required</td>
        <td><code><pre>PropTypes.element.isRequired,</pre></code></td>
      </tr><tr>
        <td>pti</td>
        <td style="width: 30%;">propType instanceOf</td>
        <td><code><pre>PropTypes.instanceOf($0),</pre></code></td>
      </tr><tr>
        <td>ptir</td>
        <td style="width: 30%;">propType instanceOf required</td>
        <td><code><pre>PropTypes.instanceOf($0).isRequired,</pre></code></td>
      </tr><tr>
        <td>pte</td>
        <td style="width: 30%;">propType enum</td>
        <td><code><pre>PropTypes.oneOf([&#39;$0&#39;]),</pre></code></td>
      </tr><tr>
        <td>pter</td>
        <td style="width: 30%;">propType enum required</td>
        <td><code><pre>PropTypes.oneOf([&#39;$0&#39;]).isRequired,</pre></code></td>
      </tr><tr>
        <td>ptot</td>
        <td style="width: 30%;">propType one of type</td>
        <td><code><pre>PropTypes.oneOfType([&#10;&#9;$0&#10;]),</pre></code></td>
      </tr><tr>
        <td>ptotr</td>
        <td style="width: 30%;">propType one of type required</td>
        <td><code><pre>PropTypes.oneOfType([&#10;&#9;$0&#10;]).isRequired,</pre></code></td>
      </tr><tr>
        <td>ptao</td>
        <td style="width: 30%;">propType array of</td>
        <td><code><pre>PropTypes.arrayOf($0),</pre></code></td>
      </tr><tr>
        <td>ptaor</td>
        <td style="width: 30%;">propType array of required</td>
        <td><code><pre>PropTypes.arrayOf($0).isRequired,</pre></code></td>
      </tr><tr>
        <td>ptoo</td>
        <td style="width: 30%;">propType object of</td>
        <td><code><pre>PropTypes.objectOf($0),</pre></code></td>
      </tr><tr>
        <td>ptoor</td>
        <td style="width: 30%;">propType object of required</td>
        <td><code><pre>PropTypes.objectOf($0).isRequired,</pre></code></td>
      </tr><tr>
        <td>ptsh</td>
        <td style="width: 30%;">propType shape</td>
        <td><code><pre>PropTypes.shape({&#10;&#9;$0&#10;}),</pre></code></td>
      </tr><tr>
        <td>ptshr</td>
        <td style="width: 30%;">propType shape required</td>
        <td><code><pre>PropTypes.shape({&#10;&#9;$0&#10;}).isRequired,</pre></code></td>
      </tr><tr>
        <td>hoc</td>
        <td style="width: 30%;">higher order component</td>
        <td><code><pre>C =&gt; {&#10;&#9;return class extends Component {&#10;&#9;&#9;constructor(...rest) {&#10;&#9;&#9;&#9;super(rest);&#10;&#9;}&#10;&#10;&#9;&#9;render() {&#10;&#9;&#9;&#9;$0return &lt;C {...this.props} /&gt;;&#10;&#9;&#9;}&#10;&#9;};&#10;}</pre></code></td>
      </tr><tr>
        <td>cref</td>
        <td style="width: 30%;">ref</td>
        <td><code><pre>ref={(el) =&gt; {&#10;&#9;this.$1 = el;&#10;}}&#10;</pre></code></td>
      </tr>
</tbody>
</table>