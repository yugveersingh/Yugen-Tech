import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/layout/legal-layout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms governing the use of ${siteConfig.name}'s website and services.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

/**
 * Terms & Conditions.
 * NOTE: This is a clear, good-faith starting template — not legal advice.
 * Have it reviewed by a professional before relying on it.
 */
export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="June 2026">
      <p className="text-sm leading-relaxed text-white/60">
        These Terms &amp; Conditions govern your use of the {siteConfig.name}{" "}
        website and any services you engage us for. By using this site or working
        with us, you agree to these terms.
      </p>

      <LegalSection heading="Our services">
        <p>
          {siteConfig.name} provides software development services including
          websites, custom software, mobile apps, AI automation and SaaS
          products. The specific scope, deliverables, timeline and price of any
          project are agreed in a separate written proposal before work begins.
        </p>
      </LegalSection>

      <LegalSection heading="Quotes & pricing">
        <p>
          Prices shown on this website are starting points for illustration.
          Final pricing depends on your project requirements and is confirmed in
          your proposal. Payment terms are set out in each project agreement.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          Upon full payment, ownership of the final deliverables (code, design
          and content created for you) transfers to you. We may showcase
          non-confidential work in our portfolio unless agreed otherwise.
        </p>
      </LegalSection>

      <LegalSection heading="Client responsibilities">
        <ul className="ml-5 list-disc space-y-1.5">
          <li>Provide timely content, feedback and access needed for the work.</li>
          <li>Ensure you have rights to any materials you supply to us.</li>
          <li>Make payments according to the agreed schedule.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Revisions & support">
        <p>
          Each project includes a defined number of revisions and a post-launch
          support window as stated in your proposal. Additional work beyond the
          agreed scope may be quoted separately.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          We deliver our services with reasonable care and skill. To the extent
          permitted by law, {siteConfig.name} is not liable for indirect or
          consequential losses arising from the use of our website or services.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to these terms">
        <p>
          We may update these terms from time to time. Continued use of the site
          after changes are posted constitutes acceptance of the updated terms.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these terms? Reach us at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-electric-400 hover:underline"
          >
            {siteConfig.email}
          </a>{" "}
          or via our{" "}
          <Link href="/contact" className="text-electric-400 hover:underline">
            contact page
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
