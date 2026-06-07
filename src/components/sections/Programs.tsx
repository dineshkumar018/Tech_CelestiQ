"use client";

import { motion } from "framer-motion";
import { 
  Layers, 
  Smartphone, 
  Globe, 
  ShoppingBag, 
  Megaphone, 
  Box,
  ArrowRight
} from "lucide-react";

const SERVICES = [
  {
    title: "Full Stack Development",
    description: "We have amassed unmatched expertise dealing with both front-end and back-end technologies for full-stack development.",
    icon: Layers,
  },
  {
    title: "Mobile App Development",
    description: "We build superior mobile apps or revamp your existing mobile application with customizable project modifications.",
    icon: Smartphone,
  },
  {
    title: "Web Application Development",
    description: "Our web design and development company provides top-tier web design services aimed at enhancing our clients' online visibility.",
    icon: Globe,
  },
  {
    title: "E-commerce Development",
    description: "We develop scalable solutions with excellent user experiences, smart designs, and robust and seamless online E-commerce stores.",
    icon: ShoppingBag,
  },
  {
    title: "Digital Marketing Services",
    description: "Our expert team will elevate your digital presence, ensuring your brand shines brilliantly in the online business success.",
    icon: Megaphone,
  },
  {
    title: "Product Development",
    description: "Develop your custom digital product and unique business offering with our robust and reliable Product development services.",
    icon: Box,
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-24 lg:py-32 overflow-hidden border-t border-white/5">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            What We Offer
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
            className="text-lg text-zinc-400 leading-relaxed"
          >
            We are a dedicated team of software professionals with expertise in delivering a wide range of services, including Software Solutions, IT Support, Web Development, Design and Digital Marketing. Our primary objective is to leverage state-of-the-art technologies to foster the growth and success of present and future business goals.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                className="relative rounded-2xl p-[1px] overflow-hidden group"
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
                <div className="relative bg-[#030712]/90 backdrop-blur-md h-full w-full rounded-[15px] p-8 hover:bg-[#030712]/60 transition-colors duration-500 flex flex-col">
                  
                  {/* Icon & Title Row */}
                  <div className="flex items-start gap-5 mb-5">
                    <div className="h-14 w-14 shrink-0 rounded-2xl bg-[#007BFF]/10 flex items-center justify-center border border-[#007BFF]/20 group-hover:bg-[#00D4FF]/20 group-hover:border-[#00D4FF]/40 transition-colors relative overflow-hidden">
                      <div className="absolute inset-0 bg-[#00D4FF]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Icon className="h-6 w-6 text-[#00D4FF] relative z-10" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors mt-2">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed flex-grow mb-8 group-hover:text-zinc-300 transition-colors">
                    {service.description}
                  </p>
                  
                  {/* Read More Link */}
                  <a href="#" className="flex items-center text-[#00D4FF] font-medium text-sm hover:text-white transition-colors group/link w-fit">
                    Read More 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
