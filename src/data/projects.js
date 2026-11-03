// Portfolio projects — every claim here is sourced from the project's own
// README or a verified report. Sample / synthetic work is labelled as such.

export const projects = [
  {
    id: 'cx-agent',
    title: 'Bike Shop CX Agent',
    status: 'Demo — live',
    statusTone: 'live',
    description:
      'A working AI customer-service agent built specifically for bike shops and DTC cycling brands. It handles sizing and compatibility only from the shop\'s own catalogue, order and workshop status, and warranty triage — and it never invents a price, stock level, or compatibility verdict. Guardrail-first by design: it proposes, a human approves.',
    proof: 'Full 10-case test suite: 10/10 passed, including refusing a cross-brand compatibility confirmation under direct pressure.',
    tags: ['AI Agents', 'Botpress', 'Gorgias', 'Knowledge Base Design', 'CX'],
    links: [
      { label: 'Try the live demo', url: 'https://cdn.botpress.cloud/webchat/v3.7/shareable.html?configUrl=https://files.bpcontent.cloud/2026/10/22/15/20261022155825-43C70MZ8.json' },
      { label: 'GitHub', url: 'https://github.com/jaredfontaine2002/bike-shop-cx-agent' },
    ],
  },
  {
    id: 'black-in-albania',
    title: 'Black in Albania — Guide & Directory',
    status: 'Live',
    statusTone: 'live',
    description:
      'A React + Vite web app built for the Black American expat community in Albania: a member-vouched directory with one-tap WhatsApp contact, plus practical guides for buses, housing, and hair care. It was built to answer the same questions the community\'s WhatsApp groups had asked 478 times in eight months — once, in a place that does not scroll away.',
    proof: 'Live on GitHub Pages; listings are published only after the provider consents and a member vouches — enforced in code.',
    tags: ['React', 'Vite', 'GitHub Pages', 'UX', 'Community Product'],
    links: [
      { label: 'Live site', url: 'https://jaredfontaine2002.github.io/black-in-albania/' },
      { label: 'GitHub', url: 'https://github.com/jaredfontaine2002/black-in-albania' },
    ],
  },
  {
    id: 'ai-visibility',
    title: 'AI Visibility Audit — Sample Report',
    status: 'Sample — not commissioned',
    statusTone: 'sample',
    description:
      'A sample audit of how AI shopping assistants talk about a brand, using State Bicycle Co. as the study subject. Forty real buyer prompts were run across ChatGPT, Perplexity, and Gemini — 120 runs total — and every answer was scored against facts verified from the brand\'s own site.',
    proof: 'Headline finding: named mentions 30/30 in every tool, but unprompted category mentions only 11/30 — and the same bike was quoted at $1,399.99 vs $1,195 depending on the chat.',
    tags: ['AI Research', 'ChatGPT', 'Perplexity', 'Gemini', 'E-commerce', 'Reporting'],
    links: [
      { label: 'Read the findings', url: '#ai-visibility-report' },
      { label: 'Full sample report (in this repo)', url: 'https://github.com/jaredfontaine2002/portfolio/blob/main/AI-VISIBILITY-SAMPLE-REPORT.md' },
    ],
  },
  {
    id: 'neto-sync',
    title: 'Neto Supplier Sync',
    status: 'Sample — synthetic data only',
    statusTone: 'sample',
    description:
      'A Python tool that closes the gap between supplier emails and a Neto (Maropost) store. It reads supplier invoice and dispatch emails — including PDF attachments — matches them to the right order, and writes tracking and parts back as safe internal notes, so staff can answer "where\'s that part?" from the order itself instead of searching inboxes.',
    proof: 'Safe Inbound Mode: a supplier shipment never marks a customer order as dispatched and never emails the customer. Low-confidence matches go to a human review queue.',
    tags: ['Python', 'PDF Parsing', 'Neto / Maropost API', 'Automation', 'E-commerce Ops'],
    links: [
      { label: 'GitHub', url: 'https://github.com/jaredfontaine2002/neto-supplier-sync' },
    ],
  },
  {
    id: 'gorgias-analytics',
    title: 'Gorgias CX Analytics',
    status: 'Sample — synthetic data',
    statusTone: 'sample',
    description:
      'A helpdesk analytics toolkit for a cycling retailer\'s Gorgias instance. Feed it a ticket export and it returns first-response, resolution, and CSAT metrics, SLA breach rates, and staffing recommendations — broken down by the ticket tags bike shops actually use, like sizing, compatibility, and warranty.',
    proof: 'Built on a synthetic 900-ticket export with bike-specific tags; the same pipeline runs on a real Gorgias export.',
    tags: ['Python', 'pandas', 'Gorgias', 'Data Analysis', 'CX Operations'],
    links: [
      { label: 'GitHub', url: 'https://github.com/jaredfontaine2002/gorgias-cx-analytics' },
    ],
  },
  {
    id: 'sales-dashboard',
    title: 'Bike Shop Sales Dashboard',
    status: 'Sample — synthetic data',
    statusTone: 'sample',
    description:
      'An end-to-end e-commerce analytics project for a cycling retailer: a pandas analysis pipeline and an interactive Streamlit + Plotly dashboard with KPI cards, revenue trends, and return-rate breakdowns across categories, brands, and channels.',
    proof: 'Runs on two years of synthetic, reproducible order data. Sample finding: apparel drives high volume but the highest return rate (~18%) — fit guidance is the obvious lever.',
    tags: ['Python', 'pandas', 'Streamlit', 'Plotly', 'E-commerce Analytics'],
    links: [
      { label: 'GitHub', url: 'https://github.com/jaredfontaine2002/bike-shop-sales-dashboard' },
    ],
  },
  {
    id: 'vlora',
    title: 'Vlora Cycling Camp',
    status: 'Live — founder',
    statusTone: 'live',
    description:
      'Founder of a road cycling tour company running guided and self-guided tours. The portfolio work behind the business includes the website rebuild, tour product and pricing pages, and a verified Google tracking setup — GTM and GA4 with the lead event firing only on the enquiry thank-you page, so enquiries are measured accurately.',
    proof: 'Live business site. No testimonials are used on this portfolio — ask for references directly.',
    tags: ['Founder', 'Squarespace', 'Google Tag Manager', 'GA4', 'Product & Pricing', 'Cycling Tours'],
    links: [
      { label: 'vloracycling.com', url: 'https://vloracycling.com' },
    ],
  },
  {
    id: 'board-game',
    title: 'Black American Achievement — Board Game',
    status: 'Product in production',
    statusTone: 'product',
    description:
      'An educational family board game designed from scratch: a 64-space board, a 50-card Fate deck, and 200 trivia cards. Every one of the 250 cards was cross-checked against primary sources, and a complete proof-order pack — board, cards, rulebook, and box — is ready for The Game Crafter.',
    proof: 'All 250 cards fact-checked (42 corrections applied during the check). Proof order targeted for November 2026.',
    tags: ['Product Design', 'Game Design', 'Research & Fact-Checking', 'Publishing'],
    links: [],
  },
]

