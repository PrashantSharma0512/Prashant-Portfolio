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
    <div className="border-b border-slate-900 pb-20" id="journey">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold text-white uppercase tracking-[0.2em]"
      >
        The Journey
      </motion.h2>
      <div className="max-w-4xl mx-auto px-4">
        {CHAPTERS.map((item, index) => (
          <div key={index} className="mb-20 last:mb-0 relative pl-8 border-l border-slate-800">
            {/* Year Bubble */}
            <div className="absolute -left-[18px] top-0 w-9 h-9 bg-primary border-2 border-accent rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_#6366f1]">
              <div className="w-2 h-2 bg-accent rounded-full" />
            </div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <span className="text-accent font-mono text-sm uppercase tracking-widest">{item.chapter}</span>
                <span className="hidden md:block text-slate-700">|</span>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <span className="md:ml-auto text-slate-500 font-medium">{item.year}</span>
              </div>
              
              <p className="text-slate-400 text-lg leading-relaxed text-justify font-light italic border-l-2 border-accent/20 pl-4">
                "{item.content}"
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-slate-900 px-3 py-1 rounded-full text-slate-500 border border-slate-800">
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
