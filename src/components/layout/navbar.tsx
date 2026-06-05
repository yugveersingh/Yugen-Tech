"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Sticky glassmorphism navigation (route-based for the multi-page site).
 * - Transparent at top, condenses into a glass bar on scroll.
 * - Full-screen animated mobile menu.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-[9000] flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
          scrolled
            ? "glass-strong shadow-glass"
            : "border border-transparent bg-transparent"
        )}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5" aria-label="Yugen-Tech home">
          <Image
         src="/images/logo.jpeg"
         alt="Yugen-Tech Logo"
         width={36}
         height={36}
         className="rounded-xl object-cover"
 />
          <span className="text-base font-semibold tracking-tight">
            Yugen<span className="text-gradient">-Tech</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/65 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="sm">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl glass md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-[-1] flex flex-col bg-background/95 px-6 pb-10 pt-28 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/5 py-4 text-left text-2xl font-semibold text-white/80"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <Button asChild size="lg">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Start Your Project
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
              >
                <a
                  href={whatsappLink(
                    "Hi Yugen-Tech! I'd like to book a free consultation."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Book Free Consultation
                </a>
              </Button>
            </div>
            <p className="mt-auto text-sm text-white/40">{siteConfig.email}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
