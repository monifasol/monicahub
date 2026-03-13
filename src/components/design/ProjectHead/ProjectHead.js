import styles from "./ProjectHead.module.css";

export default function ProjectHead({
  title, 
  subtitle
}) {
  return (
    <div className={styles.projectHead}>
      <h3 className={styles.projectTitle}>
        {title}
      </h3>
      <p className={styles.projectSubtitle}>
        {subtitle}
      </p>
    </div>
  );
}