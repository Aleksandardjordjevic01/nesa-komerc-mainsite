'use client';

import { useRef, useState } from 'react';
import type { Locale } from '@/lib/i18n/translations';
import SalesNetworkMap from '@/components/SalesNetworkMap';
import PartnersGrid from '@/components/PartnersGrid';

export default function SalesNetworkSection({ lang }: { lang: Locale }) {
  const [activeCity, setActiveCity] = useState<string | null>(null);
  const partnersRef = useRef<HTMLDivElement>(null);

  const handleCityClick = (city: string) => {
    setActiveCity(prev => prev === city ? null : city);
    partnersRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section className="bg-white pb-0 pt-0">
        <div className="h-110 w-full">
          <SalesNetworkMap onCityClick={handleCityClick} />
        </div>
      </section>

      <div ref={partnersRef}>
        <PartnersGrid lang={lang} activeCity={activeCity} onCityChange={setActiveCity} />
      </div>
    </>
  );
}
