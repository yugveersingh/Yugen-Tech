"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/config/content";

/**
 * Development process — a vertical animated timeline.
 * A gradient spine grows as the section scrolls into view, with numbered
 * nodes and glass step cards. Uses a reliable single-side layout that
 * scales cleanly from mobile to desktop.
 */
export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-28">
      <div className="container">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A process built for{" "}
              <span className="text-gradient">momentum</span>
            </>
          }
          subtitle="Six clear stages that take you from a rough idea to a launched product — with transparency at every step."
        />

        <div className="relative mx-auto mt-16 max-w-2xl pl-2">
          {/* Animated gradient spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-[1.375rem] top-3 h-[calc(100%-1.5rem)] w-px origin-top bg-gradient-to-b from-electric-500 via-violet-500 to-transparent"
          />

          <div className="flex flex-col gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative flex items-start gap-6"
              >
                {/* Node */}
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-background font-mono text-sm font-semibold text-electric-400 shadow-glow">
                  {step.number}
                </div>

                <div className="glass group flex-1 rounded-2xl p-5 transition-colors hover:border-white/20">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
