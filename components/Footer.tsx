import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-black/80 backdrop-blur-xl border-t border-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
            <img 
              src="/assets/images/Ativo-2.webp" 
              alt="FoxOn Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
        </div>
        
        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} FoxOn Agency. Todos os direitos reservados.
        </p>

        <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-fox-orange transition-colors">Termos</a>
            <a href="#" className="hover:text-fox-orange transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;