import { motion } from "framer-motion";
import { User, Target, Coffee, Code2, LayoutTemplate } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col justify-center"
    >
      <div className="mb-12 flex items-center gap-4">
        <User className="text-indigo-500" size={32} />
        <h2 className="text-4xl md:text-5xl font-bold">About <span className="text-gradient">Me</span></h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-center">
        {/* Left Col - Graphic / Avatar representation */}
        <motion.div variants={itemVariants} className="lg:col-span-2 relative flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full glass-panel border-[8px] border-gray-900 shadow-[0_0_40px_rgba(79,70,229,0.3)] flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-700" />
            <Code2 size={100} className="text-gray-400 group-hover:text-white transition-colors duration-500 relative z-10" />
            
            {/* Orbital Rings */}
            <div className="absolute inset-2 border border-gray-700/50 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-8 border border-gray-600/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          </div>
        </motion.div>

        {/* Right Col - Text */}
        <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
          <div className="glass-card p-8 relative">
            <div className="absolute -top-4 -left-4 p-3 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/30">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-outfit">My Journey</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a passionate frontend developer obsessed with creating clean, intuitive user interfaces and butter-smooth experiences. I specialize in building robust web applications using React.js and modern CSS frameworks like Tailwind.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              My recent flagship project is <strong>Glowra Cosmetics</strong>, a full-featured e-commerce platform built from the ground up. I focused deeply on Context-based authentication, private routing, and a clean product shopping experience to blend aesthetic design with practical functionality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-blue-500 flex items-start gap-4">
              <Coffee className="text-blue-400" size={24} />
              <div>
                <h4 className="font-bold text-gray-100">Clean Code</h4>
                <p className="text-sm text-gray-400 mt-1">Writing maintainable, DRY, and scalable components.</p>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-purple-500 flex items-start gap-4">
              <LayoutTemplate className="text-purple-400" size={24} />
              <div>
                <h4 className="font-bold text-gray-100">Pixel Perfect Design</h4>
                <p className="text-sm text-gray-400 mt-1">Transforming designs into flawless interactive realities.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
