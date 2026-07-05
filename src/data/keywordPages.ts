import { SEO_ROUTES } from './seoRoutes';

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
};

export const KEYWORD_PAGES: KeywordPageConfig[] = [
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
];

export const getKeywordPageByPath = (pathname: string) =>
  KEYWORD_PAGES.find((p) => p.path === pathname.replace(/\/$/, '') || pathname === p.path);
