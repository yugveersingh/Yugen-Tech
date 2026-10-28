import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/layout/legal-layout";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How the Dronzer AI website handles visitor data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy" updated="29 October 2026">
      <LegalSection heading="What we collect">
        <p>
          This website has no forms, no accounts, no analytics and no advertising trackers, and it
          sets no cookies of its own. We do not ask for or store personal information.
        </p>
      </LegalSection>
      <LegalSection heading="Hosting logs">
        <p>
          The site is hosted on Vercel. Like any web host, Vercel may process standard request data
          such as IP address, browser type and the pages requested, in order to serve and secure the
          site. That processing is governed by Vercel&apos;s own privacy policy.
        </p>
      </LegalSection>
      <LegalSection heading="Changes">
        <p>
          If future versions of Dronzer add accounts or data collection, this page will be updated
          before those features go live.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
