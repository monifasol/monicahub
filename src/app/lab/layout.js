import styles from "./lab.module.css";

export const metadata = {
  title: "Lab · Mónica Saiz",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function LabLayout({ children }) {
  return <div className={styles.root}>{children}</div>;
}
