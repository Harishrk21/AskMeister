import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, ExternalLink } from 'lucide-react';
import SeoBreadcrumbs from '../../components/SeoBreadcrumbs';
import { TN_CITY_PAGES } from '../../data/localCities';
import NotFound from '../NotFound';

const SITE = 'https://www.askmeister.com';
const PHONE_DISPLAY = '+91 7299817996';
const PHONE_E164 = '+917299817996';

const LocalCityLanding = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, '') || '/';
  const config = TN_CITY_PAGES.find((c) => c.path === path);

  if (!config) {
    return <NotFound />;
  }

  const canonical = `${SITE}${config.path}`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.mapSearchQuery)}`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ask Meister',
    description: config.description,
    url: canonical,
    telephone: PHONE_E164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4, 3A, Asvini Amarisa, Ramapuram',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600089',
      addressCountry: 'IN'
    },
    areaServed: {
      '@type': 'City',
      name: config.cityName
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Does Ask Meister work with businesses in ${config.cityName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Ask Meister serves businesses across Tamil Nadu, including ${config.cityName}, using the WhatsApp Business Platform for compliant messaging and automation.`
        }
      },
      {
        '@type': 'Question',
        name: 'How do we get started?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contact us for a demo. We help with WhatsApp Business API onboarding, template messaging, and workflow setup based on your industry.'
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta
          name="keywords"
          content={`whatsapp marketing ${config.cityName.toLowerCase()}, whatsapp business api tamil nadu, bulk whatsapp ${config.cityName.toLowerCase()}, whatsapp automation india`}
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="pt-16">
        <SeoBreadcrumbs
          items={[
            { name: 'Tamil Nadu', path: '/whatsapp-marketing-tamil-nadu' },
            { name: config.cityName, path: config.path }
          ]}
        />

        <section className="bg-gradient-to-br from-[#25D366]/10 via-white to-[#128C7E]/5 py-14 md:py-18">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">{config.h1}</h1>
            <p className="text-lg text-gray-600 mb-6">{config.intro}</p>
            <Link
              to="/contact"
              className="inline-block bg-[#25D366] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </section>

        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">Industries we often support here</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {config.industries.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            Examples are illustrative only; your onboarding depends on opt-in lists, template approval, and Meta policies.
          </p>
        </section>

        <section className="py-12 bg-[#F7F7F7]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">Map & contact</h2>
            <p className="text-gray-700 mb-4">
              Our registered office is in Chennai; we support customers statewide. Open the map for {config.cityName} to orient local search users—no claim of a separate branch unless you add one.
            </p>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366] font-semibold hover:underline"
            >
              <MapPin className="w-5 h-5" />
              View {config.cityName} on Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="mt-6 text-gray-700">
              Phone:{' '}
              <a href={`tel:${PHONE_E164}`} className="text-[#25D366] font-medium">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default LocalCityLanding;
