"use client";

import {
  BadgeCheck,
  Globe2,
  IndianRupee,
  Lock,
  Clock,
} from "lucide-react";

/**
 * Compact trust strip shown under the hero.
 * Communicates credibility signals that matter to Indian startups,
 * local businesses and international clients alike.
 */
const trustItems = [
  { icon: BadgeCheck, label: "Founder-led delivery" },
  { icon: IndianRupee, label: "Transparent INR & USD pricing" },
  { icon: Clock, label: "Fast 1–2 week launches" },
  { icon: Globe2, label: "Serving clients worldwide" },
  { icon: Lock, label: "You own 100% of the code" },
];

export function TrustBar() {
  return (
    <section className="relative border-y border-white/5 py-6">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-10">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-2 text-sm text-white/55"
              >
                <Icon className="h-4 w-4 text-electric-400" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
