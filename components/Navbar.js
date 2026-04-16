"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="mb-20 flex items-center justify-between py-6 sticky top-0 z-[100] backdrop-blur-md">
      <div className="flex flex-shrink-0 items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white group">
          PS<span className="text-accent group-hover:animate-ping inline-block">.</span>
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center justify-center gap-8 glass-card px-8 py-2 border-white/5">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="nav-link text-xs uppercase tracking-[0.2em]">
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* Social Icons & Mobile Menu Button */}
      <div className="flex items-center gap-4 text-2xl">
        <div className="hidden md:flex items-center gap-5 text-slate-400">
          <a href="https://www.linkedin.com/in/prashant-sharma-0216ba251" target="_blank" className="hover:text-accent transition-all hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://github.com/PrashantSharma0512" target="_blank" className="hover:text-accent transition-all hover:scale-110">
            <FaGithub />
          </a>
        </div>
        
        <button 
          className="md:hidden text-white z-[110] p-2 glass-card border-white/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-primary/95 backdrop-blur-2xl z-[105] flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-4xl font-bold tracking-tight hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center gap-8 mt-12 text-3xl text-slate-400"
              >
                <a href="https://www.linkedin.com/in/prashant-sharma-0216ba251" target="_blank" className="hover:text-white">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/PrashantSharma0512" target="_blank" className="hover:text-white">
                  <FaGithub />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
