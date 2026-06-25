import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n/translations';
import { SEO_ROUTES, SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const [, route] of Object.entries(SEO_ROUTES)) {
    for (const lang of locales) {
      entries.push({
        url: `${SITE_URL}/${lang}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.path === '' ? 'weekly' : 'monthly',
        priority: route.path === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, `${SITE_URL}/${loc}${route.path}`]),
          ),
        },
      });
    }
  }

  return entries;
}
