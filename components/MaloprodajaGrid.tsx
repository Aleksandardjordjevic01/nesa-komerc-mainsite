'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Locale } from '@/lib/i18n/translations';
import Container from '@/components/Container';

/* ── Types ── */
interface Category {
  id: string;
  image: string;
  nameSr: string;
  nameEn: string;
  descSr: string;
  descEn: string;
  brands: string[];
}

/* ── Data ── */
const HEATING: Category[] = [
  { id: 'kotlovi-peci', image: '/img1.png', nameSr: 'Kotlovi i peći na drvo i pelet', nameEn: 'Wood & pellet boilers', descSr: 'Kotlovi na pelet 12–35 kW i čelični kotlovi za čvrsto gorivo 20–60 kW. Visok stepen iskorišćenja energije, pouzdani u svim klimatskim uslovima.', descEn: 'Pellet boilers 12–35 kW and steel solid-fuel boilers 20–60 kW. High energy efficiency, reliable in all climates.', brands: ['ALFA', 'Centrometal', 'KEPO', 'Megal'] },
  { id: 'toplotne-pumpe', image: '/img2.png', nameSr: 'Toplotne pumpe', nameEn: 'Heat pumps', descSr: 'Sistemi vazduh–voda, voda–voda i zemlja–voda sa DC inverter tehnologijom za uštedu električne energije i optimalan komfor grejanja i hlađenja.', descEn: 'Air-to-water, water-to-water and ground-to-water systems with DC inverter technology for energy savings and optimal comfort.', brands: ['Vaillant', 'Bosch', 'Ferroli'] },
  { id: 'radijatori', image: '/nx-lux.png', nameSr: 'Radijatori', nameEn: 'Radiators', descSr: 'Panelni, aluminijumski i cevasti radijatori za svaki tip prostora. Dostupne različite dimenzije i boje RAL palete.', descEn: 'Panel, aluminium and tubular radiators for every space type. Available in various sizes and RAL palette colours.', brands: ['MI-Term', 'Global', 'Lipovica', 'Neša Komerc'] },
  { id: 'cevi-fitinzi', image: '/img4.png', nameSr: 'Cevi i fitinzi', nameEn: 'Pipes & fittings', descSr: 'Bakarne cevi Ø8–54 mm, bakarni, mesingani, pocinkovani fitinzi, Alpex i PEX sistemi za sve vrste instalacija centralnog grejanja i vodovoda.', descEn: 'Copper pipes Ø8–54 mm, copper, brass, galvanised fittings, Alpex and PEX systems for all central heating and plumbing installations.', brands: ['Viega', 'Caleffi', 'Henco', 'Giacomini'] },
  { id: 'ekspanzione-posude', image: '/img5.png', nameSr: 'Ekspanzione posude', nameEn: 'Expansion vessels', descSr: 'Sigurnosni uređaji koji preuzimaju višak zapremine vode u sistemima centralnog grejanja, čime se sprečava rast pritiska i oštećenje instalacija.', descEn: 'Safety devices that absorb excess water volume in central heating systems, preventing pressure build-up and installation damage.', brands: ['Imera'] },
  { id: 'kotlovi-gas-struja', image: '/img1.png', nameSr: 'Kotlovi na gas i struju', nameEn: 'Gas & electric boilers', descSr: 'Kondenzacioni gasni kotlovi kompaktnih dimenzija i električni zidni kotlovi snage 6–36 kW za sve tipove stambenih i poslovnih objekata.', descEn: 'Compact condensing gas boilers and electric wall boilers 6–36 kW for all types of residential and commercial properties.', brands: ['Bosch', 'Vaillant', 'Ekopan DM'] },
  { id: 'podno-grejanje', image: '/img2.png', nameSr: 'Podno grejanje', nameEn: 'Underfloor heating', descSr: 'Stiropor ploče sa čepovima za cevi 16–20 mm i cevna izolacija Sanflex koja redukuje gubitke toplote i do 80% u sistemima grejanja i hlađenja.', descEn: 'Insulation panels with pipe studs for 16–20 mm pipes and Sanflex tube insulation that reduces heat losses by up to 80%.', brands: ['Sanflex'] },
  { id: 'dimovodi', image: '/img3.png', nameSr: 'Dimovodi', nameEn: 'Flue pipes', descSr: 'Crni, inox i dimovodi za gasne kotlove u dimenzijama Fi 80–200 mm. Dostupni reduciri, kolena i svi elementi za fleksibilnu montažu.', descEn: 'Black, stainless and gas-boiler flue pipes, sizes Fi 80–200 mm. Reducers, elbows and all elements for flexible installation.', brands: ['OSA', 'KEPO'] },
  { id: 'pumpe', image: '/img4.png', nameSr: 'Pumpe', nameEn: 'Pumps', descSr: 'Cirkulacione pumpe za sisteme centralnog grejanja, hlađenja i klimatizacije. Izrađene od liva, nerđajućeg čelika i impregniranog metala.', descEn: 'Circulation pumps for central heating, cooling and air-conditioning systems. Made from cast iron, stainless steel and impregnated metal.', brands: ['Grundfos', 'Wilo', 'IMP', 'HST'] },
  { id: 'solarna-oprema', image: '/img5.png', nameSr: 'Solarna oprema', nameEn: 'Solar equipment', descSr: 'Vakumski i pločasti solarni kolektori — besplatna solarna energija omogućava uštedu do 60% energije za grejanje vode i 35% za grejanje prostora.', descEn: 'Vacuum and flat-plate solar collectors — free solar energy saves up to 60% on water heating and 35% on space heating.', brands: ['Burnit', 'Centrometal'] },
  { id: 'razdelnici-sabirnici', image: '/img1.png', nameSr: 'Razdelnici i sabirnici', nameEn: 'Manifolds & collectors', descSr: 'Mesingani, inox i plastični razdelnici za sisteme podnog grejanja. Čine jednostavan sistem za pojedinačne spojeve grejnih tela.', descEn: 'Brass, stainless and plastic manifolds for underfloor heating systems. A simple system for individual connections of heating bodies.', brands: ['Tesa', 'Herz'] },
  { id: 'ventili', image: '/img2.png', nameSr: 'Ventili', nameEn: 'Valves', descSr: 'Termostatski, vodovodne, gasni, nepovratni i mešni ventili za sve sisteme. Regulišu protok tečnosti i gasova delimičnim ili potpunim zatvaranjem.', descEn: 'Thermostatic, water, gas, non-return and mixing valves for all systems. They regulate the flow of liquids and gases by partial or full closure.', brands: ['Caleffi', 'Herz', 'Icma', 'Esbe'] },
];

