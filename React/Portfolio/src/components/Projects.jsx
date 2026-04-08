import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const projects = [
    {
      title: "Glowra Cosmetics (E-Commerce)",
      desc: "A comprehensive e-commerce platform for cosmetics built with React. Features include user authentication via Context API, dynamic product grid layouts, customized cart state management, and protected routing. Designed with a clean, fully responsive UI utilizing Tailwind CSS and React Icons.",
      tech: ["React", "Tailwind CSS", "Context API", "React Router"],
      github: "https://github.com/aswithaa201",
      demo: "#",
      featured: true,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Task Management App",
      desc: "A sleek Todo application featuring real-time search, filtering capabilities, and dynamic state updates for efficient task tracking.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/aswithaa201",
      demo: "#",
      featured: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "CRUD Dashboard",
      desc: "Administrative dashboard with full CRUD functionality, form handling, validation, and dynamic state updates.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/aswithaa201",
      demo: "#",
      featured: false,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Dynamic UI Components",
      desc: "A collection of highly reusable and accessible UI components like modals, sliders, and navigation bars built from scratch.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/aswithaa201",
      demo: "#",
      featured: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto"
    >
      <div className="mb-12 flex items-center gap-4">
        <Layers className="text-purple-500" size={32} />
        <h2 className="text-4xl md:text-5xl font-bold">Featured <span className="text-gradient">Projects</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i} 
            variants={cardVariants}
            className={`glass-card p-6 flex flex-col group ${project.featured ? 'md:col-span-2 lg:col-span-2 relative overflow-hidden' : ''}`}
          >
            {project.featured && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-purple-500/30" />
            )}
            
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-lg`}>
              <ExternalLink size={24} className="text-white" />
            </div>

            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-6 flex-grow leading-relaxed">{project.desc}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs font-medium text-gray-300">
                  {t}
                </span>
              ))}
            </div>


          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
