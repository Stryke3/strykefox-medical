import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/soc13/deal-qa"],
    },
    sitemap: "https://strykefox.com/sitemap.xml",
    host: "https://strykefox.com",
  };
}
