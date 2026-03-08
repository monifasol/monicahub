import styles from "./HomeIntro.module.css";

export default function HomeIntro() {
  return (
    <header className={styles.wrap}>
      <p className={styles.intro} aria-label="Intro">
        Aquí conviven la tecnología, la sensibilidad
        y las cosas hechas con intención.<br />

        Me gustan las cosas que se entienden sin explicarse.<br />
        Trabajo mejor cuando hay silencio y sentido.<br />
        Creo proyectos para personas, no para métricas.<br /><br />
      </p>

      <div className={styles.introEnd}></div>

      <div className={styles.welcome}>
        Bienvenida a mi casa.
      </div>

      <p className={styles.intro}>
        Entra y bichea por donde quieras.
      </p>

    </header>
  );
}