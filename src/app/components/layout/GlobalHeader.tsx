import { Search } from "lucide-react";
import { FaCarSide, FaCog, FaGift, FaHome, FaUserCircle } from "react-icons/fa";
import type { IconType } from "react-icons";

const menuItems = [
  { label: "INICIO", icon: FaHome, widthClass: "min-w-[82px]" },
  { label: "SOBRE NOSOTROS", icon: FaGift, widthClass: "min-w-[132px]" },
  { label: "PRODUCTOS", icon: FaCarSide, widthClass: "min-w-[96px]" },
  { label: "REPUESTOS A PEDIDO", icon: FaCog, widthClass: "min-w-[154px]" },
  { label: "CLIENTE ESPELTA", icon: FaUserCircle, widthClass: "min-w-[126px]" },
];

const activeLabel = "INICIO";

export function GlobalHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/20 bg-gradient-to-b from-[#052488] to-[#001a6c] px-4 py-2.5 shadow-[0_6px_24px_rgba(0,12,64,0.35)]">
      <div className="mx-auto flex w-full max-w-[1480px] items-center gap-3">
        <a
          href="#"
          className="flex h-[66px] w-[74px] shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#ec2a2f] to-[#1d2e8d] text-center font-black leading-none text-white shadow-[0_6px_16px_rgba(0,0,0,0.35)]"
          aria-label="Inicio"
        >
          <span className="text-[28px] tracking-tight">MLA</span>
        </a>

        <nav className="hidden items-center lg:flex">
          {menuItems.map((item) => {
            const Icon = item.icon as IconType;
            const isActive = item.label === activeLabel;

            return (
              <a
                key={item.label}
                href="#"
                className={`group flex h-[64px] ${item.widthClass} flex-col items-center justify-center border-r border-white/35 px-3 text-center transition-all duration-200 ${
                  isActive
                    ? "bg-[#dfe4ee] text-[#00257f] shadow-[inset_0_-2px_0_#9ba8c7]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Icon
                  className={`mb-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] ${isActive ? "text-[#264aa8]" : "text-white"}`}
                  size={17}
                />
                <span className="text-[13px] font-semibold leading-none tracking-[-0.1px]">{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-4 xl:flex">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              className="h-[46px] w-[420px] rounded-md border border-white/70 bg-[#f8f9fc] px-5 pr-11 text-[16px] font-medium text-[#3a445f] shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)] outline-none placeholder:text-[#7b859f]"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#67728d]" size={19} />
          </div>

          <div className="min-w-[210px] text-right leading-tight text-white">
            <p className="whitespace-nowrap text-[12px] font-semibold text-white/85">¿Tienes alguna duda?</p>
            <div className="mt-1 flex items-center justify-end gap-1.5 whitespace-nowrap text-[32px] font-bold leading-none">
              <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#25d366] shadow-[0_2px_8px_rgba(37,211,102,0.35)]">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="fill-white">
                <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
                </svg>
              </span>
              <p className="text-[31px] tracking-[-0.3px]">(+591)70706280</p>
            </div>
          </div>

          <a
            href="#"
            className="min-w-[148px] whitespace-nowrap rounded-lg bg-gradient-to-b from-[#ff2b2b] to-[#e60912] px-7 py-3 text-[17px] font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.28)] transition hover:brightness-105"
          >
            Contactar ahora
          </a>
        </div>
      </div>
    </header>
  );
}
