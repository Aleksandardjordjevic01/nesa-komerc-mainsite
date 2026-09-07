import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Neša Komerc',
    short_name: 'Neša Komerc',
    description:
      'Proizvodnja cevastih radijatora i oprema za grejanje i vodovod - Neša Komerc, Svilajnac.',
    start_url: '/sr',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ea580c',
    icons: [
      { src: '/favicon.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
