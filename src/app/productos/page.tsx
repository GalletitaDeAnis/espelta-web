import type { Metadata } from "next";
import { ProductosContent } from "./ProductosContent";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Catálogo de repuestos para vehículos. Filtrá por marca, modelo, año y encontrá lo que necesitás.",
};

export default function ProductosPage() {
  return <ProductosContent />;
}
