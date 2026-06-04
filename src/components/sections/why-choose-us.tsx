"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Headphones,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Aurora } from "@/components/effects/aurora";
import { whyChooseUs } from "@/config/content";
import { staggerContainer, staggerItem } from "@/components/ui/reveal";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Rocket,
  Wallet,
  Headphones,
  TrendingUp,
  ShieldCheck,
};

/**
 * "Why choose Yugen-Tech" — trust elements in a glass grid.
 */
export function WhyChooseUs() {
  return (
    <section id="why" className="relative scroll-mt-24 py-24 sm:py-28">
      <Aurora className="opacity-50" />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Why Yugen-Tech"
          title={
            <>
              A partner you can{" "}
              <span className="text-gradient">actually trust</span>
            </>
          }
          subtitle="No inflated promises — just modern work, fair pricing and real support. Here's what working with us looks like."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-white/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-500/20 to-violet-500/20 text-violet-400 ring-1 ring-white/10">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">
                  {item.description}
                </p>
                <div className="mt-auto h-px w-full origin-left scale-x-0 bg-brand-gradient transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
