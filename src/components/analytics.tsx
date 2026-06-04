import Script from "next/script";
import { siteConfig } from "@/config/site";

/**
 * Google Analytics 4.
 * Renders nothing unless NEXT_PUBLIC_GA_ID is set, so development and
 * preview builds stay clean. Uses next/script with afterInteractive strategy.
 */
export function Analytics() {
  const gaId = siteConfig.gaId;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
