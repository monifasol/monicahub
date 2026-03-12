import styles from "./SideBar.module.css";
import clsx from "clsx";

export default function SideBar() {
  return (
    <div className={styles.sideBar}>
        <div className={styles.socialMedia}>
          <a className={clsx(styles.icon, styles.medium)} href="http://www.medium.com/@monifasol" target="_blank">
            <img src="/design/img/medium.png" alt="Medium" />
            <div className={clsx(styles.tooltip, styles.medium)}>Writing in Medium</div>
          </a>

          <a className={clsx(styles.icon, styles.instagram)} href="https://www.instagram.com/moni.ca.art/" target="_blank">
            <img src="/design/img/insta.png" alt="Instagram" />
            <div className={clsx(styles.tooltip, styles.instagram)}>Instagram</div>
          </a>
        </div>
    </div>
  );
}
