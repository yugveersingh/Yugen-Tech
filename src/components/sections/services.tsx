"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Globe,
  Layers,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Aurora } from "@/components/effects/aurora";
import { services, type Service } from "@/config/content";
import { staggerContainer, staggerItem } from "@/components/ui/reveal";

/** Map icon names from content data to lucide components. */
const iconMap: Record<string, LucideIcon> = {
  Globe,
  Code2,
  Smartphone,
  Sparkles,
  Layers,
};

interface ServicesProps {
  /** When true, shows full descriptions + benefit lists (used on /services). */
  detailed?: boolean;
}

/**
 * Services grid with interactive, spotlight-on-hover glass cards.
 * - Compact mode (home page): tagline + short description.
 * - Detailed mode (/services page): full description + business benefits.
 */
export function Services({ detailed = false }: ServicesProps) {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-28">
      <Aurora />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Everything you need to{" "}
              <span className="text-gradient">launch and grow</span>
            </>
          }
          subtitle="One focused team across your whole product — websites, software, apps, AI and SaaS. No handoffs, no dilution."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              detailed={detailed}
            />
          ))}

          {/* CTA card to fill the grid and drive contact */}
          {!detailed && (
            <motion.div
              variants={staggerItem}
              className="flex flex-col justify-center gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-electric-600/15 to-violet-600/10 p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight">
                Not sure what you need?
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                Tell us about your idea and we&apos;ll recommend the right
                approach — free, no pressure.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-electric-400 transition-colors hover:text-electric-500"
              >
                Get free advice
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  detailed,
}: {
  service: Service;
  detailed: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = iconMap[service.icon] ?? Globe;

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -6 }}
      className="glow-border group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-colors"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--x) var(--y), rgba(59,130,246,0.12), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-500/20 to-violet-500/20 text-electric-400 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-tight">
            {service.title}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-electric-400/90">
            {service.tagline}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-white/55">
          {service.description}
        </p>

        {detailed && (
          <ul className="mt-1 flex flex-col gap-2">
            {service.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2 text-sm text-white/70"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-400" />
                {benefit}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
