import React from 'react';
import Section from '../components/Section';
import { COMPANY_INFO } from '../constants';
import { Check, Users, Globe, Award, Target, Eye, Leaf, ShieldCheck, Lightbulb, Zap, Scale, ArrowRight, HardHat, Box, Clock, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  
  const VALUES_DATA = [
    {
      title: "Sostenibilidad",
      text: "Compromiso inquebrantable con la eficiencia energética y el cuidado del medio ambiente en cada proceso.",
      icon: Leaf
    },
    {
      title: "Seguridad Total",
      text: "Prioridad absoluta en operaciones de alto riesgo, cumpliendo estrictas normativas nacionales e internacionales.",
      icon: ShieldCheck
    },
    {
      title: "Innovación",
      text: "Inversión constante en tecnología de materiales y procesos de montaje para optimizar tiempos y costos.",
      icon: Lightbulb
    },
    {
      title: "Capacidad de Respuesta",
      text: "Adaptabilidad y rapidez para atender paradas de planta y urgencias operativas las 24 horas.",
      icon: Zap
    },
    {
      title: "Ética y Transparencia",
      text: "Relaciones comerciales honestas y duraderas, basadas en la confianza y el cumplimiento de la palabra.",
      icon: Scale
    }
  ];

  const STATS_DATA = [
    {
      value: "4.000.000",
      unit: "m³",
      label: "de andamios armados",
      icon: Box
    },
    {
      value: "850.000",
      unit: "m²",
      label: "de aislaciones montadas",
      icon: TrendingUp
    },
    {
      value: "+20",
      unit: "años",
      label: "de experiencia ininterrumpida",
      icon: Clock
    },
    {
      value: "3.000.000",
      unit: "horas",
      label: "sin accidentes con tiempo perdido",
      icon: ShieldCheck
    }
  ];

  return (
    <>
      {/* Header */}
      <div className="bg-aisla-graphite py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">La Empresa</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Más de dos décadas de compromiso con la calidad y la seguridad industrial.
          </p>
        </div>
      </div>

      <Section>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-aisla-red font-bold uppercase tracking-widest text-sm">Nuestra Historia</span>
            <h2 className="text-3xl font-bold text-aisla-graphite mt-2 mb-6">Desde 2003 brindando soluciones de ingeniería</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong>{COMPANY_INFO.name}</strong> nació con el objetivo de cubrir una demanda creciente de servicios especializados en aislación térmica para la industria pesada en Argentina.
              </p>
              <p>
                Ubicados estratégicamente en Zárate, polo industrial clave de la Provincia de Buenos Aires, hemos crecido sostenidamente gracias a nuestra política de inversión constante en equipamiento y capacitación.
              </p>
              <p>
                Hoy, con más de 20 años de trayectoria, nos hemos consolidado como un socio estratégico para empresas de Oil & Gas, Energía y Minería, participando en grandes proyectos de infraestructura y paradas de planta con estándares internacionales.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute top-4 left-4 w-full h-full border-4 border-aisla-gray/20 -z-10 rounded-2xl"></div>
            <img 
              src="https://res.cloudinary.com/dbk68wsnu/image/upload/v1770578744/RS-2-aislaciones-termicas-biodiesel_dor1oe.png" 
              alt="Equipo de trabajo AISLA-ZAR" 
              className="w-full shadow-lg rounded-2xl"
            />
          </div>
        </div>
      </Section>

      {/* NEW: Stats Section with Industrial Blue/Overlay */}
      <div className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/dbk68wsnu/image/upload/v1770579227/RS-2_caxmx2.png")' }}>
        {/* Blue/Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-aisla-graphite to-transparent opacity-90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Trayectoria en Cifras</h2>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto font-light">
              Trabajando desde hace más de 2 décadas para las empresas más importantes del país, garantizando resultados medibles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS_DATA.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300 group rounded-xl">
                <div className="flex justify-center mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  <stat.icon className="text-white w-8 h-8" strokeWidth={1.5} />
                </div>
                <div className="flex justify-center items-baseline gap-1 mb-2">
                  <span className="text-4xl md:text-5xl font-black text-white">{stat.value}</span>
                  <span className="text-xl font-bold text-aisla-red">{stat.unit}</span>
                </div>
                <p className="text-gray-300 text-sm font-medium uppercase tracking-wide px-4 border-t border-white/10 pt-4 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REDESIGNED: Pillars (Overlapping the previous section visually or right after) */}
      <section className="bg-slate-50 pb-20 pt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-aisla-red font-bold uppercase tracking-widest text-sm">Nuestros Diferenciales</span>
            <h2 className="text-3xl font-bold text-aisla-graphite mt-2">¿Por qué elegirnos?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
            {/* Capital Humano */}
            <div className="bg-white p-8 shadow-md border-b-4 border-aisla-red hover:-translate-y-2 transition-transform duration-300 group rounded-xl">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-aisla-red transition-colors">
                <Users className="text-aisla-red group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-aisla-graphite mb-3">Capital Humano</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Nuestro mayor activo. Contamos con ingenieros y técnicos con más de 30 años de experiencia, capacitados continuamente en nuevas tecnologías y seguridad.
              </p>
            </div>

            {/* Alcance Regional */}
            <div className="bg-white p-8 shadow-md border-b-4 border-aisla-graphite hover:-translate-y-2 transition-transform duration-300 group rounded-xl">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-aisla-graphite transition-colors">
                <Globe className="text-aisla-graphite group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-aisla-graphite mb-3">Alcance Regional</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Infraestructura logística propia (flota de vehículos y equipos) que nos permite movilizarnos y operar en proyectos a lo largo y ancho de todo el país.
              </p>
            </div>

            {/* Calidad Certificada */}
            <div className="bg-white p-8 shadow-md border-b-4 border-aisla-red hover:-translate-y-2 transition-transform duration-300 group rounded-xl">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-aisla-red transition-colors">
                <Award className="text-aisla-red group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-aisla-graphite mb-3">Calidad Certificada</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Procesos auditados y cumplimiento estricto de normas ISO y procedimientos de seguridad industrial (HSE), garantizando trazabilidad total.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión Section */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="bg-gray-50 p-8 md:p-12 border-l-4 border-aisla-red flex flex-col justify-center rounded-r-2xl">
            <div className="flex items-center mb-6">
              <Target className="text-aisla-red mr-4" size={32} />
              <h3 className="text-2xl font-bold text-aisla-graphite">Nuestra Misión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Proveer soluciones integrales de aislación térmica y servicios industriales de excelencia, garantizando la seguridad, la eficiencia energética y la satisfacción total de nuestros clientes, mediante un equipo humano altamente calificado y tecnología de vanguardia.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-gray-50 p-8 md:p-12 border-l-4 border-aisla-black flex flex-col justify-center rounded-r-2xl">
            <div className="flex items-center mb-6">
              <Eye className="text-aisla-black mr-4" size={32} />
              <h3 className="text-2xl font-bold text-aisla-graphite">Nuestra Visión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Ser la empresa líder y referente en el mercado nacional de servicios industriales, reconocida por nuestra capacidad operativa, innovación técnica y compromiso inquebrantable con la calidad y el desarrollo sustentable de la industria.
            </p>
          </div>
        </div>
      </Section>

      {/* Modern Values Section - High Contrast / Dark Theme */}
      <div className="bg-aisla-graphite py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-aisla-red/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-aisla-red font-bold uppercase tracking-widest text-sm">Nuestros Pilares</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Valores Corporativos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES_DATA.map((val, idx) => (
              <div 
                key={idx} 
                className="group bg-white/5 border border-white/10 hover:border-aisla-red hover:bg-white/10 p-8 transition-all duration-300 rounded-xl relative overflow-hidden backdrop-blur-sm"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-aisla-red transition-all duration-300 border border-white/5">
                    <val.icon className="text-gray-300 group-hover:text-white transition-colors" size={24} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-aisla-red transition-colors">
                    {val.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {val.text}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Card adicional "Únete al equipo" o CTA */}
            <div className="bg-gradient-to-br from-aisla-red to-[#b9151c] p-8 flex flex-col justify-center items-center text-center shadow-lg rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
               <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white mb-4">
                    ¿Busca un socio confiable?
                  </h4>
                  <p className="text-white/90 text-sm mb-6 leading-relaxed">
                    Ponemos nuestros valores en práctica en cada proyecto que ejecutamos.
                  </p>
                  <a href="#/contacto" className="inline-flex items-center bg-white text-aisla-red px-6 py-3 rounded-lg font-bold uppercase text-xs tracking-wider hover:bg-gray-100 transition-colors shadow-lg">
                    Contactar ahora <ArrowRight size={14} className="ml-2" />
                  </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;