import styles from "./RotatingFloralRing.module.css";

export default function RotatingFloralRing() {
  return (
      <div id="loader" className={styles.loading}>
        <div className={styles.loaderContainer}>
          <div className={styles.ring}></div>
          <div className={styles.ring}></div>
          <div className={styles.ring}></div>
          <p className={styles.loadingText}>Loading . . .</p>
        </div>
      </div>
  );
}