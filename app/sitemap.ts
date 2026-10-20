import type { MetadataRoute } from "next";
import { blogs, SITE_URL } from "./data/blogs";
import { services } from "./data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["", "/services", "/about", "/blogs", "/contact"];

  return [
    ...staticPaths.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      priority: path === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...blogs.map((b) => ({
      url: `${SITE_URL}${b.canonicalPath}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}
