const fs = require('fs');
const content = fs.readFileSync('x:\\feric\\Documents\\Meus Programas que Criei\\java documentation\\data.js', 'utf-8');
const searchStr = '" },';
let pos = -1;
while ((pos = content.indexOf(searchStr, pos + 1)) !== -1) {
    const start = Math.max(0, pos - 150);
    const end = Math.min(content.length, pos + 150);
    const snippet = content.slice(start, end).replace(/\n/g, '\\n');
    console.log(`MATCH at ${pos}:\n${snippet}\n`);
}
