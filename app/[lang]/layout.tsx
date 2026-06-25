import NavbarV2 from '@/components/NavbarV2';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import HtmlLang from '@/components/HtmlLang';
import JsonLd from '@/components/JsonLd';
import { locales, type Locale } from '@/lib/i18n/translations';
import { organizationSchema, localBusinessSchema, websiteSchema } from '@/lib/seo';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Locale };

  return (
    <>
      <HtmlLang lang={lang} />
      <JsonLd data={[organizationSchema(), localBusinessSchema(), websiteSchema(lang)]} />
      <NavbarV2 lang={lang} />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer lang={lang} />
      <BackToTop />
    </>
  );
}
