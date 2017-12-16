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
        <td>ba</td>
        <td style="width: 30%;">beforeAll</td>
        <td><code><pre>beforeAll(() =&gt; {&#10;&#9;$1&#10;});$0</pre></code></td>
      </tr><tr>
        <td>be</td>
        <td style="width: 30%;">beforeEach</td>
        <td><code><pre>beforeEach(() =&gt; {&#10;&#9;$1&#10;});$0</pre></code></td>
      </tr><tr>
        <td>aa</td>
        <td style="width: 30%;">afterAll</td>
        <td><code><pre>after(() =&gt; {&#10;&#9;$1&#10;});$0</pre></code></td>
      </tr><tr>
        <td>ae</td>
        <td style="width: 30%;">afterEach</td>
        <td><code><pre>afterEach(() =&gt; {&#10;&#9;$1&#10;});$0</pre></code></td>
      </tr><tr>
        <td>ste</td>
        <td style="width: 30%;">suite</td>
        <td><code><pre>suite(&#39;$1&#39;, () =&gt; {&#10;&#9;$2&#10;});$0</pre></code></td>
      </tr><tr>
        <td>tst</td>
        <td style="width: 30%;">test</td>
        <td><code><pre>test(&#39;$1&#39;, () =&gt; {&#10;&#9;$2&#10;});</pre></code></td>
      </tr>
</tbody>
</table>