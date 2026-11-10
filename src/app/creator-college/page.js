"use client";

import { useEffect, useState } from "react";
import "./report.css";
import { markup } from "./markup";
import { diagrams } from "./diagrams";

const VIEWS = ["mapa", "d1", "d2", "d3", "d4", "dom"];

export default function CreatorCollegePage() {
  const [view, setView] = useState("mapa");

  useEffect(() => {
    const initial = window.location.hash.replace("#", "");
    if (VIEWS.includes(initial)) setView(initial);
  }, []);

  useEffect(() => {
    const root = document.querySelector(".creator-college");
    if (!root) return;

    function onClick(event) {
      const button = event.target.closest("button[data-view]");
      if (!button || !root.contains(button)) return;
      const next = button.dataset.view;
      setView(next);
      if (window.location.hash !== "#" + next) history.replaceState(null, "", "#" + next);
    }

    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const root = document.querySelector(".creator-college");
    if (!root) return;

    root.querySelectorAll("[data-diagram]").forEach((slot) => {
      const html = diagrams[slot.dataset.diagram];
      if (html) slot.innerHTML = html;
    });
    root.querySelectorAll("section").forEach((section) => {
      section.hidden = section.id !== view;
    });
    root.querySelectorAll("nav.days button").forEach((button) => {
      if (button.dataset.view === view) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });
  });

  return (
    <div
      className="creator-college"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
