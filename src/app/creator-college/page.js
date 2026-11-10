"use client";

import { useEffect } from "react";
import "./report.css";
import { markup } from "./markup";
import { diagrams } from "./diagrams";

export default function CreatorCollegePage() {
  useEffect(() => {
    const root = document.querySelector(".creator-college");
    if (!root) return;

    root.querySelectorAll("[data-diagram]").forEach((slot) => {
      const html = diagrams[slot.dataset.diagram];
      if (html) slot.innerHTML = html;
    });

    const buttons = root.querySelectorAll("nav.days button");
    const sections = root.querySelectorAll("section");

    function show(id) {
      sections.forEach((section) => {
        section.hidden = section.id !== id;
      });
      buttons.forEach((button) => {
        if (button.dataset.view === id) button.setAttribute("aria-current", "true");
        else button.removeAttribute("aria-current");
      });
      const next = "#" + id;
      if (window.location.hash !== next) history.replaceState(null, "", next);
    }

    function onClick(event) {
      const button = event.target.closest("button[data-view]");
      if (!button || !root.contains(button)) return;
      show(button.dataset.view);
    }

    root.addEventListener("click", onClick);
    const initial = window.location.hash.replace("#", "");
    if ([...buttons].some((button) => button.dataset.view === initial)) show(initial);

    return () => root.removeEventListener("click", onClick);
  }, []);

  return (
    <div
      className="creator-college"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
