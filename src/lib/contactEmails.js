function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatMessage(message) {
  return escapeHtml(message).replaceAll("\n", "<br>");
}

/** Confirmation email sent to the visitor. */
export function visitorConfirmationEmail({ name, message }) {
  const safeName = escapeHtml(name);
  const safeMessage = formatMessage(message);

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>He recibido tu mensaje</title>
</head>
<body style="margin:0;padding:0;background-color:#FAF3EE;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#FAF3EE;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;background-color:#FFFDFC;border-radius:18px;border:1px solid rgba(47,41,41,0.08);overflow:hidden;">
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#C98F91,#E7C4C4,#5F7D6A);font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:36px 32px 28px;font-family:Georgia,'Times New Roman',serif;color:#2A2323;">
              <p style="margin:0 0 6px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#5F7D6A;font-weight:600;">
                Mónica Saiz
              </p>
              <h1 style="margin:0 0 18px;font-size:28px;line-height:1.25;font-weight:600;color:#2A2323;">
                Gracias por escribir
              </h1>
              <p style="margin:0 0 22px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#6E6161;">
                Hola ${safeName}, he recibido tu mensaje. Te respondo pronto.
              </p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#FFF8F4;border-radius:14px;border:1px solid rgba(201,143,145,0.28);">
                <tr>
                  <td style="padding:18px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.65;color:#2A2323;">
                    <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#C98F91;font-weight:600;">
                      Tu mensaje
                    </p>
                    <p style="margin:0;">${safeMessage}</p>
                  </td>
                </tr>
              </table>
              <p style="margin:26px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:1.4;color:#2A2323;">
                Bienvenida a mi casa.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 32px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:13px;line-height:1.5;color:#6E6161;">
              <p style="margin:0;padding-top:18px;border-top:1px solid rgba(201,143,145,0.35);">
                tecnología · creación · sentido
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();
}

/** Notification email sent to Mónica. */
export function ownerNotificationEmail({ name, email, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = formatMessage(message);

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo mensaje desde el hub</title>
</head>
<body style="margin:0;padding:0;background-color:#FAF3EE;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#FAF3EE;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;background-color:#FFFDFC;border-radius:18px;border:1px solid rgba(47,41,41,0.08);">
          <tr>
            <td style="height:4px;background:#5F7D6A;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:32px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#2A2323;">
              <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#5F7D6A;font-weight:600;">
                Monica Hub
              </p>
              <h1 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:24px;line-height:1.3;font-weight:600;">
                Nuevo mensaje
              </h1>
              <p style="margin:0 0 8px;font-size:15px;line-height:1.5;color:#6E6161;">
                <strong style="color:#2A2323;">Nombre:</strong> ${safeName}
              </p>
              <p style="margin:0 0 18px;font-size:15px;line-height:1.5;color:#6E6161;">
                <strong style="color:#2A2323;">Email:</strong>
                <a href="mailto:${safeEmail}" style="color:#5F7D6A;text-decoration:none;">${safeEmail}</a>
              </p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#FFF8F4;border-radius:14px;border:1px solid rgba(201,143,145,0.28);">
                <tr>
                  <td style="padding:18px 20px;font-size:15px;line-height:1.65;color:#2A2323;">
                    ${safeMessage}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();
}
