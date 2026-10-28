import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandMark } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { systemStatus } from "@/config/dronzer";

const facts = [
  ["Phase", "Research build"],
  ["Execution", "Manual only"],
  ["Live trading", "Disabled"],
] as const;

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_30%,black,transparent)]"
      />
      <div className="container relative grid items-center gap-16 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-24">
        <div>
          <p className="label animate-fade-up text-crimson-bright">NIFTY 50 Options Intelligence</p>
          <h1
            id="hero-heading"
            className="mt-6 animate-fade-up text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-ink [animation-delay:80ms] sm:text-6xl lg:text-[4.1rem]"
          >
            Market intelligence.
            <br />
            <span className="text-ink-3">Disciplined decisions</span>
            <span className="text-crimson-bright">.</span>
          </h1>
          <p className="mt-7 max-w-xl animate-fade-up text-pretty text-lg leading-relaxed text-ink-2 [animation-delay:160ms]">
            Dronzer AI is a research-first trading intelligence platform being built to turn market
            data, quantitative analysis and risk checks into a structured decision workflow, with a
            person approving every trade.
          </p>
          <div className="mt-10 flex animate-fade-up flex-col gap-3 [animation-delay:240ms] sm:flex-row">
            <Button asChild size="lg">
              <Link href="/platform">
                Explore the Platform
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#workflow">See the Research Workflow</Link>
            </Button>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 divide-x divide-line-subtle border-y border-line-subtle">
            {facts.map(([k, v]) => (
              <div key={k} className="px-4 py-4 first:pl-0">
                <dt className="label text-[10px]">{k}</dt>
                <dd className="mt-1.5 text-sm text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroConsole />
      </div>
    </section>
  );
}

/** Product visual: the emblem above an honest status console. */
function HeroConsole() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-6 h-72 w-72 -translate-x-1/2 rounded-full bg-crimson/20 blur-[90px]"
      />
      <BrandMark
        title="Dronzer AI emblem: a phoenix formed around a trident"
        className="relative mx-auto h-48 w-48 sm:h-60 sm:w-60"
      />
      <div className="relative mt-4 overflow-hidden rounded-xl border border-line bg-surface/95 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur">
        <div className="flex items-center justify-between border-b border-line-subtle px-5 py-3">
          <span className="font-mono text-[11px] text-ink-3">dronzer / research-console</span>
          <span className="rounded border border-crimson/40 bg-crimson-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-crimson-bright">
            Preview
          </span>
        </div>
        <ul className="divide-y divide-line-subtle">
          {systemStatus.map((s) => (
            <li key={s.label} className="flex items-center justify-between gap-4 px-5 py-3.5">
              <span className="text-sm text-ink-2">{s.label}</span>
              <StatusBadge status={s.status} label={s.value} />
            </li>
          ))}
        </ul>
        <p className="border-t border-line-subtle bg-surface-raised/60 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
          Illustrative preview · Not live market data
        </p>
      </div>
    </div>
  );
}
