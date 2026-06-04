import { SiteShell } from "@/components/layout/site-shell";
import { PageHeader } from "@/components/layout/page-header";

interface LegalLayoutProps {
  title: string;
  updated: string;
  children: React.ReactNode;
}

/**
 * Shared layout for legal pages (Privacy Policy, Terms).
 * Provides a consistent header and a readable prose container.
 */
export function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <SiteShell>
      <PageHeader eyebrow="Legal" title={title} />
      <section className="px-4 pb-24">
        <div className="container max-w-3xl">
          <p className="mb-10 text-sm text-white/40">Last updated: {updated}</p>
          <div className="legal-prose flex flex-col gap-8">{children}</div>
        </div>
      </section>
    </SiteShell>
  );
}

/** A titled legal section block. */
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold tracking-tight text-white">
        {heading}
      </h2>
      <div className="flex flex-col gap-3 text-sm leading-relaxed text-white/60">
        {children}
      </div>
    </div>
  );
}
