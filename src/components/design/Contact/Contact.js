import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <p> Contact me in: </p>
      <p className={styles.contactMean}> moni.sm@gmail.com </p>
    </section>
  );
}