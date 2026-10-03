import Link from "next/link";
import LabShell from "@/components/lab/LabShell";
import LabIcon from "@/components/lab/LabIcons";
import styles from "./lab.module.css";

const EXPERIMENTS = [
  {
    href: "/lab/blablatest",
    title: "Blablatest",
    meta: "Página de ejemplo del lab.",
    icon: "blablatest",
  },
  {
    href: "/lab/seeklient",
    title: "Seeklient",
    meta: "Negocios y primer contacto, con la voz de Moni.",
    icon: "seeklient",
  },
];

export const metadata = {
  title: "Lab · Mónica Saiz",
};

export default function LabIndexPage() {
  return (
    <LabShell wide>
      <h1 className={styles.pageTitle}>Lab</h1>
      <p className={styles.pageLead}>
        Escenarios y apps de prueba. Todo lo que cuelga de /lab está
        protegido con contraseña.
      </p>
      <ul className={styles.grid}>
        {EXPERIMENTS.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={styles.tile}>
              <span className={styles.tileIcon} aria-hidden="true">
                <LabIcon name={item.icon} />
              </span>
              <span className={styles.tileTitle}>{item.title}</span>
              <span className={styles.tileMeta}>{item.meta}</span>
            </Link>
          </li>
        ))}
      </ul>
    </LabShell>
  );
}
