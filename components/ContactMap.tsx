'use client';

import { useEffect, useRef } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';

// Coordinates: Stevana Sinđelića 309, 35210 Svilajnac
const LNG = 21.20521028650718;
const LAT = 44.25864101138538;
const ZOOM = 15;

export default function ContactMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let destroyed = false;
    let mapInstance: import('maplibre-gl').Map | null = null;
    let markerInstance: import('maplibre-gl').Marker | null = null;

    async function init() {
      const maplibre = await import('maplibre-gl');
      if (destroyed || !containerRef.current) return;

      const map = new maplibre.Map({
        container: containerRef.current,
        style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
        center: [LNG, LAT],
        zoom: ZOOM,
        scrollZoom: true,
        attributionControl: false,
      });

      mapInstance = map;

      // Custom marker element - orange gradient box with white logo
      const el = document.createElement('div');
      el.style.cssText = `
        width:48px;height:48px;
        background:linear-gradient(135deg,#f97316,#dc2626);
        border-radius:12px;
        box-shadow:0 8px 24px rgba(220,38,38,0.35),0 2px 8px rgba(0,0,0,0.15);
        display:flex;align-items:center;justify-content:center;
        overflow:hidden;
        cursor:pointer;
      `;
      const img = document.createElement('img');
      img.src = '/logo-clean.png';
      img.alt = 'Neša Komerc';
      img.style.cssText = 'display:block;width:34px;height:34px;object-fit:contain;filter:brightness(0) invert(1);';
      el.appendChild(img);

      const marker = new maplibre.Marker({ element: el, anchor: 'center' })
        .setLngLat([LNG, LAT])
        .addTo(map);

      markerInstance = marker;
    }

    init();

    return () => {
      destroyed = true;
      markerInstance?.remove();
      mapInstance?.remove();
      mapInstance = null;
      markerInstance = null;
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full" />;
}
