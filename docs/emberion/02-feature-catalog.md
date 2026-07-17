# Emberion Feature Catalog — 100 Monetizable AI Features

An idea bank, not a build list. Every entry is a **HYPOTHESIS** until it passes a validation test.
Draw from it as evidence and subscribers grow; the build-now slice lives in [`README.md`](./README.md) §3.

**Column key**
- **Earns:** `Tier` = drives subscription-tier upgrades · `Add-on` = à-la-carte purchase · `Boost` = one-time paid promotion · `B2B` = brands/nonprofits/companies pay · `Retn` = retention/churn reduction (indirect revenue) · `Ops` = margin/cost reduction · `Growth` = subscriber acquisition
- **T:** Truth Tier — `V` verifiable · `S` statistical · `A` advisory
- **Autonomy:** the *maximum* ever allowed. `Draft` = human approves output · `P→C` = model proposes, deterministic code commits · `Auto*` = autonomous within bounds, monitored, kill-switched · `Human` = human decides, AI assists

Anything touching credits/donations/fairness-pool commits only through the deterministic wallet
layer (Axiom 0), whatever its tier. Per Stripe compliance pages: no tipping, no direct payments to
creators — all monetization is subscription/add-on/B2B revenue to Golden Curtain LLC.

---

## A. Story & Creator Studio (1–10)
The feed is the product; these keep it full of compelling, real stories.

| # | Feature | What it does | Earns | T | Autonomy |
|---|---|---|---|---|---|
| 1 | Ember Story Coach | Interviews a user about their goal, produces a 60-second video script in their own voice | Tier | A | Draft |
| 2 | Auto-Captioner | Transcribes clips, renders brand-styled captions | Tier | S | Auto* |
| 3 | Clip Doctor | Reviews an uploaded video: hook strength, pacing, lighting, audio — with a fix list | Tier | A | Draft |
| 4 | Hook Generator | Writes first-3-seconds hook options from the goal description | Tier | A | Draft |
| 5 | B-roll Composer | Generates on-brand background visuals for camera-shy users | Add-on | A | Draft |
| 6 | Voice-over Studio | Narrated versions of scripts (stock voices; cloning only with explicit consent flow) | Add-on | A | Draft |
| 7 | Multi-language Dub | Subtitles + dubs goal videos to reach diaspora and global donors | Tier | S | Draft |
| 8 | Poster Forge | Auto-selects poster frames, adds emblem-styled overlays | Tier | A | Auto* |
| 9 | Update Ghostwriter | Drafts weekly progress-update posts from milestone data | Tier | A | Draft |
| 10 | Story Arc Planner | Plans a 6-week content series mapped to the goal timeline | Tier | A | Draft |

## B. Feed, Discovery & Personalization (11–20)
Golden Curtain's angle: discovery weighted toward *need and fit*, not popularity.

| # | Feature | What it does | Earns | T | Autonomy |
|---|---|---|---|---|---|
| 11 | Empathy Match Engine | Matches donors to goals by story affinity rather than engagement stats | Retn | S | Auto* |
| 12 | Cold-Start Composer | 60-second interest interview at signup builds an instant personal feed | Retn | S | Auto* |
| 13 | Spotlight Curator | Ranks featured-story candidates with written rationale; editor approves | Ops | A | Human |
| 14 | Second-Chance Resurfacing | Resurfaces worthy under-viewed goals — anti-rich-get-richer discovery | Retn | S | Auto* |
| 15 | Semantic Goal Search | Natural-language search ("single parents rebuilding after a fire") | Tier | S | Auto* |
| 16 | Mood Browsing | "Show me wins today" / "comeback stories" feed filters | Retn | S | Auto* |
| 17 | Why-You're-Seeing-This | Transparent, readable explanation of every feed placement | Retn | A | Auto* |
| 18 | Local Lens | Geo-aware feed of goals near you; ties into real-world QR donations | Retn | S | Auto* |
| 19 | Auto-Tagging | Classifies goals into a clean category taxonomy for browsing | Ops | V | Auto* |
| 20 | Completion Radar | Surfaces goals within reach of their target for "finisher" donors | Retn | V | Auto* |

