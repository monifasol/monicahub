import { NextResponse } from "next/server";
import {
  LAB_COOKIE,
  isLabAuthConfigured,
  verifyLabSessionToken,
} from "@/lib/labAuth";

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/lab")) {
    return NextResponse.next();
  }

  const isLogin = pathname === "/lab/login";

  if (!isLabAuthConfigured()) {
    if (isLogin) return NextResponse.next();
    const url = request.nextUrl.clone();
    url.pathname = "/lab/login";
    url.searchParams.set("error", "not_configured");
    return NextResponse.redirect(url);
  }

  const token = request.cookies.get(LAB_COOKIE)?.value;
  const ok = await verifyLabSessionToken(token);

  if (isLogin) {
    if (ok) {
      const url = request.nextUrl.clone();
      url.pathname = "/lab";
      url.search = "";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (ok) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/lab/login";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/lab", "/lab/:path*"],
};
