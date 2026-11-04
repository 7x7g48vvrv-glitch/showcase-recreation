import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'dist/services/catalog.json'), 'utf8'));
if(data.length !== 14 || new Set(data.map(s=>s.id)).size !== 14) throw new Error('Expected 14 unique service cards');
for (const service of data) {
  if (!service.name || !service.description || service.deliverables.length < 4 || service.chapter.length < 6) throw new Error(`Incomplete service: ${service.id}`);
  for (const asset of [service.image, service.deckIcon]) {
    if (!fs.existsSync(path.join(root, 'dist', asset))) throw new Error(`Missing asset: ${asset}`);
  }
  if (service.cta?.href?.includes('8am.com')) throw new Error('Reference-company CTA remains');
}
fs.writeFileSync(path.join(root, 'dist/services/catalog.js'), `export const services = ${JSON.stringify(data)};\n`);
console.log('Verified 14 services, chapter content, icons and corporate photo assets.');
