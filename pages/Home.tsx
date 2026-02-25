import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2, Search, Plus, Play, X } from 'lucide-react';
import Button from '../components/Button';
import Section from '../components/Section';
import { COMPANY_INFO, SERVICES, DIFFERENTIALS, INDUSTRIES, CLIENT_LOGOS } from '../constants';

const Home: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Project Data for Portfolio Section
  const FEATURED_PROJECTS = [
    {
      id: 1,
      title: "Planta de Biodiesel",
      location: "Villa María, Córdoba. Aislación térmica de calor desde los orígenes de la planta",
      category: "Aislación Térmica",
      image: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1771638820/Planta_biodisel_tokcsi.jpg"
    },
    {
      id: 2,
      title: "Montaje de Andamios Multidireccionales",
      location: "Bahía Blanca, Buenos Aires",
      category: "Andamios",
      image: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770809215/Andamios_1_novgdg.jpg"
    },
    {
      id: 3,
      title: "Revestimiento Aislante de Tanque",
      location: "AISLACIÓN DE TANQUE SISTERNA SOBRE CAMION, VILLA MARIA, CORDOBA",
      category: "Aislación Térmica",
      image: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770809431/Camion_1_apu4li.jpg"
    },
    {
      id: 4,
      title: "Sistema de Tracing",
      location: "",
      category: "Tracing Eléctrico",
      image: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1771979865/tracing_electrico_lmypdo.jpg"
    },
    {
      id: 5,
      title: "Aplicación de Poliuretano Spray",
      location: "APLICACIÓN SPRAY DE POLIURETANO EN TECHO",
      category: "Poliuretano Expandido",
      image: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1771639067/poliuretano_en_techo_guccnh.jpg",
      video: "https://res.cloudinary.com/dbk68wsnu/video/upload/v1770818295/Poliuretano_video_1_bgmvx6.mp4"
    },
    {
      id: 6,
      title: "Planta Cagnoli",
      location: "Tandil, Bs.As. Aislación térmica cañerías de frío con inyección de poliuretano",
      category: "Aislación Térmica",
      image: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1771638888/planta_cagnoli_yv5lmp.jpg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[90vh] min-h-[700px] flex items-center bg-gray-900 overflow-hidden pb-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dbk68wsnu/image/upload/v1770504861/Fondo_1_Aisla_Zar_eud3lq.png" 
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-aisla-black via-aisla-graphite/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-aisla-red text-white text-xs font-bold uppercase tracking-widest mb-6 rounded-md">
              Desde 2003
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              SOLUCIONES TÉRMICAS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                INTEGRALES
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl font-light leading-relaxed">
              {COMPANY_INFO.slogan} Especialistas en aislación térmica, andamios y tracing eléctrico para proyectos de alta complejidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contacto" variant="primary">
                Solicitar Cotización
              </Button>
              <Button to="/servicios" variant="white">
                Ver Servicios
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Stats/Differentials - Modernized */}
      <div className="relative z-20 -mt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {DIFFERENTIALS.map((diff, index) => (
              <div 
                key={index} 
                className="bg-white p-6 shadow-xl rounded-xl group hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-aisla-red flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-aisla-red transition-colors duration-300 flex-shrink-0">
                  <diff.icon size={24} className="text-aisla-graphite group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-aisla-graphite mb-2 group-hover:text-aisla-red transition-colors leading-tight">
                  {diff.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <Section background="gray" className="pt-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-aisla-red font-bold uppercase tracking-widest text-sm">Nuestro Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-aisla-graphite mt-2">Servicios Industriales</h2>
          </div>
          <Link to="/servicios" className="hidden md:flex items-center text-aisla-red font-bold uppercase text-sm tracking-wide hover:underline mt-4 md:mt-0">
            Ver todos los servicios <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            // Apply custom image overrides only in this section
            let displayImage = service.image;

            if (service.title === "Aislación Térmica Industrial") {
              displayImage = "https://res.cloudinary.com/dbk68wsnu/image/upload/v1771638498/AISLACION_TERMICA_INDUSTRIAL_owah8i.jpg";
            } else if (service.title === "Aplicación de Poliuretano") {
              displayImage = "https://res.cloudinary.com/dbk68wsnu/image/upload/v1771638669/POLIURETANO_dhq644.jpg";
            }

            return (
              <Link key={index} to="/servicios" className="group block bg-white h-full shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-2xl overflow-hidden">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={displayImage} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-aisla-black/40 group-hover:bg-aisla-black/20 transition-colors"></div>
                  <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md">
                    <service.icon className="text-aisla-red" size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-aisla-graphite mb-3 group-hover:text-aisla-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="text-xs font-bold uppercase tracking-wider text-aisla-gray flex items-center group-hover:translate-x-1 transition-transform">
                    Más información <ChevronRight size={14} className="ml-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 md:hidden text-center">
          <Button to="/servicios" variant="outline" fullWidth>Ver todos los servicios</Button>
        </div>
      </Section>

      {/* Industries */}
      <Section background="dark" className="relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-800/30 transform skew-x-12 translate-x-12"></div>

        <div className="relative z-10 text-center mb-12 md:mb-16">
          <span className="text-aisla-red font-bold uppercase tracking-widest text-sm">Sectores</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Industrias que Atendemos</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Adaptamos nuestras soluciones a los requerimientos específicos de cada sector productivo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
          {INDUSTRIES.map((ind, idx) => (
            <div key={idx} className="bg-aisla-graphite/50 border border-gray-700 p-4 flex flex-col items-center text-center hover:bg-gray-800 transition-colors rounded-xl group cursor-default h-full justify-center min-h-[130px]">
              <ind.icon className="text-aisla-red mb-3 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="text-white font-bold text-xs uppercase tracking-wide">{ind.name}</h4>
            </div>
          ))}
        </div>
      </Section>

      {/* NEW SECTION: Featured Projects (Portfolio) */}
      <Section background="white" className="py-20 md:py-28">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-aisla-red font-bold uppercase tracking-[0.2em] text-xs mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-aisla-graphite mb-6">
            Obras Destacadas
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg font-light">
            Un recorrido por algunos de los proyectos de gran envergadura ejecutados por nuestro equipo técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              onClick={() => project.video && setActiveVideo(project.video)}
            >
              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-aisla-black/90 via-aisla-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col items-start">
                  <span className="inline-block bg-aisla-red text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold leading-tight mb-1">
                    {project.title}
                  </h3>
                  {project.location && (
                    <p className="text-gray-300 text-sm flex items-start mt-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>{project.location}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-[-10px] group-hover:translate-y-0 z-20">
                <div className={`w-10 h-10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transition-colors ${project.video ? 'bg-aisla-red/80 hover:bg-aisla-red border-aisla-red' : 'bg-white/20'}`}>
                  {project.video ? <Play size={20} fill="currentColor" className="ml-1" /> : <Plus size={20} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Clients Carousel */}
      <Section background="white" className="py-12 border-t border-gray-100">
        <div className="text-center mb-10">
          <span className="text-aisla-gray font-bold uppercase tracking-widest text-xs">Confían en Nosotros</span>
        </div>
        
        <div className="relative w-full overflow-hidden group">
          {/* Gradient masks for smooth fade in/out */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* The scrolling track */}
          <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
            {/* First set of logos */}
            <div className="flex items-center gap-12 px-6">
              {CLIENT_LOGOS.map((logo, index) => (
                 <img 
                   key={`l1-${index}`} 
                   src={logo} 
                   alt={`Client ${index + 1}`}
                   className="h-12 md:h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
                 />
              ))}
            </div>
            {/* Second set of logos (duplicate for seamless loop) */}
            <div className="flex items-center gap-12 px-6">
              {CLIENT_LOGOS.map((logo, index) => (
                 <img 
                   key={`l2-${index}`} 
                   src={logo} 
                   alt={`Client ${index + 1}`}
                   className="h-12 md:h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
                 />
              ))}
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 60s linear infinite;
            will-change: transform;
          }
        `}</style>
      </Section>

      {/* CTA Section */}
      <section className="py-20 bg-aisla-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Tiene un proyecto en mente?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Nuestro equipo de ingeniería está listo para brindarle el asesoramiento técnico que necesita para su próxima parada de planta o proyecto de infraestructura.
          </p>
          <div className="flex justify-center">
            <Button to="/contacto" variant="secondary">
              Contactar Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/50 hover:bg-aisla-red rounded-full p-2 transition-all z-10"
              onClick={() => setActiveVideo(null)}
            >
              <X size={24} />
            </button>
            <video 
              src={activeVideo} 
              controls 
              autoPlay 
              className="w-full h-full object-contain"
            >
              Su navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;