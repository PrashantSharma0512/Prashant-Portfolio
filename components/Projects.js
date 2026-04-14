"use client";

import React from "react";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="border-b border-slate-900 pb-4" id="projects">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white font-bold"
      >
        Projects
      </motion.h2>
      <div className="space-y-24">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center group">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <div className="relative overflow-hidden rounded-xl glass-card aspect-video lg:w-72 lg:h-44 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.link} target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <FiExternalLink className="text-white text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 lg:pl-10 mt-6 lg:mt-0"
            >
              <h6 className="mb-2 font-semibold text-2xl text-white group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
                {project.title}
                {project.title === "CoderHaveli" && (
                   <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full border border-accent/30 font-mono animate-pulse">
                     The Crown Jewel
                   </span>
                )}
              </h6>
              
              <p className="mb-4 text-slate-400 leading-relaxed text-justify">
                {project.description}
              </p>

              {/* Story Beat (Easter Egg) */}
              <div className="mb-4 p-3 bg-slate-900/30 border-l-2 border-accent rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1 italic">Behind the Scene</p>
                <p className="text-sm text-slate-400 italic">
                  {project.title === "CoderHaveli" 
                    ? "Born from a desire to democratize high-end coding education. This project pushed me to master state management and complex backend architectures."
                    : "A direct answer to a real-world problem I encountered. Built with focus on accessibility and minimal overhead."}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-slate-900/50 px-3 py-1 text-sm font-medium text-purple-400 border border-purple-900/30"
                  >
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

export default Projects;
