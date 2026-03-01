import type { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  Car,
  ChevronLeft,
  ChevronRight,
  Cog,
  Clock3,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Settings,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Espelta | Repuestos genuinos a pedido",
  description:
    "Espelta: importadora de partes y vehículos con atención personalizada, cotizaciones rápidas y soporte comercial.",
  openGraph: {
    title: "Espelta",
    description: "Importación de repuestos y vehículos con calidad garantizada.",
    images: [{ url: "/next.svg" }],
    type: "website",
  },
};

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

const featuredCards = [
  {
    title: "ELEGANTE DEPARTAMENTO EN ALQUILER",
    price: "Bs.5.500,00",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1100&q=80",
    rows: [
      ["Dormitorios", "3"],
      ["Tipo de inmueble", "Departamentos"],
      ["Ciudad", "Cochabamba"],
      ["Zona", "Queru Queru"],
    ],
  },
  {
    title: "HERMOSO PENTHOUSE EN ALQUILER",
    price: "Bs.11.000,00",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1100&q=80",
    rows: [
      ["Dormitorios", "6"],
      ["Tipo de inmueble", "Departamentos"],
      ["Ciudad", "Cochabamba"],
      ["Zona", "Sarcobamba"],
    ],
  },
  {
    title: "MONOAMBIENTE AMOBLADO Y EQUIPADO",
    price: "Bs.3.400,00",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1100&q=80",
    rows: [
      ["Dormitorios", "1"],
      ["Tipo de inmueble", "Monoambiente"],
      ["Ciudad", "Cochabamba"],
      ["Zona", "Queru Queru"],
    ],
  },
];

const navPills = [
  "Sobre nosotros",
  "Vehículos",
  "Importación de vehículos",
  "Inmuebles",
  "Repuestos a Pedido",
  "Blog",
  "Contacto",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#ececec] text-white">
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
              ¿No encuentras el repuesto en el mercado local? Nosotros lo importamos por ti. Atención personalizada para repuestos difíciles de conseguir y accesorios.
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

      <section className="h-[130px]" aria-hidden="true" />

      <section className="mx-auto w-full max-w-[1040px] px-5 pb-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredCards.map((card) => (
            <article key={card.title} className="overflow-hidden border border-[#cfcfcf] bg-[#efefef] text-[#11387c]">
              <div className="relative h-[215px]">
                <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <p className="absolute bottom-3 left-3 text-[36px] font-bold text-white">{card.price}</p>
              </div>
              <div className="px-3 pb-3 pt-2">
                <h3 className="truncate text-[25px] font-extrabold uppercase">{card.title}</h3>
                <div className="mt-3 overflow-hidden border border-[#d8d8d8]">
                  {card.rows.map(([label, value]) => (
                    <div key={`${card.title}-${label}`} className="grid grid-cols-[1fr_1fr] text-[23px] even:bg-[#e6e6e6]">
                      <p className="px-2 py-1 font-bold text-[#222]">{label}</p>
                      <p className="px-2 py-1 text-[#444]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#c9c9c9] bg-[#ebebeb] py-12">
        <div className="mx-auto grid w-full max-w-[1040px] gap-10 px-5 text-[#1f1f1f] md:grid-cols-[1.2fr_1.2fr_1fr]">
          <div>
            <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-gradient-to-b from-[#df1116] to-[#001d7a] text-[24px] font-black text-white">
              MLA
            </div>
            <p className="mt-4 max-w-[360px] text-[38px] leading-snug text-[#2b2b2b]">
              Desarrollar y fortalecer una operación eficiente y confiable de importación de vehículos, ofreciendo un portafolio competitivo que responda a las necesidades del mercado, asegurando altos estándares de calidad, servicio y responsabilidad empresarial.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1d5ce5] px-4 py-2 text-[24px] font-semibold text-white"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-white" />
              Facebook
            </a>
          </div>

          <div className="rounded-2xl bg-[#dbe0f7] p-6 text-[#1b2853]">
            <h3 className="text-[37px] font-extrabold uppercase text-[#0f3d91]">CONTACTO</h3>
            <div className="mt-4 space-y-4 text-[33px] leading-snug">
              <p className="flex items-start gap-3"><Mail size={22} className="mt-1" /> contacto@espelta.com</p>
              <p className="flex items-start gap-3"><Phone size={22} className="mt-1" /> (+591) 70555556 - (+591) 67404445 - (+591) 70350744</p>
              <p className="flex items-start gap-3"><MapPin size={22} className="mt-1" /> Calle Araona Esquina Siriono Zona Villa Galindo, Cochabamba, Bolivia</p>
              <p className="flex items-start gap-3"><Clock3 size={22} className="mt-1" /> Lunes a viernes de 9:00 a 18:30 y los sábados de 9:00 a 16:00</p>
            </div>
          </div>

          <div>
            <h3 className="text-[37px] font-extrabold uppercase text-[#0f3d91]">NAVEGACIÓN</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {navPills.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="rounded-full border border-[#2950a8] px-3 py-1 text-[31px] text-[#2950a8]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}