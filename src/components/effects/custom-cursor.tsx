"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Interactive custom cursor.
 * - A small dot tracks the pointer 1:1.
 * - A larger ring follows with spring physics and grows over interactive elements.
 * Disabled on touch devices and when reduced motion is preferred.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const ringX = useSpring(cursorX, { stiffness: 400, damping: 30, mass: 0.4 });
  const ringY = useSpring(cursorY, { stiffness: 400, damping: 30, mass: 0.4 });

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse) and no reduced-motion preference
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(
        Boolean(
          target.closest("a, button, [role='button'], input, textarea, .cursor-grow")
        )
      );
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric-400/70 mix-blend-difference md:block"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 2.2 : 1, opacity: hovering ? 0.6 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {/* Precise dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference md:block"
        style={{ x: cursorX, y: cursorY }}
      />
    </>
  );
}
