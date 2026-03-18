const fs = require('fs');
const content = fs.readFileSync('x:\\feric\\Documents\\Meus Programas que Criei\\java documentation\\data.js', 'utf-8');
const script = content.replace('const courseData =', 'global.courseData =');
try {
    eval(script);
    console.log('SUCCESS');
    console.log('Keys:', Object.keys(global.courseData));
} catch (e) {
    console.log('FAILURE');
    console.log('Error:', e.message);
    // Find approximate location
    const lines = script.split('\n');
    let current = '';
    for (let i = 0; i < lines.length; i++) {
        current += lines[i] + '\n';
        try {
            // This is a naive way but might work for simple trailing/syntax errors
            // Actually, let's just use the error stack if possible
        } catch (inner) {}
    }
    console.log('Stack:', e.stack);
}
