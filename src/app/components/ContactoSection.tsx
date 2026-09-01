'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Icon from '@/components/ui/AppIcon';

const formSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  empresa: z.string().min(2, 'Ingrese el nombre de su empresa'),
  email: z.string().email('Ingrese un email válido'),
  telefono: z.string().min(7, 'Ingrese un teléfono válido'),
  sector: z.string().min(1, 'Seleccione un sector industrial'),
  descripcion: z.string().min(10, 'Describa brevemente su proyecto (mínimo 10 caracteres)'),
});

type FormData = z.infer<typeof formSchema>;

const sectores = [
  { value: 'agroindustria', label: 'Agroindustria' },
  { value: 'alimentos', label: 'Alimentos' },
  { value: 'farmaceutico', label: 'Farmacéutico' },
  { value: 'logistica', label: 'Logística' },
  { value: 'industria', label: 'Industria y comercio' },
];

function RevealEl({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

export default function ContactoSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulated submit
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Form data:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="bg-[#f8f8f8] text-[#111111] py-20 md:py-28 border-t border-[#e5e5e5] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <RevealEl>
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Contáctenos</span>
            <h2 className="text-section-xl font-extrabold text-[#111111]">
              Hablemos de<br />
              <span className="text-[#525252] font-light">su proyecto.</span>
            </h2>
          </div>
        </RevealEl>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Contact Info */}
          <RevealEl delay={0.05}>
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Address */}
              <ContactItem icon="MapPinIcon" label="Dirección">
                Carrera 15 #48-55, Bogotá, Colombia
              </ContactItem>
              <ContactItem icon="PhoneIcon" label="Teléfono">
                <a href="tel:+5716012882011" className="hover:text-primary transition-colors">(601) 288 2011</a>
              </ContactItem>
              <ContactItem icon="EnvelopeIcon" label="Email">
                <a href="mailto:servicioalcliente@rojas-hermanos.com" className="hover:text-primary transition-colors break-all">
                  servicioalcliente@rojas-hermanos.com
                </a>
              </ContactItem>
              <ContactItem icon="DevicePhoneMobileIcon" label="WhatsApp empresarial">
                <a
                  href="https://wa.me/573112016274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +57 311 201 6274
                </a>
              </ContactItem>

              {/* Coverage */}
              <div className="bg-white rounded-2xl p-6 border border-[#e5e5e5] mt-2">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Cobertura nacional</p>
                <div className="flex flex-wrap gap-2">
                  {['Bogotá (sede)', 'Cali', 'Barranquilla', 'Medellín'].map((city) => (
                    <span key={city} className="px-3 py-1.5 bg-[#f0f0f0] text-[#333333] text-xs font-semibold rounded-full">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/573112016274"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-bold text-sm hover:bg-[#1ebe5d] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                Chatear por WhatsApp
              </a>
            </div>
          </RevealEl>

          {/* Form */}
          <RevealEl delay={0.1}>
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#e5e5e5] shadow-sm">
                <h3 className="text-xl font-bold text-[#111111] mb-2">Solicitar cotización técnica</h3>
                <p className="text-sm text-[#525252] mb-8">Complete el formulario y un especialista se pondrá en contacto con usted.</p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Icon name="CheckCircleIcon" size={32} className="text-green-600" variant="solid" />
                    </div>
                    <h4 className="text-lg font-bold text-[#111111] mb-2">¡Solicitud enviada!</h4>
                    <p className="text-sm text-[#525252]">Un especialista de Rojas Hermanos se pondrá en contacto con usted pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Nombre */}
                      <div>
                        <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-[#525252] mb-2">
                          Nombre *
                        </label>
                        <input
                          id="nombre"
                          type="text"
                          {...register('nombre')}
                          placeholder="Su nombre completo"
                          className={`w-full px-4 py-3 rounded-xl border text-[#111111] text-sm bg-[#f8f8f8] placeholder:text-[#a3a3a3] focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${
                            errors.nombre ? 'border-red-400' : 'border-[#e5e5e5] focus:border-primary'
                          }`}
                        />
                        {errors.nombre && <p className="text-xs text-red-500 mt-1">{errors.nombre.message}</p>}
                      </div>
                      {/* Empresa */}
                      <div>
                        <label htmlFor="empresa" className="block text-xs font-bold uppercase tracking-wider text-[#525252] mb-2">
                          Empresa *
                        </label>
                        <input
                          id="empresa"
                          type="text"
                          {...register('empresa')}
                          placeholder="Nombre de su empresa"
                          className={`w-full px-4 py-3 rounded-xl border text-[#111111] text-sm bg-[#f8f8f8] placeholder:text-[#a3a3a3] focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${
                            errors.empresa ? 'border-red-400' : 'border-[#e5e5e5] focus:border-primary'
                          }`}
                        />
                        {errors.empresa && <p className="text-xs text-red-500 mt-1">{errors.empresa.message}</p>}
                      </div>
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#525252] mb-2">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...register('email')}
                          placeholder="correo@empresa.com"
                          className={`w-full px-4 py-3 rounded-xl border text-[#111111] text-sm bg-[#f8f8f8] placeholder:text-[#a3a3a3] focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${
                            errors.email ? 'border-red-400' : 'border-[#e5e5e5] focus:border-primary'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                      </div>
                      {/* Teléfono */}
                      <div>
                        <label htmlFor="telefono" className="block text-xs font-bold uppercase tracking-wider text-[#525252] mb-2">
                          Teléfono *
                        </label>
                        <input
                          id="telefono"
                          type="tel"
                          {...register('telefono')}
                          placeholder="+57 300 000 0000"
                          className={`w-full px-4 py-3 rounded-xl border text-[#111111] text-sm bg-[#f8f8f8] placeholder:text-[#a3a3a3] focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${
                            errors.telefono ? 'border-red-400' : 'border-[#e5e5e5] focus:border-primary'
                          }`}
                        />
                        {errors.telefono && <p className="text-xs text-red-500 mt-1">{errors.telefono.message}</p>}
                      </div>
                    </div>

                    {/* Sector */}
                    <div>
                      <label htmlFor="sector" className="block text-xs font-bold uppercase tracking-wider text-[#525252] mb-2">
                        Sector industrial *
                      </label>
                      <select
                        id="sector"
                        {...register('sector')}
                        className={`w-full px-4 py-3 rounded-xl border text-[#111111] text-sm bg-[#f8f8f8] focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none ${
                          errors.sector ? 'border-red-400' : 'border-[#e5e5e5] focus:border-primary'
                        }`}
                      >
                        <option value="">Seleccione su sector</option>
                        {sectores.map((s) => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                      {errors.sector && <p className="text-xs text-red-500 mt-1">{errors.sector.message}</p>}
                    </div>

                    {/* Descripción */}
                    <div>
                      <label htmlFor="descripcion" className="block text-xs font-bold uppercase tracking-wider text-[#525252] mb-2">
                        Descripción del proyecto *
                      </label>
                      <textarea
                        id="descripcion"
                        {...register('descripcion')}
                        placeholder="Describa brevemente sus necesidades de refrigeración, capacidad requerida, aplicación, etc."
                        rows={4}
                        className={`w-full px-4 py-3 rounded-xl border text-[#111111] text-sm bg-[#f8f8f8] placeholder:text-[#a3a3a3] focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none ${
                          errors.descripcion ? 'border-red-400' : 'border-[#e5e5e5] focus:border-primary'
                        }`}
                      />
                      {errors.descripcion && <p className="text-xs text-red-500 mt-1">{errors.descripcion.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-8 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:bg-primary/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed tracking-wide"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar solicitud de cotización'}
                    </button>

                    <p className="text-xs text-[#a3a3a3] text-center">
                      Al enviar este formulario, acepta nuestra{' '}
                      <a href="#" className="underline hover:text-primary transition-colors">política de privacidad</a>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </RevealEl>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
        <Icon name={icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-primary" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-[#a3a3a3] mb-0.5">{label}</p>
        <div className="text-sm font-medium text-[#333333] leading-relaxed">{children}</div>
      </div>
    </div>
  );
}