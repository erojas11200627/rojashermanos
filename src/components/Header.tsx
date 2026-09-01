'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Empresa', href: '#empresa' },
  { label: 'Productos', href: '#productos' },
  { label: 'Industrias', href: '#industrias' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="h-10 w-auto">
              <AppImage
                src="/assets/images/2e9161_8b76557fe22d4741bc6f3494215681a0_mv2__3_-1788299047066.png"
                alt="Rojas Hermanos S.A.S. — Ingeniería de Refrigeración Industrial, logo empresarial"
                width={140}
                height={40}
                priority
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors tracking-wide"
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contacto"
              className="px-4 py-2 text-sm font-semibold border border-border text-foreground/80 hover:border-primary hover:text-primary rounded transition-all duration-300 tracking-wide"
            >
              Cotización técnica
            </a>
            <a
              href="#contacto"
              className="px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded transition-all duration-300 tracking-wide"
            >
              Solicitar asesoría
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Sheet */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-72 bg-card border-l border-border flex flex-col pt-20 px-6 pb-8">
            <nav className="flex flex-col gap-1 mb-8">
              {navLinks?.map((link) => (
                <a
                  key={link?.href}
                  href={link?.href}
                  onClick={handleNavClick}
                  className="py-3 px-4 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-all"
                >
                  {link?.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-auto">
              <a
                href="#contacto"
                onClick={handleNavClick}
                className="py-3 px-4 text-sm font-semibold text-center border border-border text-foreground/80 hover:border-primary hover:text-primary rounded-lg transition-all"
              >
                Cotización técnica
              </a>
              <a
                href="#contacto"
                onClick={handleNavClick}
                className="py-3 px-4 text-sm font-semibold text-center bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all"
              >
                Solicitar asesoría
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}