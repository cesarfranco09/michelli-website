"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Michelli was fantastic to work with. She was calm, encouraging, and incredibly knowledgeable. She was also very patient when we struggled with some of the more challenging nights.",
    attribution: "Parent of a 4-month-old and a 2-year-old",
  },
  {
    quote:
      "Before working with Michelli, our son was not sleeping by himself and had multiple overnight wakings with feedings. Michelli was there every step of the way \u2014 calls and texts every morning, always willing to answer questions and offer solutions. She was fantastic!",
    attribution: "Parent of a 9-month-old",
  },
  {
    quote:
      "Michelli was kind and dedicated to helping us through some bumps in the road \u2014 reflux, sickness \u2014 she was always there to listen and give advice.",
    attribution: "Charlotte S., parent of a 5-month-old",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent(
      (prev) => (prev + dir + testimonials.length) % testimonials.length,
    );
  }, []);

  // Auto-advance every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 7000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section
      id="testimonials"
      className="relative bg-navy pt-32 sm:pt-40 lg:pt-48 pb-32 sm:pb-40 lg:pb-48 overflow-hidden"
    >
      {/* Top gradient transition from cloud-white */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-cloud-white to-transparent pointer-events-none z-20" />

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/[0.03] blur-3xl" />
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-gold/[0.04] to-transparent" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-gold/[0.04] to-transparent" />
      </div>

      {/* Decorative quote marks — large, background */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-12 left-[8%] w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 pointer-events-none"
        viewBox="0 0 100 100"
        fill="var(--gold)"
      >
        <path
          d="M20 65c0-11 6-21 17-28l4 6c-8 5-11 11-11 17h10c4 0 7 3 7 7v14c0 4-3 7-7 7H27c-4 0-7-3-7-7V65zm33 0c0-11 6-21 17-28l4 6c-8 5-11 11-11 17h10c4 0 7 3 7 7v14c0 4-3 7-7 7H60c-4 0-7-3-7-7V65z"
          opacity={0.06}
        />
      </motion.svg>

      {/* Crescent moon — top right, bleeds off */}
      <motion.svg
        animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
        transition={{
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -top-6 -right-8 w-48 h-48 sm:w-64 sm:h-64 hidden md:block pointer-events-none"
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

      {/* Star field — bottom left, bleeds off */}
      <motion.svg
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -left-6 w-48 h-48 sm:w-56 sm:h-56 hidden lg:block pointer-events-none"
        viewBox="0 0 80 80"
        fill="var(--gold)"
      >
        <path
          d="M40 12l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L40 29l-6.9 3.6 1.3-7.7-5.6-5.4 7.7-1.1L40 12z"
          opacity={0.22}
        />
        <path
          d="M15 50l2 4 4.4.6-3.2 3.1.8 4.4L15 59.5l-4 2.1.8-4.4-3.2-3.1 4.4-.6L15 50z"
          opacity={0.18}
        />
        <path
          d="M60 55l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4L60 55z"
          opacity={0.15}
        />
        <line
          x1="40"
          y1="28"
          x2="17"
          y2="52"
          stroke="var(--gold)"
          strokeWidth={0.4}
          opacity={0.08}
          strokeDasharray="2 5"
        />
      </motion.svg>

      {/* Bottom gradient transition to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-cream to-transparent pointer-events-none z-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold mb-4">
            Happy Families
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-warm-white leading-[1.1]">
            What Parents Say
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          {/* Quote card */}
          <div className="relative min-h-[320px] sm:min-h-[260px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div className="relative bg-warm-white/[0.04] backdrop-blur-sm border border-warm-white/[0.08] rounded-2xl p-8 sm:p-12 lg:p-14">
                  {/* Decorative gold line at top */}
                  <div className="absolute top-0 left-12 right-12 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />

                  {/* Small quote icon */}
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-gold/40 mb-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>

                  {/* 5-star rating */}
                  <div
                    className="flex items-center gap-1 mb-6"
                    role="img"
                    aria-label="Rated 5 out of 5 stars"
                  >
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        viewBox="0 0 24 24"
                        fill="var(--gold)"
                        aria-hidden="true"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote text */}
                  <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl text-warm-white/90 leading-relaxed mb-8">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>

                  {/* Attribution */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-px bg-gold/40" />
                    <cite className="font-sans text-sm text-gold/80 not-italic tracking-wide">
                      {testimonials[current].attribution}
                    </cite>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            {/* Prev button */}
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-warm-white/15 flex items-center justify-center text-warm-white/60 transition-all duration-300 hover:border-gold/40 hover:text-gold hover:bg-gold/5 active:scale-95"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="relative p-1"
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      i === current
                        ? "bg-gold scale-125"
                        : "bg-warm-white/20 hover:bg-warm-white/40"
                    }`}
                  />
                  {i === current && (
                    <motion.div
                      layoutId="testimonial-dot-ring"
                      className="absolute inset-0 rounded-full border border-gold/40"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-warm-white/15 flex items-center justify-center text-warm-white/60 transition-all duration-300 hover:border-gold/40 hover:text-gold hover:bg-gold/5 active:scale-95"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
