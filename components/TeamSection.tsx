import Image from 'next/image';
import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';
import Container from '@/components/Container';

export default function TeamSection({ lang }: { lang: Locale }) {
  const t = (translations[lang] ?? translations['sr']).aboutPage.team;

  return (
    <section className="bg-neutral-50 py-24">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <span className="inline-block rounded-full bg-linear-to-r from-orange-500 to-red-600 px-4 py-1.5 text-[12px] font-semibold text-white">
            {t.badge}
          </span>
          <h2 className="mt-6 text-[38px] font-extrabold leading-tight tracking-[-0.03em] text-neutral-900 md:text-[46px]">
            {t.title}
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-neutral-500">{t.subtitle}</p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.members.map((member, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-orange-100"
            >
              {/* Orange accent bar */}
              <div className="h-[3px] w-full bg-linear-to-r from-orange-500 to-red-600" />

              {/* Photo */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={(member as any).photo}
                  alt={member.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-white/30 to-transparent" />
              </div>

              {/* Info */}
              <div className="px-6 py-5">
                <p className="text-[15px] font-bold leading-tight text-neutral-900">{member.name}</p>
                <p className="mt-1 text-[12px] font-semibold bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent leading-snug">
                  {member.role}
                </p>

                <div className="mt-4 space-y-2 border-t border-neutral-100 pt-4">
                  <a
                    href={`mailto:${(member as any).email}`}
                    className="flex items-center gap-2.5 text-[12px] text-neutral-400 transition-colors hover:text-orange-500"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-50 ring-1 ring-neutral-100 transition-colors group-hover:bg-orange-50 group-hover:ring-orange-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                        <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                        <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                      </svg>
                    </span>
                    <span className="truncate">{(member as any).email}</span>
                  </a>
                  <a
                    href={`tel:${(member as any).phone}`}
                    className="flex items-center gap-2.5 text-[12px] text-neutral-400 transition-colors hover:text-orange-500"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-50 ring-1 ring-neutral-100 transition-colors group-hover:bg-orange-50 group-hover:ring-orange-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{(member as any).phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
