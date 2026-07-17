# Emberion — AI Feature Strategy for The Golden Curtain

**Emberion** is the AI business layer of The Golden Curtain: every AI-powered capability the
platform sells, ships, or runs internally. This package is the working roadmap.

| Doc | Contents |
|---|---|
| [`01-current-capabilities.md`](./01-current-capabilities.md) | What exists in the repo today, plus the reusable capability-declaration template every new feature must fill in |
| [`02-feature-catalog.md`](./02-feature-catalog.md) | The 100-feature monetizable idea bank, classified by truth tier and autonomy |
| [`03-gemini-playbook.md`](./03-gemini-playbook.md) | Which features Gemini is the right tool for, with concrete integration patterns and starter prompts |

---

## 1. Objective

Grow paying subscribers by making Emberion the reason people subscribe to Golden Curtain —
while never letting an AI model touch money, prices, or bookings directly (Axiom 0:
the model proposes, deterministic code commits).

## 2. Best path — and the alternative rejected

**Best path:** ship the monetization spine first (auth → Stripe subscriptions → wallet ledger →
real feed), then attach a small set of AI features as *tier differentiators* — reasons to pick
Standard/Premium over Basic. The 100-feature catalog is an idea bank to draw from as the
subscriber base and evidence grow, not a build list.

**Rejected alternative:** "build the most exciting AI features first to attract subscribers."
Rejected because there is currently nothing to subscribe *to* — no auth, no payment rail, no
persistence. AI features bolted onto a mock feed produce demos, not revenue. The demo path was
the runner-up because it aids fundraising/marketing, but it fails the MVP gate: it does not land
the first 10 paying customers.

## 3. Build now (the First-10 slice)

Only these AI features pass the MVP gate today. Everything else is deferred with a trigger.

| # | Feature (catalog ID) | Why it makes the cut |
|---|---|---|
| 1 | **Giving Concierge** (#21) | Makes the core weekly-$5 mechanic effortless — the single biggest churn risk in the business model |
| 2 | **Story Coach** (#1) + **Auto-Captioner** (#2) | Content supply. An empty or low-quality feed kills everything downstream |
| 3 | **Moderation Triage** (#34) | A donation platform cannot open uploads without a safety screen; also satisfies the AUP/report pages already shipped |
| 4 | **Auto-Tagging** (#19) | Cheap, verifiable, unlocks browsing/discovery with near-zero risk |
| 5 | **Waitlist Nurturer** (#78) | The `NotifyForm` component already collects emails that currently go nowhere — lowest-effort conversion win in the repo |

## 4. Defer — with promotion triggers

- **Feed personalization suite (#11–20):** trigger = ≥500 active goals (before that, curation by hand beats ML).
- **Games AI (#41–50):** trigger = first successful *human-run* live event proves demand.
- **Verification/Verity (#31, #35, #36):** trigger = first real-money launch (build the human review queue first; AI assists it later).
- **B2B/API lines (#84–87, #99):** trigger = 1,000 paying subscribers (need proof before selling rails to others).
- Everything else: trigger = a paying-customer signal naming that specific pain.

## 5. Required architecture (before any AI feature ships)

1. **Emberion service layer** — one internal module (`lib/emberion/`) through which every model call passes. No component calls a model API directly.
2. **Proposal schema** — models return structured proposals (`{action, params, evidence, confidence}`); a deterministic validator commits or rejects. Nothing state-changing flows from raw model text.
3. **Model router (#97)** — cheap model for volume tasks, strong model for reasoning tasks; per-feature cost caps.
4. **Eval gauntlet (#98)** — every feature ships with a test set and a kill threshold before production.
5. **Kill switch** — per-feature flag to disable any Emberion capability instantly.
6. **Append-only event log** — every AI proposal, commit, and rejection logged for reconciliation.

## 6. Truth-tier summary

Of the 100 features: roughly 15 are **Verifiable** (V — hard ground truth, may earn high autonomy),
25 are **Statistical** (S — real but noisy, autonomy only after metrics clear luck), and 60 are
**Advisory** (A — counterfactual; may draft and propose, may never commit state or claim outcomes
without an experiment). Any feature touching credits, donations, or the fairness pool commits
**only** through the deterministic wallet layer regardless of tier. See the catalog for per-feature tags.

## 7. Risks

- **Regulatory (highest):** the credits/fairness-pool model resembles regulated money-transmission and sweepstakes territory. Legal review before real money moves. This risk dwarfs any AI risk.
- **Cost blowout:** video-understanding and generation calls are expensive at feed scale; the model router and per-feature caps are not optional.
- **Trust damage:** one AI-fabricated "impact" claim or one scam goal that AI verification "approved" damages the brand more than 50 good features help it. Verification stays human-decided.
- **Vendor drift:** model names/prices/APIs change; pin versions, keep the Emberion layer provider-agnostic.

## 8. Validation tests (cheapest kill-tests)

1. **Waitlist test:** email the notify-me list a Premium-tier description featuring 3 catalog features; measure reply/preorder intent. Kills or confirms the tier-differentiator thesis for ~$0.
2. **Concierge Wizard-of-Oz:** hand-pick weekly donation slates for 20 beta users before writing any model code; measure approval rate. If humans-as-AI can't get slates approved, the AI version won't either.
3. **Story Coach smoke test:** run 10 real goal descriptions through the coach prompt (playbook §4); have 5 target users rate output. Below 4/5 usefulness → rework before building UI.

## 9. Next action

Wire `NotifyForm` to a real store (even a simple KV/DB table) so the waitlist test (§8.1) can run.
It is the only validation step that requires zero new product surface.

---

```
WEAKNESS REPORT
- Deliverable: (1) All 100 features are unvalidated hypotheses — none has customer evidence;
  severity: high; fix: run §8 tests before building; blocks MVP: no (catalog is a map, not a plan).
  (2) Monetization tags assume a subscription-tier model that itself is unproven; severity: medium;
  fix: waitlist test. (3) Regulatory risk of the credit model is flagged but not analyzed;
  severity: high; fix: counsel review before launch; blocks MVP: yes, for real-money launch.
- Self-assessment: could not verify current Gemini pricing/model lineup (marked "verify" in the
  playbook); lowest confidence in monetization estimates; biggest gap: no user data to rank features.
- Kill test: the waitlist email test (§8.1) — if AI-tier framing doesn't move subscription intent,
  the entire premise "AI features drive subscribers" is dead and the catalog reorders around ops/cost wins.
- Confidence: core claim ("AI as tier-differentiator on a working payment spine beats AI-first")
  is INFERRED, medium-high — consistent with the MVP gate and repo state, but counterfactual until tested.
```
