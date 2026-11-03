import type { Metadata } from "next";
import { BrandMark } from "@/components/brand/logo";

/*
 * Inert redirect destination required by the SmartAPI application form.
 * Deliberately static: it never reads the URL, query string, cookies or headers,
 * so any auth_token/feed_token appended by the broker is never processed.
 * Security headers for this route are set in next.config.mjs.
 */
export const metadata: Metadata = {
  title: "SmartAPI Redirect",
  description: "Reserved endpoint for SmartAPI application configuration.",
  robots: { index: false, follow: false },
  // Drop the layout's homepage canonical so noindex isn't mixed with a canonical hint.
  alternates: { canonical: null },
};

export default function SmartApiRedirectPage() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center py-28 text-center">
      <BrandMark mono className="h-16 w-16 text-ink-3" />
      <p className="label mt-8 text-crimson-bright">SmartAPI Redirect</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">DRONZER</h1>
      <p className="mt-4 max-w-md text-ink-2">
        This endpoint is reserved for application configuration. It does not process, store, or
        transmit authentication tokens.
      </p>
    </main>
  );
}
