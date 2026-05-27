import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.strykefox.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://www.strykefox.com/carepath", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.strykefox.com/northstar-surgical-innovations", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.strykefox.com/soc13", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.strykefox.com/sensars", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.strykefox.com/maternity", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://www.strykefox.com/adamwstryker", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
