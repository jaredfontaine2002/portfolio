# Jared Fontaine — Portfolio Report

**Portfolio site:** React + Vite app in this repository (`portfolio-app`)
**Planned live URL (after push + GitHub Pages setup):** https://jaredfontaine2002.github.io/portfolio/
**Owner:** Jared Fontaine — Cycling-industry customer service specialist
**Employer-facing location:** Burlington, NC | Remote
**Prepared:** 2026-11-03 · **Status at preparation:** built and production-build verified locally; NOT yet pushed to GitHub (push is a separate, owner-approved step).

> Content rule for this portfolio: no political content of any kind. No legislative, campaign, or political-resume items appear on the site or in this report.
> Honesty rule: sample and synthetic work is labelled as sample/synthetic everywhere it appears. No invented clients, testimonials, guest numbers, or results.

---

## 1. Who this portfolio is for

Hiring managers and clients looking for: remote cycling-industry customer support, Gorgias administration and CX projects, AI support agents for bike shops / DTC brands, and e-commerce analytics. Every project below links to live work or a public repository so a reader can verify it in under a minute.

**Credentials (site-wide):** Gorgias Admin Certified · Gorgias CX Certified · MBA, Wheeling Jesuit University (2014) · Shimano Tech Certified · SRAM Technical University (Elite)
**Experience (site-wide):** Tune Cycles (Australia) — customer service, current, via Upwork · Curated.com — cycling expert, $500K+ in bike sales · Planet Cyclery — customer service · Cambria Bike — customer service · Vlora Cycling Camp — founder

---

## 2. Project inventory

### 1. Bike Shop CX Agent
- **What it is:** A working AI customer-service agent for small/mid bike shops and DTC cycling brands: bike sizing and compatibility from the shop's own catalogue, order/workshop status (WISMO), warranty and service triage, a daily flag report for the owner, and 48-hour / 5-day follow-ups.
- **Status:** Demo — live. The demo shop ("Demo Cycles") is fictional and all demo data is invented.
- **Live demo:** https://cdn.botpress.cloud/webchat/v3.7/shareable.html?configUrl=https://files.bpcontent.cloud/2026/10/22/15/20261022155825-43C70MZ8.json
- **GitHub:** https://github.com/jaredfontaine2002/bike-shop-cx-agent
- **Proven:** Full 10-case test suite passed 10/10 against the live bot (Oct 22–23, 2026), including refusing a cross-brand compatibility confirmation under direct pressure, refusing a refund, refusing a 20% cash discount, and refusing to promise a workshop turnaround. Verbatim replies are in the repo (`tests/results.md`).
- **Design rule:** It proposes, a human approves. Refunds, discounts, warranty outcomes, and delivery promises are always drafts for staff approval. It never invents a price, stock level, delivery date, compatibility verdict, or warranty outcome.
- **Skills shown:** AI agent design, Botpress, knowledge-base design, Gorgias, guardrail / evaluation design, cycling domain expertise.
- **Limits (stated on site and in repo):** Demo on fictional data — not a live shop deployment; does not process payments or connect to a real helpdesk.

### 2. Black in Albania — Guide & Directory
- **What it is:** A React + Vite web app for the Black American expats in Albania community: a member-vouched directory with one-tap WhatsApp contact, plus guides for intercity buses, housing, and hair care, a Temu-ordering guide, and community events.
- **Status:** Live.
- **Live site:** https://jaredfontaine2002.github.io/black-in-albania/
- **GitHub:** https://github.com/jaredfontaine2002/black-in-albania
- **Proven:** Live on GitHub Pages. Built from real community need: the community's WhatsApp groups logged 478 questions in eight months, with the same questions repeating. Listings are published only after the provider consents and a member vouches — enforced in code, not just policy.
- **Skills shown:** React, Vite, GitHub Pages / Actions, product design from user research, privacy-first design.

### 3. AI Visibility Audit — Sample Report
- **What it is:** A labelled sample report demonstrating the AI Visibility Audit format, using US DTC brand State Bicycle Co. as the study subject. Forty real buyer prompts were run on each of ChatGPT, Perplexity, and Gemini (120 runs total, Oct 29–31, 2026), each in a fresh chat, and scored against facts verified from statebicycle.com.
- **Status:** SAMPLE — not commissioned by State Bicycle Co.; nothing in the report has been sent to them. This labelling appears on the site and in the report itself.
- **Full report:** included in this repository as `AI-VISIBILITY-SAMPLE-REPORT.md` — planned link after push: https://github.com/jaredfontaine2002/portfolio/blob/main/AI-VISIBILITY-SAMPLE-REPORT.md
- **Headline findings (proven within the sample's method):** named mentions 30/30 across all three tools; unprompted category mentions only 11/30 combined; the 6061 All-Road was quoted at $1,399.99 vs $1,195 in different chats (State's own pages showed both a list and a sale price).
- **Skills shown:** AI research design, prompt-set design, fact verification against primary sources, competitor framing (Poseidon, Priority, Canyon), reporting and recommendations.
- **Limits (stated in the report):** scoring reference is the verified-facts file checked 2026-10-29; prices and policies move; sign-in state differed by tool and is recorded.

