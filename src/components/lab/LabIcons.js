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

function IconPropotyping(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect {...stroke} x="12" y="10" width="28" height="36" rx="4" />
      <rect {...stroke} x="24" y="18" width="28" height="36" rx="4" />
      <path {...stroke} d="M30 28h16M30 36h11" />
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
  propotyping: IconPropotyping,
  seeklient: IconSeeklient,
};

export default function LabIcon({ name, className }) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}
