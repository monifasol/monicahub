import styles from "./Section.module.css";

export default function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <div className={styles.titleRow}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.line} aria-hidden="true" />
      </div>

      <div>{children}</div>
    </section>
  );
}