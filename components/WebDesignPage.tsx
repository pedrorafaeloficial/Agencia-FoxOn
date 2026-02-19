import React, { useState } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Zap, 
  Search, 
  Layout, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  BarChart, 
  MessageCircle,
  Code2,
  Plus,
  Minus,
  Award,
  Star,
  Gift,
  Server
} from 'lucide-react';
import { Button, Card, Badge } from './UI';
import { Marquee } from './Marquee';

// Dados específicos de depoimentos para Sites
const WEB_TESTIMONIALS = [
    {
        name: "Roberto A.",
        role: "Clínica Odontológica",
        content: "Meu site antigo demorava 10 segundos para abrir. A FoxOn refez tudo e agora abre instantaneamente. As vendas pelo site aumentaram 40% no primeiro mês.",
        highlight: "Conversão +40%"
    },
    {
        name: "Camila S.",
        role: "Infoprodutora",
        content: "Precisava de uma Landing Page que passasse confiança para vender meu curso high-ticket. O design ficou impecável e a integração com o checkout foi perfeita.",
        highlight: "Design Premium"
    },
    {
        name: "João P.",
        role: "Advocacia",
        content: "Antes eu não aparecia no Google. Com a estrutura de SEO que a FoxOn montou no site, hoje recebo leads qualificados organicamente toda semana.",
        highlight: "Topo do Google"
    },
    {
        name: "Mariana L.",
        role: "E-commerce de Moda",
        content: "A experiência mobile ficou incrível. A maioria das minhas clientes compra pelo celular e elas sempre elogiam a facilidade de navegação.",
        highlight: "Mobile First"
    },
    {
        name: "Grupo H4",
        role: "Construtora",
        content: "O site passou a autoridade que precisávamos para fechar contratos maiores. O portfólio ficou muito bem apresentado e rápido.",
        highlight: "Autoridade"
    },
    {
        name: "Lucas F.",
        role: "SaaS B2B",
        content: "Tecnologia de ponta. Eles não usam templates prontos lentos, fizeram tudo em Next.js e o desempenho no PageSpeed bateu 99.",
        highlight: "Performance 99/100"
    }
];

