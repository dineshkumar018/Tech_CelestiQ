"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, HeartHandshake, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    title: "Our Mission",
    description: "To empower businesses with transformative digital solutions that drive sustainable growth and competitive advantage.",
    icon: Target,
  },
  {
    title: "Innovation First",
    description: "We stay ahead of technology trends, integrating cutting-edge tools and methodologies into every project we deliver.",
    icon: Lightbulb,
  },
  {
    title: "Client-Focused",
    description: "Every solution is tailored to your unique needs. We treat your goals as our own, ensuring measurable success.",
    icon: HeartHandshake,
  },
  {
    title: "Growth Through Tech",
    description: "From strategy to execution, we build digital ecosystems that scale with your business and deliver lasting results.",
    icon: TrendingUp,
  },
];

const STATS = [
  { value: "50+", label: "Projects" },
  { value: "45+", label: "Clients" },
  { value: "2+", label: "Years" },
  { value: "98%", label: "Satisfaction" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-azure/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-20 items-center">
          
          {/* Left Column: Text & Stats */}
          <div className="flex flex-col gap-10">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[#00D4FF] font-bold text-sm tracking-widest uppercase mb-4 block"
              >
                About Tech_CelestiQ
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white mb-6 leading-[1.1]"
              >
                Your Trusted Partner in <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#007BFF]">Digital Transformation</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-zinc-400 leading-relaxed"
              >
                At Tech_CelestiQ, we combine strategic thinking with technical excellence to deliver digital solutions that matter. With 2+ years of experience, 15+ expert developers, and a portfolio spanning 100+ successful projects, we've earned the trust of businesses worldwide.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
                  className="relative rounded-2xl p-[1px] overflow-hidden group text-center"
                >
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-[150%] opacity-100"
                    style={{
                      background: "conic-gradient(from 0deg, transparent 70%, #00D4FF 85%, #007BFF 100%)"
                    }}
                  />
                  <div className="relative bg-[#030712]/90 backdrop-blur-md h-full w-full rounded-[15px] p-6 flex flex-col items-center justify-center hover:bg-[#030712]/60 transition-colors duration-500">
                    <span className="text-3xl sm:text-4xl font-bold text-[#007BFF] mb-1 group-hover:text-[#00D4FF] transition-colors">{stat.value}</span>
                    <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                  className={`relative rounded-3xl p-[1px] overflow-hidden group ${
                    i % 2 !== 0 ? "sm:translate-y-8" : ""
                  }`}
                >
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-[150%] opacity-80"
                    style={{
                      background: "conic-gradient(from 0deg, transparent 60%, #00D4FF 80%, #007BFF 100%)"
                    }}
                  />
                  
                  <div className="relative bg-[#030712]/90 backdrop-blur-md h-full w-full rounded-[23px] p-8 hover:bg-[#030712]/60 transition-colors duration-500">
                    <div className="h-12 w-12 rounded-full bg-[#007BFF]/10 flex items-center justify-center border border-[#007BFF]/20 mb-6 group-hover:bg-[#00D4FF]/20 group-hover:border-[#00D4FF]/40 transition-colors relative overflow-hidden">
                      <div className="absolute inset-0 bg-[#00D4FF]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Icon className="h-5 w-5 text-[#00D4FF] relative z-10" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">{feature.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
