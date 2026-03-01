import {
  Building2,
  Car,
  ChevronLeft,
  ChevronRight,
  Cog,
  Home,
  MessageCircle,
  Search,
  Settings,
  Users,
} from "lucide-react";

const menuItems = [
  { label: "INICIO", icon: Home },
  { label: "SOBRE NOSOTROS", icon: Users },
  { label: "VEHÍCULOS", icon: Car },
  { label: "IMPORTACIÓN DE VEHÍCULOS", icon: Car },
  { label: "INMUEBLES", icon: Building2 },
  { label: "REPUESTOS A PEDIDO", icon: Cog },
];

const quickCards = [
  { label: "VEHÍCULOS", icon: Car },
  { label: "REPUESTOS", icon: Settings },
  { label: "INMUEBLES", icon: Home },
];

export function HomeTopSection() {
  return (
    <section className="relative min-h-[760px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.56) 34%, rgba(0,0,0,0.24) 62%, rgba(0,0,0,0.34) 100%), url('https://images.unsplash.com/photo-1613214150384-a24eb4f2a5c5?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      <div className="relative z-20 bg-[#001d75] px-4 py-3 shadow-lg">
        <div className="mx-auto flex w-full max-w-[1380px] items-center gap-3">
          <div className="flex h-[62px] w-[72px] items-center justify-center rounded-full bg-gradient-to-b from-[#df1116] to-[#001d7a] text-center font-black leading-none">
            <span className="text-[20px] tracking-tight">MLA</span>
          </div>

          <nav className="hidden items-center lg:flex">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isFirst = index === 0;
              return (
                <a
                  key={item.label}
                  href="#"
                  className={`flex h-[58px] items-center gap-2 border-r border-white/30 px-3 text-[13px] font-bold ${
                    isFirst ? "bg-white text-[#001d75]" : "text-white"
                  }`}
                >
                  <Icon size={17} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="ml-auto hidden items-center gap-3 xl:flex">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="h-[48px] w-[430px] rounded-md bg-white px-5 pr-11 text-[35px] text-gray-600 outline-none"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            </div>
            <div className="text-right text-sm font-semibold leading-tight">
              <p className="text-white/80">¿Tienes alguna duda?</p>
              <div className="flex items-center justify-end gap-1">
                <MessageCircle size={16} className="text-[#24d366]" />
                <p>(+591)67404445</p>
              </div>
              <div className="flex items-center justify-end gap-1">
                <MessageCircle size={16} className="text-[#24d366]" />
                <p>(+591)70555556</p>
              </div>
            </div>
            <a
              href="#"
              className="rounded-lg bg-[#f20f17] px-7 py-3 text-base font-semibold text-white transition hover:bg-[#d50a11]"
            >
              Contactar ahora
            </a>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Slide anterior"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 text-white/80 hover:text-white"
      >
        <ChevronLeft size={36} strokeWidth={1.4} />
      </button>

      <button
        type="button"
        aria-label="Siguiente slide"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 text-white/80 hover:text-white"
      >
        <ChevronRight size={36} strokeWidth={1.4} />
      </button>

      <div className="relative z-10 mx-auto flex h-[610px] w-full max-w-[1380px] items-center px-6">
        <div className="max-w-[560px] pt-5">
          <h1 className="text-[63px] font-black uppercase leading-[1.07] tracking-tight">
            Repuestos genuinos a pedido: la pieza exacta para tu vehículo
          </h1>
          <p className="mt-5 max-w-[560px] text-[39px] font-semibold leading-snug text-[#b7d41d]">
            ¿No encuentras el repuesto en el mercado local? Nosotros lo importamos por ti. Atención personalizada para
            repuestos difíciles de conseguir y accesorios.
          </p>
          <a
            href="#"
            className="mt-7 inline-flex rounded-md bg-[#f20f17] px-9 py-4 text-[30px] font-semibold text-white transition hover:bg-[#d50a11]"
          >
            Cotizar Repuesto
          </a>
        </div>
      </div>

      <div className="absolute bottom-[-56px] left-1/2 z-30 flex -translate-x-1/2 gap-3">
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
    </section>
  );
}
