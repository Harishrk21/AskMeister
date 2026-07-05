/** Keyword-rich public URLs aligned with search intent */
export const SEO_ROUTES = {
  healthcare: '/whatsapp-automation-for-healthcare',
  education: '/whatsapp-software-for-universities',
  financial: '/whatsapp-banking-automation',
  ecommerce: '/whatsapp-automation-for-ecommerce',
  realEstate: '/whatsapp-automation-for-real-estate',
  travelTourism: '/whatsapp-automation-for-travel-and-tourism',
  analytics: '/whatsapp-business-analytics',
  automation: '/whatsapp-marketing-automation',
  bulkMessaging: '/whatsapp-bulk-messaging',
  liveChat: '/whatsapp-live-chat',
  templates: '/whatsapp-message-templates',
  whatsappApi: '/whatsapp-api',
  chatbots: '/chatbots',
  contact: '/contact',
  chennai: '/whatsapp-marketing-chennai',
  tamilNadu: '/whatsapp-marketing-tamil-nadu',
  caseStudies: '/case-studies',
  blog: '/blog',
  colleges: '/whatsapp-software-for-colleges',
  hospitalWhatsapp: '/hospital-whatsapp',
  kycBanks: '/whatsapp-kyc-automation-for-banks',
  educationAutomation: '/education-whatsapp-automation',
} as const;

export const SITE_URL = 'https://askmeister.com';

export const toCanonical = (path: string) =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

export type InternalLink = { label: string; path: string };

export const INDUSTRY_LINKS: InternalLink[] = [
  { label: 'WhatsApp automation for healthcare', path: SEO_ROUTES.healthcare },
  { label: 'WhatsApp software for universities', path: SEO_ROUTES.education },
  { label: 'WhatsApp banking automation', path: SEO_ROUTES.financial },
  { label: 'WhatsApp automation for ecommerce', path: SEO_ROUTES.ecommerce },
  { label: 'WhatsApp automation for real estate', path: SEO_ROUTES.realEstate },
  { label: 'WhatsApp automation for travel & tourism', path: SEO_ROUTES.travelTourism },
];

export const FEATURE_LINKS: InternalLink[] = [
  { label: 'WhatsApp bulk messaging', path: SEO_ROUTES.bulkMessaging },
  { label: 'WhatsApp marketing automation', path: SEO_ROUTES.automation },
  { label: 'WhatsApp business analytics', path: SEO_ROUTES.analytics },
  { label: 'WhatsApp message templates', path: SEO_ROUTES.templates },
  { label: 'WhatsApp live chat', path: SEO_ROUTES.liveChat },
];

export const CORE_LINKS: InternalLink[] = [
  { label: 'WhatsApp Business API', path: SEO_ROUTES.whatsappApi },
  { label: 'WhatsApp chatbots', path: SEO_ROUTES.chatbots },
  { label: 'Chennai WhatsApp marketing', path: SEO_ROUTES.chennai },
  { label: 'Tamil Nadu WhatsApp marketing', path: SEO_ROUTES.tamilNadu },
  { label: 'Case studies', path: SEO_ROUTES.caseStudies },
  { label: 'Contact sales', path: SEO_ROUTES.contact },
];

export const LONG_TAIL_LINKS: InternalLink[] = [
  { label: 'WhatsApp software for colleges', path: SEO_ROUTES.colleges },
  { label: 'Hospital WhatsApp automation', path: SEO_ROUTES.hospitalWhatsapp },
  { label: 'WhatsApp KYC automation for banks', path: SEO_ROUTES.kycBanks },
  { label: 'Education WhatsApp automation', path: SEO_ROUTES.educationAutomation },
];
