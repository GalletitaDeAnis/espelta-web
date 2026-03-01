import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GlobalHeader } from "./components/layout/GlobalHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://espelta-web.com"),
  title: {
    template: "%s | Espelta",
    default: "Espelta | Importadora de partes de autos",
  },
  description: "Sitio oficial de Espelta, importadora de partes de autos.",
  keywords: ["Espelta", "partes de autos", "repuestos", "importadora", "autopartes"],
  authors: [{ name: "Espelta" }],
  openGraph: {
    type: "website",
    locale: "es",
    url: "https://espelta-web.com",
    title: "Espelta | Importadora de partes de autos",
    description: "Catálogo de repuestos, atención comercial y distribución confiable.",
    siteName: "Espelta",
    images: [{ url: "/next.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Espelta | Importadora de partes de autos",
    description: "Catálogo de repuestos y atención para talleres y distribuidores.",
    images: ["/next.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalHeader />
        <div className="pt-[112px]">{children}</div>
      </body>
    </html>
  );
}
