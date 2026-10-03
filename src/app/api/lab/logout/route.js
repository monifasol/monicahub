import { cookies } from "next/headers";
import { LAB_COOKIE, LAB_COOKIE_PATH } from "@/lib/labAuth";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.set(LAB_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: LAB_COOKIE_PATH,
    maxAge: 0,
  });

  return Response.json({ success: true });
}
