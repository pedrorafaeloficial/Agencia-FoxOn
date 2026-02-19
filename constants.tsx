import { 
  BarChart3, 
  Target, 
  Megaphone, 
  LayoutTemplate, 
  HandCoins 
} from 'lucide-react';
import { ServiceItem, FAQItem, TestimonialItem } from './types';

export const HEADLINE = "SÓ TRAFEGO PAGO JÁ NÃO SUSTENTA AS VENDAS DO SEU NEGÓCIO!";
export const SUBHEADLINE = "ESSA AULA VAI TE MOSTRAR A ESTRUTURA PERFEITA PARA CRESCER SEU NEGÓCIO!";

export const SERVICES: ServiceItem[] = [
  {
    letter: "R",
    title: "Redes Sociais",
    description: "Usamos estratégias de Tráfego Pago e Orgânico para aumentar o volume de pessoas que conhecem seu negócio.",
    icon: Megaphone,
    colSpan: 1
  },
  {
    letter: "E",
    title: "Estrutura",
    description: "Criamos toda a Estrutura que guia a pessoa até seu time comercial ou atendimento (CRM, Automações e Dashboards).",
    icon: LayoutTemplate,
    colSpan: 1
  },
  {
    letter: "C",
    title: "Comercial",
    description: "Colocamos técnicas de conversão e scripts validados para que as vendas realmente aconteçam no final do funil!",
    icon: HandCoins,
    colSpan: 1
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Para quem é essa metodologia?",
    answer: "Essa metodologia é para qualquer negócio que quer realmente vender mais na internet, seja prestador de serviços, e-commerce, infoprodutor ou negócio local."
  },
  {
    question: "Preciso ter uma equipe de marketing interna?",
    answer: "Não necessariamente. A FoxOn atua como seu braço direito de crescimento. Se você já tem equipe, nós potencializamos o trabalho deles. Se não tem, nós entregamos a estrutura completa."
  },
  {
    question: "Quanto tempo para ver resultados?",
    answer: "Nosso tempo de implementação (Setup) leva cerca de 7 dias. Após isso, os resultados já começam a aparecer nas primeiras semanas, mas a consistência e escala vêm com a maturação das campanhas e processos (geralmente meses 2 e 3)."
  },
  {
    question: "Vocês atendem quais nichos?",
    answer: "Atendemos diversos nichos (Saúde, Estética, Educação, Tecnologia, Varejo, etc.), pois o Protocolo REC é adaptável à jornada de compra do seu cliente, independente do produto."
  },
  {
    question: "Vocês produzem os criativos (imagens e vídeos)?",
    answer: "Sim! Na nossa estrutura completa, entregamos roteiros para vídeos e criamos as artes estáticas de alta conversão. Para vídeos, orientamos a gravação para que você tenha autenticidade com qualidade."
  },
  {
    question: "Qual o investimento mínimo em tráfego?",
    answer: "Recomendamos uma verba que permita testar públicos e criativos sem sufocar o aprendizado da ferramenta. Durante o diagnóstico gratuito, analisamos seu caixa e sugerimos um valor inicial seguro para o seu momento."
  },
  {
    question: "Como funciona o acompanhamento e suporte?",
    answer: "Você não ficará no escuro. Temos grupos de WhatsApp exclusivos com o time, reuniões de alinhamento estratégico e dashboards em tempo real para você acompanhar cada centavo investido."
  },
  {
    question: "Já tive experiências ruins com outras agências. O que muda com a FoxOn?",
    answer: "A maioria das agências foca apenas em 'cliques' e 'likes'. Nós focamos em Vendas e Processos Comerciais. Não entregamos apenas números de visualizações, entregamos leads qualificados e ajudamos seu comercial a fechar a venda."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Ricardo Mendes",
    role: "CEO, TechSolutions",
    content: "O Protocolo REC mudou totalmente nosso jogo. Estávamos travados em um platô de vendas há meses.",
    highlight: "Crescimento de 40% no 1º mês"
  },
  {
    name: "Ana Clara",
    role: "Fundadora, Estética Prime",
    content: "Não é só tráfego. A estrutura comercial que a FoxOn montou fez meu time fechar o dobro de leads.",
    highlight: "ROAS de 7.2x"
  },
  {
    name: "Marcos Viana",
    role: "Diretor, Viana Educacional",
    content: "Profissionalismo ímpar. O diagnóstico gratuito foi um divisor de águas para entendermos onde estávamos errando.",
    highlight: "Redução de 30% no CAC"
  },
  {
    name: "Juliana Costa",
    role: "E-commerce de Moda",
    content: "Finalmente uma agência que entende de margem e lucro, não apenas de cliques e curtidas.",
    highlight: "Faturamento recorde"
  },
  {
    name: "Pedro Alencar",
    role: "SaaS B2B",
    content: "A integração entre marketing e vendas (Smarketing) que eles implementam é o que falta na maioria do mercado.",
    highlight: "Pipeline Comercial Cheio"
  },
  {
    name: "Fernanda Lins",
    role: "Infoprodutora",
    content: "Escalaram meu lançamento perpetuo com uma consistência que eu nunca tinha visto antes.",
    highlight: "R$ 100k/mês no Perpétuo"
  }
];