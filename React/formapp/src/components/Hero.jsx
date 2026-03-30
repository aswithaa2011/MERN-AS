import React from 'react';
import { ArrowRight, LayoutTemplate } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6">
      {/* Background Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] mix-blend-multiply pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-bold mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Luminous Editor v2.4 in Live Beta
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl text-textMain">
          Craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-x">highly colorful</span> forms with joy.
        </h1>
        
        <p className="text-lg md:text-xl text-textMuted max-w-2xl mb-12 font-medium">
          A premium digital curation and vibrant experience designer focused on logical flows, bright interfaces, and flawless data collection.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link to="/dashboard" className="px-8 py-4 rounded-xl bg-primary hover:bg-blue-700 text-white font-bold text-lg flex items-center gap-2 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 group">
            Start your project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link to="/dashboard/templates" className="px-8 py-4 rounded-xl bg-white shadow-md border border-borderCol hover:bg-slate-50 text-textMain font-bold text-lg flex items-center gap-2 transition-all">
            <LayoutTemplate className="w-5 h-5 text-secondary" />
            Browse Templates
          </Link>
        </div>

        {/* Floating Mockup Preview */}
        <div className="mt-20 relative w-full max-w-5xl rounded-2xl glass p-2 shadow-2xl flex justify-center group transform transition-all hover:-translate-y-2 hover:shadow-primary/30 duration-500">
          
          {/* Abstract Mockup UI */}
          <div className="w-full h-[400px] md:h-[600px] rounded-xl bg-surface border border-borderCol overflow-hidden flex flex-col shadow-inner">
            {/* Mockup Top Header */}
            <div className="h-14 border-b border-borderCol bg-surfaceH flex items-center px-6 justify-between select-none">
              <div className="flex items-center gap-4">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="w-64 h-8 bg-surface rounded-lg border border-borderCol shadow-sm"></div>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                 <div className="w-8 h-8 rounded-full bg-slate-200"></div>
              </div>
            </div>
            {/* Mockup Body Content */}
            <div className="flex-1 flex p-6 gap-6 relative bg-background">
              <div className="w-64 flex flex-col gap-4">
                <div className="h-24 rounded-lg bg-surface border border-borderCol shadow-sm"></div>
                <div className="h-24 rounded-lg bg-surface border border-borderCol shadow-sm"></div>
                <div className="h-24 rounded-lg bg-surface border border-borderCol shadow-sm"></div>
              </div>
              <div className="flex-1 rounded-xl bg-surface border border-borderCol shadow-sm p-8 flex flex-col items-center">
                 <h3 className="text-3xl font-bold mb-8 text-textMain">Get in Touch</h3>
                 <div className="w-full max-w-sm rounded-[2rem] border-2 border-primary/50 bg-white p-6 mb-8 text-center shadow-[0_10px_40px_rgba(37,99,235,0.15)] relative">
                    <span className="absolute -top-3 left-6 px-3 py-1 text-[10px] font-bold tracking-wider rounded-full bg-secondary text-white shadow-md">EDITING</span>
                    <div className="text-left text-xs text-textMuted font-bold tracking-wide mb-2 mt-2">FULL NAME</div>
                    <div className="h-10 bg-surfaceH rounded-lg mb-4 opacity-70 border border-borderCol"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
