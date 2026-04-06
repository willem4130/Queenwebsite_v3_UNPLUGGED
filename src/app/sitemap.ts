import type { MetadataRoute } from "next";

const BASE_URL = "https://queenunplugged.nl";
const API_URL =
  "https://dutch-queen-admin.vercel.app/api/bands/the-dutch-queen-unplugged";

const staticEntries: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/#shows`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/#gallery`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/#about`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const res = await fetch(API_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return staticEntries;

    const data = await res.json();
    const upcoming: { id: string; date: string }[] =
      data.shows?.upcoming ?? [];

    const showEntries: MetadataRoute.Sitemap = upcoming.map((show) => ({
      url: `${BASE_URL}/#shows/${show.id}`,
      lastModified: new Date(show.date),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

    return [...staticEntries, ...showEntries];
  } catch {
    return staticEntries;
  }
}
