import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// Read keyword page paths/titles/descriptions from TS source via regex (build-time only)
const base = readFileSync(join(root, 'src/data/keywordPages.ts'), 'utf8');
const ext = readFileSync(join(root, 'src/data/keywordPagesExtended.ts'), 'utf8');
const combined = base + ext;

const routes = [];
const blockRe = /path:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?description:\s*\n?\s*'([^']+)'/g;
let m;
while ((m = blockRe.exec(combined)) !== null) {
  routes.push({ path: m[1], title: m[2], description: m[3] });
}

writeFileSync(join(__dirname, 'keyword-routes.json'), JSON.stringify(routes, null, 2));
console.log(`Exported ${routes.length} keyword routes for prerender.`);
