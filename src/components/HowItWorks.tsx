"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Book Your Free Call",
    description:
      "Schedule a complimentary 15-minute consultation so we can understand your family\u2019s sleep challenges.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get Your Custom Plan",
    description:
      "After a thorough assessment, you\u2019ll receive a personalized sleep plan tailored to your child and your family\u2019s needs.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Guided Support",
    description:
      "Michelli walks alongside you every step of the way with hands-on support, daily check-ins, and real-time troubleshooting.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Sweet Dreams",
    description:
      "Watch your little one (and you!) transform into confident, independent sleepers. Graduation call to celebrate your wins.",
    icon: (
      <svg
        className="w-7 h-7"
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
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-cloud-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.02] blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-cloud-blue/[0.04] blur-3xl" />

      {/* Rattle — top right, bold, bleeds off edge */}
      <motion.svg
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 -right-4 w-36 h-36 sm:w-48 sm:h-48 hidden lg:block pointer-events-none"
        viewBox="0 0 50 55"
        fill="none"
        strokeLinecap="round"
      >
        <circle
          cx="25"
          cy="16"
          r="13"
          stroke="var(--gold)"
          strokeWidth={1.5}
          opacity={0.35}
        />
        <circle
          cx="25"
          cy="16"
          r="7"
          stroke="var(--gold)"
          strokeWidth={1}
          opacity={0.25}
        />
        <circle cx="20" cy="13" r="2" fill="var(--gold)" opacity={0.22} />
        <circle cx="30" cy="13" r="2" fill="var(--gold)" opacity={0.22} />
        <circle cx="25" cy="20" r="2" fill="var(--gold)" opacity={0.22} />
        <line
          x1="25"
          y1="29"
          x2="25"
          y2="48"
          stroke="var(--gold)"
          strokeWidth={2}
          opacity={0.3}
        />
        <ellipse
          cx="25"
          cy="49"
          rx="5"
          ry="3"
          stroke="var(--gold)"
          strokeWidth={1.5}
          opacity={0.28}
        />
      </motion.svg>

      {/* Cloud — bottom left, bleeds off edge */}
      <motion.svg
        animate={{ x: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -left-8 w-56 h-28 sm:w-72 sm:h-36 hidden md:block pointer-events-none"
        viewBox="0 0 140 65"
        fill="var(--cloud-blue)"
      >
        <ellipse cx="70" cy="44" rx="48" ry="18" opacity={0.25} />
        <ellipse cx="48" cy="32" rx="28" ry="20" opacity={0.25} />
        <ellipse cx="82" cy="28" rx="32" ry="22" opacity={0.25} />
        <ellipse cx="108" cy="38" rx="20" ry="15" opacity={0.2} />
        <ellipse cx="32" cy="40" rx="16" ry="12" opacity={0.18} />
      </motion.svg>

      {/* Stars — left side, bold */}
      <motion.svg
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[38%] -left-4 w-36 h-36 sm:w-44 sm:h-44 hidden lg:block pointer-events-none"
        viewBox="0 0 60 60"
        fill="var(--gold)"
      >
        <path
          d="M35 8l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L35 25l-6.9 3.6 1.3-7.7-5.6-5.4 7.7-1.1L35 8z"
          opacity={0.28}
        />
        <path
          d="M15 40l2 4 4.4.6-3.2 3.1.8 4.4L15 49.5l-4 2.1.8-4.4-3.2-3.1 4.4-.6L15 40z"
          opacity={0.2}
        />
        <line
          x1="35"
          y1="24"
          x2="17"
          y2="42"
          stroke="var(--gold)"
          strokeWidth={0.4}
          opacity={0.1}
          strokeDasharray="2 5"
        />
      </motion.svg>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <p className="text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold mb-4">
            Your Journey
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy leading-[1.1]">
            How It Works
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full bg-linear-to-r from-gold/20 via-gold/40 to-gold/20 origin-left"
            />
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Mobile/tablet connecting line */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-4 left-1/2 w-px h-8 bg-linear-to-b from-gold/30 to-transparent sm:hidden" />
                )}

                {/* Step circle */}
                <div className="relative mb-6">
                  {/* Outer ring */}
                  <div className="w-[104px] h-[104px] rounded-full border border-gold/20 flex items-center justify-center">
                    {/* Inner circle */}
                    <div className="w-20 h-20 rounded-full bg-warm-white shadow-[0_4px_20px_rgba(43,58,82,0.06)] border border-cloud-blue/20 flex items-center justify-center text-gold transition-all duration-500 hover:shadow-[0_8px_30px_rgba(212,168,67,0.15)] hover:border-gold/30">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-navy-dark text-[11px] font-sans font-bold flex items-center justify-center shadow-[0_2px_10px_rgba(212,168,67,0.3)]">
                    {step.number}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-text-body text-[15px] leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
