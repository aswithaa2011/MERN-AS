import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/skills", name: "Skills" },
    { path: "/projects", name: "Projects" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-panel border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300">
            <Code2 size={24} className="text-white" />
          </div>
          <span className="text-2xl font-bold font-outfit text-white tracking-wide">
            Aswitha<span className="text-purple-500">.</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-sm font-medium tracking-wider uppercase text-gray-300 hover:text-white transition-colors py-2"
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* SOCIALS & MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 border-l border-gray-700 pl-6 ml-2">
            <a href="https://github.com/aswithaa201" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aswitha-v-76b5013aa" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0a66c2] transition-colors">
              <LinkedinIcon size={20} />
            </a>
          </div>
          
          <button 
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV MENU */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-b border-gray-800"
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium py-2 border-b border-gray-800 ${
                location.pathname === link.path ? "text-purple-400" : "text-gray-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 pt-2 pb-4">
            <a href="https://github.com/aswithaa201" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/aswitha-v-76b5013aa" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0a66c2]">
              <LinkedinIcon size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
