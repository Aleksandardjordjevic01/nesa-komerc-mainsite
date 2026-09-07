import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { translations, locales, type Locale } from '@/lib/i18n/translations';
import Container from '@/components/Container';
import ProductGallery from '@/components/ProductGallery';
import ProductSpecs from '@/components/ProductSpecs';
import JsonLd from '@/components/JsonLd';
import { SPECS, PRODUCT_GALLERIES, PRODUCT_PAGE_SLUGS, TAG_COLORS, TAG_FALLBACK, type SpecLang } from '@/lib/product-specs';
import { SITE_NAME, buildAlternates, productSchema } from '@/lib/seo';

/* ── Types ── */
interface Product {
  id: string;
  name: string;
  tag: string;
  description: string;
  image: string;
  href: string;
}

/* ── Helpers ── */
// The canonical slug lives in the href's last segment (product ids are localized).
function slugOf(href: string): string {
  return href.split('/').filter(Boolean).pop() ?? '';
}
function findProduct(lang: Locale, slug: string): Product | undefined {
  const list = (translations[lang] ?? translations.sr).productsPage.products as Product[];
  return list.find((p) => slugOf(p.href) === slug);
}

/* ── Static params: one page per real product slug, per locale ── */
export function generateStaticParams() {
  return locales.flatMap((lang) => PRODUCT_PAGE_SLUGS.map((slug) => ({ lang, slug })));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = (await params) as { lang: Locale; slug: string };
  const product = findProduct(lang, slug);
  if (!product) return {};

  const title = `${product.name} - ${SITE_NAME}`;
  return {
    title: { absolute: title },
    description: product.description,
    alternates: buildAlternates(`/proizvodi/${slug}`, lang),
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title,
      description: product.description,
      url: `/${lang}/proizvodi/${slug}`,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

/* ── Page ── */
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = (await params) as { lang: Locale; slug: string };
  const product = findProduct(lang, slug);
  if (!product) notFound();

  const spec = SPECS[slug];
  const isSr = lang === 'sr';
  const isDe = lang === 'de';
  const loc: SpecLang = isSr ? 'sr' : isDe ? 'de' : 'en';
  const tagColor = TAG_COLORS[product.tag] ?? TAG_FALLBACK;

  // Main image first, then the product's extra gallery photos (deduped).
  const galleryImages = [...new Set([product.image, ...(PRODUCT_GALLERIES[slug] ?? [])])];

  const t = {
    breadcrumb: isSr ? 'Proizvodi' : isDe ? 'Produkte' : 'Products',
    back: isSr ? 'Nazad na proizvode' : isDe ? 'Zurück zu den Produkten' : 'Back to products',
    contact: isSr ? 'Kontaktirajte nas' : isDe ? 'Kontaktieren Sie uns' : 'Contact us',
    highlightsLabel: isSr ? 'Ključne karakteristike' : isDe ? 'Kerndaten' : 'Key specs',
    ctaLabel: isSr ? 'Zainteresovani ste?' : isDe ? 'Interessiert?' : 'Interested?',
    ctaTitleLine1: isSr ? 'Zatražite ponudu' : isDe ? 'Fordern Sie ein Angebot' : 'Request a quote',
    ctaTitleLine2: isSr ? 'za ovaj radijator' : isDe ? 'für diesen Heizkörper an' : 'for this radiator',
    ctaBody: isSr
      ? 'Izrađujemo po meri sve dimenzije, sve boje RAL palete, sa ili bez elektro-grejača.'
      : isDe
      ? 'Wir fertigen nach Maß alle Abmessungen, alle Farben der RAL-Palette, mit oder ohne Elektroheizstab.'
      : 'We manufacture to order any dimension, any RAL colour, with or without an electric heater.',
  };

  const highlights = [
    { val: '6 bar', sub: isSr ? 'Radni pritisak' : isDe ? 'Arbeitsdruck' : 'Working pressure' },
    { val: '300–2000 W', sub: isSr ? 'Snaga' : isDe ? 'Leistung' : 'Output' },
    { val: isSr ? '5 godina' : isDe ? '5 Jahre' : '5 years', sub: isSr ? 'Garancija' : isDe ? 'Garantie' : 'Warranty' },
  ];

  return (
    <>
      <JsonLd data={productSchema(product, lang, slug)} />

      {/* ══════ HERO - light split ══════ */}
      <section className="relative overflow-hidden bg-white pb-8 pt-32 md:pb-8 md:pt-44">
        <div className="pointer-events-none absolute -top-40 right-0 h-150 w-150 rounded-full bg-orange-500/5 blur-[120px]" />

        <Container className="relative">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-[12px] font-medium text-neutral-400">
            <Link href={`/${lang}/proizvodi`} className="transition-colors hover:text-orange-500">
              {t.breadcrumb}
            </Link>
            <span className="text-neutral-300">/</span>
            <span className="text-neutral-700">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 gap-y-3 lg:grid-cols-2 lg:items-start lg:gap-x-16 lg:gap-y-3">
            {/* Gallery */}
            <ProductGallery images={galleryImages} name={product.name} tag={product.tag} tagColor={tagColor} />

            {/* Info */}
            <div className="row-start-3 lg:row-start-1 lg:col-start-2 lg:self-center">
              <div className="mb-5 h-[2px] w-10 rounded-full bg-gradient-to-r from-orange-500 to-red-600" />
              <h1 className="text-[40px] font-black uppercase leading-none tracking-tight text-neutral-900 sm:text-[52px]">
                {product.name}
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-600">
                {product.description}
              </p>

              {/* Highlights — radiator stats only */}
              {spec && (
                <div className="mt-8 grid grid-cols-3 divide-x divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                  {highlights.map((h) => (
                    <div key={h.sub} className="flex flex-col items-center gap-1 px-2 py-4 text-center sm:py-5">
                      <span className="text-[15px] font-black leading-none text-neutral-900 sm:text-[19px]">{h.val}</span>
                      <span className="text-[9px] font-medium uppercase tracking-widest text-neutral-400 sm:text-[10px]">{h.sub}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/${lang}/kontakt`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-7 py-3.5 text-[13px] font-bold text-white transition-opacity hover:opacity-90"
                >
                  {t.contact}
                </Link>
                <Link
                  href={`/${lang}/proizvodi`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-7 py-3.5 text-[13px] font-bold text-neutral-700 transition-colors hover:bg-neutral-50"
                >
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <path d="M13 8H3M7 4 3 8l4 4" />
                  </svg>
                  {t.back}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════ TECHNICAL SPECIFICATIONS ══════ */}
      {spec && (
        <section className="bg-white py-8 md:py-8">
          <Container>
            <ProductSpecs spec={spec} loc={loc} />
          </Container>
        </section>
      )}

      {/* ══════ BOTTOM CTA ══════ */}
      <section className="bg-neutral-950 py-16 md:py-20">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-500">{t.ctaLabel}</p>
              <h2 className="mt-2 text-[28px] font-black tracking-tight text-white md:text-[36px]">
                {t.ctaTitleLine1} <br className="md:hidden" />
                {t.ctaTitleLine2}
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-neutral-400">{t.ctaBody}</p>
            </div>
            <Link
              href={`/${lang}/kontakt`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-7 py-3.5 text-[13px] font-bold text-white transition-opacity hover:opacity-90"
            >
              {t.contact}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
