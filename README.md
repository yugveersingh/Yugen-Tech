# Yugen-Tech — Software Development Agency Website

The official website for **Yugen-Tech**, a software development agency founded by **Yugveer Singh** (India). We build modern websites, custom software, mobile apps, AI automation and SaaS products for startups and businesses worldwide.

Premium dark, futuristic, glassmorphic design — built to win real clients.

![Stack](https://img.shields.io/badge/Next.js-15-black) ![TS](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8) ![Framer](https://img.shields.io/badge/Framer_Motion-11-purple)

---

## ✨ Highlights

- **Multi-page site**: Home, About, Services, Portfolio, Contact, Privacy Policy, Terms
- **Real, honest content** — no fake clients, fake testimonials or inflated stats
- **India 🇮🇳 / Global 🌍 pricing toggle** with automatic currency detection (INR for Indian visitors, USD for international)
- **Lead-generation focused**: lead-capture form (Formspree), floating WhatsApp button on every page, email + click-to-call, WhatsApp consultation booking
- **Sample/concept projects** clearly labelled "Sample Project"
- **Founder section** introducing Yugveer Singh
- **Trust elements**: Modern Tech Stack, Fast Delivery, Transparent Pricing, Dedicated Support, Scalable Solutions
- **Premium UX**: glassmorphism, particle background, custom cursor, loading screen, scroll progress, scroll-triggered animations
- **Fully responsive** (mobile / tablet / desktop) and accessibility-minded
- **SEO**: per-page metadata, Open Graph, Twitter cards, JSON-LD, sitemap, robots
- **Deployment ready**: GitHub + Vercel + custom domain + Google Analytics

---

## 🛠 Tech Stack

| Layer       | Choice                              |
| ----------- | ----------------------------------- |
| Framework   | Next.js 15 (App Router)             |
| Language    | TypeScript                          |
| Styling     | Tailwind CSS + custom design tokens |
| Animation   | Framer Motion                       |
| UI patterns | shadcn/ui-style components + CVA    |
| Icons       | lucide-react                        |
| Fonts       | Geist Sans / Geist Mono             |
| Forms       | Formspree                           |
| Analytics   | Google Analytics 4                  |

---

## 🚀 Getting Started

> Requires **Node.js 18.18+** (Node 20+ recommended).

```powershell
# from the project root
npm install
npm run dev
```

Open <http://localhost:3000> (it'll use the next free port if 3000 is taken).

### Environment variables

Copy `.env.example` to `.env.local` and fill in your real details:

```ini
NEXT_PUBLIC_SITE_URL=https://yugen-tech.com
NEXT_PUBLIC_WHATSAPP_NUMBER=919399371573          # digits only, incl. country code (91 = India)
NEXT_PUBLIC_CONTACT_EMAIL=yugveeersinghbhati@gmail.com
NEXT_PUBLIC_FORMSPREE_ID=                          # form ID from formspree.io (after /f/)
NEXT_PUBLIC_GA_ID=                                 # e.g. G-XXXXXXXXXX
```

Everything falls back to safe defaults if unset (the contact form uses a demo success state until Formspree is configured).

---

## 📦 Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Production build         |
| `npm run start` | Run the production build |
| `npm run lint`  | Lint with ESLint         |

---

## 📁 Project Structure

```
src/
├─ app/
│  ├─ layout.tsx              # Root layout: fonts, SEO, providers, global effects, JSON-LD
│  ├─ page.tsx                # Home
│  ├─ about/page.tsx          # About + founder
│  ├─ services/page.tsx       # Detailed services + process
│  ├─ portfolio/page.tsx      # Sample projects
│  ├─ contact/page.tsx        # Contact + FAQ
│  ├─ privacy-policy/page.tsx # Privacy Policy
│  ├─ terms/page.tsx          # Terms & Conditions
│  ├─ not-found.tsx           # Branded 404
│  ├─ sitemap.ts / robots.ts  # SEO files
│  └─ globals.css             # Theme, glassmorphism, animations
├─ components/
│  ├─ analytics.tsx           # Google Analytics 4 (only loads if GA ID set)
│  ├─ effects/                # cursor, particles, loading screen, scroll progress, aurora
│  ├─ layout/                 # navbar, footer, site-shell, page-header, legal-layout, whatsapp
│  ├─ providers/              # currency-provider (India/Global detection)
│  ├─ sections/               # hero, services, portfolio, why-choose-us, process, about,
│  │                          #   pricing, faq, cta-band, contact
│  └─ ui/                     # button, section-heading, counter, reveal
├─ config/
│  ├─ site.ts                 # Brand, founder, nav, social, integrations
│  └─ content.ts              # All section copy/data (single source of truth)
└─ lib/utils.ts               # cn() class merge helper
```

### Editing content

All copy lives in `src/config/content.ts` and `src/config/site.ts`. Update services, sample projects, pricing, FAQs and contact details there — no need to touch components. **As you complete real client work, add real case studies and testimonials here.**

---

## 🔌 Setting up integrations

### Contact form (Formspree)

1. Create a free form at <https://formspree.io>.
2. Copy your form ID (the part after `/f/` in the endpoint).
3. Set `NEXT_PUBLIC_FORMSPREE_ID` in your env. Submissions now email you directly.

### WhatsApp

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to your number (digits only, including country code, e.g. `919399371573`). All "Book Free Consultation" buttons and the floating button open a WhatsApp chat with a pre-filled message.

### Google Analytics

Create a GA4 property, then set `NEXT_PUBLIC_GA_ID` (e.g. `G-XXXXXXXXXX`). Analytics only loads in production when this is set.

---

## 🌐 Deployment (GitHub → Vercel → Custom Domain)

### 1. Push to GitHub

```powershell
git init
git add .
git commit -m "Initial commit: Yugen-Tech website"
git branch -M main
git remote add origin https://github.com/<your-username>/yugen-tech.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to <https://vercel.com/new> and import your GitHub repo.
2. Vercel auto-detects Next.js — no config needed.
3. Under **Environment Variables**, add the values from `.env.example`.
4. Click **Deploy**.

### 3. Connect your custom domain

1. In Vercel → your project → **Settings → Domains**, add `yugen-tech.com`.
2. At your domain registrar, point DNS to Vercel:
   - `A` record `@` → `76.76.21.21`, **or**
   - `CNAME` `www` → `cname.vercel-dns.com`
3. Update `NEXT_PUBLIC_SITE_URL` to your live domain and redeploy.

### Other platforms

```powershell
npm run build
npm run start   # serves the production build
```

Works on Netlify, Render, Railway or any Node host.

---

## ♿ Accessibility & Performance

- Honors `prefers-reduced-motion` (particles, cursor and heavy animations back off).
- Custom cursor only activates on mouse (fine-pointer) devices.
- Semantic landmarks, labelled form fields, visible focus rings.
- Fonts via `next/font` (Geist) to avoid layout shift.
- Security headers set in `next.config.mjs`.
- All pages prerender as static for fast loads.

---

## 📝 A note on the legal pages

The Privacy Policy and Terms are clear, good-faith starting templates — **not legal advice**. Have them reviewed by a professional before relying on them for compliance.

---

## 📄 License

Proprietary — © Yugen-Tech. All rights reserved.
