import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Button, Badge } from './UI';
import { HEADLINE, SUBHEADLINE } from '../constants';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const VIDEO_ID = "O2u0L-eCBWk";
  const WHATSAPP_LINK = "https://wa.me/5511972202587?text=Ol%C3%A1%2C%20Preciso%20de%20um%20diagn%C3%B3stico%20para%20meu%20neg%C3%B3cio%21";

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center pt-32 pb-20 px-4 overflow-hidden">
      
      {/* Background Gradient Spot for Hero emphasis */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-fox-purple/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        <Badge>NOVA ESTRATÉGIA 2026</Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
          {HEADLINE.split(' ').map((word, i) => (
             word === "TRAFEGO" || word === "PAGO" ? <span key={i} className="text-fox-orange">{word} </span> : <span key={i}>{word} </span>
          ))}
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-10 font-light">
          {SUBHEADLINE}
        </p>

        {/* VSL Container */}
        <div className="w-full max-w-4xl relative group">
            {/* Glow effect behind video */}
            <div className="absolute -inset-1 bg-gradient-to-r from-fox-purple to-fox-orange rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative rounded-2xl overflow-hidden bg-black/80 border border-zinc-800 shadow-2xl aspect-video flex items-center justify-center backdrop-blur-sm">
                {!isPlaying ? (
                    <>
                        <img 
                            src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                            alt="Thumbnail Vídeo Apresentação FoxOn" 
                            width="1280"
                            height="720"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-40"
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                            <button 
                                onClick={() => setIsPlaying(true)}
                                aria-label="Reproduzir Vídeo"
                                className="w-20 h-20 md:w-24 md:h-24 bg-fox-orange/90 rounded-full flex items-center justify-center pl-2 hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(231,57,8,0.5)] cursor-pointer"
                            >
                                <Play size={40} fill="white" className="text-white" />
                            </button>
                        </div>
                    </>
                ) : (
                    <iframe 
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`} 
                        title="FoxOn VSL" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 flex flex-col items-center gap-4 w-full max-w-md animate-fade-in-up">
          <Button 
            size="lg" 
            fullWidth 
            className="uppercase tracking-wide text-lg shadow-xl" 
            onClick={() => window.open(WHATSAPP_LINK, '_blank')}
          >
            Quero Meu Diagnóstico Gratuito
          </Button>
          <p className="text-zinc-500 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Vagas limitadas para o diagnóstico este mês
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;