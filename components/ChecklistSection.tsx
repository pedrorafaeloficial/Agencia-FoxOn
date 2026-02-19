import React, { useState } from 'react';
import { FileText, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { Button, Card, Badge } from './UI';

interface ChecklistSectionProps {
  onSuccess?: () => void;
}

const ChecklistSection: React.FC<ChecklistSectionProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    whatsapp: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

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
      const response = await fetch('https://automacao.agenciafoxon.com.br/webhook/checklistrec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ first_name: '', email: '', whatsapp: '' });
        setStatus('idle');
        // Aciona a função de sucesso passada pelo pai (App.tsx)
        if (onSuccess) onSuccess();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus('error');
    }
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-fox-orange/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Copy & Value */}
          <div>
            <Badge>MATERIAL EXCLUSIVO</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Baixe o Checklist REC: <br />
              <span className="text-fox-orange">30 Tarefas para a Excelência</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Não sabe por onde começar a estruturar seu negócio? Preparamos um guia prático com 30 passos obrigatórios para quem deseja escalar vendas sem depender da sorte.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Auditoria de Redes Sociais e Tráfego",
                "Implementação de CRM e Processos de Vendas",
                "Scripts de Conversão e Recuperação",
                "Métricas que realmente importam (KPIs)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="text-fox-orange flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 text-sm text-zinc-500 bg-white/5 p-4 rounded-lg border border-white/10 w-fit">
              <FileText size={20} />
              <span>PDF Gratuito • Leitura de 5 min • Acesso Imediato</span>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div>
            <Card className="!bg-zinc-900/80 !border-fox-purple/30 shadow-[0_0_50px_rgba(52,14,98,0.2)]">
              
              <div className="mb-6 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Preencha para receber</h3>
                <p className="text-zinc-500 text-sm">Envio imediato para seu e-mail e WhatsApp.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-zinc-400 mb-1.5">
                    Seu Primeiro Nome
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="Ex: João"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-fox-orange focus:ring-1 focus:ring-fox-orange outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1.5">
                    Melhor E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemplo@email.com"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-fox-orange focus:ring-1 focus:ring-fox-orange outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-zinc-400 mb-1.5">
                    WhatsApp (com DDD)
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-fox-orange focus:ring-1 focus:ring-fox-orange outline-none transition-all"
                  />
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    fullWidth 
                    size="lg"
                    disabled={status === 'loading'}
                    className="group relative overflow-hidden"
                  >
                      {status === 'loading' ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="animate-spin" size={20} /> Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          BAIXAR CHECKLIST GRÁTIS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                  </Button>
                </div>
                
                {status === 'error' && (
                    <p className="text-red-400 text-sm text-center bg-red-500/10 p-2 rounded">
                        Ocorreu um erro. Tente novamente.
                    </p>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistSection;