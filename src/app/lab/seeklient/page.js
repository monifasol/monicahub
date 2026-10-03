import LabShell from "@/components/lab/LabShell";
import styles from "../lab.module.css";

export const metadata = {
  title: "Seeklient · Lab",
};

export default function SeeklientPage() {
  return (
    <LabShell>
      <h1 className={styles.pageTitle}>Seeklient</h1>
      <p className={styles.pageLead}>
        En producción MonicaHub reescribe esta ruta hacia Seeklient
        (<code>SEEKLIENT_ORIGIN</code>). En local, sin esa variable, ves este
        aviso.
      </p>
    </LabShell>
  );
}
