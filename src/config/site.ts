/**
 * Site-wide brand and navigation config.
 * Product content and implementation status live in ./dronzer.ts.
 */
export const siteConfig = {
  name: "Dronzer AI",
  tagline: "Market Intelligence. Disciplined Decisions.",
  description:
    "Dronzer AI is a research-first trading intelligence project for NIFTY 50 index options, built to turn market data, quantitative analysis and risk checks into a structured, human-approved decision workflow. In development. No live trading.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yugen-tech.vercel.app",
  keywords: [
    "Dronzer AI",
    "NIFTY 50 options research",
    "quantitative research",
    "trading decision support",
    "risk framework",
  ],
} as const;

export const navLinks = [
  { label: "Platform", href: "/#platform" },
  { label: "Workflow", href: "/#workflow" },
  { label: "Research", href: "/#research" },
  { label: "Risk Framework", href: "/#risk" },
  { label: "Status", href: "/#status" },
] as const;

export const legalLinks = [
  { label: "Terms & Risk Disclaimer", href: "/terms" },
  { label: "Privacy", href: "/privacy-policy" },
] as const;
