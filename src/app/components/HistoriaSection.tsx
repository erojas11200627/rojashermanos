'use client';

import React, { useEffect, useRef } from 'react';

interface Milestone {
  period: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const milestones: Milestone[] = [
  {
    period: 'Finales de los años 50',
    title: 'El origen: un taller en la Séptima',
    description: 'Humberto Rojas Rodríguez, tras trabajar varios años en Nueva York en General Electric junto a su hermano, regresa a Bogotá e inicia un pequeño taller de reparación de neveras en la Carrera Séptima, motivado por la necesidad económica, el espíritu familiar y el deseo de independencia.',
  },
  {
    period: 'Década de 1960',
    title: 'El primer gran negocio: 800 neveras defectuosas',
    description: 'Adquiere dos lotes de neveras defectuosas (aprox. 800 unidades) a la empresa ICASA. Tras estudiar el problema, descubre que se resolvía agregando mayor aislamiento térmico del que traían de fábrica. Las repara y vende con un margen importante, capitalizando el crecimiento del negocio.',
  },
  {
    period: '1968',
    title: 'Formalización oficial',
    description: 'Registro oficial en la Cámara de Comercio de Bogotá bajo el nombre Rojas Hermanos Ltda. Nace formalmente una empresa que ya tenía una década de historia.',
    highlight: true,
  },
  {
    period: 'Década de 1970',
    title: 'Industrialización: fabricación local',
    description: 'Inicio de la industrialización — fabricación local de plantas de hielo, cuartos fríos, enfriadores de agua e intercambiadores, respondiendo al contexto proteccionista que limitaba las importaciones.',
  },
  {
    period: 'Década de 1980',
    title: 'Producción en serie',
    description: 'Construcción de equipos y maquinaria propios para producir en serie paneles de poliuretano, evaporadores y unidades condensadoras, consolidando una línea industrial en Colombia.',
  },
  {
    period: 'Década de 1990',
    title: 'Línea retail e importación',
    description: 'Creación de la línea retail, representando marcas internacionales e importando productos de refrigeración — actividad que continúa vigente hoy.',
  },
  {
    period: 'Actualidad',
    title: 'Referente nacional consolidado',
    description: 'Compañía mediana consolidada como referente nacional del sector, con sede principal en Bogotá y sucursales en Cali, Barranquilla y Medellín. Combina fabricación propia, importación y comercialización, con proyectos en los sectores alimenticio, logístico, farmacéutico y agroindustrial. Transformación legal: de Ltda. (1968) a S.A. (2004) a S.A.S. (2021).',
    highlight: true,
  },
];

function TimelineItem({ milestone, index }: { milestone: Milestone; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Period label */}
      <div className="md:col-span-3 flex md:flex-col md:items-end md:text-right pt-1 gap-3 md:gap-0">
        <span className={`text-xs font-bold uppercase tracking-widest ${milestone.highlight ? 'text-primary' : 'text-muted-foreground'}`}>
          {milestone.period}
        </span>
      </div>

      {/* Connector */}
      <div className="hidden md:flex md:col-span-1 flex-col items-center">
        <div className={`w-3 h-3 rounded-full mt-1 shrink-0 border-2 ${milestone.highlight ? 'bg-primary border-primary' : 'bg-card border-border'} group-hover:border-primary transition-colors`} />
        <div className="flex-1 w-px bg-border mt-2" />
      </div>

      {/* Content */}
      <div className="md:col-span-8 pb-10 md:pb-12">
        {/* Mobile dot */}
        <div className="flex items-center gap-3 mb-3 md:hidden">
          <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${milestone.highlight ? 'bg-primary' : 'bg-muted-foreground'}`} />
          <div className="h-px flex-1 bg-border" />
        </div>
        <h3 className={`text-lg md:text-xl font-bold mb-2 ${milestone.highlight ? 'text-foreground' : 'text-foreground/85'}`}>
          {milestone.title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {milestone.description}
        </p>
      </div>
    </div>
  );
}

export default function HistoriaSection() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="empresa" className="bg-background border-t border-border py-20 md:py-28 relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-8 left-6 md:left-12 z-0 opacity-[0.03] font-extrabold text-[8rem] md:text-[12rem] leading-none text-foreground pointer-events-none select-none">
        1968
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div ref={headingRef} className="reveal mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Nuestra Historia</span>
          <h2 className="text-section-xl font-extrabold text-foreground">
            Más de seis décadas<br />
            <span className="text-muted-foreground font-light">de ingeniería.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl leading-relaxed">
            Desde un taller en la Carrera Séptima hasta convertirse en referente nacional de la cadena de frío industrial.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {milestones.map((milestone, index) => (
            <TimelineItem key={milestone.period} milestone={milestone} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}