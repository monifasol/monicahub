import styles from "./Hero.module.css";
import clsx from "clsx";

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

        <div className={clsx(styles.letter, styles.first)}>
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
        <div className={clsx(styles.letter, styles.high)}>
          { buildLetter("t") }
        </div>
        <div className={styles.letter}>
          { buildLetter("e") }
        </div>
      </div>

      <div className={`${styles.motto} ${styles.overTheFold}`}>
        <span className={styles.mottoBgFlower}></span>
        <div className={styles.mottoText}>
          <p>Luma, if you read this: please help me finding a sentence to add here :)</p>
        </div>
        <span className={styles.mottoBgFlower}></span>
      </div>

    </div>
  );
}