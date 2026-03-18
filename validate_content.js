const fs = require('fs');
const path = 'x:\\feric\\Documents\\Meus Programas que Criei\\java documentation\\data.js';
const content = fs.readFileSync(path, 'utf-8');
const script = content.replace('const courseData =', 'global.courseData =');
eval(script);
for (const key in global.courseData) {
    global.courseData[key].forEach((c, i) => {
        if (typeof c.content !== 'string') {
            console.log(`ERROR: Key "${key}", index ${i} (${c.filename}) content is ${typeof c.content}`);
        } else if (c.content.length === 0) {
              console.log(`WARNING: Key "${key}", index ${i} (${c.filename}) content is empty`);
        }
    });
}
console.log('Validation complete');
