"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/config/content";
import { staggerContainer, staggerItem } from "@/components/ui/reveal";
import { useCurrency } from "@/components/providers/currency-provider";
import { cn } from "@/lib/utils";

/**
 * Pricing preview with a India (INR) / Global (USD) toggle.
 * Region is auto-detected on first visit and can be switched manually.
 */
export function Pricing() {
  const { region, setRegion } = useCurrency();
  const isIndia = region === "IN";

  return (
    <section id="pricing" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Honest pricing for{" "}
              <span className="text-gradient">real businesses</span>
            </>
          }
          subtitle="Transparent starting prices with no hidden fees. Final pricing depends on your project requirements."
        />

        {/* Region toggle */}
        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Choose pricing region"
            className="relative inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-md"
          >
            <ToggleButton
              active={isIndia}
              onClick={() => setRegion("IN")}
              label="🇮🇳 India"
            />
            <ToggleButton
              active={!isIndia}
              onClick={() => setRegion("GLOBAL")}
              label="🌍 Global"
            />
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-12 grid max-w-5xl items-stretch gap-6 md:grid-cols-3"
        >
          {pricingPlans.map((plan) => {
            const price = isIndia ? plan.inr : plan.usd;
            return (
              <motion.div
                key={plan.name}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className={cn(
                  "relative flex flex-col rounded-[28px] border p-7 sm:p-8",
                  plan.featured
                    ? "border-transparent bg-white/[0.04] shadow-glow"
                    : "border-white/10 bg-white/[0.02]"
                )}
              >
                {plan.featured && (
                  <>
                    <span className="absolute inset-0 -z-10 rounded-[28px] bg-brand-gradient p-px [mask-composite:exclude] [-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor]" />
                    <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-gradient px-4 py-1 text-xs font-semibold text-white shadow-glow">
                      <Sparkles className="h-3 w-3" /> Most popular
                    </span>
                  </>
                )}

                <h3 className="text-lg font-semibold tracking-tight">
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    className={cn(
                      "font-bold tracking-tight",
                      plan.custom ? "text-2xl" : "text-4xl"
                    )}
                  >
                    {price}
                  </span>
                  {!plan.custom && (
                    <span className="text-sm text-white/45">{plan.cadence}</span>
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {plan.description}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-500/15 text-electric-400">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={plan.featured ? "primary" : "secondary"}
                  size="lg"
                  className="mt-8 w-full"
                >
                  <Link href="/contact">
                    {plan.custom ? "Get a Quote" : "Get Started"}
                  </Link>
                </Button>
              </motion.div>
            );
          })}
        </motion.div>

        <p className="mt-8 text-center text-sm text-white/45">
          Final pricing depends on project requirements.{" "}
          <Link
            href="/contact"
            className="font-medium text-electric-400 underline-offset-4 hover:underline"
          >
            Let&apos;s scope your project
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function ToggleButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className="relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors"
    >
      {active && (
        <motion.span
          layoutId="region-pill"
          className="absolute inset-0 -z-10 rounded-full bg-brand-gradient shadow-glow"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
      <span className={active ? "text-white" : "text-white/55"}>{label}</span>
    </button>
  );
}
