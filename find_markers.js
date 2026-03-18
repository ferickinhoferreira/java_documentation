const fs = require('fs');
const content = fs.readFileSync('x:\\feric\\Documents\\Meus Programas que Criei\\java documentation\\data.js', 'utf-8');
const searchStr = '" },';
let pos = content.indexOf(searchStr);
while (pos !== -1) {
    const start = Math.max(0, pos - 100);
    const end = Math.min(content.length, pos + 100);
    const snippet = content.slice(start, end).replace(/\n/g, '\\n');
    console.log(`MATCH at ${pos}:\n${snippet}\n`);
    pos = content.indexOf(searchStr, pos + 1);
}
