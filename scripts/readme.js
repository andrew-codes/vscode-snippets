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
${Object.keys(snippets)
  .map(
    key =>
      `<tr>
        <td>${snippets[key].prefix}</td>
        <td style="width: 30%;">${key}</td>
        <td><code><pre>${htmlEncoder.htmlEncode(
          Array.isArray(snippets[key].body)
            ? snippets[key].body.join('\n')
            : snippets[key].body,
        )}</pre></code></td>
      </tr>`,
  )
  .join('')}
</tbody>
</table>`;

fs.writeFileSync(path.join(process.cwd(), 'README.md'), readmeContents, 'utf8');
