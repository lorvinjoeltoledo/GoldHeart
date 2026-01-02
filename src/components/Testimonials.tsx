"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Gold Heart transformed our outdated kitchen into a modern masterpiece. Their attention to detail and craftsmanship exceeded our expectations. Every tile, every finish was placed with precision.",
    name: "Sarah Mitchell",
    location: "West Palm Beach",
    project: "Kitchen Remodel",
  },
  {
    id: 2,
    quote:
      "Professional from start to finish. The tile work in our bathroom is absolutely stunning. They treated our home with respect and cleaned up every day. Highly recommend.",
    name: "Michael Rodriguez",
    location: "Jupiter",
    project: "Bathroom Renovation",
  },
  {
    id: 3,
    quote:
      "Our new patio and outdoor kitchen have completely changed how we use our backyard. The team was incredible to work with, and the quality speaks for itself.",
    name: "Jennifer Lee",
    location: "Boca Raton",
    project: "Hardscape Installation",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-32 lg:py-48 bg-[var(--charcoal)] overflow-hidden"
    >
      {/* Large Quote Mark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="text-[40rem] font-serif text-[var(--ash)]/30 leading-none select-none">
          &ldquo;
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="label-text mb-4 block">Testimonials</span>
          <h2 className="display-medium text-[var(--text-primary)]">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl"
            >
              {/* Quote */}
              <p className="text-2xl md:text-3xl lg:text-4xl font-[var(--font-playfair)] text-[var(--text-primary)] leading-relaxed mb-12">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-px bg-[var(--gold)] mb-6" />
                <h4 className="text-xl font-[var(--font-playfair)] text-[var(--text-primary)] mb-2">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-[var(--text-muted)] text-sm">
                  {testimonials[activeIndex].location} •{" "}
                  {testimonials[activeIndex].project}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-3 mt-12"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative w-12 h-1 transition-all duration-500 ${
                index === activeIndex
                  ? "bg-[var(--gold)]"
                  : "bg-[var(--ash)] hover:bg-[var(--text-muted)]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              {index === activeIndex && (
                <motion.div
                  className="absolute inset-0 bg-[var(--gold)]"
                  layoutId="activeTestimonial"
                  transition={{ duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-0 lg:-px-12">
          <button
            onClick={() =>
              setActiveIndex(
                (prev) => (prev - 1 + testimonials.length) % testimonials.length
              )
            }
            className="pointer-events-auto w-12 h-12 border border-[var(--ash)] hover:border-[var(--gold)] flex items-center justify-center transition-colors group"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % testimonials.length)
            }
            className="pointer-events-auto w-12 h-12 border border-[var(--ash)] hover:border-[var(--gold)] flex items-center justify-center transition-colors group"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
