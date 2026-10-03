const base = {
  width: 64,
  height: 64,
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
};

const stroke = {
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function IconBlablatest(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path
        {...stroke}
        d="M12 22.5c0-5.5 5.4-10 12-10h6c6.6 0 12 4.5 12 10s-5.4 10-12 10h-3.2L22 38.5V32.2c-6 0-10-4.3-10-9.7Z"
      />
      <path
        {...stroke}
        d="M34 34.5c.8 5.2 5.8 9 12.2 9H49L54 50v-5.5c4.4-.8 7.5-4.4 7.5-8.8 0-4.2-2.6-7.7-6.4-9"
      />
    </svg>
  );
}

function IconSeeklient(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle {...stroke} cx="27" cy="27" r="12.5" />
      <path {...stroke} d="M36.5 36.5 50 50" />
      <circle {...stroke} cx="27" cy="24.5" r="4.2" />
      <path {...stroke} d="M20.2 35.2c1.6-3.2 4.1-5 6.8-5s5.2 1.8 6.8 5" />
    </svg>
  );
}

const ICONS = {
  blablatest: IconBlablatest,
  seeklient: IconSeeklient,
};

export default function LabIcon({ name, className }) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}
