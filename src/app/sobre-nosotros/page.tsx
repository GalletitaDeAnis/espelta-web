import type { Metadata } from "next";
import { AboutVideoSection, AboutWhyChooseUsSection } from "../components/about";
import { SiteFooterSection } from "../components/layout";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce a Espelta: experiencia en importación de repuestos, soporte técnico y atención personalizada.",
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="bg-black px-4 pb-10 pt-16 sm:px-6">
        <div className="mx-auto w-full max-w-[1200px]">
          <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/85">
            Sobre Nosotros
          </p>
          <h1 className="mt-5 text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Experiencia y respaldo para tu vehículo
          </h1>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-white/65 sm:text-base">
            En Espelta nos especializamos en importación de repuestos y atención personalizada para clientes particulares,
            talleres y empresas. Nuestro enfoque combina asesoría técnica, disponibilidad real y tiempos de respuesta ágiles.
          </p>
        </div>
      </section>

      <AboutWhyChooseUsSection />
      <AboutVideoSection />
      <SiteFooterSection />
    </main>
  );
}
