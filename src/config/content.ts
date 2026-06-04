/**
 * Centralized content for every section.
 *
 * IMPORTANT: This file contains NO fabricated metrics, client names or
 * testimonials. As the business grows, add real case studies, reviews and
 * stats here. Anything illustrative (sample projects, capability stats) is
 * clearly labelled so it is honest to visitors.
 *
 * Icon fields reference lucide-react component names, resolved inside each
 * section component.
 */

/* -------------------------------------------------------------------------- */
/* Capability highlights (honest, non-inflated)                               */
/* -------------------------------------------------------------------------- */

export const highlights = [
  { label: "Modern Tech Stack", value: "2025-ready" },
  { label: "Avg. Website Delivery", value: "1–2 wks" },
  { label: "Transparent Pricing", value: "Fixed" },
  { label: "Support", value: "Dedicated" },
] as const;

/* -------------------------------------------------------------------------- */
/* Services                                                                   */
/* -------------------------------------------------------------------------- */

export type Service = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "website-development",
    icon: "Globe",
    title: "Website Development",
    tagline: "Fast, modern websites that convert",
    description:
      "From sharp landing pages to full business websites, we build blazing-fast, mobile-first sites that look premium and turn visitors into customers.",
    benefits: [
      "Mobile-first, responsive on every device",
      "SEO-ready so customers can find you",
      "Fast load times for better conversions",
      "Easy-to-update content",
    ],
  },
  {
    slug: "custom-software-development",
    icon: "Code2",
    title: "Custom Software Development",
    tagline: "Software shaped around your business",
    description:
      "Bespoke tools and internal systems built around your exact workflow — replacing spreadsheets and manual work with software that scales as you grow.",
    benefits: [
      "Built for your specific processes",
      "Removes repetitive manual work",
      "Scales from day one to thousands of users",
      "You own 100% of the code",
    ],
  },
  {
    slug: "mobile-app-development",
    icon: "Smartphone",
    title: "Mobile App Development",
    tagline: "iOS & Android, one clean codebase",
    description:
      "Cross-platform mobile apps with native-quality performance and smooth interactions — designed to keep your users coming back.",
    benefits: [
      "Single codebase for iOS and Android",
      "Smooth, native-feeling experience",
      "Offline-friendly architecture",
      "App store submission support",
    ],
  },
  {
    slug: "ai-automation",
    icon: "Sparkles",
    title: "AI Automation",
    tagline: "Put the busywork on autopilot",
    description:
      "AI-powered assistants, chatbots and workflow automation that handle repetitive tasks, answer customers 24/7 and free your team to focus on growth.",
    benefits: [
      "24/7 AI customer support",
      "Automate repetitive workflows",
      "Smart document & data processing",
      "Integrates with your existing tools",
    ],
  },
  {
    slug: "saas-development",
    icon: "Layers",
    title: "SaaS Development",
    tagline: "Turn your idea into a product",
    description:
      "End-to-end SaaS development — authentication, billing, dashboards and infrastructure — to take your product from concept to paying customers.",
    benefits: [
      "User auth, billing & subscriptions",
      "Analytics dashboards out of the box",
      "Cloud infrastructure that scales",
      "Built to be investor- and launch-ready",
    ],
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Portfolio — clearly labelled SAMPLE / concept projects                     */
/* -------------------------------------------------------------------------- */

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  tags: string[];
  gradient: string;
};

