const LOCKED_HOMEPAGE_ORIGIN =
  "https://strykefox-medical.vercel.app";

const NORTHSTAR_ORIGIN = "https://sfm-northstar.vercel.app";

// Paths on strykefox.com that hard-redirect to their standalone subdomain
const REDIRECTS = [
  { prefix: "/carepath", destination: "https://carepath.strykefox.com" },
  { prefix: "/mommy-care-kit", destination: "https://mommycarekit.strykefox.com" },
  { prefix: "/mommycare", destination: "https://mommycarekit.strykefox.com" },
  { prefix: "/northstar-surgical", destination: "https://northstarsurgical.strykefox.com" },
  { prefix: "/northstar", destination: "https://northstarsurgical.strykefox.com" },
  { prefix: "/nsi", destination: "https://northstarsurgical.strykefox.com" },
];

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // northstarsurgical.strykefox.com — proxy to sfm-northstar
    if (url.hostname === "northstarsurgical.strykefox.com") {
      return proxyTo(request, NORTHSTAR_ORIGIN, url.pathname);
    }

    // strykefox.com path redirects
    const redirect = REDIRECTS.find(({ prefix }) => matchesPrefix(url.pathname, prefix));
    if (redirect) {
      const rest = url.pathname.slice(redirect.prefix.length);
      return Response.redirect(redirect.destination + rest + url.search, 308);
    }

    // Everything else → mbnaupoug locked homepage
    return proxyTo(request, LOCKED_HOMEPAGE_ORIGIN, url.pathname);
  },
};

function matchesPrefix(pathname, prefix) {
  return pathname === prefix || pathname.startsWith(`${prefix}/`);
}

async function proxyTo(request, origin, pathname) {
  const url = new URL(request.url);
  const upstream = new URL(origin);
  upstream.pathname = pathname || "/";
  upstream.search = url.search;

  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.set("x-forwarded-host", url.host);
  headers.set("x-forwarded-proto", url.protocol.replace(":", ""));

  return fetch(
    new Request(upstream.toString(), {
      method: request.method,
      headers,
      body:
        request.method !== "GET" && request.method !== "HEAD"
          ? request.body
          : undefined,
      redirect: "follow",
    }),
  );
}
