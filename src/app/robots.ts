import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/** robots.txt — allow all crawlers and point to the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
