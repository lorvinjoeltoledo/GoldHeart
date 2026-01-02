"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const areas = [
  { name: "Jupiter", x: 68, y: 15 },
  { name: "Palm Beach Gardens", x: 62, y: 28 },
  { name: "West Palm Beach", x: 55, y: 42, primary: true },
  { name: "Lake Worth", x: 52, y: 55 },
  { name: "Boynton Beach", x: 48, y: 65 },
  { name: "Delray Beach", x: 45, y: 75 },
  { name: "Boca Raton", x: 42, y: 88 },
  { name: "Wellington", x: 30, y: 50 },
];

export default function ServiceAreas() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <section
      ref={containerRef}
      id="service-areas"
      className="relative py-24 md:py-32 bg-[var(--obsidian)] overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(var(--gold) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[0.7rem] text-[var(--gold)] uppercase tracking-[0.25em] mb-4 block">
            Where We Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] text-[var(--text-primary)]">
            Serving <span className="gold-text">Palm Beach County</span>
          </h2>
        </motion.div>

        {/* Map and Areas Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Stylized Palm Beach County Shape */}
              <svg
                viewBox="0 0 100 120"
                className="w-full h-full"
                style={{ filter: "drop-shadow(0 0 40px rgba(196, 149, 106, 0.1))" }}
              >
                {/* County outline - simplified Palm Beach shape */}
                <path
                  d="M75 5 L85 15 L88 30 L85 50 L80 70 L70 90 L55 105 L35 110 L25 100 L20 80 L18 60 L20 40 L25 25 L35 10 L55 5 Z"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="0.5"
                  className="opacity-30"
                />

                {/* Inner glow effect */}
                <path
                  d="M75 5 L85 15 L88 30 L85 50 L80 70 L70 90 L55 105 L35 110 L25 100 L20 80 L18 60 L20 40 L25 25 L35 10 L55 5 Z"
                  fill="url(#countyGradient)"
                  className="opacity-20"
                />

                {/* Coast line accent */}
                <path
                  d="M85 15 L88 30 L85 50 L80 70 L70 90 L55 105"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="1"
                  className="opacity-50"
                />

                {/* Grid lines */}
                {[20, 40, 60, 80].map((y) => (
                  <line
                    key={`h-${y}`}
                    x1="15"
                    y1={y}
                    x2="90"
                    y2={y}
                    stroke="var(--gold)"
                    strokeWidth="0.2"
                    className="opacity-10"
                  />
                ))}
                {[30, 50, 70].map((x) => (
                  <line
                    key={`v-${x}`}
                    x1={x}
                    y1="5"
                    x2={x}
                    y2="110"
                    stroke="var(--gold)"
                    strokeWidth="0.2"
                    className="opacity-10"
                  />
                ))}

                {/* Gradient definition */}
                <defs>
                  <radialGradient id="countyGradient" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Location markers */}
                {areas.map((area, index) => (
                  <g key={area.name}>
                    {/* Pulse effect for primary */}
                    {area.primary && (
                      <circle
                        cx={area.x}
                        cy={area.y}
                        r="8"
                        fill="none"
                        stroke="var(--gold)"
                        strokeWidth="0.5"
                        className="opacity-30 animate-ping"
                        style={{ transformOrigin: `${area.x}px ${area.y}px` }}
                      />
                    )}

                    {/* Outer ring */}
                    <motion.circle
                      cx={area.x}
                      cy={area.y}
                      r={area.primary ? 6 : 4}
                      fill="none"
                      stroke="var(--gold)"
                      strokeWidth={hoveredArea === area.name ? 1.5 : 0.5}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredArea(area.name)}
                      onMouseLeave={() => setHoveredArea(null)}
                    />

                    {/* Inner dot */}
                    <motion.circle
                      cx={area.x}
                      cy={area.y}
                      r={area.primary ? 2.5 : 1.5}
                      fill="var(--gold)"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: hoveredArea === area.name ? 1.5 : 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredArea(area.name)}
                      onMouseLeave={() => setHoveredArea(null)}
                    />

                    {/* Label */}
                    {(hoveredArea === area.name || area.primary) && (
                      <motion.text
                        x={area.x + (area.x > 50 ? -5 : 5)}
                        y={area.y - 10}
                        textAnchor={area.x > 50 ? "end" : "start"}
                        className="text-[3px] fill-[var(--text-primary)] font-medium uppercase tracking-wider"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {area.name}
                      </motion.text>
                    )}
                  </g>
                ))}

                {/* Atlantic Ocean label */}
                <text
                  x="92"
                  y="50"
                  className="text-[2.5px] fill-[var(--text-muted)] uppercase tracking-wider opacity-30"
                  style={{ writingMode: "vertical-rl" }}
                  transform="rotate(90, 92, 50)"
                >
                  Atlantic Ocean
                </text>
              </svg>

              {/* Decorative frame */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[var(--gold)]/20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[var(--gold)]/20" />
            </div>
          </motion.div>

          {/* Right: Area List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="space-y-1">
              {areas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  onMouseEnter={() => setHoveredArea(area.name)}
                  onMouseLeave={() => setHoveredArea(null)}
                  className={`group flex items-center gap-4 py-4 border-b border-[var(--ash)] cursor-pointer transition-all duration-300 ${
                    hoveredArea === area.name ? "border-[var(--gold)]" : ""
                  }`}
                >
                  {/* Marker */}
                  <div
                    className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                      area.primary
                        ? "border-[var(--gold)] bg-[var(--gold)]"
                        : hoveredArea === area.name
                        ? "border-[var(--gold)] bg-[var(--gold)]"
                        : "border-[var(--ash)]"
                    }`}
                  />

                  {/* Name */}
                  <span
                    className={`font-[var(--font-playfair)] transition-colors duration-300 ${
                      area.primary
                        ? "text-xl text-[var(--gold)]"
                        : hoveredArea === area.name
                        ? "text-lg text-[var(--gold)]"
                        : "text-lg text-[var(--text-primary)]"
                    }`}
                  >
                    {area.name}
                  </span>

                  {/* Primary badge */}
                  {area.primary && (
                    <span className="text-[0.6rem] text-[var(--gold)] uppercase tracking-[0.15em] border border-[var(--gold)]/30 px-2 py-1">
                      HQ
                    </span>
                  )}

                  {/* Arrow on hover */}
                  <motion.svg
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: hoveredArea === area.name ? 1 : 0,
                      x: hoveredArea === area.name ? 0 : -10,
                    }}
                    className="w-4 h-4 text-[var(--gold)] ml-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10"
            >
              <p className="text-[var(--text-muted)] text-sm">
                Don&apos;t see your area?{" "}
                <a
                  href="/contact"
                  className="text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors underline underline-offset-4"
                >
                  Contact us
                </a>{" "}
                — we may still be able to help.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
