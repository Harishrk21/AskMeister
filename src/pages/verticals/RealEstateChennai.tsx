import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SeoBreadcrumbs from '../../components/SeoBreadcrumbs';

const RealEstateChennai = () => {
  const canonical = 'https://askmeister.com/whatsapp-marketing-for-real-estate-chennai';
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

      <div className="page-wrap">
        <SeoBreadcrumbs
          items={[
            { name: 'Chennai', path: '/whatsapp-marketing-chennai' },
            { name: 'Real estate', path: '/whatsapp-marketing-for-real-estate-chennai' }
          ]}
        />

        <section className="max-w-4xl mx-auto px-4 py-14">
          <h1 className="text-4xl font-bold text-white mb-4">WhatsApp for Chennai real estate teams</h1>
          <p className="text-ink-muted mb-6">
            Brokers and developers use WhatsApp to respond faster than email and to send listings or slot confirmations to leads who have opted in. Ask Meister supports shared inbox, templates, and
            automation layers—you remain responsible for RERA and advertising rules that apply to your projects.
          </p>
          <p className="text-ink-muted mb-6">
            For a broader industry overview, see our{' '}
            <Link to="/whatsapp-automation-for-real-estate" className="text-brand hover:underline">
              real estate solutions
            </Link>{' '}
            page.
          </p>
          <Link to="/contact" className="inline-block bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark">
            Contact sales
          </Link>
        </section>
      </div>
    </>
  );
};

export default RealEstateChennai;
