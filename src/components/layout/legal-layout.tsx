import { SiteShell } from "@/components/layout/site-shell";

interface LegalLayoutProps {
  title: string;
  updated: string;
  children: React.ReactNode;
}

/** Shared layout for the legal pages. */
export function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <SiteShell>
      <article className="container max-w-3xl py-20 sm:py-28">
        <p className="label">Legal</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-ink-3">Last updated: {updated}</p>
        <div className="mt-12 flex flex-col gap-10">{children}</div>
      </article>
    </SiteShell>
  );
}

/** A titled legal section block. */
export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3 border-t border-line-subtle pt-8">
      <h2 className="text-lg font-semibold tracking-tight text-ink">{heading}</h2>
      <div className="flex flex-col gap-3 text-[15px] leading-relaxed text-ink-2">{children}</div>
    </section>
  );
}
