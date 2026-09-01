'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Value {
  title: string;
  description: string;
  icon: string;
}

const valores: Value[] = [
  {
    title: 'Responsabilidad',
    description: 'Planeamos y controlamos el desarrollo de proyectos garantizando entrega oportuna y satisfacción integral del cliente.',
    icon: 'ShieldCheckIcon',
  },
  {
    title: 'Innovación',
    description: 'Introducción de aspectos nuevos en la empresa y los servicios para contribuir al logro de los objetivos.',
    icon: 'LightBulbIcon',
  },
  {
    title: 'Transparencia',
    description: 'Actuamos con claridad, lealtad, integridad y ética en las negociaciones.',
    icon: 'EyeIcon',
  },
  {
    title: 'Honestidad',
    description: 'Decir la verdad, ser razonables, íntegros, justos y honrados, acorde a normas y reglamentos.',
    icon: 'HandRaisedIcon',
  },
  {
    title: 'Orientación al servicio',
    description: 'Equipo comprometido, atento, cordial y servicial con el cliente interno y externo.',
    icon: 'UserGroupIcon',
  },
  {
    title: 'Respeto',
    description: 'Base de las relaciones de convivencia, confianza y comunicación en la organización.',
    icon: 'HeartIcon',
  },
  {
    title: 'Trabajo en equipo',
    description: '"Los resultados son producto del trabajo de todos."',
    icon: 'UsersIcon',
  },
];

function RevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export default function MisionSection() {
  return (
    <section className="bg-[#f8f8f8] text-[#111111] py-20 md:py-28 relative overflow-hidden border-t border-[#e5e5e5]">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Misión + Visión */}
        <RevealCard>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
            {/* Misión */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name="RocketLaunchIcon" size={20} className="text-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Misión</span>
              </div>
              <p className="text-base text-[#333333] leading-relaxed">
                En Rojas Hermanos la misión es ofrecer al mercado soluciones integrales para la cadena de frío. Rojas Hermanos es una compañía innovadora que está comprometida con el método y la utilización de la mejora continua como herramienta de evolución constante, aplicando su ADN pionero en el desarrollo de procesos y soluciones competitivas y aportantes a la sociedad.
              </p>
            </div>
            {/* Visión */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name="GlobeAmericasIcon" size={20} className="text-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Visión</span>
              </div>
              <p className="text-base text-[#333333] leading-relaxed">
                Ser reconocidos como un grupo empresarial de talla mundial, líder en soluciones integrales e innovadoras para el mercado nacional e internacional, en beneficio de sus clientes, colaboradores y proveedores.
              </p>
            </div>
          </div>
        </RevealCard>

        {/* Valores Header */}
        <RevealCard delay={0.1}>
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Valores corporativos</span>
            <h2 className="text-section-xl font-extrabold text-[#111111]">
              Los principios que<br />
              <span className="text-[#525252] font-light">nos guían.</span>
            </h2>
          </div>
        </RevealCard>

        {/* Values Grid — 7 cards: 3+3+1(full) */}
        {/* BENTO MAP:
          Row 1: [col-1: Responsabilidad] [col-2: Innovación] [col-3: Transparencia]
          Row 2: [col-1: Honestidad] [col-2: Orientación al servicio] [col-3: Respeto]
          Row 3: [col-1-3: Trabajo en equipo — col-span-full]
          Placed 7/7 ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {valores.slice(0, 6).map((val, i) => (
            <RevealCard key={val.title} delay={i * 0.07}>
              {/* card index comment for bento audit */}
              <div className="group bg-white rounded-2xl p-7 border border-[#e5e5e5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#f0f0f0] flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon name={val.icon as Parameters<typeof Icon>[0]['name']} size={24} className="text-[#525252] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2">{val.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed">{val.description}</p>
              </div>
            </RevealCard>
          ))}
          {/* Trabajo en equipo — full width */}
          <RevealCard delay={0.42}>
            {/* col-span-full card */}
            <div className="group bg-primary text-primary-foreground rounded-2xl p-7 border border-primary shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 lg:col-span-3 flex flex-col md:flex-row md:items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Icon name="UsersIcon" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">{valores[6].title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{valores[6].description}</p>
              </div>
            </div>
          </RevealCard>
        </div>
      </div>
    </section>
  );
}