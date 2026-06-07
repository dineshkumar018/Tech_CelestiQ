"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const init = async (engine: Engine) => {
  await loadSlim(engine);
};

export function AboutParticles() {

  return (
    <ParticlesProvider init={init}>
      <Particles
        id="about-particles"
        className="absolute inset-0 pointer-events-none"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#00D4FF" },
            links: {
              color: "#00D4FF",
              distance: 180,
              enable: true,
              opacity: 0.35,
              width: 1.5,
            },
            move: {
              enable: true,
              speed: 0.4,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "bounce" },
            },
            number: {
              density: { enable: true },
              value: 60,
            },
            opacity: {
              value: 0.5,
              animation: {
                enable: true,
                speed: 0.5,
                sync: false,
              },
            },
            size: {
              value: { min: 1.5, max: 3 },
            },
            shadow: {
              enable: true,
              color: "#00D4FF",
              blur: 8,
            },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
}
