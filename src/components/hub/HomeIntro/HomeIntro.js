import styles from "./HomeIntro.module.css";

export default function HomeIntro( { t }) {

  return (

    <div className={styles.wrap}>

      <p className={styles.introText} aria-label="Intro">
        {t.hub.hero.intro}
        <br />
        {t.hub.hero.interest}
      </p>

      <div className={styles.introSeparator}></div>

      <div className={styles.introWelcome}>
        {t.hub.hero.welcome}
      </div>

      <p className={styles.introText}>
        {t.hub.hero.browse}
      </p>
    </div>
  );
}