import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <main className="page">
      <Head>
        <title>About — Unity 3D Model Hub</title>
        <meta
          name="description"
          content="Why Unity 3D Model Hub exists: a hand-picked directory of free Unity asset sources for indie and mobile game developers, maintained by a solo developer."
        />
      </Head>
      <div className="container">
        <Link href="/" className="back-link">← Back to Unity 3D Model Hub</Link>

        <h1>About this hub</h1>

        <p>
          I build small Android games as a solo, self-taught developer —
          things like Snakes &amp; Ladders, Mahjong Solitaire, and word
          puzzle games. Every one of them needed 3D models, textures, or
          props at some point, and every time I went looking, the same five
          or six sites kept coming up as the actual reliable ones — buried
          under pages of outdated forum posts and broken links.
        </p>

        <p>
          This page is the list I wished existed when I started: no
          sign-ups, no paywalls, just the free sources that are actually
          worth your time if you're building a Unity game on a budget of
          zero.
        </p>

        <h2>How resources get picked</h2>
        <p>
          Everything listed here is free to use, actively maintained by its
          source (not an abandoned mirror), and either CC0 or has a clear,
          permissive license for game use. If a link ever breaks or a site
          starts charging, it comes down — let me know if you spot one.
        </p>

        <h2>Who's behind this</h2>
        <p>
          One person, building casual mobile games in spare time. No team,
          no company — just sharing what's worked for my own projects.
          Suggestions and corrections are always welcome by email.
        </p>

        <p>
          <a href="mailto:sureshwsc174@gmail.com">sureshwsc174@gmail.com</a>
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
          margin: 0 0 20px;
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
