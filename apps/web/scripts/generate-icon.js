const fs = require('fs');
let rays = '';
for(let i=0; i<32; i++) {
  const angle = (i * 360) / 32;
  let outer = 23;
  if (i % 8 === 0) outer = 50;
  else if (i % 8 === 4) outer = 38;
  else if (i % 2 === 0) outer = 28;
  // Make stroke-width a bit thicker for small icons (e.g., 4 instead of 1.5)
  rays += `    <line x1="0" y1="${-18}" x2="0" y2="${-outer}" stroke="#047857" stroke-width="4" stroke-linecap="round" transform="rotate(${angle})" />\n`;
}
const svg = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(50, 50)">
${rays}  </g>
</svg>`;
fs.writeFileSync('app/icon.svg', svg);
