import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Services — Web, Software, Mobile, AI & SaaS",
  description:
    "Yugen-Tech builds modern websites, custom software, mobile apps, AI automation and SaaS products. Explore our services and how they help your business grow.",
  alternates: { canonical: "/services" },
};

/** Services page — detailed service cards + process + CTA. */
export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Software that moves your{" "}
            <span className="text-gradient">business forward</span>
          </>
        }
        description="From your first website to a full AI-powered platform — here's how we help, and the business value behind each service."
      />
      <Services detailed />
      <Process />
      <CtaBand />
    </SiteShell>
  );
}
