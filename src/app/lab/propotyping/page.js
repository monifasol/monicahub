import LabShell from "@/components/lab/LabShell";
import styles from "../lab.module.css";

export const metadata = {
  title: "Propotyping · Lab",
};

export default function PropotypingPage() {
  return (
    <LabShell>
      <h1 className={styles.pageTitle}>Propotyping</h1>
      <p className={styles.pageLead}>
        Espacio para prototipos y pruebas de interfaz.
      </p>
    </LabShell>
  );
}
