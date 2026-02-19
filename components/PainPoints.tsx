import React from 'react';
import { TrendingDown, Users, DollarSign, Activity, AlertTriangle } from 'lucide-react';
import { Card } from './UI';

const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: TrendingDown,
      title: "O Custo por Lead só Aumenta",
      text: "Você sente que está pagando cada vez mais caro para atrair as mesmas pessoas, e o lucro no final do mês está sendo corroído pelos anúncios."
    },
    {
      icon: Users,
      title: "Cemitério de Leads",
      text: "Seu time comercial (ou você) passa o dia falando com curiosos que perguntam o preço e somem. Muito esforço para pouco fechamento."
    },
    {
      icon: Activity,
      title: "Vendas Montanha-Russa",
      text: "Um mês é bom, o outro é um desastre. Você não tem previsibilidade e vive ansioso sem saber se vai bater a meta no mês seguinte."
    },
    {
      icon: DollarSign,
      title: "Queimando Dinheiro",
      text: "A sensação terrível de colocar dinheiro no Facebook/Google e não ver ele voltar. Parece que você está alimentando uma máquina quebrada."
    }
  ];

  return (
    <section className="py-20 px-4 relative z-20 -mt-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-medium text-sm mb-6 uppercase tracking-wider">
            <AlertTriangle size={16} />
            Pare de ignorar os sinais
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Achar que "Mais Tráfego" resolve tudo <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-fox-orange">
              está matando o seu negócio.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
            Se sua máquina de vendas tem furos, aumentar a pressão dos anúncios só vai fazer você vazar dinheiro mais rápido. Você se identifica com algum desses cenários?
          </p>
        </div>

        {/* Grid of Pains */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((item, index) => (
            <div key={index} className="group">
              <div className="h-full p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-zinc-800/80 flex items-center justify-center mb-4 group-hover:bg-red-500/10 transition-colors duration-300">
                    <item.icon className="text-zinc-400 group-hover:text-red-400 transition-colors" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition to Solution */}
        <div className="mt-16 text-center">
            <p className="text-white text-lg font-medium bg-black/40 inline-block px-8 py-4 rounded-xl border border-white/10 backdrop-blur-md">
                O problema não é o tráfego. O problema é a falta de uma <span className="text-fox-orange font-bold">ESTRUTURA INTELIGENTE</span>.
            </p>
        </div>

      </div>
    </section>
  );
};

export default PainPoints;