"use client";

import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-navy-dark overflow-hidden">
      {/* Top gold accent line */}
      <div className="h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-12 md:gap-8 lg:gap-16">
          {/* Column 1 — Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="inline-flex items-center gap-3 mb-6"
            >
              <Image
                src="/assets/logo-mark.png"
                alt="Dreamy Nights Sleep Consulting"
                width={40}
                height={40}
                className="h-auto w-auto max-h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-serif text-base font-semibold text-warm-white tracking-wide">
                  Dreamy Nights
                </p>
                <p className="text-[9px] font-sans font-medium uppercase tracking-[0.2em] text-warm-white/40">
                  Sleep Consulting
                </p>
              </div>
            </a>
            <p className="font-sans text-warm-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Personalized, gentle sleep solutions for your baby and your
              family. Helping families find their rhythm, one restful night at a
              time.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Follow on Instagram"
                className="w-9 h-9 rounded-full border border-warm-white/10 flex items-center justify-center text-warm-white/40 transition-all duration-300 hover:border-gold/40 hover:text-gold hover:bg-gold/5"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Follow on Facebook"
                className="w-9 h-9 rounded-full border border-warm-white/10 flex items-center justify-center text-warm-white/40 transition-all duration-300 hover:border-gold/40 hover:text-gold hover:bg-gold/5"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-warm-white/50 mb-5">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-sans text-sm text-warm-white/50 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-warm-white/50 mb-5">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:Michelli@dreamynightsconsulting.com"
                className="flex items-center gap-2.5 font-sans text-sm text-warm-white/50 hover:text-gold transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Michelli@dreamynightsconsulting.com
              </a>
              {/* TODO: Replace with actual phone number */}
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2.5 font-sans text-sm text-warm-white/50 hover:text-gold transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                (555) 123-4567
              </a>
            </div>

            {/* Book CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 bg-gold/10 border border-gold/20 text-gold text-xs font-sans font-semibold uppercase tracking-[0.12em] rounded-full transition-all duration-300 hover:bg-gold/20 hover:border-gold/40"
            >
              Book a Free Call
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-warm-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-warm-white/30 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Dreamy Nights Sleep Consulting.
            All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-sans text-warm-white/30 text-xs hover:text-warm-white/50 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-sans text-warm-white/30 text-xs hover:text-warm-white/50 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
