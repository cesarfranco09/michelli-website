"use client";

import { motion } from "framer-motion";

const challenges = [
  "Frequent night wakings",
  "Bedtime battles",
  "Short naps",
  "Early morning wake-ups",
  "Sleep regressions",
  "Transitioning from crib to bed",
  "Nap schedule struggles",
  "Sleep associations (rocking, feeding, pacifier)",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function SleepChecklist() {
  return (
    <section id="is-this-you" className="relative bg-cream py-24 sm:py-32 overflow-hidden">
      {/* Decorative star — top right, bleeds off edge */}
      <motion.svg
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-6 w-40 h-40 sm:w-52 sm:h-52 hidden md:block pointer-events-none"
        viewBox="0 0 80 80"
        fill="var(--gold)"
      >
        <path
          d="M45 8l4.5 9.1 10 1.5-7.2 7 1.7 10L45 31l-9 4.6 1.7-10-7.2-7 10-1.5L45 8z"
          opacity={0.18}
        />
        <path
          d="M20 50l2.4 4.9 5.4.8-3.9 3.8.9 5.4L20 62l-4.9 2.6.9-5.4-3.9-3.8 5.4-.8L20 50z"
          opacity={0.14}
        />
      </motion.svg>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold mb-4">
            Sound Familiar?
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy leading-[1.1] mb-5">
            Is Sleep Consulting
            <br className="hidden sm:block" />
            {" "}Right for You?
          </h2>
          <p className="max-w-xl mx-auto font-sans text-text-muted text-base sm:text-lg leading-relaxed">
            If you&apos;re nodding along to any of these, you&apos;re exactly
            who I help — and none of it means you&apos;ve done anything wrong.
          </p>
        </motion.div>

        {/* Checklist grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {challenges.map((challenge) => (
            <motion.div
              key={challenge}
              variants={itemVariants}
              className="flex items-center gap-4 bg-warm-white border border-cloud-blue/30 rounded-2xl px-6 py-5 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_4px_24px_rgba(43,58,82,0.05)]"
            >
              <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <svg
                  className="w-4.5 h-4.5 text-gold"
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
              </div>
              <p className="font-sans text-[15px] text-navy font-medium leading-snug">
                {challenge}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bridge to services */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10 sm:mt-12 font-sans text-text-muted text-sm sm:text-base"
        >
          If you checked even one box, there&apos;s a gentler way forward.{" "}
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gold font-semibold hover:text-gold-dark transition-colors duration-300 underline underline-offset-2 decoration-gold/30 hover:decoration-gold"
          >
            See the sleep packages
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
