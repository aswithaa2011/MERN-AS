import React from 'react';
import { Plus, Search, Filter, MoreVertical, Edit2, BarChart2, Share2, Eye, Clock, Trash2, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormsPage = () => {
  const mockForms = [
    {
      id: 1,
      title: 'Customer Feedback Survey 2026',
      status: 'Active',
      responses: 1243,
      views: 4500,
      lastUpdated: '2 hours ago',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 2,
      title: 'Beta Registration Form',
      status: 'Active',
      responses: 856,
      views: 2100,
      lastUpdated: '1 day ago',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      id: 3,
      title: 'Internal Team Health Check',
      status: 'Draft',
      responses: 0,
      views: 0,
      lastUpdated: '3 days ago',
      color: 'from-slate-400 to-slate-500'
    },
    {
      id: 4,
      title: 'Product Q2 Launch Waitlist',
      status: 'Closed',
      responses: 5200,
      views: 12500,
      lastUpdated: '1 month ago',
      color: 'from-rose-400 to-red-500'
    },
    {
      id: 5,
      title: 'Partner Onboarding Application',
      status: 'Active',
      responses: 45,
      views: 120,
      lastUpdated: '5 hours ago',
      color: 'from-violet-400 to-fuchsia-500'
    },
    {
      id: 6,
      title: 'Annual Retreat RSVPs',
      status: 'Active',
      responses: 112,
      views: 150,
      lastUpdated: '2 weeks ago',
      color: 'from-amber-400 to-orange-500'
    }
  ];

  return (
    <div className="flex-1 p-8 pt-10 min-h-screen relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/80 to-purple-50/50 -z-10" />
      
      {/* Header section with glassmorphic cards */}
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                <Filter className="w-5 h-5 text-white" />
              </div>
              My Forms
            </h1>
            <p className="text-slate-500 mt-2 font-medium">Manage and monitor all your form campaigns.</p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search forms..." 
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary shadow-sm text-sm transition-all"
              />
            </div>
            <Link to="/dashboard/forms/new" className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all text-sm whitespace-nowrap">
              <Plus className="w-4 h-4" />
              Create Form
            </Link>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Create New Form Card Component */}
          <Link to="/dashboard/forms/new" className="group rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50/50 hover:bg-white hover:border-primary/50 transition-all cursor-pointer flex flex-col items-center justify-center p-8 min-h-[280px]">
            <div className="w-16 h-16 rounded-full bg-slate-200 group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors">
              <Plus className="w-8 h-8 text-slate-500 group-hover:text-primary" />
            </div>
            <h3 className="text-lg font-bold text-slate-700 group-hover:text-primary">Start from Scratch</h3>
            <p className="text-sm text-slate-500 text-center mt-2">Create a beautiful new form using our drag and drop builder</p>
          </Link>

          {/* Render Mock Forms */}
          {mockForms.map((form) => (
            <div key={form.id} className="group relative rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden transition-all duration-300 hover:-translate-y-1">
              {/* Color Bar Accent */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${form.color} opacity-80`} />
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wide uppercase border ${
                    form.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
                    form.status === 'Draft' ? 'bg-slate-50 text-slate-600 border-slate-200' : 
                    'bg-rose-50 text-rose-600 border-rose-100'
                  }`}>
                    {form.status}
                  </div>
                  <button className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-1.5 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-800 line-clamp-1 mb-1">{form.title}</h3>
                  <div className="flex items-center text-xs font-medium text-slate-500 gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Updated {form.lastUpdated}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 relative">
                  <div className="bg-slate-50 rounded-xl p-3 flex flex-col gap-1 border border-slate-100/50">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Eye className="w-3 h-3" /> Views
                    </span>
                    <span className="text-lg font-bold text-slate-800">{form.views.toLocaleString()}</span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 flex flex-col gap-1 border border-slate-100/50">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <BarChart2 className="w-3 h-3" /> Submissions
                    </span>
                    <span className="text-lg font-bold text-slate-800">{form.responses.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-1">
                  <div className="flex gap-1">
                    <button className="p-2 text-slate-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors tooltip-trigger" title="Edit Form">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" title="View Analytics">
                      <BarChart2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" title="Settings">
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex gap-1">
                    <button className="p-2 text-slate-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" title="Share Form">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors" title="Delete Form">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormsPage;
