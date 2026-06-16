"use client";

import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher( { language, onChange }) {
  
  const handleEnglishClick = () => {
    onChange("en");
  };

  const handleSpanishClick = () => {
    onChange("es");
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        type="button"
        className={`${styles.languageButton} ${
          language === "en" ? styles.active : ""
        }`}
        onClick={handleEnglishClick}
        disabled={language === "en"}
      >
        EN
      </button>

      <span className={styles.separator}>·</span>

      <button
        type="button"
        className={`${styles.languageButton} ${
          language === "es" ? styles.active : ""
        }`}
        onClick={handleSpanishClick}
        disabled={language === "es"}
      >
        ES
      </button>
    </div>

  );
}