import Link from "next/link";
import { notFound } from "next/navigation";
import { getSection } from "../siteMap";

type SectionPageProps = {
  params: Promise<{ section: string }>;
};

export default async function SectionPage({ params }: SectionPageProps) {
  const { section: sectionSlug } = await params;
  const section = getSection(sectionSlug);

  if (!section) notFound();

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-16 text-paper">
      <div className="w-full max-w-3xl border border-zinc-800 bg-zinc-950/90 p-8 md:p-12">
        <p className="mb-2 text-sm tracking-[0.2em] text-signal">{section.id}</p>
        <h1 className="font-display mb-4 text-5xl uppercase text-signal">
          {section.title}
        </h1>
        <p className="mb-8 text-zinc-300">
          This is a placeholder page for {section.title}. Replace with live
          content when ready.
        </p>
        <ul className="mb-8 space-y-2 text-sm uppercase tracking-[0.16em] text-zinc-200">
          {section.links.map((link) => (
            <li key={link.slug}>
              <Link href={`/${section.slug}/${link.slug}`} className="hover:text-signal">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="text-signal hover:text-paper">
          ← Return Home
        </Link>
      </div>
    </main>
  );
}
