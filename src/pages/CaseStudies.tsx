import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SeoBreadcrumbs from '../components/SeoBreadcrumbs';
import InternalLinksHub from '../components/InternalLinksHub';
import { OG_IMAGE } from '../utils/seoDefaults';

const studies = [
  {
    title: 'E-commerce order updates (workflow pattern)',
    industry: 'Retail / Shopify',
    summary:
      'A Chennai online retailer connected order events to WhatsApp utility templates: payment received, packed, shipped, and delivered. Support tickets about “where is my order?” dropped because status moved to a channel customers already check.',
    bullets: [
      'Triggers: Shopify order webhooks → Zapier → WhatsApp template send',
      'Templates: utility category for transactional updates',
      'Hand-off: “Talk to agent” button on delivery exceptions',
    ],
    link: '/whatsapp-shopify-integration-chennai',
    linkLabel: 'Shopify integration in Chennai',
  },
  {
    title: 'Clinic appointment reminders (workflow pattern)',
    industry: 'Healthcare',
    summary:
      'A multi-specialty clinic replaced manual reminder calls with WhatsApp utility reminders 24 hours and 2 hours before appointments. No-shows improved when patients could confirm or reschedule in-thread—results vary by specialty and patient demographics.',
    bullets: [
      'Opt-in collected at front desk and online booking',
      'Tamil and English template variants',
      'Staff inbox for reschedule requests',
    ],
    link: '/hospital-whatsapp',
    linkLabel: 'Hospital WhatsApp automation',
  },
  {
    title: 'Distributor invoice nudges from Tally (workflow pattern)',
    industry: 'Distribution / Tally',
    summary:
      'A wholesale distributor exported party-wise outstanding balances from Tally Prime weekly and sent payment reminder templates to opted-in retailer contacts. Collections conversations started faster than email-only nudges.',
    bullets: [
      'Data: Tally export → Google Sheet → approved broadcast list',
      'Templates: payment due utility messages with secure payment link',
      'Compliance: retailers opted in during onboarding',
    ],
    link: '/whatsapp-tally-integration-chennai',
    linkLabel: 'Tally integration Chennai',
  },
];

const CaseStudies = () => {
  const title = 'Case Studies & Workflow Patterns | Ask Meister';
  const description =
    'Realistic WhatsApp workflow patterns for ecommerce, healthcare, and Tally-based distribution. Verified customer stories published when clients approve.';
  const canonical = 'https://askmeister.com/case-studies';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="page-wrap">
        <SeoBreadcrumbs items={[{ name: 'Case studies', path: '/case-studies' }]} />

        <section className="page-hero py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case studies &amp; workflow patterns</h1>
            <p className="text-lg text-ink-muted">
              Below are realistic implementation patterns—not guaranteed metrics. Named customer write-ups are added only with written approval.
            </p>
          </div>
        </section>

        <section className="container-wide py-12 space-y-8">
          {studies.map((study) => (
            <article key={study.title} className="glass-card p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-2">{study.industry}</p>
              <h2 className="text-2xl font-bold text-white mb-3">{study.title}</h2>
              <p className="text-ink-muted leading-relaxed mb-4">{study.summary}</p>
              <ul className="space-y-2 mb-6">
                {study.bullets.map((b) => (
                  <li key={b} className="text-sm text-ink-muted flex gap-2">
                    <span className="text-brand">•</span> {b}
                  </li>
                ))}
              </ul>
              <Link to={study.link} className="text-brand font-semibold hover:text-brand-light transition-colors">
                {study.linkLabel} →
              </Link>
            </article>
          ))}

          <div className="glass-card p-6 text-center">
            <p className="text-ink-muted mb-4">
              Want a public case study for your brand? Contact us—we publish only verified stories with your sign-off.
            </p>
            <Link to="/contact" className="btn-primary px-6 py-3 inline-flex">
              Request a conversation
            </Link>
          </div>
        </section>

        <InternalLinksHub currentPath="/case-studies" />
      </div>
    </>
  );
};

export default CaseStudies;
