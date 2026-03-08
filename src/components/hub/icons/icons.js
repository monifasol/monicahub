// src/components/icons/icons.js
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
};

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const spark = {
  stroke: "var(--accent)",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconTech(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path {...stroke} d="M5 7.5h14M7 6h0.01M9 6h0.01" />
      <path {...stroke} d="M6.5 16.5l3-3-3-3" />
      <path {...stroke} d="M11.5 16.5h4" />
      {/* poetic spark */}
      <path {...spark} d="M19.2 13.2h1.6M20 12.4v1.6" />
      <path {...spark} d="M5.5 7.5v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-10" />
    </svg>
  );
}

export function IconVecina(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path {...stroke} d="M4.5 11.2L12 5.5l7.5 5.7" />
      <path {...stroke} d="M7.2 10.8v8.2h9.6v-8.2" />
      <path {...stroke} d="M10.3 19v-4.2a1.7 1.7 0 0 1 3.4 0V19" />
      {/* tiny heart window */}
      <path {...spark} d="M16.2 12.8c.35-.45 1.1-.4 1.4.1.3.5.15 1.1-.2 1.5-.45.55-1.2 1-1.2 1s-.75-.45-1.2-1c-.35-.4-.5-1-.2-1.5.3-.5 1.05-.55 1.4-.1Z" />
    </svg>
  );
}

export function IconWriting(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path {...stroke} d="M7 20h10" />
      <path {...stroke} d="M8.5 17.5l9.2-9.2a2 2 0 0 0-2.8-2.8L5.7 14.7 5 19l4.3-.7Z" />
      {/* tiny sparkle */}
      <path {...spark} d="M18.6 5.4h1.6M19.4 4.6v1.6" />
    </svg>
  );
}

export function IconMusic(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path {...stroke} d="M14 4v10.2a2.4 2.4 0 1 1-1.7-2.3V6.2l7-2.2v8.9a2.4 2.4 0 1 1-1.7-2.3V3.9" />
      {/* tiny pulse dot */}
      <path {...spark} d="M6.3 13.2c.9-1.2 2.3-2 3.9-2.1" />
      <path {...spark} d="M6.2 16.6h0.01" />
    </svg>
  );
}

export function IconBrillaBooks(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path {...stroke} d="M7 5.5h9a2 2 0 0 1 2 2V19H9a2 2 0 0 0-2 2V5.5Z" />
      <path {...stroke} d="M7 19h9a2 2 0 0 1 2 2" />
      {/* tiny star */}
      <path {...spark} d="M12.8 9.2l.5 1.2 1.3.1-1 .8.3 1.3-1.1-.7-1.1.7.3-1.3-1-.8 1.3-.1.5-1.2Z" />
    </svg>
  );
}

export function IconPhoto(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path {...stroke} d="M7.5 7.5h2l1-1.6h3l1 1.6h2A2.5 2.5 0 0 1 19 10v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 17v-7A2.5 2.5 0 0 1 7.5 7.5Z" />
      <path {...stroke} d="M12 16.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      {/* tiny sun spark */}
      <path {...spark} d="M18.8 8.2h0.01" />
    </svg>
  );
}

export function IconSelfCare(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path {...stroke} d="M7 19h10" />
      <path {...stroke} d="M8 18c0-5.4 1.8-9.8 4-12 2.2 2.2 4 6.6 4 12" />
      <path {...stroke} d="M9.4 12.2c.7.7 1.6 1.1 2.6 1.1s1.9-.4 2.6-1.1" />
      {/* tiny leaf */}
      <path {...spark} d="M6.4 14.6c.9 0 1.7.4 2.3 1.1-.7.3-1.5.5-2.3.5-.9 0-1.7-.2-2.4-.6.6-.6 1.5-1 2.4-1Z" />
    </svg>
  );
}

export function IconContact(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path {...stroke} d="M5.5 7.5h13A2.5 2.5 0 0 1 21 10v7A2.5 2.5 0 0 1 18.5 19.5h-13A2.5 2.5 0 0 1 3 17v-7A2.5 2.5 0 0 1 5.5 7.5Z" />
      <path {...stroke} d="M5.5 10l6.5 4.7L18.5 10" />
      {/* tiny spark seal */}
      <path {...spark} d="M16.8 16.2h1.6M17.6 15.4v1.6" />
    </svg>
  );
}