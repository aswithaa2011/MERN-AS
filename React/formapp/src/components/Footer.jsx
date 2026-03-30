import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background pt-20 pb-10 px-6 border-t border-borderCol">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-wide text-textMain">Luminous</span>
          </div>
          
          <div className="flex items-center gap-8 text-sm font-medium text-textMuted">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">API</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
        </div>
        
        <div className="text-center text-sm font-medium text-slate-400 border-t border-borderCol pt-8">
          © {new Date().getFullYear()} Luminous Editor. Crafted for curators.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
