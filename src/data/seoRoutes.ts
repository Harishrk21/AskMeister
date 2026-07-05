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
  integrations: '/integrations',
  chennai: '/whatsapp-marketing-chennai',
  tamilNadu: '/whatsapp-marketing-tamil-nadu',
  caseStudies: '/case-studies',
  blog: '/blog',
  colleges: '/whatsapp-software-for-colleges',
  hospitalWhatsapp: '/hospital-whatsapp',
  kycBanks: '/whatsapp-kyc-automation-for-banks',
  educationAutomation: '/education-whatsapp-automation',
  shopify: '/whatsapp-shopify-integration',
  woocommerce: '/whatsapp-woocommerce-integration',
  zoho: '/whatsapp-zoho-integration',
  tally: '/whatsapp-tally-integration',
  hrms: '/whatsapp-hrms-integration',
  erp: '/whatsapp-erp-integration',
  zapier: '/whatsapp-zapier-integration',
  hubspot: '/whatsapp-hubspot-integration',
  chennaiApi: '/whatsapp-business-api-chennai',
  chennaiBulk: '/whatsapp-bulk-messaging-chennai',
  chennaiChatbot: '/whatsapp-chatbot-chennai',
  chennaiAutomation: '/whatsapp-automation-chennai',
  annaNagar: '/whatsapp-marketing-anna-nagar',
  tNagar: '/whatsapp-marketing-t-nagar',
  omr: '/whatsapp-marketing-omr',
  velachery: '/whatsapp-marketing-velachery',
  adyar: '/whatsapp-marketing-adyar',
  tambaram: '/whatsapp-marketing-tambaram',
  ambattur: '/whatsapp-marketing-ambattur',
  porur: '/whatsapp-marketing-porur',
  restaurants: '/whatsapp-for-restaurants',
  manufacturing: '/whatsapp-for-manufacturing',
  logistics: '/whatsapp-for-logistics',
  hrRecruitment: '/whatsapp-for-hr-recruitment',
  insurance: '/whatsapp-for-insurance',
  coaching: '/whatsapp-for-coaching-centers',
  shopifyChennai: '/whatsapp-shopify-integration-chennai',
  tallyChennai: '/whatsapp-tally-integration-chennai',
  zohoChennai: '/whatsapp-zoho-integration-chennai',
  woocommerceChennai: '/whatsapp-woocommerce-integration-chennai',
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

export const INTEGRATION_LINKS: InternalLink[] = [
  { label: 'Shopify WhatsApp integration', path: SEO_ROUTES.shopify },
  { label: 'WooCommerce WhatsApp integration', path: SEO_ROUTES.woocommerce },
  { label: 'Zoho WhatsApp integration', path: SEO_ROUTES.zoho },
  { label: 'Tally WhatsApp integration', path: SEO_ROUTES.tally },
  { label: 'HRMS WhatsApp integration', path: SEO_ROUTES.hrms },
  { label: 'ERP WhatsApp integration', path: SEO_ROUTES.erp },
  { label: 'Zapier WhatsApp automation', path: SEO_ROUTES.zapier },
  { label: 'HubSpot WhatsApp integration', path: SEO_ROUTES.hubspot },
];

export const CHENNAI_LINKS: InternalLink[] = [
  { label: 'WhatsApp marketing Chennai', path: SEO_ROUTES.chennai },
  { label: 'WhatsApp Business API Chennai', path: SEO_ROUTES.chennaiApi },
  { label: 'Bulk WhatsApp messaging Chennai', path: SEO_ROUTES.chennaiBulk },
  { label: 'WhatsApp chatbot Chennai', path: SEO_ROUTES.chennaiChatbot },
  { label: 'WhatsApp automation Chennai', path: SEO_ROUTES.chennaiAutomation },
  { label: 'Anna Nagar', path: SEO_ROUTES.annaNagar },
  { label: 'T Nagar', path: SEO_ROUTES.tNagar },
  { label: 'OMR', path: SEO_ROUTES.omr },
  { label: 'Velachery', path: SEO_ROUTES.velachery },
  { label: 'Porur & Ramapuram', path: SEO_ROUTES.porur },
];

export const INDUSTRY_VERTICAL_LINKS: InternalLink[] = [
  { label: 'Restaurants', path: SEO_ROUTES.restaurants },
  { label: 'Manufacturing', path: SEO_ROUTES.manufacturing },
  { label: 'Logistics', path: SEO_ROUTES.logistics },
  { label: 'HR & recruitment', path: SEO_ROUTES.hrRecruitment },
  { label: 'Insurance', path: SEO_ROUTES.insurance },
  { label: 'Coaching centers', path: SEO_ROUTES.coaching },
];

export const CORE_LINKS: InternalLink[] = [
  { label: 'WhatsApp Business API', path: SEO_ROUTES.whatsappApi },
  { label: 'WhatsApp chatbots', path: SEO_ROUTES.chatbots },
  { label: 'All integrations', path: SEO_ROUTES.integrations },
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
  { label: 'Shopify integration', path: SEO_ROUTES.shopify },
  { label: 'Tally integration', path: SEO_ROUTES.tally },
  { label: 'WhatsApp API Chennai', path: SEO_ROUTES.chennaiApi },
  { label: 'Shopify + Chennai', path: SEO_ROUTES.shopifyChennai },
  { label: 'Restaurants', path: SEO_ROUTES.restaurants },
];
