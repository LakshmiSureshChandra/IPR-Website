import { MetadataRoute } from "next";

const BASE = "https://iprarchitects.in";

/* Four routes is the whole site: the disciplines live in a section of the home
   page and every project on /projects, so neither has a URL of its own. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];
}
