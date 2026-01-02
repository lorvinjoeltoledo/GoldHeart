"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const areas = [
  "West Palm Beach",
  "Palm Beach Gardens",
  "Jupiter",
  "Boca Raton",
  "Delray Beach",
  "Boynton Beach",
  "Lake Worth",
  "Wellington",
  "Royal Palm Beach",
  "Palm Beach",
  "North Palm Beach",
  "Riviera Beach",
];

export default function ServiceArea() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative py-32 lg:py-48 bg-[var(--void)] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="label-text mb-6 block">Service Area</span>
            <h2 className="display-large text-[var(--text-primary)] mb-8">
              Proudly Serving
              <br />
              <span className="gold-text">Palm Beach County</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-12 max-w-lg">
              From the pristine shores of Palm Beach to the vibrant communities
              of Boca Raton, we bring expert craftsmanship to homes throughout
              the county.
            </p>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-[var(--text-muted)] text-sm group-hover:text-[var(--text-primary)] transition-colors">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative">
              {/* Concentric Circles */}
              {[1, 2, 3, 4].map((ring) => (
                <motion.div
                  key={ring}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + ring * 0.15 }}
                  className="absolute inset-0 border border-[var(--gold)]/10 rounded-full"
                  style={{
                    inset: `${ring * 12}%`,
                  }}
                />
              ))}

              {/* Center Point */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  <div className="w-24 h-24 bg-[var(--gold)]/10 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-[var(--gold)]/20 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-[var(--gold)] rounded-full" />
                    </div>
                  </div>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 animate-ping bg-[var(--gold)]/20 rounded-full" />
                </div>
              </motion.div>

              {/* Location Markers */}
              {[
                { top: "20%", left: "30%" },
                { top: "25%", right: "25%" },
                { top: "45%", left: "15%" },
                { bottom: "30%", right: "20%" },
                { bottom: "20%", left: "35%" },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
                  className="absolute w-3 h-3"
                  style={pos}
                >
                  <div className="w-full h-full bg-[var(--gold)] rounded-full" />
                  <div
                    className="absolute inset-0 bg-[var(--gold)]/50 rounded-full animate-ping"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                </motion.div>
              ))}

              {/* Connecting Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ opacity: 0.1 }}
              >
                <line
                  x1="30%"
                  y1="20%"
                  x2="50%"
                  y2="50%"
                  stroke="var(--gold)"
                  strokeWidth="1"
                />
                <line
                  x1="75%"
                  y1="25%"
                  x2="50%"
                  y2="50%"
                  stroke="var(--gold)"
                  strokeWidth="1"
                />
                <line
                  x1="15%"
                  y1="45%"
                  x2="50%"
                  y2="50%"
                  stroke="var(--gold)"
                  strokeWidth="1"
                />
                <line
                  x1="80%"
                  y1="70%"
                  x2="50%"
                  y2="50%"
                  stroke="var(--gold)"
                  strokeWidth="1"
                />
                <line
                  x1="35%"
                  y1="80%"
                  x2="50%"
                  y2="50%"
                  stroke="var(--gold)"
                  strokeWidth="1"
                />
              </svg>

              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
              >
                <p className="text-4xl font-[var(--font-playfair)] text-[var(--text-primary)]">
                  Palm Beach
                </p>
                <p className="label-text mt-2">County, Florida</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
