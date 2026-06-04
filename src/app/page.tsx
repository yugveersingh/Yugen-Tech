import { SiteShell } from "@/components/layout/site-shell";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { Contact } from "@/components/sections/contact";

/**
 * Home page.
 * Sections follow a high-conversion narrative:
 * attention → trust → capability → proof → process → founder →
 * pricing → objections → conversion.
 */
export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Portfolio limit={3} />
      <Process />
      <About />
      <Pricing />
      <FAQ />
      <CtaBand />
      <Contact />
    </SiteShell>
  );
}
