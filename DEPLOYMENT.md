# 🚀 Yugen-Tech — Deployment Checklist

A step-by-step guide to take this site live on **GitHub → Vercel → your custom domain**.

---

## 0. Before you deploy

- [ ] Create `.env.local` from `.env.example` and fill in real values:
  - [ ] `NEXT_PUBLIC_SITE_URL` → your live domain (e.g. `https://yugen-tech.com`)
  - [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` → `919399371573` (already the default)
  - [ ] `NEXT_PUBLIC_CONTACT_EMAIL` → `yugveeersinghbhati@gmail.com` (already the default)
  - [ ] `NEXT_PUBLIC_FORMSPREE_ID` → your Formspree form ID (see step 4)
  - [ ] `NEXT_PUBLIC_GA_ID` → your GA4 ID (see step 5)
- [ ] Run a clean local build to confirm everything works:
  ```powershell
  npm install
  npm run build
  ```
- [ ] (Optional) Add a real `public/og-image.png` (1200×630) for social link previews.

---

## 1. GitHub

- [ ] Create a new repository on GitHub (e.g. `yugen-tech`), **without** a README/license (the project already has files).
- [ ] Initialise and push from the project folder:
  ```powershell
  git init
  git add .
  git commit -m "Initial commit: Yugen-Tech website"
  git branch -M main
  git remote add origin https://github.com/yugveersingh/yugen-tech.git
  git push -u origin main
  ```
- [ ] Confirm `.gitignore` is working — `node_modules`, `.next`, and `.env*` should **not** be committed.
- [ ] Verify the repo on GitHub shows your `src/`, `package.json`, etc.

> ⚠️ Never commit `.env.local`. Secrets live in Vercel's dashboard (step 3).

---

## 2. Vercel — import the project

- [ ] Go to <https://vercel.com/new> and sign in with GitHub.
- [ ] Click **Import** on your `yugen-tech` repo.
- [ ] Framework Preset should auto-detect **Next.js** (no changes needed).
  - Build Command: `next build` (default)
  - Output: handled automatically
  - Install Command: `npm install` (default)

---

## 3. Vercel — environment variables

In the import screen (or **Project → Settings → Environment Variables**), add each variable for the **Production** (and Preview) environment:

| Key | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://yugen-tech.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `919399371573` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `yugveeersinghbhati@gmail.com` |
| `NEXT_PUBLIC_FORMSPREE_ID` | *(your Formspree ID)* |
| `NEXT_PUBLIC_GA_ID` | *(your GA4 ID, optional)* |

- [ ] Click **Deploy**. Wait for the build to finish (≈1 min).
- [ ] Open the generated `*.vercel.app` URL and click through every page.

---

## 4. Formspree — contact / lead form

- [ ] Create a free account at <https://formspree.io>.
- [ ] Create a new form; copy its endpoint (looks like `https://formspree.io/f/abcdwxyz`).
- [ ] Set `NEXT_PUBLIC_FORMSPREE_ID` = the part after `/f/` (e.g. `abcdwxyz`) in Vercel.
- [ ] Redeploy (Vercel → Deployments → ⋯ → Redeploy) so the new env var is picked up.
- [ ] Submit a test enquiry and confirm the email lands in your inbox.

> Until this is set, the form shows a working **demo success** state but won't email you.

---

## 5. Google Analytics 4 (optional but recommended)

- [ ] Create a GA4 property at <https://analytics.google.com>.
- [ ] Copy the **Measurement ID** (`G-XXXXXXXXXX`).
- [ ] Set `NEXT_PUBLIC_GA_ID` in Vercel and redeploy.
- [ ] Use GA4 **Realtime** to confirm your visit is tracked.

---

## 6. Custom domain

- [ ] Buy your domain (e.g. from GoDaddy, Namecheap, Hostinger, Google Domains).
- [ ] In Vercel → **Project → Settings → Domains**, add `yugen-tech.com` and `www.yugen-tech.com`.
- [ ] At your registrar's DNS settings, add the records Vercel shows you:
  - **Apex/root** `@` → `A` record → `76.76.21.21`
  - **www** → `CNAME` → `cname.vercel-dns.com`
- [ ] Wait for DNS to propagate (minutes to a few hours). Vercel auto-issues SSL (HTTPS).
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your final domain and redeploy so SEO/sitemap URLs are correct.
- [ ] Choose a primary domain (redirect `www` → root or vice-versa) in Vercel's Domains panel.

---

## 7. Post-launch verification

- [ ] All pages load over HTTPS with the padlock.
- [ ] Navbar **Start Your Project** → Contact page.
- [ ] **Book Free Consultation** buttons → open WhatsApp chat.
- [ ] Floating WhatsApp button appears on every page and opens the correct number.
- [ ] Footer Email / WhatsApp / Instagram / GitHub links work and open in a new tab.
- [ ] Contact form submits and you receive the email (Formspree).
- [ ] India/Global pricing toggle switches between ₹ and $.
- [ ] Test on a real phone (mobile menu, tap targets, layout).
- [ ] Submit your sitemap to **Google Search Console**:
  - Add property for your domain → verify → submit `https://yugen-tech.com/sitemap.xml`.
- [ ] Run **Lighthouse** (Chrome DevTools) and check Performance / SEO / Accessibility scores.
- [ ] Share the link on WhatsApp/LinkedIn and confirm the preview image + title look right.

---

## 8. Ongoing

- [ ] As you complete real client work, add genuine case studies + testimonials in `src/config/content.ts`.
- [ ] Keep dependencies updated: `npm outdated` then `npm update`.
- [ ] Re-run `npm audit` periodically and patch as needed.

---

**Need to redeploy after any change?** Just `git push` to `main` — Vercel auto-builds and deploys every push.
