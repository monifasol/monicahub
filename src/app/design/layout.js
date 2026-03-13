import localFont from "next/font/local";

const verona = localFont({
  src: "../../fonts/verona-serial.otf",
  variable: "--font-title",
});

const luna = localFont({
  src: "../../fonts/luna.ttf",
  variable: "--font-decorative",
});

const quattrocento = localFont({
  src: [
    {
      path: "../../fonts/quattrocento-sans-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/quattrocento-sans-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--main-font",
});

export default function DesignLayout({ children }) {
  return (
    <div className={`${verona.variable} ${luna.variable} ${quattrocento.variable}`}>
      {children}
    </div>
  );
}