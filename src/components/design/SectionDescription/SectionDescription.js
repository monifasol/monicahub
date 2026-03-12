import styles from "./SectionDescription.module.css";

export default function SectionDescription({
  title, 
  variant,
  children
}) {
  return (
      <div className={`${styles.sectionDescription} ${variant}`}>
        <p className={styles.title}>{title}</p>
        <p>{children}</p>
      </div>
  );
}