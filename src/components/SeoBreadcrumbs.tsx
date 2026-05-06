import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Home } from 'lucide-react';

const SITE = 'https://www.askmeister.com';

export type BreadcrumbItem = { name: string; path?: string };

type Props = {
  items: BreadcrumbItem[];
};

/**
 * Visual + BreadcrumbList JSON-LD for inner pages (plan §6.4).
 */
const SeoBreadcrumbs = ({ items }: Props) => {
  if (!items.length) return null;

  const toUrl = (p?: string) => {
    if (!p || p === '/') return `${SITE}/`;
    return `${SITE}${p.startsWith('/') ? p : `/${p}`}`;
  };

  const graphItems: BreadcrumbItem[] = [{ name: 'Home', path: '/' }, ...items];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: graphItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: toUrl(item.path)
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-600">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link to="/" className="inline-flex items-center gap-1 text-[#25D366] hover:underline">
              <Home className="w-4 h-4" />
              Home
            </Link>
          </li>
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${item.name}-${i}`} className="flex items-center gap-1">
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                {isLast || !item.path ? (
                  <span className="text-gray-800 font-medium">{item.name}</span>
                ) : (
                  <Link to={item.path} className="text-[#25D366] hover:underline">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default SeoBreadcrumbs;
