"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Repuestos destacados con imágenes locales (rexternos)
const featuredParts = [
  {
    title: "FAROL DELANTERO",
    modelLabel: "Subaru Impreza",
    subtitle: "Entrega inmediata",
    price: "Bs. 1.350,00",
    image: "/images/items/rexternos/Subaru_Impreza_2008-2011_FAROL.webp",
    specs: [
      ["Marca", "Subaru"],
      ["Modelo", "Impreza 2008-2011"],
      ["Categoría", "Iluminación"],
      ["Estado", "Nuevo - Original"],
    ],
  },
  {
    title: "RETROVISOR EXTERNO",
    modelLabel: "Toyota Noah",
    subtitle: "Entrega inmediata",
    price: "Bs. 680,00",
    image: "/images/items/rexternos/Toyota_Noah_1996-1998_RETROVISOR.webp",
    specs: [
      ["Marca", "Toyota"],
      ["Modelo", "Noah 1996-1998"],
      ["Categoría", "Carrocería"],
      ["Estado", "Nuevo - Original"],
    ],
  },
  {
    title: "LUZ DE STOP",
    modelLabel: "Toyota Corolla",
    subtitle: "Pocas unidades",
    price: "Bs. 420,00",
    image: "/images/items/rexternos/Toyota_Corolla_2017_STOP.webp",
    specs: [
      ["Marca", "Toyota"],
      ["Modelo", "Corolla 2017"],
      ["Categoría", "Iluminación"],
      ["Estado", "Nuevo - Original"],
    ],
  },
  {
    title: "FAROL DELANTERO",
    modelLabel: "Suzuki Jimmy",
    subtitle: "A pedido (10 días)",
    price: "Bs. 1.180,00",
    image: "/images/items/rexternos/Suzuki_Jimmy_1995-2018_FAROL.webp",
    specs: [
      ["Marca", "Suzuki"],
      ["Modelo", "Jimmy 1995-2018"],
      ["Categoría", "Iluminación"],
      ["Estado", "Nuevo - Original"],
    ],
  },
];

export function FeaturedCardsSection() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section className="bg-white py-16 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1400px]">
        
        {/* ENCABEZADO DE LA SECCIÓN (Basado en la imagen, pero modernizado) */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-[28px] font-black uppercase tracking-tight text-slate-900 sm:text-[36px]">
              REPUESTOS DESTACADOS
            </h2>
            <p className="mt-2 text-[15px] font-medium text-slate-600">
              Contamos con una gran variedad de piezas y repuestos para diferentes marcas. Calidad garantizada para la máxima exigencia.
            </p>
          </div>
          <a
            href="/productos"
            className="group flex shrink-0 items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:bg-primary-strong hover:shadow-[0_4px_20px_rgba(30,64,175,0.35)] active:scale-95"
          >
            Ver todos los repuestos
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* GRILLA DE TARJETAS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredParts.map((part) => (
            <article 
              key={part.image} 
              className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/45 hover:shadow-[0_15px_35px_rgba(30,64,175,0.15)]"
            >
              {/* Contenedor de Imagen con Efecto Hover */}
              <div className="relative h-[220px] w-full overflow-hidden bg-slate-50">
                <Image
                  src={failedImages[part.image] ? "/imagenHeader1.jpg" : part.image}
                  alt={`${part.title} - ${part.specs.find(([l]) => l === "Modelo")?.[1] ?? ""}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  onError={() => {
                    setFailedImages((previous) => ({ ...previous, [part.image]: true }));
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300" />
                
                {/* Etiqueta de Precio integrada en la imagen */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="rounded bg-primary px-2 py-1 text-[12px] font-bold text-white shadow-md">PRECIO</span>
                  <p className="text-[22px] font-black text-white drop-shadow-md">{part.price}</p>
                </div>
              </div>

              {/* Cuerpo de la Tarjeta */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="line-clamp-2 text-[17px] font-extrabold uppercase tracking-wide text-slate-900">
                  {part.modelLabel ? `${part.title} (${part.modelLabel})` : part.title}
                </h3>
                <p className={`mt-1 text-[13px] font-semibold uppercase tracking-wider ${
                  part.subtitle.includes("A pedido") ? "text-primary" : 
                  part.subtitle.includes("Pocas") ? "text-amber-600" : 
                  "text-[#25d366]"
                }`}>
                  {part.subtitle}
                </p>

                <div className="mt-5 flex-1 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                  {part.specs.map(([label, value], index) => (
                    <div 
                      key={`${part.image}-${label}`} 
                      className={`flex justify-between px-3 py-2 text-[13px] ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
                    >
                      <span className="font-medium text-slate-500">{label}</span>
                      <span className="font-bold text-slate-700 text-right max-w-[60%] truncate" title={value}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Línea roja inferior de adorno en hover */}
              <div className="absolute bottom-0 h-1 w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}