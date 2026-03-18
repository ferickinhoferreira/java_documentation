const fs = require('fs');
const path = 'x:\\feric\\Documents\\Meus Programas que Criei\\java documentation\\data.js';
const content = fs.readFileSync(path, 'utf-8');
const lines = content.split('\n');
lines.forEach((line, i) => {
    const match = line.match(/"filename":\s*"([^"]+)"/);
    if (match) {
        console.log(`Line ${i + 1}: ${match[1]}`);
    }
    if (line.includes('const courseData =')) {
        console.log(`Declaration at Line ${i + 1}`);
    }
});
