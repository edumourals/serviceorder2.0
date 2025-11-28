import React, { useEffect, useState } from 'react';
import { SupabaseService } from '../services/supabase';
import { UserProfile } from '../types';
import { Lock, CreditCard, LogOut, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface SubscriptionGuardProps {
  children: React.ReactNode;
}

export const SubscriptionGuard: React.FC<SubscriptionGuardProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  
  // Link do SEU produto no Stripe (Substitua depois pelo link real)
  const STRIPE_LINK_MONTHLY = "https://buy.stripe.com/test_..."; 
  const STRIPE_LINK_YEARLY = "https://buy.stripe.com/test_..."; 

  const checkStatus = async () => {
    try {
      const user = await SupabaseService.auth.getUser();
      if (user) {
        const userProfile = await SupabaseService.auth.getProfile(user.id);
        
        // Se não existir perfil (ex: usuários antigos ou erro no trigger), cria um mock
        if (!userProfile) {
          console.log("Perfil não encontrado, permitindo acesso temporário (Fallback)");
          setProfile({
            id: user.id,
            email: user.email || '',
            company_name: '',
            subscription_status: 'active', // Fallback para não bloquear se o DB não tiver tabela
            subscription_end_date: new Date().toISOString()
          });
        } else {
          setProfile(userProfile);
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkStatus();
  }, []);

  const handleLogout = async () => {
    await SupabaseService.auth.signOut();
    window.location.href = '/';
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-900 text-white">
        <Loader2 className="animate-spin mb-4" size={32} />
        <p className="text-sm text-slate-400">Verificando assinatura...</p>
      </div>
    );
  }

  // Se o status for active ou trial, libera o acesso
  if (profile && (profile.subscription_status === 'active' || profile.subscription_status === 'trial')) {
    return <>{children}</>;
  }

  // CASO CONTRÁRIO: BLOQUEIO (PAYWALL)
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans">
      <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
        
        {/* Background glow */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-700 shadow-inner">
            <Lock size={32} className="text-red-500" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Acesso Bloqueado
          </h1>
          
          <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            {profile?.subscription_status === 'trial' 
              ? 'Seu período de teste gratuito acabou.' 
              : 'Sua assinatura está pendente ou foi cancelada.'}
            <br />
            Para continuar emitindo ordens de serviço, escolha um plano abaixo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <a 
              href={STRIPE_LINK_MONTHLY} // Coloque o link do Stripe aqui
              target="_blank"
              rel="noreferrer"
              className="group bg-slate-800 border border-slate-700 hover:border-blue-500 hover:bg-slate-800/80 p-6 rounded-xl transition-all cursor-pointer flex flex-col items-center"
            >
              <span className="text-slate-400 text-sm font-medium mb-1">Plano Mensal</span>
              <span className="text-2xl font-bold text-white mb-2">R$ 39,90</span>
              <span className="text-blue-500 text-xs font-bold uppercase tracking-wider group-hover:underline">Assinar Agora</span>
            </a>

            <a 
              href={STRIPE_LINK_YEARLY} // Coloque o link do Stripe aqui
              target="_blank"
              rel="noreferrer" 
              className="group bg-slate-800 border border-blue-600/30 hover:border-blue-500 hover:bg-slate-800/80 p-6 rounded-xl transition-all cursor-pointer flex flex-col items-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-blue-600 text-[10px] font-bold px-2 py-0.5 text-white">ECONOMIZE</div>
              <span className="text-slate-400 text-sm font-medium mb-1">Plano Anual</span>
              <span className="text-2xl font-bold text-white mb-2">R$ 299,90</span>
              <span className="text-blue-500 text-xs font-bold uppercase tracking-wider group-hover:underline">Assinar Agora</span>
            </a>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-slate-500 text-xs bg-slate-950/50 px-4 py-2 rounded-full border border-slate-800">
              <AlertCircle size={14} />
              <span>Após pagar, aguarde alguns minutos e recarregue a página.</span>
            </div>
            
            <button 
              onClick={handleLogout}
              className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-sm mt-4"
            >
              <LogOut size={16} />
              Sair da conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};