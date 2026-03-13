import { useId } from "react";
import styles from "./Wave.module.css";
import clsx from "clsx";
import "./wave.css";

export default function Wave({ 
  extraClassName = "",
  variant = "rosa", 
}) {
  const gradientId = useId();

  const colors = {
    rosa: ["#FFEFF2", "#FFF9FA", "#FFFFFF"],
    green: ["#DEFDF6", "#F2FFFB", "#FFFFFF"],
    peach: ["#FFE6D6", "#FFF0E7", "#FFFFFF"],
  };

  const stops = colors[variant];

  return (
    <svg
      className={clsx(styles.wave, extraClassName)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 782 273"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={stops[0]} />
          <stop offset="75%" stopColor={stops[1]} />
          <stop offset="100%" stopColor={stops[2]} />
        </linearGradient>
      </defs>

      <path
        fill={`url(#${gradientId})`}
        d="M0 26c104 37 201 56 291 56 135 0 155-39 273-66C643-2 716-5 782 9v264H0V26z"
      />
    </svg>
  );
}