export const services = [
  {
    name: 'Gorgias Helpdesk Audit',
    price: '$595',
    unit: 'fixed · 7 days',
    buyUrl: 'https://www.upwork.com/services/product/2112592691981473414',
    description: 'Full teardown of macros, rules, views, tags, SLAs, and AI agent quality, plus ticket-data analysis and a prioritised fix list with a walkthrough.',
  },
  {
    name: 'Optimization Sprint',
    price: '$1,800',
    unit: 'fixed · 2 weeks',
    buyUrl: 'https://www.upwork.com/services/product/admin-customer-support-gorgias-optimization-sprint-your-audit-fixes-implemented-in-2-weeks-2112602481755444870',
    description: 'The audit fixes, implemented: Gorgias configuration, AI agent setup with guardrails, macros, and routing — built and tested in your own helpdesk.',
  },
  {
    name: 'Monthly CX Retainer',
    price: '$700',
    unit: '/mo',
    buyUrl: 'https://www.upwork.com/services/product/2112605293147084422',
    description: 'Ongoing tuning: weekly flag-report review, new intents and macros, and continuous improvement of your support operation and AI agent.',
  },
  {
    name: 'AI Visibility Audit',
    price: '$395',
    unit: 'fixed',
    buyUrl: 'https://www.upwork.com/services/product/2117562658396700448',
    description: 'The 120-run method from the sample report, applied to your brand: how ChatGPT, Perplexity, and Gemini answer buyers about you — and what to fix first.',
  },
]

export const credentials = [
  'Gorgias Admin Certified',
  'Gorgias CX Certified',
  'MBA — Wheeling Jesuit University, 2014',
  'Shimano Tech Certified',
  'SRAM Technical University (Elite)',
]

export const experience = [
  { org: 'Tune Cycles (Australia)', role: 'Customer service — current, via Upwork' },
  { org: 'Curated.com', role: 'Cycling expert — $500K+ in bike sales' },
  { org: 'Planet Cyclery', role: 'Customer service' },
  { org: 'Cambria Bike', role: 'Customer service' },
  { org: 'Vlora Cycling Camp', role: 'Founder' },
]
