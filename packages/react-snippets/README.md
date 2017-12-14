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
        <td style="width: 30%;">Import only React from React module.</td>
        <td><code><pre>import React from &#39;react&#39;;&#10;$0</pre></code></td>
      </tr><tr>
        <td>imrc</td>
        <td style="width: 30%;">Import React and Component from React module.</td>
        <td><code><pre>import React, { Component } from &#39;react&#39;;&#10;$0</pre></code></td>
      </tr><tr>
        <td>impt</td>
        <td style="width: 30%;">Imports PropTypes from prop-types module.</td>
        <td><code><pre>import PropTypes from &#39;prop-types&#39;;&#10;$0</pre></code></td>
      </tr><tr>
        <td>nrc</td>
        <td style="width: 30%;">Creates a new stateless functional component; imports, definition, propTypes, and export.</td>
        <td><code><pre>import PropTypes from &#39;prop-types&#39;;&#10;import React from &#39;react&#39;;&#10;&#10;const ${1:componentName} = ({}) =&gt; (&#10;&#9;&lt;div&gt;&#10;&#9;&#9;$0&#10;&#9;&lt;/div&gt;&#10;);&#10;&#10;${1:componentName}.propTypes = {};&#10;&#10;export default ${1:componentName};</pre></code></td>
      </tr><tr>
        <td>nrcc</td>
        <td style="width: 30%;">Creates a component class; imports, definition, propTypes, and export.</td>
        <td><code><pre>import PropTypes from &#39;prop-types&#39;;&#10;import React, { Component } from &#39;react&#39;;&#10;&#10;class ${1:componentName} extends Component {&#10;&#9;constructor(props, ...rest) {&#10;&#9;&#9;super(props, ...rest);&#10;&#9;&#9;this.state = {};&#10;&#9;}&#10;&#10;&#9;render() {&#10;&#9;&#9;return (&#10;&#9;&#9;&#9;&lt;div&gt;&#10;&#9;&#9;&#9;&#9;$0&#10;&#9;&#9;&#9;&lt;/div&gt;&#10;&#9;&#9;);&#10;&#9;}&#10;}&#10;&#10;${1:componentName}.propTypes = {};&#10;&#10;export default ${1:componentName};</pre></code></td>
      </tr><tr>
        <td>rcc</td>
        <td style="width: 30%;">Stand-alone component class</td>
        <td><code><pre>class ${1:componentName} extends Component {&#10;&#9;render() {&#10;&#9;&#9;return (&#10;&#9;&#9;&#9;&lt;div&gt;&#10;&#9;&#9;&#9;&#9;$0&#10;&#9;&#9;&#9;&lt;/div&gt;&#10;&#9;&#9;);&#10;&#9;}&#10;}&#10;</pre></code></td>
      </tr><tr>
        <td>ccon</td>
        <td style="width: 30%;">Component constructor with props.</td>
        <td><code><pre>constructor(props, ...rest) {&#10;&#9;super(props, ...rest);&#10;&#9;$0&#10;}&#10;</pre></code></td>
      </tr><tr>
        <td>cconc</td>
        <td style="width: 30%;">Component constructor with props and context.</td>
        <td><code><pre>constructor(props, context, ...rest) {&#10;&#9;super(props, context, ..rest);&#10;&#9;$0&#10;}&#10;</pre></code></td>
      </tr><tr>
        <td>cwm</td>
        <td style="width: 30%;">Invoked once, both on the client and server, immediately before the initial rendering occurs</td>
        <td><code><pre>&#10;componentWillMount() {&#10;&#9;$0&#10;}&#10;</pre></code></td>
      </tr><tr>
        <td>cdm</td>
        <td style="width: 30%;">Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.</td>
        <td><code><pre>&#10;componentDidMount() {&#10;&#9;$0&#10;}&#10;</pre></code></td>
      </tr><tr>
        <td>cwr</td>
        <td style="width: 30%;">Invoked when a component is receiving new props. This method is not called for the initial render.</td>
        <td><code><pre>&#10;componentWillReceiveProps(nextProps) {&#10;&#9;$0&#10;}&#10;</pre></code></td>
      </tr><tr>
        <td>scu</td>
        <td style="width: 30%;">Invoked before rendering when new props or state are being received. </td>
        <td><code><pre>&#10;shouldComponentUpdate(nextProps, nextState) {&#10;&#9;$0&#10;}&#10;</pre></code></td>
      </tr><tr>
        <td>cwup</td>
        <td style="width: 30%;">Invoked immediately before rendering when new props or state are being received.</td>
        <td><code><pre>&#10;componentWillUpdate(nextProps, nextState) {&#10;&#9;$0&#10;}&#10;</pre></code></td>
      </tr><tr>
        <td>cdup</td>
        <td style="width: 30%;">Invoked immediately after the component's updates are flushed to the DOM.</td>
        <td><code><pre>&#10;componentDidUpdate(prevProps, prevState) {&#10;&#9;$0&#10;}&#10;</pre></code></td>
      </tr><tr>
        <td>cwum</td>
        <td style="width: 30%;">Invoked immediately before a component is unmounted from the DOM.</td>
        <td><code><pre>&#10;componentWillUnmount() {&#10;&#9;$0&#10;}&#10;</pre></code></td>
      </tr><tr>
        <td>sst</td>
        <td style="width: 30%;">Performs a shallow merge of nextState into current state.</td>
        <td><code><pre>this.setState({&#10;&#9;$1&#10;});&#10;$0</pre></code></td>
      </tr><tr>
        <td>ssf</td>
        <td style="width: 30%;">Performs a shallow merge of nextState into current state.</td>
        <td><code><pre>this.setState((state, props) =&gt; ({&#10;&#9;$1&#10;}));&#10;$0</pre></code></td>
      </tr><tr>
        <td>cdp</td>
        <td style="width: 30%;">Destructure component's props.</td>
        <td><code><pre>const {&#10;&#9;$1&#10;} = this.props;&#10;$0</pre></code></td>
      </tr><tr>
        <td>state</td>
        <td style="width: 30%;">Destructure component's state.</td>
        <td><code><pre>const {&#10;&#9;$1&#10;} = this.state;&#10;$0</pre></code></td>
      </tr><tr>
        <td>cbnd</td>
        <td style="width: 30%;">Binds the this of a method. To be used inside a constructor.</td>
        <td><code><pre>this.$1 = this.$1.bind(this);&#10;$0</pre></code></td>
      </tr><tr>
        <td>rdp</td>
        <td style="width: 30%;">Creates empty defaultProps declaration.</td>
        <td><code><pre>$1.defaultProps = {&#10;&#9;$2&#10;};&#10;$0</pre></code></td>
      </tr><tr>
        <td>pta</td>
        <td style="width: 30%;">Array prop type.</td>
        <td><code><pre>PropTypes.array,</pre></code></td>
      </tr><tr>
        <td>ptar</td>
        <td style="width: 30%;">Array prop type required.</td>
        <td><code><pre>PropTypes.array.isRequired,</pre></code></td>
      </tr><tr>
        <td>ptb</td>
        <td style="width: 30%;">Bool prop type.</td>
        <td><code><pre>PropTypes.bool,</pre></code></td>
      </tr><tr>
        <td>ptbr</td>
        <td style="width: 30%;">Bool prop type required.</td>
        <td><code><pre>PropTypes.bool.isRequired,</pre></code></td>
      </tr><tr>
        <td>ptf</td>
        <td style="width: 30%;">Func prop type.</td>
        <td><code><pre>PropTypes.func,</pre></code></td>
      </tr><tr>
        <td>ptfr</td>
        <td style="width: 30%;">Func prop type required.</td>
        <td><code><pre>PropTypes.func.isRequired,</pre></code></td>
      </tr><tr>
        <td>ptn</td>
        <td style="width: 30%;">Number prop type</td>
        <td><code><pre>PropTypes.number,</pre></code></td>
      </tr><tr>
        <td>ptnr</td>
        <td style="width: 30%;">Number prop type required</td>
        <td><code><pre>PropTypes.number.isRequired,</pre></code></td>
      </tr><tr>
        <td>pto</td>
        <td style="width: 30%;">Object prop type.</td>
        <td><code><pre>PropTypes.object,</pre></code></td>
      </tr><tr>
        <td>ptor</td>
        <td style="width: 30%;">Object prop type required.</td>
        <td><code><pre>PropTypes.object.isRequired,</pre></code></td>
      </tr><tr>
        <td>pts</td>
        <td style="width: 30%;">String prop type.</td>
        <td><code><pre>PropTypes.string,</pre></code></td>
      </tr><tr>
        <td>ptsr</td>
        <td style="width: 30%;">String prop type required.</td>
        <td><code><pre>PropTypes.string.isRequired,</pre></code></td>
      </tr><tr>
        <td>ptnd</td>
        <td style="width: 30%;">Anything that can be rendered: numbers, strings, elements or an array.</td>
        <td><code><pre>PropTypes.node,</pre></code></td>
      </tr><tr>
        <td>ptndr</td>
        <td style="width: 30%;">Anything that can be rendered: numbers, strings, elements or an array required.</td>
        <td><code><pre>PropTypes.node.isRequired,</pre></code></td>
      </tr><tr>
        <td>ptel</td>
        <td style="width: 30%;">React element prop type.</td>
        <td><code><pre>PropTypes.element,</pre></code></td>
      </tr><tr>
        <td>ptelr</td>
        <td style="width: 30%;">React element prop type required.</td>
        <td><code><pre>PropTypes.element.isRequired,</pre></code></td>
      </tr><tr>
        <td>pti</td>
        <td style="width: 30%;">Is an instance of a class prop type.</td>
        <td><code><pre>PropTypes.instanceOf($0),</pre></code></td>
      </tr><tr>
        <td>ptir</td>
        <td style="width: 30%;">Is an instance of a class prop type required.</td>
        <td><code><pre>PropTypes.instanceOf($0).isRequired,</pre></code></td>
      </tr><tr>
        <td>pte</td>
        <td style="width: 30%;">Prop type limited to specific values by treating it as an enum.</td>
        <td><code><pre>PropTypes.oneOf([&#39;$0&#39;]),</pre></code></td>
      </tr><tr>
        <td>pter</td>
        <td style="width: 30%;">Prop type limited to specific values by treating it as an enum required.</td>
        <td><code><pre>PropTypes.oneOf([&#39;$0&#39;]).isRequired,</pre></code></td>
      </tr><tr>
        <td>ptot</td>
        <td style="width: 30%;">An object that could be one of many types.</td>
        <td><code><pre>PropTypes.oneOfType([&#10;&#9;$0&#10;]),</pre></code></td>
      </tr><tr>
        <td>ptotr</td>
        <td style="width: 30%;">An object that could be one of many types required.</td>
        <td><code><pre>PropTypes.oneOfType([&#10;&#9;$0&#10;]).isRequired,</pre></code></td>
      </tr><tr>
        <td>ptao</td>
        <td style="width: 30%;">An array of a certain type.</td>
        <td><code><pre>PropTypes.arrayOf($0),</pre></code></td>
      </tr><tr>
        <td>ptaor</td>
        <td style="width: 30%;">An array of a certain type required.</td>
        <td><code><pre>PropTypes.arrayOf($0).isRequired,</pre></code></td>
      </tr><tr>
        <td>ptoo</td>
        <td style="width: 30%;">An object with property values of a certain type.</td>
        <td><code><pre>PropTypes.objectOf($0),</pre></code></td>
      </tr><tr>
        <td>ptoor</td>
        <td style="width: 30%;">An object with property values of a certain type required.</td>
        <td><code><pre>PropTypes.objectOf($0).isRequired,</pre></code></td>
      </tr><tr>
        <td>ptsh</td>
        <td style="width: 30%;">An object taking on a particular shape.</td>
        <td><code><pre>PropTypes.shape({&#10;&#9;$0&#10;}),</pre></code></td>
      </tr><tr>
        <td>ptshr</td>
        <td style="width: 30%;">An object taking on a particular shape required.</td>
        <td><code><pre>PropTypes.shape({&#10;&#9;$0&#10;}).isRequired,</pre></code></td>
      </tr>
</tbody>
</table>