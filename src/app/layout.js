
// app/layout.tsx
import { Inter, Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-fraunces",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
});


export const metadata = {
  title: "Monica Saiz",
  description: "Bienvenida a mi casa.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${fraunces.variable} ${instrumentSans.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}