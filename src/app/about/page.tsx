import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHeader } from "@/components/layout/page-header";
import { About } from "@/components/sections/about";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CtaBand } from "@/components/sections/cta-band";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About — Founded by Yugveer Singh",
  description: `${siteConfig.name} was founded by ${siteConfig.founder} to help businesses build modern software, websites and AI-powered solutions with honest pricing and fast delivery.`,
  alternates: { canonical: "/about" },
};

/** About page — founder story + trust elements + CTA. */
export default function AboutPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="About Yugen-Tech"
        title={
          <>
            Modern software, built{" "}
            <span className="text-gradient">honestly</span>
          </>
        }
        description="We're a lean, founder-led studio on a mission to make premium software accessible to businesses of every size."
      />
      <About variant="page" />
      <WhyChooseUs />
      <CtaBand />
    </SiteShell>
  );
}
