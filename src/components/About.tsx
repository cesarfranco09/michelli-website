"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Michelli's bio — first two paragraphs show by default, the rest behind "Read more"
const bioIntro = [
  "I’m a proud Brazilian mother of two amazing daughters, and I know firsthand just how transformative quality sleep can be — not only for children, but for the entire family.",
  "For more than 10 years, I’ve worked as a nanny in California, caring for children of all ages and supporting families through every stage of early childhood. Throughout my career, I’ve helped numerous families establish healthy sleep habits and overcome common sleep challenges. Seeing exhausted parents regain their energy and confidence while their children began sleeping more peacefully inspired me to turn my passion into a profession by becoming a Certified Pediatric Sleep Consultant through IPSP and a Certified Nanny Specialist.",
];
const bioMore = [
  "Today, I combine my experience as both a mother and childcare professional with proven sleep strategies that have already helped many families achieve lasting results. My approach is centered on understanding that every child is unique and every family has different needs, values, and goals. There is no one-size-fits-all solution when it comes to sleep.",
  "Families who work with me receive compassionate, personalized, and judgment-free support designed to create healthy, sustainable sleep habits. The result is often more than just better sleep for a child — it means more rest for parents, less stress in the home, and happier, more connected family days.",
  "I understand the exhaustion, uncertainty, and emotions that can come with sleep challenges, because I’ve experienced them myself. That’s why I’m passionate about empowering parents with the knowledge, confidence, and guidance they need to navigate their child’s sleep journey successfully.",
  "Nothing brings me greater joy than helping families achieve restful nights, brighter mornings, and a healthier balance at home. I would be honored to support your family and help you create the foundation for better sleep and happier days ahead.",
];

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="relative bg-cream py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/[0.03] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-cloud-blue/[0.06] blur-3xl" />

      {/* Decorative SVGs */}
      {/* Star constellation — top right, bleeds off edge */}
      <motion.svg
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-6 w-52 h-52 sm:w-64 sm:h-64 hidden md:block pointer-events-none"
        viewBox="0 0 80 80"
        fill="var(--gold)"
      >
        <path
          d="M45 8l4.5 9.1 10 1.5-7.2 7 1.7 10L45 31l-9 4.6 1.7-10-7.2-7 10-1.5L45 8z"
          opacity={0.3}
        />
        <path
          d="M20 50l2.4 4.9 5.4.8-3.9 3.8.9 5.4L20 62l-4.9 2.6.9-5.4-3.9-3.8 5.4-.8L20 50z"
          opacity={0.22}
        />
        <path
          d="M65 55l1.6 3.2 3.5.5-2.5 2.5.6 3.5L65 62.8l-3.2 1.7.6-3.5-2.5-2.5 3.5-.5L65 55z"
          opacity={0.25}
        />
        <line
          x1="45"
          y1="30"
          x2="22"
          y2="53"
          stroke="var(--gold)"
          strokeWidth={0.4}
          opacity={0.1}
          strokeDasharray="3 4"
        />
      </motion.svg>

      {/* Cloud — bottom right, bleeds off */}
      <motion.svg
        animate={{ x: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 -right-8 w-56 h-28 sm:w-72 sm:h-36 hidden md:block pointer-events-none"
        viewBox="0 0 140 65"
        fill="var(--cloud-blue)"
      >
        <ellipse cx="70" cy="44" rx="48" ry="18" opacity={0.25} />
        <ellipse cx="48" cy="32" rx="28" ry="20" opacity={0.25} />
        <ellipse cx="82" cy="28" rx="32" ry="22" opacity={0.25} />
        <ellipse cx="108" cy="38" rx="20" ry="15" opacity={0.2} />
        <ellipse cx="32" cy="40" rx="16" ry="12" opacity={0.18} />
      </motion.svg>

      {/* Heart — left side, bold */}
      <motion.svg
        animate={{ scale: [1, 1.15, 1], y: [0, -6, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-[50%] -left-4 w-28 h-28 sm:w-36 sm:h-36 hidden xl:block pointer-events-none"
        viewBox="0 0 24 24"
        fill="var(--gold)"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          opacity={0.25}
        />
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          stroke="var(--gold)"
          strokeWidth={0.3}
          fill="none"
          opacity={0.35}
        />
      </motion.svg>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Decorative frame behind the photo */}
              <div className="absolute -inset-3 sm:-inset-4 border border-gold/20 rounded-2xl" />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-24 h-24 border-b-2 border-r-2 border-gold/30 rounded-br-2xl" />

              {/* Photo placeholder */}
              {/* TODO: Add Michelli's photo */}
              <div className="relative h-full w-full rounded-xl bg-linear-to-br from-cloud-white via-cloud-blue/30 to-cream overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-gold/60"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <p className="text-text-muted text-sm font-sans">
                    Michelli&apos;s Photo
                  </p>
                  <p className="text-text-muted/60 text-xs font-sans mt-1">
                    Coming Soon
                  </p>
                </div>
              </div>

              {/* IPSP certification seal (client-provided official badge) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -right-3 sm:-bottom-7 sm:-right-6 w-24 sm:w-28 lg:w-32"
              >
                <Image
                  src="/assets/ipsp-certified-badge.png"
                  alt="Institute of Pediatric Sleep &amp; Parenting — Certified Sleep Consultant"
                  width={280}
                  height={244}
                  className="h-auto w-full drop-shadow-[0_8px_20px_rgba(43,58,82,0.25)]"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label */}
            <p className="text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold mb-4">
              Meet Your Sleep Expert
            </p>

            {/* Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy leading-[1.1] mb-8">
              Hi, I&apos;m Michelli
            </h2>

            {/* Decorative line */}
            <div className="w-16 h-[2px] bg-linear-to-r from-gold to-gold-light mb-8" />

            {/* Credential chips */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {[
                "IPSP Certified Sleep Consultant",
                "Certified Nanny Specialist",
                "10+ Years of Childcare Experience",
              ].map((credential) => (
                <span
                  key={credential}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/20 text-navy font-sans text-[13px] font-medium"
                >
                  <svg
                    className="w-3.5 h-3.5 text-gold shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {credential}
                </span>
              ))}
            </div>

            {/* Bio */}
            <div className="text-text-body font-sans text-base sm:text-[17px] leading-relaxed">
              <div className="space-y-5">
                {bioIntro.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    key="bio-more"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-5 pt-5">
                      {bioMore.map((para) => (
                        <p key={para.slice(0, 24)}>{para}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Read more / less toggle */}
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="group mt-6 inline-flex items-center gap-1.5 text-navy font-sans font-semibold text-sm transition-colors duration-300 hover:text-gold"
              >
                {expanded ? "Read less" : "Read more"}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    expanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 text-gold font-sans font-semibold text-sm uppercase tracking-[0.12em] transition-colors duration-300 hover:text-gold-dark"
              >
                Learn More About My Approach
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
