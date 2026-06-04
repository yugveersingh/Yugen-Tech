"use client";

import { cn } from "@/lib/utils";

/**
 * Ambient aurora glow blobs.
 * Purely decorative gradient orbs that sit behind section content
 * to create depth and the signature "premium glow" look.
 */
export function Aurora({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-electric-500/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute -right-32 top-40 h-[26rem] w-[26rem] rounded-full bg-violet-500/20 blur-[120px] animate-pulse-glow [animation-delay:2s]" />
      <div className="absolute bottom-0 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[120px] animate-pulse-glow [animation-delay:4s]" />
    </div>
  );
}
