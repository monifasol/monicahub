import "./globals.css"

export const metadata = {
  title: "Monica Saiz",
  description: "Bienvenida a mi casa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}