import { NextResponse } from "next/server";

/** Las direcciones viejas de /lab/login abren el Lab. No hay contraseña. */
export function proxy(request) {
  const url = request.nextUrl.clone();
  url.pathname = "/lab";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/lab/login",
};
