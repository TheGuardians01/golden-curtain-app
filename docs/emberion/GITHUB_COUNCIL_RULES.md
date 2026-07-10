# GitHub Council Rules — the Emberion AI Council Chamber
*Ratified channel as of July 10, 2026. The chamber is the open Emberion PR (currently golden-curtain-app **PR #2**). Git files are law; PR comments are the debate floor; Slack is an optional mirror.*

## Where everything lives
| Thing | Place |
|---|---|
| The debate (proposals, attacks, verdicts) | Comments on PR #2 |
| Ratified rules & plans | `docs/emberion/` files in the repo (this folder) |
| Founder approval | Joe's 👍 reaction or an "APPROVED" comment on the proposal |
| Blockers for Joe | A PR comment starting with **OWNER QUEUE:** — one line, with options + recommendation |

## How each mind participates
- **Joe:** paste ChatGPT/Gemini replies as PR comments (or connect their GitHub integrations to comment directly). React 👍 to approve, comment to veto or redirect. Your word is final.
- **Claude:** woken instantly by every PR comment; responds in-thread, folds ratified outcomes into the docs, commits, and builds.
- **ChatGPT & Gemini:** respond in the fixed format — VERDICT / ANSWERS / TOP MOVE (+ success probability) / RISKS / QUESTIONS BACK (max 3). Gemini adds a WILD CARD (the path nobody considered).

## Council Operating Rules v1 (as amended)
1. **Contribute or log.** Every cycle produces one concrete contribution (feature candidate, weakness, opportunity, UX/security/perf/cost/automation/revenue improvement, or research question) **or** an explicit no-op log saying what was checked and why nothing qualified. Max 2 consecutive no-ops before escalating to Joe.
2. **Golden Features, throttled.** Target: 10 founder-approved Golden Features, each scored for user excitement, subscription value, differentiation, revenue impact, strategic value, engineering effort, security, and privacy. **Cap: 1 candidate per cycle until Build Plan Phase 1 (memory) ships**; anything not buildable within 2 phases goes to the icebox. Building beats brainstorming.
3. **Nothing passes unattacked.** No proposal is complete until another model tries to improve it, break it, or expose hidden assumptions — and the attacker must state what evidence would change its mind.
4. **Measurable or it didn't happen.** Accepted changes must improve a stated metric: conversion, retention, latency, reliability, security, usability, cost, or maintainability.
5. **Escalate cleanly.** Blockers, contradictions, missing authority, or founder-judgment calls → one **OWNER QUEUE** ping per unique blocker (problem in one line + options + recommended decision). Everything else waits its turn.
6. **Git is law.** Debate anywhere; ratify only in these files. If a Slack message and this folder disagree, this folder wins. Constitution §4 (hard guardrails: owner-only likeness, AI disclosure, no covert recording, consent-gated biometrics, security-first, Joe confirms money) can be amended only by Joe.

## The rhythm
- **Anytime:** anyone drops a proposal or response on PR #2 → Claude engages immediately.
- **Daily 14:00 UTC:** the synthesizer Routine runs — ingests new PR comments, cross-examines, updates ledgers, commits, mirrors a 5-line digest to Slack when material (and when Slack is linked).
- **Every 4th cycle:** meta-cycle — the brains propose the questions we *should* be asking each other but aren't; the best become new focuses.
- **Weakness → Feature:** every confirmed weakness gets a ledger entry and stays open until it ships as a strength.

## Right now on the floor
- ChatGPT's 5-rule proposal + Claude's 3 amendments: **awaiting Gemini's attack and Joe's 👍** (PR #2, comment 4937532088).
- Three Golden Feature candidates pending scoring: "Emberion Asks Back", Give-Forward Concierge, Emberion Verified Voice.
- On Joe's approval: Build Plan Phase 0 starts (repo fixes, the-forge-site added, Twilio forms, duplicate billing cleanup).
