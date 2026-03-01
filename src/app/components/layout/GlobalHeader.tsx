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
    // 1. Aumentamos la altura a h-[110px] y cambiamos el fondo a negro puro (bg-black)
    <header className="fixed inset-x-0 top-0 z-50 h-[110px] bg-black shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      <div className="mx-auto flex h-full w-full max-w-[1800px] items-center px-4 xl:px-8 gap-5 lg:gap-8">
        
        {/* 2. Logo - Aumentamos el max-w y reducimos un poco el padding vertical para que crezca */}
        <Link href="/" className="shrink-0 transition-transform duration-300 hover:scale-105 flex items-center h-full py-1.5">
          <Image
            src="/logoEspelta.png"
            alt="Logo Espelta"
            width={160}
            height={96}
            className="h-full w-auto max-w-[160px] object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]"
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
                      ? "bg-white text-black" // Texto negro cuando está activo (sobre fondo blanco)
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-[#e60000]" /> // Línea roja un poco más gruesa
                  )}
                  
                  <Icon className={`mb-2 transition-transform duration-300 ${isActive ? "text-[28px] text-black" : "text-[26px] text-white/90 group-hover:scale-110 group-hover:text-white"}`} />
                  <span className="text-[12px] xl:text-[13px] font-bold whitespace-nowrap tracking-wider uppercase">
                    {item.label}
                  </span>
                </Link>
                
                {index < menuItems.length - 1 && (
                  <div className="h-[56px] w-[1px] bg-white/15 mx-1" /> // Separadores un poco más altos
                )}
              </div>
            );
          })}
        </nav>

        {/* Búsqueda - Ligeramente más alta para hacer match con el nuevo header */}
        <div className="hidden md:block flex-1 min-w-[250px] max-w-[700px] mx-auto relative group">
          <input
            type="text"
            placeholder="Buscar repuestos, marcas..."
            className="h-[52px] w-full rounded-[8px] bg-[#1a1a1a] border border-white/10 pl-5 pr-12 text-[15px] font-medium text-white outline-none placeholder:text-gray-400 shadow-inner transition-all duration-300 focus:bg-white focus:text-black focus:border-[#e60000] focus:ring-2 focus:ring-[#e60000]/60"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-300 group-focus-within:text-[#e60000]" size={22} />
        </div>

        {/* Sección Derecha: Contacto y Botón */}
        <div className="flex shrink-0 items-center gap-5 xl:gap-8 ml-auto">
          
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href="https://wa.me/59170706280" 
              target="_blank" 
              rel="noreferrer"
              className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#25d366] shadow-[0_4px_12px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_16px_rgba(37,211,102,0.5)]"
            >
              <FaWhatsapp className="text-white text-[32px]" />
            </a>
            <div className="flex flex-col justify-center text-white whitespace-nowrap">
              <span className="text-[12px] text-white/70 font-medium leading-none mb-1.5 uppercase tracking-wide">¿Tienes alguna duda?</span>
              <span className="text-[19px] font-black leading-tight tracking-wide drop-shadow-sm text-white">(+591) 70706280</span>
            </div>
          </div>

          <a
            href="#"
            className="flex h-[52px] shrink-0 items-center justify-center whitespace-nowrap rounded-[6px] bg-[#e60000] px-7 xl:px-9 text-[16px] font-bold text-white shadow-[0_4px_12px_rgba(230,0,0,0.3)] transition-all duration-300 hover:bg-[#cc0000] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(230,0,0,0.4)] active:scale-95 active:translate-y-0"
          >
            Contactar ahora
          </a>
        </div>
      </div>
    </header>
  );
}