import LabShell from "@/components/lab/LabShell";
import styles from "../lab.module.css";

export const metadata = {
  title: "Blablatest · Lab",
};

export default function BlablaTestPage() {
  return (
    <LabShell>
      <h1 className={styles.pageTitle}>Blablatest</h1>
      <p className={styles.pageLead}>
        Si estás viendo esto tras el login, el gate de /lab funciona. Sustituye
        o duplica esta carpeta para tus pruebas personales.
      </p>
    </LabShell>
  );
}
