import styles from "./BoxDescription.module.css";
import Image from "next/image";

export default function BoxDescription({
  title, 
  variant,
  image = "",
  imageAlt = "",
  imageWidth = 0,
  imageHeight = 0,
  children
}) {
  return (
      <div className={`${styles.boxDescription} ${variant}`}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>
          {image && (
            <Image src={image} alt={imageAlt} width={imageWidth} height={imageHeight} />
          )}
          <div>
            {children}
          </div>
        </p>
      </div>
  );
}