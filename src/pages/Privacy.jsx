import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for schrutebucks.lol — what data we collect, how we use it, and your rights."
        path="/privacy"
      />

      <article className="content-page">
        <h2 className="content-h2">Privacy Policy</h2>
        <p style={{ fontSize: '0.78rem', color: 'var(--ink-light)' }}>Last updated: May 28, 2026</p>

        <p>
          This privacy policy explains how schrutebucks.lol ("we", "us", "the site") collects
          and uses information when you visit. We take your privacy seriously — almost as seriously
          as Dwight takes beet farming.
        </p>

        <h2 className="content-h2">Information We Collect</h2>
        <p>
          We do not collect any personal information directly. We do not have user accounts,
          contact forms, or any way to identify you personally.
        </p>
        <p>
          However, we use <strong>Google Analytics</strong>, which automatically collects
          anonymous usage data including:
        </p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 2, fontSize: '0.9rem' }}>
          <li>Pages visited and time spent on each page</li>
          <li>General geographic location (country/city level)</li>
          <li>Device type, browser, and operating system</li>
          <li>How you arrived at the site (search engine, direct, referral)</li>
        </ul>
        <p>
          This data is anonymized and aggregated — we cannot identify individual users.
          Google Analytics uses cookies to collect this information. You can opt out of
          Google Analytics tracking by installing the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics opt-out browser add-on
          </a>.
        </p>

        <h2 className="content-h2">Cookies</h2>
        <p>
          This site uses cookies placed by Google Analytics to track anonymous usage statistics.
          No other cookies are set by this site. You can disable cookies in your browser settings,
          though this may affect how some features work.
        </p>

        <h2 className="content-h2">Amazon Affiliate Links</h2>
        <p>
          This site participates in the Amazon Services LLC Associates Program. When you click
          links to Amazon and make a purchase, Amazon may set cookies on your browser to track
          the referral. Amazon's privacy practices are governed by{' '}
          <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" target="_blank" rel="noopener noreferrer">
            Amazon's Privacy Notice
          </a>.
        </p>

        <h2 className="content-h2">Third-Party Services</h2>
        <p>This site uses the following third-party services:</p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 2, fontSize: '0.9rem' }}>
          <li><strong>Google Analytics</strong> — anonymous usage tracking (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>)</li>
          <li><strong>Amazon Associates</strong> — affiliate link program (<a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" target="_blank" rel="noopener noreferrer">Amazon Privacy Notice</a>)</li>
          <li><strong>open.er-api.com</strong> — live currency exchange rates (no personal data sent)</li>
        </ul>

        <h2 className="content-h2">Your Rights</h2>
        <p>
          Since we don't collect personal data directly, there is nothing to access, correct,
          or delete on our end. To opt out of Google Analytics data collection, use the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics opt-out tool
          </a>.
        </p>

        <h2 className="content-h2">Children's Privacy</h2>
        <p>
          This site is not directed at children under 13. We do not knowingly collect any
          information from children.
        </p>

        <h2 className="content-h2">Changes to This Policy</h2>
        <p>
          We may update this policy occasionally. Changes will be posted on this page with
          an updated date at the top.
        </p>

        <h2 className="content-h2">Contact</h2>
        <p>
          This is a solo fan project with no contact form or support channel. For privacy
          concerns related to Google Analytics, please use Google's own opt-out tools linked
          above. For Amazon-related concerns, contact Amazon directly.
        </p>
      </article>
    </>
  );
}
