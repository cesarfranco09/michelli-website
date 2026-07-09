"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormStatus =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "download"; url: string }
  | { state: "error"; message: string };

export default function FreeGuide() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus({
          state: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
        return;
      }
      if (data.delivery === "email") {
        setStatus({ state: "sent" });
      } else {
        setStatus({ state: "download", url: data.url });
      }
    } catch {
      setStatus({
        state: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className="relative bg-cream py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.04] blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-cloud-blue/[0.05] blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="relative bg-warm-white rounded-3xl border border-cloud-blue/20 overflow-hidden shadow-[0_8px_40px_rgba(43,58,82,0.04)]">
          {/* Subtle pattern overlay inside the card */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--navy) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }} />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — Guide mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center p-10 sm:p-14 lg:p-16 bg-linear-to-br from-navy/[0.03] to-cloud-blue/[0.06]"
            >
              {/* Guide mockup illustration */}
              <div className="relative w-full max-w-[280px] aspect-[3/4]">
                {/* Shadow beneath */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-8 rounded-full bg-navy/[0.06] blur-xl" />

                {/* Book cover */}
                <div className="relative h-full w-full rounded-lg bg-linear-to-br from-navy via-navy to-navy-dark shadow-[0_20px_60px_rgba(43,58,82,0.2)] overflow-hidden">
                  {/* Spine highlight */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-linear-to-b from-gold/40 via-gold/20 to-gold/40" />

                  {/* Cover design */}
                  <div className="relative h-full flex flex-col items-center justify-between p-8 sm:p-10">
                    {/* Decorative moon + stars at top */}
                    <div className="relative w-full flex justify-center pt-4">
                      <svg className="w-24 h-24" viewBox="0 0 80 80" fill="none">
                        <path
                          d="M50 18c-1.8 0-3.5.3-5 .8A18 18 0 0 0 32 36a18 18 0 0 0 13 17.2c1.5.5 3.2.8 5 .8A22 22 0 1 1 50 18z"
                          fill="var(--gold)"
                          opacity={0.6}
                        />
                        <path d="M22 20l1.5 3 3.3.5-2.4 2.3.6 3.3L22 27l-3 1.6.6-3.3-2.4-2.3 3.3-.5L22 20z" fill="var(--gold)" opacity={0.4} />
                        <path d="M62 28l1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5 2.2-.3L62 28z" fill="var(--gold)" opacity={0.35} />
                        <path d="M18 42l.6 1.2 1.3.2-1 .9.2 1.3-1.1-.6-1.1.6.2-1.3-1-.9 1.3-.2L18 42z" fill="var(--gold)" opacity={0.3} />
                      </svg>
                    </div>

                    {/* Title area */}
                    <div className="text-center space-y-3 flex-1 flex flex-col justify-center">
                      <p className="text-[9px] font-sans font-semibold uppercase tracking-[0.3em] text-gold/70">
                        Dreamy Nights
                      </p>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-warm-white leading-tight">
                        Bedtime
                        <br />
                        Foundations
                      </h3>
                      <div className="w-12 h-px bg-gold/30 mx-auto" />
                      <p className="text-[10px] font-sans text-cloud-blue/60 tracking-wider uppercase">
                        A Free Guide
                      </p>
                    </div>

                    {/* Bottom decorative element */}
                    <div className="w-full flex justify-center pb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-px bg-gold/20" />
                        <svg className="w-3 h-3 text-gold/30" viewBox="0 0 12 12" fill="currentColor">
                          <path d="M6 0l1.5 3 3.3.5-2.4 2.3.6 3.3L6 7.2 3 9.1l.6-3.3L1.2 3.5 4.5 3 6 0z" />
                        </svg>
                        <div className="w-6 h-px bg-gold/20" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Page edges effect */}
                <div className="absolute top-2 -right-1 bottom-2 w-1 bg-linear-to-b from-cloud-white via-white to-cloud-white rounded-r-sm opacity-40" />
                <div className="absolute top-3 -right-2 bottom-3 w-0.5 bg-linear-to-b from-cloud-white via-white to-cloud-white rounded-r-sm opacity-25" />
              </div>
            </motion.div>

            {/* Right — Content + form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center p-8 sm:p-12 lg:p-16"
            >
              {/* Label */}
              <p className="text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold mb-4">
                Free Download
              </p>

              {/* Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy leading-[1.1] mb-5">
                Bedtime
                <br />
                Foundations
              </h2>

              {/* Decorative line */}
              <div className="w-16 h-[2px] bg-linear-to-r from-gold to-gold-light mb-6" />

              {/* Description */}
              <p className="font-sans text-text-body text-base sm:text-[17px] leading-relaxed mb-8">
                Why wait for a consult to get started? Download this free guide to learn
                how to make naps and bedtime routines more predictable.
              </p>

              {/* What you'll learn list */}
              <ul className="space-y-3 mb-10">
                {[
                  "Build a consistent wind-down routine",
                  "Optimize your nursery environment",
                  "Understand age-appropriate wake windows",
                  "Create a nap schedule that works",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-0.5 shrink-0 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="font-sans text-text-body text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Email form */}
              <AnimatePresence mode="wait" initial={false}>
                {status.state === "sent" || status.state === "download" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl border border-gold/25 bg-gold/[0.06] p-6 text-center"
                  >
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-gold/15">
                      <svg
                        className="h-5 w-5 text-gold-dark"
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
                    </div>
                    {status.state === "sent" ? (
                      <>
                        <p className="font-serif text-xl font-semibold text-navy mb-1.5">
                          The guide is on its way!
                        </p>
                        <p className="font-sans text-sm text-text-body leading-relaxed">
                          Check your inbox for Bedtime Foundations. Don&apos;t
                          see it? Peek in your spam folder — or{" "}
                          <a
                            href="/assets/bedtime-foundations-guide.pdf"
                            download
                            className="text-gold-dark font-semibold underline underline-offset-2 decoration-gold/40 hover:decoration-gold transition-colors duration-300"
                          >
                            download it right here
                          </a>
                          .
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="font-serif text-xl font-semibold text-navy mb-1.5">
                          Here&apos;s your guide!
                        </p>
                        <p className="font-sans text-sm text-text-body leading-relaxed mb-4">
                          Thanks for signing up — your copy of Bedtime
                          Foundations is ready.
                        </p>
                        <a
                          href={status.url}
                          download
                          className="inline-flex h-12 items-center px-8 bg-gold text-navy-dark text-sm font-sans font-semibold uppercase tracking-[0.12em] rounded-full transition-all duration-300 hover:bg-gold-light hover:shadow-[0_8px_30px_rgba(212,168,67,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                        >
                          Download the Guide
                        </a>
                      </>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col sm:flex-row gap-3"
                    >
                      <div className="relative flex-1">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={status.state === "sending"}
                          className="w-full h-14 px-5 bg-cloud-white border border-cloud-blue/30 rounded-full font-sans text-sm text-navy placeholder:text-text-muted/60 outline-none transition-all duration-300 focus:border-gold/50 focus:ring-2 focus:ring-gold/10 disabled:opacity-60"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status.state === "sending"}
                        className="h-14 px-8 bg-gold text-navy-dark text-sm font-sans font-semibold uppercase tracking-[0.12em] rounded-full transition-all duration-300 hover:bg-gold-light hover:shadow-[0_8px_30px_rgba(212,168,67,0.3)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap disabled:opacity-70 disabled:hover:scale-100"
                      >
                        {status.state === "sending"
                          ? "Sending…"
                          : "Send Me the Guide"}
                      </button>
                    </form>
                    {status.state === "error" && (
                      <p
                        role="alert"
                        className="mt-3 font-sans text-sm text-red-700/80"
                      >
                        {status.message}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="mt-4 font-sans text-text-muted text-xs">
                No spam, ever. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
