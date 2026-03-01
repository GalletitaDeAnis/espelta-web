import { Building2, Car, Cog, Home, MessageCircle, Search, Users } from "lucide-react";

const menuItems = [
  { label: "INICIO", icon: Home },
  { label: "SOBRE NOSOTROS", icon: Users },
  { label: "VEHÍCULOS", icon: Car },
  { label: "IMPORTACIÓN DE VEHÍCULOS", icon: Car },
  { label: "INMUEBLES", icon: Building2 },
  { label: "REPUESTOS A PEDIDO", icon: Cog },
];

export function GlobalHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/15 bg-[#001d75] px-4 py-2.5 shadow-lg">
      <div className="mx-auto flex w-full max-w-[1480px] items-center gap-2.5">
        <a
          href="#"
          className="flex h-[64px] w-[72px] shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#df1116] to-[#001d7a] text-center font-black leading-none text-white"
          aria-label="Inicio"
        >
          <span className="text-[20px] tracking-tight">MLA</span>
        </a>

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
              className="h-[46px] w-[420px] rounded-md bg-white px-5 pr-11 text-[30px] text-gray-600 outline-none"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>

          <div className="text-right text-sm font-semibold leading-tight text-white">
            <p className="text-white/85">¿Tienes alguna duda?</p>
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
    </header>
  );
}
