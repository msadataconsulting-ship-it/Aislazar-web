import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-aisla-graphite text-gray-300 text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-aisla-red" />
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} 
                className="hover:text-aisla-red transition-colors"
                title="Llamar ahora"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-aisla-red" />
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY_INFO.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-aisla-red transition-colors"
                title="Enviar correo vía Gmail"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
             <span className="uppercase tracking-widest font-semibold text-gray-500">Aislaciones Industriales</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`sticky top-0 w-full z-50 transition-all duration-300 border-b border-gray-100 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group mr-12">
              <img 
                src="https://res.cloudinary.com/dbk68wsnu/image/upload/v1771638010/Nuevo_logo_aisla_zar_vv8dhq.png" 
                alt="AISLA-ZAR S.A." 
                className="h-[52px] md:h-[72px] w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-200 hover:text-aisla-red ${
                    location.pathname === link.path ? 'text-aisla-red' : 'text-aisla-graphite'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contacto"
                className="bg-aisla-red text-white px-5 py-2 text-sm font-bold uppercase tracking-wide hover:bg-red-700 transition-colors shadow-sm"
              >
                Cotizar
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-aisla-black hover:text-aisla-red transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg transform transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="flex flex-col py-4 px-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium py-2 border-b border-gray-100 ${
                  location.pathname === link.path ? 'text-aisla-red' : 'text-aisla-graphite'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="bg-aisla-red text-white text-center py-3 font-bold uppercase tracking-wide mt-4"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;