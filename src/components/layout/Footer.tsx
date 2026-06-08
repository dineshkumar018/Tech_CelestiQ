"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const InstagramIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const EXPLORE_LINKS_LEFT = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#programs" },
];
const EXPLORE_LINKS_RIGHT = [
  { name: "Tech Stack", href: "#products" },
  { name: "Contact", href: "#contact" },
  { name: "FAQ", href: "#" },
];

const EXPERTISE_TAGS = [
  "Web Dev", "Mobile Apps", "UI/UX", "React",
  "Node.js", "SEO", "E-commerce", "SaaS",
  "Cloud", "Marketing", "AI Solutions"
];

// Bright Celestial particles for the dark background
function CelestialParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];
    const particleCount = 50; 

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 1) * 0.5, // Float upwards towards horizon
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();
        
        // Add a slight glow to particles
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#00D4FF";
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-40" />;
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030712] text-white pt-24 pb-8 overflow-hidden border-t border-white/10 shadow-[0_-20px_50px_-20px_rgba(0,212,255,0.15)] mt-10">
      
      {/* Floating celestial stars near the top */}
      <motion.div 
        animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 left-1/4 text-[#00D4FF] z-10"
      >
        ✦
      </motion.div>
      <motion.div 
        animate={{ y: [0, -15, 0], opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-12 left-1/2 text-[#00D4FF] z-10 text-xl"
      >
        ✦
      </motion.div>
      <motion.div 
        animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-6 right-1/3 text-[#00D4FF] z-10 text-sm"
      >
        ✦
      </motion.div>

      {/* Background Particles specific to Footer */}

      <div className="container mx-auto px-4 lg:px-8 relative z-30 max-w-7xl mt-8">
        
        {/* Layer 1: Branding */}
        <div className="flex flex-col items-center md:items-start mb-16 border-b border-white/10 pb-12">
          <div className="flex items-center gap-4 opacity-90 hover:opacity-100 transition-opacity relative">
            {/* Radial Gradient Aura */}
            <div 
              className="absolute -left-10 -top-10 w-36 h-36 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(0,212,255,.15) 0%, rgba(0,212,255,.05) 35%, transparent 70%)"
              }}
            />
            {/* Logo Icon Card */}
            <div 
              className="relative h-14 w-14 flex items-center justify-center shrink-0 z-10 mix-blend-screen"
              style={{
                filter: "drop-shadow(0 0 10px rgba(0,212,255,.4)) drop-shadow(0 0 30px rgba(0,212,255,.15))"
              }}
            >
              <Image src="/logo.png" alt="Tech_CelestiQ Footer Logo" fill className="object-contain" />
            </div>
            {/* Logo Text */}
            <span className="font-bold text-4xl tracking-tight drop-shadow-[0_0_15px_rgba(0,212,255,0.6)] z-10">
              <span className="text-[#3b82f6]">Tech_</span>
              <span className="text-[#06b6d4]">CelestiQ</span>
            </span>
          </div>
          <p className="mt-6 text-zinc-400 text-sm max-w-md text-center md:text-left">
            Empowering your digital journey with cutting-edge tech solutions, expert training programs, and out-of-this-world support.
          </p>
        </div>

        {/* Layer 2: Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Explore */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="font-bold text-lg mb-6 text-white">Explore</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div className="flex flex-col gap-3">
                {EXPLORE_LINKS_LEFT.map((link) => (
                  <Link key={link.name} href={link.href} className="text-sm text-zinc-400 hover:text-[#00D4FF] hover:translate-x-1 transition-all">
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {EXPLORE_LINKS_RIGHT.map((link) => (
                  <Link key={link.name} href={link.href} className="text-sm text-zinc-400 hover:text-[#00D4FF] hover:translate-x-1 transition-all">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Tech Insights */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="font-bold text-lg mb-6 text-white">Tech Insights</h3>
            <p className="text-sm font-semibold text-zinc-300 mb-2">Get a free consultation on sign up!</p>
            <p className="text-xs text-zinc-500 leading-relaxed mb-6">
              By subscribing, you agree to receive updates. Read our <a href="#" className="text-[#00D4FF] hover:underline">privacy policy</a>.
            </p>
            <form className="flex w-full group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-white/5 border border-white/10 rounded-l-md px-4 py-2 text-sm focus:outline-none focus:border-[#00D4FF] focus:bg-white/10 transition-colors text-white placeholder:text-zinc-600"
                required
              />
              <button 
                type="submit" 
                className="bg-gradient-brand text-white px-5 py-2 text-sm font-bold rounded-r-md hover:shadow-[0_0_15px_rgba(0,212,255,0.6)] transition-all shrink-0 whitespace-nowrap"
              >
                SIGN UP
              </button>
            </form>
          </div>

          {/* Column 3: Expertise */}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="font-bold text-lg mb-6 text-white">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {EXPERTISE_TAGS.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1.5 border border-white/10 text-zinc-400 text-xs font-medium rounded-md bg-white/5 hover:border-[#00D4FF] hover:text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-colors cursor-pointer shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Connect */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="font-bold text-lg mb-6 text-white">Connect</h3>
            <div className="flex items-center gap-4 mb-6">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
            <a href="#portfolio" className="text-sm font-medium text-zinc-400 underline hover:text-[#00D4FF] transition-colors">
              View our latest projects
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 relative">
          <div className="text-xs text-zinc-500 text-center md:text-left space-y-1">
            <p>Tech_CelestiQ is run by a dedicated team of developers, designers, and strategists, with help from our amazing clients!</p>
            <p>Copyright © 2026, Tech_CelestiQ, LLC.</p>
          </div>
          
          <div className="text-xs text-zinc-500 text-center md:text-right">
            <p>All trademarks are properties of their respective owners. <a href="#" className="text-[#00D4FF] hover:underline">Terms & Conditions</a>.</p>
          </div>

          {/* Scroll to Top Button */}
          <button 
            onClick={scrollToTop}
            className="absolute right-0 -top-4 -translate-y-full md:relative md:top-auto md:translate-y-0 h-10 w-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:bg-[#00D4FF]/20 hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all shadow-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
