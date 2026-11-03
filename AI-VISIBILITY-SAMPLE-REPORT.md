# AI Visibility Audit — SAMPLE REPORT

**Brand:** State Bicycle Co. (US direct-to-consumer bike brand)
**Prepared:** 2026-10-31 · **Status:** Labelled sample, prepared to demonstrate the AI Visibility Audit format. Not commissioned by State Bicycle Co.; nothing in this report has been sent to them.
**Method:** 40 real buyer prompts run on each of ChatGPT, Perplexity, and Gemini (120 runs total, 2026-10-29 to 2026-10-31, each prompt in a fresh chat/thread). Prompts are grouped as Category (unprompted — the brand is not named in the question), Comparison, Problem/compatibility, and Brand/trust. Every factual claim about State was scored against facts verified from statebicycle.com on 2026-10-29. Facts that could not be verified from an official page were marked "unverifiable" and not scored right or wrong.

---

## 1. Headline: strong when named, patchy when not

| Tool | Category (unprompted, /10) | Comparison (/10) | Problem (/10) | Brand/trust (/10) | Overall (/40) |
|---|---|---|---|---|---|
| Perplexity | 5 | 10 | 10 | 10 | **35** |
| ChatGPT | 2 | 10 | 10 | 10 | **34** |
| Gemini | 4 | 10 | 10 | 10 | **34** |

When a shopper names State, every major AI answers about it accurately and in depth (30/30 across all three tools in the named groups). The gap is discovery: in unprompted category questions — the ones a new buyer actually asks — State was named in only 11 of 30 runs.

Category prompts missed by **all three** tools:
- Best steel gravel bike online — Surly, Fairlight and others named instead, despite State's 4130 All-Road being a direct fit.
- Best hardtail mountain bike under $1,500 — State's 4130 Trail line was invisible in every tool.
- Best do-it-all commuter + weekend gravel bike — Trek, Canyon, Cannondale and Specialized took the shortlists.
- Best low-cost cruiser — Retrospec won; State's City Bikes / Klunker lines were never mentioned.

Category prompts where State did surface: fixed-gear/single-speed commuting and city riding (its Core-Line home turf — named in all three tools across prompts 4–5), bikepacking under $1,500 (Gemini and Perplexity), and entry-level road under $700 (Perplexity only, on an unverified price — see §3).

## 2. How State is framed against rivals

Named competitor set for scoring: Poseidon Bike (closest like-for-like rival), Priority Bicycles (city/commuter DTC rival), Canyon (benchmark DTC brand — much larger than State, included to measure category-default displacement, not as a peer).

- **Poseidon** is the recurring category rival: it took the pick for "best gravel bike under $1,000" in Perplexity and appeared as the alternative in other category runs. In head-to-heads, State's All-Road bikes generally beat Poseidon's Redwood and X Ambition on gravel briefs.
- **Priority wins the commuter fight.** In the Core-Line vs Priority and low-maintenance commuter comparisons, the AI tools consistently gave Priority the verdict for most riders (belt drive, low maintenance), positioning State as the budget/flat-short-commute option. All three tools reproduced this pattern.
- **Canyon wins on perceived value/performance at the top end** (Endurace Allroad, Grail comparisons), even where State undercuts it by roughly $500 — the answers credit Canyon's brand and spec story over State's price advantage.
- State's clearest AI-visible strengths: steel All-Road value ($999.99 for the 12-speed 4130), the 700c/650b "both wheelsets" option, cargo/bikepacking mounts, and the flip-flop Core-Line.

## 3. What the AI tools get wrong — and inconsistent

Trust facts (warranty, returns, shipping, assembly) were **largely accurate** in the dedicated brand/trust prompts in all three tools — 5-year metal-frame warranty with the carbon/parts/eBike splits, 30-day returns with the $45 bike label fee and no international returns, shipping calculated at checkout (not free), and ~90% assembled with professional setup recommended. That baseline is genuinely good.

The problems are inconsistency and stale detail, not wholesale invention:

1. **The 6061 All-Road price trap.** State's own pages showed a $1,399.99 list price and a $1,195 sale price at check time. Depending on the chat, the same tool quoted either number — Perplexity gave only $1,399.99 in one prompt and both numbers, with a "verify checkout" warning, in another. A buyer comparing against Canyon's $1,499 Endurace Allroad gets a different value story each time.
2. **Warranty overstatement.** Perplexity (prompts 1, 15) and ChatGPT (prompt 36) at times upgraded "professional assembly helps validate your warranty" into "proof of professional assembly is required to activate the warranty" — a scarier, wrong claim that the same tools contradicted in their own dedicated warranty answers.
3. **Unverified prices presented as fact.** All three tools quoted a 4130 Road price (~$649.99, sometimes a "$585 older model") and a 4130 Fixed/Single price (~$579.99) that could not be verified from an official product page — the kind of figure a support team then has to un-promise.
4. **Spec drift within a single tool.** Tyre-clearance figures for the same bikes varied by chat in all three tools (e.g. 700×55/650b×60 vs 700×45/650b×53), and Core-Line prices shifted between $399.99, $449.99 and $474.99 across runs (the verified Rigby price is $449.99; $474.99 is the upgraded-bar build).
5. **Location disagreement.** State's own banner says "Rider-owned in Phoenix, AZ since 2009"; Perplexity and Gemini placed the brand in Tempe, ChatGPT in Phoenix. Unreconciled — and exactly the kind of small inconsistency that erodes buyer confidence.

## 4. What this means for State (sample recommendations)

1. **Fix the price story at the source.** One clear, consistent 6061 All-Road price presentation across collection and product pages would remove the single biggest source of contradictory AI answers.
2. **Publish the missing spec facts in crawlable form.** Tyre clearance, tubeless setup, sizing and UDH compatibility are answered from third-party and forum sources because the official, verifiable versions are hard to find — every unverifiable figure above traces back to that gap.
3. **Create category content for the invisible lines.** Hardtail (4130 Trail), cruiser/city (Klunker, City Bikes) and steel-gravel category queries return rival brands in 100% of tested runs; comparison and "best of" content targeting those exact buyer phrases is the lever.
4. **Counter the commuter verdict.** Priority owns the low-maintenance commuter narrative in AI answers. State's counter (price, simplicity, flip-flop flexibility) exists but is not published in a form AI tools repeat.
5. **Re-test quarterly.** Scores moved between tools on identical prompts; a single AI answer is a sample of one. This audit's 120-run method is the deliverable repeated each quarter in the monitoring tier.

## 5. Limits

- Scoring reference is the verified-facts file checked 2026-10-29; live prices, sales and policies move, and some State-page figures have already shifted during the test window.
- ChatGPT runs were logged out; Gemini and Perplexity runs were signed in (free plans). Sign-in state can affect answers and is recorded per tool in the raw result files.
- "Unverifiable" means not confirmed from an official page in the prep pass — not that the AI's figure is wrong.
- Raw scored runs: `ai-visibility-results-chatgpt.md`, `ai-visibility-results-perplexity.md`, `ai-visibility-results-gemini.md`; prompt set and verified facts: `ai-visibility-sample-prep-state-bicycle.md`.

*Sample prepared by Jared Fontaine — Gorgias Admin + CX Certified, cycling-industry customer experience. The paid AI Visibility Audit applies this same 120-run method to the client's own brand, catalogue and policies.*
