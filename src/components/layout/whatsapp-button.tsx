"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";

/**
 * Persistent floating WhatsApp button shown on every page.
 * Fades in shortly after mount and stays available so visitors can reach out
 * from anywhere — including short pages that don't scroll.
 */
export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay so it doesn't fight the loading screen / first paint.
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="group fixed bottom-6 right-6 z-[8000] flex items-center gap-0 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)]"
        >
          <span className="relative flex h-14 w-14 items-center justify-center">
            <span className="absolute inset-0 animate-ping rounded-full bg-green-500/40" />
            <MessageCircle className="relative h-6 w-6" />
          </span>
          {/* Expands to a label on hover (desktop) */}
          <span className="hidden max-w-0 overflow-hidden whitespace-nowrap pr-0 text-sm font-semibold transition-all duration-300 group-hover:max-w-[160px] group-hover:pr-5 md:inline">
            Chat with us
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
