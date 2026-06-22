import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SeoBreadcrumbs from '../components/SeoBreadcrumbs';

const WhatsAppMarketingForEcommerce = () => {
  const canonical = 'https://www.askmeister.com/whatsapp-marketing-for-ecommerce';
  const title = 'WhatsApp Marketing for E-commerce | Tamil Nadu | Ask Meister';
  const description =
    'Order updates, cart recovery flows, and support on WhatsApp for online stores—via Business API, templates, and chatbots. See our e-commerce solution hub for details.';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
      </Helmet>

      <div className="pt-16">
        <SeoBreadcrumbs items={[{ name: 'E-commerce', path: '/whatsapp-marketing-for-ecommerce' }]} />

        <section className="max-w-4xl mx-auto px-4 py-14">
          <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4">WhatsApp marketing for e-commerce</h1>
          <p className="text-gray-700 mb-6">
            Online sellers use WhatsApp for transactional updates and customer questions when shoppers expect chat-speed replies. Delivery outcomes depend on your catalog and operations—we
            provide the messaging layer on top of the official WhatsApp Business Platform.
          </p>
          <Link
            to="/solutions/ecommerce"
            className="inline-flex items-center gap-2 text-[#25D366] font-semibold hover:underline text-lg"
          >
            Open e-commerce industry solution →
          </Link>
        </section>
      </div>
    </>
  );
};

export default WhatsAppMarketingForEcommerce;
