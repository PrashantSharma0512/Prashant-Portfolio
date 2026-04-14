"use client";

import React from "react";
import { CONTACT } from "@/constants";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="border-b border-slate-900 pb-20" id="contact">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl text-white font-bold"
      >
        Get in Touch
      </motion.h2>
      <div className="flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 p-4"
        >
          <div className=" glass-card p-8 h-full flex flex-col justify-center space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
            <p className="text-slate-400 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-800 rounded-lg text-accent">
                  <FiMapPin size={24} />
                </div>
                <span>{CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-800 rounded-lg text-accent">
                  <FiPhone size={24} />
                </div>
                <span>{CONTACT.phoneNo}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-800 rounded-lg text-accent">
                  <FiMail size={24} />
                </div>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 p-4"
        >
          <form 
            action="https://formspree.io/f/mjkbvlqr" 
            method="POST"
            className="glass-card p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Project Inquiry"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="How can I help you?"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-glow text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Send Message
              <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
