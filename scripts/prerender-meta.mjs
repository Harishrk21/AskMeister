import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');

/** Static meta for prerender — synced with keyword pages + core routes */
const ROUTES = [
  { path: '/', title: 'WhatsApp Marketing Platform in Chennai | Ask Meister', description: 'Ask Meister helps Tamil Nadu & Chennai businesses use WhatsApp for bulk messaging, Business API campaigns, chatbots & automation.' },
  { path: '/whatsapp-api', title: 'WhatsApp Business API | Official Platform | Ask Meister', description: 'WhatsApp Business API onboarding, templates, bulk messaging, and chatbots for Indian businesses. Chennai-based support.' },
  { path: '/chatbots', title: 'WhatsApp Chatbot Builder | AI & Flow Bots | Ask Meister', description: 'Build WhatsApp chatbots for support, sales, and automation. Chennai and India-wide Business API support.' },
  { path: '/integrations', title: 'WhatsApp Integrations | Shopify, Zoho, Tally, HRMS & ERP | Ask Meister', description: 'WhatsApp integrations for Shopify, WooCommerce, Zoho, Tally, HRMS, ERP, Zapier, and HubSpot.' },
  { path: '/contact', title: 'Contact Ask Meister | WhatsApp Marketing Chennai', description: 'Contact Ask Meister in Chennai for WhatsApp Business API, bulk messaging, and chatbot support.' },
  { path: '/whatsapp-marketing-chennai', title: 'WhatsApp Marketing Software Chennai | Ask Meister', description: 'Chennai businesses use Ask Meister for WhatsApp bulk messaging, API, chatbots, and automation.' },
  { path: '/whatsapp-bulk-messaging', title: 'WhatsApp Bulk Messaging | Official Broadcasts | Ask Meister', description: 'Official WhatsApp bulk messaging with approved templates and opt-in lists.' },
  { path: '/whatsapp-marketing-automation', title: 'WhatsApp Marketing Automation | Workflows | Ask Meister', description: 'WhatsApp marketing automation: drip campaigns, triggers, and integrations.' },
  { path: '/whatsapp-live-chat', title: 'WhatsApp Live Chat | Team Inbox | Ask Meister', description: 'WhatsApp live chat and shared team inbox for customer support.' },
  { path: '/whatsapp-shopify-integration', title: 'Shopify WhatsApp Integration | Ask Meister', description: 'Connect Shopify to WhatsApp for order alerts and cart recovery.' },
  { path: '/whatsapp-tally-integration', title: 'Tally WhatsApp Integration | Ask Meister', description: 'Tally invoice and payment reminders on WhatsApp.' },
  { path: '/whatsapp-business-api-chennai', title: 'WhatsApp Business API Chennai | Ask Meister', description: 'WhatsApp API provider in Chennai with local support.' },
  { path: '/whatsapp-marketing-anna-nagar', title: 'WhatsApp Marketing Anna Nagar Chennai | Ask Meister', description: 'WhatsApp marketing for Anna Nagar, Chennai businesses.' },
  { path: '/whatsapp-for-restaurants', title: 'WhatsApp for Restaurants | Ask Meister', description: 'Restaurant reservations, orders, and delivery updates on WhatsApp.' },
  { path: '/blog', title: 'WhatsApp Marketing Blog | Ask Meister', description: 'Guides on WhatsApp API, bulk messaging, integrations, and Chennai marketing.' },
  { path: '/case-studies', title: 'Case Studies | Ask Meister', description: 'How teams use Ask Meister for WhatsApp automation.' },
];

const OG_IMAGE = 'https://askmeister.com/og-image.png';

function injectMeta(html, route) {
  const canonical = `https://askmeister.com${route.path === '/' ? '' : route.path}`;
  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);
  out = out.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}"`
  );
  out = out.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}"`);
  out = out.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}"`);
  out = out.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${canonical}"`);
  out = out.replace(/<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${OG_IMAGE}"`);
  out = out.replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}"`);
  out = out.replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}"`);
  out = out.replace(/<meta name="twitter:image" content="[^"]*"/, `<meta name="twitter:image" content="${OG_IMAGE}"`);
  if (!out.includes('rel="canonical"')) {
    out = out.replace('</head>', `  <link rel="canonical" href="${canonical}" />\n  </head>`);
  } else {
    out = out.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${canonical}"`);
  }
  return out;
}

// Load extended routes from keywordPagesExtended + keywordPages base via dynamic import would need tsx.
// Append paths from a generated list — import JSON exported at build time.
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

function loadKeywordRoutes() {
  try {
    // After vite build, we read from a JSON file generated by export-keywords script
    const jsonPath = join(root, 'scripts', 'keyword-routes.json');
    if (existsSync(jsonPath)) {
      return JSON.parse(readFileSync(jsonPath, 'utf8'));
    }
  } catch {
    /* use ROUTES only */
  }
  return [];
}

const indexPath = join(dist, 'index.html');
if (!existsSync(indexPath)) {
  console.error('dist/index.html not found — run vite build first');
  process.exit(1);
}

const baseHtml = readFileSync(indexPath, 'utf8');
const keywordRoutes = loadKeywordRoutes();
const allRoutes = [...ROUTES, ...keywordRoutes];

// Dedupe by path
const seen = new Set();
const unique = allRoutes.filter((r) => {
  if (seen.has(r.path)) return false;
  seen.add(r.path);
  return true;
});

for (const route of unique) {
  const html = injectMeta(baseHtml, route);
  if (route.path === '/') continue;
  const dir = join(dist, route.path.replace(/^\//, ''));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
}

// og-image copy
const ogSrc = join(root, 'public', 'og-image.png');
const ogDest = join(dist, 'og-image.png');
if (existsSync(ogSrc)) {
  copyFileSync(ogSrc, ogDest);
}

console.log(`Prerendered meta for ${unique.length} routes (${unique.length - 1} HTML files).`);
