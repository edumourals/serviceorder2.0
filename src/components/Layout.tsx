import React, { useState } from 'react';
import { LayoutDashboard, List, PlusCircle, PenTool, LogOut, Menu, X } from 'lucide-react';
import { SupabaseService } from '../services/supabase';

interface LayoutProps {
  children: React.ReactNode;
  currentView: 'dashboard' | 'list' | 'form';
  onNavigate: (view: 'dashboard' | 'list' | 'form') => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    if (window.confirm('Deseja sair do sistema?')) {
      try {
        await SupabaseService.auth.signOut();
      } finally {
        window.location.href = '/';
      }
    }
  };

  const handleNavigate = (view: 'dashboard' | 'list' | 'form') => {
    onNavigate(view);
    setIsMobileMenuOpen(false); // Fecha o menu ao navegar no mobile
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-slate-900 text-white z-40 flex items-center justify-between px-4 shadow-md">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <PenTool size={18} className="text-white" />
          </div>
          <span className="font-bold tracking-tight text-lg">ServiceOS</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay Background for Mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed md:relative top-0 left-0 h-full w-64 bg-slate-900 text-white flex flex-col shadow-xl z-50 transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <PenTool size={24} className="text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">ServiceOS</h1>
          </div>
          {/* Botão fechar só aparece no mobile dentro do menu */}
          <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => handleNavigate('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              currentView === 'dashboard' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => handleNavigate('list')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              currentView === 'list' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <List size={20} />
            <span className="font-medium">Ordens de Serviço</span>
          </button>

          <button
            onClick={() => handleNavigate('form')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              currentView === 'form' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <PlusCircle size={20} />
            <span className="font-medium">Nova Ordem</span>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-all"
          >
            <LogOut size={18} />
            <span>Sair</span>
          </button>
          <div className="mt-4 text-center">
            <p className="text-xs text-slate-600">Service Manager v2.2</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-slate-50 w-full pt-16 md:pt-0">
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};