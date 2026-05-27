import { withAuth } from "next-auth/middleware";
import type { NextRequestWithAuth } from "next-auth/middleware";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const PUBLIC_REDIRECTS = [
  { prefix: "/carepath", destination: "https://carepath.strykefox.com" },
  { prefix: "/mommy-care-kit", destination: "https://mommycarekit.strykefox.com" },
  { prefix: "/mommycare", destination: "https://mommycarekit.strykefox.com" },
  { prefix: "/northstar-surgical-innovations", destination: "https://sfm-northstar.vercel.app" },
  { prefix: "/northstar-surgical", destination: "https://sfm-northstar.vercel.app" },
  { prefix: "/northstar", destination: "https://sfm-northstar.vercel.app" },
  { prefix: "/nsi", destination: "https://sfm-northstar.vercel.app" },
];

function matchesPrefix(pathname: string, prefix: string) {
  return pathname === prefix || pathname.startsWith(`${prefix}/`);
}

const authMiddleware = withAuth(
  function middleware() {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/login",
    },
  }
);

export default function middleware(request: NextRequest, event: NextFetchEvent) {
  const redirect = PUBLIC_REDIRECTS.find(({ prefix }) =>
    matchesPrefix(request.nextUrl.pathname, prefix)
  );

  if (redirect) {
    const destination = new URL(redirect.destination);
    const rest = request.nextUrl.pathname.slice(redirect.prefix.length);
    destination.pathname = `${destination.pathname.replace(/\/$/, "")}${rest || ""}` || "/";
    destination.search = request.nextUrl.search;

    return NextResponse.redirect(destination, 308);
  }

  return authMiddleware(request as NextRequestWithAuth, event);
}

export const config = {
  matcher: [
    "/carepath/:path*",
    "/mommy-care-kit/:path*",
    "/mommycare/:path*",
    "/northstar-surgical-innovations/:path*",
    "/northstar-surgical/:path*",
    "/northstar/:path*",
    "/nsi/:path*",
    "/spear/:path*",
  ],
};
