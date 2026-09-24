import Head from "next/head";

const SITE_URL = "https://unityhub-sigma.vercel.app";

const resources = [
  {
    title: "Unity Asset Store",
    domain: "assetstore.unity.com",
    url: "https://assetstore.unity.com/3d?price=0-0",
    desc: "Official store — free assets are already Unity-ready: prefabs, materials, and scripts included.",
  },
  {
    title: "Kenney.nl",
    domain: "kenney.nl",
    url: "https://kenney.nl/assets",
    desc: "Free 2D & 3D low-poly game asset packs, well suited to mobile and casual games. CC0 licensed.",
  },
  {
    title: "Poly Haven",
    domain: "polyhaven.com",
    url: "https://polyhaven.com/models",
    desc: "Free high-quality models, textures, and HDRIs. Fully CC0 — no attribution required.",
  },
  {
    title: "Quaternius",
    domain: "quaternius.com",
    url: "https://quaternius.com/",
    desc: "Free stylized, low-poly model packs, popular for indie and casual game development.",
  },
  {
    title: "Sketchfab",
    domain: "sketchfab.com",
    url: "https://sketchfab.com/3d-models?features=downloadable&sort_by=-likeCount",
    desc: "Huge community library — filter by downloadable and CC license, export as FBX or OBJ.",
  },
];

const SUBMIT_EMAIL =
  "mailto:sureshwsc174@gmail.com?subject=Unity%203D%20Model%20Hub%20-%20New%20Resource&body=Resource%20name%3A%0AURL%3A%0AWhy%20it%27s%20useful%3A";

