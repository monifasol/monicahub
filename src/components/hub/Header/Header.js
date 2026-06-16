import styles from "./Header.module.css";
import Image from "next/image";

export default function Header( { t }){
  
  return (
    <header className={styles.header}>

      <Image
        src="/monica-avatar.png"
        alt="Monica avatar"
        className={styles.avatar}
        width={230}
        height={230}
        loading="eager"
      />
      
      <h1 className={styles.name}>{t.hub.hero.title}</h1>

      <p className={styles.tagline}>
        {t.hub.hero.values}
      </p>
      
    </header>
  );
}
