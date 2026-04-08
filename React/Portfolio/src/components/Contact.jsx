import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col justify-center"
    >
      <div className="text-center mb-16">
        <motion.div variants={itemVariants} className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl mb-4 border border-purple-500/20">
          <Send className="text-purple-400" size={32} />
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="text-gradient">Connect</span></motion.h2>
        <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
          Currently open to internships and frontend developer opportunities. Feel free to reach out if you have a project in mind or just want to say hi!
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl hover:border-purple-500/50 transition-colors flex items-center gap-6 group">
            <div className="p-4 bg-gray-800 rounded-xl group-hover:bg-purple-500/20 transition-colors">
              <Phone className="text-gray-300 group-hover:text-purple-400" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium tracking-wide uppercase mb-1">Phone</p>
              <p className="text-xl font-semibold">7305197294</p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl hover:border-blue-500/50 transition-colors flex items-center gap-6 group">
            <div className="p-4 bg-gray-800 rounded-xl group-hover:bg-blue-500/20 transition-colors">
              <Mail className="text-gray-300 group-hover:text-blue-400" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium tracking-wide uppercase mb-1">Email</p>
              <a href="mailto:aswithavijayakumar1120@gmail.com" className="text-lg sm:text-xl font-semibold break-all hover:text-blue-400 transition-colors">
                aswithavijayakumar1120@gmail.com
              </a>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 group">
            <div className="p-4 bg-gray-800 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
              <MapPin className="text-gray-300 group-hover:text-emerald-400" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium tracking-wide uppercase mb-1">Location</p>
              <p className="text-xl font-semibold text-gray-300">Open to Relocation / Remote</p>
            </div>
          </div>
        </motion.div>

        {/* Right side interactions */}
        <motion.div variants={itemVariants} className="glass-card p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-6">Social Profiles</h3>
            <div className="space-y-4">
              <a href="https://github.com/aswithaa201" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-gray-900/50 hover:bg-gray-800 rounded-xl transition-all border border-transparent hover:border-gray-700">
                <GithubIcon size={24} />
                <span className="font-semibold text-lg">GitHub Profile</span>
              </a>
              <a href="https://www.linkedin.com/in/aswitha-v-76b5013aa" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-gray-900/50 hover:bg-[#0a66c2]/20 rounded-xl transition-all border border-transparent hover:border-[#0a66c2]/50">
                <LinkedinIcon size={24} className="text-[#0a66c2]" />
                <span className="font-semibold text-lg text-blue-100">LinkedIn Network</span>
              </a>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-800">
            <a href="#" className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <Download size={20} />
              <span>Download Resume</span>
            </a>
            <p className="text-center text-sm text-gray-500 mt-4">(Resume file needs to be linked in code)</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
