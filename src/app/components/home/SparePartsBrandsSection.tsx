import { ArrowRight } from "lucide-react";

// 1. Agregamos la propiedad 'brandLogo' a nuestra base de datos simulada.
// Deja tus logos (ej: toyota.png) en la carpeta public/logos/
const featuredParts = [
  {
    title: "FAROS LED DELANTEROS",
    subtitle: "Entrega inmediata",
    price: "Bs. 1.250,00",
    image: "https://images.unsplash.com/photo-1550058145-a90a18711ce6?auto=format&fit=crop&w=600&q=80",
    brandLogo: "/logos/toyota.png", // <- RUTA DE TU LOGO AQUÍ
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
    brandLogo: "/logos/nissan.png", // <- RUTA DE TU LOGO AQUÍ
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
    brandLogo: "/logos/universal.png", // <- RUTA DE TU LOGO AQUÍ
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
    brandLogo: "/logos/suzuki.png", // <- RUTA DE TU LOGO AQUÍ
    specs: [
      ["Marca", "Suzuki"],
      ["Modelo", "Vitara / Grand Nomad"],
      ["Categoría", "Transmisión"],
      ["Estado", "Nuevo - Original"],
    ],
  },
];

export function FeaturedPartsSection() {
  return (
    <section className="bg-black py-16 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1400px]">
        
        {/* ENCABEZADO */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-[28px] font-black uppercase tracking-tight text-white sm:text-[36px]">
              REPUESTOS DESTACADOS
            </h2>
            <p className="mt-2 text-[15px] font-medium text-white/60">
              Contamos con una gran variedad de piezas y repuestos para diferentes marcas. Calidad garantizada para la máxima exigencia.
            </p>
          </div>
          <a
            href="#"
            className="group flex shrink-0 items-center gap-2 rounded-md bg-[#e60000] px-6 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#cc0000] hover:shadow-[0_4px_20px_rgba(230,0,0,0.4)] active:scale-95"
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
              className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#e60000]/60 hover:shadow-[0_15px_35px_rgba(230,0,0,0.2)]"
            >
              <div className="relative h-[220px] w-full overflow-hidden bg-[#1a1a1a]">
                <img 
                  src={part.image} 
                  alt={part.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300" />
                
                {/* ---------- NUEVO: INSIGNIA DE LA MARCA ---------- */}
                {/* Se posiciona de forma absoluta en la esquina superior derecha */}
                <div className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 p-2 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={part.brandLogo} 
                    alt={`Logo de ${part.specs[0][1]}`} 
                    className="h-full w-full object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    // Si la imagen no carga, mostramos un fallback (útil mientras subes tus logos)
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {/* Pequeño tooltip nativo al pasar el mouse */}
                  <span className="sr-only">Marca: {part.specs[0][1]}</span>
                </div>
                {/* ------------------------------------------------- */}
                
                {/* Etiqueta de Precio */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="rounded bg-[#e60000] px-2 py-1 text-[12px] font-bold text-white shadow-md">PRECIO</span>
                  <p className="text-[22px] font-black text-white drop-shadow-md">{part.price}</p>
                </div>
              </div>

              {/* Cuerpo de la Tarjeta */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="line-clamp-1 text-[17px] font-extrabold uppercase tracking-wide text-white">
                  {part.title}
                </h3>
                <p className={`mt-1 text-[13px] font-semibold uppercase tracking-wider ${part.subtitle.includes("A pedido") ? "text-[#e60000]" : "text-[#25d366]"}`}>
                  {part.subtitle}
                </p>

                {/* Tabla de Especificaciones */}
                <div className="mt-5 flex-1 overflow-hidden rounded-lg border border-white/5 bg-[#141414]">
                  {part.specs.map(([label, value], index) => (
                    <div 
                      key={`${part.title}-${label}`} 
                      className={`flex justify-between px-3 py-2 text-[13px] ${index % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'}`}
                    >
                      <span className="font-medium text-white/50">{label}</span>
                      <span className="font-bold text-white/90 text-right max-w-[60%] truncate" title={value}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 h-1 w-0 bg-[#e60000] transition-all duration-500 ease-out group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const SparePartsBrandsSection = FeaturedPartsSection;