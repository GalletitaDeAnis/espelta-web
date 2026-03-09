"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Datos de ejemplo adaptados a repuestos de vehículos
const featuredParts = [
  {
    title: "FAROS LED DELANTEROS",
    subtitle: "Entrega inmediata",
    price: "Bs. 1.250,00",
    image: "https://images.unsplash.com/photo-1550058145-a90a18711ce6?auto=format&fit=crop&w=600&q=80",
    specs: [
      ["Marca", "Toyota"],
      ["Modelo", "Hilux 2021-2023"],
      ["Categoría", "Iluminación"],
      ["Estado", "Nuevo - Original"],
    ],
  },
  {
    title: "AMORTIGUADORES TRASEROS",
    subtitle: "A pedido (15 días)",
    price: "Bs. 850,00",
    image: "https://images.unsplash.com/photo-1620619878953-29a1a4de1e3f?auto=format&fit=crop&w=600&q=80",
    specs: [
      ["Marca", "Nissan"],
      ["Modelo", "Frontier NP300"],
      ["Categoría", "Suspensión"],
      ["Estado", "Nuevo - OEM"],
    ],
  },
  {
    title: "FILTRO DE AIRE ALTO FLUJO",
    subtitle: "Entrega inmediata",
    price: "Bs. 320,00",
    image: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&w=600&q=80",
    specs: [
      ["Marca", "Universal"],
      ["Modelo", "Adaptable"],
      ["Categoría", "Motor / Rendimiento"],
      ["Estado", "Nuevo"],
    ],
  },
  {
    title: "KIT DE EMBRAGUE COMPLETO",
    subtitle: "Pocas unidades",
    price: "Bs. 2.100,00",
    image: "https://images.unsplash.com/photo-1530906358829-e84b2769270f?auto=format&fit=crop&w=600&q=80",
    specs: [
      ["Marca", "Suzuki"],
      ["Modelo", "Vitara / Grand Nomad"],
      ["Categoría", "Transmisión"],
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
            href="#"
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
              key={part.title} 
              className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/45 hover:shadow-[0_15px_35px_rgba(30,64,175,0.15)]"
            >
              {/* Contenedor de Imagen con Efecto Hover */}
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src={failedImages[part.title] ? "/imagenHeader1.jpg" : part.image}
                  alt={part.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={() => {
                    setFailedImages((previous) => ({ ...previous, [part.title]: true }));
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300" />
                
                {/* Etiqueta de Precio integrada en la imagen */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="rounded bg-primary px-2 py-1 text-[12px] font-bold text-white shadow-md">PRECIO</span>
                  <p className="text-[22px] font-black text-white drop-shadow-md">{part.price}</p>
                </div>
              </div>

              {/* Cuerpo de la Tarjeta */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="line-clamp-1 text-[17px] font-extrabold uppercase tracking-wide text-slate-900">
                  {part.title}
                </h3>
                <p className={`mt-1 text-[13px] font-semibold uppercase tracking-wider ${part.subtitle.includes("A pedido") ? "text-primary" : "text-[#25d366]"}`}>
                  {part.subtitle}
                </p>

                <div className="mt-5 flex-1 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                  {part.specs.map(([label, value], index) => (
                    <div 
                      key={`${part.title}-${label}`} 
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