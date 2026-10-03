"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "@/app/lab/lab.module.css";

const ERROR_COPY = {
  invalid_password: "Contraseña incorrecta.",
  not_configured:
    "Lab no está configurado. Añade LAB_PASSWORD en las variables de entorno.",
  server_error: "Algo falló. Inténtalo de nuevo.",
};

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/lab";
  const presetError = searchParams.get("error");

  const [password, setPassword] = useState("");
  const [error, setError] = useState(
    presetError ? ERROR_COPY[presetError] || ERROR_COPY.server_error : ""
  );
  const [pending, setPending] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setPending(true);
    setError("");

    try {
      const response = await fetch("/api/lab/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, next }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(ERROR_COPY[data.error] || ERROR_COPY.invalid_password);
        setPending(false);
        return;
      }

      router.replace(data.next || "/lab");
      router.refresh();
    } catch {
      setError(ERROR_COPY.server_error);
      setPending(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.label}>
        Contraseña
        <input
          className={styles.input}
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          autoFocus
        />
      </label>
      {error ? <p className={styles.error}>{error}</p> : null}
      <button className={styles.submit} type="submit" disabled={pending}>
        {pending ? "Entrando…" : "Entrar"}
      </button>
    </form>
  );
}
