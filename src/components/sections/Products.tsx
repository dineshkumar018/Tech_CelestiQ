"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const ALL_PRODUCTS = [
  { id: "01", title: "SOFTWARE DEVELOPMENT", desc: "Custom software solutions tailored to your specific business needs and workflows.", image: "/images/products/1.png" },
  { id: "02", title: "APPS DEVELOPMENT", desc: "Native and cross-platform mobile applications that engage users and drive growth.", image: "/images/products/2.png" },
  { id: "03", title: "PROTOTYPING", desc: "Rapid prototyping to visualize your ideas and validate concepts before full-scale development.", image: "/images/products/3.png" },
  { id: "04", title: "DIGITAL MARKETING", desc: "Strategic marketing campaigns to increase brand visibility and reach your target audience.", image: "/images/products/4.png" },
  { id: "05", title: "WEB DEVELOPMENT", desc: "Responsive and modern websites built with the latest technologies for impactful online presence.", image: "/images/products/5.png" },
  { id: "06", title: "PROJECT MANAGEMENT", desc: "Efficient project planning and execution to ensure timely delivery and quality results.", image: "/images/products/6.png" }
];

export function Products() {
  return (
    <section id="products" className="relative py-24 lg:py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Our Products
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-[#00D4FF] mx-auto rounded-full shadow-[0_0_10px_rgba(0,212,255,0.8)]" 
          />
        </div>

        {/* Mobile View: Stacked */}
        <div className="flex flex-col gap-10 lg:hidden">
          {ALL_PRODUCTS.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-black text-white/30 tracking-tighter">{product.id}</span>
                <h3 className="text-base font-bold text-[#00D4FF] tracking-wider uppercase">{product.title}</h3>
              </div>
              <div className="relative p-[1px] overflow-hidden rounded-2xl group shadow-[0_0_20px_rgba(0,212,255,0.05)]">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-[150%] opacity-80"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 60%, #00D4FF 80%, #007BFF 100%)"
                  }}
                />
                <div className="relative bg-[#030712]/90 backdrop-blur-xl w-full h-full rounded-[15px] p-8 z-10 overflow-hidden">
                  {/* Decorative Background Number */}
                  <div className="absolute -bottom-4 -right-4 text-8xl font-black text-white/[0.02] select-none pointer-events-none z-0">
                    {product.id}
                  </div>
                  <p className="relative z-10 text-base text-zinc-400 leading-relaxed">{product.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop View: Staggered Zig-Zag Timeline */}
        <div className="hidden lg:block relative w-full max-w-5xl mx-auto">
          
          {/* Central Glowing Track */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] z-0 overflow-hidden">
             <div className="absolute inset-0 border-l-[2px] border-dashed border-[#00D4FF]/30" />
             {/* Flowing vertical laser pulse */}
             <motion.div 
               animate={{ top: ["-20%", "100%"] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute left-[-2px] right-[-2px] h-[20%] bg-gradient-to-b from-transparent via-[#00D4FF] to-transparent shadow-[0_0_20px_rgba(0,212,255,1)] blur-[1px]"
             />
          </div>

          <div className="flex flex-col gap-16 xl:gap-24">
            {ALL_PRODUCTS.map((product, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={product.id} className={`relative flex items-center w-full ${isLeft ? "justify-start" : "justify-end"}`}>
                  
                  {/* Central Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-[#030712] border-2 border-[#00D4FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.6)] z-20">
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  </div>

                  {/* Connecting Line from Center to Card */}
                  <div 
                    className={`absolute top-1/2 -translate-y-1/2 h-[2px] z-0 overflow-hidden ${isLeft ? "right-1/2 left-[47%]" : "left-1/2 right-[47%]"}`}
                  >
                    <div className="absolute inset-0 border-t-[2px] border-dashed border-[#00D4FF]/30" />
                    {/* Outward shooting horizontal laser pulse */}
                    <motion.div 
                      animate={isLeft ? { left: ["100%", "-20%"] } : { left: ["-20%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute top-[-2px] bottom-[-2px] w-[50%] bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent shadow-[0_0_15px_rgba(0,212,255,1)] blur-[1px]"
                    />
                  </div>

                  {/* Card Container & Hover Wrapper */}
                  <div className="w-full flex relative group justify-between">
                    
                    {/* Faded Background Image */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-[45%] h-[350px] pointer-events-none z-0 ${isLeft ? "right-0" : "left-0"}`}>
                      <div 
                        className="relative w-full h-full opacity-30 mix-blend-screen transition-all duration-700 group-hover:opacity-70 group-hover:scale-105"
                        style={{ 
                          maskImage: 'radial-gradient(circle at center, black 20%, transparent 70%)', 
                          WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 70%)' 
                        }}
                      >
                        <Image 
                          src={product.image} 
                          alt={product.title} 
                          fill 
                          className="object-cover filter grayscale opacity-80 mix-blend-luminosity" 
                        />
                        <div className="absolute inset-0 bg-[#00D4FF]/20 mix-blend-color" />
                      </div>
                    </div>

                    {/* Card Element */}
                    <motion.div 
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className={`w-[47%] relative z-10 ${isLeft ? "ml-0 mr-auto" : "ml-auto mr-0"}`}
                    >
                      <div className={`flex items-center gap-4 mb-5 ${isLeft ? "justify-end text-right" : "justify-start text-left"}`}>
                        {isLeft ? (
                          <>
                            <h3 className="text-lg xl:text-xl font-bold text-[#00D4FF] tracking-widest uppercase">{product.title}</h3>
                            <span className="text-3xl font-black text-white/30 tracking-tighter leading-none">{product.id}</span>
                          </>
                        ) : (
                          <>
                            <span className="text-3xl font-black text-white/30 tracking-tighter leading-none">{product.id}</span>
                            <h3 className="text-lg xl:text-xl font-bold text-[#00D4FF] tracking-widest uppercase">{product.title}</h3>
                          </>
                        )}
                      </div>
                      
                      <div className="relative p-[1px] overflow-hidden rounded-3xl cursor-default shadow-[0_0_20px_rgba(0,212,255,0.05)] group-hover:shadow-[0_0_40px_rgba(0,212,255,0.15)] transition-all duration-300">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                          className="absolute -inset-[150%] opacity-80"
                          style={{
                            background: "conic-gradient(from 0deg, transparent 60%, #00D4FF 80%, #007BFF 100%)"
                          }}
                        />
                        <div className="relative bg-[#030712]/90 backdrop-blur-xl w-full h-full rounded-[23px] p-10 z-10 overflow-hidden">
                          
                          {/* Decorative Background Number */}
                          <div className={`absolute -bottom-6 text-9xl font-black text-white/[0.02] select-none pointer-events-none z-0 ${isLeft ? '-left-4' : '-right-4'}`}>
                             {product.id}
                          </div>

                          <p className={`relative z-10 text-base text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors ${isLeft ? "text-right" : "text-left"}`}>
                            {product.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
