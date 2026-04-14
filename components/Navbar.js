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
    <nav className="mb-20 flex items-center justify-between py-6 sticky top-0 z-50 backdrop-blur-md">
      <div className="flex flex-shrink-0 items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          PS<span className="text-accent">.</span>
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center justify-center gap-8">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="nav-link text-sm uppercase tracking-widest">
            {link.name}
          </Link>
        ))}
      </div>

      {/* Social Icons & Mobile Menu Button */}
      <div className="flex items-center gap-4 text-2xl">
        <div className="hidden md:flex items-center gap-4 text-slate-400">
          <a href="https://www.linkedin.com/in/prashant-sharma-0216ba251" target="_blank" className="hover:text-white transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://github.com/PrashantSharma0512" target="_blank" className="hover:text-white transition-colors">
            <FaGithub />
          </a>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-b border-white/5 z-[100] shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-white text-xl font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex justify-center gap-6 mt-4 text-2xl text-slate-400">
                <a href="https://www.linkedin.com/in/prashant-sharma-0216ba251" target="_blank">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/PrashantSharma0512" target="_blank">
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
