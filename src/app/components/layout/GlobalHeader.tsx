"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { FaHome, FaUsers, FaCarSide, FaUserCircle, FaWhatsapp } from "react-icons/fa";
import type { IconType } from "react-icons";

const menuItems = [
  { label: "INICIO", icon: FaHome, href: "/" },
  { label: "SOBRE NOSOTROS", icon: FaUsers, href: "/sobre-nosotros" },
  { label: "PRODUCTOS", icon: FaCarSide, href: "#" },
  { label: "CLIENTE ESPELTA", icon: FaUserCircle, href: "#" },
];

export function GlobalHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[88px] bg-header shadow-[0_8px_30px_rgba(30,64,175,0.45)] sm:h-[96px] lg:h-[110px]">
      <div className="mx-auto flex h-full w-full max-w-[1800px] items-center gap-3 px-3 sm:gap-4 sm:px-4 lg:gap-6 xl:px-8">
        
        <Link href="/" className="flex h-full shrink-0 items-center py-1 transition-transform duration-300 hover:scale-105 sm:py-1.5">
          <Image
            src="/logoEspelta.png"
            alt="Logo Espelta"
            width={160}
            height={96}
            className="h-full w-auto max-w-[130px] object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)] sm:max-w-[145px] lg:max-w-[160px]"
            priority
          />
        </Link>

        {/* Navegación - Ajustes sutiles para compensar la nueva altura */}
        <nav className="hidden h-full lg:flex items-center shrink-0">
          {menuItems.map((item, index) => {
            const Icon = item.icon as IconType;
            const isActive =
              item.href !== "#" &&
              (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)));

            return (
              <div key={item.label} className="flex h-full items-center">
                <Link
                  href={item.href}
                  className={`group flex h-full flex-col items-center justify-center px-4 xl:px-6 transition-all duration-300 min-w-[110px] relative ${
                    isActive
                      ? "bg-white text-blue-900"
                      : "text-white hover:bg-white/15"
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-primary" />
                  )}
                  
                  <Icon className={`mb-2 transition-transform duration-300 ${isActive ? "text-[28px] text-blue-900" : "text-[26px] text-white/90 group-hover:scale-110 group-hover:text-white"}`} />
                  <span className="text-[12px] xl:text-[13px] font-bold whitespace-nowrap tracking-wider uppercase">
                    {item.label}
                  </span>
                </Link>
                
                {index < menuItems.length - 1 && (
                  <div className="h-[56px] w-[1px] bg-white/25 mx-1" />
                )}
              </div>
            );
          })}
        </nav>

        <div className="group relative mx-auto hidden min-w-[240px] max-w-[520px] flex-1 xl:block">
          <input
            type="text"
            placeholder="Buscar repuestos, marcas..."
            className="h-[48px] w-full rounded-[8px] border border-white/45 bg-white pl-5 pr-12 text-[14px] font-medium text-slate-800 shadow-inner outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/35"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors duration-300 group-focus-within:text-primary" size={22} />
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-4">
          
          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="https://wa.me/59170706280" 
              target="_blank" 
              rel="noreferrer"
              className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#25d366] shadow-[0_4px_12px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_16px_rgba(37,211,102,0.5)] sm:h-[44px] sm:w-[44px]"
            >
              <FaWhatsapp className="text-[22px] text-white sm:text-[25px]" />
            </a>
            <div className="hidden whitespace-nowrap text-white xl:flex xl:flex-col xl:justify-center">
              <span className="text-[12px] text-white/70 font-medium leading-none mb-1.5 uppercase tracking-wide">¿Tienes alguna duda?</span>
              <span className="text-[15px] font-black leading-tight tracking-wide drop-shadow-sm text-white 2xl:text-[16px]">(+591) 70706280</span>
            </div>
          </div>

          <a
            href="#"
            className="hidden h-[44px] shrink-0 items-center justify-center whitespace-nowrap rounded-[6px] bg-primary px-4 text-[13px] font-bold text-white shadow-[0_4px_12px_rgba(30,64,175,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-strong hover:shadow-[0_6px_16px_rgba(30,64,175,0.4)] active:translate-y-0 active:scale-95 md:flex lg:h-[46px] lg:px-5 lg:text-[14px]"
          >
            Contactar
          </a>
        </div>
      </div>
    </header>
  );
}