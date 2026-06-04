"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/config/content";
import { staggerContainer, staggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface PortfolioProps {
  /** Limit how many projects to show (e.g. on the home page). */
  limit?: number;
}

/**
 * Portfolio showcase of concept / sample projects.
 * Every card is clearly badged "Sample Project" for full transparency —
 * these demonstrate capability, not delivered client work.
 */
export function Portfolio({ limit }: PortfolioProps) {
  const projects = limit ? portfolio.slice(0, limit) : portfolio;

  return (
    <section id="portfolio" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Sample work"
          title={
            <>
              Concepts that show{" "}
              <span className="text-gradient">what we can build</span>
            </>
          }
          subtitle="These are sample projects we've designed to showcase our range. Your project will be built uniquely around your brand and goals."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.slug}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="glow-border group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-6"
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-500 group-hover:opacity-100",
                  project.gradient
                )}
              />

              <div className="relative z-10 flex h-full flex-col gap-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white/70 backdrop-blur-md">
                    Sample Project
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 group-hover:rotate-45 group-hover:border-electric-400/50 group-hover:bg-electric-500/10">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Mock product window */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-background/60 p-4 backdrop-blur-md">
                  <div className="mb-3 flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                  <div className="space-y-2.5">
                    <div className="h-2.5 w-2/3 rounded-full bg-gradient-to-r from-electric-500/60 to-violet-500/40" />
                    <div className="h-2.5 w-full rounded-full bg-white/10" />
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div className="h-9 rounded-lg bg-white/5" />
                      <div className="h-9 rounded-lg bg-white/5" />
                      <div className="h-9 rounded-lg bg-white/5" />
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-electric-400">
                    {project.category}
                  </span>
                  <h3 className="mt-1.5 text-xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-white/60">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {limit && (
          <div className="mt-12 flex justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              View all sample projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
