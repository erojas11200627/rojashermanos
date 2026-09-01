'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

type TabKey = 'kraf' | 'kmaster' | 'klima';

interface Product {
  name: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

const tabs: {key: TabKey;label: string;tagline: string;}[] = [
{ key: 'kraf', label: 'Kraf', tagline: 'Fabricación propia — maquinaria y complementos industriales' },
{ key: 'kmaster', label: 'Kmaster', tagline: 'Proyectos y soluciones integrales — diseño e instalación llave en mano' },
{ key: 'klima', label: 'Klima Zone', tagline: 'Coordinación comercial propia dentro del portafolio' }];


const products: Record<TabKey, Product[]> = {
  kraf: [
  {
    name: 'Evaporadores',
    description: 'Componente esencial de los sistemas de refrigeración industrial y comercial dentro de la cadena de frío.',
    image: '/assets/images/evapblastfreezer-1788298196459.jpg',
    imageAlt: 'Evaporador industrial de gran formato con cuatro ventiladores axiales negros sobre estructura metálica negra, fondo blanco'
  },
  {
    name: 'Evap Blast Freezers',
    description: 'Equipo especializado diseñado para congelar productos en el menor tiempo posible.',
    image: '/assets/images/evapblastfreezer-1788298196459.jpg',
    imageAlt: 'Blast freezer industrial blanco con ventiladores axiales para congelación rápida, fondo blanco de estudio'
  },
  {
    name: 'Condensadoras remotas',
    description: 'Eliminan el calor del gas refrigerante proveniente del compresor.',
    image: '/assets/images/unidadcondensadorashowroom-1788298194407.jpg',
    imageAlt: 'Unidad condensadora industrial en paleta de madera, dos ventiladores axiales negros, receptor azul y compresor scroll negro con tuberías de cobre'
  },
  {
    name: 'Racks',
    description: 'Comprimen el gas refrigerante y distribuyen la potencia de enfriamiento, garantizando funcionamiento eficiente y estable de todo el sistema.',
    image: '/assets/images/unidadcondensadoracompresor-1788298204043.jpg',
    imageAlt: 'Unidad condensadora industrial pesada en bastidor metálico con dos ventiladores axiales, compresor Bitzer azul y tuberías de cobre'
  },
  {
    name: 'Unidades condensadoras',
    description: 'Enfriador de agua usado particularmente en cultivos de flores y procesos que requieren agua fría.',
    image: '/assets/images/unidadcondensadorashowroom-1788298194407.jpg',
    imageAlt: 'Unidad condensadora compacta para showroom con estructura gris y componentes de refrigeración visibles, fondo blanco'
  },
  {
    name: 'Chillers',
    description: 'Eliminan el calor del refrigerante y lo transforman en líquido, permitiendo que el ciclo de enfriamiento continúe eficientemente.',
    image: '/assets/images/chiller15hp-1788298200169.jpg',
    imageAlt: 'Chiller de 15 HP enfriado por aire con dos ventiladores de descarga superior, serpentín condensador aleteado, bomba Wilo verde y intercambiador de placas azul'
  },
  {
    name: 'Paneles y puertas frigoríficas',
    description: 'Paneles de aislamiento, puertas frigoríficas y de servicio, compresores y accesorios para sistemas de refrigeración.'
  }],

  kmaster: [
  {
    name: 'Cuartos fríos',
    description: 'Diseño e instalación completa de cuartos fríos para almacenamiento de productos perecederos.',
    image: 'https://static.wixstatic.com/media/2e9161_06373bf3288a48a9902cc74ab29f41e8~mv2_d_3008_2000_s_2.jpg',
    imageAlt: 'Interior de cuarto frío industrial con tuberías de cobre y equipos de refrigeración instalados, paredes de acero inoxidable'
  },
  {
    name: 'Túneles de abatimiento',
    description: 'Sistemas para reducir rápidamente la temperatura de productos alimenticios recién procesados.',
    image: 'https://static.wixstatic.com/media/2e9161_2f1540377d9649c2aa17db8462b24025~mv2_d_3008_2000_s_2.jpg',
    imageAlt: 'Instalación industrial de refrigeración con tuberías y equipos técnicos en planta de proceso'
  },
  {
    name: 'Walk-in & Reach-in Coolers',
    description: 'Cámaras de enfriamiento de distintas dimensiones para aplicaciones comerciales e industriales.',
    image: 'https://static.wixstatic.com/media/2e9161_7ed9c8947eea4f6387e74ba2860d49b1~mv2_d_3500_2233_s_2.jpg',
    imageAlt: 'Equipo de refrigeración industrial instalado en planta, vista de tuberías y unidades de condensación'
  },
  {
    name: 'Naves industriales y precámaras',
    description: 'Plantas de proceso, precámaras y naves de gran escala para operaciones logísticas y alimentarias.',
    image: 'https://static.wixstatic.com/media/2e9161_06c63def96e144f7b09355a999b5c110~mv2_d_3008_2000_s_2.jpg',
    imageAlt: 'Nave industrial de refrigeración con equipos de gran escala, tuberías y estructura metálica'
  },
  {
    name: 'Cavas preensambladas',
    description: 'Soluciones modulares prefabricadas para instalación rápida en diferentes entornos.'
  },
  {
    name: 'Sistemas de maduración y secado',
    description: 'Cubiertas, revestimientos y sistemas especializados para control de temperatura y humedad en procesos de maduración.'
  }],

  klima: [
  {
    name: 'Klima Zone — Línea comercial',
    description: 'Klima Zone es la línea de coordinación comercial propia de Rojas Hermanos, parte integral del portafolio de soluciones para la cadena de frío. Consulte disponibilidad y condiciones comerciales directamente con nuestro equipo.'
  },
  {
    name: 'Comercialización multimarca',
    description: 'Representación, distribución y comercialización de repuestos, partes y componentes internacionales para maquinaria frigorífica.'
  },
  {
    name: 'Servicios técnicos',
    description: 'Asesoría, mantenimiento y soporte especializado postventa para todos los equipos y sistemas de la cadena de frío.'
  }]

};

function RevealEl({ children, delay = 0 }: {children: React.ReactNode;delay?: number;}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) {el.classList.add('in-view');observer.unobserve(el);}},
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="reveal" style={{ animationDelay: `${delay}s` }}>{children}</div>;
}

