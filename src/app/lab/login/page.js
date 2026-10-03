import { Suspense } from "react";
import LoginForm from "@/components/lab/LoginForm";
import styles from "../lab.module.css";

export const metadata = {
  title: "Entrar · Lab",
};

export default function LabLoginPage() {
  return (
    <div className={styles.loginWrap}>
      <div className={styles.loginCard}>
        <p className={styles.loginEyebrow}>Privado</p>
        <h1 className={styles.loginTitle}>Lab</h1>
        <p className={styles.loginLead}>
          Pruebas y mini apps solo para ti.
        </p>
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
