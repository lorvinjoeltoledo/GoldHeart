"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 bg-[var(--void)] overflow-hidden"
    >
      {/* Gold gradient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--gold)]/[0.08] rounded-full blur-[120px]" />
      </div>

      {/* Horizontal lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] text-[var(--text-primary)] mb-6">
            Ready to Transform
            <br />
            <span className="gold-text">Your Space?</span>
          </h2>

          <p className="text-[var(--text-secondary)] text-lg max-w-lg mx-auto mb-10">
            Get a free consultation and detailed quote. No obligation, just
            honest advice from experienced professionals.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[var(--void)] px-10 py-5 transition-all duration-300 group"
          >
            <span className="text-[0.85rem] font-semibold uppercase tracking-[0.1em]">
              Get Your Free Quote
            </span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
