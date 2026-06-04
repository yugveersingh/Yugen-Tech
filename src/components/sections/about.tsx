"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Instagram,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Aurora } from "@/components/effects/aurora";
import { siteConfig, socialLinks, whatsappLink } from "@/config/site";

interface AboutProps {
  /** Heading variant: section (home) vs page (about page). */
  variant?: "section" | "page";
}

/**
 * Founder / about section.
 * Introduces Yugen-Tech and its founder, Yugveer Singh, with a personal
 * intro and direct ways to reach him.
 */
export function About({ variant = "section" }: AboutProps) {
  const instagram = socialLinks.find((s) => s.icon === "instagram")?.href ?? "#";
  const github = socialLinks.find((s) => s.icon === "github")?.href ?? "#";

  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-28">
      <Aurora className="opacity-40" />
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="About the founder"
              title={
                <>
                  Hi, I&apos;m Yugveer Singh,{" "}
                  <span className="text-gradient">founder of Yugen-Tech</span>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-white/60">
              <p>
                I build modern websites, custom software, AI-powered solutions,
                automation systems, and scalable digital products for businesses
                and startups.
              </p>
              <p>
                Yugen-Tech is a lean, modern studio that treats every project
                like our own — honest advice, fair pricing, fast delivery, and
                code you fully own. Whether you&apos;re a startup launching your
                first product or an established business going digital, I&apos;m
                here to build something you&apos;re proud of.
              </p>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60 backdrop-blur-md">
              <MapPin className="h-4 w-4 text-electric-400" />
              Based in {siteConfig.location} · Working with clients worldwide
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              {variant === "section" && (
                <Button asChild variant="secondary" size="lg">
                  <Link href="/about">More about us</Link>
                </Button>
              )}
            </div>
          </div>

          {/* Founder card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="glow-border relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
              <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-electric-500/20 blur-[80px]" />

             <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-electric-400/30 shadow-glow">
             <Image
             src="/images/founder.jpeg"
              alt="Yugveer Singh"
              fill
              className="object-cover"
              />
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight">
                {siteConfig.founder}
              </h3>
              <p className="mt-1 text-sm text-electric-400">
                Founder, Yugen-Tech
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                “I started Yugen-Tech to give businesses access to premium,
                modern software — built honestly and priced fairly.”
              </p>

              {/* Direct contact actions */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <a
                  href={whatsappLink(
                    "Hi Yugveer! I'd like to talk about a project."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Yugveer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:-translate-y-0.5 hover:border-electric-400/40 hover:text-white"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:-translate-y-0.5 hover:border-electric-400/40 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:-translate-y-0.5 hover:border-electric-400/40 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 text-left">
                <Fact label="Focus" value="Web · AI · SaaS" />
                <Fact label="Approach" value="Founder-led" />
                <Fact label="Pricing" value="Transparent" />
                <Fact label="Code" value="100% yours" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wider text-white/40">
        {label}
      </p>
      <p className="text-sm font-medium text-white/80">{value}</p>
    </div>
  );
}
