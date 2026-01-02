"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const services = [
  "Tile & Stone",
  "Drywall",
  "Painting",
  "Carpentry",
  "Countertops",
  "Hardscapes",
];

const serviceAreas = [
  "West Palm Beach",
  "Palm Beach Gardens",
  "Jupiter",
  "Wellington",
  "Boca Raton",
  "Delray Beach",
];

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={containerRef}
      className="relative bg-[var(--obsidian)] border-t border-[var(--ash)]"
    >
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-4 lg:col-span-2"
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-icon.png"
                alt="Gold Heart Construction"
                width={48}
                height={48}
                className="h-10 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 max-w-xs">
              Premium remodeling in Palm Beach County. Building with heart,
              crafting with pride since 2014.
            </p>

            {/* Contact quick links */}
            <div className="space-y-2">
              <a
                href="tel:+15612567890"
                className="block text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors"
              >
                (561) 256-7890
              </a>
              <a
                href="mailto:hello@goldheartconstruction.com"
                className="block text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors text-sm"
              >
                hello@goldheartconstruction.com
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-[0.7rem] text-[var(--gold)] uppercase tracking-[0.2em] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-[var(--text-muted)] text-sm hover:text-[var(--text-secondary)] transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-[0.7rem] text-[var(--gold)] uppercase tracking-[0.2em] mb-5">
              Service Areas
            </h4>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-[var(--text-muted)] text-sm hover:text-[var(--text-secondary)] transition-colors cursor-default">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-[0.7rem] text-[var(--gold)] uppercase tracking-[0.2em] mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#gallery"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--gold)] transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--gold)] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--gold)] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--gold)] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[
                {
                  name: "Facebook",
                  icon: "M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z",
                },
                {
                  name: "Instagram",
                  icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 border border-[var(--ash)] hover:border-[var(--gold)] flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <svg
                    className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--gold)] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--ash)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[var(--text-muted)] text-xs">
            © {currentYear} Gold Heart Construction. All rights reserved.
          </p>
          <p className="text-[var(--text-muted)] text-xs">
            Licensed & Insured · <span className="text-[var(--gold)]">Lic# CBC1234567</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
