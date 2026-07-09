"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Video Background */}
      {/* TODO: Replace with client's video file */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        {/* TODO: Replace with client's video file */}
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Fallback gradient (visible when video hasn't loaded) */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-navy-dark via-navy to-navy-dark/90" />

      {/* Overlay gradients for text readability — semi-transparent so video shows through */}
      <div className="absolute inset-0 bg-linear-to-t from-navy-dark/70 via-navy-dark/30 to-navy/15" />
      <div className="absolute inset-0 bg-linear-to-r from-navy-dark/40 via-transparent to-transparent" />

      {/* Decorative subtle elements */}
      <div className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-1/3 left-[10%] w-48 h-48 rounded-full bg-cloud-blue/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold-light"
            >
              IPSP Certified Pediatric Sleep Consultant
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.05] tracking-tight text-warm-white"
            >
              Restful Nights
              <br />
              <span className="text-gold">Start Here</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-6 sm:mt-8 max-w-lg text-base sm:text-lg leading-relaxed text-warm-white font-sans font-light"
            >
              Helping babies and toddlers sleep better with gentle,
              personalized support — because everyone in your home deserves a
              good night&apos;s sleep.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("#contact");
                }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy-dark text-sm font-sans font-semibold uppercase tracking-[0.12em] rounded-full transition-all duration-300 hover:bg-gold-light hover:shadow-[0_8px_30px_rgba(212,168,67,0.4)] hover:scale-[1.03] active:scale-[0.98]"
              >
                Book a Free Consultation
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("#services");
                }}
                className="inline-flex items-center justify-center px-8 py-4 border border-warm-white/30 text-warm-white text-sm font-sans font-medium uppercase tracking-[0.12em] rounded-full transition-all duration-300 hover:border-gold/60 hover:text-gold hover:bg-warm-white/5 active:scale-[0.98]"
              >
                Explore Services
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-warm-white/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-5 h-5 text-gold/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-cream to-transparent z-10 pointer-events-none" />
    </section>
  );
}
