import Link from "next/link";
import { notFound } from "next/navigation";
import { getSectionItem } from "../../siteMap";

type ItemPageProps = {
  params: Promise<{ section: string; item: string }>;
};

export default async function ItemPage({ params }: ItemPageProps) {
  const { section: sectionSlug, item: itemSlug } = await params;
  const result = getSectionItem(sectionSlug, itemSlug);

  if (!result) notFound();

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-16 text-paper">
      <div className="w-full max-w-3xl border border-zinc-800 bg-zinc-950/90 p-8 md:p-12">
        <p className="mb-2 text-sm tracking-[0.2em] text-signal">
          {result.section.id}
        </p>
        <h1 className="font-display mb-2 text-5xl uppercase text-signal">
          {result.item.label}
        </h1>
        {result.section.slug === "signals" && result.item.audioSrc ? (
          <div className="mb-8">
            <p className="mb-4 text-zinc-300">
              Stream this signal directly from the Bad Macro archive.
            </p>
            <audio controls preload="metadata" className="w-full">
              <source src={result.item.audioSrc} type="audio/mpeg" />
              Your browser does not support audio playback.
            </audio>
          </div>
        ) : (
          <p className="mb-8 text-zinc-300">
            Placeholder route for {result.section.title} / {result.item.label}.
          </p>
        )}
        <div className="flex gap-6 text-sm uppercase tracking-[0.16em]">
          <Link href={`/${result.section.slug}`} className="hover:text-signal">
            ← Back to {result.section.title}
          </Link>
          <Link href="/" className="hover:text-signal">
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
