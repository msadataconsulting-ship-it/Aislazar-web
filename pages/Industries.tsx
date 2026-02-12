import React from 'react';
import Section from '../components/Section';
import { INDUSTRIES } from '../constants';
import Button from '../components/Button';

const Industries: React.FC = () => {
  return (
    <>
      <div className="bg-aisla-graphite py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Industrias</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nuestros servicios son aplicables a cualquier industria, con foco en los sectores más exigentes que requieren eficiencia, seguridad y alta capacidad operativa.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES.map((industry, index) => (
            <div key={index} className="flex flex-col bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl overflow-hidden">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="flex items-center text-white">
                    <industry.icon className="mr-3 text-aisla-red" size={28} />
                    <h3 className="text-2xl font-bold">{industry.name}</h3>
                  </div>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {industry.description}
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-500">
                  {(industry.items || ["Soluciones a medida", "Cumplimiento normativo", "Respuesta inmediata"]).map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8">
                <Button to="/contacto" variant="outline" fullWidth className="text-sm">
                  Consultar por {industry.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Industries;