'use client';

import { useState, use, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { translations, type Locale } from '@/lib/i18n/translations';
import Container from '@/components/Container';
import PageHero from '@/components/PageHero';

/* ── Icons ── */
function ShieldIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  );
}
function ZapIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
    </svg>
  );
}
function CpuIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2" />
    </svg>
  );
}
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-orange-500' : 'text-neutral-400'}`}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
function ZoomIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-3.5 w-3.5">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
    </svg>
  );
}

const ICONS: Record<string, React.ReactNode> = {
  shield: <ShieldIcon />, zap: <ZapIcon />, cpu: <CpuIcon />,
};

/* ── Accordion ── */
function Accordion({ title, body, image, index }: { title: string; body: string; image: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`overflow-hidden border-b transition-colors duration-200 ${open ? 'border-orange-200' : 'border-neutral-200'}`}>
      <button type="button" onClick={() => setOpen(v => !v)}
        className="flex w-full items-center gap-4 py-5 text-left sm:gap-5 sm:py-6">
        <span className={`text-[12px] font-bold tabular-nums transition-colors sm:text-[13px] ${open ? 'text-orange-500' : 'text-neutral-300'}`}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className={`flex-1 text-[14px] font-semibold transition-colors sm:text-[16px] ${open ? 'text-neutral-900' : 'text-neutral-700'}`}>{title}</span>
        <ChevronIcon open={open} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="pb-6 pl-8 pr-4 sm:pl-9 sm:pr-6">
            <p className="mb-5 text-[13px] leading-relaxed text-neutral-500 sm:text-[14px]">{body}</p>
            <div className="overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50">
              <Image
                src={image}
                alt={title}
                width={900}
                height={640}
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Gallery images ── */
const GALLERY = [
  { src: '/production/pr10.webp', alt: 'Proizvodni pogon' },
  { src: '/production/pr7.webp', alt: 'Zavarivanje' },
  { src: '/production/pr11.webp', alt: 'Radijatori' },
  { src: '/production/pr6.webp', alt: 'Kontrola kvaliteta' },
  { src: '/production/pr3.webp', alt: 'Gotovi proizvodi' },
];

/* ── Lightbox ── */
function Lightbox({ images, index, onClose, onPrev, onNext }: {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose, onPrev, onNext]);

  const img = images[index];

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-950/95 backdrop-blur-sm" onClick={onClose}>
      {/* Close */}
      <button type="button" onClick={onClose}
        className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/15 sm:right-5 sm:top-5 sm:h-11 sm:w-11">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-4 w-4 sm:h-5 sm:w-5">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
      {/* Prev */}
      <button type="button" onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/15 sm:left-4 sm:h-12 sm:w-12">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      {/* Image */}
      <div className="relative mx-14 max-h-[85vh] w-full max-w-5xl sm:mx-20" onClick={(e) => e.stopPropagation()}>
        <Image key={img.src} src={img.src} alt={img.alt} width={1400} height={900}
          className="max-h-[85vh] w-full rounded-xl object-contain sm:rounded-2xl" priority />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-[12px]">
          {index + 1} / {images.length}
        </div>
      </div>
      {/* Next */}
      <button type="button" onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/15 sm:right-4 sm:h-12 sm:w-12">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 sm:h-5 sm:w-5">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>,
    document.body
  );
}

