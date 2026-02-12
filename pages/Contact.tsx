import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { COMPANY_INFO } from '../constants';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle,
  AlertTriangle
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

    try {
      // Acceso seguro a variables de entorno para evitar el error "Cannot read properties of undefined"
      const env = (import.meta as any).env || {};
      const SUPABASE_URL = env.VITE_SUPABASE_URL;
      const SUPABASE_KEY = env.VITE_SUPABASE_ANON_KEY;

      if (!SUPABASE_URL || !SUPABASE_KEY) {
        throw new Error("Configuración incompleta: Asegúrese de que las variables VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY estén configuradas en Vercel.");
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

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Supabase Error:", response.status, errorData);
        
        if (response.status === 400) {
          throw new Error('Error 400: Verifique que las columnas "nombre" y "empresa" existan en Supabase.');
        } else if (response.status === 401 || response.status === 403) {
          throw new Error('Error de permisos: Verifique la política RLS en Supabase.');
        } else {
          throw new Error(`Error del servidor (${response.status})`);
        }
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.error("Error en el envío:", err);
      setError(err.message || "No se pudo enviar el mensaje. Intente nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 animate-in fade-in duration-500">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="text-green-500 w-12 h-12" />
        </div>
        <h1 className="text-4xl font-black text-aisla-graphite mb-4">¡Enviado!</h1>
        <p className="text-gray-500 max-w-lg mb-8 text-lg">
          Su consulta ha sido recibida con éxito. Nos contactaremos a la brevedad.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="primary">
          Volver al formulario
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="bg-aisla-graphite py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-aisla-red font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Comercial</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Contacto</h1>
        </div>
      </div>

      <Section>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-xl mb-6">Vías de contacto</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="text-aisla-red mr-4 mt-1" size={20} />
                  <span className="text-sm text-gray-600">{COMPANY_INFO.operativeAddress}</span>
                </li>
                <li className="flex items-center">
                  <Phone className="text-aisla-red mr-4" size={20} />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm text-gray-600 hover:text-aisla-red font-medium">{COMPANY_INFO.phone}</a>
                </li>
                <li className="flex items-center">
                  <Mail className="text-aisla-red mr-4" size={20} />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-gray-600 hover:text-aisla-red font-medium">{COMPANY_INFO.email}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 shadow-2xl rounded-3xl border border-gray-50 relative overflow-hidden">
              <h2 className="text-2xl font-bold mb-8">Solicitar presupuesto</h2>
              
              {error && (
                <div className="mb-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-start gap-3 text-sm animate-in slide-in-from-top-2">
                  <AlertTriangle className="flex-shrink-0 mt-0.5" size={18} />
                  <p>{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Nombre Completo *</label>
                    <input type="text" name="name" required placeholder="Ej: Juan Pérez" value={formData.name} onChange={handleChange} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-aisla-red/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Empresa *</label>
                    <input type="text" name="company" required placeholder="Ej: Tech S.A." value={formData.company} onChange={handleChange} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-aisla-red/20 outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Email *</label>
                    <input type="email" name="email" required placeholder="correo@empresa.com" value={formData.email} onChange={handleChange} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-aisla-red/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Teléfono</label>
                    <input type="tel" name="phone" placeholder="Cód. Área + Número" value={formData.phone} onChange={handleChange} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-aisla-red/20 outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Servicio</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all cursor-pointer">
                    <option value="general">Consulta General</option>
                    <option value="aislacion">Aislación Térmica</option>
                    <option value="andamios">Andamios</option>
                    <option value="tracing">Tracing Eléctrico</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Mensaje *</label>
                  <textarea name="message" rows={4} required placeholder="Describa su requerimiento técnica..." value={formData.message} onChange={handleChange} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-aisla-red/20 outline-none transition-all resize-none"></textarea>
                </div>

                <Button type="submit" variant="primary" fullWidth disabled={isSubmitting} className="h-14">
                  {isSubmitting ? 'Procesando envío...' : 'Enviar Consulta'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;