"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const lineWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  useEffect(() => {
    setIsMounted(true);
    // Programmatically play video for iOS Safari
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, that's okay
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] min-h-[600px] overflow-hidden bg-[var(--void)]"
    >
      {/* Video Background - Positioned Right on Desktop */}
      <motion.div
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0 md:left-[35%] z-0 will-change-transform"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          webkit-playsinline="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Video overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--void)] via-[var(--void)]/80 to-[var(--void)]/40" />
      </motion.div>

      {/* Left fade gradient for desktop asymmetry */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[var(--void)] via-[var(--void)] to-transparent z-[1]" />

      {/* Mobile overlay */}
      <div className="md:hidden absolute inset-0 bg-[var(--void)]/70 z-[1]" />


      {/* Content - Left aligned, asymmetric */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 h-full flex flex-col justify-center max-w-[1800px] mx-auto px-6 md:px-12 will-change-transform"
      >
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            <span className="text-[0.7rem] text-[var(--gold)] uppercase tracking-[0.25em] font-medium">
              Premium Construction
            </span>
          </motion.div>

          {/* Main Headline - Staggered reveal */}
          <div className="space-y-2 md:space-y-0">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={isMounted ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="display-huge text-[var(--text-primary)] leading-[0.9]"
              >
                We Build
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={isMounted ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="display-huge gold-text leading-[0.9]"
                style={{
                  textShadow: "0 0 80px rgba(196, 149, 106, 0.3)",
                }}
              >
                Legacies
              </motion.h1>
            </div>
          </div>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isMounted ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-px bg-gradient-to-r from-[var(--gold)] to-transparent origin-left mt-6 md:mt-8 max-w-[200px]"
          />

          {/* Description - Minimal */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 md:mt-12 text-[var(--text-secondary)] text-base md:text-lg max-w-md leading-relaxed"
          >
            Precision craftsmanship in Palm Beach County.
            Transforming visions into enduring spaces since 2014.
          </motion.p>

          {/* Single CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-10 md:mt-14"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[var(--void)] px-8 py-5 transition-all duration-300"
            >
              <span className="text-[0.8rem] font-semibold uppercase tracking-[0.1em]">
                Start Your Project
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
      </motion.div>

      {/* Scroll Indicator - Centered bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isMounted ? { opacity: 1 } : {}}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[0.6rem] text-[var(--text-muted)] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--gold)]/50 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Corner accents */}
      <div className="absolute top-8 left-6 md:left-12 w-12 h-12 border-t border-l border-[var(--gold)]/20 z-10" />
      <div className="absolute bottom-8 right-6 md:right-12 w-12 h-12 border-b border-r border-[var(--gold)]/20 z-10" />
    </section>
  );
}
