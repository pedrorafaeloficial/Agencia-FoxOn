import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-transparent relative">
       {/* Decorative Gradient */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fox-purple/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Dúvidas Frequentes
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'border-fox-orange/50 bg-fox-purple/10' : 'border-zinc-800 bg-zinc-900/20'} backdrop-blur-sm`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-fox-orange rounded-xl"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-white' : 'text-zinc-300'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 text-fox-orange transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;