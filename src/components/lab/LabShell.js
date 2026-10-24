"use client";

import Link from "next/link";
import styles from "@/app/lab/lab.module.css";

export default function LabShell({ children, wide = false }) {
  return (
    <div className={wide ? `${styles.shell} ${styles.shellWide}` : styles.shell}>
      {wide ? null : (
        <header className={styles.topBar}>
          <p className={styles.brand}>
            <Link href="/lab">Lab</Link>
          </p>
        </header>
      )}
      {children}
    </div>
  );
}
