import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { OrderList } from './components/OrderList';
import { OrderForm } from './components/OrderForm';
import { ProductHero } from './components/ProductHero';
import { AuthCard } from './components/AuthCard';
import { LandingHeader } from './components/LandingHeader';
import { LandingFeatures } from './components/LandingFeatures';
import { LandingSteps } from './components/LandingSteps';
import { LandingPricing } from './components/LandingPricing';
import { LandingSupport } from './components/LandingSupport';
import { SubscriptionGuard } from './components/SubscriptionGuard';
import { supabase, SupabaseService } from './services/supabase';
import { Loader2 } from 'lucide-react';

type ViewState = 'dashboard' | 'list' | 'form';

const App: React.FC = () => {
  const [session, setSession] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // App State
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    // 1. Checa sessão inicial
    SupabaseService.auth.getSession().then((sess) => {
      setSession(sess);
      setAuthLoading(false);
    });

    // 2. Escuta mudanças (login/logout)
    const { data: { subscription } } = supabase!.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Tela de Carregamento Inicial
  if (authLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-slate-900 text-white">
        <Loader2 className="animate-spin mr-3" size={32} />
        <span>Carregando sistema...</span>
      </div>
    );
  }

  // ====================================================================
  // MODO DESLOGADO: LANDING PAGE COMPLETA
  // ====================================================================
  if (!session) {
    return (
      <div className="min-h-screen bg-slate-900 font-sans selection:bg-blue-500/30 overflow-x-hidden">
        
        {/* Header Fixo */}
        <LandingHeader />

        {/* SECTION 1: HERO & AUTH (First Fold) */}
        {/* Adicionado padding-top para compensar header fixo e min-h para garantir altura em telas grandes */}
        <div className="relative min-h-[95vh] flex flex-col justify-center pt-28 pb-16 px-6">
          {/* Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
             <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
             <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* Esquerda: Produto (Hero) */}
            <div className="order-2 lg:order-1">
              <ProductHero />
            </div>
            
            {/* Direita: Login (Card) */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <AuthCard />
            </div>
          </div>
        </div>

        {/* SECTION 2: FEATURES */}
        <LandingFeatures />

        {/* SECTION 3: 7 DAY TRIAL BANNER / PRICING */}
        <LandingPricing />

        {/* SECTION 4: STEPS */}
        <LandingSteps />

        {/* SECTION 5: SUPPORT */}
        <LandingSupport />

        {/* FOOTER SIMPLE */}
        <footer className="bg-slate-950 py-12 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm mb-2">© {new Date().getFullYear()} ServiceOS. Todos os direitos reservados.</p>
          <p className="text-slate-600 text-xs">Feito para impulsionar o seu negócio.</p>
        </footer>
        
      </div>
    );
  }

  // ====================================================================
  // MODO LOGADO: SISTEMA (COM PROTEÇÃO DE ASSINATURA)
  // ====================================================================

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    if (view !== 'form') {
      setEditingId(null);
    }
  };

  const handleEditOrder = (id: number) => {
    setEditingId(id);
    setCurrentView('form');
  };

  const handleCreateOrder = () => {
    setEditingId(null);
    setCurrentView('form');
  };

  const handleSave = () => {
    setCurrentView('list');
    setEditingId(null);
  };

  return (
    <SubscriptionGuard>
      <Layout currentView={currentView} onNavigate={handleNavigate}>
        {currentView === 'dashboard' && <Dashboard />}
        
        {currentView === 'list' && (
          <OrderList 
            onEdit={handleEditOrder} 
            onCreate={handleCreateOrder} 
          />
        )}
        
        {currentView === 'form' && (
          <OrderForm 
            editId={editingId} 
            onClose={() => setCurrentView('list')} 
            onSave={handleSave} 
          />
        )}
      </Layout>
    </SubscriptionGuard>
  );
};

export default App;