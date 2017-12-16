# VS Code JS Testing Snippets

This extension contains code snippets for testing JavaScript used by Andrew Smith.. Compatible with [Mocha](https://mochajs.org/) and [Jest](https://facebook.github.io/jest).

## Installation

In order to install an extension you need to launch the Command Palette (Ctrl + Shift + P or Cmd + Shift + P) and type Extensions.
There you have either the option to show the already installed snippets or install new ones.

## Supported Languages (file extensions)

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
        <td>before</td>
        <td style="width: 30%;">Testing Before</td>
        <td><code><pre>before(function() =&gt; {&#10;&#9;$1&#10;});$0</pre></code></td>
      </tr><tr>
        <td>be</td>
        <td style="width: 30%;">Testing Before Each</td>
        <td><code><pre>beforeEach(function() =&gt; {&#10;&#9;$1&#10;});$0</pre></code></td>
      </tr><tr>
        <td>after</td>
        <td style="width: 30%;">Testing After</td>
        <td><code><pre>after(function() =&gt; {&#10;&#9;$1&#10;});$0</pre></code></td>
      </tr><tr>
        <td>ae</td>
        <td style="width: 30%;">Testing After Each</td>
        <td><code><pre>afterEach(function() =&gt; {&#10;&#9;$1&#10;});$0</pre></code></td>
      </tr><tr>
        <td>ste</td>
        <td style="width: 30%;">Testing Suite</td>
        <td><code><pre>suite(&#39;$1&#39;, function() =&gt; {&#10;&#9;$2&#10;});$0</pre></code></td>
      </tr><tr>
        <td>des</td>
        <td style="width: 30%;">Testing Describe</td>
        <td><code><pre>describe(&#39;$1&#39;, function() =&gt; {&#10;&#9;$2&#10;});$0</pre></code></td>
      </tr><tr>
        <td>steup</td>
        <td style="width: 30%;">Testing Suite Setup</td>
        <td><code><pre>suiteSetup(function() =&gt; {&#10;&#9;$1&#10;});$0</pre></code></td>
      </tr><tr>
        <td>setup</td>
        <td style="width: 30%;">Testing Setup</td>
        <td><code><pre>setup(function() =&gt; {&#10;&#9;$1&#10;});$0</pre></code></td>
      </tr><tr>
        <td>stedown</td>
        <td style="width: 30%;">Testing Suite Teardown</td>
        <td><code><pre>suiteTeardown(function() =&gt; {&#10;&#9;$1&#10;});$0</pre></code></td>
      </tr><tr>
        <td>teardown</td>
        <td style="width: 30%;">Testing Teardown</td>
        <td><code><pre>teardown(function() =&gt; {&#10;&#9;$1&#10;});$0</pre></code></td>
      </tr><tr>
        <td>tst</td>
        <td style="width: 30%;">Testing Test</td>
        <td><code><pre>test(&#39;$1&#39;, function() =&gt; {&#10;&#9;$2&#10;});</pre></code></td>
      </tr>
</tbody>
</table>