import assert from "node:assert/strict";
import { test } from "node:test";
import { ForwardEmailError, sendEmail } from "./forwardEmail.js";

function jsonResponse(status, payload) {
  return {
    ok: status >= 200 && status < 300,
    status,
    statusText: status === 200 ? "OK" : "Error",
    async json() {
      return payload;
    },
  };
}

test("sends the message to Forward Email with token basic auth", async () => {
  const calls = [];
  const result = await sendEmail(
    {
      from: "Mónica Saiz <hola@monicasaiz.com>",
      to: "moni.sm@gmail.com",
      replyTo: "visitante@example.com",
      subject: "Hola",
      html: "<p>Hola & adiós</p>",
    },
    {
      token: "fe_test_token",
      fetchImpl: async (url, init) => {
        calls.push({ url, init });
        return jsonResponse(200, { id: "msg_1", status: "queued" });
      },
    }
  );

  assert.equal(result.id, "msg_1");
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "https://api.forwardemail.net/v1/emails");
  assert.equal(calls[0].init.method, "POST");
  assert.equal(
    calls[0].init.headers.Authorization,
    `Basic ${Buffer.from("fe_test_token:").toString("base64")}`
  );

  const sent = new URLSearchParams(calls[0].init.body);
  assert.equal(sent.get("from"), "Mónica Saiz <hola@monicasaiz.com>");
  assert.equal(sent.get("to"), "moni.sm@gmail.com");
  assert.equal(sent.get("replyTo"), "visitante@example.com");
  assert.equal(sent.get("subject"), "Hola");
  assert.equal(sent.get("html"), "<p>Hola & adiós</p>");
});

test("refuses to send when the token is missing", async () => {
  await assert.rejects(
    () =>
      sendEmail(
        {
          from: "Mónica Saiz <hola@monicasaiz.com>",
          to: "moni.sm@gmail.com",
          subject: "Hola",
          html: "<p>Hola</p>",
        },
        { token: "", fetchImpl: async () => { throw new Error("should not fetch"); } }
      ),
    (error) => {
      assert.ok(error instanceof ForwardEmailError);
      assert.equal(error.code, "not_configured");
      return true;
    }
  );
});

test("surfaces a provider failure without treating it as sent", async () => {
  await assert.rejects(
    () =>
      sendEmail(
        {
          from: "Mónica Saiz <hola@monicasaiz.com>",
          to: "moni.sm@gmail.com",
          subject: "Hola",
          html: "<p>Hola</p>",
        },
        {
          token: "fe_test_token",
          fetchImpl: async () =>
            jsonResponse(401, { message: "Invalid API token" }),
        }
      ),
    (error) => {
      assert.ok(error instanceof ForwardEmailError);
      assert.equal(error.code, "send_failed");
      assert.equal(error.status, 401);
      assert.equal(error.message, "Invalid API token");
      return true;
    }
  );
});
