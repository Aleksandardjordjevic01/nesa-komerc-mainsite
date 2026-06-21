import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';
import Container from '@/components/Container';

export default function MissionVision({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).aboutPage.mission;

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-150 w-150 rounded-full bg-orange-600/15 blur-[120px]" />

      <Container className="relative">
        <div className="max-w-4xl">
          <span className="inline-block rounded-full bg-linear-to-r from-orange-500 to-red-600 px-4 py-1.5 text-[12px] font-semibold text-white">
            {t.badge}
          </span>
          <h2 className="mt-6 text-[38px] font-extrabold leading-tight tracking-[-0.03em] text-white md:text-[46px]">
            {t.title}
          </h2>

          {/* Body text */}
          <div className="mt-8 space-y-5">
            <p className="text-[15px] leading-relaxed text-neutral-400">{t.body1}</p>
            <p className="text-[15px] leading-relaxed text-neutral-400">{t.body2}</p>
          </div>

          {/* Guarantee badge */}
          <div className="mt-10 inline-flex items-center gap-5 rounded-2xl border border-orange-500/20 bg-orange-500/5 px-6 py-5 ring-1 ring-inset ring-white/5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-red-600 shadow-lg shadow-orange-500/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-white"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-orange-400">Na svaki proizvod</p>
              <p className="text-[22px] font-extrabold leading-tight tracking-tight text-white">{t.guarantee}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
