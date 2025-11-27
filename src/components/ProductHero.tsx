import React from 'react';
import { ArrowRight, CheckCircle2, Star, Zap, ShieldCheck } from 'lucide-react';

export const ProductHero: React.FC = () => {
  const scrollToAuth = () => {
    document.getElementById('auth-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col justify-center space-y-8 text-white p-4 md:p-0 animate-fade-in-up relative z-10">
      
      {/* Badge / Selo de Oferta - Mais chamativo */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 w-fit backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 cursor-default group">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-xs md:text-sm font-bold text-emerald-300 tracking-wide flex items-center gap-1.5 group-hover:text-emerald-200 transition-colors">
          <Zap size={14} className="text-emerald-400 fill-emerald-400" />
          Libere 7 dias de acesso total grátis
        </span>
      </div>

      {/* Título Principal - Genérico para qualquer negócio */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
        Gestão Inteligente para <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 filter drop-shadow-[0_2px_15px_rgba(59,130,246,0.4)]">
          Prestadores de Serviços
        </span>
      </h1>

      {/* Subtítulo - Foco em Comunicação Visual e Nichos */}
      <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed font-light border-l-4 border-blue-600/50 pl-6 bg-gradient-to-r from-blue-900/10 to-transparent py-2 rounded-r-lg">
        Perfeito para <strong>Comunicação Visual</strong>, Autônomos e PMEs. Controle orçamentos, produção e prazos em um só lugar. Profissionalize seu negócio hoje.
      </p>

      {/* Botões CTA - Mais vibrantes e com efeitos */}
      <div className="pt-6 flex flex-col sm:flex-row gap-5">
        <button 
          onClick={scrollToAuth}
          className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-bold shadow-[0_10px_40px_-10px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.7)] flex items-center justify-center gap-3 text-lg ring-1 ring-white/20"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          <span className="relative z-10">Começar teste grátis</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
        </button>
        
        <button 
          onClick={() => document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 bg-slate-800/40 hover:bg-slate-800/60 border border-white/10 text-slate-200 hover:text-white rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2 group"
        >
          <span className="group-hover:translate-x-0.5 transition-transform">Ver recursos</span>
        </button>
      </div>
      
      {/* Social Proof / Trust Indicators */}
      <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-y-4 gap-x-8 text-slate-400 text-sm font-medium">
        <div className="flex items-center gap-2 group cursor-default transition-colors hover:text-slate-200">
          <ShieldCheck size={18} className="text-emerald-500" />
          <span>Sem cartão de crédito</span>
        </div>
        <div className="flex items-center gap-2 group cursor-default transition-colors hover:text-slate-200">
          <CheckCircle2 size={18} className="text-blue-500" />
          <span>Setup instantâneo</span>
        </div>
        <div className="flex items-center gap-2 group cursor-default transition-colors hover:text-slate-200">
          <div className="flex -space-x-1">
             {[1,2,3,4,5].map(i => (
               <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
             ))}
          </div>
          <span>Suporte aprovado</span>
        </div>
      </div>
    </div>
  );
};