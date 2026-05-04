const fs = require('fs');
const path = require('path');

// Replace all broken/suspect Unsplash URLs with known-working ones
const replacements = [
  // The 404 image (used as hero, carpet, decor)
  { find: 'photo-1558618666-fcd25c85f82e', replace: 'photo-1615874694520-474822394e73' },
  // Suspect carpet image
  { find: 'photo-1615529182904-14819c35db37', replace: 'photo-1616594039964-ae9021a400a0' },
  // Suspect grass image
  { find: 'photo-1558904541-efa843a96f01', replace: 'photo-1616486338812-3dadae4b4ace' },
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
    replacements.forEach(({ find, replace }) => {
      content = content.split(find).join(replace);
    });
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed images in ${filePath}`);
    }
  }
});
console.log('Done!');
