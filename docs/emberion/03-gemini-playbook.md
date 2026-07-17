# Gemini Build Playbook — What to Build With It, and How

Where Google's Gemini stack is the right tool for the catalog, with integration patterns that keep
Axiom 0 intact (model proposes, deterministic code commits).

> **Grounding note:** model names below are accurate to this doc's writing (mid-2026 knowledge:
> Gemini 2.5 Pro / 2.5 Flash / Flash-Lite, Imagen for images, Veo for video, the Live API for
> realtime). Lineups and prices change fast — **verify current models and pricing at
> https://ai.google.dev before committing to cost math.** Nothing here assumes a specific price.
> The Emberion service layer stays provider-agnostic, so any model vendor can fill any slot.

## 1. Where Gemini specifically shines for this catalog

| Gemini strength | Catalog features it unlocks |
|---|---|
| **Native video understanding** (feed a video file/URI directly into the model) | Clip Doctor (#3), Highlight Cutter (#47), Scam Sentinel media-reuse checks (#32), Moderation Triage on video (#34), Empathy Replay (#30) |
| **Cheap high-volume tier (Flash / Flash-Lite)** | Auto-Tagging (#19), Moderation Triage (#34), Auto-Captioner cleanup (#2), Warmth-First Comments (#61), Translation Bridge (#67), Anomaly summaries (#88) |
| **Long context** (analyze a user's whole history, or many goals at once) | Giving Concierge slate reasoning (#21), Impact Digest (#22), Cohort Storyteller (#83), Anniversary Engine (#70) |
| **Image generation (Imagen)** | B-roll Composer stills (#5), Poster Forge (#8), QR Poster Studio (#72), Share-Kit frames (#71) |
| **Video generation (Veo)** | B-roll Composer motion (#5), Graduation Stories inserts (#60), promo material for Win Amplifier (#77) |
| **Speech / Live API (realtime voice in-out)** | Voice-over Studio (#6), Emberion Quizmaster (#43), Live Captions (#46), Voice-Note Onboarding (#94) |
| **Structured output (JSON schema enforcement)** | Every P→C feature — the proposal objects for #21, #24, #48, #85, #96 |
| **Google AI Studio free tier** | Prototyping every prompt in this doc before writing a line of app code |

Text-only drafting features (ghostwriters, coaches, note writers) are model-agnostic — run them
through the router (#97) and let cost/quality evals pick the winner per task.

## 2. Integration architecture

One rule: **no component or route calls a model SDK directly.** Everything goes through
`lib/emberion/`.

```
app/api/emberion/<feature>/route.ts   ← thin route handlers (auth, rate limit)
lib/emberion/
  client.ts        ← single Gemini client + model router (#97), per-feature cost caps
  proposals.ts     ← zod schemas for every proposal type; parse-or-reject
  commit/          ← deterministic modules that validate & commit (wallet, tags, flags)
  evals/           ← fixture sets + kill thresholds per feature (#98)
  flags.ts         ← per-feature kill switches (EMBERION_<FEATURE>_ENABLED)
  log.ts           ← append-only log of every proposal, commit, rejection
```

The proposal pattern (what "P→C" means in the catalog), sketched for the Giving Concierge:

```ts
// lib/emberion/proposals.ts
export const DonationSlateProposal = z.object({
  userId: z.string(),
  picks: z.array(z.object({
    goalId: z.string(),
    amountCredits: z.number().int().positive(),
    reason: z.string().max(240),          // shown to the user, never auto-executed
  })).min(1),
  totalCredits: z.number(),
});

// Gemini is called with responseSchema = DonationSlateProposal (structured output).
// commit/donations.ts then re-validates everything the model cannot be trusted with:
//   goal exists & is eligible · not self-donation · sum matches wallet reserve ·
//   fairness rules hold · idempotency key unused.
// Fail any check → no commit, escalate to manual picker. The model never touches the ledger.
```

## 3. Prototyping path (cheapest first)

1. **AI Studio, zero code:** paste the starter prompts below with 10 real-ish fixtures; iterate
   until output quality convinces you. Cost: free tier.
2. **Eval harness before UI:** turn those fixtures into `lib/emberion/evals/` cases with pass
   thresholds. A feature that can't pass its evals doesn't get a UI.
3. **Shadow mode:** run the feature on real data, log outputs, show nothing to users. Compare
   against human choices for a week.
4. **Supervised launch:** ship behind the kill switch at Draft/P→C autonomy. Promote only on evidence.

## 4. Starter prompts for the build-now five

Tune in AI Studio; keep the system framing when porting to code.

**Story Coach (#1)** — Gemini 2.5 Pro
> You are Ember, Golden Curtain's story coach. Interview the user about the one goal they are
> funding — ask one question at a time, max 6 questions, warm but direct, never pitying. Then
> produce: (1) a 60-second vertical-video script in their own words and register, hook in the
> first line; (2) three title options; (3) one honest note on what would make the story stronger.
> Never invent facts they didn't tell you. Flag, don't dramatize, any crisis content.

**Auto-Captioner cleanup (#2)** — Flash, after speech-to-text
> Clean this transcript into feed captions: fix punctuation, keep the speaker's exact words and
> dialect, split into max-42-character lines, mark emphasis words. Return JSON
> `{lines: [{text, startMs, endMs, emphasis}]}`. Do not paraphrase.

**Moderation Triage (#34)** — Flash, structured output
> Screen this post (text + media description) against the attached Acceptable Use Policy.
> Return `{verdict: "pass" | "flag", categories: [...], confidence: 0-1, quote: "..."}` quoting
> the exact policy line for any flag. When confidence < 0.8, flag — humans review all flags.
> You never remove content; you only route it.

**Auto-Tagging (#19)** — Flash-Lite
> Classify this goal into exactly one primary and up to two secondary categories from this fixed
> taxonomy: [debt, housing, health, education, art, business, family, escape-to-safety, community,
> other]. Return JSON `{primary, secondary[], confidence}`. Unknown or mixed → "other", never invent
> a category.

**Waitlist Nurturer (#78)** — Pro for the sequence, Flash for personalization
> Write a 4-email launch sequence for people who joined the Golden Curtain waitlist: (1) what GC
> is — every subscription funds real people's single defining goal; (2) how the weekly-$5 credit
> donation works, honestly, including that it's mandatory; (3) one real founder-approved story;
> (4) founding-subscriber invitation. Grounded, hopeful, zero hype-words. Each email under 150
> words with one CTA.

**Giving Concierge (#21)** — Pro, structured output (schema in §2)
> From this user's interest profile and this list of eligible goals (the ONLY valid goalIds),
> propose a donation slate totaling exactly {reservedCredits} credits across 2–4 goals. Optimize
> for fit with the user's stated interests and for goals close to completion. For each pick, one
> sincere 1-sentence reason addressed to the donor. Return only the JSON schema provided.

## 5. Cost control (before scale, not after)

- Router first (#97): Flash-Lite for classification, Flash for volume text, Pro only where
  reasoning quality is the product, generation models only on explicit user action (add-on priced).
- Cache aggressively: system prompts and policy documents via context caching; tag/moderation
  results are content-addressed — never re-screen identical media.
- Batch the non-interactive work (digests, recaps, forecasts) into off-peak batch jobs.
- Per-feature monthly budget caps in `client.ts`; a feature that exceeds its cap degrades to its
  non-AI fallback rather than silently burning margin.

```
WEAKNESS REPORT
- Deliverable: (1) model lineup/pricing may have shifted since writing — severity: medium — fix:
  verify at ai.google.dev before cost math; blocks MVP: no. (2) prompts are untested against real
  user data — severity: medium — fix: AI Studio fixture runs (§3.1). (3) video-understanding costs
  at feed scale are unmodeled — severity: high if #3/#34-video ship early — fix: measure on 100
  real clips before enabling.
- Self-assessment: could not verify current Gemini API surface from this environment; confidence
  lowest on generation-model (Imagen/Veo) fit for brand style.
- Kill test: run the 5 starter prompts on 10 real fixtures each; if <4/5 outputs are usable
  without edits, the prompt-first approach fails and features need finetuning or redesign.
- Confidence: capability-to-feature mapping DERIVED from documented Gemini capabilities (high);
  all quality claims HYPOTHESIS until §3 runs.
```