/* ── Page ── */
export default function ProductionPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params) as { lang: Locale };
  const t = (translations[lang] ?? translations['sr']).productionPage;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => setLightboxIndex(i => i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length), []);
  const nextImage = useCallback(() => setLightboxIndex(i => i === null ? null : (i + 1) % GALLERY.length), []);

  return (
    <>
      {/* ══════ 1. HERO ══════ */}
      <PageHero badge={t.hero.badge} title={t.hero.title} subtitle={t.hero.subtitle} />

      {/* ══════ 2. RADIJATORA - split ══════ */}
      <section className="bg-white py-16 md:py-24 lg:py-40">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:gap-24">

            {/* Image */}
            <div className="relative pb-10 lg:pb-0">
              <svg className="absolute -left-3 -top-3 sm:-left-4 sm:-top-4" width="90" height="90" viewBox="0 0 90 90" fill="none" aria-hidden="true">
                <path d="M6 90 L6 34 Q6 6 34 6 L90 6" stroke="url(#accent-grad)" strokeWidth="5" strokeLinecap="round" fill="none" />
                <defs>
                  <linearGradient id="accent-grad" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
                <Image src="/production/pr2.webp" alt="Pogon" width={760} height={540}
                  className="h-[240px] w-full object-cover sm:h-[340px] lg:h-[480px]" />
              </div>

              <div className="absolute -bottom-2 right-3 rounded-xl bg-neutral-950 px-4 py-3 shadow-2xl shadow-neutral-950/40 ring-1 ring-white/5 sm:-bottom-8 sm:-right-6 sm:rounded-2xl sm:px-6 sm:py-5">
                <p className="text-[24px] font-black leading-none text-white sm:text-[38px]">6 bar</p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-neutral-500 sm:mt-1 sm:text-[12px]">
                  {lang === 'sr' ? 'Radni pritisak' : lang === 'de' ? 'Arbeitsdruck' : 'Working pressure'}
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="lg:pl-4">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-orange-500">
                {lang === 'sr' ? 'Proizvodnja' : lang === 'de' ? 'Produktion' : 'Production'}
              </span>
              <h2 className="mt-2 text-[36px] font-black uppercase leading-none tracking-tight text-neutral-900 sm:text-[48px] md:text-[56px] lg:text-[64px]">
                {lang === 'sr' ? 'Radijatora' : lang === 'de' ? 'Heizkörper' : 'Radiators'}
              </h2>

              <p className="mt-5 text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]">
                {lang === 'sr'
                  ? 'Od 1992. godine proizvodimo cevaste radijatore tipa STANDARD LUX i T-ŠANT. Radijatori se izrađuju od čeličnih cevi sa snagom od 300 do 2000 W i radnim pritiskom 6 bar.'
                  : lang === 'de'
                  ? 'Seit 1992 fertigen wir Röhrenheizkörper der Typen STANDARD LUX und T-ŠANT. Die Heizkörper werden aus Stahlrohren mit einer Leistung von 300 bis 2000 W und einem Arbeitsdruck von 6 bar gefertigt.'
                  : 'Since 1992 we have manufactured STANDARD LUX and T-ŠANT tubular radiators. Radiators are made from steel tubes with output from 300 to 2000 W and 6 bar working pressure.'}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]">
                {lang === 'sr'
                  ? 'Nudimo radijatore u različitim dimenzijama od 85 mm do 120 mm, prilagođene svakom prostoru i potrebi.'
                  : lang === 'de'
                  ? 'Wir bieten Heizkörper in verschiedenen Abmessungen von 85 mm bis 120 mm, angepasst an jeden Raum und Bedarf.'
                  : 'We offer radiators in various sizes from 85 mm to 120 mm, tailored to any space and requirement.'}
              </p>

              <div className="mt-8 grid grid-cols-3 divide-x divide-neutral-100 rounded-xl border border-neutral-100 bg-neutral-50 sm:rounded-2xl">
                {[
                  { val: '1992', sub: lang === 'sr' ? 'Godina osnivanja' : lang === 'de' ? 'Gründungsjahr' : 'Est. year' },
                  { val: '500–2000W', sub: lang === 'sr' ? 'Snaga' : lang === 'de' ? 'Leistung' : 'Output' },
                  { val: '6 bar', sub: lang === 'sr' ? 'Pritisak' : lang === 'de' ? 'Druck' : 'Pressure' },
                ].map(s => (
                  <div key={s.val} className="flex flex-col items-center gap-1 py-4 text-center sm:py-6">
                    <span className="text-[14px] font-black leading-none text-neutral-900 sm:text-[18px] md:text-[22px]">{s.val}</span>
                    <span className="text-[9px] font-medium uppercase tracking-widest text-neutral-400 sm:text-[10px]">{s.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════ 3. CERTIFIED - dark ══════ */}
      <section className="bg-neutral-950 py-16 md:py-24 lg:py-40">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">

            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
                <Image src="/production/pr5.webp" alt="Sertifikovani proizvodi" width={720} height={500}
                  className="h-[240px] w-full object-cover opacity-90 sm:h-[340px] lg:h-[460px]" />
                <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-neutral-950/60 to-transparent sm:rounded-3xl" />
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-lg bg-white/8 px-3 py-2.5 backdrop-blur-md ring-1 ring-white/10 sm:bottom-6 sm:left-6 sm:gap-3 sm:rounded-xl sm:px-4 sm:py-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-orange-500 to-red-600 text-white sm:h-10 sm:w-10">
                  <ShieldIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/40 sm:text-[10px]">Standard</p>
                  <p className="text-[12px] font-bold text-white sm:text-[14px]">ISO 9001:2015</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-orange-500">
                {lang === 'sr' ? 'Virtualni kvalitet - Stručni kadar' : lang === 'de' ? 'Premium-Qualität - Expertenteam' : 'Premium quality - Expert team'}
              </span>
              <h2 className="mt-2 text-[32px] font-black uppercase leading-[1.05] tracking-tight text-white sm:text-[40px] md:text-[48px] lg:text-[58px]">
                {lang === 'sr' ? 'Sertifikovani proizvodi' : lang === 'de' ? 'Zertifizierte Produkte' : 'Certified products'}
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-neutral-400 sm:text-[15px]">
                {t.quality.body}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {t.quality.pillars.map((p) => (
                  <div key={p.title} className="flex flex-row items-start gap-3 rounded-xl border border-white/8 bg-white/4 p-4 sm:flex-col sm:gap-3 sm:rounded-2xl sm:p-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400 ring-1 ring-orange-500/20 sm:h-10 sm:w-10">
                      {ICONS[p.icon]}
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-white">{p.title}</p>
                      <p className="mt-0.5 text-[12px] leading-relaxed text-neutral-500">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════ 4. GALLERY ══════ */}
      <section className="bg-neutral-950 pb-16 pt-4 md:pb-24 lg:pb-32">
        <Container className="mb-8 sm:mb-10">
          <div className="flex flex-col gap-2 border-t border-white/8 pt-8 sm:flex-row sm:items-end sm:justify-between sm:pt-10">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-orange-500">{t.gallery.badge}</span>
              <h2 className="mt-2 text-[32px] font-black uppercase leading-none tracking-tight text-white sm:text-[40px] md:text-[52px]">
                {t.gallery.title}
              </h2>
            </div>
            <p className="text-[13px] leading-relaxed text-neutral-500 sm:max-w-xs sm:text-right">
              {t.gallery.subtitle}
            </p>
          </div>
        </Container>

        {/* Mobile/Tablet: 2-col simple grid */}
        <div className="px-4 lg:hidden">
          <div className="grid grid-cols-2 gap-2">
            {GALLERY.map((img, i) => (
              <button key={img.src} type="button" onClick={() => openLightbox(i)}
                className={`group relative overflow-hidden rounded-xl cursor-zoom-in ${i === 0 ? 'col-span-2 h-48 sm:h-64' : 'h-36 sm:h-48'}`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-neutral-950/30 transition-colors" />
                <div className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <ZoomIcon />
                </div>
                {i === 0 && (
                  <div className="absolute bottom-3 left-3">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-white/60">
                      {lang === 'sr' ? 'Proizvodni pogon' : lang === 'de' ? 'Produktionshalle' : 'Production hall'}
                    </p>
                    <p className="text-[10px] text-white/30">Svilajnac · 6 000 m²</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: bento grid */}
        <div className="hidden px-8 lg:block">
          <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '320px 220px' }}>
            <button type="button" onClick={() => openLightbox(0)}
              className="group relative overflow-hidden rounded-2xl cursor-zoom-in text-left"
              style={{ gridColumn: '1 / 3', gridRow: '1 / 3' }}>
              <Image src="/production/pr10.webp" alt="Fabrika" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-950/50 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-[13px] font-bold uppercase tracking-widest text-white/60">{lang === 'sr' ? 'Proizvodni pogon' : lang === 'de' ? 'Produktionshalle' : 'Production hall'}</p>
                <p className="text-[11px] text-white/30">Svilajnac · 6 000 m²</p>
              </div>
              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <ZoomIcon />
              </div>
            </button>
            <button type="button" onClick={() => openLightbox(1)}
              className="group relative overflow-hidden rounded-2xl cursor-zoom-in" style={{ gridColumn: '3', gridRow: '1' }}>
              <Image src="/production/pr7.webp" alt="Zavarivanje" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-neutral-950/30 transition-colors" />
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"><ZoomIcon /></div>
            </button>
            <button type="button" onClick={() => openLightbox(2)}
              className="group relative overflow-hidden rounded-2xl cursor-zoom-in" style={{ gridColumn: '3', gridRow: '2' }}>
              <Image src="/production/pr11.webp" alt="Radijatori" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-neutral-950/30 transition-colors" />
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"><ZoomIcon /></div>
            </button>
          </div>
          <div className="mt-2.5 grid gap-2.5" style={{ gridTemplateColumns: '1fr 1.6fr', height: '200px' }}>
            <button type="button" onClick={() => openLightbox(3)} className="group relative overflow-hidden rounded-2xl cursor-zoom-in">
              <Image src="/production/pr6.webp" alt="Kontrola kvaliteta" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-neutral-950/30 transition-colors" />
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"><ZoomIcon /></div>
            </button>
            <button type="button" onClick={() => openLightbox(4)} className="group relative overflow-hidden rounded-2xl cursor-zoom-in text-left">
              <Image src="/production/pr3.webp" alt="Gotovi proizvodi" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-r from-neutral-950/30 to-transparent group-hover:from-neutral-950/50 transition-colors" />
              <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 backdrop-blur-sm ring-1 ring-white/10">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                <span className="text-[12px] font-semibold text-white">{lang === 'sr' ? 'Gotovi radijatori' : lang === 'de' ? 'Fertige Heizkörper' : 'Finished radiators'}</span>
              </div>
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"><ZoomIcon /></div>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox images={GALLERY} index={lightboxIndex} onClose={closeLightbox} onPrev={prevImage} onNext={nextImage} />
      )}

      {/* ══════ 5. PROCESS ══════ */}
      <section className="bg-neutral-900 py-16 md:py-24 lg:py-32">
        <Container>
          <div className="mb-10 flex flex-col gap-2 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-orange-500">{t.process.badge}</span>
              <h2 className="mt-2 text-[32px] font-black uppercase leading-none tracking-tight text-white sm:text-[40px] md:text-[52px]">
                {t.process.title}
              </h2>
            </div>
            <p className="text-[13px] leading-relaxed text-neutral-500 md:max-w-xs md:text-right whitespace-pre-line">{t.process.subtitle}</p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl bg-white/5 sm:grid-cols-2 sm:rounded-3xl lg:grid-cols-3">
            {t.process.steps.map((step) => (
              <div key={step.number}
                className="group relative flex flex-col gap-3 bg-neutral-900 p-6 transition-colors hover:bg-neutral-800 sm:gap-4 sm:p-8">
                <span className="text-[48px] font-black leading-none text-white/5 transition-colors group-hover:text-orange-500/15 select-none sm:text-[56px]">
                  {step.number}
                </span>
                <div className="h-px w-10 bg-linear-to-r from-orange-500 to-red-600" />
                <h3 className="text-[15px] font-bold text-white sm:text-[16px]">{step.title}</h3>
                <p className="text-[12px] leading-relaxed text-neutral-500 sm:text-[13px]">{step.body}</p>
                <div className="absolute right-4 top-4 text-neutral-700 transition-all group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:right-6 sm:top-6">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════ 6. CERTIFICATES ══════ */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16 xl:gap-24">

            {/* Left */}
            <div className="lg:sticky lg:top-32">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-orange-500">{t.certificates.badge}</span>
              <h2 className="mt-2 text-[30px] font-black uppercase leading-[1.05] tracking-tight text-neutral-900 sm:text-[40px] md:text-[48px] lg:text-[56px]">
                {lang === 'sr' ? 'Naši sertifikati' : lang === 'de' ? 'Unsere Zertifikate' : 'Our certificates'}
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-justify text-neutral-600 sm:text-[15px]">
                {t.certificates.body}
              </p>
            </div>

            {/* Right - accordion */}
            <div className="flex flex-col">
              {t.certificates.items.map((item, i) => (
                <Accordion
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  image={`/sertifikati/Certificate${i + 1}.png`}
                  index={i}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
