export type Section = {
  id: string;
  title: string;
  slug: string;
  links: Array<{ label: string; slug: string; audioSrc?: string }>;
};

export const sections: Section[] = [
  {
    id: "01",
    title: "Music",
    slug: "music",
    links: [
      { label: "Apple Music", slug: "apple-music" },
      { label: "Spotify", slug: "spotify" },
      { label: "YouTube", slug: "youtube" }
    ]
  },
  {
    id: "02",
    title: "Booking",
    slug: "booking",
    links: [
      { label: "Inquiries", slug: "inquiries" },
      { label: "Availability", slug: "availability" },
      { label: "Contact", slug: "contact" }
    ]
  },
  {
    id: "03",
    title: "Signals",
    slug: "signals",
    links: [
      {
        label: "The Lifted",
        slug: "the-lifted-wip",
        audioSrc: "/signals/the-lifted-wip.mp3"
      },
      {
        label: "Fried Chips",
        slug: "fried-chips",
        audioSrc: "/signals/fried-chips.mp3"
      },
      {
        label: "Lotus Flower Final",
        slug: "lotus-flower-final",
        audioSrc: "/signals/lotus-flower-final.mp3"
      }
    ]
  },
  {
    id: "04",
    title: "System",
    slug: "system",
    links: [
      { label: "Updates", slug: "updates" },
      { label: "Archive", slug: "archive" },
      { label: "Process", slug: "process" }
    ]
  }
];

export function getSection(sectionSlug: string) {
  return sections.find((section) => section.slug === sectionSlug);
}

export function getSectionItem(sectionSlug: string, itemSlug: string) {
  const section = getSection(sectionSlug);
  if (!section) return null;

  const item = section.links.find((link) => link.slug === itemSlug);
  if (!item) return null;

  return { section, item };
}
