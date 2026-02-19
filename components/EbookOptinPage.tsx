import React, { useState } from 'react';
import { BookOpen, CheckCircle2, ArrowRight, Loader2, Download, AlertTriangle, MessageCircle, ArrowLeft } from 'lucide-react';
import { Button, Card, Badge } from './UI';

const EbookOptinPage: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    whatsapp: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://automacao.agenciafoxon.com.br/webhook/7ajustesrapidos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center pt-10 pb-20 px-4 relative animate-fade-in-up font-sans text-white">
        {/* Background Elements */}
        <div className="fixed inset-0 bg-[#050505] -z-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-fox-purple/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-3xl mx-auto w-full text-center relative z-10 pt-10">
          
          <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                  <CheckCircle2 className="text-green-500" size={40} />
              </div>
          </div>

          <Badge>ACESSO LIBERADO</Badge>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Parabéns! Seu Manual <br />
            <span className="text-fox-orange">está pronto para download.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
             Você acabou de dar um passo importante para destravar suas vendas. Clique abaixo para baixar os <strong>7 Ajustes Rápidos</strong>.
          </p>

          {/* Download Card */}
          <Card className="!bg-zinc-900/80 mb-16 border-fox-orange/20 max-w-md mx-auto shadow-[0_0_60px_rgba(52,14,98,0.2)]">
              <div className="flex flex-col items-center gap-8 py-4">
                  <div className="relative group cursor-pointer" onClick={() => window.open('/assets/ebooks/7-Ajustes-Rapidos-que-Fazem-Qualquer-Negocio-Vender-Mais.pdf', '_blank')}>
                     <div className="absolute inset-0 bg-fox-orange/20 blur-2xl rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      <img 
                          src="/assets/images/mockup-1080.png" 
                          alt="Capa Ebook 7 Ajustes" 
                          className="h-56 md:h-64 w-auto object-contain relative z-10 drop-shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300"
                      />
                  </div>
                  <div className="w-full">
                      <Button 
                          size="lg" 
                          fullWidth 
                          onClick={() => window.open('/assets/ebooks/7-Ajustes-Rapidos-que-Fazem-Qualquer-Negocio-Vender-Mais.pdf', '_blank')}
                          icon={<Download size={20} />}
                          className="bg-white text-black hover:bg-zinc-200 shadow-none hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] font-bold text-lg"
                      >
                          BAIXAR MANUAL AGORA
                      </Button>
                      <p className="text-xs text-zinc-500 mt-4 flex items-center justify-center gap-2">
                          <CheckCircle2 size={12} className="text-green-500"/> Download Seguro • PDF Gratuito
                      </p>
                  </div>
              </div>
          </Card>

          {/* Upsell / Diagnostic Section */}
          <div className="border-t border-white/10 pt-12 relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/5 to-transparent p-8 md:p-12">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fox-orange to-transparent opacity-50"></div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                  Quer aplicar esses ajustes com <span className="text-fox-orange">nossa ajuda?</span>
              </h2>
              <p className="text-zinc-300 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
                  Ler o manual é o primeiro passo. Mas ter uma equipe de especialistas implementando a <strong>Estrutura Perfeita</strong> no seu negócio é o que gera escala real e previsível.
              </p>
              
              <Button 
                  size="lg" 
                  className="text-lg px-8 md:px-12 py-5 shadow-[0_0_50px_rgba(231,57,8,0.4)] animate-pulse hover:animate-none w-full md:w-auto"
                  icon={<MessageCircle />}
                  onClick={() => window.open('https://wa.me/5511972202587?text=Ol%C3%A1%2C%20baixei%20o%20Ebook%207%20Ajustes%20e%20quero%20agendar%20meu%20Diagn%C3%B3stico%20Gratuito%21', '_blank')}
              >
                  QUERO MEU DIAGNÓSTICO GRATUITO
              </Button>
              <p className="text-sm text-zinc-500 mt-4">
                  Análise personalizada do seu momento atual. Sem compromisso.
              </p>
          </div>

          <button 
              onClick={() => window.location.href = '/'}
              className="mt-16 text-zinc-500 hover:text-white flex items-center gap-2 mx-auto transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5"
          >
              <ArrowLeft size={16} /> Voltar para a Página Inicial
          </button>

        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen font-sans text-white relative flex flex-col">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-[#050505] -z-20"></div>
      <div className="fixed top-0 right-0 w-[50% w-full] h-full bg-gradient-to-l from-fox-purple/10 to-transparent -z-10 pointer-events-none"></div>

      <nav className="w-full py-6 px-6 md:px-12 flex justify-center md:justify-start">
         <img 
            src="/assets/images/Ativo-2.webp" 
            alt="FoxOn Logo" 
            className="h-8 md:h-10 w-auto cursor-pointer" 
            onClick={() => window.location.href = '/'}
         />
      </nav>

      <main className="flex-grow flex items-center justify-center p-4 py-10">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Copy & Mockup */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            <Badge>E-BOOK GRATUITO</Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1]">
              VENDER MAIS <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">NÃO EXIGE</span> <br/>
              <span className="text-fox-orange">GASTAR MAIS.</span>
            </h1>
            
            <p className="text-zinc-400 text-lg mb-8 max-w-lg leading-relaxed">
              A maioria dos negócios deixa dinheiro na mesa por erros bobos de processo. Descubra os <strong>7 Ajustes Rápidos</strong> que você pode aplicar hoje para aumentar sua conversão.
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-10 w-full max-w-md">
                {[
                    "Otimização de Copy sem custo extra",
                    "Ajustes de Atendimento que recuperam vendas",
                    "Gatilhos mentais esquecidos",
                    "Layouts que convertem 2x mais"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                        <CheckCircle2 size={18} className="text-fox-orange min-w-[18px]" />
                        <span className="text-zinc-300 text-sm font-medium">{item}</span>
                    </div>
                ))}
            </div>

            {/* Mockup Image for Mobile (Hidden on Desktop to preserve layout balance if needed, or shown) */}
            <div className="block md:hidden mb-8 w-full max-w-[300px]">
                 <img 
                    src="/assets/images/mockup-1080.png" 
                    alt="Capa Ebook 7 Ajustes" 
                    className="w-full h-auto drop-shadow-[0_0_30px_rgba(231,57,8,0.3)] animate-fade-in-up"
                />
            </div>
          </div>

          {/* Right Column: Form & Mockup Desktop */}
          <div className="order-1 md:order-2 flex flex-col items-center">
            
            {/* Mockup Desktop */}
            <div className="hidden md:block mb-10 relative group">
                <div className="absolute inset-0 bg-fox-orange/20 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                <img 
                    src="/assets/images/mockup-1080.png" 
                    alt="Capa Ebook 7 Ajustes" 
                    className="relative w-[350px] lg:w-[400px] h-auto drop-shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500"
                />
            </div>

            {/* Form Card */}
            <Card className="w-full max-w-md !bg-zinc-900/90 !border-white/10 shadow-2xl relative overflow-visible">
                {/* Floating alert */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-fox-orange text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1">
                    <AlertTriangle size={12} /> DISPONÍVEL POR TEMPO LIMITADO
                </div>

                <div className="text-center mb-6 mt-2">
                    <h3 className="text-xl font-bold text-white">Baixe Agora</h3>
                    <p className="text-zinc-500 text-sm">Preencha para receber no seu e-mail.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="first_name"
                            required
                            placeholder="Seu Primeiro Nome"
                            value={formData.first_name}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-fox-orange focus:ring-1 focus:ring-fox-orange outline-none transition-all"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Seu Melhor E-mail"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-fox-orange focus:ring-1 focus:ring-fox-orange outline-none transition-all"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="whatsapp"
                            required
                            placeholder="WhatsApp (com DDD)"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-fox-orange focus:ring-1 focus:ring-fox-orange outline-none transition-all"
                        />
                    </div>

                    <Button 
                        type="submit" 
                        fullWidth 
                        size="lg"
                        disabled={status === 'loading'}
                        className="mt-2 font-bold text-base shadow-[0_0_20px_rgba(231,57,8,0.4)] hover:shadow-[0_0_30px_rgba(231,57,8,0.6)]"
                    >
                        {status === 'loading' ? (
                            <span className="flex items-center gap-2">
                                <Loader2 className="animate-spin" size={20} /> Processando...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                ACESSAR MANUAL AGORA <ArrowRight size={18} />
                            </span>
                        )}
                    </Button>
                    
                    <div className="flex items-center justify-center gap-2 mt-4 text-xs text-zinc-600">
                        <BookOpen size={14} />
                        <span>PDF Gratuito • Leitura Rápida</span>
                    </div>

                    {status === 'error' && (
                        <p className="text-red-400 text-xs text-center mt-2">
                            Erro ao enviar. Tente novamente.
                        </p>
                    )}
                </form>
            </Card>

          </div>
        </div>
      </main>

      <footer className="w-full py-6 text-center text-zinc-700 text-xs">
        <p>&copy; {new Date().getFullYear()} FoxOn Agency. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default EbookOptinPage;