import React from 'react';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';

export const LandingSupport: React.FC = () => {
  return (
    <section id="support-section" className="py-24 bg-slate-900 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Precisa de ajuda?
          </h2>
          <p className="text-slate-400">
            Nossa equipe está pronta para tirar suas dúvidas e ajudar você a configurar seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          
          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 flex items-center gap-6"
          >
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <MessageCircle size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">WhatsApp</h3>
              <p className="text-emerald-400 text-sm font-medium mb-1">Resposta rápida</p>
              <p className="text-slate-400 text-sm">Fale com um especialista agora.</p>
            </div>
            <div className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all">
              <ArrowRight size={20} />
            </div>
          </a>

          {/* Email Card */}
          <a 
            href="mailto:contato@serviceos.com.br" 
            className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-blue-500/30 transition-all duration-300 flex items-center gap-6"
          >
            <div className="w-14 h-14 rounded-full bg-slate-700/50 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <Mail size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">E-mail</h3>
              <p className="text-blue-400 text-sm font-medium mb-1">contato@serviceos.com.br</p>
              <p className="text-slate-400 text-sm">Ideal para dúvidas técnicas.</p>
            </div>
            <div className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all">
              <ArrowRight size={20} />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};