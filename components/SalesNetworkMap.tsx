'use client';

import { useEffect, useRef } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import { CITY_COORDS, PARTNERS } from '@/lib/salesNetworkData';

const ICON_SIZE = 38;
const LOGO_W = 38;   // full width, no left/right padding
const LOGO_H = 30;   // 4px top/bottom padding
const RADIUS = 10;

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function makeWhiteLogo(logo: HTMLImageElement, w: number, h: number): HTMLCanvasElement {
  const off = document.createElement('canvas');
  off.width = w;
  off.height = h;
  const octx = off.getContext('2d')!;
  octx.drawImage(logo, 0, 0, w, h);
  const data = octx.getImageData(0, 0, w, h);
  for (let i = 0; i < data.data.length; i += 4) {
    if (data.data[i + 3] > 10) {
      data.data[i] = 255;
      data.data[i + 1] = 255;
      data.data[i + 2] = 255;
    }
  }
  octx.putImageData(data, 0, 0);
  return off;
}

function buildMarkerCanvas(logo: HTMLImageElement): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = ICON_SIZE * 2;
  canvas.height = ICON_SIZE * 2;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(2, 2);

  // Drop shadow
  ctx.shadowColor = 'rgba(0,0,0,0.28)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 3;

  // Orange/red gradient background
  roundRect(ctx, 0, 0, ICON_SIZE, ICON_SIZE, RADIUS);
  const grad = ctx.createLinearGradient(0, 0, ICON_SIZE, ICON_SIZE);
  grad.addColorStop(0, '#f97316');
  grad.addColorStop(1, '#dc2626');
  ctx.fillStyle = grad;
  ctx.fill();

  // Reset shadow
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  // Draw white logo - no left/right padding, 4px top/bottom
  const whiteLogo = makeWhiteLogo(logo, LOGO_W * 2, LOGO_H * 2);
  const offX = 0;
  const offY = (ICON_SIZE - LOGO_H) / 2;
  ctx.drawImage(whiteLogo, 0, 0, LOGO_W * 2, LOGO_H * 2, offX, offY, LOGO_W, LOGO_H);

  return canvas;
}

export default function SalesNetworkMap({ onCityClick }: { onCityClick?: (city: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onCityClickRef = useRef(onCityClick);
  onCityClickRef.current = onCityClick;

  useEffect(() => {
    if (!containerRef.current) return;

    let destroyed = false;
    let mapInstance: import('maplibre-gl').Map | null = null;

    async function init() {
      const ml = await import('maplibre-gl');
      if (destroyed || !containerRef.current) return;

      const map = new ml.Map({
        container: containerRef.current,
        style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
        center: [20.9, 44.1],
        zoom: 6.8,
        minZoom: 5.5,
        maxZoom: 12,
        maxBounds: [[13, 38], [30, 50]],
        scrollZoom: true,
        attributionControl: false,
      });

      mapInstance = map;

      map.on('load', () => {
        if (destroyed) return;

        const logo = new Image();
        logo.onload = () => {
          if (destroyed) return;

          // Register the canvas image as a MapLibre sprite
          const canvas = buildMarkerCanvas(logo);
          const imageData = canvas.getContext('2d')!.getImageData(0, 0, canvas.width, canvas.height);
          map.addImage('partner-pin', imageData, { pixelRatio: 2 });

          // Build GeoJSON points for every city that has at least one partner
          const features = Object.entries(CITY_COORDS)
            .filter(([city]) => PARTNERS.some(p => p.cities.includes(city)))
            .map(([city, [lng, lat]]) => ({
              type: 'Feature' as const,
              geometry: { type: 'Point' as const, coordinates: [lng, lat] },
              properties: { city },
            }));

          map.addSource('partners', {
            type: 'geojson',
            data: { type: 'FeatureCollection', features },
          });

          // Symbol layer - rendered on the WebGL canvas, never drifts
          map.addLayer({
            id: 'partner-pins',
            type: 'symbol',
            source: 'partners',
            layout: {
              'icon-image': 'partner-pin',
              'icon-size': 1,
              'icon-anchor': 'bottom',
              'icon-offset': [0, -14],
              'icon-allow-overlap': true,
              'icon-ignore-placement': true,
            },
          });

          // Click on marker → filter partners
          map.on('click', 'partner-pins', (e) => {
            const city = e.features?.[0]?.properties?.city as string | undefined;
            if (city) onCityClickRef.current?.(city);
          });

          // Pointer cursor on hover
          map.on('mouseenter', 'partner-pins', () => {
            map.getCanvas().style.cursor = 'pointer';
          });
          map.on('mouseleave', 'partner-pins', () => {
            map.getCanvas().style.cursor = '';
          });
        };
        logo.src = '/logo-clean.png';
      });
    }

    init();

    return () => {
      destroyed = true;
      mapInstance?.remove();
      mapInstance = null;
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full" />;
}
