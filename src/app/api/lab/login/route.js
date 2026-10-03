import { cookies } from "next/headers";
import {
  LAB_COOKIE,
  createLabSessionToken,
  isLabAuthConfigured,
  labSessionCookieOptions,
  passwordMatches,
} from "@/lib/labAuth";

function safeNextPath(next) {
  if (typeof next !== "string") return "/lab";
  if (!next.startsWith("/lab")) return "/lab";
  if (next.startsWith("//")) return "/lab";
  if (next.includes("://")) return "/lab";
  return next;
}

export async function POST(request) {
  try {
    if (!isLabAuthConfigured()) {
      return Response.json(
        { success: false, error: "not_configured" },
        { status: 503 }
      );
    }

    const body = await request.json();
    const password = String(body?.password || "");
    const next = safeNextPath(body?.next);

    if (!(await passwordMatches(password))) {
      return Response.json(
        { success: false, error: "invalid_password" },
        { status: 401 }
      );
    }

    const token = await createLabSessionToken();
    const cookieStore = await cookies();
    cookieStore.set(LAB_COOKIE, token, labSessionCookieOptions());

    return Response.json({ success: true, next });
  } catch (error) {
    console.error("lab login failed", error);
    return Response.json(
      { success: false, error: "server_error" },
      { status: 500 }
    );
  }
}
