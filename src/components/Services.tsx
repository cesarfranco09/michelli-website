"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "Starter Sleep Package",
    duration: "7 Days of Support",
    price: 249,
    bestFor:
      "Perfect for families looking for guidance and accountability during the first week of sleep training.",
    features: [
      "1 initial phone consultation (60 minutes)",
      "Personalized sleep plan tailored to your child's age and family's goals",
      "7 consecutive days of support via text or email",
      "Adjustments to the plan as needed throughout the week",
      "Final summary with recommendations for continued success",
    ],
    popular: false,
  },
  {
    name: "Complete Sleep Package",
    duration: "14 Days of Support",
    price: 399,
    bestFor:
      "Ideal for families who would like additional coaching and support while building healthy sleep habits.",
    features: [
      "1 initial phone consultation (60 minutes)",
      "Personalized sleep plan tailored to your child's needs",
      "14 consecutive days of unlimited support via text or email",
      "Plan adjustments as your child progresses",
      "Final wrap-up written summary with long-term recommendations",
    ],
    popular: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-cream py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-cloud-blue/[0.06] blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/[0.05] blur-3xl" />

      {/* ====== Decorative nursery SVG illustrations ====== */}

      {/* Crescent moon — top left, bleeds off edge */}
      <motion.svg
        animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
        transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute -top-10 -left-12 w-52 h-52 sm:w-72 sm:h-72 hidden md:block pointer-events-none"
        viewBox="0 0 80 80"
        fill="none"
      >
        <path
          d="M55 15c-2.5 0-5 .3-7.3 1A25 25 0 0 0 30 40a25 25 0 0 0 17.7 24c2.3.7 4.8 1 7.3 1A30 30 0 1 1 55 15z"
          stroke="var(--gold)"
          strokeWidth={1.2}
          opacity={0.4}
        />
        <path
          d="M55 15c-2.5 0-5 .3-7.3 1A25 25 0 0 0 30 40a25 25 0 0 0 17.7 24c2.3.7 4.8 1 7.3 1A30 30 0 1 1 55 15z"
          fill="var(--gold)"
          opacity={0.12}
        />
        {/* Inner glow detail */}
        <path
          d="M52 20c-1.8 0-3.5.3-5 .8A20 20 0 0 0 34 40a20 20 0 0 0 13 18.8c1.5.5 3.2.8 5 .8"
          stroke="var(--gold)"
          strokeWidth={0.6}
          opacity={0.2}
        />
      </motion.svg>

      {/* Star constellation — top right, bleeds off edge */}
      <motion.svg
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -top-6 -right-8 w-56 h-56 sm:w-72 sm:h-72 hidden md:block pointer-events-none"
        viewBox="0 0 100 100"
        fill="var(--gold)"
      >
        {/* Hero star */}
        <path d="M55 10l5.5 11.2 12.3 1.8-8.9 8.7 2.1 12.3L55 38l-11 5.8 2.1-12.3-8.9-8.7 12.3-1.8L55 10z" opacity={0.3} />
        {/* Medium star */}
        <path d="M22 55l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L22 72l-6.9 3.6 1.3-7.7-5.6-5.4 7.7-1.1L22 55z" opacity={0.22} />
        {/* Small stars */}
        <path d="M78 60l2 4 4.4.6-3.2 3.1.8 4.4L78 69l-4 2.1.8-4.4-3.2-3.1 4.4-.6L78 60z" opacity={0.2} />
        <path d="M72 25l1.2 2.4 2.6.4-1.9 1.8.5 2.6L72 30.8l-2.4 1.3.5-2.6-1.9-1.8 2.6-.4L72 25z" opacity={0.25} />
        <path d="M35 20l.8 1.6 1.8.3-1.3 1.2.3 1.8-1.6-.9-1.6.9.3-1.8-1.3-1.2 1.8-.3L35 20z" opacity={0.18} />
        {/* Connecting lines between stars */}
        <line x1="55" y1="35" x2="25" y2="58" stroke="var(--gold)" strokeWidth={0.4} opacity={0.12} strokeDasharray="3 4" />
        <line x1="55" y1="35" x2="74" y2="27" stroke="var(--gold)" strokeWidth={0.4} opacity={0.12} strokeDasharray="3 4" />
      </motion.svg>

      {/* Baby mobile — left side, large and bold, bleeds off left */}
      <motion.svg
        animate={{ rotate: [0, 6, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[32%] -left-8 w-56 h-72 sm:w-72 sm:h-[22rem] hidden lg:block pointer-events-none"
        viewBox="0 0 80 110"
        fill="none"
        strokeLinecap="round"
      >
        {/* Top hook */}
        <path d="M40 0v14" stroke="var(--cloud-blue)" strokeWidth={1.8} opacity={0.4} />
        {/* Crossbar */}
        <path d="M12 14h56" stroke="var(--cloud-blue)" strokeWidth={1.8} opacity={0.4} />
        {/* Left string + star */}
        <path d="M12 14v24" stroke="var(--cloud-blue)" strokeWidth={1.2} opacity={0.35} />
        <path
          d="M8 41l4-3 4 3-1.5-5L18 33l-5.5 0L11 28l-1.5 5L4 33l3.5 3L8 41z"
          fill="var(--gold)"
          stroke="var(--gold)"
          strokeWidth={0.5}
          opacity={0.35}
        />
        {/* Center string + moon */}
        <path d="M40 14v32" stroke="var(--cloud-blue)" strokeWidth={1.2} opacity={0.35} />
        <path
          d="M44 50a10 10 0 1 1-10 10 8 8 0 0 0 10-10z"
          fill="var(--gold)"
          stroke="var(--gold)"
          strokeWidth={0.8}
          opacity={0.3}
        />
        {/* Right string + heart */}
        <path d="M68 14v20" stroke="var(--cloud-blue)" strokeWidth={1.2} opacity={0.35} />
        <path
          d="M68 38c-1.5-1.5-4-1.5-5.5 0a3.9 3.9 0 0 0 0 5.5L68 49l5.5-5.5a3.9 3.9 0 0 0 0-5.5c-1.5-1.5-4-1.5-5.5 0z"
          fill="var(--gold)"
          opacity={0.28}
        />
        {/* Connecting arcs for visual interest */}
        <path d="M12 14 Q26 6 40 14" stroke="var(--cloud-blue)" strokeWidth={0.6} opacity={0.15} fill="none" />
        <path d="M40 14 Q54 6 68 14" stroke="var(--cloud-blue)" strokeWidth={0.6} opacity={0.15} fill="none" />
      </motion.svg>

      {/* Large cloud — right side, bleeds off edge */}
      <motion.svg
        animate={{ x: [0, 14, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] -right-10 w-60 h-32 sm:w-80 sm:h-44 hidden lg:block pointer-events-none"
        viewBox="0 0 140 65"
        fill="var(--cloud-blue)"
      >
        <ellipse cx="70" cy="44" rx="48" ry="18" opacity={0.25} />
        <ellipse cx="48" cy="32" rx="28" ry="20" opacity={0.25} />
        <ellipse cx="82" cy="28" rx="32" ry="22" opacity={0.25} />
        <ellipse cx="108" cy="38" rx="20" ry="15" opacity={0.2} />
        <ellipse cx="32" cy="40" rx="16" ry="12" opacity={0.18} />
        {/* Cloud highlight */}
        <ellipse cx="65" cy="26" rx="18" ry="10" fill="white" opacity={0.06} />
      </motion.svg>

      {/* Teddy bear — bottom left, large and confident */}
      <motion.svg
        animate={{ y: [0, 8, 0], rotate: [0, -4, 4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-6 left-[3%] w-40 h-40 sm:w-52 sm:h-52 hidden md:block pointer-events-none"
        viewBox="0 0 60 62"
        fill="var(--gold)"
      >
        {/* Ears */}
        <circle cx="17" cy="14" r="8" opacity={0.25} />
        <circle cx="43" cy="14" r="8" opacity={0.25} />
        {/* Head */}
        <circle cx="30" cy="22" r="14" opacity={0.25} />
        {/* Body */}
        <ellipse cx="30" cy="44" rx="16" ry="14" opacity={0.25} />
        {/* Arms */}
        <ellipse cx="13" cy="40" rx="5" ry="9" transform="rotate(-15 13 40)" opacity={0.2} />
        <ellipse cx="47" cy="40" rx="5" ry="9" transform="rotate(15 47 40)" opacity={0.2} />
        {/* Feet */}
        <ellipse cx="21" cy="56" rx="7" ry="4" opacity={0.2} />
        <ellipse cx="39" cy="56" rx="7" ry="4" opacity={0.2} />
        {/* Inner ear */}
        <circle cx="17" cy="14" r="4.5" opacity={0.15} />
        <circle cx="43" cy="14" r="4.5" opacity={0.15} />
        {/* Face */}
        <circle cx="24" cy="19" r="2" opacity={0.2} />
        <circle cx="36" cy="19" r="2" opacity={0.2} />
        <ellipse cx="30" cy="25" rx="3" ry="2" opacity={0.18} />
        {/* Tummy circle */}
        <circle cx="30" cy="43" r="8" opacity={0.1} />
      </motion.svg>

      {/* Twinkling star field — bottom right, bleeds off edge */}
      <motion.svg
        animate={{ opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-8 -right-6 w-52 h-52 sm:w-64 sm:h-64 hidden md:block pointer-events-none"
        viewBox="0 0 100 100"
        fill="var(--gold)"
      >
        <path d="M30 15l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L30 32l-6.9 3.6 1.3-7.7-5.6-5.4 7.7-1.1L30 15z" opacity={0.3} />
        <path d="M72 10l2.4 4.8 5.3.8-3.8 3.7.9 5.3L72 21.5l-4.8 2.5.9-5.3-3.8-3.7 5.3-.8L72 10z" opacity={0.25} />
        <path d="M55 65l3 6 6.6.9-4.8 4.7 1.1 6.6L55 79.5l-5.9 3.1 1.1-6.6-4.8-4.7 6.6-.9L55 65z" opacity={0.22} />
        <path d="M85 55l1.6 3.2 3.5.5-2.5 2.5.6 3.5L85 62.8l-3.2 1.7.6-3.5-2.5-2.5 3.5-.5L85 55z" opacity={0.28} />
        <path d="M18 72l1.2 2.4 2.6.4-1.9 1.8.5 2.6L18 77.8l-2.4 1.3.5-2.6-1.9-1.8 2.6-.4L18 72z" opacity={0.2} />
        <path d="M45 35l1 2 2.2.3-1.6 1.5.4 2.2-2-1.1-2 1.1.4-2.2-1.6-1.5 2.2-.3L45 35z" opacity={0.22} />
        {/* Connecting dots */}
        <line x1="30" y1="30" x2="72" y2="15" stroke="var(--gold)" strokeWidth={0.5} opacity={0.1} strokeDasharray="2 5" />
        <line x1="72" y1="15" x2="85" y2="58" stroke="var(--gold)" strokeWidth={0.5} opacity={0.1} strokeDasharray="2 5" />
        <line x1="55" y1="70" x2="85" y2="58" stroke="var(--gold)" strokeWidth={0.5} opacity={0.1} strokeDasharray="2 5" />
      </motion.svg>

      {/* Rattle — upper left area, bold */}
      <motion.svg
        animate={{ rotate: [-12, 12, -12] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-20 left-[12%] w-28 h-28 sm:w-36 sm:h-36 hidden lg:block pointer-events-none"
        viewBox="0 0 50 55"
        fill="none"
        strokeLinecap="round"
      >
        <circle cx="25" cy="16" r="13" stroke="var(--gold)" strokeWidth={1.5} opacity={0.35} />
        <circle cx="25" cy="16" r="7" stroke="var(--gold)" strokeWidth={1} opacity={0.25} />
        {/* Beads inside */}
        <circle cx="20" cy="13" r="2" fill="var(--gold)" opacity={0.22} />
        <circle cx="30" cy="13" r="2" fill="var(--gold)" opacity={0.22} />
        <circle cx="25" cy="20" r="2" fill="var(--gold)" opacity={0.22} />
        {/* Handle */}
        <line x1="25" y1="29" x2="25" y2="48" stroke="var(--gold)" strokeWidth={2} opacity={0.3} />
        <ellipse cx="25" cy="49" rx="5" ry="3" stroke="var(--gold)" strokeWidth={1.5} opacity={0.28} />
      </motion.svg>

      {/* Heart — right side, mid cards */}
      <motion.svg
        animate={{ scale: [1, 1.15, 1], y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-[52%] -right-4 w-28 h-28 sm:w-36 sm:h-36 hidden xl:block pointer-events-none"
        viewBox="0 0 24 24"
        fill="var(--gold)"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" opacity={0.25} />
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="var(--gold)" strokeWidth={0.4} fill="none" opacity={0.35} />
      </motion.svg>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold mb-4">
            Invest In Rest
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy leading-[1.1] mb-5">
            Sleep Packages
          </h2>
          <p className="max-w-lg mx-auto font-sans text-text-muted text-base sm:text-lg leading-relaxed">
            Imagine bedtime becoming the calmest part of your day. Choose the
            level of support that gets you there.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-4xl mx-auto"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={cardVariants}
              className={`group relative flex flex-col rounded-2xl transition-all duration-500 ${
                pkg.popular
                  ? "bg-navy z-10 p-px lg:scale-[1.04] shadow-[0_16px_60px_rgba(43,58,82,0.18)]"
                  : "bg-warm-white border border-cloud-blue/30 hover:shadow-[0_8px_40px_rgba(43,58,82,0.06)] hover:-translate-y-1"
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1.5 px-5 py-1.5 bg-gold text-navy-dark text-[11px] font-sans font-bold uppercase tracking-[0.15em] rounded-full shadow-[0_4px_16px_rgba(212,168,67,0.35)]">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Most Popular
                  </span>
                </div>
              )}

              {/* Inner content — uses a wrapper for the navy card's inner padding */}
              <div
                className={`flex flex-col flex-1 p-8 sm:p-10 ${
                  pkg.popular
                    ? "bg-navy rounded-2xl"
                    : ""
                }`}
              >
                {/* Package name */}
                <p
                  className={`text-[11px] font-sans font-semibold uppercase tracking-[0.25em] mb-3 ${
                    pkg.popular ? "text-gold-light" : "text-text-muted"
                  }`}
                >
                  {pkg.name}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-4">
                  <span
                    className={`font-serif text-5xl sm:text-6xl font-semibold leading-none ${
                      pkg.popular ? "text-warm-white" : "text-navy"
                    }`}
                  >
                    ${pkg.price}
                  </span>
                </div>

                {/* Support duration */}
                <p
                  className={`text-xs font-sans font-semibold uppercase tracking-[0.2em] mb-4 ${
                    pkg.popular ? "text-gold-light" : "text-gold-dark"
                  }`}
                >
                  {pkg.duration}
                </p>

                {/* Best for / description */}
                <p
                  className={`font-sans text-sm leading-relaxed mb-8 pb-8 border-b ${
                    pkg.popular
                      ? "text-cloud-blue/70 border-warm-white/10"
                      : "text-text-muted border-cloud-blue/20"
                  }`}
                >
                  {pkg.bestFor}
                </p>

                {/* Features list */}
                <ul className="space-y-4 mb-10 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 mt-0.5 shrink-0 ${
                          pkg.popular ? "text-gold" : "text-gold"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span
                        className={`font-sans text-[15px] leading-snug ${
                          pkg.popular ? "text-cloud-blue/90" : "text-text-body"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`block w-full py-4 text-center text-sm font-sans font-semibold uppercase tracking-[0.12em] rounded-full transition-all duration-300 active:scale-[0.98] ${
                    pkg.popular
                      ? "bg-gold text-navy-dark hover:bg-gold-light hover:shadow-[0_8px_30px_rgba(212,168,67,0.3)] hover:scale-[1.02]"
                      : "bg-transparent border-2 border-navy/15 text-navy hover:border-gold hover:text-gold hover:bg-gold/5"
                  }`}
                >
                  {pkg.popular ? "Get Started" : "Select Plan"}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16 font-sans text-text-muted text-sm sm:text-base"
        >
          Not sure which package is right for you?{" "}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gold font-semibold hover:text-gold-dark transition-colors duration-300 underline underline-offset-2 decoration-gold/30 hover:decoration-gold"
          >
            Book a free consultation
          </a>{" "}
          and we&apos;ll help you decide.
        </motion.p>

        {/* Exclusivity note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mt-10 sm:mt-14 border border-gold/20 bg-gold/[0.04] rounded-2xl px-8 py-7 text-center"
        >
          <svg
            className="w-6 h-6 mx-auto mb-3 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
            />
          </svg>
          <p className="font-serif italic text-navy text-lg leading-relaxed">
            Because I work one-on-one with every family, I accept a limited
            number of clients each month to provide the highest level of
            personalized support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
