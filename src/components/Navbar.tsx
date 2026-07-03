"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Michelli", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-warm-white/90 backdrop-blur-md shadow-[0_1px_20px_rgba(43,58,82,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="relative flex items-center gap-3 shrink-0"
            >
              <Image
                src="/assets/logo-mark.png"
                alt="Dreamy Nights Sleep Consulting"
                width={48}
                height={48}
                className="h-auto w-auto max-h-12 rounded-full object-cover"
                priority
              />
              <div className="hidden sm:block">
                <p
                  className={`font-serif text-lg font-semibold leading-tight tracking-wide transition-colors duration-500 ${
                    scrolled ? "text-navy" : "text-warm-white"
                  }`}
                >
                  Dreamy Nights
                </p>
                <p
                  className={`text-[10px] font-sans font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${
                    scrolled ? "text-text-muted" : "text-warm-white/70"
                  }`}
                >
                  Sleep Consulting
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2 text-[13px] font-sans font-medium uppercase tracking-[0.12em] rounded-full transition-all duration-300 hover:bg-gold/10 ${
                    scrolled
                      ? "text-navy/80 hover:text-navy"
                      : "text-warm-white/80 hover:text-warm-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="hidden lg:inline-flex items-center px-6 py-2.5 bg-gold text-navy-dark text-[13px] font-sans font-semibold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:bg-gold-light hover:shadow-[0_4px_20px_rgba(212,168,67,0.35)] hover:scale-[1.03] active:scale-[0.98]"
            >
              Free Consultation
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`block h-[2px] w-full rounded-full transition-all duration-300 origin-center ${
                    mobileOpen
                      ? "rotate-45 translate-y-[9px] bg-navy"
                      : scrolled
                        ? "bg-navy"
                        : "bg-warm-white"
                  }`}
                />
                <span
                  className={`block h-[2px] w-full rounded-full transition-all duration-300 ${
                    mobileOpen
                      ? "opacity-0 scale-0"
                      : scrolled
                        ? "bg-navy"
                        : "bg-warm-white"
                  }`}
                />
                <span
                  className={`block h-[2px] w-full rounded-full transition-all duration-300 origin-center ${
                    mobileOpen
                      ? "-rotate-45 -translate-y-[9px] bg-navy"
                      : scrolled
                        ? "bg-navy"
                        : "bg-warm-white"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-navy-dark/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-40 w-[min(85vw,360px)] bg-warm-white shadow-[-10px_0_40px_rgba(0,0,0,0.1)] lg:hidden"
            >
              <div className="flex flex-col h-full pt-28 pb-10 px-8">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                      className="py-3 px-4 text-navy font-serif text-xl font-medium tracking-wide rounded-lg transition-colors hover:bg-gold/10"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="mt-auto">
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#contact");
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="block w-full py-4 bg-gold text-navy-dark text-center text-sm font-sans font-semibold uppercase tracking-[0.15em] rounded-full transition-all hover:bg-gold-light"
                  >
                    Free Consultation
                  </motion.a>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 text-center text-text-muted text-xs tracking-wide"
                  >
                    <p>Michelli@dreamynightsconsulting.com</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
