'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface Props {
  images: string[];
  name: string;
  tag?: string;
  tagColor: string;
}

export default function ProductGallery({ images, name, tag, tagColor }: Props) {
  const list = images.length ? images : [];
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const current = list[active] ?? list[0];

  const open = () => setLightbox(true);
  const close = () => setLightbox(false);
  const prev = () => setActive((i) => (i - 1 + list.length) % list.length);
  const next = () => setActive((i) => (i + 1) % list.length);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox, list.length]);

  return (
    <div>
      {/* Main image */}
      <button
        type="button"
        onClick={open}
        aria-label={name}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-3xl bg-neutral-100 ring-1 ring-neutral-200"
      >
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={current}
            alt={name}
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
        </div>
        {tag && (
          <div className="absolute left-5 top-5">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold ring-1 backdrop-blur-sm ${tagColor}`}>
              {tag}
            </span>
          </div>
        )}
        {/* Zoom hint */}
        <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-neutral-700 opacity-0 shadow-sm ring-1 ring-neutral-200 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-4 w-4">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
          </svg>
        </div>
      </button>

      {/* Thumbnails */}
      {list.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-3">
          {list.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${name} ${i + 1}`}
              className={`relative aspect-[16/9] w-28 shrink-0 overflow-hidden rounded-xl bg-neutral-100 ring-1 transition-all duration-200 ${
                i === active ? 'ring-2 ring-orange-400' : 'ring-neutral-200 hover:ring-orange-200'
              }`}
            >
              <Image src={src} alt={`${name} ${i + 1}`} fill sizes="112px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {mounted && lightbox && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-950/95 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/15 sm:right-5 sm:top-5"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-5 w-5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {list.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/15 sm:left-4 sm:h-12 sm:w-12"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div className="relative mx-14 w-full max-w-6xl sm:mx-20" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[16/9] max-h-[85vh] w-full">
              <Image src={current} alt={name} fill sizes="92vw" className="object-contain" priority />
            </div>
            {list.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-[12px] font-medium text-white/70 backdrop-blur-sm">
                {active + 1} / {list.length}
              </div>
            )}
          </div>

          {list.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/15 sm:right-4 sm:h-12 sm:w-12"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          )}
        </div>,
        document.body
      )}
    </div>
  );
}
