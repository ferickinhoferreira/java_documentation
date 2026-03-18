const fs = require('fs');
const path = 'x:\\feric\\Documents\\Meus Programas que Criei\\java documentation\\data.js';
const content = fs.readFileSync(path, 'utf-8');
const script = content.replace('const courseData =', 'global.courseData =');
eval(script);
let output = '';
for (const key in global.courseData) {
    output += `Key: ${key}\n`;
    if (Array.isArray(global.courseData[key])) {
        global.courseData[key].forEach((c, i) => {
            const startStr = c.content ? c.content.slice(0, 50).replace(/\n/g, '\\n') : 'NULL';
            const endStr = c.content ? c.content.slice(-50).replace(/\n/g, '\\n') : 'NULL';
            output += `  [${i}] ${c.filename}\n`;
            output += `      Start: ${startStr}\n`;
            output += `      End:   ${endStr}\n`;
        });
    } else {
        output += `  VALUE: ${JSON.stringify(global.courseData[key]).slice(0, 100)}\n`;
    }
}
fs.writeFileSync('x:\\feric\\Documents\\Meus Programas que Criei\\java documentation\\chapter_survey.txt', output);
console.log('Survey written to chapter_survey.txt');
