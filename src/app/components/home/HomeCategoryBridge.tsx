import { Car, Home, Settings } from "lucide-react";

const quickCards = [
  { label: "VEHÍCULOS", icon: Car },
  { label: "REPUESTOS", icon: Settings },
  { label: "INMUEBLES", icon: Home },
];

export function HomeCategoryBridge() {
  return (
    <section className="relative z-30 -mt-[75px] bg-gradient-to-b from-transparent via-white/85 to-white px-4 pb-10">
      <div className="mx-auto flex w-full max-w-[1200px] justify-center">
        
        {/* Aumenté ligeramente el espacio (gap) entre tarjetas para que respiren mejor al ser más grandes */}
        <div className="flex flex-wrap justify-center gap-5 lg:gap-8">
          
          {quickCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.label}
                href="#"
                className="group relative flex h-[160px] w-[180px] flex-col items-center justify-center overflow-hidden rounded-[20px] border-2 border-slate-200 bg-white text-slate-900 shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_12px_24px_rgba(30,64,175,0.2)] sm:h-[180px] sm:w-[210px]"
              >
                <Icon 
                  size={48} 
                  strokeWidth={1.5} 
                  className="mb-4 text-slate-700 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" 
                />

                <span className="text-[14px] font-bold tracking-[0.15em] uppercase text-slate-700 transition-colors duration-300 group-hover:text-slate-900 sm:text-[15px]">
                  {card.label}
                </span>

                <div className="absolute bottom-0 h-1.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}