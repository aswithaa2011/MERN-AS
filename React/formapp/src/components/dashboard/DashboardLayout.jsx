import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, FileText, BarChart2, Layers, Settings, Sparkles, Plus } from 'lucide-react';

const DashboardLayout = () => {
  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/dashboard" },
    { icon: <FileText size={20} />, label: "Forms", path: "/dashboard/forms" },
    { icon: <BarChart2 size={20} />, label: "Analytics", path: "/dashboard/analytics" },
    { icon: <Layers size={20} />, label: "Templates", path: "/dashboard/templates" },
    { icon: <Settings size={20} />, label: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div className="flex h-screen bg-background text-textMain overflow-hidden font-sans">
      
      {/* Sidebar - bright white surface */}
      <aside className="w-64 bg-surface border-r border-borderCol flex flex-col justify-between shrink-0 shadow-sm z-20">
        <div>
          {/* Logo Area */}
          <div className="h-20 flex items-center px-6 gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md shadow-primary/20">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wide text-primary">Luminous</span>
              <span className="text-[10px] tracking-[0.2em] font-semibold text-textMuted uppercase mt-[-2px]">Editor</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="px-4 space-y-1 mt-4">
            {navItems.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                end={item.path === '/dashboard'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                    isActive 
                      ? 'bg-primary/10 text-primary border border-primary/20 shadow-sm' 
                      : 'text-textMuted hover:bg-slate-100 hover:text-textMain'
                  }`
                }
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom User Area */}
        <div className="p-4 flex flex-col gap-4">
          <Link to="/dashboard/forms/new" className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center gap-2 text-white font-bold shadow-lg hover:scale-[1.02] hover:shadow-xl transition-transform hover:shadow-primary/30">
            <Plus size={20} />
            <span>New Form</span>
          </Link>
          
          <div className="flex items-center gap-3 px-2 py-2 mt-2 border-t border-borderCol pt-6">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden shrink-0 border border-borderCol shadow-sm">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Alex Rivera" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-bold text-textMain truncate">Alex Rivera</span>
              <span className="text-xs font-semibold text-secondary">Pro Plan</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col bg-background relative overflow-y-auto hidden-scrollbar">
        {/* Lighter noise background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply z-0"></div>
        <Outlet />
      </main>

    </div>
  );
};

export default DashboardLayout;
