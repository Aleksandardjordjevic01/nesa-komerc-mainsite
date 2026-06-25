import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n/translations';

/* ── Site constants ── */
export const SITE_URL = 'https://www.nesa-komerc.com';
export const SITE_NAME = 'Neša Komerc';
export const DEFAULT_OG_IMAGE = '/og-image.jpg';

/* OpenGraph + hreflang locale codes */
const OG_LOCALE: Record<Locale, string> = { sr: 'sr_RS', en: 'en_US', de: 'de_DE' };
const HREFLANG: Record<Locale, string> = { sr: 'sr-RS', en: 'en', de: 'de-DE' };
const ALL_LOCALES: Locale[] = ['sr', 'en', 'de'];

/* ── Per-page SEO content ── */
interface PageSeo {
  title: string;
  description: string;
  keywords: string[];
}
interface RouteSeo {
  path: string;
  /** Home uses an absolute (brand-forward) title; others get the "%s | Neša Komerc" template. */
  absoluteTitle?: boolean;
  content: Record<Locale, PageSeo>;
}

export const SEO_ROUTES: Record<string, RouteSeo> = {
  home: {
    path: '',
    absoluteTitle: true,
    content: {
      sr: {
        title: 'Neša Komerc — Proizvodnja cevastih radijatora i oprema za grejanje i vodovod',
        description:
          'Neša Komerc iz Svilajnca — domaći proizvođač cevastih radijatora i sušača peškira, uz veleprodaju i maloprodaju kompletne opreme za grejanje i vodovod. Kvalitet i garancija od 1992.',
        keywords: [
          'cevasti radijatori', 'sušači peškira', 'kupatilski radijatori', 'proizvođač radijatora Srbija',
          'oprema za grejanje', 'vodovodni materijal', 'kotlovi', 'toplotne pumpe', 'podno grejanje',
          'centralno grejanje', 'Neša Komerc', 'Svilajnac', 'veleprodaja grejanje',
        ],
      },
      en: {
        title: 'Neša Komerc — Tubular Radiator Manufacturer & Heating/Plumbing Supplier',
        description:
          'Neša Komerc from Svilajnac, Serbia — manufacturer of tubular radiators and towel warmers, plus wholesale and retail of complete heating and plumbing equipment. Quality since 1992.',
        keywords: [
          'tubular radiators', 'towel radiators', 'bathroom radiators', 'radiator manufacturer Serbia',
          'heating equipment', 'plumbing supplies', 'boilers', 'heat pumps', 'underfloor heating',
          'central heating', 'Neša Komerc', 'Svilajnac',
        ],
      },
      de: {
        title: 'Neša Komerc — Hersteller von Röhrenheizkörpern & Heizungs-/Sanitärgroßhandel',
        description:
          'Neša Komerc aus Svilajnac, Serbien — Hersteller von Röhrenheizkörpern und Handtuchheizkörpern sowie Groß- und Einzelhandel für Heizung und Sanitär. Qualität seit 1992.',
        keywords: [
          'Röhrenheizkörper', 'Handtuchheizkörper', 'Badheizkörper', 'Heizkörperhersteller Serbien',
          'Heizungstechnik', 'Sanitärbedarf', 'Kessel', 'Wärmepumpen', 'Fußbodenheizung',
          'Zentralheizung', 'Neša Komerc', 'Svilajnac',
        ],
      },
    },
  },
  proizvodi: {
    path: '/proizvodi',
    content: {
      sr: {
        title: 'Cevasti radijatori i sušači peškira',
        description:
          'NK LUX, NK TERM 22 i NK STANDARD — cevasti radijatori i sušači peškira sopstvene proizvodnje. Snaga 300–2000 W, sve dimenzije i boje RAL palete, garancija 5 godina.',
        keywords: [
          'cevasti radijatori', 'sušači peškira', 'kupatilski radijatori', 'NK LUX', 'NK TERM 22',
          'NK STANDARD', 'radijatori po meri', 'radijatori RAL boje', 'čelični radijatori',
        ],
      },
      en: {
        title: 'Tubular Radiators & Towel Warmers',
        description:
          'NK LUX, NK TERM 22 and NK STANDARD — our own tubular radiators and towel warmers. Output 300–2000 W, any dimension, full RAL palette, 5-year warranty.',
        keywords: [
          'tubular radiators', 'towel warmers', 'bathroom radiators', 'NK LUX', 'NK TERM 22',
          'NK STANDARD', 'custom radiators', 'RAL colour radiators', 'steel radiators',
        ],
      },
      de: {
        title: 'Röhrenheizkörper & Handtuchheizkörper',
        description:
          'NK LUX, NK TERM 22 und NK STANDARD — Röhrenheizkörper und Handtuchheizkörper aus eigener Fertigung. Leistung 300–2000 W, alle Maße, gesamte RAL-Palette, 5 Jahre Garantie.',
        keywords: [
          'Röhrenheizkörper', 'Handtuchheizkörper', 'Badheizkörper', 'NK LUX', 'NK TERM 22',
          'NK STANDARD', 'Heizkörper nach Maß', 'Heizkörper RAL-Farben', 'Stahlheizkörper',
        ],
      },
    },
  },
  proizvodnja: {
    path: '/proizvodnja',
    content: {
      sr: {
        title: 'Proizvodnja radijatora',
        description:
          'Sopstvena fabrika u Svilajncu (6.000 m²): robotsko zavarivanje, elektrostatičko farbanje i višestepena kontrola kvaliteta. Cevasti radijatori po standardu SRPS ISO 9001:2015.',
        keywords: [
          'proizvodnja radijatora', 'fabrika radijatora Srbija', 'robotsko zavarivanje', 'cevasti radijatori',
          'kontrola kvaliteta', 'ISO 9001', 'EN 442', 'Svilajnac',
        ],
      },
      en: {
        title: 'Radiator Production',
        description:
          'Our own 6,000 m² factory in Svilajnac: robotic welding, electrostatic painting and multi-stage quality control. Tubular radiators certified to SRPS ISO 9001:2015.',
        keywords: [
          'radiator production', 'radiator factory Serbia', 'robotic welding', 'tubular radiators',
          'quality control', 'ISO 9001', 'EN 442', 'Svilajnac',
        ],
      },
      de: {
        title: 'Heizkörperproduktion',
        description:
          'Eigenes 6.000 m² großes Werk in Svilajnac: Roboterschweißen, elektrostatische Lackierung und mehrstufige Qualitätskontrolle. Röhrenheizkörper nach SRPS ISO 9001:2015.',
        keywords: [
          'Heizkörperproduktion', 'Heizkörperfabrik Serbien', 'Roboterschweißen', 'Röhrenheizkörper',
          'Qualitätskontrolle', 'ISO 9001', 'EN 442', 'Svilajnac',
        ],
      },
    },
  },
  maloprodaja: {
    path: '/maloprodaja',
    content: {
      sr: {
        title: 'Maloprodaja — oprema za grejanje i vodovod',
        description:
          'Maloprodajni salon u Svilajncu: kotlovi, toplotne pumpe, radijatori, podno grejanje, cevi i fitinzi, pumpe, ventili i bojleri — preko 30 brendova opreme za grejanje i vodovod na jednom mestu.',
        keywords: [
          'maloprodaja grejanje', 'oprema za grejanje', 'vodovodni materijal', 'kotlovi', 'toplotne pumpe',
          'podno grejanje', 'cevi i fitinzi', 'bojleri', 'ventili', 'Svilajnac',
        ],
      },
      en: {
        title: 'Retail — Heating & Plumbing Equipment',
        description:
          'Retail showroom in Svilajnac: boilers, heat pumps, radiators, underfloor heating, pipes and fittings, pumps, valves and water heaters — over 30 brands of heating and plumbing equipment in one place.',
        keywords: [
          'heating equipment retail', 'plumbing supplies', 'boilers', 'heat pumps', 'underfloor heating',
          'pipes and fittings', 'water heaters', 'valves', 'Svilajnac',
        ],
      },
      de: {
        title: 'Einzelhandel — Heizung & Sanitär',
        description:
          'Ausstellungsraum in Svilajnac: Kessel, Wärmepumpen, Heizkörper, Fußbodenheizung, Rohre und Fittings, Pumpen, Ventile und Warmwasserspeicher — über 30 Marken für Heizung und Sanitär.',
        keywords: [
          'Heizung Einzelhandel', 'Sanitärbedarf', 'Kessel', 'Wärmepumpen', 'Fußbodenheizung',
          'Rohre und Fittings', 'Warmwasserspeicher', 'Ventile', 'Svilajnac',
        ],
      },
    },
  },
  'prodajna-mreza': {
    path: '/prodajna-mreza',
    content: {
      sr: {
        title: 'Prodajna mreža',
        description:
          'Pronađite ovlašćenog Neša Komerc partnera u svom gradu. Mreža distributera cevastih radijatora i opreme za grejanje širom Srbije i regiona.',
        keywords: [
          'prodajna mreža', 'distributeri radijatora', 'ovlašćeni partneri', 'Neša Komerc partneri',
          'radijatori Srbija', 'grejanje distribucija',
        ],
      },
      en: {
        title: 'Sales Network',
        description:
          'Find an authorised Neša Komerc partner in your city. A network of distributors of tubular radiators and heating equipment across Serbia and the region.',
        keywords: [
          'sales network', 'radiator distributors', 'authorised partners', 'Neša Komerc partners',
          'radiators Serbia', 'heating distribution',
        ],
      },
      de: {
        title: 'Vertriebsnetz',
        description:
          'Finden Sie einen autorisierten Neša-Komerc-Partner in Ihrer Stadt. Ein Netz von Händlern für Röhrenheizkörper und Heizungstechnik in Serbien und der Region.',
        keywords: [
          'Vertriebsnetz', 'Heizkörperhändler', 'autorisierte Partner', 'Neša Komerc Partner',
          'Heizkörper Serbien', 'Heizung Vertrieb',
        ],
      },
    },
  },
  'o-nama': {
    path: '/o-nama',
    content: {
      sr: {
        title: 'O nama',
        description:
          'Neša Komerc d.o.o. — porodična kompanija iz Svilajnca osnovana 1992. Proizvođač cevastih radijatora sa izvozom u 7+ zemalja regiona i garancijom kvaliteta od 5 godina.',
        keywords: [
          'o nama', 'Neša Komerc', 'proizvođač radijatora', 'porodična firma', 'Svilajnac',
          'istorijat', 'izvoz radijatori',
        ],
      },
      en: {
        title: 'About Us',
        description:
          'Neša Komerc d.o.o. — a family company from Svilajnac founded in 1992. Manufacturer of tubular radiators exporting to 7+ countries in the region, with a 5-year quality guarantee.',
        keywords: [
          'about us', 'Neša Komerc', 'radiator manufacturer', 'family company', 'Svilajnac',
          'company history', 'radiator export',
        ],
      },
      de: {
        title: 'Über uns',
        description:
          'Neša Komerc d.o.o. — ein Familienunternehmen aus Svilajnac, gegründet 1992. Hersteller von Röhrenheizkörpern mit Export in 7+ Länder der Region und 5 Jahren Garantie.',
        keywords: [
          'über uns', 'Neša Komerc', 'Heizkörperhersteller', 'Familienunternehmen', 'Svilajnac',
          'Firmengeschichte', 'Heizkörper Export',
        ],
      },
    },
  },
  kontakt: {
    path: '/kontakt',
    content: {
      sr: {
        title: 'Kontakt',
        description:
          'Kontaktirajte Neša Komerc — Stevana Sinđelića 30, 35210 Svilajnac. Telefon +381 35 8814 077, office@nesa-komerc.com. Veleprodaja, maloprodaja i proizvodnja radijatora.',
        keywords: [
          'kontakt', 'Neša Komerc kontakt', 'Svilajnac', 'telefon', 'adresa', 'veleprodaja', 'maloprodaja',
        ],
      },
      en: {
        title: 'Contact',
        description:
          'Contact Neša Komerc — Stevana Sinđelića 30, 35210 Svilajnac, Serbia. Phone +381 35 8814 077, office@nesa-komerc.com. Wholesale, retail and radiator production.',
        keywords: [
          'contact', 'Neša Komerc contact', 'Svilajnac', 'phone', 'address', 'wholesale', 'retail',
        ],
      },
      de: {
        title: 'Kontakt',
        description:
          'Kontaktieren Sie Neša Komerc — Stevana Sinđelića 30, 35210 Svilajnac, Serbien. Telefon +381 35 8814 077, office@nesa-komerc.com. Großhandel, Einzelhandel und Heizkörperproduktion.',
        keywords: [
          'Kontakt', 'Neša Komerc Kontakt', 'Svilajnac', 'Telefon', 'Adresse', 'Großhandel', 'Einzelhandel',
        ],
      },
    },
  },
};

