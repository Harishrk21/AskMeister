export type CityConfig = {
  path: string;
  cityName: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  industries: string[];
  mapSearchQuery: string;
};

export const TN_CITY_PAGES: CityConfig[] = [
  {
    path: '/whatsapp-marketing-coimbatore',
    cityName: 'Coimbatore',
    title: 'WhatsApp Marketing Coimbatore | Business API & Bulk Messages | Ask Meister',
    description:
      'Coimbatore businesses: WhatsApp Business API, bulk messaging, and automation. Support for manufacturing, textile, and retail use cases in western Tamil Nadu.',
    h1: 'WhatsApp marketing for Coimbatore businesses',
    intro:
      'Coimbatore and the surrounding region combine manufacturing, textiles, and a growing services sector. Ask Meister helps teams use the WhatsApp Business Platform for broadcasts, customer support, and follow-ups—without fabricating results; we focus on compliant templates and clear opt-in.',
    industries: [
      'Textile and apparel (Tiruppur ecosystem nearby)',
      'Engineering and components',
      'Education and training institutes',
      'Local retail and services'
    ],
    mapSearchQuery: 'Coimbatore Tamil Nadu'
  },
  {
    path: '/whatsapp-marketing-madurai',
    cityName: 'Madurai',
    title: 'WhatsApp Marketing Madurai | API, Chatbots & Campaigns | Ask Meister',
    description:
      'Madurai: WhatsApp marketing, Business API onboarding, and chatbots for retail, healthcare, and education. India-based support from Ask Meister.',
    h1: 'WhatsApp marketing in Madurai',
    intro:
      'Madurai’s economy spans trade, tourism, education, and healthcare. Use Ask Meister to coordinate appointment reminders, order updates, and customer support on WhatsApp, using approved templates and automation that match your use case.',
    industries: ['Retail and wholesale', 'Hospitals and clinics', 'Coaching and schools', 'Hospitality'],
    mapSearchQuery: 'Madurai Tamil Nadu'
  },
  {
    path: '/whatsapp-marketing-trichy',
    cityName: 'Tiruchirappalli (Trichy)',
    title: 'WhatsApp Marketing Trichy | Bulk Messaging & API | Ask Meister',
    description:
      'Tiruchirappalli (Trichy): WhatsApp Business API, bulk messaging, and chatbots for education, industry, and local services in central Tamil Nadu.',
    h1: 'WhatsApp marketing for Tiruchirappalli (Trichy)',
    intro:
      'Trichy is a hub for education, religious tourism, and diversified businesses. Ask Meister supports WhatsApp campaigns and inbox workflows suitable for institutions and SMEs—contact us to scope templates and volume.',
    industries: ['Education', 'Spiritual tourism and hospitality', 'Healthcare', 'Small business services'],
    mapSearchQuery: 'Tiruchirappalli Tamil Nadu'
  },
  {
    path: '/whatsapp-marketing-salem',
    cityName: 'Salem',
    title: 'WhatsApp Marketing Salem | Business Messaging & API | Ask Meister',
    description:
      'Salem: WhatsApp marketing, API setup, and automation for local trade, steel-related services, agri, and retail in the region.',
    h1: 'WhatsApp marketing in Salem district',
    intro:
      'Businesses in Salem and nearby areas use WhatsApp to reach customers who already prefer chat. We help with API access, template strategy, and team inbox—without promising specific rank or revenue outcomes.',
    industries: ['Agriculture and agri trade', 'Steel and metals ecosystem', 'Retail', 'Local services'],
    mapSearchQuery: 'Salem Tamil Nadu'
  },
  {
    path: '/whatsapp-marketing-tiruppur',
    cityName: 'Tiruppur',
    title: 'WhatsApp Marketing Tiruppur | Textile & Exporter Messaging | Ask Meister',
    description:
      'Tiruppur: WhatsApp for textile, garment, and B2B follow-up—order updates, vendor coordination, and customer communication on the Business API.',
    h1: 'WhatsApp marketing for Tiruppur textile and trade',
    intro:
      'Tiruppur’s strength is apparel and textile supply chains. Ask Meister supports message templates, broadcast patterns suitable for B2B follow-up, and support chat—aligned with Meta’s commerce and user-consent policies.',
    industries: ['Knitwear and garment export', 'Suppliers and job work', 'Logistics partners', 'Local retail'],
    mapSearchQuery: 'Tiruppur Tamil Nadu'
  }
];
