import { Wrench } from "lucide-react";

const sparePartsBrands = [
  "Toyota",
  "Suzuki",
  "Mitsubishi",
  "Jeep",
  "Subaru",
  "Hyundai",
  "Nissan",
  "Kia",
];

export function SparePartsBrandsSection() {
  return (
    <section className="bg-[#f4f5f7] py-14 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e60000] text-white shadow-[0_6px_20px_rgba(230,0,0,0.25)]">
            <Wrench size={18} strokeWidth={2.2} />
          </span>
          <h2 className="text-[28px] font-black uppercase tracking-tight text-[#0e3f86] sm:text-[36px]">
            Marcas de repuestos
          </h2>
        </div>

        <p className="mb-8 max-w-[760px] text-[15px] font-medium text-[#233247]/70 sm:text-base">
          Trabajamos con repuestos para las marcas más solicitadas en el mercado. Cotizamos piezas originales,
          alternativas OEM y opciones a pedido según modelo y año.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
          {sparePartsBrands.map((brand) => (
            <article
              key={brand}
              className="group flex h-[130px] items-center justify-center rounded-xl border border-[#d9dee7] bg-white px-3 text-center shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e60000]/50 hover:shadow-[0_10px_24px_rgba(230,0,0,0.14)]"
            >
              <span className="text-[18px] font-extrabold uppercase tracking-wide text-[#1a2433] transition-colors duration-300 group-hover:text-[#e60000]">
                {brand}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
