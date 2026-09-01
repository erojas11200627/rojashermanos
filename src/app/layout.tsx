import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import '../styles/tailwind.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Rojas Hermanos S.A.S. — Ingeniería de Refrigeración Industrial',
  description: 'Más de 60 años diseñando, fabricando e implementando soluciones integrales para la cadena de frío industrial en Colombia y América Latina.',
  keywords: ['refrigeración industrial', 'cadena de frío', 'cuartos fríos', 'Bogotá', 'Colombia', 'Kraf', 'Kmaster', 'Klima Zone'],
  openGraph: {
    title: 'Rojas Hermanos S.A.S. — Ingeniería de Refrigeración Industrial',
    description: 'Más de 60 años diseñando, fabricando e implementando soluciones integrales para la cadena de frío industrial en Colombia y América Latina.',
    images: [{ url: '/assets/images/image-1788298187810.png', width: 1200, height: 630 }],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={manrope.variable}>
      <body className={manrope.className}>
        {children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Frojasherma7940back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}