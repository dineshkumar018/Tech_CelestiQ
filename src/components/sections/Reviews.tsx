"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const REVIEWS = [
  { 
    id: 1,
    rating: 5.0, 
    text: "Their creativeness is impressive. They consistently delivered high-quality designs that elevated our brand presence.", 
    author: "Director", 
    company: "Paramanand Yoga Institute" 
  },
  { 
    id: 2,
    rating: 5.0, 
    text: "Highly professional and delivered the project exactly on time. Communication was seamless throughout.", 
    author: "CEO", 
    company: "Tech Startup" 
  },
  { 
    id: 3,
    rating: 5.0, 
    text: "They immediately understood our needs and were always available to address our concerns. Highly recommended.", 
    author: "Managing Director", 
    company: "TMI Special Network" 
  },
  { 
    id: 4,
    rating: 5.0, 
    text: "The team was hands-on with their approach throughout the process. We felt valued and heard at every step.", 
    author: "Founder", 
    company: "E-Commerce Fulfillment Company" 
  },
  { 
    id: 5,
    rating: 5.0, 
    text: "Exceeded our expectations in every single way. Flawless execution and incredible attention to detail.", 
    author: "CTO", 
    company: "Global Tech Solutions" 
  }
];

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="relative py-24 lg:py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Clutch Reviews
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400"
          >
            Verified client feedback and ratings on Clutch
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-[#00D4FF] mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(0,212,255,0.8)]" 
          />
        </div>

        {/* Overall Rating Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/10 pb-6 mb-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <span className="font-bold text-lg text-white">TechNest Reviews</span>
            <div className="flex items-center gap-1">
              <span className="font-bold text-lg text-white">5.0</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
            </div>
            <span className="text-[#00D4FF] text-sm font-medium hover:underline cursor-pointer">5 reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-400">Powered by</span>
            <span className="font-black text-white text-lg tracking-tight">Clutch</span>
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative max-w-6xl mx-auto group">
          
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 -ml-4 z-20 h-12 w-12 rounded-full bg-[#030712]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#00D4FF]/20 hover:border-[#00D4FF]/50 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 -mr-4 z-20 h-12 w-12 rounded-full bg-[#030712]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#00D4FF]/20 hover:border-[#00D4FF]/50 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Scrolling Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="min-w-[300px] md:min-w-[340px] shrink-0 snap-center bg-[#030712]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col hover:border-[#00D4FF]/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-bold text-white text-lg">{review.rating.toFixed(1)}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-zinc-300 italic leading-relaxed flex-grow mb-8 text-[15px]">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col gap-1 mb-6">
                  <span className="font-bold text-white text-sm">{review.author},</span>
                  <span className="text-zinc-500 text-xs">{review.company}</span>
                </div>

                {/* Verified Badge */}
                <div className="flex items-center gap-1.5 mt-auto pt-4 border-t border-white/5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span className="text-emerald-500/90 text-xs font-medium">Verified Review</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CSS to hide scrollbar for webkit */}
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}} />
          
        </div>

      </div>
    </section>
  );
}
