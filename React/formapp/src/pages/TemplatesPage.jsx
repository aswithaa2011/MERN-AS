import React from 'react';
import { Search, Bell, Eye, Plus, LayoutTemplate, Briefcase, HandHeart, CalendarMinus, Layers } from 'lucide-react';

const TemplatesPage = () => {
  const templates = [
    { title: "Blank Canvas", category: "Core Idea", icon: <Plus size={24} className="text-primary"/>, bg: "bg-blue-50", useCase: "Start from scratch" },
    { title: "Customer Feedback", category: "Support", icon: <HandHeart size={24} className="text-secondary"/>, bg: "bg-purple-50", useCase: "CSAT surveying" },
    { title: "Job Application", category: "Recruiting", icon: <Briefcase size={24} className="text-emerald-500"/>, bg: "bg-emerald-50", useCase: "Resume intake" },
    { title: "Event Registration", category: "Events", icon: <CalendarMinus size={24} className="text-orange-500"/>, bg: "bg-orange-50", useCase: "Ticketing \u0026 RSVP" },
    { title: "Product Survey", category: "Research", icon: <LayoutTemplate size={24} className="text-pink-500"/>, bg: "bg-pink-50", useCase: "Market analysis" },
    { title: "Sales Lead Capture", category: "Marketing", icon: <Layers size={24} className="text-cyan-500"/>, bg: "bg-cyan-50", useCase: "B2B contact form" },
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-background relative z-10 w-full overflow-y-auto">
      {/* Top Header */}
      <header className="h-20 border-b border-borderCol px-8 flex items-center justify-between sticky top-0 bg-background/90 backdrop-blur-md z-20 shadow-sm">
        <div className="relative w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search template gallery..." 
            className="w-full bg-white border border-slate-200 shadow-inner rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-medium text-textMain"
          />
        </div>
        
        <div className="flex items-center gap-6">
          <button className="relative text-textMuted hover:text-textMain transition-colors">
            <Bell size={20} />
            <span className="absolute 0 right-0 top-0 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>
          <div className="border-l border-borderCol pl-6 flex flex-col items-end">
             <span className="text-xs font-bold text-textMain tracking-wide">Template Hub</span>
             <span className="text-[10px] font-bold text-primary">v1.2.0</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="p-8 max-w-[1200px] w-full mx-auto space-y-10">
        
        {/* Page Title & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black tracking-tight mb-2 text-textMain">Form Templates</h1>
            <p className="text-textMuted font-medium text-sm">Jumpstart your project with high-converting layouts crafted by professionals.</p>
          </div>
          
          <div className="flex gap-2">
            {['All', 'Marketing', 'Support', 'HR'].map((filter, i) => (
               <button key={i} className={`px-4 py-2 rounded-full text-xs font-bold transition-all border shadow-sm ${i === 0 ? 'bg-textMain text-white border-textMain' : 'bg-white text-textMuted border-slate-200 hover:text-textMain hover:bg-slate-50'}`}>
                 {filter}
               </button>
            ))}
          </div>
        </div>

        {/* Template Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((tpl, i) => (
             <div key={i} className="rounded-3xl bg-surface border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all group flex flex-col cursor-pointer">
                
                {/* Visual Placeholder */}
                <div className={`w-full h-32 rounded-xl ${tpl.bg} mb-6 flex items-center justify-center border border-white/50 shadow-inner transition-transform group-hover:scale-[1.02]`}>
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md">
                      {tpl.icon}
                   </div>
                </div>

                <div className="flex items-start justify-between mb-4">
                   <div>
                      <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[9px] font-black uppercase tracking-widest rounded-md mb-2 inline-block">
                         {tpl.category}
                      </span>
                      <h3 className="text-lg font-black text-textMain">{tpl.title}</h3>
                   </div>
                </div>
                
                <p className="text-xs text-textMuted font-medium mb-8">
                   Perfect for: <span className="font-bold text-slate-700">{tpl.useCase}</span>
                </p>

                <div className="mt-auto flex items-center gap-3">
                   <button className="flex-1 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-textMain font-bold text-xs hover:bg-slate-50 transition-colors">
                      Preview
                   </button>
                   <button className="flex-1 py-2.5 rounded-xl bg-primary shadow-md shadow-primary/20 text-white font-bold text-xs hover:bg-blue-700 transition-colors">
                      Use Template
                   </button>
                </div>
             </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TemplatesPage;
