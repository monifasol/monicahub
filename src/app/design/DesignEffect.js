"use client";

import { useEffect, useState } from "react";

export default function DesignEffects({ onScrollChange }) {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      const shouldShowArrow = window.scrollY > 300;

      onScrollChange?.(scrolled);
      setShowArrow(shouldShowArrow);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScrollChange]);

  return showArrow ? (
    <a href="#sectionHello" className="arrowUp" aria-label="Back to top">
      ↑
    </a>
  ) : null;
}