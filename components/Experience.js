"use client";

import React from "react";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer (Self-Paced/Academic)",
    company: "Portfolio Development",
    description: "Building modern, scalable web applications like CoderHaveli and various e-commerce platforms using Next.js, React, and Node.js.",
    technologies: ["Next.js", "MongoDB", "Express", "Tailwind"],
  },
  {
    year: "2023 - 2024",
    role: "Open Source Contributor",
    company: "Various Projects",
    description: "Contributing to community projects, refining problem-solving skills on LeetCode/GFG, and mastering core Data Structures & Algorithms.",
    technologies: ["Java", "JavaScript", "React"],
  },
  {
    year: "2021 - 2024",
    role: "Academic Milestone",
    company: "Computer Science Education",
    description: "Developed a strong foundation in database management (MySQL), core programming (Java), and frontend development.",
    technologies: ["MySQL", "HTML/CSS", "Java"],
  },
];

const Experience = () => {
  return (
    <div className="border-b border-slate-900 pb-20" id="experience">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold text-white"
      >
        Experience
      </motion.h2>
      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-20">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-12 ml-6">
            <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] mt-1.5 shadow-[0_0_10px_#6366f1]" />
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-wrap lg:justify-between"
            >
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm font-semibold text-slate-500 uppercase tracking-widest">
                  {experience.year}
                </p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-bold text-xl text-white">
                  {experience.role} -{" "}
                  <span className="text-sm text-purple-200">
                    {experience.company}
                  </span>
                </h6>
                <p className="mb-4 text-slate-400 text-justify leading-relaxed">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mt-2 rounded bg-slate-900/50 px-2 py-1 text-xs font-medium text-purple-500 border border-purple-900/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
