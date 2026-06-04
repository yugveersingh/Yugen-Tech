"use client";
import { supabase} from "@/lib/supabase";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Aurora } from "@/components/effects/aurora";
import { siteConfig, whatsappLink } from "@/config/site";

const projectTypes = [
  "Website",
  "Custom Software",
  "Mobile App",
  "AI Automation",
  "SaaS Product",
  "Not sure yet",
] as const;

const budgets = [
  "< ₹10k / $150",
  "₹10k–50k / $150–600",
  "₹50k+ / $600+",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Lead-capture contact section.
 * Fields: Name, Email, Phone, Project Type, Budget, Project Description.
 *
 * Submits to Formspree when NEXT_PUBLIC_FORMSPREE_ID is set; otherwise it
 * falls back to a graceful demo success so the UI works in development.
 * Quick-contact rail: WhatsApp, Phone/Call and Email.
 */
export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: projectTypes[0] as string,
    budget: budgets[1] as string,
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.message.trim()) {
      setError("Please share your name and a short project description.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (form.phone.replace(/\D/g, "").length < 7) {
      setError("Please enter a valid phone number.");
      return;
    }

    setStatus("submitting");

    try {
     const { error } = await supabase
  .from("leads")
  .insert([
    {
      name: form.name,
      email: form.email,
      phone: form.phone,
      project_type: form.projectType,
      budget: form.budget,
      message: form.message,
    },
  ]);

if (error) throw error;
      setStatus("success");
    } catch {
      setStatus("error");
      setError(
        "Something went wrong. Please WhatsApp or email us directly — we'll reply fast."
      );
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-28">
      <Aurora />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Let's build"
          title={
            <>
              Tell us what you&apos;re{" "}
              <span className="text-gradient">building next</span>
            </>
          }
          subtitle="Share a few details and we'll reply within one business day with next steps and a clear quote. No bots, no run-around."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Lead capture form */}
          <div className="glass-strong rounded-3xl p-6 sm:p-8">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[460px] flex-col items-center justify-center gap-4 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-electric-500/15 text-electric-400">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="text-2xl font-bold">Message received</h3>
                <p className="max-w-sm text-sm text-white/60">
                  Thanks, {form.name.split(" ")[0] || "there"}. We&apos;ll be in
                  touch within one business day. For anything urgent, message us
                  on WhatsApp.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setStatus("idle");
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      projectType: projectTypes[0],
                      budget: budgets[1],
                      message: "",
                    });
                  }}
                >
                  Send another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Your name"
                      className={inputClass}
                      required
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@email.com"
                      className={inputClass}
                      required
                    />
                  </Field>
                </div>

                <Field label="Phone number" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+91 90000 00000"
                    className={inputClass}
                    required
                  />
                </Field>

                <Field label="Project type" htmlFor="projectType">
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((s) => (
                      <Chip
                        key={s}
                        active={form.projectType === s}
                        onClick={() => update("projectType", s)}
                      >
                        {s}
                      </Chip>
                    ))}
                  </div>
                </Field>

                <Field label="Budget range" htmlFor="budget">
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <Chip
                        key={b}
                        active={form.budget === b}
                        onClick={() => update("budget", b)}
                      >
                        {b}
                      </Chip>
                    ))}
                  </div>
                </Field>

                <Field label="Project description" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="What are you building, your goals and rough timeline..."
                    rows={4}
                    className={`${inputClass} resize-none`}
                    required
                  />
                </Field>

                {error && (
                  <p className="text-sm text-red-400" role="alert">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send project brief
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-white/40">
                  Prefer to chat? Message us on WhatsApp for a quick reply.
                </p>
              </form>
            )}
          </div>

          {/* Quick contact rail */}
          <div className="flex flex-col gap-4">
            <ContactCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="WhatsApp"
              description={siteConfig.phoneDisplay}
              href={whatsappLink()}
            />
            <ContactCard
              icon={<Phone className="h-5 w-5" />}
              title="Call us"
              description={siteConfig.phoneDisplay}
              href={`tel:+${siteConfig.whatsapp}`}
              sameTab
            />
            <ContactCard
              icon={<Mail className="h-5 w-5" />}
              title="Email"
              description={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
              sameTab
            />

            <div className="glass mt-auto flex items-center gap-3 rounded-2xl p-5">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />
              <p className="text-sm text-white/60">
                Currently accepting new projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors focus:border-electric-400/50 focus:outline-none focus:ring-1 focus:ring-electric-400/40";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-xs font-medium uppercase tracking-[0.15em] text-white/45"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition-all ${
        active
          ? "border-electric-400/50 bg-electric-500/10 text-white"
          : "border-white/10 bg-white/[0.02] text-white/55 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function ContactCard({
  icon,
  title,
  description,
  href,
  sameTab,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  sameTab?: boolean;
}) {
  return (
    <a
      href={href}
      {...(sameTab ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className="glow-border group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-violet-500/20 text-electric-400 ring-1 ring-white/10">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold">{title}</p>
        <p className="truncate text-xs text-white/50">{description}</p>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-electric-400" />
    </a>
  );
}
