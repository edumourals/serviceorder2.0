import React from 'react';
import { Activity, FileText, UserPlus, Smartphone, LayoutDashboard, Zap, ArrowUpRight } from 'lucide-react';

export const LandingFeatures: React.FC = () => {
  const features = [
    {
      icon: <Activity size={24} />,
      title: "Controle de Produção",
      description: "Acompanhe cada etapa: Criação, Impressão, Acabamento e Instalação. Nada fica para trás."
    },
    {
      icon: <FileText size={24} />,
      title: "Orçamentos e Comprovantes",
      description: "Gere documentos profissionais de 80mm que passam credibilidade para seu cliente."
    },
    {
      icon: <UserPlus size={24} />,
      title: "Cadastro Relâmpago",
      description: "Ideal para balcão movimentado. Registre o pedido do cliente em segundos."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Acesse de Onde Estiver",
      description: "Do escritório ou da rua durante uma instalação. Funciona no PC, tablet e celular."
    },
    {
      icon: <LayoutDashboard size={24} />,
      title: "Dashboard Financeiro",
      description: "Saiba exatamente quanto sua empresa faturou e controle o fluxo de caixa."
    },
    {
      icon: <Zap size={24} />,
      title: "Feito para Você",
      description: "Perfeito para Comunicação Visual, Gráficas, Autônomos e Pequenas Empresas."
    }
  ];

  return (
    <section id="features-section" className="py-24 bg-slate-900 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-bold tracking-wider uppercase text-xs border border-blue-500/20">
            Funcionalidades Premium
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Tudo o que sua <br/>
            <span className="text-slate-500">empresa precisa.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Ferramentas profissionais projetadas para organizar o fluxo de trabalho de quem lida com serviços e prazos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-slate-800/40 border border-slate-700/60 hover:bg-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 relative overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-transparent to-transparent group-hover:from-blue-600/5 transition-all duration-500"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-blue-500 group-hover:text-white group-hover:bg-blue-600 transition-all duration-300 shadow-inner ring-1 ring-white/5 group-hover:shadow-lg group-hover:shadow-blue-600/30 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <ArrowUpRight className="text-slate-700 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors flex-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};