/** Shared /lab gate: cookie name, TTL, and HMAC helpers (Edge + Node). */

export const LAB_COOKIE = "lab_session";
export const LAB_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days
export const LAB_COOKIE_PATH = "/lab";

function getPassword() {
  return process.env.LAB_PASSWORD || "";
}

function getSecret() {
  return process.env.LAB_SECRET || process.env.LAB_PASSWORD || "";
}

export function isLabAuthConfigured() {
  return Boolean(getPassword() && getSecret());
}

function toBase64Url(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function timingSafeEqualString(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  const encoder = new TextEncoder();
  const left = encoder.encode(a);
  const right = encoder.encode(b);
  const len = Math.max(left.byteLength, right.byteLength);
  let diff = left.byteLength ^ right.byteLength;
  for (let i = 0; i < len; i += 1) {
    diff |= (left[i] || 0) ^ (right[i] || 0);
  }
  return diff === 0;
}

async function hmacSha256(message, secret) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(message));
  return toBase64Url(signature);
}

export async function passwordMatches(candidate) {
  const expected = getPassword();
  if (!expected) return false;
  return timingSafeEqualString(String(candidate || ""), expected);
}

export async function createLabSessionToken() {
  const secret = getSecret();
  if (!secret) throw new Error("LAB_SECRET/LAB_PASSWORD missing");
  const exp = Date.now() + LAB_MAX_AGE_SECONDS * 1000;
  const payload = String(exp);
  const signature = await hmacSha256(payload, secret);
  return `${payload}.${signature}`;
}

export async function verifyLabSessionToken(token) {
  const secret = getSecret();
  if (!secret || !token || typeof token !== "string") return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = await hmacSha256(payload, secret);
  if (!timingSafeEqualString(signature, expected)) return false;

  const exp = Number(payload);
  if (!Number.isFinite(exp) || Date.now() > exp) return false;
  return true;
}

export function labSessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: LAB_COOKIE_PATH,
    maxAge: LAB_MAX_AGE_SECONDS,
  };
}
