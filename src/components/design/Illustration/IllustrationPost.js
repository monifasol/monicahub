import Link from "next/link";
import clsx from "clsx";
import styles from "./Illustration.module.css";

export default function IllustrationPost({
  href,
  imageSrc,
  alt
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.wrapperIllus}
    >
      <img
        src={imageSrc}
        alt={alt}
      />
    </Link>
  );
}