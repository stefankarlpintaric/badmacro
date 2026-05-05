import Image from "next/image";
import Link from "next/link";
import { sections } from "./siteMap";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-paper">
      <section className="relative h-[68vh] min-h-[420px] w-full overflow-hidden">
        <Link
          href="/"
          aria-label="Go to Bad Macro home"
          className="absolute left-[1.8%] top-[1.2%] z-20 block h-[16%] w-[38%] max-h-[98px] max-w-[420px] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
        >
          <span className="sr-only">Bad Macro Home</span>
        </Link>

        <Image
          src="/badmacro-background.png"
          alt="Bad Macro cinematic corridor background"
          fill
          priority
          className="object-cover object-top"
        />
      </section>

      <section className="grid grid-cols-1 border-t border-zinc-900/80 bg-black md:grid-cols-5">
        {sections.map((section) => (
          <article
            key={section.id}
            className="border-b border-zinc-900/80 p-5 last:border-b-0 md:border-b-0 md:border-r"
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
    </main>
  );
}
