import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SeoBreadcrumbs from '../../components/SeoBreadcrumbs';

const RealEstateChennai = () => {
  const canonical = 'https://www.askmeister.com/whatsapp-marketing-for-real-estate-chennai';
  const title = 'WhatsApp Marketing for Real Estate in Chennai | Ask Meister';
  const description =
    'Lead follow-up, site visit reminders, and brochure sharing for Chennai real estate—WhatsApp Business API and chatbots. No guaranteed leads; compliance and opt-in required.';

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
        <SeoBreadcrumbs
          items={[
            { name: 'Chennai', path: '/whatsapp-marketing-chennai' },
            { name: 'Real estate', path: '/whatsapp-marketing-for-real-estate-chennai' }
          ]}
        />

        <section className="max-w-4xl mx-auto px-4 py-14">
          <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4">WhatsApp for Chennai real estate teams</h1>
          <p className="text-gray-700 mb-6">
            Brokers and developers use WhatsApp to respond faster than email and to send listings or slot confirmations to leads who have opted in. Ask Meister supports shared inbox, templates, and
            automation layers—you remain responsible for RERA and advertising rules that apply to your projects.
          </p>
          <p className="text-gray-700 mb-6">
            For a broader industry overview, see our{' '}
            <Link to="/solutions/real-estate" className="text-[#25D366] hover:underline">
              real estate solutions
            </Link>{' '}
            page.
          </p>
          <Link to="/contact" className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#128C7E]">
            Contact sales
          </Link>
        </section>
      </div>
    </>
  );
};

export default RealEstateChennai;
