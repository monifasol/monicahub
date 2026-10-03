"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "@/app/lab/lab.module.css";

export default function LabShell({ children, wide = false }) {
  const router = useRouter();

  async function logout() {
    await fetch("/api/lab/logout", { method: "POST" });
    router.replace("/lab/login");
    router.refresh();
  }

  return (
    <div className={wide ? `${styles.shell} ${styles.shellWide}` : styles.shell}>
      <header className={styles.topBar}>
        <p className={styles.brand}>
          <Link href="/lab">Lab</Link>
        </p>
        <button type="button" className={styles.logout} onClick={logout}>
          Salir
        </button>
      </header>
      {children}
    </div>
  );
}
