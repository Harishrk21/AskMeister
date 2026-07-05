import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import InternalLinksHub from '../../components/InternalLinksHub';

const Chennai = () => {
  const { pathname } = useLocation();
  const pathOnly = pathname.replace(/\/$/, '') || '/';
  const canonical = `https://askmeister.com${pathOnly}`;
  const title = 'WhatsApp Marketing Software Chennai | Bulk Messaging & API | Ask Meister';
  const description =
    'Chennai businesses use Ask Meister for WhatsApp bulk messaging, WhatsApp Business API onboarding, chatbots, and automation—Tamil Nadu support team. சென்னையில் WhatsApp மார்க்கெட்டிங் & ஆட்டோமேஷன்.';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Chennai la WhatsApp Business API epdi apply panrathu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Ask Meister helps Chennai businesses with WhatsApp Business API onboarding, template setup, and campaign launch with local support.'
        }
      },
      {
        '@type': 'Question',
        name: 'WhatsApp bulk messaging service Chennai—schools and shops ku suitable ah?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. Ask Meister supports WhatsApp broadcasts, automation, team inbox, and chatbots for education, retail, healthcare, and services across Chennai.'
        }
      },
      {
        '@type': 'Question',
        name: 'Ramapuram / Chennai office visit panna mudiyuma?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Contact our team to schedule a demo call or visit. Address: 4, 3A, Asvini Amarisa, Ramapuram, Chennai 600089.'
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="whatsapp marketing chennai, whatsapp bulk messaging chennai, whatsapp business api chennai, whatsapp automation chennai, whatsapp chatbot chennai, chennai whatsapp marketing company, tamil nadu whatsapp marketing"
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="page-wrap">
        <section className="page-hero py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              WhatsApp marketing software for Chennai businesses
            </h1>
            <p className="text-lg text-ink-muted mb-2">
              Bulk messaging, WhatsApp Business API, chatbots, and automation—with Tamil Nadu–friendly support.
            </p>
            <p className="text-base text-slate-400 mb-8">
              People search: “whatsapp marketing software chennai”, “bulk whatsapp chennai”, “whatsapp api provider chennai”, “chatbot for shop chennai”.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
            >
              Get Chennai demo
            </Link>
          </div>
        </section>

        <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Chennai teams use Ask Meister for these searches
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-ink-muted">
            <li>WhatsApp bulk messaging service Chennai</li>
            <li>WhatsApp Business API onboarding Chennai</li>
            <li>WhatsApp automation for retail & ecommerce Chennai</li>
            <li>WhatsApp chatbot for customer support Chennai</li>
          </ul>
        </section>

        <section className="py-14 bg-surface-muted">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Tamil + English queries we optimize for (Chennai)
            </h2>
            <p className="text-ink-muted mb-4">
              Chennai users often mix languages—for example English keywords plus “Chennai”, or roman Tamil like “chennai la whatsapp bulk message”.
            </p>
            <ul className="space-y-2 text-ink-muted">
              <li>சென்னையில் வாட்ஸ்அப் மார்க்கெட்டிங் சாஃப்ட்வேர்</li>
              <li>chennai whatsapp api provider</li>
              <li>whatsapp marketing software chennai</li>
            </ul>
          </div>
        </section>

        <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-white mb-4">Long-tail: industries in Chennai</h3>
          <ul className="list-disc pl-6 text-ink-muted space-y-2">
            <li>Schools & coaching: admission WhatsApp automation</li>
            <li>Clinics: appointment reminders on WhatsApp</li>
            <li>Shops & ecommerce: abandoned cart & order updates</li>
            <li>Real estate: property inquiry automation</li>
          </ul>
        </section>

        <section className="py-14 bg-brand">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to grow in Chennai?</h3>
            <Link
              to="/contact"
              className="inline-block bg-white text-brand px-8 py-3 rounded-lg font-semibold hover:bg-surface-elevated"
            >
              Talk to our Chennai team
            </Link>
          </div>
        </section>

        <InternalLinksHub currentPath="/whatsapp-marketing-chennai" />
      </div>
    </>
  );
};

export default Chennai;
