import fs from 'fs';

let content = fs.readFileSync('src/components/Variant7.tsx', 'utf8');

content = content.replace(/text-5xll/g, 'text-xl');
content = content.replace(/text-5xls/g, 'text-xs');
content = content.replace(/text-5xlxl/g, 'text-4xl md:text-5xl');

fs.writeFileSync('src/components/Variant7.tsx', content);