/* ── Build localized alternates (canonical + hreflang) ── */
function buildAlternates(routePath: string, lang: Locale): Metadata['alternates'] {
  const languages: Record<string, string> = {};
  for (const loc of ALL_LOCALES) {
    languages[HREFLANG[loc]] = `/${loc}${routePath}`;
  }
  languages['x-default'] = `/sr${routePath}`;
  return {
    canonical: `/${lang}${routePath}`,
    languages,
  };
}

/* ── Build full Metadata for a route + locale ── */
export function buildMetadata(lang: Locale, routeKey: keyof typeof SEO_ROUTES): Metadata {
  const route = SEO_ROUTES[routeKey];
  const page = route.content[lang] ?? route.content.sr;
  const url = `/${lang}${route.path}`;
  const alternateLocales = ALL_LOCALES.filter((l) => l !== lang).map((l) => OG_LOCALE[l]);

  return {
    title: route.absoluteTitle ? { absolute: page.title } : page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: buildAlternates(route.path, lang),
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: OG_LOCALE[lang],
      alternateLocale: alternateLocales,
      url,
      title: page.title,
      description: page.description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

/* ── Structured data (JSON-LD) ── */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: 'Neša Komerc d.o.o.',
    url: SITE_URL,
    logo: `${SITE_URL}/nesa-komerc-logo.svg`,
    foundingDate: '1992',
    email: 'office@nesa-komerc.com',
    telephone: '+381 35 8814 077',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Stevana Sinđelića 30',
      addressLocality: 'Svilajnac',
      postalCode: '35210',
      addressCountry: 'RS',
    },
    areaServed: ['RS', 'BA', 'ME', 'MK', 'HR', 'SI', 'DE'],
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Store', 'HVACBusiness'],
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    url: SITE_URL,
    telephone: '+381 35 8814 077',
    email: 'office@nesa-komerc.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Stevana Sinđelića 30',
      addressLocality: 'Svilajnac',
      postalCode: '35210',
      addressCountry: 'RS',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '15:00',
      },
    ],
  };
}

export function productListSchema(
  products: { id: string; name: string; description: string; image: string }[],
  lang: Locale,
) {
  const category =
    lang === 'sr' ? 'Cevasti radijatori' : lang === 'de' ? 'Röhrenheizkörper' : 'Tubular radiators';
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: p.name,
        description: p.description,
        image: p.image.startsWith('http') ? p.image : `${SITE_URL}${p.image}`,
        category,
        brand: { '@type': 'Brand', name: SITE_NAME },
        manufacturer: { '@id': `${SITE_URL}/#organization` },
      },
    })),
  };
}

export function websiteSchema(lang: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: HREFLANG[lang],
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}
