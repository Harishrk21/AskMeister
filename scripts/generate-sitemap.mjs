import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const STATIC_URLS = [
  ['/', 'daily', '1.0'],
  ['/whatsapp-api', 'weekly', '0.9'],
  ['/whatsapp-bulk-messaging', 'weekly', '0.9'],
  ['/tools', 'weekly', '0.8'],
  ['/chatbots', 'weekly', '0.8'],
  ['/blog', 'daily', '0.8'],
  ['/about', 'monthly', '0.7'],
  ['/contact', 'monthly', '0.7'],
  ['/integrations', 'weekly', '0.7'],
  ['/help', 'weekly', '0.6'],
  ['/case-studies', 'monthly', '0.6'],
  ['/free-trial', 'monthly', '0.65'],
  ['/whatsapp-marketing-chennai', 'monthly', '0.8'],
  ['/whatsapp-marketing-tamil-nadu', 'monthly', '0.7'],
  ['/whatsapp-live-chat', 'weekly', '0.8'],
  ['/whatsapp-marketing-automation', 'weekly', '0.8'],
  ['/whatsapp-business-analytics', 'weekly', '0.8'],
  ['/whatsapp-message-templates', 'weekly', '0.8'],
  ['/whatsapp-software-for-universities', 'monthly', '0.7'],
  ['/whatsapp-automation-for-healthcare', 'monthly', '0.7'],
  ['/whatsapp-automation-for-ecommerce', 'monthly', '0.7'],
  ['/whatsapp-automation-for-travel-and-tourism', 'monthly', '0.7'],
  ['/whatsapp-automation-for-real-estate', 'monthly', '0.7'],
  ['/whatsapp-banking-automation', 'monthly', '0.7'],
  ['/terms', 'yearly', '0.5'],
  ['/privacy', 'yearly', '0.5'],
  ['/affiliate', 'monthly', '0.6'],
  ['/careers', 'monthly', '0.6'],
  ['/alternatives/wati-alternative', 'weekly', '0.7'],
  ['/alternatives/aisensy-alternative', 'weekly', '0.7'],
  ['/alternatives/interakt-alternative', 'weekly', '0.7'],
  ['/alternatives/gallabox-alternative', 'weekly', '0.7'],
  ['/whatsapp-marketing-coimbatore', 'monthly', '0.65'],
  ['/whatsapp-marketing-madurai', 'monthly', '0.65'],
  ['/whatsapp-marketing-trichy', 'monthly', '0.65'],
  ['/whatsapp-marketing-salem', 'monthly', '0.65'],
  ['/whatsapp-marketing-tiruppur', 'monthly', '0.65'],
  ['/whatsapp-marketing-for-ecommerce', 'monthly', '0.65'],
  ['/whatsapp-marketing-for-restaurants-chennai', 'monthly', '0.65'],
  ['/whatsapp-marketing-for-real-estate-chennai', 'monthly', '0.65'],
];

const BLOG_SLUGS = [
  'whatsapp-marketing-automation-guide',
  'whatsapp-business-api-complete-guide',
  'broadcast-messages-best-practices',
  'chatbot-ecommerce-sales',
  'customer-support-whatsapp',
  'automation-workflows-setup',
  'shopify-whatsapp-integration-guide',
  'tally-whatsapp-payment-reminders',
  'whatsapp-business-api-chennai-guide',
  'hrms-whatsapp-employee-alerts',
];

const keywordRoutes = JSON.parse(
  readFileSync(join(__dirname, 'keyword-routes.json'), 'utf8')
);

const lastmod = '2026-07-05';
const domain = 'https://askmeister.com';

const urls = [
  ...STATIC_URLS.map(([path, freq, priority]) => ({ path, freq, priority })),
  ...BLOG_SLUGS.map((slug) => ({
    path: `/blog/${slug}`,
    freq: 'monthly',
    priority: '0.7',
  })),
  ...keywordRoutes.map((r) => ({
    path: r.path,
    freq: 'monthly',
    priority: r.path.includes('chennai') || r.path.includes('integration') ? '0.75' : '0.7',
  })),
];

const seen = new Set();
const unique = urls.filter((u) => {
  if (seen.has(u.path)) return false;
  seen.add(u.path);
  return true;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique
  .map(
    (u) => `  <url>
    <loc>${domain}${u.path === '/' ? '/' : u.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public', 'sitemap.xml'), xml);
console.log(`Sitemap written with ${unique.length} URLs.`);
