const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /Middlesbrough/g, replacement: "Clay Cross" },
  { regex: /Cumberland Road/g, replacement: "High St" },
  { regex: /Linthorpe/g, replacement: "Clay Cross" },
  { regex: /20 High St, Clay Cross, Clay Cross TS5 6HZ/g, replacement: "87 High St, Clay Cross, Chesterfield S45 9DZ" },
  { regex: /TS5 6HZ/g, replacement: "S45 9DZ" },
  { regex: /01642 871888/g, replacement: "07976 320250" },
];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, 'src'), function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    replacements.forEach(({ regex, replacement }) => {
      content = content.replace(regex, replacement);
    });
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
console.log('Done!');
