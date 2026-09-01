'use client';

import React, { useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-end pb-16 md:pb-24">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1f6f2f059-1765225887102.png"
          alt="Interior de cuarto frío industrial con tuberías de cobre y equipos de refrigeración, iluminación tenue y paredes de acero inoxidable"
          fill
          priority
          className={`object-cover transition-all duration-[3200ms] ${loaded ? 'scale-100 blur-0 opacity-100' : 'scale-110 blur-md opacity-0'}`}
          sizes="100vw" />
        
        {/* Dark scrim — ensures white text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Grid lines overlay */}
      <div className="absolute inset-0 z-[1] grid-lines-overlay opacity-100 pointer-events-none" />

      {/* Live badge */}
      <div
        className={`absolute top-24 right-6 md:right-12 z-20 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '2.2s' }}>
        
        <div className="px-4 py-2 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
          <span className="text-xs font-mono tracking-wider uppercase text-white/90">Bogotá, Colombia · Desde 1968</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">

        {/* Left: Main Headline */}
        <div className="md:col-span-7">
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '1.0s' }}>
            
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-white/70">Ingeniería de Refrigeración Industrial</span>
          </div>

          <h1
            className={`text-hero font-extrabold text-white leading-none tracking-tight transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '1.2s' }}>
            
            <span className="block">Soluciones</span>
            <span className="block text-primary">integrales</span>
            <span className="block">en refrigeración</span>
            <span className="block text-white/60 font-light">industrial.</span>
          </h1>
        </div>

        {/* Right: Glass Card */}
        <div
          className={`md:col-span-5 md:col-start-8 flex flex-col justify-end transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '1.6s' }}>
          
          <div className="relative overflow-hidden bg-black/60 backdrop-blur-2xl border border-white/10 p-7 rounded-2xl shadow-2xl">
            {/* Shimmer */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none animate-shimmer" />

            <div className="relative z-10">
              <p className="text-base md:text-lg text-white/85 font-light leading-relaxed mb-7">
                Más de 60 años de experiencia diseñando, fabricando e implementando sistemas de cadena de frío eficientes y confiables para Colombia y la región.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-6 mb-7">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-white/40 mb-1">Trayectoria</span>
                  <span className="text-2xl font-extrabold text-white">+60</span>
                  <span className="block text-xs text-white/50">años</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-white/40 mb-1">Cobertura</span>
                  <span className="text-2xl font-extrabold text-white">4</span>
                  <span className="block text-xs text-white/50">ciudades</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-white/40 mb-1">Líneas</span>
                  <span className="text-2xl font-extrabold text-white">3</span>
                  <span className="block text-xs text-white/50">de marca</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contacto"
                  className="flex-1 py-3 px-5 text-sm font-bold text-center bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl transition-all duration-300 tracking-wide">
                  
                  Solicitar asesoría
                </a>
                <a
                  href="#productos"
                  className="flex-1 py-3 px-5 text-sm font-bold text-center border border-white/30 text-white hover:border-white hover:bg-white/5 rounded-xl transition-all duration-300 tracking-wide">
                  
                  Ver productos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '2.5s' }}>
        
        <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>);

}