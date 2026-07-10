# Slack Briefing — ready to post to the "Emberion AI" workspace
*This is the in-depth briefing Claude will post (verbatim, Slack-formatted) as soon as the Zapier ↔ Slack connection is authorized. Kept in git so the loop can post it on cycle #1.*

---

:fire: *EMBERION — FULL STATE OF THE MISSION* :fire:
_Posted by Claude on behalf of the Joseph + Claude + ChatGPT collaboration. Long read — this is the whole map._

*1. WHAT EMBERION IS*
Emberion (emberion.ai) is our AI agent on its way to becoming a true personal assistant — an extension of Joseph. Today it exists as the *"Chat with Emberion" web widget* (the-forge-site, live on Vercel) and an *SMS twin on Twilio that is currently suspended*. Sister venture: *The Golden Curtain* (Golden Curtain LLC) — the TikTok-style donation platform where subscribers fund each other's goals (credits, weekly $5 give-forward, $1 fairness pool, QR donations, live games).

*2. WHAT WE'RE IMPROVING — EVERY WORKSTREAM*
• *Unblock SMS:* Twilio suspended us at signup; two reinstatement drafts are written and ready to submit at help.twilio.com. Until then the SMS agent is dead and $20 is stranded.
• *Voice (Tier 2):* build Emberion's phone/web voice on Vapi — org exists, Joe is admin, nothing built yet.
• *Memory & proactivity (Tier 3):* Supabase is paid for ($25/mo Pro — twice, see billing) but not wired in. Goal: persistent memory for the widget + scheduled check-ins.
• *Commerce (Tier 4):* Emberion helps people sell — listings, storefront copy, Stripe payment links (Stripe "Emberion" account is verified and has a fresh API key).
• *Owner-persona (Tier 5, consent-gated):* Joseph's OWN voice clone and avatar, from material he deliberately provides, always disclosed as AI. Never anyone else's likeness — that's constitutional law for us.
• *"Jarvis mode" (Tier 6, north star):* always-available, multimodal, proactive — with visible indicators, no covert recording, encrypted opt-in biometrics only.
• *Golden Curtain build-out:* front-end prototype exists (Next.js 15/React 19/Tailwind v4, mock data); needs auth → wallet → donation flow → fairness pool → live games. Compliance pages for Stripe are done.
• *Self-evolution:* Emberion now has a written weakness-discovery protocol — it logs every failure as a capability gap, diagnoses it, and asks the right brain (Joseph = decisions, Claude = code, ChatGPT = strategy) a question answerable in one line. Evolution on AI time, not Joseph's clock.

*3. THE AUTOMATED LOOP (now armed)*
Every hour, Claude: pulls the latest docs → picks the top gap from the focus rotation → interrogates ChatGPT (VERDICT / ANSWERS / TOP MOVE / RISKS / QUESTIONS BACK) → folds surviving ideas into the constitution/backlog → commits to git → posts here *only when something material changed*. Questions only Joseph can answer land in the *Owner Queue* thread, phrased for one-line replies.

*4. MONEY LEAKS FOUND TODAY* :rotating_light:
• *Two ChatGPT Business workspaces* created 3.5h apart on July 9 — cancel the older one (keep `12f92ddf…`).
• *Two Supabase Pro invoices* ($25 each, July 1) — consolidate if the second org isn't intentional.
• *Google Workspace on 4 domains* (thegoldencurtain.com, thegoldencurtain.ai, projectunshakeable.com, emberion.ai) — audit which earn their keep.
• *Slack Pro trial* started July 10 — decide before it converts.
• *Vercel domain misconfiguration* warning open since April.

*5. THE RULES*
The full Emberion Constitution, dossier, ChatGPT Business mega-prompt, and loop spec now live in `golden-curtain-app` → `docs/emberion/` (PR open). Hard guardrails: owner-only likeness, always disclose AI, no covert surveillance, encrypted consensual biometrics, security-first, Joseph confirms irreversible money moves.

_Two minds, one mission. The loop is live — let's build._ :crossed_swords:
