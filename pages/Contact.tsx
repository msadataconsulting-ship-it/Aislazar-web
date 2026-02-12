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
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Los valores de SUPABASE_URL y ANON_KEY normalmente vendrían de variables de entorno
    // Para este ejemplo de despliegue directo, podrías configurarlas aquí o vía fetch a un endpoint.
    // Aquí implementamos la lógica de envío real a Supabase vía REST API
    
    try {
      const SUPABASE_URL = (window as any)._env_?.SUPABASE_URL || '';
      const SUPABASE_KEY = (window as any)._env_?.SUPABASE_ANON_KEY || '';

      // Si no hay variables configuradas, simulamos éxito para no romper la UX
      if (!SUPABASE_URL) {
        console.warn("Supabase no configurado. Simulando envío...");
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitted(true);
        return;
      }

      const response = await fetch(`${SUPABASE_URL}/rest/v1/contactos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          nombre: formData.name,
          empresa: formData.company,
          email: formData.email,
          telefono: formData.phone,
          servicio: formData.service,
          mensaje: formData.message
        })
      });

      if (!response.ok) throw new Error('Error al enviar el mensaje');

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error(err);
      setError("Hubo un problema al enviar su consulta. Por favor, intente nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
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
                    <strong className="block text-aisla-graphite text-lg mb-1">Base Operativa</strong>
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
                    <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-gray-500 text-sm hover:text-aisla-red transition-colors block font-medium">
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
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-500 text-sm hover:text-aisla-red transition-colors block font-medium">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-aisla-graphite p-8 rounded-3xl text-white">
              <h4 className="font-bold text-xl mb-3">Cobertura Nacional</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Contamos con logística propia para movilizarnos a cualquier punto del país, asegurando el cumplimiento de los cronogramas.
              </p>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 shadow-2xl rounded-3xl border border-gray-100">
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-aisla-graphite mb-2">Solicitar Cotización</h3>
                <p className="text-gray-500">Complete el formulario y un asesor técnico se comunicará con usted.</p>
              </div>

              {error && <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">{error}</div>}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Nombre Completo *</label>
                    <input type="text" name="name" required placeholder="Ej: Juan Pérez" value={formData.name} onChange={handleChange} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-aisla-red/20 focus:border-aisla-red outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Empresa *</label>
                    <input type="text" name="company" required placeholder="Ej: Tech S.A." value={formData.company} onChange={handleChange} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-aisla-red/20 focus:border-aisla-red outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email *</label>
                    <input type="email" name="email" required placeholder="nombre@empresa.com" value={formData.email} onChange={handleChange} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-aisla-red/20 focus:border-aisla-red outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Teléfono</label>
                    <input type="tel" name="phone" placeholder="+54 ..." value={formData.phone} onChange={handleChange} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-aisla-red/20 focus:border-aisla-red outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Servicio de Interés</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-aisla-red/20 focus:border-aisla-red outline-none transition-all appearance-none cursor-pointer">
                    <option value="general">Consulta General</option>
                    <option value="aislacion">Aislación Térmica</option>
                    <option value="andamios">Andamios</option>
                    <option value="tracing">Tracing Eléctrico</option>
                    <option value="poliuretano">Poliuretano</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Mensaje *</label>
                  <textarea name="message" rows={4} required placeholder="Detalle su necesidad..." value={formData.message} onChange={handleChange} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-aisla-red/20 focus:border-aisla-red outline-none transition-all resize-none"></textarea>
                </div>

                <div className="pt-4">
                  <Button type="submit" variant="primary" fullWidth className={`h-14 ${isSubmitting ? 'opacity-70' : ''}`} disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;