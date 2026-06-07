"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Users, MonitorPlay, LayoutGrid, Rocket, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030712] pt-20 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat">
      
      {/* Dark overlay to ensure text readability against the background image if needed */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto px-4 lg:pl-20 xl:pl-32 flex flex-col items-start justify-center gap-12 flex-1 pt-4 pb-32">
        
        {/* Left Content Column */}
        <div className="w-full lg:max-w-2xl flex flex-col gap-6 text-left z-20 mt-0">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 self-start rounded-full border border-[#007BFF]/30 bg-[#007BFF]/10 px-4 py-1.5 backdrop-blur-sm w-max"
          >
            <div className="h-2 w-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_rgba(0,212,255,1)]" />
            <span className="text-xs font-semibold tracking-wider text-[#00D4FF] uppercase">
              Empowering Future Tech Professionals
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-md leading-[1.1]">
              Learn. Build. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#007BFF]">
                Grow Beyond.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-zinc-300 leading-relaxed drop-shadow-md">
              Turn your ambition into a successful tech career. <br className="hidden sm:block" />
              Practical learning, real-world projects, and expert <br className="hidden sm:block" />
              guidance to help you reach the stars.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4"
          >
            <Button size="lg" className="w-full sm:w-auto bg-gradient-brand text-white border-0 shadow-[0_0_20px_rgba(0,123,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] active:scale-95 transition-all text-base h-12 px-8 rounded-full font-medium group">
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 active:scale-95 transition-all text-base h-12 px-8 rounded-full backdrop-blur-sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-white/10 mt-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#007BFF]/30 bg-[#007BFF]/20 text-[#00D4FF] backdrop-blur-sm">
                <Users className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-lg font-bold text-white leading-none">500+</span>
                <span className="text-xs text-zinc-300 mt-1">Students Trained</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#007BFF]/30 bg-[#007BFF]/20 text-[#00D4FF] backdrop-blur-sm">
                <MonitorPlay className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-lg font-bold text-white leading-none">30+</span>
                <span className="text-xs text-zinc-300 mt-1">Courses</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#007BFF]/30 bg-[#007BFF]/20 text-[#00D4FF] backdrop-blur-sm">
                <LayoutGrid className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-lg font-bold text-white leading-none">100+</span>
                <span className="text-xs text-zinc-300 mt-1">Projects Built</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#007BFF]/30 bg-[#007BFF]/20 text-[#00D4FF] backdrop-blur-sm">
                <Rocket className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-lg font-bold text-white leading-none">90%+</span>
                <span className="text-xs text-zinc-300 mt-1">Success Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-zinc-400 hover:text-white hover:border-white transition-colors cursor-pointer"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
        <span className="text-xs text-zinc-400 font-medium tracking-wide">Scroll Down</span>
      </motion.div>
    </section>
  );
}
