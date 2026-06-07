"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star, ExternalLink } from "lucide-react";

const PORTFOLIO_DATA = [
  {
    id: 1,
    title: "Food Funday",
    category: "Web App",
    status: "In Progress",
    statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    description: "Responsive restaurant web application featuring online table booking, menu display, and engaging UI to enhance customer experience.",
    techStack: ["React", "Django", "PostgreSQL", "Supabase"],
  },
  {
    id: 2,
    title: "Vidhiyavidhai Edu",
    category: "Web App",
    status: "Completed",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
    description: "A responsive e-learning platform offering structured courses, interactive content, and a seamless learning journey for students.",
    techStack: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "Web App",
    status: "In Progress",
    statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
    description: "Developed a full-stack e-commerce application with product management, cart system, authentication, and optimized user experience.",
    techStack: ["Next.js", "Tailwind", "Supabase", "Stripe"],
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32 overflow-hidden border-t border-white/5">
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
            Our Portfolio
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
            Discover how we've transformed ideas into powerful digital solutions. Browse through our latest projects showcasing our expertise in web, mobile, and custom software development.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PORTFOLIO_DATA.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-[#030712]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#00D4FF]/50 transition-colors duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-video overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[#007BFF]/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Category Badge Floating */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#007BFF] text-white shadow-lg">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay Icon */}
                <div className="absolute inset-0 z-20 bg-[#030712]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="h-12 w-12 rounded-full bg-[#00D4FF] text-black flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-100">
                    <ExternalLink className="h-5 w-5 ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                
                {/* Title & Status */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <span className={`shrink-0 px-2.5 py-0.5 text-[10px] font-semibold rounded-full border uppercase tracking-wider ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 text-[11px] font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-md group-hover:border-[#00D4FF]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <div className="flex justify-center">
          <motion.a 
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group flex items-center text-[#00D4FF] font-semibold hover:text-white transition-colors"
          >
            View Full Portfolio 
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1.5 transition-transform" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
