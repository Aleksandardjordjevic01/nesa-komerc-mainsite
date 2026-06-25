'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Locale } from '@/lib/i18n/translations';

/* ── Types ── */
interface Product {
  id: string;
  name: string;
  tag: string;
  description: string;
  image: string;
  href: string;
}

/* ── Tag color map ── */
const TAG_COLORS: Record<string, string> = {
  Premium:    'bg-amber-50/90 text-amber-700 ring-amber-200',
  Novo:       'bg-emerald-50/90 text-emerald-700 ring-emerald-200',
  New:        'bg-emerald-50/90 text-emerald-700 ring-emerald-200',
  Bestseller: 'bg-orange-50/90 text-orange-700 ring-orange-200',
  Oprema:     'bg-sky-50/90 text-sky-700 ring-sky-200',
  Accessory:  'bg-sky-50/90 text-sky-700 ring-sky-200',
  Opcija:     'bg-violet-50/90 text-violet-700 ring-violet-200',
  Option:     'bg-violet-50/90 text-violet-700 ring-violet-200',
  Program:    'bg-neutral-100/90 text-neutral-600 ring-neutral-200',
  Programme:  'bg-neutral-100/90 text-neutral-600 ring-neutral-200',
};

/* ── Technical specifications (per product) ── */
type SpecLang = 'sr' | 'en' | 'de';
type Col = Record<SpecLang, string>;

interface SpecGroup {
  key: string;
  label: Col;          // toggle button label
  caption?: Col;       // optional sub-caption (constant values for the group)
}
interface SpecConfig {
  groups: SpecGroup[];
  attrCols: Col[];             // [0] is the card title attribute; [1..] are detail rows
  data: Record<string, (string | number)[][]>;
}

const SPEC_TITLE: Record<SpecLang, string> = {
  sr: 'Tehničke karakteristike',
  en: 'Technical specifications',
  de: 'Technische Daten',
};

// NK LUX and NK STANDARD currently share the same specification sheet.
const NK_RADIATOR_SPEC: SpecConfig = {
    groups: [
      { key: '400', label: { sr: '400 mm', en: '400 mm', de: '400 mm' }, caption: { sr: 'Širina W 400 mm · Rastojanje priključka E 330 mm · Priključak G ½″', en: 'Width W 400 mm · Connection spacing E 330 mm · Connection G ½″', de: 'Breite W 400 mm · Anschlussabstand E 330 mm · Anschluss G ½″' } },
      { key: '500', label: { sr: '500 mm', en: '500 mm', de: '500 mm' }, caption: { sr: 'Širina W 500 mm · Rastojanje priključka E 430 mm · Priključak G ½″', en: 'Width W 500 mm · Connection spacing E 430 mm · Connection G ½″', de: 'Breite W 500 mm · Anschlussabstand E 430 mm · Anschluss G ½″' } },
      { key: '600', label: { sr: '600 mm', en: '600 mm', de: '600 mm' }, caption: { sr: 'Širina W 600 mm · Rastojanje priključka E 530 mm · Priključak G ½″', en: 'Width W 600 mm · Connection spacing E 530 mm · Connection G ½″', de: 'Breite W 600 mm · Anschlussabstand E 530 mm · Anschluss G ½″' } },
      { key: '700', label: { sr: '700 mm', en: '700 mm', de: '700 mm' }, caption: { sr: 'Širina W 700 mm · Rastojanje priključka E 630 mm · Priključak G ½″', en: 'Width W 700 mm · Connection spacing E 630 mm · Connection G ½″', de: 'Breite W 700 mm · Anschlussabstand E 630 mm · Anschluss G ½″' } },
    ],
    attrCols: [
      { sr: 'Visina H (mm)', en: 'Height H (mm)', de: 'Höhe H (mm)' },
      { sr: 'Broj cevi', en: 'No. of tubes', de: 'Anzahl Rohre' },
      { sr: 'Težina (kg)', en: 'Weight (kg)', de: 'Gewicht (kg)' },
      { sr: 'Zapremina (L)', en: 'Volume (L)', de: 'Volumen (L)' },
      { sr: 'Učinak ΔT 60K (W)', en: 'Output ΔT 60K (W)', de: 'Leistung ΔT 60K (W)' },
      { sr: 'Učinak ΔT 50K (W)', en: 'Output ΔT 50K (W)', de: 'Leistung ΔT 50K (W)' },
      { sr: 'Učinak ΔT 30K (W)', en: 'Output ΔT 30K (W)', de: 'Leistung ΔT 30K (W)' },
    ],
    data: {
      '400': [
        [750, 14, '4,70', '3,50', 491, 394, 212],
        [1120, 21, '6,80', '5,30', 744, 594, 317],
        [1490, 28, '9,20', '7,00', 993, 793, 423],
        [1860, 35, '11,10', '8,60', 1234, 983, 520],
      ],
      '500': [
        [750, 14, '5,30', '4,00', 588, 468, 248],
        [1120, 21, '7,90', '6,00', 882, 704, 373],
        [1490, 28, '10,40', '8,00', 1183, 939, 491],
        [1860, 35, '13,00', '10,00', 1453, 1161, 620],
      ],
      '600': [
        [750, 14, '6,00', '4,60', 675, 539, 286],
        [1120, 21, '8,90', '6,00', 1009, 808, 433],
        [1490, 28, '11,90', '9,60', 1351, 1082, 582],
        [1860, 35, '14,70', '11,50', 1678, 1334, 701],
      ],
      '700': [
        [750, 14, '6,80', '5,00', 777, 619, 327],
        [1120, 21, '10,00', '7,60', 1158, 922, 487],
        [1490, 28, '13,30', '10,60', 1515, 1206, 637],
        [1860, 35, '16,50', '13,00', 1929, 1536, 811],
      ],
    },
};

