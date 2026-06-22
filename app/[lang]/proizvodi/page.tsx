import Link from 'next/link';
import { translations, type Locale } from '@/lib/i18n/translations';
import Container from '@/components/Container';
import PageHero from '@/components/PageHero';
import ProizvodiGrid from '@/components/ProizvodiGrid';

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = (await params) as { lang: Locale };
  const t = (translations[lang] ?? translations['sr']).productsPage;

  return (
    <>
      {/* ── HERO ── */}
      <PageHero badge={t.hero.badge} title={t.hero.title} subtitle={t.hero.subtitle} />

      {/* ── PRODUCTS GRID (client component with modal) ── */}
      <ProizvodiGrid
        lang={lang}
        products={t.products}
        cta={t.cta}
        sectionLabel={t.sectionLabel}
        sectionTitle={t.sectionTitle}
      />

      {/* ── BOTTOM CTA ── */}
      <section className="bg-neutral-950 py-20">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="max-w-lg">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-500">
                {lang === 'sr' ? 'Prilagođena rešenja' : lang === 'de' ? 'Maßgeschneiderte Lösungen' : 'Custom solutions'}
              </p>
              <h2 className="mt-2 text-[28px] font-black tracking-tight text-white md:text-[36px]">
                {lang === 'sr' ? 'Potrebne su vam posebne dimenzije?' : lang === 'de' ? 'Benötigen Sie spezielle Abmessungen?' : 'Need custom dimensions?'}
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-neutral-400">
                {lang === 'sr'
                  ? 'Radijatore izrađujemo po meri — sve dimenzije, sve boje RAL palete, sa ili bez elektro-grejača.'
                  : lang === 'de'
                  ? 'Wir fertigen Heizkörper nach Maß — alle Abmessungen, alle Farben der RAL-Palette, mit oder ohne Elektroheizstab.'
                  : 'We manufacture radiators to order — any dimensions, any RAL colour, with or without an electric heater.'}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link href={`/${lang}/kontakt`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-7 py-3.5 text-[13px] font-bold text-white transition-opacity hover:opacity-90">
                {lang === 'sr' ? 'Kontaktirajte nas' : lang === 'de' ? 'Kontaktieren Sie uns' : 'Contact us'}
              </Link>
              <Link href={`/${lang}/proizvodnja`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-[13px] font-bold text-white transition-colors hover:bg-white/10">
                {lang === 'sr' ? 'O proizvodnji' : lang === 'de' ? 'Unsere Produktion' : 'Our production'}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
