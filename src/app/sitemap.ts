import type { MetadataRoute } from "next";

const routes = [
  "",
  "/carepath",
  "/spear",
  "/strykepac",
  "/soc13",
  "/maternity",
  "/nsi",
  "/northstar-surgical-innovations",
  "/sensars",
  "/founders",
  "/contact",
  "/adamwstryker",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-04T00:00:00.000Z");

  return routes.map((route) => ({
    url: `https://strykefox.com${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
