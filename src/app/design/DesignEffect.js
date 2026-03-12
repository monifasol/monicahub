"use client";

import { useEffect, useState } from "react";

export default function DesignEffects() {
  const [showArrow, setShowArrow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowArrow(y > 200);
      setIsScrolled(y > 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}

// OR

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

  if (!showArrow) return null;

  return (
    <a href="#sectionHello" className="arrowUp" aria-label="Back to top">
      ↑
    </a>
  );
}