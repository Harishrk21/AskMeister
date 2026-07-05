import { Link } from 'react-router-dom';
import {
  CORE_LINKS,
  FEATURE_LINKS,
  INDUSTRY_LINKS,
  INTEGRATION_LINKS,
  CHENNAI_LINKS,
  INDUSTRY_VERTICAL_LINKS,
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
    <div className="glass-card p-6">
      <h3 className="font-semibold text-white mb-3">{heading}</h3>
      <ul className="space-y-2.5 text-sm">
        {filtered.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className="text-ink-muted hover:text-brand transition-colors">
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
  <section className="section-padding bg-surface-muted relative border-t border-brand/10">
    <div className="absolute inset-0 grid-pattern opacity-20" />
    <div className="container-wide relative">
      <h2 className="section-title text-center mb-10">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <LinkColumn heading="Industry solutions" links={INDUSTRY_LINKS} currentPath={currentPath} />
        <LinkColumn heading="More industries" links={INDUSTRY_VERTICAL_LINKS} currentPath={currentPath} />
        <LinkColumn heading="Platform features" links={FEATURE_LINKS} currentPath={currentPath} />
        <LinkColumn heading="Integrations" links={INTEGRATION_LINKS} currentPath={currentPath} />
        <LinkColumn heading="Chennai" links={CHENNAI_LINKS} currentPath={currentPath} />
        <LinkColumn heading="Get started" links={CORE_LINKS} currentPath={currentPath} />
      </div>
    </div>
  </section>
);

export default InternalLinksHub;
