import { SiteShell } from "@/components/layout/site-shell";
import { Hero } from "@/components/home/hero";
import { PlatformOverview } from "@/components/home/platform-overview";
import { ResearchScope } from "@/components/home/research-scope";
import { Workflow } from "@/components/home/workflow";
import { RiskFramework } from "@/components/home/risk-framework";
import { DevelopmentStatus, FinalCta } from "@/components/home/development-status";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <PlatformOverview />
      <ResearchScope />
      <Workflow />
      <RiskFramework />
      <DevelopmentStatus />
      <FinalCta />
    </SiteShell>
  );
}
