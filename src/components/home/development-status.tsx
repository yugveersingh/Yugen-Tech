import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandMark } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { StatusBadge } from "@/components/ui/status-badge";
import { milestones } from "@/config/dronzer";

export function DevelopmentStatus() {
  return (
    <Section
      id="status"
      index="05"
      label="Development status"
      title="What exists today, and what does not."
      intro="The cloud server is running. The trading application has not been deployed yet. A running server is not a production system."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {milestones.map((m) => (
          <div key={m.group} className="rounded-xl border border-line-subtle bg-surface">
            <p className="label border-b border-line-subtle px-6 py-4">{m.group}</p>
            <ul className="divide-y divide-line-subtle">
              {m.items.map((item) => (
                <li key={item.title} className="px-6 py-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[15px] font-medium text-ink">{item.title}</h3>
                    <StatusBadge status={item.status} className="mt-1" />
                  </div>
                  <p className="mt-1 text-sm text-ink-3">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section aria-labelledby="cta-heading" className="border-t border-line-subtle py-20 sm:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface px-7 py-14 sm:px-14 sm:py-20">
          <BrandMark
            mono
            className="pointer-events-none absolute -right-10 -top-6 h-80 w-80 text-ink opacity-[0.04] sm:h-[26rem] sm:w-[26rem]"
          />
          <p className="label text-crimson-bright">Platform preview</p>
          <h2 id="cta-heading" className="mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            See the workspace before it is wired up.
          </h2>
          <p className="mt-5 max-w-xl text-ink-2">
            The preview shows the layout of the future research workspace with honest empty states.
            No market data, no signals, no order buttons.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/platform">
                Open the preview
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#status">Review development status</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
