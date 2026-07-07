import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n/translations';
import { SEO_ROUTES, SITE_URL } from '@/lib/seo';
import { PRODUCT_PAGE_SLUGS } from '@/lib/product-specs';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const pushEntry = (
    path: string,
    changeFrequency: 'weekly' | 'monthly',
    priority: number,
  ) => {
    for (const lang of locales) {
      entries.push({
        url: `${SITE_URL}/${lang}${path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, `${SITE_URL}/${loc}${path}`]),
          ),
        },
      });
    }
  };

  for (const [, route] of Object.entries(SEO_ROUTES)) {
    pushEntry(route.path, route.path === '' ? 'weekly' : 'monthly', route.path === '' ? 1 : 0.8);
  }

  // Individual product detail pages
  for (const slug of PRODUCT_PAGE_SLUGS) {
    pushEntry(`/proizvodi/${slug}`, 'monthly', 0.7);
  }

  return entries;
}
