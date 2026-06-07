"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Award, 
  PenTool, 
  Cpu, 
  Lightbulb, 
  Clock, 
  Globe, 
  Settings, 
  ShieldCheck 
} from "lucide-react";

const CARDS = [
  { title: "Cutting-Edge Tech", desc: "Stay ahead of the curve by utilizing state-of-the-art technologies.", icon: Cpu },
  { title: "Expert Team", desc: "Our skilled professionals bring over 9+ years of experience.", icon: Award },
  { title: "Global Reach", desc: "With 150+ clients worldwide, delivering excellence globally.", icon: Globe },
  { title: "In-House Excellence", desc: "Benefit from 80+ in-house experts dedicated to your success.", icon: Lightbulb },
  { title: "Project Mastery", desc: "With over 200 projects handled, we tackle any challenge.", icon: PenTool },
  { title: "Tailored Solutions", desc: "We work closely with you to deliver customized solutions.", icon: Settings },
  { title: "Timely Support", desc: "Expect a response within 8 hours from our dedicated team.", icon: Clock },
  { title: "Trusted Partner", desc: "Join forces with an ISO certified firm for software solutions.", icon: ShieldCheck },
];

// Circular positions (8 items, 45 degree increments)
const POSITIONS = [
  { x: 88, y: 50 },
  { x: 76.8, y: 76.8 },
  { x: 50, y: 88 },
  { x: 23.1, y: 76.8 },
  { x: 12, y: 50 },
  { x: 23.1, y: 23.1 },
  { x: 50, y: 12 },
  { x: 76.8, y: 23.1 }
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 lg:py-32 overflow-hidden border-t border-white/5">
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
            Why Choose Us
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-[#00D4FF] mx-auto rounded-full shadow-[0_0_10px_rgba(0,212,255,0.8)]" 
          />
        </div>

        {/* Mobile View: Standard Stacked Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:hidden">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden group"
              >
                <div className="h-12 w-12 rounded-full bg-[#007BFF]/10 flex items-center justify-center mb-4 border border-[#007BFF]/20">
                  <Icon className="h-6 w-6 text-[#00D4FF]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-zinc-400">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop View: Orbit Ring Layout */}
        <div className="hidden md:block relative w-full max-w-5xl mx-auto aspect-square max-h-[800px]">
          
          {/* Central Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative h-28 w-28 rounded-full bg-[#030712] border border-[#00D4FF]/40 flex items-center justify-center shadow-[0_0_40px_rgba(0,212,255,0.3)] z-20"
            >
              <div className="absolute inset-0 rounded-full animate-ping bg-[#00D4FF]/10" />
              <Image 
                src="/logo.png" 
                alt="Tech_CelestiQ Logo" 
                fill 
                className="p-5 object-contain"
              />
            </motion.div>
          </div>

          {/* Orbit Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] rounded-full border border-solid border-[#007BFF]/20 animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[76%] h-[76%] rounded-full border border-dashed border-[#00D4FF]/20 animate-[spin_80s_linear_infinite] pointer-events-none">
            {/* Orbiting Glowing Nodes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,1)]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full bg-[#007BFF] shadow-[0_0_10px_rgba(0,123,255,1)]" />
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
          </div>

          {/* Orbiting Cards */}
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            const pos = POSITIONS[i];

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (i * 0.1), type: "spring", stiffness: 50 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-44 lg:w-52 rounded-2xl p-[1px] overflow-hidden group cursor-pointer z-10 hover:z-30"
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              >
                {/* Continuous rotating glow border */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-[150%] opacity-80"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 60%, #00D4FF 80%, #007BFF 100%)"
                  }}
                />
                
                {/* Inner Card Content */}
                <div className="relative bg-[#030712]/95 backdrop-blur-xl h-full w-full rounded-[15px] p-5 hover:bg-[#030712]/60 transition-colors duration-500 flex flex-col items-center text-center shadow-xl">
                  <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-[#007BFF]/10 flex items-center justify-center mb-3 border border-[#007BFF]/20 group-hover:bg-[#00D4FF]/20 group-hover:border-[#00D4FF]/40 transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#00D4FF]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-[#00D4FF] relative z-10" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">{card.title}</h3>
                  <p className="text-[10px] lg:text-[11px] text-zinc-400 leading-relaxed opacity-80 group-hover:opacity-100 group-hover:text-zinc-300 transition-all">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
