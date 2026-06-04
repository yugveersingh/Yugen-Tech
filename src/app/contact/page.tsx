import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Contact — Start Your Project",
  description:
    "Get in touch with Yugen-Tech. Send a project brief, message us on WhatsApp, email us or book a free consultation. We reply within one business day.",
  alternates: { canonical: "/contact" },
};

/** Contact page — full contact section + FAQ. */
export default function ContactPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something{" "}
            <span className="text-gradient">together</span>
          </>
        }
        description="Tell us about your project and we'll get back within one business day with a clear plan and a fixed quote."
      />
      <Contact />
      <FAQ />
    </SiteShell>
  );
}
