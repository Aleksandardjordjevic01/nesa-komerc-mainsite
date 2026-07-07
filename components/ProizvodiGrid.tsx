import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/translations';
import { TAG_COLORS, TAG_FALLBACK } from '@/lib/product-specs';

/* ── Types ── */
interface Product {
  id: string;
  name: string;
  tag: string;
  description: string;
  image: string;
  href: string;
}

/* ── Props ── */
interface Props {
  lang: Locale;
  products: Product[];
  cta: string;
  sectionLabel: string;
  sectionTitle: string;
}

export default function ProizvodiGrid({ lang, products, cta, sectionLabel, sectionTitle }: Props) {
  const isSr = lang === 'sr';
  const isDe = lang === 'de';

  return (
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
            const tagColor = TAG_COLORS[product.tag] ?? TAG_FALLBACK;

            return (
              <Link
                key={product.id}
                href={product.href}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-neutral-200/70 hover:ring-orange-200"
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
                  {product.tag && (
                    <div className="absolute left-4 top-4">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold ring-1 backdrop-blur-sm ${tagColor}`}>
                        {product.tag}
                      </span>
                    </div>
                  )}

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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
