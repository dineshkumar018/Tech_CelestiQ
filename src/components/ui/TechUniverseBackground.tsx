"use client";

import { motion } from "framer-motion";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { useEffect, useState } from "react";

export function TechUniverseBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const init = async (engine: Engine) => {
    await loadSlim(engine);
  };

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      
      {/* 1. Constellation Lines (tsParticles) */}
      <ParticlesProvider init={init}>
        <Particles
          id="universe-particles"
          className="absolute inset-0"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            particles: {
              color: { value: "#00D4FF" },
              links: {
                color: "#007BFF",
                distance: 150,
                enable: true,
                opacity: 0.25,
                width: 1,
                shadow: { enable: true, color: "#007BFF", blur: 5 },
              },
              move: {
                enable: true,
                speed: 1.2,
                random: true,
                outModes: { default: "out" },
              },
              number: {
                density: { enable: true },
                value: 60,
              },
              opacity: {
                value: 0.5,
                animation: { enable: true, speed: 1, sync: false },
              },
              size: {
                value: { min: 1, max: 2 },
              },
              shadow: {
                enable: true,
                color: "#00D4FF",
                blur: 10,
              },
            },
            detectRetina: true,
          }}
        />
      </ParticlesProvider>

      {/* 2. Orbital Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] opacity-40">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-[#00D4FF]/20 shadow-[0_0_30px_rgba(0,212,255,0.1)]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute inset-10 rounded-full border border-[#007BFF]/20 border-dashed"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute inset-24 rounded-full border-t border-b border-[#00D4FF]/30"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)" }}
        />
      </div>

      {/* 3. Data Streams (Falling light streaks) */}
      <div className="absolute inset-0 opacity-60">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "200%", opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            className="absolute w-[2px] h-32 bg-gradient-to-b from-transparent via-[#00D4FF] to-transparent shadow-[0_0_10px_#00D4FF]"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* 4. Glow Effects (Ambient light blobs) */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#007BFF]/15 rounded-full blur-[120px] mix-blend-screen"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[150px] mix-blend-screen"
      />

    </div>
  );
}
