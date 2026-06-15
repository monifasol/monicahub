import styles from "./HomeIntro.module.css";

export default function HomeIntro() {
  return (

    <div className={styles.wrap}>

      <p className={styles.introText} aria-label="Intro">
        Aquí conviven la tecnología, la sensibilidad
        y las cosas hechas con intención.<br />
        Me interesa especialmente el cruce entre IA, memoria, significado y experiencia humana.
      </p>

      <div className={styles.introSeparator}></div>

      <div className={styles.introWelcome}>
        Bienvenida a mi casa.
      </div>

      <p className={styles.introText}>
        Entra y bichea por donde quieras.
      </p>

    </div>

  );
}