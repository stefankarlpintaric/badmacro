import Image from "next/image";
import Link from "next/link";
import { sections } from "./siteMap";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-paper">
      <Image
        src="/badmacro-background.png"
        alt="Bad Macro cinematic corridor background"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative flex min-h-screen flex-col justify-between">
        <header className="border-b border-zinc-900/70 bg-black/90 px-4 py-4 md:px-8">
          <Link
            href="/"
            aria-label="Go to Bad Macro home"
            className="inline-block transition-opacity hover:opacity-90"
          >
            <span className="font-display text-5xl uppercase tracking-[0.06em] text-paper md:text-6xl">
              Bad Macro
            </span>
          </Link>
        </header>

        <section className="grid grid-cols-1 border-t border-zinc-900/70 bg-black/90 md:grid-cols-5">
          {sections.map((section) => (
            <article
              key={section.id}
              className="border-b border-zinc-900/70 p-5 last:border-b-0 md:border-b-0 md:border-r"
            >
              <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-signal">
                {section.id}
              </p>
              <Link href={`/${section.slug}`} className="block">
                <h2 className="font-display mb-4 text-4xl uppercase text-signal">
                  {section.title}
                </h2>
              </Link>
              <ul className="space-y-1 text-sm uppercase tracking-[0.16em] text-zinc-200">
                {section.links.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/${section.slug}/${item.slug}`}
                      className="transition-colors hover:text-signal"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-lg text-signal">→</p>
            </article>
          ))}

          <article className="flex items-end justify-between p-5">
            <Link href="/" className="font-display text-4xl uppercase text-signal">
              Bad Macro
            </Link>
            <span className="text-2xl text-signal">+</span>
          </article>
        </section>
      </div>
    </main>
  );
}
