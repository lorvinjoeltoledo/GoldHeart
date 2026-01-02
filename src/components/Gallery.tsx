"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    location: "Palm Beach Gardens",
    category: "Kitchen",
    description: "Complete transformation with custom cabinetry and quartz countertops",
    image: "/images/kitchen.jpg",
  },
  {
    id: 2,
    title: "Luxury Master Bath",
    location: "Jupiter",
    category: "Bathroom",
    description: "Spa-inspired retreat with marble tile and custom shower",
    image: "/images/bath.jpg",
  },
  {
    id: 3,
    title: "Outdoor Living Space",
    location: "West Palm Beach",
    category: "Hardscape",
    description: "Expansive patio with outdoor kitchen and fire features",
    image: "/images/outdoor.jpg",
  },
];

export default function Gallery() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={containerRef}
      id="gallery"
      className="relative py-20 md:py-32 bg-[var(--void)]"
    >
      {/* Section Header - Minimal */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[var(--gold)]" />
              <span className="text-[0.7rem] text-[var(--gold)] uppercase tracking-[0.25em]">
                Featured Work
              </span>
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] text-[var(--text-primary)]">
              Selected <span className="gold-text">Projects</span>
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-sm text-sm md:text-base">
            Each project tells a story of precision, care, and lasting quality.
          </p>
        </motion.div>
      </div>

      {/* Projects Grid - Asymmetric, impactful */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* First project - Large, spans 7 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="relative aspect-[4/3] md:aspect-[16/10] bg-[var(--charcoal)] overflow-hidden">
              {/* Project Image */}
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 60vw"
              />

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === 0 ? 1 : 0 }}
                className="absolute inset-0 bg-[var(--gold)]/10"
              />

              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[var(--void)] via-[var(--void)]/60 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                <motion.span
                  animate={{ y: hoveredIndex === 0 ? 0 : 5, opacity: hoveredIndex === 0 ? 1 : 0.7 }}
                  className="inline-block text-[0.65rem] text-[var(--gold)] uppercase tracking-[0.2em] mb-2"
                >
                  {projects[0].category}
                </motion.span>
                <h3 className="text-2xl md:text-4xl font-[var(--font-playfair)] text-[var(--text-primary)] mb-2">
                  {projects[0].title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                  <span>{projects[0].location}</span>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: hoveredIndex === 0 ? 1 : 0, y: hoveredIndex === 0 ? 0 : 10 }}
                  className="mt-4 text-[var(--text-secondary)] text-sm max-w-md hidden md:block"
                >
                  {projects[0].description}
                </motion.p>
              </div>

              {/* Corner accents */}
              <motion.div
                animate={{ scale: hoveredIndex === 0 ? 1 : 0 }}
                className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[var(--gold)]"
              />
              <motion.div
                animate={{ scale: hoveredIndex === 0 ? 1 : 0 }}
                className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[var(--gold)]"
              />
            </div>
          </motion.div>

          {/* Right column - Two stacked projects */}
          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
            {/* Second project */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group cursor-pointer flex-1"
            >
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full bg-[var(--charcoal)] overflow-hidden">
                {/* Project Image */}
                <Image
                  src={projects[1].image}
                  alt={projects[1].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === 1 ? 1 : 0 }}
                  className="absolute inset-0 bg-[var(--gold)]/10"
                />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[var(--void)] via-[var(--void)]/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
                  <motion.span
                    animate={{ y: hoveredIndex === 1 ? 0 : 5, opacity: hoveredIndex === 1 ? 1 : 0.7 }}
                    className="inline-block text-[0.6rem] text-[var(--gold)] uppercase tracking-[0.2em] mb-2"
                  >
                    {projects[1].category}
                  </motion.span>
                  <h3 className="text-xl md:text-2xl font-[var(--font-playfair)] text-[var(--text-primary)] mb-1">
                    {projects[1].title}
                  </h3>
                  <span className="text-xs text-[var(--text-muted)]">{projects[1].location}</span>
                </div>

                {/* Corner accent */}
                <motion.div
                  animate={{ scale: hoveredIndex === 1 ? 1 : 0 }}
                  className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[var(--gold)]"
                />
              </div>
            </motion.div>

            {/* Third project */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group cursor-pointer flex-1"
            >
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full bg-[var(--charcoal)] overflow-hidden">
                {/* Project Image */}
                <Image
                  src={projects[2].image}
                  alt={projects[2].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === 2 ? 1 : 0 }}
                  className="absolute inset-0 bg-[var(--gold)]/10"
                />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[var(--void)] via-[var(--void)]/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
                  <motion.span
                    animate={{ y: hoveredIndex === 2 ? 0 : 5, opacity: hoveredIndex === 2 ? 1 : 0.7 }}
                    className="inline-block text-[0.6rem] text-[var(--gold)] uppercase tracking-[0.2em] mb-2"
                  >
                    {projects[2].category}
                  </motion.span>
                  <h3 className="text-xl md:text-2xl font-[var(--font-playfair)] text-[var(--text-primary)] mb-1">
                    {projects[2].title}
                  </h3>
                  <span className="text-xs text-[var(--text-muted)]">{projects[2].location}</span>
                </div>

                {/* Corner accent */}
                <motion.div
                  animate={{ scale: hoveredIndex === 2 ? 1 : 0 }}
                  className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[var(--gold)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
