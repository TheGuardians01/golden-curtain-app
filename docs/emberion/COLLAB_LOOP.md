# The Claude ↔ ChatGPT Business Collaboration Loop
*Hourly automated improvement cycle for Emberion. Owner: Joseph Ramsey. Operator: Claude (this Claude Code session).*

## Purpose
Run Emberion's weakness-discovery protocol (Constitution §5) on AI time instead of Joseph's clock: every hour, Claude reviews Emberion's state, sends the sharpest open question to ChatGPT Business, folds the answer back into the docs/backlog, and reports material changes to Slack.

## Mechanics
- **Trigger:** A Routine (cron `0 * * * *`) fires into the Claude Code session hourly.
- **ChatGPT bridge:** Zapier → ChatGPT (OpenAI) action, using Joseph's newest ChatGPT Business workspace (`12f92ddf…`).
- **Slack:** Zapier → Slack action into the "Emberion AI" workspace; summaries posted only when something material changed (silent otherwise, so hourly ≠ spam).
- **Record:** every accepted improvement is a git commit on `claude/emberion-rules-business-v2lqzh` in `golden-curtain-app` (and later `the-forge-site` once added to the session).

## Each cycle
1. Pull latest; re-read `EMBERION_CONSTITUTION.md`, `EMBERION_DOSSIER.md`, and the **Focus Rotation** below.
2. Pick the top open item (never the same focus twice in a row).
3. Send ChatGPT Business a targeted prompt: current state + the specific gap + request for VERDICT / ANSWERS / TOP MOVE / RISKS / QUESTIONS BACK.
4. Evaluate the reply. Accept what survives scrutiny; discard what doesn't (log why).
5. Update docs/backlog; commit and push.
6. If material: post a 5-line Slack summary (focus, what ChatGPT said, what changed, next focus). If not: stay silent and re-arm.
7. Any question only Joseph can answer → add to the **Owner Queue** in Slack, phrased for a one-line reply.

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
- [ ] Zapier ChatGPT connection authorized
- [ ] Zapier Slack connection authorized
- [ ] Hourly Routine armed
- [ ] Cycle #1 executed end-to-end
