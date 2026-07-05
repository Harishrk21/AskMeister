import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SeoBreadcrumbs from '../components/SeoBreadcrumbs';
import InternalLinksHub from '../components/InternalLinksHub';

const CaseStudies = () => {
  const title = 'Case Studies & Customer Stories | Ask Meister';
  const description =
    'How teams use Ask Meister for WhatsApp marketing and automation. We publish verified stories when customers agree to share; contact us to participate.';
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
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <div className="pt-16">
        <SeoBreadcrumbs items={[{ name: 'Case studies', path: '/case-studies' }]} />

        <section className="bg-gradient-to-br from-[#25D366]/10 via-white to-[#128C7E]/5 py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">Case studies</h1>
            <p className="text-lg text-gray-600">
              We feature detailed write-ups only when a customer approves them. Until then, explore industry guides and contact us for a demo tailored to your sector.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 py-12 space-y-6 text-gray-700">
          <h2 className="text-2xl font-bold text-[#1C1C1C]">What we can share today</h2>
          <p>
            Ask Meister is used for WhatsApp broadcasts, template messaging, chatbots, and team inbox workflows across Tamil Nadu and the rest of India. Public case studies will appear here
            with real metrics only after written permission.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link to="/whatsapp-automation-for-ecommerce" className="text-[#25D366] hover:underline">
                E-commerce and order updates
              </Link>
            </li>
            <li>
              <Link to="/whatsapp-automation-for-healthcare" className="text-[#25D366] hover:underline">
                Healthcare appointment reminders
              </Link>
            </li>
            <li>
              <Link to="/whatsapp-software-for-universities" className="text-[#25D366] hover:underline">
                Education admissions and parent communication
              </Link>
            </li>
          </ul>
          <Link
            to="/contact"
            className="inline-block mt-4 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#128C7E]"
          >
            Request a conversation
          </Link>
        </section>

        <InternalLinksHub currentPath="/case-studies" />
      </div>
    </>
  );
};

export default CaseStudies;
