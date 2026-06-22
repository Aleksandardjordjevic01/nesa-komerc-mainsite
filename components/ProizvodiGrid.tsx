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
  const isSr = lang === 'sr';
  const isDe = lang === 'de';

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

          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              variants={panelVariants}
              initial="initial" animate="animate" exit="exit"
              className="relative w-full max-w-[840px] overflow-hidden rounded-3xl bg-white shadow-2xl"
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

              {/* Hero image */}
              <div className="relative aspect-[16/8] overflow-hidden bg-neutral-100">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 840px"
                  className="object-cover"
                />
                {/* Gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
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
                  <h2 className="mt-2 text-[26px] font-black tracking-tight text-white drop-shadow-lg md:text-[30px]">
                    {active.name}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Orange accent */}
                <div className="mb-4 h-[2px] w-10 rounded-full bg-gradient-to-r from-orange-500 to-red-600" />

                <p className="text-[14px] leading-relaxed text-neutral-600">
                  {active.description}
                </p>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-3">
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
