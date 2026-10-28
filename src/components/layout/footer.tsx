import Link from "next/link";
import { BrandMark, Wordmark } from "@/components/brand/logo";
import { legalLinks, navLinks } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-line-subtle bg-surface/40">
      <div className="container grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1.4fr]">
        <div>
          <Link href="/" aria-label="Dronzer AI home" className="inline-flex items-center gap-3 rounded-md">
            <BrandMark className="h-10 w-10" />
            <Wordmark className="text-sm" />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-3">
            A research-first trading intelligence project for NIFTY 50 index options. In development.
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <p className="label mb-4">Product</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink-2 hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/platform" className="text-ink-2 hover:text-ink">
                  Platform preview
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="label mb-4">Legal</p>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink-2 hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="rounded-lg border border-line-subtle bg-surface p-5">
          <p className="label mb-3 text-crimson-bright">Risk disclaimer</p>
          <p className="text-[13px] leading-relaxed text-ink-3">
            Dronzer AI is a personal research and decision-support project. It is not investment
            advice, not a registered adviser or broker, and not a guarantee of profitable trading.
            Market information may be unavailable, delayed or incomplete, and any future analytics
            must be read alongside risk controls. You remain responsible for your own trading
            decisions. This website does not place orders.
          </p>
        </div>
      </div>
      <div className="border-t border-line-subtle">
        <div className="container flex flex-col gap-2 py-6 text-xs text-ink-3 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Dronzer AI. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.12em]">Live trading: disabled</p>
        </div>
      </div>
    </footer>
  );
}
