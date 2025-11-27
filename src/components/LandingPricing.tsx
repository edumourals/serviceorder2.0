import React from 'react';
import { Check, ShieldCheck, Sparkles, Zap, ArrowRight } from 'lucide-react';

export const LandingPricing: React.FC = () => {
  const scrollToAuth = () => {
    document.getElementById('auth-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background Decor - Mais intenso */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-slate-900/80 backdrop-blur-2xl rounded-[2.5rem] p-1 border border-indigo-500/30 shadow-[0_0_80px_-20px_rgba(79,70,229,0.4)] relative overflow-hidden group hover:border-indigo-400/50 transition-all duration-500">
          
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent opacity-100 pointer-events-none"></div>

          <div className="bg-slate-900/90 rounded-[2.3rem] p-8 md:p-14 h-full relative">
            
            {/* Tag Flutuante */}
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
              <Zap size={140} className="text-indigo-400 rotate-12" />
            </div>

            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-500/20 uppercase tracking-widest mb-4">
                <Sparkles size={12} className="fill-white" />
                Oferta Limitada
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                Experimente <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Totalmente Grátis.
                </span>
              </h2>

              <p className="text-slate-400 max-w-lg mx-auto text-lg md:text-xl font-light">
                Tenha 7 dias de acesso ilimitado ao ServiceOS. <br/>
                <span className="text-slate-200 font-medium">Você só paga depois se gostar.</span>
              </p>
            </div>

            {/* Grid de Benefícios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-10 max-w-3xl mx-auto">
               <div className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 group-hover:bg-slate-800 transition-colors">
                 <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                    <ShieldCheck size={24} />
                 </div>
                 <div>
                    <h4 className="text-white font-semibold mb-1">Dados Seguros</h4>
                    <p className="text-xs text-slate-500">Criptografia de ponta</p>
                 </div>
              </div>
               <div className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 group-hover:bg-slate-800 transition-colors">
                 <div className="p-3 bg-emerald-500/10 rounded-full text-emerald-400">
                    <Check size={24} />
                 </div>
                 <div>
                    <h4 className="text-white font-semibold mb-1">Tudo Liberado</h4>
                    <p className="text-xs text-slate-500">Sem funções bloqueadas</p>
                 </div>
              </div>
               <div className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 group-hover:bg-slate-800 transition-colors">
                 <div className="p-3 bg-amber-500/10 rounded-full text-amber-400">
                    <Sparkles size={24} />
                 </div>
                 <div>
                    <h4 className="text-white font-semibold mb-1">Cancele Grátis</h4>
                    <p className="text-xs text-slate-500">Sem perguntas</p>
                 </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <button 
                onClick={scrollToAuth}
                className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white rounded-xl font-bold text-xl shadow-[0_10px_30px_-5px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3"
              >
                Quero meus 7 dias grátis
                <ArrowRight size={22} />
              </button>
              
              <div className="text-center mt-4">
                <p className="text-slate-500 text-sm">
                  Depois do teste, apenas <strong className="text-white text-lg mx-1">R$ 29,90/mês</strong>.
                </p>
                <p className="text-slate-600 text-xs mt-1">
                  Preço fixo. Sem surpresas no cartão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};