"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Work", href: "#gallery" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-[var(--void)]/95 backdrop-blur-xl border-b border-[var(--ash)]/30"
            : "bg-transparent"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <nav className="max-w-[1800px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/logo-icon.png"
                alt="Gold Heart Construction"
                width={48}
                height={48}
                className="h-10 md:h-12 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className="relative text-[0.8rem] font-medium tracking-[0.1em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 uppercase group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--gold)] group-hover:w-full transition-all duration-500" />
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Link
                href="/contact"
                className="btn-primary text-[0.7rem] py-3 px-6"
              >
                <span>Start Project</span>
                <svg
                  className="w-4 h-4"
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
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 w-12 h-12 flex flex-col items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-4">
              <span
                className={`absolute left-0 w-full h-px bg-[var(--text-primary)] transition-all duration-500 ${
                  isMobileMenuOpen
                    ? "top-1/2 -translate-y-1/2 rotate-45"
                    : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-[var(--text-primary)] transition-all duration-500 ${
                  isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-full h-px bg-[var(--text-primary)] transition-all duration-500 ${
                  isMobileMenuOpen
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "bottom-0"
                }`}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu - Full Screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-[var(--void)]"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center px-8">
              <nav className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block display-large text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-16 pt-8 border-t border-[var(--ash)]"
              >
                <p className="label-text mb-4">Get in Touch</p>
                <a
                  href="tel:+15612567890"
                  className="block text-2xl text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors mb-2"
                >
                  (561) 256-7890
                </a>
                <a
                  href="mailto:hello@goldheartconstruction.com"
                  className="text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors"
                >
                  hello@goldheartconstruction.com
                </a>
              </motion.div>
            </div>

            {/* Decorative Gold Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent origin-top"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
