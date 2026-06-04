import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/layout/legal-layout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your information.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

/**
 * Privacy Policy.
 * NOTE: This is a clear, good-faith starting template — not legal advice.
 * Have it reviewed by a professional before relying on it for compliance.
 */
export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 2026">
      <p className="text-sm leading-relaxed text-white/60">
        This Privacy Policy explains how {siteConfig.name} (&quot;we&quot;,
        &quot;us&quot;) collects, uses and protects information when you visit our
        website or contact us. By using this site you agree to the practices
        described here.
      </p>

      <LegalSection heading="Information we collect">
        <p>
          We only collect information you choose to share — such as your name,
          email and project details when you submit our contact form, message us
          on WhatsApp, or email us. We may also collect anonymous usage data
          (e.g. pages visited) through privacy-respecting analytics.
        </p>
      </LegalSection>

      <LegalSection heading="How we use your information">
        <ul className="ml-5 list-disc space-y-1.5">
          <li>To respond to your enquiries and provide quotes.</li>
          <li>To deliver and support the services you request.</li>
          <li>To improve our website and understand how it&apos;s used.</li>
          <li>To send updates only if you opt in to our newsletter.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Analytics & cookies">
        <p>
          We may use Google Analytics with IP anonymization to understand site
          traffic. These tools may set cookies. You can disable cookies in your
          browser settings at any time.
        </p>
      </LegalSection>

      <LegalSection heading="Third-party services">
        <p>
          We use trusted third parties to operate our site and communicate with
          you, including form handling (Formspree), messaging (WhatsApp) and
          hosting (Vercel). Each has its own privacy policy governing how they
          handle data.
        </p>
      </LegalSection>

      <LegalSection heading="Data retention & security">
        <p>
          We keep enquiry information only as long as needed to serve you and
          take reasonable measures to protect it. No method of transmission over
          the internet is 100% secure, but we work to safeguard your data.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>
          You may request access to, correction of, or deletion of your personal
          information at any time by emailing us at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-electric-400 hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about this policy? Reach us at{" "}
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
