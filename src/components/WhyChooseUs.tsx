"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Licensed & Insured",
    description:
      "Full coverage and proper licensing give you peace of mind. Your investment is protected.",
  },
  {
    id: "02",
    title: "Quality Guaranteed",
    description:
      "We stand behind every project with our satisfaction guarantee. If it's not perfect, we'll make it right.",
  },
  {
    id: "03",
    title: "Local Expertise",
    description:
      "Born and raised in Palm Beach County. We understand local styles, codes, and what works best here.",
  },
  {
    id: "04",
    title: "Transparent Pricing",
    description:
      "Detailed quotes with no hidden fees. You'll know exactly what you're paying for before we start.",
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative py-32 lg:py-48 bg-[var(--obsidian)] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="label-text mb-4 block">Why Choose Us</span>
            <h2 className="display-large text-[var(--text-primary)]">
              The Gold Heart
              <br />
              <span className="gold-text">Difference</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-end"
          >
            <p className="text-[var(--text-secondary)] text-lg lg:text-xl leading-relaxed max-w-lg">
              We&apos;re not just another contractor. Our commitment to excellence,
              transparency, and craftsmanship sets us apart.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[var(--ash)]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-[var(--obsidian)] p-8 lg:p-12 group hover:bg-[var(--charcoal)] transition-colors duration-500"
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-8">
                <span className="text-6xl lg:text-7xl font-[var(--font-playfair)] text-[var(--ash)] group-hover:text-[var(--gold)] transition-colors duration-500">
                  {feature.id}
                </span>
                <div className="w-12 h-12 border border-[var(--ash)] group-hover:border-[var(--gold)] rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-45">
                  <svg
                    className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--gold)] transition-colors"
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
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl lg:text-3xl font-[var(--font-playfair)] text-[var(--text-primary)] mb-4">
                {feature.title}
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
