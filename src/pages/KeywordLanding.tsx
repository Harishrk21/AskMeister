import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SeoBreadcrumbs from '../components/SeoBreadcrumbs';
import InternalLinksHub from '../components/InternalLinksHub';
import NotFound from './NotFound';
import { getKeywordPageByPath } from '../data/keywordPages';
import { toCanonical } from '../data/seoRoutes';
import { OG_IMAGE, OG_SITE_NAME } from '../utils/seoDefaults';
import { faqPageSchema, servicePageSchema } from '../utils/seoSchema';

const KeywordLanding = () => {
  const { pathname } = useLocation();
  const page = getKeywordPageByPath(pathname);

  if (!page) return <NotFound />;

  const canonical = toCanonical(page.path);
  const faqSchema = faqPageSchema(page.faq);
  const serviceSchema = servicePageSchema({
    name: page.h1,
    description: page.description,
    url: canonical,
    areaServed: page.areaServed ?? 'India',
  });

  return (
    <>
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta name="keywords" content={page.keywords} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:site_name" content={OG_SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.title} />
        <meta name="twitter:description" content={page.description} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <div className="page-wrap">
        <SeoBreadcrumbs items={[{ name: page.h1, path: page.path }]} />

        <section className="page-hero py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{page.h1}</h1>
            <p className="text-lg text-ink-muted mb-8 leading-relaxed">{page.intro}</p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
            >
              Request a demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>

        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">What teams typically automate</h2>
          <ul className="space-y-3">
            {page.bullets.map((line) => (
              <li key={line} className="flex items-start gap-3 text-ink-muted">
                <CheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link to={page.relatedPath} className="text-brand font-semibold hover:underline">
              {page.relatedLabel} →
            </Link>
          </p>
        </section>

        <section className="py-12 bg-surface-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              {page.faq.map((item) => (
                <div key={item.question} className="glass-card p-6 border border-white/10">
                  <h3 className="font-semibold text-white mb-2">{item.question}</h3>
                  <p className="text-ink-muted leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <InternalLinksHub currentPath={page.path} />
      </div>
    </>
  );
};

export default KeywordLanding;
