import React from 'react';
import { 
  Instagram, 
  Youtube, 
  MessageCircle 
} from 'lucide-react';
import { ProfileCard } from './ui/profile-card';

interface LinkBioPageProps {
  onNavigate: (view: 'home' | 'ebook_optin' | 'sites') => void;
}

const LinkBioPage: React.FC<LinkBioPageProps> = ({ onNavigate }) => {
  const PHOTO_URL = "/assets/images/Pedro.png"; 

  const links = [
    {
      title: "Protocolo REC",
      description: "A estrutura completa para escalar suas vendas com previsibilidade e lucro.",
      image: "/assets/images/001 - Alavanque seu Negócio.jpg",
      stats: { v1: "4.9", l1: "Estrelas", v2: "Home", l2: "Ir para Início" },
      action: () => onNavigate('home'),
      btnText: "Alavanque seu Negócio",
      verified: true
    },
    {
      title: "7 Ajustes Rápidos",
      description: "Manual gratuito: Pequenas mudanças que dobram sua conversão hoje.",
      image: "/assets/images/7-ajustes.jpg",
      stats: { v1: "1k+", l1: "Downloads", v2: "Grátis", l2: "PDF" },
      action: () => onNavigate('ebook_optin'),
      btnText: "Baixar Manual",
      verified: true
    },
    {
      title: "Site de alta performance",
      description: "Sites High-End, rápidos e otimizados para converter visitantes em clientes.",
      image: "/assets/images/sites.jpg",
      stats: { v1: "100", l1: "Performance", v2: "SEO", l2: "Otimizado" },
      action: () => onNavigate('sites'),
      btnText: "Ver Projetos",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#050505] flex flex-col items-center py-12 px-4 relative overflow-x-hidden font-sans text-white">
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(52,14,98,0.3),transparent_70%)] pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-fox-orange/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Profile Section */}
      <div className="relative z-10 flex flex-col items-center mb-12 animate-fade-in-up">
        <div className="relative w-32 h-32 mb-4 group cursor-pointer">
            {/* Glow Animation */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-fox-orange to-fox-purple blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            
            <div className="relative w-full h-full rounded-full p-1 bg-[#0a0a0a] overflow-hidden border-2 border-white/10 group-hover:border-white/30 transition-colors">
                <img 
                    src={PHOTO_URL} 
                    alt="Foto de Pedro Rafael" 
                    width="128"
                    height="128"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Pedro+Rafael&background=340e62&color=fff&size=256";
                    }}
                />
            </div>
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            Pedro Rafael <span className="text-fox-orange">.</span> FoxOn Agência
        </h1>
        <p className="text-zinc-300 text-sm font-medium tracking-wide bg-white/5 px-3 py-1 rounded-full border border-white/5">
            Estrategista Digital & Founder
        </p>
      </div>

      {/* Cards Container - Responsive Grid */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-6 w-full">
            {links.map((link, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in-up flex justify-center w-full md:w-[340px]" 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                    <ProfileCard 
                        name={link.title}
                        description={link.description}
                        image={link.image}
                        buttonText={link.btnText}
                        stat1Value={link.stats.v1}
                        stat1Label={link.stats.l1}
                        stat2Value={link.stats.v2}
                        stat2Label={link.stats.l2}
                        isVerified={link.verified}
                        onAction={link.action}
                        className="hover:scale-[1.02] transition-transform duration-500 border-white/5 hover:border-fox-orange/30 w-full"
                    />
                </div>
            ))}
        </div>
      </div>

      {/* Socials */}
      <div className="flex justify-center gap-6 mt-16 pt-8 border-t border-white/5 w-full max-w-md animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <SocialIcon icon={<Instagram size={20} />} href="https://www.instagram.com/pedrorafaeloficial" label="Instagram" />
          <SocialIcon icon={<Youtube size={20} />} href="https://www.youtube.com/@pedrorafaeloficial" label="YouTube" />
          <SocialIcon icon={<MessageCircle size={20} />} href="https://wa.me/5511972202587" label="WhatsApp" />
      </div>

      <footer className="mt-8 text-zinc-500 text-xs relative z-10">
        © FoxOn Agency
      </footer>

    </div>
  );
};

const SocialIcon = ({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-fox-orange hover:border-fox-orange hover:scale-110 transition-all duration-300 shadow-lg focus:ring-2 focus:ring-fox-orange focus:outline-none"
        aria-label={label}
    >
        {icon}
    </a>
);

export default LinkBioPage;