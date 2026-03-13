import Link from "next/link";
import styles from "./PostText.module.css";
import clsx from "clsx";

export default function PostText({
  href,
  title,
  subtitle,
  publication,
  target = "_blank",
  rel = "noopener noreferrer",
  className = "",
}) {
  return (
    <div className={clsx(styles.post, className)}>
      <div className={styles.textWrapper}>
        <Link
          href={href}
          target={target}
          rel={rel}
          className={styles.postTitle}
        >
          {title}
        </Link>

        {subtitle && (
          <p className={styles.postSubtitle}>{subtitle}</p>
        )}
      </div>

      {publication && (
        <p className={styles.postPublication}>
          {publication}
        </p>
      )}
    </div>
  );
}