## C. Donor Experience & Giving Intelligence (21–30)
The weekly-$5 mechanic is the heart of the model; these make it delightful instead of a chore.

| # | Feature | What it does | Earns | T | Autonomy |
|---|---|---|---|---|---|
| 21 | Giving Concierge | Proposes a weekly donation slate meeting the $5 requirement; one-tap approve | Retn | A/V | P→C |
| 22 | Impact Digest | Monthly "here's what your credits did" recap — ledger numbers + narrative | Retn | V/A | Auto* |
| 23 | Donation Matchmaker Chat | Conversational "help me pick who to support this week" | Tier | A | Draft |
| 24 | Micro-Portfolio Builder | Spreads credits across N goals by theme (education, housing, art) | Tier | A/V | P→C |
| 25 | Gift Notes | Drafts a personal message to accompany each donation | Retn | A | Draft |
| 26 | Streak Guardian | Predicts who will miss the weekly $5; nudges with a ready-made slate | Retn | S | Auto* |
| 27 | Impact Forecaster | "Your $5/week finishes this goal by March" — labeled as an estimate | Retn | A | Auto* |
| 28 | Donor Circles | Forms giving pods around shared causes | Retn | S | Draft |
| 29 | Giving Summary Doc | Year-end personal giving summary, exportable | Tier | V | Auto* |
| 30 | Empathy Replay | Auto-cut thank-you highlight reel for donors when a goal completes | Retn | A | Draft |

## D. Trust, Safety & Verification (31–40)
Existential for a donation platform. Verification is always human-decided; AI accelerates the queue.

| # | Feature | What it does | Earns | T | Autonomy |
|---|---|---|---|---|---|
| 31 | Goal Verity Check | Pre-reviews evidence for goal claims; humans adjudicate every verdict | Retn | A | Human |
| 32 | Scam Sentinel | Flags duplicated stories, stolen videos, recycled media across accounts | Ops | S | Auto* (flag only) |
| 33 | Deepfake Screen | Synthetic-media detection on uploads | Retn | S | Auto* (flag only) |
| 34 | Moderation Triage | Cheap-model pre-screen of uploads against the AUP; humans handle flags | Ops | S | Auto* (pass/flag) |
| 35 | Milestone Proof | Pre-checks progress evidence (receipts, photos) before spotlight status | Retn | A | Human |
| 36 | Liveness Assist | Guides users through verification video; pre-checks quality before human review | Ops | V | Auto* |
| 37 | Vulnerability Guard | Detects crisis language; routes to help resources, never to virality | Retn | S | Auto* (route only) |
| 38 | Dispute Assistant | Drafts case summaries for the report/takedown queue | Ops | A | Draft |
| 39 | Ring Detection | Finds collusion/self-dealing patterns in the donation graph | Ops | S | Auto* (flag only) |
| 40 | Transparency Narrator | Plain-English "where every dollar of your subscription went," from ledger data | Retn | V/A | Auto* |

## E. Games & Live Events (41–50)
Fills the Games tab; converts entertainment into donations.

| # | Feature | What it does | Earns | T | Autonomy |
|---|---|---|---|---|---|
| 41 | Trivia Forge | Generates nightly themed trivia packs with difficulty curves and verified answers | Ops | V | Draft |
| 42 | Host Copilot | Real-time prompts, recaps, and shout-outs for human hosts | Ops | A | Draft |
| 43 | Emberion Quizmaster | Fully AI-hosted game show with a persona voice | Tier | A | Auto* |
| 44 | Charity Gauntlet | AI-refereed team challenges where donation totals power in-game moves | Retn | V/A | P→C |
| 45 | Audience Games | Generates interactive bingo/prediction overlays from live-stream content | Retn | A | Draft |
| 46 | Live Captions & Commentary | Real-time captioning/commentary of events (doubles as accessibility) | Tier | S | Auto* |
| 47 | Highlight Cutter | Auto-cuts post-event highlight reels into the feed | Ops | A | Draft |
| 48 | Prediction Games | Cash-free outcome predictions for credits; AI writes questions, code settles | Retn | V | P→C |
| 49 | Fair Brackets | Seeds tournaments for fair, exciting matchups | Retn | V | Auto* |
| 50 | Sponsor Spot Writer | Drafts sponsor segments for live events | B2B | A | Draft |

