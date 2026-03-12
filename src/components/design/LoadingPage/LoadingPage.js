import styles from "./LoadingPage.module.css";

export default function LoadingPage() {
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