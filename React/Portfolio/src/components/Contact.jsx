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
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl mb-4 border border-purple-500/20"
        >
          <Send className="text-purple-400" size={32} />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Let's <span className="text-gradient">Connect</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Currently open to internships and frontend developer opportunities.
          Feel free to reach out if you have a project in mind or just want to say hi!
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div variants={itemVariants} className="space-y-6">

          {/* Phone */}
          <div className="glass-panel p-6 rounded-2xl flex items-center gap-6">
            <div className="p-4 bg-gray-800 rounded-xl">
              <Phone className="text-gray-300" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase">Phone</p>
              <p className="text-xl font-semibold">7305197294</p>
            </div>
          </div>

          {/* Email */}
          <div className="glass-panel p-6 rounded-2xl flex items-center gap-6">
            <div className="p-4 bg-gray-800 rounded-xl">
              <Mail className="text-gray-300" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase">Email</p>
              <a
                href="mailto:aswithavijayakumar1120@gmail.com"
                className="text-lg font-semibold hover:text-blue-400"
              >
                aswithavijayakumar1120@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="glass-panel p-6 rounded-2xl flex items-center gap-6">
            <div className="p-4 bg-gray-800 rounded-xl">
              <MapPin className="text-gray-300" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase">Location</p>
              <p className="text-xl font-semibold text-gray-300">
                Open to Relocation / Remote
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={itemVariants}
          className="glass-card p-8 flex flex-col justify-between"
        >
          {/* Social */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Social Profiles</h3>

            <div className="space-y-4">
              <a
                href="https://github.com/aswithaa201"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl"
              >
                <GithubIcon size={24} />
                <span className="font-semibold">GitHub Profile</span>
              </a>

              <a
                href="https://www.linkedin.com/in/aswitha-v-76b5013aa"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl"
              >
                <LinkedinIcon size={24} />
                <span className="font-semibold">LinkedIn Network</span>
              </a>
            </div>
          </div>

          {/* Resume Button */}
          <div className="mt-10 pt-8 border-t border-gray-800">
            <a
              href="/Aswitha_Resume.pdf"
              download="Aswitha_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:shadow-lg"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>

            <p className="text-center text-sm text-gray-500 mt-4">
              Click to view or download resume
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}