import { Car, Home, Settings } from "lucide-react";

const quickCards = [
  { label: "VEHÍCULOS", icon: Car },
  { label: "REPUESTOS", icon: Settings },
  { label: "INMUEBLES", icon: Home },
];

export function HomeCategoryBridge() {
  return (
    <section className="relative z-30 -mt-[82px] mb-12">
      <div className="mx-auto flex w-full max-w-[1380px] justify-center px-6">
        <div className="flex gap-4 rounded-3xl border border-white/25 bg-white/10 px-4 py-4 shadow-[0_18px_35px_rgba(0,0,0,0.22)] backdrop-blur-sm">
          {quickCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.label}
                href="#"
                className="flex h-[188px] w-[206px] flex-col items-center justify-center rounded-2xl border border-[#d8deef] bg-white text-[#0a2c97] shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(0,0,0,0.24)]"
              >
                <Icon size={68} strokeWidth={2.1} />
                <span className="mt-5 text-[30px] font-extrabold tracking-tight">{card.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
