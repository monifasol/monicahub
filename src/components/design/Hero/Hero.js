import styles from "./Hero.module.css";

export default function Hero() {

  const buildLetter = (letter) => {
    return(
          <img
            src={`/design/img/the-${letter}.png`}
            alt={`letter ${letter}`}
          />
        );
  }

  return (
    <div className={styles.hero}>

      <div className={`${styles.name} ${styles.overTheFold}`}>

        <div className={styles.letter}>
          { buildLetter("c") }
        </div>
        <div className={styles.letter}>
          { buildLetter("r") }
        </div>
        <div className={styles.letter}>
          { buildLetter("e") }
        </div>
        <div className={styles.letter}>
          { buildLetter("a") }
        </div>
        <div className={`${styles.letter} ${styles.high}`}>
          { buildLetter("t") }
        </div>
        <div className={styles.letter}>
          { buildLetter("e") }
        </div>
      </div>

      <div className={`${styles.motto} ${styles.overTheFold}`}>
        <span className={styles.mottoBgFlower}></span>
        <div className={styles.mottoText}>
            "Being different is just another way of being."
        </div>
        <span className={styles.mottoBgFlower}></span>
      </div>

    </div>
  );
}