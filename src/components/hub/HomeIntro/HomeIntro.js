import styles from "./HomeIntro.module.css";

export default function HomeIntro({ t }) {
  return (
    <div className={styles.wrap}>
      <p className={styles.introWelcome}>{t.hub.hero.welcome}</p>
      <p className={styles.introText}>{t.hub.hero.intro}</p>
    </div>
  );
}
