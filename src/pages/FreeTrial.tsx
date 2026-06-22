import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SeoBreadcrumbs from '../components/SeoBreadcrumbs';

const FreeTrial = () => {
  const title = 'Get Started with Ask Meister | Demo & Onboarding';
  const description =
    'Start a conversation with Ask Meister: WhatsApp Business API, bulk messaging, and chatbots. We’ll explain setup and templates for your use case—Chennai & Tamil Nadu.';
  const canonical = 'https://www.askmeister.com/free-trial';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="pt-16">
        <SeoBreadcrumbs items={[{ name: 'Get started', path: '/free-trial' }]} />

        <section className="bg-gradient-to-br from-[#25D366]/15 via-white to-[#128C7E]/10 py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">Try Ask Meister</h1>
            <p className="text-lg text-gray-600 mb-8">
              WhatsApp marketing depends on your Meta Business setup, template approvals, and messaging limits—there is no one-size-fits-all “instant” trial. Contact us and we’ll walk through the
              right path for your business.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#25D366] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#128C7E]"
            >
              Contact for demo
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default FreeTrial;
