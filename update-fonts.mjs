import fs from 'fs';

let content = fs.readFileSync('src/components/Variant7.tsx', 'utf8');

const replacements = {
  'text-\\[11px\\]': 'text-xs',
  'text-\\[12px\\]': 'text-xs',
  'text-\\[13px\\]': 'text-sm',
  'text-\\[14px\\]': 'text-sm',
  'text-\\[15px\\]': 'text-base',
  'text-\\[17px\\]': 'text-lg',
  'text-\\[19px\\]': 'text-xl',
  'text-\\[22px\\]': 'text-2xl',
  'text-\\[28px\\]': 'text-3xl',
  'text-\\[32px\\]': 'text-4xl',
  'text-[48px]': 'text-5xl',
  'text-\\[48px\\]': 'text-5xl',
  'text-\\[56px\\]': 'text-6xl',
  'text-\\[clamp\\(36px,5\\.5vw,64px\\)\\]': 'text-5xl md:text-6xl lg:text-7xl',
  'text-\\[clamp\\(28px,4vw,44px\\)\\]': 'text-3xl md:text-4xl lg:text-5xl'
};

for (const [key, value] of Object.entries(replacements)) {
  const regex = new RegExp(key, 'g');
  content = content.replace(regex, value);
}

// Convert some explicitly styled h1,h2 etc to match other variants better
content = content.replace(/font-roboto text-4xl/g, 'text-4xl md:text-5xl font-bold');
content = content.replace(/font-roboto/g, 'font-bold');

fs.writeFileSync('src/components/Variant7.tsx', content);
