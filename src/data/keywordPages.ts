import { SEO_ROUTES } from './seoRoutes';
import { EXTENDED_KEYWORD_PAGES } from './keywordPagesExtended';

export type KeywordPageConfig = {
  path: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
  intro: string;
  bullets: string[];
  relatedPath: string;
  relatedLabel: string;
  faq: Array<{ question: string; answer: string }>;
  /** LocalBusiness / Service schema area (default: India) */
  areaServed?: string;
};

export const KEYWORD_PAGES_BASE: KeywordPageConfig[] = [
  {
    path: '/whatsapp-software-for-colleges',
    title: 'WhatsApp Software for Colleges | Admissions & Student Communication | Ask Meister',
    description:
      'WhatsApp software for colleges: automate admissions inquiries, parent updates, and student workflows with the WhatsApp Business Platform. Chennai-based support across India.',
    keywords:
      'whatsapp software for colleges, whatsapp software for universities, education whatsapp automation, whatsapp automation for educational admissions, school erp with whatsapp integration',
    h1: 'WhatsApp software for colleges',
    intro:
      'Colleges use WhatsApp for admissions follow-up, fee reminders, exam schedules, and parent communication. Ask Meister helps you run compliant template messaging and automation—without promising guaranteed enrollments or delivery shortcuts.',
    bullets: [
      'Admission inquiry capture and counselor routing',
      'Template-based updates for parents and students',
      'Integration-friendly workflows alongside your existing ERP or CRM',
      'Team inbox for hand-off when automation is not enough',
    ],
    relatedPath: SEO_ROUTES.education,
    relatedLabel: 'Explore full education WhatsApp solution',
    faq: [
      {
        question: 'Can colleges use WhatsApp for admissions automation?',
        answer:
          'Yes, when leads have opted in and messages use approved WhatsApp templates. Automation can qualify inquiries and route counselors to high-intent applicants.',
      },
      {
        question: 'Does this replace a college ERP?',
        answer:
          'No. Ask Meister focuses on WhatsApp messaging and automation. Many colleges pair it with an ERP via exports, webhooks, or manual list uploads.',
      },
    ],
  },
  {
    path: '/hospital-whatsapp',
    title: 'Hospital WhatsApp Automation | Medical Scheduling & Patient Updates | Ask Meister',
    description:
      'Hospital WhatsApp automation for appointment scheduling, reminders, and patient care updates. Compliant messaging for clinics and hospitals in India.',
    keywords:
      'hospital whatsapp, whatsapp for medical health scheduling, healthcare whatsapp automation, whatsapp appointment reminders',
    h1: 'Hospital WhatsApp automation',
    intro:
      'Hospitals and clinics use WhatsApp for appointment booking, reminders, lab result notifications, and post-visit follow-ups. Outcomes depend on your policies, template approval, and how patients opt in—not on bulk shortcuts.',
    bullets: [
      'Department-wise appointment scheduling flows',
      'Reminder templates to reduce no-shows',
      'Secure hand-off to staff for clinical questions',
      'Reporting on delivery and response times',
    ],
    relatedPath: SEO_ROUTES.healthcare,
    relatedLabel: 'See full healthcare automation page',
    faq: [
      {
        question: 'Is hospital WhatsApp messaging HIPAA compliant?',
        answer:
          'WhatsApp uses end-to-end encryption. Your compliance posture also depends on local health regulations, what data you send, and your internal policies. We help you design workflows that minimize sensitive data in chat.',
      },
      {
        question: 'Can patients book appointments on WhatsApp?',
        answer:
          'Yes. Chatbots or guided flows can show available slots and confirm bookings using approved utility templates where required.',
      },
    ],
  },
  {
    path: '/whatsapp-kyc-automation-for-banks',
    title: 'WhatsApp KYC Automation for Banks | Secure Onboarding | Ask Meister',
    description:
      'WhatsApp KYC automation for banks and NBFCs: document collection reminders, verification status updates, and secure customer messaging on the WhatsApp Business Platform.',
    keywords:
      'whatsapp kyc automation for banks, whatsapp banking automation, whatsapp for finance, whatsapp finance automation platform, whatsapp for financial firms',
    h1: 'WhatsApp KYC automation for banks',
    intro:
      'Banks use WhatsApp to nudge customers through KYC steps, share verification status, and answer routine onboarding questions. Ask Meister supports template-based utility messaging and agent hand-off—not unverified bulk outreach.',
    bullets: [
      'KYC reminder and status notification templates',
      'Secure links to your verified onboarding portal',
      'Queue routing for branch and digital teams',
      'Audit-friendly conversation history',
    ],
    relatedPath: SEO_ROUTES.financial,
    relatedLabel: 'Explore WhatsApp banking automation',
    faq: [
      {
        question: 'Can we collect KYC documents directly in WhatsApp?',
        answer:
          'Often banks prefer directing users to a secure web portal rather than collecting sensitive documents in chat. WhatsApp works well for reminders, status, and support around that journey.',
      },
      {
        question: 'Is this suitable for NBFCs and fintechs?',
        answer:
          'Yes. Any regulated financial firm that needs compliant customer messaging on WhatsApp can evaluate Ask Meister with a demo.',
      },
    ],
  },
  {
    path: '/education-whatsapp-automation',
    title: 'Education WhatsApp Automation | Universities & Higher Ed | Ask Meister',
    description:
      'Education WhatsApp automation for universities and higher ed: admissions, student support, and parent communication using approved templates and workflows.',
    keywords:
      'education whatsapp automation, whatsapp automation for educational admissions, whatsapp software for higher ed, whatsapp software for universities',
    h1: 'Education WhatsApp automation',
    intro:
      'Universities and higher-ed institutions automate admissions nurturing, event reminders, and student support on WhatsApp. Success depends on opt-in quality, template approval, and how well flows match your academic calendar.',
    bullets: [
      'Admissions nurture sequences with human hand-off',
      'Campus event and deadline reminders',
      'FAQ chatbots for international and domestic students',
      'Analytics on template delivery and replies',
    ],
    relatedPath: SEO_ROUTES.education,
    relatedLabel: 'WhatsApp software for universities',
    faq: [
      {
        question: 'What is education WhatsApp automation?',
        answer:
          'It is the use of approved WhatsApp templates, chatbots, and team inbox workflows to support admissions, academics, and student services—not unsolicited bulk messaging.',
      },
      {
        question: 'Do you support Tamil Nadu universities?',
        answer:
          'Yes. Ask Meister is based in Chennai and supports education clients across Tamil Nadu and India.',
      },
    ],
  },
  // ── Integration landing pages ──
  {
    path: '/whatsapp-shopify-integration',
    title: 'Shopify WhatsApp Integration | Order Alerts & Cart Recovery | Ask Meister',
    description:
      'Connect Shopify to WhatsApp: order confirmations, shipping updates, abandoned cart reminders, and customer support. Chennai-based WhatsApp Business API support across India.',
    keywords:
      'shopify whatsapp integration, whatsapp shopify integration, shopify order notification whatsapp, shopify abandoned cart whatsapp, whatsapp api shopify india',
    h1: 'Shopify WhatsApp integration',
    intro:
      'Shopify stores use WhatsApp for order confirmations, dispatch updates, delivery alerts, and cart recovery. Ask Meister connects your catalog and order events to approved WhatsApp templates and automation—outcomes depend on opt-in, template approval, and your offer.',
    bullets: [
      'Order placed and payment confirmation templates',
      'Shipping and out-for-delivery notifications',
      'Abandoned checkout nudges for opted-in shoppers',
      'Hand-off to agents for returns and support queries',
    ],
    relatedPath: SEO_ROUTES.integrations,
    relatedLabel: 'See all WhatsApp integrations',
    faq: [
      {
        question: 'How does Shopify WhatsApp integration work?',
        answer:
          'Order and customer events from Shopify trigger WhatsApp template messages or chatbot flows via webhooks, Zapier, or custom API connections. We help you map events to compliant templates.',
      },
      {
        question: 'Do you support Shopify stores in Chennai?',
        answer:
          'Yes. Ask Meister is based in Chennai and supports Shopify merchants across Tamil Nadu and India.',
      },
    ],
  },
  {
    path: '/whatsapp-woocommerce-integration',
    title: 'WooCommerce WhatsApp Integration | Order & Cart Automation | Ask Meister',
    description:
      'WooCommerce WhatsApp integration for WordPress stores: order alerts, tracking updates, abandoned cart messages, and post-purchase support on the WhatsApp Business Platform.',
    keywords:
      'woocommerce whatsapp integration, whatsapp woocommerce plugin, woocommerce order notification whatsapp, wordpress whatsapp integration, abandoned cart whatsapp woocommerce',
    h1: 'WooCommerce WhatsApp integration',
    intro:
      'WooCommerce sites send transactional and marketing WhatsApp messages when customers opt in. Use templates for order status, delivery, and win-back flows—without unofficial bulk senders that risk number quality.',
    bullets: [
      'New order and status change notifications',
      'COD confirmation and address verification flows',
      'Abandoned cart sequences for opted-in users',
      'Plugin-friendly setup alongside your WordPress stack',
    ],
    relatedPath: SEO_ROUTES.integrations,
    relatedLabel: 'Explore all integrations',
    faq: [
      {
        question: 'Is there a WooCommerce WhatsApp plugin?',
        answer:
          'You can connect WooCommerce via webhooks, automation tools, or custom integrations. Ask Meister focuses on the WhatsApp API side—template setup, broadcasts, and inbox—not a single plugin for every theme.',
      },
      {
        question: 'Can I send bulk promotions from WooCommerce lists?',
        answer:
          'Only to contacts with valid opt-in and approved marketing templates. We help you structure lists and categories correctly.',
      },
    ],
  },
  {
    path: '/whatsapp-zoho-integration',
    title: 'Zoho WhatsApp Integration | CRM, Books & Desk Alerts | Ask Meister',
    description:
      'Zoho WhatsApp integration for CRM, Books, Desk, and Recruit: lead alerts, invoice reminders, ticket updates, and customer messaging via WhatsApp Business API.',
    keywords:
      'zoho whatsapp integration, zoho crm whatsapp, zoho books whatsapp notification, zoho desk whatsapp, zoho recruit whatsapp',
    h1: 'Zoho WhatsApp integration',
    intro:
      'Teams on Zoho CRM, Books, or Desk use WhatsApp for lead follow-up, invoice nudges, ticket updates, and interview reminders. Connect Zoho workflows to WhatsApp through Zapier, webhooks, or API middleware.',
    bullets: [
      'CRM lead assignment and follow-up reminders',
      'Invoice and payment due notifications from Zoho Books',
      'Support ticket status updates for customers',
      'Recruitment and interview scheduling messages',
    ],
    relatedPath: SEO_ROUTES.integrations,
    relatedLabel: 'View integration hub',
    faq: [
      {
        question: 'Does Zoho have native WhatsApp integration?',
        answer:
          'Zoho products vary by region and plan. Many businesses use Zapier, custom functions, or a WhatsApp BSP like Ask Meister alongside Zoho for reliable template messaging.',
      },
      {
        question: 'Can Zoho CRM sync WhatsApp conversations?',
        answer:
          'With the right middleware, inbound and outbound WhatsApp threads can be logged against Zoho contacts. Scope this in a demo based on your Zoho edition.',
      },
    ],
  },
  {
    path: '/whatsapp-tally-integration',
    title: 'Tally WhatsApp Integration | Invoice & Payment Reminders | Ask Meister',
    description:
      'Tally WhatsApp integration for Tally Prime and ERP 9: invoice alerts, payment reminders, ledger updates, and distributor communication in India.',
    keywords:
      'tally whatsapp integration, tally prime whatsapp, tally erp whatsapp notification, tally invoice whatsapp, whatsapp tally payment reminder',
    h1: 'Tally WhatsApp integration',
    intro:
      'Distributors, retailers, and finance teams using Tally send invoice copies, payment reminders, and statement alerts on WhatsApp. Integration typically uses exports, scheduled sync, or custom connectors—not a replacement for Tally itself.',
    bullets: [
      'Invoice and credit note notification templates',
      'Payment due and overdue reminder workflows',
      'Party-wise statement dispatch with opt-in lists',
      'Chennai and Tamil Nadu businesses supported on-site',
    ],
    relatedPath: SEO_ROUTES.integrations,
    relatedLabel: 'All WhatsApp integrations',
    faq: [
      {
        question: 'How do I connect Tally to WhatsApp?',
        answer:
          'Common patterns: export vouchers to CSV/Excel and trigger templates, use a middleware service, or build a custom connector to your Tally data. We help design the WhatsApp layer.',
      },
      {
        question: 'Does this work with Tally Prime?',
        answer:
          'Yes. Most integrations target Tally Prime or ERP 9 data exports and APIs available in your deployment.',
      },
    ],
  },
  {
    path: '/whatsapp-hrms-integration',
    title: 'HRMS WhatsApp Integration | Payroll & Employee Alerts | Ask Meister',
    description:
      'HRMS WhatsApp integration: payroll alerts, leave approvals, attendance reminders, onboarding, and internal HR notifications for Indian companies.',
    keywords:
      'hrms whatsapp integration, whatsapp hrms notification, payroll reminder whatsapp, employee onboarding whatsapp, hr whatsapp automation',
    h1: 'HRMS WhatsApp integration',
    intro:
      'HR teams connect HRMS, payroll, and attendance systems to WhatsApp for payslip alerts, leave status, interview schedules, and policy updates. Employee numbers must be opted in for utility messaging where required.',
    bullets: [
      'Payslip and reimbursement notification templates',
      'Leave approval and attendance exception alerts',
      'Onboarding document checklist reminders',
      'Works with popular HRMS via API, Zapier, or scheduled exports',
    ],
    relatedPath: SEO_ROUTES.integrations,
    relatedLabel: 'Explore integrations hub',
    faq: [
      {
        question: 'Which HRMS tools can connect to WhatsApp?',
        answer:
          'Most HRMS platforms that expose webhooks, REST APIs, or CSV exports can trigger WhatsApp templates. Share your HRMS name in a demo and we will outline a realistic integration path.',
      },
      {
        question: 'Is WhatsApp suitable for internal HR messages?',
        answer:
          'Yes for opted-in employees and approved utility templates. Sensitive data should stay minimal; links to secure portals are often preferred.',
      },
    ],
  },
  {
    path: '/whatsapp-erp-integration',
    title: 'ERP WhatsApp Integration | Orders, Inventory & Dispatch Alerts | Ask Meister',
    description:
      'ERP WhatsApp integration for manufacturing, distribution, and retail: order status, inventory alerts, dispatch updates, and vendor communication.',
    keywords:
      'erp whatsapp integration, sap whatsapp integration, odoo whatsapp, erp notification whatsapp, manufacturing whatsapp alerts, dispatch update whatsapp',
    h1: 'ERP WhatsApp integration',
    intro:
      'ERP systems drive operational truth—orders, stock, shipments. WhatsApp carries customer-facing and partner-facing alerts from that data. Ask Meister does not replace your ERP; we add compliant messaging on top via APIs and automation.',
    bullets: [
      'Sales order confirmation and dispatch notifications',
      'Low-stock and production milestone alerts to managers',
      'Vendor PO acknowledgment and delivery scheduling',
      'Custom field mapping for your ERP export or API',
    ],
    relatedPath: SEO_ROUTES.integrations,
    relatedLabel: 'See integration options',
    faq: [
      {
        question: 'Do you integrate with SAP, Odoo, or Microsoft Dynamics?',
        answer:
          'We integrate at the WhatsApp messaging layer. Your ERP connects through middleware, iPaaS, or custom APIs. Specific connectors depend on your ERP edition and IT policies.',
      },
      {
        question: 'Can ERP events trigger WhatsApp automatically?',
        answer:
          'Yes—when your ERP emits webhooks or scheduled data that an automation layer can read, we map those events to approved WhatsApp templates.',
      },
    ],
  },
  {
    path: '/whatsapp-zapier-integration',
    title: 'Zapier WhatsApp Integration | Connect 5000+ Apps | Ask Meister',
    description:
      'Zapier WhatsApp integration: trigger WhatsApp messages from forms, CRMs, spreadsheets, and e-commerce apps using Zaps and the WhatsApp Business API.',
    keywords:
      'zapier whatsapp integration, zapier whatsapp automation, whatsapp zapier trigger, connect zapier to whatsapp business api',
    h1: 'Zapier WhatsApp integration',
    intro:
      'Zapier links thousands of apps to WhatsApp workflows—new leads, form fills, spreadsheet rows, and store orders can start template sends or inbox tickets. Design Zaps with compliance in mind: opt-in and template categories matter.',
    bullets: [
      'Trigger WhatsApp templates from Zapier actions',
      'Multi-step Zaps with filters and delays',
      'Connect Shopify, Google Sheets, HubSpot, and more',
      'Fallback to human agents when automation stops',
    ],
    relatedPath: SEO_ROUTES.integrations,
    relatedLabel: 'Browse all integrations',
    faq: [
      {
        question: 'Can Zapier send WhatsApp messages directly?',
        answer:
          'Zapier connects to WhatsApp through BSP APIs or approved middleware. Ask Meister provides the WhatsApp Business account, templates, and send endpoints your Zaps can call.',
      },
      {
        question: 'Is coding required?',
        answer:
          'Many flows are no-code in Zapier. Complex ERP or Tally setups may need a developer for the first connection.',
      },
    ],
  },
  {
    path: '/whatsapp-hubspot-integration',
    title: 'HubSpot WhatsApp Integration | CRM & Marketing Alerts | Ask Meister',
    description:
      'HubSpot WhatsApp integration for sales and marketing: lead alerts, deal stage updates, meeting reminders, and nurture sequences on WhatsApp.',
    keywords:
      'hubspot whatsapp integration, hubspot crm whatsapp, whatsapp hubspot automation, hubspot marketing whatsapp',
    h1: 'HubSpot WhatsApp integration',
    intro:
      'Sales and marketing teams on HubSpot use WhatsApp for speed-to-lead, deal notifications, and customer nurture. Sync contact context from HubSpot into WhatsApp conversations via Zapier, native workflows, or API.',
    bullets: [
      'New lead and form submission instant alerts',
      'Deal stage change notifications to owners',
      'Meeting and demo reminder templates',
      'Conversation logging back to HubSpot timelines',
    ],
    relatedPath: SEO_ROUTES.integrations,
    relatedLabel: 'All integrations',
    faq: [
      {
        question: 'Does HubSpot support WhatsApp natively?',
        answer:
          'HubSpot capabilities evolve by region. Many teams pair HubSpot with a WhatsApp BSP and automation tools for template-based outreach and inbox.',
      },
      {
        question: 'Can we run WhatsApp campaigns from HubSpot lists?',
        answer:
          'Yes when lists reflect valid opt-in and you use approved marketing templates. We help align HubSpot segments with WhatsApp policy.',
      },
    ],
  },
  // ── Chennai service landing pages ──
  {
    path: '/whatsapp-business-api-chennai',
    title: 'WhatsApp Business API Chennai | Official BSP Support | Ask Meister',
    description:
      'WhatsApp Business API provider in Chennai: onboarding, template approval, number setup, and campaign launch. Local team in Ramapuram, Tamil Nadu.',
    keywords:
      'whatsapp business api chennai, whatsapp api provider chennai, whatsapp api company chennai, whatsapp business platform chennai, meta whatsapp api chennai',
    h1: 'WhatsApp Business API in Chennai',
    intro:
      'Chennai businesses need an official WhatsApp Business API path—not grey bulk tools. Ask Meister helps with Meta onboarding, template workflows, team inbox, and automation, with support anchored in Ramapuram.',
    bullets: [
      'API onboarding and display name guidance',
      'Template creation and approval support',
      'Team inbox and chatbot setup',
      'Compliance-first messaging for Tamil Nadu markets',
    ],
    relatedPath: SEO_ROUTES.chennai,
    relatedLabel: 'Chennai WhatsApp marketing overview',
    areaServed: 'Chennai, Tamil Nadu, India',
    faq: [
      {
        question: 'Who provides WhatsApp API in Chennai?',
        answer:
          'Ask Meister supports Chennai businesses as a WhatsApp Business Platform partner. Contact us for onboarding scope and timelines.',
      },
      {
        question: 'How long does API setup take?',
        answer:
          'Timelines depend on Meta verification, your business category, and template readiness—typically days to a few weeks, not instant.',
      },
    ],
  },
  {
    path: '/whatsapp-bulk-messaging-chennai',
    title: 'Bulk WhatsApp Messaging Chennai | Official Broadcasts | Ask Meister',
    description:
      'Bulk WhatsApp messaging service in Chennai using approved templates and opt-in lists. Schools, retail, healthcare, and services across Tamil Nadu.',
    keywords:
      'bulk whatsapp messaging chennai, bulk whatsapp chennai, whatsapp broadcast chennai, whatsapp marketing chennai bulk, mass whatsapp chennai official',
    h1: 'Bulk WhatsApp messaging in Chennai',
    intro:
      'Chennai teams use bulk WhatsApp for admissions, promotions, reminders, and updates—through official templates and opted-in contacts. We do not offer unverified bulk blasts that risk number blocks.',
    bullets: [
      'Template-based broadcasts with audience segmentation',
      'Contact import from CRM, ERP, or spreadsheets',
      'Delivery and read analytics',
      'Retail, education, and clinic use cases across the city',
    ],
    relatedPath: SEO_ROUTES.bulkMessaging,
    relatedLabel: 'WhatsApp bulk messaging features',
    areaServed: 'Chennai, Tamil Nadu, India',
    faq: [
      {
        question: 'Is bulk WhatsApp legal in Chennai?',
        answer:
          'Yes when you use the WhatsApp Business Platform, approved templates, and proper opt-in. Unofficial bulk senders violate policy and hurt deliverability.',
      },
      {
        question: 'What industries in Chennai use bulk WhatsApp?',
        answer:
          'Common users include coaching centers, retail chains, clinics, real estate, and event organizers—always with opt-in and template compliance.',
      },
    ],
  },
  {
    path: '/whatsapp-chatbot-chennai',
    title: 'WhatsApp Chatbot Chennai | AI & Flow Bots for Business | Ask Meister',
    description:
      'WhatsApp chatbot builder and setup in Chennai: FAQs, lead capture, appointment booking, and human hand-off for local businesses.',
    keywords:
      'whatsapp chatbot chennai, chatbot for business chennai, whatsapp bot chennai, ai chatbot whatsapp chennai, whatsapp automation chatbot chennai',
    h1: 'WhatsApp chatbot in Chennai',
    intro:
      'Chennai shops, clinics, and service brands deploy WhatsApp chatbots for FAQs, lead qualification, and booking—then hand off to staff when needed. Bot quality depends on your scripts and integration with CRM or calendars.',
    bullets: [
      'No-code and guided flow builders',
      'Tamil and English FAQ patterns where appropriate',
      'Lead capture connected to your CRM or spreadsheet',
      'Live agent takeover from the same number',
    ],
    relatedPath: SEO_ROUTES.chatbots,
    relatedLabel: 'WhatsApp chatbot platform',
    areaServed: 'Chennai, Tamil Nadu, India',
    faq: [
      {
        question: 'How much does a WhatsApp chatbot cost in Chennai?',
        answer:
          'Pricing depends on message volume, integrations, and support level. Contact Ask Meister for a demo quote—nothing on this page is a binding offer.',
      },
      {
        question: 'Can chatbots book appointments?',
        answer:
          'Yes. Bots can collect preferences and confirm slots using utility templates, often integrated with Calendly or your practice software.',
      },
    ],
  },
  {
    path: '/whatsapp-automation-chennai',
    title: 'WhatsApp Automation Chennai | Workflows & Drip Campaigns | Ask Meister',
    description:
      'WhatsApp marketing automation in Chennai: drip sequences, triggers from Shopify, Zoho, Tally, HRMS, and CRM systems. Local implementation support.',
    keywords:
      'whatsapp automation chennai, whatsapp marketing automation chennai, whatsapp workflow chennai, whatsapp drip campaign chennai, whatsapp integration chennai',
    h1: 'WhatsApp automation in Chennai',
    intro:
      'Automation connects your tools—Shopify, WooCommerce, Zoho, Tally, HRMS, ERP—to WhatsApp triggers and nurture sequences. Chennai businesses get local support for workflow design and template strategy.',
    bullets: [
      'Event-based triggers from ecommerce and CRM',
      'Multi-step nurture with human escalation',
      'Integration with Tally, Zoho, and HRMS via Zapier or API',
      'Reporting on funnel steps and reply rates',
    ],
    relatedPath: SEO_ROUTES.automation,
    relatedLabel: 'WhatsApp marketing automation features',
    areaServed: 'Chennai, Tamil Nadu, India',
    faq: [
      {
        question: 'What can WhatsApp automation do for Chennai SMEs?',
        answer:
          'Typical flows: order updates, payment reminders, lead follow-up, appointment nudges, and post-sale support—always within Meta template rules.',
      },
      {
        question: 'Do you integrate with Tally and Zoho in Chennai?',
        answer:
          'Yes. See our dedicated integration pages for Tally, Zoho, Shopify, and ERP connectivity patterns.',
      },
    ],
  },
];

export const KEYWORD_PAGES: KeywordPageConfig[] = [
  ...KEYWORD_PAGES_BASE,
  ...EXTENDED_KEYWORD_PAGES,
];

export const KEYWORD_PAGE_PATHS = KEYWORD_PAGES.map((p) => p.path);

export const getKeywordPageByPath = (pathname: string) =>
  KEYWORD_PAGES.find((p) => p.path === pathname.replace(/\/$/, '') || pathname === p.path);