## F. Goal Coaching & Achievement (51–60)
The core promise is that goals get *reached* — these features make that measurably truer.

| # | Feature | What it does | Earns | T | Autonomy |
|---|---|---|---|---|---|
| 51 | Goal Architect | Turns a vague dream into milestones with target math | Tier | A | Draft |
| 52 | Ember Mentor | Weekly AI check-in coach specialized by goal category (debt, art, escape, health) | Tier | A | Draft |
| 53 | Budget Copilot | Advisory allocation plan for received donations — never moves money | Tier | A | Draft |
| 54 | Resource Matcher | Matches goals to external grants, nonprofits, and assistance programs | Tier | A | Draft |
| 55 | Skill Path Generator | Learning plans for earning-related goals | Tier | A | Draft |
| 56 | Accountability Pairing | Pairs users with compatible goal buddies | Retn | S | Draft |
| 57 | Milestone Celebrations | Auto-generates celebration posts/assets when a verified milestone lands | Retn | V/A | Auto* |
| 58 | Setback Navigator | Replanning assistant when a goal stalls | Retn | A | Draft |
| 59 | Debt Payoff Planner | Avalanche/snowball projections — educational, clearly labeled not-financial-advice | Tier | V/A | Draft |
| 60 | Graduation Stories | Produces a "goal completed" mini-documentary cut | Add-on | A | Draft |

## G. Community & Engagement (61–70)

| # | Feature | What it does | Earns | T | Autonomy |
|---|---|---|---|---|---|
| 61 | Warmth-First Comments | Surfaces encouragement, demotes toxicity in comment ranking | Retn | S | Auto* |
| 62 | Guardian Copilot | Drafting + triage tools for Guardians managing their communities | Tier | A | Draft |
| 63 | Welcome Wagon | Personalized first-week journey for each new subscriber | Retn | S | Auto* |
| 64 | Conversation Starters | Suggests meaningful questions donors can ask creators | Retn | A | Draft |
| 65 | Circle Digests | Weekly summaries of your circles' and followed goals' activity | Retn | A | Auto* |
| 66 | Gratitude Engine | Helps recipients personally thank every donor at scale (drafts only) | Retn | A | Draft |
| 67 | Translation Bridge | Real-time comment/DM translation | Tier | S | Auto* |
| 68 | Audio Event Recaps | Notes and summaries of community voice events | Tier | A | Draft |
| 69 | Guardian Academy | Interactive AI mini-course that trains and certifies new Guardians | Growth | A | Auto* |
| 70 | Anniversary Engine | "One year ago" retrospectives of a user's journey | Retn | A | Draft |

## H. Growth, Marketing & Virality (71–80)

| # | Feature | What it does | Earns | T | Autonomy |
|---|---|---|---|---|---|
| 71 | Share-Kit Generator | Auto-cuts TikTok/IG-ready vertical clips of goal stories with QR overlay | Growth | A | Draft |
| 72 | QR Poster Studio | Print-ready real-world posters/flyers per profile (the QR concept, productized) | Add-on | V/A | Draft |
| 73 | Referral Writer | Personalized invite copy per contact context | Growth | A | Draft |
| 74 | SEO Story Pages | Public goal landing pages generated and optimized for search | Growth | A | Draft |
| 75 | Trend Rider | Maps trending sounds/formats to goal-story templates | Growth | S | Draft |
| 76 | Press Kit Builder | Media-ready summaries of remarkable stories (consent-gated) | Growth | A | Draft |
| 77 | Win Amplifier | Detects completed goals; orchestrates cross-platform celebration content | Growth | S | Draft |
| 78 | Waitlist Nurturer | Personalized email sequences for the notify-me list (`NotifyForm` already collects it) | Growth | A/S | Draft |
| 79 | Churn Whisperer | Exit-risk detection + human-approved save offers | Retn | S | Human |
| 80 | Ambassador Scout | Identifies members with ambassador potential; drafts outreach | Growth | S | Draft |

