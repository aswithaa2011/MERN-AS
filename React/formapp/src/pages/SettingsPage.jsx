import React from 'react';
import { Search, Bell, Edit3, Moon, Sun, Lock, Key, CreditCard, ChevronRight, Smartphone } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="flex-1 flex flex-col h-full bg-background relative z-10 w-full overflow-y-auto">
      {/* Top Header */}
      <header className="h-20 border-b border-borderCol px-8 flex items-center justify-between sticky top-0 bg-background/90 backdrop-blur-md z-20 shadow-sm">
        <div className="relative w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search settings..." 
            className="w-full bg-white border border-slate-200 shadow-inner rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-medium text-textMain"
          />
        </div>
        
        <div className="flex items-center gap-6">
          <button className="relative text-textMuted hover:text-textMain transition-colors">
            <Bell size={20} />
            <span className="absolute 0 right-0 top-0 w-2 h-2 rounded-full bg-primary ring-2 ring-white"></span>
          </button>
          
          <a href="#" className="text-sm font-bold text-secondary hover:text-violet-700 transition-colors border-l border-borderCol pl-6">Support</a>
          
          <div className="flex items-center gap-3">
             <div className="flex flex-col items-end">
                <span className="text-sm font-extrabold text-textMain tracking-wide">Alex Sterling</span>
                <span className="text-[10px] text-primary font-bold">Pro Plan</span>
             </div>
             <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden bg-slate-100">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026024e" alt="Avatar" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="p-8 max-w-[1000px] w-full mx-auto space-y-12">
        
        {/* Page Title */}
        <div>
          <h1 className="text-3xl font-black tracking-tight mb-2 text-textMain">Workspace Settings</h1>
          <p className="text-textMuted font-medium">Manage your personal profile, workspace appearance, and secure your account credentials.</p>
        </div>

        {/* --- SECTION 1: Profile & Storage --- */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
           
           {/* Profile Details */}
           <div className="p-8 rounded-3xl bg-surface border border-borderCol shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-borderCol">
                 <div>
                    <h2 className="text-lg font-extrabold text-textMain">Profile Details</h2>
                    <p className="text-sm text-textMuted mt-1 font-medium">Publicly visible information for your collaborators.</p>
                 </div>
                 <button className="px-5 py-2.5 text-xs font-bold rounded-full border border-slate-200 bg-white shadow-sm text-textMain hover:bg-slate-50 transition-colors">Edit Profile</button>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                 <div>
                    <label className="block text-[10px] font-black tracking-wider text-primary uppercase mb-3">Full Name</label>
                    <div className="w-full bg-slate-50 border border-slate-200 shadow-inner rounded-xl px-4 py-3 text-sm text-textMain font-bold">
                       Alex Sterling
                    </div>
                 </div>
                 <div>
                    <label className="block text-[10px] font-black tracking-wider text-primary uppercase mb-3">Email Address</label>
                    <div className="w-full bg-slate-50 border border-slate-200 shadow-inner rounded-xl px-4 py-3 text-sm text-textMain font-bold">
                       alex.sterling@luminous.io
                    </div>
                 </div>
              </div>

              <div>
                 <label className="block text-[10px] font-black tracking-wider text-primary uppercase mb-3">Biography</label>
                 <div className="w-full bg-slate-50 border border-slate-200 shadow-inner rounded-xl px-4 py-4 text-sm text-textMain font-medium leading-relaxed">
                    Digital curator and experience designer focused on high-conversion form logic and vibrant interfaces.
                 </div>
              </div>
           </div>

           {/* Avatar & Storage Card */}
           <div className="p-8 rounded-3xl bg-surface border border-borderCol shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative mb-6 group-hover:scale-105 transition-transform">
                 {/* Illustrated Phone Avatar frame */}
                 <div className="w-32 h-32 rounded-full border-[6px] border-white flex items-center justify-center bg-slate-100 shadow-xl relative z-10 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026024e" alt="Profile Vector" className="w-[80%] h-[80%] object-cover mt-4 scale-125" />
                 </div>
                 
                 {/* Pencil Edit Badge */}
                 <button className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-br from-primary to-orange-400 rounded-full flex items-center justify-center text-white shadow-[0_5px_15px_rgba(236,72,153,0.4)] border-2 border-white hover:scale-110 transition-transform z-20">
                    <Edit3 size={16} className="font-bold" />
                 </button>
              </div>

              <h3 className="text-xl font-black mb-1 text-textMain">Alex Sterling</h3>
              <p className="text-[10px] text-textMuted font-bold uppercase tracking-wide mb-8">PNG or JPG. Recommended<br/>size 400x400px.</p>
              
              <div className="w-full px-2 mt-auto">
                 <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] font-bold tracking-wider text-textMuted uppercase">Storage</span>
                    <span className="text-[10px] font-black text-textMain">85%</span>
                 </div>
                 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                   <div className="bg-gradient-to-r from-secondary to-primary h-full w-[85%] rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
                 </div>
              </div>
           </div>

        </div>

        {/* --- SECTION 2: Appearance & Themes --- */}
        <div>
           <h3 className="text-xl font-black mb-6 text-textMain">Appearance & Themes</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Theme Selection Toggle Card */}
              <div className="p-6 rounded-3xl bg-surface border border-borderCol shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group">
                 <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center text-secondary border border-violet-100 group-hover:scale-110 transition-transform shadow-sm">
                       <Sun size={24} />
                    </div>
                    <div>
                       <h4 className="font-extrabold text-sm text-textMain">Theme Selection</h4>
                       <p className="text-xs font-medium text-textMuted mt-0.5">Switch between dark and light</p>
                    </div>
                 </div>
                 {/* Custom Toggle Inside */}
                 <div className="flex bg-slate-100 rounded-full p-1 border border-slate-200 shadow-inner relative">
                    <div className="w-10 h-10 flex items-center justify-center text-white bg-primary rounded-full shadow-md z-10"><Sun size={18} /></div>
                    <div className="w-10 h-10 flex items-center justify-center text-slate-400 font-bold rounded-full z-10 hover:text-textMain transition-colors"><Moon size={18} /></div>
                 </div>
              </div>

              {/* Push Notifications Toggle Card */}
              <div className="p-6 rounded-3xl bg-surface border border-borderCol shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group">
                 <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-primary border border-pink-100 group-hover:scale-110 transition-transform shadow-sm">
                       <Bell size={24} />
                    </div>
                    <div>
                       <h4 className="font-extrabold text-sm text-textMain">Push Notifications</h4>
                       <p className="text-xs font-medium text-textMuted mt-0.5">Desktop and mobile alerts</p>
                    </div>
                 </div>
                 {/* Simple Toggle Switch */}
                 <div className="w-14 h-8 bg-green-400 rounded-full relative cursor-pointer shadow-inner">
                    <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow-sm"></div>
                 </div>
              </div>

           </div>
        </div>

        {/* --- SECTION 3: Security & Developer --- */}
        <div>
           <h3 className="text-xl font-black mb-6 text-textMain">Security & Developer</h3>
           <div className="rounded-3xl bg-surface border border-borderCol shadow-sm overflow-hidden flex flex-col">
              
              {/* List Item 1 */}
              <button className="flex items-center justify-between p-6 hover:bg-slate-50 transition-colors border-b border-borderCol group text-left">
                 <div className="flex items-center gap-6">
                    <Lock size={22} className="text-slate-400 group-hover:text-primary transition-colors" />
                    <div>
                       <h4 className="font-extrabold text-sm text-textMain">Change Password</h4>
                       <p className="text-xs font-medium text-textMuted mt-0.5">Update your account access credentials</p>
                    </div>
                 </div>
                 <ChevronRight size={20} className="text-slate-300 group-hover:text-primary transition-colors group-hover:translate-x-1" />
              </button>

              {/* List Item 2 */}
              <button className="flex items-center justify-between p-6 hover:bg-slate-50 transition-colors border-b border-borderCol group text-left">
                 <div className="flex items-center gap-6">
                    <Key size={22} className="text-slate-400 group-hover:text-secondary transition-colors" />
                    <div>
                       <h4 className="font-extrabold text-sm text-textMain">API Keys & Webhooks</h4>
                       <p className="text-xs font-medium text-textMuted mt-0.5">Manage integration tokens for your forms</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-green-100 text-emerald-600 border border-green-200 text-[10px] font-black tracking-wider rounded-full shadow-sm">3 ACTIVE</span>
                    <ChevronRight size={20} className="text-slate-300 group-hover:text-secondary transition-colors group-hover:translate-x-1" />
                 </div>
              </button>

              {/* List Item 3 */}
              <button className="flex items-center justify-between p-6 hover:bg-slate-50 transition-colors group text-left">
                 <div className="flex items-center gap-6">
                    <CreditCard size={22} className="text-slate-400 group-hover:text-orange-500 transition-colors" />
                    <div>
                       <h4 className="font-extrabold text-sm text-textMain">Plan & Billing</h4>
                       <p className="text-xs font-medium text-textMuted mt-0.5">Manage subscriptions and view invoices</p>
                    </div>
                 </div>
                 <ChevronRight size={20} className="text-slate-300 group-hover:text-orange-500 transition-colors group-hover:translate-x-1" />
              </button>

           </div>
        </div>

        {/* --- SECTION 4: Danger Zone --- */}
        <div className="mt-12 mb-20">
           <div className="rounded-3xl bg-red-50 border border-red-200 p-8 flex items-center justify-between hover:border-red-300 transition-colors shadow-sm">
              <div>
                 <h3 className="text-xl font-black text-red-600 mb-2">Danger Zone</h3>
                 <p className="text-sm font-medium text-red-500/80">Permanently delete your account and all associated workspace data.</p>
              </div>
              <button className="px-8 py-3.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm shadow-[0_5px_15px_rgba(239,68,68,0.4)] transition-all hover:scale-105 border border-red-600">
                 Delete Account
              </button>
           </div>
        </div>

      </div>
    </div>
  );
};

export default SettingsPage;
