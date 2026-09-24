import Head from "next/head";
import Link from "next/link";

export default function Privacy() {
  return (
    <main className="page">
      <Head>
        <title>Privacy Policy — Unity 3D Model Hub</title>
        <meta name="description" content="Privacy policy for Unity 3D Model Hub, covering cookies, advertising, and how visitor data is handled." />
      </Head>
      <div className="container">
        <Link href="/" className="back-link">← Back to Unity 3D Model Hub</Link>

        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: September 2026</p>

        <p>
          Unity 3D Model Hub ("this site," "we," "us") is a free directory of
          links to third-party resources for Unity game developers. This
          policy explains what data is collected when you visit and how it's
          used.
        </p>

        <h2>Information we collect</h2>
        <p>
          We do not require accounts, logins, or personal information to
          browse this site. If you use the "Submit a resource" link, it opens
          your own email app — any information you choose to send is sent
          directly to us by email and is not stored on this website.
        </p>

        <h2>Cookies and advertising</h2>
        <p>
          This site displays ads served by Google AdSense. Google and its
          partners use cookies to serve ads based on a visitor's prior visits
          to this and other websites. You can opt out of personalized
          advertising by visiting{" "}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
            Google's Ads Settings
          </a>
          . Third-party vendors, including Google, use cookies to serve ads
          based on someone's past visits to this website or other websites.
        </p>

        <h2>Third-party links</h2>
        <p>
          This site links out to external asset sources (Unity Asset Store,
          Kenney.nl, Poly Haven, Quaternius, Sketchfab, and others). We are
          not responsible for the content, licensing terms, or privacy
          practices of those third-party sites. Review each site's own terms
          before downloading or using their assets.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href="mailto:sureshwsc174@gmail.com">sureshwsc174@gmail.com</a>.
        </p>
      </div>

      <style jsx global>{`
        .page {
          min-height: 100vh;
          padding: 48px 20px 64px;
          background: #101826;
          color: #eef1f7;
          font-family: 'Inter', -apple-system, sans-serif;
        }
        .container {
          max-width: 640px;
          margin: 0 auto;
        }
        .back-link {
          display: inline-block;
          color: #5fb8d6;
          text-decoration: none;
          font-size: 0.9rem;
          margin-bottom: 24px;
        }
        h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          margin: 0 0 4px;
        }
        .updated {
          color: #94a3bf;
          font-size: 0.85rem;
          margin: 0 0 24px;
        }
        h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.15rem;
          margin: 28px 0 8px;
        }
        p {
          color: #c3ccdd;
          line-height: 1.65;
          font-size: 0.95rem;
        }
        a {
          color: #5fb8d6;
        }
      `}</style>
    </main>
  );
}