const SPECS: Record<string, SpecConfig> = {
  'nk-lux': NK_RADIATOR_SPEC,
  'nk-standard': NK_RADIATOR_SPEC,
  'nk-term': {
    groups: [
      { key: '400', label: { sr: '400 mm', en: '400 mm', de: '400 mm' }, caption: { sr: 'Širina W 400 mm · Rastojanje priključka E 350 mm · Priključak G ½″', en: 'Width W 400 mm · Connection spacing E 350 mm · Connection G ½″', de: 'Breite W 400 mm · Anschlussabstand E 350 mm · Anschluss G ½″' } },
      { key: '500', label: { sr: '500 mm', en: '500 mm', de: '500 mm' }, caption: { sr: 'Širina W 500 mm · Rastojanje priključka E 450 mm · Priključak G ½″', en: 'Width W 500 mm · Connection spacing E 450 mm · Connection G ½″', de: 'Breite W 500 mm · Anschlussabstand E 450 mm · Anschluss G ½″' } },
      { key: '600', label: { sr: '600 mm', en: '600 mm', de: '600 mm' }, caption: { sr: 'Širina W 600 mm · Rastojanje priključka E 550 mm · Priključak G ½″', en: 'Width W 600 mm · Connection spacing E 550 mm · Connection G ½″', de: 'Breite W 600 mm · Anschlussabstand E 550 mm · Anschluss G ½″' } },
      { key: '700', label: { sr: '700 mm', en: '700 mm', de: '700 mm' }, caption: { sr: 'Širina W 700 mm · Rastojanje priključka E 650 mm · Priključak G ½″', en: 'Width W 700 mm · Connection spacing E 650 mm · Connection G ½″', de: 'Breite W 700 mm · Anschlussabstand E 650 mm · Anschluss G ½″' } },
    ],
    attrCols: [
      { sr: 'Visina H (mm)', en: 'Height H (mm)', de: 'Höhe H (mm)' },
      { sr: 'Broj cevi', en: 'No. of tubes', de: 'Anzahl Rohre' },
      { sr: 'Težina (kg)', en: 'Weight (kg)', de: 'Gewicht (kg)' },
      { sr: 'Zapremina (L)', en: 'Volume (L)', de: 'Volumen (L)' },
      { sr: 'Učinak ΔT 50K (W)', en: 'Output ΔT 50K (W)', de: 'Leistung ΔT 50K (W)' },
      { sr: 'Učinak ΔT 30K (W)', en: 'Output ΔT 30K (W)', de: 'Leistung ΔT 30K (W)' },
    ],
    data: {
      '400': [
        [800, 14, '3,72', '3,00', 277, 145],
        [1000, 16, '4,53', '3,77', 342, 179],
        [1200, 20, '5,34', '4,54', 404, 212],
        [1500, 22, '6,46', '5,36', 495, 260],
        [1800, 26, '7,58', '6,18', 583, 307],
        [1500, 27, '7,08', '5,72', 527, 277],
        [1800, 33, '8,58', '6,84', 654, 346],
      ],
      '500': [
        [800, 14, '4,34', '3,45', 332, 174],
        [1000, 16, '5,30', '4,29', 410, 215],
        [1200, 20, '6,25', '5,13', 486, 255],
        [1500, 22, '7,59', '6,05', 594, 314],
        [1800, 26, '8,93', '6,97', 696, 369],
        [1500, 27, '8,25', '6,56', 637, 336],
        [1800, 33, '9,99', '7,89', 787, 415],
      ],
      '600': [
        [800, 14, '4,96', '3,89', 387, 203],
        [1000, 16, '6,06', '4,80', 479, 252],
        [1200, 20, '7,17', '5,71', 567, 299],
        [1500, 22, '8,72', '6,74', 692, 367],
        [1800, 26, '10,27', '7,77', 809, 431],
        [1500, 27, '9,41', '7,40', 747, 395],
        [1800, 33, '11,41', '8,93', 919, 485],
      ],
      '700': [
        [800, 14, '5,58', '4,34', 442, 232],
        [1000, 16, '6,83', '5,32', 547, 288],
        [1200, 20, '8,08', '6,30', 648, 343],
        [1500, 22, '9,85', '7,43', 791, 420],
        [1800, 26, '11,62', '8,56', 922, 493],
        [1500, 27, '10,58', '8,24', 858, 454],
        [1800, 33, '12,82', '9,98', 1051, 555],
      ],
    },
  },
};

