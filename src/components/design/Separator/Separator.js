import styles from "./Separator.module.css";

export default function Separator() {
  return (
    <img
      src="/design/img/canvas/separator.png"
      alt=""
      className={styles.separator}
      aria-hidden="true"
    />
  );
}