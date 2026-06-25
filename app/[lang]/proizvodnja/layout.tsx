import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n/translations';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale };
  return buildMetadata(lang, 'proizvodnja');
}

export default function ProizvodnjaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