/* ── Animations ── */
const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.24 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
const panelVariants = {
  initial: { opacity: 0, scale: 0.96, y: 24, filter: 'blur(6px)' },
  animate: { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.28, ease: 'easeOut' as const } },
  exit: { opacity: 0, scale: 0.97, y: 12, filter: 'blur(8px)', transition: { duration: 0.2, ease: 'easeIn' as const } },
};

/* ── Props ── */
interface Props {
  lang: Locale;
  products: Product[];
  cta: string;
  sectionLabel: string;
  sectionTitle: string;
}

export default function ProizvodiGrid({ lang, products, cta, sectionLabel, sectionTitle }: Props) {
  const [active, setActive] = useState<Product | null>(null);
  const [mounted, setMounted] = useState(false);
  const [specGroupKey, setSpecGroupKey] = useState<string>('');
  const isSr = lang === 'sr';
  const isDe = lang === 'de';
  const loc: SpecLang = isSr ? 'sr' : isDe ? 'de' : 'en';

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  /* ── Modal ── */
  const modal = (
    <AnimatePresence>
      {active && (
        <>
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
            variants={backdropVariants}
            initial="initial" animate="animate" exit="exit"
            onClick={() => setActive(null)}
          />

          <div className="fixed inset-0 z-[9999] flex items-stretch justify-center p-0 sm:items-center sm:p-4 md:p-6">
            <motion.div
              variants={panelVariants}
              initial="initial" animate="animate" exit="exit"
              className="relative flex h-full w-full flex-col overflow-hidden bg-white shadow-2xl sm:h-[92vh] sm:max-w-[1440px] sm:rounded-3xl md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <motion.button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                whileHover={{ rotate: 90, scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-4 w-4" />
              </motion.button>

              {/* Image — top on mobile, left full height on desktop */}
              <div className="relative h-[38vh] min-h-[240px] w-full shrink-0 overflow-hidden bg-neutral-100 md:h-auto md:max-h-full md:min-h-full md:w-[42%]">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
                {/* Gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                {/* Tag + title overlay */}
                <div className="absolute bottom-0 left-0 p-6">
                  {(() => {
                    const tagColor = TAG_COLORS[active.tag] ?? 'bg-neutral-100/90 text-neutral-600 ring-neutral-200';
                    return (
                      <span className={`mb-3 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold ring-1 backdrop-blur-sm ${tagColor}`}>
                        {active.tag}
                      </span>
                    );
                  })()}
                  <h2 className="mt-2 text-[28px] font-black tracking-tight text-white drop-shadow-lg md:text-[34px] lg:text-[38px]">
                    {active.name}
                  </h2>
                </div>
              </div>

              {/* Right — info + specs, scrollable */}
              <div className="flex flex-1 flex-col overflow-y-auto p-5 sm:p-8 md:p-10 lg:p-12">
                {/* Orange accent */}
                <div className="mb-4 h-[2px] w-10 rounded-full bg-gradient-to-r from-orange-500 to-red-600" />

                <p className="max-w-3xl text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]">
                  {active.description}
                </p>

                {/* Technical specifications */}
                {(() => {
                  const spec = SPECS[active.id];
                  if (!spec) return null;
                  const groupKey = spec.groups.some((g) => g.key === specGroupKey)
                    ? specGroupKey
                    : spec.groups[0].key;
                  const group = spec.groups.find((g) => g.key === groupKey)!;
                  const items = spec.data[groupKey];

                  return (
                    <div className="mt-7">
                      {/* Header: title + group toggle */}
                      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="h-4 w-[3px] rounded-full bg-gradient-to-b from-orange-500 to-red-600" />
                          <h3 className="text-[12px] font-bold uppercase tracking-widest text-neutral-900">
                            {SPEC_TITLE[loc]}
                          </h3>
                        </div>
                        {spec.groups.length > 1 && (
                          <div className="inline-flex flex-wrap gap-1 self-start rounded-full bg-neutral-100 p-1">
                            {spec.groups.map((g) => (
                              <button
                                key={g.key}
                                type="button"
                                onClick={() => setSpecGroupKey(g.key)}
                                className={`rounded-full px-3.5 py-1.5 text-[11.5px] font-semibold transition-all duration-200 ${
                                  groupKey === g.key
                                    ? 'bg-white text-neutral-900 shadow-sm ring-1 ring-neutral-200'
                                    : 'text-neutral-500 hover:text-neutral-700'
                                }`}
                              >
                                {g.label[loc]}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {group.caption && (
                        <p className="mb-3 text-[11.5px] font-medium text-neutral-500">{group.caption[loc]}</p>
                      )}

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                        {items.map((it, ri) => (
                          <div
                            key={ri}
                            className="overflow-hidden rounded-2xl ring-1 ring-neutral-200/80 transition-shadow duration-200 hover:shadow-md hover:ring-orange-200"
                          >
                            {/* Card header — primary attribute (height) */}
                            <div className="flex items-end justify-between gap-2 border-b border-neutral-100 bg-neutral-50 px-4 py-3">
                              <div>
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                                  {spec.attrCols[0][loc]}
                                </p>
                                <p className="mt-0.5 text-[22px] font-black leading-none tabular-nums text-neutral-900">
                                  {it[0]}
                                </p>
                              </div>
                              <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-orange-500 to-red-600" />
                            </div>
                            {/* Card body — remaining attributes */}
                            <dl className="divide-y divide-neutral-100">
                              {spec.attrCols.slice(1).map((col, j) => (
                                <div key={j} className="flex items-center justify-between gap-3 px-4 py-2.5">
                                  <dt className="text-[11.5px] leading-tight text-neutral-500">{col[loc]}</dt>
                                  <dd className="shrink-0 text-[13px] font-semibold tabular-nums text-neutral-900">
                                    {it[j + 1]}
                                  </dd>
                                </div>
                              ))}
                            </dl>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}

                {/* CTA */}
                <div className="mt-7 flex items-center gap-3">
                  <Link
                    href={`/${lang}/kontakt`}
                    onClick={() => setActive(null)}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-[13px] font-bold text-white transition-opacity hover:opacity-90"
                  >
                    {isSr ? 'Kontaktirajte nas' : isDe ? 'Kontaktieren Sie uns' : 'Contact us'}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    className="rounded-full border border-neutral-200 px-6 py-3 text-[13px] font-semibold text-neutral-600 transition-colors hover:bg-neutral-50"
                  >
                    {isSr ? 'Zatvori' : isDe ? 'Schließen' : 'Close'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-orange-500">
              {sectionLabel}
            </span>
            <div className="mt-2 flex items-end gap-6">
              <h2 className="text-[32px] font-black uppercase tracking-tight text-neutral-900 sm:text-[40px] md:text-[48px]">
                {sectionTitle}
              </h2>
              <div className="mb-2 hidden h-px flex-1 max-w-xs bg-gradient-to-r from-neutral-200 to-transparent sm:block" />
            </div>
          </div>

          {/* Card grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const tagColor = TAG_COLORS[product.tag] ?? 'bg-neutral-100/90 text-neutral-600 ring-neutral-200';

              return (
                <div
                  key={product.id}
                  onClick={() => setActive(product)}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-neutral-200/70 hover:ring-orange-200 cursor-pointer"
                >
                  {/* Portrait image */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Tag */}
                    <div className="absolute left-4 top-4">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold ring-1 backdrop-blur-sm ${tagColor}`}>
                        {product.tag}
                      </span>
                    </div>

                    {/* Hover hint */}
                    <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg">
                        {isSr ? 'Saznaj više' : isDe ? 'Mehr erfahren' : 'Learn more'}
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="h-[2px] w-8 rounded-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-300 group-hover:w-14" />

                    <h3 className="text-[20px] font-black tracking-tight text-neutral-900 transition-colors duration-200 group-hover:text-orange-600">
                      {product.name}
                    </h3>

                    <p className="flex-1 text-[13px] leading-relaxed text-neutral-500">
                      {product.description}
                    </p>

                    {/* CTA row */}
                    <div className="mt-2 flex items-center justify-between border-t border-neutral-100 pt-4">
                      <span className="text-[12px] font-bold uppercase tracking-widest text-neutral-900 transition-colors duration-200 group-hover:text-orange-500">
                        {cta}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 transition-all duration-200 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-red-600 group-hover:text-white">
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5">
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portal */}
      {mounted && createPortal(modal, document.body)}
    </>
  );
}
