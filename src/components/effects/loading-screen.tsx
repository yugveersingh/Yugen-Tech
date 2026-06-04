"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Premium loading screen shown on first paint.
 * Animates a logo mark + progress bar, then fades out.
 * Uses sessionStorage so it only shows once per session.
 */
export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("yugen-loaded")) {
      setLoading(false);
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      // Accelerate toward 100 with a little randomness
      current += Math.random() * 18 + 6;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("yugen-loaded", "true");
        }, 450);
      }
      setProgress(Math.min(current, 100));
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0 bg-radial-glow" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center gap-8"
          >
            {/* Logo mark */}
            <div className="relative">
              <div className="absolute -inset-6 animate-pulse-glow rounded-full bg-electric-500/30 blur-2xl" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-2xl font-black text-white shadow-glow">
                Y
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <span className="text-lg font-semibold tracking-tight">
                Yugen<span className="text-gradient">-Tech</span>
              </span>

              {/* Progress bar */}
              <div className="h-[3px] w-48 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-brand-gradient"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              <span className="font-mono text-xs text-white/40">
                {Math.round(progress)}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
