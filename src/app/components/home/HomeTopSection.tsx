import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { TypewriterWord } from "./TypewriterWord";

export function HomeTopSection() {
  return (
    <section className="relative min-h-[780px] overflow-hidden">
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
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white/80 backdrop-blur-sm transition hover:bg-black/35 hover:text-white"
      >
        <ChevronLeft size={30} strokeWidth={1.8} />
      </button>

      <button
        type="button"
        aria-label="Siguiente slide"
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white/80 backdrop-blur-sm transition hover:bg-black/35 hover:text-white"
      >
        <ChevronRight size={30} strokeWidth={1.8} />
      </button>

      <div className="relative z-10 mx-auto flex h-[740px] w-full max-w-[1380px] items-center px-6">
        <div className="max-w-[650px]">
          <p className="mb-4 inline-flex rounded-full border border-white/30 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
            Importación y Repuestos
          </p>
          <h1 className="text-4xl font-extrabold uppercase leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.55)] md:text-5xl">
            Repuestos genuinos a pedido: la pieza
            <br />
            <span className="inline-block min-w-[9ch]">
              <TypewriterWord words={["exacta", "correcta", "ideal"]} className="text-[#ff2d2d]" />
            </span>
            <br />
            para tu vehículo
          </h1>
          <p className="mt-5 max-w-[560px] text-base font-medium leading-relaxed text-[#e3ef93] drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)] md:text-lg">
            ¿No encuentras el repuesto en el mercado local? Nosotros lo importamos por ti. Atención personalizada para
            repuestos difíciles de conseguir y accesorios.
          </p>
          <a
            href="#"
            className="mt-7 inline-flex rounded-md bg-gradient-to-b from-[#ff2d2d] to-[#d80b13] px-7 py-3 text-base font-bold uppercase tracking-wide text-white shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition hover:brightness-110"
          >
            Cotizar Repuesto
          </a>
        </div>
      </div>
    </section>
  );
}
