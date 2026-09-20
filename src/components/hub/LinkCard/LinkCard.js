import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import styles from "./LinkCard.module.css";

export default function LinkCard({
  title,
  description,
  href,
  illustration,
  featured = false,
  glimpseImages,
  glimpseQuote,
  glimpsePulse = false,
  glimpseStamp = "square",
}) {
  const external = /^https?:\/\//.test(href);
  const hasGlimpse = Boolean(
    glimpseImages?.length || glimpseQuote || glimpsePulse
  );

  return (
    <Link
      href={href}
      className={clsx(styles.card, featured && styles.featured)}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
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

        {hasGlimpse && (
          <div className={styles.glimpse} aria-hidden="true">
            <div className={styles.glimpseInner}>
              {glimpseImages?.length ? (
                <div className={styles.stamps}>
                  {glimpseImages.map((src) => (
                    <span
                      key={src}
                      className={clsx(
                        styles.stamp,
                        glimpseStamp === "book" && styles.stampBook
                      )}
                    >
                      <Image
                        src={src}
                        alt=""
                        width={48}
                        height={48}
                      />
                    </span>
                  ))}
                </div>
              ) : null}

              {glimpseQuote ? (
                <p className={styles.glimpseQuote}>{glimpseQuote}</p>
              ) : null}

              {glimpsePulse ? (
                <div className={styles.pulse}>
                  <span />
                  <span />
                  <span />
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
