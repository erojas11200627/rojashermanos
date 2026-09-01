'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Differentiator {
  stat: string;
  unit: string;
  title: string;
  description: string;
  icon: string;
}

const differentiators: Differentiator[] = [
  {
    stat: '+60',
    unit: 'años',
    title: 'Trayectoria comprobada',
    description: 'Más de 60 años de trayectoria empresarial — referente en el sector industrial colombiano.',
    icon: 'ClockIcon',
  },
  {
    stat: '100%',
    unit: 'técnico',
    title: 'Alta especialización técnica',
    description: 'Equipo que combina experiencia con conocimiento técnico en cada proyecto, desde el diseño hasta la puesta en marcha.',
    icon: 'WrenchScrewdriverIcon',
  },
  {
    stat: 'SIG',
    unit: 'certificado',
    title: 'Estructura organizacional sólida',
    description: 'Jerarquía clara, procesos definidos y cumplimiento de su Sistema Integrado de Gestión (SIG).',
    icon: 'DocumentCheckIcon',
  },
  {
    stat: '4',
    unit: 'ciudades',
    title: 'Cobertura nacional',
    description: 'Planta principal en Bogotá y sucursales en Cali, Barranquilla y Medellín para atención en todo el país.',
    icon: 'MapPinIcon',
  },
  {
    stat: 'LATAM',
    unit: 'exportador',
    title: 'Experiencia exportadora',
    description: 'Experiencia exportadora en varios países de América Latina, llevando ingeniería colombiana a la región.',
    icon: 'GlobeAmericasIcon',
  },
  {
    stat: 'ECO',
    unit: 'innovación',
    title: 'Compromiso con la sostenibilidad',
    description: 'Inversión en tecnologías limpias y materiales ecológicos para un futuro más sostenible en la cadena de frío.',
    icon: 'SparklesIcon',
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

export default function DiferenciadoresSection() {
  return (
    <section className="bg-background border-t border-border py-20 md:py-28 relative overflow-hidden">
      {/* Decorative number */}
      <div className="absolute top-8 right-6 md:right-12 z-0 opacity-[0.04] font-extrabold text-[8rem] md:text-[12rem] leading-none text-foreground pointer-events-none select-none tracking-tighter">
        60+
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <RevealCard>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Por Qué Elegirnos</span>
              <h2 className="text-section-xl font-extrabold text-foreground">
                El diferencial<br />
                <span className="text-muted-foreground font-light">es el valor.</span>
              </h2>
            </div>
            <p className="text-base text-muted-foreground max-w-md leading-relaxed border-l border-border pl-6">
              Nuestra política de precios se basa en valor y calidad — el diferencial es el servicio personalizado y el soporte técnico especializado.
            </p>
          </div>
        </RevealCard>

        {/* Differentiators Grid — 6 cards 3x2
          Row 1: [col-1: +60 años] [col-2: Especialización] [col-3: SIG]
          Row 2: [col-1: 4 ciudades] [col-2: LATAM] [col-3: ECO]
          Placed 6/6 ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* col-1 row-1 */}
          <RevealCard delay={0.05}>
            <DiffCard item={differentiators[0]} />
          </RevealCard>
          {/* col-2 row-1 */}
          <RevealCard delay={0.1}>
            <DiffCard item={differentiators[1]} />
          </RevealCard>
          {/* col-3 row-1 */}
          <RevealCard delay={0.15}>
            <DiffCard item={differentiators[2]} />
          </RevealCard>
          {/* col-1 row-2 */}
          <RevealCard delay={0.2}>
            <DiffCard item={differentiators[3]} />
          </RevealCard>
          {/* col-2 row-2 */}
          <RevealCard delay={0.25}>
            <DiffCard item={differentiators[4]} />
          </RevealCard>
          {/* col-3 row-2 */}
          <RevealCard delay={0.3}>
            <DiffCard item={differentiators[5]} />
          </RevealCard>
        </div>
      </div>
    </section>
  );
}

function DiffCard({ item }: { item: Differentiator }) {
  return (
    <div className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-start justify-between mb-5">
        <div>
          <span className="text-4xl font-extrabold text-primary leading-none">{item.stat}</span>
          <span className="text-sm text-muted-foreground ml-1">{item.unit}</span>
        </div>
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-primary" />
        </div>
      </div>
      <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
    </div>
  );
}