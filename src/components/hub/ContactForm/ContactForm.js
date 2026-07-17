"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({ t }) {
  const copy = t.hub.sections.contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("send_failed");
      }

      setName("");
      setEmail("");
      setMessage("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.titleRow}>
        <h2 className={styles.title}>{copy.title}</h2>
        <div className={styles.line} aria-hidden="true" />
      </div>

      <p className={styles.subtitle}>{copy.subtitle}</p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <label className={styles.field}>
          <span className={styles.label}>{copy.name}</span>
          <input
            className={styles.input}
            type="text"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>{copy.email}</span>
          <input
            className={styles.input}
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={200}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>{copy.message}</span>
          <textarea
            className={styles.textarea}
            name="message"
            required
            rows={5}
            maxLength={2000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className={styles.submit}
          disabled={status === "sending"}
        >
          {status === "sending" ? copy.sending : copy.submit}
        </button>

        {status === "success" && (
          <p className={styles.feedbackSuccess} role="status">
            {copy.success}
          </p>
        )}
        {status === "error" && (
          <p className={styles.feedbackError} role="alert">
            {copy.error}
          </p>
        )}
      </form>
    </section>
  );
}
