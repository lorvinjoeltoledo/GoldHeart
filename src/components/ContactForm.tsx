"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const serviceOptions = [
  "Tile & Stone",
  "Drywall",
  "Painting",
  "Carpentry",
  "Demolition",
  "Countertops",
  "Hardscapes",
  "Full Renovation",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[var(--charcoal)] border border-[var(--ash)] p-12 lg:p-16 text-center relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--gold)]/10 rounded-full blur-[100px]" />

        <div className="relative z-10">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 mx-auto mb-8 border border-[var(--gold)] rounded-full flex items-center justify-center"
          >
            <svg
              className="w-10 h-10 text-[var(--gold)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          <h3 className="text-3xl font-[var(--font-playfair)] text-[var(--text-primary)] mb-4">
            Message Received
          </h3>
          <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
            Thank you for reaching out. We&apos;ll review your project details and
            get back to you within 24 hours with a detailed quote.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                service: "",
                address: "",
                message: "",
              });
            }}
            className="text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors text-sm uppercase tracking-wider"
          >
            Send another message →
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-[var(--charcoal)] border border-[var(--ash)] p-8 lg:p-12 relative"
    >
      {/* Form Header */}
      <div className="mb-10">
        <span className="label-text mb-3 block">Request Quote</span>
        <h3 className="text-2xl font-[var(--font-playfair)] text-[var(--text-primary)]">
          Tell us about your project
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Name */}
        <div className="relative">
          <label
            htmlFor="name"
            className={`absolute left-0 transition-all duration-300 pointer-events-none ${
              focusedField === "name" || formData.name
                ? "-top-6 text-xs text-[var(--gold)]"
                : "top-4 text-[var(--text-muted)]"
            }`}
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent border-b border-[var(--ash)] focus:border-[var(--gold)] text-[var(--text-primary)] py-4 outline-none transition-colors"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <label
            htmlFor="email"
            className={`absolute left-0 transition-all duration-300 pointer-events-none ${
              focusedField === "email" || formData.email
                ? "-top-6 text-xs text-[var(--gold)]"
                : "top-4 text-[var(--text-muted)]"
            }`}
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent border-b border-[var(--ash)] focus:border-[var(--gold)] text-[var(--text-primary)] py-4 outline-none transition-colors"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <label
            htmlFor="phone"
            className={`absolute left-0 transition-all duration-300 pointer-events-none ${
              focusedField === "phone" || formData.phone
                ? "-top-6 text-xs text-[var(--gold)]"
                : "top-4 text-[var(--text-muted)]"
            }`}
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => setFocusedField("phone")}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent border-b border-[var(--ash)] focus:border-[var(--gold)] text-[var(--text-primary)] py-4 outline-none transition-colors"
          />
        </div>

        {/* Service */}
        <div className="relative z-20">
          <label
            htmlFor="service"
            className={`absolute left-0 transition-all duration-300 pointer-events-none z-0 ${
              focusedField === "service" || formData.service
                ? "-top-6 text-xs text-[var(--gold)]"
                : "top-4 text-[var(--text-muted)]"
            }`}
          >
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            onFocus={() => setFocusedField("service")}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-[var(--charcoal)] border-b border-[var(--ash)] focus:border-[var(--gold)] text-[var(--text-primary)] py-4 outline-none transition-colors appearance-none cursor-pointer relative z-10"
            style={{ WebkitAppearance: "none" }}
          >
            <option value="" className="bg-[var(--charcoal)]">
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option
                key={option}
                value={option}
                className="bg-[var(--charcoal)] text-[var(--text-primary)]"
              >
                {option}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <svg
            className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] pointer-events-none z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Address */}
        <div className="md:col-span-2 relative">
          <label
            htmlFor="address"
            className={`absolute left-0 transition-all duration-300 pointer-events-none ${
              focusedField === "address" || formData.address
                ? "-top-6 text-xs text-[var(--gold)]"
                : "top-4 text-[var(--text-muted)]"
            }`}
          >
            Project Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            onFocus={() => setFocusedField("address")}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent border-b border-[var(--ash)] focus:border-[var(--gold)] text-[var(--text-primary)] py-4 outline-none transition-colors"
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2 relative">
          <label
            htmlFor="message"
            className={`absolute left-0 transition-all duration-300 pointer-events-none ${
              focusedField === "message" || formData.message
                ? "-top-6 text-xs text-[var(--gold)]"
                : "top-4 text-[var(--text-muted)]"
            }`}
          >
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent border-b border-[var(--ash)] focus:border-[var(--gold)] text-[var(--text-primary)] py-4 outline-none transition-colors resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-12">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full sm:w-auto px-12 py-5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-3">
              <svg
                className="w-5 h-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-3">
              Request Free Quote
              <svg
                className="w-5 h-5"
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
            </span>
          )}
        </button>
        <p className="text-[var(--text-muted)] text-sm mt-6">
          We typically respond within 24 hours
        </p>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[var(--gold)]/20" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[var(--gold)]/20" />
    </motion.form>
  );
}
