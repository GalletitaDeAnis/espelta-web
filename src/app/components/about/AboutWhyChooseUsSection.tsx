import { Headset, PackageCheck, ShieldCheck, Truck } from "lucide-react";

const benefits = [
  {
    title: "Entrega rápida",
    description:
      "Gestionamos pedidos con tiempos claros y seguimiento para que tu repuesto llegue sin demoras.",
    icon: Truck,
  },
  {
    title: "Stock real",
    description:
      "Publicamos disponibilidad validada para evitar cotizaciones falsas o productos sin existencia.",
    icon: PackageCheck,
  },
  {
    title: "Garantía",
    description:
      "Trabajamos con repuestos originales y alternativos de alta calidad con respaldo postventa.",
    icon: ShieldCheck,
  },
  {
    title: "Soporte técnico",
    description:
      "Te ayudamos a confirmar compatibilidad por marca, modelo y versión antes de comprar.",
    icon: Headset,
  },
];

export function AboutWhyChooseUsSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-[28px] font-black uppercase tracking-tight text-slate-900 sm:text-[36px]">
            POR QUÉ ELEGIRNOS
          </h2>
          <p className="mt-2 text-[15px] font-medium text-slate-600">
            Beneficios concretos para cotizar mejor, comprar con confianza y recibir justo el repuesto que necesitas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[0_14px_28px_rgba(30,64,175,0.15)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-primary">
                  <Icon size={24} strokeWidth={1.9} />
                </div>
                <h3 className="text-[18px] font-extrabold uppercase tracking-wide text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
