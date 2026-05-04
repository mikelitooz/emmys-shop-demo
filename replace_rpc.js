const fs = require('fs');
const path = require('path');

const replacements = [
  // Business name
  { regex: /K\.E\.S\. Bathrooms/g, replacement: "Right Price Carpets" },
  { regex: /K\.E\.S\./g, replacement: "Right Price" },
  { regex: /KES/g, replacement: "RPC" },
  // Location
  { regex: /Chesterfield/g, replacement: "Middlesbrough" },
  { regex: /Clay Cross/g, replacement: "Linthorpe" },
  { regex: /High St/g, replacement: "Cumberland Road" },
  { regex: /264 Cumberland Road, Middlesbrough S2 4DL/g, replacement: "20 Cumberland Road, Linthorpe, Middlesbrough TS5 6HZ" },
  // Products context
  { regex: /furniture showroom/g, replacement: "flooring showroom" },
  { regex: /Handpicked furniture, carpets and home styling/g, replacement: "Quality carpets, laminate, LVT and flooring" },
  { regex: /Handpicked sofas, beds, dining sets, wardrobes and home decor/g, replacement: "Quality carpets, laminate, LVT flooring and artificial grass" },
  { regex: /Browse sofas, beds, dining, decor and complete your order\. Handpicked furniture/g, replacement: "Browse carpets, laminate, LVT, vinyl and artificial grass. Quality flooring" },
  { regex: /Handpicked offers on sofas, beds, dining and decor/g, replacement: "Handpicked offers on carpets, laminate, LVT and vinyl" },
  { regex: /Browse sofas, beds, dining, decor and more/g, replacement: "Browse carpets, laminate, LVT, vinyl and more" },
  { regex: /sofas, beds, dining and decor/g, replacement: "carpets, laminate, LVT and vinyl" },
  { regex: /Furniture & Home Styling/g, replacement: "Carpets & Flooring" },
  { regex: /Premium Furniture Showroom/g, replacement: "Quality Carpets & Flooring" },
  { regex: /premium furniture showroom gallery experience/g, replacement: "flooring showroom gallery" },
  { regex: /furniture, carpets and home essentials/g, replacement: "carpets, laminate, LVT and flooring" },
  { regex: /Visit our Cumberland Road showroom/g, replacement: "Visit our Middlesbrough showroom" },
  { regex: /A Middlesbrough furniture destination with practical local service\./g, replacement: "A friendly family-run flooring business in Middlesbrough with over 30 years experience." },
  { regex: /This demo positions Right Price Carpets as a trusted Cumberland Road showroom for carpets, laminate, LVT and flooring, with an elevated digital experience that feels ready for modern retail\./g, replacement: "This demo positions Right Price Carpets as a trusted local flooring specialist in Middlesbrough, with an elevated digital experience that feels ready for modern retail." },
  { regex: /Free Middlesbrough delivery/g, replacement: "Free measuring service" },
  { regex: /Free Middlesbrough delivery on selected lines/g, replacement: "Free measuring service across Middlesbrough" },
  { regex: /rated Middlesbrough furniture showroom/g, replacement: "rated Middlesbrough flooring showroom" },
  { regex: /Cumberland Road, Middlesbrough\./g, replacement: "Cumberland Road, Middlesbrough." },
  { regex: /South Right Price homes/g, replacement: "Teesside homes" },
  { regex: /Right Price homes/g, replacement: "Teesside homes" },
  { regex: /Secure checkout · Right Price Carpets/g, replacement: "Secure checkout · Right Price Carpets" },
  // Phone
  { regex: /kes10/g, replacement: "rpc10" },
  // Contact page
  { regex: /Contact Right Price Carpets, view opening hours and plan a showroom visit in Middlesbrough\./g, replacement: "Contact Right Price Carpets, view opening hours and plan a showroom visit in Middlesbrough." },
  { regex: /View and manage your Right Price Carpets basket\./g, replacement: "View and manage your Right Price Carpets basket." },
  { regex: /Browse Right Price Carpets products/g, replacement: "Browse Right Price Carpets products" },
  { regex: /Learn about Right Price Carpets and the Cumberland Road Middlesbrough showroom positioning\./g, replacement: "Learn about Right Price Carpets, a family-run flooring business in Middlesbrough." },
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