const WebDesignPage: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/5511972202587?text=Ol%C3%A1%2C%20vi%20a%20oferta%20do%20Site%20de%20R%24750%20com%20dom%C3%ADnio%20gr%C3%A1tis%20e%20tenho%20interesse%21";
  const WHATSAPP_CUSTOM_LINK = "https://wa.me/5511972202587?text=Ol%C3%A1%2C%20preciso%20de%20um%20projeto%20de%20site%20espec%C3%ADfico%20e%20personalizado.";
  
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const firstRow = WEB_TESTIMONIALS.slice(0, WEB_TESTIMONIALS.length / 2);
  const secondRow = WEB_TESTIMONIALS.slice(WEB_TESTIMONIALS.length / 2);

  return (
    <div className="min-h-screen font-sans text-white relative flex flex-col">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-[#050505] -z-20"></div>
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-fox-purple/20 to-transparent -z-10 pointer-events-none"></div>

      {/* Dynamic Nav is handled in App.tsx, this page renders inside Main */}
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-fox-orange/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left z-10">
            <Badge>WEB DESIGN HIGH-END</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.1]">
              SEU SITE NÃO É APENAS UM CARTÃO DE VISITAS. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">É SUA MÁQUINA DE VENDAS</span> <br/>
              <span className="text-fox-orange">24 HORAS.</span>
            </h1>
            <p className="text-zinc-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Transforme visitantes em clientes com uma estrutura digital ultrarrápida, otimizada para o Google e desenhada para vender.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="shadow-[0_0_30px_rgba(231,57,8,0.4)] px-8"
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                icon={<MessageCircle />}
              >
                QUERO UM SITE QUE VENDE
              </Button>
              <span className="text-sm text-zinc-500">Projetos entregues em 3 a 7 dias.</span>
            </div>
          </div>

          <div className="relative z-10 lg:h-[500px] flex items-center justify-center">
             {/* Abstract Representation of High Tech Site */}
             <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-fox-purple to-fox-orange opacity-20 blur-3xl rounded-full animate-pulse"></div>
                <div className="relative z-10 bg-black/40 border border-white/10 rounded-2xl p-4 backdrop-blur-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="h-4 w-2/3 bg-white/5 rounded-full mx-auto"></div>
                    </div>
                    {/* Mockup Content */}
                    <div className="space-y-3">
                        <div className="h-32 w-full bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg animate-pulse"></div>
                        <div className="grid grid-cols-2 gap-3">
                             <div className="h-20 w-full bg-zinc-900 rounded-lg border border-white/5"></div>
                             <div className="h-20 w-full bg-zinc-900 rounded-lg border border-white/5"></div>
                        </div>
                        <div className="h-8 w-1/3 bg-fox-orange/20 rounded mx-auto mt-4"></div>
                    </div>
                    
                    {/* Floating Stats */}
                    <div className="absolute -right-8 top-20 bg-zinc-900 border border-green-500/30 p-3 rounded-xl shadow-lg flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                            <Zap size={16} />
                        </div>
                        <div>
                            <p className="text-xs text-zinc-400">Performance</p>
                            <p className="text-sm font-bold text-white">100/100</p>
                        </div>
                    </div>

                    <div className="absolute -left-4 bottom-20 bg-zinc-900 border border-blue-500/30 p-3 rounded-xl shadow-lg flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                            <Search size={16} />
                        </div>
                        <div>
                            <p className="text-xs text-zinc-400">SEO Google</p>
                            <p className="text-sm font-bold text-white">Otimizado</p>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- INTEREST / PAIN POINTS --- */}
      <section className="py-20 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que sua empresa <span className="text-fox-orange">precisa</span> evoluir?</h2>
                <p className="text-zinc-300">Ter apenas uma rede social não é mais suficiente para transmitir autoridade.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:border-fox-orange/40 transition-colors">
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-red-400">
                        <BarChart size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Você perde vendas silenciosas</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Clientes pesquisam antes de comprar. Se eles não encontram um site profissional, assumem que sua empresa é amadora ou "pequena demais", e vão para o concorrente.
                    </p>
                </Card>

                <Card className="hover:border-blue-500/40 transition-colors relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full"></div>
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                        <Globe size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Google Meu Negócio Estagnado</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        O algoritmo do Google prioriza empresas que possuem link de site verificado no perfil. Sem site, você aparece menos no mapa e recebe menos ligações.
                    </p>
                </Card>

                <Card className="hover:border-purple-500/40 transition-colors">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                        <Award size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Valor Percebido e Autoridade</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                         Um site premium posiciona sua marca no topo. Clientes confiam mais e aceitam pagar mais caro quando encontram uma presença digital profissional e segura.
                    </p>
                </Card>
            </div>
        </div>
      </section>

      {/* --- TECHNOLOGY & DESIGN --- */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                <div className="order-2 lg:order-1 relative">
                    {/* Tech Stack Visuals */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-8">
                            <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
                                <Zap className="text-yellow-400 mb-2" size={32} />
                                <span className="font-bold">Carregamento Instantâneo</span>
                            </div>
                            <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
                                <Smartphone className="text-blue-400 mb-2" size={32} />
                                <span className="font-bold">100% Mobile First</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                             <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
                                <Layout className="text-purple-400 mb-2" size={32} />
                                <span className="font-bold">UX/UI Premium</span>
                            </div>
                            <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
                                <Code2 className="text-green-400 mb-2" size={32} />
                                <span className="font-bold">Tecnologia React/Next.js</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Tecnologia de <br/>
                        <span className="text-fox-orange">Grandes Startups</span>
                    </h2>
                    <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                        Não usamos construtores lentos e pesados. Desenvolvemos seu site com a mesma tecnologia usada pelo Airbnb, Uber e Netflix (React & Next.js).
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Design Exclusivo (Sem templates prontos)",
                            "Otimização SEO Técnica (Para o Google te ler melhor)",
                            "Integração com Pixel e API de Conversão",
                            "Painel Administrativo fácil se necessário"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="text-fox-orange" size={20} />
                                <span className="text-zinc-200">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <Button 
                        className="mt-8 bg-white text-black hover:bg-zinc-200"
                        onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                    >
                        SOLICITAR ORÇAMENTO
                    </Button>
                </div>

            </div>
        </div>
      </section>

      {/* --- TESTIMONIALS (WEB SPECIFIC - CAROUSEL STYLE) --- */}
      <section className="py-20 bg-black/40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-fox-purple/5 blur-[80px] -z-10"></div>

        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
             <h2 className="text-3xl font-bold mb-4">Sites que <span className="text-fox-orange">Geram Resultados</span></h2>
             <p className="text-zinc-300">O impacto real de uma estrutura profissional nos negócios dos nossos clientes.</p>
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
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
        </div>
      </section>

      {/* --- PRICING / OFFER SECTION --- */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                Investimento Inteligente
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                
                {/* OFFER CARD */}
                <Card className="!bg-gradient-to-br from-[#111] to-black border border-fox-orange/40 relative overflow-visible shadow-[0_0_50px_rgba(231,57,8,0.15)] transform hover:scale-[1.02] transition-transform duration-300 order-1 lg:order-1">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-fox-orange to-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg whitespace-nowrap">
                        Oportunidade Limitada
                    </div>

                    <div className="p-4">
                        <div className="flex items-center gap-2 mb-2 text-fox-orange font-bold">
                            <Monitor size={20} />
                            <span>Site Profissional Completo</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                            Landing Pages e Sites Institucionais
                        </h3>
                        <p className="text-zinc-400 text-sm mb-6">Estrutura completa para posicionar sua marca.</p>

                        <div className="bg-white/5 rounded-xl p-6 border border-white/5 mb-6">
                            <div className="flex flex-col">
                                <span className="text-zinc-500 line-through text-sm">De R$ 1.200,00</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-extrabold text-white">R$ 750</span>
                                    <span className="text-zinc-400 font-medium">/único</span>
                                </div>
                                <span className="text-green-400 text-xs font-bold mt-2 bg-green-500/10 w-fit px-2 py-1 rounded">Economia de R$ 450,00</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-white shrink-0 mt-0.5" size={18} />
                                <span className="text-zinc-300 text-sm">Design Exclusivo (Até 5 páginas)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-white shrink-0 mt-0.5" size={18} />
                                <span className="text-zinc-300 text-sm">Otimizado para Celular e Google</span>
                            </li>
                            <li className="flex items-start gap-3 bg-fox-purple/20 p-2 rounded-lg -mx-2 border border-fox-purple/30">
                                <Gift className="text-fox-orange shrink-0 mt-0.5 animate-pulse" size={18} />
                                <span className="text-white font-bold text-sm">BÔNUS: 1 Ano de Domínio .com.br</span>
                            </li>
                            <li className="flex items-start gap-3 bg-fox-purple/20 p-2 rounded-lg -mx-2 border border-fox-purple/30">
                                <Server className="text-fox-orange shrink-0 mt-0.5 animate-pulse" size={18} />
                                <span className="text-white font-bold text-sm">BÔNUS: 1 Ano de Hospedagem Turbo</span>
                            </li>
                        </ul>

                        <Button 
                            fullWidth 
                            size="lg"
                            className="font-bold text-lg animate-pulse hover:animate-none"
                            onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                        >
                            GARANTIR OFERTA AGORA
                        </Button>
                        <p className="text-center text-xs text-zinc-500 mt-4">Parcelamento disponível. Consulte condições.</p>
                    </div>
                </Card>

                {/* CUSTOM PROJECT INFO */}
                <div className="lg:pl-8 text-center lg:text-left order-2 lg:order-2">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 border border-white/10">
                        <Code2 className="text-zinc-400" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Precisa de algo mais complexo?
                    </h3>
                    <p className="text-zinc-400 mb-6 leading-relaxed">
                        Desenvolvemos projetos sob medida para sua necessidade:
                    </p>
                    <ul className="space-y-3 mb-8 text-zinc-300 inline-block text-left">
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-fox-orange"></div>
                            E-commerces e Lojas Virtuais
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-fox-orange"></div>
                            Áreas de Membros e EAD
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-fox-orange"></div>
                            Sistemas de Agendamento
                        </li>
                         <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-fox-orange"></div>
                            Integrações via API
                        </li>
                    </ul>
                    <div>
                        <Button 
                            variant="outline"
                            onClick={() => window.open(WHATSAPP_CUSTOM_LINK, '_blank')}
                            className="w-full md:w-auto"
                        >
                            Falar com um Especialista
                        </Button>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Dúvidas Comuns</h2>
            
            <div className="space-y-4">
                {[
                    { q: "Em quanto tempo o site fica pronto?", a: "Landing Pages e sites institucionais ficam prontos em 3 a 7 dias. Projetos personalizados podem levar até 20 dias, dependendo da complexidade." },
                    { q: "O site funciona bem no celular?", a: "Sim! Desenvolvemos com a metodologia 'Mobile First'. Seu site será perfeito em qualquer tamanho de tela, o que é essencial para o Google e para seus anúncios." },
                    { q: "Eu vou conseguir alterar textos depois?", a: "Sim. Se você precisar, criamos um painel administrativo simples para você editar textos e imagens sem precisar de código." },
                    { q: "Como funciona o domínio e hospedagem grátis?", a: "Na promoção atual, nós pagamos o registro do seu domínio (ex: suaempresa.com.br) e a hospedagem por 1 ano. Após esse período, você assume a renovação anual com os fornecedores, mas o site é 100% seu." },
                    { q: "Preciso pagar mensalidade para a FoxOn?", a: "Não. O pagamento pelo desenvolvimento do site é único. Após a entrega, você não tem mensalidade conosco. Você só pagará a renovação anual do domínio e hospedagem após o primeiro ano gratuito." },
                    { q: "O site será encontrado no Google?", a: "Sim. Todos os nossos sites são desenvolvidos com as melhores práticas de SEO Técnico (velocidade, estrutura de tags, sitemap), o que facilita muito para o Google encontrar e ranquear seu site nas pesquisas." },
                    { q: "Vocês escrevem os textos do site?", a: "Sim! Nós temos especialistas em Copywriting. Se você não tiver os textos prontos, nós criamos uma comunicação persuasiva baseada no seu negócio para converter visitantes em clientes." },
                    { q: "O site é seguro contra invasões?", a: "Com certeza. Utilizamos tecnologias modernas e servidores seguros com certificado SSL (aquele cadeado ao lado do site) incluso gratuitamente, garantindo total segurança para você e seus clientes." },
                    { q: "Posso integrar com meu CRM ou WhatsApp?", a: "Sim. Integramos botões de WhatsApp flutuantes, formulários que enviam leads direto para seu e-mail ou CRM, e instalamos Pixels do Facebook/Google para suas campanhas de tráfego." }
                ].map((faq, index) => (
                    <div key={index} className="border border-white/10 rounded-xl bg-zinc-900/40 overflow-hidden">
                        <button 
                            className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                            onClick={() => toggleFaq(index)}
                            aria-expanded={openFaqIndex === index}
                            aria-controls={`faq-answer-${index}`}
                        >
                            <span className="font-medium text-white">{faq.q}</span>
                            {openFaqIndex === index ? <Minus size={20} className="text-fox-orange" /> : <Plus size={20} className="text-zinc-500" />}
                        </button>
                        {openFaqIndex === index && (
                            <div 
                              id={`faq-answer-${index}`}
                              className="p-5 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-white/5 mt-2"
                            >
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-fox-purple/20 to-fox-orange/20 blur-3xl opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Pronto para ter um site <br/>
                <span className="text-white">digno do seu negócio?</span>
            </h2>
            <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
                Pare de perder clientes para concorrentes com sites melhores. Vamos construir sua autoridade digital agora.
            </p>
            <Button 
                size="lg" 
                className="text-xl px-12 py-6 shadow-[0_0_50px_rgba(231,57,8,0.4)] animate-pulse hover:animate-none"
                icon={<ArrowRight />}
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            >
                QUERO MEU SITE PROFISSIONAL
            </Button>
        </div>
      </section>

      {/* Footer simples para a página de vendas */}
      <footer className="w-full py-8 text-center border-t border-white/5 text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} FoxOn Agency. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
};

// Componente Local de Review Card (Mesmo estilo da Home)
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

export default WebDesignPage;