const PLUMBING: Category[] = [
  { id: 'bojleri', image: '/img3.png', nameSr: 'Bojleri', nameEn: 'Water heaters', descSr: 'Električni i kombinovani bojleri za svako domaćinstvo i poslovni prostor. Kotao u kome se zagreva voda pod pritiskom za sanitarne potrebe.', descEn: 'Electric and combination water heaters for homes and commercial spaces. A tank where water is heated under pressure for sanitary use.', brands: ['Termorad', 'Ariston', 'Tesy'] },
  { id: 'pvc-ppr', image: '/img4.png', nameSr: 'PVC i PPR cevi', nameEn: 'PVC & PPR pipes', descSr: 'Plastične cevi i fitinzi za vodovodne instalacije — lagane, hemijski otporne i jednostavne za montažu. Pogodne za zakopane i nadzemne instalacije.', descEn: 'Plastic pipes and fittings for plumbing — lightweight, chemically resistant and easy to install. Suitable for buried and above-ground applications.', brands: ['Valdom'] },
];

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
  heatingLabel: string;
  heatingTitle: string;
  plumbingLabel: string;
  plumbingTitle: string;
  brandsLabel: string;
}

export default function MaloprodajaGrid({ lang, heatingLabel, heatingTitle, plumbingLabel, plumbingTitle, brandsLabel }: Props) {
  const [active, setActive] = useState<Category | null>(null);
  const [mounted, setMounted] = useState(false);
  const isSr = lang === 'sr';

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

  /* ── Card ── */
  const renderCard = (cat: Category, isLarge = false) => (
    <div
      key={cat.id}
      onClick={() => setActive(cat)}
      className="group cursor-pointer flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/70 hover:ring-orange-200"
    >
      <div className={`relative overflow-hidden bg-neutral-100 ${isLarge ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
        <Image
          src={cat.image}
          alt={isSr ? cat.nameSr : cat.nameEn}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        {/* Hover overlay hint */}
        <div className="absolute inset-0 flex items-end justify-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg">
            {isSr ? 'Saznaj više' : 'Learn more'}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-[15px] font-bold leading-snug tracking-tight text-neutral-900 transition-colors group-hover:text-orange-600">
          {isSr ? cat.nameSr : cat.nameEn}
        </h3>
        <p className="flex-1 text-[12px] leading-relaxed text-neutral-500">
          {isSr ? cat.descSr : cat.descEn}
        </p>
        <div className="border-t border-neutral-100 pt-3">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-neutral-400">{brandsLabel}</p>
          <div className="flex flex-wrap gap-1.5">
            {cat.brands.map((b) => (
              <span key={b} className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-600">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

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
                  alt={isSr ? active.nameSr : active.nameEn}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover"
                />
                {/* gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-[24px] font-black tracking-tight text-white drop-shadow-lg md:text-[28px]">
                    {isSr ? active.nameSr : active.nameEn}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Orange accent */}
                <div className="mb-4 h-[2px] w-10 rounded-full bg-gradient-to-r from-orange-500 to-red-600" />

                <p className="text-[14px] leading-relaxed text-neutral-600">
                  {isSr ? active.descSr : active.descEn}
                </p>

                {/* Brands */}
                <div className="mt-6 border-t border-neutral-100 pt-5">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-neutral-400">{brandsLabel}</p>
                  <div className="flex flex-wrap gap-2">
                    {active.brands.map((b) => (
                      <span key={b} className="rounded-full bg-neutral-100 px-3 py-1.5 text-[12px] font-semibold text-neutral-700">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-3">
                  <Link
                    href={`/${lang}/kontakt`}
                    onClick={() => setActive(null)}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-[13px] font-bold text-white transition-opacity hover:opacity-90"
                  >
                    {isSr ? 'Kontaktirajte nas' : 'Contact us'}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    className="rounded-full border border-neutral-200 px-6 py-3 text-[13px] font-semibold text-neutral-600 transition-colors hover:bg-neutral-50"
                  >
                    {isSr ? 'Zatvori' : 'Close'}
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
      {/* ── MATERIJAL ZA GREJANJE ── */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <Container>
          <div className="mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-orange-500">{heatingLabel}</span>
            <h2 className="mt-2 text-[32px] font-black uppercase tracking-tight text-neutral-900 sm:text-[40px]">{heatingTitle}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {HEATING.map((cat) => renderCard(cat))}
          </div>
        </Container>
      </section>

      {/* ── VODOVODNI MATERIJAL ── */}
      <section className="bg-white py-20">
        <Container>
          <div className="mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-orange-500">{plumbingLabel}</span>
            <h2 className="mt-2 text-[32px] font-black uppercase tracking-tight text-neutral-900 sm:text-[40px]">{plumbingTitle}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {PLUMBING.map((cat) => renderCard(cat, true))}
          </div>
        </Container>
      </section>

      {/* Portal */}
      {mounted && createPortal(modal, document.body)}
    </>
  );
}
