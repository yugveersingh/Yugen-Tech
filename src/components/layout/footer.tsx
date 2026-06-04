"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Github,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { footerNav, siteConfig, socialLinks } from "@/config/site";
import { services } from "@/config/content";
import { Aurora } from "@/components/effects/aurora";

/** Map social icon keys from config to lucide components. */
const socialIconMap: Record<string, LucideIcon> = {
  whatsapp: MessageCircle,
  instagram: Instagram,
  github: Github,
  mail: Mail,
};

/**
 * Footer with company info, navigation, services, contact + social links,
 * legal links and a newsletter signup (client-side validation).
 */
export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-background">
      <Aurora className="opacity-40" />

      <div className="container relative z-10 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand + newsletter + social icons */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-base font-black text-white shadow-glow">
                Y
              </span>
              <span className="text-base font-semibold tracking-tight">
                Yugen<span className="text-gradient">-Tech</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/55">
              {siteConfig.shortDescription}
            </p>

            <form onSubmit={handleSubscribe} className="mt-1">
              <label
                htmlFor="newsletter"
                className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-white/40"
              >
                Join the newsletter
              </label>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5 pl-4 backdrop-blur-md focus-within:border-electric-400/50">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow transition-transform hover:scale-105"
                >
                  {subscribed ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </button>
              </div>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs text-electric-400"
                >
                  You&apos;re in. Welcome aboard.
                </motion.p>
              )}
            </form>

            {/* Social icon buttons */}
            <div className="mt-1 flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = socialIconMap[s.icon] ?? Mail;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition-all hover:-translate-y-0.5 hover:border-electric-400/40 hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company */}
          <FooterColumn title="Company">
            {footerNav.company.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Services">
            {services.map((s) => (
              <FooterLink key={s.slug} href="/services">
                {s.title}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Get in touch */}
          <FooterColumn title="Get in touch">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-start gap-3 text-sm text-white/55 transition-colors hover:text-white"
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
              <span className="break-all">{siteConfig.email}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white"
            >
              <MessageCircle className="h-4 w-4 shrink-0 text-electric-400" />
              WhatsApp chat
            </a>
            <a
              href={`tel:+${siteConfig.whatsapp}`}
              className="group flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 shrink-0 text-electric-400" />
              {siteConfig.phoneDisplay}
            </a>
            <p className="mt-2 text-xs text-white/40">
              Based in {siteConfig.location} · Serving clients worldwide
            </p>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Founded by{" "}
            {siteConfig.founder}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerNav.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white/70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
        {title}
      </h4>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="w-fit text-sm text-white/55 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}
