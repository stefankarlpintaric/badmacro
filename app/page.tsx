import Image from "next/image";

const sections = [
  {
    id: "01",
    title: "Music",
    links: ["Apple Music", "Spotify", "YouTube"]
  },
  {
    id: "02",
    title: "Booking",
    links: ["Inquiries", "Availability", "Contact"]
  },
  {
    id: "03",
    title: "Signals",
    links: ["Signal 01", "Signal 02", "Signal 03"]
  },
  {
    id: "04",
    title: "System",
    links: ["Updates", "Archive", "Process"]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-paper">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-4 py-4 md:px-8">
        <header className="mb-4 border border-zinc-900 bg-black px-5 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-display text-4xl uppercase tracking-widest md:text-5xl">
              Bad Macro
            </h1>
            <span className="text-signal text-xl">+</span>
          </div>
        </header>

        <section className="relative mb-4 overflow-hidden border border-zinc-900">
          <Image
            src="/badmacro-hero.png"
            alt="Cinematic corridor visual for Bad Macro"
            width={1600}
            height={900}
            className="h-[260px] w-full object-cover md:h-[420px]"
            priority
          />
        </section>

        <section className="grid grid-cols-1 border border-zinc-900 bg-black md:grid-cols-5">
          {sections.map((section) => (
            <article
              key={section.id}
              className="border-b border-zinc-900 p-5 last:border-b-0 md:border-b-0 md:border-r last:md:border-r-0"
            >
              <p className="text-signal mb-2 text-sm font-semibold tracking-[0.18em]">
                {section.id}
              </p>
              <h2 className="font-display mb-4 text-4xl uppercase text-signal">
                {section.title}
              </h2>
              <ul className="space-y-1 text-sm uppercase tracking-[0.16em] text-zinc-300">
                {section.links.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-signal mt-4 text-lg">→</p>
            </article>
          ))}

          <article className="flex items-end justify-between p-5">
            <h2 className="font-display text-4xl uppercase text-signal">
              Bad Macro
            </h2>
            <span className="text-signal text-2xl">+</span>
          </article>
        </section>
      </div>
    </main>
  );
}
