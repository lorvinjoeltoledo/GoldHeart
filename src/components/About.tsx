"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-[80vh] flex items-center py-20 md:py-32 bg-[var(--charcoal)] overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(45deg, var(--gold) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[var(--gold)]/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[var(--gold)]" />
              <span className="text-[0.7rem] text-[var(--gold)] uppercase tracking-[0.25em]">
                Our Story
              </span>
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] text-[var(--text-primary)] leading-[1.1] mb-8">
              Building with Heart,
              <br />
              <span className="gold-text">Crafting with Pride</span>
            </h2>

            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl">
              Based in West Palm Beach, we combine old-world craftsmanship with
              modern techniques. Every project—whether a kitchen refresh or
              complete transformation—receives the attention it deserves.
            </p>
          </motion.div>

          {/* Right: Single powerful stat + visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Large stat display */}
              <div className="text-center lg:text-right">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative inline-block"
                >
                  {/* The big number */}
                  <span className="text-[8rem] md:text-[10rem] lg:text-[12rem] font-[var(--font-playfair)] text-[var(--gold)] leading-none block">
                    10
                  </span>
                  <span className="absolute -top-2 -right-6 md:-right-8 text-2xl md:text-3xl font-[var(--font-playfair)] text-[var(--gold)]">
                    +
                  </span>
                </motion.div>

                <div className="mt-4">
                  <span className="text-sm md:text-base text-[var(--text-secondary)] uppercase tracking-[0.2em]">
                    Years of Excellence
                  </span>
                </div>

                {/* Secondary stats - minimal */}
                <div className="mt-8 pt-8 border-t border-[var(--ash)] flex justify-center lg:justify-end gap-12">
                  <div className="text-center">
                    <span className="text-2xl md:text-3xl font-[var(--font-playfair)] text-[var(--text-primary)]">
                      500+
                    </span>
                    <span className="block text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">
                      Projects
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl md:text-3xl font-[var(--font-playfair)] text-[var(--text-primary)]">
                      100%
                    </span>
                    <span className="block text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">
                      Satisfaction
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative corner brackets */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border-t border-l border-[var(--gold)]/20" />
              <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b border-r border-[var(--gold)]/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
