"use client";

import React from "react";
import { CONTACT } from "@/constants";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="section-padding border-b border-primary/50" id="contact">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-center text-4xl sm:text-5xl font-bold text-white tracking-tight"
      >
        Let's <span className="text-accent">Connect</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
        {/* Contact Info */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="glass-card p-8 border-white/5 relative overflow-hidden group">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group/item">
                <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover/item:bg-accent group-hover/item:text-white transition-all duration-300">
                  <FiMail className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
                  <a href={`mailto:${CONTACT.email}`} className="text-slate-200 hover:text-accent font-medium text-lg transition-colors">
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group/item">
                <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover/item:bg-accent group-hover/item:text-white transition-all duration-300">
                  <FiPhone className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Phone</p>
                  <a href={`tel:${CONTACT.phoneNo}`} className="text-slate-200 hover:text-accent font-medium text-lg transition-colors">
                    {CONTACT.phoneNo}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group/item">
                <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover/item:bg-accent group-hover/item:text-white transition-all duration-300">
                  <FiMapPin className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-slate-200 font-medium text-lg">{CONTACT.address}</p>
                </div>
              </div>
            </div>
            
            {/* Background design */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 group-hover:bg-accent/10 transition-colors" />
          </div>
          
          <div className="glass-card p-8 border-white/5">
            <h4 className="text-white font-bold mb-4">Availability</h4>
            <p className="text-slate-400 text-sm leading-relaxed italic">
              Currently open to relocation and remote opportunities. I respond within 24 hours.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
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
