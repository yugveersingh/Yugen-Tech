# Dronzer AI — Website & Workspace Preview

Dronzer AI is a personal, research-first trading intelligence project for **NIFTY 50 index options (CE & PE)**, with NIFTY BANK used as market context only. It is designed as decision support: data, quantitative research and risk checks feed a human who reviews and places every trade manually.

This repository contains the **public website** and a **frontend-only preview** of the future workspace. It does not contain the trading backend.

> **Live trading is not enabled.** This site has no broker connection, no market data feed, no signal engine and no order controls.

## Current status

| Area | Status |
| --- | --- |
| Website (this repo) | Live |
| Cloud VM, static IPv4, base packages | Complete |
| Application environment on the server | In progress |
| Market data pipeline, research store, model evaluation, risk checks | Planned |
| Broker API | Not connected |
| Live trading / order execution | Disabled |

Statuses shown on the site come from `src/config/dronzer.ts`. Update that file as phases complete. Never mark something done before it is verified.

## Stack

Next.js 15 (App Router) · React 18 · TypeScript · Tailwind CSS 3 · Geist fonts · lucide-react. All pages are statically rendered Server Components; the only client component is the navbar's mobile menu.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Product site: hero, platform, research scope, workflow, risk framework, development status |
| `/platform` | Illustrative workspace preview with honest empty states. Not live data |
| `/terms` | Terms & risk disclaimer |
| `/privacy-policy` | Privacy (no forms, analytics or cookies) |
| `/icon`, `/apple-icon`, `/opengraph-image` | Generated favicon and social image (from the SVG emblem) |
| `/sitemap.xml`, `/robots.txt` | SEO |

The old Yugen-Tech routes (`/services`, `/portfolio`, `/about`, `/contact`) intentionally return the branded 404.

## Brand

- Emblem (phoenix formed around a trident): `src/components/brand/logo.tsx` exports `BrandMark` (SVG, colour or `mono`), `Wordmark` and `Logo`.
- Design tokens: `tailwind.config.ts` (charcoal surfaces, neutral ink, one crimson accent; green/amber only for status).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build && npm start
```

## Environment variables

Only `NEXT_PUBLIC_SITE_URL` is used (optional; see `.env.example`). Secrets must never use the `NEXT_PUBLIC_` prefix.

## Deployment

The repository is connected to the existing Vercel project through Vercel's Git integration: every push to `main` deploys to production at https://yugen-tech.vercel.app. The hostname is unchanged from the previous site; only the content and branding changed.

## Previous website

The original Yugen-Tech agency website is preserved in Git:

- branch `archive/yugen-tech-before-dronzer-2026-10-29`
- tag `yugen-tech-pre-dronzer-2026-10-29`

Restore it locally with `git checkout yugen-tech-pre-dronzer-2026-10-29`.

## Security boundaries

- No API keys, broker credentials or private configuration belong in this repository or in browser code.
- The preview has no authentication because it shows nothing sensitive. Any future private workspace needs real server-side authentication before it displays account or market data.
- Future broker integration must run server-side with credentials in a secret manager, plus authorization, input validation, timeouts and audit logging. It must stay separate from this public site.
- The server's IP address is deliberately not published on the site.

## Disclaimer

Dronzer AI is a research and decision-support project. It is not investment advice, not a registered adviser or broker, and not a guarantee of profitable trading. You remain responsible for your own trading decisions.
