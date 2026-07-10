# Emberion Build Plan v1 — "the perfect plan of approach"
*Drafted July 10, 2026 by Claude. Status: AWAITING ONE COUNCIL REVIEW ROUND (ChatGPT chat + Gemini chat via relay), then locked and executed.*

## Operating principle
Plan once, review once, then **build**. Strategy debates happen in flat-rate chat (free); tokens get spent on code. Each phase has acceptance criteria — a phase is done when the criteria pass, not when it feels done.

---

## Phase 0 — Clear the runway (now, zero external dependencies)
1. Fix `golden-curtain-app` hygiene: dead nav links in `app/layout.tsx`, broken `fix:typo` script in `package.json`, `NotifyForm` fake-success state.
2. Joseph approves adding `the-forge-site` to the Claude session (one click when prompted) so the widget code is buildable from here.
3. Joseph submits the two prepared Twilio reinstatement forms at help.twilio.com.
4. Joseph cancels the duplicate ChatGPT Business workspace + confirms whether the second Supabase org is intentional.
- **Done when:** repo builds clean with no dead links; the-forge-site is in-session; Twilio tickets filed; duplicate billing resolved.

## Phase 1 — Memory (Emberion stops forgetting)
1. Supabase schema: `users`, `conversations`, `messages`, `capability_gaps` (the §5 weakness log), `asks` (the Ask Protocol queue).
2. Wire the web widget to read/write conversation history keyed by visitor.
3. Nightly job rolls up new `capability_gaps` into the Weakness-to-Feature Ledger.
- **Needs from Joseph:** Supabase project URL + service key (env vars, never committed).
- **Done when:** a returning visitor is remembered; a failed answer creates a gap row automatically.

## Phase 2 — SMS resurrection
1. On Twilio reinstatement: webhook → same brain as the web widget (shared prompt + shared Supabase memory).
2. TCPA hygiene built in: opt-in records, STOP handling, quiet hours.
- **Done when:** a text to the Emberion number gets the same quality answer as the widget, and both share memory.

## Phase 3 — Voice v1 (Vapi)
1. Vapi assistant using Emberion's constitution-derived system prompt; phone number attached.
2. Escalation rule: caller asks for a human → SMS/Slack ping to Joseph with a summary.
3. Voice is Emberion's own branded voice (Tier 5 owner-voice comes later, consent-gated).
- **Done when:** you can call Emberion, have a useful conversation, and see the transcript land in Supabase.

## Phase 4 — Golden Curtain core (prototype → product)
Order: auth (Supabase Auth) → profiles + single goal → wallet (`lib/types.ts` model already written) → manual donation flow → weekly $5 job → fairness pool queue → live games later.
- **Done when:** two test users can subscribe (Stripe test mode), donate credits, and the fairness pool pays $1 round-robin correctly.

## Phase 5 — Commerce assistant MVP
1. Emberion drafts listings/storefront copy on request; generates Stripe payment links (test mode first).
2. Follow-up sequences via the channels that exist by then (web/SMS/voice).
- **Done when:** one real item can be sold end-to-end with Emberion doing the drafting and link generation, Joseph confirming the money step.

---

## The collaboration economics (why this is the fastest cheap path)
- **Relay Mode (default, ~free):** big-brain planning happens in the chat apps you already pay flat-rate for. Joseph pastes one review request into ChatGPT Business chat and Gemini chat, pastes their answers back (here or into Slack). One round ≈ 2 minutes of pasting, zero marginal cost.
- **API loop (throttled to daily):** the automated Zapier loop now fires once a day as the synthesizer/safety-net — it checks the PR, folds in any council answers Joseph relayed, updates the ledger, posts the Slack digest. ~24× cheaper than hourly.
- **Build tokens:** what we save on strategy chatter gets spent here in Claude Code writing actual code.

## Council review round — the exact paste (send to BOTH chats)
> COUNCIL REVIEW ROUND — Build Plan v1 for Emberion (you already have full context from my earlier prompt). Here is the plan: [paste the Phases 0–5 section above]. Respond ONLY in this format — VERDICT: one sentence. TOP 3 CHANGES: the three highest-probability-of-success improvements to this plan, ranked. RISKS: max 3. QUESTIONS BACK: max 3, one-line answerable. Do not restate the plan.

Paste both replies back to Claude (or into Slack once connected). Claude reconciles disagreements by §5a probability rules, locks v1.1, and the build starts.
