import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://leadpowerresource.com";
  const pages = ["", "/about", "/capabilities", "/industries", "/resource-models", "/contact"];

  return pages.map((path, index) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : path === "/contact" ? 0.9 : 0.8,
  }));
}
