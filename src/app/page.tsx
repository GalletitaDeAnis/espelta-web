import type { Metadata } from "next";

// BUENA PRÁCTICA: Ordenar los imports en el mismo orden que el layout visual
import {
  FeaturedCardsSection,
  HomeCategoryBridge,
  HomeFaqSection,
  HomeTopSection,
  SparePartsBrandsSection,
} from "./components/home";
import { SiteFooterSection } from "./components/layout";

export const metadata: Metadata = {
  title: "Espelta | Repuestos genuinos a pedido",
  description: "Espelta: importadora de partes y vehículos con atención personalizada, cotizaciones rápidas y soporte comercial.",
  openGraph: {
    title: "Espelta",
    description: "Importación de repuestos y vehículos con calidad garantizada.",
    images: [{ url: "/next.svg" }],
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <HomeTopSection />
      <HomeCategoryBridge />
      <FeaturedCardsSection />
      <SparePartsBrandsSection />
      <HomeFaqSection />
      <SiteFooterSection />
    </main>
  );
}