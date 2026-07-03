"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Does Dreamy Nights use Cry It Out?",
    answer:
      "No. We do not use the extinction \u201Ccry it out\u201D method. While we acknowledge that some crying is natural as children adjust to new habits, our approach focuses on teaching independent sleep skills through supportive and responsive methods. We prioritize parent-present techniques and tailor each plan to your family\u2019s comfort level.",
  },
  {
    question: "At what age can I start sleep training?",
    answer:
      "Formal sleep training typically begins at 4 months (and 12+ lbs) with pediatrician clearance. However, you can start building healthy sleep foundations from birth \u2014 and we can guide you through that too.",
  },
  {
    question: "Can I sleep train while breastfeeding?",
    answer:
      "Absolutely. Sleep training focuses on teaching independent sleep skills, not eliminating feeds. We\u2019ll work with your breastfeeding schedule and help break the feed-to-sleep association while supporting full daytime feedings and appropriate overnight nourishment.",
  },
  {
    question: "What if my child has reflux or medical needs?",
    answer:
      "We work closely with families navigating medical challenges. Michelli factors in your child\u2019s health needs and collaborates with your pediatrician\u2019s guidance when creating your custom plan.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Every child is different, but most families see meaningful improvement within the first 3\u20135 nights. Full transformation typically occurs within the program period (7 or 14 days depending on your package).",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="border-b border-cloud-blue/20 last:border-b-0"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group flex w-full items-start justify-between gap-6 py-7 text-left transition-colors"
      >
        <span className="font-serif text-lg sm:text-xl lg:text-[22px] font-semibold text-navy leading-snug group-hover:text-gold transition-colors duration-300">
          {faq.question}
        </span>
        <span className="mt-1.5 shrink-0 w-8 h-8 rounded-full border border-cloud-blue/30 flex items-center justify-center transition-all duration-300 group-hover:border-gold/40 group-hover:bg-gold/5">
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-4 h-4 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </motion.svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 pr-0 sm:pr-14 font-sans text-text-body text-[15px] sm:text-base leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative bg-cloud-white py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-gold/[0.03] blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cloud-blue/[0.05] blur-3xl" />

      {/* Moon — top right, bleeds off edge */}
      <motion.svg
        animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
        transition={{
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -top-8 -right-8 w-52 h-52 sm:w-64 sm:h-64 hidden lg:block pointer-events-none"
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
        <path
          d="M52 20c-1.8 0-3.5.3-5 .8A20 20 0 0 0 34 40a20 20 0 0 0 13 18.8c1.5.5 3.2.8 5 .8"
          stroke="var(--gold)"
          strokeWidth={0.6}
          opacity={0.2}
        />
      </motion.svg>

      {/* Star field — bottom left, bleeds off edge */}
      <motion.svg
        animate={{ opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -left-6 w-48 h-48 sm:w-56 sm:h-56 hidden md:block pointer-events-none"
        viewBox="0 0 80 80"
        fill="var(--gold)"
      >
        <path
          d="M35 12l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L35 29l-6.9 3.6 1.3-7.7-5.6-5.4 7.7-1.1L35 12z"
          opacity={0.3}
        />
        <path
          d="M60 50l2.4 4.9 5.4.8-3.9 3.8.9 5.4L60 62l-4.9 2.6.9-5.4-3.9-3.8 5.4-.8L60 50z"
          opacity={0.22}
        />
        <path
          d="M20 60l1.6 3.2 3.5.5-2.5 2.5.6 3.5L20 67.8l-3.2 1.7.6-3.5-2.5-2.5 3.5-.5L20 60z"
          opacity={0.2}
        />
        <line
          x1="35"
          y1="28"
          x2="62"
          y2="53"
          stroke="var(--gold)"
          strokeWidth={0.4}
          opacity={0.1}
          strokeDasharray="3 4"
        />
      </motion.svg>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Left — Header (sticky on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold mb-4">
              Common Questions
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy leading-[1.1] mb-6">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h2>
            <div className="w-16 h-[2px] bg-linear-to-r from-gold to-gold-light mb-6" />
            <p className="font-sans text-text-muted text-base leading-relaxed max-w-sm">
              Have a question we haven&apos;t answered?{" "}
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
                Reach out
              </a>{" "}
              — we&apos;d love to help.
            </p>
          </motion.div>

          {/* Right — Accordion */}
          <div className="bg-warm-white rounded-2xl border border-cloud-blue/20 p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(43,58,82,0.03)]">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
