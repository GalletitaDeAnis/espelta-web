import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espelta Web | Importadora de Partes de Autos",
  description: "Espelta: importadora de partes de autos con catálogo de repuestos, atención comercial y soporte para talleres y distribuidores.",
  openGraph: {
    title: "Espelta Web",
    description: "Importadora de partes de autos para mayoristas, talleres y comercios.",
    images: [{ url: "/images/ramon-daza-hero.png" }],
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">Espelta</p>
        <h1 className="text-4xl font-extrabold sm:text-5xl">Importadora de partes de autos</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Proyecto web inicial para presentar catálogo, líneas de productos y canales de atención comercial.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-16 md:grid-cols-3">
        <article className="rounded-xl border border-gray-200 p-6">
          <h2 className="mb-2 text-xl font-bold">Catálogo de repuestos</h2>
          <p className="text-gray-600">Organiza marcas, compatibilidades y fichas técnicas para venta mayorista y minorista.</p>
        </article>
        <article className="rounded-xl border border-gray-200 p-6">
          <h2 className="mb-2 text-xl font-bold">Atención para talleres</h2>
          <p className="text-gray-600">Canal dedicado para cotizaciones rápidas, stock y tiempos de entrega.</p>
        </article>
        <article className="rounded-xl border border-gray-200 p-6">
          <h2 className="mb-2 text-xl font-bold">Distribución confiable</h2>
          <p className="text-gray-600">Base para comunicar cobertura logística y soporte postventa de Espelta.</p>
        </article>
      </section>
    </main>
  );
}