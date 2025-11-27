import React, { useState } from 'react';
import { SupabaseService } from '../services/supabase';
import { Loader2, Mail, Lock, ArrowRight, KeyRound, Sparkles, Check } from 'lucide-react';

type AuthMode = 'login' | 'register' | 'forgot';

export const AuthCard: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    try {
      if (mode === 'login') {
        const { error } = await SupabaseService.auth.signIn(email, password);
        if (error) throw error;
      } else if (mode === 'register') {
        const { error } = await SupabaseService.auth.signUp(email, password);
        if (error) throw error;
        setMessage('Conta criada! Verifique seu e-mail para confirmar.');
        setMode('login');
      } else if (mode === 'forgot') {
        const { error } = await SupabaseService.auth.resetPassword(email);
        if (error) throw error;
        setMessage('Link de recuperação enviado para seu e-mail.');
      }
    } catch (err: any) {
      if (err.message.includes('Invalid login')) {
        setError('E-mail ou senha incorretos.');
      } else if (err.message.includes('already registered')) {
        setError('Este e-mail já está cadastrado.');
      } else {
        setError(err.message || 'Ocorreu um erro. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="auth-section" className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] w-full max-w-md border border-white/20 relative overflow-hidden transition-all duration-300 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] z-20">
      
      {/* Decorative top accent */}
      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${mode === 'register' ? 'from-emerald-500 via-teal-500 to-emerald-400' : 'from-blue-600 via-indigo-500 to-blue-500'}`}></div>

      <div className="mb-8 text-center space-y-2 pt-2">
        {mode === 'register' ? (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-2 animate-bounce">
            <Sparkles size={12} className="fill-emerald-700" />
            Ative seus 7 dias grátis
          </div>
        ) : (
          <div className="h-7 mb-2"></div> 
        )}
        
        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          {mode === 'login' && 'Entrar no Sistema'}
          {mode === 'register' && <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Criar Conta Grátis</span>}
          {mode === 'forgot' && 'Recuperar Acesso'}
        </h3>
        
        <p className="text-slate-500 text-sm font-medium px-2 leading-relaxed">
          {mode === 'login' && 'Bem-vindo de volta! Acesse seu painel de controle.'}
          {mode === 'register' && 'Cadastre-se em segundos. Não pedimos cartão de crédito agora.'}
          {mode === 'forgot' && 'Informe seu e-mail para redefinir sua senha.'}
        </p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-6 border-l-4 border-red-500 flex items-start gap-2 shadow-sm animate-fade-in-left">
          <div className="font-bold">Erro:</div>
          <div>{error}</div>
        </div>
      )}

      {message && (
        <div className="bg-green-50 text-green-600 p-4 rounded-xl text-sm mb-6 border-l-4 border-green-500 flex items-start gap-2 shadow-sm animate-fade-in-left">
          <div className="font-bold">Sucesso:</div>
          <div>{message}</div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider ml-1">Seu E-mail</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ colorScheme: 'light' }}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 font-medium text-slate-900 placeholder:text-slate-400"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        {mode !== 'forgot' && (
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider ml-1">Senha</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ colorScheme: 'light' }}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 font-medium text-slate-900 placeholder:text-slate-400"
                placeholder="******"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:scale-[0.98] ${
            mode === 'register' 
              ? 'bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-emerald-600/20'
              : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20'
          }`}
        >
          {loading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              {mode === 'login' && (
                <>
                  <span>Entrar no Painel</span>
                  <ArrowRight size={18} />
                </>
              )}
              {mode === 'register' && (
                <>
                  <span className="text-lg">Começar Agora</span>
                  <Check size={20} className="stroke-[3px]" />
                </>
              )}
              {mode === 'forgot' && (
                <>
                  <KeyRound size={18} />
                  <span>Enviar Link</span>
                </>
              )}
            </>
          )}
        </button>
      </form>

      <div className="mt-8 flex flex-col gap-4 text-sm text-center border-t border-slate-100 pt-6">
        {mode === 'login' && (
          <>
            <p className="text-slate-500">
              Novo por aqui?{' '}
              <button onClick={() => setMode('register')} className="text-emerald-600 hover:text-emerald-700 font-bold hover:underline transition-all">
                Teste 7 dias grátis
              </button>
            </p>
            <button onClick={() => setMode('forgot')} className="text-slate-400 hover:text-slate-600 text-xs font-medium transition-colors">
              Esqueci minha senha
            </button>
          </>
        )}

        {(mode === 'register' || mode === 'forgot') && (
          <button onClick={() => setMode('login')} className="text-slate-500 hover:text-blue-600 font-bold flex items-center justify-center gap-1 transition-colors group">
            <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" /> Voltar para Login
          </button>
        )}
      </div>
    </div>
  );
};