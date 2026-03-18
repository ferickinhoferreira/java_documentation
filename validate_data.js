const fs = require('fs');
const content = fs.readFileSync('x:\\feric\\Documents\\Meus Programas que Criei\\java documentation\\data.js', 'utf-8');
// Strip 'const courseData = ' and ';'
const jsonText = content.replace(/const courseData = /, '').trim().replace(/;$/, '');
try {
    const courseData = eval('(' + jsonText + ')');
    Object.keys(courseData).forEach(section => {
        console.log(`Checking section: ${section}`);
        courseData[section].forEach(chapter => {
            if (!chapter.filename || !chapter.content) {
                throw new Error(`Invalid chapter in section ${section}`);
            }
        });
    });
    console.log("SUCCESS: data.js is valid JSON structure");
} catch (e) {
    console.error("FAILED TO PARSE data.js: " + e.message);
    process.exit(1);
}