export default function ProductosSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('kraf');

  return (
    <section id="productos" className="bg-background border-t border-border py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none grid-lines-overlay" />
      

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <RevealEl>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Portafolio de Productos</span>
              <h2 className="text-section-xl font-extrabold text-foreground">
                Un one-stop<br />
                <span className="text-muted-foreground font-light">para la cadena de frío.</span>
              </h2>
            </div>
            <p className="text-base text-muted-foreground max-w-md leading-relaxed">
              Fabricación propia, proyectos llave en mano y comercialización de marcas internacionales — todo bajo un mismo techo.
            </p>
          </div>
        </RevealEl>

        {/* Tabs */}
        <RevealEl delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10 border-b border-border pb-4">
            {tabs.map((tab) =>
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === tab.key ?
              'bg-primary text-primary-foreground shadow-lg' :
              'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'}`
              }>
              
                {tab.label}
              </button>
            )}
          </div>
        </RevealEl>

        {/* Tab tagline */}
        <RevealEl delay={0.15}>
          <p className="text-sm text-muted-foreground mb-10 italic">
            {tabs.find((t) => t.key === activeTab)?.tagline}
          </p>
        </RevealEl>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products[activeTab].map((product, i) =>
          <RevealEl key={product.name} delay={i * 0.07}>
              <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                {product.image ?
              <div className="relative h-52 overflow-hidden bg-white">
                    <AppImage
                  src={product.image}
                  alt={product.imageAlt || product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                
                  </div> :

              <div className="h-52 bg-muted flex items-center justify-center">
                    <span className="text-4xl">❄</span>
                  </div>
              }
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{product.description}</p>
                  <div className="mt-5 pt-4 border-t border-border">
                    <a
                    href="#contacto"
                    className="text-xs font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    
                      Solicitar información
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </RevealEl>
          )}
        </div>
      </div>
    </section>);

}