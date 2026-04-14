"use client";

import React from "react";
import { HERO_CONTENT } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const STORY_STEPS = [
    "It all started with a single 'Hello World'...",
    "Then came the deep dive into Full Stack ecosystems...",
    "Now I build scalable, high-impact platforms like CoderHaveli.",
    "Welcome to my story. Every line of code has a reason."
  ];

  const thoughtBubbleMessages = [
    "Thinking in React...",
    "Designing for the future.",
    "Crafting clean code.",
    "Ready for the next challenge!"
  ];

  const [messageIndex, setMessageIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % thoughtBubbleMessages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-b border-slate-900 pb-4 lg:mb-35 pt-20 lg:pt-0 overflow-x-hidden" id="hero">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start overflow-hidden px-4 lg:px-0">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 lg:pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white text-center lg:text-left"
            >
              Prashant Sharma
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent font-medium"
            >
              Full Stack Developer
            </motion.span>

            <div className="my-2 max-w-xl py-6 min-h-[160px] text-center lg:text-left">
              {STORY_STEPS.map((step, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 + i * 1.5 }}
                  className="mb-4 text-slate-400 text-base lg:text-lg leading-relaxed font-light italic"
                >
                  {i === 2 ? <strong>{step}</strong> : step}
                </motion.p>
              ))}
            </div>
            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="mt-6 flex justify-center lg:justify-start w-full"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1XBSZVnzrvx2dMg9GnSEoNvRp1CK3z6Wt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-glow text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-accent/20 active:scale-95"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mb-10 lg:mb-0">
          <div className="flex justify-center relative scale-90 lg:scale-100">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="relative group"
            >
              {/* Thought Bubble */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={messageIndex}
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.8 }}
                  className="absolute -top-16 lg:-top-20 right-0 lg:-left-10 bg-accent text-white px-4 py-2 rounded-2xl text-xs lg:text-sm font-medium shadow-xl z-30 whitespace-nowrap"
                >
                  {thoughtBubbleMessages[messageIndex]}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rotate-45" />
                </motion.div>
              </AnimatePresence>

              {/* Decorative background for image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="relative rounded-2xl overflow-hidden glass-card w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]"
              >
                <img
                  src="/avatar.png"
                  alt="Developer Avatar"
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
