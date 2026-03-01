import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    images: [{
      url: "/images/ramon-daza-hero.png",
      width: 1200,
      height: 630,
      alt: "Espelta - Importadora de partes de autos",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Espelta | Importadora de partes de autos",
    description: "Catálogo de repuestos y atención para talleres y distribuidores.",
    images: ["/images/ramon-daza-hero.png"],
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
        <Script
          id="adsense-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2637677821085391"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