## I. Business Intelligence & B2B (81–90)

| # | Feature | What it does | Earns | T | Autonomy |
|---|---|---|---|---|---|
| 81 | Fairness Auditor | Continuously proves round-robin fairness-pool integrity; publishes a public audit page | Retn | V | Auto* |
| 82 | Split Scenario Modeler | Models credit/pool split scenarios — advisory; humans set all prices | Ops | A | Human |
| 83 | Cohort Storyteller | Weekly plain-English analytics narrative for the founding team | Ops | V/A | Auto* |
| 84 | Sponsor Matchmaker | Matches brands to cause categories for sponsored fairness-pool boosts | B2B | A | Human |
| 85 | CSR Dashboard | Companies buy employee-giving programs running on GC rails | B2B | V | P→C |
| 86 | Nonprofit Bridge | Verified nonprofits get AI-assisted presence and co-funded campaigns | B2B | A | Draft |
| 87 | Impact API & Widget | White-label "donate feed" embed for partner sites | B2B | V | Auto* |
| 88 | Anomaly Watch | Real-time anomaly detection on donations, signups, abuse metrics | Ops | S | Auto* (alert) |
| 89 | Content Supply Forecaster | Predicts feed content gaps; prompts creator campaigns | Ops | S | Draft |
| 90 | LTV Oracle | Subscriber lifetime-value prediction to guide acquisition spend | Ops | S | Auto* |

## J. Platform, Accessibility & Emberion-as-Product (91–100)

| # | Feature | What it does | Earns | T | Autonomy |
|---|---|---|---|---|---|
| 91 | Ember Persona | One consistent Emberion character/voice across every AI touchpoint — the brand moat | Retn | A | Auto* |
| 92 | Accessibility Suite | Auto alt-text, audio descriptions, dyslexia-friendly reading mode | Tier | S | Auto* |
| 93 | Elder Mode | Simplified, AI-guided interface for older donors | Growth | A | Auto* |
| 94 | Voice-Note Onboarding | Spoken story → structured goal profile for low-bandwidth/low-literacy users | Growth | A | Draft |
| 95 | Calm Notifications | AI-timed, AI-toned notifications tuned per user — deliberately non-addictive | Retn | S | Auto* |
| 96 | Privacy Copilot | Explains data usage conversationally; data requests execute via deterministic backend | Retn | A/V | P→C |
| 97 | Model Router | Routes each task to the cheapest adequate model; per-feature cost caps | Ops | V | Auto* |
| 98 | Eval Gauntlet Harness | Automated eval suite gating every Emberion feature before ship | Ops | V | Auto* |
| 99 | Emberion Studio API | The creator-studio tools (A-block) sold as a standalone API/SaaS to other platforms | B2B | V/S | P→C |
| 100 | Golden Curtain Annual | AI-compiled print-on-demand yearbook of each user's year of impact | Add-on | A | Draft |

---

## Reading the catalog honestly

- **Monetization spread:** ~35 features drive tier upgrades, ~8 are direct add-on purchases, ~8 are B2B lines, ~30 defend retention, ~12 cut costs, ~10 acquire subscribers. Retention features earn indirectly — in a subscription business they are usually worth more than flashy add-ons.
- **The three moats** worth protecting once built: Empathy Match (#11) + Second-Chance (#14) as an anti-popularity feed; the Fairness Auditor (#81) as *provable* fairness no competitor publishes; and Ember Persona (#91) as the emotional brand layer.
- **Hard rule repeated:** no feature in this catalog ever computes a price, moves credits, or mutates a wallet from model output. Advisory features that *sound* transactional (#21, #24, #44, #48, #85, #96) are proposal generators in front of the deterministic ledger.
