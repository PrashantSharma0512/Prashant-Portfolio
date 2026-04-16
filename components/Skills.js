"use client";

import React from "react";
import { SKILLS } from "@/constants";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className="section-padding border-b border-white/5" id="skills">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-center text-4xl sm:text-5xl font-bold text-white tracking-tight"
      >
        My <span className="text-accent">Toolkit</span>
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
        {SKILLS.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={iconVariants(2 + index * 0.2)}
              initial="initial"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate="animate"
              className="group relative"
            >
              <div className="rounded-3xl border border-white/10 p-6 sm:p-8 glass-card flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                <Icon className={`text-5xl sm:text-6xl ${skill.color} transition-all duration-300 group-hover:drop-shadow-[0_0_15px_currentColor]`} />
                <span className="text-slate-400 text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {skill.name}
                </span>
              </div>
              
              {/* Background glow */}
              <div className={`absolute -inset-2 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity -z-10 ${skill.color.replace('text-', 'bg-')}`} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
