# The AI Council Loop — Claude ↔ ChatGPT ↔ Gemini
*Hourly automated improvement cycle for Emberion. Owner: Joseph Ramsey. Operator: Claude (this Claude Code session). Governed by Constitution §5 (weakness-discovery) and §5a (Council Doctrine).*

## Purpose
Run Emberion's weakness-discovery protocol on AI time instead of Joseph's clock: every hour, Claude reviews Emberion's state, interrogates the other council brains (ChatGPT Business and Gemini), cross-examines their answers, converts confirmed weaknesses into feature specs, folds the highest-probability path back into the docs/backlog, and reports material changes to Slack.

## Operating mode: RELAY-FIRST (adopted July 10 for token economics)
Strategy collaboration happens primarily in **flat-rate chat apps** — Joseph relays between ChatGPT Business chat, Gemini chat, and Claude (paste a review request, paste answers back; snippets live in `BUILD_PLAN.md`). The automated API loop is throttled to **once daily** and acts as the synthesizer/safety-net, so tokens are spent on building, not strategy chatter. Frequency of collaboration is unlimited in relay mode because it costs nothing extra.

## Mechanics
- **Trigger:** A Routine (cron `0 14 * * *` — daily, 9am Houston) fires into the Claude Code session.
- **ChatGPT bridge (optional, for automated cycles):** Zapier → ChatGPT (OpenAI) action, tied to Joseph's newest ChatGPT Business workspace (`12f92ddf…`).
- **Gemini bridge (optional):** Zapier → Google AI Studio (Gemini) `send_prompt`/`conversation` actions.
- **Slack:** Zapier → Slack action into the "Emberion AI" workspace; summaries posted only when something material changed.
- **Record:** every accepted improvement is a git commit on `claude/emberion-rules-business-v2lqzh` in `golden-curtain-app` (and later `the-forge-site` once added to the session).

## Each daily cycle
1. Pull latest; re-read `EMBERION_CONSTITUTION.md`, `BUILD_PLAN.md`, and the ledgers below. Check PR #2 (CI/reviews/merge state).
2. **Ingest relayed answers:** if Joseph pasted council responses (in chat or Slack) since the last cycle, cross-examine and synthesize them by §5a probability rules, fold results into docs, and lock plan updates.
3. **Build check:** report progress against the current `BUILD_PLAN.md` phase; if a phase's acceptance criteria pass, mark it done and start the next.
4. **API council round (only if warranted):** if there is a specific open question the relay hasn't answered AND ChatGPT/Gemini are connected via Zapier, run ONE targeted round (VERDICT / ANSWERS / TOP MOVE / RISKS / QUESTIONS BACK) with cross-examination. Skip when nothing needs it — silence is cheaper than noise.
5. **Weakness → Feature (§5a.2):** any weakness confirmed gets a Ledger entry; it stays open until it ships as a capability.
6. Commit and push; post a 5-line Slack digest only when something material changed. Joseph-only questions go to the **Owner Queue**, phrased for one-line replies.

**Every 4th cycle is a meta-cycle (§5a.3):** include in the Slack digest (or relay packet) the questions the council *should* be asking but isn't — about new engineering paths, algorithmic builds, and learning abilities. The best become Focus Rotation entries.

## Council Operating Rules v1 (proposed by ChatGPT 2026-07-10, amended by Claude — pending Gemini attack + Joe ratification)
1. Every scheduled cycle produces one concrete contribution (feature candidate, weakness, opportunity, UX/security/perf/cost/automation/revenue improvement, or research question) **or** an explicit no-op log stating what was checked and why nothing qualified — max 2 consecutive no-ops before escalating to Joe.
2. Until Emberion has 10 founder-approved **Golden Features**, cycles include candidate features scored for user excitement, subscription value, differentiation, revenue impact, strategic value, engineering effort, security, and privacy — **capped at 1 candidate/cycle until Build Plan Phase 1 (memory) ships**; anything not buildable within 2 phases goes to the icebox.
3. No proposal is complete until another model attempts to improve it, break it, or expose hidden assumptions — and the attacker must state what evidence would change its mind.
4. Accepted changes must improve a measurable objective (conversion, retention, latency, reliability, security, usability, cost, maintainability).
5. Blockers, contradictions, missing authority, or founder-judgment decisions → ping Joe with a one-line problem statement, options, and a recommended decision — one ping per unique blocker; everything else queues in the Owner Queue.
6. Slack is where the council debates; **git is where rules are ratified**. This file is the single source of truth for loop procedure.

Full round-1 exchange: ChatGPT's proposal is in #all-emberion-ai; Claude's cross-examination is `COUNCIL_REVIEW_R1.md`.

## Focus Rotation (initial)
1. Twilio reinstatement strategy (unblock SMS)
2. Vapi voice agent v1 design
3. Supabase memory schema for the widget
4. Billing/duplicate-subscription audit
5. Commerce assistant (Tier 4) MVP definition
6. Golden Curtain: auth → wallet → donation flow sequencing
7. Security posture review (keys, rate limits, prompt-injection defenses)
8. Constitution amendments & weakness-log review

## Safety rails
- The loop edits **docs and backlogs**, and proposes code changes as PR diffs — it never force-pushes, deletes, or spends money.
- Constitution §4 (Hard Guardrails) can be *proposed* against but only Joseph ratifies changes.
- Cadence is Joseph's to change anytime ("make the loop daily" is enough). Hourly consumes Zapier tasks and ChatGPT capacity — throttle if quotas bite.

## Current status
- [x] Docs authored and committed
- [x] Hourly Routine armed (`trig_01BHFpmSSMUcJM5m62nhnfBF`, cron `0 * * * *`, PR: golden-curtain-app#2)
- [ ] Zapier Slack connection authorized (Joseph: one-time click)
- [ ] Zapier ChatGPT connection authorized (Joseph: one-time click)
- [ ] Zapier Gemini connection authorized (Joseph: one-time click)
- [ ] Slack briefing posted (auto on first authorized cycle)
- [ ] Cycle #1 council round-trip executed end-to-end

## Weakness-to-Feature Ledger
<!-- weakness → the feature it becomes → status (open / spec'd / shipped) -->
| # | Weakness discovered | Feature it becomes | Status |
|---|---|---|---|
| 1 | Emberion has no persistent memory | Supabase-backed memory + self-maintained profile of every conversation | open |
| 2 | Emberion can't tell when it's failing | Self-diagnostic scorecard: logs solved/partial/failed per conversation, feeds §5 gap log | open |
| 3 | SMS channel is down (Twilio suspension) | Multi-channel failover: web widget + email capture keep serving while any one channel is down | open |
| 4 | Emberion can't ask for help | The Ask Protocol (§5.3): structured questions routed to Joseph/Claude/ChatGPT/Gemini | spec'd |

## Cycle log
<!-- One line per cycle: date/hour · focus · brains consulted · outcome (material / no-op) -->
