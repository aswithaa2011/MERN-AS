import { motion } from "framer-motion";
import { Cpu, Code, Database, LayoutTemplate, Smartphone, Zap } from "lucide-react";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  const skillCategories = [
    {
      title: "Frontend Core",
      icon: <LayoutTemplate className="text-blue-400" size={24} />,
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"]
    },
    {
      title: "Styling & UI",
      icon: <Smartphone className="text-purple-400" size={24} />,
      skills: ["Tailwind CSS", "Framer Motion", "Responsive Design", "UI/UX Concepts"]
    },
    {
      title: "State & Data",
      icon: <Database className="text-emerald-400" size={24} />,
      skills: ["API Integration", "RESTful APIs", "Local Storage", "SQL"]
    },
    {
      title: "Tools & Perf",
      icon: <Zap className="text-yellow-400" size={24} />,
      skills: ["Git & GitHub", "Vite", "NPM/Yarn", "Performance Optimization"]
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center"
    >
      <div className="mb-12 flex items-center gap-4">
        <Cpu className="text-blue-500" size={32} />
        <h2 className="text-4xl md:text-5xl font-bold">Technical <span className="text-gradient">Arsenal</span></h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
        {skillCategories.map((category, idx) => (
          <motion.div key={idx} variants={itemVariants} className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-500">
              {category.icon}
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-gray-800/80 border border-gray-700 hover:border-gray-500 rounded-lg text-sm font-medium text-gray-300 transition-colors shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
