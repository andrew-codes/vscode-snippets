const fs = require('fs');
const htmlEncoder = require('htmlencode');
const path = require('path');
const snippets = require(path.join(process.cwd(), 'snippets', 'snippets.json'));

const aboutContents = fs.readFileSync(path.join(process.cwd(), 'about.md'));

const readmeContents = `${aboutContents}
## Snippets

${Object.keys(snippets)
  .map(
    key =>
      `### ${key} (\`${snippets[key].prefix}\`)
\`\`\`
${
        Array.isArray(snippets[key].body)
          ? snippets[key].body.join('\n')
          : snippets[key].body
      }
\`\`\`
`,
  )
  .join('')}`;

fs.writeFileSync(path.join(process.cwd(), 'README.md'), readmeContents, 'utf8');
