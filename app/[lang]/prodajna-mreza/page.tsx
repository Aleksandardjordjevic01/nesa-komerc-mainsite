import type { Locale } from '@/lib/i18n/translations';
import { translations } from '@/lib/i18n/translations';
import PageHero from '@/components/PageHero';
import SalesNetworkSection from '@/components/SalesNetworkSection';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale };
  return buildMetadata(lang, 'prodajna-mreza');
}

export default async function SalesNetworkPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Locale };
  const t = (translations[lang] ?? translations['sr']).salesNetworkPage;

  return (
    <>
      <PageHero
        badge={t.hero.badge}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
      />

      <SalesNetworkSection lang={lang} />
    </>
  );
}
