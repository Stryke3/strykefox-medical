export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/login",
          "/admin",
          "/_next/",
          "/spear/",
          "/spear/cases",
          "/spear/intake",
          "/spear/fulfillment",
          "/spear/revenue-support",
          "/spear/settings",
          "/spear/trident",
          "/spear/poseidon",
        ],
      },
    ],
    sitemap: "https://www.strykefox.com/sitemap.xml",
  };
}
