const fs = require('fs');
const htmlEncoder = require('htmlencode');
const path = require('path');
const snippets = require(path.join(process.cwd(), 'snippets', 'snippets.json'));

const aboutContents = fs.readFileSync(path.join(process.cwd(), 'about.md'));

const readmeContents = `${aboutContents}

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
${Object.values(snippets)
  .map(
    snippet =>
      `<tr>
        <td>${snippet.prefix}</td>
        <td style="width: 30%;">${snippet.description}</td>
        <td><code><pre>${htmlEncoder.htmlEncode(snippet.body)}</pre></code></td>
      </tr>`,
  )
  .join('')}
</tbody>
</table>`;

fs.writeFileSync(path.join(process.cwd(), 'README.md'), readmeContents, 'utf8');
