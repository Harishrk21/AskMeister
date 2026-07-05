/** Default Open Graph / Twitter image for all pages */
export const OG_IMAGE = 'https://askmeister.com/og-image.png';
export const OG_SITE_NAME = 'Ask Meister';
export const SITE_URL = 'https://askmeister.com';

export const defaultOgMeta = (title: string, description: string, url: string) => ({
  'og:title': title,
  'og:description': description,
  'og:url': url,
  'og:type': 'website',
  'og:image': OG_IMAGE,
  'og:site_name': OG_SITE_NAME,
  'twitter:card': 'summary_large_image',
  'twitter:title': title,
  'twitter:description': description,
  'twitter:image': OG_IMAGE,
});
