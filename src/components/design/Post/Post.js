import Link from "next/link";
import Image from "next/image";
import styles from "./Post.module.css";

export default function Post({
  href,
  imageSrc,
  imageAlt,
  title,
  subtitle,
  target = "_blank",
  rel = "noopener noreferrer",
  className = "",
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${styles.post} ${styles.aButton} ${className}`.trim()}
    >
      <div className={styles.imgWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          width={800}
          height={500}
          className={styles.image}
        />
      </div>

      <div className={styles.textWrapper}>
        <p className={styles.postTitle}>
          {title}
        </p>
        <p className={styles.postSubtitle}>
          {subtitle}
        </p>
      </div>
    </Link>
  );
}
