const fs = require('fs');
const path = require('path');

const targetDir = 'c:\\portfolio\\protfolio-main\\protfolio\\src\\components';

function replaceColorsInFile(filePath) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Replace blue with purple
    content = content.replace(/blue-(\d+)/g, 'purple-$1');
    // Replace blue-50 if not caught (though \d+ catches 50, but let's be safe)
    content = content.replace(/blue-50(?!0)/g, 'purple-50');

    // Replace cyan with fuchsia
    content = content.replace(/cyan-(\d+)/g, 'fuchsia-$1');
    content = content.replace(/cyan-50(?!0)/g, 'fuchsia-50');

    fs.writeFileSync(filePath, content, 'utf8');
}

function processDirectory(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            processDirectory(fullPath);
        } else {
            replaceColorsInFile(fullPath);
        }
    }
}

processDirectory(targetDir);
console.log('Colors replaced successfully!');
