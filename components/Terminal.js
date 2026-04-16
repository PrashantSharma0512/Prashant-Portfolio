"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMMANDS = {
  help: "Available commands: about, skills, contact, clear, secret",
  about: "Prashant Sharma is a Full Stack Developer specializing in high-performance web applications.",
  skills: "React, Next.js, Node.js, Express, MongoDB, MySQL, Java, Tailwind CSS, Framer Motion.",
  contact: "Email: prashantsharma0512@gmail.com | LinkedIn: Prashant Sharma",
  secret: "Detecting unauthorized access... Just kidding! You found a hidden feature. 🚀",
};

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: "output", content: "Welcome to Prashant's Terminal. Type 'help' to begin." },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    
    if (cmd === "clear") {
      setHistory([]);
    } else if (cmd === "projects") {
      setHistory([
        ...history, 
        { type: "input", content: cmd }, 
        { type: "output", content: "Fetching top projects..." },
        { type: "image", content: "/projects/coderhaveli.png", label: "Project: CoderHaveli" }
      ]);
    } else if (COMMANDS[cmd]) {
      setHistory([...history, { type: "input", content: cmd }, { type: "output", content: COMMANDS[cmd] }]);
    } else if (cmd !== "") {
      setHistory([...history, { type: "input", content: cmd }, { type: "output", content: `Command not found: ${cmd}. Type 'help' for assistance.` }]);
    }
    
    setInput("");
  };

  return (
    <div className="section-padding border-b border-white/5" id="terminal">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center text-4xl sm:text-5xl font-bold text-white tracking-tight"
      >
        Interactive <span className="text-accent">Shell</span>
      </motion.h2>
      <div className="flex justify-center">
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl h-[450px] bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col font-mono text-xs sm:text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,255,0.01))] bg-[length:100%_4px,3px_100%] z-20 opacity-50"></div>
          
          {/* Terminal Header */}
          <div className="bg-slate-800/50 backdrop-blur-md px-4 py-3 flex items-center justify-between z-30 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">zsh — prashant — 80x24</div>
          </div>

          {/* Terminal Body */}
          <div 
            ref={terminalRef}
            className="flex-grow p-4 sm:p-6 overflow-y-auto space-y-3 text-green-400/90 z-20 custom-scrollbar"
          >
            {history.map((line, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex">
                  {line.type === "input" && <span className="text-blue-400 mr-2">$</span>}
                  <span className={line.type === "output" ? "text-slate-300" : ""}>
                    {line.content}
                  </span>
                </div>
                {line.type === "image" && (
                  <div className="mt-2 mb-4 max-w-xs border border-slate-700 rounded p-1 bg-black/50 overflow-hidden">
                     <p className="text-[10px] text-slate-500 mb-1">{line.label}</p>
                     <img src={line.content} alt={line.label} className="w-full h-auto grayscale hover:grayscale-0 transition-all opacity-80" />
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">$</span>
              <form onSubmit={handleCommand} className="flex-grow">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-green-400"
                  autoFocus
                />
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terminal;
