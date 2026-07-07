/* ── Shared product presentation data (tags + technical specs) ── */

/* ── Tag color map ── */
export const TAG_COLORS: Record<string, string> = {
  Premium:    'bg-amber-50/90 text-amber-700 ring-amber-200',
  Novo:       'bg-emerald-50/90 text-emerald-700 ring-emerald-200',
  New:        'bg-emerald-50/90 text-emerald-700 ring-emerald-200',
  Neu:        'bg-emerald-50/90 text-emerald-700 ring-emerald-200',
  Bestseller: 'bg-orange-50/90 text-orange-700 ring-orange-200',
  Oprema:     'bg-sky-50/90 text-sky-700 ring-sky-200',
  Accessory:  'bg-sky-50/90 text-sky-700 ring-sky-200',
  Opcija:     'bg-violet-50/90 text-violet-700 ring-violet-200',
  Option:     'bg-violet-50/90 text-violet-700 ring-violet-200',
  Program:    'bg-neutral-100/90 text-neutral-600 ring-neutral-200',
  Programme:  'bg-neutral-100/90 text-neutral-600 ring-neutral-200',
};

export const TAG_FALLBACK = 'bg-neutral-100/90 text-neutral-600 ring-neutral-200';

/* ── Product gallery images (per slug) ──
   Extra photos shown in the product-page gallery + lightbox. The product's
   main image (product.image) is prepended separately, so list only the extras here. */
export const PRODUCT_GALLERIES: Record<string, string[]> = {
  'nk-lux': [
    '/proizvodi/nklux/nklux1.webp',
    '/proizvodi/nklux/nklux2.webp',
    '/proizvodi/nklux/nklux3.webp',
    '/proizvodi/nklux/nklux4.webp',
  ],
  'nk-term': [
    '/proizvodi/nkterm/nkterm1.webp',
    '/proizvodi/nkterm/nkterm2.webp',
    '/proizvodi/nkterm/nkterm3.webp',
    '/proizvodi/nkterm/nkterm4.webp',
  ],
  'nk-standard': [
    '/proizvodi/nkstandard/nkstandard1.webp',
    '/proizvodi/nkstandard/nkstandard2.webp',
    '/proizvodi/nkstandard/nkstandard3.webp',
    '/proizvodi/nkstandard/nkstandard4.webp',
  ],
  'srednji-prikljucak': [
    '/proizvodi/nkprikljucak/nkprikljucak1.webp',
  ],
  'sa-grejacem': [
    '/proizvodi/nkgrejac/grejac1.webp',
    '/proizvodi/nkgrejac/grejac2.webp',
    '/proizvodi/nkgrejac/grejac3.webp',
    '/proizvodi/nkgrejac/grejac4.webp',
  ],
};

/* ── Technical specifications (per product) ── */
export type SpecLang = 'sr' | 'en' | 'de';
export type Col = Record<SpecLang, string>;

export interface SpecGroup {
  key: string;
  label: Col;          // toggle button label
  caption?: Col;       // optional sub-caption (constant values for the group)
}
export interface SpecConfig {
  groups: SpecGroup[];
  attrCols: Col[];             // [0] is the card title attribute; [1..] are detail rows
  data: Record<string, (string | number)[][]>;
}

export const SPEC_TITLE: Record<SpecLang, string> = {
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

export const SPECS: Record<string, SpecConfig> = {
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

/* ── Slugs that get a dedicated product page ──
   Radiators (with spec sheets) + accessories (with a gallery only). */
export const PRODUCT_PAGE_SLUGS: string[] = Array.from(
  new Set([...Object.keys(SPECS), ...Object.keys(PRODUCT_GALLERIES)]),
);
