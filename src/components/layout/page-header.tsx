"use client";

import { motion } from "framer-motion";
import { Aurora } from "@/components/effects/aurora";

interface PageHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
}

/**
 * Consistent header band for inner pages (About, Services, Portfolio, etc.).
 * Sits below the fixed navbar with generous top padding.
 */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-36 sm:pt-44">
      <Aurora />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />

      <div className="container flex flex-col items-center text-center">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-electric-400 shadow-glow" />
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-2xl text-pretty text-base text-white/60 sm:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
