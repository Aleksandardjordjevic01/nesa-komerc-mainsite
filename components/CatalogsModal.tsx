'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X, Download, FileText, ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Locale } from '@/lib/i18n/translations';
import Image from 'next/image';

const CATALOGS = [
  {
    id: 'sr-en',
    name: 'Neša Komerc',
    description: 'Katalog na srpskom i engleskom',
    image: '/katalozi/katalog-na-srpskom-thumbnail.png',
    href: '/katalozi/Nesa-Komerc-katalog-A4-srp-eng.pdf',
    preview: '/katalozi/Nesa-Komerc-katalog-A4-srp-eng.pdf',
  },
  {
    id: 'de',
    name: 'Neša Komerc',
    description: 'Katalog na nemačkom',
    image: '/katalozi/katalog-na-srpskom-thumbnail.png',
    href: '/katalozi/Nesa-Komerc-katalog-A4-nem.pdf',
    preview: '/katalozi/Nesa-Komerc-katalog-A4-nem.pdf',
  },
  {
    id: 'quality',
    name: 'Politika kvaliteta',
    description: 'Preuzmite PDF',
    image: '/katalozi/katalog-na-srpskom-thumbnail.png',
    href: '/katalozi/Politika-kvaliteta.pdf',
    preview: '/katalozi/Politika-kvaliteta.pdf',
  },
];

const panelVariants = {
  initial: { opacity: 0, scale: 0.96, y: 20, filter: 'blur(6px)' },
  animate: {
    opacity: 1, scale: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.28, ease: 'easeOut' as const },
  },
  exit: {
    opacity: 0, scale: 0.97, y: 12, filter: 'blur(8px)',
    transition: { duration: 0.2, ease: 'easeIn' as const },
  },
};

interface CatalogsModalProps {
  lang: Locale;
  trigger: React.ReactNode;
}

