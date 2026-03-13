"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import clsx from "clsx";
import useActiveSection from "./useActiveSection";

export default function Header() {
  const activeSection = useActiveSection();

  return (
    <header className={styles.header}>
      
      {/* menu Desktop */}
      <nav className={styles.menuDesktop}>
        <Link href="/">
          <div className={styles.headFacingRight}></div>
        </Link>

        <div className={styles.wrapperItemsMenu}>
          <a 
            href="#sectionHello"
            className={clsx(styles.itemMenu, activeSection === "sectionHello" && styles.active)}
            >
            Hello!
          </a>
          <a 
            href="#sectionProjects" 
            className={clsx(styles.itemMenu, activeSection === "sectionProjects" && styles.active)}
          >
            Projects UX/UI Design
          </a>
          <a 
            href="#sectionIllustration" 
            className={clsx(styles.itemMenu, activeSection === "sectionIllustration" && styles.active)}
          >
            Illustration
          </a>
          <a 
            href="#sectionWriting" 
            className={clsx(styles.itemMenu, activeSection === "sectionWriting" && styles.active)}
          >
            Writing
          </a>
        </div>
      </nav>
    </header>
  );
}