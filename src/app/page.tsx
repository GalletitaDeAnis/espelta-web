import type { Metadata } from "next";
import { FeaturedCardsSection } from "./components/home/FeaturedCardsSection";
import { HomeFooterSection } from "./components/home/HomeFooterSection";
import { HomeTopSection } from "./components/home/HomeTopSection";

export const metadata: Metadata = {
  title: "Espelta | Repuestos genuinos a pedido",
  description:
    "Espelta: importadora de partes y vehículos con atención personalizada, cotizaciones rápidas y soporte comercial.",
  openGraph: {
    title: "Espelta",
    description: "Importación de repuestos y vehículos con calidad garantizada.",
    images: [{ url: "/next.svg" }],
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#ececec] text-white">
      <HomeTopSection />
      <section className="h-[130px]" aria-hidden="true" />
      <FeaturedCardsSection />
      <HomeFooterSection />
    </main>
  );
}