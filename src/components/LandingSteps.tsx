import React from 'react';
import { UserPlus, Sliders, Play } from 'lucide-react';

export const LandingSteps: React.FC = () => {
  return (
    <section className="py-24 bg-slate-800/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Como funciona
          </h2>
          <p className="text-slate-400 text-lg">
            Em menos de 2 minutos você coloca sua operação em ordem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Linha conectora (Desktop apenas) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 z-0 border-t border-dashed border-slate-600"></div>

          {/* Passo 1 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-8 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
              <UserPlus size={32} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">1. Crie sua conta</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[250px]">
              Insira seu e-mail e senha. O acesso é liberado na hora, sem burocracia.
            </p>
          </div>

          {/* Passo 2 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-8 group-hover:border-emerald-500 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300">
              <Sliders size={32} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">2. Configure sua empresa</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[250px]">
              Defina os status personalizados e formas de pagamento que você aceita.
            </p>
          </div>

          {/* Passo 3 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-8 group-hover:border-purple-500 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
              <Play size={32} className="text-purple-400 ml-1" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">3. Comece a registrar</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[250px]">
              Abra ordens, acompanhe o andamento e organize seu financeiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};