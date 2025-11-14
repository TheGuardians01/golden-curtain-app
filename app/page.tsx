"use client";
import Link from "next/link";
import NotifyForm from "./components/NotifyForm";

export default function Home() {
  return (
    <main className="gc-wrap">
      <header className="gc-header">
        <div className="gc-badge">The Guardians</div>
        <nav className="gc-nav">
          <Link href="#mission">Mission</Link>
          <Link href="#how">How it Works</Link>
          <Link href="#join" className="gc-cta">
            Get Updates
          </Link>
        </nav>
      </header>

      <section className="gc-hero">
        <div className="gc-hero-grid">
          <div className="gc-hero-main">
            <div className="gc-badge-row">
              <span className="gc-pill">Community-funded</span>
              <span className="gc-pill gc-pill-soft">Beta launch coming soon</span>
            </div>

            <h1>
              The Guardians
              <span>Guarding hope. Empowering change.</span>
            </h1>

            <p className="gc-sub">
              A donation-first platform where everyday people become Guardians for one another.
              It&apos;s simple. Transparent flows. Real help you can actually see.
            </p>

            <div className="gc-actions">
              <Link href="#join" className="gc-btn gc-btn-primary">
                Get Early Access
              </Link>
              <Link href="#how" className="gc-btn gc-btn-ghost">
                How it Works
              </Link>
            </div>

            {/* Wife’s quote with gold-cent “quotes” */}
            <div className="gc-quote">
              <span className="gc-cent">¢</span>
              <em>Investing in a real change you can actually see.</em>
              <span className="gc-cent">¢</span>
            </div>
          </div>

          <aside className="gc-hero-preview" aria-label="Example Guardian story">
            <div className="gc-preview-card">
              <div className="gc-preview-header">
                <div className="gc-preview-avatar">A</div>
                <div className="gc-preview-title">
                  <strong>Aubrie&apos;s Recovery Window</strong>
                  <p>Giving a family breathing room after life hits hard.</p>
                </div>
              </div>

              <div className="gc-preview-meter">
                <div className="gc-preview-bar">
                  <span style={{ width: "62%" }} />
                </div>
                <div className="gc-preview-meta">
                  <span>$1,240 raised</span>
                  <span>of $2,000 goal</span>
                </div>
              </div>

              <button className="gc-btn gc-btn-primary gc-btn-full">
                Become a Guardian
              </button>

              <p className="gc-preview-foot">
                47 Guardians active • Live impact feed • No fluff
              </p>
            </div>
          </aside>
        </div>

        <div className="gc-ui-glow" aria-hidden />
      </section>

      {/* Plans section */}
      <section id="plans" className="gc-section gc-plans">
        <h2>Choose your pace of impact</h2>
        <div className="gc-plan-grid">
          <div className="gc-plan">
            <h3>Starter</h3>
            <p className="gc-plan-line">Small, steady support</p>
            <ul>
              <li>One-click donate</li>
              <li>Monthly updates</li>
            </ul>
            <a className="gc-btn gc-btn-primary" href="#join">
              Get Updates
            </a>
          </div>

          <div className="gc-plan gc-plan-featured">
            <div className="gc-chip">Popular</div>
            <h3>Standard</h3>
            <p className="gc-plan-line">Meaningful monthly momentum</p>
            <ul>
              <li>Priority stories</li>
              <li>Impact summaries</li>
            </ul>
            <a className="gc-btn gc-btn-primary" href="#join">
              Join the List
            </a>
          </div>

          <div className="gc-plan">
            <h3>Guardian</h3>
            <p className="gc-plan-line">Sponsor a page or cause</p>
            <ul>
              <li>Early feature access</li>
              <li>Direct Guardian channel</li>
            </ul>
            <a className="gc-btn gc-btn-ghost" href="#join">
              Become a Guardian
            </a>
          </div>
        </div>
      </section>

      {/* Why the Curtain */}
      <section id="mission" className="gc-section">
        <h2>Why the “Curtain”?</h2>
        <p>
          It&apos;s a promise of shelter and dignity. Our angel-wing motif stands for
          protection, while a subtle fabric pattern nods to community and country. The
          mission is human: reduce stress, increase trust, and give people something real to
          look forward to.
        </p>
      </section>

      {/* How it works */}
      <section id="how" className="gc-section gc-grid">
        <div>
          <h3>1) Guardians Onboard</h3>
          <p>Verified recipients connect a secure payout account (Stripe Express).</p>
        </div>
        <div>
          <h3>2) People Donate</h3>
          <p>Supporters give directly on clean, shareable pages—mobile-first and transparent.</p>
        </div>
        <div>
          <h3>3) Funds Flow</h3>
          <p>Destination transfers route donations quickly and safely. Receipts are automatic.</p>
        </div>
      </section>

      {/* Join */}
      <section id="join" className="gc-section gc-card">
        <h2>Be first to know</h2>
        <p>Launch updates, early invites, and a look behind the curtain.</p>
        <NotifyForm />
        <small className="gc-note">We respect privacy. No spam—ever.</small>
      </section>

      <footer className="gc-footer">
        <span>© {new Date().getFullYear()} The Golden Curtain LLC</span>
        <span className="gc-dot">•</span>
        <Link href="/terms">Terms</Link>
        <span className="gc-dot">•</span>
        <Link href="/privacy">Privacy</Link>
      </footer>
    </main>
  );
}