export default function Home() {
  return (
    <main className="page">
      <Head>
        <title>Free Unity 3D Model Hub — Assets, Rigs &amp; Props</title>
        <meta
          name="description"
          content="A curated list of free 3D model and asset sources for Unity: Unity Asset Store, Kenney, Poly Haven, Quaternius, and Sketchfab. Built for indie and mobile game developers."
        />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content="Free Unity 3D Model Hub" />
        <meta
          property="og:description"
          content="Free rigs, props, and environments for indie and mobile developers. All the best free Unity asset sources in one place."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Free Unity 3D Model Hub" />
        <meta
          name="twitter:description"
          content="Free rigs, props, and environments for indie and mobile Unity developers."
        />

        {/* TODO: after AdSense approval, replace ca-pub-XXXXXXXXXXXXXXXX with your real Publisher ID */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3126290233072035"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="container">
        <header className="header">
          <h1>Unity 3D Model Hub</h1>
          <p>
            Free rigs, props, and environments for indie and mobile developers
            who'd rather ship a game than model a tree.
          </p>
        </header>

        <a href={SUBMIT_EMAIL} className="submit-block">
          <span className="submit-title">Add a resource, or start a thread</span>
          <span className="submit-desc">
            Found a site that belongs here? Email it in and it'll be added.
          </span>
        </a>

        <div className="grid">
          {resources.map((r) => (
            <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className="card">
              <div className="card-title">{r.title}</div>
              <div className="card-domain">{r.domain}</div>
              <div className="card-desc">{r.desc}</div>
            </a>
          ))}
        </div>

        {/* TODO: after creating an ad unit in AdSense, replace data-ad-slot="0000000000" with your real slot ID */}
        <div className="ad-slot">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="0000000000"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>

        <section className="affiliate-section">
          <h2>Paid picks worth it</h2>
          <p className="section-intro">
            Free assets get you far — these are paid packs worth the money if you want to go further.
          </p>
          <div className="affiliate-grid">
            <a
              href="https://assetstore.unity.com/3d"
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="affiliate-card"
            >
              <div className="card-title">Unity Asset Store — Paid 3D</div>
              <div className="card-desc">Full catalog of paid models, environments, and character packs.</div>
            </a>
            <a
              href="https://sketchfab.com/store"
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="affiliate-card"
            >
              <div className="card-title">Sketchfab Store</div>
              <div className="card-desc">Premium models from independent 3D artists, ready to license.</div>
            </a>
          </div>
        </section>

        <section className="sponsor-section">
          <h2>Get your asset pack featured</h2>
          <p className="section-intro">
            Have a Unity asset pack or plugin? Reach indie and mobile developers by sponsoring a listing here.
          </p>
          <a
            href="mailto:sureshwsc174@gmail.com?subject=Sponsor%20a%20listing%20-%20Unity%203D%20Model%20Hub"
            className="sponsor-block"
          >
            Contact for sponsorship
          </a>
        </section>

        <section className="games-section">
          <h2>Games built with these assets</h2>
          <p className="games-intro">
            A few casual Android games in the works, made using resources like these.
          </p>
          <div className="games-grid">
            <a href="#" className="game-card">
              <div className="game-title">Snakes &amp; Ladders</div>
              <div className="game-status">Coming soon to Play Store</div>
            </a>
            <a href="#" className="game-card">
              <div className="game-title">Mahjong Solitaire</div>
              <div className="game-status">In development</div>
            </a>
            <a href="#" className="game-card">
              <div className="game-title">Word Connect</div>
              <div className="game-status">In development</div>
            </a>
          </div>
        </section>

        <footer>Prefer FBX or glTF format for the cleanest Unity import.</footer>
      </div>

      <style jsx global>{`
        .page {
          min-height: 100vh;
          padding: 48px 20px 64px;
          background-image:
            repeating-linear-gradient(to right, rgba(255,255,255,0.035) 0 1px, transparent 1px 48px),
            repeating-linear-gradient(to bottom, rgba(255,255,255,0.035) 0 1px, transparent 1px 48px);
        }
        .container {
          max-width: 760px;
          margin: 0 auto;
        }
        .header {
          margin-bottom: 32px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 24px;
        }
        .header h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(1.9rem, 5vw, 2.6rem);
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }
        .header p {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.55;
          max-width: 52ch;
          margin: 0;
        }
        .submit-block {
          display: block;
          background: var(--accent);
          color: var(--accent-ink);
          border-radius: 6px;
          padding: 18px 20px;
          text-decoration: none;
          margin-bottom: 28px;
        }
        .submit-title {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 4px;
        }
        .submit-desc {
          display: block;
          font-size: 0.9rem;
          opacity: 0.85;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 14px;
        }
        .card {
          display: block;
          background: var(--surface);
          border: 1px solid var(--border);
          border-left: 3px solid var(--accent-2);
          border-radius: 4px;
          padding: 16px 18px;
          text-decoration: none;
          color: var(--text);
        }
        .card:hover {
          border-left-color: var(--accent);
        }
        .card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 2px;
        }
        .card-domain {
          font-family: monospace;
          font-size: 0.78rem;
          color: var(--accent-2);
          margin-bottom: 8px;
        }
        .card-desc {
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--text-muted);
        }
        .ad-slot {
          margin: 28px 0;
          padding: 8px;
          border: 1px dashed var(--border);
          border-radius: 4px;
          text-align: center;
          min-height: 90px;
        }
        .affiliate-section,
        .sponsor-section {
          margin-top: 36px;
          padding-top: 28px;
          border-top: 1px solid var(--border);
        }
        .affiliate-section h2,
        .sponsor-section h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 1.3rem;
          margin: 0 0 6px;
        }
        .section-intro {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin: 0 0 16px;
        }
        .affiliate-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 12px;
        }
        .affiliate-card {
          display: block;
          background: var(--surface);
          border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 4px;
          padding: 14px 16px;
          text-decoration: none;
          color: var(--text);
        }
        .sponsor-block {
          display: inline-block;
          background: var(--surface);
          border: 1px solid var(--accent-2);
          color: var(--accent-2);
          border-radius: 6px;
          padding: 10px 18px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .games-section {
          margin-top: 36px;
          padding-top: 28px;
          border-top: 1px solid var(--border);
        }
        .games-section h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 1.3rem;
          margin: 0 0 6px;
        }
        .games-intro {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin: 0 0 16px;
        }
        .games-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }
        .game-card {
          display: block;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 14px 16px;
          text-decoration: none;
          color: var(--text);
        }
        .game-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.98rem;
          margin-bottom: 3px;
        }
        .game-status {
          font-size: 0.8rem;
          color: var(--accent-2);
        }
        footer {
          margin-top: 32px;
          font-size: 0.82rem;
          color: var(--text-muted);
          border-top: 1px solid var(--border);
          padding-top: 16px;
        }
      `}</style>
    </main>
  );
}
