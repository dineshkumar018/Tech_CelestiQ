"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const InstagramIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Contact Us
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-[#00D4FF] mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(0,212,255,0.8)]" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-zinc-400"
          >
            Ready to start your project? Let's talk about your vision.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-[#030712]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden group"
          >
            {/* Ambient Background Glow inside the form */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />
            
            <form className="relative z-10 flex flex-col gap-6">
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-300">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/50 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-zinc-300">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-medium text-zinc-300">Service Required</label>
                  <div className="relative">
                    <select 
                      id="service" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white appearance-none focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/50 transition-all"
                    >
                      <option value="" disabled selected className="text-zinc-500 bg-[#030712]">Select a service</option>
                      <option value="software" className="bg-[#030712]">Software Development</option>
                      <option value="web" className="bg-[#030712]">Web Development</option>
                      <option value="mobile" className="bg-[#030712]">Mobile Apps</option>
                      <option value="marketing" className="bg-[#030712]">Digital Marketing</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="details" className="text-sm font-medium text-zinc-300">Project Details</label>
                <textarea 
                  id="details" 
                  rows={5}
                  placeholder="Tell us about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/50 transition-all resize-none"
                />
              </div>

              <button 
                type="button" 
                className="w-full mt-2 bg-gradient-to-r from-[#00D4FF] to-[#007BFF] hover:opacity-90 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(0,123,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Info Cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#030712]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-start gap-5 hover:border-[#00D4FF]/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all group"
            >
              <div className="bg-[#007BFF]/10 shrink-0 h-12 w-12 rounded-full flex items-center justify-center border border-[#007BFF]/20 group-hover:bg-[#00D4FF]/20 group-hover:border-[#00D4FF]/40 transition-colors">
                <Mail className="w-5 h-5 text-[#00D4FF]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-white">Email Us</span>
                <span className="text-zinc-400 text-sm">hello@yourcompany.com</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#030712]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-start gap-5 hover:border-[#00D4FF]/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all group"
            >
              <div className="bg-[#007BFF]/10 shrink-0 h-12 w-12 rounded-full flex items-center justify-center border border-[#007BFF]/20 group-hover:bg-[#00D4FF]/20 group-hover:border-[#00D4FF]/40 transition-colors">
                <Phone className="w-5 h-5 text-[#00D4FF]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-white">Call Us</span>
                <span className="text-zinc-400 text-sm">+1 (555) 123-4567</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#030712]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-start gap-5 hover:border-[#00D4FF]/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all group"
            >
              <div className="bg-[#007BFF]/10 shrink-0 h-12 w-12 rounded-full flex items-center justify-center border border-[#007BFF]/20 group-hover:bg-[#00D4FF]/20 group-hover:border-[#00D4FF]/40 transition-colors">
                <MapPin className="w-5 h-5 text-[#00D4FF]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-white">Visit Us</span>
                <span className="text-zinc-400 text-sm leading-relaxed">123 Innovation Drive, Tech District, San Francisco, CA 94105</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#030712]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#00D4FF]/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all"
            >
              <span className="text-sm font-bold text-white">Follow Us</span>
              <div className="flex items-center gap-3">
                <a href="#" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
