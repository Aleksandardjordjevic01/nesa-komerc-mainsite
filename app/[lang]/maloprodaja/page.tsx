import Link from 'next/link';
import { translations, type Locale } from '@/lib/i18n/translations';
import Container from '@/components/Container';
import PageHero from '@/components/PageHero';
import MaloprodajaGrid from '@/components/MaloprodajaGrid';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale };
  return buildMetadata(lang, 'maloprodaja');
}

export default async function MaloprodajaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = (await params) as { lang: Locale };
  const t = (translations[lang] ?? translations['sr']).maloprodajaPage;
  const isSr = lang === 'sr';
  const isDe = lang === 'de';

  return (
    <>
      {/* ── HERO ── */}
      <PageHero badge={t.hero.badge} title={t.hero.title} subtitle={t.hero.subtitle} />

      {/* ── GRIDS - client component with modal ── */}
      <MaloprodajaGrid
        lang={lang}
        heatingLabel={t.heatingLabel}
        heatingTitle={t.heatingTitle}
        plumbingLabel={t.plumbingLabel}
        plumbingTitle={t.plumbingTitle}
        brandsLabel={t.brandsLabel}
      />

      {/* ── VIDEO INTRO ── */}
      <section className="relative overflow-hidden bg-neutral-950 py-24">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          src="/maloprodaja.mp4"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr]">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-orange-500">
                {isSr ? 'Naš salon' : isDe ? 'Unser Showroom' : 'Our showroom'}
              </span>
              <h2 className="mt-3 text-[32px] font-black tracking-tight text-white md:text-[42px]">
                {isSr ? 'Sve na jednom mestu u Svilajncu' : isDe ? 'Alles an einem Ort in Svilajnac' : 'Everything in one place in Svilajnac'}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-400">
                {isSr
                  ? 'U našem maloprodajnom objektu možete pronaći kompletnu prateću opremu i materijal za vodovod i grejanje. Raspolažemo i modernom automatikom za grejanje koja vam omogućava da upravljate sistemom sa bilo koje lokacije.'
                  : isDe
                  ? 'In unserem Einzelhandelsgeschäft finden Sie das komplette Zubehör und Material für Sanitär und Heizung. Wir verfügen außerdem über moderne Heizungsautomatik, mit der Sie Ihr System von jedem Ort aus steuern können.'
                  : 'Our retail store carries a complete range of plumbing and heating materials and accessories. We also stock modern heating automation that lets you manage your system from any location.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '14+', label: isSr ? 'Kategorija proizvoda' : isDe ? 'Produktkategorien' : 'Product categories' },
                { value: '30+', label: isSr ? 'Brendova u ponudi' : isDe ? 'Marken im Angebot' : 'Brands in stock' },
                { value: '07–15', label: isSr ? 'Radno vreme' : isDe ? 'Öffnungszeiten' : 'Working hours' },
                { value: '1992', label: isSr ? 'Godina osnivanja' : isDe ? 'Gründungsjahr' : 'Est. year' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-[28px] font-black text-white">{s.value}</p>
                  <p className="mt-1 text-[12px] text-neutral-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── OPREMA ZA KUPATILO ── */}
      <section className="bg-neutral-950 py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-red-700 p-10 md:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-10 right-32 h-40 w-40 rounded-full bg-white/10" />
            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-white/70">{t.bathroomLabel}</span>
                <h2 className="mt-2 text-[28px] font-black tracking-tight text-white md:text-[36px]">{t.bathroomTitle}</h2>
                <p className="mt-3 text-[14px] leading-relaxed text-white/80">{t.bathroomBody}</p>
              </div>
              <a href="https://nesakomerckeramika.com/" target="_blank" rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[13px] font-bold text-orange-600 transition-opacity hover:opacity-90">
                {t.bathroomCta}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-neutral-950 pb-20">
        <Container>
          <div className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-orange-500">{t.ctaLabel}</span>
              <h2 className="mt-2 text-[26px] font-black tracking-tight text-white md:text-[32px]">{t.ctaTitle}</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-400">{t.ctaBody}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link href={`/${lang}/kontakt`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-7 py-3.5 text-[13px] font-bold text-white transition-opacity hover:opacity-90">
                {t.ctaContact}
              </Link>
              <a href="tel:+381358814077"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-[13px] font-bold text-white transition-colors hover:bg-white/10">
                +381 35 8814 077
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
