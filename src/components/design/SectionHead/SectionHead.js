import styles from "./SectionHead.module.css";

export default function SectionHead({
  title, 
  subtitle
}) {
  return (
    <div className={styles.sectionHead}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      <p className={styles.sectionSubtitle}>
        {subtitle}
      </p>
    </div>
  );
}
