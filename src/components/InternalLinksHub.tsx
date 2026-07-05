import { Link } from 'react-router-dom';
import {
  CORE_LINKS,
  FEATURE_LINKS,
  INDUSTRY_LINKS,
  LONG_TAIL_LINKS,
  type InternalLink,
} from '../data/seoRoutes';

type Props = {
  /** Current page path — excluded from related lists */
  currentPath?: string;
  title?: string;
};

const LinkColumn = ({
  heading,
  links,
  currentPath,
}: {
  heading: string;
  links: InternalLink[];
  currentPath?: string;
}) => {
  const filtered = links.filter((l) => l.path !== currentPath);
  if (!filtered.length) return null;

  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
      <h3 className="font-semibold text-[#1C1C1C] mb-3">{heading}</h3>
      <ul className="space-y-2 text-sm">
        {filtered.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className="text-gray-600 hover:text-[#25D366] transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const InternalLinksHub = ({
  currentPath,
  title = 'Explore related WhatsApp solutions',
}: Props) => (
  <section className="py-14 bg-[#F7F7F7] border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-[#1C1C1C] mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <LinkColumn heading="Industry solutions" links={INDUSTRY_LINKS} currentPath={currentPath} />
        <LinkColumn heading="Platform features" links={FEATURE_LINKS} currentPath={currentPath} />
        <LinkColumn heading="Popular searches" links={LONG_TAIL_LINKS} currentPath={currentPath} />
        <LinkColumn heading="Get started" links={CORE_LINKS} currentPath={currentPath} />
      </div>
    </div>
  </section>
);

export default InternalLinksHub;
