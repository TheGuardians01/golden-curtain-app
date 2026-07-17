# Current Capabilities — Inventory & Template

Everything below marked OBSERVED was read directly from the repo on 2026-07-17
(branch `claude/emberion-ai-features-9wxqag`, base commit `0d38965`).

## 1. What exists today (OBSERVED)

### Product surface

| Capability | Where | State |
|---|---|---|
| TikTok-style vertical feed (snap scrolling, like/comment/share rail, impact meter) | `app/page.tsx`, `app/components/ClipCard.tsx` | Working UI on **mock data** (`mockClips`) |
| Feed tabs: For You / Following / Guardians / Spotlight / Games | `app/page.tsx`, `SideNav.tsx`, `TopNav.tsx` | Tabs switch; Spotlight = likes>10k filter; Games = placeholder |
| Games tab | `app/components/GamesPlaceholder.tsx` | Placeholder text only |
| Email waitlist form | `app/components/NotifyForm.tsx` | UI only — submits to an `alert()`, **no data is stored** |
| Compliance pages: Terms, Privacy, Acceptable Use, Report | `app/terms`, `app/privacy`, `app/acceptable-use`, `app/report` | Live routes (Stripe due-diligence ready); duplicated drafts in `golden-curtain-pages/` |
| Brand system: dark bg + gold/amber gradients, GC emblem | `app/globals.css`, `public/tgc-emblem.png` | Established; AGENTS.md forbids breaking it |

### Domain model (types only — no persistence)

`lib/types.ts` defines: `User`, `Guardian`, `Goal`, `SubscriptionPlan`, `Wallet`
(available/reserved/received credits + weekly $5 requirement), `Donation` (manual/auto/fairness),
`FairnessPoolEntry`, `GameEvent`/`GameContestant`, `Clip`, `FeedTab`.
The business model is fully typed but **nothing reads or writes real data**.

### Stack

Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript 5.8. No database, no ORM,
no auth, no API routes, no payment integration, no test suite, **no AI/model dependency of any kind**.

### What does NOT exist yet (the gap list)

Auth · persistence · Stripe billing · wallet ledger · donation flow · fairness-pool job ·
weekly-$5 job · video upload/storage · live streaming · QR profile codes · notifications ·
moderation tooling behind the Report page · any Emberion AI capability.

## 2. Capability-declaration template (use for every new feature)

Copy this block into the design doc or PR description of every Emberion capability before it is
built. A capability without a completed declaration does not ship.

```md
### Capability: <name>  (catalog ID #NN)

- **What it does:** <one sentence>
- **Who pays / how it earns:** <sub-tier | add-on | boost | B2B | retention | ops-margin>
- **Truth Tier:** V (verifiable) | S (statistical) | A (advisory)
  - Split execution vs. strategy: <e.g. "caption rendering = V; caption style advice = A">
- **Fitness Signal:** <the metric that proves it works, and where it's measured>
- **Maturity:** M0 idea | M1 prototype | M2 shadow | M3 supervised | M4 autonomous-in-bounds
- **Maximum Autonomy:** <draft-only | propose→deterministic-commit | auto-with-monitoring | human-decides>
  - Effective autonomy = MIN(tier ceiling, liability cap, legal cap, current maturity)
- **Evaluation Method:** <eval set + kill threshold before production>
- **Escalation Rules:** <when it must hand off to a human>
- **Kill Switch:** <the flag that turns it off>
- **Money contact:** <NONE, or the deterministic module that commits on its behalf — a model
  never computes a price, moves credits, or mutates a wallet directly>
```

### Worked example (filled in for the first build-now feature)

```md
### Capability: Giving Concierge  (catalog ID #21)

- What it does: proposes a weekly donation slate satisfying the user's $5 requirement; user taps approve.
- Who pays / how it earns: retention (protects the core mechanic); Premium adds taste-tuned slates.
- Truth Tier: split — slate *composition* = A (advisory); slate *commit & ledger math* = V.
- Fitness Signal: % of proposed slates approved without edits; weekly-requirement miss rate vs. control.
- Maturity: M0 (idea). Promote via Wizard-of-Oz test → prototype → shadow.
- Maximum Autonomy: propose→deterministic-commit. Auto-donate fallback runs from creditsReserved by
  deterministic scheduled job only — the model never triggers it.
- Evaluation Method: 50 held-out user/goal fixtures; slate must be valid (eligible goals, correct sums,
  no self-donation, fairness-eligible) 100% of the time; kill threshold: any invalid slate reaching commit.
- Escalation Rules: no eligible goals, wallet anomaly, or user flagged → human queue.
- Kill Switch: EMBERION_CONCIERGE_ENABLED=false → UI falls back to manual picker.
- Money contact: wallet ledger module validates & commits; model output is a proposal object only.
```
