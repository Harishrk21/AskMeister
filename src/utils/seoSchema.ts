export type FaqItem = { question: string; answer: string };

export const faqPageSchema = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
});

export const servicePageSchema = (opts: {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: opts.name,
  description: opts.description,
  url: opts.url,
  provider: {
    '@type': 'Organization',
    name: 'Ask Meister',
    url: 'https://askmeister.com',
  },
  ...(opts.areaServed ? { areaServed: opts.areaServed } : {}),
});
