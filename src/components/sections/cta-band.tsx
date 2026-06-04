"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";

/**
 * Full-width call-to-action band.
 * High-contrast gradient surface to drive conversions toward the contact page.
 */
export function CtaBand() {
  return (
    <section className="relative px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="container relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-electric-600/20 via-violet-600/15 to-background px-6 py-16 text-center sm:px-12 sm:py-20"
      >
        <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-electric-500/30 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-violet-500/30 blur-[100px]" />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to build something{" "}
            <span className="text-gradient">great?</span>
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base text-white/60 sm:text-lg">
            Tell us about your idea and get a free, no-pressure consultation with
            a clear, fixed quote. Let&apos;s bring your project to life.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}