### 4. Neto Supplier Sync
- **What it is:** A Python tool (stdlib only) that reads supplier invoice/dispatch emails including PDF attachments, extracts invoice numbers, parts, and tracking, matches them to the right Neto (Maropost) order by the shop's own `N####` reference, and writes the result back as internal order notes.
- **Status:** Public version uses synthetic data only — distributors, orders, documents, and prices in the repo are fictional; nothing connects to a real store, inbox, or API account.
- **GitHub:** https://github.com/jaredfontaine2002/neto-supplier-sync
- **Proven (design, in repo):** Safe Inbound Mode — payloads deliberately omit order-status and customer-email fields, so an inbound supplier shipment never marks a customer order dispatched and never emails the customer. Confidence scoring with a human review queue; parts and tracking are never invented; partial shipments and backorders stay explicit.
- **Skills shown:** Python, PDF/document parsing, API payload design, automation guardrails, e-commerce operations.

### 5. Gorgias CX Analytics
- **What it is:** A helpdesk analytics toolkit for a cycling retailer's Gorgias instance: first-response time, resolution time, CSAT, SLA breach rates vs 4h/48h targets, and volume by channel/tag/agent/hour, with staffing recommendations.
- **Status:** Sample — runs on a synthetic 900-ticket Gorgias export; the same pipeline runs on a real export.
- **GitHub:** https://github.com/jaredfontaine2002/gorgias-cx-analytics
- **Proven:** Pipeline and charts are in the repo. Sample output (verified against the repo REPORT.md, 900 tickets): median first response 1.8h, CSAT 4.06/5; warranty has the lowest CSAT (3.67), order-status is the slowest tag for first response (2.0h median), and sizing questions are the top volume driver.
- **Skills shown:** Python, pandas, Gorgias, SLA/CX operations, data storytelling.

### 6. Bike Shop Sales Dashboard
- **What it is:** An end-to-end e-commerce analytics project: synthetic order generation, a pandas analysis pipeline, and an interactive Streamlit + Plotly dashboard with filters, KPI cards, revenue trends, and return-rate breakdowns.
- **Status:** Sample — all data is synthetic (seeded, reproducible); swap in a real order export with the same columns to run it live.
- **GitHub:** https://github.com/jaredfontaine2002/bike-shop-sales-dashboard
- **Proven:** Code, analysis report, and dashboard are in the repo. Sample findings: apparel has the highest return rate (~18%); revenue peaks April–June; bikes are low-volume/high-ticket while components and accessories drive repeat purchases.
- **Skills shown:** Python, pandas, SQL-style aggregation, Streamlit, Plotly, e-commerce analytics.

### 7. Vlora Cycling Camp
- **What it is:** Road cycling tour company founded by Jared Fontaine — guided and self-guided tours. Portfolio-relevant work: website rebuild, tour product and pricing pages, and the marketing tracking setup.
- **Status:** Live business.
- **Live site:** https://vloracycling.com
- **Proven:** Google tracking installed and test-verified (Oct 30, 2026): Google Tag Manager on the site, GA4 via GTM only, and the `generate_lead` event firing only on the enquiry thank-you page.
- **Honesty note:** The portfolio site uses NO testimonials for Vlora Cycling Camp. Guest numbers are not claimed. (Marco Sacchi is the only confirmed past guest on record; the simplest compliant choice is no testimonials at all, which is what the site does.)
- **Skills shown:** Founder/operator, Squarespace, Google Tag Manager, GA4, product and pricing design, tour operations.

### 8. Black American Achievement — Board Game
- **What it is:** An educational family board game (Life-style race format) designed from scratch: 64-space board, 50-card Fate deck (28 Struggle + 22 Triumph), and 200 trivia cards, with a full rulebook.
- **Status:** Product in production — complete proof-order pack ready for The Game Crafter (board, all card fronts/backs, 12-page booklet, box top/bottom); proof order targeted for November 2026, to finish before Thanksgiving (Nov 26, 2026).
- **Link:** None (no public product page yet).
- **Proven:** All 250 cards cross-checked against primary sources and Perplexity in a dedicated fact-check (Oct 31, 2026) — 42 corrections applied. Playability validated by simulation (72,000 simulated games: 0 stalls, inside the printed 45–75 minute range).
- **Skills shown:** Product design, game design, large-scale research and fact-checking, print production.
- **Classification note:** This is an educational product-design project. It is not political content and no political-employment history appears anywhere in this portfolio.

---

## 3. Services published on the site (exact prices)

