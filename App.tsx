import React, { useState, useEffect, Suspense } from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Features from './components/Features';
import ChecklistSection from './components/ChecklistSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Button } from './components/UI';
import { MessageCircle, Loader2 } from 'lucide-react';

// Lazy Load das páginas secundárias para reduzir o bundle inicial
const DownloadPage = React.lazy(() => import('./components/DownloadPage'));
const EbookOptinPage = React.lazy(() => import('./components/EbookOptinPage'));
const WebDesignPage = React.lazy(() => import('./components/WebDesignPage'));
const LinkBioPage = React.lazy(() => import('./components/LinkBioPage'));

const LoadingFallback = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-white">
    <Loader2 className="h-10 w-10 animate-spin text-fox-orange mb-4" />
    <p className="text-zinc-400 text-sm animate-pulse">Carregando...</p>
  </div>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'download' | 'ebook_optin' | 'sites' | 'links'>('home');
  
  const WHATSAPP_LINK = "https://wa.me/5511972202587?text=Ol%C3%A1%2C%20Preciso%20de%20um%20diagn%C3%B3stico%20para%20meu%20neg%C3%B3cio%21";

  useEffect(() => {
    // Verificar Query Params para roteamento simples
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');

    if (pageParam === '7ajustes') {
      setCurrentView('ebook_optin');
    } else if (pageParam === 'sites') {
      setCurrentView('sites');
    } else if (pageParam === 'links' || pageParam === 'bio') {
      setCurrentView('links');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSuccessLead = () => {
    setCurrentView('download');
    scrollToTop();
  };

  const handleNavigation = (view: 'home' | 'ebook_optin' | 'sites' | 'links', param?: string) => {
     if (window.history.pushState) {
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + (param ? `?page=${param}` : '');
        window.history.pushState({path:newUrl},'',newUrl);
    }
    setCurrentView(view);
    scrollToTop();
  };

  // Renderização condicional com Suspense
  if (currentView === 'ebook_optin') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <EbookOptinPage />
      </Suspense>
    );
  }

  if (currentView === 'links') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <LinkBioPage onNavigate={(view) => handleNavigation(view, view === 'home' ? '' : view === 'sites' ? 'sites' : '7ajustes')} />
      </Suspense>
    );
  }

  if (currentView === 'sites') {
      return (
        <Suspense fallback={<LoadingFallback />}>
            <NavHeader 
                isScrolled={isScrolled} 
                currentView={currentView} 
                onNavigate={handleNavigation} 
                whatsappLink={WHATSAPP_LINK}
            />
            <WebDesignPage />
            <WhatsappFloater link={WHATSAPP_LINK} />
        </Suspense>
      )
  }

  // Layout Padrão do App (Home / VSL)
  return (
    <div className="min-h-screen font-sans relative text-white selection:bg-fox-orange selection:text-white">
        
        <NavHeader 
            isScrolled={isScrolled} 
            currentView={currentView} 
            onNavigate={handleNavigation} 
            whatsappLink={WHATSAPP_LINK}
        />

        <main className="relative z-10">
          {currentView === 'home' ? (
            <>
              <Hero />
              <PainPoints />
              <Features />
              <ChecklistSection onSuccess={handleSuccessLead} />
              <Testimonials />

              <section id="offer" className="py-24 px-4 bg-transparent">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Pronto para escalar seu negócio de verdade?
                    </h2>
                    <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                        Não deixe seu faturamento na mão da sorte. Agende agora um diagnóstico gratuito e descubra os gargalos que impedem seu crescimento.
                    </p>
                    <Button 
                        size="lg" 
                        className="text-xl px-12 py-6 shadow-[0_0_50px_rgba(231,57,8,0.4)] animate-pulse hover:animate-none"
                        icon={<MessageCircle />}
                        onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                    >
                        SOLICITAR DIAGNÓSTICO GRATUITO
                    </Button>
                    <p className="mt-6 text-sm text-zinc-500">
                        Garantia de satisfação. Análise 100% personalizada para o seu momento atual.
                    </p>
                </div>
              </section>

              <FAQ />
            </>
          ) : currentView === 'download' ? (
            <Suspense fallback={<LoadingFallback />}>
              <DownloadPage onBack={() => handleNavigation('home')} />
            </Suspense>
          ) : null}
        </main>
        
        <Footer />
        <WhatsappFloater link={WHATSAPP_LINK} />
    </div>
  );
};

// Componente de Navegação Extraído para Reuso
const NavHeader = ({ isScrolled, currentView, onNavigate, whatsappLink }: any) => (
    <nav 
        className={`fixed z-50 transition-all duration-500 ease-in-out flex items-center justify-between
        ${isScrolled 
            ? 'top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-fit md:min-w-[750px] max-w-6xl rounded-full border border-white/10 bg-black/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3 px-6 md:px-8' 
            : 'top-0 left-0 w-full border-b border-white/5 glass-panel py-4 px-6 md:px-12'
        }
        `}
    >
        <div className={`flex items-center justify-between w-full ${isScrolled ? 'gap-6' : 'max-w-7xl mx-auto'}`}>
            <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
            >
                <img 
                  src="/assets/images/Ativo-2.webp" 
                  alt="FoxOn Logo" 
                  width="150"
                  height="48"
                  className="h-10 md:h-12 w-auto object-contain"
                />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
                <button 
                onClick={() => onNavigate('home')}
                className={`text-sm font-medium transition-colors hover:text-fox-orange ${currentView === 'home' ? 'text-white' : 'text-zinc-400'}`}
                >
                Home
                </button>
                 <button 
                onClick={() => onNavigate('sites', 'sites')}
                className={`text-sm font-medium transition-colors hover:text-fox-orange ${currentView === 'sites' ? 'text-white' : 'text-zinc-400'}`}
                >
                Sites de Alta Performance
                </button>
                <button 
                onClick={() => onNavigate('ebook_optin', '7ajustes')}
                className="text-sm font-medium text-zinc-400 hover:text-fox-orange transition-colors"
                >
                Baixe Ebook: 7 Ajustes
                </button>
            </div>
            
            <Button 
            size="sm" 
            variant="outline" 
            className={`hidden md:flex transition-all duration-300 ${isScrolled ? 'bg-white/5 border-transparent hover:bg-fox-orange hover:border-fox-orange' : ''}`}
            onClick={() => window.open(whatsappLink, '_blank')}
            >
                Falar no WhatsApp
            </Button>
        </div>
    </nav>
);

const WhatsappFloater = ({ link }: { link: string }) => (
    <div className="fixed bottom-8 right-8 z-50">
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[#25D366]/40"
            title="Fale no WhatsApp"
            aria-label="Falar no WhatsApp"
        >
            <MessageCircle color="white" size={28} />
        </a>
    </div>
);

export default App;