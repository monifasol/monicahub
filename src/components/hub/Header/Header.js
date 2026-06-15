import styles from "./Header.module.css";
import Image from "next/image";

export default function Header(){
  return (
    <header className={styles.header}>

      <Image
        src="/monica-avatar.png"
        alt="Monica avatar"
        className={styles.avatar}
        width={230}
        height={230}
      />
      
      <h1 className={styles.name}>Mónica Saiz</h1>

      <p className={styles.tagline}>
        creación · tecnología · sensibilidad · propósito · conexión
      </p>
      
    </header>
  );
}