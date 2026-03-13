import styles from "./Quote.module.css";

export default function Quote({
  children,
  author
}) {
  return (
    <div className={styles.quote}>
      <blockquote className={styles.blockquote}>
        {children}
      </blockquote>

      {author && (
        <span>— {author}</span>
      )}
    </div>
  );
}