| Service | Price | Terms |
|---|---|---|
| Gorgias Helpdesk Audit | $595 | Fixed, 7 days |
| Optimization Sprint | $1,800 | Fixed, 2 weeks |
| Monthly CX Retainer | $700/mo | Monthly |
| AI Visibility Audit | $395 | Fixed |
| Hostel Guest-Experience Audit | $395 / $995 / $350 | Audit fixed, 7 days · Deep-Dive fixed, 14 days · Ongoing Care monthly (added 2026-11-04, ladder approved by Jared) |

**Order links (added 2026-11-03 — the portfolio is the front door, Upwork is checkout behind it):**
- Gorgias Helpdesk Audit ($595): https://www.upwork.com/services/product/2112592691981473414
- Optimization Sprint ($1,800): https://www.upwork.com/services/product/admin-customer-support-gorgias-optimization-sprint-your-audit-fixes-implemented-in-2-weeks-2112602481755444870
- Monthly CX Retainer ($700/mo): https://www.upwork.com/services/product/2112605293147084422
- AI Visibility Audit ($395): https://www.upwork.com/services/product/2117562658396700448
- Hostel Guest-Experience Audit (added 2026-11-04): no Upwork Catalog listing yet — listing copy is drafted and Jared submits it himself (Upwork blocks Muse's browser). Until the catalog URL exists, the card's CTA links to the free Playbook page (`public/playbook.html` in this repo, live at https://jaredfontaine2002.github.io/portfolio/playbook.html); adding the catalog URL later is a one-line `buyUrl` change in `src/data/projects.js`. No verified Upwork *profile* URL exists in the records, so none was invented for this card.

## 4. Contact published on the site

- LinkedIn: https://www.linkedin.com/in/jared-fontaine-cycling
- GitHub: https://github.com/jaredfontaine2002
- Upwork: shown as text only — "Available on Upwork" (no Upwork profile URL is published because none was verified for this build).
- Location line used everywhere on the site: **Burlington, NC | Remote**

---

## 5. Pre-publish checklist (for the push step — NOT done in this build)

- [ ] Create the empty public GitHub repo named `portfolio` (owner step if the GitHub App cannot create it — this was the blocker pattern on earlier repos).
- [ ] Add the new repo to the Muse GitHub App installation if it is not already covered ("All repositories" was set on 2026-11-01 — re-verify at push time).
- [ ] Push all files as PLAIN TEXT (never base64-encoded content — the standing GitHub lesson from the Black in Albania deploys).
- [ ] In the repo: Settings → Pages → Source = GitHub Actions (owner step, in a desktop browser).
- [ ] Verify the live URL https://jaredfontaine2002.github.io/portfolio/ returns 200 and the page title, hero, and project cards render from the served bundle.
- [ ] Verify every external link from the live site (Botpress demo, 6 GitHub repos, Black in Albania, Vlora, LinkedIn).
- [ ] Only AFTER the live URL is verified: add the portfolio URL to LinkedIn (profile / Featured) and to Upwork — separate approved steps, not part of this build.
- [ ] Confirm no political content, no Albania/Saranda location line, and no unlabelled sample/synthetic claims appear on the live site (search the built bundle before announcing).

## 6. Files in this build

| File | Purpose |
|---|---|
| `index.html` | Page shell, fonts, title/meta |
| `src/main.jsx` | React entry |
| `src/App.jsx` | All sections: hero, work, AI-visibility findings, services, about, contact |
| `src/data/projects.js` | Project, service, credential, and experience data |
| `src/index.css` | Modern dark editorial design system (CSS/typography only, no stock photos) |
| `public/favicon.svg` | JF monogram favicon |
| `vite.config.js` | Vite + React; base from `BASE_PATH` env (deploy uses `/portfolio/`) |
| `package.json` | React 19 + Vite 8 tooling (same proven stack as Black in Albania) |
| `.github/workflows/deploy.yml` | GitHub Pages deploy workflow, `BASE_PATH=/portfolio/` |
| `AI-VISIBILITY-SAMPLE-REPORT.md` | Full AI Visibility sample report, included in the repo |
| `PORTFOLIO-REPORT.md` | This report |
| `README.md` | Copy of this report, as the repo README |
| `.gitignore` | node_modules / dist |

## 7. Links that could not be verified in this build

- **Portfolio repo links** (`https://github.com/jaredfontaine2002/portfolio/...` and the planned Pages URL): the repo does not exist yet — these resolve only after the push step in §5. The AI Visibility project's in-repo report link depends on the repo being named exactly `portfolio` and the report file keeping its name.
- **Upwork profile URL:** not published anywhere on the site (text only), because no verified Upwork profile URL was supplied for this build.
- All other external links (Botpress demo, the six project GitHub repos, Black in Albania live site, vloracycling.com, LinkedIn, GitHub profile) are copied exactly from the projects' own READMEs / verified records listed in §2.
