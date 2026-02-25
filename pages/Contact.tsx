import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  User, 
  Building2, 
  FileText, 
  Send, 
  CheckCircle, 
  Briefcase, 
  ChevronDown 
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'general',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 animate-in fade-in duration-700">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
          <CheckCircle className="text-green-500 w-12 h-12" />
        </div>
        <h1 className="text-4xl font-black text-aisla-graphite mb-4">¡Mensaje Recibido!</h1>
        <p className="text-gray-500 max-w-lg mb-8 text-lg leading-relaxed">
          Gracias por contactar a <strong>AISLA-ZAR S.A.</strong><br/>
          Nuestro departamento de ingeniería comercial analizará su requerimiento y se pondrá en contacto a la brevedad.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="primary">
          Realizar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="bg-aisla-graphite py-20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-aisla-red/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-aisla-red font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
            Canales de Comunicación
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Contacto</h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Estamos a disposición para cotizar su próximo proyecto o responder consultas técnicas.
          </p>
        </div>
      </div>

      <Section className="relative">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info (Left Column) */}
          <div className="lg:w-1/3 space-y-10">
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-100 pb-4">
                Datos de Contacto
              </h3>
              <ul className="space-y-8">
                <li className="flex items-start group">
                  <div className="bg-white border border-gray-100 p-4 rounded-2xl mr-5 text-aisla-red shadow-sm group-hover:shadow-md group-hover:border-aisla-red/30 transition-all duration-300">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <strong className="block text-aisla-graphite text-lg mb-1">Dirección</strong>
                    <span className="text-gray-500 text-sm leading-relaxed block">{COMPANY_INFO.operativeAddress}</span>
                    <span className="text-gray-400 text-xs mt-1 block">Zárate, Buenos Aires</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="bg-white border border-gray-100 p-4 rounded-2xl mr-5 text-aisla-red shadow-sm group-hover:shadow-md group-hover:border-aisla-red/30 transition-all duration-300">
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <strong className="block text-aisla-graphite text-lg mb-1">Teléfonos</strong>
                    <a 
                      href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} 
                      className="text-gray-500 text-sm hover:text-aisla-red transition-colors block font-medium"
                      title="Llamar ahora"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="bg-white border border-gray-100 p-4 rounded-2xl mr-5 text-aisla-red shadow-sm group-hover:shadow-md group-hover:border-aisla-red/30 transition-all duration-300">
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <strong className="block text-aisla-graphite text-lg mb-1">Email Comercial</strong>
                    <a 
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY_INFO.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 text-sm hover:text-aisla-red transition-colors block font-medium"
                      title="Enviar correo vía Gmail"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="bg-white border border-gray-100 p-4 rounded-2xl mr-5 text-aisla-red shadow-sm group-hover:shadow-md group-hover:border-aisla-red/30 transition-all duration-300">
                    <Clock size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <strong className="block text-aisla-graphite text-lg mb-1">Horarios</strong>
                    <span className="text-gray-500 text-sm block">Lun - Vie: 08:00 - 17:00 hs.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-aisla-graphite p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-bold text-xl mb-3">Cobertura Nacional</h4>
                <p className="text-sm text-gray-300 leading-relaxed opacity-90">
                  Contamos con logística propia para movilizarnos a cualquier punto del país, asegurando el cumplimiento de los cronogramas en paradas de planta y obras nuevas.
                </p>
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-aisla-red rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>

          {/* Form (Right Column) - Modernized */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 shadow-2xl shadow-gray-200/50 rounded-3xl border border-gray-100 relative">
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-aisla-graphite mb-2">Solicitar Cotización</h3>
                <p className="text-gray-500">Complete el formulario y un asesor técnico se comunicará con usted.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Nombre Completo *</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User size={18} className="text-gray-400 group-focus-within:text-aisla-red transition-colors" />
                      </div>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        placeholder="Ej: Juan Pérez"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-aisla-red/20 focus:border-aisla-red focus:bg-white transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Company Input */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Empresa *</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Building2 size={18} className="text-gray-400 group-focus-within:text-aisla-red transition-colors" />
                      </div>
                      <input 
                        type="text" 
                        id="company"
                        name="company"
                        required
                        placeholder="Ej: Nombre de su Industria S.A."
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-aisla-red/20 focus:border-aisla-red focus:bg-white transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Corporativo *</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail size={18} className="text-gray-400 group-focus-within:text-aisla-red transition-colors" />
                      </div>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        placeholder="nombre@empresa.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-aisla-red/20 focus:border-aisla-red focus:bg-white transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Teléfono / Móvil</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone size={18} className="text-gray-400 group-focus-within:text-aisla-red transition-colors" />
                      </div>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        placeholder="+54 11 ..."
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-aisla-red/20 focus:border-aisla-red focus:bg-white transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Select */}
                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Servicio de Interés</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Briefcase size={18} className="text-gray-400 group-focus-within:text-aisla-red transition-colors" />
                    </div>
                    <select 
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full pl-12 pr-10 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-aisla-red/20 focus:border-aisla-red focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="general">Consulta General / Otros</option>
                      <option value="aislacion">Aislación Térmica Industrial</option>
                      <option value="andamios">Alquiler y Montaje de Andamios</option>
                      <option value="tracing">Tracing Eléctrico</option>
                      <option value="poliuretano">Aplicación de Poliuretano</option>
                      <option value="mantenimiento">Mantenimiento de Planta</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <ChevronDown size={18} className="text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Detalle del Proyecto *</label>
                  <div className="relative group">
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <FileText size={18} className="text-gray-400 group-focus-within:text-aisla-red transition-colors" />
                    </div>
                    <textarea 
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Describa brevemente su necesidad, ubicación de la planta y plazos estimados..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-aisla-red/20 focus:border-aisla-red focus:bg-white transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start pt-2">
                  <div className="flex items-center h-5">
                    <input 
                      id="privacy" 
                      type="checkbox" 
                      required 
                      className="w-5 h-5 border-gray-300 rounded text-aisla-red focus:ring-aisla-red cursor-pointer"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="font-medium text-gray-600 cursor-pointer select-none">
                      Acepto el tratamiento de mis datos para fines comerciales.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    fullWidth 
                    className={`h-14 text-base shadow-lg shadow-aisla-red/20 group relative overflow-hidden ${isSubmitting ? 'opacity-80 cursor-wait' : ''}`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
                      {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 relative rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[450px] group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.685324021388!2d-59.0256!3d-34.0958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA1JzQ0LjkiUyA1OcKwMDEnMzIuMiJX!5e0!3m2!1sen!2sar!4v1620000000000!5m2!1sen!2sar" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            title="Ubicación AISLA-ZAR"
            className="absolute inset-0 grayscale contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          ></iframe>
          
          {/* Map Overlay Card */}
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-xs border-l-4 border-aisla-red">
            <img 
              src="https://res.cloudinary.com/dbk68wsnu/image/upload/v1770492910/Logo_Aisla_Zar_nx9yu2.png" 
              alt="AISLA-ZAR" 
              className="h-8 mb-3"
            />
            <p className="text-xs text-gray-600 font-medium mb-1">Base Operativa & Administración</p>
            <p className="text-sm font-bold text-aisla-graphite mb-2">Zárate, Buenos Aires</p>
            <a 
              href="https://maps.app.goo.gl/kZ9Y1jL3UcgJYCTG7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-aisla-red font-bold uppercase tracking-wide hover:underline flex items-center"
            >
              Ver en Google Maps <MapPin size={12} className="ml-1" />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;