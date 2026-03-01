import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function HomeTopSection() {
  return (
    <section className="relative min-h-[700px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.56) 34%, rgba(0,0,0,0.24) 62%, rgba(0,0,0,0.34) 100%), url('https://images.unsplash.com/photo-1613214150384-a24eb4f2a5c5?auto=format&fit=crop&w=1920&q=80')",
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

      <div className="relative z-10 mx-auto flex h-[640px] w-full max-w-[1380px] items-center px-6">
        <div className="max-w-[560px] pt-5">
          <h1 className="text-[63px] font-black uppercase leading-[1.07] tracking-tight">
            Repuestos genuinos a pedido: la pieza exacta para tu vehículo
          </h1>
          <p className="mt-5 max-w-[560px] text-[39px] font-semibold leading-snug text-[#b7d41d]">
            ¿No encuentras el repuesto en el mercado local? Nosotros lo importamos por ti. Atención personalizada para
            repuestos difíciles de conseguir y accesorios.
          </p>
          <a
            href="#"
            className="mt-7 inline-flex rounded-md bg-[#f20f17] px-9 py-4 text-[30px] font-semibold text-white transition hover:bg-[#d50a11]"
          >
            Cotizar Repuesto
          </a>
        </div>
      </div>
    </section>
  );
}
