import {
  visitorConfirmationEmail,
  ownerNotificationEmail,
} from "@/lib/contactEmails";
import { ForwardEmailError, sendEmail } from "@/lib/forwardEmail";

const DEFAULT_TO = "moni.sm@gmail.com";
const DEFAULT_FROM = "Mónica Saiz <hola@monicasaiz.com>";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "invalid_input" },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || DEFAULT_TO;
    const from = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM;

    const toMe = await sendEmail({
      from,
      to,
      replyTo: email,
      subject: `Nuevo mensaje desde el hub · ${name}`,
      html: ownerNotificationEmail({ name, email, message }),
    });

    await sendEmail({
      from,
      to: email,
      replyTo: to,
      subject: "He recibido tu mensaje · Mónica Saiz",
      html: visitorConfirmationEmail({ name, message }),
    });

    return Response.json({ success: true, id: toMe.id });
  } catch (error) {
    if (error instanceof ForwardEmailError && error.code === "not_configured") {
      console.error("FORWARDEMAIL_API_TOKEN is missing");
      return Response.json(
        { success: false, error: "not_configured" },
        { status: 500 }
      );
    }

    if (error instanceof ForwardEmailError) {
      console.error("Forward Email error:", error.status, error.message);
      return Response.json(
        { success: false, error: "send_failed" },
        { status: 502 }
      );
    }

    console.error("Contact API error:", error);
    return Response.json(
      { success: false, error: "server_error" },
      { status: 500 }
    );
  }
}
