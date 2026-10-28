import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/layout/legal-layout";

export const metadata: Metadata = {
  title: "Terms & Risk Disclaimer",
  description: "Terms of use and risk disclaimer for the Dronzer AI website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Risk Disclaimer" updated="29 October 2026">
      <LegalSection heading="What this website is">
        <p>
          This website describes Dronzer AI, a personal research and decision-support project for
          NIFTY 50 index options that is still in development. It is informational only. It
          provides no accounts, no data feed, no signals and no trading functionality.
        </p>
      </LegalSection>
      <LegalSection heading="Not investment advice">
        <p>
          Nothing on this website is investment, financial, legal or tax advice, or a
          recommendation to buy or sell any security or derivative. Dronzer AI is not a registered
          investment adviser, research analyst, broker or other regulated entity, and does not
          claim any regulatory registration or approval.
        </p>
      </LegalSection>
      <LegalSection heading="Trading risk">
        <p>
          Trading options involves substantial risk and can result in the loss of your entire
          capital. Any analytics Dronzer may produce in future are research aids, not guarantees of
          profit. Market information may be unavailable, delayed or incomplete, and any analysis
          must be read alongside your own risk controls. You remain solely responsible for your
          trading decisions.
        </p>
      </LegalSection>
      <LegalSection heading="No order execution">
        <p>
          This website does not connect to any broker and cannot place, modify or cancel orders.
          The platform preview is illustrative only and does not display live market data.
        </p>
      </LegalSection>
      <LegalSection heading="No warranty">
        <p>
          The website is provided as is, without warranties of any kind. Descriptions of planned
          features may change or may never be delivered.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
