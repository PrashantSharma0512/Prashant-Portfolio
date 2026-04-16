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
  const [taglineText, setTaglineText] = React.useState("");
  const fullTagline = "Full Stack Developer";

  React.useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTaglineText(fullTagline.slice(0, i));
      i++;
      if (i > fullTagline.length) clearInterval(typingInterval);
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % thoughtBubbleMessages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Magnetic Button Effect
  const btnRef = React.useRef(null);
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    btnRef.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    btnRef.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <div className="border-b border-slate-900 pb-10 lg:mb-35 pt-10 lg:pt-0 overflow-x-hidden min-h-[80vh] flex items-center" id="hero">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-0 w-full">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start overflow-hidden px-4 lg:px-0">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 lg:pb-8 text-4xl sm:text-5xl lg:text-8xl font-bold tracking-tight lg:mt-16 text-white text-center lg:text-left leading-tight"
            >
              Prashant Sharma
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-accent via-purple-400 to-pink-400 bg-clip-text text-xl sm:text-2xl lg:text-4xl tracking-tight text-transparent font-semibold h-10 lg:h-14"
            >
              {taglineText}
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[2px] h-[70%] bg-accent ml-1 align-middle"
              />
            </motion.span>

            <div className="my-2 max-w-xl py-4 min-h-[140px] text-center lg:text-left">
              {STORY_STEPS.map((step, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 + i * 1.2 }}
                  className="mb-3 text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed font-light italic"
                >
                  {i === 2 ? <strong className="text-slate-200">{step}</strong> : step}
                </motion.p>
              ))}
            </div>
            
            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="mt-4 flex justify-center lg:justify-start w-full relative"
            >
              <motion.a
                ref={btnRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                href="https://drive.google.com/uc?export=download&id=1XBSZVnzrvx2dMg9GnSEoNvRp1CK3z6Wt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-glow text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] active:scale-95 group relative overflow-hidden"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mt-10 lg:mt-0">
          <div className="flex justify-center relative scale-75 sm:scale-90 lg:scale-100">
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
                  className="absolute -top-16 lg:-top-20 right-0 lg:-left-10 bg-accent text-white px-5 py-2 rounded-2xl text-xs lg:text-sm font-semibold shadow-2xl z-30 whitespace-nowrap"
                >
                  {thoughtBubbleMessages[messageIndex]}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rotate-45" />
                </motion.div>
              </AnimatePresence>

              {/* Decorative background for image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="relative rounded-3xl overflow-hidden glass-card w-[280px] h-[280px] lg:w-[450px] lg:h-[450px] border-white/20 shadow-2xl"
              >
                <img
                  src="/avatar.png"
                  alt="Prashant Sharma"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
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
