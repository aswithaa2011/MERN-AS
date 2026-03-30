import React from 'react';
import { BarChart3, Edit3, ShieldCheck, Zap } from 'lucide-react';

const Features = () => {
  const customFeatures = [
    {
      title: "Intuitive Editor",
      description: "Drag, drop, and customize with an interface designed for speed and logic.",
      icon: <Edit3 className="w-8 h-8 text-primary" />,
      color: "bg-pink-50 border-pink-100" // using light pink
    },
    {
      title: "Engagement Trends",
      description: "Monitor form completion rates, bounce metrics, and conversion stats.",
      icon: <BarChart3 className="w-8 h-8 text-secondary" />,
      color: "bg-violet-50 border-violet-100" // using light violet
    },
    {
      title: "Lightning Fast",
      description: "Optimized for extreme performance and zero-latency interactions.",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      color: "bg-yellow-50 border-yellow-100"
    },
    {
      title: "Bank-Grade Security",
      description: "Your workspace settings and data are protected with state-of-the-art encryption.",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      color: "bg-emerald-50 border-emerald-100"
    }
  ];

  return (
    <section id="features" className="py-24 bg-surface relative z-10 px-6 border-t border-borderCol">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-textMain">Designed for Curators</h2>
          <p className="text-textMuted text-lg font-medium">
            Every feature in Luminous is built to provide an editorial interface that feels responsive, vibrant, and inherently secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {customFeatures.map((f, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-2xl border ${f.color} transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 group cursor-default`}
            >
              <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm border border-borderCol transition-transform group-hover:scale-110">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-textMain">{f.title}</h3>
              <p className="text-textMuted text-sm leading-relaxed font-medium">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
