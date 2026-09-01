import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import HistoriaSection from './components/HistoriaSection';
import MisionSection from './components/MisionSection';
import ProductosSection from './components/ProductosSection';
import IndustriasSection from './components/IndustriasSection';
import DiferenciadoresSection from './components/DiferenciadoresSection';
import ContactoSection from './components/ContactoSection';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <HeroSection />
      <HistoriaSection />
      <MisionSection />
      <ProductosSection />
      <IndustriasSection />
      <DiferenciadoresSection />
      <ContactoSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}