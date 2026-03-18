const fs = require('fs');
const path = 'x:\\feric\\Documents\\Meus Programas que Criei\\java documentation\\data.js';
const content = fs.readFileSync(path, 'utf-8');
const script = content.replace('const courseData =', 'global.courseData =');
eval(script);
const key = '0-comece-por-aqui-o-be-a-ba';
if (global.courseData[key]) {
    console.log(`Key "${key}" has ${global.courseData[key].length} chapters.`);
    global.courseData[key].forEach((c, i) => {
        console.log(`${i}: ${c.filename} (content length: ${c.content ? c.content.length : 'UNDEFINED'})`);
    });
} else {
    console.log(`Key "${key}" NOT FOUND!`);
}
