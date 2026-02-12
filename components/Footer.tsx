import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, Facebook, Linkedin, Instagram } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS, SERVICES, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-aisla-graphite text-white pt-16 pb-8 border-t-4 border-aisla-red">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Intro */}
          <div>
            <div className="flex flex-col mb-6 bg-transparent p-0 shadow-none border-none">
              <img 
                src="https://res.cloudinary.com/dbk68wsnu/image/upload/v1770492910/Logo_Aisla_Zar_nx9yu2.png" 
                alt="AISLA-ZAR S.A." 
                className="h-16 w-auto object-contain mb-4 self-start bg-transparent"
              />
              <span className="text-xs font-bold text-aisla-gray tracking-[0.3em] uppercase leading-none mt-1 ml-1">
                S.A.
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empresa líder en servicios de aislación térmica industrial, andamios y mantenimiento. Más de 20 años brindando soluciones integrales a las industrias más exigentes del país.
            </p>
            <div className="flex space-x-4">
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target={SOCIAL_LINKS.linkedin === "#" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 hover:bg-aisla-red transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 hover:bg-aisla-red transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 hover:bg-aisla-red transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 border-b border-gray-700 pb-2 inline-block">
              Navegación
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-aisla-red transition-colors flex items-center text-sm group"
                  >
                    <ChevronRight size={14} className="mr-2 text-aisla-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 border-b border-gray-700 pb-2 inline-block">
              Servicios
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/servicios" 
                    className="text-gray-400 hover:text-aisla-red transition-colors flex items-center text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-aisla-red mr-3 rounded-full"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 border-b border-gray-700 pb-2 inline-block">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-gray-400">
                <MapPin className="text-aisla-red mr-3 mt-1 flex-shrink-0" size={18} />
                <span>
                  <strong>Operativa:</strong> {COMPANY_INFO.operativeAddress}<br />
                  <strong>Legal:</strong> {COMPANY_INFO.address}
                </span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Phone className="text-aisla-red mr-3 flex-shrink-0" size={18} />
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} 
                  className="hover:text-aisla-red transition-colors"
                  title="Llamar ahora"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Mail className="text-aisla-red mr-3 flex-shrink-0" size={18} />
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY_INFO.email}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-aisla-red transition-colors"
                  title="Enviar correo vía Gmail"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {currentYear} {COMPANY_INFO.name} Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link to="#" className="hover:text-white transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;