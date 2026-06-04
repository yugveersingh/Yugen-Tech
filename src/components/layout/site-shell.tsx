import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ParticleBackground } from "@/components/effects/particle-background";

/**
 * Shared page shell.
 * Wraps every page with the global particle background, navbar, footer
 * and floating WhatsApp button so individual pages only render their content.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ParticleBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}
