type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
};

const SectionHeader = ({ eyebrow, title, description, align = 'center', light = false }: Props) => (
  <div className={`mb-12 md:mb-16 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    {eyebrow && (
      <span className={`section-eyebrow ${align === 'center' ? 'mx-auto' : ''} ${light ? 'section-eyebrow-light' : ''}`}>
        {eyebrow}
      </span>
    )}
    <h2 className={`section-title ${light ? 'text-white' : ''}`}>{title}</h2>
    {description && (
      <p className={`section-desc mt-4 ${light ? 'text-white/75' : ''}`}>{description}</p>
    )}
  </div>
);

export default SectionHeader;
