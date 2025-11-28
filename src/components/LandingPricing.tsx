import React from 'react';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';

export const LandingPricing: React.FC = () => {
  const scrollToAuth = () => {
    document.getElementById('auth-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    "Emissão Ilimitada de Ordens",
    "Controle Financeiro Completo",
    "Impressão de Comprovante (80mm)",
    "Suporte via WhatsApp",
    "Acesso PC e Celular",
    "Backup Automático e Seguro"
  ];

  return (
    <section id="pricing-section" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-20">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Escolha o plano ideal para <br/>
            <span className="text-blue-500">profissionalizar sua gestão.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light">
            Sem taxas de adesão. Sem multas de cancelamento. <br/>
            Apenas a ferramenta que você precisa para crescer.
          </p>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card Mensal */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col hover:border-slate-600 transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Plano Mensal</h3>
              <p className="text-slate-500 text-sm">Flexibilidade total para seu negócio.</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-slate-400">R$</span>
                <span className="text-4xl font-bold text-white">39,90</span>
                <span className="text-slate-500">/mês</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="bg-slate-800 p-1 rounded-full">
                    <Check size={14} className="text-blue-500" />
                  </div>
                  {benefit}
                </li>
              ))}
              <li className="flex items-center gap-3 text-slate-500 text-sm italic">
                <div className="p-1"></div>
                Renovação mensal automática
              </li>
            </ul>

            <button 
              onClick={scrollToAuth}
              className="w-full py-4 rounded-xl border border-slate-700 text-white font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all"
            >
              Começar Mensal
            </button>
          </div>

          {/* Card Anual (Destaque) */}
          <div className="bg-slate-900 border-2 border-blue-600/30 rounded-3xl p-8 flex flex-col relative shadow-[0_0_40px_-10px_rgba(37,99,235,0.15)] transform md:-translate-y-4">
            
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl">
              MAIS VANTAJOSO
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Plano Anual</h3>
              <p className="text-slate-500 text-sm">A escolha inteligente. <span className="text-emerald-400 font-medium">Economize 37%.</span></p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-slate-400">R$</span>
                <span className="text-4xl font-bold text-white">299,90</span>
                <span className="text-slate-500">/ano</span>
              </div>
              <p className="text-xs text-blue-400 mt-2 font-medium">
                Equivalente a R$ 24,99 por mês
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <div className="bg-blue-900/50 p-1 rounded-full">
                    <Check size={14} className="text-blue-400" />
                  </div>
                  {benefit}
                </li>
              ))}
              <li className="flex items-center gap-3 text-emerald-400 text-sm font-bold">
                <div className="bg-emerald-900/30 p-1 rounded-full">
                  <ShieldCheck size={14} />
                </div>
                Prioridade no Suporte
              </li>
            </ul>

            <button 
              onClick={scrollToAuth}
              className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2 group"
            >
              Começar Anual
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Trust Footer */}
        <div className="mt-12 text-center border-t border-slate-800/50 pt-8 max-w-2xl mx-auto">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            <ShieldCheck size={16} className="text-slate-400" />
            Experimente 7 dias grátis antes de ser cobrado. Cancele quando quiser.
          </p>
        </div>

      </div>
    </section>
  );
};