import React from 'react';
import { Sparkles, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-borderCol">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md shadow-primary/30">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-wide text-textMain">
            Luminous<span className="text-textMuted font-light">Editor</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-textMuted">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <Link to="/dashboard/templates" className="hover:text-primary transition-colors">Templates</Link>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          
          <Link to="/login" className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-textMain transition-all shadow-sm border border-slate-200 transform hover:scale-105">
            Log In
          </Link>
          <Link to="/dashboard" className="px-6 py-2.5 rounded-full bg-primary hover:bg-blue-700 text-white font-black transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/40">
            Start Editing
          </Link>
        </div>

        <button className="md:hidden text-textMuted hover:text-textMain">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
