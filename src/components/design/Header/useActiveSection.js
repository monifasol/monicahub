
"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "sectionHello",
  "sectionProjects",
  "sectionIllustration",
  "sectionWriting",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("sectionHello");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (!visibleEntries.length) return;

        const mostVisible = visibleEntries.reduce((prev, current) =>
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );

        setActiveSection(mostVisible.target.id);
      },
      {
        threshold: [0.1, 0.25, 0.5, 0.75],
        rootMargin: "-20% 0px -45% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}



// Previous approach from Luma:

// import { useEffect, useState } from "react";

// const sectionIds = [
//   "sectionHello",
//   "sectionProjects",
//   "sectionIllustration",
//   "sectionWriting",
// ];

// export function useActiveSection() {
//   const [activeSection, setActiveSection] = useState("sectionHello");

//   useEffect(() => {
//     const observers = [];

//     sectionIds.forEach((id) => {
//       const element = document.getElementById(id);
//       if (!element) return;

//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setActiveSection(id);
//           }
//         },
//         {
//           rootMargin: "-35% 0px -45% 0px",
//           threshold: 0.1,
//         }
//       );

//       observer.observe(element);
//       observers.push(observer);
//     });

//     return () => observers.forEach((observer) => observer.disconnect());
//   }, []);

//   return activeSection;
// }

