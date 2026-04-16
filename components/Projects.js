"use client";

import React, { useRef } from "react";
import { PROJECTS } from "@/constants";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-8 lg:gap-16 group">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/3 relative"
      >
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="relative overflow-hidden rounded-2xl glass-card aspect-video transition-all duration-500 shadow-2xl border-white/10"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
            <a 
              href={project.link} 
              target="_blank" 
              className="p-4 bg-accent rounded-full hover:scale-110 transition-transform shadow-xl"
              title="View Project"
            >
              <FiExternalLink className="text-white text-2xl" />
            </a>
          </div>
        </div>
        
        {/* Shadow effect */}
        <div className="absolute -inset-2 bg-accent/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
      >
        <span className="text-accent font-mono text-sm uppercase tracking-widest mb-2">Featured Project</span>
        <h3 className="mb-4 font-bold text-3xl sm:text-4xl text-white group-hover:text-accent transition-colors duration-300 flex flex-wrap justify-center lg:justify-start items-center gap-3">
          {project.title}
          {project.title === "CoderHaveli" && (
             <span className="text-[10px] bg-accent/20 text-accent px-3 py-1 rounded-full border border-accent/30 font-mono">
               THE CROWN JEWEL
             </span>
          )}
        </h3>
        
        <div className="glass-card p-6 mb-6 relative z-10 border-white/5 hover:border-white/10 transition-colors">
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-slate-900 border border-slate-800 px-4 py-1 text-xs font-semibold text-accent/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="section-padding border-b border-slate-900/50" id="projects">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-center text-4xl sm:text-5xl font-bold text-white tracking-tight"
      >
        Personal <span className="text-accent">Projects</span>
      </motion.h2>
      <div className="space-y-32">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
