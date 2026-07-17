import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import styles from "./LinkCard.module.css";

export default function LinkCard({
  title,
  description,
  href,
  target,
  rel,
  illustration,
  featured = false,
}) {
  return (
    <Link
      href={href}
      className={clsx(styles.card, featured && styles.featured)}
      target={target}
      rel={rel}
    >
      {illustration && (
        <div className={styles.illustration}>
          <Image
            src={illustration}
            alt=""
            width={120}
            height={120}
            priority={false}
          />
        </div>
      )}

      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
    </Link>
  );
}
