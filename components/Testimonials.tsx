import React from 'react';
import { Marquee } from './Marquee';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';
import { Card } from './UI';

const Testimonials: React.FC = () => {
  const firstRow = TESTIMONIALS.slice(0, TESTIMONIALS.length / 2);
  const secondRow = TESTIMONIALS.slice(TESTIMONIALS.length / 2);

  return (
    <section className="py-20 relative overflow-hidden bg-transparent">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-fox-purple/5 blur-[80px] -z-10"></div>

      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Resultados que <span className="text-fox-orange">Falam Alto</span>
        </h2>
        <p className="text-zinc-400">
          O que nossos parceiros dizem sobre o Protocolo REC.
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s] [--gap:1.5rem]">
          {firstRow.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s] [--gap:1.5rem] mt-6">
          {secondRow.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>
        
        {/* Gradient Edges for smooth fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
      </div>
    </section>
  );
};

const ReviewCard = ({
  name,
  role,
  content,
  highlight,
}: {
  name: string;
  role: string;
  content: string;
  highlight?: string;
}) => {
  return (
    <Card className="w-[350px] md:w-[450px] p-6 !bg-zinc-900/40 !border-white/5 hover:!border-fox-orange/30 transition-colors">
      <div className="flex flex-col h-full justify-between">
        <div>
            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-fox-orange text-fox-orange" />
                    ))}
                </div>
                {highlight && (
                    <span className="text-xs font-bold bg-green-500/10 text-green-400 px-2 py-1 rounded border border-green-500/20">
                        {highlight}
                    </span>
                )}
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed mb-6">"{content}"</p>
        </div>
        
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fox-purple to-zinc-800 flex items-center justify-center font-bold text-white text-sm">
                {name.charAt(0)}
            </div>
            <div>
                <p className="font-bold text-white text-sm">{name}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wide">{role}</p>
            </div>
        </div>
      </div>
    </Card>
  );
};

export default Testimonials;