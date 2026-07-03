"use client";

import { motion } from "framer-motion";

const principles = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Empathy & Understanding",
    description:
      "We listen first. Every sleep plan is built with compassion and deep respect for your family\u2019s unique needs, routines, and parenting style.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Empowerment & Education",
    description:
      "We don\u2019t just fix sleep \u2014 we teach you how. You\u2019ll gain the knowledge and confidence to make informed decisions and nurture lasting sleep habits.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
    title: "Gentle & Holistic",
    description:
      "We consider your child\u2019s temperament, feeding patterns, daily routines, and overall environment, ensuring a comprehensive and responsive approach.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Safety First, Always",
    description:
      "Every sleep plan is carefully crafted to align with the most current safe sleep guidelines, promoting both healthy sleep and your child\u2019s well-being.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Principles() {
  return (
    <section className="relative bg-cloud-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.02] blur-3xl" />

      {/* Crescent moon — top left, bleeds off edge */}
      <motion.svg
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ y: { duration: 7, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 9, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute -top-10 -left-10 w-52 h-52 sm:w-64 sm:h-64 hidden md:block pointer-events-none"
        viewBox="0 0 80 80"
        fill="none"
      >
        <path d="M55 15c-2.5 0-5 .3-7.3 1A25 25 0 0 0 30 40a25 25 0 0 0 17.7 24c2.3.7 4.8 1 7.3 1A30 30 0 1 1 55 15z" stroke="var(--cloud-blue)" strokeWidth={1.2} opacity={0.4} />
        <path d="M55 15c-2.5 0-5 .3-7.3 1A25 25 0 0 0 30 40a25 25 0 0 0 17.7 24c2.3.7 4.8 1 7.3 1A30 30 0 1 1 55 15z" fill="var(--cloud-blue)" opacity={0.12} />
        <path d="M52 20c-1.8 0-3.5.3-5 .8A20 20 0 0 0 34 40a20 20 0 0 0 13 18.8c1.5.5 3.2.8 5 .8" stroke="var(--cloud-blue)" strokeWidth={0.6} opacity={0.2} />
      </motion.svg>

      {/* Star field — bottom right, bleeds off edge */}
      <motion.svg
        animate={{ opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -right-6 w-52 h-52 sm:w-64 sm:h-64 hidden md:block pointer-events-none"
        viewBox="0 0 80 80"
        fill="var(--gold)"
      >
        <path d="M50 12l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L50 29l-6.9 3.6 1.3-7.7-5.6-5.4 7.7-1.1L50 12z" opacity={0.3} />
        <path d="M25 50l2.4 4.9 5.4.8-3.9 3.8.9 5.4L25 62l-4.9 2.6.9-5.4-3.9-3.8 5.4-.8L25 50z" opacity={0.22} />
        <path d="M62 48l1.6 3.2 3.5.5-2.5 2.5.6 3.5L62 55.8l-3.2 1.7.6-3.5-2.5-2.5 3.5-.5L62 48z" opacity={0.2} />
        <line x1="50" y1="28" x2="27" y2="53" stroke="var(--gold)" strokeWidth={0.4} opacity={0.1} strokeDasharray="3 4" />
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
            Our Philosophy
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy leading-[1.1]">
            Why Choose
            <br className="hidden sm:block" />
            {" "}Dreamy Nights
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {principles.map((principle) => (
            <motion.div
              key={principle.title}
              variants={cardVariants}
              className="group relative bg-warm-white rounded-2xl p-8 sm:p-10 border border-cloud-blue/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(43,58,82,0.06)] hover:-translate-y-1"
            >
              {/* Gold accent line on top */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-linear-to-r from-transparent via-gold/0 to-transparent transition-all duration-500 group-hover:via-gold/40" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-gold/10 to-gold/5 flex items-center justify-center text-gold mb-6 transition-all duration-500 group-hover:from-gold/15 group-hover:to-gold/10 group-hover:scale-105">
                {principle.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy mb-3 transition-colors duration-300">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-text-body text-[15px] leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
