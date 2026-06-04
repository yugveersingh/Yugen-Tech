"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { highlights } from "@/config/content";
import { whatsappLink } from "@/config/site";

/**
 * Hero section — the first impression.
 * Layers: grid pattern, radial glow, floating 3D glass cards, animated headline,
 * dual CTAs and honest capability highlights (no inflated stats).
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-32"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-electric-500/25 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-violet-500/25 blur-[120px]"
        />
      </div>

      <FloatingElements />

      {/* Announcement pill */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2 pr-4 text-sm backdrop-blur-md"
      >
        <span className="flex items-center gap-1.5 rounded-full bg-brand-gradient px-3 py-0.5 text-xs font-semibold text-white">
          <Sparkles className="h-3 w-3" /> Open
        </span>
        <span className="text-white/70">Accepting new projects worldwide</span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-4xl text-balance text-center text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
      >
        We Build Software That{" "}
        <span className="text-gradient-animated">Grows Businesses</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 max-w-2xl text-pretty text-center text-base text-white/60 sm:text-lg md:text-xl"
      >
        Yugen-Tech helps startups and businesses build modern websites, custom
        software, mobile apps, AI automation and SaaS products — fast, premium
        and built to scale.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
      >
        <Button asChild size="lg">
          <Link href="/contact">
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <a
            href={whatsappLink("Hi Yugen-Tech! I'd like to book a free consultation.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Book Free Consultation
          </a>
        </Button>
      </motion.div>

      {/* Honest capability highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {highlights.map((item) => (
          <div
            key={item.label}
            className="glass flex flex-col items-center gap-1 rounded-2xl px-4 py-6 text-center"
          >
            <span className="text-xl font-bold text-gradient sm:text-2xl">
              {item.value}
            </span>
            <span className="text-xs text-white/50 sm:text-sm">
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}

/** Decorative floating glass cards that drift to suggest depth/3D. */
function FloatingElements() {
  const items = [
    { className: "left-[8%] top-[28%] h-20 w-20", delay: 0, dur: 7 },
    { className: "right-[10%] top-[22%] h-16 w-16", delay: 1.5, dur: 8 },
    { className: "left-[14%] bottom-[24%] h-14 w-14", delay: 0.8, dur: 6.5 },
    { className: "right-[16%] bottom-[28%] h-24 w-24", delay: 2, dur: 9 },
  ];
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -24, 0], rotate: [0, 8, 0] }}
          transition={{
            duration: item.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
          className={`absolute rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md ${item.className}`}
          style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.1)" }}
        />
      ))}
    </div>
  );
}
