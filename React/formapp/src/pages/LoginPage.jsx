import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder login action
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Abstract Background Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Brand Logo Header */}
      <Link to="/" className="flex items-center gap-2 mb-10 relative z-10 transition-transform hover:scale-105">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md shadow-primary/20">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <span className="text-3xl font-bold tracking-wide text-textMain">
          Luminous<span className="text-slate-400 font-light">Editor</span>
        </span>
      </Link>

      {/* Main Login Card */}
      <div className="w-full max-w-[420px] bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-borderCol relative z-10">
        
        <h1 className="text-2xl font-black text-textMain mb-2 text-center">Welcome back</h1>
        <p className="text-sm font-medium text-textMuted mb-8 text-center">Enter your credentials to access your workspace.</p>

        {/* OAuth Buttons */}
        <div className="space-y-3 mb-8">
          <button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm rounded-xl py-3 font-bold text-sm text-textMain">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.89 16.79 15.69 17.58V20.36H19.26C21.35 18.44 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
              <path d="M12 23C14.97 23 17.46 22.02 19.26 20.36L15.69 17.58C14.71 18.23 13.46 18.64 12 18.64C9.18 18.64 6.78 16.73 5.92 14.19H2.23V17.05C4.04 20.64 7.74 23 12 23Z" fill="#34A853"/>
              <path d="M5.92 14.19C5.7 13.53 5.58 12.78 5.58 12C5.58 11.22 5.7 10.47 5.92 9.81V6.95H2.23C1.48 8.45 1.05 10.16 1.05 12C1.05 13.84 1.48 15.55 2.23 17.05L5.92 14.19Z" fill="#FBBC05"/>
              <path d="M12 5.36C13.62 5.36 15.06 5.92 16.2 70.1L19.33 3.97C17.45 2.23 14.97 1.15 12 1.15C7.74 1.15 4.04 3.36 2.23 6.95L5.92 9.81C6.78 7.27 9.18 5.36 12 5.36Z" fill="#EA4335"/>
            </svg>
            Sign in with Google
          </button>
        </div>

        <div className="relative flex items-center justify-center mb-8">
          <div className="w-full border-t border-slate-200"></div>
          <span className="absolute bg-white px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Or continue with</span>
        </div>

        {/* Email & Password Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-[10px] font-black tracking-wider text-textMuted uppercase mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="alex@company.com" 
              required
              className="w-full bg-slate-50 border border-slate-200 shadow-inner rounded-xl px-4 py-3.5 text-sm font-medium text-textMain focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-[10px] font-black tracking-wider text-textMuted uppercase">Password</label>
              <a href="#" className="text-[10px] font-bold text-primary hover:text-blue-700 transition-colors">Forgot password?</a>
            </div>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                required
                className="w-full bg-slate-50 border border-slate-200 shadow-inner rounded-xl px-4 py-3.5 text-sm font-medium text-textMain focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all tracking-widest placeholder:tracking-widest"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-textMain transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full py-4 rounded-xl bg-primary hover:bg-blue-700 text-white font-bold text-sm shadow-[0_5px_15px_rgba(37,99,235,0.3)] transition-all hover:scale-[1.02] mt-4"
          >
            Log Into Workspace
          </button>
        </form>

        <p className="text-center text-xs font-medium text-textMuted mt-8">
          Don't have an account? <a href="#" className="font-bold text-primary hover:text-blue-700 transition-colors">Sign up for free</a>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
