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
    <div className="pb-20" id="terminal">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-bold text-white px-4"
      >
        Interactive Terminal
      </motion.h2>
      <div className="flex justify-center px-4">
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-3xl h-80 bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl flex flex-col font-mono text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] z-10 opacity-30"></div>
          
          {/* Terminal Header */}
          <div className="bg-slate-800 px-4 py-2 flex items-center justify-between z-20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-slate-400 text-xs">visitor@prashant-portfolio: ~</div>
          </div>

          {/* Terminal Body */}
          <div 
            ref={terminalRef}
            className="flex-grow p-4 overflow-y-auto space-y-2 text-green-400 z-20"
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
