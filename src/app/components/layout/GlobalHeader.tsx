import { Building2, Car, Cog, Home, Search, Users } from "lucide-react";

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

        <div className="ml-auto hidden items-center gap-4 xl:flex">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              className="h-[46px] w-[410px] rounded-md bg-white px-5 pr-11 text-[30px] text-gray-600 outline-none"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>

          <div className="min-w-[190px] text-right text-sm font-semibold leading-tight text-white">
            <p className="whitespace-nowrap text-white/85">¿Tienes alguna duda?</p>
            <div className="mt-0.5 flex items-center justify-end gap-1.5 whitespace-nowrap">
              <span className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#25d366]">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="fill-white">
                <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
                </svg>
              </span>
              <p>(+591)70706280</p>
            </div>
          </div>

          <a
            href="#"
            className="min-w-[126px] whitespace-nowrap rounded-lg bg-[#f20f17] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#d50a11]"
          >
            Contactar ahora
          </a>
        </div>
      </div>
    </header>
  );
}
