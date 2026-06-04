/**
 * Central site configuration.
 * Brand metadata, founder info, navigation and contact integrations live here
 * so they can be reused across SEO metadata, header, footer and contact section.
 *
 * Update the values below (or the matching .env variables) with your real details
 * before going live.
 */

export const siteConfig = {
  name: "Yugen-Tech",
  legalName: "Yugen-Tech",
  tagline: "We Build Software That Grows Businesses",
  founder: "Yugveer Singh",
  location: "India",
  description:
    "Yugen-Tech is a software development agency founded by Yugveer Singh, helping businesses build modern websites, custom software, mobile apps, AI automation and SaaS products.",
  shortDescription:
    "Modern websites, custom software, mobile apps, AI automation & SaaS — built for businesses that want to grow.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yugen-tech.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "yugveeersinghbhati@gmail.com",
  // Digits only, including country code (India = 91).
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919399371573",
  // Human-readable phone for display.
  phoneDisplay: "+91 93993 71573",
  // Formspree form endpoint — create a form at https://formspree.io and paste the ID.
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
  // Google Analytics 4 measurement ID (e.g. G-XXXXXXXXXX).
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  keywords: [
    "software development agency",
    "web development India",
    "custom software development",
    "AI automation services",
    "SaaS development company",
    "mobile app development",
    "website development company",
    "Yugveer Singh",
    "Yugen-Tech",
    "affordable software agency",
  ],
} as const;

/** Pre-filled message used when opening a WhatsApp chat. */
export const WHATSAPP_MESSAGE = "Hi Yugen-Tech! I'd like to discuss a project.";

/**
 * Builds a WhatsApp click-to-chat URL with an optional pre-filled message.
 * Use everywhere instead of hand-building wa.me links.
 */
export function whatsappLink(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Primary navigation — route-based for the multi-page site. */
export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/portfolio" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;

/** Real social / contact profile links. All open in a new tab. */
export const socialLinks = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${siteConfig.whatsapp}`,
    icon: "whatsapp",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yugveer.singh_?igsh=MWk4MWpxdnlzNHQwdw==",
    icon: "instagram",
  },
  {
    label: "GitHub",
    href: "https://github.com/yugveersingh",
    icon: "github",
  },
  {
    label: "Email",
    href: "mailto:yugveeersinghbhati@gmail.com",
    icon: "mail",
  },
] as const;
