import Link from "next/link";
import { BrandMark } from "@/components/brand/logo";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="container flex flex-col items-center py-28 text-center sm:py-36">
        <BrandMark mono className="h-16 w-16 text-ink-3" />
        <p className="label mt-8 text-crimson-bright">Error 404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          This page does not exist.
        </h1>
        <p className="mt-4 max-w-md text-ink-2">
          It may have belonged to the previous version of this website, which has been retired.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/platform">Platform preview</Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
