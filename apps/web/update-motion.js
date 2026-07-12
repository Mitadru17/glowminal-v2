const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next')) {
        results = results.concat(walk(file));
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('framer-motion')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('.');
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.match(/import\s+{([^}]*)\bmotion\b([^}]*)}\s+from\s+['"]framer-motion['"]/)) {
    content = content.replace(/import\s+{([^}]*)\bmotion\b([^}]*)}\s+from\s+['"]framer-motion['"]/g, (match, p1, p2) => {
      const otherImports = (p1 + p2).split(',').map(s => s.trim()).filter(s => s && s !== 'motion').join(', ');
      return `import { ${otherImports}${otherImports ? ', ' : ''}m as motion } from "framer-motion"`;
    });
    // clean up empty imports or stray commas
    content = content.replace(/import\s+{\s*,\s*/g, 'import { ').replace(/,\s*}/g, ' }').replace(/import\s+{\s*}\s*from/g, 'import from');
    fs.writeFileSync(file, content);
    count++;
    console.log('Updated ' + file);
  }
});

console.log('Total updated: ' + count);
