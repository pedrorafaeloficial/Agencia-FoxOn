import React from 'react';
import { SERVICES } from '../constants';
import { Card } from './UI';

const Features: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-transparent" id="methodology">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Não é mágica. <br />
            <span className="text-zinc-500">É o Protocolo REC.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            O método FoxOn remove a dependência de "sorte" no tráfego pago e instala 3 pilares fundamentais para a escala.
          </p>
        </div>

        {/* REC Protocol Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Card 
              key={index} 
              className="flex flex-col justify-between min-h-[320px] bg-black/40 backdrop-blur-md border-white/10 group relative overflow-hidden"
            >
              {/* Giant Background Letter */}
              {service.letter && (
                <div className="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.07] transition-colors duration-500 leading-none">
                  {service.letter}
                </div>
              )}

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fox-purple/40 to-fox-purple/10 flex items-center justify-center border border-fox-purple/30 mb-6 shadow-[0_0_15px_rgba(52,14,98,0.3)] group-hover:shadow-[0_0_25px_rgba(231,57,8,0.4)] group-hover:border-fox-orange/50 transition-all duration-500">
                  <service.icon className="text-white group-hover:text-fox-orange transition-colors duration-500" size={28} />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                    {service.letter && <span className="text-fox-orange font-bold text-xl font-mono">[{service.letter}]</span>}
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-zinc-400 leading-relaxed text-base">
                    {service.description}
                </p>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-fox-purple to-transparent opacity-50 group-hover:from-fox-orange group-hover:opacity-100 transition-all duration-500"></div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;