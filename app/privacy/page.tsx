export default function Privacy() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last updated:</strong> {new Date().toLocaleDateString()}
      </p>
      <p>
        This Privacy Policy explains how Golden Curtain LLC collects, uses, and shares information when you use our Platform.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li>Account information (name, email, login identifiers).</li>
        <li>Payment-related information is handled by our payment processor; we receive limited billing details.</li>
        <li>Usage data (pages viewed, interactions, device/browser data).</li>
        <li>Reports submitted through our reporting tools.</li>
      </ul>
      <h2>How we use information</h2>
      <ul>
        <li>Provide and improve the Platform.</li>
        <li>Process subscriptions and provide access to paid content.</li>
        <li>Moderate content and enforce our policies.</li>
        <li>Prevent fraud and maintain security.</li>
      </ul>
      <h2>Contact</h2>
      <p>
        Questions? Email <a href="mailto:support@thegoldencurtain.com">support@thegoldencurtain.com</a>
      </p>
    </main>
  );
}
