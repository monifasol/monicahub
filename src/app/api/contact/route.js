import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return Response.json({ success: false, error: "not_configured" }, { status: 500 });
    }

    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !message) {
      return Response.json({ success: false, error: "invalid_input" }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL || "moni.sm@gmail.com";
    const from =
      process.env.CONTACT_FROM_EMAIL ||
      "Mónica Saiz <hola@vecinadigital.com>";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br>");

    // 1. Email para mí
    const toMe = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nuevo mensaje desde el hub ${name}`,
      html: `
        <h2>Nuevo mensaje</h2>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (toMe.error) {
      console.error("Resend error (to me):", toMe.error);
      return Response.json({ success: false, error: toMe.error }, { status: 502 });
    }

    // 2. Copia para el usuario
    const toUser = await resend.emails.send({
      from,
      to: email,
      replyTo: to,
      subject: "He recibido tu mensaje · Mónica Saiz",
      html: `
        <h2>Gracias por escribir</h2>
        <p>Hola ${safeName}, he recibido tu mensaje:</p>
        <p>${safeMessage}</p>
        <p>Te respondo pronto.</p>
      `,
    });

    if (toUser.error) {
      console.error("Resend error (to user):", toUser.error);
      return Response.json({ success: false, error: toUser.error }, { status: 502 });
    }

    return Response.json({ success: true, id: toMe.data?.id });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json({ success: false, error: "server_error" }, { status: 500 });
  }
}
