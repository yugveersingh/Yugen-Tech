import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Portfolio } from "@/components/sections/portfolio";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Work & Sample Projects",
  description:
    "Explore sample and concept projects from Yugen-Tech — AI assistants, websites, management systems, real estate platforms and e-commerce stores.",
  alternates: { canonical: "/portfolio" },
};

/** Portfolio page — all sample/concept projects. */
export default function PortfolioPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Our work"
        title={
          <>
            Sample projects that show our{" "}
            <span className="text-gradient">range</span>
          </>
        }
        description="As a growing studio, these are concept projects we've designed to demonstrate what we can build for you. Every client project is crafted uniquely."
      />
      <Portfolio />
      <CtaBand />
    </SiteShell>
  );
}
