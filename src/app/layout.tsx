import type { Metadata } from "next";
import { Oswald, Lato } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-heading",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "SOTO del PRIOR | Origen y Calidad Suprema",
  description: "Antes que cocineros, somos ganaderos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Preconnect not strictly needed with Next/Font but kept for consistency if external assets load */}
      </head>
      <body
        className={`${oswald.variable} ${lato.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
