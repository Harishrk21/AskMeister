import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import InternalLinksHub from '../../components/InternalLinksHub';

const TamilNadu = () => {
  const { pathname } = useLocation();
  const pathOnly = pathname.replace(/\/$/, '') || '/';
  const canonical = `https://askmeister.com${pathOnly}`;
  const title = 'WhatsApp Marketing Tamil Nadu | API, Bulk SMS Alternative & Automation | Ask Meister';
  const description =
    'Tamil Nadu businesses: WhatsApp bulk messaging, WhatsApp Business API, chatbots, and marketing automation with India-focused onboarding. தமிழ்நாடு முழுவதும் WhatsApp மார்க்கெட்டிங் & ஆட்டோமேஷன்.';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Tamil Nadu la whatsapp marketing software epdi choose panrathu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Look for official WhatsApp Business Platform support, clear onboarding, automation, and analytics. Ask Meister focuses on Tamil Nadu businesses setting up compliant campaigns.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does WhatsApp API onboarding work in Tamil Nadu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Ask Meister helps with onboarding, templates, and campaign setup for Tamil Nadu businesses. Contact us for implementation guidance.'
        }
      },
      {
        '@type': 'Question',
        name: 'Coimbatore, Madurai, Trichy customers ku same setup ah?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. You can run statewide campaigns with location segmentation, templates, and automation tailored to each city.'
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
          content="whatsapp marketing tamil nadu, whatsapp business api tamil nadu, whatsapp bulk messaging tamil nadu, whatsapp automation tamil nadu, whatsapp chatbot tamil nadu, india whatsapp marketing platform, chennai coimbatore whatsapp marketing"
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
              WhatsApp marketing for Tamil Nadu (statewide)
            </h1>
            <p className="text-lg text-ink-muted mb-8">
              Built for how TN teams search: “whatsapp marketing tamil nadu”, “whatsapp api india”, “bulk whatsapp sender”, “whatsapp automation for business”.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
              >
                Book Tamil Nadu consultation
              </Link>
              <Link
                to="/locations/chennai"
                className="inline-block border-2 border-brand text-brand px-8 py-3 rounded-lg font-semibold hover:bg-brand hover:text-white transition-colors"
              >
                Chennai local page
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Secondary searches we align with (Tamil Nadu)
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-ink-muted">
            <li>WhatsApp Business API provider India / Tamil Nadu</li>
            <li>WhatsApp bulk messaging for shops & schools</li>
            <li>WhatsApp CRM + team inbox for support</li>
            <li>WhatsApp automation for lead generation</li>
          </ul>
        </section>

        <section className="py-14 bg-surface-muted">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-white mb-4">Natural Tamil Nadu search patterns</h3>
            <p className="text-ink-muted mb-4">
              Users often combine city names (Chennai, Coimbatore, Madurai) with English product words—your landing pages should mirror that intent without stuffing.
            </p>
            <ul className="space-y-2 text-ink-muted">
              <li>tamil nadu whatsapp marketing company</li>
              <li>whatsapp bulk message service near me</li>
              <li>வாட்ஸ்அப் பல்க் மெசேஜ் சேவை தமிழ்நாடு</li>
            </ul>
          </div>
        </section>

        <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-white mb-4">Helpful links</h3>
          <ul className="space-y-2 text-brand font-medium">
            <li>
              <Link to="/whatsapp-api" className="hover:underline">
                WhatsApp Business API
              </Link>
            </li>
            <li>
              <Link to="/whatsapp-bulk-messaging" className="hover:underline">
                Bulk messaging
              </Link>
            </li>
            <li>
              <Link to="/chatbots" className="hover:underline">
                Chatbots
              </Link>
            </li>
          </ul>
        </section>

        <InternalLinksHub currentPath="/whatsapp-marketing-tamil-nadu" />
      </div>
    </>
  );
};

export default TamilNadu;