export const portfolio: Project[] = [
  {
    slug: "ai-business-assistant",
    title: "AI Business Assistant",
    category: "AI Automation",
    description:
      "A concept AI assistant that answers customer queries, books appointments and qualifies leads around the clock.",
    features: ["24/7 chat support", "Lead qualification", "Appointment booking"],
    tags: ["AI", "Automation", "Chatbot"],
    gradient: "from-violet-500/20 to-fuchsia-400/10",
  },
  {
    slug: "restaurant-website",
    title: "Restaurant Website",
    category: "Website",
    description:
      "A sample restaurant site with online menu, table reservations and one-tap ordering — designed to drive more covers.",
    features: ["Digital menu", "Online reservations", "Click-to-order"],
    tags: ["Web", "Booking", "Local Business"],
    gradient: "from-blue-500/20 to-cyan-400/10",
  },
  {
    slug: "gym-management-system",
    title: "Gym Management System",
    category: "Custom Software",
    description:
      "A concept platform to manage members, plans, attendance and payments from a single clean dashboard.",
    features: ["Member management", "Plan & billing", "Attendance tracking"],
    tags: ["SaaS", "Dashboard", "Payments"],
    gradient: "from-indigo-500/20 to-blue-400/10",
  },
  {
    slug: "real-estate-platform",
    title: "Real Estate Platform",
    category: "Web Platform",
    description:
      "A sample property listing platform with search, filters, map view and agent enquiry forms.",
    features: ["Advanced search", "Map view", "Lead capture"],
    tags: ["Web", "Marketplace", "Search"],
    gradient: "from-sky-500/20 to-violet-400/10",
  },
  {
    slug: "ecommerce-store",
    title: "E-Commerce Store",
    category: "E-Commerce",
    description:
      "A concept online store with cart, secure checkout, order tracking and an admin dashboard.",
    features: ["Cart & checkout", "Payment integration", "Admin dashboard"],
    tags: ["E-Commerce", "Payments", "Web"],
    gradient: "from-emerald-500/20 to-teal-400/10",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Why choose us / trust elements                                             */
/* -------------------------------------------------------------------------- */

export const whyChooseUs = [
  {
    icon: "Cpu",
    title: "Modern Tech Stack",
    description:
      "We build with current, proven technologies — Next.js, TypeScript and the modern AI stack — so your product stays fast and future-ready.",
  },
  {
    icon: "Rocket",
    title: "Fast Delivery",
    description:
      "Lean, focused builds mean most websites ship in 1–2 weeks. You see progress quickly, not months later.",
  },
  {
    icon: "Wallet",
    title: "Transparent Pricing",
    description:
      "Clear, fixed quotes agreed up front. No hidden fees, no surprise invoices — you always know what you're paying.",
  },
  {
    icon: "Headphones",
    title: "Dedicated Support",
    description:
      "You work directly with the founder and team. Quick replies, real ownership and support after launch.",
  },
  {
    icon: "TrendingUp",
    title: "Scalable Solutions",
    description:
      "Everything is architected to grow with you — from your first users to thousands, without a rebuild.",
  },
  {
    icon: "ShieldCheck",
    title: "Built to Last",
    description:
      "Clean, documented code and security best practices by default, so what we deliver holds up over time.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Development process                                                        */
/* -------------------------------------------------------------------------- */

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We talk through your goals, audience and requirements to define what success looks like.",
  },
  {
    number: "02",
    title: "Proposal & Quote",
    description:
      "You get a clear scope, timeline and fixed quote — transparent and agreed before any work starts.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We design a clean, modern interface and share it with you for feedback before building.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build your product with modern, well-tested code and keep you updated along the way.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We deploy, connect your domain and analytics, and make sure everything runs smoothly.",
  },
  {
    number: "06",
    title: "Support",
    description:
      "We stick around after launch for updates, fixes and improvements as your business grows.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Pricing — realistic startup pricing, India + Global                        */
/* -------------------------------------------------------------------------- */

export type PricingPlan = {
  name: string;
  inr: string;
  usd: string;
  cadence: string;
  description: string;
  features: string[];
  featured: boolean;
  custom?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Website",
    inr: "₹4,999",
    usd: "$99",
    cadence: "starting from",
    description: "A clean, professional one-page site to get your business online fast.",
    features: [
      "1-page modern website",
      "Mobile responsive",
      "Contact form + WhatsApp",
      "Basic SEO setup",
      "Delivered in days, not weeks",
    ],
    featured: false,
  },
  {
    name: "Business Website",
    inr: "₹14,999",
    usd: "$299",
    cadence: "starting from",
    description: "A complete multi-page website to grow your brand and bring in leads.",
    features: [
      "Up to 6 pages",
      "Premium custom design",
      "SEO optimized",
      "Contact + booking integration",
      "Google Analytics setup",
      "30 days post-launch support",
    ],
    featured: true,
  },
  {
    name: "Custom Software & AI",
    inr: "Custom Quote",
    usd: "Custom Quote",
    cadence: "tailored scope",
    description: "Custom software, mobile apps, SaaS platforms and AI automation.",
    features: [
      "Custom software / web app",
      "Mobile app (iOS & Android)",
      "AI automation & integrations",
      "SaaS platforms",
      "Scoped & quoted to your needs",
    ],
    featured: false,
    custom: true,
  },
] as const;

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "A starter one-page website starts from ₹4,999 (about $99) and a full business website from ₹14,999 (about $299). Custom software, apps and AI projects are quoted based on scope. Final pricing always depends on your specific requirements.",
  },
  {
    question: "How long will my project take?",
    answer:
      "Most websites are delivered within 1–2 weeks. Custom software, mobile apps and SaaS platforms take longer depending on scope — we'll give you a clear timeline in your proposal.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes. We work with clients worldwide and bill in USD for international projects. Use the pricing toggle to see global pricing.",
  },
  {
    question: "Do I own the code and design?",
    answer:
      "Absolutely. Once the project is paid for, you own 100% of the code, design and content. No lock-in.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Every project includes a post-launch support window, and we offer ongoing maintenance and updates if you'd like us to keep improving your product.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send us a message through the contact form, WhatsApp or email — or book a free consultation. We'll discuss your idea and send a clear proposal with a fixed quote.",
  },
] as const;
