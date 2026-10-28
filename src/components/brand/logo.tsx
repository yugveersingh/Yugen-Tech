import Link from "next/link";
import { cn } from "@/lib/utils";

/*
 * Dronzer AI emblem: a phoenix whose body is a trident.
 * The trident shaft is the bird's spine, the centre spear its head, the side
 * prongs its crest; swept wings and a flame tail carry the crimson.
 * Kept free of hooks/Tailwind-only styling so next/og (Satori) can render it
 * for the favicon and social image.
 */
const TRIDENT = [
  // centre spear (head) + shaft (spine), pointed at the base
  "M32 3 L35.4 10.4 L33.4 11.6 V43 L32 46.5 L30.6 43 V11.6 L28.6 10.4 Z",
  // left prong / crest
  "M30.6 24.8 H24.6 C22.6 24.8 21.2 23.4 21.2 21.4 V12.8 L19.4 13.6 L22.5 6.4 L25.6 13.6 L23.8 12.8 V20.8 C23.8 21.7 24.3 22.2 25.2 22.2 H30.6 Z",
  // right prong / crest (mirror)
  "M33.4 24.8 H39.4 C41.4 24.8 42.8 23.4 42.8 21.4 V12.8 L44.6 13.6 L41.5 6.4 L38.4 13.6 L40.2 12.8 V20.8 C40.2 21.7 39.7 22.2 38.8 22.2 H33.4 Z",
];

const PHOENIX = [
  // left wing: swept up and out, three feather tips on the trailing edge
  "M30.6 27.4 C24 27 14 23.6 4.5 14.2 C6.6 20.4 9.8 24.8 13.8 27.8 L8.2 28.2 C12.4 32 17.4 33.4 22 33.4 L17.4 36 C22 38 27 37.4 30.6 36 Z",
  // right wing (mirror)
  "M33.4 27.4 C40 27 50 23.6 59.5 14.2 C57.4 20.4 54.2 24.8 50.2 27.8 L55.8 28.2 C51.6 32 46.6 33.4 42 33.4 L46.6 36 C42 38 37 37.4 33.4 36 Z",
  // flame tail
  "M30.4 40 C29 45.4 26 48.8 20.6 53.4 C25.4 52.8 28.4 51.2 30.2 49.6 C30 53.4 30.8 57.4 32 61.5 C33.2 57.4 34 53.4 33.8 49.6 C35.6 51.2 38.6 52.8 43.4 53.4 C38 48.8 35 45.4 33.6 40 Z",
  // heart: the core where trident and bird meet
  "M32 19.2 L34.6 23.6 L32 28 L29.4 23.6 Z",
];

const INK = "#f0eff1";
const CRIMSON = "#ad2632";

interface BrandMarkProps {
  size?: number;
  className?: string;
  /** Single-colour rendering using currentColor. */
  mono?: boolean;
  title?: string;
}

export function BrandMark({ size, className, mono = false, title }: BrandMarkProps) {
  const ink = mono ? "currentColor" : INK;
  const accent = mono ? "currentColor" : CRIMSON;
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      {PHOENIX.slice(0, 3).map((d) => (
        <path key={d} d={d} fill={accent} />
      ))}
      {TRIDENT.map((d) => (
        <path key={d} d={d} fill={ink} />
      ))}
      <path d={PHOENIX[3]} fill={accent} />
    </svg>
  );
}

/** Wordmark set in the same weight everywhere the brand appears. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-semibold tracking-[0.22em] text-ink", className)}>
      DRONZER<span className="ml-[0.45em] text-crimson-bright">AI</span>
    </span>
  );
}

/** Primary lockup: emblem + wordmark, linking home. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Dronzer AI home"
      className={cn("group inline-flex items-center gap-2.5 rounded-md", className)}
    >
      <BrandMark className="h-8 w-8 transition-transform duration-500 ease-out group-hover:-translate-y-0.5" />
      <Wordmark className="text-[13px]" />
    </Link>
  );
}
