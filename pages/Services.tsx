import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { SERVICES } from '../constants';
import { ArrowDown, Check, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  
  const scrollToService = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset calculation for sticky headers
      const headerOffset = 140; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-aisla-graphite py-16 md:py-24 relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L100 0 L100 100 Z" fill="white" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-aisla-red font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            Soluciones Industriales
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-white mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Ingeniería aplicada al mantenimiento y la construcción de grandes proyectos. Calidad certificada en cada etapa del proceso.
          </p>
        </div>
      </div>

      {/* Quick Nav Grid - Horizontal Scroll on Mobile */}
      <div className="bg-white border-b border-gray-100 sticky top-[73px] md:top-[88px] z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex md:justify-center overflow-x-auto no-scrollbar py-2 md:py-0 md:divide-x divide-gray-100 snap-x">
            {SERVICES.map((service, index) => (
              <button 
                key={index}
                onClick={() => scrollToService(`service-${index}`)}
                className="flex items-center px-4 md:px-6 py-3 md:py-4 hover:bg-gray-50 transition-colors group flex-shrink-0 md:flex-1 justify-center first:rounded-l-lg last:rounded-r-lg snap-center whitespace-nowrap"
              >
                <service.icon className="text-gray-400 group-hover:text-aisla-red mr-2 md:mr-3 transition-colors" size={20} />
                <span className="text-xs font-bold uppercase tracking-wide text-aisla-graphite group-hover:text-aisla-red transition-colors">
                  {service.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services List - Modern Layout */}
      <div className="flex flex-col bg-slate-50">
        {SERVICES.map((service, index) => (
          <section 
            key={index} 
            id={`service-${index}`} 
            className="py-12 md:py-24 border-b border-gray-200 last:border-0 scroll-mt-32"
          >
            <div className="container mx-auto px-4">
              <div className={`flex flex-col lg:flex-row gap-8 lg:gap-20 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Visual Side - Sticky ONLY on Desktop */}
                <div className="w-full lg:w-1/2 relative lg:sticky lg:top-40 mb-6 lg:mb-0">
                  <div className="relative group">
                    {/* Decorative Number */}
                    <div className="absolute -top-8 -left-4 md:-top-12 md:-left-8 text-8xl md:text-[120px] font-black text-gray-200/50 select-none z-0 leading-none">
                      0{index + 1}
                    </div>
                    
                    {/* Image Container */}
                    <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl md:shadow-2xl border-4 border-white">
                      <img 
                        src={service.detailImage || service.image} 
                        alt={service.title} 
                        className="w-full h-[250px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                      
                      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                        <div className="bg-aisla-red p-2 md:p-3 inline-block mb-2 rounded-lg">
                           <service.icon size={20} className="md:w-6 md:h-6" />
                        </div>
                        <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/80">
                          Servicio Homologado
                        </p>
                      </div>
                    </div>

                    {/* Decorative Pattern */}
                    <div className={`hidden md:block absolute -bottom-6 ${index % 2 !== 0 ? '-left-6' : '-right-6'} w-32 h-32 bg-aisla-graphite z-0 rounded-2xl`} style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 pt-2 md:pt-8">
                  <div className="mb-6 md:mb-8">
                    <h2 className="text-2xl md:text-5xl font-bold text-aisla-graphite mb-4 md:mb-6 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed border-l-4 border-aisla-red pl-4 md:pl-6">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Tech Specs Container */}
                  <div className="bg-white border border-gray-200 p-6 md:p-8 shadow-sm mb-8 relative overflow-hidden rounded-xl">
                    <div className="absolute top-0 right-0 bg-gray-100 px-3 py-1 text-[10px] font-bold uppercase text-gray-500 tracking-wider rounded-bl-lg">
                      Especificaciones
                    </div>
                    
                    <h3 className="font-bold text-aisla-graphite mb-4 md:mb-6 flex items-center text-xs md:text-sm uppercase tracking-wide">
                       {service.title === "Aislación Térmica Industrial" ? "Tipos de aislantes térmicos y recubrimientos" : "Capacidades Operativas"}
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-y-3 md:gap-y-4 md:gap-x-8">
                      {service.items.map((item, idx) => (
                        <div key={idx} className="flex items-start group/item">
                          <div className="mt-0.5 mr-3 min-w-[18px]">
                            <Check size={16} className="text-aisla-gray group-hover/item:text-aisla-red transition-colors" />
                          </div>
                          <span className="text-sm text-gray-700 font-medium group-hover/item:text-aisla-black transition-colors leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button to="/contacto" variant="primary" fullWidth>
                      Solicitar Presupuesto
                    </Button>
                    <Button to="/contacto" variant="outline" className="group" fullWidth>
                      Consultar técnica <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <Section background="dark" className="text-center relative overflow-hidden">
        {/* Diagonal lines background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}></div>
        
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">¿Necesita una solución a medida?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-base md:text-lg">
            Desarrollamos ingeniería de detalle para casos complejos. Nuestro departamento técnico evalúa su requerimiento específico sin cargo.
          </p>
          <Button to="/contacto" variant="white">
            Contactar Ingeniería
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Services;