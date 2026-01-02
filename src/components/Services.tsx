"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Tile & Stone",
    brief: "Flooring, backsplash, showers",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Drywall",
    brief: "Installation, repair, texture",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="12" y1="3" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Painting",
    brief: "Interior, exterior, cabinet",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M19 3H5a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
        <path d="M12 11v8" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
  {
    title: "Carpentry",
    brief: "Custom trim, cabinets, framing",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M14 2l8 8-11 11-8-8 11-11z" />
        <path d="M3 21l5-5" />
      </svg>
    ),
  },
  {
    title: "Countertops",
    brief: "Granite, quartz, marble",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 6h16" />
        <path d="M4 6l2 12h12l2-12" />
        <circle cx="8" cy="12" r="1" />
        <circle cx="16" cy="12" r="1" />
      </svg>
    ),
  },
  {
    title: "Hardscapes",
    brief: "Patios, walkways, outdoor",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={containerRef}
      id="services"
      className="min-h-screen flex items-center py-20 md:py-0 bg-[var(--obsidian)] relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(var(--gold) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative">
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[var(--gold)]" />
            <span className="text-[0.7rem] text-[var(--gold)] uppercase tracking-[0.25em]">
              What We Do
            </span>
            <span className="w-6 h-px bg-[var(--gold)]" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] text-[var(--text-primary)]">
            Our Craft
          </h2>
        </motion.div>

        {/* Services Grid - 2x3 on desktop, 2x3 stacked on tablet, 1 column mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div
                className={`relative p-6 md:p-8 border transition-all duration-500 cursor-pointer h-full ${
                  hoveredIndex === index
                    ? "border-[var(--gold)] bg-[var(--charcoal)]"
                    : "border-[var(--ash)] bg-transparent hover:bg-[var(--charcoal)]/50"
                }`}
              >
                {/* Icon + Title row */}
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`transition-colors duration-500 ${
                      hoveredIndex === index
                        ? "text-[var(--gold)]"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <h3
                    className={`text-lg md:text-xl font-[var(--font-playfair)] transition-colors duration-500 ${
                      hoveredIndex === index
                        ? "text-[var(--gold)]"
                        : "text-[var(--text-primary)]"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Brief description - Always visible on mobile, hover on desktop */}
                <p
                  className={`text-sm transition-all duration-500 ${
                    hoveredIndex === index
                      ? "text-[var(--text-secondary)]"
                      : "text-[var(--text-muted)]"
                  }`}
                >
                  {service.brief}
                </p>

                {/* Hover arrow indicator */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    x: hoveredIndex === index ? 0 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-6 right-6 md:bottom-8 md:right-8"
                >
                  <svg
                    className="w-5 h-5 text-[var(--gold)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </motion.div>

                {/* Corner accent on hover */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--gold)]"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[var(--gold)]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 md:mt-16 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent origin-center"
        />
      </div>
    </section>
  );
}
