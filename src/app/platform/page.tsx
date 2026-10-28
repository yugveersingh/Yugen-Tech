import type { Metadata } from "next";
import { TriangleAlert } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { WorkspacePreview } from "@/components/platform/workspace-preview";

export const metadata: Metadata = {
  title: "Platform Preview",
  description:
    "An illustrative, non-live preview of the Dronzer AI research workspace layout. No market data, signals or order controls.",
  alternates: { canonical: "/platform" },
};

export default function PlatformPage() {
  return (
    <SiteShell>
      <div role="note" className="border-b border-crimson/30 bg-crimson-soft">
        <div className="container flex items-start gap-3 py-3 text-[13px] leading-relaxed sm:items-center">
          <TriangleAlert aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-crimson-bright sm:mt-0" />
          <p className="text-ink-2">
            <strong className="font-semibold text-ink">Illustrative Preview — Not Live Market Data.</strong>{" "}
            No market feed, broker connection or signal engine is running. Nothing on this page can
            place an order.
          </p>
        </div>
      </div>
      <div className="container py-10 sm:py-14">
        <WorkspacePreview />
      </div>
    </SiteShell>
  );
}
