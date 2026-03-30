import React from 'react';
import { Search, Eye, Bell, Type, AlignLeft, CheckSquare, ChevronDown, Calendar, UploadCloud, GripVertical, Check, Plus } from 'lucide-react';

const CreateFormPage = () => {
  return (
    <div className="flex flex-col h-full bg-background relative z-10 w-full overflow-hidden">
      {/* Top Header */}
      <header className="h-20 border-b border-borderCol px-8 flex items-center justify-between bg-surface/90 backdrop-blur-md z-20 shrink-0 shadow-sm">
        <div className="flex items-center gap-4">
           <h1 className="text-xl font-extrabold tracking-tight text-textMain">Contact Us Form</h1>
           <span className="px-3 py-1 bg-green-100 text-emerald-600 text-[10px] font-bold tracking-wider rounded-full shadow-sm border border-green-200">LIVE</span>
        </div>
        
        <div className="relative w-96 hidden lg:block group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search components..." 
            className="w-full bg-slate-50 border border-slate-200 shadow-inner rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-medium text-textMain"
          />
        </div>
        
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-sm font-bold text-textMuted hover:text-textMain transition-colors">
             <Eye size={18} /> Preview
          </button>
          
          <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-orange-400 text-white font-bold text-sm shadow-[0_5px_15px_rgba(236,72,153,0.3)] hover:scale-105 transition-transform">
             Save Changes
          </button>

          <div className="border-l border-borderCol pl-6 flex items-center justify-center">
             <button className="relative text-textMuted hover:text-textMain transition-colors">
                <Bell size={20} />
             </button>
          </div>
        </div>
      </header>

      {/* Main Builder Space */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Panel: Form Elements */}
        <div className="w-80 border-r border-borderCol bg-surface p-6 flex flex-col overflow-y-auto shrink-0 shadow-sm z-10">
           <h3 className="text-xs font-black tracking-wider text-textMuted mb-6 uppercase">Form Elements</h3>
           
           <div className="space-y-3">
              {[
                { label: "Short Text", desc: "Name, Title, etc.", icon: <Type size={20} className="text-primary"/> },
                { label: "Paragraph", desc: "Bio, Feedback, etc.", icon: <AlignLeft size={20} className="text-cyan-500"/> },
                { label: "Checkboxes", desc: "Multiple choice", icon: <CheckSquare size={20} className="text-emerald-500"/> },
                { label: "Dropdown", desc: "Select from list", icon: <ChevronDown size={20} className="text-secondary"/> },
                { label: "Date Picker", desc: "Events, Birthdays", icon: <Calendar size={20} className="text-blue-500"/> },
                { label: "File Upload", desc: "Max 25MB per file", icon: <UploadCloud size={20} className="text-orange-500"/> },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-borderCol hover:border-slate-300 transition-all cursor-grab hover:shadow-md group">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm border border-slate-100 transition-transform group-hover:scale-110">
                         {item.icon}
                      </div>
                      <div>
                         <div className="font-extrabold text-sm text-textMain">{item.label}</div>
                         <div className="text-[10px] font-medium text-textMuted mt-0.5">{item.desc}</div>
                      </div>
                   </div>
                   <GripVertical size={16} className="text-slate-300 group-hover:text-slate-500" />
                </div>
              ))}
           </div>

           {/* Pro Tip Card */}
           <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-white border border-violet-100 shadow-sm relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-violet-200 blur-2xl rounded-full"></div>
              <h4 className="text-[10px] font-black tracking-wider text-secondary mb-2 uppercase">Pro Tip</h4>
              <p className="text-xs font-medium text-slate-600 leading-relaxed">
                 Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] shadow-sm font-bold">CMD</kbd> + <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] shadow-sm font-bold">L</kbd> to quickly switch between layout modes.
              </p>
           </div>
        </div>

        {/* Center Panel: Canvas */}
        <div className="flex-1 bg-slate-100 relative overflow-y-auto p-12 flex justify-center items-start shadow-inner">
           {/* Light Mode Dotted Grid Background */}
           <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
           
           {/* Form Container Mobile Styling */}
           <div className="relative w-full max-w-lg rounded-[2.5rem] bg-white border border-borderCol shadow-xl p-12 mt-10">
              <h2 className="text-4xl font-black tracking-tight mb-2 text-center text-textMain">Get in Touch</h2>
              <p className="text-textMuted text-center font-medium text-sm mb-12 px-4">We'd love to hear from you. Please fill out this form and we'll get back to you shortly.</p>
              
              <div className="space-y-8">
                 {/* Active Editing Component */}
                 <div className="relative">
                    {/* Glowing Outline */}
                    <div className="absolute -inset-4 border-[3px] border-primary rounded-3xl pointer-events-none z-10 shadow-[0_0_20px_rgba(236,72,153,0.15)] bg-pink-50/30">
                       <span className="absolute -top-3 left-6 px-3 py-1 text-[10px] font-black tracking-wider rounded-full bg-primary text-white shadow-md">EDITING</span>
                    </div>
                    
                    <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-slate-200 z-0">
                       <label className="block text-[10px] font-black tracking-wider text-primary uppercase mb-3">Full Name</label>
                       <div className="w-full h-12 bg-slate-50 border border-slate-200 shadow-inner rounded-xl flex items-center px-4">
                          <span className="text-slate-400 font-medium text-sm">e.g. Jane Doe</span>
                       </div>
                    </div>
                 </div>

                 {/* Inactive Component */}
                 <div className="relative p-6 px-4">
                    <label className="block text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-3">Email Address</label>
                    <div className="w-full px-2">
                       <span className="text-slate-400 text-sm font-medium">jane@company.com</span>
                    </div>
                 </div>

                 {/* Inactive Component */}
                 <div className="relative p-6 px-4">
                    <label className="block text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-3">Your Message</label>
                    <div className="w-full px-2 border-b border-dashed border-slate-200 pb-2">
                       <span className="text-slate-400 text-sm font-medium">How can we help you?</span>
                    </div>
                 </div>
              </div>

              {/* Fake Add Button bottom of Canvas */}
              <div className="mt-16 flex justify-center pb-4">
                 <button className="w-12 h-12 rounded-full bg-white hover:bg-slate-50 border border-slate-200 flex items-center justify-center transition-colors shadow-md hover:shadow-lg text-primary">
                    <Plus size={24} />
                 </button>
              </div>
           </div>
        </div>

        {/* Right Panel: Field Properties */}
        <div className="w-80 border-l border-borderCol bg-surface p-6 flex flex-col overflow-y-auto shrink-0 shadow-sm z-10 relative">
           <h3 className="text-xs font-black tracking-wider text-textMuted mb-6 uppercase">Field Properties</h3>
           
           <div className="space-y-6">
              {/* Properties: Label Text */}
              <div>
                 <label className="block text-[10px] font-bold tracking-wider text-textMuted uppercase mb-2">Label Text</label>
                 <input 
                   type="text" 
                   value="Full Name" 
                   readOnly
                   className="w-full bg-slate-50 border border-slate-200 shadow-sm rounded-lg px-4 py-2.5 text-sm font-bold text-textMain focus:outline-none"
                 />
              </div>

              {/* Properties: Placeholder */}
              <div>
                 <label className="block text-[10px] font-bold tracking-wider text-textMuted uppercase mb-2">Placeholder</label>
                 <input 
                   type="text" 
                   value="e.g. Jane Doe" 
                   readOnly
                   className="w-full bg-slate-50 border border-slate-200 shadow-sm rounded-lg px-4 py-2.5 text-sm font-bold text-textMain focus:outline-none"
                 />
              </div>

              {/* Properties: Required Toggle */}
              <div className="flex items-center justify-between pt-4 pb-2 border-b border-borderCol">
                 <span className="text-sm font-extrabold text-textMain">Required Field</span>
                 <div className="w-10 h-6 bg-primary rounded-full relative cursor-pointer shadow-inner">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all"></div>
                 </div>
              </div>

              {/* Properties: Validation Rule */}
              <div>
                 <label className="block text-[10px] font-bold tracking-wider text-textMuted uppercase mb-2 pt-2">Validation Rule</label>
                 <div className="relative">
                    <select className="w-full bg-slate-50 border border-slate-200 shadow-sm rounded-lg px-4 py-2.5 text-sm font-bold text-textMain appearance-none cursor-pointer">
                       <option>None</option>
                       <option>Email</option>
                       <option>URL</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                 </div>
              </div>

              {/* Properties: CSS Classes */}
              <div>
                 <label className="block text-[10px] font-bold tracking-wider text-textMuted uppercase mb-2 pt-2">CSS Classes</label>
                 <div className="w-full bg-slate-50 border border-slate-200 shadow-inner rounded-lg px-4 py-3 text-xs font-mono font-bold text-pink-600 break-words">
                    form-input-primary shadow-sm
                 </div>
              </div>
              
              {/* Properties: Logic */}
              <div className="pt-2">
                 <label className="block text-[10px] font-bold tracking-wider text-textMuted uppercase mb-2">Logic & Flow</label>
                 <button className="w-full flex items-center justify-between bg-white border border-slate-200 shadow-sm hover:border-primary/50 rounded-lg px-4 py-3 transition-all group">
                    <span className="text-sm font-extrabold text-textMain group-hover:text-primary transition-colors">Conditional Logic</span>
                    <span className="text-slate-400 font-bold group-hover:text-primary transition-colors">›</span>
                 </button>
                 <p className="text-[10px] text-slate-500 font-medium mt-2 leading-relaxed">Show or hide this field based on other form responses.</p>
              </div>
           </div>

           {/* Editor Info box pinned to bottom */}
           <div className="mt-12 p-4 rounded-xl bg-pink-50 border border-pink-100 shadow-sm relative overflow-hidden">
              <div className="absolute w-1 h-full bg-primary left-0 top-0"></div>
              <div className="flex items-center gap-2 mb-2">
                 <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-[10px] font-black text-primary shadow-sm border border-pink-100">i</div>
                 <h4 className="text-[10px] font-black tracking-wider text-primary uppercase">Editor Context</h4>
              </div>
              <p className="text-xs font-medium text-slate-600 leading-relaxed pr-2">
                 You are currently editing the "Basic Details" section of the "Contact Us" journey.
              </p>
           </div>

        </div>
      </div>
    </div>
  );
};

export default CreateFormPage;
