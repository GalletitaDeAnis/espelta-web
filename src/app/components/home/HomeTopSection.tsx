import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function HomeTopSection() {
  return (
    <section className="relative min-h-[640px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.5) 36%, rgba(0,0,0,0.2) 64%, rgba(0,0,0,0.32) 100%), url('/imagenHeader1.jpg')",
        }}
      />

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
        <div className="max-w-[600px] pt-4">
          <h1 className="text-4xl font-extrabold uppercase leading-[1.14] tracking-tight text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.55)] md:text-5xl">
            Repuestos genuinos a pedido: la pieza exacta para tu vehículo
          </h1>
          <p className="mt-5 max-w-[560px] text-lg font-semibold leading-relaxed text-[#d0e74c] drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)] md:text-xl">
            ¿No encuentras el repuesto en el mercado local? Nosotros lo importamos por ti. Atención personalizada para
            repuestos difíciles de conseguir y accesorios.
          </p>
          <a
            href="#"
            className="mt-7 inline-flex rounded-md bg-[#f20f17] px-7 py-3 text-lg font-semibold text-white shadow-[0_6px_16px_rgba(0,0,0,0.35)] transition hover:bg-[#d50a11]"
          >
            Cotizar Repuesto
          </a>
        </div>
      </div>
    </section>
  );
}
