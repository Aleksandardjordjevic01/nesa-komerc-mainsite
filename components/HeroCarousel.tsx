'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';
import { translations, type Locale } from '@/lib/i18n/translations';

const images: { src: string; mobileSrc: string; alt: string; slug: string }[] = [
  { src: '/lux.png', mobileSrc: '/proizvodi/nk-lux.webp', alt: 'NK LUX', slug: 'nk-lux' },
  { src: '/nx-term.png', mobileSrc: '/proizvodi/nkterm.webp', alt: 'NK TERM 22', slug: 'nk-term' },
  { src: '/nx-standard.png', mobileSrc: '/proizvodi/nkstandard.webp', alt: 'NK STANDARD', slug: 'nk-standard' },
];

const AUTOPLAY_INTERVAL = 5000;

export default function HeroCarousel({ lang }: { lang: Locale }) {
  const [current, setCurrent] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const t = (translations[lang] ?? translations['sr']).carousel;

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => {
        setDisplayedIndex(index);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setIsTransitioning(false));
        });
      }, 700);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % images.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const slide = t.slides[displayedIndex];
  const slideSlug = images[displayedIndex].slug;

  return (
    <section className="relative w-full overflow-hidden bg-white lg:h-[calc(100vh-125px)]">
      {/* Image — stacked on top for mobile/tablet, full background on desktop */}
      <div className="relative h-[42vh] w-full md:h-[52vh] lg:absolute lg:inset-0 lg:h-full">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Mobile/tablet: product photo */}
            <Image
              src={image.mobileSrc}
              alt={image.alt}
              fill
              className="object-cover lg:hidden"
              priority={index === 0}
            />
            {/* Desktop: full-bleed hero image */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="hidden object-cover lg:block"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Pill indicators — over the image */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 lg:bottom-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                index === current
                  ? 'w-8 bg-neutral-800 lg:bg-white'
                  : 'w-2 bg-neutral-400 hover:bg-neutral-600 lg:bg-white/50 lg:hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Text — below the image on mobile/tablet, overlaid on the right on desktop */}
      <div className="lg:pointer-events-none lg:absolute lg:inset-0 lg:flex lg:items-center">
        <div className="mx-auto flex w-full max-w-350 px-4 py-8 sm:px-8 lg:py-0">
          {/* Mobile/tablet: full width below, Desktop: right half overlay */}
          <div className="w-full lg:ml-auto lg:w-1/2 lg:pl-10 lg:pointer-events-auto">
            <div className={`transition-opacity duration-700 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-3 lg:text-white/60">
                Neša Komerc
              </p>
              <h2 className="text-4xl font-extrabold text-neutral-900 leading-tight mb-4 lg:text-7xl lg:mb-6 lg:text-white">
                {slide.title}
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed mb-7 lg:text-base lg:mb-10 lg:text-white/80">
                {slide.description}
              </p>
              <Link
                href={`/${lang}/proizvodi/${slideSlug}`}
                className="inline-block cursor-pointer rounded-lg bg-linear-to-r from-orange-500 to-red-600 px-8 py-3.5 text-[14px] font-semibold text-white shadow-[0_6px_24px_rgba(234,88,12,0.4)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(234,88,12,0.6)] hover:brightness-110"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
