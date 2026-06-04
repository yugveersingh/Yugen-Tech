import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Aurora } from "@/components/effects/aurora";

/** Branded 404 page. */
export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
      <Aurora />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />

      <span className="text-gradient text-8xl font-black tracking-tighter sm:text-9xl">
        404
      </span>
      <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-pretty text-white/55">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
        Let&apos;s get you back on track.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">
          <Home className="h-4 w-4" />
          Back to home
        </Link>
      </Button>
    </main>
  );
}
