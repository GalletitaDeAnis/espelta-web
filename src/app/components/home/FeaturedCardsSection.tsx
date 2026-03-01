import Image from "next/image";

const featuredCards = [
  {
    title: "ELEGANTE DEPARTAMENTO EN ALQUILER",
    price: "Bs.5.500,00",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1100&q=80",
    rows: [
      ["Dormitorios", "3"],
      ["Tipo de inmueble", "Departamentos"],
      ["Ciudad", "Cochabamba"],
      ["Zona", "Queru Queru"],
    ],
  },
  {
    title: "HERMOSO PENTHOUSE EN ALQUILER",
    price: "Bs.11.000,00",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1100&q=80",
    rows: [
      ["Dormitorios", "6"],
      ["Tipo de inmueble", "Departamentos"],
      ["Ciudad", "Cochabamba"],
      ["Zona", "Sarcobamba"],
    ],
  },
  {
    title: "MONOAMBIENTE AMOBLADO Y EQUIPADO",
    price: "Bs.3.400,00",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1100&q=80",
    rows: [
      ["Dormitorios", "1"],
      ["Tipo de inmueble", "Monoambiente"],
      ["Ciudad", "Cochabamba"],
      ["Zona", "Queru Queru"],
    ],
  },
];

export function FeaturedCardsSection() {
  return (
    <section className="mx-auto w-full max-w-[1040px] px-5 pb-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {featuredCards.map((card) => (
          <article key={card.title} className="overflow-hidden border border-[#cfcfcf] bg-[#efefef] text-[#11387c]">
            <div className="relative h-[215px]">
              <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <p className="absolute bottom-3 left-3 text-[36px] font-bold text-white">{card.price}</p>
            </div>
            <div className="px-3 pb-3 pt-2">
              <h3 className="truncate text-[25px] font-extrabold uppercase">{card.title}</h3>
              <div className="mt-3 overflow-hidden border border-[#d8d8d8]">
                {card.rows.map(([label, value]) => (
                  <div key={`${card.title}-${label}`} className="grid grid-cols-[1fr_1fr] text-[23px] even:bg-[#e6e6e6]">
                    <p className="px-2 py-1 font-bold text-[#222]">{label}</p>
                    <p className="px-2 py-1 text-[#444]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
