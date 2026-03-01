import { Car, Home, Settings } from "lucide-react";

const quickCards = [
  { label: "VEHÍCULOS", icon: Car },
  { label: "REPUESTOS", icon: Settings },
  { label: "INMUEBLES", icon: Home },
];

export function HomeCategoryBridge() {
  return (
    <section className="relative z-30 -mt-[68px] mb-10">
      <div className="mx-auto flex w-full max-w-[1380px] justify-center px-6">
        <div className="flex gap-3">
          {quickCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.label}
                href="#"
                className="flex h-[188px] w-[206px] flex-col items-center justify-center rounded-2xl bg-white text-[#0a2c97] shadow-[0_14px_34px_rgba(0,0,0,0.24)]"
              >
                <Icon size={72} strokeWidth={2.1} />
                <span className="mt-6 text-[31px] font-extrabold">{card.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
