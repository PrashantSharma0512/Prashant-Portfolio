"use client";

import React from "react";
import { motion } from "framer-motion";

const CHAPTERS = [
  {
    chapter: "Chapter 1",
    title: "The Initial Spark",
    year: "2021",
    content: "It all started with a curiosity for how things work under the hood. I wrote my first 'Hello World' and was instantly hooked on the power of creation through code.",
    technologies: ["Logic Building", "Java Fundamentals"],
  },
  {
    chapter: "Chapter 2",
    title: "The Deep Dive",
    year: "2022 - 2023",
    content: "The hobby turned into a passion. I immersed myself in the MERN stack, learning to build full-stack applications and managing databases while exploring the vast React ecosystem.",
    technologies: ["React", "Express", "Node.js", "MongoDB"],
  },
  {
    chapter: "Chapter 3",
    title: "The Professional Leap",
    year: "2024",
    content: "Bridging the gap between code and users. I focused on building real-world solutions like 'CoderHaveli', mastering high-performance web development and user experience.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    chapter: "Chapter 4",
    title: "The Future Horizon",
    year: "Present",
    content: "Today, I'm a developer who tells stories through software. I continue to push the boundaries of what's possible with modern web technologies and AI.",
    technologies: ["Innovation", "Full Stack Mastery"],
  },
];

const Journey = () => {
  return (
    <div className="section-padding border-b border-white/5" id="journey">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-center text-4xl sm:text-5xl font-bold text-white tracking-tight"
      >
        The <span className="text-accent">Odyssey</span>
      </motion.h2>
      <div className="max-w-4xl mx-auto relative px-2">
        {/* The Vertical Line */}
        <div className="absolute left-6 sm:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/50 via-purple-500/30 to-transparent" />

        {CHAPTERS.map((item, index) => (
          <div key={index} className="mb-20 last:mb-0 relative pl-16 sm:pl-32">
            {/* Year Bubble */}
            <motion.div 
              whileInView={{ scale: [0, 1.2, 1] }}
              viewport={{ once: true }}
              className="absolute left-[13px] sm:left-[37px] top-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary border-2 border-accent rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
            >
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full animate-pulse" />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-6 sm:p-8 hover:border-accent/30 transition-colors group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                <span className="text-accent font-mono text-xs uppercase tracking-[0.3em]">{item.chapter}</span>
                <span className="hidden sm:block text-slate-700">|</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors">{item.title}</h3>
                <span className="sm:ml-auto text-slate-500 font-mono text-sm">{item.year}</span>
              </div>
              
              <div className="relative">
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light italic pl-4 border-l-2 border-accent/20">
                  {item.content}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {item.technologies.map((tech, i) => (
                  <span key={i} className="text-[10px] sm:text-xs bg-accent/5 px-3 py-1 rounded-full text-slate-300 border border-white/5 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
