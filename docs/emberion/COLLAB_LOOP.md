# The AI Council Loop — Claude ↔ ChatGPT ↔ Gemini
*Hourly automated improvement cycle for Emberion. Owner: Joseph Ramsey. Operator: Claude (this Claude Code session). Governed by Constitution §5 (weakness-discovery) and §5a (Council Doctrine).*

## Purpose
Run Emberion's weakness-discovery protocol on AI time instead of Joseph's clock: every hour, Claude reviews Emberion's state, interrogates the other council brains (ChatGPT Business and Gemini), cross-examines their answers, converts confirmed weaknesses into feature specs, folds the highest-probability path back into the docs/backlog, and reports material changes to Slack.

## Mechanics
- **Trigger:** A Routine (cron `0 * * * *`) fires into the Claude Code session hourly.
- **ChatGPT bridge:** Zapier → ChatGPT (OpenAI) action, tied to Joseph's newest ChatGPT Business workspace (`12f92ddf…`).
- **Gemini bridge:** Zapier → Google AI Studio (Gemini) `send_prompt`/`conversation` actions.
- **Slack:** Zapier → Slack action into the "Emberion AI" workspace; summaries posted only when something material changed (silent otherwise, so hourly ≠ spam).
- **Record:** every accepted improvement is a git commit on `claude/emberion-rules-business-v2lqzh` in `golden-curtain-app` (and later `the-forge-site` once added to the session).

## Each cycle
1. Pull latest; re-read `EMBERION_CONSTITUTION.md`, `EMBERION_DOSSIER.md`, and the **Focus Rotation** below.
2. Pick the top open item (never the same focus twice in a row).
3. Send the same targeted prompt to **every connected brain** (ChatGPT and/or Gemini): current state + the specific gap + request for VERDICT / ANSWERS / TOP MOVE / RISKS / QUESTIONS BACK.
4. **Cross-examine:** when both brains are connected, show each one the other's TOP MOVE and ask it to attack the weakest assumption. Agreement is signal; disagreement gets logged as a thin spot in our understanding.
5. **Synthesize by probability (§5a.1):** Claude weighs evidence, effort, risk, and reversibility, commits to the highest-probability path, and records the reasoning.
6. **Weakness → Feature (§5a.2):** any weakness confirmed this cycle gets an entry in the Weakness-to-Feature Ledger below — it stays open until it ships as a capability.
7. Update docs/backlog; commit and push.
8. If material: post a 5-line Slack summary (focus, what the council said, what changed, next focus). If not: stay silent and re-arm.
9. Any question only Joseph can answer → add to the **Owner Queue** in Slack, phrased for a one-line reply.

**Every 4th cycle is a meta-cycle (§5a.3):** instead of answering the current focus, ask each brain: "What questions should we be asking each other that we aren't — about new engineering paths, algorithmic builds, and learning abilities for Emberion?" The best answers become new Focus Rotation entries.

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
