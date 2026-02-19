import React from 'react';
import { Download, MessageCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Button, Card, Badge } from './UI';

interface DownloadPageProps {
  onBack: () => void;
}

const DownloadPage: React.FC<DownloadPageProps> = ({ onBack }) => {
  const WHATSAPP_LINK = "https://wa.me/5511972202587?text=Ol%C3%A1%2C%20baixei%20o%20Checklist%20REC%20e%20gostaria%20de%20agendar%20o%20Diagn%C3%B3stico%20Gratuito%21";
  const PDF_LINK = "/assets/ebooks/Checklist_REC.pdf";

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 relative animate-fade-in-up">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-fox-purple/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto w-full text-center relative z-10">
        
        <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                <CheckCircle2 className="text-green-500" size={40} />
            </div>
        </div>

        <Badge>ACESSO LIBERADO</Badge>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Parabéns! Seu Checklist <br />
          <span className="text-fox-orange">está pronto.</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          Você acabou de dar o primeiro passo para organizar a estrutura do seu negócio. Clique abaixo para salvar o arquivo.
        </p>

        {/* Download Card */}
        <Card className="!bg-zinc-900/80 mb-12 border-fox-orange/20 max-w-md mx-auto">
            <div className="flex flex-col items-center gap-6">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <img 
                        src="https://placehold.co/150x200/340e62/FFF?text=PDF+REC" 
                        alt="Capa Checklist REC" 
                        className="h-32 w-auto object-cover rounded shadow-lg opacity-80"
                    />
                </div>
                <div className="w-full">
                    <Button 
                        size="lg" 
                        fullWidth 
                        onClick={() => window.open(PDF_LINK, '_blank')}
                        icon={<Download size={20} />}
                        className="bg-white text-black hover:bg-zinc-200 shadow-none hover:shadow-lg hover:shadow-white/20"
                    >
                        BAIXAR PDF AGORA
                    </Button>
                    <p className="text-xs text-zinc-500 mt-3">
                        Formato PDF • 2.5 MB • Download Seguro
                    </p>
                </div>
            </div>
        </Card>

        {/* Upsell / Diagnostic Section */}
        <div className="border-t border-white/10 pt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Não quer implementar isso sozinho?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                O Checklist é poderoso, mas ter um especialista analisando seu negócio é o que vira o jogo. Agende agora seu diagnóstico gratuito.
            </p>
            
            <Button 
                size="lg" 
                className="text-lg px-10 py-5 shadow-[0_0_50px_rgba(231,57,8,0.4)] animate-pulse hover:animate-none"
                icon={<MessageCircle />}
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            >
                QUERO MEU DIAGNÓSTICO GRATUITO
            </Button>
        </div>

        <button 
            onClick={onBack}
            className="mt-16 text-zinc-500 hover:text-white flex items-center gap-2 mx-auto transition-colors text-sm"
        >
            <ArrowLeft size={16} /> Voltar para o site
        </button>

      </div>
    </section>
  );
};

export default DownloadPage;