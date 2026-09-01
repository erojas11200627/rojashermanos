'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Industry {
  title: string;
  description: string;
  icon: string;
  applications: string[];
}

const industries: Industry[] = [
  {
    title: 'Agroindustria',
    description: 'Soluciones de cadena de frío para el sector agroindustrial, incluyendo cultivos de flores, frutas y productos agrícolas que requieren temperatura controlada.',
    icon: 'BuildingStorefrontIcon',
    applications: ['Cultivos de flores', 'Postcosecha', 'Almacenamiento agrícola'],
  },
  {
    title: 'Alimentos, Retail y Hospitalidad',
    description: 'Sistemas de refrigeración para procesadoras de alimentos, supermercados, cadenas de restaurantes y hoteles.',
    icon: 'ShoppingBagIcon',
    applications: ['Plantas de proceso', 'Supermercados', 'Cadenas de restaurantes'],
  },
  {
    title: 'Salud y Farmacéutica',
    description: 'Conservación especializada de medicamentos, vacunas y biológicos con control estricto de temperatura y trazabilidad.',
    icon: 'BeakerIcon',
    applications: ['Laboratorios', 'Distribución farmacéutica', 'Hospitales'],
  },
  {
    title: 'Industria y Comercio',
    description: 'Logística de frío para bodegas, centros de distribución y operaciones industriales de gran escala.',
    icon: 'BuildingOffice2Icon',
    applications: ['Centros de distribución', 'Bodegas logísticas', 'Industria química'],
  },
];

function RevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in-view'); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="reveal" style={{ animationDelay: `${delay}s` }}>{children}</div>;
}

export default function IndustriasSection() {
  return (
    <section id="industrias" className="bg-[#f8f8f8] text-[#111111] py-20 md:py-28 border-t border-[#e5e5e5] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <RevealCard>
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Sectores que Atendemos</span>
            <h2 className="text-section-xl font-extrabold text-[#111111]">
              Industrias donde<br />
              <span className="text-[#525252] font-light">operamos.</span>
            </h2>
          </div>
        </RevealCard>

        {/* Industries Grid — 4 cards 2x2
          Row 1: [col-1: Agroindustria] [col-2: Alimentos]
          Row 2: [col-1: Salud] [col-2: Industria y comercio]
          Placed 4/4 ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* col-1 row-1: Agroindustria */}
          <RevealCard delay={0.05}>
            <IndustryCard industry={industries[0]} />
          </RevealCard>
          {/* col-2 row-1: Alimentos */}
          <RevealCard delay={0.1}>
            <IndustryCard industry={industries[1]} />
          </RevealCard>
          {/* col-1 row-2: Salud */}
          <RevealCard delay={0.15}>
            <IndustryCard industry={industries[2]} />
          </RevealCard>
          {/* col-2 row-2: Industria y comercio */}
          <RevealCard delay={0.2}>
            <IndustryCard industry={industries[3]} />
          </RevealCard>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="group bg-white rounded-2xl p-8 border border-[#e5e5e5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-start gap-5 mb-5">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
          <Icon name={industry.icon as Parameters<typeof Icon>[0]['name']} size={28} className="text-primary group-hover:text-white transition-colors" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#111111] mb-1">{industry.title}</h3>
          <p className="text-sm text-[#525252] leading-relaxed">{industry.description}</p>
        </div>
      </div>
      <div className="mt-auto pt-5 border-t border-[#e5e5e5] flex flex-wrap gap-2">
        {industry.applications.map((app) => (
          <span
            key={app}
            className="px-3 py-1 bg-[#f0f0f0] text-[#525252] text-xs font-medium rounded-full"
          >
            {app}
          </span>
        ))}
      </div>
    </div>
  );
}