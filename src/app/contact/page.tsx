import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Gold Heart Construction",
  description:
    "Get a free quote for your remodeling project. Contact Gold Heart Construction for expert tile, drywall, painting, carpentry, and more in Palm Beach County.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-[var(--void)]">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-end pt-32 pb-20 overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              webkit-playsinline="true"
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
            {/* Video overlay for text legibility */}
            <div className="absolute inset-0 bg-[var(--void)]/80" />
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 z-[1]">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--gold)]/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--gold)]/3 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 w-full">
            <div className="max-w-3xl">
              {/* Label */}
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-[var(--gold)]" />
                <span className="label-text">Get In Touch</span>
              </div>

              {/* Headline */}
              <h1 className="display-large text-[var(--text-primary)] mb-6">
                Let&apos;s Create
                <br />
                <span className="gold-text gold-glow">Something Beautiful</span>
              </h1>

              {/* Description */}
              <p className="text-[var(--text-secondary)] text-xl leading-relaxed max-w-xl">
                Ready to transform your space? Share your vision with us and
                receive a detailed, no-obligation quote within 24 hours.
              </p>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute bottom-0 right-0 w-48 h-48 border-r border-b border-[var(--gold)]/10" />
        </section>

        {/* Contact Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left Column - Contact Info */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                <div className="space-y-12">
                  {/* Section Title */}
                  <div>
                    <span className="label-text mb-4 block">Contact</span>
                    <h2 className="text-2xl font-[var(--font-playfair)] text-[var(--text-primary)]">
                      Get in touch directly
                    </h2>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-8">
                    {/* Phone */}
                    <div className="group">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 border border-[var(--ash)] group-hover:border-[var(--gold)] flex items-center justify-center transition-colors duration-300">
                          <svg
                            className="w-5 h-5 text-[var(--gold)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-2">
                            Phone
                          </h4>
                          <a
                            href="tel:+15612567890"
                            className="text-xl text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors"
                          >
                            (561) 256-7890
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="group">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 border border-[var(--ash)] group-hover:border-[var(--gold)] flex items-center justify-center transition-colors duration-300">
                          <svg
                            className="w-5 h-5 text-[var(--gold)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-2">
                            Email
                          </h4>
                          <a
                            href="mailto:hello@goldheartconstruction.com"
                            className="text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors"
                          >
                            hello@goldheartconstruction.com
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="group">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 border border-[var(--ash)] group-hover:border-[var(--gold)] flex items-center justify-center transition-colors duration-300">
                          <svg
                            className="w-5 h-5 text-[var(--gold)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-2">
                            Service Area
                          </h4>
                          <p className="text-[var(--text-primary)]">
                            West Palm Beach
                            <br />
                            <span className="text-[var(--text-secondary)]">
                              & Palm Beach County
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="group">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 border border-[var(--ash)] group-hover:border-[var(--gold)] flex items-center justify-center transition-colors duration-300">
                          <svg
                            className="w-5 h-5 text-[var(--gold)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-2">
                            Hours
                          </h4>
                          <p className="text-[var(--text-primary)] text-sm leading-relaxed">
                            Mon - Fri: 7am - 6pm
                            <br />
                            Sat: 8am - 2pm
                            <br />
                            <span className="text-[var(--text-muted)]">
                              Sun: Closed
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* License */}
                  <div className="pt-8 border-t border-[var(--ash)]">
                    <p className="text-sm text-[var(--text-muted)]">
                      Licensed & Insured
                      <br />
                      <span className="text-[var(--gold)]">
                        Lic# CBC1234567
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
