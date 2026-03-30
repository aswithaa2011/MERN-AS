import React from 'react';
import { Search, Bell, Filter, CalendarDays, FileText, MessageSquare, Zap, MoreHorizontal, MessageCircle, Briefcase, Mail } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="flex-1 flex flex-col h-full bg-background relative z-10 w-full overflow-y-auto">
      {/* Top Header */}
      <header className="h-20 border-b border-borderCol px-8 flex items-center justify-between sticky top-0 bg-background/90 backdrop-blur-md z-20">
        <div className="relative w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-textMuted w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search forms, responses..." 
            className="w-full bg-surface border border-borderCol shadow-sm rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-medium text-textMain placeholder:text-slate-400"
          />
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="hidden md:block text-sm font-semibold text-primary hover:text-pink-600 transition-colors">Support</a>
          <button className="relative text-textMuted hover:text-textMain transition-colors">
            <Bell size={20} />
            <span className="absolute 0 right-0 top-0 w-2 h-2 rounded-full bg-primary ring-2 ring-background"></span>
          </button>
          
          <div className="border-l border-borderCol pl-6 flex flex-col items-end">
             <span className="text-xs font-bold text-textMain tracking-wide">Luminous Editor</span>
             <span className="text-[10px] font-bold text-textMuted">v2.4.0</span>
          </div>
        </div>
      </header>

      {/* Main Content Scrollable Area */}
      <div className="p-8 max-w-[1400px] w-full mx-auto space-y-8">
        
        {/* Page Title & Actions */}
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-textMain">Dashboard</h1>
            <p className="text-textMuted font-medium">Manage your active forms and review performance metrics.</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-borderCol bg-surface shadow-sm hover:bg-slate-50 transition-colors text-sm font-bold text-textMain">
              <Filter size={16} className="text-primary" /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-borderCol bg-surface shadow-sm hover:bg-slate-50 transition-colors text-sm font-bold text-textMain">
              <CalendarDays size={16} className="text-secondary" /> Last 30 Days
            </button>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-surface border border-borderCol shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-4 right-4 text-slate-100 pointer-events-none group-hover:text-pink-50 transition-colors">
              <FileText size={64} />
            </div>
            <div className="flex items-center gap-2 mb-6 relative z-10">
              <span className="text-sm text-textMuted font-bold uppercase tracking-wider">Total Forms</span>
              <div className="w-2 h-2 rounded-full bg-secondary"></div>
            </div>
            <div className="flex items-baseline gap-3 relative z-10">
              <span className="text-4xl font-black text-textMain">12</span>
              <span className="text-xs font-bold text-primary bg-pink-50 px-2 py-1 rounded-md">+2 this month</span>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-surface border border-borderCol shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
             <div className="absolute top-4 right-4 text-slate-100 pointer-events-none group-hover:text-purple-50 transition-colors">
              <MessageSquare size={64} />
            </div>
            <div className="flex items-center gap-2 mb-6 relative z-10">
              <span className="text-sm text-textMuted font-bold uppercase tracking-wider">Total Responses</span>
              <div className="w-2 h-2 rounded-full bg-primary"></div>
            </div>
            <div className="flex items-baseline gap-3 relative z-10">
              <span className="text-4xl font-black text-textMain">4.5k</span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+12% increase</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-surface border border-borderCol shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
             <div className="absolute top-4 right-4 text-slate-100 pointer-events-none group-hover:text-emerald-50 transition-colors">
              <Zap size={64} />
            </div>
            <div className="flex items-center gap-2 mb-6 relative z-10">
              <span className="text-sm text-textMuted font-bold uppercase tracking-wider">Completion Rate</span>
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            </div>
            <div className="flex items-baseline gap-3 mb-3 relative z-10">
              <span className="text-4xl font-black text-textMain">82.4%</span>
            </div>
            <div className="w-1/2 h-2 bg-slate-100 rounded-full overflow-hidden relative z-10">
               <div className="w-[82%] h-full bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
            </div>
          </div>
        </div>

        {/* Recent Forms List */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-extrabold text-textMain">Recent Forms</h2>
            <button className="text-sm font-bold text-secondary bg-violet-50 px-3 py-1.5 rounded-lg hover:bg-violet-100 transition-colors">View All</button>
          </div>

          {/* List Items */}
          {[
            { name: "Customer Feedback", icon: <MessageCircle size={20}/>, date: "Modified Oct 24, 2024", views: "1.2k views", responses: 842, bg: "bg-violet-100", col: "text-violet-600" },
            { name: "Job Application", icon: <Briefcase size={20}/>, date: "Modified Oct 22, 2024", views: "340 views", responses: 56, bg: "bg-emerald-100", col: "text-emerald-600" },
            { name: "Newsletter Signup", icon: <Mail size={20}/>, date: "Modified Oct 15, 2024", views: "2.8k views", responses: 1400, bg: "bg-pink-100", col: "text-pink-600" },
          ].map((form, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-surface border border-borderCol hover:border-slate-300 transition-all shadow-sm hover:shadow-md group">
              <div className="flex items-center gap-6">
                <div className={`w-12 h-12 rounded-xl ${form.bg} ${form.col} flex items-center justify-center shadow-sm`}>
                  {form.icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-textMain">{form.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-textMuted font-bold mt-1">
                    <span className="flex items-center gap-1"><CalendarDays size={12}/> {form.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Zap size={12}/> {form.views}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-12 pr-4">
                <div className="flex flex-col items-end">
                   <span className="font-black text-xl text-textMain">{form.responses > 1000 ? (form.responses/1000).toFixed(1)+'k' : form.responses}</span>
                   <span className="text-[10px] font-bold tracking-wider text-textMuted uppercase mt-[-2px]">Responses</span>
                </div>
                <div className="flex items-center gap-4 text-textMuted opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="p-2 hover:text-primary hover:bg-pink-50 rounded-lg transition-colors"><Zap size={18}/></button> 
                   <button className="p-2 hover:text-secondary hover:bg-violet-50 rounded-lg transition-colors"><MessageCircle size={18}/></button>
                   <button className="p-2 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><MoreHorizontal size={18}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Dual Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 pt-4 pb-12">
          {/* Engagement Trends */}
          <div className="p-8 rounded-2xl bg-surface border border-borderCol shadow-sm flex flex-col h-72">
            <h2 className="text-xl font-extrabold mb-8 text-textMain">Engagement Trends</h2>
            <div className="flex-1 flex items-end justify-between px-4">
              {/* Dummy Bar Chart */}
              {[40, 60, 45, 80, 55, 90, 75].map((height, i) => (
                <div key={i} className="flex flex-col flex-1 items-center gap-4 group">
                  <div className="w-10 bg-slate-100 rounded-t-xl group-hover:bg-primary transition-colors relative shadow-inner overflow-hidden" style={{ height: `${height}%` }}>
                     <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/5 to-transparent h-full"></div>
                  </div>
                  <span className="text-[10px] font-bold text-textMuted uppercase group-hover:text-primary transition-colors">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Storage Usage */}
          <div className="p-8 rounded-2xl bg-surface border border-borderCol shadow-sm flex flex-col h-72">
             <div className="flex justify-between items-center mb-10">
               <h2 className="text-xl font-extrabold text-textMain">Storage Usage</h2>
               <span className="text-[10px] font-bold px-3 py-1 bg-violet-100 text-secondary rounded-full tracking-wider">85% FULL</span>
             </div>
             
             <div className="space-y-6">
                <div>
                   <div className="flex justify-between text-xs font-bold text-textMuted mb-2">
                     <span>Media Assets</span>
                     <span className="text-textMain">1.2GB</span>
                   </div>
                   <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                     <div className="bg-gradient-to-r from-secondary to-primary h-full w-[80%] rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
                   </div>
                </div>
                <div>
                   <div className="flex justify-between text-xs font-bold text-textMuted mb-2">
                     <span>Response Data</span>
                     <span className="text-textMain">450MB</span>
                   </div>
                   <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                     <div className="bg-gradient-to-r from-primary to-orange-400 h-full w-[40%] rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
                   </div>
                </div>
             </div>

             <div className="mt-auto">
               <button className="w-full py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-borderCol hover:border-slate-300 transition-all font-bold text-sm text-textMain shadow-sm">
                 Upgrade Storage
               </button>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;
