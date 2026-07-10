# The Emberion Dossier
### Everything we have on Emberion.ai — accounts, tools, subscriptions, expectations, and the growth plan
*Compiled July 10, 2026 by Claude for Joseph Ramsey. Sources: this repo, Gmail sweep, Notion search, session integrations.*

---

## 1. What Emberion is today (honest snapshot)

- **Emberion** is the AI agent/assistant business at **emberion.ai**, run by Joseph Ramsey alongside Golden Curtain LLC ("The Guardians").
- **Live/near-live surfaces:**
  - **Web chat widget** — "Chat with Emberion" in `TheGuardians01/the-forge-site` (PR #12, described as the "web twin of the SMS agent"), actively deploying to Vercel on team "The Guardians."
  - **SMS agent** — built on Twilio, currently **dead in the water**: the `joe@emberion.ai` Twilio account was auto-suspended at signup (June 28) and the original account (SID `AC564ac5...`, funded $20 on June 25) is locked behind an SSO identity rename. Two support-form drafts are sitting in Gmail ready to paste into help.twilio.com.
- **This repo** (`golden-curtain-app`) is The Golden Curtain donation platform — a front-end prototype (Next.js 15 / React 19 / Tailwind v4, mock data only) plus Stripe-compliance pages. Its `AGENTS.md` holds the original agent rules and the full Golden Curtain business model, now folded into `EMBERION_CONSTITUTION.md`.

## 2. Accounts & infrastructure map

| Service | Identity | Status / notes |
|---|---|---|
| Domain + email | emberion.ai (joe.ramsey@ / joe@) | Google Workspace-backed inbox active |
| Slack | "Emberion AI" workspace (emberionai.slack.com) | Created July 9–10; **Slack Pro free trial started July 10** |
| ChatGPT Business | **Two workspaces**, created ~3.5h apart July 9 (`d2296692…`, `12f92ddf…`); invite sent to theguardians@thegoldencurtain.com | ⚠️ Probable duplicate billing — see Action Items |
| OpenAI platform | Codex + ChatGPT sign-ins July 9–10 | Used from Houston, TX |
| Stripe | Account "Emberion" | New API key July 9; verification info submitted July 8 ("no active tasks") ✅; Link enabled |
| Supabase | Org(s) with OAuth app approved July 10 | **Two $25 Pro invoices** July 1 (#WRKIFG-00001, #GREJOU-00001) — possibly two orgs ⚠️ |
| Twilio | 2 accounts (see §1) | Both blocked; $20 balance stranded |
| Vapi (voice AI) | Org under theguardians@thegoldencurtain.com; Joe admin since July 8 | Voice tier not yet built |
| Vercel | Team "The Guardians" (theguardians-4082) | the-forge-site deploying constantly; 2FA enabled June 26 ✅; **1 misconfigured domain warning** since April ⚠️ |
| GitHub | TheGuardians01 org | Repos: golden-curtain-app, the-forge-site |
| Google Workspace | thegoldencurtain.com (paid), thegoldencurtain.ai (invoiced), projectunshakeable.com (trial June), emberion.ai | **Four domains** carrying Workspace billing ⚠️ |
| Anthropic | Claude subscription (receipt May 27, forwarded via Stephanie Ramsey) | Powers this session / Claude Code |
| Notion | Onboarding email July 10 | Workspace search for "Emberion" returned nothing yet — likely empty |

**Not yet searchable this session:** Google Drive and Lovable required an interactive approval that didn't go through, and adding `the-forge-site` to this session hit the same gate. Re-run those with approval to complete the picture.

## 3. Monthly subscription burn (what Gmail shows)

- Google Workspace × up to 4 domains (~$7–14/user/domain/mo)
- Supabase Pro × 2 invoices — $50/mo if both orgs are real
- ChatGPT Business × 2 workspaces (~$25–30/seat/mo each) ⚠️
- Slack Pro (trial now, ~$8.75/user/mo when it converts)
- Anthropic Claude subscription
- Twilio $20 balance (stranded), Vapi (usage-based), Vercel (Hobby/Pro — check team plan), Stripe (per-transaction)

**Estimated avoidable spend: roughly $50–80/mo** in duplicates (second ChatGPT workspace, second Supabase org, Workspace domains not in active use).

## 4. What Joseph expects from this business (the vision, in tiers)

Joseph's own framing: Emberion should become an **extension of him** — evolving on AI time, not his mental clock — and the collaboration between Joseph, Claude, and ChatGPT should run "like the world's future depends on it."

- **Now:** a true assistant that answers, sells, and represents the brand via web + SMS + (soon) voice.
- **Next:** memory, proactivity, and the self-evolution loop — Emberion detects its own weaknesses and asks Joseph/Claude/ChatGPT for exactly what it needs (protocol in `EMBERION_CONSTITUTION.md` §5).
- **Later (consent-gated):** Joseph-persona features — his own voice clone, avatar from his own likeness, mannerisms learned from videos he deliberately uploads.
- **North star:** "Jarvis mode" — always-available, multimodal, proactive engagement that *feels* like the movies while staying legal and hack-proof: disclosure always on, no covert recording, biometric data encrypted and consensual, security-first architecture.
- **Commerce:** Emberion helps people sell things — listings, storefronts, Stripe payment links, follow-ups — as a revenue engine.

## 5. Action Items (the backlog)

**Burning:**
1. **Twilio reinstatement** — submit the two prepared drafts through help.twilio.com (not email). Unblocks the SMS agent and the $20 balance.
2. **Duplicate ChatGPT Business workspace** — keep the newest (`12f92ddf…`, created July 10 02:56 UTC), cancel the other before it bills.
3. **Two Supabase $25 invoices** — confirm whether two orgs are intentional; consolidate if not.
4. **Vercel misconfigured domain** — warning outstanding since April on team The Guardians.

**Important:**
5. Google Workspace audit — 4 domains carrying subscriptions; keep only what's in use.
6. Slack Pro trial — decide before it converts to paid.
7. Wire the ChatGPT Business collaboration loop end-to-end (see `COLLAB_LOOP.md`).
8. Vapi voice agent v1 — Emberion Tier 2.

**Repo hygiene (golden-curtain-app):**
9. Dead nav links in `app/layout.tsx` (`/how-it-works`, `/guardians/sample-guardian` don't exist).
10. `package.json` references missing `scripts/fix-typography.mjs`.
11. `NotifyForm.tsx` email capture goes nowhere — wire to Supabase.

## 6. Tools used to build the website & app

Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · sharp · Google Fonts (Inter, Montserrat) · Prettier (VS Code, format-on-save) · pnpm/npm · Vercel (deploys) · GitHub (TheGuardians01) · Supabase (backend-to-be) · Stripe + Link (payments) · Twilio (SMS) · Vapi (voice) · OpenAI Codex + ChatGPT Business · Anthropic Claude / Claude Code · Slack (team HQ) · Notion (workspace, unused so far) · Google Workspace (email/domains).
