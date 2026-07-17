import styles from "./Footer.module.css";

export default function Footer({ t }) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.brandLine} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.name}>{t.hub.hero.title}</p>
        <p className={styles.tagline}>{t.hub.hero.values}</p>
        <p className={styles.copy}>© {year}</p>
      </div>
    </footer>
  );
}
