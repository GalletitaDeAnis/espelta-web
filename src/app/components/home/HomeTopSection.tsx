import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { TypewriterWord } from "./TypewriterWord";

export function HomeTopSection() {
  return (
    <section className="relative overflow-hidden h-[calc(100svh-88px-108px)] min-h-[470px] sm:h-[calc(100svh-96px-114px)] sm:min-h-[510px] lg:h-[calc(100svh-110px-128px)] lg:min-h-[560px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/imagenHeader1.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/58" />

      <button
        type="button"
        aria-label="Slide anterior"
        className="absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white/80 backdrop-blur-sm transition hover:bg-black/35 hover:text-white sm:flex lg:left-4 lg:h-12 lg:w-12"
      >
        <ChevronLeft size={30} strokeWidth={1.8} />
      </button>

      <button
        type="button"
        aria-label="Siguiente slide"
        className="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white/80 backdrop-blur-sm transition hover:bg-black/35 hover:text-white sm:flex lg:right-4 lg:h-12 lg:w-12"
      >
        <ChevronRight size={30} strokeWidth={1.8} />
      </button>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1380px] items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-[600px] pb-2 sm:pb-4">
          <p className="mb-3 inline-flex rounded-full border border-white/30 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 sm:text-[11px]">
            Importación y Repuestos
          </p>
          <h1 className="text-[1.6rem] font-extrabold uppercase leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.55)] sm:text-[1.95rem] lg:text-[2.8rem]">
            Repuestos genuinos a pedido: la pieza
            <br />
            <span className="inline-block min-w-[9ch]">
              <TypewriterWord words={["exacta", "correcta", "ideal"]} className="text-[#ff2d2d]" />
            </span>
            <br />
            para tu vehículo
          </h1>
          <p className="mt-3 max-w-[520px] text-[13px] font-medium leading-relaxed text-[#e3ef93] drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)] sm:text-[14px] lg:text-[15px]">
            ¿No encuentras el repuesto en el mercado local? Nosotros lo importamos por ti. Atención personalizada para
            repuestos difíciles de conseguir y accesorios.
          </p>
          <a
            href="#"
            className="mt-5 inline-flex rounded-md bg-gradient-to-b from-[#ff2d2d] to-[#d80b13] px-5 py-2.5 text-[12px] font-bold uppercase tracking-wide text-white shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition hover:brightness-110 sm:px-6 sm:py-2.5 sm:text-[13px] lg:px-7 lg:py-3 lg:text-[14px]"
          >
            Cotizar Repuesto
          </a>
        </div>
      </div>
    </section>
  );
}
