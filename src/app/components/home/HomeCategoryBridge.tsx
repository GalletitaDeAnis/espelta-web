import { Car, Home, Settings } from "lucide-react";

const quickCards = [
  { label: "VEHÍCULOS", icon: Car },
  { label: "REPUESTOS", icon: Settings },
  { label: "INMUEBLES", icon: Home },
];

export function HomeCategoryBridge() {
  return (
    <section className="relative z-30 -mt-[75px] bg-gradient-to-b from-transparent via-black/80 to-black px-4 pb-10">
      <div className="mx-auto flex w-full max-w-[1200px] justify-center">
        
        {/* Aumenté ligeramente el espacio (gap) entre tarjetas para que respiren mejor al ser más grandes */}
        <div className="flex flex-wrap justify-center gap-5 lg:gap-8">
          
          {quickCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.label}
                href="#"
                // TARJETA INDIVIDUAL (Mejoras aplicadas):
                // 1. Tamaño: Aumentado a h-[160px] w-[180px] en móvil y h-[180px] w-[210px] en escritorio.
                // 2. Fondo: bg-[#0d0d0d] (Un gris oscuro casi negro, 100% sólido y elegante).
                // 3. Borde: border-2 border-white/20 (Línea más gruesa y con mayor opacidad para que se note claramente).
                className="group relative flex h-[160px] w-[180px] flex-col items-center justify-center overflow-hidden rounded-[20px] border-2 border-white/20 bg-[#0d0d0d] text-white shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#e60000]/70 hover:shadow-[0_15px_30px_rgba(230,0,0,0.3)] sm:h-[180px] sm:w-[210px]"
              >
                {/* Ícono: Escalado de 40 a 48, con un trazo ligeramente más definido */}
                <Icon 
                  size={48} 
                  strokeWidth={1.5} 
                  className="mb-4 text-white/90 transition-all duration-300 group-hover:scale-110 group-hover:text-[#e60000]" 
                />

                {/* Texto: Aumentado a 14px (15px en pantallas grandes) manteniendo el tracking ancho */}
                <span className="text-[14px] font-bold tracking-[0.15em] uppercase text-white/90 transition-colors duration-300 group-hover:text-white sm:text-[15px]">
                  {card.label}
                </span>

                {/* Detalle UI: La línea indicadora roja inferior ahora es un poco más gruesa (h-1.5) para hacer match con los bordes */}
                <div className="absolute bottom-0 h-1.5 w-0 bg-[#e60000] transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}