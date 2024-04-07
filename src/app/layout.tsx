import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ weight: ['300', '400', '700', '900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supermarket Simulator - Shop",
  description: "e-comerce inspirado en la sección de compra del juego Supermarket Simulator. NextJs - Zustand -TypeScript - Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
