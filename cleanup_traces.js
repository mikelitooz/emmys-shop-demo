const fs = require('fs');
const path = require('path');

const fileReplacements = [
  {
    file: 'src/app/layout.tsx',
    replacements: [
      { find: 'https://right-price-carpets-demo.vercel.app', replace: 'https://emmys-shop-demo.vercel.app' }
    ]
  },
  {
    file: 'src/components/layout/Header.tsx',
    replacements: [
      { find: '<span className="font-display text-3xl font-light tracking-tight text-forest">Carpets</span>', replace: '<span className="font-display text-3xl font-light tracking-tight text-forest">Shop</span>' },
      { find: 'placeholder="Search carpets, laminate, LVT, vinyl..."', replace: 'placeholder="Search sofas, beds, dining sets..."' }
    ]
  },
  {
    file: 'src/components/sections/HomeView.tsx',
    replacements: [
      { find: 'headline: "Quality carpets at the right price"', replace: 'headline: "Beautiful furniture for every room"' },
      { find: 'Mix categories and unlock bundle pricing. Carpets, laminate, LVT and vinyl — all under one roof.', replace: 'Mix categories and unlock bundle pricing. Sofas, beds, dining sets and decor — all under one roof.' },
      { find: 'alt: "Luxury carpet showroom display"', replace: 'alt: "Luxury furniture showroom display"' }
    ]
  },
  {
    file: 'src/components/ecommerce/ShopView.tsx',
    replacements: [
      { find: 'Browse carpets, laminate, LVT, vinyl and more', replace: 'Browse sofas, beds, dining, decor and more' }
    ]
  },
  {
    file: 'src/components/sections/Hero.tsx',
    replacements: [
      { find: 'Sofas, beds, wardrobes, dining sets, carpets and home essentials', replace: 'Sofas, beds, wardrobes, dining sets and home essentials' }
    ]
  },
  {
    file: 'src/components/ecommerce/CheckoutView.tsx',
    replacements: [
      { find: 'rpc10', replace: 'emmy10' }
    ]
  },
  {
    file: 'src/app/page.tsx',
    replacements: [
      { find: 'Explore sofas, beds, wardrobes, carpets, dining furniture and home styling', replace: 'Explore sofas, beds, wardrobes, dining furniture and home styling' }
    ]
  },
  {
    file: 'src/components/sections/AboutView.tsx',
    replacements: [
      { find: 'Furniture, carpets, home essentials, delivery and assembly', replace: 'Furniture, home essentials, delivery and assembly' }
    ]
  }
];

fileReplacements.forEach(({ file, replacements }) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    replacements.forEach(({ find, replace }) => {
      content = content.replace(find, replace);
    });
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
});

// For package-lock.json
const lockPath = path.join(__dirname, 'package-lock.json');
if (fs.existsSync(lockPath)) {
  let content = fs.readFileSync(lockPath, 'utf8');
  content = content.replace(/"name": "right-price-carpets-demo"/g, '"name": "emmys-shop-demo"');
  fs.writeFileSync(lockPath, content, 'utf8');
  console.log('Updated package-lock.json');
}

console.log('Done!');
