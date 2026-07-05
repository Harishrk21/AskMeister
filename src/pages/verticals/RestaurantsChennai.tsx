import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SeoBreadcrumbs from '../../components/SeoBreadcrumbs';

const RestaurantsChennai = () => {
  const canonical = 'https://askmeister.com/whatsapp-marketing-for-restaurants-chennai';
  const title = 'WhatsApp Marketing for Restaurants in Chennai | Ask Meister';
  const description =
    'Use WhatsApp for reservations, menu updates, and delivery alerts in Chennai—Business API, templates, and chatbots. Compliant opt-in and Meta policies apply.';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can restaurants send promotions on WhatsApp?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes, using WhatsApp Business messaging with approved templates and user opt-in. Rules depend on message category (utility, marketing, authentication). Ask Meister helps you structure compliant flows.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you guarantee order volume?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Results vary by menu, location, and marketing; we provide tooling and guidance, not guaranteed sales.'
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="pt-16">
        <SeoBreadcrumbs
          items={[
            { name: 'Chennai', path: '/whatsapp-marketing-chennai' },
            { name: 'Restaurants', path: '/whatsapp-marketing-for-restaurants-chennai' }
          ]}
        />

        <section className="max-w-4xl mx-auto px-4 py-14">
          <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4">WhatsApp for Chennai restaurants & cloud kitchens</h1>
          <p className="text-gray-700 mb-6">
            Many diners already use WhatsApp daily. Restaurants use the WhatsApp Business Platform for reservation reminders, OTP-style confirmations where applicable, and broadcast updates to opted-in
            customers—always subject to Meta’s commerce and messaging policies.
          </p>
          <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-2">Typical use cases</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
            <li>Hours, holiday closures, and festival menus</li>
            <li>Links to order online (your website or partner)</li>
            <li>Repeat-customer follow-up for opted-in lists</li>
          </ul>
          <Link to="/contact" className="text-[#25D366] font-semibold hover:underline">
            Discuss setup →
          </Link>
        </section>
      </div>
    </>
  );
};

export default RestaurantsChennai;
