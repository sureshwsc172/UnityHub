const resources = [
  {
    title: "Unity Asset Store (Free filter)",
    url: "https://assetstore.unity.com/3d?price=0-0",
    desc: "Official store — free assets are already Unity-ready (prefabs, materials, scripts included).",
  },
  {
    title: "Kenney.nl",
    url: "https://kenney.nl/assets",
    desc: "Free 2D & 3D low-poly game asset packs, great for mobile/casual games. CC0 licensed.",
  },
  {
    title: "Poly Haven",
    url: "https://polyhaven.com/models",
    desc: "Free high-quality models, textures & HDRIs. Fully CC0 — no attribution required.",
  },
  {
    title: "Quaternius",
    url: "https://quaternius.com/",
    desc: "Free stylized, low-poly model packs — popular for indie and casual game dev.",
  },
  {
    title: "Sketchfab",
    url: "https://sketchfab.com/3d-models?features=downloadable&sort_by=-likeCount",
    desc: "Huge community library — filter by downloadable + CC license, export as FBX/OBJ.",
  },
];

const SUBMIT_EMAIL =
  "mailto:sureshwsc174@gmail.com?subject=Unity%203D%20Model%20Hub%20-%20New%20Resource&body=Resource%20name%3A%0AURL%3A%0AWhy%20it%27s%20useful%3A";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f5f2] dark:bg-[#16181a] text-[#1c1c1c] dark:text-[#eaeaea] px-4 py-8">
      <header className="max-w-2xl mx-auto text-center mb-7">
        <h1 className="text-2xl font-semibold mb-1">Free Unity 3D Model Hub</h1>
        <p className="text-sm text-[#6b6b6b] dark:text-[#a0a0a0]">
          A single place with links to the best free asset sources for Unity projects.
        </p>
      </header>

      <div className="max-w-2xl mx-auto grid gap-3.5">
        <a
          href={SUBMIT_EMAIL}
          className="block rounded-xl border-2 border-dashed border-[#2d6a4f] dark:border-[#6fd6a3] p-4 text-center hover:opacity-90"
        >
          <div className="font-semibold text-[#2d6a4f] dark:text-[#6fd6a3]">
            ➕ Submit a resource / Join the discussion
          </div>
          <div className="text-sm text-[#6b6b6b] dark:text-[#a0a0a0]">
            Found a great free asset site, or want to chat about it? Email it here and it'll be added to the list.
          </div>
        </a>

        {resources.map((r) => (
          <a
            key={r.url}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-[#e2e0da] dark:border-[#33373a] bg-white dark:bg-[#202325] p-4 hover:border-[#2d6a4f] dark:hover:border-[#6fd6a3]"
          >
            <div className="font-semibold text-[#2d6a4f] dark:text-[#6fd6a3] mb-1">
              {r.title}
            </div>
            <div className="text-sm text-[#6b6b6b] dark:text-[#a0a0a0]">{r.desc}</div>
          </a>
        ))}
      </div>

      <footer className="max-w-2xl mx-auto text-center text-xs text-[#6b6b6b] dark:text-[#a0a0a0] mt-8">
        Tip: prefer FBX or glTF format for the cleanest Unity import.
      </footer>
    </main>
  );
}
