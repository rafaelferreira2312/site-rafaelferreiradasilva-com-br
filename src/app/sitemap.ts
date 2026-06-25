import type { MetadataRoute } from "next";
import { SITE_URL, SITEMAP_ROUTES } from "@/data/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITEMAP_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "/" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
