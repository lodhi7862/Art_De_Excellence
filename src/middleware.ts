import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "@/lib/auth.config";

const { auth } = NextAuth(authConfig);

export default auth((request) => {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.rewrite(new URL("/api/site", request.url));
  }

  const isAdmin = pathname.startsWith("/admin");
  const isLogin = pathname === "/admin/login";
  const loggedIn = Boolean(request.auth);

  if (isAdmin && !isLogin && !loggedIn) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (isLogin && loggedIn) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/", "/admin/:path*"],
};