export default function CatalogsModal({ lang, trigger }: CatalogsModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeCatalog, setActiveCatalog] = useState<typeof CATALOGS[0] | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeCatalog) setActiveCatalog(null);
        else setIsOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [activeCatalog]);

  const handleClose = () => { setIsOpen(false); setActiveCatalog(null); };

  const handleCatalogClick = (cat: typeof CATALOGS[0]) => {
    if (cat.preview) setActiveCatalog(cat);
    else window.open(cat.href, '_blank');
  };

  /* ── Catalog list (shared between mobile and desktop) ── */
  const catalogList = (
    <>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neutral-200/60 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-2.5">
          <FileText className="h-5 w-5 text-orange-500" />
          <span className="text-[15px] font-bold text-neutral-900">
            {lang === 'sr' ? 'Katalozi proizvoda' : 'Product Catalogues'}
          </span>
        </div>
        <motion.button
          type="button"
          onClick={handleClose}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition-colors hover:bg-neutral-50"
          whileHover={{ rotate: 90, scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="h-4 w-4" />
        </motion.button>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-3 py-3">
        <ul className="space-y-2">
          {CATALOGS.map((cat, i) => (
            <motion.li
              key={cat.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.2 }}
            >
              <button
                type="button"
                onClick={() => handleCatalogClick(cat)}
                className={`group flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left transition-all duration-200 ${
                  activeCatalog?.id === cat.id
                    ? 'border-orange-200 bg-orange-50 shadow-sm'
                    : 'border-transparent bg-neutral-50 hover:border-orange-200 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="shrink-0 overflow-hidden rounded-lg border border-neutral-100">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={72}
                    height={94}
                    style={{ width: '72px', height: 'auto', display: 'block' }}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                  <span className={`text-[14px] font-bold transition-colors ${activeCatalog?.id === cat.id ? 'text-orange-600' : 'text-neutral-900 group-hover:text-orange-600'}`}>
                    {cat.name}
                  </span>
                  <span className="text-[12px] text-neutral-500 leading-snug">{cat.description}</span>
                  <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">PDF</span>
                </div>
                <a
                  href={cat.href}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                    activeCatalog?.id === cat.id
                      ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white'
                      : 'bg-neutral-100 text-neutral-400 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-red-600 group-hover:text-white'
                  }`}
                >
                  <Download className="h-3.5 w-3.5" />
                </a>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );

  /* ── PDF preview panel (shared) ── */
  const pdfPreview = activeCatalog && (
    <div className="flex flex-1 flex-col min-h-0">
      {/* Preview header */}
      <div className="flex items-center justify-between border-b border-neutral-200/60 px-4 py-4">
        <button
          type="button"
          onClick={() => setActiveCatalog(null)}
          className="flex items-center gap-1.5 text-[13px] font-medium text-neutral-500 transition-colors hover:text-neutral-900"
        >
          <ChevronLeft className="h-4 w-4" />
          {lang === 'sr' ? 'Nazad' : 'Back'}
        </button>
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold text-neutral-700">{activeCatalog.name}</span>
          <a
            href={activeCatalog.href}
            download
            className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-4 py-1.5 text-[12px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            <Download className="h-3.5 w-3.5" />
            {lang === 'sr' ? 'Preuzmi' : 'Download'}
          </a>
        </div>
      </div>

      {/* iFrame */}
      <iframe
        src={`${activeCatalog.preview}#toolbar=0&navpanes=0`}
        className="flex-1 w-full"
        style={{ border: 'none', minHeight: isMobile ? '60vh' : '820px' }}
        title={activeCatalog.name}
      />
    </div>
  );

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            onClick={handleClose}
          />

          {/* ── MOBILE / TABLET layout (< lg) ── */}
          {isMobile ? (
            <div className="fixed inset-0 z-[9999] flex flex-col">
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label="Katalozi"
                variants={panelVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative flex flex-1 flex-col overflow-hidden bg-white"
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait">
                  {activeCatalog ? (
                    <motion.div
                      key="preview"
                      className="flex flex-1 flex-col min-h-0"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                      {/* Mobile preview header */}
                      <div className="flex items-center justify-between border-b border-neutral-200/60 px-4 py-4">
                        <button
                          type="button"
                          onClick={() => setActiveCatalog(null)}
                          className="flex items-center gap-1.5 text-[13px] font-medium text-neutral-500 transition-colors hover:text-neutral-900"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          {lang === 'sr' ? 'Nazad' : 'Back'}
                        </button>
                        <div className="flex items-center gap-2">
                          <a
                            href={activeCatalog.href}
                            download
                            className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-4 py-1.5 text-[12px] font-semibold text-white"
                          >
                            <Download className="h-3.5 w-3.5" />
                            {lang === 'sr' ? 'Preuzmi' : 'Download'}
                          </a>
                          <button
                            type="button"
                            onClick={handleClose}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <iframe
                        src={`${activeCatalog.preview}#toolbar=0&navpanes=0`}
                        className="flex-1 w-full"
                        style={{ border: 'none' }}
                        title={activeCatalog.name}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="list"
                      className="flex flex-1 flex-col min-h-0"
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                      {catalogList}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ) : (
            /* ── DESKTOP layout (>= lg) ── */
            <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8">
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label="Katalozi"
                variants={panelVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                layout
                className="relative flex w-full overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl"
                style={{ maxWidth: activeCatalog ? '1320px' : '640px', maxHeight: '92vh' }}
                transition={{ layout: { duration: 0.35, ease: 'easeInOut' } }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Glow */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -top-20 left-1/3 h-64 w-64 rounded-full bg-orange-500/15 blur-[120px]" />
                </div>

                {/* Left: list */}
                <motion.div layout className="relative flex shrink-0 flex-col overflow-y-auto" style={{ width: activeCatalog ? '340px' : '100%' }}>
                  {catalogList}
                </motion.div>

                {/* Right: PDF preview */}
                <AnimatePresence>
                  {activeCatalog?.preview && (
                    <motion.div
                      className="flex flex-1 flex-col border-l border-neutral-200 min-h-0"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      {pdfPreview}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {trigger}
      </div>
      {mounted && createPortal(modal, document.body)}
    </>
  );
}
