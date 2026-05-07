"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-navy pt-32 sm:pt-40 lg:pt-48 pb-24 sm:pb-32 lg:pb-40 overflow-hidden"
    >
      {/* Top gradient transition from cloud-white */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-cloud-white to-transparent pointer-events-none z-20" />

      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/[0.03] blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent" />

      {/* Star constellation — left, bleeds off */}
      <motion.svg
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 -left-6 w-56 h-56 sm:w-64 sm:h-64 hidden lg:block pointer-events-none"
        viewBox="0 0 100 100"
        fill="var(--gold)"
      >
        <path
          d="M55 10l5.5 11.2 12.3 1.8-8.9 8.7 2.1 12.3L55 38l-11 5.8 2.1-12.3-8.9-8.7 12.3-1.8L55 10z"
          opacity={0.22}
        />
        <path
          d="M22 60l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L22 77l-6.9 3.6 1.3-7.7-5.6-5.4 7.7-1.1L22 60z"
          opacity={0.18}
        />
        <path
          d="M78 65l2 4 4.4.6-3.2 3.1.8 4.4L78 74.5l-4 2.1.8-4.4-3.2-3.1 4.4-.6L78 65z"
          opacity={0.15}
        />
        <line
          x1="55"
          y1="35"
          x2="25"
          y2="63"
          stroke="var(--gold)"
          strokeWidth={0.4}
          opacity={0.08}
          strokeDasharray="3 4"
        />
        <line
          x1="55"
          y1="35"
          x2="78"
          y2="68"
          stroke="var(--gold)"
          strokeWidth={0.4}
          opacity={0.08}
          strokeDasharray="3 4"
        />
      </motion.svg>

      {/* Star constellation — right, bleeds off */}
      <motion.svg
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-6 -right-6 w-52 h-52 sm:w-64 sm:h-64 hidden lg:block pointer-events-none"
        viewBox="0 0 100 100"
        fill="var(--gold)"
      >
        <path
          d="M45 10l4.5 9.1 10 1.5-7.2 7 1.7 10L45 33l-9 4.6 1.7-10-7.2-7 10-1.5L45 10z"
          opacity={0.25}
        />
        <path
          d="M75 55l2.4 4.9 5.4.8-3.9 3.8.9 5.4L75 67l-4.9 2.6.9-5.4-3.9-3.8 5.4-.8L75 55z"
          opacity={0.18}
        />
        <path
          d="M25 70l1.6 3.2 3.5.5-2.5 2.5.6 3.5L25 77.8l-3.2 1.7.6-3.5-2.5-2.5 3.5-.5L25 70z"
          opacity={0.15}
        />
        <line
          x1="45"
          y1="30"
          x2="75"
          y2="58"
          stroke="var(--gold)"
          strokeWidth={0.5}
          opacity={0.08}
          strokeDasharray="2 5"
        />
      </motion.svg>

      {/* Moon — right side, bold */}
      <motion.svg
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-[30%] -right-6 w-40 h-40 sm:w-52 sm:h-52 hidden xl:block pointer-events-none"
        viewBox="0 0 80 80"
        fill="none"
      >
        <path
          d="M55 15c-2.5 0-5 .3-7.3 1A25 25 0 0 0 30 40a25 25 0 0 0 17.7 24c2.3.7 4.8 1 7.3 1A30 30 0 1 1 55 15z"
          stroke="var(--gold)"
          strokeWidth={1.2}
          opacity={0.3}
        />
        <path
          d="M55 15c-2.5 0-5 .3-7.3 1A25 25 0 0 0 30 40a25 25 0 0 0 17.7 24c2.3.7 4.8 1 7.3 1A30 30 0 1 1 55 15z"
          fill="var(--gold)"
          opacity={0.08}
        />
        <path
          d="M52 20c-1.8 0-3.5.3-5 .8A20 20 0 0 0 34 40a20 20 0 0 0 13 18.8c1.5.5 3.2.8 5 .8"
          stroke="var(--gold)"
          strokeWidth={0.6}
          opacity={0.15}
        />
      </motion.svg>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* Left — Header & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Moon icon */}
            <div className="mb-8">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </div>
            </div>

            {/* Label */}
            <p className="text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold mb-5">
              Let&apos;s Talk
            </p>

            {/* Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-warm-white leading-[1.1] mb-6">
              Ready for
              <br />
              Restful Nights?
            </h2>

            {/* Subheading */}
            <p className="font-sans text-cloud-blue/80 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
              Fill out the form and Michelli will get back to you within 24
              hours to schedule your free 15-minute consultation.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              {/* Email */}
              <a
                href="mailto:Michelli@goldenslumbersleep.com"
                className="flex items-center gap-3 text-warm-white/60 hover:text-gold transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full border border-warm-white/15 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4"
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
                </div>
                <span className="font-sans text-sm tracking-wide">
                  Michelli@goldenslumbersleep.com
                </span>
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Follow on Instagram"
                  className="w-10 h-10 rounded-full border border-warm-white/15 flex items-center justify-center text-warm-white/50 transition-all duration-300 hover:border-gold/40 hover:text-gold hover:bg-gold/5"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Follow on Facebook"
                  className="w-10 h-10 rounded-full border border-warm-white/15 flex items-center justify-center text-warm-white/50 transition-all duration-300 hover:border-gold/40 hover:text-gold hover:bg-gold/5"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          {/* TODO: Connect to form handler (e.g., Formspree, Netlify Forms, or custom API route) */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
            className="relative bg-warm-white/[0.04] backdrop-blur-sm border border-warm-white/[0.08] rounded-2xl p-7 sm:p-10"
          >
            {/* Decorative gold line at top */}
            <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />

            <div className="space-y-5">
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block font-sans text-xs font-medium uppercase tracking-[0.2em] text-warm-white/50 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Jane"
                    className="w-full bg-warm-white/[0.06] border border-warm-white/10 rounded-lg px-4 py-3.5 font-sans text-sm text-warm-white placeholder:text-warm-white/25 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-warm-white/[0.08] focus:ring-1 focus:ring-gold/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block font-sans text-xs font-medium uppercase tracking-[0.2em] text-warm-white/50 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Smith"
                    className="w-full bg-warm-white/[0.06] border border-warm-white/10 rounded-lg px-4 py-3.5 font-sans text-sm text-warm-white placeholder:text-warm-white/25 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-warm-white/[0.08] focus:ring-1 focus:ring-gold/20"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-xs font-medium uppercase tracking-[0.2em] text-warm-white/50 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@example.com"
                  className="w-full bg-warm-white/[0.06] border border-warm-white/10 rounded-lg px-4 py-3.5 font-sans text-sm text-warm-white placeholder:text-warm-white/25 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-warm-white/[0.08] focus:ring-1 focus:ring-gold/20"
                />
              </div>

              {/* Phone & Child's Age row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-sans text-xs font-medium uppercase tracking-[0.2em] text-warm-white/50 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(555) 123-4567"
                    className="w-full bg-warm-white/[0.06] border border-warm-white/10 rounded-lg px-4 py-3.5 font-sans text-sm text-warm-white placeholder:text-warm-white/25 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-warm-white/[0.08] focus:ring-1 focus:ring-gold/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="childAge"
                    className="block font-sans text-xs font-medium uppercase tracking-[0.2em] text-warm-white/50 mb-2"
                  >
                    Child&apos;s Age
                  </label>
                  <input
                    type="text"
                    id="childAge"
                    name="childAge"
                    placeholder="e.g., 6 months"
                    className="w-full bg-warm-white/[0.06] border border-warm-white/10 rounded-lg px-4 py-3.5 font-sans text-sm text-warm-white placeholder:text-warm-white/25 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-warm-white/[0.08] focus:ring-1 focus:ring-gold/20"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-xs font-medium uppercase tracking-[0.2em] text-warm-white/50 mb-2"
                >
                  Tell Us About Your Sleep Challenges
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="What's going on with your little one's sleep? Any specific concerns or goals?"
                  className="w-full bg-warm-white/[0.06] border border-warm-white/10 rounded-lg px-4 py-3.5 font-sans text-sm text-warm-white placeholder:text-warm-white/25 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-warm-white/[0.08] focus:ring-1 focus:ring-gold/20 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-3 px-10 py-4.5 bg-gold text-navy-dark text-sm sm:text-base font-sans font-semibold uppercase tracking-[0.12em] rounded-full transition-all duration-300 hover:bg-gold-light hover:shadow-[0_12px_40px_rgba(212,168,67,0.35)] hover:scale-[1.02] active:scale-[0.98] mt-2"
              >
                Send Message
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
