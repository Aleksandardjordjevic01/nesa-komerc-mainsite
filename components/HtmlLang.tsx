'use client';

import { useEffect } from 'react';
import type { Locale } from '@/lib/i18n/translations';

/** Syncs <html lang> with the active locale (root layout renders a static default). */
export default function HtmlLang({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
