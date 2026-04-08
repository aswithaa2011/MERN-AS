import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-4xl w-full text-center z-10 flex flex-col items-center">
        
        <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-purple-500/30 text-sm font-medium text-purple-300">
          <Terminal size={16} />
          <span>Hello World, I'm</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
          Aswitha V<br />
          <span className="text-gradient">Frontend Developer</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I craft responsive, dynamic, and visually stunning web applications. Currently building pixel-perfect experiences using React and modern CSS.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full">
          <Link to="/projects" className="group relative px-8 py-4 bg-white text-gray-950 font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center justify-center gap-2">
            <span>View My Work</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link to="/contact" className="px-8 py-4 glass-card font-bold rounded-xl hover:text-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center">
            Let's Discuss
          </Link>
        </motion.div>
        
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-gray-500 to-transparent rounded-full" />
      </motion.div>
    </motion.div>
  );
}
