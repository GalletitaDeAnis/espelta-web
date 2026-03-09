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

      <div className="absolute inset-0 bg-gradient-to-r from-white/38 via-white/10 via-32% to-transparent to-50%" />

      <button
        type="button"
        aria-label="Slide anterior"
        className="absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-300 bg-white/80 text-slate-700 backdrop-blur-sm transition hover:bg-white hover:text-slate-900 sm:flex lg:left-4 lg:h-12 lg:w-12"
      >
        <ChevronLeft size={30} strokeWidth={1.8} />
      </button>

      <button
        type="button"
        aria-label="Siguiente slide"
        className="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-300 bg-white/80 text-slate-700 backdrop-blur-sm transition hover:bg-white hover:text-slate-900 sm:flex lg:right-4 lg:h-12 lg:w-12"
      >
        <ChevronRight size={30} strokeWidth={1.8} />
      </button>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1380px] items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-[600px] pb-2 sm:pb-4">
          <p className="mb-3 inline-flex rounded-full border border-slate-300 bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700 sm:text-[11px]">
            Importación y Repuestos
          </p>
          <h1 className="text-[1.6rem] font-extrabold uppercase leading-[1.08] tracking-tight text-slate-900 drop-shadow-[0_2px_5px_rgba(255,255,255,0.35)] sm:text-[1.95rem] lg:text-[2.8rem]">
            Busca el repuesto:
            <br />
            <span className="inline-block min-w-[9ch]">
              <TypewriterWord words={["exacto", "correcto", "ideal"]} className="text-primary" />
            </span>
            <br />
            para tu vehículo
          </h1>
          <p className="mt-3 max-w-[520px] text-[13px] font-medium leading-relaxed text-slate-700 drop-shadow-[0_1px_3px_rgba(255,255,255,0.35)] sm:text-[14px] lg:text-[15px]">
            ¿No encuentras el repuesto en el mercado local? Nosotros lo tenemos. Te lo enviamos de forma inmediata a cualquier lugar del país. Atención personalizada para
            para una mejor atención a los clientes.
          </p>
          <a
            href="#"
            className="mt-5 inline-flex rounded-md bg-primary px-5 py-2.5 text-[12px] font-bold uppercase tracking-wide text-white shadow-[0_10px_24px_rgba(30,64,175,0.35)] transition hover:bg-primary-strong sm:px-6 sm:py-2.5 sm:text-[13px] lg:px-7 lg:py-3 lg:text-[14px]"
          >
            Cotizar Repuesto
          </a>
        </div>
      </div>
    </section>
  );
}
