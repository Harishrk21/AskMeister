import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

type Props = {
  competitorName: string;
  path: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  faq: Array<{ q: string; a: string }>;
  problemKeywords: string[];
};

const AlternativeLanding = ({
  competitorName,
  path,
  primaryKeyword,
  secondaryKeywords,
  longTailKeywords,
  faq,
  problemKeywords
}: Props) => {
  const pageTitle = `${competitorName} Alternative | ${primaryKeyword} | Ask Meister`;
  const pageDescription = `Looking for a ${competitorName} alternative? Compare features, automation, bulk messaging, and support with Ask Meister ${primaryKeyword}.`;
  const keywords = [
    `${competitorName.toLowerCase()} alternative`,
    primaryKeyword,
    ...secondaryKeywords,
    ...longTailKeywords
  ].join(', ');

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://askmeister.com/${path}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`https://askmeister.com/${path}`} />
      </Helmet>

      <div className="page-wrap">
        <section className="page-hero py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{primaryKeyword}</h1>
            <p className="text-xl text-ink-muted mb-8">
              Compare {competitorName} with Ask Meister for WhatsApp automation, templates, and support—your fit depends on workflows and onboarding (evaluate with a demo).
            </p>
            <Link
              to="/contact"
              className="bg-brand text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-dark transition-colors inline-block"
            >
              Get Migration Help
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Why teams choose Ask Meister over {competitorName}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {secondaryKeywords.map((item) => (
                <div key={item} className="glass-card p-4 text-ink-muted">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface-muted">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-white mb-6">Use cases and long-tail opportunities</h3>
            <ul className="space-y-3 text-ink-muted">
              {longTailKeywords.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-white mb-6">FAQs</h3>
            <div className="space-y-4">
              {faq.map((item) => (
                <div key={item.q} className="glass-card p-5">
                  <h4 className="font-semibold text-white mb-2">{item.q}</h4>
                  <p className="text-ink-muted">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface-muted">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-white mb-6">Common problems we solve</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {problemKeywords.map((item) => (
                <div key={item} className="glass-card p-4 text-ink-muted">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AlternativeLanding;
