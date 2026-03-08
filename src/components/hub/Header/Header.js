import styles from "./Header.module.css";
import Image from "next/image";

export default function Header(){
  return (
    <header className={styles.header}>
      <Image
        src="/monica-portrait.png"
        alt="Monica portrait"
        className={styles.avatar}
        width={200}
        height={200}
      />

      <h1 className={styles.name}>Mónica Saiz</h1>

      <p className={styles.tagline}>
        creación · intuición · emoción · conexión
      </p>
    </header>
  );
}