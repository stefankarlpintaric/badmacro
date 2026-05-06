import Image from "next/image";
import Link from "next/link";
import { Bungee } from "next/font/google";
import { Bowlby_One_SC } from "next/font/google";
import { sections } from "./siteMap";

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400"
});

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  weight: "400"
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-paper">
      <header className="border-b border-zinc-900/80 bg-black px-4 py-4 md:px-8">
        <Link
          href="/"
          aria-label="Go to Bad Macro home"
          className={`${bowlby.className} inline-block text-5xl uppercase tracking-[0.04em] text-paper transition-opacity hover:opacity-90 md:text-6xl`}
        >
          Bad Macro
        </Link>
      </header>

      <section className="relative h-[46vh] min-h-0 w-full overflow-hidden sm:h-[56vh] md:h-[62vh] md:min-h-[420px]">
        <Image
          src="/badmacro-background.png"
          alt="Bad Macro cinematic corridor background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
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
              <h2 className={`${bungee.className} mb-4 text-4xl uppercase text-signal`}>
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

        <article className="hidden items-end justify-between p-5 md:flex">
          <span className={`${bungee.className} text-4xl uppercase text-signal`}>
            Bad Macro
          </span>
          <span className="text-2xl text-signal">+</span>
        </article>
      </section>
    </main>
  );
}
