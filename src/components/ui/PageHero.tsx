import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  compact?: boolean;
};

const PageHero = ({ eyebrow, title, description, children, compact = false }: Props) => (
  <section className={`relative overflow-hidden ${compact ? 'py-16 md:py-20' : 'py-20 md:py-28'}`}>
    <div className="absolute inset-0 bg-mesh-hero" />
    <div className="absolute inset-0 grid-pattern opacity-40" />
    <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand/20 rounded-full blur-3xl animate-pulse-soft" />
    <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-brand-dark/10 rounded-full blur-3xl" />
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {eyebrow && <span className="section-eyebrow mx-auto">{eyebrow}</span>}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mt-4">
        {title}
      </h1>
      {description && (
        <p className="mt-6 text-lg md:text-xl text-ink-muted max-w-2xl mx-auto leading-relaxed">{description}</p>
      )}
      {children && <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">{children}</div>}
    </div>
  </section>
);

export default PageHero;
