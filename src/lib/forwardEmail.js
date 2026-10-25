const ENDPOINT = "https://api.forwardemail.net/v1/emails";

export class ForwardEmailError extends Error {
  constructor(message, { code, status } = {}) {
    super(message);
    this.name = "ForwardEmailError";
    this.code = code;
    this.status = status;
  }
}

/**
 * Send one message through Forward Email.
 * Auth is HTTP Basic: API token as username, empty password.
 */
export async function sendEmail(
  { from, to, replyTo, subject, html },
  { fetchImpl = fetch, token = process.env.FORWARDEMAIL_API_TOKEN } = {}
) {
  if (!token) {
    throw new ForwardEmailError("Forward Email is not configured", {
      code: "not_configured",
    });
  }

  const body = new URLSearchParams({ from, to, subject, html });
  if (replyTo) body.set("replyTo", replyTo);

  const response = await fetchImpl(ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${token}:`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    const message =
      (data && (data.message || data.error)) ||
      response.statusText ||
      "send_failed";
    throw new ForwardEmailError(String(message), {
      code: "send_failed",
      status: response.status,
    });
  }

  return data || {};
}
